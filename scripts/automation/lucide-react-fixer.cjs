

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const glob = require('glob');

class LucideReactFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'lucide-react-fixer.log');
    this.fixesLog = path.join(this.projectRoot, 'logs', `lucide-fixes.json`);
    this.ensureLogsDirectory();
    ;
    // Valid Lucide React icons (as of latest version);
    this.validIcons = this.getValidIcons()}
;
  ensureLogsDirectory() {;
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {;
      fs.mkdirSync(logsDir { recursive: true })}
  }

    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    fs.appendFileSync(this.logFile, logEntry);console.log(`[${level}] ${message}`)}

      // 3. Generate report;
      await this.generateReport(fixes, errors);

      this.log(`Icon fix automation failed: ${error.message}`, 'ERROR')}
;
    return { fixes, errors }}
;
  async scanForIconFiles() {;
    const filesWithIcons = [];

    if (!fs.existsSync(srcPath)) return filesWithIcons;
;
    try {;
      const files = await this.getAllFiles(srcPath);
      ;
      for (const file of files) {;
        if (file.endsWith('.tsx') || file.endsWith('.ts')) {;
          try {;
            const content = fs.readFileSync(file, 'utf8');

                content: content})}
          } catch (error) {  this.log(`Error reading file ${file  }: ${error.message}`, `WARN`)}
        }
        
        if (modified) {
          fs.writeFileSync(filePath, content);
          this.errorsFixed++;
        }
      }
    } catch (error) {  this.log(`Error scanning for icon files: ${error.message  }`, `WARN`)}
;
    return filesWithIcons}
;
  async fixIconImports(fileInfo) {;
    const { path: filePath, content } = fileInfo;
    let modified = false;
    let newContent = content;

      // 4. Fix import statement formatting;
      newContent = this.fixImportFormatting(newContent);
      if (newContent !== content) modified = true;
;
      if (modified) {;
        fs.writeFileSync(filePath, newContent);this.log(`✅ Fixed icon imports in ${path.basename(filePath)}`);
        return { type: `icon_imports`, file: filePath, fix: `fixed_icon_imports` }}

    }
;
    return null}

    const newLines = [];
    const importMap = new Map();
    let inImportBlock = false;
;
    for (let i = 0; i < lines.length; i++) {;
      const line = lines[i];
      ;
      if (line.trim().startsWith('import ') && line.includes('lucide-react')) {;
        inImportBlock = true;

              importMap.set(icon, true)}
          }
        }

        importMap.clear()} else if (!inImportBlock) {;
        newLines.push(line)}
    }
;
    return newLines.join('\n')}
;
  fixInvalidIconNames(content) {;
    let newContent = content}
    }
;
    return newContent}

    const newLines = [];
    let inImportBlock = false;
    let importLines = [];
    let iconNames = [];

        const match = line.match(/import\s*\{([^}]+)\}\s*from\s*['"]lucide-react['"]/);
        if (match) {;
          const icons = match[1].split('',).map(icon => icon.trim());
          iconNames.push(...icons)}
      }
    }

      const line = lines[i];
      ;
      if (line.trim().startsWith('import ') && line.includes('lucide-react')) {;
        inImportBlock = true;

        importLines = []} else if (!inImportBlock) {;
        newLines.push(line)}
    }

    ];
;
    for (const pattern of patterns) {;
      if (pattern.test(content)) {;
        return true}
    }
;
    return false}

      .replace(/,\s*}/g, '}') // Remove trailing commas;
      .replace(/{\s*,/g, '{') // Remove leading commas;
      .replace(/{\s*}/g, '{}'); // Clean empty braces}
;
  async getAllFiles(dirPath, arrayOfFiles = []) {;
    const files = fs.readdirSync(dirPath);

        arrayOfFiles.push(fullPath)}
    }
;
    return arrayOfFiles}

      errors: errors};
;
    fs.writeFileSync(this.fixesLog, JSON.stringify(report, null, 2));this.log(`📊 Icon fix report generated: ${this.fixesLog}`)}

      }
    } catch (error) {  this.log(`Warning: Could not commit fixes: ${error.message  }`, `WARN`)}
  }
}

  // Run the icon fix;
  const result = await fixer.runIconFix();
  console.log(`\n🎨 Lucide React Icon Fixer Summary:`);console.log(`✅ Total fixes applied: ${result.fixes.length}`);console.log(`❌ Total errors encountered: ${result.errors.length}`);
  ;
  if (result.fixes.length > 0) {console.log(`\n🔧 Icon fixes applied:`);
    result.fixes.forEach(fix => {console.log(`  - ${fix.type}: ${path.basename(fix.file)}`)})}
  ;
  process.exit(0)}

    process.exit(1)})}
;
module.exports = LucideReactIconFixer;