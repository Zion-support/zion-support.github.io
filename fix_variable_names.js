const fs = require('fs');
const path = require('path');
function content = fs.readFileSync(filePath, 'utf8');
    const filename = path.basename(filePath);
=======
    .join('');
<<<<<<< HEAD

function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const filename = path.basename(filePath);
=======
}
function filename = path.basename(filePath);
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    const validName = convertToValidVariableName(filename);

    // Replace the invalid variable name with the valid one
    const fixedContent = content.replace(
      new RegExp(`const ${filename.replace('.tsx', '')}: NextPage`, 'g'),
      `const ${validName}: NextPage`
    ).replace(
      new RegExp(`export default ${filename.replace('.tsx', '')};`, 'g'),
      `export default ${validName};`
    );

    fs.writeFileSync(filePath, fixedContent);
<<<<<<< HEAD
<<<<<<< HEAD
    // // // console.log(`Fixed: ${filePath}`);
  } catch (error) {
    // // // console.error(`Error fixing ${filePath}:`, error.message);


=======
    // // // // // // // console.log(`Fixed: ${filePath}`);
  } catch (error) {
    // // // // // // // console.error(`Error fixing ${filePath}:`, error.message);
  }
=======
    console.log(`Fixed: ${filePath}`)} catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
}
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
// Fix blog pages
const blogDir = 'pages/blog';
if (fs.existsSync(blogDir)) {
  const blogFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.tsx'));
  blogFiles.forEach(file => {
<<<<<<< HEAD
    fixFile(path.join(blogDir, file));
  });

=======
    fixFile(path.join(blogDir, file))})}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
// Fix category pages
const categoryDir = 'pages/category';
if (fs.existsSync(categoryDir)) {
  const categoryFiles = fs.readdirSync(categoryDir).filter(file => file.endsWith('.tsx'));
  categoryFiles.forEach(file => {
<<<<<<< HEAD
    fixFile(path.join(categoryDir, file));
  });

=======
    fixFile(path.join(categoryDir, file))})}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
// Fix service pages
const servicesDir = 'pages/services';
if (fs.existsSync(servicesDir)) {
  const serviceFiles = fs.readdirSync(servicesDir).filter(file => file.endsWith('.tsx'));
  serviceFiles.forEach(file => {
<<<<<<< HEAD
    fixFile(path.join(servicesDir, file));
  });
<<<<<<< HEAD

// // // console.log('Variable name fixing completed!');
}}}}}}
=======
}
// // // // // // // console.log('Variable name fixing completed!');
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
=======
    fixFile(path.join(servicesDir, file))})}
console.log('Variable name fixing completed!');

export default convertToValidVariableName;
export default convertToValidVariableName;
export default convertToValidVariableName;
export default convertToValidVariableName;
export default convertToValidVariableName;
export default content;
export default content;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
