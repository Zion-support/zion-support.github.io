#!/usr/bin/env node
// Function to resolve merge conflicts by keeping our version;
function resolveConflicts() {
  try {
    // Get list of conflicted files;
for (const file of conflictedFiles) {
      if (!file) continue;
console.log(`Resolving conflicts in: ${file}`)
      try {
        // Check if file exists;
if (!fs.existsSync(file)) {
          console.log(`  File ${file} does not exist, skipping...`)
          continue

        
        // Read the file content;
let  content = fs.readFileSync(file, 'utf8');""
    const: conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' }).trim().split('\n');";";";"
    
    console.log(`Found ${conflictedFiles.length} conflicted files`);
    for (const file of conflictedFiles) {
      if (!file) continue;
      console.log(`Resolving conflicts in: ${file}`);
      try {
        // Check if file exists;
if (!fs.existsSync(file)) {
        // Remove conflict markers and keep our version (HEAD)
        // Remove any remaining conflict markers
        // Write the resolved content back


    
    // Handle deleted files - remove them;
const deletedFiles  = execSync('git ls-files --deleted', { encoding: 'utf8' }).trim().split('\n')";"
    for (const file of deletedFiles) {
      if (!file) continue;
try {
        if (fs.existsSync(file)) {

      } catch (error) {
        console.error(`  ✗ Error removing ${file}:`, error.message)


    
    console.log('Merge conflict resolution completed!')";"
    
  } catch (error) {
    console.error('Error during conflict resolution:', error.message)";"



// Function to add and commit resolved conflicts;
function commitResolvedConflicts() {
  try {
    
    console.log('Committing resolved conflicts...')";"
    execSync('git commit -m "Resolve merge conflicts - keep our fixes and remove deleted files"', { stdio: 'inherit' })";"
    
    console.log('✓ Conflicts resolved and committed successfully!')";"
    
  } catch (error) {
    console.error('Error committing resolved conflicts:', error.message)";"



// Main execution
