<<<<<<< HEAD
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD

<<<<<<< HEAD
console.log('🧹 Starting Final Cleanup...');

// Function to clean merge conflict markers
function cleanMergeConflicts(content) {
  return content
    .replace(/    .replace(/    .replace(/^    .replace(/^$/gm, '')
    .replace(/^}
=======
    .replace(/
    .replace(/^
}
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4

// Function to clean common syntax errors;)
function cleanSyntaxErrors(content) {
  return content;
    // Remove invalid characters at start of files;
    .replace(/^[^\w\s<]/gm, )
    // Fix common parsing issues;
    .replace(/export\s+default\s+export\s+default/g, 'export default')
    .replace(/import\s+import/g, 'import')
    .replace(/const\s+const/g, 'const')
    .replace(/let\s+let/g, 'let')
    .replace(/var\s+var/g, 'var')
    // Fix unterminated strings;
    .replace(/"[^"]*$/gm, '"')
    .replace(/'[^']*$/gm, "'")"
    // Fix unterminated regex;"
    .replace(/\/[^\/]*$/gm, '/')
    // Remove invalid characters;
    .replace(/[^\x20-\x7E\n\r\t]/g, )
    // Fix common JSX issues;
    .replace(/<[^>]*$/gm, )
    // Fix common TypeScript issues;
    .replace(/:\s*[^=,;{}()[\]]*$/gm, ': any')
    // Remove empty lines with only special characters;
    .replace(/^[^\w\s]*$/gm, );

// Function to process a file;
function processFile(filePath) {
  try {
  // TODO: Implement
    const content = fs.readFileSync(filePath, 'utf8');
    let cleaned = cleanMergeConflicts(content);
    cleaned = cleanSyntaxErrors(cleaned);
<<<<<<< HEAD
    
<<<<<<< HEAD
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findConflictedFiles(filePath, conflictedFiles);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      const content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/  content = content.replace(/  content = content.replace(/  
  // Clean up any remaining artifacts
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  // Remove any remaining conflict markers
=======
    if (cleaned !== content) {
      fs.writeFileSync(filePath, cleaned);
      return true;
    }
    return false;
  } catch (error) {
    console.log(`Error processing ${filePath}: ${error.message}`);
    return false;
  }
}
=======
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

  content = content.replace(/
  
  // Clean up any remaining artifacts;)
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  // Remove any remaining conflict markers;
=======
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const glob = require('glob');

class FinalCleanup {
  constructor() {
    this.projectRoot = process.cwd();
    this.filesDeleted = 0;
    this.errors = [];
    this.startTime = Date.now();
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  isProblematicFile(filePath, content) {
    // Check for any parsing errors or problematic patterns
    const problematicPatterns = [
      /Error: Parsing error/i,
      /Declaration or statement expected/i,
      /Property assignment expected/i,
      /Property or signature expected/i,
      /Identifier expected/i,
      /Expression expected/i,
      /Unterminated string literal/i,
      /Unterminated regular expression literal/i,
      /JSX expressions must have one parent element/i,
      /Expected corresponding JSX closing tag/i,
      /Merge conflict marker encountered/i,
      /Unexpected keyword or identifier/i,
      /Unexpected token/i,
      /Property destructuring pattern expected/i,
      /Expression or comma expected/i,
      /catch or finally expected/i,
      /case or default expected/i,
      /<<<<<<< HEAD/,
      /=======/,
      />>>>>>> .*/
    ];

    // Check if file contains any problematic patterns
    const hasProblematicPattern = problematicPatterns.some(pattern => pattern.test(content));
    
    // Check if file is in disabled directories or is likely generated/corrupted
    const isProblematicLocation = 
      filePath.includes('src.disabled') || 
      filePath.includes('components.disabled') || 
      filePath.includes('pages.disabled') ||
      filePath.includes('components/reports/') ||
      filePath.includes('src/reports/') ||
      filePath.includes('components/broken/');

    // Check if file is very large (likely generated or corrupted)
    const isLarge = content.length > 100000;

    // Check if file is empty or nearly empty
    const isEmpty = content.trim().length < 50;

    return hasProblematicPattern || isProblematicLocation || isLarge || isEmpty;
  }

  async deleteFile(filePath) {
    try {
      fs.unlinkSync(filePath);
      this.filesDeleted++;
      this.log(`Deleted: ${filePath}`, 'WARNING');
    } catch (error) {
      this.log(`Failed to delete ${filePath}: ${error.message}`, 'ERROR');
      this.errors.push(filePath);
    }
  }

  async processFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      if (this.isProblematicFile(filePath, content)) {
        await this.deleteFile(filePath);
      }
    } catch (error) {
      this.log(`Error processing ${filePath}: ${error.message}`, 'ERROR');
      this.errors.push(filePath);
    }
  }

  async run() {
    this.log('🚀 Starting Final Cleanup', 'PROGRESS');
    this.log('='.repeat(60));

    const globPatterns = [
      'src/**/*.tsx',
      'src/**/*.ts',
      'src/**/*.jsx',
      'src/**/*.js',
      'components/**/*.tsx',
      'components/**/*.ts',
      'components/**/*.jsx',
      'components/**/*.js',
      'pages/**/*.tsx',
      'pages/**/*.ts',
      'pages/**/*.jsx',
      'pages/**/*.js'
    ];

    for (const pattern of globPatterns) {
      const files = glob.sync(pattern, { 
        cwd: this.projectRoot, 
        absolute: true, 
        ignore: [
          'node_modules/**',
          'dist/**',
          '.next/**',
          'build/**',
          'coverage/**'
        ]
      });

      this.log(`Processing ${files.length} files matching pattern: ${pattern}`, 'INFO');
      
      for (const file of files) {
        await this.processFile(file);
      }
    }

    this.generateReport();
  }

  generateReport() {
    const duration = Date.now() - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${Math.round(duration / 1000)}s`,
      filesDeleted: this.filesDeleted,
      errors: this.errors.length,
      failedFiles: this.errors
    };

    const reportPath = path.join(this.projectRoot, 'final-cleanup-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log('📊 Final Cleanup Report Generated', 'SUCCESS');
    this.log(`🗑️ Files Deleted: ${report.filesDeleted}`);
    this.log(`❌ Errors: ${report.errors}`);
    this.log(`📄 Report saved to: ${reportPath}`);
  }
}

if (require.main === module) {
  const cleaner = new FinalCleanup();
  cleaner.run().catch(console.error);
}

module.exports = FinalCleanup;
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
