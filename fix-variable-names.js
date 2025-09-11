}
      return numberWords[match] |match});
};
;
}; return numberWords[match] || match}); .replace(/[-_](.)/g, (match, group1) = > group1.toUpperCase()); .replace(/^(.)/, (match) = > match.toUpperCase())}; return true}; return false} catch (error) {; console.error("Error fixing ${filePath}: ", error.message); return false}};
function fixedCount = 0; for (const filePath = path.join(dir, file); const stat = fs.statSync(filePath); if (stat.isDirectory()) {; fixedCount + = findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) {; if (fixFile(filePath)) {; fixedCount++}}}; return fixedCount};
;
      return numberWords[match] || match});
    .replace(/[-_](.)/g, (match, group1) => group1.toUpperCase());
    .replace(/^(.)/, (match) => match.toUpperCase())};
      return true};
    return false} catch (error) {;
    console.error("Error fixing ${filePath}:", error.message);
    return false};
};
function fixedCount = 0;
  for (const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {;
      fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) {;
      if (fixFile(filePath)) {;
        fixedCount++};
    };
  };
return fixedCount};
const fs = require('fs'); const path = require('path'); function toCamelCase(str) { return str .replace(/^[0-9]/,(match) => { const numberWords = { '5': 'Five','4': 'Four','3': 'Three','2': 'Two','1': 'One','0': 'Zero' }; return numberWords[match] || match}) '0': 'Zero' }; return numberWords[match] || match}) .replace(/[-_](.)/g,(match,group1) => group1.toUpperCase()) .replace(/^(.)/,(match) => match.toUpperCase())} function fixFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath,path.extname(filePath)); const camelCaseName = toCamelCase(filename); let newContent = content.replace( new RegExp(`const\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')}\\s*:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,'g'),`const ${camelCaseName}: NextPage = () => {` ); newContent = newContent.replace( new RegExp(`export\\s+default\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')};`,'g'),export default ${camelCaseName};`; ); const title = filename.replace(/-/g,' ').replace(/\b\w/g,l => l.toUpperCase()); newContent = newContent.replace( /<title>.*?<\/title>/g,`<title>${title} - Zion Tech Solutions</title>` ); newContent = newContent.replace( /<meta name="description" content=".*?" \/>/g,`<meta name="description" content="${title} blog post" />` ); newContent = newContent.replace( /<h1>.*?<\/h1>/g,`<h1>${title}</h1>` ); if (newContent !== content) { fs.writeFileSync(filePath,newContent,'utf8'); return true; return false} catch (error) { return false; function findAndFixFiles(dir) { const files = fs.readdirSync(dir); let fixedCount = 0; for (const file of files) { const filePath = path.join(dir,file); console.log(`Fixed: ${filePath}`); return true} return false} catch (error) { console.error(`Error fixing ${filePath}:`,error.message); return false} } function fixedCount = 0; for (const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory()) { fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) { if (fixFile(filePath)) { fixedCount++} } } return fixedCount} const fixedCount = findAndFixFiles('./pages'); console.log(`Fixed ${fixedCount} files.`); export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase;
const fs = require('fs'); const path = require('path'); function toCamelCase(str) { return str .replace(/^[0-9]/,(match) => { const numberWords = { '5': 'Five','4': 'Four','3': 'Three','2': 'Two','1': 'One','0': 'Zero' }; return numberWords[match] || match}) '0': 'Zero' }; return numberWords[match] || match}) .replace(/[-_](.)/g,(match,group1) => group1.toUpperCase()) .replace(/^(.)/,(match) => match.toUpperCase())} function fixFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath,path.extname(filePath)); const camelCaseName = toCamelCase(filename); let newContent = content.replace( new RegExp(`const\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')}\\s*:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,'g'),`const ${camelCaseName}: NextPage = () => {` ); newContent = newContent.replace( new RegExp(`export\\s+default\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')};`,'g'),export default ${camelCaseName};`; ); const title = filename.replace(/-/g,' ').replace(/\b\w/g,l => l.toUpperCase()); newContent = newContent.replace( /<title>.*?<\/title>/g,`<title>${title} - Zion Tech Solutions</title>` ); newContent = newContent.replace( /<meta name="description" content=".*?" \/>/g,`<meta name="description" content="${title} blog post" />` ); newContent = newContent.replace( /<h1>.*?<\/h1>/g,`<h1>${title}</h1>` ); if (newContent !== content) { fs.writeFileSync(filePath,newContent,'utf8'); return true; return false} catch (error) { return false; function findAndFixFiles(dir) { const files = fs.readdirSync(dir); let fixedCount = 0; for (const file of files) { const filePath = path.join(dir,file); console.log(`Fixed: ${filePath}`); return true} return false} catch (error) { console.error(`Error fixing ${filePath}:`,error.message); return false} } function fixedCount = 0; for (const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory()) { fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) { if (fixFile(filePath)) { fixedCount++} } } return fixedCount} const fixedCount = findAndFixFiles('./pages'); console.log(`Fixed ${fixedCount} files.`); export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase;
};
};
  return fixedCount};
};
      return numberWords[match] || match}),;
    .replace(/[-_](.)/g, (match, group1) => group1.toUpperCase()),;
    .replace(/^(.)/, (match) => match.toUpperCase())};
      return true};
    return false} catch (error) {,;
    console.error("Error fixing ${filePath} ", error.message),;
    return false};
};
function fixedCount = 0,;
  for (const filePath = path.join(dir, file),;
    const stat = fs.statSync(filePath),;
    if (stat.isDirectory()) {,;
      fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) {,;
      if (fixFile(filePath)) {,;
;
        fixedCount++};};
};
  return fixedCount};
;
};
      return numberWords[match] || match});







};
;
      return numberWords[match] || match}),;
    .replace(/[-_](.)/g, (match, group1) => group1.toUpperCase()),;
    .replace(/^(.)/, (match) => match.toUpperCase())};
      return true};
    return false} catch (error) {,;
    console.error("Error fixing ${filePath} ", error.message),;
    return false};
};
function fixedCount = 0,;
  for (const filePath = path.join(dir, file),;
    const stat = fs.statSync(filePath),;
    if (stat.isDirectory()) {,;
      fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) {,;
      if (fixFile(filePath)) {,;
;
        fixedCount++};};
};
  return fixedCount};
;
};
      return numberWords[match] || match});
    .replace(/[-_](.)/g, (match, group1) => group1.toUpperCase());
    .replace(/^(.)/, (match) => match.toUpperCase())};
      return true};
    return false} catch (error) {;
    console.error("Error fixing ${filePath}:", error.message);
    return false};
};
function fixedCount = 0;
  for (const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {;
      fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) {;
    if (stat.isDirectory()) {;
      fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) {;
};

      return numberWords[match] || match}),;
    .replace(/[-_](.)/g, (match, group1) => group1 && group1.toUpperCase()),;
    .replace(/^(.)/, (match) => match && match.toUpperCase())};
      return true};
    return false} catch (error) {,;
    console && console.error("Error fixing ${filePath} ", error && error.message),;
    return false};
};
function fixedCount = 0,;
  for (const filePath = path && path.join(dir, file),;
    const stat = fs && fs.statSync(filePath),;
    if (stat && stat.isDirectory()) {,;
      fixedCount += findAndFixFiles(filePath)} else if (file && file.endsWith('.tsx') && file && file.includes('-')) {,;
      if (fixFile(filePath)) {,;

        fixedCount++};};
};
  return fixedCount};

};
      return numberWords[match] || match});
    .replace(/[-_](.)/g, (match, group1) => group1 && group1.toUpperCase());
    .replace(/^(.)/, (match) => match && match.toUpperCase())};
      return true};
    return false} catch (error) {;
    console && console.error("Error fixing ${filePath}:", error && error.message);
    return false};
};
function fixedCount = 0;
  for (const filePath = path && path.join(dir, file);
    const stat = fs && fs.statSync(filePath);
    if (stat && stat.isDirectory()) {;
      fixedCount += findAndFixFiles(filePath)} else if (file && file.endsWith('.tsx') && file && file.includes('-')) {;
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
origin/automation-improvements-final
const fs = require('fs'); const path = require('path'); function toCamelCase(str) { return str .replace(/^[0-9]/,(match) => { const numberWords = { '5': 'Five','4': 'Four','3': 'Three','2': 'Two','1': 'One','0': 'Zero' }; return numberWords[match] || match}) '0': 'Zero' }; return numberWords[match] || match}) .replace(/[-_](.)/g,(match,group1) => group1.toUpperCase()) .replace(/^(.)/,(match) => match.toUpperCase())} function fixFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath,path.extname(filePath)); const camelCaseName = toCamelCase(filename); let newContent = content.replace( new RegExp(`const\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')}\\s*:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,'g'),`const ${camelCaseName}: NextPage = () => {` ); newContent = newContent.replace( new RegExp(`export\\s+default\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')};`,'g'),export default ${camelCaseName};`; ); const title = filename.replace(/-/g,' ').replace(/\b\w/g,l => l.toUpperCase()); newContent = newContent.replace( /<title>.*?<\/title>/g,`<title>${title} - Zion Tech Solutions</title>` ); newContent = newContent.replace( /<meta name="description" content=".*?" \/>/g,`<meta name="description" content="${title} blog post" />` ); newContent = newContent.replace( /<h1>.*?<\/h1>/g,`<h1>${title}</h1>` ); if (newContent !== content) { fs.writeFileSync(filePath,newContent,'utf8'); return true; return false} catch (error) { return false; function findAndFixFiles(dir) { const files = fs.readdirSync(dir); let fixedCount = 0; for (const file of files) { const filePath = path.join(dir,file); console.log(`Fixed: ${filePath}`); return true} return false} catch (error) { console.error(`Error fixing ${filePath}:`,error.message); return false} } function fixedCount = 0; for (const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory()) { fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) { if (fixFile(filePath)) { fixedCount++} } } return fixedCount} const fixedCount = findAndFixFiles('./pages'); console.log(`Fixed ${fixedCount} files.`); export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase;
const fs = require('fs'); const path = require('path'); function toCamelCase(str) { return str .replace(/^[0-9]/,(match) => { const numberWords = { '5': 'Five','4': 'Four','3': 'Three','2': 'Two','1': 'One','0': 'Zero' }; return numberWords[match] || match}) '0': 'Zero' }; return numberWords[match] || match}) .replace(/[-_](.)/g,(match,group1) => group1.toUpperCase()) .replace(/^(.)/,(match) => match.toUpperCase())} function fixFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath,path.extname(filePath)); const camelCaseName = toCamelCase(filename); let newContent = content.replace( new RegExp(`const\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')}\\s*:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,'g'),`const ${camelCaseName}: NextPage = () => {` ); newContent = newContent.replace( new RegExp(`export\\s+default\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')};`,'g'),export default ${camelCaseName};`; ); const title = filename.replace(/-/g,' ').replace(/\b\w/g,l => l.toUpperCase()); newContent = newContent.replace( /<title>.*?<\/title>/g,`<title>${title} - Zion Tech Solutions</title>` ); newContent = newContent.replace( /<meta name="description" content=".*?" \/>/g,`<meta name="description" content="${title} blog post" />` ); newContent = newContent.replace( /<h1>.*?<\/h1>/g,`<h1>${title}</h1>` ); if (newContent !== content) { fs.writeFileSync(filePath,newContent,'utf8'); return true; return false} catch (error) { return false; function findAndFixFiles(dir) { const files = fs.readdirSync(dir); let fixedCount = 0; for (const file of files) { const filePath = path.join(dir,file); console.log(`Fixed: ${filePath}`); return true} return false} catch (error) { console.error(`Error fixing ${filePath}:`,error.message); return false} } function fixedCount = 0; for (const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory()) { fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) { if (fixFile(filePath)) { fixedCount++} } } return fixedCount} const fixedCount = findAndFixFiles('./pages'); console.log(`Fixed ${fixedCount} files.`); export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase;
  return fixedCount};
ursor/fix-lint-push-and-merge-to-main-ae4e
const fs = require('fs'); const path = require('path'); function toCamelCase(str) { return str .replace(/^[0-9]/,(match) => { const numberWords = { '5': 'Five','4': 'Four','3': 'Three','2': 'Two','1': 'One','0': 'Zero' }; return numberWords[match] || match}) '0': 'Zero' }; return numberWords[match] || match}) .replace(/[-_](.)/g,(match,group1) => group1.toUpperCase()) .replace(/^(.)/,(match) => match.toUpperCase())} function fixFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath,path.extname(filePath)); const camelCaseName = toCamelCase(filename); let newContent = content.replace( new RegExp(`const\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')}\\s*:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,'g'),`const ${camelCaseName}: NextPage = () => {` ); newContent = newContent.replace( new RegExp(`export\\s+default\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')};`,'g'),export default ${camelCaseName};`; ); const title = filename.replace(/-/g,' ').replace(/\b\w/g,l => l.toUpperCase()); newContent = newContent.replace( /<title>.*?<\/title>/g,`<title>${title} - Zion Tech Solutions</title>` ); newContent = newContent.replace( /<meta name="description" content=".*?" \/>/g,`<meta name="description" content="${title} blog post" />` ); newContent = newContent.replace( /<h1>.*?<\/h1>/g,`<h1>${title}</h1>` ); if (newContent !== content) { fs.writeFileSync(filePath,newContent,'utf8'); return true; return false} catch (error) { return false; function findAndFixFiles(dir) { const files = fs.readdirSync(dir); let fixedCount = 0; for (const file of files) { const filePath = path.join(dir,file); console.log(`Fixed: ${filePath}`); return true} return false} catch (error) { console.error(`Error fixing ${filePath}:`,error.message); return false} } function fixedCount = 0; for (const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory()) { fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) { if (fixFile(filePath)) { fixedCount++} } } return fixedCount} const fixedCount = findAndFixFiles('./pages'); console.log(`Fixed ${fixedCount} files.`); export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase;
const fs = require('fs'); const path = require('path'); function toCamelCase(str) { return str .replace(/^[0-9]/,(match) => { const numberWords = { '5': 'Five','4': 'Four','3': 'Three','2': 'Two','1': 'One','0': 'Zero' }; return numberWords[match] || match}) '0': 'Zero' }; return numberWords[match] || match}) .replace(/[-_](.)/g,(match,group1) => group1.toUpperCase()) .replace(/^(.)/,(match) => match.toUpperCase())} function fixFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath,path.extname(filePath)); const camelCaseName = toCamelCase(filename); let newContent = content.replace( new RegExp(`const\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')}\\s*:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,'g'),`const ${camelCaseName}: NextPage = () => {` ); newContent = newContent.replace( new RegExp(`export\\s+default\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')};`,'g'),export default ${camelCaseName};`; ); const title = filename.replace(/-/g,' ').replace(/\b\w/g,l => l.toUpperCase()); newContent = newContent.replace( /<title>.*?<\/title>/g,`<title>${title} - Zion Tech Solutions</title>` ); newContent = newContent.replace( /<meta name="description" content=".*?" \/>/g,`<meta name="description" content="${title} blog post" />` ); newContent = newContent.replace( /<h1>.*?<\/h1>/g,`<h1>${title}</h1>` ); if (newContent !== content) { fs.writeFileSync(filePath,newContent,'utf8'); return true; return false} catch (error) { return false; function findAndFixFiles(dir) { const files = fs.readdirSync(dir); let fixedCount = 0; for (const file of files) { const filePath = path.join(dir,file); console.log(`Fixed: ${filePath}`); return true} return false} catch (error) { console.error(`Error fixing ${filePath}:`,error.message); return false} } function fixedCount = 0; for (const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory()) { fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) { if (fixFile(filePath)) { fixedCount++} } } return fixedCount} const fixedCount = findAndFixFiles('./pages'); console.log(`Fixed ${fixedCount} files.`); export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase;
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
function fixedCount = 0,
  for (const filePath = path && path.join(dir, file),
    const stat = fs && fs.statSync(filePath),
    if (stat && stat.isDirectory()) {,
      fixedCount += findAndFixFiles(filePath)} else if (file && file.endsWith('.tsx') && file && file.includes('-')) {,
      if (fixFile(filePath)) {,
        fixedCount++};
    };
  };
  return fixedCount};





const fs = require('fs'); const path = require('path'); function toCamelCase(str) { return str .replace(/^[0-9]/,(match) => { const numberWords = { '5': 'Five','4': 'Four','3': 'Three','2': 'Two','1': 'One','0': 'Zero' }; return numberWords[match] || match}) '0': 'Zero' }; return numberWords[match] || match}) .replace(/[-_](.)/g,(match,group1) => group1 && group1.toUpperCase()) .replace(/^(.)/,(match) => match && match.toUpperCase())} function fixFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const filename = path && path.basename(filePath,path && path.extname(filePath)); const camelCaseName = toCamelCase(filename); let newContent = content && content.replace( new RegExp(`const\\s+${filename && filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')}\\s*:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,'g'),`const ${camelCaseName}: NextPage = () => {` ); newContent = newContent && newContent.replace( new RegExp(`export\\s+default\\s+${filename && filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')};`,'g'),export default ${camelCaseName};`; ); const title = filename && filename.replace(/-/g,' ').replace(/\b\w/g,l => l && l.toUpperCase()); newContent = newContent && newContent.replace( /<title>.*?<\/title>/g,`<title>${title} - Zion Tech Solutions</title>` ); newContent = newContent && newContent.replace( /<meta name="description" content=".*?" \/>/g,`<meta name="description" content="${title} blog post" />` ); newContent = newContent && newContent.replace( /<h1>.*?<\/h1>/g,`<h1>${title}</h1>` ); if (newContent !== content) { fs && fs.writeFileSync(filePath,newContent,'utf8'); return true; return false} catch (error) { return false; function findAndFixFiles(dir) { const files = fs && fs.readdirSync(dir); let fixedCount = 0; for (const file of files) { const filePath = path && path.join(dir,file); console && console.log(`Fixed: ${filePath}`); return true} return false} catch (error) { console && console.error(`Error fixing ${filePath}:`,error && error.message); return false} } function fixedCount = 0; for (const filePath = path && path.join(dir,file); const stat = fs && fs.statSync(filePath); if (stat && stat.isDirectory()) { fixedCount += findAndFixFiles(filePath)} else if (file && file.endsWith('.tsx') && file && file.includes('-')) { if (fixFile(filePath)) { fixedCount++} } } return fixedCount} const fixedCount = findAndFixFiles('./pages'); console && console.log(`Fixed ${fixedCount} files.`); export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase;
const fs = require('fs'); const path = require('path'); function toCamelCase(str) { return str .replace(/^[0-9]/,(match) => { const numberWords = { '5': 'Five','4': 'Four','3': 'Three','2': 'Two','1': 'One','0': 'Zero' }; return numberWords[match] || match}) '0': 'Zero' }; return numberWords[match] || match}) .replace(/[-_](.)/g,(match,group1) => group1 && group1.toUpperCase()) .replace(/^(.)/,(match) => match && match.toUpperCase())} function fixFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const filename = path && path.basename(filePath,path && path.extname(filePath)); const camelCaseName = toCamelCase(filename); let newContent = content && content.replace( new RegExp(`const\\s+${filename && filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')}\\s*:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,'g'),`const ${camelCaseName}: NextPage = () => {` ); newContent = newContent && newContent.replace( new RegExp(`export\\s+default\\s+${filename && filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')};`,'g'),export default ${camelCaseName};`; ); const title = filename && filename.replace(/-/g,' ').replace(/\b\w/g,l => l && l.toUpperCase()); newContent = newContent && newContent.replace( /<title>.*?<\/title>/g,`<title>${title} - Zion Tech Solutions</title>` ); newContent = newContent && newContent.replace( /<meta name="description" content=".*?" \/>/g,`<meta name="description" content="${title} blog post" />` ); newContent = newContent && newContent.replace( /<h1>.*?<\/h1>/g,`<h1>${title}</h1>` ); if (newContent !== content) { fs && fs.writeFileSync(filePath,newContent,'utf8'); return true; return false} catch (error) { return false; function findAndFixFiles(dir) { const files = fs && fs.readdirSync(dir); let fixedCount = 0; for (const file of files) { const filePath = path && path.join(dir,file); console && console.log(`Fixed: ${filePath}`); return true} return false} catch (error) { console && console.error(`Error fixing ${filePath}:`,error && error.message); return false} } function fixedCount = 0; for (const filePath = path && path.join(dir,file); const stat = fs && fs.statSync(filePath); if (stat && stat.isDirectory()) { fixedCount += findAndFixFiles(filePath)} else if (file && file.endsWith('.tsx') && file && file.includes('-')) { if (fixFile(filePath)) { fixedCount++} } } return fixedCount} const fixedCount = findAndFixFiles('./pages'); console && console.log(`Fixed ${fixedCount} files.`); export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase;
}
;
      return number_words[match] || match}),
    .replace (/[-_](.)/g, (match, group1) => group1.toUpperCase ()),
    .replace (/^(.)/, (match) => match.toUpperCase ())}
      return true}
    return false} catch (error) {,
    console.error ("Error fixing ${file_path} ", error.message),
    return false}
}
function fixed_count = 0,
  for (const file_path = path.join (dir, file),
    const stat = fs.stat_sync (file_path),
    if () {, ) {
  $2
}
      fixed_count += findAndFixFiles (file_path)} else if (&& file.includes ('-')) {, ) {
  $2
}
      if () {, ) {
  $2
}
        fixed_count++}}
}
  return fixed_count}
;
}
      return number_words[match] || match});
    .replace (/[-_](.)/g, (match, group1) => group1.toUpperCase ());
    .replace (/^(.)/, (match) => match.toUpperCase ())}
      return true}
    return false} catch (error) {
    console.error ("Error fixing ${file_path}:", error.message);
    return false}
}
function fixed_count = 0;
  for (const file_path = path.join (dir, file);
    const stat = fs.stat_sync (file_path);
    if () {) {
  $2
}
      fixed_count += findAndFixFiles (file_path)} else if (&& file.includes ('-')) {) {
  $2
}
      if () {) {
  $2
}
}
      return number_words[match] || match}),
    .replace (/[-_](.)/g, (match, group1) => group1.toUpperCase ()),
    .replace (/^(.)/, (match) => match.toUpperCase ())}
      return true}
    return false} catch (error) {,
    console.error ("Error fixing ${file_path}:", error.message),
    return false}
}
function fixed_count = 0,
  for (const file_path = path.join (dir, file),
    const stat = fs.stat_sync (file_path),
    if () {, ) {
  $2
}
      fixed_count += findAndFixFiles (file_path)} else if (&& file.includes ('-')) {, ) {
  $2
}
      if () {, ) {
  $2
}
        fixed_count++}
    }
  }
return fixed_count}
const fs = require ('fs'); const path = require ('path'); /**
 * toCamelCase - Function description
 */
function toCamelCase() { return str .replace (/^[0 - 9]/, (match) => { const number_words = { '5': 'Five', '4': 'Four', '3': 'Three', '2': 'Two', '1': 'One', '0': 'Zero' } return number_words[match] || match}) '0': 'Zero' } return number_words[match] || match}) .replace (/[-_](.)/g, (match, group1) => group1.toUpperCase ()) .replace (/^(.)/, (match) => match.toUpperCase ())} /**
 * fix_file - Function description
 */
function fix_file() { try { const content = fs.readFileSync (file_path, 'utf8'); const filename = path.basename (file_path, path.extname (file_path)); const camelCaseName = toCamelCase (filename); let new_content = content.replace ( new RegExp (`const\\s+${filename.replace (/[.*+?^${ }()|[\]\\]/g, '\\$&')}\\s*:\\s * NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`, 'g'), `const ${camelCaseName}: NextPage = () => {` ); new_content = new_content.replace ( new RegExp (`export\\s + default\\s+${filename.replace (/[.*+?^${ }()|[\]\\]/g, '\\$&')}`, 'g'), export default ${camelCaseName}`); const title = filename.replace (/-/g, ' ').replace (/\b\w / g, l => l.toUpperCase ()); new_content = new_content.replace ( /<title>.*?<\/title>/g, `<title>${title} - Zion Tech Solutions</title>` ); new_content = new_content.replace ( /<meta name="description" content=".*?" \/>/g, `<meta name="description" content="${title} blog post" />` ); new_content = new_content.replace ( /<h1>.*?<\/h1>/g, `<h1>${title}</h1>` ); if ( { fs.writeFileSync (file_path, new_content, 'utf8')) {
  $2
} return true; return false} catch (error) { return false; /**
 * findAndFixFiles - Function description
 */
function findAndFixFiles() { const files = fs.readdir_sync (dir); let fixed_count = 0; for (const file of files) { const file_path = path.join (dir, file); console.log (`Fixed: ${file_path}`); return true} return false} catch (error) { console.error (`Error fixing ${file_path}:`, error.message); return false} } function fixed_count = 0; for (const file_path = path.join (dir, file); const stat = fs.stat_sync (file_path); if () { fixed_count += findAndFixFiles (file_path)} else if (file.ends_with ('.tsx') && file.includes ('-')) { if (fix_file (file_path)) { fixed_count++} } } return fixed_count} const fixed_count = findAndFixFiles ('./pages')) {
  $2
} console.log (`Fixed ${fixed_count} files.`); export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase;
const fs = require ('fs'); const path = require ('path'); /**
 * toCamelCase - Function description
 */
function toCamelCase() { return str .replace (/^[0 - 9]/, (match) => { const number_words = { '5': 'Five', '4': 'Four', '3': 'Three', '2': 'Two', '1': 'One', '0': 'Zero' } return number_words[match] || match}) '0': 'Zero' } return number_words[match] || match}) .replace (/[-_](.)/g, (match, group1) => group1.toUpperCase ()) .replace (/^(.)/, (match) => match.toUpperCase ())} /**
 * fix_file - Function description
 */
function fix_file() { try { const content = fs.readFileSync (file_path, 'utf8'); const filename = path.basename (file_path, path.extname (file_path)); const camelCaseName = toCamelCase (filename); let new_content = content.replace ( new RegExp (`const\\s+${filename.replace (/[.*+?^${ }()|[\]\\]/g, '\\$&')}\\s*:\\s * NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`, 'g'), `const ${camelCaseName}: NextPage = () => {` ); new_content = new_content.replace ( new RegExp (`export\\s + default\\s+${filename.replace (/[.*+?^${ }()|[\]\\]/g, '\\$&')}`, 'g'), export default ${camelCaseName}`); const title = filename.replace (/-/g, ' ').replace (/\b\w / g, l => l.toUpperCase ()); new_content = new_content.replace ( /<title>.*?<\/title>/g, `<title>${title} - Zion Tech Solutions</title>` ); new_content = new_content.replace ( /<meta name="description" content=".*?" \/>/g, `<meta name="description" content="${title} blog post" />` ); new_content = new_content.replace ( /<h1>.*?<\/h1>/g, `<h1>${title}</h1>` ); if ( { fs.writeFileSync (file_path, new_content, 'utf8')) {
  $2
} return true; return false} catch (error) { return false; /**
 * findAndFixFiles - Function description
 */
function findAndFixFiles() { const files = fs.readdir_sync (dir); let fixed_count = 0; for (const file of files) { const file_path = path.join (dir, file); console.log (`Fixed: ${file_path}`); return true} return false} catch (error) { console.error (`Error fixing ${file_path}:`, error.message); return false} } function fixed_count = 0; for (const file_path = path.join (dir, file); const stat = fs.stat_sync (file_path); if () { fixed_count += findAndFixFiles (file_path)} else if (file.ends_with ('.tsx') && file.includes ('-')) { if (fix_file (file_path)) { fixed_count++} } } return fixed_count} const fixed_count = findAndFixFiles ('./pages')) {
  $2
} console.log (`Fixed ${fixed_count} files.`); export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase;
;
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
origin/automation-improvements-final
const fs = require('fs'); const path = require('path'); function toCamelCase(str) { return str .replace(/^[0-9]/,(match) => { const numberWords = { '5': 'Five','4': 'Four','3': 'Three','2': 'Two','1': 'One','0': 'Zero' }; return numberWords[match] || match}) '0': 'Zero' }; return numberWords[match] || match}) .replace(/[-_](.)/g,(match,group1) => group1.toUpperCase()) .replace(/^(.)/,(match) => match.toUpperCase())} function fixFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath,path.extname(filePath)); const camelCaseName = toCamelCase(filename); let newContent = content.replace( new RegExp(`const\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')}\\s*:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,'g'),`const ${camelCaseName}: NextPage = () => {` ); newContent = newContent.replace( new RegExp(`export\\s+default\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')};`,'g'),export default ${camelCaseName};`; ); const title = filename.replace(/-/g,' ').replace(/\b\w/g,l => l.toUpperCase()); newContent = newContent.replace( /<title>.*?<\/title>/g,`<title>${title} - Zion Tech Solutions</title>` ); newContent = newContent.replace( /<meta name="description" content=".*?" \/>/g,`<meta name="description" content="${title} blog post" />` ); newContent = newContent.replace( /<h1>.*?<\/h1>/g,`<h1>${title}</h1>` ); if (newContent !== content) { fs.writeFileSync(filePath,newContent,'utf8'); return true; return false} catch (error) { return false; function findAndFixFiles(dir) { const files = fs.readdirSync(dir); let fixedCount = 0; for (const file of files) { const filePath = path.join(dir,file); console.log(`Fixed: ${filePath}`); return true} return false} catch (error) { console.error(`Error fixing ${filePath}:`,error.message); return false} } function fixedCount = 0; for (const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory()) { fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) { if (fixFile(filePath)) { fixedCount++} } } return fixedCount} const fixedCount = findAndFixFiles('./pages'); console.log(`Fixed ${fixedCount} files.`); export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase;
const fs = require('fs'); const path = require('path'); function toCamelCase(str) { return str .replace(/^[0-9]/,(match) => { const numberWords = { '5': 'Five','4': 'Four','3': 'Three','2': 'Two','1': 'One','0': 'Zero' }; return numberWords[match] || match}) '0': 'Zero' }; return numberWords[match] || match}) .replace(/[-_](.)/g,(match,group1) => group1.toUpperCase()) .replace(/^(.)/,(match) => match.toUpperCase())} function fixFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath,path.extname(filePath)); const camelCaseName = toCamelCase(filename); let newContent = content.replace( new RegExp(`const\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')}\\s*:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,'g'),`const ${camelCaseName}: NextPage = () => {` ); newContent = newContent.replace( new RegExp(`export\\s+default\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')};`,'g'),export default ${camelCaseName};`; ); const title = filename.replace(/-/g,' ').replace(/\b\w/g,l => l.toUpperCase()); newContent = newContent.replace( /<title>.*?<\/title>/g,`<title>${title} - Zion Tech Solutions</title>` ); newContent = newContent.replace( /<meta name="description" content=".*?" \/>/g,`<meta name="description" content="${title} blog post" />` ); newContent = newContent.replace( /<h1>.*?<\/h1>/g,`<h1>${title}</h1>` ); if (newContent !== content) { fs.writeFileSync(filePath,newContent,'utf8'); return true; return false} catch (error) { return false; function findAndFixFiles(dir) { const files = fs.readdirSync(dir); let fixedCount = 0; for (const file of files) { const filePath = path.join(dir,file); console.log(`Fixed: ${filePath}`); return true} return false} catch (error) { console.error(`Error fixing ${filePath}:`,error.message); return false} } function fixedCount = 0; for (const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory()) { fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) { if (fixFile(filePath)) { fixedCount++} } } return fixedCount} const fixedCount = findAndFixFiles('./pages'); console.log(`Fixed ${fixedCount} files.`); export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase;
  return fixedCount};
ursor/fix-lint-push-and-merge-to-main-ae4e
const fs = require('fs'); const path = require('path'); function toCamelCase(str) { return str .replace(/^[0-9]/,(match) => { const numberWords = { '5': 'Five','4': 'Four','3': 'Three','2': 'Two','1': 'One','0': 'Zero' }; return numberWords[match] || match}) '0': 'Zero' }; return numberWords[match] || match}) .replace(/[-_](.)/g,(match,group1) => group1.toUpperCase()) .replace(/^(.)/,(match) => match.toUpperCase())} function fixFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath,path.extname(filePath)); const camelCaseName = toCamelCase(filename); let newContent = content.replace( new RegExp(`const\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')}\\s*:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,'g'),`const ${camelCaseName}: NextPage = () => {` ); newContent = newContent.replace( new RegExp(`export\\s+default\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')};`,'g'),export default ${camelCaseName};`; ); const title = filename.replace(/-/g,' ').replace(/\b\w/g,l => l.toUpperCase()); newContent = newContent.replace( /<title>.*?<\/title>/g,`<title>${title} - Zion Tech Solutions</title>` ); newContent = newContent.replace( /<meta name="description" content=".*?" \/>/g,`<meta name="description" content="${title} blog post" />` ); newContent = newContent.replace( /<h1>.*?<\/h1>/g,`<h1>${title}</h1>` ); if (newContent !== content) { fs.writeFileSync(filePath,newContent,'utf8'); return true; return false} catch (error) { return false; function findAndFixFiles(dir) { const files = fs.readdirSync(dir); let fixedCount = 0; for (const file of files) { const filePath = path.join(dir,file); console.log(`Fixed: ${filePath}`); return true} return false} catch (error) { console.error(`Error fixing ${filePath}:`,error.message); return false} } function fixedCount = 0; for (const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory()) { fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) { if (fixFile(filePath)) { fixedCount++} } } return fixedCount} const fixedCount = findAndFixFiles('./pages'); console.log(`Fixed ${fixedCount} files.`); export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase;
const fs = require('fs'); const path = require('path'); function toCamelCase(str) { return str .replace(/^[0-9]/,(match) => { const numberWords = { '5': 'Five','4': 'Four','3': 'Three','2': 'Two','1': 'One','0': 'Zero' }; return numberWords[match] || match}) '0': 'Zero' }; return numberWords[match] || match}) .replace(/[-_](.)/g,(match,group1) => group1.toUpperCase()) .replace(/^(.)/,(match) => match.toUpperCase())} function fixFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath,path.extname(filePath)); const camelCaseName = toCamelCase(filename); let newContent = content.replace( new RegExp(`const\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')}\\s*:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,'g'),`const ${camelCaseName}: NextPage = () => {` ); newContent = newContent.replace( new RegExp(`export\\s+default\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')};`,'g'),export default ${camelCaseName};`; ); const title = filename.replace(/-/g,' ').replace(/\b\w/g,l => l.toUpperCase()); newContent = newContent.replace( /<title>.*?<\/title>/g,`<title>${title} - Zion Tech Solutions</title>` ); newContent = newContent.replace( /<meta name="description" content=".*?" \/>/g,`<meta name="description" content="${title} blog post" />` ); newContent = newContent.replace( /<h1>.*?<\/h1>/g,`<h1>${title}</h1>` ); if (newContent !== content) { fs.writeFileSync(filePath,newContent,'utf8'); return true; return false} catch (error) { return false; function findAndFixFiles(dir) { const files = fs.readdirSync(dir); let fixedCount = 0; for (const file of files) { const filePath = path.join(dir,file); console.log(`Fixed: ${filePath}`); return true} return false} catch (error) { console.error(`Error fixing ${filePath}:`,error.message); return false} } function fixedCount = 0; for (const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory()) { fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) { if (fixFile(filePath)) { fixedCount++} } } return fixedCount} const fixedCount = findAndFixFiles('./pages'); console.log(`Fixed ${fixedCount} files.`); export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase;
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
function fixedCount = 0,
  for (const filePath = path.join(dir, file),
    const stat = fs.statSync(filePath),
    if (stat.isDirectory()) {,
      fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) {,
      if (fixFile(filePath)) {,
        fixedCount++};
    };
  };
  return fixedCount};
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
return fixedCount}
const fs = require('fs'); const path = require('path'); function toCamelCase(str) { return str .replace(/^[0-9]/,(match) => { const numberWords = { '5': 'Five','4': 'Four','3': 'Three','2': 'Two','1': 'One','0': 'Zero' }; return numberWords[match] |match}) '0': 'Zero' }; return numberWords[match] |match}) .replace(/[-_](.)/g,(match,group1) => group1.toUpperCase()) .replace(/^(.)/,(match) => match.toUpperCase())} function fixFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath,path.extname(filePath)); const camelCaseName = toCamelCase(filename); let newContent = content.replace( new RegExp(`const\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')}\\s*:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,'g'),`const ${camelCaseName}: NextPage = () => {` ); newContent = newContent.replace( new RegExp(`export\\s+default\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')};`,'g'),export default ${camelCaseName};`; ); const title = filename.replace(/-/g,' ').replace(/\b\w/g,l => l.toUpperCase()); newContent = newContent.replace( /<title>.*?<\/title>/g,`<title>${title} - Zion Tech Solutions</title>` ); newContent = newContent.replace( /<meta name="description" content=".*?" \/>/g,`<meta name="description" content="${title} blog post" />` ); newContent = newContent.replace( /<h1>.*?<\/h1>/g,`<h1>${title}</h1>` ); if (newContent !== content) { fs.writeFileSync(filePath,newContent,'utf8'); return true; return false} catch (error) { return false; function findAndFixFiles(dir) { const files = fs.readdirSync(dir); let fixedCount = 0; for (const file of files) { const filePath = path.join(dir,file); console.log(`Fixed: ${filePath}`); return true} return false} catch (error) { console.error(`Error fixing ${filePath}:`,error.message); return false} } function fixedCount = 0; for (const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory()) { fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) { if (fixFile(filePath)) { fixedCount++} } } return fixedCount} const fixedCount = findAndFixFiles('./pages'); console.log(`Fixed ${fixedCount} files.`); export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase;
const fs = require('fs'); const path = require('path'); function toCamelCase(str) { return str .replace(/^[0-9]/,(match) => { const numberWords = { '5': 'Five','4': 'Four','3': 'Three','2': 'Two','1': 'One','0': 'Zero' }; return numberWords[match] |match}) '0': 'Zero' }; return numberWords[match] |match}) .replace(/[-_](.)/g,(match,group1) => group1.toUpperCase()) .replace(/^(.)/,(match) => match.toUpperCase())} function fixFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath,path.extname(filePath)); const camelCaseName = toCamelCase(filename); let newContent = content.replace( new RegExp(`const\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')}\\s*:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,'g'),`const ${camelCaseName}: NextPage = () => {` ); newContent = newContent.replace( new RegExp(`export\\s+default\\s+${filename.replace(/[.*+?^${ }()|[\]\\]/g,'\\$&')};`,'g'),export default ${camelCaseName};`; ); const title = filename.replace(/-/g,' ').replace(/\b\w/g,l => l.toUpperCase()); newContent = newContent.replace( /<title>.*?<\/title>/g,`<title>${title} - Zion Tech Solutions</title>` ); newContent = newContent.replace( /<meta name="description" content=".*?" \/>/g,`<meta name="description" content="${title} blog post" />` ); newContent = newContent.replace( /<h1>.*?<\/h1>/g,`<h1>${title}</h1>` ); if (newContent !== content) { fs.writeFileSync(filePath,newContent,'utf8'); return true; return false} catch (error) { return false; function findAndFixFiles(dir) { const files = fs.readdirSync(dir); let fixedCount = 0; for (const file of files) { const filePath = path.join(dir,file); console.log(`Fixed: ${filePath}`); return true} return false} catch (error) { console.error(`Error fixing ${filePath}:`,error.message); return false} } function fixedCount = 0; for (const filePath = path.join(dir,file); const stat = fs.statSync(filePath); if (stat.isDirectory()) { fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) { if (fixFile(filePath)) { fixedCount++} } } return fixedCount} const fixedCount = findAndFixFiles('./pages'); console.log(`Fixed ${fixedCount} files.`); export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase; export default toCamelCase;
origin/main
},;
  return fixedCount},;
