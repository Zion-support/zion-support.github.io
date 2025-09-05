const fs = require('fs'); const path = require('path'); function toCamelCase(str) { return str .replace(/^[0-9]/,(match) => { const numberWords = { '5': 'Five','4': 'Four','3': 'Three','2': 'Two','1': 'One','0': 'Zero' }; return numberWords[match] || match}) '0': 'Zero' }; return numberWords[match] || match}) .replace(/[-_](.)/g,(match,group1) => group1.toUpperCase()) .replace(/^(.)/,(match) => match.toUpperCase())} function fixFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath,path.extname(filePath)); const camelCaseName = toCamelCase(filename); let newContent = content.replace( new RegExp(`const\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')}\\s*:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,'g'),`const ${camelCaseName}: NextPage = () => {` ); newContent = newContent.replace( new RegExp(`export\\s+default\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')};`,'g'),export default ${camelCaseName};`; ); const title = filename.replace(/-/g,' ').replace(/\b\w/g,l => l.toUpperCase()); newContent = newContent.replace( /<title>.*?<\/title>/g,`<title>${title} - Zion Tech Solutions</title>` ); newContent = newContent.replace( /<meta name="description" content=".*?" \/>/g,`<meta name="description" content="${title} blog post" />` ); newContent = newContent.replace( /<h1>.*?<\/h1>/g,`<h1>${title}</h1>` ); if (newContent !== content) { fs.writeFileSync(filePath,newContent,'utf8'); return true; return false} catch (error) { return false; function findAndFixFiles(dir) { const files = fs.readdirSync(dir); let fixedCount = 0; for (const file of files) { const filePath = path.join(dir,file);  return true} return false} catch (error) { console.error(`Error fixing ${filePath}:`,error.message); return false} } function fixedCount = 0; for (const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory()) { fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) { if (fixFile(filePath)) { fixedCount++} } } return fixedCount} const fixedCount = findAndFixFiles('./pages');  export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase;
<<<<<<< HEAD

>>>>>>> origin/main
=======
>>>>>>> origin/main
const fs = require('fs');
const path = require('path');
function toCamelCase(str) {
  return str
    .replace(/^[0-9]/, (match) => {
      const numberWords = {
  '5': 'Five',
        '4': 'Four',
        '3': 'Three',
        '2': 'Two',
        '1': 'One',
        '0': 'Zero'
};
      return numberWords[match] || match})
  '0': 'Zero'
};
      return numberWords[match] || match})
    .replace(/[-_](.)/g, (match, group1) => group1.toUpperCase())
    .replace(/^(.)/, (match) => match.toUpperCase())}
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    // Extract filename without extension
    const filename = path.basename(filePath, path.extname(filePath));
    const camelCaseName = toCamelCase(filename);
    // Replace the variable declaration
    let newContent = content.replace(
      new RegExp(`const\\s+${filename.replace(/[.*+?^${ /* empty */ }()|[\]\\]/g, '\\$&')}\\s*:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`, 'g'),
      `const ${camelCaseName}: NextPage = () => {`
    );
    // Replace the export statement
    newContent = newContent.replace(
      new RegExp(`export\\s+default\\s+${filename.replace(/[.*+?^${ /* empty */ }()|[\]\\]/g, '\\$&')};`, 'g'),
export default ${camelCaseName};";
    );
    // Update title and meta description
    const title = filename.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    newContent = newContent.replace(
      /<title>.*?<\/title>/g,
      "<title>${title} - Zion Tech Solutions</title>"
    );
    newContent = newContent.replace(
      /<meta name="description" content=".*?" \/>/g,
      "<meta name="description" content="${title} blog post" />"
    );
    // Update h1 content
    newContent = newContent.replace(
      /<h1>.*?<\/h1>/g,
      "<h1>${title}</h1>"
    );
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      // // // // // // // console.log(""Fixed": ${filePath}");
      return true;
    return false} catch (error) {
    // // // // // // // console.error("Error fixing ${filePath}:", error.message);
    return false;
function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  for (const file of files) {
    const filePath = path.join(dir, file);
      console.log(""Fixed": ${filePath}");
      return true}
    return false} catch (error) {
    console.error("Error fixing ${filePath}:", error.message);
    return false}
}
function fixedCount = 0;
  for (const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) {
      if (fixFile(filePath)) {
        fixedCount++}
    }
  }
  return fixedCount}
// Start fixing files
// // // // // // // console.log('Fixing invalid variable names in TypeScript files...');
const fixedCount = findAndFixFiles('./pages');
// // // // // // // console.log("Fixed ${fixedCount} files.");
console.log("Fixed ${fixedCount} files.`);
export default toCamelCase;
export default toCamelCase;
export default toCamelCase;
export default toCamelCase;
export default toCamelCase;
export default toCamelCase;
export default toCamelCase;
<<<<<<< HEAD

const fs = require('fs'); const path = require('path'); function toCamelCase(str) { return str .replace(/^[0-9]/,(match) => { const numberWords = { '5': 'Five','4': 'Four','3': 'Three','2': 'Two','1': 'One','0': 'Zero' }; return numberWords[match] || match}) '0': 'Zero' }; return numberWords[match] || match}) .replace(/[-_](.)/g,(match,group1) => group1.toUpperCase()) .replace(/^(.)/,(match) => match.toUpperCase())} function fixFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath,path.extname(filePath)); const camelCaseName = toCamelCase(filename); let newContent = content.replace( new RegExp(`const\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')}\\s*:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,'g'),`const ${camelCaseName}: NextPage = () => {` ); newContent = newContent.replace( new RegExp(`export\\s+default\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')};`,'g'),export default ${camelCaseName};`; ); const title = filename.replace(/-/g,' ').replace(/\b\w/g,l => l.toUpperCase()); newContent = newContent.replace( /<title>.*?<\/title>/g,`<title>${title} - Zion Tech Solutions</title>` ); newContent = newContent.replace( /<meta name="description" content=".*?" \/>/g,`<meta name="description" content="${title} blog post" />` ); newContent = newContent.replace( /<h1>.*?<\/h1>/g,`<h1>${title}</h1>` ); if (newContent !== content) { fs.writeFileSync(filePath,newContent,'utf8'); return true; return false} catch (error) { return false; function findAndFixFiles(dir) { const files = fs.readdirSync(dir); let fixedCount = 0; for (const file of files) { const filePath = path.join(dir,file); console.log(`Fixed: ${filePath}`); return true} return false} catch (error) { console.error(`Error fixing ${filePath}:`,error.message); return false} } function fixedCount = 0; for (const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory()) { fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) { if (fixFile(filePath)) { fixedCount++} } } return fixedCount} const fixedCount = findAndFixFiles('./pages'); console.log(`Fixed ${fixedCount} files.`); export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase;

const fs = require('fs'); const path = require('path'); function toCamelCase(str) { return str .replace(/^[0-9]/,(match) => { const numberWords = { '5': 'Five','4': 'Four','3': 'Three','2': 'Two','1': 'One','0': 'Zero' }; return numberWords[match] || match}) '0': 'Zero' }; return numberWords[match] || match}) .replace(/[-_](.)/g,(match,group1) => group1.toUpperCase()) .replace(/^(.)/,(match) => match.toUpperCase())} function fixFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath,path.extname(filePath)); const camelCaseName = toCamelCase(filename); let newContent = content.replace( new RegExp(`const\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')}\\s*:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,'g'),`const ${camelCaseName}: NextPage = () => {` ); newContent = newContent.replace( new RegExp(`export\\s+default\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')};`,'g'),export default ${camelCaseName};`; ); const title = filename.replace(/-/g,' ').replace(/\b\w/g,l => l.toUpperCase()); newContent = newContent.replace( /<title>.*?<\/title>/g,`<title>${title} - Zion Tech Solutions</title>` ); newContent = newContent.replace( /<meta name="description" content=".*?" \/>/g,`<meta name="description" content="${title} blog post" />` ); newContent = newContent.replace( /<h1>.*?<\/h1>/g,`<h1>${title}</h1>` ); if (newContent !== content) { fs.writeFileSync(filePath,newContent,'utf8'); return true; return false} catch (error) { return false; function findAndFixFiles(dir) { const files = fs.readdirSync(dir); let fixedCount = 0; for (const file of files) { const filePath = path.join(dir,file); console.log(`Fixed: ${filePath}`); return true} return false} catch (error) { console.error(`Error fixing ${filePath}:`,error.message); return false} } function fixedCount = 0; for (const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory()) { fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) { if (fixFile(filePath)) { fixedCount++} } } return fixedCount} const fixedCount = findAndFixFiles('./pages'); console.log(`Fixed ${fixedCount} files.`); export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase;
>>>>>>> origin/main

=======
const fs = require('fs'); const path = require('path'); function toCamelCase(str) { return str .replace(/^[0-9]/,(match) => { const numberWords = { '5': 'Five','4': 'Four','3': 'Three','2': 'Two','1': 'One','0': 'Zero' }; return numberWords[match] || match}) '0': 'Zero' }; return numberWords[match] || match}) .replace(/[-_](.)/g,(match,group1) => group1.toUpperCase()) .replace(/^(.)/,(match) => match.toUpperCase())} function fixFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath,path.extname(filePath)); const camelCaseName = toCamelCase(filename); let newContent = content.replace( new RegExp(`const\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')}\\s*:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,'g'),`const ${camelCaseName}: NextPage = () => {` ); newContent = newContent.replace( new RegExp(`export\\s+default\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')};`,'g'),export default ${camelCaseName};`; ); const title = filename.replace(/-/g,' ').replace(/\b\w/g,l => l.toUpperCase()); newContent = newContent.replace( /<title>.*?<\/title>/g,`<title>${title} - Zion Tech Solutions</title>` ); newContent = newContent.replace( /<meta name="description" content=".*?" \/>/g,`<meta name="description" content="${title} blog post" />` ); newContent = newContent.replace( /<h1>.*?<\/h1>/g,`<h1>${title}</h1>` ); if (newContent !== content) { fs.writeFileSync(filePath,newContent,'utf8'); return true; return false} catch (error) { return false; function findAndFixFiles(dir) { const files = fs.readdirSync(dir); let fixedCount = 0; for (const file of files) { const filePath = path.join(dir,file); console.log(`Fixed: ${filePath}`); return true} return false} catch (error) { console.error(`Error fixing ${filePath}:`,error.message); return false} } function fixedCount = 0; for (const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory()) { fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) { if (fixFile(filePath)) { fixedCount++} } } return fixedCount} const fixedCount = findAndFixFiles('./pages'); console.log(`Fixed ${fixedCount} files.`); export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const fs = require('fs'); const path = require('path'); function toCamelCase(str) { return str .replace(/^[0-9]/,(match) => { const numberWords = { '5': 'Five','4': 'Four','3': 'Three','2': 'Two','1': 'One','0': 'Zero' }; return numberWords[match] || match}) '0': 'Zero' }; return numberWords[match] || match}) .replace(/[-_](.)/g,(match,group1) => group1.toUpperCase()) .replace(/^(.)/,(match) => match.toUpperCase())} function fixFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath,path.extname(filePath)); const camelCaseName = toCamelCase(filename); let newContent = content.replace( new RegExp(`const\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')}\\s*:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,'g'),`const ${camelCaseName}: NextPage = () => {` ); newContent = newContent.replace( new RegExp(`export\\s+default\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')};`,'g'),export default ${camelCaseName};`; ); const title = filename.replace(/-/g,' ').replace(/\b\w/g,l => l.toUpperCase()); newContent = newContent.replace( /<title>.*?<\/title>/g,`<title>${title} - Zion Tech Solutions</title>` ); newContent = newContent.replace( /<meta name="description" content=".*?" \/>/g,`<meta name="description" content="${title} blog post" />` ); newContent = newContent.replace( /<h1>.*?<\/h1>/g,`<h1>${title}</h1>` ); if (newContent !== content) { fs.writeFileSync(filePath,newContent,'utf8'); return true; return false} catch (error) { return false; function findAndFixFiles(dir) { const files = fs.readdirSync(dir); let fixedCount = 0; for (const file of files) { const filePath = path.join(dir,file); console.log(`Fixed: ${filePath}`); return true} return false} catch (error) { console.error(`Error fixing ${filePath}:`,error.message); return false} } function fixedCount = 0; for (const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory()) { fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) { if (fixFile(filePath)) { fixedCount++} } } return fixedCount} const fixedCount = findAndFixFiles('./pages'); console.log(`Fixed ${fixedCount} files.`); export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase;
=======
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7ef8
const fs = require('fs'); const path = require('path'); function toCamelCase(str) { return str .replace(/^[0-9]/,(match) => { const numberWords = { '5': 'Five','4': 'Four','3': 'Three','2': 'Two','1': 'One','0': 'Zero' }; return numberWords[match] || match}) '0': 'Zero' }; return numberWords[match] || match}) .replace(/[-_](.)/g,(match,group1) => group1.toUpperCase()) .replace(/^(.)/,(match) => match.toUpperCase())} function fixFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath,path.extname(filePath)); const camelCaseName = toCamelCase(filename); let newContent = content.replace( new RegExp(`const\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')}\\s*:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,'g'),`const ${camelCaseName}: NextPage = () => {` ); newContent = newContent.replace( new RegExp(`export\\s+default\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')};`,'g'),export default ${camelCaseName};`; ); const title = filename.replace(/-/g,' ').replace(/\b\w/g,l => l.toUpperCase()); newContent = newContent.replace( /<title>.*?<\/title>/g,`<title>${title} - Zion Tech Solutions</title>` ); newContent = newContent.replace( /<meta name="description" content=".*?" \/>/g,`<meta name="description" content="${title} blog post" />` ); newContent = newContent.replace( /<h1>.*?<\/h1>/g,`<h1>${title}</h1>` ); if (newContent !== content) { fs.writeFileSync(filePath,newContent,'utf8'); return true; return false} catch (error) { return false; function findAndFixFiles(dir) { const files = fs.readdirSync(dir); let fixedCount = 0; for (const file of files) { const filePath = path.join(dir,file); console.log(`Fixed: ${filePath}`); return true} return false} catch (error) { console.error(`Error fixing ${filePath}:`,error.message); return false} } function fixedCount = 0; for (const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory()) { fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) { if (fixFile(filePath)) { fixedCount++} } } return fixedCount} const fixedCount = findAndFixFiles('./pages'); console.log(`Fixed ${fixedCount} files.`); export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase;
>>>>>>> fe76b9a4284841cc4ea795ce0635075150be4a8b
=======
const fs = require('fs'); const path = require('path'); function toCamelCase(str) { return str .replace(/^[0-9]/,(match) => { const numberWords = { '5': 'Five','4': 'Four','3': 'Three','2': 'Two','1': 'One','0': 'Zero' }; return numberWords[match] || match}) '0': 'Zero' }; return numberWords[match] || match}) .replace(/[-_](.)/g,(match,group1) => group1.toUpperCase()) .replace(/^(.)/,(match) => match.toUpperCase())} function fixFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath,path.extname(filePath)); const camelCaseName = toCamelCase(filename); let newContent = content.replace( new RegExp(`const\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')}\\s*:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,'g'),`const ${camelCaseName}: NextPage = () => {` ); newContent = newContent.replace( new RegExp(`export\\s+default\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')};`,'g'),export default ${camelCaseName};`; ); const title = filename.replace(/-/g,' ').replace(/\b\w/g,l => l.toUpperCase()); newContent = newContent.replace( /<title>.*?<\/title>/g,`<title>${title} - Zion Tech Solutions</title>` ); newContent = newContent.replace( /<meta name="description" content=".*?" \/>/g,`<meta name="description" content="${title} blog post" />` ); newContent = newContent.replace( /<h1>.*?<\/h1>/g,`<h1>${title}</h1>` ); if (newContent !== content) { fs.writeFileSync(filePath,newContent,'utf8'); return true; return false} catch (error) { return false; function findAndFixFiles(dir) { const files = fs.readdirSync(dir); let fixedCount = 0; for (const file of files) { const filePath = path.join(dir,file); console.log(`Fixed: ${filePath}`); return true} return false} catch (error) { console.error(`Error fixing ${filePath}:`,error.message); return false} } function fixedCount = 0; for (const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory()) { fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) { if (fixFile(filePath)) { fixedCount++} } } return fixedCount} const fixedCount = findAndFixFiles('./pages'); console.log(`Fixed ${fixedCount} files.`); export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase;
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
const fs = require('fs'); const path = require('path'); function toCamelCase(str) { return str .replace(/^[0-9]/,(match) => { const numberWords = { '5': 'Five','4': 'Four','3': 'Three','2': 'Two','1': 'One','0': 'Zero' }; return numberWords[match] || match}) '0': 'Zero' }; return numberWords[match] || match}) .replace(/[-_](.)/g,(match,group1) => group1.toUpperCase()) .replace(/^(.)/,(match) => match.toUpperCase())} function fixFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath,path.extname(filePath)); const camelCaseName = toCamelCase(filename); let newContent = content.replace( new RegExp(`const\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')}\\s*:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,'g'),`const ${camelCaseName}: NextPage = () => {` ); newContent = newContent.replace( new RegExp(`export\\s+default\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')};`,'g'),export default ${camelCaseName};`; ); const title = filename.replace(/-/g,' ').replace(/\b\w/g,l => l.toUpperCase()); newContent = newContent.replace( /<title>.*?<\/title>/g,`<title>${title} - Zion Tech Solutions</title>` ); newContent = newContent.replace( /<meta name="description" content=".*?" \/>/g,`<meta name="description" content="${title} blog post" />` ); newContent = newContent.replace( /<h1>.*?<\/h1>/g,`<h1>${title}</h1>` ); if (newContent !== content) { fs.writeFileSync(filePath,newContent,'utf8'); return true; return false} catch (error) { return false; function findAndFixFiles(dir) { const files = fs.readdirSync(dir); let fixedCount = 0; for (const file of files) { const filePath = path.join(dir,file); console.log(`Fixed: ${filePath}`); return true} return false} catch (error) { console.error(`Error fixing ${filePath}:`,error.message); return false} } function fixedCount = 0; for (const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory()) { fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) { if (fixFile(filePath)) { fixedCount++} } } return fixedCount} const fixedCount = findAndFixFiles('./pages'); console.log(`Fixed ${fixedCount} files.`); export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase;
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
>>>>>>> origin/main
