<<<<<<< HEAD
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing JSX syntax errors...');

class JSXSyntaxFixer {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
=======
#!/usr/bin/env node;
const fs = require("fs");
// Function to fix JSX syntax errors;
function fixJSXSyntaxErrors(filePath) {;
  try {;
  let content = fs.readFileSync(filePath, "utf8");
    let modified = false;
    // Fix JSX attribute semicolons;
    const fixes = [;
  // Fix title attribute semicolons;
      { pattern: /title="([^"]*);"/g, replacement: "title="$1"" },
      { pattern: /title="([^"]*);"/g, replacement: "title="$1"" },
      // Fix description attribute semicolons;
      { pattern: /description="([^"]*);"/g, replacement: "description="$1"" },
      { pattern: /description="([^"]*);"/g, replacement: "description="$1"" },
      // Fix keywords attribute semicolons;
      { pattern: /keywords="([^"]*);"/g, replacement: "keywords="$1"" },
      { pattern: /keywords="([^"]*);"/g, replacement: "keywords="$1"" },
      // Fix className attribute semicolons;
      { pattern: /className="([^"]*);"/g, replacement: "className="$1"" },
      { pattern: /className="([^"]*);"/g, replacement: "className="$1"" },
      // Fix JSX closing tag semicolons;
      { pattern: /(\/>);/g, replacement: "$1" },
      { pattern: /(<\/[^>]+>);/g, replacement: "$1" },
      // Fix JSX opening tag semicolons;
      { pattern: /(>);/g, replacement: "$1" },
      // Fix array element semicolons in JSX;
      { pattern: /"([^"]*);",/g, replacement: ""$1"," },
      { pattern: /"([^"]*);",/g, replacement: ""$1"," },
    ];
    fixes.forEach(fix => {;
  const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {;
  content = newContent;
        modified = true;,
}
    });
    if (modified) {;
  fs.writeFileSync(filePath, content, `utf8`);
      console.log(`Fixed JSX syntax errors in: ${filePath}`);
      return true;,
}
    return false;,
} catch (error) {;
  console.error(`Error fixing ${filePath }:`, error.message);
    return false;,
}
}

// Files that need JSX syntax fixes;
const filesToFix = [;
  `pages/NotFound.tsx`,
  "pages/enhanced-home.tsx",
  "pages/index.p.tsx",
  "pages/pricing-guide.tsx",
  "pages/sitemap.tsx",
];
console.log("🔧 Fixing JSX syntax errors...');
let fixedCount = 0;
filesToFix.forEach(file => {;
  if (fs.existsSync(file)) {;
  if (fixJSXSyntaxErrors(file)) {;
  fixedCount++;,
}
>>>>>>> origin/automation-fixes
  }

  log(message) {
    console.log(message);
  }

  // Fix JSX syntax errors
  fixJSXErrors(content) {
    let fixed = content;

    // Remove any BOM or hidden characters
    fixed = fixed.replace(/^\uFEFF/, '');
    
    // Fix malformed JSX closing tags
    fixed = fixed.replace(/<\/[A-Z][a-zA-Z]*Element>/g, '');
    
    // Fix malformed generic type syntax
    fixed = fixed.replace(/=>\s*<\/[a-zA-Z]+>/g, '=>');
    fixed = fixed.replace(/=>\s*<\/[A-Z][a-zA-Z]*>/g, '=>');
    
    // Fix malformed JSX attributes
    fixed = fixed.replace(/className="text-sm text-gray-500">\{loading \? 'Translating…' : error \? `Error: \$\{error\}` : 'Ready'\}/g, 'className="text-sm text-gray-500">{loading ? \'Translating…\' : error ? `Error: ${error}` : \'Ready\'}</div>');
    
    // Fix malformed input tags
    fixed = fixed.replace(/onChange=\{\(e\) => setProtocolName\(e\.<\/input>target\.value\)\}/g, 'onChange={(e) => setProtocolName(e.target.value)}');
    fixed = fixed.replace(/onChange=\{\(e\) => setTokenS<\/input>ymbol\(e\.target\.value\)\}/g, 'onChange={(e) => setTokenSymbol(e.target.value)}');
    
    // Fix malformed useMemo syntax
    fixed = fixed.replace(/useM<\/boolean>emo/g, 'useMemo');
    fixed = fixed.replace(/useM<\/[a-zA-Z]*>emo/g, 'useMemo');
    
    // Fix malformed Promise syntax
    fixed = fixed.replace(/Promise<\(resolve, reject\) =>/g, 'Promise<string>');
    fixed = fixed.replace(/Promise<\(resolve, reject\) =><\/string>/g, 'Promise<string>');
    
    // Fix malformed useMemo generic syntax
    fixed = fixed.replace(/useMemo\(\(\) =><\/[A-Z][a-zA-Z]*>/g, 'useMemo(() =>');
    
    // Fix malformed useEffect generic syntax
    fixed = fixed.replace(/useEffect\(\(\) =><\/[a-zA-Z]+>/g, 'useEffect(() =>');
    
    // Fix malformed useState generic syntax
    fixed = fixed.replace(/useState<[^>]*>\([^)]*\) =><\/[a-zA-Z]+>/g, (match) => {
      return match.replace(/=>\s*<\/[a-zA-Z]+>/, '');
    });

    // Fix malformed variable declarations
    fixed = fixed.replace(/allEndpoint<\/string>s/g, 'allEndpoints');
    
    // Fix malformed JSX return statements
    fixed = fixed.replace(/return \(\s*<nav/g, 'return (\n    <nav');
    fixed = fixed.replace(/return \(\s*<div/g, 'return (\n    <div');
    
    // Fix malformed template literals - simplified
    fixed = fixed.replace(/`\{[^}]*\$\{[^}]*\}[^}]*\}`/g, '`{loading ? \'Translating…\' : error ? `Error: ${error}` : \'Ready\'}`');

    return fixed;
  }

  // Process a single file
  async processFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        this.log(`⚠️ File not found: ${filePath}`);
        return false;
      }

      const content = fs.readFileSync(filePath, 'utf8');
      const fixed = this.fixJSXErrors(content);

      // Only write if content changed
      if (fixed !== content) {
        fs.writeFileSync(filePath, fixed, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed: ${filePath}`);
        return true;
      }

      return false;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`❌ Error processing ${filePath}: ${error.message}`);
      return false;
    }
  }

  // Find all component files
  findComponentFiles() {
    const files = [];
    const extensions = ['.tsx', '.jsx'];
    const ignoreDirs = ['node_modules', '.git', '.next', 'dist', 'build', 'out'];

    const scanDir = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);

          if (stat.isDirectory()) {
            if (!ignoreDirs.includes(item)) {
              scanDir(fullPath);
            }
          } else if (stat.isFile()) {
            const ext = path.extname(item);
            if (extensions.includes(ext)) {
              files.push(fullPath);
            }
          }
        }
      } catch (error) {
        this.log(`⚠️ Error scanning directory ${dir}: ${error.message}`);
      }
    };

    scanDir(path.join(__dirname, 'components'));
    return files;
  }

  // Run the fixer
  async run() {
    try {
      this.log('🔍 Scanning for component files to fix...');
      const files = this.findComponentFiles();
      this.log(`📁 Found ${files.length} component files to process`);

      let fixedCount = 0;
      for (const file of files) {
        const wasFixed = await this.processFile(file);
        if (wasFixed) {
          fixedCount++;
        }
      }

      this.log(`🎉 Fixed ${fixedCount} files out of ${files.length} processed`);
      this.log(`❌ ${this.errors.length} errors encountered`);

      return { success: true, fixedCount, errorCount: this.errors.length };
    } catch (error) {
      this.log(`❌ Fatal error: ${error.message}`);
      return { success: false, error: error.message };
    }
  }
}

// Run the fixer
const fixer = new JSXSyntaxFixer();
fixer.run().then(result => {
  if (result.success) {
    console.log(`✅ JSX syntax fixer completed successfully! Fixed ${result.fixedCount} files.`);
    process.exit(0);
  } else {
    console.log(`❌ JSX syntax fixer failed: ${result.error}`);
    process.exit(1);
  }
}).catch(error => {
  console.error(`❌ Unexpected error: ${error.message}`);
  process.exit(1);
});