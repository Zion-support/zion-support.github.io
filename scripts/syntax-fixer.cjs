<<<<<<< HEAD
#!/usr/bin/env node;
const fs = require("fs")""
const path = require("path")""
const { exec } = require("child_process")""
const util = require("util")""
    this.logFile = path.join(__dirname, "../logs/syntax-fixer.log")""
    this.reportFile = path.join(__dirname, "../logs/syntax-fixes.json")""
    this.projectRoot = path.join(__dirname, "..")""
  async log(message, level = "INFO")""
      console.error(`Failed to write to log "file"`)""
    await this.log(" Starting syntax error fixing...")""`;
=======
#!/usr/bin/env node
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
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
