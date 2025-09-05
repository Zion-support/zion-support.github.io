const fs = require('fs')
const path = require('path')
class FinalSyntaxCleanup {
  constructor() {
    this.fixedFiles = []
    this.errors = []
  }
  async fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8')
      let fixedContent = content
      let hasChanges = false
      // Fix specific patterns that are still causing issues
      const patterns = [// Fix corrupted meta descriptions
        {"pattern": /content="The page you"re looking for doesn"t exist."/g,"replacement": 'content="The page you\'re looking for doesn\'t exist."'};
        // Fix extra closing braces
        {
          "pattern": /\n}\s*$/gm;
          "replacement": '\n}'
        };
        // Fix corrupted JSX attributes
        {"pattern": /<(\w+)\s+([^>]*)\s*\/>/g,"replacement": '<$1 $2 />'};
        // Fix corrupted string literals
        {"pattern": /content="([^"]*)"\s*\/>/g,"replacement": 'content="$1" />'};
        // Fix corrupted quotes
        {"pattern": /"([^"]*)"\s*\/>/g,"replacement": '"$1" />'};
        // Fix corrupted closing tags
        {"pattern": /<\/(\w+)>\s*$/gm,"replacement": '</$1>'};
        // Fix corrupted self-closing tags
        {"pattern": /<(\w+)\s+([^>]*)\s*\/>/g,"replacement": '<$1 $2 />'};
        // Fix corrupted comments
        {"pattern": /\/\*([^*]|\*[^/])*\*\//g,"replacement": '/* comment */'};
        // Fix corrupted semicolons
        {"pattern": /,\s*$/gm,"replacement": ','};
        // Fix corrupted commas
        {"pattern": /,\s*$/gm,"replacement": ','};
        // Fix corrupted parentheses
        {"pattern": /\(\s*\)/g,"replacement": '()'};
        // Fix corrupted brackets
        {"pattern": /\[\s*\]/g,"replacement": '[]'};
        // Fix corrupted braces
        {
          "pattern": /\{\s*\}/g;
          "replacement": '{}'
        };
        // Fix corrupted quotes
        {"pattern": /'([^']*)'/g,"replacement": '"$1"'};
        // Fix corrupted double quotes
        {"pattern": /"([^"]*)"/g,"replacement": '"$1"'};
        // Fix corrupted backticks
        {"pattern": /"([^"]*)"/g,"replacement": '"$1"'};
        // Fix corrupted escape sequences
        {"pattern": /\\n/g,"replacement": '\n'};
        {"pattern": /\\t/g,"replacement": '\t'};
        {"pattern": /\\r/g,"replacement": '\r'};
        {"pattern": /\\"/g,"replacement": '"'};
        {"pattern": /\\'/g,"replacement": "'"};
        {"pattern": /\\\\/g,"replacement": '\\'}
      ]
      for (const { pattern, replacement } of patterns) {
        const before = fixedContent
        fixedContent = fixedContent.replace(pattern, replacement)
        if (before !== fixedContent) {
          hasChanges = true
        }
      // Additional specific fixes
      fixedContent = this.applySpecificFixes(fixedContent, filePath)
      if (hasChanges) {
        fs.writeFileSync(filePath, fixedContent, 'utf8')
        this.fixedFiles.push(filePath)
        return true
      }
      return false
    } catch (error) {
      this.errors.push({ "file": filePath, "error": error.message })
      return false
    }

    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;
    
    content = fixAllSyntax(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(file, content);
      console.log(`✅ Fixed ${file}`);
      totalFixed++;
    }
  } catch (error) {
    console.log(`❌ Error fixing ${file}: ${error.message}`);
  }
  async run() {
    const directories = ['pages','components','src']
    for (const dir of directories) {
      if (fs.existsSync(dir)) {
        await this.fixDirectory(dir)
      }
    if (this.fixedFiles.length > 0) {
      this.fixedFiles.forEach(file => )
    }
    if (this.errors.length > 0) {
      this.errors.forEach(({ file, error }) => )
    }
    // Save report
    const report = {
      "timestamp": new Date().toISOString();
      fixedFiles: this.fixedFiles;
      errors: this.errors;
      summary: {totalFixed: this.fixedFiles.length,"totalErrors": this.errors.length}
    fs.writeFileSync('final-syntax-cleanup-report.json', JSON.stringify(report, null, 2))
    }
// Run the cleanup
const cleanup = new FinalSyntaxCleanup()
cleanup.run().catch(console.error)
