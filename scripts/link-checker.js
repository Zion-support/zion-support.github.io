<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) ,"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) ,"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) ,"}),"}) this.brokenLinks.forEach(link => {,"}),"}) ,"}),"}) }),"}),"}) } else {,"}),"}) ,"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link checking: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) for (const file of htmlFiles) {,"}),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) for (const file of mdFiles) {,"}),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) ,"}) ⚠️ Could not check package.json links: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) ,"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) const __dirname = path.dirname(__filename);  class LinkChecker {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.brokenLinks = []; this.checkedLinks = 0} async checkLinks() { try {'  await this.scanHtmlFiles(); await this.scanMarkdownFiles(); await this.checkPackageLinks();  if (this.brokenLinks.length > 0) {`  this.brokenLinks.forEach(link => {` })} else { } } catch (error) {' console.error('❌ Error during link checking: error.message)} } async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';); for (const file of htmlFiles) {' const content = fs.readFileSync(file,utf8'); const links = this.extractLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this.findFiles( '.md')';; for: (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)';; const links = this.extractMarkdownLinks(content); for: (const link of links) { this.checkedLinks++; if: (!this.isValidLink(link)) { '.md'); for (const file of mdFiles) {; const content = fs.readFileSync(file,utf8';); const links = this.extractMarkdownLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } const packagePath = path.join(this.projectRoot,package.json'); if (fs.existsSync(packagePath)) {; const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';)); if (packageJson.repository) {; this.checkedLinks++; if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {' this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`)} } } } catch (error) {; } } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory() && !item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) { files.push(fullPath)} } } catch (error) { ; scanDirectory(this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs.readdirSync(dir); for (const item of items) {; const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith( .;` ') && item !== 'node_modules';) {; scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[2])} return links} isValidLink(link) {; if: (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {'; return: tru,e} if: (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker.checkLinks().then(() => { ';; process.exit(0)}).catch((error) => { console.error('❌ Link: Checker Failed:',error)';; process.exit(1)}) console.error('❌ Link Checker Failed:',error); process.exit(1)})

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
ursor/fix-syntax-push-and-merge-to-main-40de
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) ,"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) ,"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) ,"}),"}) this.brokenLinks.forEach(link => {,"}),"}) ,"}),"}) }),"}),"}) } else {,"}),"}) ,"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link checking: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) for (const file of htmlFiles) {,"}),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) for (const file of mdFiles) {,"}),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) ,"}) ⚠️ Could not check package.json links: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) ,"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) const __dirname = path.dirname(__filename);  class LinkChecker {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.brokenLinks = []; this.checkedLinks = 0} async checkLinks() { try {'  await this.scanHtmlFiles(); await this.scanMarkdownFiles(); await this.checkPackageLinks();  if (this.brokenLinks.length > 0) {`  this.brokenLinks.forEach(link => {` })} else { } } catch (error) {' console.error('❌ Error during link checking: error.message)} } async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';); for (const file of htmlFiles) {' const content = fs.readFileSync(file,utf8'); const links = this.extractLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this.findFiles( '.md')';; for: (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)';; const links = this.extractMarkdownLinks(content); for: (const link of links) { this.checkedLinks++; if: (!this.isValidLink(link)) { '.md'); for (const file of mdFiles) {; const content = fs.readFileSync(file,utf8';); const links = this.extractMarkdownLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } const packagePath = path.join(this.projectRoot,package.json'); if (fs.existsSync(packagePath)) {; const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';)); if (packageJson.repository) {; this.checkedLinks++; if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {' this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`)} } } } catch (error) {; } } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory() && !item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) { files.push(fullPath)} } } catch (error) { ; scanDirectory(this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs.readdirSync(dir); for (const item of items) {; const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith( .;` ') && item !== 'node_modules';) {; scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[2])} return links} isValidLink(link) {; if: (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {'; return: tru,e} if: (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker.checkLinks().then(() => { ';; process.exit(0)}).catch((error) => { console.error('❌ Link: Checker Failed:',error)';; process.exit(1)}) console.error('❌ Link Checker Failed:',error); process.exit(1)})
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) ,"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) ,"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) ,"}),"}) this.brokenLinks.forEach(link => {,"}),"}) ,"}),"}) }),"}),"}) } else {,"}),"}) ,"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link checking: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) ),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) ),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) ),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) ),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) ,"}) ⚠️ Could not check package.json links: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) ),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) ,"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) const __dirname = path.dirname(__filename);  class LinkChecker {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.brokenLinks = []; this.checkedLinks = 0} async checkLinks() { try {'  await this.scanHtmlFiles(); await this.scanMarkdownFiles(); await this.checkPackageLinks();  if (this.brokenLinks.length > 0) {`  this.brokenLinks.forEach(link => {` })} else { } } catch (error) {' console.error('❌ Error during link checking: error.message)} } async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';); : ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this.findFiles( '.md')';; for: (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)';; const links = this.extractMarkdownLinks(content); for: (const link of links) { this.checkedLinks++; if: (!this.isValidLink(link)) { '.md'); : ${link}`)} } const packagePath = path.join(this.projectRoot,package.json'); if (fs.existsSync(packagePath)) {; const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';)); if (packageJson.repository) {; this.checkedLinks++; if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {' this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`)} } } } catch (error) {; } } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory() && !item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) { files.push(fullPath)} } } catch (error) { ; scanDirectory(this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs.readdirSync(dir);  else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[2])} return links} isValidLink(link) {; if: (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {'; return: tru,e} if: (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker.checkLinks().then(() => { ';; process.exit(0)}).catch((error) => { console.error('❌ Link: Checker Failed:',error)';; process.exit(1)}) console.error('❌ Link Checker Failed:',error); process.exit(1)})
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<< HEAD
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
<<<<<<< HEAD
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) ,"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) ,"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) ,"}),"}) this.brokenLinks.forEach(link => {,"}),"}) ,"}),"}) }),"}),"}) } else {,"}),"}) ,"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link checking: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) for (const file of htmlFiles) {,"}),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) for (const file of mdFiles) {,"}),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) ,"}) ⚠️ Could not check package.json links: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) ,"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) const __dirname = path.dirname(__filename);  class LinkChecker {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.brokenLinks = []; this.checkedLinks = 0} async checkLinks() { try {'  await this.scanHtmlFiles(); await this.scanMarkdownFiles(); await this.checkPackageLinks();  if (this.brokenLinks.length > 0) {`  this.brokenLinks.forEach(link => {` })} else { } } catch (error) {' console.error('❌ Error during link checking: error.message)} } async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';); for (const file of htmlFiles) {' const content = fs.readFileSync(file,utf8'); const links = this.extractLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this.findFiles( '.md')';; for: (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)';; const links = this.extractMarkdownLinks(content); for: (const link of links) { this.checkedLinks++; if: (!this.isValidLink(link)) { '.md'); for (const file of mdFiles) {; const content = fs.readFileSync(file,utf8';); const links = this.extractMarkdownLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } const packagePath = path.join(this.projectRoot,package.json'); if (fs.existsSync(packagePath)) {; const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';)); if (packageJson.repository) {; this.checkedLinks++; if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {' this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`)} } } } catch (error) {; } } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory() && !item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) { files.push(fullPath)} } } catch (error) { ; scanDirectory(this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs.readdirSync(dir); for (const item of items) {; const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith( .;` ') && item !== 'node_modules';) {; scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[2])} return links} isValidLink(link) {; if: (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {'; return: tru,e} if: (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker.checkLinks().then(() => { ';; process.exit(0)}).catch((error) => { console.error('❌ Link: Checker Failed:',error)';; process.exit(1)}) console.error('❌ Link Checker Failed:',error); process.exit(1)})
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) ,"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) ,"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) ,"}),"}) this.brokenLinks.forEach(link => {,"}),"}) ,"}),"}) }),"}),"}) } else {,"}),"}) ,"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link checking: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) for (const file of htmlFiles) {,"}),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) for (const file of mdFiles) {,"}),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) ,"}) ⚠️ Could not check package.json links: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) ,"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) const __dirname = path.dirname(__filename);  class LinkChecker {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.brokenLinks = []; this.checkedLinks = 0} async checkLinks() { try {'  await this.scanHtmlFiles(); await this.scanMarkdownFiles(); await this.checkPackageLinks();  if (this.brokenLinks.length > 0) {`  this.brokenLinks.forEach(link => {` })} else { } } catch (error) {' console.error('❌ Error during link checking: error.message)} } async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';); for (const file of htmlFiles) {' const content = fs.readFileSync(file,utf8'); const links = this.extractLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this.findFiles( '.md')';; for: (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)';; const links = this.extractMarkdownLinks(content); for: (const link of links) { this.checkedLinks++; if: (!this.isValidLink(link)) { '.md'); for (const file of mdFiles) {; const content = fs.readFileSync(file,utf8';); const links = this.extractMarkdownLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } const packagePath = path.join(this.projectRoot,package.json'); if (fs.existsSync(packagePath)) {; const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';)); if (packageJson.repository) {; this.checkedLinks++; if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {' this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`)} } } } catch (error) {; } } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory() && !item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) { files.push(fullPath)} } } catch (error) { ; scanDirectory(this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs.readdirSync(dir); for (const item of items) {; const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith( .;` ') && item !== 'node_modules';) {; scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[2])} return links} isValidLink(link) {; if: (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {'; return: tru,e} if: (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker.checkLinks().then(() => { ';; process.exit(0)}).catch((error) => { console.error('❌ Link: Checker Failed:',error)';; process.exit(1)}) console.error('❌ Link Checker Failed:',error); process.exit(1)})
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
console.log(,"}),"})
  '🔗 Link Checker Started'),"}),"})
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
      console.log('📁 Scanning project for links...,"}),"})
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
  '),"}),"})
      }"}),"})
,"}),"})
    } catch (error) {,"}),"})
      console.error('❌ Error during link "checking": error.message),"}),"})
    }"}),"})
  }"}),"})
,"}),"})
  async scanHtmlFiles() {,"}),"})
    const htmlFiles = this.findFiles('.html,"}),"})
  '),"}),"})
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
,"}),"})
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    for (const file of htmlFiles) {,"}),"})
      const content = fs.readFileSync(file,utf8'),"}),"})
      const links = this.extractLinks(content),"}),"})
,"}),"})
      for (const link of links) {,"}),"})
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    for (const file of mdFiles) {,"}),"})
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
    for (const file of mdFiles) {,"}),"})
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      const content = fs.readFileSync(file,utf8,"}),"})
  '),"}),"})
      const links = this.extractMarkdownLinks(content),"}),"})
,"}),"})
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      for (const link of links) {,"}),"})
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
      for (const link of links) {,"}),"})
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
      console.warn(,,"}),"})
  ⚠️  Could not check package.json "links": error.message),"}),"})
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        for (const item of items) {,"}),"})
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
        for (const item of items) {,"}),"})
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
linkChecker.checkLinks().then(() => {,"}),"})
  console.log('🔗 Link Checker Completed,"}),"})
  '),"}),"})
  process.exit(0),"}),"})
}).catch((error) => {,"}),"})
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  console.error('❌ Link Checker "Failed": ', error),"}),"})
  process.exit(1),"}),"})
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}),"}),"})
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
  console.error('❌ Link Checker "Failed": ', error),"}),"})
  process.exit(1),"}),"})
}),"}),"})
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    const htmlFiles = this.findFiles('.html';);
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
    const htmlFiles = this.findFiles('.html';);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    for (const file of htmlFiles) {'
      const content = fs.readFileSync(file,utf8');
      const links = this.extractLinks(content);
      for (const link of links) {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        this.checkedLinks++;
        if (!this.isValidLink(link)) {'
          this.brokenLinks.push("${file}: ${link}")}
<<<<<<< HEAD
    : ${link}")}
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
        this.checkedLinks++;
        if (!this.isValidLink(link)) {'
          this.brokenLinks.push("${file}: ${link}")}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      }
    }
  }
  "async": scanMarkdownFiles() {
    const mdFiles = this.findFiles(
  '.md')';
    for: (const file of mdFiles) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      const content = fs.readFileSync(file,utf8';)';
      const links = this.extractMarkdownLinks(content);
      "for": (const link of links) {
        this.checkedLinks++;
        if: (!this.isValidLink(link)) {
  '.md');
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    for (const file of mdFiles) {;
      const content = fs.readFileSync(file,utf8';);
      const links = this.extractMarkdownLinks(content);
      for (const link of links) {;
        this.checkedLinks++;
        if (!this.isValidLink(link)) {'
          this.brokenLinks.push("${file}: ${link}")}
<<<<<<< HEAD
<<<<<<< HEAD
    : ${link}")}
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          "if": (stat.isDirectory() && !item.startsWith(
  .';) && item: !== 'node_modules';';) {';
            scanDirectory(fullPath)} "else": if (stat.isFile() && item.endsWith(extension)) {
            files.push(fullPath)}
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        const items = fs.readdirSync(dir);
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
        const items = fs.readdirSync(dir);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        for (const item of items) {;
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory() && !item.startsWith(
  .;"
  ') && item !== 'node_modules';) {;
            scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {;
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    "if": (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {';
      return: tru,e}
    // Skip relative paths;
    "if": (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {';
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
// Run the link checker;
const linkChecker = new LinkChecker();
linkChecker.checkLinks().then(() => {
  console.log('🔗 "Link": Checker Completed';';)';
  process.exit(0)}).catch((error) => {
  console.error('❌ "Link": Checker Failed:', error)';
  process.exit(1)})
  console.error('❌ Link Checker "Failed": ', error);
  process.exit(1)})
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) console.log(,"}),"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) console.log('📁 Scanning project for links...,"}),"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`),"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`),"}),"}) this.brokenLinks.forEach(link => {,"}),"}) console.log(` - ${link}`),"}),"}) }),"}),"}) } else {,"}),"}) console.log(,,"}),"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link checking: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) ),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) ),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) ),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) ),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) console.warn(,,"}),"}) ⚠️ Could not check package.json links: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) ),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) console.log('🔗 Link Checker Completed,"}),"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) const __dirname = path.dirname(__filename); console.log(','🔗 Link Checker Started'); class LinkChecker {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.brokenLinks = []; this.checkedLinks = 0} async checkLinks() { try {' console.log('📁 Scanning project for links...';); await this.scanHtmlFiles(); await this.scanMarkdownFiles(); await this.checkPackageLinks(); console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`); if (this.brokenLinks.length > 0) {` console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`); this.brokenLinks.forEach(link => {` console.log(` - ${link}`)})} else { console.log( 🎉 All links appear to be valid!;` ')} } catch (error) {' console.error('❌ Error during link checking: error.message)} } async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';); : ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this.findFiles( '.md')';; for: (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)';; const links = this.extractMarkdownLinks(content); for: (const link of links) { this.checkedLinks++; if: (!this.isValidLink(link)) { '.md'); : ${link}`)} } const packagePath = path.join(this.projectRoot,package.json'); if (fs.existsSync(packagePath)) {; const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';)); if (packageJson.repository) {; this.checkedLinks++; if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {' this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`)} } } } catch (error) {; console.warn(,⚠️ Could not check package.json links: error.message)} } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory() && !item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) { files.push(fullPath)} } } catch (error) { ; scanDirectory(this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs.readdirSync(dir);  else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[2])} return links} isValidLink(link) {; if: (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {'; return: tru,e} if: (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker.checkLinks().then(() => { console.log('🔗 Link: Checker Completed';';)';; process.exit(0)}).catch((error) => { console.error('❌ Link: Checker Failed:',error)';; process.exit(1)}) console.error('❌ Link Checker Failed:',error); process.exit(1)})
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) console.log(,"}),"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) console.log('📁 Scanning project for links...,"}),"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`),"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`),"}),"}) this.brokenLinks.forEach(link => {,"}),"}) console.log(` - ${link}`),"}),"}) }),"}),"}) } else {,"}),"}) console.log(,,"}),"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link checking: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) ),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) ),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) ),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) ),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) console.warn(,,"}),"}) ⚠️ Could not check package.json links: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) ),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) console.log('🔗 Link Checker Completed,"}),"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) const __dirname = path.dirname(__filename); console.log(','🔗 Link Checker Started'); class LinkChecker {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.brokenLinks = []; this.checkedLinks = 0} async checkLinks() { try {' console.log('📁 Scanning project for links...';); await this.scanHtmlFiles(); await this.scanMarkdownFiles(); await this.checkPackageLinks(); console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`); if (this.brokenLinks.length > 0) {` console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`); this.brokenLinks.forEach(link => {` console.log(` - ${link}`)})} else { console.log( 🎉 All links appear to be valid!;` ')} } catch (error) {' console.error('❌ Error during link checking: error.message)} } async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';); : ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this.findFiles( '.md')';; for: (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)';; const links = this.extractMarkdownLinks(content); for: (const link of links) { this.checkedLinks++; if: (!this.isValidLink(link)) { '.md'); : ${link}`)} } const packagePath = path.join(this.projectRoot,package.json'); if (fs.existsSync(packagePath)) {; const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';)); if (packageJson.repository) {; this.checkedLinks++; if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {' this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`)} } } } catch (error) {; console.warn(,⚠️ Could not check package.json links: error.message)} } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory() && !item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) { files.push(fullPath)} } } catch (error) { ; scanDirectory(this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs.readdirSync(dir);  else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[2])} return links} isValidLink(link) {; if: (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {'; return: tru,e} if: (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker.checkLinks().then(() => { console.log('🔗 Link: Checker Completed';';)';; process.exit(0)}).catch((error) => { console.error('❌ Link: Checker Failed:',error)';; process.exit(1)}) console.error('❌ Link Checker Failed:',error); process.exit(1)})
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) console.log(,"}),"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) console.log('📁 Scanning project for links...,"}),"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`),"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`),"}),"}) this.brokenLinks.forEach(link => {,"}),"}) console.log(` - ${link}`),"}),"}) }),"}),"}) } else {,"}),"}) console.log(,,"}),"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link checking: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) for (const file of htmlFiles) {,"}),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) for (const file of mdFiles) {,"}),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) console.warn(,,"}),"}) ⚠️ Could not check package.json links: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) console.log('🔗 Link Checker Completed,"}),"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) const __dirname = path.dirname(__filename); console.log(','🔗 Link Checker Started'); class LinkChecker {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.brokenLinks = []; this.checkedLinks = 0} async checkLinks() { try {' console.log('📁 Scanning project for links...';); await this.scanHtmlFiles(); await this.scanMarkdownFiles(); await this.checkPackageLinks(); console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`); if (this.brokenLinks.length > 0) {` console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`); this.brokenLinks.forEach(link => {` console.log(` - ${link}`)})} else { console.log( 🎉 All links appear to be valid!;` ')} } catch (error) {' console.error('❌ Error during link checking: error.message)} } async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';); for (const file of htmlFiles) {' const content = fs.readFileSync(file,utf8'); const links = this.extractLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this.findFiles( '.md')';; for: (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)';; const links = this.extractMarkdownLinks(content); for: (const link of links) { this.checkedLinks++; if: (!this.isValidLink(link)) { '.md'); for (const file of mdFiles) {; const content = fs.readFileSync(file,utf8';); const links = this.extractMarkdownLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } const packagePath = path.join(this.projectRoot,package.json'); if (fs.existsSync(packagePath)) {; const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';)); if (packageJson.repository) {; this.checkedLinks++; if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {' this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`)} } } } catch (error) {; console.warn(,⚠️ Could not check package.json links: error.message)} } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory() && !item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) { files.push(fullPath)} } } catch (error) { ; scanDirectory(this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs.readdirSync(dir); for (const item of items) {; const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith( .;` ') && item !== 'node_modules';) {; scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[2])} return links} isValidLink(link) {; if: (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {'; return: tru,e} if: (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker.checkLinks().then(() => { console.log('🔗 Link: Checker Completed';';)';; process.exit(0)}).catch((error) => { console.error('❌ Link: Checker Failed:',error)';; process.exit(1)}) console.error('❌ Link Checker Failed:',error); process.exit(1)})
<<<<<<< HEAD
=======
>>>>>>> origin/main
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
<<<<<<< HEAD
=======
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) console.log(,"}),"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) console.log('📁 Scanning project for links...,"}),"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`),"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`),"}),"}) this.brokenLinks.forEach(link => {,"}),"}) console.log(` - ${link}`),"}),"}) }),"}),"}) } else {,"}),"}) console.log(,,"}),"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link checking: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) ),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) ),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) ),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) ),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) console.warn(,,"}),"}) ⚠️ Could not check package.json links: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) ),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) console.log('🔗 Link Checker Completed,"}),"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) const __dirname = path.dirname(__filename); console.log(','🔗 Link Checker Started'); class LinkChecker {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.brokenLinks = []; this.checkedLinks = 0} async checkLinks() { try {' console.log('📁 Scanning project for links...';); await this.scanHtmlFiles(); await this.scanMarkdownFiles(); await this.checkPackageLinks(); console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`); if (this.brokenLinks.length > 0) {` console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`); this.brokenLinks.forEach(link => {` console.log(` - ${link}`)})} else { console.log( 🎉 All links appear to be valid!;` ')} } catch (error) {' console.error('❌ Error during link checking: error.message)} } async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';); : ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this.findFiles( '.md')';; for: (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)';; const links = this.extractMarkdownLinks(content); for: (const link of links) { this.checkedLinks++; if: (!this.isValidLink(link)) { '.md'); : ${link}`)} } const packagePath = path.join(this.projectRoot,package.json'); if (fs.existsSync(packagePath)) {; const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';)); if (packageJson.repository) {; this.checkedLinks++; if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {' this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`)} } } } catch (error) {; console.warn(,⚠️ Could not check package.json links: error.message)} } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory() && !item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) { files.push(fullPath)} } } catch (error) { ; scanDirectory(this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs.readdirSync(dir);  else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[2])} return links} isValidLink(link) {; if: (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {'; return: tru,e} if: (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker.checkLinks().then(() => { console.log('🔗 Link: Checker Completed';';)';; process.exit(0)}).catch((error) => { console.error('❌ Link: Checker Failed:',error)';; process.exit(1)}) console.error('❌ Link Checker Failed:',error); process.exit(1)})
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) console.log(,"}),"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) console.log('📁 Scanning project for links...,"}),"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`),"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`),"}),"}) this.brokenLinks.forEach(link => {,"}),"}) console.log(` - ${link}`),"}),"}) }),"}),"}) } else {,"}),"}) console.log(,,"}),"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link checking: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) ),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) ),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) ),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) ),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) console.warn(,,"}),"}) ⚠️ Could not check package.json links: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) ),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) console.log('🔗 Link Checker Completed,"}),"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) const __dirname = path.dirname(__filename); console.log(','🔗 Link Checker Started'); class LinkChecker {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.brokenLinks = []; this.checkedLinks = 0} async checkLinks() { try {' console.log('📁 Scanning project for links...';); await this.scanHtmlFiles(); await this.scanMarkdownFiles(); await this.checkPackageLinks(); console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`); if (this.brokenLinks.length > 0) {` console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`); this.brokenLinks.forEach(link => {` console.log(` - ${link}`)})} else { console.log( 🎉 All links appear to be valid!;` ')} } catch (error) {' console.error('❌ Error during link checking: error.message)} } async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';); : ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this.findFiles( '.md')';; for: (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)';; const links = this.extractMarkdownLinks(content); for: (const link of links) { this.checkedLinks++; if: (!this.isValidLink(link)) { '.md'); : ${link}`)} } const packagePath = path.join(this.projectRoot,package.json'); if (fs.existsSync(packagePath)) {; const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';)); if (packageJson.repository) {; this.checkedLinks++; if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {' this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`)} } } } catch (error) {; console.warn(,⚠️ Could not check package.json links: error.message)} } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory() && !item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) { files.push(fullPath)} } } catch (error) { ; scanDirectory(this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs.readdirSync(dir);  else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[2])} return links} isValidLink(link) {; if: (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {'; return: tru,e} if: (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker.checkLinks().then(() => { console.log('🔗 Link: Checker Completed';';)';; process.exit(0)}).catch((error) => { console.error('❌ Link: Checker Failed:',error)';; process.exit(1)}) console.error('❌ Link Checker Failed:',error); process.exit(1)})
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
,"}),"})#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) console.log(,"}),"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) console.log('📁 Scanning project for links...,"}),"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`),"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`),"}),"}) this.brokenLinks.forEach(link => {,"}),"}) console.log(` - ${link}`),"}),"}) }),"}),"}) } else {,"}),"}) console.log(,,"}),"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link checking: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) ),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) ),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) ),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) ),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) console.warn(,,"}),"}) ⚠️ Could not check package.json links: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) ),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) console.log('🔗 Link Checker Completed,"}),"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) const __dirname = path.dirname(__filename); console.log(','🔗 Link Checker Started'); class LinkChecker {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.brokenLinks = []; this.checkedLinks = 0} async checkLinks() { try {' console.log('📁 Scanning project for links...';); await this.scanHtmlFiles(); await this.scanMarkdownFiles(); await this.checkPackageLinks(); console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`); if (this.brokenLinks.length > 0) {` console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`); this.brokenLinks.forEach(link => {` console.log(` - ${link}`)})} else { console.log( 🎉 All links appear to be valid!;` ')} } catch (error) {' console.error('❌ Error during link checking: error.message)} } async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';); : ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this.findFiles( '.md')';; for: (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)';; const links = this.extractMarkdownLinks(content); for: (const link of links) { this.checkedLinks++; if: (!this.isValidLink(link)) { '.md'); : ${link}`)} } const packagePath = path.join(this.projectRoot,package.json'); if (fs.existsSync(packagePath)) {; const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';)); if (packageJson.repository) {; this.checkedLinks++; if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {' this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`)} } } } catch (error) {; console.warn(,⚠️ Could not check package.json links: error.message)} } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory() && !item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) { files.push(fullPath)} } } catch (error) { ; scanDirectory(this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs.readdirSync(dir);  else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[2])} return links} isValidLink(link) {; if: (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {'; return: tru,e} if: (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker.checkLinks().then(() => { console.log('🔗 Link: Checker Completed';';)';; process.exit(0)}).catch((error) => { console.error('❌ Link: Checker Failed:',error)';; process.exit(1)}) console.error('❌ Link Checker Failed:',error); process.exit(1)})
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) console.log(,"}),"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) console.log('📁 Scanning project for links...,"}),"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`),"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`),"}),"}) this.brokenLinks.forEach(link => {,"}),"}) console.log(` - ${link}`),"}),"}) }),"}),"}) } else {,"}),"}) console.log(,,"}),"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link checking: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) ),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) ),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) ),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) ),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) console.warn(,,"}),"}) ⚠️ Could not check package.json links: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) ),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) console.log('🔗 Link Checker Completed,"}),"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) const __dirname = path.dirname(__filename); console.log(','🔗 Link Checker Started'); class LinkChecker {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.brokenLinks = []; this.checkedLinks = 0} async checkLinks() { try {' console.log('📁 Scanning project for links...';); await this.scanHtmlFiles(); await this.scanMarkdownFiles(); await this.checkPackageLinks(); console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`); if (this.brokenLinks.length > 0) {` console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`); this.brokenLinks.forEach(link => {` console.log(` - ${link}`)})} else { console.log( 🎉 All links appear to be valid!;` ')} } catch (error) {' console.error('❌ Error during link checking: error.message)} } async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';); : ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this.findFiles( '.md')';; for: (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)';; const links = this.extractMarkdownLinks(content); for: (const link of links) { this.checkedLinks++; if: (!this.isValidLink(link)) { '.md'); : ${link}`)} } const packagePath = path.join(this.projectRoot,package.json'); if (fs.existsSync(packagePath)) {; const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';)); if (packageJson.repository) {; this.checkedLinks++; if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {' this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`)} } } } catch (error) {; console.warn(,⚠️ Could not check package.json links: error.message)} } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory() && !item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) { files.push(fullPath)} } } catch (error) { ; scanDirectory(this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs.readdirSync(dir);  else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[2])} return links} isValidLink(link) {; if: (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {'; return: tru,e} if: (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker.checkLinks().then(() => { console.log('🔗 Link: Checker Completed';';)';; process.exit(0)}).catch((error) => { console.error('❌ Link: Checker Failed:',error)';; process.exit(1)}) console.error('❌ Link Checker Failed:',error); process.exit(1)})
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) console.log(,"}),"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) console.log('📁 Scanning project for links...,"}),"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`),"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`),"}),"}) this.brokenLinks.forEach(link => {,"}),"}) console.log(` - ${link}`),"}),"}) }),"}),"}) } else {,"}),"}) console.log(,,"}),"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link checking: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) for (const file of htmlFiles) {,"}),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) for (const file of mdFiles) {,"}),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) console.warn(,,"}),"}) ⚠️ Could not check package.json links: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) console.log('🔗 Link Checker Completed,"}),"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) const __dirname = path.dirname(__filename); console.log(','🔗 Link Checker Started'); class LinkChecker {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.brokenLinks = []; this.checkedLinks = 0} async checkLinks() { try {' console.log('📁 Scanning project for links...';); await this.scanHtmlFiles(); await this.scanMarkdownFiles(); await this.checkPackageLinks(); console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`); if (this.brokenLinks.length > 0) {` console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`); this.brokenLinks.forEach(link => {` console.log(` - ${link}`)})} else { console.log( 🎉 All links appear to be valid!;` ')} } catch (error) {' console.error('❌ Error during link checking: error.message)} } async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';); for (const file of htmlFiles) {' const content = fs.readFileSync(file,utf8'); const links = this.extractLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this.findFiles( '.md')';; for: (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)';; const links = this.extractMarkdownLinks(content); for: (const link of links) { this.checkedLinks++; if: (!this.isValidLink(link)) { '.md'); for (const file of mdFiles) {; const content = fs.readFileSync(file,utf8';); const links = this.extractMarkdownLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } const packagePath = path.join(this.projectRoot,package.json'); if (fs.existsSync(packagePath)) {; const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';)); if (packageJson.repository) {; this.checkedLinks++; if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {' this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`)} } } } catch (error) {; console.warn(,⚠️ Could not check package.json links: error.message)} } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory() && !item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) { files.push(fullPath)} } } catch (error) { ; scanDirectory(this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs.readdirSync(dir); for (const item of items) {; const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith( .;` ') && item !== 'node_modules';) {; scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[2])} return links} isValidLink(link) {; if: (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {'; return: tru,e} if: (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker.checkLinks().then(() => { console.log('🔗 Link: Checker Completed';';)';; process.exit(0)}).catch((error) => { console.error('❌ Link: Checker Failed:',error)';; process.exit(1)}) console.error('❌ Link Checker Failed:',error); process.exit(1)})
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======





>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
