<<<<<<< HEAD
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class BatchSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
    this.batchSize = 10; // Process 10 files at a time
  }

  log(message) {
    .toISOString()}] ${message}`);
  }

  fixFileContent(content) {
    // Fix the most common syntax issues

    // 1. Fix malformed imports - split concatenated imports
    content = content.replace(
      /import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/g,
      "import { $1 } from '$2';\nimport { $3 } from '$4';"
    );

    // 2. Add missing semicolons after imports
    content = content.replace(
      /import\s*{[^}]+}\s*from\s*['"][^'"]+['"](?!\s*;)/g,
      '$&;'
    );

    // 3. Fix string concatenation issues
    content = content.replace(/['"]\s*;\s*['"]/g, '');
    content = content.replace(/['"]\s*;\s*([^'"]*)\s*['"]/g, '$1');

    // 4. Fix array syntax
    content = content.replace(
      /\[\s*['"]\s*;\s*([^'"]*)\s*['"]\s*\]/g,
      "['$1']"
    );
    content = content.replace(
      /\[\s*['"]\s*([^'"]*)\s*;\s*['"]\s*\]/g,
      "['$1']"
    );

    // 5. Fix object syntax
    content = content.replace(/{\s*['"]\s*;\s*([^'"]*)\s*['"]\s*:/g, "{ '$1':");
    content = content.replace(/:\s*['"]\s*;\s*([^'"]*)\s*['"]\s*,/g, ": '$1',");
    content = content.replace(
      /:\s*['"]\s*;\s*([^'"]*)\s*['"]\s*}/g,
      ": '$1' }"
    );

    // 6. Fix JSX attributes
    content = content.replace(
      /className\s*=\s*['"]\s*;\s*([^'"]*)\s*['"]/g,
      "className='$1'"
    );
    content = content.replace(
      /href\s*=\s*['"]\s*;\s*([^'"]*)\s*['"]/g,
      "href='$1'"
    );
    content = content.replace(
      /title\s*=\s*['"]\s*;\s*([^'"]*)\s*['"]/g,
      "title='$1'"
    );

    // 7. Clean up multiple semicolons and commas
    content = content.replace(/\s*;\s*;\s*/g, ';');
    content = content.replace(/,\s*,\s*/g, ',');

    // 8. Fix unterminated strings
    const lines = content.split('\n');
    const fixedLines = lines.map(line => {
      if (
        line.includes("'") &&
        (line.match(/'/g) || []).length % 2 !== 0 &&
        !line.endsWith("'")
      ) {
        return line + "'";
      }
      if (
        line.includes('"') &&
        (line.match(/"/g) || []).length % 2 !== 0 &&
        !line.endsWith('"')
      ) {
        return line + '"';
      }
      return line;
    });
    content = fixedLines.join('\n');

    return content;
  }

  fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      content = this.fixFileContent(content);

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`✅ "Fixed": ${path.relative(this.projectRoot, filePath)}`);
        return true;
      }

      return false;
    } catch (error) {
      this.errors.push({ "file": filePath, "error": error.message });
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false;
    }
  }

  getAllFiles(dir, extensions) {
    let files = [];
    try {
      const items = fs.readdirSync(dir);

      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          files = files.concat(this.getAllFiles(fullPath, extensions));
        } else if (extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }

    return files;
  }

  async processBatch(files) {
    for (const file of files) {
      this.fixFile(file);
    }
  }

  async run() {
    this.log('🔧 Starting Batch Syntax Fix');

    const srcDir = path.join(this.projectRoot, 'src');
    if (!fs.existsSync(srcDir)) {
      this.log('❌ src directory not found');
      return;
    }

    const files = this.getAllFiles(srcDir, ['.tsx', '.ts', '.jsx', '.js']);
    this.log(`Found ${files.length} files to check`);

    // Process files in batches
    for (let i = 0; i < files.length; i += this.batchSize) {
      const batch = files.slice(i, i + this.batchSize);
      const batchNum = Math.floor(i / this.batchSize) + 1;
      const totalBatches = Math.ceil(files.length / this.batchSize);

      this.log(
        `Processing batch ${batchNum}/${totalBatches} (${batch.length} files)`
      );

      await this.processBatch(batch);

      // Small delay between batches to prevent overwhelming the system
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    this.log(`🎉 Fixed ${this.fixedFiles.length} files`);
    this.log(`❌ ${this.errors.length} errors encountered`);

    // Generate report
    const report = {
<<<<<<< HEAD
      timestamp: new Date().toISOString(),
      totalFiles: files.length,
      fixedFiles: this.fixedFiles.length,
      errors: this.errors,
      fixedFileList: this.fixedFiles,
    };
=======
      "timestamp": new Date().toISOString(),
      "totalFiles": files.length,
      "fixedFiles": this.fixedFiles.length,
      "errors": this.errors,
      "fixedFileList": this.fixedFiles};
>>>>>>> main

    fs.writeFileSync(
      path.join(this.projectRoot, 'batch-syntax-fix-report.json'),
      JSON.stringify(report, null, 2)
    );

    this.log('📊 Report saved to batch-syntax-fix-report.json');
  }
}

// Run the fixer
const fixer = new BatchSyntaxFixer();
fixer.run().catch(console.error);
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");class BatchSyntaxFixer { constructor() { this.projectRoot = process.cwd(); this.fixedFiles = []; this.errors = []; this.batchSize = 10; / Process 10 files at a time } log(message) { console.log(`[${new Date().toISOString()}] ${message}`); } fixFileContent(content) { / Fix the most common syntax issues / 1. Fix malformed imports - split concatenated imports content = content.replace(" /import\s*{\s*([^}]+)\s*}\s*from\s*[""]([^""]+)[""]\s*import\s*{\s*([^}]+)\s*}\s*from\s*[""]([^""]+)[""]/g,"" "import { $1 } from "$2";\nimport { $3 } from "$4";" ); / 2. Add missing semicolons after imports content = content.replace("" /import\s*{[^}]+}\s*from\s*[""][^""]+[""](?!\s*;)/g," "$&;" ); / 3. Fix string concatenation issues"" content = content.replace(/[""]\s*;\s*[""]/g, "");"" content = content.replace(/[""]\s*;\s*([^""]*)\s*[""]/g, "$1"); / 4. Fix array syntax content = content.replace("" /\[\s*[""]\s*;\s*([^""]*)\s*[""]\s*\]/g,"" "["$1"]" ); content = content.replace("" /\[\s*[""]\s*([^""]*)\s*;\s*[""]\s*\]/g,"" "["$1"]" ); / 5. Fix object syntax"" content = content.replace(/{\s*[""]\s*;\s*([^""]*)\s*[""]\s*:/g, "{ "$1":");"" content = content.replace(/:\s*[""]\s*;\s*([^""]*)\s*[""]\s*,/g, ": "$1","); content = content.replace("" /:\s*[""]\s*;\s*([^""]*)\s*[""]\s*}/g,"" ": "$1" }" ); / 6. Fix JSX attributes content = content.replace("" /className\s*=\s*[""]\s*;\s*([^""]*)\s*[""]/g,"" "className="$1"" ); content = content.replace("" /href\s*=\s*[""]\s*;\s*([^""]*)\s*[""]/g,"" "href="$1"" ); content = content.replace("" /title\s*=\s*[""]\s*;\s*([^""]*)\s*[""]/g,"" "title="$1"" ); / 7. Clean up multiple semicolons and commas" content = content.replace(/\s*;\s*;\s*/g, ";");" content = content.replace(/,\s*,\s*/g, ","); / 8. Fix unterminated strings" const lines = content.split("\n"); const fixedLines = lines.map(line => { if ("" line.includes(""") &&" (line.match(/"/g) | []).length % 2 !== 0 &&"" !line.endsWith(""") ) {"" return line + """; } if ("" line.includes(""") &&" (line.match(/"/g) | []).length % 2 !== 0 &&"" !line.endsWith(""") ) {"" return line + """; } return line; });" content = fixedLines.join("\n"); return content; } fixFile(filePath) { try {" let content = fs.readFileSync(filePath, "utf8"); const originalContent = content; content = this.fixFileContent(content); if (content !== originalContent) {" fs.writeFileSync(filePath, content, "utf8"); this.fixedFiles.push(filePath);"` this.log(` Fixed: ${path.relative(this.projectRoot, filePath)}`); return true; } return false; } catch (error) {" this.errors.push({ file: filePath, error: error.message });` this.log(` Error fixing ${filePath}: ${error.message}`); return false; } } getAllFiles(dir, extensions) { let files = []; try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { files = files.concat(this.getAllFiles(fullPath, extensions)); } else if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath); } } } catch (error) {" / Skip directories that can"t be read } return files; } async processBatch(files) { for (const file of files) { this.fixFile(file); } } async run() {" this.log(" Starting Batch Syntax Fix");" const srcDir = path.join(this.projectRoot, "src"); if (!fs.existsSync(srcDir)) {" this.log(" src directory not found"); return; }" const files = this.getAllFiles(srcDir, [".tsx", ".ts", ".jsx", ".js"]);` this.log(`Found ${files.length} files to check`); / Process files in batches for (let i = 0; i < files.length; i += this.batchSize) { const batch = files.slice(i, i + this.batchSize); const batchNum = Math.floor(i / this.batchSize) + 1; const totalBatches = Math.ceil(files.length / this.batchSize); this.log(` `Processing batch ${batchNum}/${totalBatches} (${batch.length} files)` ); await this.processBatch(batch); / Small delay between batches to prevent overwhelming the system await new Promise(resolve => setTimeout(resolve, 100)); }` this.log(` Fixed ${this.fixedFiles.length} files`);` this.log(` ${this.errors.length} errors encountered`); / Generate report const report = {" timestamp: new Date().toISOString()," totalFiles: files.length," fixedFiles: this.fixedFiles.length," errors: this.errors," fixedFileList: this.fixedFiles}; fs.writeFileSync(" path.join(this.projectRoot, "batch-syntax-fix-report.json"), JSON.stringify(report, null, 2) );" this.log(" Report saved to batch-syntax-fix-report.json"); }}/ Run the fixerconst fixer = new BatchSyntaxFixer();fixer.run().catch(console.error);""`"`
=======
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
      /import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'')]
      "
      /import\s*{[^}]+}\s*from\s*['"][^'']
    content = content.replace(/['"]\s*;\s*['')]
    content = content.replace(/['"]\s*;\s*([^'"]*)\s*['']
      /\[\s*['"]\s*;\s*([^'')]
      "
      /\[\s*['"]\s*([^'')]
      "
    content = content.replace(/{\s*['"]\s*;\s*([^'"]*)\s*['"]\s*:/g, "}
    content = content.replace(/:\s*['"]\s*;\s*([^'"]*)\s*['"]\s*,/g, "
      /:\s*['"]\s*;\s*([^'')]
      "
      /className\s*=\s*['"]\s*;\s*([^'')]
      "
      /href\s*=\s*['"]\s*;\s*([^'')]
      "
      /title\s*=\s*['"]\s*;\s*([^'')]
      "
        line.includes(")
        !line.endsWith(")
        return line + "
        line.includes('')
        !line.endsWith('')
        return line + ''
>>>>>>> main
>>>>>>> main
>>>>>>> main
