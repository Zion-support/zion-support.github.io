#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🔧 Fixing final syntax issues...');

// Function to fix final syntax issues
function fixFinalSyntaxIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let changesMade = false;

    // Fix specific patterns
    const fixes = [
      // Fix import statements with missing semicolons
      {
        from: /import { ([^}]+) } from '([^']+)',/g,
        to: "import { $1 } from '$2';",
      },
      {
        from: /import { ([^}]+) } from "([^"]+)",/g,
        to: 'import { $1 } from "$2";',
      },

      // Fix const declarations with missing semicolons
      { from: /const baseUrl = '([^']+)',/g, to: "const baseUrl = '$1';" },
      { from: /const baseUrl = "([^"]+)",/g, to: 'const baseUrl = "$1";' },

      // Fix try-catch blocks with duplicate catch
      { from: /} catch \{  \} catch \(error\) \{/g, to: '} catch (error) {' },
      {
        from: /} catch \{;\s*return \{  \} catch \(error\) \{/g,
        to: '} catch (error) {\n    return {};',
      },

      // Fix missing closing braces
      {
        from: /if \(req\.method !== 'POST'\) \{\s*res\.setHeader\('Allow', 'POST'\);\s*return res\.status\(405\)\.end\('Method Not Allowed'\);\s*\} catch \(error\) \{/g,
        to: "if (req.method !== 'POST') {\n    res.setHeader('Allow', 'POST');\n    return res.status(405).end('Method Not Allowed');\n  }\n} catch (error) {",
      },

      // Fix nested try-catch blocks
      {
        from: /try \{ ensureAdmin\(user\) \} catch \(e: any\) \{ return res\.status\(e\.statusCode \|\| 403\)\.json\(\{ error: 'Forbidden' \}\)   \} catch \(error\) \{/g,
        to: "try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) }\n  } catch (error) {",
      },

      // Fix missing semicolons
      {
        from: /(\w+)\n(export|import|const|let|var|function|class)/g,
        to: '$1;\n$2',
      },

      // Fix extra spaces and formatting
      { from: /  \} catch \(error\) \{/g, to: '  } catch (error) {' },
      { from: /    return \{\};/g, to: '    return {};' },

      // Fix missing closing braces in try-catch
      {
        from: /try \{\s*const user = parseUserFromRequest\(req\);\s*try \{ ensureAdmin\(user\) \} catch \(e: any\) \{ return res\.status\(e\.statusCode \|\| 403\)\.json\(\{ error: 'Forbidden' \}\)   \} catch \(error\) \{/g,
        to: "try {\n  const user = parseUserFromRequest(req);\n  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) }\n  // Add proper error handling here\n} catch (error) {",
      },
    ];

    fixes.forEach(fix => {
      if (fix.from.test(content)) {
        content = content.replace(fix.from, fix.to);
        changesMade = true;
      }
    });

    // Specific fixes for problematic files
    if (filePath.includes('data/api-docs/v1.ts')) {
      content = content.replace(
        /import { ApiDocsSpec } from '\.\/types',/g,
        "import { ApiDocsSpec } from './types';"
      );
      content = content.replace(
        /const baseUrl = 'https: \/\/api\.zion\.os',/g,
        "const baseUrl = 'https://api.zion.os';"
      );
      changesMade = true;
    }

    if (filePath.includes('admin/analytics/summary.ts')) {
      content = content.replace(
        /} catch \{  \} catch \(error\) \{/g,
        '} catch (error) {'
      );
      changesMade = true;
    }

    if (filePath.includes('admin/kyc-queue.ts')) {
      content = content.replace(
        /} catch \{;\s*return \{  \} catch \(error\) \{/g,
        '} catch (error) {\n    return {};'
      );
      changesMade = true;
    }

    if (filePath.includes('admin/learn/course.ts')) {
      content = content.replace(
        /if \(req\.method !== 'POST'\) \{\s*res\.setHeader\('Allow', 'POST'\);\s*return res\.status\(405\)\.end\('Method Not Allowed'\);\s*\} catch \(error\) \{/g,
        "if (req.method !== 'POST') {\n    res.setHeader('Allow', 'POST');\n    return res.status(405).end('Method Not Allowed');\n  }\n} catch (error) {"
      );
      changesMade = true;
    }

    if (filePath.includes('admin/moderation/flags/[id].ts')) {
      content = content.replace(
        /try \{ ensureAdmin\(user\) \} catch \(e: any\) \{ return res\.status\(e\.statusCode \|\| 403\)\.json\(\{ error: 'Forbidden' \}\)   \} catch \(error\) \{/g,
        "try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: 'Forbidden' }) }\n  } catch (error) {"
      );
      changesMade = true;
    }

    // Clean up extra whitespace and newlines
    content = content.replace(/\n{3,}/g, '\n\n');
    content = content.replace(/\s+$/gm, '');

    if (changesMade || content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed final syntax in: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
function main() {
  console.log('🚀 Starting final syntax fix...\n');

  const filesToFix = [
    'data/api-docs/v1.ts',
    'pages/api/admin/analytics/summary.ts',
    'pages/api/admin/kyc-queue.ts',
    'pages/api/admin/learn/course.ts',
    'pages/api/admin/moderation/flags/[id].ts',
  ];

  let fixedCount = 0;

  for (const file of files) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      let originalContent = content;

      // Fix missing closing braces for classes
      if (content.includes('class ') && !content.includes('}')) {
        content = content.replace(/(\s*)$/, '\n}');
      }

      // Fix missing closing braces for functions
      if (content.includes('function ') && !content.includes('}')) {
        content = content.replace(/(\s*)$/, '\n}');
      }

      // Fix missing closing braces for interfaces
      if (content.includes('interface ') && !content.includes('}')) {
        content = content.replace(/(\s*)$/, '\n}');
      }

      // Fix missing closing braces for objects
      if (
        content.includes('const ') &&
        content.includes('= {') &&
        !content.includes('}')
      ) {
        content = content.replace(/(\s*)$/, '\n}');
      }

      // Fix missing semicolons
      if (content.includes('export ') && !content.includes(';')) {
        content = content.replace(/(export [^;]+)$/gm, '$1;');
      }

      // Fix incomplete JSX
      if (content.includes('<') && !content.includes('>')) {
        content = content.replace(/<[^>]*$/, '');
      }

      if (content !== originalContent) {
        fs.writeFileSync(file, content);
        console.log(`✅ Fixed ${file}`);
        fixedCount++;
      }
    } catch (error) {
      console.log(`❌ Error fixing ${file}: ${error.message}`);
    }
  }

  console.log(`\n📊 Fixed ${fixedCount} files`);
  return fixedCount;
}

// Run the fixer
const fixedCount = fixFinalSyntaxIssues();

if (fixedCount > 0) {
  console.log('\n🎉 Final syntax issues fixed successfully!');
} else {
  console.log('\n✅ No final syntax issues found - all clean!');
}
