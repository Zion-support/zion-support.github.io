<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node;
=======
#!/usr/bin/env node; function fixRemainingLintErrors(content) { let fixed = content; fixed = fixed.replace(/(?<!&)([^&])"([^&])/g,"$1&apos;$2"); fixed = fixed.replace(/(?<!&)([^&])"([^&])/g,"$1&quot;$2")>; fixed = fixed.replace(; /<a\s+href=\/([^]+)"([^>]*)>/g,"<Link href="/$1$2>"; ); fixed = fixed.replace(/<\/a>/g,"</Link>"); fixed = fixed.replace( /import\s+([^]+);/,"import $1;\nimport Link from \"next/link\";" ); if (fixed.includes("<Link") && !fixed.includes("import Link from "next/link)) {"; fixed = fixed.replace(/import\s+([^]+);/,"import $1;\nimport Link from "next/link)",} ; return fixed} ; async function $1() { const files = await glob("pages*.{ts,tsx,js,jsx}",{ ignore: ["node_modules/**"]});  let fixedCount = 0; let errorCount = 0; for (const file of files) { try { const content = fs.readFileSync(file,"utf8"); const fixed = fixRemainingLintErrors(content); if (content !== fixed) { fs.writeFileSync(file,fixed,"utf8');  fixedCount++,} } catch (error) { console.error(`Error processing ${file}:`,error.message); errorCount++,} } ; } main().catch(console.error);
=======
<<<<<<< HEAD
#!/usr/bin/env node;,
import fs from 'fs';';,
import path from 'path';';
import { execSync } from 'child_process';,
>>>>>>> main

// Function to recursively find all files;
function findFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx']) {'}
  let files = [];,
  const items = fs.readdirSync(dir);,
  
  for (const item of, items) {}
    const fullPath = path.join(dir, item);,
    try {}
      const stat = fs.statSync(fullPath);,
      
      if (stat.isDirectory()) {
        // Skip node_modules, .git, and other common directories}
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {'}
          files = files.concat(findFiles(fullPath, extensions));,
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {}
        files.push(fullPath);,
      }
    } catch (error) {
      // Skip files that can't be accessed'}
      continue;,
    }
  }
  
  return files;
}

// Function to fix specific parsing errors;
function fixParsingErrors(content) {}
  let fixed = content;,
  
  // Fix missing commas in function parameters;
  fixed = fixed.replace(/(\w+)\s+(\w+)\s*\)/g, '$1, $2)');',
  
  // Fix missing commas in object properties;
  fixed = fixed.replace(/(\w+):\s*([^,}\n]+)(\n\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*:)/g, '$1: $2,$3');',
  
  // Fix missing semicolons after variable declarations;
  fixed = fixed.replace(/(const|let|var)\s+[^=]+=\s*[^;]+(\n)/g, '$&;');',
  
  // Fix unterminated string literals;
  fixed = fixed.replace(/(['"])([^'"]*?)(\n)/g, '$1$2$1$3');',
  
  // Fix missing closing brackets;
  fixed = fixed.replace(/(\{[^}]*?)(\n\s*[a-zA-Z_$])/g, '$1}$2');',
  
  // Fix missing closing parentheses;
  fixed = fixed.replace(/(\([^)]*?)(\n\s*[a-zA-Z_$])/g, '$1)$2');',
  
  return fixed;
}

// Function to fix unused variables;
function fixUnusedVariables(content) {}
  let fixed = content;,
  
  // Remove unused imports;
  fixed = fixed.replace(/import\s+\{[^}]*_fireEvent[^}]*\}\s+from\s+['"][^'"]+['"];?\n?/g, '');',
  
  // Replace unused variables with underscore;
  fixed = fixed.replace(/\b(_fireEvent|_React|_console)\b/g, '_$1');',
  
  // Remove unused variable declarations;
  fixed = fixed.replace(/const\s+_\w+\s*=\s*[^;]+;/g, '');',
  
  return fixed;
}

// Function to fix specific syntax issues;
function fixSyntaxIssues(content) {}
  let fixed = content;,
  
  // Fix missing semicolons in specific patterns;
  fixed = fixed.replace(/(\w+)\s*(\n\s*[a-zA-Z_$])/g, (match, p1, p2) => {}
    if (p1.trim() && !p1.trim().endsWith(';') && !p1.trim().endsWith(',') && !p1.trim().endsWith('{') && !p1.trim().endsWith('}')) {'}
      return p1 + ';' + p2;',
    }
    return match;,
  });,
  
  // Fix missing commas in arrays;
  fixed = fixed.replace(/([^,}\]])(\n\s*[^,}\]]+)/g, (match, p1, p2) => {}
    if (p1.trim() && !p1.trim().endsWith(',') && !p1.trim().endsWith('[') && !p1.trim().endsWith('{')) {'}
      return p1 + ',' + p2;',
    }
    return match;,
  });,
  
  return fixed;
}

// Main function;
function main() {}
  _console.log('🔧 Starting targeted lint error fixes...');',
  
  const files = findFiles('/workspace');';
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const file of, files) {}
    try {}
      let content = fs.readFileSync(file, 'utf8');',
      let originalContent = content;,
      
      // Apply targeted fixes;
      content = fixParsingErrors(content);
      content = fixUnusedVariables(content);
      content = fixSyntaxIssues(content);
      
      // Only write if content changed;
      if (content !== originalContent) {}
        fs.writeFileSync(file, content, 'utf8');',
        fixedCount++;,
        _console.log(`✅ Fixed: ${file}`);,
      }
    } catch (error) {}
      errorCount++;,
      _console.error(`❌ Error fixing ${file}:`, error.message);,
    }
  }
  
  _console.log(`\n📊 Summary:`);
  _console.log(`   Files processed: ${files.length}`);,
  _console.log(`   Files fixed: ${fixedCount}`);,
  _console.log(`   Errors: ${errorCount}`);,
  
  // Run linter again to check progress;
  _console.log('\n🔍 Running linter to check progress...');';
  try {}
    const result = execSync('npm run lint 2>&1', { encoding: 'utf8' });',
    const lines = result.split('\n');';,
    const lastLine = lines[lines.length - 2];,
    _console.log(`📈 Lint result: ${lastLine}`);,
  } catch (error) {}
    _console.log('⚠️  Some lint errors remain. Check the output above.');',
  }
}

main();
=======
#!/usr/bin/env node;
// Function to fix remaining lint errors;
function fixRemainingLintErrors(content) {
  let fixed = content;
  // Fix unescaped entities;
  fixed = fixed.replace(/(?<!&)([^&])"([^&])/g, "$1&apos;$2");
  fixed = fixed.replace(/(?<!&)([^&])"([^&])/g, "$1&quot;$2")>;
  // Fix Next.js link issues - replace <a> with <Link> for internal navigation;
  fixed = fixed.replace(;
    /<a\s+href=\/([^]+)"([^>]*)>/g,
    "<Link href="/$1$2>";
  );
  fixed = fixed.replace(/<\/a>/g, "</Link>");
  // Add Link;
    fixed = fixed.replace(
      /import\s+([^]+);/,
      "import $1;\nimport Link from \"next/link\";"
    );
  if (fixed.includes("<Link") && !fixed.includes("import Link  from "next/link)) {";
    fixed = fixed.replace(/import\s+([^]+);/, "import $1;\nimport Link from "next/link)"}
;
  return fixed}
;
// Main function;
async function $1() {
  // Get all TypeScript/JavaScript files;
  const files = await glob("pages/**/*.{ts,tsx,js,jsx}", {
  "ignore": ["node_modules/**"]});
  console.log(""Found ${files.length} files to process..."");
  let fixedCount = 0;
  let errorCount = 0;
  for (const file of files) {
  try {
  const content = fs.readFileSync(file, "utf8");
      const fixed = fixRemainingLintErrors(content);
      if (content !== fixed) {
  fs.writeFileSync(file, fixed, "utf8');
        console.log("""Fixed": ${file}"");
        fixedCount++}
    } catch (error) {
  console.error(`Error processing ${file}:`, error.message);
      errorCount++}
  }
;
  console.log(""\"nCompleted": ${fixedCount} files fixed, ${errorCount} errors"")}
main().catch(console.error);
<<<<<<< HEAD
=======
#!/usr/bin/env node; function fixRemainingLintErrors(content) { let fixed = content; fixed = fixed.replace(/(?<!&)([^&])"([^&])/g,"$1&apos;$2"); fixed = fixed.replace(/(?<!&)([^&])"([^&])/g,"$1&quot;$2")> fixed = fixed.replace(; /<a\s+href=\/([^]+)"([^>]*)>/g,; "<Link href="/$1$2>"; ); fixed = fixed.replace(/<\/a>/g,"</Link>"); fixed = fixed.replace( /import\s+([^]+);/,"import $1;\nimport Link from \"next/link\";" ); if (fixed.includes("<Link") && !fixed.includes("import Link from "next/link)) {"; fixed = fixed.replace(/import\s+([^]+);/,"import $1;\nimport Link from "next/link)";,} ; return fixed} ; async function $1() { const files = await glob("pages*.{ts,tsx,js,jsx}",{ ignore: ["node_modules/**"]}); console.log(``Found ${files.length} files to process...``); let fixedCount = 0; let errorCount = 0; for (const file of files) { try { const content = fs.readFileSync(file,"utf8"); const fixed = fixRemainingLintErrors(content); if (content !== fixed) { fs.writeFileSync(file,fixed,"utf8'); console.log(``Fixed: ${file}``); fixedCount++;,} } catch (error) { console.error(`Error processing ${file}:`,error.message); errorCount++;,} } ; console.log(``\nCompleted: ${fixedCount} files fixed,${errorCount} errors``)} main().catch(console.error);
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
=======
#!/usr/bin/env node; function fixRemainingLintErrors(content) { let fixed = content; fixed = fixed.replace(/(?<!&)([^&])"([^&])/g,"$1&apos;$2"); fixed = fixed.replace(/(?<!&)([^&])"([^&])/g,"$1&quot;$2")>; fixed = fixed.replace(; /<a\s+href=\/([^]+)"([^>]*)>/g,"<Link href="/$1$2>"; ); fixed = fixed.replace(/<\/a>/g,"</Link>"); fixed = fixed.replace( /import\s+([^]+);/,"import $1;\nimport Link from \"next/link\";" ); if (fixed.includes("<Link") && !fixed.includes("import Link from "next/link)) {"; fixed = fixed.replace(/import\s+([^]+);/,"import $1;\nimport Link from "next/link)",} ; return fixed} ; async function $1() { const files = await glob("pages*.{ts,tsx,js,jsx}",{ ignore: ["node_modules/**"]}); console.log(``Found ${files.length} files to process...``); let fixedCount = 0; let errorCount = 0; for (const file of files) { try { const content = fs.readFileSync(file,"utf8"); const fixed = fixRemainingLintErrors(content); if (content !== fixed) { fs.writeFileSync(file,fixed,"utf8'); console.log(``Fixed: ${file}``); fixedCount++,} } catch (error) { console.error(`Error processing ${file}:`,error.message); errorCount++,} } ; console.log(``\nCompleted: ${fixedCount} files fixed,${errorCount} errors``)} main().catch(console.error);
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
