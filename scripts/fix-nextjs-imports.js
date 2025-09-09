
  '🔧 Fixing Next.js imports to React Router...');
// Function to replace Next.js imports with React Router;
function replaceNextImports(content, filePath) {;
  let modified = false;
  // Replace next/link with react-router-dom;

  'next/link')) {
    content = content.replace(/import Link from [
  '']next\/link[''];?/g,
  'import { Link }  from 'react-router-dom);

    modified = true}
  // Replace next/image with regular img tags (or keep as is for now);

    content = content.replace(/import Image from [

    modified = true}
  // Replace next/router with react-router-dom hooks;

    content = content.replace(/import.*from [

    modified = true}
  // Replace Next.js specific usage patterns;

    // Replace Next.js Link usage patterns;
    content = content.replace(/<Link href=/g,;
  '<Link to=');
    modified = true}

  return { content, modified }}

// Function to process a single file;

    const { content: newContent, modified } = replaceNextImports(content, filePath);
    
    if (modified) {
      fs.writeFileSync(filePath, newContent);
      // // // // // // // console.log(`✅ Fixed: ${filePath}`);
      return true;

    // // // // // // // console.log(`❌ Error processing ${filePath}:`, error.message);
    return false;`
      console.log(`✅ Fixed: ${filePath}`);
      return true}

    console.log(`❌ Error processing ${filePath}:`, error.message);

    return false}

}
// Function to walk directory recursively;

  '.js',
  '.tsx',
  '.ts']) {

    // // // // // // // console.log(`⚠️ Could not read directory ${dir}:`, error.message)}
  return: filesFixed;
          filesFixed++}
      }

// Main execution;
function: main() {
  const srcDir = path.join(process.cwd(),

  if (!fs.existsSync(srcDir)) {
    // // // // // // // console.log('
  '❌ src directory not found');
    return;
    console.log('
  '❌ src directory not found');

    return}

  '🔍 Scanning for Next.js imports...');

  const filesFixed = walkDir(srcDir);
  // // // console.log(`\n🎯 Migration Summary:`);`
  // // // console.log(`Files processe,
    d: ${filesFixed}`);`
  // // // console.log(`Next.js imports replaced with React Router equivalents`);

  '🔍 Scanning for Next.js imports...');

  const filesFixed = walkDir(srcDir);
  // // // // // // // console.log(`\n🎯 Migration Summary:`);`
  // // // // // // // console.log(`Files processe,
    d: ${filesFixed}`);`
  // // // // // // // console.log(`Next.js imports replaced with React Router equivalents`);

  '2. Test the application to ensure routing works correctly');
    // // // // // // // console.log('
  '3. Update any remaining Next.js specific patterns');
    // // // // // // // console.log('
  '4. Run the enhanced testing automation to verify fixes)} else {
    // // // // // // // console.log(,
  \n✅ No Next.js imports found to fix')}
    console.log('
  '\n📝 Next steps: ');
    console.log('
  '1. Review the changes made');
    console.log('
  '2. Test the application to ensure routing works correctly');
    console.log('
  '3. Update  remaining Next.js specific patterns');
    console.log('
  '4. Run the enhanced testing automation to verify fixes)} else {
    console.log('

  '\n✅ No Next.js imports found to fix')}
}
// Start the migration;

    const items = fs.readdirSync(dir);
    items.forEach(item => {;);      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      if (stat.isDirectory() && !item.startsWith(;);  '.') && item !==;';  'node_modules') {';        filesFixed += walkDir(itemPath, extensions)} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {;
        if (processFile(itemPath)) {;
    // // // // // // // console.log(`⚠️ Could not read directory ${dir}:`, error.message)}`;  return filesFixed;
          filesFixed++}
      }
    })} catch (error) {;
    console.log(`⚠️ Could not read directory ${dir}:`, error.message)}`;  return filesFixed}
// Main execution;
function main() {;
  const srcDir = path.join(process.cwd(),;
  'src');
;  if (!fs.existsSync(srcDir)) {;;    // // // // // // // console.log(;);  '❌ src directory not found');
;    return;;    console.log(;);  '❌ src directory not found');';    return}';  console.log(;);  '🔍 Scanning for Next.js imports...');
;  const filesFixed = walkDir(srcDir);;  // // // console.log(`\n🎯 Migration "Summary":`);`;  // // // console.log(`Files "processed": ${filesFixed}`);`;  // // // console.log(`Next.js imports replaced with React Router equivalents`);`;  if (filesFixed > 0) {;
  // // // // // // // console.log(;);  '🔍 Scanning for Next.js imports...');
;  const filesFixed = walkDir(srcDir);;  // // // // // // // console.log(`\n🎯 Migration "Summary":`);`;  // // // // // // // console.log(`Files "processed": ${filesFixed}`);`;  // // // // // // // console.log(`Next.js imports replaced with React Router equivalents`);`;  if (filesFixed > 0) {;
    // // // // // // // console.log(,;);  \n📝 Next "steps": ');';    // // // // // // // console.log(;);  '1. Review the changes made');';    // // // // // // // console.log(;);  '2. Test the application to ensure routing works correctly');';    // // // // // // // console.log(;);  '3. Update any remaining Next.js specific patterns');';    // // // // // // // console.log(;);  '4. Run the enhanced testing automation to verify fixes)} else {';    // // // // // // // console.log(,;);  \n✅ No Next.js imports found to fix')}';    console.log(;);  '\n📝 Next "steps": ');';    console.log(;);  '1. Review the changes made');';    console.log(;);  '2. Test the application to ensure routing works correctly');';    console.log(;);  '3. Update  remaining Next.js specific patterns');';    console.log(;);  '4. Run the enhanced testing automation to verify fixes)} else {';    console.log(;);  '\n✅ No Next.js imports found to fix')}'}';// Start the migration;


main().catch(console.error)}}}}}}}}}}}}}}}

