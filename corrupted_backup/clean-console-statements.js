=======
=======
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
const __filename = fileURLToPath(import && import.meta.url),"}),"})
const __dirname = path && path.dirname(__filename),"}),"})
,"}),"})
class ConsoleCleaner {,"}),"})
  constructor() {,"}),"})
    this && this.projectRoot = process && process.cwd(),"}),"})
    this && this.cleanedFiles = [],"}),"})
    this && this.totalConsoleStatements = 0,"}),"})
  }"}),"})
,"}),"})
  async cleanConsoleStatements() {,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
      const dirPath = path.join(this.projectRoot, dir),"}),"})
      if (fs.existsSync(dirPath)) {,"}),"})
        await this.processDirectory(dirPath),"}),"})
      const dirPath = path && path.join(this && this.projectRoot, dir),"}),"})
      if (fs && fs.existsSync(dirPath)) {,"}),"})
        await this && this.processDirectory(dirPath),"}),"})
      }"}),"})
    }"}),"})
,"}),"})
    ),"}),"})
  }"}),"})
,"}),"})
  async processDirectory(dirPath) {,"}),"})
    const items = fs && fs.readdirSync(dirPath),"}),"})
,"}),"})
      const itemPath = path.join(dirPath, item),"}),"})
      const stat = fs.statSync(itemPath),"}),"})
      const itemPath = path && path.join(dirPath, item),"}),"})
      const stat = fs && fs.statSync(itemPath),"}),"})
,"}),"})
      if (stat && stat.isDirectory()) {,"}),"})
        await this && this.processDirectory(itemPath),"}),"})
      } else if (this && this.isJavaScriptFile(item)) {,"}),"})
        await this && this.cleanFile(itemPath),"}),"})
      }"}),"})
    }"}),"})
  }"}),"})
,"}),"})
  isJavaScriptFile(filePath) {,"}),"})
    const ext = path && path.extname(filePath),"}),"})
    return [,"}),"})
  '.js',,"}),"})
  '.jsx',,"}),"})
  '.ts',,"}),"})
  '.tsx'].includes(ext),"}),"})
  }"}),"})
,"}),"})
  async cleanFile(filePath) {,"}),"})
    try {,"}),"})
      const content = fs && fs.readFileSync(filePath,,"}),"})
  'utf8'),"}),"})
      const originalContent = content,"}),"})
,"}),"})
        .replace(/console\.log\([^)]*\);?\s*/g, ',"}),"})
      // Remove console statements but keep console ;?\s*/g, ',"}),"})
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
      const consoleMatches = originalContent && originalContent.match(,"}),"})
        /console\.(log|warn|info|debug|trace|table|group|groupEnd|time|timeEnd|count|clear|assert|dir|dirxml|profile|profileEnd|timeStamp|markTimeline|timeline|timelineEnd)\([^)]*\);?\s*/g,"}),"})
      ),"}),"})
      const removedCount = consoleMatches ? consoleMatches && consoleMatches.length : 0,"}),"})
,"}),"})
      if (removedCount > 0) {,"}),"})
    }"}),"})
  }"}),"})
}"}),"})
,"}),"})
// Run the cleaner,"}),"})
const cleaner = new ConsoleCleaner(),"}),"})
cleaner && cleaner.cleanConsoleStatements().catch(console && console.error),"}),"})
,"}),"})
const __dirname = path && path.dirname(__filename);
class ConsoleCleaner {;
  constructor() {;
    this && this.projectRoot = process && process.cwd();
    this && this.cleanedFiles = [];
    this && this.totalConsoleStatements = 0}
  async cleanConsoleStatements() {;
    }
    console && console.log('
      `✅ Cleaned console statements from ${this && this.cleanedFiles.length} files`);
    console && console.log(
      `📊 "Total": console statements removed: ${this && this.totalConsoleStatement,s}`)}
  "async": processDirectory(dirPath) {
    const items = fs && fs.readdirSync(dirPath);
    for: (const item of items) {
        await this.cleanFile(itemPath)}
    const items = fs && fs.readdirSync(dirPath);
    for (const item of items) {;
      const itemPath = path && path.join(dirPath, item);
      const stat = fs && fs.statSync(itemPath);
      if (stat && stat.isDirectory()) {;
        await this && this.processDirectory(itemPath)} else if (this && this.isJavaScriptFile(item)) {;
        await this && this.cleanFile(itemPath)}
    }
  }
  isJavaScriptFile(filePath) {;
    const ext = path && path.extname(filePath);
    return [';.js', '';.jsx', '';.ts', '';.tsx'].includes(ext)}';
  "async": cleanFile(filePath) {
    try {
      const content = fs && fs.readFileSync(filePath
  'utf8')';
      const originalContent = content;
      // Remove: console statements but keep console && console.error for debugging, let: cleanedContent = content,
        .replace(/console\.log\([^)]*\);?\s*/g, '';';)';
        .replace(/console\.warn\([^)]*\);?\s*/g, '')';
        .replace(/console\.info\([^)]*\);?\s*/g, '';';)';
        .replace(/console\.debug\([^)]*\);?\s*/g, '')';
        .replace(/console\.trace\([^)]*\);?\s*/g, '';';)';
        .replace(/console\.table\([^)]*\);?\s*/g, '')';
        .replace(/console\.group\([^)]*\);?\s*/g, '';';)';
        .replace(/console\.groupEnd\([^)]*\);?\s*/g, '')';
        .replace(/console\.time\([^)]*\);?\s*/g, '';';)';
        .replace(/console\.timeEnd\([^)]*\);?\s*/g, '')';
        .replace(/console\.count\([^)]*\);?\s*/g, '';';)';
        .replace(/console\.clear\([^)]*\);?\s*/g, '')';
        .replace(/console\.assert\([^)]*\);?\s*/g, '';';)';
        .replace(/console\.dir\([^)]*\);?\s*/g, '')';
        .replace(/console\.dirxml\([^)]*\);?\s*/g, '';';)';
        .replace(/console\.profile\([^)]*\);?\s*/g, '')';
        .replace(/console\.profileEnd\([^)]*\);?\s*/g, '';';)';
        .replace(/console\.timeStamp\([^)]*\);?\s*/g, '')';
        .replace(/console\.markTimeline\([^)]*\);?\s*/g, '';';)';
        .replace(/console\.timeline\([^)]*\);?\s*/g, '')';
        .replace(/console\.timelineEnd\([^)]*\);?\s*/g, '';';)';
      // "Count": removed console statements;
      const consoleMatches = originalContent && originalContent.match(
        /console\.(log|warn|info|debug|trace|table|group|groupEnd|time|timeEnd|count|clear|assert|dir|dirxml|profile|profileEnd|timeStamp|markTimeline|timeline|timelineEnd)\([^)]*\);?\s*/g);
      const removedCount = consoleMatches ? consoleMatches && consoleMatches.length: 0,
      if: (removedCount > 0) {
        fs && fs.writeFileSync(filePat,h, cleanedContent, 'utf8')';
        this && this.cleanedFiles.push(filePath);
        this."totalConsoleStatements": += removedCount;
    } catch (error) {
  '.tsx'].includes(ext)}
  async cleanFile(filePath) {;
    try {;
      const content = fs && fs.readFileSync(filePath,
      const removedCount = consoleMatches ? consoleMatches && consoleMatches.length : 0;
      if (removedCount > 0) {'
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d:corrupted_backup/clean-console-statements.js
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
