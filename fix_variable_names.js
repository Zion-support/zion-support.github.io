const fs = require('fs'); const path = require('path'); function content = fs && fs.readFileSync(filePath,'utf8'); const filename = path && path.basename(filePath); .join('')} function filename = path && path.basename(filePath); const validName = convertToValidVariableName(filename); const fixedContent = content && content.replace( new RegExp(`const ${filename && filename.replace('.tsx','')}: NextPage`,'g'),`const ${validName}: NextPage` ).replace( export default ${filename && filename.replace('.tsx','')};`,'g'),export default ${validName};`; ); fs && fs.writeFileSync(filePath,fixedContent); } catch (error) { console && console.error(`Error fixing ${filePath}:`,error && error.message)} } const blogDir = 'pages/blog'; if (fs && fs.existsSync(blogDir)) { const blogFiles = fs && fs.readdirSync(blogDir).filter(file => file && file.endsWith('.tsx')); blogFiles && blogFiles.forEach(file => { fixFile(path && path.join(blogDir,file))})} const categoryDir = 'pages/category'; if (fs && fs.existsSync(categoryDir)) { const categoryFiles = fs && fs.readdirSync(categoryDir).filter(file => file && file.endsWith('.tsx')); categoryFiles && categoryFiles.forEach(file => { fixFile(path && path.join(categoryDir,file))})} const servicesDir = 'pages/services'; if (fs && fs.existsSync(servicesDir)) { const serviceFiles = fs && fs.readdirSync(servicesDir).filter(file => file && file.endsWith('.tsx')); serviceFiles && serviceFiles.forEach(file => { } fixFile(path && path.join(servicesDir,file))})}  export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default content; export default content;
const fs = require('fs');
const path = require('path');
function content = fs && fs.readFileSync(filePath, 'utf8');
    const filename = path && path.basename(filePath);
    .join('')}
function filename = path && path.basename(filePath);
    const validName = convertToValidVariableName(filename);
    // Replace the invalid variable name with the valid one
    const fixedContent = content && content.replace(
      new RegExp(`const ${filename && filename.replace('.tsx', '')}: NextPage`, 'g'),
      `const ${validName}: NextPage`
    ).replace(
export default ${filename && filename.replace('.tsx', '')};`, 'g'),
export default ${validName};`;
    );
    fs && fs.writeFileSync(filePath, fixedContent);
    // // // // // // // console && console.log(`"Fixed": ${filePath}`)} catch (error) {
    // // // // // // // console && console.error(`Error fixing ${filePath}:`, error && error.message)}
    console && console.log(`"Fixed": ${filePath}`)} catch (error) {
    console && console.error(`Error fixing ${filePath}:`, error && error.message)}
}
// Fix blog pages
const blogDir = 'pages/blog';
if (fs && fs.existsSync(blogDir)) {
  const blogFiles = fs && fs.readdirSync(blogDir).filter(file => file && file.endsWith('.tsx'));
  blogFiles && blogFiles.forEach(file => {
    fixFile(path && path.join(blogDir, file))})}
// Fix category pages
const categoryDir = 'pages/category';
if (fs && fs.existsSync(categoryDir)) {
  const categoryFiles = fs && fs.readdirSync(categoryDir).filter(file => file && file.endsWith('.tsx'));
  categoryFiles && categoryFiles.forEach(file => {
    fixFile(path && path.join(categoryDir, file))})}
// Fix service pages
const servicesDir = 'pages/services';
if (fs && fs.existsSync(servicesDir)) {
  const serviceFiles = fs && fs.readdirSync(servicesDir).filter(file => file && file.endsWith('.tsx'));
  serviceFiles && serviceFiles.forEach(file => {
}
// // // // // // // console && console.log('Variable name fixing completed!');
    fixFile(path && path.join(servicesDir, file))})}
console && console.log('Variable name fixing completed!');
export default convertToValidVariableName;
export default convertToValidVariableName;
export default convertToValidVariableName;
export default convertToValidVariableName;
export default convertToValidVariableName;
export default content;
export default content;
const fs = require('fs'); const path = require('path'); function content = fs && fs.readFileSync(filePath,'utf8'); const filename = path && path.basename(filePath); .join('')} function filename = path && path.basename(filePath); const validName = convertToValidVariableName(filename); const fixedContent = content && content.replace( new RegExp(`const ${filename && filename.replace('.tsx','')}: NextPage`,'g'),`const ${validName}: NextPage` ).replace( export default ${filename && filename.replace('.tsx','')};`,'g'),export default ${validName};`; ); fs && fs.writeFileSync(filePath,fixedContent); console && console.log(`Fixed: ${filePath}`)} catch (error) { console && console.error(`Error fixing ${filePath}:`,error && error.message)} } const blogDir = 'pages/blog'; if (fs && fs.existsSync(blogDir)) { const blogFiles = fs && fs.readdirSync(blogDir).filter(file => file && file.endsWith('.tsx')); blogFiles && blogFiles.forEach(file => { fixFile(path && path.join(blogDir,file))})} const categoryDir = 'pages/category'; if (fs && fs.existsSync(categoryDir)) { const categoryFiles = fs && fs.readdirSync(categoryDir).filter(file => file && file.endsWith('.tsx')); categoryFiles && categoryFiles.forEach(file => { fixFile(path && path.join(categoryDir,file))})} const servicesDir = 'pages/services'; if (fs && fs.existsSync(servicesDir)) { const serviceFiles = fs && fs.readdirSync(servicesDir).filter(file => file && file.endsWith('.tsx')); serviceFiles && serviceFiles.forEach(file => { } fixFile(path && path.join(servicesDir,file))})} console && console.log('Variable name fixing completed!'); export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default content; export default content;
const fs = require('fs'); const path = require('path'); function content = fs && fs.readFileSync(filePath,'utf8'); const filename = path && path.basename(filePath); .join('')} function filename = path && path.basename(filePath); const validName = convertToValidVariableName(filename); const fixedContent = content && content.replace( new RegExp(`const ${filename && filename.replace('.tsx','')}: NextPage`,'g'),`const ${validName}: NextPage` ).replace( export default ${filename && filename.replace('.tsx','')};`,'g'),export default ${validName};`; ); fs && fs.writeFileSync(filePath,fixedContent); console && console.log(`Fixed: ${filePath}`)} catch (error) { console && console.error(`Error fixing ${filePath}:`,error && error.message)} } const blogDir = 'pages/blog'; if (fs && fs.existsSync(blogDir)) { const blogFiles = fs && fs.readdirSync(blogDir).filter(file => file && file.endsWith('.tsx')); blogFiles && blogFiles.forEach(file => { fixFile(path && path.join(blogDir,file))})} const categoryDir = 'pages/category'; if (fs && fs.existsSync(categoryDir)) { const categoryFiles = fs && fs.readdirSync(categoryDir).filter(file => file && file.endsWith('.tsx')); categoryFiles && categoryFiles.forEach(file => { fixFile(path && path.join(categoryDir,file))})} const servicesDir = 'pages/services'; if (fs && fs.existsSync(servicesDir)) { const serviceFiles = fs && fs.readdirSync(servicesDir).filter(file => file && file.endsWith('.tsx')); serviceFiles && serviceFiles.forEach(file => { } fixFile(path && path.join(servicesDir,file))})} console && console.log('Variable name fixing completed!'); export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default content; export default content;
const fs = require('fs'); const path = require('path'); function content = fs && fs.readFileSync(filePath,'utf8'); const filename = path && path.basename(filePath); .join('')} function filename = path && path.basename(filePath); const validName = convertToValidVariableName(filename); const fixedContent = content && content.replace( new RegExp(`const ${filename && filename.replace('.tsx','')}: NextPage`,'g'),`const ${validName}: NextPage` ).replace( export default ${filename && filename.replace('.tsx','')};`,'g'),export default ${validName};`; ); fs && fs.writeFileSync(filePath,fixedContent); console && console.log(`Fixed: ${filePath}`)} catch (error) { console && console.error(`Error fixing ${filePath}:`,error && error.message)} } const blogDir = 'pages/blog'; if (fs && fs.existsSync(blogDir)) { const blogFiles = fs && fs.readdirSync(blogDir).filter(file => file && file.endsWith('.tsx')); blogFiles && blogFiles.forEach(file => { fixFile(path && path.join(blogDir,file))})} const categoryDir = 'pages/category'; if (fs && fs.existsSync(categoryDir)) { const categoryFiles = fs && fs.readdirSync(categoryDir).filter(file => file && file.endsWith('.tsx')); categoryFiles && categoryFiles.forEach(file => { fixFile(path && path.join(categoryDir,file))})} const servicesDir = 'pages/services'; if (fs && fs.existsSync(servicesDir)) { const serviceFiles = fs && fs.readdirSync(servicesDir).filter(file => file && file.endsWith('.tsx')); serviceFiles && serviceFiles.forEach(file => { } fixFile(path && path.join(servicesDir,file))})} console && console.log('Variable name fixing completed!'); export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default content; export default content;
