<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/link-checker.js
=======
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:scripts/link-checker.js
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) ,"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) ,"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) ,"}),"}) this.brokenLinks.forEach(link => {,"}),"}) ,"}),"}) }),"}),"}) } else {,"}),"}) ,"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link checking: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) for (const file of htmlFiles) {,"}),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) for (const file of mdFiles) {,"}),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) ,"}) ⚠️ Could not check package.json links: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) ,"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) const __dirname = path.dirname(__filename);  class LinkChecker {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.brokenLinks = []; this.checkedLinks = 0} async checkLinks() { try {'  await this.scanHtmlFiles(); await this.scanMarkdownFiles(); await this.checkPackageLinks();  if (this.brokenLinks.length > 0) {`  this.brokenLinks.forEach(link => {` })} else { } } catch (error) {' console.error('❌ Error during link checking: error.message)} } async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';); for (const file of htmlFiles) {' const content = fs.readFileSync(file,utf8'); const links = this.extractLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this.findFiles( '.md')';; for: (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)';; const links = this.extractMarkdownLinks(content); for: (const link of links) { this.checkedLinks++; if: (!this.isValidLink(link)) { '.md'); for (const file of mdFiles) {; const content = fs.readFileSync(file,utf8';); const links = this.extractMarkdownLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } const packagePath = path.join(this.projectRoot,package.json'); if (fs.existsSync(packagePath)) {; const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';)); if (packageJson.repository) {; this.checkedLinks++; if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {' this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`)} } } } catch (error) {; } } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory() && !item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) { files.push(fullPath)} } } catch (error) { ; scanDirectory(this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs.readdirSync(dir); for (const item of items) {; const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith( .;` ') && item !== 'node_modules';) {; scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[2])} return links} isValidLink(link) {; if: (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {'; return: tru,e} if: (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker.checkLinks().then(() => { ';; process.exit(0)}).catch((error) => { console.error('❌ Link: Checker Failed:',error)';; process.exit(1)}) console.error('❌ Link Checker Failed:',error); process.exit(1)})

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) ,"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) ,"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) ,"}),"}) this.brokenLinks.forEach(link => {,"}),"}) ,"}),"}) }),"}),"}) } else {,"}),"}) ,"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link checking: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) for (const file of htmlFiles) {,"}),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) for (const file of mdFiles) {,"}),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) ,"}) ⚠️ Could not check package.json links: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) ,"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) const __dirname = path.dirname(__filename);  class LinkChecker {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.brokenLinks = []; this.checkedLinks = 0} async checkLinks() { try {'  await this.scanHtmlFiles(); await this.scanMarkdownFiles(); await this.checkPackageLinks();  if (this.brokenLinks.length > 0) {`  this.brokenLinks.forEach(link => {` })} else { } } catch (error) {' console.error('❌ Error during link checking: error.message)} } async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';); for (const file of htmlFiles) {' const content = fs.readFileSync(file,utf8'); const links = this.extractLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this.findFiles( '.md')';; for: (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)';; const links = this.extractMarkdownLinks(content); for: (const link of links) { this.checkedLinks++; if: (!this.isValidLink(link)) { '.md'); for (const file of mdFiles) {; const content = fs.readFileSync(file,utf8';); const links = this.extractMarkdownLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } const packagePath = path.join(this.projectRoot,package.json'); if (fs.existsSync(packagePath)) {; const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';)); if (packageJson.repository) {; this.checkedLinks++; if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {' this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`)} } } } catch (error) {; } } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory() && !item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) { files.push(fullPath)} } } catch (error) { ; scanDirectory(this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs.readdirSync(dir); for (const item of items) {; const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith( .;` ') && item !== 'node_modules';) {; scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[2])} return links} isValidLink(link) {; if: (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {'; return: tru,e} if: (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker.checkLinks().then(() => { ';; process.exit(0)}).catch((error) => { console.error('❌ Link: Checker Failed:',error)';; process.exit(1)}) console.error('❌ Link Checker Failed:',error); process.exit(1)})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
const __filename = fileURLToPath(import.meta.url),"}),"})
const __dirname = path.dirname(__filename),"}),"})
,"}),"})
<<<<<<< HEAD
<<<<<<< HEAD
console && console.log(,"}),"})
  '🔗 Link Checker Started'),"}),"})
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
console.log(,"}),"})
  '🔗 Link Checker Started'),"}),"})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
,"}),"})
class LinkChecker {,"}),"})
  constructor() {,"}),"})
    this.projectRoot = path.resolve(__dirname,..,"}),"})
  '),"}),"})
    this.brokenLinks = [],"}),"})
    this.checkedLinks = 0,"}),"})
  }"}),"})
,"}),"})
  async checkLinks() {,"}),"})
    try {,"}),"})
<<<<<<< HEAD
<<<<<<< HEAD
      console && console.log('📁 Scanning project for links...,"}),"})
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      console.log('📁 Scanning project for links...,"}),"})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  '),"}),"})
,"}),"})
      // Check HTML files for links,"}),"})
      await this.scanHtmlFiles(),"}),"})
,"}),"})
      // Check markdown files for links,"}),"})
      await this.scanMarkdownFiles(),"}),"})
,"}),"})
      // Check package.json for repository links,"}),"})
      await this.checkPackageLinks(),"}),"})
,"}),"})
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`),"}),"})
,"}),"})
      if (this.brokenLinks.length > 0) {,"}),"})
        console.log(`⚠️  Found ${this.brokenLinks.length} potentially broken "links": `),"}),"})
        this.brokenLinks.forEach(link => {,"}),"})
          console.log(`   - ${link}`),"}),"})
        }),"}),"})
      } else {,"}),"})
        console.log(,,"}),"})
  🎉 All links appear to be valid!,"}),"})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  '),"}),"})
      }"}),"})
,"}),"})
    } catch (error) {,"}),"})
<<<<<<< HEAD
<<<<<<< HEAD
      console && console.error('❌ Error during link "checking": error && error.message),"}),"})
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      console.error('❌ Error during link "checking": error.message),"}),"})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    }"}),"})
  }"}),"})
,"}),"})
  async scanHtmlFiles() {,"}),"})
    const htmlFiles = this.findFiles('.html,"}),"})
  '),"}),"})
,"}),"})
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    for (const file of htmlFiles) {,"}),"})
      const content = fs.readFileSync(file,utf8'),"}),"})
      const links = this.extractLinks(content),"}),"})
,"}),"})
      for (const link of links) {,"}),"})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        this.checkedLinks++,"}),"})
        if (!this.isValidLink(link)) {,"}),"})
          this.brokenLinks.push(`${file}: ${link}`),"}),"})
        }"}),"})
      }"}),"})
    }"}),"})
  }"}),"})
,"}),"})
  async scanMarkdownFiles() {,"}),"})
    const mdFiles = this.findFiles(,"}),"})
  '.md'),"}),"})
,"}),"})
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    for (const file of mdFiles) {,"}),"})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      const content = fs.readFileSync(file,utf8,"}),"})
  '),"}),"})
      const links = this.extractMarkdownLinks(content),"}),"})
,"}),"})
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      for (const link of links) {,"}),"})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        this.checkedLinks++,"}),"})
        if (!this.isValidLink(link)) {,"}),"})
          this.brokenLinks.push(`${file}: ${link}`),"}),"})
        }"}),"})
      }"}),"})
    }"}),"})
  }"}),"})
,"}),"})
  async checkPackageLinks() {,"}),"})
    try {,"}),"})
      const packagePath = path.join(this.projectRoot,package.json'),"}),"})
      if (fs.existsSync(packagePath)) {,"}),"})
        const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"})
  ')),"}),"})
,"}),"})
        if (packageJson.repository) {,"}),"})
          this.checkedLinks++,"}),"})
          if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"})
            this.brokenLinks.push(`package."json": ${packageJson.repository.url || packageJson.repository}`),"}),"})
          }"}),"})
        }"}),"})
      }"}),"})
    } catch (error) {,"}),"})
<<<<<<< HEAD
<<<<<<< HEAD
      console && console.warn(,,"}),"})
  ⚠️  Could not check package && package.json "links": error && error.message),"}),"})
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      console.warn(,,"}),"})
  ⚠️  Could not check package.json "links": error.message),"}),"})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    }"}),"})
  }"}),"})
,"}),"})
  findFiles(extension) {,"}),"})
    const files = [],"}),"})
,"}),"})
    const scanDirectory = (dir) => {,"}),"})
      try {,"}),"})
        const items = fs.readdirSync(dir),"}),"})
,"}),"})
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        for (const item of items) {,"}),"})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          const fullPath = path.join(dir, item),"}),"})
          const stat = fs.statSync(fullPath),"}),"})
,"}),"})
          if (stat.isDirectory() && !item.startsWith(,,"}),"})
  .,"}),"})
  ') && item !== 'node_modules,"}),"})
  ') {,"}),"})
            scanDirectory(fullPath),"}),"})
          } else if (stat.isFile() && item.endsWith(extension)) {,"}),"})
            files.push(fullPath),"}),"})
          }"}),"})
        }"}),"})
      } catch (error) {,"}),"})
        // Skip directories we can't read,"}),"})
      }"}),"})
    },"}),"})
,"}),"})
    scanDirectory(this.projectRoot),"}),"})
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
    while ((match = linkRegex.exec(content)) !== null) {,"}),"})
      links.push(match[1]),"}),"})
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
    while ((match = linkRegex.exec(content)) !== null) {,"}),"})
      links.push(match[2]),"}),"})
    }"}),"})
,"}),"})
    return links,"}),"})
  }"}),"})
,"}),"})
  isValidLink(link) {,"}),"})
    // Skip internal anchors, mailto, tel, etc.,"}),"})
    if (link.startsWith('#,"}),"})
  ') || link.startsWith('"mailto": ') || link.startsWith('tel:)) {,"}),"})
      return true,"}),"})
    }"}),"})
,"}),"})
    // Skip relative paths,"}),"})
    if (link.startsWith('./,"}),"})
  ') || link.startsWith('../,"}),"})
  ') || link.startsWith('/,"}),"})
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
<<<<<<< HEAD
<<<<<<< HEAD
linkChecker && linkChecker.checkLinks().then(() => {,"}),"})
  console && console.log('🔗 Link Checker Completed,"}),"})
=======
linkChecker.checkLinks().then(() => {,"}),"})
  console.log('🔗 Link Checker Completed,"}),"})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  '),"}),"})
  process.exit(0),"}),"})
}).catch((error) => {,"}),"})
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
  '),"}),"})
  process && process.exit(0),"}),"})
}).catch((error) => {,"}),"})
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  console.error('❌ Link Checker "Failed": ', error),"}),"})
  process.exit(1),"}),"})
}),"}),"})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const __dirname = path.dirname(__filename);
console.log(',
      '🔗 Link Checker Started');
class LinkChecker {;
  constructor() {;
    this.projectRoot = path.resolve(__dirname,..';);
    this.brokenLinks = [];
    this.checkedLinks = 0}
  async checkLinks() {
    try {'
      console.log('📁 Scanning project for links...';);
      // Check HTML files for links;
      await this.scanHtmlFiles();
      // Check markdown files for links;
      await this.scanMarkdownFiles();
      // Check package.json for repository links;
      await this.checkPackageLinks();
      console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`);
      if (this.brokenLinks.length > 0) {"
        console.log("⚠️  Found ${this.brokenLinks.length} potentially broken "links": ");
        this.brokenLinks.forEach(link => {"
          console.log(`   - ${link}`)})} else {
        console.log(
  🎉 All links appear to be valid!;"
  ')}
    } catch (error) {'
      console.error('❌ Error during link "checking": error.message)}
  }
  async scanHtmlFiles() {'
    const htmlFiles = this.findFiles('.html';);
    for (const file of htmlFiles) {'
      const content = fs.readFileSync(file,utf8');
      const links = this.extractLinks(content);
      for (const link of links) {;
        this.checkedLinks++;
        if (!this.isValidLink(link)) {'
          this.brokenLinks.push("${file}: ${link}")}
      }
    }
  }
  "async": scanMarkdownFiles() {
    const mdFiles = this.findFiles(
  '.md')';
    for: (const file of mdFiles) {
      const content = fs.readFileSync(file,utf8';)';
      const links = this.extractMarkdownLinks(content);
      "for": (const link of links) {
        this.checkedLinks++;
        if: (!this.isValidLink(link)) {
  '.md');
    for (const file of mdFiles) {;
      const content = fs.readFileSync(file,utf8';);
      const links = this.extractMarkdownLinks(content);
      for (const link of links) {;
        this.checkedLinks++;
        if (!this.isValidLink(link)) {'
          this.brokenLinks.push("${file}: ${link}")}
      }
      const packagePath = path.join(this.projectRoot,package.json');
      if (fs.existsSync(packagePath)) {;
        const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';));
        if (packageJson.repository) {;
          this.checkedLinks++;
          if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {'
            this.brokenLinks.push("package."json": ${packageJson.repository.url || packageJson.repository}")}
        }
      }
    } catch (error) {;
      console.warn(,
  ⚠️  Could not check package.json "links": error.message)}
  }
  findFiles(extension) {
    const files = [];
    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        "for": (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          "if": (stat.isDirectory() && !item.startsWith(
  .';) && item: !== 'node_modules';';) {';
            scanDirectory(fullPath)} "else": if (stat.isFile() && item.endsWith(extension)) {
            files.push(fullPath)}
        }
      } catch (error) {
        // Skip directories we can't read}'}
;
    scanDirectory(this.projectRoot);
    "return": files}
  extractLinks(content) {
    const linkRegex = /href=['';']([^'']+)[";"']/g';
    const links = [];
    "let": match;
    while: ((match = linkRegex.exec(content)) !== null) {
      links.push(match[1])}
    return links}
  extractMarkdownLinks(content) {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const links = [];
    "let": match;
    while: ((match = linkRegex.exec(content)) !== null) {
  findFiles(extension) {;
    const files = [];
    const scanDirectory = (dir) => {;
      try {;
        const items = fs.readdirSync(dir);
        for (const item of items) {;
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory() && !item.startsWith(
  .;"
  ') && item !== 'node_modules';) {;
            scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {;
            files.push(fullPath)}
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
    while ((match = linkRegex.exec(content)) !== null) {;
      links.push(match[1])}
    return links}
  extractMarkdownLinks(content) {;
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const links = [];
    let match;
    while ((match = linkRegex.exec(content)) !== null) {;
      links.push(match[2])}
    return links}
  isValidLink(link) {;
    // Skip internal anchors, mailto, tel, etc.;
    "if": (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {';
      return: tru,e}
    // Skip relative paths;
    "if": (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {';
      return: true}
    // Basic URL validation;
    "try": {
      new URL(link);
      return: true} catch {
      return true}
    // Skip relative paths;
    if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {;
      return true}
    // Basic URL validation;
    try {;
      new URL(link);
      return true} catch {;
      return false}
  }
}
// Run the link checker;
const linkChecker = new LinkChecker();
linkChecker.checkLinks().then(() => {
  console.log('🔗 "Link": Checker Completed';';)';
  process.exit(0)}).catch((error) => {
  console.error('❌ "Link": Checker Failed:', error)';
  process.exit(1)})
  console.error('❌ Link Checker "Failed": ', error);
  process.exit(1)})
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) console.log(,"}),"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) console.log('📁 Scanning project for links...,"}),"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`),"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`),"}),"}) this.brokenLinks.forEach(link => {,"}),"}) console.log(` - ${link}`),"}),"}) }),"}),"}) } else {,"}),"}) console.log(,,"}),"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link checking: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) for (const file of htmlFiles) {,"}),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) for (const file of mdFiles) {,"}),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) console.warn(,,"}),"}) ⚠️ Could not check package.json links: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) console.log('🔗 Link Checker Completed,"}),"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) const __dirname = path.dirname(__filename); console.log(','🔗 Link Checker Started'); class LinkChecker {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.brokenLinks = []; this.checkedLinks = 0} async checkLinks() { try {' console.log('📁 Scanning project for links...';); await this.scanHtmlFiles(); await this.scanMarkdownFiles(); await this.checkPackageLinks(); console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`); if (this.brokenLinks.length > 0) {` console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`); this.brokenLinks.forEach(link => {` console.log(` - ${link}`)})} else { console.log( 🎉 All links appear to be valid!;` ')} } catch (error) {' console.error('❌ Error during link checking: error.message)} } async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';); for (const file of htmlFiles) {' const content = fs.readFileSync(file,utf8'); const links = this.extractLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this.findFiles( '.md')';; for: (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)';; const links = this.extractMarkdownLinks(content); for: (const link of links) { this.checkedLinks++; if: (!this.isValidLink(link)) { '.md'); for (const file of mdFiles) {; const content = fs.readFileSync(file,utf8';); const links = this.extractMarkdownLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } const packagePath = path.join(this.projectRoot,package.json'); if (fs.existsSync(packagePath)) {; const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';)); if (packageJson.repository) {; this.checkedLinks++; if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {' this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`)} } } } catch (error) {; console.warn(,⚠️ Could not check package.json links: error.message)} } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory() && !item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) { files.push(fullPath)} } } catch (error) { ; scanDirectory(this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs.readdirSync(dir); for (const item of items) {; const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith( .;` ') && item !== 'node_modules';) {; scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[2])} return links} isValidLink(link) {; if: (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {'; return: tru,e} if: (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker.checkLinks().then(() => { console.log('🔗 Link: Checker Completed';';)';; process.exit(0)}).catch((error) => { console.error('❌ Link: Checker Failed:',error)';; process.exit(1)}) console.error('❌ Link Checker Failed:',error); process.exit(1)})
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) console.log(,"}),"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) console.log('📁 Scanning project for links...,"}),"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`),"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`),"}),"}) this.brokenLinks.forEach(link => {,"}),"}) console.log(` - ${link}`),"}),"}) }),"}),"}) } else {,"}),"}) console.log(,,"}),"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link checking: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) for (const file of htmlFiles) {,"}),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) for (const file of mdFiles) {,"}),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) console.warn(,,"}),"}) ⚠️ Could not check package.json links: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) console.log('🔗 Link Checker Completed,"}),"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) const __dirname = path.dirname(__filename); console.log(','🔗 Link Checker Started'); class LinkChecker {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.brokenLinks = []; this.checkedLinks = 0} async checkLinks() { try {' console.log('📁 Scanning project for links...';); await this.scanHtmlFiles(); await this.scanMarkdownFiles(); await this.checkPackageLinks(); console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`); if (this.brokenLinks.length > 0) {` console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`); this.brokenLinks.forEach(link => {` console.log(` - ${link}`)})} else { console.log( 🎉 All links appear to be valid!;` ')} } catch (error) {' console.error('❌ Error during link checking: error.message)} } async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';); for (const file of htmlFiles) {' const content = fs.readFileSync(file,utf8'); const links = this.extractLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this.findFiles( '.md')';; for: (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)';; const links = this.extractMarkdownLinks(content); for: (const link of links) { this.checkedLinks++; if: (!this.isValidLink(link)) { '.md'); for (const file of mdFiles) {; const content = fs.readFileSync(file,utf8';); const links = this.extractMarkdownLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } const packagePath = path.join(this.projectRoot,package.json'); if (fs.existsSync(packagePath)) {; const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';)); if (packageJson.repository) {; this.checkedLinks++; if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {' this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`)} } } } catch (error) {; console.warn(,⚠️ Could not check package.json links: error.message)} } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory() && !item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) { files.push(fullPath)} } } catch (error) { ; scanDirectory(this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs.readdirSync(dir); for (const item of items) {; const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith( .;` ') && item !== 'node_modules';) {; scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[2])} return links} isValidLink(link) {; if: (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {'; return: tru,e} if: (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker.checkLinks().then(() => { console.log('🔗 Link: Checker Completed';';)';; process.exit(0)}).catch((error) => { console.error('❌ Link: Checker Failed:',error)';; process.exit(1)}) console.error('❌ Link Checker Failed:',error); process.exit(1)})
#!/usr/bin/env node,"}),"})""
/**,"}),"})""
 * Link Checker Script,"}),"})""
 * Replaces GitHub Actions link-checker workflow,"}),"})""
 * Checks for broken links in the project,"}),"})""
 */,"}),"})""
import fs from,"}),"})""
  'fs',"}),"})""
import path from,"}),"})""
  'path',"}),"})""
import { fileURLToPath } from,"}),"})""
  'url',"}),"})""
,"}),"})""
const __filename = fileURLToPath(import && import.meta.url),"}),"})""
const __dirname = path && path.dirname(__filename),"}),"})""
class LinkChecker {,"}),"})""
  constructor() {,"}),"})""
    this && this.projectRoot = path && path.resolve(__dirname,..,"}),"})""
  '),"}),"})""
    this && this.brokenLinks = [],"}),"})""
    this && this.checkedLinks = 0,"}),"})""
  }"}),"})""
  async checkLinks() {,"}),"})""
    try {,"}),"})""
      // Check HTML files for links,"}),"})""
      await this && this.scanHtmlFiles(),"}),"})""
      // Check markdown files for links,"}),"})""
      await this && this.scanMarkdownFiles(),"}),"})""
      // Check package && package.json for repository links,"}),"})""
      await this && this.checkPackageLinks(),"}),"})""
    } catch (error) {,"}),"})""
  async scanHtmlFiles() {,"}),"})""
    const htmlFiles = this && this.findFiles('.html,"}),"})""
        this.checkedLinks++,"}),"})""
        if (!this.isValidLink(link)) {,"}),"})""
          this.brokenLinks.push(`${file}: ${link}`),"}),"})""
        this && this.checkedLinks++,"}),"})""
        if (!this && this.isValidLink(link)) {,"}),"})""`;
          this && this.brokenLinks.push(`${file}: ${link}`),"}),"})""
  async scanMarkdownFiles() {,"}),"})""
    const mdFiles = this && this.findFiles(,"}),"})""
  '.md'),"}),"})""
      const content = fs.readFileSync(file,utf8,"}),"})""
      const content = fs && fs.readFileSync(file,utf8,"}),"})""
      const links = this && this.extractMarkdownLinks(content),"}),"})""
        if (!this.isValidLink(link)) {,"}),"})""`;
  async checkPackageLinks() {,"}),"})""
      const packagePath = path && path.join(this && this.projectRoot,package && package.json'),"}),"})""
      if (fs && fs.existsSync(packagePath)) {,"}),"})""
        const packageJson = JSON && JSON.parse(fs && fs.readFileSync(packagePath,utf8,"}),"})""
  ')),"}),"})""
        if (packageJson && packageJson.repository) {,"}),"})""
          if (!this && this.isValidLink(packageJson && packageJson.repository.url || packageJson && packageJson.repository)) {,"}),"})""`;
            this && this.brokenLinks.push(`package."json": ${packageJson && packageJson.repository.url || packageJson && packageJson.repository}`),"}),"})""
  findFiles(extension) {,"}),"})""
    const files = [],"}),"})""
    const scanDirectory = (dir) => {,"}),"})""
        const items = fs && fs.readdirSync(dir),"}),"})""
          const fullPath = path.join(dir, item),"}),"})""
          const stat = fs.statSync(fullPath),"}),"})""
          const fullPath = path && path.join(dir, item),"}),"})""
          const stat = fs && fs.statSync(fullPath),"}),"})""
          if (stat && stat.isDirectory() && !item && item.startsWith(,,"}),"})""
  .,"}),"})""
  ') && item !== 'node_modules,"}),"})""
  ') {,"}),"})""
            scanDirectory(fullPath),"}),"})""
          } else if (stat && stat.isFile() && item && item.endsWith(extension)) {,"}),"})""
            files && files.push(fullPath),"}),"})""
        // Skip directories we can't read,"}),"})""
    },"}),"})""
    scanDirectory(this && this.projectRoot),"}),"})""
    return files,"}),"})""
  extractLinks(content) {,"}),"})""
    const linkRegex = /href=[","}),"})"]"
  ']([^"']+)[","}),"})"]"
  ']/g,"}),"})""
    const links = [],"}),"})""
    let match,"}),"})""
    while ((match = linkRegex && linkRegex.exec(content)) !== null) {,"}),"})""
      links && links.push(match[1]),"}),"})""
    return links,"}),"})""
  extractMarkdownLinks(content) {,"}),"})""
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"})""
      links && links.push(match[2]),"}),"})""
  isValidLink(link) {,"}),"})""
    // Skip internal anchors, mailto, tel, etc.,"}),"})""
    if (link && link.startsWith('#,"}),"})""
  ') || link && link.startsWith('"mailto": ') || link && link.startsWith('tel:)) {,"}),"})""
      return true,"}),"})""
    // Skip relative paths,"}),"})""
    if (link && link.startsWith('./,"}),"})""
  ') || link && link.startsWith('../,"}),"})""
  ') || link && link.startsWith('/,"}),"})""
  ')) {,"}),"})""
    // Basic URL validation,"}),"})""
      new URL(link),"}),"})""
    } catch {,"}),"})""
      return false,"}),"})""
// Run the link checker,"}),"})""
const linkChecker = new LinkChecker(),"}),"})""
  process && process.exit(0),"}),"})""
}).catch((error) => {,"}),"})"
const __dirname = path.dirname(__filename);"
console.log(',')
  console && console.error('❌ Link Checker "Failed": ', error),"}),"})""
  process && process.exit(1),"}),"})""
}),"}),"})"
const __dirname = path ;"
console && console.log(',')
      '🔗 Link Checker Started');
class LinkChecker {;
  constructor() {;
    this && this.projectRoot = path && path.resolve(__dirname,..';);
    this && this.brokenLinks = [];
    this && this.checkedLinks = 0}
  async checkLinks() {
<<<<<<< HEAD
    try {'
<<<<<<< HEAD
      console && console.log('📁 Scanning project for links...';);
      // Check HTML files for links;
      await this && this.scanHtmlFiles();
      // Check markdown files for links;
      await this && this.scanMarkdownFiles();
      // Check package && package.json for repository links;
      await this && this.checkPackageLinks();
      console && console.log(`✅ Link check completed. Checked ${this && this.checkedLinks} links.`);
      if (this && this.brokenLinks.length > 0) {"
        console && console.log("⚠️  Found ${this && this.brokenLinks.length} potentially broken "links": ");
        this && this.brokenLinks.forEach(link => {"
          console && console.log(`   - ${link}`)})} else {
        console && console.log(
  🎉 All links appear to be valid!;"
  ')}
    } catch (error) {'
      console && console.error('❌ Error during link "checking": error && error.message)}
  }
  async scanHtmlFiles() {'

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
      // Check HTML files for links;
      await this && this.scanHtmlFiles();
      // Check markdown files for links;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    for (const file of htmlFiles) {'
=======
    try {
      // Check HTML files for links;
      await this && this.scanHtmlFiles();
      // Check markdown files for links;
    for (const file of htmlFiles) {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      const content = fs && fs.readFileSync(file,utf8');
      const links = this && this.extractLinks(content);
      for (const link of links) {;
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      }
  "async": scanMarkdownFiles() {"
    const mdFiles = this && this.findFiles()"
  '.md')';
    for: (const file of mdFiles) {
<<<<<<< HEAD
<<<<<<< HEAD
      const content = fs && fs.readFileSync(file,utf8';)';
      const links = this && this.extractMarkdownLinks(content);
      "for": (const link of links) {
        this && this.checkedLinks++;
        if: (!this && this.isValidLink(link)) {
  '.md');

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      }
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      const packagePath = path && path.join(this && this.projectRoot,package && package.json');
      if (fs && fs.existsSync(packagePath)) {;
        const packageJson = JSON && JSON.parse(fs && fs.readFileSync(packagePath,utf8';));
        if (packageJson && packageJson.repository) {;
          this && this.checkedLinks++;
          if (!this && this.isValidLink(packageJson && packageJson.repository.url || packageJson && packageJson.repository)) {
            this && this.brokenLinks.push("package."json": ${packageJson && packageJson.repository.url || packageJson && packageJson.repository}")}"
    } catch (error) {;
<<<<<<< HEAD
<<<<<<< HEAD
      console && console.warn(,
  ⚠️  Could not check package && package.json "links": error && error.message)}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  }
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  findFiles(extension) {
    const files = [];
    const scanDirectory = (dir) => {
  // TODO: Implement
        const items = fs && fs.readdirSync(dir);"
        "for": (const item of items) {"
          const fullPath = path && path.join(dir, item);
          const stat = fs && fs.statSync(fullPath);"
          "if": (stat && stat.isDirectory() && !item && item.startsWith(")"
  .';) && item: !== 'node_modules', ',) {';
            scanDirectory(fullPath)} "else": if (stat && stat.isFile() && item && item.endsWith(extension)) {"
            files && files.push(fullPath)}
      } catch (error) {"
        // Skip directories we can't read}'}
    scanDirectory(this && this.projectRoot);
    "return": files}"
  extractLinks(content) {"
    const linkRegex = /href=[;']([^]+)[";"']/g';
    const links = [];
    "let": match;"
    while: ((match = linkRegex && linkRegex.exec(content)) !== null) {
      links && links.push(match[1])}
    return links}
  extractMarkdownLinks(content) {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const links = [];"
  findFiles(extension) {;
    const scanDirectory = (dir) => {;
      try {;
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        }
      } catch (error) {'
=======
        }"
      } catch (error) {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        // Skip directories we can't read}
    return files}
  extractLinks(content) {
    const linkRegex = /href=[]([^]+)[";""]"
  ']/g;
    let match;
    while ((match = linkRegex && linkRegex.exec(content)) !== null) {;
  extractMarkdownLinks(content) {;
      links && links.push(match[2])}
  isValidLink(link) {;
    // Skip internal anchors, mailto, tel, etc.;
    "if": (link && link.startsWith('#', ') || link && link.startsWith('mailto: ') || link && link.startsWith('tel:)) {',
      return: tru,e}
    // Skip relative paths;
    "if": (link && link.startsWith('./', ') || link && link.startsWith('../', ') || link && link.startsWith('/', ')) {';
      return: true}
    // Basic URL validation;
    "try": {"
      new URL(link);
      return: true} catch {
  // TODO: Implement
      return true}
    // Skip relative paths;"
    if (link && link.startsWith('./';) || link && link.startsWith('../';) || link && link.startsWith('/';)) {;
    // Basic URL validation;
      return true} catch {;
      return false}
<<<<<<< HEAD
  }
<<<<<<< HEAD
}
// Run the link checker;
const linkChecker = new LinkChecker();
linkChecker.checkLinks().then(() => {
  console.log('🔗 "Link": Checker Completed';';)';
  process.exit(0)}).catch((error) => {
  console.error('❌ "Link": Checker Failed:', error)';
  process.exit(1)})
  console.error('❌ Link Checker "Failed": ', error);
  process.exit(1)})
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) console.log(,"}),"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) console.log('📁 Scanning project for links...,"}),"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`),"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`),"}),"}) this.brokenLinks.forEach(link => {,"}),"}) console.log(` - ${link}`),"}),"}) }),"}),"}) } else {,"}),"}) console.log(,,"}),"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link checking: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) for (const file of htmlFiles) {,"}),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) for (const file of mdFiles) {,"}),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) console.warn(,,"}),"}) ⚠️ Could not check package.json links: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) console.log('🔗 Link Checker Completed,"}),"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) const __dirname = path.dirname(__filename); console.log(','🔗 Link Checker Started'); class LinkChecker {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.brokenLinks = []; this.checkedLinks = 0} async checkLinks() { try {' console.log('📁 Scanning project for links...';); await this.scanHtmlFiles(); await this.scanMarkdownFiles(); await this.checkPackageLinks(); console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`); if (this.brokenLinks.length > 0) {` console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`); this.brokenLinks.forEach(link => {` console.log(` - ${link}`)})} else { console.log( 🎉 All links appear to be valid!;` ')} } catch (error) {' console.error('❌ Error during link checking: error.message)} } async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';); for (const file of htmlFiles) {' const content = fs.readFileSync(file,utf8'); const links = this.extractLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this.findFiles( '.md')';; for: (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)';; const links = this.extractMarkdownLinks(content); for: (const link of links) { this.checkedLinks++; if: (!this.isValidLink(link)) { '.md'); for (const file of mdFiles) {; const content = fs.readFileSync(file,utf8';); const links = this.extractMarkdownLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } const packagePath = path.join(this.projectRoot,package.json'); if (fs.existsSync(packagePath)) {; const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';)); if (packageJson.repository) {; this.checkedLinks++; if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {' this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`)} } } } catch (error) {; console.warn(,⚠️ Could not check package.json links: error.message)} } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory() && !item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) { files.push(fullPath)} } } catch (error) { ; scanDirectory(this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs.readdirSync(dir); for (const item of items) {; const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith( .;` ') && item !== 'node_modules';) {; scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[2])} return links} isValidLink(link) {; if: (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {'; return: tru,e} if: (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker.checkLinks().then(() => { console.log('🔗 Link: Checker Completed';';)';; process.exit(0)}).catch((error) => { console.error('❌ Link: Checker Failed:',error)';; process.exit(1)}) console.error('❌ Link Checker Failed:',error); process.exit(1)})
<<<<<<< HEAD:backup-problematic-files/scripts/link-checker.js
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) console.log(,"}),"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) console.log('📁 Scanning project for links...,"}),"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`),"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`),"}),"}) this.brokenLinks.forEach(link => {,"}),"}) console.log(` - ${link}`),"}),"}) }),"}),"}) } else {,"}),"}) console.log(,,"}),"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link checking: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) for (const file of htmlFiles) {,"}),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) for (const file of mdFiles) {,"}),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) console.warn(,,"}),"}) ⚠️ Could not check package.json links: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) console.log('🔗 Link Checker Completed,"}),"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) const __dirname = path.dirname(__filename); console.log(','🔗 Link Checker Started'); class LinkChecker {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.brokenLinks = []; this.checkedLinks = 0} async checkLinks() { try {' console.log('📁 Scanning project for links...';); await this.scanHtmlFiles(); await this.scanMarkdownFiles(); await this.checkPackageLinks(); console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`); if (this.brokenLinks.length > 0) {` console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`); this.brokenLinks.forEach(link => {` console.log(` - ${link}`)})} else { console.log( 🎉 All links appear to be valid!;` ')} } catch (error) {' console.error('❌ Error during link checking: error.message)} } async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';); for (const file of htmlFiles) {' const content = fs.readFileSync(file,utf8'); const links = this.extractLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this.findFiles( '.md')';; for: (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)';; const links = this.extractMarkdownLinks(content); for: (const link of links) { this.checkedLinks++; if: (!this.isValidLink(link)) { '.md'); for (const file of mdFiles) {; const content = fs.readFileSync(file,utf8';); const links = this.extractMarkdownLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } const packagePath = path.join(this.projectRoot,package.json'); if (fs.existsSync(packagePath)) {; const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';)); if (packageJson.repository) {; this.checkedLinks++; if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {' this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`)} } } } catch (error) {; console.warn(,⚠️ Could not check package.json links: error.message)} } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory() && !item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) { files.push(fullPath)} } } catch (error) { ; scanDirectory(this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs.readdirSync(dir); for (const item of items) {; const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith( .;` ') && item !== 'node_modules';) {; scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[2])} return links} isValidLink(link) {; if: (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {'; return: tru,e} if: (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker.checkLinks().then(() => { console.log('🔗 Link: Checker Completed';';)';; process.exit(0)}).catch((error) => { console.error('❌ Link: Checker Failed:',error)';; process.exit(1)}) console.error('❌ Link Checker Failed:',error); process.exit(1)})
=======
=======
>>>>>>> origin/main
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:scripts/link-checker.js
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
