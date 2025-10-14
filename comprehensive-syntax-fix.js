#!/usr/bin/env node

import fs from 'fs''
import path from 'path''
import { glob } from 'glob'
// Function to fix comprehensive syntax errors
function fixComprehensiveSyntax(content) {
  let fixed = content
  // Fix unterminated string literals in import statements
  fixed = fixed.replace(/import\s+([^"]*?)\s+from\s+"([^"]*?)(?:\n|$)/g, (match, imports, module) => {'"
    if (!match.includes('"') || match.split('"').length % 2 === 0) {"
      return `import ${imports} from "${module}";\n`
    }
    return match
  })
  // Fix unterminated string literals in general - more aggressive approach'
  const lines = fixed.split('\n')
  const fixedLines = []
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i]
    // Fix unterminated string literals'"
    if (line.includes('"') && line.split('"').length % 2 === 0) {
      // Count quotes to see if we need to close"
      const quoteCount = (line.match(/"/g) || []).length
      if (quoteCount % 2 !== 0) {'"
        line = line + '"'
      }
    }
    // Fix malformed JSX attributes"
    line = line.replace(/className="([^"]*?)(?:\n|$)/g, (match, className) => {'"
      if (match.endsWith('\n') && !match.endsWith('"\n')) {"
        return `className="${className}"\n`
      }
      return match
    })
    // Fix malformed object properties
    line = line.replace(/(\w+):\s*([^,}]+)(?:\n|$)/g, (match, key, value) => {'
      if (match.endsWith('\n') && !match.includes(',') && !match.includes('}')) {
        return `${key}: ${value},\n`
      }
      return match
    })
    // Fix broken JSX tags
    line = line.replace(/<(\w+)([^>]*?)(?:\n|$)/g, (match, tag, attrs) => {'
      if (match.endsWith('\n') && !match.includes('>')) {
        return `<${tag}${attrs}>\n`
      }
      return match
    })
    fixedLines.push(line)
  }'
  fixed = fixedLines.join('\n')
  // Fix merge conflict markers
  fixed = fixed.replace(/[\s\S]*?  fixed = fixed.replace(/<<<<<<< [^\n]*[\s\S]*?[\s\S]*?  
  // Fix malformed function declarations
  fixed = fixed.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{([^}]*?)(?:\n|$)/g, (match, name, body) => {'
    if (!match.includes('}')) {
      return `const ${name}: React.FC = () => {\n${body}\n};\n`
    }
    return match
  })
  // Fix broken JSX structure
  fixed = fixed.replace(/<(\w+)([^>]*?)(?:\n|$)/g, (match, tag, attrs) => {'
    if (match.endsWith('\n') && !match.includes('>')) {
      return `<${tag}${attrs}>\n`
    }
    return match
  })
  // Fix missing semicolons in object properties
  fixed = fixed.replace(/(\w+):\s*([^,}]+)(?:\n|$)/g, (match, key, value) => {'
    if (match.endsWith('\n') && !match.includes(',')) {
      return `${key}: ${value},\n`
    }
    return match
  })
  // Fix broken JSX expressions
  fixed = fixed.replace(/\{([^}]*?)(?:\n|$)/g, (match, expr) => {'
    if (match.endsWith('\n') && !match.includes('}')) {
      return `{${expr}}\n`
    }
    return match
  })
  return fixed
}
// Function to fix specific file patterns
function fixFile(filePath) {
  try {'
    let content = fs.readFileSync(filePath, 'utf8')
    const originalContent = content
    // Apply fixes
    content = fixComprehensiveSyntax(content)
    // If content changed, write it back
    if (content !== originalContent) {'
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`Fixed: ${filePath}`)
      return true
    }
    return false
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message)
    return false
  }
}
// Main execution
async function main() {'
  console.log('Starting comprehensive syntax error fixes...')
  // Find all TypeScript and TSX files
  const patterns = ['
    'app/**/*.tsx''
    'app/**/*.ts''
    '**/*.tsx''
    '**/*.ts'
  ]
  let totalFixed = 0
  for (const pattern of patterns) {
    const files = await glob(pattern, {'
      ignore: ['node_modules/**', 'dist/**', '.next/**'] 
    })
    for (const file of files) {
      if (fixFile(file)) {
        totalFixed++
      }
    }
  }
  console.log(`Fixed ${totalFixed} files`)
}
main().catch(console.error)"
import React from "react";"'"
#!/usr/bin/env node import fs from "fs"; import { glob    } from "glob"; // Function to fix common syntax issues';'"'"
function fixSyntaxIssues(content) {} // Fix import statements with stray semicolons and quotes content = content .replace(/import\s+([^;]+);/g, 'import $1;)' .replace(/import\s+([^;]+);/g, 'import $1;)' .replace(/import\s+([^;]+);/g, 'import $1;)' .replace(/from\s+'([^']+)';/g, "from '$1';)"' .replace(/from\s+'([^']+)';/g, "from '$1';)"' .replace(/from\s+'([^']+)';/g, "from '$1';); // Fix JSX className attributes that are missing spaces content = content .replace(/<(\w+)classNam e=/g, '<$1 classNam e=')' .replace(/<(\w+)onClic k=/g, '<$1 onClic k=')' .replace(/<(\w+)onSubmi t=/g, '<$1 onSubmi t=')' .replace(/<(\w+)onChang e=/g, '<$1 onChang e=')' .replace(/<(\w+)styl e=/g, '<$1 styl e=')' .replace(/<(\w+)i d=/g, '<$1 i d=')' .replace(/<(\w+)typ e=/g, '<$1 typ e=')' .replace(/<(\w+)nam e=/g, '<$1 nam e=')' .replace(/<(\w+)valu e=/g, '<$1 valu e=')' .replace(/<(\w+)placeholde r=/g, '<$1 placeholde r=')' .replace(/<(\w+)disable d=/g, '<$1 disable d=')' .replace(/<(\w+)checke d=/g, '<$1 checke d=')' .replace(/<(\w+)require d=/g, '<$1 require d=')' .replace(/<(\w+)readOnl y=/g, '<$1 readOnl y=')' .replace(/<(\w+)autoFocu s=/g, '<$1 autoFocu s=')' .replace(/<(\w+)autoComplet e=/g, '<$1 autoComplet e=')' .replace(/<(\w+)tabInde x=/g, '<$1 tabInde x=')' .replace(/<(\w+)rol e=/g, '<$1 rol e=')' .replace(/<(\w+) aria-/g, '<$1 aria-') // Fix unterminated strings content = content .replace(/"([^"]*?)\n/g, '"$1"\n')"' .replace(/'([^']*?)\n/g, "'$1'\n")"' .replace(/`([^`]*?)\n/g, '`$1`\n')'` .replace(/"([^"]*?)$/g, '"$1"')"' .replace(/'([^']*?)$/g, "'$1'")"' .replace(/`([^`]*?)$/g, '`$1`')` // Fix stray semicolons and quotes content = content .replace(/\s*/g, ')' .replace(/\s*'/g, ')' .replace(/\s*"/g, ')"' .replace(/\s+/g, ')' .replace(/\s+/g, ') // Fix JSX closing tags content = content .replace(/>>\s*;/g, '>')' .replace(/;\s*>/g, '>'); // Fix malformed JSX expressions content = content .replace(/\{([^}]*?)\n/g, '{$1}\n')' .replace(/\{([^}]*?)$/g, '{$1}'); // Fix className and other attribute issues content = content .replace(/classNam e="([^"]*?)>([^>]*?)"/g, 'classNam e="$1"$2>')"' .replace(/classNam e="([^"]*?)>\s*>/g, 'classNam e="$1">')"' .replace(/onClic k={([^}]*?)}\s*classNam e=/g, 'onClic k={$1} classNam e=')' .replace(/onSubmi t={([^}]*?)}\s*classNam e=/g, 'onSubmi t={$1} classNam e=')' .replace(/onChang e={([^}]*?)}\s*classNam e=/g, 'onChang e={$1} classNam e='); // Fix missing spaces in JSX content = content .replace(/(\w+)(\w+)=/g, '$1 $2=')' .replace(/(\w+)(\w+)>/g, '$1 $2>'); // Clean up multiple spaces and newlines content = content .replace(/\s{2,}/g, ' ')' .replace(/\n{3,}/g, '\n\n')' .replace(/\s+\n/g, '\n')' .replace(/\n\s+/g, '\n'); return content; } // Function to process a single file"'``;`;"``'"`'
function processFile(filePath) {} try {} let content = fs.readFileSync(filePath, 'utf8'); const originalContent = content; content = fixSyntaxIssues(content); if (content !== originalContent) {} fs.writeFileSync(filePath, content, 'utf8'); console.log(`Fixed: ${filePath}`);` return true; } return false; } catch (error) {} console.error(`Error processing ${filePath}:`, error.message);` return false; }'``'``'`"
} // Main execution function"'"
async function main() {} const patterns = [ 'app/**/*.{ts,tsx,js,jsx}',' 'api/**/*.{ts,tsx,js,jsx}',' '*.{ts,tsx,js,jsx}]; let totalFixed = 0; for (const pattern of patterns) {} const files = await glob(pattern, { ignore: ['node_modules/**', 'dist/**', '.next/**'] }); for (const file of files) {} if (processFile(file)) {} totalFixed++; } } console.log(`\nTotal files fixed: ${totalFixed}`);` console.log('Syntax fixing completed!'); } main().catch(console.error);`"'``"'"``'"`
'"