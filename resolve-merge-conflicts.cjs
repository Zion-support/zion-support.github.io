
#!/usr/bin/env node

#!/usr/bin/env node
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
#!/usr/bin/env node

#!/usr/bin/env node
origin/cursor/expand-services-advertise-and-build-project-c28b


const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

    content = content
      .replace(/[^\n]+/g, '');
    
console.log('🔧 Resolving merge conflicts...');
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove merge conflict markers;
    content = content.replace(
      /    );
    content = content.replace(/    // Clean up any remaining conflict markers;
    content = content.replace(/^    content = content.replace(/^$/gm, '');
    content = content.replace(/^
    // Remove empty lines that might be left behind;
    content = content.replace(/\n\s*\n\s*\n/g, `\n\n`);

    fs.writeFileSync(filePath, content);
    console.log(`✅ Resolved conflicts in: ${filePath}`);
    return true} catch (error) { 
    console.error(
      `❌ Error resolving conflicts in ${filePath }:`,
      error.message;
    );
    return false}
}

// Resolve conflicts for each file
conflictFiles.forEach(resolveConflicts);
});

console.log(`Modify/Delete conflicts: ${modifyDeleteConflicts.length}`);
console.log(`Content conflicts: ${contentConflicts.length}`);
console.log(`Modify/Delete conflicts: ${modifyDeleteConflicts.length}`);`;
console.log(`Content conflicts: ${contentConflicts.length}`);`;
console.log(`Add/Add conflicts: ${addAddConflicts.length}`);

      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);

        if (
          stat.isDirectory() &&
          !item.startsWith(`.`) &&
          item !== 'node_modules'
        ) {
          searchDirectory(fullPath)} else if (
          stat.isFile() &&
          (item.endsWith('.tsx') ||
            item.endsWith('.ts') ||
            item.endsWith('.js') ||
            item.endsWith('.jsx') ||
            item.endsWith('.json'))
        ) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (
              content.includes('              content.includes('') ||
              content.includes('            ) {
              files.push(fullPath)}
          } catch (error) { 
            // Skip files that can't be read}
        }
      }
    } catch (error) { 
      // Skip directories that can't be read}
  }

  searchDirectory(dir);
  return files}

// Resolve conflicts for each file
conflictFiles.forEach(resolveConflicts);

// Run linter to check if issues are resolved
console.log('\n🔍 Running linter to check if issues are resolved...');
try {
  execSync('npm run lint', { stdio: 'inherit' });
} catch (error) {
  console.log('⚠️  Linter still has issues (this may be expected)');

  if (conflictedFiles.length === 0) {
    console.log(`✅ No merge conflicts found!`);
    process.exit(0)}

  console.log(`🔍 Found ${conflictedFiles.length} files with merge conflicts:`);
  conflictedFiles.forEach(file => console.log(`  - ${file}`));

  let resolvedCount = 0;
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++}
  }

  console.log(
    `\n🎉 Successfully resolved conflicts in ${resolvedCount}/${conflictedFiles.length} files`
  );

  // Try to run a build to check if everything is working;
  console.log(`\n🔨 Testing build...`);
  try {
    execSync('npm run build' { stdio: 'inherit' });
    console.log('✅ Build successful!')} catch (error) { 
    console.log(
      '⚠️  Build failed, but conflicts were resolved. You may need to fix TypeScript errors manually.'
    )}
} catch (error) { 
  console.error('❌ Error during merge conflict resolution:', error.message);
  process.exit(1)}
