<<<<<<< HEAD
=======
=======
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
class FinalSyntaxCleanup {
  constructor() {
    this.fixedFiles = []
    this.errors = []
  }
  async fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let fixedContent = content;
      let hasChanges = false;

      // Fix specific patterns that are still causing issues;
      const patterns = [;
        // Fix corrupted meta descriptions;
        {
          pattern: /content="The page you"re looking for doesn"t exist."/g,;
          replacement: 'content="The page you\'re looking for doesn\'t exist."'},;
        // Fix extra closing braces;
        {
          pattern: /\n}\s*$/gm,;
          replacement: '\n}'},;
        // Fix corrupted JSX attributes;
        {
          pattern: /<(\w+)\s+([^>]*)\s*\/>/g,;
          replacement: '<$1 $2 />'},;
        // Fix corrupted string literals;
        {
          pattern: /content="([^"]*)"\s*\/>/g,;
          replacement: 'content="$1" />'},;
        // Fix corrupted quotes;
        {
          pattern: /"([^"]*)"\s*\/>/g,;
          replacement: '"$1" />'},;
        // Fix corrupted closing tags;
        {
          pattern: /<\/(\w+)>\s*$/gm,;
          replacement: '</$1>'},;
        // Fix corrupted self-closing tags;
        {
          pattern: /<(\w+)\s+([^>]*)\s*\/>/g,;
          replacement: '<$1 $2 />'},;
        // Fix corrupted comments;
        {
          pattern: /\/\*([^*]|\*[^/])*\*\//g,;
          replacement: '/* comment */'},;
        // Fix corrupted semicolons;
        {
          pattern: /;\s*$/gm,;
          replacement: ';'},;
        // Fix corrupted commas;
        {
          pattern: /,\s*$/gm,;
          replacement: ','},;
        // Fix corrupted parentheses;
        {
          pattern: /\(\s*\)/g,;
          replacement: '()'},;
        // Fix corrupted brackets;
        {
          pattern: /\[\s*\]/g,;
          replacement: '[]'},;
        // Fix corrupted braces;
        {
          pattern: /\{\s*\}/g,;
          replacement: '{}'},;
        // Fix corrupted quotes;
        {
          pattern: /'([^']*)'/g,;
          replacement: '"$1"'},;
        // Fix corrupted double quotes;
        {
          pattern: /"([^"]*)"/g,;
          replacement: '"$1"'},;
        // Fix corrupted backticks;
        {
          pattern: /`([^`]*)`/g,;
          replacement: '"$1"'},;
        // Fix corrupted escape sequences;
        {
          pattern: /\\n/g,;
          replacement: '\n'},;
        {
          pattern: /\\t/g,;
          replacement: '\t'},;
        {
          pattern: /\\r/g,;
          replacement: '\r'},;
        {
          pattern: /\\"/g,;
          replacement: '"'},;
        {
          pattern: /\\'/g,;
          replacement: "'"},;
        {
          pattern: /\\\\/g,;
          replacement: '\\'}
      ];

      for (const { pattern, replacement } of patterns) {
        const before = fixedContent;
        fixedContent = fixedContent.replace(pattern, replacement);
        if (before !== fixedContent) {
          hasChanges = true}

      // Additional specific fixes;
      fixedContent = this.applySpecificFixes(fixedContent, filePath);

      if (hasChanges) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        this.fixedFiles.push(filePath);
        console.log(`✅ Fixed: ${filePath}`);
        return true}
      return false} catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      console.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false}

  applySpecificFixes(content, filePath) {
    let fixedContent = content;

    // Fix specific file types;
    if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
      // Fix React component structure;
      if (!fixedContent.includes('import React') && fixedContent.includes('return (')) {
        fixedContent = 'import React from "react"\n' + fixedContent}
      // Fix missing export default;
      if (fixedContent.includes('return (') && !fixedContent.includes('export default')) {
        fixedContent += '\n\nexport default Component'}
      // Fix missing function declaration;
      if (fixedContent.includes('return (') && !fixedContent.includes('const ') && !fixedContent.includes('function ')) {
        fixedContent = 'const Component = () => {\n' + fixedContent}

    if (filePath.endsWith('.ts') || filePath.endsWith('.js')) {
      // Fix missing imports;
      if (fixedContent.includes('React.') && !fixedContent.includes('import React')) {
        fixedContent = 'import React from "react"\n' + fixedContent}

    return fixedContent}

  async fixDirectory(dirPath) {
    const files = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const file of files) {
      const fullPath = path.join(dirPath, file.name);

      if (file.isDirectory()) {
        await this.fixDirectory(fullPath)} else if (file.isFile() && this.shouldFixFile(fullPath)) {
        await this.fixFile(fullPath)      }
    }

  shouldFixFile(filePath) {
    const ext = path.extname(filePath);
    return ['.tsx', '.jsx', '.ts', '.js'].includes(ext) && ;
           !filePath.includes('node_modules') &&;
           !filePath.includes('.next') &&;
           !filePath.includes('dist')}

  async run() {
    console.log('🔍 Starting final syntax cleanup...');

    const directories = [;
      'pages',;
      'components',;
      'src';
    ];

    for (const dir of directories) {
      if (fs.existsSync(dir)) {
        console.log(`📁 Processing directory: ${dir}`);
        await this.fixDirectory(dir)}

    console.log('\n📊 Summary:');
    console.log(`✅ Files fixed: ${this.fixedFiles.length}`);
    console.log(`❌ Errors: ${this.errors.length}`);

    if (this.fixedFiles.length > 0) {
      console.log('\n📝 Fixed files:');
      this.fixedFiles.forEach(file => console.log(`  - ${file}`))}
    if (this.errors.length > 0) {
      console.log('\n🚨 Errors:');
      this.errors.forEach(({ file, error }) => console.log(`  - ${file}: ${error}`))}

    // Save report;
    const report = {
      "timestamp": new Date().toISOString();
      fixedFiles: this.fixedFiles;
      errors: this.errors;
      summary: {totalFixed: this.fixedFiles.length,"totalErrors": this.errors.length}
    fs.writeFileSync('final-syntax-cleanup-report.json', JSON.stringify(report, null, 2))
    }
// Run the cleanup
const cleanup = new FinalSyntaxCleanup()
cleanup.run().catch(console.error)
}
console.log(`\n✅ Fixed ${totalFixed} files`);
console.log('🎉 Final syntax cleanup completed!');
=======
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class FinalSyntaxCleanup {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;

      // Fix remaining syntax issues
      const fixes = [
        // Fix trailing commas and semicolons
        { pattern: /,\s*,/g, replacement: ',' },
        { pattern: /;\s*;/g, replacement: ';' },
        { pattern: /,\s*;/g, replacement: ',' },
        { pattern: /;\s*,/g, replacement: ';' },
        
        // Fix standalone semicolons
        { pattern: /^\s*;\s*$/gm, replacement: '' },
        { pattern: /\n\s*;\s*\n/g, replacement: '\n' },
        
        // Fix malformed function calls
        { pattern: /console\.log\([^)]*\),/g, replacement: (match) => match.replace(/,$/, '') },
        
        // Fix malformed object properties
        { pattern: /:\s*'[^']*',\s*;/g, replacement: (match) => match.replace(',', ',') },
        { pattern: /:\s*"[^"]*",\s*;/g, replacement: (match) => match.replace(',', ',') },
        { pattern: /:\s*\d+,\s*;/g, replacement: (match) => match.replace(',', ',') },
        { pattern: /:\s*(true|false),\s*;/g, replacement: (match) => match.replace(',', ',') },
        
        // Fix malformed arrays
        { pattern: /\[\s*;\s*"/g, replacement: '[ "' },
        { pattern: /"\s*;\s*\]/g, replacement: '" ]' },
        
        // Fix malformed interfaces and types
        { pattern: /interface\s+\w+\s*{\s*;/g, replacement: (match) => match.replace('{;', '{') },
        { pattern: /:\s*React\.ReactNode;\s*,/g, replacement: ': React.ReactNode;' },
        
        // Fix malformed function declarations
        { pattern: /const\s+\w+:\s*React\.FC<[^>]*>\s*=\s*\(\s*[^)]*\)\s*=>\s*{\s*;/g, replacement: (match) => match.replace('{;', '{') },
        
        // Fix malformed useEffect
        { pattern: /useEffect\(\s*\(\s*\)\s*=>\s*{\s*;/g, replacement: (match) => match.replace('{;', '{') },
        
        // Fix malformed ESLint config
        { pattern: /'react-hooks\/exhaustive-deps':\s*'warn',\s*;/g, replacement: "'react-hooks/exhaustive-deps': 'warn'," },
        { pattern: /'react\/react-in-jsx-scope':\s*'off',\s*;/g, replacement: "'react/react-in-jsx-scope': 'off'," },
        { pattern: /'no-undef':\s*'off',\s*,/g, replacement: "'no-undef': 'off'," },
        { pattern: /},\s*;/g, replacement: '},' },
        { pattern: /ignorePatterns:\s*\[\s*;/g, replacement: 'ignorePatterns: [' },
        
        // Clean up extra whitespace
        { pattern: /\n\s*\n\s*\n/g, replacement: '\n\n' },
        { pattern: /^\s*;\s*$/gm, replacement: '' },
      ];

      // Apply all fixes
      fixes.forEach(fix => {
        if (typeof fix.replacement === 'function') {
          content = content.replace(fix.pattern, fix.replacement);
        } else {
          content = content.replace(fix.pattern, fix.replacement);
        }
      });

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed remaining syntax errors in: ${filePath}`);
        return true;
      }

      return false;
    } catch (error) {
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false;
    }
  }

  async fixAllFiles() {
    this.log('🔧 Starting final syntax cleanup...');
    
    // Fix specific files that had issues
    const specificFiles = [
      'scripts/comprehensive-automation-orchestrator.cjs',
      'components/AccessibilityEnhancer.tsx',
      '.eslintrc.js'
    ];

    for (const file of specificFiles) {
      const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath)) {
        this.fixFile(filePath);
      }
    }

    // Also scan for any remaining files with syntax issues
    const extensions = ['.js', '.cjs', '.mjs', '.ts', '.tsx'];
    await this.scanAndFixDirectory(this.projectRoot, extensions);

    this.log(`✅ Final cleanup completed. Fixed ${this.fixedFiles.length} files`);
    return this.fixedFiles;
  }

  async scanAndFixDirectory(dirPath, extensions) {
    try {
      const files = fs.readdirSync(dirPath);
      
      for (const file of files) {
        const filePath = path.join(dirPath, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
          await this.scanAndFixDirectory(filePath, extensions);
        } else if (stat.isFile()) {
          const ext = path.extname(file);
          if (extensions.includes(ext)) {
            // Only fix files that likely have syntax issues
            const content = fs.readFileSync(filePath, 'utf8');
            if (content.includes(';') || content.includes(',') || content.includes('{;') || content.includes('};')) {
              this.fixFile(filePath);
            }
          }
        }
      }
    } catch (error) {
      // Skip directories we can't read
    }
  }
}

// Run the cleanup
if (require.main === module) {
  const cleanup = new FinalSyntaxCleanup();
  cleanup.fixAllFiles()
    .then(fixedFiles => {
      console.log('\n📊 Final Cleanup Summary:');
      console.log(`Fixed files: ${fixedFiles.length}`);
      process.exit(0);
    })
    .catch(error => {
      console.error('❌ Fatal error:', error);
      process.exit(1);
    });
}

module.exports = FinalSyntaxCleanup;
>>>>>>> origin/automation-fixes
