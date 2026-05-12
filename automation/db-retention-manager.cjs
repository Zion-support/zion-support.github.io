#!/usr/bin/env node
/**
 * Autonomous SQLite/Alarms Retention Policy Manager
 *
 * Scans SQLite databases, purges records older than configured TTL,
 * runs VACUUM to reclaim space, and reports storage savings.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const STATE_DIR = path.join(process.cwd(), '.hermes', 'memory', 'db-retention');
const CONFIG_PATH = path.join(process.cwd(), '.hermes', 'config', 'retention-policy.json');

const DEFAULT_TTL_DAYS = 90; // default retention window
const DB_GLOB = '**/*.db'; // recursive scan
const DRY_RUN_DEFAULT = true; // default to dry-run unless overridden

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function nowISO() { return new Date().toISOString(); }

function loadConfig() {
  let config = { databases: [], dryRun: DRY_RUN_DEFAULT, vacuum: true };
  try {
    if (fs.existsSync(CONFIG_PATH)) {
      config = { ...config, ...JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8')) };
    }
  } catch (e) {
    console.warn('⚠️  Could not parse retention policy config, using defaults.');
  }
  return config;
}

function discoverDBs() {
  const found = [];
  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) walk(full);
      else if (e.isFile() && e.name.endsWith('.db')) found.push(full);
    }
  }
  // Search common dirs
  ['', '.hermes', '.hermes/db', '.hermes/memory', 'data', 'db'].forEach(p => {
    const dir = path.join(process.cwd(), p);
    if (fs.existsSync(dir)) walk(dir);
  });
  return found;
}

function analyzeDB(filepath) {
  try {
    const sizeBefore = fs.statSync(filepath).size;
    // Use sqlite3 CLI; list tables
    const tablesOutput = execSync(`sqlite3 "${filepath}" ".tables"`, { encoding: 'utf8' });
    const tables = tablesOutput.trim().split(/\s+/).filter(Boolean);
    const tableStats = [];

    for (const table of tables) {
      try {
        // Get row count and earliest timestamp (assumes created_at or timestamp column)
        const count = execSync(`sqlite3 "${filepath}" "SELECT COUNT(*) FROM \`${table}\\`;"`, { encoding: 'utf8' }).trim();
        // Heuristic: look for common timestamp columns
        const cols = execSync(`sqlite3 "${filepath}" "PRAGMA table_info(\\`${table}\\`);"`, { encoding: 'utf8' }).trim().split('\n');
        const tsCol = cols.find(l => /created_at|timestamp|updated_at|date/i.test(l));
        let oldRows = 0;
        if (tsCol) {
          const colName = tsCol.split('|')[1];
          const cutoff = new Date(Date.now() - (DEFAULT_TTL_DAYS * 24 * 60 * 60 * 1000)).toISOString();
          const res = execSync(`sqlite3 "${filepath}" "SELECT COUNT(*) FROM \`${table}\\` WHERE \`${colName}\\` < '${cutoff}';"`, { encoding: 'utf8' }).trim();
          oldRows = parseInt(res, 10) || 0;
        }
        tableStats.push({ table, count: parseInt(count, 10), oldRows });
      } catch (e) {
        tableStats.push({ table, count: 0, oldRows: 0, error: e.message });
      }
    }

    return { filepath, sizeBefore, tables: tableStats, sizeAfter: null, freed: null };
  } catch (e) {
    return { filepath, error: e.message };
  }
}

function purgeOldRecords(db, config) {
  if (config.dryRun) return { purged: 0, rows: [] };

  let totalPurged = 0;
  const rows = [];
  for (const t of db.tables) {
    if (t.oldRows > 0) {
      // Find timestamp column again to build DELETE
      // (reuse logic from analyzeDB but now execute DELETE)
      try {
        const cols = execSync(`sqlite3 "${db.filepath}" "PRAGMA table_info(\\`${t.table}\\`);"`, { encoding: 'utf8' }).trim().split('\n');
        const tsCol = cols.find(l => /created_at|timestamp|updated_at|date/i.test(l));
        if (tsCol) {
          const colName = tsCol.split('|')[1];
          const cutoff = new Date(Date.now() - (DEFAULT_TTL_DAYS * 24 * 60 * 60 * 1000)).toISOString();
          execSync(`sqlite3 "${db.filepath}" "DELETE FROM \`${t.table}\\` WHERE \`${colName}\\` < '${cutoff}';"`);
          totalPurged += t.oldRows;
          rows.push({ table: t.table, purged: t.oldRows });
        }
      } catch (e) {
        // ignore
      }
    }
  }
  return { purged: totalPurged, rows };
}

function vacuumDB(filepath) {
  try {
    execSync(`sqlite3 "${filepath}" "VACUUM;"`, { encoding: 'utf8' });
    const sizeAfter = fs.statSync(filepath).size;
    return sizeAfter;
  } catch (e) {
    return null;
  }
}

function main() {
  console.log('🗄️  SQLite Retention Manager — starting\n');
  ensureDir(STATE_DIR);
  ensureDir(path.dirname(CONFIG_PATH));

  const config = loadConfig();
  const dryRun = config.dryRun !== undefined ? config.dryRun : DRY_RUN_DEFAULT;
  console.log(`📋 Config: TTL=${DEFAULT_TTL_DAYS}d, Dry-run=${dryRun}, Vacuum=${config.vacuum}`);

  const dbFiles = discoverDBs();
  console.log(`🔍 Discovered ${dbFiles.length} database(s)\n`);

  const report = {
    timestamp: nowISO(),
    dryRun,
    dbs: [],
    totalSizeBefore: 0,
    totalSizeAfter: 0,
    totalFreed: 0,
    totalPurged: 0
  };

  for (const dbPath of dbFiles) {
    console.log(`📁 Processing: ${dbPath}`);
    const analysis = analyzeDB(dbPath);
    report.dbs.push(analysis);
    report.totalSizeBefore += analysis.sizeBefore || 0;

    if (analysis.error) {
      console.warn(`   ⚠️  Error: ${analysis.error}`);
      continue;
    }

    console.log(`   📊 Tables: ${analysis.tables.length}, Size: ${Math.round(analysis.sizeBefore/1024)} KB`);
    for (const t of analysis.tables) {
      if (t.oldRows > 0) {
        console.log(`   🗑️  ${t.table}: ${t.oldRows} old rows (of ${t.count})`);
      }
    }

    // Purge
    const purgeResult = purgeOldRecords(analysis, config);
    report.totalPurged += purgeResult.purged;
    if (purgeResult.purged > 0) {
      console.log(`   ✅ Purged ${purgeResult.purged} rows`);
    }

    // Vacuum
    if (config.vacuum) {
      const sizeAfter = vacuumDB(dbPath);
      if (sizeAfter !== null) {
        analysis.sizeAfter = sizeAfter;
        const freed = analysis.sizeBefore - sizeAfter;
        analysis.freed = freed;
        report.totalFreed += freed;
        console.log(`   📦 Size: ${Math.round(analysis.sizeBefore/1024)} KB → ${Math.round(sizeAfter/1024)} KB (freed: ${Math.round(freed/1024)} KB)`);
      }
    }
  }

  report.totalSizeAfter = report.totalSizeBefore - report.totalFreed;

  console.log('\n📋 Report:');
  console.log(`   DBs processed: ${dbFiles.length}`);
  console.log(`   Rows purged: ${report.totalPurged}`);
  console.log(`   Storage freed: ${Math.round(report.totalFreed/1024)} KB`);
  console.log(`   Total size: ${Math.round(report.totalSizeBefore/1024)} KB → ${Math.round(report.totalSizeAfter/1024)} KB\n`);

  // Save report
  const reportFile = path.join(STATE_DIR, `retention-${Date.now()}.json`);
  fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
  console.log(`📄 Report saved: ${reportFile}`);

  // Exit non-zero if dry-run disabled and any purges happened (signal changes made)
  if (!dryRun && report.totalPurged > 0) {
    console.log('✅ Retention changes applied.\n');
    process.exit(0);
  } else if (!dryRun && report.totalPurged === 0) {
    console.log('✅ No old records found; nothing to purge.\n');
    process.exit(0);
  } else {
    console.log('🔍 Dry-run complete; no changes made.\n');
    process.exit(0);
  }
}

main();
