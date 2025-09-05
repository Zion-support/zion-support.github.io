<<<<<<< HEAD
#!/usr/bin/env node

const fs = require('fs');

class ServicesSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd()}

  log(message) {
    .toISOString()}] ${message}`)}

  fixServicesFile() {
    try {
      this.log('🔧 Fixing syntax errors in data/services.ts...');
      
      const filePath = `${this.projectRoot}/data/services.ts`;
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix missing commas after object properties
      content = content.replace(/(\w+):\s*'([^']*)'\s*\n/g, "$"1": '$2',\n");
      content = content.replace(/(\w+):\s*"([^"]*)"\s*\n/g, '$"1": "$2",\n');
      content = content.replace(/(\w+):\s*(\d+)\s*\n/g, '$"1": $2,\n');
      content = content.replace(/(\w+):\s*(\w+)\s*\n/g, '$"1": $2,\n');
      
      // Fix missing commas in arrays
      content = content.replace(/'([^']*)'\s*\n\s*'([^']*)'/g, "'$1',\n      '$2'");
      content = content.replace(/"([^"]*)"\s*\n\s*"([^"]*)"/g, '"$1",\n      "$2"');
      
      // Fix missing commas after array items
      content = content.replace(/'([^']*)'\s*\n\s*]/g, "'$1'\n    ]");
      content = content.replace(/"([^"]*)"\s*\n\s*]/g, '"$1"\n    ]');
      
      // Fix missing commas after object closing braces
      content = content.replace(/}\s*\n\s*{/g, '},\n  {');
      
      // Fix missing commas after array closing brackets
      content = content.replace(/]\s*\n\s*{/g, '],\n  {');
      
      // Remove duplicate commas
      content = content.replace(/,,+/g, ',');
      
      // Fix trailing commas before closing braces/brackets
      content = content.replace(/,(\s*[}\]])/g, '$1');
      
      fs.writeFileSync(filePath, content, 'utf8');
      this.log('✅ Fixed syntax errors in data/services.ts');
      
      return true} catch (error) {
      this.log(`❌ Error fixing services "file": ${error.message}`);
      return false}
  }
}

// Run the fixer if this file is executed directly
if (require.main === module) {
  const fixer = new ServicesSyntaxFixer();
  const success = fixer.fixServicesFile();
  process.exit(success ? 0 : 1)}

module.exports = ServicesSyntaxFixer;
=======
<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");class ServicesSyntaxFixer { constructor() { this.projectRoot = process.cwd()} log(message) { console.log(`[${new Date().toISOString()}] ${message}`)} fixServicesFile() { try {" this.log(" Fixing syntax errors in data/services.ts.");` const filePath = `${this.projectRoot}/data/services.ts`;" let content = fs.readFileSync(filePath, "utf8"); / Fix missing commas after object properties" content = content.replace(/(\w+):\s*"([^"]*)"\s*\n/g, "$1: "$2",\n");"" content = content.replace(/(\w+):\s*"([^"]*)"\s*\n/g, "$1: "$2",\n");"" content = content.replace(/(\w+):\s*(\d+)\s*\n/g, "$1: $2,\n");"" content = content.replace(/(\w+):\s*(\w+)\s*\n/g, "$1: $2,\n"); / Fix missing commas in arrays"" content = content.replace(/"([^"]*)"\s*\n\s*"([^"]*)"/g, ""$1",\n "$2"");"" content = content.replace(/"([^"]*)"\s*\n\s*"([^"]*)"/g, ""$1",\n "$2""); / Fix missing commas after array items"" content = content.replace(/"([^"]*)"\s*\n\s*]/g, ""$1"\n ]");"" content = content.replace(/"([^"]*)"\s*\n\s*]/g, ""$1"\n ]"); / Fix missing commas after object closing braces" content = content.replace(/}\s*\n\s*{/g, "},\n {"); / Fix missing commas after array closing brackets" content = content.replace(/]\s*\n\s*{/g, "],\n {"); / Remove duplicate commas" content = content.replace(/,+/g, ","); / Fix trailing commas before closing braces/brackets" content = content.replace(/,(\s*[}\]])/g, "$1"); " fs.writeFileSync(filePath, content, "utf8");" this.log(" Fixed syntax errors in data/services.ts"); return true} catch (error) {"` this.log(` Error fixing services file: ${error.message}`); return false} }}/ Run the fixer if this file is executed directlyif (require.main === module) { const fixer = new ServicesSyntaxFixer(); const success = fixer.fixServicesFile(); process.exit(success ? 0 : 1)}module.exports = ServicesSyntaxFixer;'"`'"`
=======
#!/usr/bin/env node;
const fs = require('fs')
      this.log(' Fixing syntax errors in data/services.ts...')
      let content = fs.readFileSync(filePath, 'utf8')
      content = content.replace(/(\w+):\s*'([^']*)'\s*\n/g, "$"1"
      content = content.replace(/(\w+):\s*"([^"]*)"\s*\n/g, '$"1": "$2"
      content = content.replace(/(\w+):\s*(\d+)\s*\n/g, '$"1"
      content = content.replace(/(\w+):\s*(\w+)\s*\n/g, '$"1"
      content = content.replace(/'([^']*)'\s*\n\s*'([^']*)'/g, '
      content = content.replace(/"([^"]*)"\s*\n\s*"([^"]*)"/g, '"$1",\n      "$2"
      content = content.replace(/'([^']*)'\s*\n\s*]/g, '
      content = content.replace(/"([^"]*)"\s*\n\s*]/g, '"$1"
>>>>>>> main
>>>>>>> main
