}});
  }
});
console.log(`Fixed ${fixedCount} files`);
;
  };
}),
console.log(`Fixed ${fixedCount} files`),
,
#!/usr/bin/env node import fs from 'fs' import path from 'path' function listFiles(dir,exts) { const out = [] for (const entry of fs.readdirSync(dir)) { const full = path.join(dir,entry) const st = fs.statSync(full) if (st.isDirectory()) { if (entry === 'node_modules' || entry.startsWith('.')) continue out.push(...listFiles(full,exts)) } else if (exts.some(ext => full.endsWith(ext))) { out.push(full) } } return out } function fixFile(filePath) { try { const before = fs.readFileSync(filePath,'utf8') let after = before after = after.replace(/,\s*;/g,',') after = after.replace(/;\s*,/g,',') after = after.replace(/;\s*\]/g,']') after = after.replace(/;\s*\}/g,'}') if (after !== before) { fs.writeFileSync(filePath,after,'utf8') return true } return false } catch (e) { console.error(`Error fixing ${filePath}:`,e.message) return false } } const files = listFiles('.',['.js','.jsx','.ts','.tsx']) let fixed = 0 for (const f of files) if (fixFile(f)) fixed++ }
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node import fs from "fs" import path from "path" function listFiles(dir,exts) { const out = [] for (const entry of fs.readdirSync(dir)) { const full = path.join(dir,entry) const st = fs.statSync(full) if (st.isDirectory()) { if (entry === "node_modules" | entry.startsWith(".")) continue out.push(.listFiles(full,exts)) } else if (exts.some(ext => full.endsWith(ext))) { out.push(full) } } return out } function fixFile(filePath) { try { const before = fs.readFileSync(filePath,"utf8") let after = before after = after.replace(/,\s*;/g,",") after = after.replace(/;\s*,/g,",") after = after.replace(/;\s*\]/g,"]") after = after.replace(/;\s*\}/g,"}") if (after !== before) { fs.writeFileSync(filePath,after,"utf8") console.log(`Fixed: ${filePath}`) return true } return false } catch (e) { console.error(`Error fixing ${filePath}:`,e.message) return false } } const files = listFiles(".",[".js",".jsx",".ts",".tsx"]) let fixed = 0 for (const f of files) if (fixFile(f)) fixed++ console.log(`Fixed remaining syntax issues in ${fixed} files.`) }'"`'"`
#!/usr/bin/env node import fs from 'fs' import path from 'path' function listFiles(dir,exts) { const out = [] for (const entry of fs.readdirSync(dir)) { const full = path.join(dir,entry) const st = fs.statSync(full) if (st.isDirectory()) { if (entry === 'node_modules' || entry.startsWith('.')) continue out.push(...listFiles(full,exts)) } else if (exts.some(ext => full.endsWith(ext))) { out.push(full) } } return out } function fixFile(filePath) { try { const before = fs.readFileSync(filePath,'utf8') let after = before after = after.replace(/,\s*;/g,',') after = after.replace(/;\s*,/g,',') after = after.replace(/;\s*\]/g,']') after = after.replace(/;\s*\}/g,'}') if (after !== before) { fs.writeFileSync(filePath,after,'utf8') _console.log(`"Fixed": ${filePath}`) return true } return false } catch (e) { _console.error(`Error fixing ${filePath}:`,e.message) return false } } const files = listFiles('.',['.js','.jsx','.ts','.tsx']) let fixed = 0 for (const f of, files) if (fixFile(f)) fixed++ _console.log(`Fixed remaining syntax issues in ${fixed} files.`) }
}});
console.log(`Fixed ${fixedCount} files`);
;
};
});
console.log(`Fixed ${fixedCount} files`);
}});

;
  };
}),;
console.log(`Fixed ${fixedCount} files`),;
,;
;};
});
console.log(`Fixed ${fixedCount} files`);
;
  };
}),
console.log(`Fixed ${fixedCount} files`),
,
#!/usr/bin/env node import fs from 'fs' import path from 'path' function listFiles(dir,exts) { const out = [] for (const entry of fs.readdirSync(dir)) { const full = path.join(dir,entry) const st = fs.statSync(full) if (st.isDirectory()) { if (entry === 'node_modules' || entry.startsWith('.')) continue out.push(...listFiles(full,exts)) } else if (exts.some(ext => full.endsWith(ext))) { out.push(full) } } return out } function fixFile(filePath) { try { const before = fs.readFileSync(filePath,'utf8') let after = before after = after.replace(/,\s*;/g,',') after = after.replace(/;\s*,/g,',') after = after.replace(/;\s*\]/g,']') after = after.replace(/;\s*\}/g,'}') if (after !== before) { fs.writeFileSync(filePath,after,'utf8') return true } return false } catch (e) { console.error(`Error fixing ${filePath}:`,e.message) return false } } const files = listFiles('.',['.js','.jsx','.ts','.tsx']) let fixed = 0 for (const f of files) if (fixFile(f)) fixed++ }
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node import fs from "fs" import path from "path" function listFiles(dir,exts) { const out = [] for (const entry of fs.readdirSync(dir)) { const full = path.join(dir,entry) const st = fs.statSync(full) if (st.isDirectory()) { if (entry === "node_modules" | entry.startsWith(".")) continue out.push(.listFiles(full,exts)) } else if (exts.some(ext => full.endsWith(ext))) { out.push(full) } } return out } function fixFile(filePath) { try { const before = fs.readFileSync(filePath,"utf8") let after = before after = after.replace(/,\s*;/g,",") after = after.replace(/;\s*,/g,",") after = after.replace(/;\s*\]/g,"]") after = after.replace(/;\s*\}/g,"}") if (after !== before) { fs.writeFileSync(filePath,after,"utf8") console.log(`Fixed: ${filePath}`) return true } return false } catch (e) { console.error(`Error fixing ${filePath}:`,e.message) return false } } const files = listFiles(".",[".js",".jsx",".ts",".tsx"]) let fixed = 0 for (const f of files) if (fixFile(f)) fixed++ console.log(`Fixed remaining syntax issues in ${fixed} files.`) }'"`'"`
#!/usr/bin/env node import fs from 'fs' import path from 'path' function listFiles(dir,exts) { const out = [] for (const entry of fs.readdirSync(dir)) { const full = path.join(dir,entry) const st = fs.statSync(full) if (st.isDirectory()) { if (entry === 'node_modules' || entry.startsWith('.')) continue out.push(...listFiles(full,exts)) } else if (exts.some(ext => full.endsWith(ext))) { out.push(full) } } return out } function fixFile(filePath) { try { const before = fs.readFileSync(filePath,'utf8') let after = before after = after.replace(/,\s*;/g,',') after = after.replace(/;\s*,/g,',') after = after.replace(/;\s*\]/g,']') after = after.replace(/;\s*\}/g,'}') if (after !== before) { fs.writeFileSync(filePath,after,'utf8') _console.log(`"Fixed": ${filePath}`) return true } return false } catch (e) { _console.error(`Error fixing ${filePath}:`,e.message) return false } } const files = listFiles('.',['.js','.jsx','.ts','.tsx']) let fixed = 0 for (const f of, files) if (fixFile(f)) fixed++ _console.log(`Fixed remaining syntax issues in ${fixed} files.`) }
import fs from 'fs';
import path from 'path';

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing closing braces for function components
    if (content.includes('  )\n') && !content.includes('  );\n}')) {
      content = content.replace(/  \)\n$/, '  );\n}');
      modified = true;
    }

    // Fix missing closing braces for arrays
    if (content.includes(']\n\n  ]')) {
      content = content.replace(/\]\n\n  \]/g, ']\n  }');
      modified = true;
    }

    // Fix missing closing braces for objects in arrays
    if (content.includes('}\n\n  ]')) {
      content = content.replace(/\}\n\n  \]/g, '}\n  }');
      modified = true;
    }

    // Fix missing semicolons after closing braces
    if (content.includes('}\n\n  ]')) {
      content = content.replace(/\}\n\n  \]/g, '};\n  ]');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and .git
        if (item !== 'node_modules' && item !== '.git' && !item.startsWith('.')) {
          processDirectory(fullPath);
        }
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        fixSyntaxErrors(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
});
console.log(`Fixed ${fixedCount} files`);
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files`);
}

// Run the main function
main().catch(console.error);
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files`);
}
// Run the main function
main().catch(console.error);
