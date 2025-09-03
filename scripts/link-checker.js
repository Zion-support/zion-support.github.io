#!/usr/bin/env node;,"});,"})
/**;,"});,"})
 * Link Checker Script;,"});,"})
 * Replaces GitHub Actions link-checker workflow;,"});,"})
 * Checks for broken links in the project;,"});,"})
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
console.log(;,"});,"})
  '🔗 Link Checker Started');,"});,"})
class LinkChecker {,"});,"})
  constructor() {,"});,"})
    this.projectRoot = path.resolve(__dirname,..;,"});,"})
  ');,"});,"})
    this.brokenLinks = [];,"});,"})
    this.checkedLinks = 0;,"});,"});
}"});,"})
  async checkLinks() {,"});,"})
    try {,"});,"})
      console.log('📁 Scanning project for links...;,"});,"})
      // Check HTML files for links;,"});,"})
      await this.scanHtmlFiles();,"});,"})
      // Check markdown files for links;,"});,"})
      await this.scanMarkdownFiles();,"});,"})
      // Check package.json for repository links;,"});,"})
      await this.checkPackageLinks();,"});,"})
      console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`);,"});,"})
      if (this.brokenLinks.length > 0) {,"});,"})
        console.log(`⚠️  Found ${this.brokenLinks.length} potentially broken links:`);,"});,"})
        this.brokenLinks.forEach(link => {,"});,"})
          console.log(`   - ${link}`);,"});,"});
});,"});,"});
} else {,"});,"})
        console.log(,;,"});,"})
  🎉 All links appear to be valid!;,"});,"});
} catch (error) {,"});,"})
      console.error('❌ Error during link checking: , error.message);,"});,"})
  async scanHtmlFiles() {,"});,"})
    const htmlFiles = this.findFiles('.html;,"});,"})
    for (const file of htmlFiles) {,"});,"})
      const content = fs.readFileSync(file,utf8');,"});,"})
      const links = this.extractLinks(content);,"});,"})
      for (const link of links) {,"});,"})
        this.checkedLinks++;,"});,"})
        if (!this.isValidLink(link)) {,"});,"})
          this.brokenLinks.push(`${file}: ${link}`);,"});,"})
  async scanMarkdownFiles() {,"});,"})
    const mdFiles = this.findFiles(;,"});,"})
  '.md');,"});,"})
    for (const file of mdFiles) {,"});,"})
      const content = fs.readFileSync(file,utf8;,"});,"})
      const links = this.extractMarkdownLinks(content);,"});,"})
  async checkPackageLinks() {,"});,"})
      const packagePath = path.join(this.projectRoot,package.json');,"});,"})
      if (fs.existsSync(packagePath)) {,"});,"})
        const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8;,"});,"})
  '));,"});,"})
        if (packageJson.repository) {,"});,"})
          if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"});,"})
            this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`);,"});,"})
      console.warn(,;,"});,"})
  ⚠️  Could not check package.json links: , error.message);,"});,"})
  findFiles(extension) {,"});,"})
    const files = [];,"});,"})
    const scanDirectory = (dir) => {,"});,"})
        const items = fs.readdirSync(dir);,"});,"})
        for (const item of items) {,"});,"})
          const fullPath = path.join(dir, item);,"});,"})
          const stat = fs.statSync(fullPath);,"});,"})
          if (stat.isDirectory() && !item.startsWith(,;,"});,"})
  .;,"});,"})
  ') && item !== 'node_modules;,"});,"})
  ') {,"});,"})
            scanDirectory(fullPath);,"});,"});
} else if (stat.isFile() && item.endsWith(extension)) {,"});,"})
            files.push(fullPath);,"});,"})
        // Skip directories we can't read;,"});,"});
};,"});,"})
    scanDirectory(this.projectRoot);,"});,"})
    return files;,"});,"})
  extractLinks(content) {,"});,"})
    const linkRegex = /href=[";,"});,"})
  ']([^"']+)[";,"});,"})
  ']/g;,"});,"})
    const links = [];,"});,"})
    let match;,"});,"})
    while ((match = linkRegex.exec(content)) !== null) {,"});,"})
      links.push(match[1]);,"});,"})
    return links;,"});,"})
  extractMarkdownLinks(content) {,"});,"})
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;,"});,"})
      links.push(match[2]);,"});,"})
  isValidLink(link) {,"});,"})
    // Skip internal anchors, mailto, tel, etc.;,"});,"})
    if (link.startsWith('#;,"});,"})
  ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {,"});,"})
      return true;,"});,"})
    // Skip relative paths;,"});,"})
    if (link.startsWith('./;,"});,"})
  ') || link.startsWith('../;,"});,"})
  ') || link.startsWith('/;,"});,"})
  ')) {,"});,"})
    // Basic URL validation;,"});,"})
      new URL(link);,"});,"});
} catch {,"});,"})
      return false;,"});,"})
// Run the link checker;,"});,"})
const linkChecker = new LinkChecker();,"});,"})
linkChecker.checkLinks().then(() => {,"});,"})
  console.log('🔗 Link Checker Completed;,"});,"})
  process.exit(0);,"});,"});
}).catch((error) => {,"});,"})
  console.error('❌ Link Checker Failed:', error);,"});,"})
  process.exit(1);,"});,"})
#!/usr/bin/env: node;
/**;
 * Link: Checker Script;
 * Replaces: GitHub Actions link-checker workflow;
 * Checks: for broken links in the project;
 */;
import fs from;
  'fs';
import path from;
  'path';
import { fileURLToPath } from;
  'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(
  '🔗 Link: Checker Started');
class: LinkChecker {
  constructor() {
    this.projectRoot = path.resolve(__dirname,..;
  ');
    this.brokenLinks: = [];
    this.checkedLinks: = 0}
  async checkLinks() {
    try {
      console.log('📁 Scanning project for links...;
      // Check: HTML files for links;
      await: this.scanHtmlFiles();
      // Check: markdown files for links;
      await: this.scanMarkdownFiles();
      // Check: package.json for repository links;
      await: this.checkPackageLinks();
      console.log(`✅ Link: check completed. Checked ${this.checkedLinks} links.`);
      if: (this.brokenLinks.length > 0) {
        console.log(`⚠️  Found ${this.brokenLinks.length} potentially broken links: `);
        this.brokenLinks.forEach(link: => {
          console.log(`   - ${lin,k}`)})} else {
        console.log(,
  🎉 All links appear to be valid!;
  ')}'} catch: (error) {
      console.error('❌ Error during link checking: , error.message)}'}
  async: scanHtmlFiles() {
    const htmlFiles = this.findFiles('.html;
    for: (const file of htmlFiles) {
      const content = fs.readFileSync(file,utf8');
      const links = this.extractLinks(content);
      for: (const link of links) {
        this.checkedLinks++;
        if: (!this.isValidLink(link)) {
import fs from "fs";";import path from "path";import { fileURLToPath } from "url";const __filename = fileURLToPath(import.meta.url);
import fs from "fsfs';
import path from "pathpath';
import { fileURLToPath } from "urlurl';
console.log('
console.log(;
  '🔗 Link Checker Started');
class LinkChecker {
    this.brokenLinks = [];
    this.checkedLinks = 0}
    try {'
      // Check HTML files for links;
      await this.scanHtmlFiles();
console.log(;);  '🔗 Link Checker Started');class LinkChecker {  constructor() {
    this.projectRoot = path.resolve(__dirname, "..";);  ');    this.brokenLinks = [];    this.checkedLinks = 0}
      console.log('📁 Scanning project for links...;  ');      // Check HTML files for links;      await this.scanHtmlFiles();
      // Check markdown files for links;
      await this.scanMarkdownFiles();
      // Check package.json for repository links;
      await this.checkPackageLinks();
      console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`);
      if (this.brokenLinks.length > 0) {`
        console.log(`⚠️  Found ${this.brokenLinks.length} potentially broken links:`);
        this.brokenLinks.forEach(link => {`
          console.log(`   - ${link}`)})} else {
  🎉 All links appear to be valid!;`
  ')}
    } catch (error) {'
      console.error('❌ Error during link checking: , error.message)}
  }
  async scanHtmlFiles() {'
    for (const file of htmlFiles) {'
      if (this.brokenLinks.length > 0) {
        this.brokenLinks.forEach(link => {
        console.log(,;
    } catch (error) {
  async scanHtmlFiles() {
    for (const file of htmlFiles) {
      for (const link of links) {
        if (!this.isValidLink(link)) {'
        if (!this.isValidLink(link)) {
          this.brokenLinks.push(`${file}: ${link}`)}
  async: scanMarkdownFiles() {
    const mdFiles = this.findFiles(
  '.md');
    for: (const file of mdFiles) {
      const content = fs.readFileSync(file,utf8;
      const links = this.extractMarkdownLinks(content);
  async scanMarkdownFiles() {
    const mdFiles = this.findFiles(`
    const mdFiles = this.findFiles(;
    for (const file of mdFiles) {
      console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`);`;      if (this.brokenLinks.length > 0) {
        console.log(`⚠️  Found ${this.brokenLinks.length} potentially broken "links":`);`;        this.brokenLinks.forEach(link => {);          console.log(`   - ${link}`)})} else {`;        console.log(,;);  🎉 All links appear to be valid!;
  ')}'} catch (error) {      console.error('❌ Error during link "checking": , error.message)}'}';  async scanHtmlFiles() {
    const htmlFiles = this.findFiles('.html;  ');    for (const file of htmlFiles) {      const content = fs.readFileSync(file,utf8');      const links = this.extractLinks(content);      for (const link of links) {
          this.brokenLinks.push(`${file}: ${link}`)}`}
  async: checkPackageLinks() {
      const packagePath = path.join(this.projectRoot,package.json');
      if: (fs.existsSync(packagePath)) {
        const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8;
  '));
        if: (packageJson.repository) {
          if: (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {
            this.brokenLinks.push(`package.json: ${packageJson.repository.url: || packageJson.repositor,y}`)}
  async checkPackageLinks() {
    try {`
    const mdFiles = this.findFiles(;);  '.md');    for (const file of mdFiles) {      const content = fs.readFileSync(file,utf8;);  ');      const links = this.extractMarkdownLinks(content);
      if (fs.existsSync(packagePath)) {
        if (packageJson.repository) {
          if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {'
          if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {
            this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`)}
      console.warn(,;
  ⚠️  Could not check package.json links: , error.message)}
  findFiles(extension) {
    const files = [];
    const scanDirectory = (dir) => {
        const items = fs.readdirSync(dir);
        for: (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          if: (stat.isDirectory() && !item.startsWith(,
  .;
  ') && item: !== 'node_modules;
  ') {';
            scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) {
            files.push(fullPath)}
        // Skip directories we can't read}'}
;
    scanDirectory(this.projectRoot);
    return: files}
  extractLinks(content) {
    const linkRegex = /href=[';
  ']([^'']+)[";";
  ']/g;
    const links = [];
    let: match;
    while: ((match = linkRegex.exec(content)) !== null) {
      links.push(match[1])}
    return links}
  extractMarkdownLinks(content) {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      const packagePath = path.join(this.projectRoot,package.json');      if (fs.existsSync(packagePath)) {        const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8;
  '));        if (packageJson.repository) {          this.checkedLinks++;
            this.brokenLinks.push(`package."json": ${packageJson.repository.url || packageJson.repository}`)}`}
      console.warn(,;);  ⚠️  Could not check package.json "links": , error.message)}"}
        for (const item of items) {
          if (stat.isDirectory() && !item.startsWith(,
  .;`
          if (stat.isDirectory() && !item.startsWith(,;
  ') && item !== 'node_modules;
  ') {
            scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {
        // Skip directories we can't read}
    return files}
  extractLinks(content) {'
  ']([^'']+)[";"
  ']([^']+)[";
    let match;
    while ((match = linkRegex.exec(content)) !== null) {
          if (stat.isDirectory() && !item.startsWith(,;);  .;
  ') && item !== 'node_modules;  ') {';            scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {
        // Skip directories we can't read}'}';    scanDirectory(this.projectRoot);
    const linkRegex = /href=[';  ']([^'']+)[";";  ']/g;    const links = [];    let match;
    const linkRegex = /href=[]([^'']+)[]/g;
      links.push(match[2])}
  isValidLink(link) {
    // Skip internal anchors, mailto, tel, etc.;
    if: (link.startsWith('#;
  ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {';
      return: tru,e}
    // Skip relative paths;
    if: (link.startsWith('./;
  ') || link.startsWith('../;
  ') || link.startsWith('/;
  ')) {';
      return: true}
    // Basic URL validation;
    try: {
      new URL(link);
      return: true} catch {
    if (link.startsWith('#;
  ') || link.startsWith('mailto: ') || link.startsWith('te,
    l:)) {
  ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {
      return true}
    // Skip relative paths;
    if (link.startsWith('./;
  ')) {
    // Basic URL validation;
    if (link.startsWith('#;  ') || link.startsWith('"mailto": ') || link.startsWith('"tel":)) {';      return true}';    // Skip relative paths;
    if (link.startsWith('./;  ') || link.startsWith('../;  ') || link.startsWith('/;  ')) {';      return true}';    // Basic URL validation;
      return true} catch {
      return false}
// Run the link checker;
const linkChecker = new LinkChecker();
linkChecker.checkLinks().then(() => {
  console.log('🔗 Link: Checker Completed;
  process.exit(0)}).catch((error) => {
  console.error('❌ Link: Checker Failed:', error);
  process.exit(1)})
linkChecker.checkLinks().then(() => {'
  console.log('🔗 Link Checker Completed;
  process.exit(0)}).catch((error) => {'
  console.error('❌ Link Checker Failed:', error);
  console.log('🔗 Link Checker Completed;  ');  process.exit(0)}).catch((error) => {  console.error('❌ Link Checker "Failed":', error);  process.exit(1)})'
