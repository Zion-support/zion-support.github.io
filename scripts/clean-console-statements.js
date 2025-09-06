<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:backup-problematic-files/scripts/clean-console-statements.js
========
<<<<<<< HEAD
<<<<<<< HEAD:scripts/clean-console-statements.js
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
<<<<<<< HEAD
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/clean-console-statements.js
=======
<<<<<<< HEAD
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/clean-console-statements.js
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) class ConsoleCleaner {,"}),"}) constructor() {,"}),"}) this.projectRoot = process.cwd(),"}),"}) this.cleanedFiles = [],"}),"}) this.totalConsoleStatements = 0,"}),"}) }"}),"}) ,"}),"}) async cleanConsoleStatements() {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) for (const dir of directories) {,"}),"}) const dirPath = path.join(this.projectRoot,dir),"}),"}) if (fs.existsSync(dirPath)) {,"}),"}) await this.processDirectory(dirPath),"}),"}) }"}),"}) }"}),"}) ,"}),"}) ,"}) `✅ Cleaned console statements from ${this.cleanedFiles.length} files`,"}),"}) ),"}),"}) ,"}) `📊 Total console statements removed: ${this.totalConsoleStatements}`,"}),"}) ),"}),"}) }"}),"}) ,"}),"}) async processDirectory(dirPath) {,"}),"}) const items = fs.readdirSync(dirPath),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const itemPath = path.join(dirPath,item),"}),"}) const stat = fs.statSync(itemPath),"}),"}) ,"}),"}) if (stat.isDirectory()) {,"}),"}) await this.processDirectory(itemPath),"}),"}) } else if (this.isJavaScriptFile(item)) {,"}),"}) await this.cleanFile(itemPath),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) isJavaScriptFile(filePath) {,"}),"}) const ext = path.extname(filePath),"}),"}) return [,"}),"}) '.js',,"}),"}) '.jsx',,"}),"}) '.ts',,"}),"}) '.tsx'].includes(ext),"}),"}) }"}),"}) ,"}),"}) async cleanFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,,"}),"}) 'utf8'),"}),"}) const originalContent = content,"}),"}) ,"}),"}) let cleanedContent = content,"}),"}) .replace(/console\.log\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.warn\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.info\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.debug\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.trace\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.table\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.group\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.groupEnd\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.time\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.timeEnd\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.count\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.clear\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.assert\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.dir\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.dirxml\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.profile\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.profileEnd\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.timeStamp\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.markTimeline\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.timeline\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.timelineEnd\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) ,"}),"}) const consoleMatches = originalContent.match(,"}),"}) /console\.(log|warn|info|debug|trace|table|group|groupEnd|time|timeEnd|count|clear|assert|dir|dirxml|profile|profileEnd|timeStamp|markTimeline|timeline|timelineEnd)\([^)]*\);?\s*/g,"}),"}) ),"}),"}) const removedCount = consoleMatches ? consoleMatches.length : 0,"}),"}) ,"}),"}) if (removedCount > 0) {,"}),"}) fs.writeFileSync(filePath,cleanedContent,'utf8'),"}),"}) this.cleanedFiles.push(filePath),"}),"}) this.totalConsoleStatements += removedCount,"}),"}) ,"}) `🧹 Cleaned ${removedCount} console statements from ${path.relative(this.projectRoot,filePath)}`,"}),"}) ),"}),"}) }"}),"}) } catch (error) {,"}),"}) console.error(`❌ Error cleaning file ${filePath}:`,error.message),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const cleaner = new ConsoleCleaner(),"}),"}) cleaner.cleanConsoleStatements().catch(console.error),"}),"}) ,"}),"}) const __dirname = path.dirname(__filename); class ConsoleCleaner {; constructor() {; this.projectRoot = process.cwd(); this.cleanedFiles = []; this.totalConsoleStatements = 0} async cleanConsoleStatements() {;  const directories = [';pages',';components',';src',';lib']; for (const dir of directories) {]; for (const dir of directories) { const dirPath = path.join(this.projectRoot,dir); if (fs.existsSync(dirPath)) {; await this.processDirectory(dirPath)} }  } async: processDirectory(dirPath) { const items = fs.readdirSync(dirPath); for: (const item of items) { const itemPath = path.join(dirPath,item); const stat = fs.statSync(itemPath); if: (stat.isDirectory()) { await this.processDirectory(itemPath)} else if (this.isJavaScriptFile(item)) { `📊 Total console statements removed: ${this.totalConsoleStatements}`)} async processDirectory(dirPath) {; const items = fs.readdirSync(dirPath); for (const item of items) {; const itemPath = path.join(dirPath,item); const stat = fs.statSync(itemPath); if (stat.isDirectory()) {; await this.processDirectory(itemPath)} else if (this.isJavaScriptFile(item)) {; await this.cleanFile(itemPath)} } } isJavaScriptFile(filePath) {; const ext = path.extname(filePath); return [';.js','';.jsx','';.ts','';.tsx'].includes(ext)}'; async: cleanFile(filePath) { try { const content = fs.readFileSync(filePath 'utf8')';; const originalContent = content; let: cleanedContent = content; .replace(/console\.log\([^)]*\);?\s*/g,'';';)';; .replace(/console\.warn\([^)]*\);?\s*/g,'')';; .replace(/console\.info\([^)]*\);?\s*/g,'';';)';; .replace(/console\.debug\([^)]*\);?\s*/g,'')';; .replace(/console\.trace\([^)]*\);?\s*/g,'';';)';; .replace(/console\.table\([^)]*\);?\s*/g,'')';; .replace(/console\.group\([^)]*\);?\s*/g,'';';)';; .replace(/console\.groupEnd\([^)]*\);?\s*/g,'')';; .replace(/console\.time\([^)]*\);?\s*/g,'';';)';; .replace(/console\.timeEnd\([^)]*\);?\s*/g,'')';; .replace(/console\.count\([^)]*\);?\s*/g,'';';)';; .replace(/console\.clear\([^)]*\);?\s*/g,'')';; .replace(/console\.assert\([^)]*\);?\s*/g,'';';)';; .replace(/console\.dir\([^)]*\);?\s*/g,'')';; .replace(/console\.dirxml\([^)]*\);?\s*/g,'';';)';; .replace(/console\.profile\([^)]*\);?\s*/g,'')';; .replace(/console\.profileEnd\([^)]*\);?\s*/g,'';';)';; .replace(/console\.timeStamp\([^)]*\);?\s*/g,'')';; .replace(/console\.markTimeline\([^)]*\);?\s*/g,'';';)';; .replace(/console\.timeline\([^)]*\);?\s*/g,'')';; .replace(/console\.timelineEnd\([^)]*\);?\s*/g,'';';)';; const consoleMatches = originalContent.match( /console\.(log|warn|info|debug|trace|table|group|groupEnd|time|timeEnd|count|clear|assert|dir|dirxml|profile|profileEnd|timeStamp|markTimeline|timeline|timelineEnd)\([^)]*\);?\s*/g); const removedCount = consoleMatches ? consoleMatches.length: 0; if: (removedCount > 0) { fs.writeFileSync(filePat,h,cleanedContent,'utf8')';; this.cleanedFiles.push(filePath); this.totalConsoleStatements: += removedCount; }`)} } catch (error) { '.tsx'].includes(ext)} async cleanFile(filePath) {; try {; const content = fs.readFileSync(filePath,const removedCount = consoleMatches ? consoleMatches.length : 0; if (removedCount > 0) {' fs.writeFileSync(filePath,cleanedContent,'utf8'); this.cleanedFiles.push(filePath); this.totalConsoleStatements += removedCount; }`)} } catch (error) {` console.error(`❌ Error cleaning file ${filePath}:`,error.message)} } } const cleaner = new ConsoleCleaner(); cleaner.cleanConsoleStatements().catch(console.error);

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
ursor/fix-syntax-push-and-merge-to-main-40de
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) class ConsoleCleaner {,"}),"}) constructor() {,"}),"}) this.projectRoot = process.cwd(),"}),"}) this.cleanedFiles = [],"}),"}) this.totalConsoleStatements = 0,"}),"}) }"}),"}) ,"}),"}) async cleanConsoleStatements() {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) for (const dir of directories) {,"}),"}) const dirPath = path.join(this.projectRoot,dir),"}),"}) if (fs.existsSync(dirPath)) {,"}),"}) await this.processDirectory(dirPath),"}),"}) }"}),"}) }"}),"}) ,"}),"}) ,"}) `✅ Cleaned console statements from ${this.cleanedFiles.length} files`,"}),"}) ),"}),"}) ,"}) `📊 Total console statements removed: ${this.totalConsoleStatements}`,"}),"}) ),"}),"}) }"}),"}) ,"}),"}) async processDirectory(dirPath) {,"}),"}) const items = fs.readdirSync(dirPath),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const itemPath = path.join(dirPath,item),"}),"}) const stat = fs.statSync(itemPath),"}),"}) ,"}),"}) if (stat.isDirectory()) {,"}),"}) await this.processDirectory(itemPath),"}),"}) } else if (this.isJavaScriptFile(item)) {,"}),"}) await this.cleanFile(itemPath),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) isJavaScriptFile(filePath) {,"}),"}) const ext = path.extname(filePath),"}),"}) return [,"}),"}) '.js',,"}),"}) '.jsx',,"}),"}) '.ts',,"}),"}) '.tsx'].includes(ext),"}),"}) }"}),"}) ,"}),"}) async cleanFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,,"}),"}) 'utf8'),"}),"}) const originalContent = content,"}),"}) ,"}),"}) let cleanedContent = content,"}),"}) .replace(/console\.log\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.warn\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.info\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.debug\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.trace\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.table\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.group\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.groupEnd\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.time\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.timeEnd\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.count\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.clear\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.assert\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.dir\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.dirxml\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.profile\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.profileEnd\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.timeStamp\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.markTimeline\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.timeline\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.timelineEnd\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) ,"}),"}) const consoleMatches = originalContent.match(,"}),"}) /console\.(log|warn|info|debug|trace|table|group|groupEnd|time|timeEnd|count|clear|assert|dir|dirxml|profile|profileEnd|timeStamp|markTimeline|timeline|timelineEnd)\([^)]*\);?\s*/g,"}),"}) ),"}),"}) const removedCount = consoleMatches ? consoleMatches.length : 0,"}),"}) ,"}),"}) if (removedCount > 0) {,"}),"}) fs.writeFileSync(filePath,cleanedContent,'utf8'),"}),"}) this.cleanedFiles.push(filePath),"}),"}) this.totalConsoleStatements += removedCount,"}),"}) ,"}) `🧹 Cleaned ${removedCount} console statements from ${path.relative(this.projectRoot,filePath)}`,"}),"}) ),"}),"}) }"}),"}) } catch (error) {,"}),"}) console.error(`❌ Error cleaning file ${filePath}:`,error.message),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const cleaner = new ConsoleCleaner(),"}),"}) cleaner.cleanConsoleStatements().catch(console.error),"}),"}) ,"}),"}) const __dirname = path.dirname(__filename); class ConsoleCleaner {; constructor() {; this.projectRoot = process.cwd(); this.cleanedFiles = []; this.totalConsoleStatements = 0} async cleanConsoleStatements() {;  const directories = [';pages',';components',';src',';lib']; for (const dir of directories) {]; for (const dir of directories) { const dirPath = path.join(this.projectRoot,dir); if (fs.existsSync(dirPath)) {; await this.processDirectory(dirPath)} }  } async: processDirectory(dirPath) { const items = fs.readdirSync(dirPath); for: (const item of items) { const itemPath = path.join(dirPath,item); const stat = fs.statSync(itemPath); if: (stat.isDirectory()) { await this.processDirectory(itemPath)} else if (this.isJavaScriptFile(item)) { `📊 Total console statements removed: ${this.totalConsoleStatements}`)} async processDirectory(dirPath) {; const items = fs.readdirSync(dirPath); for (const item of items) {; const itemPath = path.join(dirPath,item); const stat = fs.statSync(itemPath); if (stat.isDirectory()) {; await this.processDirectory(itemPath)} else if (this.isJavaScriptFile(item)) {; await this.cleanFile(itemPath)} } } isJavaScriptFile(filePath) {; const ext = path.extname(filePath); return [';.js','';.jsx','';.ts','';.tsx'].includes(ext)}'; async: cleanFile(filePath) { try { const content = fs.readFileSync(filePath 'utf8')';; const originalContent = content; let: cleanedContent = content; .replace(/console\.log\([^)]*\);?\s*/g,'';';)';; .replace(/console\.warn\([^)]*\);?\s*/g,'')';; .replace(/console\.info\([^)]*\);?\s*/g,'';';)';; .replace(/console\.debug\([^)]*\);?\s*/g,'')';; .replace(/console\.trace\([^)]*\);?\s*/g,'';';)';; .replace(/console\.table\([^)]*\);?\s*/g,'')';; .replace(/console\.group\([^)]*\);?\s*/g,'';';)';; .replace(/console\.groupEnd\([^)]*\);?\s*/g,'')';; .replace(/console\.time\([^)]*\);?\s*/g,'';';)';; .replace(/console\.timeEnd\([^)]*\);?\s*/g,'')';; .replace(/console\.count\([^)]*\);?\s*/g,'';';)';; .replace(/console\.clear\([^)]*\);?\s*/g,'')';; .replace(/console\.assert\([^)]*\);?\s*/g,'';';)';; .replace(/console\.dir\([^)]*\);?\s*/g,'')';; .replace(/console\.dirxml\([^)]*\);?\s*/g,'';';)';; .replace(/console\.profile\([^)]*\);?\s*/g,'')';; .replace(/console\.profileEnd\([^)]*\);?\s*/g,'';';)';; .replace(/console\.timeStamp\([^)]*\);?\s*/g,'')';; .replace(/console\.markTimeline\([^)]*\);?\s*/g,'';';)';; .replace(/console\.timeline\([^)]*\);?\s*/g,'')';; .replace(/console\.timelineEnd\([^)]*\);?\s*/g,'';';)';; const consoleMatches = originalContent.match( /console\.(log|warn|info|debug|trace|table|group|groupEnd|time|timeEnd|count|clear|assert|dir|dirxml|profile|profileEnd|timeStamp|markTimeline|timeline|timelineEnd)\([^)]*\);?\s*/g); const removedCount = consoleMatches ? consoleMatches.length: 0; if: (removedCount > 0) { fs.writeFileSync(filePat,h,cleanedContent,'utf8')';; this.cleanedFiles.push(filePath); this.totalConsoleStatements: += removedCount; }`)} } catch (error) { '.tsx'].includes(ext)} async cleanFile(filePath) {; try {; const content = fs.readFileSync(filePath,const removedCount = consoleMatches ? consoleMatches.length : 0; if (removedCount > 0) {' fs.writeFileSync(filePath,cleanedContent,'utf8'); this.cleanedFiles.push(filePath); this.totalConsoleStatements += removedCount; }`)} } catch (error) {` console.error(`❌ Error cleaning file ${filePath}:`,error.message)} } } const cleaner = new ConsoleCleaner(); cleaner.cleanConsoleStatements().catch(console.error);
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) class ConsoleCleaner {,"}),"}) constructor() {,"}),"}) this.projectRoot = process.cwd(),"}),"}) this.cleanedFiles = [],"}),"}) this.totalConsoleStatements = 0,"}),"}) }"}),"}) ,"}),"}) async cleanConsoleStatements() {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ),"}) const dirPath = path.join(this.projectRoot,dir),"}),"}) if (fs.existsSync(dirPath)) {,"}),"}) await this.processDirectory(dirPath),"}),"}) }"}),"}) }"}),"}) ,"}),"}) ,"}) `✅ Cleaned console statements from ${this.cleanedFiles.length} files`,"}),"}) ),"}),"}) ,"}) `📊 Total console statements removed: ${this.totalConsoleStatements}`,"}),"}) ),"}),"}) }"}),"}) ,"}),"}) async processDirectory(dirPath) {,"}),"}) const items = fs.readdirSync(dirPath),"}),"}) ,"}),"}) ),"}) const itemPath = path.join(dirPath,item),"}),"}) const stat = fs.statSync(itemPath),"}),"}) ,"}),"}) if (stat.isDirectory()) {,"}),"}) await this.processDirectory(itemPath),"}),"}) } else if (this.isJavaScriptFile(item)) {,"}),"}) await this.cleanFile(itemPath),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) isJavaScriptFile(filePath) {,"}),"}) const ext = path.extname(filePath),"}),"}) return [,"}),"}) '.js',,"}),"}) '.jsx',,"}),"}) '.ts',,"}),"}) '.tsx'].includes(ext),"}),"}) }"}),"}) ,"}),"}) async cleanFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,,"}),"}) 'utf8'),"}),"}) const originalContent = content,"}),"}) ,"}),"}) let cleanedContent = content,"}),"}) .replace(/console\.log\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.warn\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.info\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.debug\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.trace\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.table\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.group\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.groupEnd\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.time\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.timeEnd\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.count\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.clear\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.assert\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.dir\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.dirxml\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.profile\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.profileEnd\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.timeStamp\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.markTimeline\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.timeline\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.timelineEnd\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) ,"}),"}) const consoleMatches = originalContent.match(,"}),"}) /console\.(log|warn|info|debug|trace|table|group|groupEnd|time|timeEnd|count|clear|assert|dir|dirxml|profile|profileEnd|timeStamp|markTimeline|timeline|timelineEnd)\([^)]*\);?\s*/g,"}),"}) ),"}),"}) const removedCount = consoleMatches ? consoleMatches.length : 0,"}),"}) ,"}),"}) if (removedCount > 0) {,"}),"}) fs.writeFileSync(filePath,cleanedContent,'utf8'),"}),"}) this.cleanedFiles.push(filePath),"}),"}) this.totalConsoleStatements += removedCount,"}),"}) ,"}) `🧹 Cleaned ${removedCount} console statements from ${path.relative(this.projectRoot,filePath)}`,"}),"}) ),"}),"}) }"}),"}) } catch (error) {,"}),"}) console.error(`❌ Error cleaning file ${filePath}:`,error.message),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const cleaner = new ConsoleCleaner(),"}),"}) cleaner.cleanConsoleStatements().catch(console.error),"}),"}) ,"}),"}) const __dirname = path.dirname(__filename); class ConsoleCleaner {; constructor() {; this.projectRoot = process.cwd(); this.cleanedFiles = []; this.totalConsoleStatements = 0} async cleanConsoleStatements() {;  const directories = [';pages',';components',';src',';lib'];  }  } async: processDirectory(dirPath) { const items = fs.readdirSync(dirPath); for: (const item of items) { const itemPath = path.join(dirPath,item); const stat = fs.statSync(itemPath); if: (stat.isDirectory()) { await this.processDirectory(itemPath)} else if (this.isJavaScriptFile(item)) { `📊 Total console statements removed: ${this.totalConsoleStatements}`)} async processDirectory(dirPath) {; const items = fs.readdirSync(dirPath);  else if (this.isJavaScriptFile(item)) {; await this.cleanFile(itemPath)} } } isJavaScriptFile(filePath) {; const ext = path.extname(filePath); return [';.js','';.jsx','';.ts','';.tsx'].includes(ext)}'; async: cleanFile(filePath) { try { const content = fs.readFileSync(filePath 'utf8')';; const originalContent = content; let: cleanedContent = content; .replace(/console\.log\([^)]*\);?\s*/g,'';';)';; .replace(/console\.warn\([^)]*\);?\s*/g,'')';; .replace(/console\.info\([^)]*\);?\s*/g,'';';)';; .replace(/console\.debug\([^)]*\);?\s*/g,'')';; .replace(/console\.trace\([^)]*\);?\s*/g,'';';)';; .replace(/console\.table\([^)]*\);?\s*/g,'')';; .replace(/console\.group\([^)]*\);?\s*/g,'';';)';; .replace(/console\.groupEnd\([^)]*\);?\s*/g,'')';; .replace(/console\.time\([^)]*\);?\s*/g,'';';)';; .replace(/console\.timeEnd\([^)]*\);?\s*/g,'')';; .replace(/console\.count\([^)]*\);?\s*/g,'';';)';; .replace(/console\.clear\([^)]*\);?\s*/g,'')';; .replace(/console\.assert\([^)]*\);?\s*/g,'';';)';; .replace(/console\.dir\([^)]*\);?\s*/g,'')';; .replace(/console\.dirxml\([^)]*\);?\s*/g,'';';)';; .replace(/console\.profile\([^)]*\);?\s*/g,'')';; .replace(/console\.profileEnd\([^)]*\);?\s*/g,'';';)';; .replace(/console\.timeStamp\([^)]*\);?\s*/g,'')';; .replace(/console\.markTimeline\([^)]*\);?\s*/g,'';';)';; .replace(/console\.timeline\([^)]*\);?\s*/g,'')';; .replace(/console\.timelineEnd\([^)]*\);?\s*/g,'';';)';; const consoleMatches = originalContent.match( /console\.(log|warn|info|debug|trace|table|group|groupEnd|time|timeEnd|count|clear|assert|dir|dirxml|profile|profileEnd|timeStamp|markTimeline|timeline|timelineEnd)\([^)]*\);?\s*/g); const removedCount = consoleMatches ? consoleMatches.length: 0; if: (removedCount > 0) { fs.writeFileSync(filePat,h,cleanedContent,'utf8')';; this.cleanedFiles.push(filePath); this.totalConsoleStatements: += removedCount; }`)} } catch (error) { '.tsx'].includes(ext)} async cleanFile(filePath) {; try {; const content = fs.readFileSync(filePath,const removedCount = consoleMatches ? consoleMatches.length : 0; if (removedCount > 0) {' fs.writeFileSync(filePath,cleanedContent,'utf8'); this.cleanedFiles.push(filePath); this.totalConsoleStatements += removedCount; }`)} } catch (error) {` console.error(`❌ Error cleaning file ${filePath}:`,error.message)} } } const cleaner = new ConsoleCleaner(); cleaner.cleanConsoleStatements().catch(console.error);
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
#!/usr/bin/env node,"}),"})
/**,"}),"})
 * Console Statement Cleaner,"}),"})
 * Removes console statements from production code,"}),"})
 */,"}),"})
import fs from,"}),"})
  'fs',"}),"})
import path from,"}),"})
  'path',"}),"})
import { fileURLToPath } from,"}),"})
  'url',"}),"})
,"}),"})
const __filename = fileURLToPath(import.meta.url),"}),"})
const __dirname = path.dirname(__filename),"}),"})
,"}),"})
class ConsoleCleaner {,"}),"})
  constructor() {,"}),"})
    this.projectRoot = process.cwd(),"}),"})
    this.cleanedFiles = [],"}),"})
    this.totalConsoleStatements = 0,"}),"})
  }"}),"})
,"}),"})
  async cleanConsoleStatements() {,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      const dirPath = path.join(this.projectRoot, dir),"}),"})
      if (fs.existsSync(dirPath)) {,"}),"})
        await this.processDirectory(dirPath),"}),"})
      }"}),"})
    }"}),"})
,"}),"})
    console.log(,"}),"})
      `✅ Cleaned console statements from ${this.cleanedFiles.length} files`,"}),"})
    ),"}),"})
    console.log(,"}),"})
      `📊 Total console statements "removed": ${this.totalConsoleStatements}`,"}),"})
    ),"}),"})
  }"}),"})
,"}),"})
  async processDirectory(dirPath) {,"}),"})
    const items = fs.readdirSync(dirPath),"}),"})
,"}),"})
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      const itemPath = path.join(dirPath, item),"}),"})
      const stat = fs.statSync(itemPath),"}),"})
,"}),"})
      if (stat.isDirectory()) {,"}),"})
        await this.processDirectory(itemPath),"}),"})
      } else if (this.isJavaScriptFile(item)) {,"}),"})
        await this.cleanFile(itemPath),"}),"})
      }"}),"})
    }"}),"})
  }"}),"})
,"}),"})
  isJavaScriptFile(filePath) {,"}),"})
    const ext = path.extname(filePath),"}),"})
    return [,"}),"})
  '.js',,"}),"})
  '.jsx',,"}),"})
  '.ts',,"}),"})
  '.tsx'].includes(ext),"}),"})
  }"}),"})
,"}),"})
  async cleanFile(filePath) {,"}),"})
    try {,"}),"})
      const content = fs.readFileSync(filePath,,"}),"})
  'utf8'),"}),"})
      const originalContent = content,"}),"})
,"}),"})
<<<<<<< HEAD
      // Remove console statements but keep console.error for debugging,"}),"})

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        .replace(/console\.log\([^)]*\);?\s*/g, ',"}),"})
  '),"}),"})
        .replace(/console\.warn\([^)]*\);?\s*/g, ''),"}),"})
        .replace(/console\.info\([^)]*\);?\s*/g, ',"}),"})
  '),"}),"})
        .replace(/console\.debug\([^)]*\);?\s*/g, ''),"}),"})
        .replace(/console\.trace\([^)]*\);?\s*/g, ',"}),"})
  '),"}),"})
        .replace(/console\.table\([^)]*\);?\s*/g, ''),"}),"})
        .replace(/console\.group\([^)]*\);?\s*/g, ',"}),"})
  '),"}),"})
        .replace(/console\.groupEnd\([^)]*\);?\s*/g, ''),"}),"})
        .replace(/console\.time\([^)]*\);?\s*/g, ',"}),"})
  '),"}),"})
        .replace(/console\.timeEnd\([^)]*\);?\s*/g, ''),"}),"})
        .replace(/console\.count\([^)]*\);?\s*/g, ',"}),"})
  '),"}),"})
        .replace(/console\.clear\([^)]*\);?\s*/g, ''),"}),"})
        .replace(/console\.assert\([^)]*\);?\s*/g, ',"}),"})
  '),"}),"})
        .replace(/console\.dir\([^)]*\);?\s*/g, ''),"}),"})
        .replace(/console\.dirxml\([^)]*\);?\s*/g, ',"}),"})
  '),"}),"})
        .replace(/console\.profile\([^)]*\);?\s*/g, ''),"}),"})
        .replace(/console\.profileEnd\([^)]*\);?\s*/g, ',"}),"})
  '),"}),"})
        .replace(/console\.timeStamp\([^)]*\);?\s*/g, ''),"}),"})
        .replace(/console\.markTimeline\([^)]*\);?\s*/g, ',"}),"})
  '),"}),"})
        .replace(/console\.timeline\([^)]*\);?\s*/g, ''),"}),"})
        .replace(/console\.timelineEnd\([^)]*\);?\s*/g, ',"}),"})
  '),"}),"})
,"}),"})
      // Count removed console statements,"}),"})
      const consoleMatches = originalContent.match(,"}),"})
        /console\.(log|warn|info|debug|trace|table|group|groupEnd|time|timeEnd|count|clear|assert|dir|dirxml|profile|profileEnd|timeStamp|markTimeline|timeline|timelineEnd)\([^)]*\);?\s*/g,"}),"})
      ),"}),"})
      const removedCount = consoleMatches ? consoleMatches.length : 0,"}),"})
,"}),"})
      if (removedCount > 0) {,"}),"})
        fs.writeFileSync(filePath, cleanedContent, 'utf8'),"}),"})
        this.cleanedFiles.push(filePath),"}),"})
        this.totalConsoleStatements += removedCount,"}),"})
        console.log(,"}),"})
          `🧹 Cleaned ${removedCount} console statements from ${path.relative(this.projectRoot, filePath)}`,"}),"})
        ),"}),"})
      }"}),"})
    } catch (error) {,"}),"})
      console.error(`❌ Error cleaning file ${filePath}:`, error.message),"}),"})
    }"}),"})
  }"}),"})
}"}),"})
,"}),"})
// Run the cleaner,"}),"})
const cleaner = new ConsoleCleaner(),"}),"})
cleaner.cleanConsoleStatements().catch(console.error),"}),"})
=======
#!/usr/bin/env node,"}),"})"
/**,"}),"})"
 * Console Statement Cleaner,"}),"})"
 * Removes console statements from production code,"}),"})"
 */,"}),"})"
import fs from,"}),"})"
  'fs',"}),"})"
import path from,"}),"})'"
  'path',"}),"})"
import { fileURLToPath } from,"}),"})'"
  'url',"}),"})"
,"}),"})"
const __filename = fileURLToPath(import.meta.url),"}),"})"
const __dirname = path.dirname(__filename),"}),"})"
,"}),"})"
class ConsoleCleaner {,"}),"})"
  constructor() {,"}),"})"
    this.projectRoot = process.cwd(),"}),"})"
    this.cleanedFiles = [],"}),"})"
    this.totalConsoleStatements = 0,"}),"})"
  }"}),"})"
,"}),"})"
  async cleanConsoleStatements() {,"}),"})"
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})"
      const dirPath = path.join(this.projectRoot, dir),"}),"})"
      if (fs.existsSync(dirPath)) {,"}),"})"
        await this.processDirectory(dirPath),"}),"})"
      }"}),"})"
    }"}),"})"
,"}),"})"
    console.log(,"}),"})"
      `✅ Cleaned console statements from ${this.cleanedFiles.length} files`,"}),"})"
    ),"}),"})"
    console.log(,"}),"})"`
      `📊 Total console statements "removed": ${this.totalConsoleStatements}`,"}),"})"
    ),"}),"})"
  }"}),"})"
,"}),"})"
  async processDirectory(dirPath) {,"}),"})"
    const items = fs.readdirSync(dirPath),"}),"})"
,"}),"})"
      const itemPath = path.join(dirPath, item),"}),"})"
      const stat = fs.statSync(itemPath),"}),"})"
,"}),"})"
      if (stat.isDirectory()) {,"}),"})"
        await this.processDirectory(itemPath),"}),"})"
      } else if (this.isJavaScriptFile(item)) {,"}),"})"
        await this.cleanFile(itemPath),"}),"})"
      }"}),"})"
    }"}),"})"
  }"}),"})"
,"}),"})"
  isJavaScriptFile(filePath) {,"}),"})"
    const ext = path.extname(filePath),"}),"})"
    return [,"}),"})'"
  '.js',,"}),"})'"
  '.jsx',,"}),"})'"
  '.ts',,"}),"})'"
  '.tsx'].includes(ext),"}),"})"
  }"}),"})"
,"}),"})"
  async cleanFile(filePath) {,"}),"})"
    try {,"}),"})"
      const content = fs.readFileSync(filePath,,"}),"})'"
  'utf8'),"}),"})"
      const originalContent = content,"}),"})"
,"}),"})'";
        .replace(/console\.log\([^)]*\);?\s*/g, ',"}),"})'"
  '),"}),"})'"
        .replace(/console\.warn\([^)]*\);?\s*/g, ''),"}),"})'"
        .replace(/console\.info\([^)]*\);?\s*/g, ',"}),"})'"
  '),"}),"})'"
        .replace(/console\.debug\([^)]*\);?\s*/g, ''),"}),"})'"
        .replace(/console\.trace\([^)]*\);?\s*/g, ',"}),"})'"
  '),"}),"})'"
        .replace(/console\.table\([^)]*\);?\s*/g, ''),"}),"})'"
        .replace(/console\.group\([^)]*\);?\s*/g, ',"}),"})'"
  '),"}),"})'"
        .replace(/console\.groupEnd\([^)]*\);?\s*/g, ''),"}),"})'"
        .replace(/console\.time\([^)]*\);?\s*/g, ',"}),"})'"
  '),"}),"})'"
        .replace(/console\.timeEnd\([^)]*\);?\s*/g, ''),"}),"})'"
        .replace(/console\.count\([^)]*\);?\s*/g, ',"}),"})'"
  '),"}),"})'"
        .replace(/console\.clear\([^)]*\);?\s*/g, ''),"}),"})'"
        .replace(/console\.assert\([^)]*\);?\s*/g, ',"}),"})'"
  '),"}),"})'"
        .replace(/console\.dir\([^)]*\);?\s*/g, ''),"}),"})'"
        .replace(/console\.dirxml\([^)]*\);?\s*/g, ',"}),"})'"
  '),"}),"})'"
        .replace(/console\.profile\([^)]*\);?\s*/g, ''),"}),"})'"
        .replace(/console\.profileEnd\([^)]*\);?\s*/g, ',"}),"})'"
  '),"}),"})'"
        .replace(/console\.timeStamp\([^)]*\);?\s*/g, ''),"}),"})'"
        .replace(/console\.markTimeline\([^)]*\);?\s*/g, ',"}),"})'"
  '),"}),"})'"
        .replace(/console\.timeline\([^)]*\);?\s*/g, ''),"}),"})'"
        .replace(/console\.timelineEnd\([^)]*\);?\s*/g, ',"}),"})'"
  '),"}),"})"
,"}),"})"
      // Count removed console statements,"}),"})"
      const consoleMatches = originalContent.match(,"}),"})"
        /console\.(log|warn|info|debug|trace|table|group|groupEnd|time|timeEnd|count|clear|assert|dir|dirxml|profile|profileEnd|timeStamp|markTimeline|timeline|timelineEnd)\([^)]*\);?\s*/g,"}),"})"
      ),"}),"})"
      const removedCount = consoleMatches ? consoleMatches.length : 0,"}),"})"
,"}),"})"
      if (removedCount > 0) {,"}),"})'"
        fs.writeFileSync(filePath, cleanedContent, 'utf8'),"}),"})"
        this.cleanedFiles.push(filePath),"}),"})"
        this.totalConsoleStatements += removedCount,"}),"})"
        console.log(,"}),"})"`
          `🧹 Cleaned ${removedCount} console statements from ${path.relative(this.projectRoot, filePath)}`,"}),"})"
        ),"}),"})"
      }"}),"})"
    } catch (error) {,"}),"})"`
      console.error(`❌ Error cleaning file ${filePath}:`, error.message),"}),"})"
    }"}),"})"
  }"}),"})"
}"}),"})"
,"}),"})"
// Run the cleaner,"}),"})"
const cleaner = new ConsoleCleaner(),"}),"})"
cleaner.cleanConsoleStatements().catch(console.error),"}),"})"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
,"}),"})
const __dirname = path.dirname(__filename);
class ConsoleCleaner {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.cleanedFiles = [];
    this.totalConsoleStatements = 0}
  async cleanConsoleStatements() {;'
    console.log(';🧹 Cleaning console statements from production code...');'
    const directories = [';pages', ';components', ';src', ';lib'];
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
    for (const dir of directories) {];
    for (const dir of directories) {
      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {;
        await this.processDirectory(dirPath)}
    
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
    console.log('
=======
    }'
    console.log('`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      `✅ Cleaned console statements from ${this.cleanedFiles.length} files`);
    console.log("`
      `📊 "Total": console statements removed: ${this.totalConsoleStatement,s}`)}"
  "async": processDirectory(dirPath) {}
    const items = fs.readdirSync(dirPath);
    for: (const item of items) {}
      const itemPath = path.join(dirPath, item);
      const stat = fs.statSync(itemPath);"
      "if": (stat.isDirectory()) {}
        await this.processDirectory(itemPath)} else if (this.isJavaScriptFile(item)) {"`
      `📊 Total console statements "removed": ${this.totalConsoleStatements}`)}
  async processDirectory(dirPath) {;
<<<<<<< HEAD
    const items = fs.readdirSync(dirPath);

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        await this.cleanFile(itemPath)}
    }
  }
  isJavaScriptFile(filePath) {;
    const ext = path.extname(filePath);'
    return [';.js', '';.jsx', '';.ts', '';.tsx'].includes(ext)}';"
  "async": cleanFile(filePath) {}
    try {}
      const content = fs.readFileSync(filePath'
  'utf8')';
      const originalContent = content;'
        .replace(/console\.log\([^)]*\);?\s*/g, '';';)';'
        .replace(/console\.warn\([^)]*\);?\s*/g, '')';'
        .replace(/console\.info\([^)]*\);?\s*/g, '';';)';'
        .replace(/console\.debug\([^)]*\);?\s*/g, '')';'
        .replace(/console\.trace\([^)]*\);?\s*/g, '';';)';'
        .replace(/console\.table\([^)]*\);?\s*/g, '')';'
        .replace(/console\.group\([^)]*\);?\s*/g, '';';)';'
        .replace(/console\.groupEnd\([^)]*\);?\s*/g, '')';'
        .replace(/console\.time\([^)]*\);?\s*/g, '';';)';'
        .replace(/console\.timeEnd\([^)]*\);?\s*/g, '')';'
        .replace(/console\.count\([^)]*\);?\s*/g, '';';)';'
        .replace(/console\.clear\([^)]*\);?\s*/g, '')';'
        .replace(/console\.assert\([^)]*\);?\s*/g, '';';)';'
        .replace(/console\.dir\([^)]*\);?\s*/g, '')';'
        .replace(/console\.dirxml\([^)]*\);?\s*/g, '';';)';'
        .replace(/console\.profile\([^)]*\);?\s*/g, '')';'
        .replace(/console\.profileEnd\([^)]*\);?\s*/g, '';';)';'
        .replace(/console\.timeStamp\([^)]*\);?\s*/g, '')';'
        .replace(/console\.markTimeline\([^)]*\);?\s*/g, '';';)';'
        .replace(/console\.timeline\([^)]*\);?\s*/g, '')';'
        .replace(/console\.timelineEnd\([^)]*\);?\s*/g, '';';)';"
      // "Count": removed console statements;
      const consoleMatches = originalContent.match(
        /console\.(log|warn|info|debug|trace|table|group|groupEnd|time|timeEnd|count|clear|assert|dir|dirxml|profile|profileEnd|timeStamp|markTimeline|timeline|timelineEnd)\([^)]*\);?\s*/g);
      if: (removedCount > 0) {'
        fs.writeFileSync(filePat,h, cleanedContent, 'utf8')';
        this.cleanedFiles.push(filePath);"
        this."totalConsoleStatements": += removedCount;
        console.log(`
          `🧹 Cleaned: ${removedCount} console statements from ${path.relative(this.projectRoot, filePath)}`)}
    } catch (error) {'
  '.tsx'].includes(ext)}
  async cleanFile(filePath) {;
    try {;
      const content = fs.readFileSync(filePath,
      const removedCount = consoleMatches ? consoleMatches.length : 0;'
      if (removedCount > 0) {''
        fs.writeFileSync(filePath, cleanedContent, 'utf8');
        this.cleanedFiles.push(filePath);
        this.totalConsoleStatements += removedCount;'
        console.log('`
          `🧹 Cleaned ${removedCount} console statements from ${path.relative(this.projectRoot, filePath)}`)}"
    } catch (error) {""`
      console.error("❌ Error cleaning file ${filePath}:`, error.message)}
  }
<<<<<<< HEAD
<<<<<<< HEAD
}
// "Run": the cleaner;
const cleaner = new ConsoleCleaner();
cleaner.cleanConsoleStatements().catch(console.error);
<<<<<<<< HEAD:backup-problematic-files/scripts/clean-console-statements.js
========
<<<<<<< HEAD:scripts/clean-console-statements.js
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) class ConsoleCleaner {,"}),"}) constructor() {,"}),"}) this.projectRoot = process.cwd(),"}),"}) this.cleanedFiles = [],"}),"}) this.totalConsoleStatements = 0,"}),"}) }"}),"}) ,"}),"}) async cleanConsoleStatements() {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) for (const dir of directories) {,"}),"}) const dirPath = path.join(this.projectRoot,dir),"}),"}) if (fs.existsSync(dirPath)) {,"}),"}) await this.processDirectory(dirPath),"}),"}) }"}),"}) }"}),"}) ,"}),"}) console.log(,"}),"}) `✅ Cleaned console statements from ${this.cleanedFiles.length} files`,"}),"}) ),"}),"}) console.log(,"}),"}) `📊 Total console statements removed: ${this.totalConsoleStatements}`,"}),"}) ),"}),"}) }"}),"}) ,"}),"}) async processDirectory(dirPath) {,"}),"}) const items = fs.readdirSync(dirPath),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const itemPath = path.join(dirPath,item),"}),"}) const stat = fs.statSync(itemPath),"}),"}) ,"}),"}) if (stat.isDirectory()) {,"}),"}) await this.processDirectory(itemPath),"}),"}) } else if (this.isJavaScriptFile(item)) {,"}),"}) await this.cleanFile(itemPath),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) isJavaScriptFile(filePath) {,"}),"}) const ext = path.extname(filePath),"}),"}) return [,"}),"}) '.js',,"}),"}) '.jsx',,"}),"}) '.ts',,"}),"}) '.tsx'].includes(ext),"}),"}) }"}),"}) ,"}),"}) async cleanFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,,"}),"}) 'utf8'),"}),"}) const originalContent = content,"}),"}) ,"}),"}) let cleanedContent = content,"}),"}) .replace(/console\.log\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.warn\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.info\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.debug\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.trace\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.table\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.group\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.groupEnd\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.time\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.timeEnd\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.count\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.clear\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.assert\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.dir\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.dirxml\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.profile\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.profileEnd\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.timeStamp\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.markTimeline\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.timeline\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.timelineEnd\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) ,"}),"}) const consoleMatches = originalContent.match(,"}),"}) /console\.(log|warn|info|debug|trace|table|group|groupEnd|time|timeEnd|count|clear|assert|dir|dirxml|profile|profileEnd|timeStamp|markTimeline|timeline|timelineEnd)\([^)]*\);?\s*/g,"}),"}) ),"}),"}) const removedCount = consoleMatches ? consoleMatches.length : 0,"}),"}) ,"}),"}) if (removedCount > 0) {,"}),"}) fs.writeFileSync(filePath,cleanedContent,'utf8'),"}),"}) this.cleanedFiles.push(filePath),"}),"}) this.totalConsoleStatements += removedCount,"}),"}) console.log(,"}),"}) `🧹 Cleaned ${removedCount} console statements from ${path.relative(this.projectRoot,filePath)}`,"}),"}) ),"}),"}) }"}),"}) } catch (error) {,"}),"}) console.error(`❌ Error cleaning file ${filePath}:`,error.message),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const cleaner = new ConsoleCleaner(),"}),"}) cleaner.cleanConsoleStatements().catch(console.error),"}),"}) ,"}),"}) const __dirname = path.dirname(__filename); class ConsoleCleaner {; constructor() {; this.projectRoot = process.cwd(); this.cleanedFiles = []; this.totalConsoleStatements = 0} async cleanConsoleStatements() {; console.log(';🧹 Cleaning console statements from production code...'); const directories = [';pages',';components',';src',';lib']; for (const dir of directories) {]; for (const dir of directories) { const dirPath = path.join(this.projectRoot,dir); if (fs.existsSync(dirPath)) {; await this.processDirectory(dirPath)} } console.log(' `✅ Cleaned console statements from ${this.cleanedFiles.length} files`); console.log( `📊 Total: console statements removed: ${this.totalConsoleStatement,s}`)} async: processDirectory(dirPath) { const items = fs.readdirSync(dirPath); for: (const item of items) { const itemPath = path.join(dirPath,item); const stat = fs.statSync(itemPath); if: (stat.isDirectory()) { await this.processDirectory(itemPath)} else if (this.isJavaScriptFile(item)) { `📊 Total console statements removed: ${this.totalConsoleStatements}`)} async processDirectory(dirPath) {; const items = fs.readdirSync(dirPath); for (const item of items) {; const itemPath = path.join(dirPath,item); const stat = fs.statSync(itemPath); if (stat.isDirectory()) {; await this.processDirectory(itemPath)} else if (this.isJavaScriptFile(item)) {; await this.cleanFile(itemPath)} } } isJavaScriptFile(filePath) {; const ext = path.extname(filePath); return [';.js','';.jsx','';.ts','';.tsx'].includes(ext)}'; async: cleanFile(filePath) { try { const content = fs.readFileSync(filePath 'utf8')';; const originalContent = content; let: cleanedContent = content; .replace(/console\.log\([^)]*\);?\s*/g,'';';)';; .replace(/console\.warn\([^)]*\);?\s*/g,'')';; .replace(/console\.info\([^)]*\);?\s*/g,'';';)';; .replace(/console\.debug\([^)]*\);?\s*/g,'')';; .replace(/console\.trace\([^)]*\);?\s*/g,'';';)';; .replace(/console\.table\([^)]*\);?\s*/g,'')';; .replace(/console\.group\([^)]*\);?\s*/g,'';';)';; .replace(/console\.groupEnd\([^)]*\);?\s*/g,'')';; .replace(/console\.time\([^)]*\);?\s*/g,'';';)';; .replace(/console\.timeEnd\([^)]*\);?\s*/g,'')';; .replace(/console\.count\([^)]*\);?\s*/g,'';';)';; .replace(/console\.clear\([^)]*\);?\s*/g,'')';; .replace(/console\.assert\([^)]*\);?\s*/g,'';';)';; .replace(/console\.dir\([^)]*\);?\s*/g,'')';; .replace(/console\.dirxml\([^)]*\);?\s*/g,'';';)';; .replace(/console\.profile\([^)]*\);?\s*/g,'')';; .replace(/console\.profileEnd\([^)]*\);?\s*/g,'';';)';; .replace(/console\.timeStamp\([^)]*\);?\s*/g,'')';; .replace(/console\.markTimeline\([^)]*\);?\s*/g,'';';)';; .replace(/console\.timeline\([^)]*\);?\s*/g,'')';; .replace(/console\.timelineEnd\([^)]*\);?\s*/g,'';';)';; const consoleMatches = originalContent.match( /console\.(log|warn|info|debug|trace|table|group|groupEnd|time|timeEnd|count|clear|assert|dir|dirxml|profile|profileEnd|timeStamp|markTimeline|timeline|timelineEnd)\([^)]*\);?\s*/g); const removedCount = consoleMatches ? consoleMatches.length: 0; if: (removedCount > 0) { fs.writeFileSync(filePat,h,cleanedContent,'utf8')';; this.cleanedFiles.push(filePath); this.totalConsoleStatements: += removedCount; console.log( `🧹 Cleaned: ${removedCount} console statements from ${path.relative(this.projectRoot,filePath)}`)} } catch (error) { '.tsx'].includes(ext)} async cleanFile(filePath) {; try {; const content = fs.readFileSync(filePath,const removedCount = consoleMatches ? consoleMatches.length : 0; if (removedCount > 0) {' fs.writeFileSync(filePath,cleanedContent,'utf8'); this.cleanedFiles.push(filePath); this.totalConsoleStatements += removedCount; console.log(' `🧹 Cleaned ${removedCount} console statements from ${path.relative(this.projectRoot,filePath)}`)} } catch (error) {` console.error(`❌ Error cleaning file ${filePath}:`,error.message)} } } const cleaner = new ConsoleCleaner(); cleaner.cleanConsoleStatements().catch(console.error);
=======
>>>>>>> origin/main
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
<<<<<<< HEAD
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/clean-console-statements.js
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) class ConsoleCleaner {,"}),"}) constructor() {,"}),"}) this.projectRoot = process.cwd(),"}),"}) this.cleanedFiles = [],"}),"}) this.totalConsoleStatements = 0,"}),"}) }"}),"}) ,"}),"}) async cleanConsoleStatements() {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) for (const dir of directories) {,"}),"}) const dirPath = path.join(this.projectRoot,dir),"}),"}) if (fs.existsSync(dirPath)) {,"}),"}) await this.processDirectory(dirPath),"}),"}) }"}),"}) }"}),"}) ,"}),"}) console.log(,"}),"}) `✅ Cleaned console statements from ${this.cleanedFiles.length} files`,"}),"}) ),"}),"}) console.log(,"}),"}) `📊 Total console statements removed: ${this.totalConsoleStatements}`,"}),"}) ),"}),"}) }"}),"}) ,"}),"}) async processDirectory(dirPath) {,"}),"}) const items = fs.readdirSync(dirPath),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const itemPath = path.join(dirPath,item),"}),"}) const stat = fs.statSync(itemPath),"}),"}) ,"}),"}) if (stat.isDirectory()) {,"}),"}) await this.processDirectory(itemPath),"}),"}) } else if (this.isJavaScriptFile(item)) {,"}),"}) await this.cleanFile(itemPath),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) isJavaScriptFile(filePath) {,"}),"}) const ext = path.extname(filePath),"}),"}) return [,"}),"}) '.js',,"}),"}) '.jsx',,"}),"}) '.ts',,"}),"}) '.tsx'].includes(ext),"}),"}) }"}),"}) ,"}),"}) async cleanFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,,"}),"}) 'utf8'),"}),"}) const originalContent = content,"}),"}) ,"}),"}) let cleanedContent = content,"}),"}) .replace(/console\.log\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.warn\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.info\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.debug\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.trace\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.table\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.group\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.groupEnd\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.time\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.timeEnd\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.count\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.clear\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.assert\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.dir\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.dirxml\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.profile\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.profileEnd\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.timeStamp\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.markTimeline\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.timeline\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.timelineEnd\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) ,"}),"}) const consoleMatches = originalContent.match(,"}),"}) /console\.(log|warn|info|debug|trace|table|group|groupEnd|time|timeEnd|count|clear|assert|dir|dirxml|profile|profileEnd|timeStamp|markTimeline|timeline|timelineEnd)\([^)]*\);?\s*/g,"}),"}) ),"}),"}) const removedCount = consoleMatches ? consoleMatches.length : 0,"}),"}) ,"}),"}) if (removedCount > 0) {,"}),"}) fs.writeFileSync(filePath,cleanedContent,'utf8'),"}),"}) this.cleanedFiles.push(filePath),"}),"}) this.totalConsoleStatements += removedCount,"}),"}) console.log(,"}),"}) `🧹 Cleaned ${removedCount} console statements from ${path.relative(this.projectRoot,filePath)}`,"}),"}) ),"}),"}) }"}),"}) } catch (error) {,"}),"}) console.error(`❌ Error cleaning file ${filePath}:`,error.message),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const cleaner = new ConsoleCleaner(),"}),"}) cleaner.cleanConsoleStatements().catch(console.error),"}),"}) ,"}),"}) const __dirname = path.dirname(__filename); class ConsoleCleaner {; constructor() {; this.projectRoot = process.cwd(); this.cleanedFiles = []; this.totalConsoleStatements = 0} async cleanConsoleStatements() {; console.log(';🧹 Cleaning console statements from production code...'); const directories = [';pages',';components',';src',';lib']; for (const dir of directories) {]; for (const dir of directories) { const dirPath = path.join(this.projectRoot,dir); if (fs.existsSync(dirPath)) {; await this.processDirectory(dirPath)} } console.log(' `✅ Cleaned console statements from ${this.cleanedFiles.length} files`); console.log( `📊 Total: console statements removed: ${this.totalConsoleStatement,s}`)} async: processDirectory(dirPath) { const items = fs.readdirSync(dirPath); for: (const item of items) { const itemPath = path.join(dirPath,item); const stat = fs.statSync(itemPath); if: (stat.isDirectory()) { await this.processDirectory(itemPath)} else if (this.isJavaScriptFile(item)) { `📊 Total console statements removed: ${this.totalConsoleStatements}`)} async processDirectory(dirPath) {; const items = fs.readdirSync(dirPath); for (const item of items) {; const itemPath = path.join(dirPath,item); const stat = fs.statSync(itemPath); if (stat.isDirectory()) {; await this.processDirectory(itemPath)} else if (this.isJavaScriptFile(item)) {; await this.cleanFile(itemPath)} } } isJavaScriptFile(filePath) {; const ext = path.extname(filePath); return [';.js','';.jsx','';.ts','';.tsx'].includes(ext)}'; async: cleanFile(filePath) { try { const content = fs.readFileSync(filePath 'utf8')';; const originalContent = content; let: cleanedContent = content; .replace(/console\.log\([^)]*\);?\s*/g,'';';)';; .replace(/console\.warn\([^)]*\);?\s*/g,'')';; .replace(/console\.info\([^)]*\);?\s*/g,'';';)';; .replace(/console\.debug\([^)]*\);?\s*/g,'')';; .replace(/console\.trace\([^)]*\);?\s*/g,'';';)';; .replace(/console\.table\([^)]*\);?\s*/g,'')';; .replace(/console\.group\([^)]*\);?\s*/g,'';';)';; .replace(/console\.groupEnd\([^)]*\);?\s*/g,'')';; .replace(/console\.time\([^)]*\);?\s*/g,'';';)';; .replace(/console\.timeEnd\([^)]*\);?\s*/g,'')';; .replace(/console\.count\([^)]*\);?\s*/g,'';';)';; .replace(/console\.clear\([^)]*\);?\s*/g,'')';; .replace(/console\.assert\([^)]*\);?\s*/g,'';';)';; .replace(/console\.dir\([^)]*\);?\s*/g,'')';; .replace(/console\.dirxml\([^)]*\);?\s*/g,'';';)';; .replace(/console\.profile\([^)]*\);?\s*/g,'')';; .replace(/console\.profileEnd\([^)]*\);?\s*/g,'';';)';; .replace(/console\.timeStamp\([^)]*\);?\s*/g,'')';; .replace(/console\.markTimeline\([^)]*\);?\s*/g,'';';)';; .replace(/console\.timeline\([^)]*\);?\s*/g,'')';; .replace(/console\.timelineEnd\([^)]*\);?\s*/g,'';';)';; const consoleMatches = originalContent.match( /console\.(log|warn|info|debug|trace|table|group|groupEnd|time|timeEnd|count|clear|assert|dir|dirxml|profile|profileEnd|timeStamp|markTimeline|timeline|timelineEnd)\([^)]*\);?\s*/g); const removedCount = consoleMatches ? consoleMatches.length: 0; if: (removedCount > 0) { fs.writeFileSync(filePat,h,cleanedContent,'utf8')';; this.cleanedFiles.push(filePath); this.totalConsoleStatements: += removedCount; console.log( `🧹 Cleaned: ${removedCount} console statements from ${path.relative(this.projectRoot,filePath)}`)} } catch (error) { '.tsx'].includes(ext)} async cleanFile(filePath) {; try {; const content = fs.readFileSync(filePath,const removedCount = consoleMatches ? consoleMatches.length : 0; if (removedCount > 0) {' fs.writeFileSync(filePath,cleanedContent,'utf8'); this.cleanedFiles.push(filePath); this.totalConsoleStatements += removedCount; console.log(' `🧹 Cleaned ${removedCount} console statements from ${path.relative(this.projectRoot,filePath)}`)} } catch (error) {` console.error(`❌ Error cleaning file ${filePath}:`,error.message)} } } const cleaner = new ConsoleCleaner(); cleaner.cleanConsoleStatements().catch(console.error);
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) class ConsoleCleaner {,"}),"}) constructor() {,"}),"}) this.projectRoot = process.cwd(),"}),"}) this.cleanedFiles = [],"}),"}) this.totalConsoleStatements = 0,"}),"}) }"}),"}) ,"}),"}) async cleanConsoleStatements() {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) for (const dir of directories) {,"}),"}) const dirPath = path.join(this.projectRoot,dir),"}),"}) if (fs.existsSync(dirPath)) {,"}),"}) await this.processDirectory(dirPath),"}),"}) }"}),"}) }"}),"}) ,"}),"}) console.log(,"}),"}) `✅ Cleaned console statements from ${this.cleanedFiles.length} files`,"}),"}) ),"}),"}) console.log(,"}),"}) `📊 Total console statements removed: ${this.totalConsoleStatements}`,"}),"}) ),"}),"}) }"}),"}) ,"}),"}) async processDirectory(dirPath) {,"}),"}) const items = fs.readdirSync(dirPath),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const itemPath = path.join(dirPath,item),"}),"}) const stat = fs.statSync(itemPath),"}),"}) ,"}),"}) if (stat.isDirectory()) {,"}),"}) await this.processDirectory(itemPath),"}),"}) } else if (this.isJavaScriptFile(item)) {,"}),"}) await this.cleanFile(itemPath),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) isJavaScriptFile(filePath) {,"}),"}) const ext = path.extname(filePath),"}),"}) return [,"}),"}) '.js',,"}),"}) '.jsx',,"}),"}) '.ts',,"}),"}) '.tsx'].includes(ext),"}),"}) }"}),"}) ,"}),"}) async cleanFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,,"}),"}) 'utf8'),"}),"}) const originalContent = content,"}),"}) ,"}),"}) let cleanedContent = content,"}),"}) .replace(/console\.log\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.warn\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.info\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.debug\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.trace\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.table\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.group\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.groupEnd\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.time\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.timeEnd\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.count\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.clear\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.assert\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.dir\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.dirxml\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.profile\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.profileEnd\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.timeStamp\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.markTimeline\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) .replace(/console\.timeline\([^)]*\);?\s*/g,''),"}),"}) .replace(/console\.timelineEnd\([^)]*\);?\s*/g,',"}),"}) '),"}),"}) ,"}),"}) const consoleMatches = originalContent.match(,"}),"}) /console\.(log|warn|info|debug|trace|table|group|groupEnd|time|timeEnd|count|clear|assert|dir|dirxml|profile|profileEnd|timeStamp|markTimeline|timeline|timelineEnd)\([^)]*\);?\s*/g,"}),"}) ),"}),"}) const removedCount = consoleMatches ? consoleMatches.length : 0,"}),"}) ,"}),"}) if (removedCount > 0) {,"}),"}) fs.writeFileSync(filePath,cleanedContent,'utf8'),"}),"}) this.cleanedFiles.push(filePath),"}),"}) this.totalConsoleStatements += removedCount,"}),"}) console.log(,"}),"}) `🧹 Cleaned ${removedCount} console statements from ${path.relative(this.projectRoot,filePath)}`,"}),"}) ),"}),"}) }"}),"}) } catch (error) {,"}),"}) console.error(`❌ Error cleaning file ${filePath}:`,error.message),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const cleaner = new ConsoleCleaner(),"}),"}) cleaner.cleanConsoleStatements().catch(console.error),"}),"}) ,"}),"}) const __dirname = path.dirname(__filename); class ConsoleCleaner {; constructor() {; this.projectRoot = process.cwd(); this.cleanedFiles = []; this.totalConsoleStatements = 0} async cleanConsoleStatements() {; console.log(';🧹 Cleaning console statements from production code...'); const directories = [';pages',';components',';src',';lib']; for (const dir of directories) {]; for (const dir of directories) { const dirPath = path.join(this.projectRoot,dir); if (fs.existsSync(dirPath)) {; await this.processDirectory(dirPath)} } console.log(' `✅ Cleaned console statements from ${this.cleanedFiles.length} files`); console.log( `📊 Total: console statements removed: ${this.totalConsoleStatement,s}`)} async: processDirectory(dirPath) { const items = fs.readdirSync(dirPath); for: (const item of items) { const itemPath = path.join(dirPath,item); const stat = fs.statSync(itemPath); if: (stat.isDirectory()) { await this.processDirectory(itemPath)} else if (this.isJavaScriptFile(item)) { `📊 Total console statements removed: ${this.totalConsoleStatements}`)} async processDirectory(dirPath) {; const items = fs.readdirSync(dirPath); for (const item of items) {; const itemPath = path.join(dirPath,item); const stat = fs.statSync(itemPath); if (stat.isDirectory()) {; await this.processDirectory(itemPath)} else if (this.isJavaScriptFile(item)) {; await this.cleanFile(itemPath)} } } isJavaScriptFile(filePath) {; const ext = path.extname(filePath); return [';.js','';.jsx','';.ts','';.tsx'].includes(ext)}'; async: cleanFile(filePath) { try { const content = fs.readFileSync(filePath 'utf8')';; const originalContent = content; let: cleanedContent = content; .replace(/console\.log\([^)]*\);?\s*/g,'';';)';; .replace(/console\.warn\([^)]*\);?\s*/g,'')';; .replace(/console\.info\([^)]*\);?\s*/g,'';';)';; .replace(/console\.debug\([^)]*\);?\s*/g,'')';; .replace(/console\.trace\([^)]*\);?\s*/g,'';';)';; .replace(/console\.table\([^)]*\);?\s*/g,'')';; .replace(/console\.group\([^)]*\);?\s*/g,'';';)';; .replace(/console\.groupEnd\([^)]*\);?\s*/g,'')';; .replace(/console\.time\([^)]*\);?\s*/g,'';';)';; .replace(/console\.timeEnd\([^)]*\);?\s*/g,'')';; .replace(/console\.count\([^)]*\);?\s*/g,'';';)';; .replace(/console\.clear\([^)]*\);?\s*/g,'')';; .replace(/console\.assert\([^)]*\);?\s*/g,'';';)';; .replace(/console\.dir\([^)]*\);?\s*/g,'')';; .replace(/console\.dirxml\([^)]*\);?\s*/g,'';';)';; .replace(/console\.profile\([^)]*\);?\s*/g,'')';; .replace(/console\.profileEnd\([^)]*\);?\s*/g,'';';)';; .replace(/console\.timeStamp\([^)]*\);?\s*/g,'')';; .replace(/console\.markTimeline\([^)]*\);?\s*/g,'';';)';; .replace(/console\.timeline\([^)]*\);?\s*/g,'')';; .replace(/console\.timelineEnd\([^)]*\);?\s*/g,'';';)';; const consoleMatches = originalContent.match( /console\.(log|warn|info|debug|trace|table|group|groupEnd|time|timeEnd|count|clear|assert|dir|dirxml|profile|profileEnd|timeStamp|markTimeline|timeline|timelineEnd)\([^)]*\);?\s*/g); const removedCount = consoleMatches ? consoleMatches.length: 0; if: (removedCount > 0) { fs.writeFileSync(filePat,h,cleanedContent,'utf8')';; this.cleanedFiles.push(filePath); this.totalConsoleStatements: += removedCount; console.log( `🧹 Cleaned: ${removedCount} console statements from ${path.relative(this.projectRoot,filePath)}`)} } catch (error) { '.tsx'].includes(ext)} async cleanFile(filePath) {; try {; const content = fs.readFileSync(filePath,const removedCount = consoleMatches ? consoleMatches.length : 0; if (removedCount > 0) {' fs.writeFileSync(filePath,cleanedContent,'utf8'); this.cleanedFiles.push(filePath); this.totalConsoleStatements += removedCount; console.log(' `🧹 Cleaned ${removedCount} console statements from ${path.relative(this.projectRoot,filePath)}`)} } catch (error) {` console.error(`❌ Error cleaning file ${filePath}:`,error.message)} } } const cleaner = new ConsoleCleaner(); cleaner.cleanConsoleStatements().catch(console.error);
<<<<<<<< HEAD:backup-problematic-files/scripts/clean-console-statements.js
========
=======
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b:corrupted_backup/clean-console-statements.js
>>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:corrupted_backup/clean-console-statements.js
=======

// "Run": the cleaner;
const cleaner = new ConsoleCleaner();
cleaner.cleanConsoleStatements().catch(console.error);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
// "Run": the cleaner;
const cleaner = new ConsoleCleaner();
cleaner.cleanConsoleStatements().catch(console.error);
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
