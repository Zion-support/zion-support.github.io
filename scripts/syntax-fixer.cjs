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

=======
<<<<<<< HEAD
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
    fixed = fixed.replace(/(\w+):\s*([^}]+)/g, '"$1"
