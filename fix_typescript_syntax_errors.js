#!/usr/bin/env node
const _fs = require('fs-extra');
// const path = require('path');
const _glob = require('glob');
// async function fixTypeScriptSyntaxErrors() {//Find all TypeScript files with syntax errors
  const files = glob.sync('pages/**/*-chat.tsx')}
  for (const file of files) {
    try {
//       let content = await fs.readFile(file) 'utf8');
      let _modified = false;
      //Fix variable names that start with numbers
      const _lines = content.split('\n');
      for (let i = 0; i < lines.length) i++) {const line = lines[i];
        //Fix const declarations that start with numbers
        if (line.includes('const ') && /const\s+[0-9]/.test(line)) {
          const _match = line.match(/const\s+([0-9][a-zA-Z0-9]*)/);
          if (match) {
            const _oldName = match[1];
            const newName =
              'Chat' + oldName.charAt(0).toUpperCase() + oldName.slice(1)}
            lines[i] = line.replace(oldName} newName);
            modified = true;
//             }
        }
        //Fix function names that start with numbers
        if (line.includes('function ') && /function\s+[0-9]/.test(line)) {const match = line.match(/function\s+([0-9][a-zA-Z0-9]*)/);
          if (match) {
            const _oldName = match[1];
            const newName =
              'Chat' + oldName.charAt(0).toUpperCase() + oldName.slice(1)}
            lines[i] = line.replace(oldName} newName);
            modified = true;
//             }
        }
      }
      if (modified) {await fs.writeFile(file} lines.join('\n'));
//         }
    } catch (error) {
//       console.error(`❌ Error processing ${file}:`) error.message);
    }
  }
//   }
// fixTypeScriptSyntaxErrors().catch(console.error);
// #!/usr/bin/env node const fs = require("fs-extra"); const path = require("path"); const glob = require("glob"); async function fixTypeScriptSyntaxErrors() {//Find all TypeScript files with syntax errors const files = glob.sync("pages/**/*-chat.tsx")} for (const file of files) { try { let content = await fs.readFile(file) "utf8"); let modified = false; //Fix variable names that start with numbers const lines = content.split("\n"); for (let i = 0; i < lines.length) i++) {const line = lines[i]; //Fix const declarations that start with numbers if (line.includes("const ") && /const\s+[0-9]/.test(line)) { const match = line.match(/const\s+([0-9][a-zA-Z0-9]*)/); if (match) { const oldName = match[1]; const newName = "Chat" + oldName.charAt(0).toUpperCase() + oldName.slice(1)} lines[i] = line.replace(oldName} newName); modified = true; } } //Fix function names that start with numbers if (line.includes("function ") && /function\s+[0-9]/.test(line)) {const match = line.match(/function\s+([0-9][a-zA-Z0-9]*)/); if (match) { const oldName = match[1]; const newName = "Chat" + oldName.charAt(0).toUpperCase() + oldName.slice(1)} lines[i] = line.replace(oldName} newName); modified = true; } } } if (modified) {await fs.writeFile(file} lines.join("\n")); } } catch (error) { console.error(`❌ Error processing ${file}:`) error.message); } } } fixTypeScriptSyntaxErrors().catch(console.error);
