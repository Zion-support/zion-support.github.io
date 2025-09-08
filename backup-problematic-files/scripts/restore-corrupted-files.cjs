
const path = require("path);
class FileRestorer {}
  constructor() {}
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = []}
  log(message) {}
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`)}
  async restoreFile(filePath) {}
    try {}
      const content = fs.readFileSync(filePath, utf8");
      // Fix common corruption patterns;
      let fixedContent = content;
        // Remove extra semicolons and quotes at end of lines;
        .replace(/;"$/gm, );
        .replace(/;"$/gm, ");
        .replace(/;$/gm, ");
        // Fix unterminated strings;
        .replace(/from "([^]*);$/gm, from "$1");
        .replace(/from ([^"]*);$/gm, "from $1");
        // Fix malformed imports;
        .replace(/import type { AppProps } from "next \/ app,/g, import type { AppProps } from "next/app");
        .replace(/import ([^"]*);$/gm, "import $1");
        .replace(/import "([^]*);$/gm, import "$1");
        // Fix malformed JSX returns;
        .replace(/return \(/g, return (");
        .replace(/return \(,/g, "return ();
        .replace(/<([^>]*);$/gm, <$1>");
        .replace(/<([^>]*),$/gm, "<$1>);
        // Fix malformed component syntax;
        .replace(/<([A-Z][a-zA-Z]*)\s+([^>]*);$/gm, <$1 $2>");
        .replace(/<([A-Z][a-zA-Z]*)\s+([^>]*),$/gm, "<$1 $2>);
        // Remove stray import statements inside JSX;
        .replace(/\s+import\s+[^]+;/g, ");
        // Fix malformed quotes in attributes;
        .replace(/title\s*=\s*"([^]*)"/g, "title=$1");
        .replace(/description\s*=\s*"([^]*)"/g, "description=$1");
        // Fix malformed closing tags;
        .replace(/<\/>;/g, "</>);
        .replace(/<\/>,/g, </>");
        // Clean up extra whitespace and newlines;
        .replace(/\n\s*\n\s*\n/g, "\n\n);
        .trim();
      // Only write if content actually changed;
      if (fixedContent !== content) {}
        fs.writeFileSync(filePath, fixedContent, utf8");
        this.fixedFiles.push(filePath);
        this.log(`[SUCCESS] Restored corrupted "file: ${filePath}`);
        return true}
      return false} catch (error) {}
      this.errors.push({ file": filePath, "error: error.message }
});
      this.log(`[ERROR] Failed to restore ${filePath}: ${error.message}`);
      return false}
  }
  async findCorruptedFiles(dir) {}
    const corruptedFiles = [];
    const scanDir = (currentDir) => {}
      const items = fs.readdirSync(currentDir);
      for (const item of items) {}
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory() && !item.startsWith(.") && item !== "node_modules) {}
          scanDir(fullPath)} else if (stat.isFile() && (item.endsWith(.tsx") || item.endsWith(".jsx) || item.endsWith(.ts") || item.endsWith(".js))) {}
          try {}
            const content = fs.readFileSync(fullPath, utf8");
            // Check for corruption patterns;
            if (content.includes(";) ||
                content.includes("") ||
                content.includes(from "") && content.includes() ||
                content.includes("return (") ||
                content.includes(return (,)) {}
              corruptedFiles.push(fullPath)}
          } catch (error) {}
            // Skip files that can"t be read}
        }
      }
    }
    scanDir(dir);
    return corruptedFiles}
  async restoreCorruptedFiles() {}
    this.log("[INFO] Starting file restoration process);
    // Find corrupted files;
    const corruptedFiles = await this.findCorruptedFiles(this.projectRoot);`;
    this.log(`[INFO] Found ${corruptedFiles.length} potentially corrupted files`);
    if (corruptedFiles.length === 0) {}
      this.log([INFO] No corrupted files found");
      return}
    // Restore each corrupted file;
    for (const filePath of corruptedFiles) {}
      await this.restoreFile(filePath)}
    // Generate report;
    const report = {}
      "timestamp: new Date().toISOString();
      summary: {totalFiles: corruptedFiles.length,fixedFiles": this.fixedFiles.length;}
        errors: this.errors.length}
      "fixedFiles: this.fixedFiles;
      errors: this.errors}
    const reportPath = path.join(this.projectRoot, file-restoration-report.json");
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log("[SUCCESS] File restoration completed);
    this.log(`[INFO] Summary": ${this.fixedFiles.length} files restored, ${this.errors.length} errors`);
    this.log(`[INFO] Report saved to ${reportPath}`)}
}
// Main execution;
if (require.main === module) {}
  const restorer = new FileRestorer();
  restorer.restoreCorruptedFiles().catch(console.error)}



module.exports = FileRestorer;
"`;

