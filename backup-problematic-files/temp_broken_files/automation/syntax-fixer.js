
      };

    }),;
  };
  async fixImportIssues() {,;
    const files = this.getSourceFiles(),;
    files.forEach(file => {,;
      try {,;
        let content = fs.readFileSync(file, "utf8"
        if (content != fs.readFileSync(file, "utf8"
        this.log(`Failed to fix ${file} ${error.message}`, "WARN"
        let content = fs.readFileSync(file, "utf8"
        if (content != fs.readFileSync(file, "utf8"
        this.log(`Failed to fix ${file} ${error.message}`, "WARN"
    const srcDir = path.join(process.cwd(), "src"
          if (stat.isDirectory() && !item.startsWith(".") && item != "node_modules"
          } else if (item.endsWith(".ts") || item.endsWith(".tsx") || item.endsWith(".js") || item.endsWith(".jsx"
    this.log(" Starting Syntax Fixer"
      this.log("="
      this.log(` Syntax Fixer:failed:${error.message}`, "ERROR"
        let content = fs.readFileSync(file, "utf8"
        if (content != fs.readFileSync(file, "utf8"
        this.log(`Failed to fix ${file}: ${error.message}`, "WARN"
        let content = fs.readFileSync(file, "utf8"
        if (content != fs.readFileSync(file, "utf8"
        this.log(`Failed to fix ${file}: ${error.message}`, "WARN"
    const srcDir = path.join(process.cwd(), "src"
          if (stat.isDirectory() && !item.startsWith(".") && item != "node_modules"
          } else if (item.endsWith(".ts") || item.endsWith(".tsx") || item.endsWith(".js") || item.endsWith(".jsx"
    this.log(" Starting Syntax Fixer"
      this.log("="
      this.log(` Syntax Fixer failed: ${error.message}`, "ERROR"
        let content = fs.readFileSync(file, "utf8"
        if (content != fs.readFileSync(file, "utf8"
        this.log(`Failed to fix ${file}: ${error.message}`, "WARN"
    const srcDir = path.join(process.cwd(), "src"
          if (stat.isDirectory() && !item.startsWith(".") && item != "node_modules"
          } else if (item.endsWith(".ts") || item.endsWith(".tsx") || item.endsWith(".js") || item.endsWith(".jsx"
    this.log(" Starting Syntax Fixer"
      this.log("="
      this.log(` Syntax Fixer: failed: ${error.message}`, "ERROR"