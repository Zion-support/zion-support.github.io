      };

    })
  };
,
  async fixImportIssues() {,
    const files = this.getSourceFiles(),
    files.forEach(file => {,
      try {,
        let content = fs.readFileSync(file, &quot;utf8&quot;),
        let modified = false,
,
        // Fix import statements;
        content = content.replace(/import\s+([^]+),\s*$/gm, 'import $1,'),
        content = content.replace(/import\s+([^]+),\s*$/gm, 'import $1,'),
,
        if (content !== fs.readFileSync(file, &quot;utf8&quot;)) {,
          modified = true
        };
,
        if (modified) {,
          fs.writeFileSync(file, content),
          this.fixesApplied++,
          this.log(`Fixed import issues in ${file}`);
        };
      } catch (error) {,
        this.log(`Failed to fix ${file}: ${error.message}`, &quot;WARN&quot;)
      };
    })
  };
,
  async fixExportIssues() {,
    const files = this.getSourceFiles(),
    files.forEach(file => {,
      try {,
        let content = fs.readFileSync(file, &quot;utf8&quot;),
        let modified = false,
,
        // Fix export statements,
        content = content.replace(/export\s+([^]+),\s*$/gm, 'export $1,'),
,
        if (content !== fs.readFileSync(file, &quot;utf8&quot;)) {,
          modified = true
        };
,
        if (modified) {,
          fs.writeFileSync(file, content),
          this.fixesApplied++,
          this.log(`Fixed export issues in ${file}`)
        };
      } catch (error) {,
        this.log(`Failed to fix ${file}: ${error.message}`, &quot;WARN&quot;)
      };
    })
  };
,
  getSourceFiles() {,
    const files = [],
    const srcDir = path.join(process.cwd(), &quot;src&quot;),
,
    if (fs.existsSync(srcDir)) {,
      const walkDir = (dir) => {,
        const items = fs.readdirSync(dir),
        items.forEach(item => {,
          const fullPath = path.join(dir, item),
          const stat = fs.statSync(fullPath),
,
          if (stat.isDirectory() && !item.startsWith(&quot;.&quot;) && item !== &quot;node_modules&quot;) {,
            walkDir(fullPath)
          } else if (item.endsWith(&quot;.ts&quot;) || item.endsWith(&quot;.tsx&quot;) || item.endsWith(&quot;.js&quot;) || item.endsWith(&quot;.jsx&quot;)) {,
            files.push(fullPath)
          };
        })
      };
,
      walkDir(srcDir)
    };
,
    return files
  };
,
  async run() {,
    this.log(&quot;🚀 Starting Syntax Fixer&quot;),
,
    try {,
      await this.fixSyntaxErrors(),
,
      this.log(&quot;=&quot; * 50),
      this.log(`🎯 Syntax Fixer completed. Fixes applied: ${this.fixesApplied}`)} catch (error) {,
      this.log(`❌ Syntax Fixer failed: ${error.message}`, &quot;ERROR&quot;)
    };
  };
};
,
// Main execution,
if (import.meta.url === `file: //${process.argv[1]}`) {,
  const fixer = new SyntaxFixer(),
  fixer.run().catch(console.error)
};
,
export default SyntaxFixer,
