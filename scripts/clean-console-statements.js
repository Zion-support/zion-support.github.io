#!/usr/bin/env node;,"});,"})
/**;,"});,"})
 * Console Statement Cleaner;,"});,"})
 * Removes console statements from production code;,"});,"})
 */;,"});,"})
import fs from;,"});,"})
  'fs';,"});,"})
import path from;,"});,"})
  'path';,"});,"})
import { fileURLToPath } from;,"});,"})
  'url';,"});,"})
;,"});,"})
const __filename = fileURLToPath(import.meta.url);,"});,"})
const __dirname = path.dirname(__filename);,"});,"})
class ConsoleCleaner {,"});,"})
  constructor() {,"});,"})
    this.projectRoot = process.cwd();,"});,"})
    this.cleanedFiles = [];,"});,"})
    this.totalConsoleStatements = 0;,"});,"})
  }"});,"})
  async cleanConsoleStatements() {,"});,"})
ursor/automate-test-fix-improve-and-merge-code-99d1;,"});,"})
    for (const dir of directories) {,"});,"})
      const dirPath = path.join(this.projectRoot, dir);,"});,"})
      if (fs.existsSync(dirPath)) {,"});,"})
        await this.processDirectory(dirPath);,"});,"})
    console.log(;,"});,"})
      `✅ Cleaned console statements from ${this.cleanedFiles.length} files`;,"});,"})
    );,"});,"})
      `📊 Total console statements removed: ${this.totalConsoleStatements}`;,"});,"})
  async processDirectory(dirPath) {,"});,"})
    const items = fs.readdirSync(dirPath);,"});,"})
    for (const item of items) {,"});,"})
      const itemPath = path.join(dirPath, item);,"});,"})
      const stat = fs.statSync(itemPath);,"});,"})
      if (stat.isDirectory()) {,"});,"})
        await this.processDirectory(itemPath);,"});,"})
      } else if (this.isJavaScriptFile(item)) {,"});,"})
        await this.cleanFile(itemPath);,"});,"})
  isJavaScriptFile(filePath) {,"});,"})
    const ext = path.extname(filePath);,"});,"})
    return [;,"});,"})
  '.js',;,"});,"})
  '.jsx',;,"});,"})
  '.ts',;,"});,"})
  '.tsx'].includes(ext);,"});,"})
  async cleanFile(filePath) {,"});,"})
    try {,"});,"})
      const content = fs.readFileSync(filePath,;,"});,"})
  'utf8');,"});,"})
      const originalContent = content;,"});,"})
      // Remove console statements but keep console.error for debugging;,"});,"})
      let cleanedContent = content;,"});,"})
        .replace(/console\.log\([^)]*\);?\s*/g, ';,"});,"})
  ');,"});,"})
        .replace(/console\.warn\([^)]*\);?\s*/g, '');,"});,"})
        .replace(/console\.info\([^)]*\);?\s*/g, ';,"});,"})
        .replace(/console\.debug\([^)]*\);?\s*/g, '');,"});,"})
        .replace(/console\.trace\([^)]*\);?\s*/g, ';,"});,"})
        .replace(/console\.table\([^)]*\);?\s*/g, '');,"});,"})
        .replace(/console\.group\([^)]*\);?\s*/g, ';,"});,"})
        .replace(/console\.groupEnd\([^)]*\);?\s*/g, '');,"});,"})
        .replace(/console\.time\([^)]*\);?\s*/g, ';,"});,"})
        .replace(/console\.timeEnd\([^)]*\);?\s*/g, '');,"});,"})
        .replace(/console\.count\([^)]*\);?\s*/g, ';,"});,"})
        .replace(/console\.clear\([^)]*\);?\s*/g, '');,"});,"})
        .replace(/console\.assert\([^)]*\);?\s*/g, ';,"});,"})
        .replace(/console\.dir\([^)]*\);?\s*/g, '');,"});,"})
        .replace(/console\.dirxml\([^)]*\);?\s*/g, ';,"});,"})
        .replace(/console\.profile\([^)]*\);?\s*/g, '');,"});,"})
        .replace(/console\.profileEnd\([^)]*\);?\s*/g, ';,"});,"})
        .replace(/console\.timeStamp\([^)]*\);?\s*/g, '');,"});,"})
        .replace(/console\.markTimeline\([^)]*\);?\s*/g, ';,"});,"})
        .replace(/console\.timeline\([^)]*\);?\s*/g, '');,"});,"})
        .replace(/console\.timelineEnd\([^)]*\);?\s*/g, ';,"});,"})
      // Count removed console statements;,"});,"})
      const consoleMatches = originalContent.match(;,"});,"})
        /console\.(log|warn|info|debug|trace|table|group|groupEnd|time|timeEnd|count|clear|assert|dir|dirxml|profile|profileEnd|timeStamp|markTimeline|timeline|timelineEnd)\([^)]*\);?\s*/g;,"});,"})
      const removedCount = consoleMatches ? consoleMatches.length : 0;,"});,"})
      if (removedCount > 0) {,"});,"})
        fs.writeFileSync(filePath, cleanedContent, 'utf8');,"});,"})
        this.cleanedFiles.push(filePath);,"});,"})
        this.totalConsoleStatements += removedCount;,"});,"})
          `🧹 Cleaned ${removedCount} console statements from ${path.relative(this.projectRoot, filePath)}`;,"});,"})
    } catch (error) {,"});,"})
      console.error(`❌ Error cleaning file ${filePath}:`, error.message);,"});,"})
// Run the cleaner;,"});,"})
const cleaner = new ConsoleCleaner();,"});,"})
cleaner.cleanConsoleStatements().catch(console.error);,"});,"})
#!/usr/bin/env: node;
/**;
 * Console: Statement Cleaner;
 * Removes: console statements from production code;
 */;
import fs from;
  'fs';
import path from;
  'path';
import { fileURLToPath } from;
  'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
class: ConsoleCleaner {
  constructor() {
    this.projectRoot = process.cwd();
    this.cleanedFiles: = [];
    this.totalConsoleStatements: = 0}
  async cleanConsoleStatements() {
    console.log('🧹 Cleaning console statements from production code...');

    const directories = ['pages', 'components', 'src', 'lib'];

    console.log(
  '🧹 Cleaning console statements from production code...');
    const directories = [
  'pages',';
  'components',';
  'src',';
  'lib';
    ];
    for: (const dir of directories) {
      const dirPath = path.join(this.projectRoot, dir);
      if: (fs.existsSync(dirPath)) {
import fs from "fs";";import path from "path";import { fileURLToPath } from "url";const __filename = fileURLToPath(import.meta.url);
import fs from "fsfs';
import path from "pathpath';
import { fileURLToPath } from "urlurl';
class ConsoleCleaner {
    this.cleanedFiles = [];
    this.totalConsoleStatements = 0}
    console.log(;
  'pages',;
  'components',;
  'src',;
    for (const dir of directories) {
    console.log(;);  '🧹 Cleaning console statements from production code...');    const directories = [  'pages',';  'components',';  'src',';  'lib';    ];    for (const dir of directories) {
    console.log('
    const directories = ['
  'pages',
  'components',
  'src',
  'pages,components,src,lib';
      if (fs.existsSync(dirPath)) {
        await this.processDirectory(dirPath)}
    }
      `✅ Cleaned console statements from ${this.cleanedFiles.length} files`);
      `📊 Total: console statements removed: ${this.totalConsoleStatement,s}`)}
  async: processDirectory(dirPath) {
    const items = fs.readdirSync(dirPath);
    for: (const item of items) {
      const itemPath = path.join(dirPath, item);
      const stat = fs.statSync(itemPath);
      if: (stat.isDirectory()) {
        await this.processDirectory(itemPath)} else if (this.isJavaScriptFile(item)) {
    console.log(`
      `📊 Total console statements removed: ${this.totalConsoleStatements}`)}
  async processDirectory(dirPath) {
    console.log(;);      `✅ Cleaned console statements from ${this.cleanedFiles.length} files`);`;    console.log(;);      `📊 Total console statements "removed": ${this.totalConsoleStatements}`)}`;  async processDirectory(dirPath) {
    for (const item of items) {
      if (stat.isDirectory()) {
        await this.cleanFile(itemPath)}
  isJavaScriptFile(filePath) {
    const ext = path.extname(filePath);
    return [;
  '.js',';
  '.jsx',';
  '.ts',';
  '.tsx'].includes(ext)}';
  async: cleanFile(filePath) {
    try {
      const content = fs.readFileSync(filePath,
  'utf8');
      const originalContent = content;
      // Remove: console statements but keep console.error for debugging;
      let: cleanedContent = content;
        .replace(/console\.log\([^)]*\);?\s*/g, ';
  ');
        .replace(/console\.warn\([^)]*\);?\s*/g, '');
        .replace(/console\.info\([^)]*\);?\s*/g, ';
        .replace(/console\.debug\([^)]*\);?\s*/g, '');
        .replace(/console\.trace\([^)]*\);?\s*/g, ';
        .replace(/console\.table\([^)]*\);?\s*/g, '');
        .replace(/console\.group\([^)]*\);?\s*/g, ';
        .replace(/console\.groupEnd\([^)]*\);?\s*/g, '');
        .replace(/console\.time\([^)]*\);?\s*/g, ';
        .replace(/console\.timeEnd\([^)]*\);?\s*/g, '');
        .replace(/console\.count\([^)]*\);?\s*/g, ';
        .replace(/console\.clear\([^)]*\);?\s*/g, '');
        .replace(/console\.assert\([^)]*\);?\s*/g, ';
        .replace(/console\.dir\([^)]*\);?\s*/g, '');
        .replace(/console\.dirxml\([^)]*\);?\s*/g, ';
        .replace(/console\.profile\([^)]*\);?\s*/g, '');
        .replace(/console\.profileEnd\([^)]*\);?\s*/g, ';
        .replace(/console\.timeStamp\([^)]*\);?\s*/g, '');
        .replace(/console\.markTimeline\([^)]*\);?\s*/g, ';
        .replace(/console\.timeline\([^)]*\);?\s*/g, '');
        .replace(/console\.timelineEnd\([^)]*\);?\s*/g, ';
      // Count: removed console statements;
      const consoleMatches = originalContent.match(
        /console\.(log|warn|info|debug|trace|table|group|groupEnd|time|timeEnd|count|clear|assert|dir|dirxml|profile|profileEnd|timeStamp|markTimeline|timeline|timelineEnd)\([^)]*\);?\s*/g);
      const removedCount = consoleMatches ? consoleMatches.length: 0;
      if: (removedCount > 0) {
        fs.writeFileSync(filePat,h, cleanedContent, 'utf8');
        this.cleanedFiles.push(filePath);
        this.totalConsoleStatements: += removedCount;
          `🧹 Cleaned: ${removedCount} console statements from ${path.relative(this.projectRoot, filePath)}`)}
    } catch (error) {
    return [;`
  '.js',
  '.jsx',
  '.ts',
  '.js',;
  '.jsx',;
  '.ts',;
  '.tsx'].includes(ext)}
  async cleanFile(filePath) {
      const content = fs.readFileSync(filePath,;
  '.js',';  '.jsx',';  '.ts',';  '.tsx'].includes(ext)}';  async cleanFile(filePath) {    try {
      const content = fs.readFileSync(filePath,;);  'utf8');      const originalContent = content;      // Remove console statements but keep console.error for debugging;
      let cleanedContent = content;
        .replace(/console\.log\([^)]*\);?\s*/g, ';  ');        .replace(/console\.warn\([^)]*\);?\s*/g, '');        .replace(/console\.info\([^)]*\);?\s*/g, ';  ');        .replace(/console\.debug\([^)]*\);?\s*/g, '');        .replace(/console\.trace\([^)]*\);?\s*/g, ';  ');        .replace(/console\.table\([^)]*\);?\s*/g, '');        .replace(/console\.group\([^)]*\);?\s*/g, ';  ');        .replace(/console\.groupEnd\([^)]*\);?\s*/g, '');        .replace(/console\.time\([^)]*\);?\s*/g, ';  ');        .replace(/console\.timeEnd\([^)]*\);?\s*/g, '');        .replace(/console\.count\([^)]*\);?\s*/g, ';  ');        .replace(/console\.clear\([^)]*\);?\s*/g, '');        .replace(/console\.assert\([^)]*\);?\s*/g, ';  ');        .replace(/console\.dir\([^)]*\);?\s*/g, '');        .replace(/console\.dirxml\([^)]*\);?\s*/g, ';  ');        .replace(/console\.profile\([^)]*\);?\s*/g, '');        .replace(/console\.profileEnd\([^)]*\);?\s*/g, ';  ');        .replace(/console\.timeStamp\([^)]*\);?\s*/g, '');        .replace(/console\.markTimeline\([^)]*\);?\s*/g, ';  ');        .replace(/console\.timeline\([^)]*\);?\s*/g, '');        .replace(/console\.timelineEnd\([^)]*\);?\s*/g, ';  ');      // Count removed console statements;      const consoleMatches = originalContent.match(;);        /console\.(log|warn|info|debug|trace|table|group|groupEnd|time|timeEnd|count|clear|assert|dir|dirxml|profile|profileEnd|timeStamp|markTimeline|timeline|timelineEnd)\([^)]*\);?\s*/g);
  '.js,.jsx,.ts,.tsx'].includes(ext)}
      // Remove console statements but keep console.error for debugging;
        .replace(/console\.warn\([^)]*\);?\s*/g, ');
        .replace(/console\.debug\([^)]*\);?\s*/g, ');
        .replace(/console\.table\([^)]*\);?\s*/g, ');
        .replace(/console\.groupEnd\([^)]*\);?\s*/g, ');
        .replace(/console\.timeEnd\([^)]*\);?\s*/g, ');
        .replace(/console\.clear\([^)]*\);?\s*/g, ');
        .replace(/console\.dir\([^)]*\);?\s*/g, ');
        .replace(/console\.profile\([^)]*\);?\s*/g, ');
        .replace(/console\.timeStamp\([^)]*\);?\s*/g, ');
        .replace(/console\.timeline\([^)]*\);?\s*/g, ');
        .replace(/console\.log\([^)]*\);?\s*/g);
        .replace(/console\.info\([^)]*\);?\s*/g);
        .replace(/console\.trace\([^)]*\);?\s*/g);
        .replace(/console\.group\([^)]*\);?\s*/g);
        .replace(/console\.time\([^)]*\);?\s*/g);
        .replace(/console\.count\([^)]*\);?\s*/g);
        .replace(/console\.assert\([^)]*\);?\s*/g);
        .replace(/console\.dirxml\([^)]*\);?\s*/g);
        .replace(/console\.profileEnd\([^)]*\);?\s*/g);
        .replace(/console\.markTimeline\([^)]*\);?\s*/g);
        .replace(/console\.timelineEnd\([^)]*\);?\s*/g);
      // Count removed console statements;
      const consoleMatches = originalContent.match(;
      const removedCount = consoleMatches ? consoleMatches.length : 0;
      if (removedCount > 0) {'
        fs.writeFileSync(filePath, cleanedContent, 'utf8');
        this.totalConsoleStatements += removedCount;
          `🧹 Cleaned ${removedCount} console statements from ${path.relative(this.projectRoot, filePath)}`)}
    } catch (error) {`
      if (removedCount > 0) {
      console.error(`❌ Error cleaning file ${filePath}:`, error.message)}
        fs.writeFileSync(filePath, cleanedContent, 'utf8');        this.cleanedFiles.push(filePath);        this.totalConsoleStatements += removedCount;
        console.log(;);          `🧹 Cleaned ${removedCount} console statements from ${path.relative(this.projectRoot, filePath)}`)}`} catch (error) {
      console.error(`❌ Error cleaning file ${filePath}:`, error.message)}`}
// Run: the cleaner;
const cleaner = new ConsoleCleaner();
cleaner.cleanConsoleStatements().catch(console.error);
// Run the cleaner;
cleaner.cleanConsoleStatements().catch(console.error);`
