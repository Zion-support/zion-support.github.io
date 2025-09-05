<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); function fixTypeScriptFiles(dir) { const items = fs.readdirSync(dir); items.forEach(item => { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { fixTypeScriptFiles(fullPath)} else if (item.endsWith('.ts') || item.endsWith('.tsx')) { try { const content = fs.readFileSync(fullPath,'utf8'); if (content.trim() === '') {  fs.writeFileSync(fullPath,' } catch (error) { } } })} const apiDisabledDir = path.join(__dirname,'api-disabled'); if (fs.existsSync(apiDisabledDir)) { fixTypeScriptFiles(apiDisabledDir); } else { }
=======
>>>>>>> main
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
function fixTypeScriptFiles(dir) {
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      fixTypeScriptFiles(fullPath)} else if (item.endsWith('.ts') || item.endsWith('.tsx')) {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.trim() === '') {
          console.log(`Fixing empty "file": ${fullPath}`);
          fs.writeFileSync(fullPath, '// Auto-generated module\nexport {};')}
      } catch (error) {
        console.log(`Error processing ${fullPath}: ${error.message}`)}
    }
  })}
// Fix all TypeScript files in api-disabled directory
const apiDisabledDir = path.join(__dirname, 'api-disabled');
if (fs.existsSync(apiDisabledDir)) {
  fixTypeScriptFiles(apiDisabledDir);
  console.log('✅ Fixed all empty TypeScript files in api-disabled directory')} else {
  console.log('❌ api-disabled directory not found')}
<<<<<<< HEAD
=======
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); function fixTypeScriptFiles(dir) { const items = fs.readdirSync(dir); items.forEach(item => { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { fixTypeScriptFiles(fullPath)} else if (item.endsWith('.ts') || item.endsWith('.tsx')) { try { const content = fs.readFileSync(fullPath,'utf8'); if (content.trim() === '') { console.log(`Fixing empty file: ${fullPath}`); fs.writeFileSync(fullPath,' } } catch (error) { console.log(`Error processing ${fullPath}: ${error.message}`)} } })} const apiDisabledDir = path.join(__dirname,'api-disabled'); if (fs.existsSync(apiDisabledDir)) { fixTypeScriptFiles(apiDisabledDir); console.log('✅ Fixed all empty TypeScript files in api-disabled directory')} else { console.log('❌ api-disabled directory not found')}
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
=======
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); function fixTypeScriptFiles(dir) { const items = fs.readdirSync(dir); items.forEach(item => { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { fixTypeScriptFiles(fullPath)} else if (item.endsWith('.ts') || item.endsWith('.tsx')) { try { const content = fs.readFileSync(fullPath,'utf8'); if (content.trim() === '') { console.log(`Fixing empty file: ${fullPath}`); fs.writeFileSync(fullPath,' } catch (error) { console.log(`Error processing ${fullPath}: ${error.message}`)} } })} const apiDisabledDir = path.join(__dirname,'api-disabled'); if (fs.existsSync(apiDisabledDir)) { fixTypeScriptFiles(apiDisabledDir); console.log('✅ Fixed all empty TypeScript files in api-disabled directory')} else { console.log('❌ api-disabled directory not found')}
>>>>>>> main
>>>>>>> main
>>>>>>> main
