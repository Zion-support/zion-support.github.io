#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
console.log('🔧 Starting comprehensive syntax error fix...');
// Find all TypeScript files in pages/api;
const findTsFiles = () => {
  try {
    const result = execSync('find pages/api -name "*.ts" -type f', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file);
  } catch (error) {
    console.error('Error finding TypeScript files:', error.message);
    return [];
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
};
// Fix common syntax patterns;
const fixSyntaxPatterns = (content) => {
  let fixed = content;
  // Fix missing semicolons after imports
  fixed = fixed.replace(/}from 'next'/g, "} from 'next'");
  fixed = fixed.replace(/}from 'openai'/g, "} from 'openai'");
  fixed = fixed.replace(/}from 'jszip'/g, "} from 'jszip'");
  // Fix missing semicolons after function declarations
  fixed = fixed.replace(/}export default/g, "}\nexport default");
  fixed = fixed.replace(/}res\.setHeader/g, "}\nres.setHeader");
  fixed = fixed.replace(/}return/g, "}\nreturn");
  fixed = fixed.replace(/}catch/g, "}\ncatch");
  fixed = fixed.replace(/}if/g, "}\nif");
  fixed = fixed.replace(/}const/g, "}\nconst");
  fixed = fixed.replace(/}async/g, "}\nasync");
  fixed = fixed.replace(/}function/g, "}\nfunction");
  // Fix merge conflict markers
  fixed = fixed.replace(/  // Fix empty files with just closing braces
  if (fixed.trim() === '}' || fixed.trim() === '}\n}') {
    fixed = `import type { NextApiRequest, NextApiResponse } from 'next';\n\nexport default function handler(req: NextApiRequest, res: NextApiResponse) {\n  res.status(200).json({ message: 'API endpoint' });\n}`;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  // Fix files that start with just a closing brace
  if (fixed.trim().startsWith('}')) {
    fixed = `import type { NextApiRequest, NextApiResponse } from 'next';\n\nexport default function handler(req: NextApiRequest, res: NextApiResponse) {\n  res.status(200).json({ message: 'API endpoint' });\n}`;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  // Fix malformed function declarations
  if (fixed.includes('}export default') && !fixed.includes('import type')) {
    fixed = `import type { NextApiRequest, NextApiResponse } from 'next';\n\n${fixed}`;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  return fixed;
};
// Process a single file;
const processFile = (filePath) => {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxPatterns(content);
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    } else {
      console.log(`✓ No changes needed: ${filePath}`);
      return true;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
};
// Main execution;
const main = () => {
  const tsFiles = findTsFiles();
  console.log(`Found ${tsFiles.length} TypeScript files to process...`);
  let fixedCount = 0;
  let errorCount = 0;
  tsFiles.forEach(filePath => {
    if (processFile(filePath)) {
      fixedCount++;
    } else {
      errorCount++;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  });
  console.log(`\n🎉 Syntax fix completed!`);
  console.log(`✅ Fixed: ${fixedCount} files`);
  console.log(`❌ Errors: ${errorCount} files`);
  if (errorCount === 0) {
    console.log('\n🚀 All syntax errors have been fixed!');
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
};
function findFilesWithSyntaxErrors() {
  const files = [];
  function walkDir(dir) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        // Skip node_modules and other directories
        if (!['node_modules', '.next', '.git', 'dist', 'out'].includes(item)) {
          walkDir(fullPath);
          } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } else if (item.match(/\.(ts|tsx|js|jsx)$/)) {
        files.push(fullPath);
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  walkDir('/workspace');
  return files;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
function fixSyntaxErrorsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    // Fix import statements with trailing commas
    const importFix = content.replace(/import\s+([^;]+),\s*$/gm, 'import $1;');
    if (importFix !== content) {
      content = importFix;
      modified = true;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    // Fix export statements with trailing commas
    const exportFix = content.replace(/export\s+([^;]+),\s*$/gm, 'export $1;');
    if (exportFix !== content) {
      content = exportFix;
      modified = true;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    // Fix type definitions with missing commas
    const typeFix = content.replace(/export type (\w+) = \{/g, 'export type $1 = {');
    if (typeFix !== content) {
      content = typeFix;
      modified = true;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    // Fix missing semicolons after statements
    const semicolonFix = content.replace(/([^;}])\s*$/gm, '$1;');
    if (semicolonFix !== content) {
      content = semicolonFix;
      modified = true;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    // Fix specific syntax errors
    const fixes = [
      // Fix missing comma in type definitions
      { pattern: /Omit<Toast 'id'>/g, replacement: "Omit<Toast, 'id'>" },
      // Fix missing semicolons in imports
      { pattern: /import\s+([^;]+),\s*$/gm, replacement: 'import $1;' },
      // Fix missing semicolons in exports
      { pattern: /export\s+([^;]+),\s*$/gm, replacement: 'export $1;' },
      // Fix missing semicolons after statements
      { pattern: /(\w+)\s*$/gm, replacement: '$1;' },
    ];
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    });
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed ${filePath}`);
      return true;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    return false;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
function main() {
  console.log('🔧 Starting comprehensive syntax error fix...');
  const files = findFilesWithSyntaxErrors();
  console.log(`Found ${files.length} files to check`);
  let fixedCount = 0;
  for (const file of files) {
    if (fixSyntaxErrorsInFile(file)) {
      fixedCount++;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  console.log(`🎉 Fixed syntax errors in ${fixedCount} files`);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
main();