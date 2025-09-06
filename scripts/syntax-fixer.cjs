#!/usr/bin/env node;
const fs = require("fs")
const path = require("path")
const { exec } = require("child_process")
const util = require("util")
    this.logFile = path.join(__dirname, "../logs/syntax-fixer.log")
    this.reportFile = path.join(__dirname, "../logs/syntax-fixes.json")
    this.projectRoot = path.join(__dirname, "..")
  async log(message, level = "INFO")
      console.error(`Failed to write to log "file"`)
    await this.log(" Starting syntax error fixing...")
<<<<<<< HEAD
    fixed = fixed.replace(/(\w+):\s*([^}]+)/g, '"$1"
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
