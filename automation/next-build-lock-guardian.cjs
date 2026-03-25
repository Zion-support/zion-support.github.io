#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = process.cwd();
const LOCK_PATH = path.join(ROOT, '.next', 'lock');
const REPORT_DIR = path.join(ROOT, 'automation', 'reports');
const REPORT_PATH = path.join(REPORT_DIR, 'next-build-lock-guardian-latest.json');
const MODE = process.argv.includes('--check') ? 'check' : 'heal';
const INCLUDE_DEV = String(process.env.NEXT_BUILD_LOCK_GUARD_INCLUDE_DEV || '').trim() === '1';
const KILL_DEV = String(process.env.NEXT_BUILD_LOCK_GUARD_KILL_DEV || '').trim() === '1';

function run(command) {
  return execSync(command, { cwd: ROOT, encoding: 'utf8' }).trim();
}

function listNextBuildPids() {
  try {
    const output = run('ps -Ao pid,ppid,command');
    if (!output) return [];
    return output
      .split('\n')
      .map((line) => line.trim().replace(/\s+/g, ' '))
      .filter(Boolean)
      .filter((line) => {
        if (line.includes('next build --webpack')) return true;
        if (INCLUDE_DEV && line.includes('next dev')) return true;
        return false;
      })
      .map((line) => {
        const [pidRaw, ppidRaw] = line.split(' ');
        return { pid: Number(pidRaw), ppid: Number(ppidRaw) };
      })
      .filter((item) => Number.isFinite(item.pid));
  } catch {
    return [];
  }
}

function listNextDevPids() {
  if (!INCLUDE_DEV) return [];
  try {
    const output = run('ps -Ao pid,ppid,command');
    if (!output) return [];
    return output
      .split('\n')
      .map((line) => line.trim().replace(/\s+/g, ' '))
      .filter(Boolean)
      .filter((line) => line.includes('next dev'))
      .map((line) => {
        const [pidRaw, ppidRaw] = line.split(' ');
        return { pid: Number(pidRaw), ppid: Number(ppidRaw) };
      })
      .filter((item) => Number.isFinite(item.pid));
  } catch {
    return [];
  }
}

function killPid(pid) {
  try {
    run(`kill ${pid}`);
    return true;
  } catch {
    return false;
  }
}

function main() {
  fs.mkdirSync(REPORT_DIR, { recursive: true });

  const pids = listNextBuildPids();
  const devPids = listNextDevPids();
  const lockExists = fs.existsSync(LOCK_PATH);
  const killed = [];
  let lockRemoved = false;

  if (MODE === 'heal') {
    for (const proc of pids) {
      if (killPid(proc.pid)) killed.push(proc.pid);
      if (Number.isFinite(proc.ppid)) killPid(proc.ppid);
    }
    if (KILL_DEV) {
      for (const proc of devPids) {
        if (killPid(proc.pid)) killed.push(proc.pid);
        if (Number.isFinite(proc.ppid)) killPid(proc.ppid);
      }
    }
    if (lockExists) {
      try {
        fs.unlinkSync(LOCK_PATH);
        lockRemoved = true;
      } catch {
        lockRemoved = false;
      }
    }
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    mode: MODE,
    includeDev: INCLUDE_DEV,
    killDev: KILL_DEV,
    lockExistsBefore: lockExists,
    nextBuildProcessCount: pids.length,
    nextDevProcessCount: devPids.length,
    killedPids: killed,
    lockRemoved,
    status: lockExists || pids.length > 0 ? (MODE === 'heal' ? 'healed' : 'warning') : 'ok',
  };

  fs.writeFileSync(REPORT_PATH, JSON.stringify(payload, null, 2));
  console.log(`Next build lock guardian report: ${REPORT_PATH}`);
  console.log(`Status: ${payload.status}`);

  if (MODE === 'check' && payload.status === 'warning') {
    process.exitCode = 1;
  }
}

main();
