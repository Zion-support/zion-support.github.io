#!/usr/bin/env node
/**
 * Clean Scripts - Remove merge conflicts and basic fixes
 */
const fs = require("fs");
const path = require("path");

function cleanScript(scriptPath) {
  try {
    console.log(`Cleaning ${path.basename(scriptPath)}...`);
    
    let content = fs.readFileSync(scriptPath, 'utf8');
    const originalContent = content;
    
    // Remove merge conflict markers
    content = content.replace(/[\s\S]*?    content = content.replace(/
    // Remove cursor branch references
    content = content.replace(/cursor\/[^;]+;/g, '');
    
    // Fix shebang issues
    content = content.replace(/#!/usr\/bin\/env node import/g, '#!/usr/bin/env node\nimport');
    content = content.replace(/#!/usr\/bin\/env node;\s*import/g, '#!/usr/bin/env node\nimport');
    
    // Fix missing closing parentheses
    content = content.replace(/(fileURLToPath\(import\.meta\.url)\s*$/gm, '$1)');
    
    // Convert ES modules to CommonJS
    content = content.replace(/import\s+(\w+)\s+from\s+['"]([^'"]+)['"];?/g, 'const $1 = require("$2");');
    content = content.replace(/import\s*{\s*([^}]+)\s*}\s+from\s+['"]([^'"]+)['"];?/g, 'const { $1 } = require("$2");');
    content = content.replace(/export\s+default\s+/g, 'module.exports = ');
    
    // Remove fileURLToPath usage
    content = content.replace(/const\s+__filename\s*=\s*fileURLToPath\(import\.meta\.url\);?/g, '');
    
    if (content !== originalContent) {
      fs.writeFileSync(scriptPath, content, 'utf8');
      console.log(`✅ Fixed ${path.basename(scriptPath)}`);
    } else {
      console.log(`No changes needed for ${path.basename(scriptPath)}`);
    }
    
  } catch (error) {
    console.log(`❌ Failed to fix ${path.basename(scriptPath)}: ${error.message}`);
  }
}

function main() {
  console.log("🔧 Starting script cleaning process...");
  
  const scriptsDir = path.join(process.cwd(), "scripts");
  
  if (!fs.existsSync(scriptsDir)) {
    console.log("Scripts directory not found");
    return;
  }
  
  const files = fs.readdirSync(scriptsDir);
  const scriptFiles = files.filter(file => 
    file.endsWith('.js') || file.endsWith('.cjs') || file.endsWith('.mjs')
  );
  
  console.log(`Found ${scriptFiles.length} script files to clean`);
  
  for (const file of scriptFiles) {
    const scriptPath = path.join(scriptsDir, file);
    cleanScript(scriptPath);
  }
  
  console.log("✅ Script cleaning completed!");
}

main();
