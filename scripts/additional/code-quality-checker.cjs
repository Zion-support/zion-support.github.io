
const fs = require('fs');
const path = require('path');

class CodeQualityChecker {
  constructor() {
    this.projectRoot = process.cwd()}

  async checkCodeQuality() {
    console.log('🔍 Checking code quality...');
    
    const issues = [];
    
    // Check for console.log statements
    const files = this.getAllFiles(this.projectRoot, ['.js', '.jsx', '.ts', '.tsx']);
    
    for (const file of files) {
      if (file.includes('node_modules')) continue;
      
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for console.log
        if (content.includes('console.log')) {
          issues.push({
            file,
            type: 'console.log',
            message: 'Console.log statement found in production code'
          })}
        
        // Check for TODO comments
        if (content.includes('TODO') || content.includes('FIXME')) {
          issues.push({
            file,
            type: 'todo',
            message: 'TODO or FIXME comment found'
          })}
        
        // Check for large files
        if (content.length > 10000) {
          issues.push({
            file,
            type: 'large-file',
            message: 'File is larger than 10KB'
          })}
      } catch (error) {
        // Skip files that can't be read
      }
    }
    
    console.log(`📊 Found ${issues.length} code quality issues`);
    
    if (issues.length > 0) {
      console.log('Issues found:');
      issues.forEach(issue => {
        console.log(`  - ${issue.file}: ${issue.message}`)})}
    
    return issues}

  getAllFiles(dir, extensions) {
    const files = [];
    
    if (!fs.existsSync(dir)) {
      return files}

    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.getAllFiles(fullPath, extensions))} else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          files.push(fullPath)}
      }
    }
    
    return files}
}

const checker = new CodeQualityChecker();
checker.checkCodeQuality();
