#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { globSync } from 'glob';
const __dirname = dirname(__filename);
class LintErrorFixer {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'lint-error-fixer.log');
<<<<<<< HEAD
    this.ensureLogDirectory();

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });


  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
<<<<<<< HEAD
    // // // // // console.log(message);
=======
    // // // // // // // // console.log(message);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
    fs.appendFileSync(this.logFile, logMessage);

=======
    this.ensureLogDirectory()}
  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true })}
  }
  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  async fixUnusedImports(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      const imports = [];
      const otherLines = [];
      let inImportBlock = false;
      for (const i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.trim().startsWith('import ')) {
          inImportBlock = true;
          imports.push(line)} else if (inImportBlock && line.trim() === '') {
          imports.push(line)} else {
          inImportBlock = false;
<<<<<<< HEAD
          otherLines.push(line);


=======
          otherLines.push(line)}
      }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      // Filter out unused imports (basic check)
      const usedImports = imports.filter(importLine => {
        if (!importLine.trim().startsWith('import ')) return true;

        // Extract import names
        const match = importLine.match(/import\s+{([^}]+)}\s+from/);
        if (match) {
          const importNames = match[1].split(',').map(name => name.trim());
          const fileContent = otherLines.join('\n');
<<<<<<< HEAD
          return importNames.some(name => fileContent.includes(name));

        return true;
      });
=======
          return importNames.some(name => fileContent.includes(name))}
        return true});
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
      const newContent = [...usedImports, ...otherLines].join('\n');
      fs.writeFileSync(filePath, newContent);
      this.log(`✅ Fixed unused imports in: ${filePath}`);
      return true} catch (error) {
      this.log(`❌ Error fixing unused imports in ${filePath}: ${error.message}`);
<<<<<<< HEAD
      return false;


=======
      return false}
  }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  async fixTypeScriptErrors(filePath) {
    try {
      // Run TypeScript compiler to check for errors
      const result = execSync(`npx tsc --noEmit --project .`, {
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log(`✅ TypeScript check passed for: ${filePath}`);
      return true} catch (error) {
      this.log(`❌ TypeScript errors in ${filePath}: ${error.stdout || error.message}`);

      // Try to fix common TypeScript issues
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        let fixedContent = content;
        // Fix common TypeScript issues
        fixedContent = fixedContent.replace(/const\s+(\w+)\s*:\s*any\s*=/g, 'const $1 =');
        fixedContent = fixedContent.replace(/function\s+(\w+)\s*\(\s*\)\s*:\s*any/g, 'function $1()');
        fixedContent = fixedContent.replace(/:\s*any\s*[,)]/g, '$1');
        if (fixedContent !== content) {
          fs.writeFileSync(filePath, fixedContent);
          this.log(`✅ Fixed TypeScript issues in: ${filePath}`);
<<<<<<< HEAD
          return true;

      } catch (fixError) {
        this.log(`❌ Failed to fix TypeScript issues in ${filePath}: ${fixError.message}`);

      return false;


=======
          return true}
      } catch (fixError) {
        this.log(`❌ Failed to fix TypeScript issues in ${filePath}: ${fixError.message}`)}
      return false}
  }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  async fixESLintErrors(filePath) {
    try {
      const result = execSync(`npx eslint "${filePath}" --fix`, {
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log(`✅ Fixed ESLint errors in: ${filePath}`);
      return true} catch (error) {
      this.log(`❌ ESLint errors in ${filePath}: ${error.stdout || error.message}`);
<<<<<<< HEAD
      return false;


=======
      return false}
  }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  async fixFile(filePath) {
    this.log(`🔧 Fixing issues in: ${filePath}`);

    const fixes = [
      this.fixUnusedImports(filePath),
      this.fixTypeScriptErrors(filePath),
      this.fixESLintErrors(filePath)
    ];
    const results = await Promise.all(fixes);
    const successCount = results.filter(Boolean).length;

    this.log(`📊 Fixed ${successCount}/3 issue types in: ${filePath}`);
<<<<<<< HEAD
    return successCount > 0;

=======
    return successCount > 0}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  async fixAllFiles() {
    this.log('🔧 Starting comprehensive lint error fix...');

    const patterns = [
      'pages/**/*.{js,jsx,ts,tsx}',
      'components/**/*.{js,jsx,ts,tsx}',
      'utils/**/*.{js,jsx,ts,tsx}',
      'hooks/**/*.{js,jsx,ts,tsx}'
    ];
<<<<<<< HEAD
    const totalFixed = 0;
    const totalFiles = 0;
=======
    let totalFiles = 0;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    for (const pattern of patterns) {
      const files = this.glob(pattern);
<<<<<<< HEAD
      for (const fixed = await this.fixFile(file);
        if (fixed) totalFixed++}
=======
      for (const fixed = await this.fixFile(file);
        if (fixed) totalFixed++;
<<<<<<< HEAD


    this.log(`📊 Fixed ${totalFixed}/${totalFiles} files`);
    return { totalFiles, totalFixed };

=======
      }
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    }
    this.log(`📊 Fixed ${totalFixed}/${totalFiles} files`);
    return { totalFiles, totalFixed }}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  glob(pattern) {
    // Simple glob implementation using fs
    const files = [];
    const parts = pattern.split('/');
    const baseDir = parts[0];

    if (fs.existsSync(baseDir)) {
<<<<<<< HEAD
      this.scanDirectory(baseDir, files, pattern);

    return files.filter(file =>
      !file.includes('node_modules') &&
      !file.includes('.next') &&
      (file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.jsx'))
    );

=======
      this.scanDirectory(baseDir, files, pattern)}
    
    return files.filter(file => 
      !file.includes('node_modules') && 
      !file.includes('.next') &&
      (file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.jsx'))
    )}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  scanDirectory(dir, files, pattern) {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
<<<<<<< HEAD
        this.scanDirectory(fullPath, files, pattern);
      } else {
        files.push(fullPath);




=======
        this.scanDirectory(fullPath, files, pattern)} else {
        files.push(fullPath)}
    }
  }
}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
// CLI handling
const fixer = new LintErrorFixer();
const command = process.argv[2];
const filePath = process.argv[3];
switch (command) {
  case 'file':
    if (filePath) {
<<<<<<< HEAD
      fixer.fixFile(filePath);
    } else {
<<<<<<< HEAD
      // // // // // console.log('Usage: node lint-error-fixer.js file <filepath>');

=======
      // // // // // // // // console.log('Usage: node lint-error-fixer.js file <filepath>');
    }
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
=======
      fixer.fixFile(filePath)} else {
      console.log('Usage: node lint-error-fixer.js file <filepath>')}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    break;
  case 'all':
    fixer.fixAllFiles();
    break;
  default:
<<<<<<< HEAD
<<<<<<< HEAD
    // // // // // console.log('Usage: node lint-error-fixer.js [file <filepath>|all]');
=======
    // // // // // // // // console.log('Usage: node lint-error-fixer.js [file <filepath>|all]');
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
    process.exit(1);
}}}}}}}}}}}}}}}}}}}}}}}}}}
=======
    console.log('Usage: node lint-error-fixer.js [file <filepath>|all]');
    process.exit(1)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
