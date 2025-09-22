<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:backup-problematic-files/fix_variable_names.js
<<<<<<< HEAD:backup-problematic-files/fix_variable_names.js
<<<<<<< HEAD:backup-problematic-files/fix_variable_names.js
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<<< HEAD:fix_variable_names.js
========
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>>> main:corrupted_backup/fix_variable_names.js
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:fix_variable_names.js
=======
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD:backup-problematic-files/fix_variable_names.js
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:fix_variable_names.js
const fs = require('fs'); const path = require('path'); function content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath); .join('')} function filename = path.basename(filePath); const validName = convertToValidVariableName(filename); const fixedContent = content.replace( new RegExp(`const ${filename.replace('.tsx','')}: NextPage`,'g'),`const ${validName}: NextPage` ).replace( export default ${filename.replace('.tsx','')};`,'g'),export default ${validName};`; ); fs.writeFileSync(filePath,fixedContent); } catch (error) { console.error(`Error fixing ${filePath}:`,error.message)} } const blogDir = 'pages/blog'; if (fs.existsSync(blogDir)) { const blogFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.tsx')); blogFiles.forEach(file => { fixFile(path.join(blogDir,file))})} const categoryDir = 'pages/category'; if (fs.existsSync(categoryDir)) { const categoryFiles = fs.readdirSync(categoryDir).filter(file => file.endsWith('.tsx')); categoryFiles.forEach(file => { fixFile(path.join(categoryDir,file))})} const servicesDir = 'pages/services'; if (fs.existsSync(servicesDir)) { const serviceFiles = fs.readdirSync(servicesDir).filter(file => file.endsWith('.tsx')); serviceFiles.forEach(file => { } fixFile(path.join(servicesDir,file))})}  export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default content; export default content;
=======
>>>>>>> origin/main
=======
<<<<<<< HEAD
=======
<<<<<<<< HEAD:corrupted_backup/fix_variable_names.js
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
========
>>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:fix_variable_names.js
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
const fs = require('fs'); const path = require('path'); function content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath); .join('')} function filename = path.basename(filePath); const validName = convertToValidVariableName(filename); const fixedContent = content.replace( new RegExp(`const ${filename.replace('.tsx','')}: NextPage`,'g'),`const ${validName}: NextPage` ).replace( export default ${filename.replace('.tsx','')};`,'g'),export default ${validName};`; ); fs.writeFileSync(filePath,fixedContent); } catch (error) { console.error(`Error fixing ${filePath}:`,error.message)} } const blogDir = 'pages/blog'; if (fs.existsSync(blogDir)) { const blogFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.tsx')); blogFiles.forEach(file => { fixFile(path.join(blogDir,file))})} const categoryDir = 'pages/category'; if (fs.existsSync(categoryDir)) { const categoryFiles = fs.readdirSync(categoryDir).filter(file => file.endsWith('.tsx')); categoryFiles.forEach(file => { fixFile(path.join(categoryDir,file))})} const servicesDir = 'pages/services'; if (fs.existsSync(servicesDir)) { const serviceFiles = fs.readdirSync(servicesDir).filter(file => file.endsWith('.tsx')); serviceFiles.forEach(file => { } fixFile(path.join(servicesDir,file))})}  export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default content; export default content;
========
<const fs = require('fs'); const path = require('path'); function content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath); .join('')} function filename = path.basename(filePath); const validName = convertToValidVariableName(filename); const fixedContent = content.replace( new RegExp(`const ${filename.replace('.tsx','')}: NextPage`,'g'),`const ${validName}: NextPage` ).replace( export default ${filename.replace('.tsx','')};`,'g'),export default ${validName};`; ); fs.writeFileSync(filePath,fixedContent); } catch (error) { console.error(`Error fixing ${filePath}:`,error.message)} } const blogDir = 'pages/blog'; if (fs.existsSync(blogDir)) { const blogFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.tsx')); blogFiles.forEach(file => { fixFile(path.join(blogDir,file))})} const categoryDir = 'pages/category'; if (fs.existsSync(categoryDir)) { const categoryFiles = fs.readdirSync(categoryDir).filter(file => file.endsWith('.tsx')); categoryFiles.forEach(file => { fixFile(path.join(categoryDir,file))})} const servicesDir = 'pages/services'; if (fs.existsSync(servicesDir)) { const serviceFiles = fs.readdirSync(servicesDir).filter(file => file.endsWith('.tsx')); serviceFiles.forEach(file => { } fixFile(path.join(servicesDir,file))})}  export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default content; export default content;
>>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2:fix_variable_names.js
=======
const fs = require('fs'); const path = require('path'); function content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath); .join('')} function filename = path.basename(filePath); const validName = convertToValidVariableName(filename); const fixedContent = content.replace( new RegExp(`const ${filename.replace('.tsx','')}: NextPage`,'g'),`const ${validName}: NextPage` ).replace( export default ${filename.replace('.tsx','')};`,'g'),export default ${validName};`; ); fs.writeFileSync(filePath,fixedContent); } catch (error) { console.error(`Error fixing ${filePath}:`,error.message)} } const blogDir = 'pages/blog'; if (fs.existsSync(blogDir)) { const blogFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.tsx')); blogFiles.forEach(file => { fixFile(path.join(blogDir,file))})} const categoryDir = 'pages/category'; if (fs.existsSync(categoryDir)) { const categoryFiles = fs.readdirSync(categoryDir).filter(file => file.endsWith('.tsx')); categoryFiles.forEach(file => { fixFile(path.join(categoryDir,file))})} const servicesDir = 'pages/services'; if (fs.existsSync(servicesDir)) { const serviceFiles = fs.readdirSync(servicesDir).filter(file => file.endsWith('.tsx')); serviceFiles.forEach(file => { } fixFile(path.join(servicesDir,file))})}  export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default content; export default content;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const fs = require('fs');
const path = require('path');
function content = fs.readFileSync(filePath, 'utf8');
    const filename = path.basename(filePath);
    .join('')}
function filename = path.basename(filePath);
    const validName = convertToValidVariableName(filename);
    // Replace the invalid variable name with the valid one
    const fixedContent = content.replace(
      new RegExp(`const ${filename.replace('.tsx', '')}: NextPage`, 'g'),
      `const ${validName}: NextPage`
    ).replace(
export default ${filename.replace('.tsx', '')};`, 'g'),
export default ${validName};`;
    );
    fs.writeFileSync(filePath, fixedContent);
    // // // // // // // console.log(`"Fixed": ${filePath}`)} catch (error) {
    // // // // // // // console.error(`Error fixing ${filePath}:`, error.message)}
    console.log(`"Fixed": ${filePath}`)} catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message)}
<<<<<<< HEAD
}// Fix blog pages
=======
}
// Fix blog pages
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const blogDir = 'pages/blog';
if (fs.existsSync(blogDir)) {
  const blogFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.tsx'));
  blogFiles.forEach(file => {
    fixFile(path.join(blogDir, file))})}
// Fix category pages
const categoryDir = 'pages/category';
if (fs.existsSync(categoryDir)) {
  const categoryFiles = fs.readdirSync(categoryDir).filter(file => file.endsWith('.tsx'));
  categoryFiles.forEach(file => {
    fixFile(path.join(categoryDir, file))})}
// Fix service pages
const servicesDir = 'pages/services';
if (fs.existsSync(servicesDir)) {
  const serviceFiles = fs.readdirSync(servicesDir).filter(file => file.endsWith('.tsx'));
  serviceFiles.forEach(file => {
<<<<<<< HEAD
<<<<<<<< HEAD:backup-problematic-files/fix_variable_names.js
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:fix_variable_names.js
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
=======
=======
=======
}
// // // // // // // console.log('Variable name fixing completed!');
    fixFile(path.join(servicesDir, file))})}
console.log('Variable name fixing completed!');
export default convertToValidVariableName;
export default convertToValidVariableName;
export default convertToValidVariableName;
export default convertToValidVariableName;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const fs = require('fs');
const path = require('path');
function content = fs && fs.readFileSync(filePath, 'utf8');
    const filename = path && path.basename(filePath);
    .join()}
function filename = path && path.basename(filePath);
    const validName = convertToValidVariableName(filename);
    // Replace the invalid variable name with the valid one;
export default ${validName};`;
    );
    fs && fs.writeFileSync(filePath, fixedContent);`;
    // // // // // // // console && console.log(`"Fixed": ${filePath}`)} catch (error) {"`;
    // // // // // // // console && console.error(`Error fixing ${filePath}:`, error && error.message)}"`;
    console && console.log(`"Fixed": ${filePath}`)} catch (error) {"`;
    console && console.error(`Error fixing ${filePath}:`, error && error.message)}
}
// Fix blog pages;"
const blogDir = 'pages/blog';
if (fs && fs.existsSync(blogDir)) {
  const blogFiles = fs && fs.readdirSync(blogDir).filter(file => file && file.endsWith('.tsx'));
  blogFiles && blogFiles.forEach(file => {)
    fixFile(path && path.join(blogDir, file))})}
// Fix category pages;
const categoryDir = 'pages/category';
if (fs && fs.existsSync(categoryDir)) {
  const categoryFiles = fs && fs.readdirSync(categoryDir).filter(file => file && file.endsWith('.tsx'));
  categoryFiles && categoryFiles.forEach(file => {)
    fixFile(path && path.join(categoryDir, file))})}
// Fix service pages;
const servicesDir = 'pages/services';
if (fs && fs.existsSync(servicesDir)) {
  const serviceFiles = fs && fs.readdirSync(servicesDir).filter(file => file && file.endsWith('.tsx'));
  serviceFiles && serviceFiles.forEach(file => {
})
// // // // // // // console && console.log('Variable name fixing completed!');
    fixFile(path && path.join(servicesDir, file))})}
<<<<<<< HEAD
console && console.log('Variable name fixing completed!');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
const fs = require ('fs'); const path = require ('path'); function content = fs.readFileSync (file_path, 'utf8'); const filename = path.basename (file_path); .join ('')} function filename = path.basename (file_path); const valid_name = convertToValidVariableName (filename); const fixed_content = content.replace ( new RegExp (`const ${filename.replace ('.tsx', '')}: NextPage`, 'g'), `const ${valid_name}: NextPage` ).replace ( export default ${filename.replace ('.tsx', '')}`, 'g'), export default ${valid_name}`); fs.writeFileSync (file_path, fixed_content); } catch (error) { console.error (`Error fixing ${file_path}:`, error.message)} } const blog_dir = 'pages / blog'; if () { const blog_files = fs.readdir_sync (blog_dir).filter (file => file.ends_with ('.tsx'))) {
  $2
=======
console && console.log('Variable name fixing completed!');`;
const fs = require ('fs'); const path = require ('path'); function content = fs.readFileSync (file_path, 'utf8'); const filename = path.basename (file_path); .join ()} function filename = path.basename (file_path); const valid_name = convertToValidVariableName (filename); const fixed_content = content.replace ( new RegExp (`const ${filename.replace ('.tsx', )}: NextPage`, 'g'), `const ${valid_name}: NextPage` ).replace ( export default ${filename.replace ('.tsx', )}`, 'g'), export default ${valid_name}`); fs.writeFileSync (file_path, fixed_content); } catch (error) { console.error (`Error fixing ${file_path}:`, error.message)} } const blog_dir = 'pages / blog'; if () { const blog_files = fs.readdir_sync (blog_dir).filter (file => file.ends_with ('.tsx'))) {
  $2;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
} blog_files.for_each (file => { fix_file (path.join (blog_dir, file))})} const category_dir = 'pages / category'; if () { const category_files = fs.readdir_sync (category_dir).filter (file => file.ends_with ('.tsx'))) {
} category_files.for_each (file => { fix_file (path.join (category_dir, file))})} const services_dir = 'pages / services'; if () { const service_files = fs.readdir_sync (services_dir).filter (file => file.ends_with ('.tsx'))) {
} service_files.for_each (file => { } fix_file (path.join (services_dir, file))})}  export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default content; export default content;
const fs = require ('fs');
const path = require ('path');
function content = fs.readFileSync (file_path, 'utf8');
    const filename = path.basename (file_path);
    .join ()}
function filename = path.basename (file_path);
    const valid_name = convertToValidVariableName (filename);
    // Replace the invalid variable name with the valid one;
    const fixed_content = content.replace ()`;
      new RegExp (`const ${filename.replace ('.tsx', )}: NextPage`, 'g'),`;
      `const ${valid_name}: NextPage`).replace ()`;
export default ${filename.replace ('.tsx', )}`, 'g'),`;
export default ${valid_name}`);
    fs.writeFileSync (file_path, fixed_content);`;
    // // // // // // // console.log (`"Fixed": ${file_path}`)} catch (error) {"`;
    // // // // // // // console.error (`Error fixing ${file_path}:`, error.message)}"`;
    console.log (`"Fixed": ${file_path}`)} catch (error) {"`;
    console.error (`Error fixing ${file_path}:`, error.message)}
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/fix_variable_names.js
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
// Fix blog pages;
=======
// Fix blog pages;"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const blog_dir = 'pages / blog';
if () {) {
  const blog_files = fs.readdir_sync (blog_dir).filter (file => file.ends_with ('.tsx'));
  blog_files.for_each (file => {)
    fix_file (path.join (blog_dir, file))})}
// Fix category pages;
const category_dir = 'pages / category';
  const category_files = fs.readdir_sync (category_dir).filter (file => file.ends_with ('.tsx'));
  category_files.for_each (file => {)
    fix_file (path.join (category_dir, file))})}
// Fix service pages;
const services_dir = 'pages / services';
  const service_files = fs.readdir_sync (services_dir).filter (file => file.ends_with ('.tsx'));
  service_files.for_each (file => {
// // // // // // // console.log ('Variable name fixing completed!');
    fix_file (path.join (services_dir, file))})}
console.log ('Variable name fixing completed!');
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
// // // // // // // console.log('Variable name fixing completed!');
========
}// // // // // // // console.log('Variable name fixing completed!');
>>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2:fix_variable_names.js
    fixFile(path.join(servicesDir, file))})}
console.log('Variable name fixing completed!');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:fix_variable_names.js
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export default convertToValidVariableName;
export default content;
export default content;
<<<<<<< HEAD
<<<<<<<< HEAD:backup-problematic-files/fix_variable_names.js
<<<<<<< HEAD:backup-problematic-files/fix_variable_names.js
const fs = require('fs'); const path = require('path'); function content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath); .join('')} function filename = path.basename(filePath); const validName = convertToValidVariableName(filename); const fixedContent = content.replace( new RegExp(`const ${filename.replace('.tsx','')}: NextPage`,'g'),`const ${validName}: NextPage` ).replace( export default ${filename.replace('.tsx','')};`,'g'),export default ${validName};`; ); fs.writeFileSync(filePath,fixedContent); console.log(`Fixed: ${filePath}`)} catch (error) { console.error(`Error fixing ${filePath}:`,error.message)} } const blogDir = 'pages/blog'; if (fs.existsSync(blogDir)) { const blogFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.tsx')); blogFiles.forEach(file => { fixFile(path.join(blogDir,file))})} const categoryDir = 'pages/category'; if (fs.existsSync(categoryDir)) { const categoryFiles = fs.readdirSync(categoryDir).filter(file => file.endsWith('.tsx')); categoryFiles.forEach(file => { fixFile(path.join(categoryDir,file))})} const servicesDir = 'pages/services'; if (fs.existsSync(servicesDir)) { const serviceFiles = fs.readdirSync(servicesDir).filter(file => file.endsWith('.tsx')); serviceFiles.forEach(file => { } fixFile(path.join(servicesDir,file))})} console.log('Variable name fixing completed!'); export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default content; export default content;
const fs = require('fs'); const path = require('path'); function content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath); .join('')} function filename = path.basename(filePath); const validName = convertToValidVariableName(filename); const fixedContent = content.replace( new RegExp(`const ${filename.replace('.tsx','')}: NextPage`,'g'),`const ${validName}: NextPage` ).replace( export default ${filename.replace('.tsx','')};`,'g'),export default ${validName};`; ); fs.writeFileSync(filePath,fixedContent); console.log(`Fixed: ${filePath}`)} catch (error) { console.error(`Error fixing ${filePath}:`,error.message)} } const blogDir = 'pages/blog'; if (fs.existsSync(blogDir)) { const blogFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.tsx')); blogFiles.forEach(file => { fixFile(path.join(blogDir,file))})} const categoryDir = 'pages/category'; if (fs.existsSync(categoryDir)) { const categoryFiles = fs.readdirSync(categoryDir).filter(file => file.endsWith('.tsx')); categoryFiles.forEach(file => { fixFile(path.join(categoryDir,file))})} const servicesDir = 'pages/services'; if (fs.existsSync(servicesDir)) { const serviceFiles = fs.readdirSync(servicesDir).filter(file => file.endsWith('.tsx')); serviceFiles.forEach(file => { } fixFile(path.join(servicesDir,file))})} console.log('Variable name fixing completed!'); export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default content; export default content;
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/fix_variable_names.js
=======
<<<<<<< HEAD
=======
const fs = require('fs'); const path = require('path'); function content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath); .join('')} function filename = path.basename(filePath); const validName = convertToValidVariableName(filename); const fixedContent = content.replace( new RegExp(`const ${filename.replace('.tsx','')}: NextPage`,'g'),`const ${validName}: NextPage` ).replace( export default ${filename.replace('.tsx','')};`,'g'),export default ${validName};`; ); fs.writeFileSync(filePath,fixedContent); console.log(`Fixed: ${filePath}`)} catch (error) { console.error(`Error fixing ${filePath}:`,error.message)} } const blogDir = 'pages/blog'; if (fs.existsSync(blogDir)) { const blogFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.tsx')); blogFiles.forEach(file => { fixFile(path.join(blogDir,file))})} const categoryDir = 'pages/category'; if (fs.existsSync(categoryDir)) { const categoryFiles = fs.readdirSync(categoryDir).filter(file => file.endsWith('.tsx')); categoryFiles.forEach(file => { fixFile(path.join(categoryDir,file))})} const servicesDir = 'pages/services'; if (fs.existsSync(servicesDir)) { const serviceFiles = fs.readdirSync(servicesDir).filter(file => file.endsWith('.tsx')); serviceFiles.forEach(file => { } fixFile(path.join(servicesDir,file))})} console.log('Variable name fixing completed!'); export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default content; export default content;
<<<<<<<< HEAD:fix_variable_names.js
const fs = require('fs'); const path = require('path'); function content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath); .join('')} function filename = path.basename(filePath); const validName = convertToValidVariableName(filename); const fixedContent = content.replace( new RegExp(`const ${filename.replace('.tsx','')}: NextPage`,'g'),`const ${validName}: NextPage` ).replace( export default ${filename.replace('.tsx','')};`,'g'),export default ${validName};`; ); fs.writeFileSync(filePath,fixedContent); console.log(`Fixed: ${filePath}`)} catch (error) { console.error(`Error fixing ${filePath}:`,error.message)} } const blogDir = 'pages/blog'; if (fs.existsSync(blogDir)) { const blogFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.tsx')); blogFiles.forEach(file => { fixFile(path.join(blogDir,file))})} const categoryDir = 'pages/category'; if (fs.existsSync(categoryDir)) { const categoryFiles = fs.readdirSync(categoryDir).filter(file => file.endsWith('.tsx')); categoryFiles.forEach(file => { fixFile(path.join(categoryDir,file))})} const servicesDir = 'pages/services'; if (fs.existsSync(servicesDir)) { const serviceFiles = fs.readdirSync(servicesDir).filter(file => file.endsWith('.tsx')); serviceFiles.forEach(file => { } fixFile(path.join(servicesDir,file))})} console.log('Variable name fixing completed!'); export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default content; export default content;
const fs = require('fs'); const path = require('path'); function content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath); .join('')} function filename = path.basename(filePath); const validName = convertToValidVariableName(filename); const fixedContent = content.replace( new RegExp(`const ${filename.replace('.tsx','')}: NextPage`,'g'),`const ${validName}: NextPage` ).replace( export default ${filename.replace('.tsx','')};`,'g'),export default ${validName};`; ); fs.writeFileSync(filePath,fixedContent); console.log(`Fixed: ${filePath}`)} catch (error) { console.error(`Error fixing ${filePath}:`,error.message)} } const blogDir = 'pages/blog'; if (fs.existsSync(blogDir)) { const blogFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.tsx')); blogFiles.forEach(file => { fixFile(path.join(blogDir,file))})} const categoryDir = 'pages/category'; if (fs.existsSync(categoryDir)) { const categoryFiles = fs.readdirSync(categoryDir).filter(file => file.endsWith('.tsx')); categoryFiles.forEach(file => { fixFile(path.join(categoryDir,file))})} const servicesDir = 'pages/services'; if (fs.existsSync(servicesDir)) { const serviceFiles = fs.readdirSync(servicesDir).filter(file => file.endsWith('.tsx')); serviceFiles.forEach(file => { } fixFile(path.join(servicesDir,file))})} console.log('Variable name fixing completed!'); export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default content; export default content;
========
=======
const fs = require('fs'); const path = require('path'); function content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath); .join('')} function filename = path.basename(filePath); const validName = convertToValidVariableName(filename); const fixedContent = content.replace( new RegExp(`const ${filename.replace('.tsx','')}: NextPage`,'g'),`const ${validName}: NextPage` ).replace( export default ${filename.replace('.tsx','')};`,'g'),export default ${validName};`; ); fs.writeFileSync(filePath,fixedContent); console.log(`Fixed: ${filePath}`)} catch (error) { console.error(`Error fixing ${filePath}:`,error.message)} } const blogDir = 'pages/blog'; if (fs.existsSync(blogDir)) { const blogFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.tsx')); blogFiles.forEach(file => { fixFile(path.join(blogDir,file))})} const categoryDir = 'pages/category'; if (fs.existsSync(categoryDir)) { const categoryFiles = fs.readdirSync(categoryDir).filter(file => file.endsWith('.tsx')); categoryFiles.forEach(file => { fixFile(path.join(categoryDir,file))})} const servicesDir = 'pages/services'; if (fs.existsSync(servicesDir)) { const serviceFiles = fs.readdirSync(servicesDir).filter(file => file.endsWith('.tsx')); serviceFiles.forEach(file => { } fixFile(path.join(servicesDir,file))})} console.log('Variable name fixing completed!'); export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default content; export default content;
=======
=======
>>>>>>>> main:corrupted_backup/fix_variable_names.js
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:fix_variable_names.js
=======
const fs = require('fs'); const path = require('path'); function content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath); .join('')} function filename = path.basename(filePath); const validName = convertToValidVariableName(filename); const fixedContent = content.replace( new RegExp(`const ${filename.replace('.tsx','')}: NextPage`,'g'),`const ${validName}: NextPage` ).replace( export default ${filename.replace('.tsx','')};`,'g'),export default ${validName};`; ); fs.writeFileSync(filePath,fixedContent); console.log(`Fixed: ${filePath}`)} catch (error) { console.error(`Error fixing ${filePath}:`,error.message)} } const blogDir = 'pages/blog'; if (fs.existsSync(blogDir)) { const blogFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.tsx')); blogFiles.forEach(file => { fixFile(path.join(blogDir,file))})} const categoryDir = 'pages/category'; if (fs.existsSync(categoryDir)) { const categoryFiles = fs.readdirSync(categoryDir).filter(file => file.endsWith('.tsx')); categoryFiles.forEach(file => { fixFile(path.join(categoryDir,file))})} const servicesDir = 'pages/services'; if (fs.existsSync(servicesDir)) { const serviceFiles = fs.readdirSync(servicesDir).filter(file => file.endsWith('.tsx')); serviceFiles.forEach(file => { } fixFile(path.join(servicesDir,file))})} console.log('Variable name fixing completed!'); export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default content; export default content;
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
<<<<<<< HEAD
>>>>>>> origin/main
<<<<<<< HEAD
=======
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
=======
const fs = require('fs'); const path = require('path'); function content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath); .join('')} function filename = path.basename(filePath); const validName = convertToValidVariableName(filename); const fixedContent = content.replace( new RegExp(`const ${filename.replace('.tsx','')}: NextPage`,'g'),`const ${validName}: NextPage` ).replace( export default ${filename.replace('.tsx','')};`,'g'),export default ${validName};`; ); fs.writeFileSync(filePath,fixedContent); console.log(`Fixed: ${filePath}`)} catch (error) { console.error(`Error fixing ${filePath}:`,error.message)} } const blogDir = 'pages/blog'; if (fs.existsSync(blogDir)) { const blogFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.tsx')); blogFiles.forEach(file => { fixFile(path.join(blogDir,file))})} const categoryDir = 'pages/category'; if (fs.existsSync(categoryDir)) { const categoryFiles = fs.readdirSync(categoryDir).filter(file => file.endsWith('.tsx')); categoryFiles.forEach(file => { fixFile(path.join(categoryDir,file))})} const servicesDir = 'pages/services'; if (fs.existsSync(servicesDir)) { const serviceFiles = fs.readdirSync(servicesDir).filter(file => file.endsWith('.tsx')); serviceFiles.forEach(file => { } fixFile(path.join(servicesDir,file))})} console.log('Variable name fixing completed!'); export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default content; export default content;
>>>>>>> main
>>>>>>> main
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD:backup-problematic-files/fix_variable_names.js
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:fix_variable_names.js
=======
<<<<<<< HEAD
=======
const fs = require('fs'); const path = require('path'); function content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath); .join('')} function filename = path.basename(filePath); const validName = convertToValidVariableName(filename); const fixedContent = content.replace( new RegExp(`const ${filename.replace('.tsx','')}: NextPage`,'g'),`const ${validName}: NextPage` ).replace( export default ${filename.replace('.tsx','')};`,'g'),export default ${validName};`; ); fs.writeFileSync(filePath,fixedContent); console.log(`Fixed: ${filePath}`)} catch (error) { console.error(`Error fixing ${filePath}:`,error.message)} } const blogDir = 'pages/blog'; if (fs.existsSync(blogDir)) { const blogFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.tsx')); blogFiles.forEach(file => { fixFile(path.join(blogDir,file))})} const categoryDir = 'pages/category'; if (fs.existsSync(categoryDir)) { const categoryFiles = fs.readdirSync(categoryDir).filter(file => file.endsWith('.tsx')); categoryFiles.forEach(file => { fixFile(path.join(categoryDir,file))})} const servicesDir = 'pages/services'; if (fs.existsSync(servicesDir)) { const serviceFiles = fs.readdirSync(servicesDir).filter(file => file.endsWith('.tsx')); serviceFiles.forEach(file => { } fixFile(path.join(servicesDir,file))})} console.log('Variable name fixing completed!'); export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default content; export default content;
<<<<<<<< HEAD:corrupted_backup/fix_variable_names.js
=======
const fs = require('fs'); const path = require('path'); function content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath); .join('')} function filename = path.basename(filePath); const validName = convertToValidVariableName(filename); const fixedContent = content.replace( new RegExp(`const ${filename.replace('.tsx','')}: NextPage`,'g'),`const ${validName}: NextPage` ).replace( export default ${filename.replace('.tsx','')};`,'g'),export default ${validName};`; ); fs.writeFileSync(filePath,fixedContent); console.log(`Fixed: ${filePath}`)} catch (error) { console.error(`Error fixing ${filePath}:`,error.message)} } const blogDir = 'pages/blog'; if (fs.existsSync(blogDir)) { const blogFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.tsx')); blogFiles.forEach(file => { fixFile(path.join(blogDir,file))})} const categoryDir = 'pages/category'; if (fs.existsSync(categoryDir)) { const categoryFiles = fs.readdirSync(categoryDir).filter(file => file.endsWith('.tsx')); categoryFiles.forEach(file => { fixFile(path.join(categoryDir,file))})} const servicesDir = 'pages/services'; if (fs.existsSync(servicesDir)) { const serviceFiles = fs.readdirSync(servicesDir).filter(file => file.endsWith('.tsx')); serviceFiles.forEach(file => { } fixFile(path.join(servicesDir,file))})} console.log('Variable name fixing completed!'); export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default content; export default content;
=======
=======
========
const fs = require('fs'); const path = require('path'); function content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath); .join('')} function filename = path.basename(filePath); const validName = convertToValidVariableName(filename); const fixedContent = content.replace( new RegExp(`const ${filename.replace('.tsx','')}: NextPage`,'g'),`const ${validName}: NextPage` ).replace( export default ${filename.replace('.tsx','')};`,'g'),export default ${validName};`; ); fs.writeFileSync(filePath,fixedContent); console.log(`Fixed: ${filePath}`)} catch (error) { console.error(`Error fixing ${filePath}:`,error.message)} } const blogDir = 'pages/blog'; if (fs.existsSync(blogDir)) { const blogFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.tsx')); blogFiles.forEach(file => { fixFile(path.join(blogDir,file))})} const categoryDir = 'pages/category'; if (fs.existsSync(categoryDir)) { const categoryFiles = fs.readdirSync(categoryDir).filter(file => file.endsWith('.tsx')); categoryFiles.forEach(file => { fixFile(path.join(categoryDir,file))})} const servicesDir = 'pages/services'; if (fs.existsSync(servicesDir)) { const serviceFiles = fs.readdirSync(servicesDir).filter(file => file.endsWith('.tsx')); serviceFiles.forEach(file => { } fixFile(path.join(servicesDir,file))})} console.log('Variable name fixing completed!'); export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default content; export default content;
const fs = require('fs'); const path = require('path'); function content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath); .join('')} function filename = path.basename(filePath); const validName = convertToValidVariableName(filename); const fixedContent = content.replace( new RegExp(`const ${filename.replace('.tsx','')}: NextPage`,'g'),`const ${validName}: NextPage` ).replace( export default ${filename.replace('.tsx','')};`,'g'),export default ${validName};`; ); fs.writeFileSync(filePath,fixedContent); console.log(`Fixed: ${filePath}`)} catch (error) { console.error(`Error fixing ${filePath}:`,error.message)} } const blogDir = 'pages/blog'; if (fs.existsSync(blogDir)) { const blogFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.tsx')); blogFiles.forEach(file => { fixFile(path.join(blogDir,file))})} const categoryDir = 'pages/category'; if (fs.existsSync(categoryDir)) { const categoryFiles = fs.readdirSync(categoryDir).filter(file => file.endsWith('.tsx')); categoryFiles.forEach(file => { fixFile(path.join(categoryDir,file))})} const servicesDir = 'pages/services'; if (fs.existsSync(servicesDir)) { const serviceFiles = fs.readdirSync(servicesDir).filter(file => file.endsWith('.tsx')); serviceFiles.forEach(file => { } fixFile(path.join(servicesDir,file))})} console.log('Variable name fixing completed!'); export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default content; export default content;
>>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:fix_variable_names.js
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:fix_variable_names.js
========
const fs = require('fs'); const path = require('path'); function content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath); .join('')} function filename = path.basename(filePath); const validName = convertToValidVariableName(filename); const fixedContent = content.replace( new RegExp(`const ${filename.replace('.tsx','')}: NextPage`,'g'),`const ${validName}: NextPage` ).replace( export default ${filename.replace('.tsx','')};`,'g'),export default ${validName};`; ); fs.writeFileSync(filePath,fixedContent); console.log(`Fixed: ${filePath}`)} catch (error) { console.error(`Error fixing ${filePath}:`,error.message)} } const blogDir = 'pages/blog'; if (fs.existsSync(blogDir)) { const blogFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.tsx')); blogFiles.forEach(file => { fixFile(path.join(blogDir,file))})} const categoryDir = 'pages/category'; if (fs.existsSync(categoryDir)) { const categoryFiles = fs.readdirSync(categoryDir).filter(file => file.endsWith('.tsx')); categoryFiles.forEach(file => { fixFile(path.join(categoryDir,file))})} const servicesDir = 'pages/services'; if (fs.existsSync(servicesDir)) { const serviceFiles = fs.readdirSync(servicesDir).filter(file => file.endsWith('.tsx')); serviceFiles.forEach(file => { } fixFile(path.join(servicesDir,file))})} console.log('Variable name fixing completed!'); export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default content; export default content;
>>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2:fix_variable_names.js
=======
const fs = require('fs'); const path = require('path'); function content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath); .join('')} function filename = path.basename(filePath); const validName = convertToValidVariableName(filename); const fixedContent = content.replace( new RegExp(`const ${filename.replace('.tsx','')}: NextPage`,'g'),`const ${validName}: NextPage` ).replace( export default ${filename.replace('.tsx','')};`,'g'),export default ${validName};`; ); fs.writeFileSync(filePath,fixedContent); console.log(`Fixed: ${filePath}`)} catch (error) { console.error(`Error fixing ${filePath}:`,error.message)} } const blogDir = 'pages/blog'; if (fs.existsSync(blogDir)) { const blogFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.tsx')); blogFiles.forEach(file => { fixFile(path.join(blogDir,file))})} const categoryDir = 'pages/category'; if (fs.existsSync(categoryDir)) { const categoryFiles = fs.readdirSync(categoryDir).filter(file => file.endsWith('.tsx')); categoryFiles.forEach(file => { fixFile(path.join(categoryDir,file))})} const servicesDir = 'pages/services'; if (fs.existsSync(servicesDir)) { const serviceFiles = fs.readdirSync(servicesDir).filter(file => file.endsWith('.tsx')); serviceFiles.forEach(file => { } fixFile(path.join(servicesDir,file))})} console.log('Variable name fixing completed!'); export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default content; export default content;
const fs = require('fs'); const path = require('path'); function content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath); .join('')} function filename = path.basename(filePath); const validName = convertToValidVariableName(filename); const fixedContent = content.replace( new RegExp(`const ${filename.replace('.tsx','')}: NextPage`,'g'),`const ${validName}: NextPage` ).replace( export default ${filename.replace('.tsx','')};`,'g'),export default ${validName};`; ); fs.writeFileSync(filePath,fixedContent); console.log(`Fixed: ${filePath}`)} catch (error) { console.error(`Error fixing ${filePath}:`,error.message)} } const blogDir = 'pages/blog'; if (fs.existsSync(blogDir)) { const blogFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.tsx')); blogFiles.forEach(file => { fixFile(path.join(blogDir,file))})} const categoryDir = 'pages/category'; if (fs.existsSync(categoryDir)) { const categoryFiles = fs.readdirSync(categoryDir).filter(file => file.endsWith('.tsx')); categoryFiles.forEach(file => { fixFile(path.join(categoryDir,file))})} const servicesDir = 'pages/services'; if (fs.existsSync(servicesDir)) { const serviceFiles = fs.readdirSync(servicesDir).filter(file => file.endsWith('.tsx')); serviceFiles.forEach(file => { } fixFile(path.join(servicesDir,file))})} console.log('Variable name fixing completed!'); export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default content; export default content;
const fs = require('fs'); const path = require('path'); function content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath); .join('')} function filename = path.basename(filePath); const validName = convertToValidVariableName(filename); const fixedContent = content.replace( new RegExp(`const ${filename.replace('.tsx','')}: NextPage`,'g'),`const ${validName}: NextPage` ).replace( export default ${filename.replace('.tsx','')};`,'g'),export default ${validName};`; ); fs.writeFileSync(filePath,fixedContent); console.log(`Fixed: ${filePath}`)} catch (error) { console.error(`Error fixing ${filePath}:`,error.message)} } const blogDir = 'pages/blog'; if (fs.existsSync(blogDir)) { const blogFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.tsx')); blogFiles.forEach(file => { fixFile(path.join(blogDir,file))})} const categoryDir = 'pages/category'; if (fs.existsSync(categoryDir)) { const categoryFiles = fs.readdirSync(categoryDir).filter(file => file.endsWith('.tsx')); categoryFiles.forEach(file => { fixFile(path.join(categoryDir,file))})} const servicesDir = 'pages/services'; if (fs.existsSync(servicesDir)) { const serviceFiles = fs.readdirSync(servicesDir).filter(file => file.endsWith('.tsx')); serviceFiles.forEach(file => { } fixFile(path.join(servicesDir,file))})} console.log('Variable name fixing completed!'); export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default content; export default content;
const fs = require('fs'); const path = require('path'); function content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath); .join('')} function filename = path.basename(filePath); const validName = convertToValidVariableName(filename); const fixedContent = content.replace( new RegExp(`const ${filename.replace('.tsx','')}: NextPage`,'g'),`const ${validName}: NextPage` ).replace( export default ${filename.replace('.tsx','')};`,'g'),export default ${validName};`; ); fs.writeFileSync(filePath,fixedContent); console.log(`Fixed: ${filePath}`)} catch (error) { console.error(`Error fixing ${filePath}:`,error.message)} } const blogDir = 'pages/blog'; if (fs.existsSync(blogDir)) { const blogFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.tsx')); blogFiles.forEach(file => { fixFile(path.join(blogDir,file))})} const categoryDir = 'pages/category'; if (fs.existsSync(categoryDir)) { const categoryFiles = fs.readdirSync(categoryDir).filter(file => file.endsWith('.tsx')); categoryFiles.forEach(file => { fixFile(path.join(categoryDir,file))})} const servicesDir = 'pages/services'; if (fs.existsSync(servicesDir)) { const serviceFiles = fs.readdirSync(servicesDir).filter(file => file.endsWith('.tsx')); serviceFiles.forEach(file => { } fixFile(path.join(servicesDir,file))})} console.log('Variable name fixing completed!'); export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default content; export default content;

const fs = require('fs'); const path = require('path'); function content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath); .join('')} function filename = path.basename(filePath); const validName = convertToValidVariableName(filename); const fixedContent = content.replace( new RegExp(`const ${filename.replace('.tsx','')}: NextPage`,'g'),`const ${validName}: NextPage` ).replace( export default ${filename.replace('.tsx','')};`,'g'),export default ${validName};`; ); fs.writeFileSync(filePath,fixedContent); console.log(`Fixed: ${filePath}`)} catch (error) { console.error(`Error fixing ${filePath}:`,error.message)} } const blogDir = 'pages/blog'; if (fs.existsSync(blogDir)) { const blogFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.tsx')); blogFiles.forEach(file => { fixFile(path.join(blogDir,file))})} const categoryDir = 'pages/category'; if (fs.existsSync(categoryDir)) { const categoryFiles = fs.readdirSync(categoryDir).filter(file => file.endsWith('.tsx')); categoryFiles.forEach(file => { fixFile(path.join(categoryDir,file))})} const servicesDir = 'pages/services'; if (fs.existsSync(servicesDir)) { const serviceFiles = fs.readdirSync(servicesDir).filter(file => file.endsWith('.tsx')); serviceFiles.forEach(file => { } fixFile(path.join(servicesDir,file))})} console.log('Variable name fixing completed!'); export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default content; export default content;
const fs = require('fs'); const path = require('path'); function content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath); .join('')} function filename = path.basename(filePath); const validName = convertToValidVariableName(filename); const fixedContent = content.replace( new RegExp(`const ${filename.replace('.tsx','')}: NextPage`,'g'),`const ${validName}: NextPage` ).replace( export default ${filename.replace('.tsx','')};`,'g'),export default ${validName};`; ); fs.writeFileSync(filePath,fixedContent); console.log(`Fixed: ${filePath}`)} catch (error) { console.error(`Error fixing ${filePath}:`,error.message)} } const blogDir = 'pages/blog'; if (fs.existsSync(blogDir)) { const blogFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.tsx')); blogFiles.forEach(file => { fixFile(path.join(blogDir,file))})} const categoryDir = 'pages/category'; if (fs.existsSync(categoryDir)) { const categoryFiles = fs.readdirSync(categoryDir).filter(file => file.endsWith('.tsx')); categoryFiles.forEach(file => { fixFile(path.join(categoryDir,file))})} const servicesDir = 'pages/services'; if (fs.existsSync(servicesDir)) { const serviceFiles = fs.readdirSync(servicesDir).filter(file => file.endsWith('.tsx')); serviceFiles.forEach(file => { } fixFile(path.join(servicesDir,file))})} console.log('Variable name fixing completed!'); export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default content; export default content;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export default content;`;
const fs = require('fs'); const path = require('path'); function content = fs.readFileSync(filePath,'utf8'); const filename = path.basename(filePath); .join()} function filename = path.basename(filePath); const validName = convertToValidVariableName(filename); const fixedContent = content.replace( new RegExp(`const ${filename.replace('.tsx',)}: NextPage`,'g'),`const ${validName}: NextPage` ).replace( export default ${filename.replace('.tsx',)};`,'g'),export default ${validName};`; ); fs.writeFileSync(filePath,fixedContent); console.log(`Fixed: ${filePath}`)} catch (error) { console.error(`Error fixing ${filePath}:`,error.message)} } const blogDir = 'pages/blog'; if (fs.existsSync(blogDir)) { const blogFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.tsx')); blogFiles.forEach(file => { fixFile(path.join(blogDir,file))})} const categoryDir = 'pages/category'; if (fs.existsSync(categoryDir)) { const categoryFiles = fs.readdirSync(categoryDir).filter(file => file.endsWith('.tsx')); categoryFiles.forEach(file => { fixFile(path.join(categoryDir,file))})} const servicesDir = 'pages/services'; if (fs.existsSync(servicesDir)) { const serviceFiles = fs.readdirSync(servicesDir).filter(file => file.endsWith('.tsx')); serviceFiles.forEach(file => { } fixFile(path.join(servicesDir,file))})} console.log('Variable name fixing completed!'); export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default convertToValidVariableName; export default content; export default content;`;
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
