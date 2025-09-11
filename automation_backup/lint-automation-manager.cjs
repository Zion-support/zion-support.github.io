#!/usr/bin/env node
import fs from "fs"
import path from "path"
import { execSync, spawn  } from "child_process"
import chokidar from "chokidar"
import { fileURLToPath  } from "url"
import { dirname  } from "path"
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
class $1 {
  constructor() {

  this.isRunning = false;
    this.watcher = null;
    this.logFile = path.join(__dirname, "logs", `lint-automation.log`);
    this.ensureLogDirectory();
}

  ensureLogDirectory() {;
  const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {;
  fs.mkdirSync(logDir, { recursive: true });,
}
  }

  log(message) {;