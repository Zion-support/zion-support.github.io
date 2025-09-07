      "timestamp": new Date().toISOString();
      "totalFiles": files.length;
      "fixedFiles": this.fixedFiles.length;
      "errors": this.errors;
      "fixedFileList": this.fixedFiles};"
    fs.writeFileSync()"
<<<<<<< HEAD
      path.join(this.projectRoot, 'batch-syntax-fix-report.json');
      JSON.stringify(report, null, 2)
    );

=======
      path.join(this.projectRoot,batch-syntax-fix-report.json');
      JSON.stringify(report, null, 2)
    );
'
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    this.log('📊 Report saved to batch-syntax-fix-report.json');
  }

// Run the fixer;
const fixer = new BatchSyntaxFixer();
fixer.run().catch(console.error);

<<<<<<< HEAD
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
      /import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^)]
      """
      /import\s*{[^}]+}\s*from\s*['"][^]
    content = content.replace(/['"]\s*;\s*[)]
    content = content.replace(/['"]\s*;\s*([^'"]*)\s*[]
      /\[\s*['"]\s*;\s*([^)]
      /\[\s*['"]\s*([^)]
    content = content.replace(/{\s*['"]\s*;\s*([^'"]*)\s*['"]\s*:/g, "}""
    content = content.replace(/:\s*['"]\s*;\s*([^'"]*)\s*['"]\s*,/g, """
      /:\s*['"]\s*;\s*([^)]
      /className\s*=\s*['"]\s*;\s*([^)]
      /href\s*=\s*['"]\s*;\s*([^)]
      /title\s*=\s*['"]\s*;\s*([^)]
        line.includes(")""
        !line.endsWith(")""
        return line + """
=======
#!/usr/bin/env node'
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
      /import\s*{\s*([^}]+)\s*}\s*from\s*["]([^'"]+)["]\s*import\s*{\s*([^}]+)\s*}\s*from\s*["]([^)]
      "
      /import\s*{[^}]+}\s*from\s*["][^]
    content = content.replace(/["]\s*;\s*[)]
    content = content.replace(/["]\s*;\s*([^'"]*)\s*[]
      /\[\s*["]\s*;\s*([^)]
      "
      /\[\s*["]\s*([^)]
      "
    content = content.replace(/{\s*["]\s*;\s*([^'"]*)\s*["]\s*:/g, "}
    content = content.replace(/:\s*["]\s*;\s*([^'"]*)\s*["]\s*,/g, "
      /:\s*["]\s*;\s*([^)]
      "
      /className\s*=\s*["]\s*;\s*([^)]
      "
      /href\s*=\s*["]\s*;\s*([^)]
      "
      /title\s*=\s*["]\s*;\s*([^)]
      "
        line.includes(")
        !line.endsWith(")
        return line + "
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
        line.includes()
        !line.endsWith()
        return line + 