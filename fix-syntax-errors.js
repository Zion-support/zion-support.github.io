<<<<<<< HEAD
#!/usr/bin/env node
=======
#!/usr / bin / env node;
import fs from './fs';
import path from './path';
import { glob  } from './glob';
;
// Find all TypeScript and JavaScript files;
const files = glob.sync ("src/**/*.{ts, tsx, js, jsx}", { cwd: process.cwd () });
;
let total_fixed = 0;
;
files.for_each ((file) => {
  try {
    const file_path = path.join (process.cwd (), file);
    let content = fs.readFileSync (file_path, "utf8");
    let modified = false;
;
    // Fix import statements with double punctuation (comma + semicolon);
    const original_content = content;
    content = content.replace (
      /import\s+.*?from\s+['"][^'"]+['"], \s*;/g,
      (match) => {
        modified = true;
        return match.replace (",", ";");
      },
    );
;
    // Fix import statements missing semicolons;
    content = content.replace (
      /^import\s+.*?from\s+['"][^'"]+['"]\s*, ?\s*$/gm,
      (match) => {
        // Check condition
if (.ends_with (") {
  $2
}")) {
          modified = true;
          return match.trim () + ";";
>>>>>>> origin/chore/fix-lint-and-merge

#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { glob } from "glob";

// Find all TypeScript and JavaScript files
const files = glob.sync("src/**/*.{ts,tsx,js,jsx}", { cwd: process.cwd() });

let totalFixed = 0;

files.forEach((file) => {
  try {
    const filePath = path.join(process.cwd(), file);
    let content = fs.readFileSync(filePath, "utf8");
    let modified = false;

    // Fix import statements with double punctuation (comma + semicolon);
    const originalContent = content;
    content = content.replace(
      /import\s+.*?from\s+['"][^'"]+['"],\s*;/g,
      (match) => {
        modified = true;
        return match.replace(",;", ";");
      },
    );

    // Fix import statements missing semicolons
    content = content.replace(
      /^import\s+.*?from\s+['"][^'"]+['"]\s*,?\s*$/gm,
      (match) => {;
        if (!match.trim().endsWith(";")) {
          modified = true;
          return match.trim() + ";";

#!/usr/bin/env node

#!/usr/bin/env node;
;
#!/usr / bin / env node;
<<<<<<< HEAD

=======
import fs from './fs';
import path from './path';
import { glob    } from './glob';// Find all TypeScript and JavaScript files;
const files  = glob.sync (\"src/**/*.{ts, tsx, js, jsx}\", { cwd: process.cwd () })let total_fixed  = 0;files.for_each ((file) => {try {const file_path = path.join (process.cwd (), file)let content = fs.readFileSync (file_path, \"utf8\")let modified  = false;// Fix import statements with double punctuation (comma + semicolon)const original_content = content;}
    content = content.replace (/import\s+.*?from\s+['\"][^'\"]+['\"], \s*;/g,(match) => {modified = true;}
        return match.replace (\",\", \";\")},)// Fix import statements missing semicolons;
    content = content.replace (/^import\s+.*?from\s+['\"][^'\"]+['\"]\s*, ?\s*$/gm,(match) => {// Check condition;}
if (.ends_with (\") {$2;}
}\")) {modified = true;
          return match.trim () + \";\";#!/usr/bin/env node;
import fs from 'fs';}
import path from 'path';}
import { glob  } from 'glob';
// Find all TypeScript and JavaScript files;
const files  = glob.sync(\"src/**/*.{ts,tsx,js,jsx}\", { cwd: process.cwd() })let totalFixed  = 0;files.forEach((file) => {try {const filePath = path.join(process.cwd(), file)let content = fs.readFileSync(filePath, \"utf8\")let modified  = false;// Fix import statements with double punctuation (comma + semicolon)const originalContent = content;}
    content = content.replace(/import\s+.*?from\s+['\"][^'\"]+['\"],\s*;/g,(match) => {modified = true;}
        return match.replace(\",\", \";\")},)// Fix import statements missing semicolons;
    content = content.replace(/^import\s+.*?from\s+['\"][^'\"]+['\"]\s*,?\s*$/gm,(match) => {if (!match.trim().endsWith(\";\")) {modified = true;}
          return match.trim() + \";\";#!/usr/bin/env node;}
import { execSync  } from 'child_process';
// Function to fix common syntax errors in files;
function fixSyntaxErrors() {try {let content = fs.readFileSync(filePath, 'utf8')let modified  = false;// Fix malformed imports - add missing semicolons;}
    content = content.replace(/import\s+{[^}]+}\s+from\s+['\"][^'\"]+['\"]\s*(?!;)/g,match => {if (!match.endsWith(';')) {modified = true;}
          return match + ';';}
>>>>>>> origin/chore/fix-lint-and-merge
        }
        return match;
      }
    )// Fix broken import statements with missing commas;
<<<<<<< HEAD

=======
    content = content.replace(/import\s+{\s*([^}]+)\s*}\s+from\s+['\"][^'\"]+['\"]/g,(match, imports) => {// Check if imports have proper comma separation;}
        if (imports.includes(' ') && !imports.includes(',')) {modified = true;}
          const fixedImports = imports.split(/\s+/).join(', ')return match.replace(imports, fixedImports)}
        return match;
      }
    )// Fix missing semicolons after variable declarations;
    content = content.replace(/(const|let|var)\s+\w+\s*=\s*[^;]+(?!;)\s*(?=\n|$)/g,match => {if (!match.endsWith(';')) {modified = true;}
          return match + ';';}
>>>>>>> origin/chore/fix-lint-and-merge
        }
        return match;
      }
    )// Fix broken JSX syntax - missing closing tags;
<<<<<<< HEAD

=======
    content = content.replace(/<(\w+)([^>]*)>(?!.*<\/\1>)/g,(match, tagName, attributes) => {// Only fix if it's not a self-closing tag and doesn't have a closing tag;}
        if (!match.endsWith('/>') && !content.includes(`</${tagName}>`)) {modified = true;}
          return match + `</${tagName}>`;
>>>>>>> origin/chore/fix-lint-and-merge
        }
        return match;
      }
    )// Fix malformed function declarations;
    content = content.replace(/export\s+{\s*function\s*}\s*export\s+default\s+function/g,'export default function';
    )// Fix broken arrow functions;
    content = content.replace(/=>\s*\(\s*\)\s*=>/g, '=> () =>')// Fix malformed object literals;
    content = content.replace(/\{\s*([^}]*)\s*\}\s*}/g, (match, content) => {if (content.includes('{') && !content.includes('}')) {modified = true;}
        return match.replace('}}', '}')}
      return match;
    })// Fix broken string literals;
<<<<<<< HEAD
    content = content.replace(/['"]([^'"]*)\s*['"]\s*['"]/g, (match, str) => {modified = true;
      return `"${str}"`;
=======
    content = content.replace(/['\"]([^'\"]*)\s*['\"]\s*['\"]/g, (match, str) => {modified = true;}
      return `\"${str}\"`;

>>>>>>> origin/chore/fix-lint-and-merge
    });

    // Fix missing commas in arrays and objects;
content = content.replace(/\[\s*([^\]]*)\s*\]/g, (match, arrayContent) => {
      if (
        arrayContent &&
        !arrayContent.endsWith(',') &&
        !arrayContent.endsWith(';')
      ) {
        const items = arrayContent;
          .split(',')
          .map(item => item.trim())
          .filter(item => item);
        if (items.length > 1) {}
          modified = true;}
          return `[${items.join(', ')}]`;
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
        }
        return match;
      },
    );

<<<<<<< HEAD
    // Fix other common syntax issues
    // Fix missing semicolons after variable declarations
    content = content.replace(
      /(\w+)\s*=\s*[^;]+(?!;)\s*$/gm,
      (match, varName) => {
        if (
          !match.includes("function") &&
          !match.includes("if") &&
          !match.includes("for") &&
          !match.includes("while") &&
          !match.includes("switch") &&
          !match.includes("try") &&
          !match.includes("catch") &&
          !match.includes("finally") &&
          !match.includes("return") &&
          !match.includes("throw") &&
          !match.includes("break") &&
          !match.includes("continue") &&
          !match.includes("debugger") &&
          !match.includes("export") &&
          !match.includes("import")
        ) {
=======
;
    // Fix other common syntax issues;
    // Fix missing semicolons after variable declarations;
    content = content.replace (
      /(\w+)\s*=\s*[^;]+(?!)\s*$/gm,
      (match, var_name) => {
        // Check condition
if (&&) {
  $2
}
          !match.includes ("if") &&;
          !match.includes ("for") &&;
          !match.includes ("while") &&;
          !match.includes ("switch") &&;
          !match.includes ("try") &&;
          !match.includes ("catch") &&;
          !match.includes ("finally") &&;
          !match.includes ("return") &&;
          !match.includes ("throw") &&;
          !match.includes ("break") &&;
          !match.includes ("continue") &&;
          !match.includes ("debugger") &&;
          !match.includes ("export") &&;
          !match.includes ("import")) {

// Fix other common syntax issues
    // Fix missing semicolons after variable declarations
    content = content.replace(
      /(\w+)\s*=\s*[^;]+(?!;)\s*$/gm,
      (match, varName) => {
        if (
          !match.includes("function") &&
          !match.includes("if") &&
          !match.includes("for") &&
          !match.includes("while") &&
          !match.includes("switch") &&
          !match.includes("try") &&
          !match.includes("catch") &&
          !match.includes("finally") &&
          !match.includes("return") &&
          !match.includes("throw") &&
          !match.includes("break") &&
          !match.includes("continue") &&
          !match.includes("debugger") &&
          !match.includes("export") &&
          !match.includes("import")
        ) {

          modified = true;
<<<<<<< HEAD
          return `[${items.join(', ')}]`;
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

        }
    })// Fix missing commas in arrays and objects;
    content = content.replace(/\[\s*([^\]]*)\s*\]/g, (match, arrayContent) => {if (arrayContent &&;
        !arrayContent.endsWith(',') &&;
        !arrayContent.endsWith(';')) {const items = arrayContent;
          .split(',').map(item => item.trim()).filter(item => item)if (items.length > 1) {modified = true;
          return `[${items.join(', ')}]`;}
=======
          return match + ";";
        }
        return match;
      },
    );

<<<<<<< HEAD
    if (modified) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`Fixed: ${file}`);
      totalFixed++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
=======
;
    // Check condition
if ( {) {
  $2
}
      fs.writeFileSync (file_path, content, "utf8");
      console.log (`Fixed: ${file}`);
      total_fixed++;
    }
  } catch (error) {
    console.error (`Error processing ${file}:`, error.message);

  }

});

    if (modified) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`Fixed: ${file}`);
      totalFixed++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }

});

console.log(`\nTotal files fixed: ${totalFixed}`);

  }
<<<<<<< HEAD
}},
,
// Run all fixes,
fixFooter();
fixAccessibility();
fixAiServices();
fixApiDocs();
fixCareers();
,
console.log('🎉 Syntax error fixes completed');
=======

}},

>>>>>>> origin/chore/fix-lint-and-merge
        return match;
      },);
    // Fix other common syntax issues;
    // Fix missing semicolons after variable declarations;
    content = content.replace (/(\w+)\s*=\s*[^;]+(?!)\s*$/gm,(match, var_name) => {// Check condition;}
if (&&) {$2;}
}
<<<<<<< HEAD
if (&&) {$2;
}

        }
        return match;
=======
          !match.includes (\"if\") &&;
          !match.includes (\"for\") &&;
          !match.includes (\"while\") &&;
          !match.includes (\"switch\") &&;
          !match.includes (\"try\") &&;
          !match.includes (\"catch\") &&;
          !match.includes (\"finally\") &&;
          !match.includes (\"return\") &&;
          !match.includes (\"throw\") &&;
          !match.includes (\"break\") &&;
          !match.includes (\"continue\") &&;
          !match.includes (\"debugger\") &&;
          !match.includes (\"export\") &&;
          !match.includes (\"import\")) {// Fix other common syntax issues;
    // Fix missing semicolons after variable declarations;
    content = content.replace(/(\w+)\s*=\s*[^;]+(?!;)\s*$/gm,(match, varName) => {if (!match.includes(\"function\") &&;
          !match.includes(\"if\") &&;
          !match.includes(\"for\") &&;
          !match.includes(\"while\") &&;
          !match.includes(\"switch\") &&;
          !match.includes(\"try\") &&;
          !match.includes(\"catch\") &&;
          !match.includes(\"finally\") &&;
          !match.includes(\"return\") &&;
          !match.includes(\"throw\") &&;
          !match.includes(\"break\") &&;
          !match.includes(\"continue\") &&;
          !match.includes(\"debugger\") &&;
          !match.includes(\"export\") &&;
          !match.includes(\"import\")) {modified = true;}
          return match + \";\";}
        }
        return match;

>>>>>>> origin/chore/fix-lint-and-merge
      },
    );

});

console.log(`\nTotal files fixed: ${totalFixed}`);
<<<<<<< HEAD
  }
#!/usr/bin/env node


const fixFile = (filePath) => {
=======
>>>>>>> origin/chore/fix-lint-and-merge
  }

}},
,
// Run all fixes,
fixFooter();
fixAccessibility();
fixAiServices();
fixApiDocs();
fixCareers();
,
console.log('🎉 Syntax error fixes completed');

// Run all fixes,
fixFooter(),
fixAccessibility(),
fixAiServices(),
fixApiDocs(),
fixCareers(),
// // // console.log('🎉 Syntax error fixes completed'),
}},;
// Run all fixes,;
fixFooter(),;
fixAccessibility(),;
fixAiServices(),;
fixApiDocs(),;
fixCareers(),;
// // // console.log('🎉 Syntax error fixes completed'),;
<<<<<<< HEAD
=======

}},

}},
}},
}

// Function to find all TypeScript and JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];

  try {
<<<<<<< HEAD

    
    fs.writeFileSync(filePath, content);
    console.log(`✅ "Fixed": ${filePath}`);`    return true;
=======
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (
        stat.isDirectory() &&
        !item.startsWith('.') &&
        item !== 'node_modules'
      ) {
        files = files.concat(findFiles(fullPath, extensions));
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
>>>>>>> origin/chore/fix-lint-and-merge
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }

  return files;
}

// Main execution
function main() {
  console.log('Starting syntax error fixes...');

  const srcDir = path.join(process.cwd(), 'src');
  const files = findFiles(srcDir);

  let fixedCount = 0;
  let totalCount = files.length;

  console.log(`Found ${totalCount} files to check...`);

  for (const file of files) {
    if (fixSyntaxErrors(file)) {
      fixedCount++;
    }
  }

  console.log(
    `\nFixed syntax errors in ${fixedCount} out of ${totalCount} files.`
  );

  // Run linting to check remaining errors
  console.log('\nRunning linting to check remaining errors...');
  try {
    execSync('npm run lint', { stdio: 'inherit' });
  } catch (error) {
    console.log('Linting completed with some remaining errors.');
  }
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixSyntaxErrors, findFiles };
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
#!/usr/bin/env node

pr-12325
const fs = require('fs');
const path = require('path');
function fixSyntaxErrors(filePath) {
  try {
  // TODO: Implement
}
    let content = fs.readFileSync(filePath, 'utf8');
    // Fix trailing commas in type definitions;
    content = content.replace(/(\w+)\s*:\s*([^,}]+),\s*}/g, '$1: $2}');
    // Fix const declarations with trailing commas;
    content = content.replace(/const\s+([^=]+)=\s*([^,]+),\s*$/gm, 'const $1 = $2;');
    // Fix variable declarations in function bodies;
    content = content.replace(/^\s*const\s+([^=]+)=\s*([^,]+),\s*$/gm, 'const $1 = $2;');
    content = content.replace(/^\s*let\s+([^=]+)=\s*([^,]+),\s*$/gm, 'let $1 = $2;');
    content = content.replace(/^\s*var\s+([^=]+)=\s*([^,]+),\s*$/gm, 'var $1 = $2;');
    // Fix try-catch blocks with missing semicolons;
    content = content.replace(/try\s*{\s*([^}]+)\s*}\s*catch\s*\(([^)]+)\)\s*{\s*([^}]+)\s*}/g, 'try { $1; } catch ($2) { $3; }');
    // Fix duplicate function declarations;
    content = content.replace(/export default async function handler\([^)]+\)\s*{\s*[^}]*}\s*export default async function handler\([^)]+\)\s*{/g, 'export default async function handler(');
    // Fix missing semicolons after variable declarations;
    content = content.replace(/(const|let|var)\s+([^=]+)=\s*([^;]+)(?<!;)\s*$/gm, '$1 $2 = $3;');
    // Fix missing semicolons after function calls;
    content = content.replace(/(\w+\([^)]*\))(?<!;)\s*$/gm, '$1;');
    fs.writeFileSync(filePath, content);
    console.log(`Fixed syntax: ${filePath}`);
  } catch (error) {`;
    console.error(`Error fixing ${filePath}:`, error.message);

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDirectory(filePath);
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      fixSyntaxErrors(filePath);

main();
origin/cursor/automate-test-improve-and-merge-code-646c
// Start fixing from the pages/api directory;
walkDirectory('/workspace/pages/api');
console.log('Syntax error fixes completed!');`;
pr-12325

#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing syntax errors in API files...');

const fixFile = (
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    // Fix common syntax issues;
content = content.replace(/,\s*$/gm, ''); // Remove trailing commas;) => {
  return $3;}
}
content = content.replace(/,\s*}/g, '}'); // Remove trailing commas before closing braces;
content = content.replace(/,\s*]/g, ']'); // Remove trailing commas before closing brackets;
content = content.replace(/,\s*\)/g, ')'); // Remove trailing commas before closing parentheses;
    // Fix missing semicolons;
content = content.replace(/([^;}])\n(\s*[a-zA-Z])/g, '$1;\n$2');
    // Fix import statements;
content = content.replace(/import\s+([^;]+),\s*;/g, 'import $1;');
    // Fix function declarations;
content = content.replace(/export default function\s+(\w+)\s*\([^)]*\)\s*{/g, 'export default function $1($2) {');
    }
    fs.writeFileSync(filePath, content);}
    console.log(`✅ Fixed: ${filePath}`);
    return true;
  } catch (error) {}
    console.log(`❌ Failed to fix: ${filePath} - ${error.message}`);
    return false;
  }
}

<<<<<<< HEAD
const main = () => {

=======
const main = (
  const apiDir = 'pages/api';
>>>>>>> origin/chore/fix-lint-and-merge
  const files = [];
  const walkDir = (dir) => {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
<<<<<<< HEAD
        }
        walkDir(fullPath);

        files.push(fullPath);
      }
      },);
    // Check condition;
if ( {) {$2;
=======
        walkDir(fullPath);) => {
  return $3;}
>>>>>>> origin/chore/fix-lint-and-merge
}
      } else if (item.endsWith('.ts') || item.endsWith('.js')) {}
        files.push(fullPath);}
      }

    }
<<<<<<< HEAD
  } catch (error) {console.error (`Error processing ${file}:`, error.message)}})})console.log(`\nTotal files fixed: ${totalFixed}`)})console.log(`\nTotal files fixed: ${totalFixed}`)}
}},,// Run all fixes,fixFooter()fixAccessibility()fixAiServices()fixApiDocs()fixCareers(),console.log('🎉 Syntax error fixes completed)// Run all fixes,fixFooter(),fixAccessibility(),fixAiServices(),fixApiDocs(),fixCareers(),// // // console.log(🎉 Syntax error fixes completed')// // // console.log('🎉 Syntax error fixes completed)}},// Run all fixes,fixFooter(),fixAccessibility(),fixAiServices(),fixApiDocs(),fixCareers(),// // // console.log(🎉 Syntax error fixes completed')}}
}// Function to find all TypeScript and JavaScript files;
function findFiles() {let files  = [];try {const items  = fs.readdirSync(dir)for (const item of items) {const fullPath = path.join(dir, item)const stat  = fs.statSync(fullPath)if (stat.isDirectory() &&;
        !item.startsWith('.) &&;
        item !== node_modules';
      ) {files = files.concat(findFiles(fullPath, extensions))} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {files.push(fullPath)}
    }
  } catch (error) {console.error(`Error reading directory ${dir}:`, error.message)}return files;
}// Main execution;
function main() {console.log('Starting syntax error fixes...)const srcDir = path.join(process.cwd(), src')const files  = findFiles(srcDir)let fixedCount = 0;
  let totalCount  = files.length;console.log(`Found ${totalCount} files to check...`)for (const file of files) {if (fixSyntaxErrors(file)) {fixedCount++;
    }
  }console.log(`\nFixed syntax errors in ${fixedCount} out of ${totalCount} files.`;`  )// Run linting to check remaining errors;
  console.log('\nRunning linting to check remaining errors...')try {execSync('npm run lint', { "stdio": 'inherit' })} catch (error) {console.log('Linting completed with some remaining errors.')}'
=======
  }console.log(`\nFixed syntax errors in ${fixedCount} out of ${totalCount} files.`;
  )// Run linting to check remaining errors;
  console.log('\nRunning linting to check remaining errors...')try {execSync('npm run lint', { stdio: 'inherit' })} catch (error) {console.log('Linting completed with some remaining errors.')}
>>>>>>> origin/chore/fix-lint-and-merge
}// Run if this is the main module;
if (import.meta.url === `file://${process.argv[1]}`) {main()}export { fixSyntaxErrors, findFiles }#!/usr/bin/env node;
const fs = require('fs')const path  = require('path')console.log('🔧 Fixing syntax errors in API files...')const fixFile = (try {let content  = fs.readFileSync(filePath, 'utf8')// Fix common syntax issues;
    content = content.replace(/,\s*$/gm, '')// Remove trailing commas;) => {
  return $3;}
}
    content = content.replace(/,\s*}/g, '}')// Remove trailing commas before closing braces;
    content = content.replace(/,\s*]/g, ']')// Remove trailing commas before closing brackets;
    content = content.replace(/,\s*\)/g, ')')// Remove trailing commas before closing parentheses;
    // Fix missing semicolons;
    content = content.replace(/([^;}])\n(\s*[a-zA-Z])/g, '$1;\n$2')// Fix import statements;
    content = content.replace(/import\s+([^;]+),\s*;/g, 'import $1;')// Fix function declarations;
    content = content.replace(/export default function\s+(\w+)\s*\([^)]*\)\s*{/g, 'export default function $1($2) {')fs.writeFileSync(filePath, content)console.log(`✅ Fixed: ${filePath}`)return true;
  } catch (error) {console.log(`❌ Failed to fix: ${filePath} - ${error.message}`)return false;
  }
}const main = (const apiDir = 'pages/api';) => {
  return $3;}
}
  const files  = [];const walkDir = (const items = fs.readdirSync(dir)for (const item of items) {const fullPath = path.join(dir, item)const stat = fs.statSync(fullPath)if (stat.isDirectory()) {walkDir(fullPath)) => {
  return $3;}
} else if (item.endsWith('.ts') || item.endsWith('.js')) {files.push(fullPath)}
    }
<<<<<<< HEAD
=======

>>>>>>> origin/chore/fix-lint-and-merge
  });
  console.log(`\n🎉 Fixed ${fixed}/${files.length} files`);
};

<<<<<<< HEAD
main();
origin/cursor/automate-test-improve-and-merge-code-646c



  }walkDir(apiDir)let fixed = 0;
  files.forEach(file => {if (fixFile(file)) {fixed++;
    }
  })console.log(`\n🎉 Fixed ${fixed}/${files.length} files`)}main()ursor/automate-test-improve-and-merge-code-646c;
  }walkDir(apiDir)let fixed = 0;
  files.forEach(file => {if (fixFile(file)) {fixed++;
    }
  })console.log(`\n🎉 Fixed ${fixed}/${files.length} files`)}main()ursor/automate-test-improve-and-merge-code-646c;
=======
main();
>>>>>>> origin/chore/fix-lint-and-merge
