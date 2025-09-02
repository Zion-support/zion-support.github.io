const fs = require('fs');
const path = require('path');

function fixAutomationScripts() {
  const automationDir = path.join(process.cwd(), 'automation');
  const files = fs.readdirSync(automationDir).filter(file => file.endsWith('.js'));
  
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(automationDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common syntax issues
    content = content.replace(/#!/usr\/bin\/env node;/g, '#!/usr/bin/env node');
    content = content.replace(/const fs = require\(\s*'fs'\);/g, "const fs = require('fs');");
    content = content.replace(/const path = require\(\s*'path'\);/g, "const path = require('path');");
    content = content.replace(/const { execSync } = require\(\s*'child_process'\);/g, "const { execSync } = require('child_process');");
    content = content.replace(/const { execSync, spawn } = require\(\s*'child_process'\);/g, "const { execSync, spawn } = require('child_process');");
    content = content.replace(/const cron = require\(\s*'node-cron'\);/g, "const cron = require('node-cron');");
    
    // Fix class method syntax
    content = content.replace(/;\s*async\s+(\w+)\s*\(/g, '  async $1(');
    content = content.replace(/class\s+(\w+)\s*{\s*constructor\s*\(\s*\)\s*{\s*;/g, 'class $1 {\n  constructor() {');
    
    // Fix console.log statements
    content = content.replace(/\/\/ \/\/ \/\/ \/\/ \/\/ \/\/ \/\/ console\.log\(/g, '    console.log(');
    content = content.replace(/\/\/ \/\/ \/\/ \/\/ \/\/ \/\/ \/\/ console\.error\(/g, '    console.error(');
    
    // Fix method calls
    content = content.replace(/this\.log\(\s*'([^']+)'\);/g, "    this.log('$1');");
    content = content.replace(/fs\.appendFileSync\(this\.logFile, logMessage\);/g, '    fs.appendFileSync(this.logFile, logMessage);');
    
    // Fix try-catch blocks
    content = content.replace(/try\s*{;\s*this\.log\(/g, '    try {\n      this.log(');
    content = content.replace(/}\s*catch\s*\(error\)\s*{/g, '    } catch (error) {');
    
    // Fix object properties
    content = content.replace(/this\.metrics\s*=\s*{;/g, '    this.metrics = {');
    
    // Fix log file paths
    content = content.replace(/this\.logFile\s*=\s*path\.join\(this\.projectRoot,\s*'logs',/g, "    this.logFile = path.join(this.projectRoot, 'logs',");
    
    // Remove extra semicolons and fix spacing
    content = content.replace(/;\s*;/g, ';');
    content = content.replace(/\s+;/g, ';');
    content = content.replace(/;\s*\n/g, ';\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${file}`);
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} automation script files`);
}

fixAutomationScripts();