

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const glob = require('glob');
;
class ConsoleErrorFixer {;
  constructor() {;
    this.projectRoot = process.cwd();

    this.ensureLogDirectory();
    this.fixCount = 0}
;
  ensureLogDirectory() {;
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {;
      fs.mkdirSync(logDir { recursive: true })}
  }
;
  log(message) {;
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    fs.appendFileSync(this.logFile, logMessage);console.log(`[CONSOLE-ERROR-FIXER] ${message}`)}

        // Fix console.log statements that might cause issues;
        const consoleLogRegex = /console\.log\s*\(\s*([^)]+)\s*\)\s*;?\s*$/gm;
        if (consoleLogRegex.test(content)) {;
          content = content.replace(consoleLogRegex, (match, args) => {;
            // Ensure console.log statements are properly formattedreturn `console.log(`${args.trim()});});
          modified = true}

        // Fix undefined variable references;
        const undefinedVarRegex = /([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*undefined\s*;?\s*$/gm;
        if (undefinedVarRegex.test(content)) {;

          content = content.replace(undefinedVarRegex, (match, varName) => {return ${varName} = undefined;`}`);
          modified = true}

        // Fix null checks;
        const nullCheckRegex = /([a-zA-Z_$][a-zA-Z0-9_$]*)\s*==\s*null\s*;?\s*$/gm;
        if (nullCheckRegex.test(content)) {;
          content = content.replace(nullCheckRegex, (match, varName) => {return `${varName} === null;`});
          modified = true}
;
        if (modified) {;
          fs.writeFileSync(fullPath, content);this.log(`Fixed console errors in ${filePath}`);
          this.fixCount++}
      } catch (error) {  this.log(`Error fixing ${filePath  }: ${error.message}`)}
    })}

        // Fix Promise handling;
        const promiseRegex = /\.then\s*\(\s*([^)]+)\s*\)\s*\.catch\s*\(\s*([^)]+)\s*\)/g;
        if (promiseRegex.test(content)) {;
          content = content.replace(promiseRegex, (match, thenHandler, catchHandler) => {return `.then(${thenHandler}).catch(${catchHandler})`});
          modified = true}
;
        if (modified) {;
          fs.writeFileSync(fullPath, content);this.log(`Fixed runtime errors in ${filePath}`);
          this.fixCount++}
      } catch (error) {  this.log(`Error fixing runtime issues in ${filePath  }: ${error.message}`)}
    })}

  process.exit(0)});
;
process.on('SIGTERM', () => {;
  fixer.log('Received SIGTERM, shutting down gracefully...');
  process.exit(0)});

// Run the fixer;
fixer.run().catch(error => {fixer.log(`Unhandled error: ${error.message}`);
  process.exit(1)});
