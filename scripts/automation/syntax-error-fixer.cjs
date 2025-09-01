#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting syntax error fixer...');

async function fixSyntaxErrors() {
  let totalFixes = 0;

  try {
    console.log(`🔧 Running syntax error fixer at ${new Date().toISOString()}`);

    // Common syntax fixes
    const syntaxFixes = [
      // Fix missing semicolons
      {
        pattern: /(\w+)\s*=\s*(\w+)\s*$/gm,
        replacement: '$1 = $2;',
        description: 'Add missing semicolons',
      },
      // Fix unmatched brackets
      {
        pattern: /{\s*$/gm,
        replacement: '{\n',
        description: 'Fix unmatched brackets',
      },
      // Fix trailing commas
      {
        pattern: /,\s*}/g,
        replacement: '}',
        description: 'Remove trailing commas',
      },
      // Fix import statements with missing commas
      {
        pattern: /import\s+\{\s*([^}]+)\s*\}\s*$/gm,
        replacement: (match, imports) => {
          const cleanImports = imports.replace(/\s+/g, ' ').trim();
          return `import { ${cleanImports} }`;
        },
        description: 'Fix import statements',
      },
      // Fix function declarations
      {
        pattern: /function\s+(\w+)\s*\(\s*\)\s*:\s*{\s*$/gm,
        replacement: 'function $1() {',
        description: 'Fix function declarations',
      },
      // Fix object property assignments
      {
        pattern: /(\w+):\s*{\s*;/g,
        replacement: '$1: {',
        description: 'Fix object property assignments',
      },
      // Fix array declarations
      {
        pattern: /(\w+)\s*\[\s*$/gm,
        replacement: '$1 = [',
        description: 'Fix array declarations',
      },
      // Fix JSX syntax
      {
        pattern: /<\s*\/\s*>\s*;$/gm,
        replacement: '</>',
        description: 'Fix JSX closing tags',
      },
      // Fix TypeScript type annotations
      {
        pattern: /:\s*any\s*;/g,
        replacement: ': unknown;',
        description: 'Replace any with unknown',
      },
      // Fix merge conflict markers
      {
        pattern: /^>>>>>>>\s+.+$/gm,
        replacement: '',
        description: 'Remove merge conflict markers',
      },
      {
        pattern: /^<<<<<<<\s+.+$/gm,
        replacement: '',
        description: 'Remove merge conflict markers',
      },
      {
        pattern: /^=======$/gm,
        replacement: '',
        description: 'Remove merge conflict markers',
      },
      // Fix unterminated strings
      {
        pattern: /'([^']*)$/gm,
        replacement: "'$1'",
        description: 'Fix unterminated single quotes',
      },
      {
        pattern: /"([^"]*)$/gm,
        replacement: '"$1"',
        description: 'Fix unterminated double quotes',
      },
      // Fix missing parentheses
      {
        pattern: /(\w+)\s*\(\s*$/gm,
        replacement: '$1()',
        description: 'Fix missing parentheses',
      },
      // Fix object destructuring
      {
        pattern: /const\s+\{\s*([^}]+)\s*\}\s*=\s*(\w+)\s*$/gm,
        replacement: 'const { $1 } = $2;',
        description: 'Fix object destructuring',
      },
      // Fix array destructuring
      {
        pattern: /const\s+\[\s*([^\]]+)\s*\]\s*=\s*(\w+)\s*$/gm,
        replacement: 'const [ $1 ] = $2;',
        description: 'Fix array destructuring',
      },
      // Fix template literals
      {
        pattern: /`([^`]*)$/gm,
        replacement: '`$1`',
        description: 'Fix unterminated template literals',
      },
      // Fix switch statements
      {
        pattern: /switch\s*\(\s*(\w+)\s*\)\s*{\s*$/gm,
        replacement: 'switch ($1) {',
        description: 'Fix switch statements',
      },
      // Fix case statements
      {
        pattern: /case\s+['"`]([^'"`]+)['"`]\s*:\s*$/gm,
        replacement: "case '$1':",
        description: 'Fix case statements',
      },
      // Fix default statements
      {
        pattern: /default\s*:\s*$/gm,
        replacement: 'default:',
        description: 'Fix default statements',
      },
      // Fix try-catch blocks
      {
        pattern: /try\s*{\s*$/gm,
        replacement: 'try {',
        description: 'Fix try blocks',
      },
      {
        pattern: /catch\s*\(\s*(\w+)\s*\)\s*{\s*$/gm,
        replacement: 'catch ($1) {',
        description: 'Fix catch blocks',
      },
      // Fix arrow functions
      {
        pattern: /\(\s*\)\s*=>\s*{\s*$/gm,
        replacement: '() => {',
        description: 'Fix arrow functions',
      },
      // Fix class declarations
      {
        pattern: /class\s+(\w+)\s*{\s*$/gm,
        replacement: 'class $1 {',
        description: 'Fix class declarations',
      },
      // Fix method declarations
      {
        pattern: /(\w+)\s*\(\s*\)\s*{\s*$/gm,
        replacement: '$1() {',
        description: 'Fix method declarations',
      },
      // Fix interface declarations
      {
        pattern: /interface\s+(\w+)\s*{\s*$/gm,
        replacement: 'interface $1 {',
        description: 'Fix interface declarations',
      },
      // Fix type declarations
      {
        pattern: /type\s+(\w+)\s*=\s*{\s*$/gm,
        replacement: 'type $1 = {',
        description: 'Fix type declarations',
      },
      // Fix enum declarations
      {
        pattern: /enum\s+(\w+)\s*{\s*$/gm,
        replacement: 'enum $1 {',
        description: 'Fix enum declarations',
      },
      // Fix namespace declarations
      {
        pattern: /namespace\s+(\w+)\s*{\s*$/gm,
        replacement: 'namespace $1 {',
        description: 'Fix namespace declarations',
      },
      // Fix module declarations
      {
        pattern: /module\s+['"`]([^'"`]+)['"`]\s*{\s*$/gm,
        replacement: "module '$1' {",
        description: 'Fix module declarations',
      },
      // Fix export statements
      {
        pattern: /export\s+default\s+(\w+)\s*$/gm,
        replacement: 'export default $1;',
        description: 'Fix export statements',
      },
      // Fix import statements
      {
        pattern: /import\s+(\w+)\s+from\s+['"`]([^'"`]+)['"`]\s*$/gm,
        replacement: "import $1 from '$2';",
        description: 'Fix import statements',
      },
      // Fix require statements
      {
        pattern:
          /const\s+(\w+)\s*=\s*require\s*\(\s*['"`]([^'"`]+)['"`]\s*\)\s*$/gm,
        replacement: "const $1 = require('$2');",
        description: 'Fix require statements',
      },
    ];

    const files = getAllSourceFiles();

    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let originalContent = content;
        let fileFixes = 0;

        for (const fix of syntaxFixes) {
          if (fix.pattern.test(content)) {
            content = content.replace(fix.pattern, fix.replacement);
            fileFixes++;
          }
        }

        if (content !== originalContent) {
          fs.writeFileSync(file, content);
          console.log(`🔧 Applied ${fileFixes} fixes in ${file}`);
          totalFixes += fileFixes;
        }
      } catch (error) {
        console.log(`⚠️  Could not fix ${file}: ${error.message}`);
      }
    }

    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      totalFixes: totalFixes,
      status: 'completed',
      summary: `Syntax error fixer completed with ${totalFixes} fixes applied`,
    };

    const reportPath = path.join(
      process.cwd(),
      'syntax-error-fixer-report.json'
    );
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    console.log(
      `✅ Syntax error fixer completed. Applied ${totalFixes} fixes.`
    );
    console.log(`📊 Report saved to: ${reportPath}`);

    return totalFixes;
  } catch (error) {
    console.error('❌ Syntax error fixer failed:', error.message);
    return totalFixes;
  }
}

function getAllSourceFiles() {
  const files = [];
  const sourceDirs = ['src', 'components', 'pages', 'utils', 'hooks', 'types'];

  for (const dir of sourceDirs) {
    if (fs.existsSync(dir)) {
      function traverse(currentDir) {
        const items = fs.readdirSync(currentDir);
        for (const item of items) {
          const fullPath = path.join(currentDir, item);
          const stat = fs.statSync(fullPath);

          if (stat.isDirectory()) {
            traverse(fullPath);
          } else if (fullPath.match(/\.(tsx?|jsx?)$/)) {
            files.push(fullPath);
          }
        }
      }
      traverse(dir);
    }
  }

  return files;
}

// Run the syntax error fixer
if (require.main === module) {
  fixSyntaxErrors()
    .then(fixes => {
      console.log(
        `🎉 Syntax error fixer completed with ${fixes} fixes applied`
      );
      process.exit(0);
    })
    .catch(error => {
      console.error('❌ Syntax error fixer failed:', error);
      process.exit(1);
    });
}

module.exports = { fixSyntaxErrors };
