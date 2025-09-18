



>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
const fs = require('fs');
const { execSync } = require('child_process');
console.log('🔧 Final Syntax Cleanup');
console.log('=');

// Function to fix all remaining syntax errors
function fixAllSyntax(content) {
  return content
    // Fix malformed JSX tags
    .replace(/<h3([^>]*)>([^<]+)><\/h3>/gm, '<h3$1>$2</h3>')
    .replace(/<h2([^>]*)>([^<]+)><\/h2>/gm, '<h2$1>$2</h2>')
    .replace(/<h1([^>]*)>([^<]+)><\/h1>/gm, '<h1$1>$2</h1>')
    .replace(/<p([^>]*)>([^<]+)><\/p>/gm, '<p$1>$2</p>')
    .replace(/<span([^>]*)>([^<]+)><\/span>/gm, '<span$1>$2</span>')
    .replace(/<div([^>]*)>([^<]+)><\/div>/gm, '<div$1>$2</div>')
    .replace(/<motion\.div([^>]*)>([^<]+)><\/motion\.div>/gm, '<motion.div$1>$2</motion.div>')
    // Fix malformed meta tags
    .replace(/<meta([^>]+) \/ \/>/gm, '<meta$1 />')
    .replace(/<meta([^>]+) \/>/gm, '<meta$1 />')
    // Fix object literal syntax
    .replace(/\{\s*$/gm, '{')
    .replace(/\[\s*$/gm, '[')
    .replace(/\(\s*$/gm, '(')
    // Fix semicolons in wrong places
    .replace(/;\s*$/gm, '')
    .replace(/;\s*}/g, '}')
    .replace(/;\s*]/g, ']')
    .replace(/;\s*\)/g, ')')
    // Fix array and object syntax
    .replace(/\[\s*\{\s*$/gm, '[{')
    .replace(/\{\s*\[\s*$/gm, '{[')
    .replace(/\}\s*\]\s*$/gm, '}]')
    .replace(/\]\s*\}\s*$/gm, ']}')
    // Fix empty objects and arrays
    .replace(/\{\s*\}/g, '{}')
    .replace(/\[\s*\]/g, '[]')
    // Fix trailing commas
    .replace(/,\s*}/g, '}')
    .replace(/,\s*]/g, ']')
    .replace(/,\s*\)/g, ')')
    // Clean up extra semicolons
    .replace(/;;+/g, ';')
    .replace(/;\s*;/g, ';')
    // Clean up whitespace
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .replace(/\s+$/gm, '');
}
// Files to fix
const filesToFix = [
  'pages/about.tsx',
  'pages/blog.tsx',
  'pages/ai-services.tsx',
  'pages/api.tsx',
  'pages/accessibility.tsx',
  'pages/careers.tsx',
  'components/Header.tsx',
  'components/Footer.tsx',
  'components/Layout.tsx',
  'components/layout/MainLayout.tsx'
];
let totalFixed = 0;
console.log('🔍 Fixing syntax errors in all files...');
for (const file of filesToFix) {
  try {
    if (!fs.existsSync(file)) {
      console.log(`⚠️  File not found: ${file}`);
      continue;
    }
    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;
    content = fixAllSyntax(content);
    if (content !== originalContent) {
      fs.writeFileSync(file, content);
      console.log(`✅ Fixed ${file}`);
      totalFixed++;
    }
  } catch (error) {
    console.log(`❌ Error fixing ${file}: ${error.message}`);
  }
}
console.log(`\n✅ Fixed ${totalFixed} files`);



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



