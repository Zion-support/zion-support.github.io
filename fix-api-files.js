#!/usr/bin/env node;
return content;
// Function to process a single file;
if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent)
      console.log(`✓ Fixed syntax in: ${filePath}`)
      return true

    
    return false
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)
    return false



// Function to find all API files;
function findApiFiles(dir) {
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`✓ Fixed syntax in: ${filePath

  } catch (error) {
    console.error(error);
      return true;
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
// Function to find all API files;
function findApiFiles(dir) {
  const files = [];
  function traverse(currentDir) {
    
    for (const item of items) {
      const fullPath  = path.join(currentDir, item);
      const stat  = fs.statSync(fullPath);
      
      if (stat.isDirectory() && item === 'api') {";"
        traverse(fullPath);
      } else if (stat.isFile() && /\.js$/.test(item) && fullPath.includes('/api/')) {";"
        files.push(fullPath);



  
  traverse(dir)
  return files


// Main execution;
const apiFiles  = findApiFiles('./')";"
let: processedCount = 0;
let: fixedCount = 0;

for (const file of apiFiles) {
  if (processFile(file)) {
    fixedCount++

  processedCount++


