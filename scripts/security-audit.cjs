#!/usr/bin/env node
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

function log(msg, level = "INFO") {
  const ts = new Date().toISOString();
  console.log(`[${ts}] [${level}] ${msg}`);
}

function tryExec(cmd) {
  try {
    execSync(cmd, { stdio: "inherit" });
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e };
  }
}

function main() {
  log("🔒 Starting security audit...");

  // npm audit (best-effort)
  log("Running npm audit (moderate)...");
  const audit = tryExec("npm audit --audit-level=moderate");
  if (!audit.ok) {
    log("Vulnerabilities found, attempting npm audit fix", "WARN");
    tryExec("npm audit fix");
  }

  // scan for sensitive files
  const sensitive = [".env", ".env.local", ".env.production", "config.json", "secrets.json"]; 
  const found = sensitive.filter(f => fs.existsSync(path.join(process.cwd(), f)));
  if (found.length > 0) {
    log(`Sensitive files present: ${found.join(", ")}`, "WARN");
  } else {
    log("No sensitive files found in repo root");
  }

  log("✅ Security audit completed");
}

main();
