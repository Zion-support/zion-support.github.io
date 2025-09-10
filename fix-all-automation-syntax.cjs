#!/usr/bin/env node
const fs = require("$1")
const path = require("$1")
const { execSync } = require("child_process")
class $1 {
  constructor() {
  this.projectRoot = process.cwd()
    this.fixedFiles = []
    this.errors = []}

  log(message) {;
  console.log(`[${new Date().toISOString()}] ${message}`);`}

  getAllFiles(dir, extensions = [".js", ".cjs", ".mjs"]) {";    let files = [];
    const items = fs.readdirSync(dir);
    for (const item of items) {;
  const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {;
  files = files.concat(this.getAllFiles(fullPath, extensions))} else if (extensions.some(ext => item.endsWith(ext))) {;