#!/usr/bin/env node
const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');
const util = require('util');

const execAsync = util.promisify(exec);

class SimpleMergeResolver {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.fixedFiles = [];
    this.errors = []}

  async log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`)}

  async findConflictedFiles() {
    try {
      const { stdout } = await execAsync('git diff --name-only --diff-filter=U', { cwd: this.projectRoot });
      return stdout.trim().split('\n').filter(file => file)} catch (error) {
      await this.log(`Error finding conflicted files: ${error.message}`, 'ERROR');
      return []}
  }

  async resolveFileConflicts(filePath) {
    try {
      const content = await fs.readFile(filePath, 'utf8');
      
      // Simple conflict resolution - take the first version (HEAD)
      let resolvedContent = content;
      
      // Remove merge conflict markers and keep HEAD version
      resolvedContent = resolvedContent.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
      
      // Remove any remaining conflict markers
      resolvedContent = resolvedContent.replace(/<<<<<<< HEAD\n/g, '');
      resolvedContent = resolvedContent.replace(/=======\n/g, '');
      resolvedContent = resolvedContent.replace(/>>>>>>> [^\n]+\n/g, '');
      
      if (resolvedContent !== content) {
        await fs.writeFile(filePath, resolvedContent, 'utf8');
        this.fixedFiles.push(filePath);
        await this.log(`Resolved conflicts in: ${filePath}`);
        return true}
      
      return false} catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      await this.log(`Error resolving ${filePath}: ${error.message}`, 'ERROR');
      return false}
  }

  async resolveAllConflicts() {
    await this.log('Starting merge conflict resolution...');
    
    const conflictedFiles = await this.findConflictedFiles();
    await this.log(`Found ${conflictedFiles.length} files with conflicts`);
    
    for (const file of conflictedFiles) {
      await this.resolveFileConflicts(file)}
    
    await this.log(`Resolved conflicts in ${this.fixedFiles.length} files`);
    
    if (this.errors.length > 0) {
      await this.log(`Encountered ${this.errors.length} errors:`, 'WARN');
      this.errors.forEach(error => {
        console.log(`  - ${error.file}: ${error.error}`)})}
    
    return this.fixedFiles.length}
}

// Run the resolver
async function main() {
  const resolver = new SimpleMergeResolver();
  const fixedCount = await resolver.resolveAllConflicts();
  
  if (fixedCount > 0) {
    console.log(`\n✅ Successfully resolved conflicts in ${fixedCount} files`);
    console.log('You can now commit the changes with: git add . && git commit -m "Resolve merge conflicts"')} else {
    console.log('\n✅ No conflicts found or all conflicts already resolved')}
}

if (require.main === module) {
  main().catch(console.error)}

module.exports = SimpleMergeResolver;