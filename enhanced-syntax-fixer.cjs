<<<<<<< HEAD
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Starting enhanced syntax fixer...');

// Fix the v1.ts file structure - more comprehensive fix
function fixV1ApiDocs() {
  const filePath = '/workspace/data/api-docs/v1.ts';
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the structure by properly closing all brackets
    content = content.replace(
      /versions: \['v1'\]\}\]\}\]\s*\]\s*\};/,
      "versions: ['v1']}]}]\n    }\n  ]\n};"
    );
    
    fs.writeFileSync(filePath, content);
    console.log('✅ Fixed v1.ts structure');
  } catch (error) {
    console.log('⚠️ Could not fix v1.ts:', error.message);
  }
}

// Fix partner update file
function fixPartnerUpdate() {
  const filePath = '/workspace/pages/api/admin/partners/update.ts';
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix syntax errors
    content = content.replace(
      /const supabase = getServerSupabase\(\),/,
      "const supabase = getServerSupabase();"
    );
    
    content = content.replace(
      /const updates: any = \{\},/,
      "const updates: any = {};"
    );
    
    fs.writeFileSync(filePath, content);
    console.log('✅ Fixed partner update syntax');
  } catch (error) {
    console.log('⚠️ Could not fix partner update:', error.message);
  }
=======
#!/usr/bin/env node;
const fs = require("fs");
const path = require("path");
class $1 {;
  constructor() {;
  this.projectRoot = process.cwd();
    this.fixedFiles = [];,
}

  log(message) {;
  console.log(`[${new Date().toISOString()}] ${message}`);,
}

  getAllFiles(dir, extensions = [".js", ".cjs", ".mjs"]) {;
  let files = [];
    const items = fs.readdirSync(dir);
    for (const item of items) {;
  const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {;
  files = files.concat(this.getAllFiles(fullPath, extensions));,
} else if (extensions.some(ext => item.endsWith(ext))) {;
  files.push(fullPath);,
}
    }

    return files;,
}

  fixImportStatements(content) {;
  // Fix incomplete import statements;
    const importFixes = [;
  { pattern: /import fs from;/g, replacement: "import fs from "fs";" },
      {;
  pattern: /import path from;/g,
        replacement: "import path from "path";",,,
},
      {;
  pattern: /import { execSync } from;/g,
        replacement: "import { execSync  } from "child_process";",,,
},
      {;
  pattern: /import axios from;/g,
        replacement: "import axios from "axios";",,,
},
      {;
  pattern: /import http from;/g,
        replacement: "import http from "http";",,,
},
      {;
  pattern: /import https from;/g,
        replacement: "import https from "https";",,,
},
      {;
  pattern: /import { fileURLToPath } from;/g,
        replacement: "import { fileURLToPath  } from "url";",,,
},
      {;
  pattern: /import { dirname } from;/g,
        replacement: "import { dirname  } from "path";",,,
},
      { pattern: /import os from;/g, replacement: "import os from "os";" },
      {;
  pattern: /import crypto from;/g,
        replacement: "import crypto from "crypto";",,,
},
      { pattern: /import url from;/g, replacement: "import url from "url";" },
      {;
  pattern: /import util from;/g,
        replacement: "import util from "util";",,,
},
      {;
  pattern: /import stream from;/g,
        replacement: "import stream from "stream";",,,
},
      {;
  pattern: /import zlib from;/g,
        replacement: "import zlib from "zlib";",,,
},
      {;
  pattern: /import cluster from;/g,
        replacement: "import cluster from "cluster";",,,
},
      {;
  pattern: /import worker_threads from;/g,
        replacement: "import worker_threads from "worker_threads";",,,
},
      {;
  pattern: /import perf_hooks from;/g,
        replacement: "import perf_hooks from "perf_hooks";",,,
},
      { pattern: /import v8 from;/g, replacement: "import v8 from "v8";" },
      { pattern: /import vm from;/g, replacement: "import vm from "vm";" },
      {;
  pattern: /import readline from;/g,
        replacement: "import readline from "readline";",,,
},
      {;
  pattern: /import repl from;/g,
        replacement: "import repl from "repl";",,,
},
      { pattern: /import tls from;/g, replacement: "import tls from "tls";" },
      { pattern: /import net from;/g, replacement: "import net from "net";" },
      {;
  pattern: /import dgram from;/g,
        replacement: "import dgram from "dgram";",,,
},
      { pattern: /import dns from;/g, replacement: "import dns from "dns";" },
      {;
  pattern: /import querystring from;/g,
        replacement: "import querystring from "querystring";",,,
},
      {;
  pattern: /import punycode from;/g,
        replacement: "import punycode from "punycode";",,,
},
      {;
  pattern: /import string_decoder from;/g,
        replacement: "import string_decoder from "string_decoder";",,,
},
      {;
  pattern: /import timers from;/g,
        replacement: "import timers from "timers";",,,
},
      {;
  pattern: /import events from;/g,
        replacement: "import events from "events";",,,
},
      {;
  pattern: /import assert from;/g,
        replacement: "import assert from "assert";",,,
},
      {;
  pattern: /import buffer from;/g,
        replacement: "import buffer from "buffer";",,,
},
      {;
  pattern: /import console from;/g,
        replacement: "import console from "console";",,,
},
      {;
  pattern: /import process from;/g,
        replacement: "import process from "process";",,,
},
      {;
  pattern: /import global from;/g,
        replacement: "import global from "global";",,,
},
      {;
  pattern: /import Buffer from;/g,
        replacement: "import { Buffer  } from "buffer";",,,
},
      {;
  pattern: /import setTimeout from;/g,
        replacement: "import { setTimeout  } from "timers";",,,
},
      {;
  pattern: /import setInterval from;/g,
        replacement: "import { setInterval  } from "timers";",,,
},
      {;
  pattern: /import clearTimeout from;/g,
        replacement: "import { clearTimeout  } from "timers";",,,
},
      {;
  pattern: /import clearInterval from;/g,
        replacement: "import { clearInterval  } from "timers";",,,
},
      {;
  pattern: /import setImmediate from;/g,
        replacement: "import { setImmediate  } from "timers";",,,
},
      {;
  pattern: /import clearImmediate from;/g,
        replacement: "import { clearImmediate  } from "timers";",,,
},
    ];
    for (const fix of importFixes) {;
  content = content.replace(fix.pattern, fix.replacement);,
}

    return content;,
}

  fixOptionalChaining(content) {;
  // Fix optional chaining syntax issues;
    content = content.replace(/\?\?/g, "?.");
    content = content.replace(/\.\?\?/g, "?.");
    // Fix specific optional chaining patterns;
    content = content.replace(;
      /this\.metrics\.system\.process\?\?\.uptime/g,
      "this.metrics.system.process?.uptime";
    );
    content = content.replace(;
      /this\.metrics\.system\.process\?\?\.memory/g,
      "this.metrics.system.process?.memory";
    );
    content = content.replace(;
      /this\.metrics\.system\.process\?\?\.cpu/g,
      "this.metrics.system.process?.cpu";
    );
    return content;,
}

  fixStringLiterals(content) {;
  // Fix malformed string literals;
    const stringFixes = [;
  {;
  pattern: /this\.projectRoot,logs"/g,
        replacement: "this.projectRoot, "logs",,,
},
      {;
  pattern: /this\.projectRoot,reports"/g,
        replacement: "this.projectRoot, "reports",,,
},
      {;
  pattern: /this\.projectRoot,automation"/g,
        replacement: "this.projectRoot, "automation",,,
},
      {;
  pattern: /this\.projectRoot,dir\)/g,
        replacement: "this.projectRoot, dir)",,,
},
      {;
  pattern: /path\.join\(this\.projectRoot,logs"/g,
        replacement: "path.join(this.projectRoot, "logs",,,
},
      {;
  pattern: /path\.join\(this\.projectRoot,reports"/g,
        replacement: "path.join(this.projectRoot, "reports",,,
},
      {;
  pattern: /path\.join\(this\.projectRoot,automation"/g,
        replacement: "path.join(this.projectRoot, "automation",,,
},
    ];
    for (const fix of stringFixes) {;
  content = content.replace(fix.pattern, fix.replacement);,
}

    return content;,
}

  fixBracketIssues(content) {;
  // Fix missing brackets and parentheses;
    content = content.replace(;
      /fs\.mkdirSync\(dirPath", \{ recursive: true \}\);/g,
      "fs.mkdirSync(dirPath, { recursive: true });";
    );
    return content;,
}

  fixFile(filePath) {;
  try {;
  let content = fs.readFileSync(filePath, "utf8");
      const originalContent = content;
      // Apply all fixes;
      content = this.fixImportStatements(content);
      content = this.fixOptionalChaining(content);
      content = this.fixStringLiterals(content);
      content = this.fixBracketIssues(content);
      if (content !== originalContent) {;
  fs.writeFileSync(filePath, content, "utf8");
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed: ${filePath}`);
        return true;,
}

      return false;,
} catch (error) {;
  this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false;,
}
  }

  async run() {;
  this.log("🔧 Starting enhanced syntax fixing...");
    const scriptsDir = path.join(this.projectRoot, "scripts");
    const automationDir = path.join(this.projectRoot, "scripts", "automation");
    const allFiles = [];
    if (fs.existsSync(scriptsDir)) {;
  allFiles.push(...this.getAllFiles(scriptsDir));,
}

    if (fs.existsSync(automationDir)) {;
  allFiles.push(...this.getAllFiles(automationDir));,
}

    this.log(`📁 Found ${allFiles.length} files to check`);
    let fixedCount = 0;
    for (const file of allFiles) {;
  if (this.fixFile(file)) {;
  fixedCount++;,
}
    }

    this.log(`🎉 Fixed ${fixedCount} files`);
    // Generate report;
    const report = {;
  timestamp: new Date().toISOString(),
      totalFiles: allFiles.length,
      fixedFiles: fixedCount,
      fixedFileList: this.fixedFiles,,,
}
    fs.writeFileSync(;
      path.join(this.projectRoot, "enhanced-syntax-fix-report.json"),
      JSON.stringify(report, null, 2);
    );
    this.log("📊 Report saved to enhanced-syntax-fix-report.json');,
>>>>>>> origin/automation-fixes
}

// Fix pitch export file
function fixPitchExport() {
  const filePath = '/workspace/pages/api/admin/pitch/export.ts';
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix syntax errors
    content = content.replace(
      /if \(!Array\.isArray\(slides\)\) return res\.status\(400\)\.json\(\{ error: 'Invalid slides' \}\),/,
      "if (!Array.isArray(slides)) return res.status(400).json({ error: 'Invalid slides' });"
    );
    
    content = content.replace(
      /const url = `https:\/\/docs\.google\.com\/presentation\/d\/\$\{encodeURIComponent\('stub-' \+ \(version \|\| 'draft'\)\)\}`,/,
      "const url = `https://docs.google.com/presentation/d/${encodeURIComponent('stub-' + (version || 'draft'))}`;"
    );
    
    content = content.replace(
      /return res\.status\(200\)\.json\(\{ url \}\)/,
      "return res.status(200).json({ url });"
    );
    
    fs.writeFileSync(filePath, content);
    console.log('✅ Fixed pitch export syntax');
  } catch (error) {
    console.log('⚠️ Could not fix pitch export:', error.message);
  }
}

<<<<<<< HEAD
// Fix pitch generate file
function fixPitchGenerate() {
  const filePath = '/workspace/pages/api/admin/pitch/generate.ts';
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the seed array syntax
    content = content.replace(
      /const seed = \[\s*'Problem & OpportunitySolution & ProductMarket Size \(TAM\/SAM\/SOM\)Traction & MetricsBusiness ModelGo-To-MarketTeamRoadmap';\s*'Token StrategyAsk & Call to Action'\];/,
      `const seed = [
    'Problem & Opportunity',
    'Solution & Product',
    'Market Size (TAM/SAM/SOM)',
    'Traction & Metrics',
    'Business Model',
    'Go-To-Market',
    'Team',
    'Roadmap',
    'Token Strategy',
    'Ask & Call to Action'
  ];`
    );
    
    fs.writeFileSync(filePath, content);
    console.log('✅ Fixed pitch generate syntax');
  } catch (error) {
    console.log('⚠️ Could not fix pitch generate:', error.message);
  }
}

// Fix pitch metrics file
function fixPitchMetrics() {
  const filePath = '/workspace/pages/api/admin/pitch/metrics.ts';
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix syntax errors
    content = content.replace(
      /const \{ allowed \} = await ensureAdminFromApi\(req\),/,
      "const { allowed } = await ensureAdminFromApi(req);"
    );
    
    content = content.replace(
      /if \(!allowed\) return res\.status\(403\)\.json\(\{ error: 'Forbidden' \}\),/,
      "if (!allowed) return res.status(403).json({ error: 'Forbidden' });"
    );
    
    fs.writeFileSync(filePath, content);
    console.log('✅ Fixed pitch metrics syntax');
  } catch (error) {
    console.log('⚠️ Could not fix pitch metrics:', error.message);
  }
}

// Run all fixes
fixV1ApiDocs();
fixPartnerUpdate();
fixPitchExport();
fixPitchGenerate();
fixPitchMetrics();

console.log('🎉 Enhanced syntax fixing completed!');
=======
// Run the fixer;
const fixer = new EnhancedSyntaxFixer();
fixer.run().catch(console.error)))))
>>>>>>> origin/automation-fixes
