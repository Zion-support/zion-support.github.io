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
  <<<<<<< HEAD
        '0': 'Zero'
      

};
      return numberWords[match] || match})
=======
  '0': 'Zero'
      




};
      return numberWords[match] || match;
    })
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    .replace(/[-_](.)/g, (match, group1) => group1.toUpperCase())
<<<<<<< HEAD
    .replace(/^(.)/, (match) => match.toUpperCase());

=======
    .replace(/^(.)/, (match) => match.toUpperCase())}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
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
      `export default ${camelCaseName};`
    );

    // Update title and meta description
    const title = filename.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    newContent = newContent.replace(
      /<title>.*?<\/title>/g,
      `<title>${title} - Zion Tech Solutions</title>`
    );

    newContent = newContent.replace(
      /<meta name="description" content=".*?" \/>/g,
      `<meta name="description" content="${title} blog post" />`
    );

    // Update h1 content
    newContent = newContent.replace(
      /<h1>.*?<\/h1>/g,
      `<h1>${title}</h1>`
    );

    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
<<<<<<< HEAD
<<<<<<< HEAD
      // // // console.log(`Fixed: ${filePath}`);
=======
      // // // // // // // console.log(`Fixed: ${filePath}`);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
      return true;

    return false;
  } catch (error) {
<<<<<<< HEAD
    // // // console.error(`Error fixing ${filePath}:`, error.message);
=======
    // // // // // // // console.error(`Error fixing ${filePath}:`, error.message);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
    return false;


function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
=======
      console.log(`Fixed: ${filePath}`);
      return true}
    
    return false} catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false}
}
function fixedCount = 0;
  
  for (const filePath = path.join(dir, file);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += findAndFixFiles(filePath)} else if (file.endsWith('.tsx') && file.includes('-')) {
      if (fixFile(filePath)) {
<<<<<<< HEAD
        fixedCount++;



  return fixedCount;

=======
        fixedCount++}
    }
  }
  
  return fixedCount}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
// Start fixing files
<<<<<<< HEAD
// // // console.log('Fixing invalid variable names in TypeScript files...');
const fixedCount = findAndFixFiles('./pages');
<<<<<<< HEAD
// // // console.log(`Fixed ${fixedCount} files.`);
}}}}}}}}}}
=======
// // // // // // // console.log('Fixing invalid variable names in TypeScript files...');
const fixedCount = findAndFixFiles('./pages');
// // // // // // // console.log(`Fixed ${fixedCount} files.`);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
=======
console.log(`Fixed ${fixedCount} files.`);

export default toCamelCase;
export default toCamelCase;
export default toCamelCase;
export default toCamelCase;
export default toCamelCase;
export default toCamelCase;
export default toCamelCase;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
