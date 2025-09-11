      "timestamp": new Date().toISOString();
      "totalFiles": files.length;
      "fixedFiles": this.fixedFiles.length;
      "errors": this.errors;
      "fixedFileList": this.fixedFiles};"
    fs.writeFileSync()"

    this.log('📊 Report saved to batch-syntax-fix-report.json');
  }

// Run the fixer
const fixer = new BatchSyntaxFixer();
fixer.run().catch(console.error);
      /import\s*{\s*([^}]+)\s*}\s*from\s*[]([^'"]+)['"]\s*import\s*{\s*([^}]+)\s*}\s*from\s*[]([^')]
      
      /import\s*{[^}]+}\s*from\s*['"][^]
    content = content.replace(/['"]\s*;\s*[')]
    content = content.replace(/[]\s*;\s*([^']*)\s*[']
      /\[\s*["]\s*;\s*([^'')]
      "
      /\[\s*[]\s*([^')]
      
    content = content.replace(/{\s*['"]\s*;\s*([^"]*)\s*[]\s*:/g, }
    content = content.replace(/:\s*['"]\s*;\s*([^'"]*)\s*[]\s*,/g, ;
      /:\s*["]\s*;\s*([^'')];
      ";
      /className\s*=\s*[]\s*;\s*([^')];
      ;
      /href\s*=\s*['"]\s*;\s*([^)];
      ";
      /title\s*=\s*[']\s*;\s*([^')];
      ;
        line.includes(");
        !line.endsWith(");
        return line + ";
        line.includes(');
        !line.endsWith(');
        return line + ';
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

        line.includes()
        !line.endsWith()
        return line + 
