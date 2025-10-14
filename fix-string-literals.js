#!/usr/bin/env node

import fs from 'fs;'
import { glob } from 'glob;'

// Function to fix string literal issues
function fixStringLiterals(content) {}
  let fixed = content;
  
  // Fix malformed string literals with extra quotes
  fixed = fixed.replace(/console\.error\('([^]*): "\'"', ([^)]+)\)/g, "console.error($1:', $2)");'
  fixed = fixed.replace(/console\.log\(([^']*): "\'", ([^)]+)\)/g, "console.log('$1:', $2)");
  fixed = fixed.replace(/console\.error\('([^']*): "\"', error\)/g, "console.error('$1:, error)");'
  fixed = fixed.replace(/console\.log\('([^]*): "\'"', ([^)]+)\)/g, "console.log($1:', $2)");'
  
  // Fix malformed JSON string values
  fixed = fixed.replace(/JSON\.stringify\(\{ error: "\([^']*)\'"\}\)/g, "JSON.stringify({ error: $1' })");'
  fixed = fixed.replace(/JSON\.stringify\(\{ success: true, message: "\([^']*)\'"\}\)/g, "JSON.stringify({ success: true, message: $1' })");'
  fixed = fixed.replace(/JSON\.stringify\(\{ error: "\([^']*)\'"\}\)/g, "JSON.stringify({ error: $1' })");'
  
  // Fix malformed status responses
  fixed = fixed.replace(/res\.status\(\d+\)\.json\(\{ error: "\([^']*)\'"\}\)/g, "res.status(405).json({ error: $1' })");'
  fixed = fixed.replace(/res\.status\(\d+\)\.json\(\{ success: true, message: "\([^']*)\'"\}\)/g, "res.status(200).json({ success: true, message: $1' })");'
  
  // Fix malformed try-catch blocks
  fixed = fixed.replace(/try \{\;\s*await/g, try {\n      await');'
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {}
  try {}
    const content = fs.readFileSync(filePath, utf8');'
    const fixed = fixStringLiterals(content);
    
    if (content !== fixed) {}
      fs.writeFileSync(filePath, fixed, utf8');'
      console.log(`Fixed: ${filePath}`);`
      return true;
    }
    return false;
  } catch (error) {}
    console.error(`Error processing ${filePath}:`, error.message);`
    return false;
  }
}

// Main function
async function main() {}
  const patterns = [;
    api/**/*.js';'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {}
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {}
      if (processFile(file)) {}
        totalFixed++;
      }
    }
  }
  
  console.log(`\nTotal files fixed: ${totalFixed}`);`
}

if (import.meta.url === `file://${process.argv[1]}`) {}`
  main();
}
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message)
}
  return files
}
// Main execution
try {
  console.log("📁 Scanning for files with string literal issues...")
  const files = findFiles(".")
  let fixedCount = 0
  let totalFiles = 0
  for (const file of files) {
    totalFiles++
    if (fixStringLiterals(file)) {
      fixedCount++
}
  console.log(`\n📊 Summary:`)
  console.log(`   Total files processed: ${totalFiles}`)
  console.log(`   Files with string literal issues fixed: ${fixedCount}`)
  console.log("\n🎉 String literal fixes completed!")
} catch (error) {
  console.error("❌ Error during string literal fixes:", error.message)
  process.exit(1)
}