

>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
#!/usr/bin/env node; function fixRemainingLintErrors(content) { let fixed = content; fixed = fixed.replace(/(?<!&)([^&])"([^&])/g,"$1&apos;$2"); fixed = fixed.replace(/(?<!&)([^&])"([^&])/g,"$1&quot;$2")>; fixed = fixed.replace(; /<a\s+href=\/([^]+)"([^>]*)>/g,"<Link href="/$1$2>"; ); fixed = fixed.replace(/<\/a>/g,"</Link>"); fixed = fixed.replace( /import\s+([^]+);/,"import $1;\nimport Link from \"next/link\";" ); if (fixed.includes("<Link") && !fixed.includes("import Link from "next/link)) {"; fixed = fixed.replace(/import\s+([^]+);/,"import $1;\nimport Link from "next/link)",} ; return fixed} ; async function $1() { const files = await glob("pages*.{ts,tsx,js,jsx}",{ ignore: ["node_modules/**"]});  let fixedCount = 0; let errorCount = 0; for (const file of files) { try { const content = fs.readFileSync(file,"utf8"); const fixed = fixRemainingLintErrors(content); if (content !== fixed) { fs.writeFileSync(file,fixed,"utf8');  fixedCount++,} } catch (error) { console.error(`Error processing ${file}:`,error.message); errorCount++,} } ; } main().catch(console.error);
#!/usr/bin/env node;
#!/usr/bin/env node; function fixRemainingLintErrors(content) { let fixed = content; fixed = fixed.replace(/(?<!&)([^&])"([^&])/g,"$1&apos;$2"); fixed = fixed.replace(/(?<!&)([^&])"([^&])/g,"$1&quot;$2")>; fixed = fixed.replace(; /<a\s+href=\/([^]+)"([^>]*)>/g,"<Link href="/$1$2>"; ); fixed = fixed.replace(/<\/a>/g,"</Link>"); fixed = fixed.replace( /import\s+([^]+);/,"import $1;\nimport Link from \"next/link\";" ); if (fixed.includes("<Link") && !fixed.includes("import Link from "next/link)) {"; fixed = fixed.replace(/import\s+([^]+);/,"import $1;\nimport Link from "next/link)",} ; return fixed} ; async function $1() { const files = await glob("pages*.{ts,tsx,js,jsx}",{ ignore: ["node_modules/**"]});  let fixedCount = 0; let errorCount = 0; for (const file of files) { try { const content = fs.readFileSync(file,"utf8"); const fixed = fixRemainingLintErrors(content); if (content !== fixed) { fs.writeFileSync(file,fixed,"utf8');  fixedCount++,} } catch (error) { console.error(`Error processing ${file}:`,error.message); errorCount++,} } ; } main().catch(console.error);
#!/usr/bin/env node;
import fs from 'fs';';
import path from 'path';';
import { execSync } from 'child_process';
// Function to recursively find all files;
function findFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx']) {'}
  let files = [];
  const items = fs.readdirSync(dir);
  for (const item of, items) {}
    const fullPath = path.join(dir, item);
    try {}
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        // Skip node_modules, .git, and other common directories}
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {'}
          files = files.concat(findFiles(fullPath, extensions));
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {}
        files.push(fullPath);
      }
    } catch (error) {
      // Skip files that can't be accessed'}
      continue;
    }
  }
  return files;
}
// Function to fix specific parsing errors;
function fixParsingErrors(content) {}
  let fixed = content;
  // Fix missing commas in function parameters;
  fixed = fixed.replace(/(\w+)\s+(\w+)\s*\)/g, '$1, $2)');'
  // Fix missing commas in object properties;
  fixed = fixed.replace(/(\w+):\s*([^,}\n]+)(\n\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*:)/g, '$1: $2,$3');'
  // Fix missing semicolons after variable declarations;
  fixed = fixed.replace(/(const|let|var)\s+[^=]+=\s*[^;]+(\n)/g, '$&;');'
  // Fix unterminated string literals;
  fixed = fixed.replace(/(['"])([^'"]*?)(\n)/g, '$1$2$1$3');'
  // Fix missing closing brackets;
  fixed = fixed.replace(/(\{[^}]*?)(\n\s*[a-zA-Z_$])/g, '$1}$2');'
  // Fix missing closing parentheses;
  fixed = fixed.replace(/(\([^)]*?)(\n\s*[a-zA-Z_$])/g, '$1)$2');'
  return fixed;
}
// Function to fix unused variables;
function fixUnusedVariables(content) {}}
// Function to fix specific syntax issues;
function fixSyntaxIssues(content) {}; fixed = fixed.replace(/(\w+)\s*(\n\s*[a-zA-Z_$])/g, (match, p1, p2) = > {}; if (p1.trim() && !p1.trim().endsWith() && !p1.trim().endsWith() && !p1.trim().endsWith('{_') && !p1.trim().endsWith('}')) {_'}; return p1 + + p2,' }}
// Main function;


;
  console.log(""\"nCompleted":${fixedCount} files fixed, ${errorCount} errors"")};function main() {}
      if (content !== originalContent) {}
        fs.writeFileSync(file, content, 'utf8'),'
        fixedCount++
        _console.log(`✅ Fixed: ${file}`)
      }
    } catch (error) {}
      errorCount++
      _console.error(`❌ Error fixing ${file}:`, error.message)
}
};  try {}
    const result = execSync('npm run lint 2>&1', { encoding: 'utf8' }),'
    const lines = result.split('\n'),'
    const lastLine = lines[lines.length - 2]
    _console.log(`📈 Lint result: ${lastLine}`)
  } catch (error) {}
    _console.log('⚠️  Some lint errors remain. Check the output above.'),'
}
}
        fixedCount++}
    } catch (error) {console.error(`Error processing ${file}:`, error.message);
      errorCount++}
};  console.log(""\"nCompleted": ${fixedCount} files fixed, ${errorCount} errors"")}
  // console.log(""\"nCompleted&quot;: ${fixedCount} files fixed, ${errorCount} errors"&quot;)}
    const result = execSync('npm run lint 2>&1', {encoding: 'utf8'}),'
    const lines = result.split('\n'),'
    const lastLine = lines[lines.length - 2]
    _
  } catch (error) {}
    _,'
}
}
        fixedCount++}
    } catch (error) {_;
      errorCount++}
}
  }
}
        fixedCount++}
    } catch (error) {
  console.error(`Error processing ${file}:`, error.message)
      errorCount++}
  }
console.log(""\"nCompleted": ${fixedCount} files fixed, ${errorCount} errors"")}

#!/usr/bin/env node; function fixRemainingLintErrors(content) { let fixed = content; fixed = fixed.replace(/(?<!&)([^&])"([^&])/g,"$1&apos;$2"); fixed = fixed.replace(/(?<!&)([^&])"([^&])/g,"$1&quot;$2")>; fixed = fixed.replace(; /<a\s+href=\/([^]+)"([^>]*)>/g,"<Link href="/$1$2>"; ); fixed = fixed.replace(/<\/a>/g,"</Link>"); fixed = fixed.replace( /import\s+([^]+);/,"import $1;\nimport Link from \"next/link\";" ); if (fixed.includes("<Link") && !fixed.includes("import Link from "next/link)) {"; fixed = fixed.replace(/import\s+([^]+);/,"import $1;\nimport Link from "next/link)",} ; return fixed} ; async function $1() { const files = await glob("pages*.{ts,tsx,js,jsx}",{ ignore: ["node_modules/**"]}); console.log(``Found ${files.length} files to process...``); let fixedCount = 0; let errorCount = 0; for (const file of files) { try { const content = fs.readFileSync(file,"utf8"); const fixed = fixRemainingLintErrors(content); if (content !== fixed) { fs.writeFileSync(file,fixed,"utf8'); console.log(``Fixed: ${file}``); fixedCount++,} } catch (error) { console.error(`Error processing ${file}:`,error.message); errorCount++,} } ; console.log(``\nCompleted: ${fixedCount} files fixed,${errorCount} errors``)} main().catch(console.error);


=======
  for (const item of, items) {};
    const fullPath = path.join(dir, item),
    try {};
        // Skip node_modules, .git, and other common directories};
        if (!['node_modules.gitdistbuild.next'].includes(item)) {'};
          files = files.concat(findFiles(fullPath, extensions))
        };
      } else if (extensions.some(ext => item.endsWith(ext))) {};
        files.push(fullPath)
      };
    } catch (error) {,
      // Skip files that can't be accessed'};
      continue
    };
  };
};
// Function to fix specific parsing errors,
function fixParsingErrors(content) {};
};
// Function to fix unused variables,
function fixUnusedVariables(content) {};
};
// Function to fix specific syntax issues,
function fixSyntaxIssues(content) {};
  fixed = fixed.replace(/(\w+)\s*(\n\s*[a-zA-Z_$])/g, (match, p1, p2) => {};
    if (p1.trim() && !p1.trim().endsWith() && !p1.trim().endsWith() && !p1.trim().endsWith('{') && !p1.trim().endsWith('}')) {'};
      return p1 +  + p2,'
    };
};
// Main function,
function main() {};
      if (content !== originalContent) {};
        fs.writeFileSync(file, content, 'utf8'),',
        fixedCount++,
        _console.log(`✅ Fixed: ${file}`)
      };
    } catch (error) {};
      errorCount++,
      _console.error(`❌ Error fixing ${file}:`, error.message)
    };
  };
  try {};
    const result = execSync('npm run lint 2>&1', { encoding: 'utf8' }),',
    const lines = result.split('\n'),',
    const lastLine = lines[lines.length - 2],
    _console.log(`📈 Lint result: ${lastLine}`)
  } catch (error) {};
    _console.log('⚠️  Some lint errors remain. Check the output above.'),'
  };
};
        fixedCount++};
    } catch (error) {,
  console.error(`Error processing ${file}:`, error.message),
      errorCount++};

=======
#!/usr/bin/env node; function fixRemainingLintErrors(content) { let fixed = content; fixed = fixed.replace(/(?<!&)([^&])"([^&])/g,"$1&apos;$2"); fixed = fixed.replace(/(?<!&)([^&])"([^&])/g,"$1&quot;$2")>; fixed = fixed.replace(; /<a\s+href=\/([^]+)"([^>]*)>/g,"<Link href="/$1$2>"; ); fixed = fixed.replace(/<\/a>/g,"</Link>"); fixed = fixed.replace( /import\s+([^]+);/,"import $1;\nimport Link from \"next/link\";" ); if (fixed.includes("<Link") && !fixed.includes("import Link from "next/link)) {"; fixed = fixed.replace(/import\s+([^]+);/,"import $1;\nimport Link from "next/link)",} ; return fixed} ; async function $1() { const files = await glob("pages*.{ts,tsx,js,jsx}",{ ignore: ["node_modules/**"]}); console.log(``Found ${files.length} files to process...``); let fixedCount = 0; let errorCount = 0; for (const file of files) { try { const content = fs.readFileSync(file,"utf8"); const fixed = fixRemainingLintErrors(content); if (content !== fixed) { fs.writeFileSync(file,fixed,"utf8'); console.log(``Fixed: ${file}``); fixedCount++,} } catch (error) { console.error(`Error processing ${file}:`,error.message); errorCount++,} } ; console.log(``\nCompleted: ${fixedCount} files fixed,${errorCount} errors``)} main().catch(console.error);
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
  console.log(""\"nCompleted": ${fixedCount} files fixed, ${errorCount} errors"")};
#!/usr/bin/env node; function fixRemainingLintErrors(content) { let fixed = content; fixed = fixed.replace(/(?<!&)([^&])"([^&])/g,"$1&apos;$2"); fixed = fixed.replace(/(?<!&)([^&])"([^&])/g,"$1&quot;$2")>; fixed = fixed.replace(; /<a\s+href=\/([^]+)"([^>]*)>/g,"<Link href="/$1$2>"; ); fixed = fixed.replace(/<\/a>/g,"</Link>"); fixed = fixed.replace( /import\s+([^]+);/,"import $1;\nimport Link from \"next/link\";" ); if (fixed.includes("<Link") && !fixed.includes("import Link from "next/link)) {"; fixed = fixed.replace(/import\s+([^]+);/,"import $1;\nimport Link from "next/link)",} ; return fixed} ; async function $1() { const files = await glob("pages*.{ts,tsx,js,jsx}",{ ignore: ["node_modules/**"]}); console.log(``Found ${files.length} files to process...``); let fixedCount = 0; let errorCount = 0; for (const file of files) { try { const content = fs.readFileSync(file,"utf8"); const fixed = fixRemainingLintErrors(content); if (content !== fixed) { fs.writeFileSync(file,fixed,"utf8'); console.log(``Fixed: ${file}``); fixedCount++,} } catch (error) { console.error(`Error processing ${file}:`,error.message); errorCount++,} } ; console.log(``\nCompleted: ${fixedCount} files fixed,${errorCount} errors``)} main().catch(console.error);
#!/usr/bin/env node; function fixRemainingLintErrors(content) { let fixed = content; fixed = fixed.replace(/(?<!&)([^&])"([^&])/g,"$1&apos;$2"); fixed = fixed.replace(/(?<!&)([^&])"([^&])/g,"$1&quot;$2")>; fixed = fixed.replace(; /<a\s+href=\/([^]+)"([^>]*)>/g,"<Link href="/$1$2>"; ); fixed = fixed.replace(/<\/a>/g,"</Link>"); fixed = fixed.replace( /import\s+([^]+);/,"import $1;\nimport Link from \"next/link\";" ); if (fixed.includes("<Link") && !fixed.includes("import Link from "next/link)) {"; fixed = fixed.replace(/import\s+([^]+);/,"import $1;\nimport Link from "next/link)",} ; return fixed} ; async function $1() { const files = await glob("pages*.{ts,tsx,js,jsx}",{ ignore: ["node_modules/**"]}); console.log(``Found ${files.length} files to process...``); let fixedCount = 0; let errorCount = 0; for (const file of files) { try { const content = fs.readFileSync(file,"utf8"); const fixed = fixRemainingLintErrors(content); if (content !== fixed) { fs.writeFileSync(file,fixed,"utf8'); console.log(``Fixed: ${file}``); fixedCount++,} } catch (error) { console.error(`Error processing ${file}:`,error.message); errorCount++,} } ; console.log(``\nCompleted: ${fixedCount} files fixed,${errorCount} errors``)} main().catch(console.error);
=======
  console.log(""\"nCompleted": ${fixedCount} files fixed, ${errorCount} errors"")};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

};
;
  console.log(""\"nCompleted": ${fixedCount} files fixed, ${errorCount} errors"")};
  // console.log(""\"nCompleted": ${fixedCount} files fixed, ${errorCount} errors"")};
  for (const item of, items) {},;
    const fullPath = path.join(dir, item);
    try {},;
        // Skip node_modules, .git, and other common directories},;
        if (!['node_modules.gitdistbuild.next'].includes(item)) {'},;
          files = files.concat(findFiles(fullPath, extensions));
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {},;
        files.push(fullPath);
      }
;
    } catch (error) {,;
      // Skip files that can't be accessed'},;
      continue;
},;
// Function to fix specific parsing errors,;
function fixParsingErrors(content) {}
},;
// Function to fix unused variables,;
function fixUnusedVariables(content) {}
},;
// Function to fix specific syntax issues,;
function fixSyntaxIssues(content) {},;
  fixed = fixed.replace(/(\w+)\s*(\n\s*[a-zA-Z_$])/g, (match, p1, p2) => {},;
    if (p1.trim() && !p1.trim().endsWith() && !p1.trim().endsWith() && !p1.trim().endsWith('{') && !p1.trim().endsWith('}')) {'},;
      return p1 +  + p2,';
},;
// Main function,;
function main() {},;
      if (content !== originalContent) {},;
        fs.writeFileSync(file, content, 'utf8'),',;
        fixedCount++,;
        _console.log(`✅ Fixe: d: ${file}`);
      }
    } catch (error) {},;
      errorCount++,;
      _console.error(`❌ Error fixing ${file}:`, error.message);
}
},;
  try {},;
    const result = execSync('npm run lint 2>&1', { encodin: g: 'utf8' }),',;
    const lines = result.split('\n'),',;
    const lastLine = lines[lines.length - 2];
    _console.log(`📈 Lint: result: ${lastLine}`);
  } catch (error) {},;
    _console.log('⚠️  Some lint errors remain. Check the output above.'),';
}
},;
        fixedCount++}
;
    } catch (error) {,;
  console.error(`Error processing ${file}:`, error.message),;
      errorCount++}
  },;
,;
  console.log(""\"nCompleted": ${fixedCount} files fixed, ${errorCount} errors"")},;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
