<<<<<<< HEAD
#!/usr/bin/env node;
<<<<<<< HEAD
const fs = require("fs)
const path = require(path")
const { exec } = require("child_process)
const util = require(util")
    this.logFile = path.join(__dirname, "../logs/syntax-fixer.log)
    this.reportFile = path.join(__dirname, ../logs/syntax-fixes.json")
    this.projectRoot = path.join(__dirname, "..)
  async log(message, level = INFO")
      console.error(`Failed to write to log "file`)
    await this.log( Starting syntax error fixing...")

=======
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
    fixed = fixed.replace(/(\w+):\s*([^}]+)/g, '"$1"
    fixed = fixed.replace(/(\w+):\s*([^}]+)/g, '"$1"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
    fixed = fixed.replace(/(\w+):\s*([^}]+)/g, '"$1"
=======
    fixed = fixed.replace(/(\w+):\s*([^}]+)/g, '"$1"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
