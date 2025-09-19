#!/usr/bin/env node

const fs = require('fs');
const path = require('path');



class ComprehensiveSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = 0;
    this.totalErrors = 0;
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }
  async fixAllSyntaxErrors() {
    this.log('🔧 Starting comprehensive syntax error fixing...');

    try {
      // Get all TypeScript and JavaScript files
      const files = this.getAllCodeFiles();
      this.log(`Found ${files.length} files to check`);

      for (const file of files) {
        await this.fixFileSyntax(file);
      }
      this.log(`✅ Fixed syntax errors in ${this.fixedFiles} files`);
      this.log(`📊 Total errors fixed: ${this.totalErrors}`);
    } catch (error) {
      this.log(`❌ Error during syntax fixing: ${error.message}`);
      throw error;


    }
  }

  getAllCodeFiles() {
    const files = [];
    
    const scanDirectory = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip node_modules and other irrelevant directories
          if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
            scanDirectory(fullPath);
          }
        } else if (this.isCodeFile(item)) {
          files.push(fullPath);
        }
      }
    };
    
    scanDirectory(this.projectRoot);
    return files;
  }

  isCodeFile(filename) {
    const ext = path.extname(filename);
    return ['.ts', '.tsx', '.js', '.jsx', '.cjs', '.mjs'].includes(ext);
  }

  async fixFileSyntax(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fixedContent = this.fixSyntaxErrors(content, filePath);
      
      if (content !== fixedContent) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        this.fixedFiles++;
        this.log(`✅ Fixed syntax errors in ${path.relative(this.projectRoot, filePath)}`);
      }
    } catch (error) {
      this.log(`⚠️  Could not fix ${path.relative(this.projectRoot, filePath)}: ${error.message}`);
    }
  }

  fixSyntaxErrors(content, filePath) {
    let fixed = content;
    let errorCount = 0;

    // Fix semicolon issues in object properties
    fixed = fixed.replace(/(\w+):\s*([^;}\n]+);\s*([^;}\n]*);/g, '$1: $2, $3,');
    fixed = fixed.replace(/(\w+):\s*([^;}\n]+);\s*$/gm, '$1: $2,');
    
    // Fix object property semicolons to commas
    fixed = fixed.replace(/(\w+):\s*([^;}\n]+);\s*(\w+):/g, '$1: $2,\n    $3: '),
    fixed = fixed.replace(/(\w+):\s*([^;}\n]+);\s*}/g, '$1: $2\n  }');
    
    // Fix array element semicolons
    fixed = fixed.replace(/\[\s*([^[\]]+);\s*([^[\]]+);\s*\]/g, '[\n    $1,\n    $2\n  ]');
    
    // Fix string concatenation issues
    fixed = fixed.replace(/(\w+):\s*'([^']+)';\s*(\w+):/g, '$1: \'$2\',\n    $3: '),
    // Fix function parameter semicolons
    fixed = fixed.replace(/\(\s*([^,)]+);\s*([^,)]+);\s*([^,)]+);\s*\)/g, '($1, $2, $3)');
    fixed = fixed.replace(/\(\s*([^,)]+);\s*([^,)]+);\s*\)/g, '($1, $2)');
    
    // Fix object literal semicolons in function calls
    fixed = fixed.replace(/\{\s*([^;{}]+);\s*([^;{}]+);\s*\}/g, '{\n    $1,\n    $2\n  }');
    
    // Fix specific patterns
    fixed = fixed.replace(/id:\s*'([^']+)';\s*title:/g, 'id: \'$1\',\n      title: '), fixed = fixed.replace(/title:\s*'([^']+)',\s*description:/g, 'title: \'$1\',\n      description: '), fixed = fixed.replace(/description:\s*'([^']+)',\s*path:/g, 'description: \'$1\',\n      path: '),
    // Fix array literals
    fixed = fixed.replace(/\[\s*([^[\]]+);\s*([^[\]]+);\s*\]/g, '[\n    $1,\n    $2\n  ]');
    
    // Fix specific API patterns
    fixed = fixed.replace(/activeUsers30d:\s*(\d+);/g, 'activeUsers30d: $1,');
    fixed = fixed.replace(/gmv:\s*(\d+);/g, 'gmv: $1,');
    fixed = fixed.replace(/mrr:\s*(\d+);/g, 'mrr: $1,');
    fixed = fixed.replace(/yoyGrowth:\s*([\d.]+);/g, 'yoyGrowth: $1,');
    
    // Fix string literals in objects
    fixed = fixed.replace(/title:\s*'([^']+)';\s*content:/g, 'title: \'$1\',\n    content: '),
    // Fix long string concatenations
    fixed = fixed.replace(/'([^']+)';\s*'([^']+)'\]/g, '\'$1\',\n    \'$2\'\n  ]');
    
    // Count errors fixed
    const originalSemicolons = (content.match(/;/g) || []).length;
    const fixedSemicolons = (fixed.match(/;/g) || []).length;
    errorCount = originalSemicolons - fixedSemicolons;
    
    this.totalErrors += errorCount;
    
    return fixed;
  }
}




// Run the fixer
const fixer = new ComprehensiveSyntaxFixer();
fixer.fixAllSyntaxErrors().catch(console.error);


>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d


}

    this.log(`📋 Found ${problematicFiles.length} files with syntax issues`);
    for (const file of problematicFiles) {;
  const result = await this.fixFile(file);
      if (result.fixed) {;
  this.fixedFiles++,
}
    }

    this.log(`🎉 Fixed syntax in ${this.fixedFiles} files`);
    if (this.errors.length > 0) {;
  this.log(`⚠️  ${this.errors.length} errors occurred:`);
      this.errors.forEach(error => {;
  this.log(`   - ${error.file}: ${error.error}`),
}),
}

    return {;
  totalFiles: allFiles.length,
      fixedFiles: this.fixedFiles.length,
      errors: this.errors.length,
      fixedFileList: this.fixedFiles,
      errorList: this.errors,
}
  }

  generateReport(results) {;
  const report = {;
  timestamp: new Date().toISOString(),
      summary: results,
      fixedFiles: this.fixedFiles,
      errors: this.errors,
}
      fixed: this.fixedFiles,
      errors: this.errors,
      totalFiles: problematicFiles.length,
}
  }

  async createCleanESLintConfig() {;
  this.log("🔧 Creating clean ESLint configuration...");
    const eslintConfig = `module.exports = {;
  extends: [ "next/core-web-vitals",
    "eslint: recommended",
    "@typescript-eslint/recommended" ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {;
  "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "react-hooks/exhaustive-deps": "warn",
},
  ignorePatterns: ["node_modules/", ".next/", "out/"],
};`;
    try {;
  fs.writeFileSync(".eslintrc.js", eslintConfig);
      this.log("✅ Created clean ESLint configuration"),
} catch (error) {;
  this.log(`❌ Error creating ESLint config: ${error.message}`),
}
  }

  async run() {;
  try {;
  // Fix syntax issues;
      const fixResult = await this.fixAllFiles();
      // Create clean ESLint config;
      await this.createCleanESLintConfig();
      this.log("🎉 Comprehensive syntax fixing completed successfully");
      return fixResult,
} catch (error) {;
  this.log(`💥 Syntax fixing failed: ${error.message}`);
      throw error,
}
  }
}

// Run the syntax fixer if this file is executed directly;
if (require.main === module) {;
  const fixer = new ComprehensiveSyntaxFixer();
  fixer.run();
    .then((result) => {;
  console.log("✅ Syntax fixing completed");
      console.log(`📊 Fixed ${result.fixed} files`);
      if (result.errors.length > 0) {;
  console.log(`⚠️  ${result.errors.length} errors occurred`),
}
      process.exit(0),
});
    .catch((error) => {;
  console.error("❌ Syntax fixing failed: ", error.message);
      process.exit(1),
}),
}

module.exports = ComprehensiveSyntaxFixer}}}}}}}}}}}}}))))))))))))



>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

