
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) ,"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) ,"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) ,"}),"}) this.brokenLinks.forEach(link => {,"}),"}) ,"}),"}) }),"}),"}) } else {,"}),"}) ,"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link checking: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) for (const file of htmlFiles) {,"}),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) for (const file of mdFiles) {,"}),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) ,"}) ⚠️ Could not check package.json links: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) ,"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) const __dirname = path.dirname(__filename);  class LinkChecker {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.brokenLinks = []; this.checkedLinks = 0} async checkLinks() { try {'  await this.scanHtmlFiles(); await this.scanMarkdownFiles(); await this.checkPackageLinks();  if (this.brokenLinks.length > 0) {`  this.brokenLinks.forEach(link => {` })} else { } } catch (error) {' console.error('❌ Error during link checking: error.message)} } async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';); for (const file of htmlFiles) {' const content = fs.readFileSync(file,utf8'); const links = this.extractLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this.findFiles( '.md')';; for: (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)';; const links = this.extractMarkdownLinks(content); for: (const link of links) { this.checkedLinks++; if: (!this.isValidLink(link)) { '.md'); for (const file of mdFiles) {; const content = fs.readFileSync(file,utf8';); const links = this.extractMarkdownLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } const packagePath = path.join(this.projectRoot,package.json'); if (fs.existsSync(packagePath)) {; const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';)); if (packageJson.repository) {; this.checkedLinks++; if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {' this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`)} } } } catch (error) {; } } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory() && !item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) { files.push(fullPath)} } } catch (error) { ; scanDirectory(this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs.readdirSync(dir); for (const item of items) {; const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith( .;` ') && item !== 'node_modules';) {; scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[2])} return links} isValidLink(link) {; if: (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {'; return: tru,e} if: (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker.checkLinks().then(() => { ';; process.exit(0)}).catch((error) => { console.error('❌ Link: Checker Failed:',error)';; process.exit(1)}) console.error('❌ Link Checker Failed:',error); process.exit(1)})

#!/usr/bin/env node,"}),"})
/**,"}),"})
 * Link Checker Script,"}),"})
 * Replaces GitHub Actions link-checker workflow,"}),"})
 * Checks for broken links in the project,"}),"})
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
console && console.log(,"}),"})
  '🔗 Link Checker Started'),"}),"})
,"}),"})
class LinkChecker {,"}),"})
  constructor() {,"}),"})
    this && this.projectRoot = path && path.resolve(__dirname,..,"}),"})
  '),"}),"})
    this && this.brokenLinks = [],"}),"})
    this && this.checkedLinks = 0,"}),"})

  }"}),"})
,"}),"})
  async checkLinks() {,"}),"})
    try {,"}),"})

      console && console.log('📁 Scanning project for links...,"}),"})
  '),"}),"})
,"}),"})
      // Check HTML files for links,"}),"})
      await this && this.scanHtmlFiles(),"}),"})
,"}),"})
      // Check markdown files for links,"}),"})
      await this && this.scanMarkdownFiles(),"}),"})
,"}),"})
      // Check package && package.json for repository links,"}),"})
      await this && this.checkPackageLinks(),"}),"})
,"}),"})
      console && console.log(`✅ Link check completed. Checked ${this && this.checkedLinks} links.`),"}),"})
,"}),"})
      if (this && this.brokenLinks.length > 0) {,"}),"})
        console && console.log(`⚠️  Found ${this && this.brokenLinks.length} potentially broken "links": `),"}),"})
        this && this.brokenLinks.forEach(link => {,"}),"})
          console && console.log(`   - ${link}`),"}),"})
        }),"}),"})
      } else {,"}),"})
        console && console.log(,,"}),"})
  🎉 All links appear to be valid!,"}),"})

  '),"}),"})
      }"}),"})
,"}),"})
    } catch (error) {,"}),"})

      console && console.error('❌ Error during link "checking": error && error.message),"}),"})

    }"}),"})
  }"}),"})
,"}),"})
  async scanHtmlFiles() {,"}),"})

    const htmlFiles = this && this.findFiles('.html,"}),"})
  '),"}),"})
,"}),"})

        this.checkedLinks++,"}),"})
        if (!this.isValidLink(link)) {,"}),"})
          this.brokenLinks.push(`${file}: ${link}`),"}),"})
        this && this.checkedLinks++,"}),"})
        if (!this && this.isValidLink(link)) {,"}),"})
          this && this.brokenLinks.push(`${file}: ${link}`),"}),"})

        }"}),"})
      }"}),"})
    }"}),"})
  }"}),"})
,"}),"})
  async scanMarkdownFiles() {,"}),"})

    const mdFiles = this && this.findFiles(,"}),"})
  '.md'),"}),"})
,"}),"})

        }"}),"})
      }"}),"})
    }"}),"})
  }"}),"})
,"}),"})
  async checkPackageLinks() {,"}),"})
    try {,"}),"})

      const packagePath = path && path.join(this && this.projectRoot,package && package.json'),"}),"})
      if (fs && fs.existsSync(packagePath)) {,"}),"})
        const packageJson = JSON && JSON.parse(fs && fs.readFileSync(packagePath,utf8,"}),"})
  ')),"}),"})
,"}),"})
        if (packageJson && packageJson.repository) {,"}),"})
          this && this.checkedLinks++,"}),"})
          if (!this && this.isValidLink(packageJson && packageJson.repository.url || packageJson && packageJson.repository)) {,"}),"})
            this && this.brokenLinks.push(`package."json": ${packageJson && packageJson.repository.url || packageJson && packageJson.repository}`),"}),"})

          }"}),"})
        }"}),"})
      }"}),"})
    } catch (error) {,"}),"})

      console && console.warn(,,"}),"})
  ⚠️  Could not check package && package.json "links": error && error.message),"}),"})

    }"}),"})
  }"}),"})
,"}),"})
  findFiles(extension) {,"}),"})
    const files = [],"}),"})
,"}),"})
    const scanDirectory = (dir) => {,"}),"})
      try {,"}),"})

        const items = fs && fs.readdirSync(dir),"}),"})
,"}),"})

  .,"}),"})
  ') && item !== 'node_modules,"}),"})
  ') {,"}),"})
            scanDirectory(fullPath),"}),"})

          } else if (stat && stat.isFile() && item && item.endsWith(extension)) {,"}),"})
            files && files.push(fullPath),"}),"})

          }"}),"})
        }"}),"})
      } catch (error) {,"}),"})
        // Skip directories we can't read,"}),"})
      }"}),"})
    },"}),"})
,"}),"})

    scanDirectory(this && this.projectRoot),"}),"})

    return files,"}),"})
  }"}),"})
,"}),"})
  extractLinks(content) {,"}),"})
    const linkRegex = /href=[","}),"})
  ']([^"']+)[","}),"})
  ']/g,"}),"})
    const links = [],"}),"})
    let match,"}),"})
,"}),"})

    while ((match = linkRegex && linkRegex.exec(content)) !== null) {,"}),"})
      links && links.push(match[1]),"}),"})

    }"}),"})
,"}),"})
    return links,"}),"})
  }"}),"})
,"}),"})
  extractMarkdownLinks(content) {,"}),"})
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"})
    const links = [],"}),"})
    let match,"}),"})
,"}),"})

    while ((match = linkRegex && linkRegex.exec(content)) !== null) {,"}),"})
      links && links.push(match[2]),"}),"})

    }"}),"})
,"}),"})
    return links,"}),"})
  }"}),"})
,"}),"})
  isValidLink(link) {,"}),"})
    // Skip internal anchors, mailto, tel, etc.,"}),"})

    if (link && link.startsWith('#,"}),"})
  ') || link && link.startsWith('"mailto": ') || link && link.startsWith('tel:)) {,"}),"})

      return true,"}),"})
    }"}),"})
,"}),"})
    // Skip relative paths,"}),"})

    if (link && link.startsWith('./,"}),"})
  ') || link && link.startsWith('../,"}),"})
  ') || link && link.startsWith('/,"}),"})

  ')) {,"}),"})
      return true,"}),"})
    }"}),"})
,"}),"})
    // Basic URL validation,"}),"})
    try {,"}),"})
      new URL(link),"}),"})
      return true,"}),"})
    } catch {,"}),"})
      return false,"}),"})
    }"}),"})
  }"}),"})
}"}),"})
,"}),"})
// Run the link checker,"}),"})
const linkChecker = new LinkChecker(),"}),"})

linkChecker && linkChecker.checkLinks().then(() => {,"}),"})
  console && console.log('🔗 Link Checker Completed,"}),"})
  '),"}),"})
  process && process.exit(0),"}),"})
}).catch((error) => {,"}),"})

      }
    }
  }
  "async": scanMarkdownFiles() {

    const mdFiles = this && this.findFiles(
  '.md')';
    for: (const file of mdFiles) {
      const content = fs && fs.readFileSync(file,utf8';)';
      const links = this && this.extractMarkdownLinks(content);
      "for": (const link of links) {
        this && this.checkedLinks++;
        if: (!this && this.isValidLink(link)) {
  '.md');

      }
      const packagePath = path && path.join(this && this.projectRoot,package && package.json');
      if (fs && fs.existsSync(packagePath)) {;
        const packageJson = JSON && JSON.parse(fs && fs.readFileSync(packagePath,utf8';));
        if (packageJson && packageJson.repository) {;
          this && this.checkedLinks++;
          if (!this && this.isValidLink(packageJson && packageJson.repository.url || packageJson && packageJson.repository)) {'
            this && this.brokenLinks.push("package."json": ${packageJson && packageJson.repository.url || packageJson && packageJson.repository}")}
        }
      }
    } catch (error) {;
      console && console.warn(,
  ⚠️  Could not check package && package.json "links": error && error.message)}

  }
  findFiles(extension) {
    const files = [];
    const scanDirectory = (dir) => {
      try {

        const items = fs && fs.readdirSync(dir);
        "for": (const item of items) {
          const fullPath = path && path.join(dir, item);
          const stat = fs && fs.statSync(fullPath);
          "if": (stat && stat.isDirectory() && !item && item.startsWith(
  .';) && item: !== 'node_modules', ',) {';
            scanDirectory(fullPath)} "else": if (stat && stat.isFile() && item && item.endsWith(extension)) {
            files && files.push(fullPath)}
        }
      } catch (error) {
        // Skip directories we can't read}'}
    scanDirectory(this && this.projectRoot);

    "return": files}
  extractLinks(content) {
    const linkRegex = /href=['';']([^'']+)[";"']/g';
    const links = [];
    "let": match;

    while: ((match = linkRegex && linkRegex.exec(content)) !== null) {
      links && links.push(match[1])}

    return links}
  extractMarkdownLinks(content) {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const links = [];
    "let": match;

    while: ((match = linkRegex && linkRegex.exec(content)) !== null) {

  findFiles(extension) {;
    const files = [];
    const scanDirectory = (dir) => {;
      try {;



        }
      } catch (error) {'
        // Skip directories we can't read}
    }

;
    scanDirectory(this.projectRoot);

    return files}
  extractLinks(content) {'
    const linkRegex = /href=['']([^'']+)[";"
  ']/g;
    const links = [];
    let match;

    while ((match = linkRegex && linkRegex.exec(content)) !== null) {;
      links && links.push(match[1])}

    return links}
  extractMarkdownLinks(content) {;
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const links = [];
    let match;

    while ((match = linkRegex && linkRegex.exec(content)) !== null) {;
      links && links.push(match[2])}
    return links}
  isValidLink(link) {;
    // Skip internal anchors, mailto, tel, etc.;
    "if": (link && link.startsWith('#', ') || link && link.startsWith('mailto: ') || link && link.startsWith('tel:)) {',
      return: tru,e}
    // Skip relative paths;
    "if": (link && link.startsWith('./', ') || link && link.startsWith('../', ') || link && link.startsWith('/', ')) {';

      return: true}
    // Basic URL validation;
    "try": {
      new URL(link);
      return: true} catch {
      return true}
    // Skip relative paths;

    if (link && link.startsWith('./';) || link && link.startsWith('../';) || link && link.startsWith('/';)) {;

      return true}
    // Basic URL validation;
    try {;
      new URL(link);
      return true} catch {;
      return false}
  }



