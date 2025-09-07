<<<<<<< HEAD
=======

#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import && import.meta.url),"}),"}) const __dirname = path && path.dirname(__filename),"}),"}) ,"}),"}) ,"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this && this.projectRoot = path && path.resolve(__dirname,..,"}),"}) '),"}),"}) this && this.brokenLinks = [],"}),"}) this && this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) ,"}) '),"}),"}) ,"}),"}) await this && this.scanHtmlFiles(),"}),"}) ,"}),"}) await this && this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this && this.checkPackageLinks(),"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) if (this && this.brokenLinks.length > 0) {,"}),"}) ,"}),"}) this && this.brokenLinks.forEach(link => {,"}),"}) ,"}),"}) }),"}),"}) } else {,"}),"}) ,"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console && console.error('❌ Error during link checking: error && error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this && this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) for (const file of htmlFiles) {,"}),"}) const content = fs && fs.readFileSync(file,utf8'),"}),"}) const links = this && this.extractLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this && this.checkedLinks++,"}),"}) if (!this && this.isValidLink(link)) {,"}),"}) this && this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this && this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) for (const file of mdFiles) {,"}),"}) const content = fs && fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this && this.extractMarkdownLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this && this.checkedLinks++,"}),"}) if (!this && this.isValidLink(link)) {,"}),"}) this && this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path && path.join(this && this.projectRoot,package && package.json'),"}),"}) if (fs && fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON && JSON.parse(fs && fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson && packageJson.repository) {,"}),"}) this && this.checkedLinks++,"}),"}) if (!this && this.isValidLink(packageJson && packageJson.repository.url || packageJson && packageJson.repository)) {,"}),"}) this && this.brokenLinks.push(`package && package.json: ${packageJson && packageJson.repository.url || packageJson && packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) ,"}) ⚠️ Could not check package && package.json links: error && error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs && fs.readdirSync(dir),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const fullPath = path && path.join(dir,item),"}),"}) const stat = fs && fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat && stat.isDirectory() && !item && item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat && stat.isFile() && item && item.endsWith(extension)) {,"}),"}) files && files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this && this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex && linkRegex.exec(content)) !== null) {,"}),"}) links && links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex && linkRegex.exec(content)) !== null) {,"}),"}) links && links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link && link.startsWith('#,"}),"}) ') || link && link.startsWith('mailto: ') || link && link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link && link.startsWith('./,"}),"}) ') || link && link.startsWith('../,"}),"}) ') || link && link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker && linkChecker.checkLinks().then(() => {,"}),"}) ,"}) '),"}),"}) process && process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console && console.error('❌ Link Checker Failed:',error),"}),"}) process && process.exit(1),"}),"}) }),"}),"}) const __dirname = path ;  class LinkChecker {; constructor() {; this && this.projectRoot = path && path.resolve(__dirname,..';); this && this.brokenLinks = []; this && this.checkedLinks = 0} async checkLinks() { try {'  await this && this.scanHtmlFiles(); await this && this.scanMarkdownFiles(); await this && this.checkPackageLinks();  if (this && this.brokenLinks.length > 0) {`  this && this.brokenLinks.forEach(link => {` })} else { } } catch (error) {' console && console.error('❌ Error during link checking: error && error.message)} } async scanHtmlFiles() {' const htmlFiles = this && this.findFiles('.html';); for (const file of htmlFiles) {' const content = fs && fs.readFileSync(file,utf8'); const links = this && this.extractLinks(content); for (const link of links) {; this && this.checkedLinks++; if (!this && this.isValidLink(link)) {' this && this.brokenLinks.push(`${file}: ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this && this.findFiles( '.md')';; for: (const file of mdFiles) { const content = fs && fs.readFileSync(file,utf8';)';; const links = this && this.extractMarkdownLinks(content); for: (const link of links) { this && this.checkedLinks++; if: (!this && this.isValidLink(link)) { '.md'); for (const file of mdFiles) {; const content = fs && fs.readFileSync(file,utf8';); const links = this && this.extractMarkdownLinks(content); for (const link of links) {; this && this.checkedLinks++; if (!this && this.isValidLink(link)) {' this && this.brokenLinks.push(`${file}: ${link}`)} } const packagePath = path && path.join(this && this.projectRoot,package && package.json'); if (fs && fs.existsSync(packagePath)) {; const packageJson = JSON && JSON.parse(fs && fs.readFileSync(packagePath,utf8';)); if (packageJson && packageJson.repository) {; this && this.checkedLinks++; if (!this && this.isValidLink(packageJson && packageJson.repository.url || packageJson && packageJson.repository)) {' this && this.brokenLinks.push(`package && package.json: ${packageJson && packageJson.repository.url || packageJson && packageJson.repository}`)} } } } catch (error) {; } } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs && fs.readdirSync(dir); for: (const item of items) { const fullPath = path && path.join(dir,item); const stat = fs && fs.statSync(fullPath); if: (stat && stat.isDirectory() && !item && item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat && stat.isFile() && item && item.endsWith(extension)) { files && files.push(fullPath)} } } catch (error) { ; scanDirectory(this && this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match; while: ((match = linkRegex && linkRegex.exec(content)) !== null) { links && links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex && linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs && fs.readdirSync(dir); for (const item of items) {; const fullPath = path && path.join(dir,item); const stat = fs && fs.statSync(fullPath); if (stat && stat.isDirectory() && !item && item.startsWith( .;` ') && item !== 'node_modules';) {; scanDirectory(fullPath)} else if (stat && stat.isFile() && item && item.endsWith(extension)) {; files && files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this && this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex && linkRegex.exec(content)) !== null) {; links && links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex && linkRegex.exec(content)) !== null) {; links && links.push(match[2])} return links} isValidLink(link) {; if: (link && link.startsWith('#';';) || link && link.startsWith('mailto: ') || link && link.startsWith('tel:)) {'; return: tru,e} if: (link && link.startsWith('./';';) || link && link.startsWith('../';';) || link && link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link && link.startsWith('./';) || link && link.startsWith('../';) || link && link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker && linkChecker.checkLinks().then(() => { ';; process && process.exit(0)}).catch((error) => { console && console.error('❌ Link: Checker Failed:',error)';; process && process.exit(1)}) console && console.error('❌ Link Checker Failed:',error); process && process.exit(1)})
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import && import.meta.url),"}),"}) const __dirname = path && path.dirname(__filename),"}),"}) ,"}),"}) ,"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this && this.projectRoot = path && path.resolve(__dirname,..,"}),"}) '),"}),"}) this && this.brokenLinks = [],"}),"}) this && this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) ,"}) '),"}),"}) ,"}),"}) await this && this.scanHtmlFiles(),"}),"}) ,"}),"}) await this && this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this && this.checkPackageLinks(),"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) if (this && this.brokenLinks.length > 0) {,"}),"}) ,"}),"}) this && this.brokenLinks.forEach(link => {,"}),"}) ,"}),"}) }),"}),"}) } else {,"}),"}) ,"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console && console.error('❌ Error during link checking: error && error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this && this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) for (const file of htmlFiles) {,"}),"}) const content = fs && fs.readFileSync(file,utf8'),"}),"}) const links = this && this.extractLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this && this.checkedLinks++,"}),"}) if (!this && this.isValidLink(link)) {,"}),"}) this && this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this && this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) for (const file of mdFiles) {,"}),"}) const content = fs && fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this && this.extractMarkdownLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this && this.checkedLinks++,"}),"}) if (!this && this.isValidLink(link)) {,"}),"}) this && this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path && path.join(this && this.projectRoot,package && package.json'),"}),"}) if (fs && fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON && JSON.parse(fs && fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson && packageJson.repository) {,"}),"}) this && this.checkedLinks++,"}),"}) if (!this && this.isValidLink(packageJson && packageJson.repository.url || packageJson && packageJson.repository)) {,"}),"}) this && this.brokenLinks.push(`package && package.json: ${packageJson && packageJson.repository.url || packageJson && packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) ,"}) ⚠️ Could not check package && package.json links: error && error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs && fs.readdirSync(dir),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const fullPath = path && path.join(dir,item),"}),"}) const stat = fs && fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat && stat.isDirectory() && !item && item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat && stat.isFile() && item && item.endsWith(extension)) {,"}),"}) files && files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this && this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex && linkRegex.exec(content)) !== null) {,"}),"}) links && links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex && linkRegex.exec(content)) !== null) {,"}),"}) links && links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link && link.startsWith('#,"}),"}) ') || link && link.startsWith('mailto: ') || link && link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link && link.startsWith('./,"}),"}) ') || link && link.startsWith('../,"}),"}) ') || link && link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker && linkChecker.checkLinks().then(() => {,"}),"}) ,"}) '),"}),"}) process && process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console && console.error('❌ Link Checker Failed:',error),"}),"}) process && process.exit(1),"}),"}) }),"}),"}) const __dirname = path ;  class LinkChecker {; constructor() {; this && this.projectRoot = path && path.resolve(__dirname,..';); this && this.brokenLinks = []; this && this.checkedLinks = 0} async checkLinks() { try {'  await this && this.scanHtmlFiles(); await this && this.scanMarkdownFiles(); await this && this.checkPackageLinks();  if (this && this.brokenLinks.length > 0) {`  this && this.brokenLinks.forEach(link => {` })} else { } } catch (error) {' console && console.error('❌ Error during link checking: error && error.message)} } async scanHtmlFiles() {' const htmlFiles = this && this.findFiles('.html';); for (const file of htmlFiles) {' const content = fs && fs.readFileSync(file,utf8'); const links = this && this.extractLinks(content); for (const link of links) {; this && this.checkedLinks++; if (!this && this.isValidLink(link)) {' this && this.brokenLinks.push(`${file}: ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this && this.findFiles( '.md')', , for: (const file of mdFiles) { const content = fs && fs.readFileSync(file,utf8';)';; const links = this && this.extractMarkdownLinks(content); for: (const link of links) { this && this.checkedLinks++, if: (!this && this.isValidLink(link)) { '.md'), for (const file of mdFiles) {; const content = fs && fs.readFileSync(file,utf8';); const links = this && this.extractMarkdownLinks(content); for (const link of links) {; this && this.checkedLinks++; if (!this && this.isValidLink(link)) {' this && this.brokenLinks.push(`${file}: ${link}`)} } const packagePath = path && path.join(this && this.projectRoot,package && package.json'); if (fs && fs.existsSync(packagePath)) {; const packageJson = JSON && JSON.parse(fs && fs.readFileSync(packagePath,utf8';)); if (packageJson && packageJson.repository) {; this && this.checkedLinks++; if (!this && this.isValidLink(packageJson && packageJson.repository.url || packageJson && packageJson.repository)) {' this && this.brokenLinks.push(`package && package.json: ${packageJson && packageJson.repository.url || packageJson && packageJson.repository}`)} } } } catch (error) {; } } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs && fs.readdirSync(dir); for: (const item of items) { const fullPath = path && path.join(dir,item); const stat = fs && fs.statSync(fullPath); if: (stat && stat.isDirectory() && !item && item.startsWith( .', ) && item: !== 'node_modules',';) {'; scanDirectory(fullPath)} else: if (stat && stat.isFile() && item && item.endsWith(extension)) { files && files.push(fullPath)} } } catch (error) { ; scanDirectory(this && this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match,
    while: ((match = linkRegex && linkRegex.exec(content)) !== null) { links && links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match, while: ((match = linkRegex && linkRegex.exec(content)) !== null) { findFiles(extension) {, const files = []; const scanDirectory = (dir) => {; try {; const items = fs && fs.readdirSync(dir); for (const item of items) {; const fullPath = path && path.join(dir,item); const stat = fs && fs.statSync(fullPath); if (stat && stat.isDirectory() && !item && item.startsWith( .;` ') && item !== 'node_modules';) {; scanDirectory(fullPath)} else if (stat && stat.isFile() && item && item.endsWith(extension)) {; files && files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this && this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex && linkRegex.exec(content)) !== null) {; links && links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex && linkRegex.exec(content)) !== null) {; links && links.push(match[2])} return links} isValidLink(link) {; if: (link && link.startsWith('#', ',) || link && link.startsWith('mailto: ') || link && link.startsWith('tel:)) {',
    return: tru,e} if: (link && link.startsWith('./', ',) || link && link.startsWith('../', ') || link && link.startsWith('/', ')) {'; return: true} try: { new URL(link),
    return: true} catch { return true} if (link && link.startsWith('./';) || link && link.startsWith('../';) || link && link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker && linkChecker.checkLinks().then(() => { ';; process && process.exit(0)}).catch((error) => { console && console.error('❌ Link: Checker Failed:',error)';; process && process.exit(1)}) console && console.error('❌ Link Checker Failed:',error); process && process.exit(1)})


<<<<<<< HEAD
ursor/fix-syntax-push-and-merge-to-main-40de
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) ,"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) ,"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) ,"}),"}) this.brokenLinks.forEach(link => {,"}),"}) ,"}),"}) }),"}),"}) } else {,"}),"}) ,"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link checking: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) for (const file of htmlFiles) {,"}),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) for (const file of mdFiles) {,"}),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) ,"}) ⚠️ Could not check package.json links: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) ,"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) const __dirname = path.dirname(__filename);  class LinkChecker {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.brokenLinks = []; this.checkedLinks = 0} async checkLinks() { try {'  await this.scanHtmlFiles(); await this.scanMarkdownFiles(); await this.checkPackageLinks();  if (this.brokenLinks.length > 0) {`  this.brokenLinks.forEach(link => {` })} else { } } catch (error) {' console.error('❌ Error during link checking: error.message)} } async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';); for (const file of htmlFiles) {' const content = fs.readFileSync(file,utf8'); const links = this.extractLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this.findFiles( '.md')';; for: (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)';; const links = this.extractMarkdownLinks(content); for: (const link of links) { this.checkedLinks++; if: (!this.isValidLink(link)) { '.md'); for (const file of mdFiles) {; const content = fs.readFileSync(file,utf8';); const links = this.extractMarkdownLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } const packagePath = path.join(this.projectRoot,package.json'); if (fs.existsSync(packagePath)) {; const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';)); if (packageJson.repository) {; this.checkedLinks++; if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {' this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`)} } } } catch (error) {; } } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory() && !item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) { files.push(fullPath)} } } catch (error) { ; scanDirectory(this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs.readdirSync(dir); for (const item of items) {; const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith( .;` ') && item !== 'node_modules';) {; scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[2])} return links} isValidLink(link) {; if: (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {'; return: tru,e} if: (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker.checkLinks().then(() => { ';; process.exit(0)}).catch((error) => { console.error('❌ Link: Checker Failed:',error)';; process.exit(1)}) console.error('❌ Link Checker Failed:',error); process.exit(1)})
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) ,"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) ,"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) ,"}),"}) this.brokenLinks.forEach(link => {,"}),"}) ,"}),"}) }),"}),"}) } else {,"}),"}) ,"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link checking: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) ),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) ),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) ),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) ),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) ,"}) ⚠️ Could not check package.json links: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) ),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) ,"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) const __dirname = path.dirname(__filename);  class LinkChecker {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.brokenLinks = []; this.checkedLinks = 0} async checkLinks() { try {'  await this.scanHtmlFiles(); await this.scanMarkdownFiles(); await this.checkPackageLinks();  if (this.brokenLinks.length > 0) {`  this.brokenLinks.forEach(link => {` })} else { } } catch (error) {' console.error('❌ Error during link checking: error.message)} } async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';); : ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this.findFiles( '.md')';; for: (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)';; const links = this.extractMarkdownLinks(content); for: (const link of links) { this.checkedLinks++; if: (!this.isValidLink(link)) { '.md'); : ${link}`)} } const packagePath = path.join(this.projectRoot,package.json'); if (fs.existsSync(packagePath)) {; const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';)); if (packageJson.repository) {; this.checkedLinks++; if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {' this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`)} } } } catch (error) {; } } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory() && !item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) { files.push(fullPath)} } } catch (error) { ; scanDirectory(this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs.readdirSync(dir);  else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[2])} return links} isValidLink(link) {; if: (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {'; return: tru,e} if: (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker.checkLinks().then(() => { ';; process.exit(0)}).catch((error) => { console.error('❌ Link: Checker Failed:',error)';; process.exit(1)}) console.error('❌ Link Checker Failed:',error); process.exit(1)})
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

,"}),"})
<<<<<<< HEAD
    for (const file of htmlFiles) {,"}),"})
      const content = fs.readFileSync(file,utf8'),"}),"})
      const links = this.extractLinks(content),"}),"})
,"}),"})
      for (const link of links) {,"}),"})
=======

<<<<<<< HEAD
    for (const file of htmlFiles) {,"}),"})
      const content = fs.readFileSync(file,utf8'),"}),"})
      const links = this.extractLinks(content),"}),"})
,"}),"})
      for (const link of links) {,"}),"})

=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


    ),"})
      const content = fs.readFileSync(file,utf8'),"}),"})
      const links = this.extractLinks(content),"}),"})
,"}),"})
      ),"})
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
    for (const file of mdFiles) {,"}),"})
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


    ),"})

    for (const file of mdFiles) {,"}),"})
    ),"})
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      const content = fs.readFileSync(file,utf8,"}),"})
  '),"}),"})
      const links = this.extractMarkdownLinks(content),"}),"})
,"}),"})
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


      ),"})

      for (const link of links) {,"}),"})
      ),"})
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
        for (const item of items) {,"}),"})
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


        ),"})

        for (const item of items) {,"}),"})
        ),"})
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
  console.error('❌ Link Checker "Failed": ', error),"}),"})
  process.exit(1),"}),"})
}),"}),"})
}),"}),"});
origin/cursor/integrate-build-improve-and-re-verify-c7b5
const __dirname = path.dirname(__filename);
console.log(',
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

<<<<<<< HEAD
const scanDirectory = (dir) => {try {const items = fs.readdirSync(dir)for (const item of items) {const fullPath = path.join(dir,item;
  }
  const stat = fs.statSync(fullPath)if (stat.isDirectory() && !item.startsWith( .;` ') && item !== 'node_modules';) {scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {files.push(fullPath)} } } catch (error) {' }scanDirectory(this.projectRoot)return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g;'

}

const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {links.push(match[1])};
  return links} extractMarkdownLinks(content) ;
  const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {links.push(match[2])};
  return links} isValidLink(link) {"if": (link.startsWith('#';';) || link.startsWith('"mailto": ') || link.startsWith('"tel":)) {'; "return": tru,e} "if": (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; "return": true} "try": { new URL(link)"return": true} catch { return tru,'
} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {return true} try {new URL(link)return true} catch {return false} } }'

const linkChecker = new LinkChecker()linkChecker.checkLinks().then(() => { ';process.exit(0)}).catch((error) => { console.error('❌ "Link": Checker "Failed":',error)';process.exit(1)}) console.error('❌ Link Checker "Failed":',error)process.exit(1)})#!/usr/bin/env node,"}),"})/**,"}),"})* Link Checker Script,"}),"})* Replaces GitHub Actions link-checker workflow,"}),"})* Checks for broken links in the project,"}),"})*/,"}),"})import fs from,"}),"})'fs',"}),"})import path from,"}),"})'path',"}),"})import { fileURLToPath } from,"}),"})'url',"}),"}),"}),"})const __filename = fileURLToPath(import.meta.url),"}),"})const __dirname = path.dirname(__filename),"}),"}),"}),"})console.log(,"}),"})'🔗 Link Checker Started'),"}),"}),"}),"})class LinkChecker {,"}),"})constructor() {,"}),"})this.projectRoot = path.resolve(__dirname,..,"}),"})'),"}),"})this.brokenLinks = [],"}),"})this.checkedLinks = 0,"}),"})}"}),"}),"}),"})async checkLinks() {,"}),"})try {,"}),"})console.log('📁 Scanning project for links...,"}),"})'),"}),"}),"}),"})// Check HTML files for links,"}),"})await this.scanHtmlFiles(),"}),"}),"}),"})// Check markdown files for links,"}),"})await this.scanMarkdownFiles(),"}),"}),"}),"})// Check package.json for repository links,"}),"})await this.checkPackageLinks(),"}),"}),"}),"})console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`),"}),"}),"}),"})if (this.brokenLinks.length > 0) {,"}),"})console.log(`⚠️  Found ${this.brokenLinks.length} potentially broken "links": `),"}),"})this.brokenLinks.forEach((link) => {,"}),"})console.log(`   - ${link}`),"}),"})}),"}),"})} else {,"}),"})console.log(,,"}),"})🎉 All links appear to be valid!,"}),"})'),"}),"})}"}),"}),"}),"})} catch (error) {,"}),"})console.error('❌ Error during link "checking": error.message),"}),"})}"}),"})}"}),"}),"}),"})async scanHtmlFiles() {,"}),"})const htmlFiles = this.findFiles('.html,"}),"})'),"}),"}),"}),"})for (const file of htmlFiles) {,"}),"})const content = fs.readFileSync(file,utf8'),"}),"})const links = this.extractLinks(content),"}),"}),"}),"})for (const link of links) {,"}),"})this.checkedLinks++,"}),"})if (!this.isValidLink(link)) {,"}),"})this.brokenLinks.push(`${file}: ${link}`),"}),"})}"}),"})}"}),"})}"}),"})}"}),"}),"}),"})async scanMarkdownFiles() {,"}),"})const mdFiles = this.findFiles(,"}),"})'.md'),"}),"}),"}),"})for (const file of mdFiles) {,"}),"})const content = fs.readFileSync(file,utf8,"}),"})'),"}),"})const links = this.extractMarkdownLinks(content),"}),"}),"}),"})for (const link of links) {,"}),"})this.checkedLinks++,"}),"})if (!this.isValidLink(link)) {,"}),"})this.brokenLinks.push(`${file}: ${link}`),"}),"})}"}),"})}"}),"})}"}),"})}"}),"}),"}),"})async checkPackageLinks() {,"}),"})try {,"}),"})const packagePath = path.join(this.projectRoot,package.json'),"}),"})if (fs.existsSync(packagePath)) {,"}),"})const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"})')),"}),"}),"}),"})if (packageJson.repository) {,"}),"})this.checkedLinks++,"}),"})if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"})this.brokenLinks.push(`package."json": ${packageJson.repository.url || packageJson.repository}`),"}),"})}"}),"})}"}),"})}"}),"})} catch (error) {,"}),"})console.warn(,,"}),"})⚠️  Could not check package.json "links": error.message),"}),"})}"}),"})}"}),"}),"}),"})findFiles(extension) {,"}),"})const files = [],"}),"}),"}),"})const scanDirectory = (dir) => {,"}),"})try {,"}),"})const items = fs.readdirSync(dir),"}),"}),"}),"})for (const item of items) {,"}),"})const fullPath = path.join(dir, item),"}),"})const stat = fs.statSync(fullPath),"}),"}),"}),"})if (stat.isDirectory() && !item.startsWith(,,"}),"}).,"}),"})') && item !== 'node_modules,"}),"})') {,"}),"})scanDirectory(fullPath),"}),"})} else if (stat.isFile() && item.endsWith(extension)) {,"}),"})files.push(fullPath),"}),"})}"}),"})}"}),"})} catch (error) {,"}),"})// Skip directories we can't read,"}),"})}"}),"})},"}),"}),"}),"})scanDirectory(this.projectRoot),"}),"})return files,"}),"})}"}),"}),"}),"})extractLinks(content) {,"}),"})const linkRegex = /href=[","}),"})']([^"']+)[","}),"})']/g,"}),"})const links = [],"}),"})let match,"}),"}),"}),"})while ((match = linkRegex.exec(content)) !== null) {,"}),"})links.push(match[1]),"}),"})}"}),"}),"}),"})return links,"}),"})}"}),"}),"}),"})extractMarkdownLinks(content) {,"}),"})const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"})const links = [],"}),"})let match,"}),"}),"}),"})while ((match = linkRegex.exec(content)) !== null) {,"}),"})links.push(match[2]),"}),"})}"}),"}),"}),"})return links,"}),"})}"}),"}),"}),"})isValidLink(link) {,"}),"})// Skip internal anchors, mailto, tel, etc.,"}),"})if (link.startsWith('#,"}),"})') || link.startsWith('"mailto": ') || link.startsWith('"tel":)) {,"}),"})return true,"}),"})}"}),"}),"}),"})// Skip relative paths,"}),"})if (link.startsWith('./,"}),"})') || link.startsWith('../,"}),"})') || link.startsWith('/,"}),"})')) {,"}),"})return true,"}),"})}"}),"}),"}),"})// Basic URL validation,"}),"})try {,"}),"})new URL(link),"}),"})return true,"}),"})} catch {,"}),"};"  return false,"}),"})}"}),"})}"}),"})}"}),"}),"}),"})// Run the link checker,"}),"})const linkChecker = new LinkChecker(),"}),"})linkChecker.checkLinks().then(() => {,"}),"})console.log('🔗 Link Checker Completed,"}),"})'),"}),"})process.exit(0),"}),"})}).catch((error) => {,"}),"})console.error('❌ Link Checker "Failed": ', error),"}),"})process.exit(1),"}),"})}),"}),"};"
  const __dirname = path.dirname(__filename)console.log(','🔗 Link Checker Started')class LinkChecker {constructor() {this.projectRoot = path.resolve(__dirname,..';)this.brokenLinks = [];'
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) ,"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) ,"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) ,"}),"}) this.brokenLinks.forEach((link) => {,"}),"}) ,"}),"}) }),"}),"}) } else {,"}),"}) ,"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link "checking": error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) for (const file of htmlFiles) {,"}),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) for (const file of mdFiles) {,"}),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package."json": ${packageJson.repository.url || packageJson.repositor,`}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) ,"}) ⚠️ Could not check package.json "links": error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('"mailto": ') || link.startsWith('"tel":)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"});"
  return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) ,"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker "Failed":',error),"}),"}) process.exit(1),"}),"}) }),"}),"});"
  const __dirname = path.dirname(__filename);  class LinkChecker {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.brokenLinks = []; this.checkedLinks = 0} async checkLinks() { try {'  await this.scanHtmlFiles(); await this.scanMarkdownFiles(); await this.checkPackageLinks();  if (this.brokenLinks.length > 0) {`  this.brokenLinks.forEach(link = > {` })} else {} } catch (error) {' console.error('❌ Error during link "checking": error.message)},'} async scanHtmlFiles() {';'
  }
  const htmlFiles = this.findFiles('.html';); for (const file of htmlFiles) {' const content = fs.readFileSync(file,utf8');'

}

const links = this.extractLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } } } "async": scanMarkdownFiles() { const mdFiles = this.findFiles( '.md')';; "for": (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)';;'
}

const links = this.extractMarkdownLinks(content); "for": (const link of links) { this.checkedLinks++; "if": (!this.isValidLink(link)) { '.md'); for (const file of mdFiles) {;'

}

const content = fs.readFileSync(file,utf8';);'

const links = this.extractMarkdownLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} }`
const packagePath = path.join(this.projectRoot,package.json'); if (fs.existsSync(packagePath)) {;'

}

const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';)); if (packageJson.repository) {; this.checkedLinks++; if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {' this.brokenLinks.push(`package."json": ${packageJson.repository.url || packageJson.repository}`)} } },`} catch (error) {; } } findFiles(extension) { const files = [];

}

const scanDirectory = (dir) => { try {;
  }
  const items = fs.readdirSync(dir); "for": (const item of items) { const fullPath = path.join(dir,item);

}

const stat = fs.statSync(fullPath); "if": (stat.isDirectory() && !item.startsWith( .';) && "item": !== 'node_modules';';) {'; scanDirectory(fullPath)} "else": if (stat.isFile() && item.endsWith(extension)) { files.push(fullPath)} },'
} catch (error) { ; scanDirectory(this.projectRoot); "return": file
} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';;'

}

};
  return links} extractMarkdownLinks(content) {;
  }
  const links = []; "let": match; "while": ((match = linkRegex.exec(content)) !== null) { findFiles(extension) {;

}


const scanDirectory = (dir) => {; try {;

}

const items = fs.readdirSync(dir); for (const item of items) {;

}

const fullPath = path.join(dir,item);

const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith( .;` ') && item !== 'node_modules';) {; scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g;'

}

const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[1])} return links} extractMarkdownLinks(content) {;

}

const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[2])} return links} isValidLink(link) {; "if": (link.startsWith('#';';) || link.startsWith('"mailto": ') || link.startsWith('"tel":)) {'; "return": tru,e} "if": (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; "return": tru,'
} "try": { new URL(link); "return": true} catch { return tru
} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } }'

const linkChecker = new LinkChecker(); linkChecker.checkLinks().then(() => { ';; process.exit(0)}).catch((error) => { console.error('❌ "Link": Checker "Failed":',error)';; process.exit(1)}) console.error('❌ Link Checker "Failed":',error); process.exit(1)})'
#!/usr/bin/env node,"}),"})"
/**,"}),"})"
 * Link Checker Script,"}),"})"
 * Replaces GitHub Actions link-checker workflow,"}),"})"
 * Checks for broken links in the project,"}),"})"
 */,"}),"})"
import fs from,"}),"})"
  'fs',"}),"})"
import path from,"}),"})"
  'path',"}),"})"
import { fileURLToPath } from,"}),"})"
  'url',"}),"})"
,"}),"})"
const __filename = fileURLToPath(import.meta.url),"}),"});"
const __dirname = path.dirname(__filename),"}),"});"
,"}),"})"
console.log(,"}),"})"
  '🔗 Link Checker Started'),"}),"})"
,"}),"})"
class LinkChecker {,"}),"})"
constructor() {,"}),"});"
    this.projectRoot = path.resolve(__dirname,..,"}),"})"
  '),"}),"})"
    this.brokenLinks = [],"}),"})"
    this.checkedLinks = 0,"}),"})"
  }"}),"})"
,"}),"})"
  async checkLinks() {,"}),"})"
    try {,"}),"})"
      console.log('📁 Scanning project for links...,"}),"})"
  '),"}),"})"
,"}),"})"
      // Check HTML files for links,"}),"})"
      await this.scanHtmlFiles(),"}),"})"
,"}),"})"
      // Check markdown files for links,"}),"})"
      await this.scanMarkdownFiles(),"}),"})"
,"}),"})"
      // Check package.json for repository links,"}),"})"
      await this.checkPackageLinks(),"}),"})"
,"}),"})"
      console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`),"}),"})","}),"})"
      if (this.brokenLinks.length > 0) {,"}),"})"
        console.log(`⚠️  Found ${this.brokenLinks.length} potentially broken "links": `),"}),"})"        this.brokenLinks.forEach((link) => {,"}),"})"
          console.log(`   - ${link}`),"}),"})"        }),"}),"})"
      } else {,"}),"})"
        console.log(,,"}),"})"
  🎉 All links appear to be valid!,"}),"})"
  '),"}),"})"
      }"}),"})"
,"}),"})"
    } catch (error) {,"}),"})"
      console.error('❌ Error during link "checking": error.message),"}),"})"
    }"}),"})"
  }"}),"})"
,"}),"})"
  async scanHtmlFiles() {,"}),"})"
const htmlFiles = this.findFiles('.html,"}),"});"
  '),"}),"})"
,"}),"})"
    for (const file of htmlFiles) {,"}),"})"
const content = fs.readFileSync(file,utf8'),"}),"});"
const links = this.extractLinks(content),"}),"});"
,"}),"})"
      for (const link of links) {,"}),"})"
        this.checkedLinks++,"}),"})"
        if (!this.isValidLink(link)) {,"}),"})"
          this.brokenLinks.push(`${file}: ${link}`),"}),"})"        }"}),"})"
      }"}),"})"
    }"}),"})"
  }"}),"})"
,"}),"})"
  async scanMarkdownFiles() {,"}),"})"
const mdFiles = this.findFiles(,"}),"});"
  '.md'),"}),"})"
,"}),"})"
    for (const file of mdFiles) {,"}),"})"
const content = fs.readFileSync(file,utf8,"}),"});"
  '),"}),"})"
const links = this.extractMarkdownLinks(content),"}),"});"
,"}),"})"
      for (const link of links) {,"}),"})"
        this.checkedLinks++,"}),"})"
        if (!this.isValidLink(link)) {,"}),"})"
          this.brokenLinks.push(`${file}: ${link}`),"}),"})"        }"}),"})"
      }"}),"})"
    }"}),"})"
  }"}),"})"
,"}),"})"
  async checkPackageLinks() {,"}),"})"
    try {,"}),"})"
const packagePath = path.join(this.projectRoot,package.json'),"}),"});"
      if (fs.existsSync(packagePath)) {,"}),"})"
const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"});"
  ')),"}),"})"
,"}),"})"
        if (packageJson.repository) {,"}),"})"
          this.checkedLinks++,"}),"})"
          if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"})"
            this.brokenLinks.push(`package."json": ${packageJson.repository.url || packageJson.repository}`),"}),"})"          }"}),"})"
        }"}),"})"
      }"}),"})"
    } catch (error) {,"}),"})"
      console.warn(,,"}),"})"
  ⚠️  Could not check package.json "links": error.message),"}),"})"
    }"}),"})"
  }"}),"})"
,"}),"})"
  findFiles(extension) {,"}),"})"
const files = [],"}),"});"
,"}),"})"
    const scanDirectory = (dir) => {,"}),"})"
      try {,"}),"})"
const items = fs.readdirSync(dir),"}),"});"
,"}),"})"
        for (const item of items) {,"}),"})"
const fullPath = path.join(dir, item),"}),"});"
const stat = fs.statSync(fullPath),"}),"});"
,"}),"})"
          if (stat.isDirectory() && !item.startsWith(,,"}),"})"
  .,"}),"})"
  ') && item !== 'node_modules,"}),"})"
  ') {,"}),"})"
            scanDirectory(fullPath),"}),"})"
          } else if (stat.isFile() && item.endsWith(extension)) {,"}),"})"
            files.push(fullPath),"}),"})"
          }"}),"})"
        }"}),"})"
      } catch (error) {,"}),"})"
        // Skip directories we can't read,"}),"})"
      }"}),"})"
    },"}),"})"
,"}),"})"
    scanDirectory(this.projectRoot),"}),"})"
return files,"}),"});"
  }"}),"})"
,"}),"})"
  extractLinks(content) {,"}),"})"
const linkRegex = /href=[","}),"});"
  ']([^"']+)[","}),"})"
  ']/g,"}),"})"
const links = [],"}),"});"
let match,"}),"});"
,"}),"})"
    while ((match = linkRegex.exec(content)) !== null) {,"}),"})"
      links.push(match[1]),"}),"})"
    }"}),"})"
,"}),"})"
return links,"}),"});"
  }"}),"})"
,"}),"})"
  extractMarkdownLinks(content) {,"}),"})"
const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"});"
,"}),"})"
    while ((match = linkRegex.exec(content)) !== null) {,"}),"})"
      links.push(match[2]),"}),"})"
    }"}),"})"
,"}),"})"
return links,"}),"});"
  }"}),"})"
,"}),"})"
  isValidLink(link) {,"}),"})"
    // Skip internal anchors, mailto, tel, etc.,"}),"})"
    if (link.startsWith('#,"}),"})"
  ') || link.startsWith('"mailto": ') || link.startsWith('"tel":)) {,"}),"})"
return true,"}),"});"
    }"}),"})"
,"}),"})"
    // Skip relative paths,"}),"})"
    if (link.startsWith('./,"}),"})"
  ') || link.startsWith('../,"}),"})"
  ') || link.startsWith('/,"}),"})"
  ')) {,"}),"})"
return true,"}),"});"
    }"}),"})"
,"}),"})"
    // Basic URL validation,"}),"})"
    try {,"}),"})"
      new URL(link),"}),"})"
return true,"}),"});"
    } catch {,"}),"})"
     ;
return false,"}),"});"
    }"}),"})"
  }"}),"})"
}"}),"})"
,"}),"})"
// Run the link checker,"}),"})"
const linkChecker = new LinkChecker(),"}),"});"
linkChecker.checkLinks().then(() => {,"}),"})"
  console.log('🔗 Link Checker Completed,"}),"})"
  '),"}),"})"
  process.exit(0),"}),"})"
}).catch((error) => {,"}),"})"
  console.error('❌ Link Checker "Failed": ', error),"}),"})"
  process.exit(1),"}),"})"
}),"}),"});"
  const __dirname = path.dirname(__filename);
console.log(','
      '🔗 Link Checker Started');'
=======
const __dirname = path.dirname(__filename);
console.log(',
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) ,"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) ,"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) ,"}),"}) this.brokenLinks.forEach(link => {,"}),"}) ,"}),"}) }),"}),"}) } else {,"}),"}) ,"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link checking: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) for (const file of htmlFiles) {,"}),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) for (const file of mdFiles) {,"}),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) ,"}) ⚠️ Could not check package.json links: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) ,"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) const __dirname = path.dirname(__filename);  class LinkChecker {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.brokenLinks = []; this.checkedLinks = 0} async checkLinks() { try {'  await this.scanHtmlFiles(); await this.scanMarkdownFiles(); await this.checkPackageLinks();  if (this.brokenLinks.length > 0) {`  this.brokenLinks.forEach(link => {` })} else { } } catch (error) {' console.error('❌ Error during link checking: error.message)} } async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';); for (const file of htmlFiles) {' const content = fs.readFileSync(file,utf8'); const links = this.extractLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this.findFiles( '.md')'; for: (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)'; const links = this.extractMarkdownLinks(content); for: (const link of links) { this.checkedLinks++; if: (!this.isValidLink(link)) { '.md'); for (const file of mdFiles) {; const content = fs.readFileSync(file,utf8';); const links = this.extractMarkdownLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } const packagePath = path.join(this.projectRoot,package.json'); if (fs.existsSync(packagePath)) {; const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';)); if (packageJson.repository) {; this.checkedLinks++; if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {' this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`)} } } } catch (error) {; } } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory() && !item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) { files.push(fullPath)} } } catch (error) { ; scanDirectory(this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=[;']([^]+)[";"']/g'; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs.readdirSync(dir); for (const item of items) {; const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith( .;` ') && item !== 'node_modules';) {; scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=[]([^]+)[";" ']/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[2])} return links} isValidLink(link) {; if: (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {'; return: tru,e} if: (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker.checkLinks().then(() => { '; process.exit(0)}).catch((error) => { console.error('❌ Link: Checker Failed:',error)'; process.exit(1)}) console.error('❌ Link Checker Failed:',error); process.exit(1)})
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
const __filename = fileURLToPath(import.meta.url),"}),"})""
const __dirname = path.dirname(__filename),"}),"})""
console.log(,"}),"})""
  '🔗 Link Checker Started'),"}),"})""
class LinkChecker {,"}),"})""
  constructor() {,"}),"})""
    this.projectRoot = path.resolve(__dirname,..,"}),"})""
  '),"}),"})""
    this.brokenLinks = [],"}),"})""
    this.checkedLinks = 0,"}),"})""
  }"}),"})""
  async checkLinks() {,"}),"})""
    try {,"}),"})""
      console.log('📁 Scanning project for links...,"}),"})""');
      // Check HTML files for links,"}),"})""
      await this.scanHtmlFiles(),"}),"})""
      // Check markdown files for links,"}),"})""
      await this.scanMarkdownFiles(),"}),"})""
      // Check package.json for repository links,"}),"})""
      await this.checkPackageLinks(),"}),"})""
,"}),"})""`;
      console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`),"}),"})""
      if (this.brokenLinks.length > 0) {,"}),"})""`;
        console.log(`⚠️  Found ${this.brokenLinks.length} potentially broken "links": `),"}),"})""
        this.brokenLinks.forEach(link => {,"}),"})""`;
          console.log(`   - ${link}`),"}),"})""
        }),"}),"})""
      } else {,"}),"})""
        console.log(,,"}),"})""
  🎉 All links appear to be valid!,"}),"})""
    } catch (error) {,"}),"})""
      console.error('❌ Error during link "checking": error.message),"}),"})""
  async scanHtmlFiles() {,"}),"})""
    const htmlFiles = this.findFiles('.html,"}),"})""
    for (const file of htmlFiles) {,"}),"})""
      const content = fs.readFileSync(file,utf8'),"}),"})""
      const links = this.extractLinks(content),"}),"})""
      for (const link of links) {,"}),"})""
        this.checkedLinks++,"}),"})""
        if (!this.isValidLink(link)) {,"}),"})""`;
          this.brokenLinks.push(`${file}: ${link}`),"}),"})""
  async scanMarkdownFiles() {,"}),"})""
    const mdFiles = this.findFiles(,"}),"})""
  '.md'),"}),"})""
    for (const file of mdFiles) {,"}),"})""
      const content = fs.readFileSync(file,utf8,"}),"})""
      const links = this.extractMarkdownLinks(content),"}),"})""
  async checkPackageLinks() {,"}),"})""
      const packagePath = path.join(this.projectRoot,package.json'),"}),"})""
      if (fs.existsSync(packagePath)) {,"}),"})""
        const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"})""
  ')),"}),"})""
        if (packageJson.repository) {,"}),"})""
          if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"})""`;
            this.brokenLinks.push(`package."json": ${packageJson.repository.url || packageJson.repository}`),"}),"})""
      console.warn(,,"}),"})""
  ⚠️  Could not check package.json "links": error.message),"}),"})""
  findFiles(extension) {,"}),"})""
    const files = [],"}),"})""
    const scanDirectory = (dir) => {,"}),"})""
        const items = fs.readdirSync(dir),"}),"})""
        for (const item of items) {,"}),"})""
          const fullPath = path.join(dir, item),"}),"})""
          const stat = fs.statSync(fullPath),"}),"})""
          if (stat.isDirectory() && !item.startsWith(,,"}),"})""
  .,"}),"})""
  ') && item !== 'node_modules,"}),"})""
  ') {,"}),"})""
            scanDirectory(fullPath),"}),"})""
          } else if (stat.isFile() && item.endsWith(extension)) {,"}),"})""
            files.push(fullPath),"}),"})""
        // Skip directories we can't read,"}),"})""
    },"}),"})""
    scanDirectory(this.projectRoot),"}),"})""
    return files,"}),"})""
  extractLinks(content) {,"}),"})""
    const linkRegex = /href=[","}),"})"]"
  ']([^"']+)[","}),"})"]"
  ']/g,"}),"})""
    const links = [],"}),"})""
    let match,"}),"})""
    while ((match = linkRegex.exec(content)) !== null) {,"}),"})""
      links.push(match[1]),"}),"})""
    return links,"}),"})""
  extractMarkdownLinks(content) {,"}),"})""
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"})""
      links.push(match[2]),"}),"})""
  isValidLink(link) {,"}),"})""
    // Skip internal anchors, mailto, tel, etc.,"}),"})""
    if (link.startsWith('#,"}),"})""
  ') || link.startsWith('"mailto": ') || link.startsWith('tel:)) {,"}),"})""
      return true,"}),"})""
    // Skip relative paths,"}),"})""
    if (link.startsWith('./,"}),"})""
  ') || link.startsWith('../,"}),"})""
  ') || link.startsWith('/,"}),"})""
  ')) {,"}),"})""
    // Basic URL validation,"}),"})""
      new URL(link),"}),"})""
    } catch {,"}),"})""
      return false,"}),"})""
// Run the link checker,"}),"})""
const linkChecker = new LinkChecker(),"}),"})""
linkChecker.checkLinks().then(() => {,"}),"})""
  console.log('🔗 Link Checker Completed,"}),"})""');
  process.exit(0),"}),"})""
}).catch((error) => {,"}),"})""
  console.error('❌ Link Checker "Failed": ', error),"}),"})""
  process.exit(1),"}),"})""
}),"}),"})"
const __dirname = path.dirname(__filename);"
console.log(',')
      '🔗 Link Checker Started');
>>>>>>> origin/chore/fix-lint-and-merge
class LinkChecker {;
  constructor() {;
    this.projectRoot = path.resolve(__dirname,..';);
    this.brokenLinks = [];
    this.checkedLinks = 0}
  async checkLinks() {
<<<<<<< HEAD
    try {
=======
    try {'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      console.log('📁 Scanning project for links...';);
      // Check HTML files for links;
      await this.scanHtmlFiles();
      // Check markdown files for links;
      await this.scanMarkdownFiles();
      // Check package.json for repository links;
<<<<<<< HEAD
      await this.checkPackageLinks();`;
      console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`);
      if (this.brokenLinks.length > 0) {"""
        console.log("⚠️  Found ${this.brokenLinks.length} potentially broken "links": ");""
        this.brokenLinks.forEach(link => {"")`;
          console.log(`   - ${link}`)})} else {
  // TODO: Implement
}
        console.log("
  🎉 All links appear to be valid!;"")"
=======
      await this.checkPackageLinks();
      console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`);
      if (this.brokenLinks.length > 0) {"
        console.log("⚠️  Found ${this.brokenLinks.length} potentially broken "links": ");
        this.brokenLinks.forEach(link => {"
          console.log(`   - ${link}`)})} else {
        console.log(
  🎉 All links appear to be valid!;"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  ')}
    } catch (error) {'
      console.error('❌ Error during link "checking": error.message)}
  }
  async scanHtmlFiles() {'

<<<<<<< HEAD
    for (const file of htmlFiles) {'
    } catch (error) {
      console.error('❌ Error during link "checking": error.message)}"
  }"
  async scanHtmlFiles() {
    const htmlFiles = this.findFiles('.html';);
    for (const file of htmlFiles) {
=======
    const htmlFiles = this && this.findFiles('.html';);

<<<<<<< HEAD
    const htmlFiles = this.findFiles('.html';);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    for (const file of htmlFiles) {'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      const content = fs.readFileSync(file,utf8');
      const links = this.extractLinks(content);
      for (const link of links) {;
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
    : ${link}")}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        this && this.checkedLinks++;
        if (!this && this.isValidLink(link)) {'
          this && this.brokenLinks.push("${file}: ${link}")}

    : ${link}")}

<<<<<<< HEAD
        this.checkedLinks++;
        if (!this.isValidLink(link)) {'
          this.brokenLinks.push("${file}: ${link}")}
    : ${link}")}
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      }
    }
  }
  "async": scanMarkdownFiles() {
    const mdFiles = this.findFiles(
  '.md')';
    for: (const file of mdFiles) {
<<<<<<< HEAD

<<<<<<< HEAD
}

const links = this.extractMarkdownLinks(content)"for": ;"
        }
        "if": (!this.isValidLink(link)) {'.md')for (const file of mdFiles) {const content = fs.readFileSync(file,utf8';)const links = this.extractMarkdownLinks(content)for ;'
  }
        }
        if (!this.isValidLink(link)) {';'
  "async": scanMarkdownFiles() {"
}
const mdFiles = this.findFiles(;
  '.md')';'
    "for": (const file of mdFiles) {
      }
      const content = fs.readFileSync(file,utf8';)';'

const links = this.extractMarkdownLinks(content);
=======
      const content = fs.readFileSync(file,utf8';)';
      const links = this.extractMarkdownLinks(content);
>>>>>>> origin/chore/fix-lint-and-merge
      "for": (const link of links) {"
        if: (!this.isValidLink(link)) {"
=======
      const content = fs.readFileSync(file,utf8';)';
      const links = this.extractMarkdownLinks(content);
      "for": (const link of links) {
        this.checkedLinks++;
        if: (!this.isValidLink(link)) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  '.md');
<<<<<<< HEAD
    : ${link}")}
=======

    for (const file of mdFiles) {;
      const content = fs.readFileSync(file,utf8';);

<<<<<<< HEAD
}


<<<<<<< HEAD
      for (const link of links) {;
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    for (const file of mdFiles) {,
      const content = fs && fs.readFileSync(file,utf8';);
      const links = this && this.extractMarkdownLinks(content);
      for (const link of links) {;
        this && this.checkedLinks++;
        if (!this && this.isValidLink(link)) {'
          this && this.brokenLinks.push("${file}: ${link}")}

    : ${link}")}

<<<<<<< HEAD
    for (const file of mdFiles) {;
      const content = fs.readFileSync(file,utf8';);
      const links = this.extractMarkdownLinks(content);
      for (const link of links) {;
        this.checkedLinks++;
        if (!this.isValidLink(link)) {'
          this.brokenLinks.push("${file}: ${link}")}
    : ${link}")}
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      }
      const packagePath = path.join(this.projectRoot,package.json');
      if (fs.existsSync(packagePath)) {;
        const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';));
        if (packageJson.repository) {;
          this.checkedLinks++;
          if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {'
            this.brokenLinks.push("package."json": ${packageJson.repository.url || packageJson.repository}")}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        }
        this.checkedLinks++;
        if (!this.isValidLink(link)) {''
          }
          this.brokenLinks.push("${file}: ${link}")}"
      }

  const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';))if (packageJson.repository) {this.checkedLinks++;'
          }
          if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {';'
            }
=======
      }

      const packagePath = path.join(this.projectRoot,package.json');
      if (fs.existsSync(packagePath)) {;
        const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';));
        if (packageJson.repository) {;
          if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {
>>>>>>> origin/chore/fix-lint-and-merge
            this.brokenLinks.push("package."json": ${packageJson.repository.url || packageJson.repository}")}"
    } catch (error) {;
<<<<<<< HEAD
      console.warn(,)"
  ⚠️  Could not check package.json "links": error.message)}"
=======
      console.warn(,
  ⚠️  Could not check package.json "links": error.message)}
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  findFiles(extension) {
<<<<<<< HEAD
    }

const scanDirectory = (dir) => {
      }
=======
    const files = [];
    const scanDirectory = (dir) => {
>>>>>>> origin/chore/fix-lint-and-merge
      try {
        const items = fs.readdirSync(dir);
        "for": (const item of items) {
<<<<<<< HEAD
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          "if": (stat.isDirectory() && !item.startsWith(
  .';) && item: !== 'node_modules';';) {';
            scanDirectory(fullPath)} "else": if (stat.isFile() && item.endsWith(extension)) {
            files.push(fullPath)}
=======

          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
<<<<<<< HEAD

          "if": (stat.isDirectory() && !item.startsWith("
  .';) && "item": !== 'node_modules';';) {';'
            }
            scanDirectory(fullPath)} "else": if (stat.isFile() && item.endsWith(extension)) {"
            }
=======
          "if": (stat.isDirectory() && !item.startsWith(
  .';) && item: !== 'node_modules';';) {';
            scanDirectory(fullPath)} "else": if (stat.isFile() && item.endsWith(extension)) {
>>>>>>> origin/chore/fix-lint-and-merge
            files.push(fullPath)}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        }
<<<<<<< HEAD
<<<<<<< HEAD
      } catch (error) {// Skip directories we can't read}'}scanDirectory(this.projectRoot)"return": files}"
  extractLinks(content) {const linkRegex = /href=['';']([^'']+)[";"']/g';'

}

const links = [];
    "let": match;"
    "while": ((match = linkRegex.exec(content)) !== null) {links.push(match[1]
}
   ;
  return links}
  extractMarkdownLinks(content) ;
    "let": match;"
    "while": ((match = linkRegex.exec(content)) !== null) {findFiles(extension) ;
  }

const scanDirectory = (dir) => {try {const items = fs.readdirSync(dir)for (const item of items) {const fullPath = path.join(dir, item;
  }
  const stat = fs.statSync(fullPath)if (stat.isDirectory() && !item.startsWith(.;";"
  ') && item !== 'node_modules';) {scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {files.push(fullPath)}'
    "while": ((match = linkRegex.exec(content)) !== null) {
  }
  findFiles(extension) {;

}


const scanDirectory = (dir) => {;
      }
      try {;

}

        for (const item of items) {;

}

=======
      } catch (error) {
  // TODO: Implement
        const items = fs.readdirSync(dir);"
        "for": (const item of items) {"
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);"
          "if": (stat.isDirectory() && !item.startsWith(")"
  .';) && item: !== 'node_modules';';) {';
            scanDirectory(fullPath)} "else": if (stat.isFile() && item.endsWith(extension)) {"
            files.push(fullPath)}
>>>>>>> origin/chore/fix-lint-and-merge

      } catch (error) {"
        // Skip directories we can't read}'}
;
    scanDirectory(this.projectRoot);
    "return": files}"
  extractLinks(content) {"
    const linkRegex = /href=[;']([^]+)[";"']/g';
    const links = [];
    "let": match;"
=======
      } catch (error) {
        // Skip directories we can't read}'}
;
    scanDirectory(this.projectRoot);
    "return": files}
  extractLinks(content) {
    const linkRegex = /href=['';']([^'']+)[";"']/g';
    const links = [];
    "let": match;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    while: ((match = linkRegex.exec(content)) !== null) {
      links.push(match[1])}
    return links}
  extractMarkdownLinks(content) {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
<<<<<<< HEAD
    const links = [];"
<<<<<<< HEAD
  findFiles($2) {
      try {
  for($2) {
          const fullPath = path.join(dir, item)
          const stat = fs.statSync(fullPath)
=======
=======
    const links = [];
    "let": match;
    while: ((match = linkRegex.exec(content)) !== null) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  findFiles(extension) {;
    const scanDirectory = (dir) => {;
      try {;
<<<<<<< HEAD
        const items = fs.readdirSync(dir);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        for (const item of items) {;
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
>>>>>>> origin/chore/fix-lint-and-merge
          if (stat.isDirectory() && !item.startsWith(
  .;"
  ') && item !== 'node_modules';) {;
            scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {;

<<<<<<< HEAD
            files.push(fullPath)}
        }
      } catch (error) {'

        const items = fs.readdirSync(dir);
        for (const item of items) {;
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory() && !item.startsWith("
  .;"")"
  ') && item !== 'node_modules';) {;
            scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {;

<<<<<<< HEAD
const linkRegex = /href=['']([^'']+)[";";"
  ']/g;'

    let match;
    while ((match = linkRegex.exec(content)) !== null) {links.push(match[1])}
   ;
  return links}
  extractMarkdownLinks(content) ;
    while ((match = linkRegex.exec(content)) !== null) {links.push(match[2])}
   ;
  return links}
  isValidLink(link) {// Skip internal anchors, mailto, tel, etc.;
  }
=======
        // Skip directories we can't read}
=======
<<<<<<< HEAD
        const items = fs.readdirSync(dir);
        for (const item of items) {;
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory() && !item.startsWith(
  .;"
  ') && item !== 'node_modules';) {;
            scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {;
         else if (stat.isFile() && item.endsWith(extension)) {;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
            files.push(fullPath)}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        }
      } catch (error) {'
        // Skip directories we can't read}
    }
;
    scanDirectory(this.projectRoot);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    return files}
  extractLinks(content) {
    const linkRegex = /href=[]([^]+)[";""]"
  ']/g;
    let match;
    while ((match = linkRegex.exec(content)) !== null) {;
<<<<<<< HEAD
  extractMarkdownLinks(content) {;
      links.push(match[2])}
>>>>>>> origin/chore/fix-lint-and-merge
=======
      links.push(match[1])}
    return links}
  extractMarkdownLinks(content) {;
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const links = [];
    let match;
    while ((match = linkRegex.exec(content)) !== null) {;
      links.push(match[2])}
    return links}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  isValidLink(link) {;
    // Skip internal anchors, mailto, tel, etc.;
<<<<<<< HEAD
    "if": (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {';
      return: tru,e}
    // Skip relative paths;
    "if": (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {';
=======

    "if": (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {';
      return: tru,e}

    // Skip relative paths;
    "if": (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      return: true}
    // Basic URL validation;
    "try": {"
      new URL(link);
      return: true} catch {
  // TODO: Implement
      return true}
<<<<<<< HEAD
    // Skip relative paths;"
    if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {;
=======
    // Skip relative paths;
    if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {;
      return true}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    // Basic URL validation;
      return true} catch {;
      return false}
  }
}

<<<<<<< HEAD
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
  const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';))if (packageJson.repository) {this.checkedLinks++; if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {' this.brokenLinks.push(`package."json": ${packageJson.repository.url || packageJson.repository}`)} } },`} catch (error) {console.warn(,⚠️ Could not check package.json "links": error.message)}
} findFiles(extension) { const files = [];

}

  }
} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';'

}

};
  return links} extractMarkdownLinks(content) {;
  }
  }

const scanDirectory = (dir) => {try {const items = fs.readdirSync(dir)else if (stat.isFile() && item.endsWith(extension)) {files.push(fullPath)} } } catch (error) {' }scanDirectory(this.projectRoot;'
  return files} extractLinks(content) {';'
  }
  const linkRegex = /href=['']([^'']+)[";" ']/g;'

  return links} extractMarkdownLinks(content) ;
  return links} isValidLink(link) {"if": (link.startsWith('#';';) || link.startsWith('"mailto": ') || link.startsWith('"tel":)) {'; "return": tru,e} "if": (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; "return": true} "try": { new URL(link)"return": true} catch { return tru,'
} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {return true} try {new URL(link)return true} catch {return false} } }'

const linkChecker = new LinkChecker()linkChecker.checkLinks().then(() => { console.log('🔗 "Link": Checker Completed';';)';process.exit(0)}).catch((error) => { console.error('❌ "Link": Checker "Failed":',error)';process.exit(1)}) console.error('❌ Link Checker "Failed":',error)process.exit(1)})#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) console.log(,"}),"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) console.log('📁 Scanning project for links...,"}),"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`),"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken "links":`),"}),"}) this.brokenLinks.forEach((link) => {,"}),"}) console.log(` - ${link}`),"}),"}) }),"}),"}) } else {,"}),"}) console.log(,,"}),"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link "checking": error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) ),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) ),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) ),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) ),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package."json": ${packageJson.repository.url || packageJson.repositor,`}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) console.warn(,,"}),"}) ⚠️ Could not check package.json "links": error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) ),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('"mailto": ') || link.startsWith('"tel":)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"});"
  return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) console.log('🔗 Link Checker Completed,"}),"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker "Failed":',error),"}),"}) process.exit(1),"}),"}) }),"}),"});"
} async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';): ${link}`)} } } } "async": scanMarkdownFiles() { const mdFiles  = this.findFiles( '.md')';"for": (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)';'
}


} findFiles(extension) { const files = [];

}

  }
} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';'

}

};
  return links} extractMarkdownLinks(content) {;
  }
  }

  return files} extractLinks(content) {';'
  }

  return links} extractMarkdownLinks(content) ;
  return links} isValidLink(link) {"if": (link.startsWith('#';';) || link.startsWith('"mailto": ') || link.startsWith('"tel":)) {'; "return": tru,e} "if": (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; "return": true} "try": { new URL(link)"return": true} catch { return tru,'
} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {return true} try {new URL(link)return true} catch {return false} } }'

const linkChecker = new LinkChecker()linkChecker.checkLinks().then(() => { console.log('🔗 "Link": Checker Completed';';)';process.exit(0)}).catch((error) => { console.error('❌ "Link": Checker "Failed":',error)';process.exit(1)}) console.error('❌ Link Checker "Failed":',error)process.exit(1)})#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) console.log(,"}),"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) console.log('📁 Scanning project for links...,"}),"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`),"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken "links":`),"}),"}) this.brokenLinks.forEach((link) => {,"}),"}) console.log(` - ${link}`),"}),"}) }),"}),"}) } else {,"}),"}) console.log(,,"}),"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link "checking": error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) for (const file of htmlFiles) {,"}),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) for (const file of mdFiles) {,"}),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package."json": ${packageJson.repository.url || packageJson.repositor,`}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) console.warn(,,"}),"}) ⚠️ Could not check package.json "links": error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('"mailto": ') || link.startsWith('"tel":)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"});"
  return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) console.log('🔗 Link Checker Completed,"}),"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker "Failed":',error),"}),"}) process.exit(1),"}),"}) }),"}),"});"
} async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';)for (const file of htmlFiles) {' const content = fs.readFileSync(file,utf8')const links = this.extractLinks(content)for ;'
  }
}

  }
} findFiles(extension) { const files = [];

}

  }
} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';'

}

};
  return links} extractMarkdownLinks(content) {;
  }
  }

  }

}

  return links} extractMarkdownLinks(content) ;
  return links} isValidLink(link) {"if": (link.startsWith('#';';) || link.startsWith('"mailto": ') || link.startsWith('"tel":)) {'; "return": tru,e} "if": (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; "return": true} "try": { new URL(link)"return": true} catch { return tru,'
} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {return true} try {new URL(link)return true} catch {return false} } }'

  return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) console.log('🔗 Link Checker Completed,"}),"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker "Failed":',error),"}),"}) process.exit(1),"}),"}) }),"}),"});"
} async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';): ${link}`)} } } } "async": scanMarkdownFiles() { const mdFiles  = this.findFiles( '.md')';"for": (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)';'
}


} findFiles(extension) { const files = [];

}

  }
} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';'

}

};
  return links} extractMarkdownLinks(content) {;
  }
  }

  return files} extractLinks(content) {';'
  }

  return links} extractMarkdownLinks(content) ;
  return links} isValidLink(link) {"if": (link.startsWith('#';';) || link.startsWith('"mailto": ') || link.startsWith('"tel":)) {'; "return": tru,e} "if": (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; "return": true} "try": { new URL(link)"return": true} catch { return tru,'
} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {return true} try {new URL(link)return true} catch {return false} } }'

  return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) console.log('🔗 Link Checker Completed,"}),"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker "Failed":',error),"}),"}) process.exit(1),"}),"}) }),"}),"});"
} async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';): ${link}`)} } } } "async": scanMarkdownFiles() { const mdFiles  = this.findFiles( '.md')';"for": (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)';'
}


} findFiles(extension) { const files = [];

}

  }
} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';'

}

};
  return links} extractMarkdownLinks(content) {;
  }
  }

  return files} extractLinks(content) {';'
  }

  return links} extractMarkdownLinks(content) ;
  return links} isValidLink(link) {"if": (link.startsWith('#';';) || link.startsWith('"mailto": ') || link.startsWith('"tel":)) {'; "return": tru,e} "if": (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; "return": true} "try": { new URL(link)"return": true} catch { return tru,'
} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {return true} try {new URL(link)return true} catch {return false} } }'

const linkChecker = new LinkChecker()linkChecker.checkLinks().then(() => { console.log('🔗 "Link": Checker Completed';';)';process.exit(0)}).catch((error) => { console.error('❌ "Link": Checker "Failed":',error)';process.exit(1)}) console.error('❌ Link Checker "Failed":',error)process.exit(1)})ursor/automate-test-improve-and-merge-code-646c;'
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) console.log(,"}),"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) console.log('📁 Scanning project for links...,"}),"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`),"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken "links":`),"}),"}) this.brokenLinks.forEach((link) => {,"}),"}) console.log(` - ${link}`),"}),"}) }),"}),"}) } else {,"}),"}) console.log(,,"}),"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link "checking": error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) for (const file of htmlFiles) {,"}),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) for (const file of mdFiles) {,"}),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package."json": ${packageJson.repository.url || packageJson.repositor,`}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) console.warn(,,"}),"}) ⚠️ Could not check package.json "links": error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('"mailto": ') || link.startsWith('"tel":)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"});"
  return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) console.log('🔗 Link Checker Completed,"}),"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker "Failed":',error),"}),"}) process.exit(1),"}),"}) }),"}),"});"
} async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';)for (const file of htmlFiles) {' const content = fs.readFileSync(file,utf8')const links = this.extractLinks(content)for ;'
  }
}

  }
} findFiles(extension) { const files = [];

}

  }
} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';'

}

};
  return links} extractMarkdownLinks(content) {;
  }
  }

  }

}

  return links} extractMarkdownLinks(content) ;
  return links} isValidLink(link) {"if": (link.startsWith('#';';) || link.startsWith('"mailto": ') || link.startsWith('"tel":)) {'; "return": tru,e} "if": (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; "return": true} "try": { new URL(link)"return": true} catch { return tru,'
} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {return true} try {new URL(link)return true} catch {return false} } }'

const linkChecker = new LinkChecker()linkChecker.checkLinks().then(() => { console.log('🔗 "Link": Checker Completed';';)';process.exit(0)}).catch((error) => { console.error('❌ "Link": Checker "Failed":',error)';process.exit(1)}) console.error('❌ Link Checker "Failed":',error)process.exit(1)})
=======
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) console.log(,"}),"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) console.log('📁 Scanning project for links...,"}),"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`),"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`),"}),"}) this.brokenLinks.forEach(link => {,"}),"}) console.log(` - ${link}`),"}),"}) }),"}),"}) } else {,"}),"}) console.log(,,"}),"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link checking: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) for (const file of htmlFiles) {,"}),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) for (const file of mdFiles) {,"}),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) console.warn(,,"}),"}) ⚠️ Could not check package.json links: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) console.log('🔗 Link Checker Completed,"}),"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) const __dirname = path.dirname(__filename); console.log(','🔗 Link Checker Started'); class LinkChecker {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.brokenLinks = []; this.checkedLinks = 0} async checkLinks() { try {' console.log('📁 Scanning project for links...';); await this.scanHtmlFiles(); await this.scanMarkdownFiles(); await this.checkPackageLinks(); console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`); if (this.brokenLinks.length > 0) {` console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`); this.brokenLinks.forEach(link => {` console.log(` - ${link}`)})} else { console.log( 🎉 All links appear to be valid!;` ')} } catch (error) {' console.error('❌ Error during link checking: error.message)} } async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';); for (const file of htmlFiles) {' const content = fs.readFileSync(file,utf8'); const links = this.extractLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this.findFiles( '.md')'; for: (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)'; const links = this.extractMarkdownLinks(content); for: (const link of links) { this.checkedLinks++; if: (!this.isValidLink(link)) { '.md'); for (const file of mdFiles) {; const content = fs.readFileSync(file,utf8';); const links = this.extractMarkdownLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } const packagePath = path.join(this.projectRoot,package.json'); if (fs.existsSync(packagePath)) {; const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';)); if (packageJson.repository) {; this.checkedLinks++; if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {' this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`)} } } } catch (error) {; console.warn(,⚠️ Could not check package.json links: error.message)} } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory() && !item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) { files.push(fullPath)} } } catch (error) { ; scanDirectory(this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g'; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs.readdirSync(dir); for (const item of items) {; const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith( .;` ') && item !== 'node_modules';) {; scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[2])} return links} isValidLink(link) {; if: (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {'; return: tru,e} if: (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker.checkLinks().then(() => { console.log('🔗 Link: Checker Completed';';)'; process.exit(0)}).catch((error) => { console.error('❌ Link: Checker Failed:',error)'; process.exit(1)}) console.error('❌ Link Checker Failed:',error); process.exit(1)})
>>>>>>> origin/chore/fix-lint-and-merge
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
// Run the link checker;
const linkChecker = new LinkChecker();
<<<<<<< HEAD
linkChecker.checkLinks().then(() => {
  console.log('🔗 "Link": Checker Completed';';)';
  process.exit(0)}).catch((error) => {
  console.error('❌ "Link": Checker Failed:', error)';
  process.exit(1)})
  console.error('❌ Link Checker "Failed": ', error);
  process.exit(1)})


// Run the link checker;
const linkChecker = new LinkChecker();
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) console.log(,"}),"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) console.log('📁 Scanning project for links...,"}),"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`),"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`),"}),"}) this.brokenLinks.forEach(link => {,"}),"}) console.log(` - ${link}`),"}),"}) }),"}),"}) } else {,"}),"}) console.log(,,"}),"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link checking: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) ),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) ),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) ),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) ),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) console.warn(,,"}),"}) ⚠️ Could not check package.json links: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) ),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) console.log('🔗 Link Checker Completed,"}),"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) const __dirname = path.dirname(__filename); console.log(','🔗 Link Checker Started'); class LinkChecker {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.brokenLinks = []; this.checkedLinks = 0} async checkLinks() { try {' console.log('📁 Scanning project for links...';); await this.scanHtmlFiles(); await this.scanMarkdownFiles(); await this.checkPackageLinks(); console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`); if (this.brokenLinks.length > 0) {` console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`); this.brokenLinks.forEach(link => {` console.log(` - ${link}`)})} else { console.log( 🎉 All links appear to be valid!;` ')} } catch (error) {' console.error('❌ Error during link checking: error.message)} } async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';); : ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this.findFiles( '.md')';; for: (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)';; const links = this.extractMarkdownLinks(content); for: (const link of links) { this.checkedLinks++; if: (!this.isValidLink(link)) { '.md'); : ${link}`)} } const packagePath = path.join(this.projectRoot,package.json'); if (fs.existsSync(packagePath)) {; const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';)); if (packageJson.repository) {; this.checkedLinks++; if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {' this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`)} } } } catch (error) {; console.warn(,⚠️ Could not check package.json links: error.message)} } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory() && !item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) { files.push(fullPath)} } } catch (error) { ; scanDirectory(this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs.readdirSync(dir);  else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[2])} return links} isValidLink(link) {; if: (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {'; return: tru,e} if: (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker.checkLinks().then(() => { console.log('🔗 Link: Checker Completed';';)';; process.exit(0)}).catch((error) => { console.error('❌ Link: Checker Failed:',error)';; process.exit(1)}) console.error('❌ Link Checker Failed:',error); process.exit(1)})
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) console.log(,"}),"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) console.log('📁 Scanning project for links...,"}),"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`),"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`),"}),"}) this.brokenLinks.forEach(link => {,"}),"}) console.log(` - ${link}`),"}),"}) }),"}),"}) } else {,"}),"}) console.log(,,"}),"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link checking: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) ),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) ),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) ),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) ),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) console.warn(,,"}),"}) ⚠️ Could not check package.json links: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) ),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) console.log('🔗 Link Checker Completed,"}),"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) const __dirname = path.dirname(__filename); console.log(','🔗 Link Checker Started'); class LinkChecker {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.brokenLinks = []; this.checkedLinks = 0} async checkLinks() { try {' console.log('📁 Scanning project for links...';); await this.scanHtmlFiles(); await this.scanMarkdownFiles(); await this.checkPackageLinks(); console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`); if (this.brokenLinks.length > 0) {` console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`); this.brokenLinks.forEach(link => {` console.log(` - ${link}`)})} else { console.log( 🎉 All links appear to be valid!;` ')} } catch (error) {' console.error('❌ Error during link checking: error.message)} } async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';); : ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this.findFiles( '.md')';; for: (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)';; const links = this.extractMarkdownLinks(content); for: (const link of links) { this.checkedLinks++; if: (!this.isValidLink(link)) { '.md'); : ${link}`)} } const packagePath = path.join(this.projectRoot,package.json'); if (fs.existsSync(packagePath)) {; const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';)); if (packageJson.repository) {; this.checkedLinks++; if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {' this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`)} } } } catch (error) {; console.warn(,⚠️ Could not check package.json links: error.message)} } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory() && !item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) { files.push(fullPath)} } } catch (error) { ; scanDirectory(this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs.readdirSync(dir);  else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[2])} return links} isValidLink(link) {; if: (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {'; return: tru,e} if: (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker.checkLinks().then(() => { console.log('🔗 Link: Checker Completed';';)';; process.exit(0)}).catch((error) => { console.error('❌ Link: Checker Failed:',error)';; process.exit(1)}) console.error('❌ Link Checker Failed:',error); process.exit(1)})
linkChecker && linkChecker.checkLinks().then(() => {
  console && console.log('🔗 "Link": Checker Completed', ')';
  process && process.exit(0)}).catch((error) => {
  console && console.error('❌ "Link": Checker Failed:', error)';
  process && process.exit(1)})
  console && console.error('❌ Link Checker "Failed": ', error);
  process && process.exit(1)})
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import && import.meta.url),"}),"}) const __dirname = path && path.dirname(__filename),"}),"}) ,"}),"}) console && console.log(,"}),"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this && this.projectRoot = path && path.resolve(__dirname,..,"}),"}) '),"}),"}) this && this.brokenLinks = [],"}),"}) this && this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) console && console.log('📁 Scanning project for links...,"}),"}) '),"}),"}) ,"}),"}) await this && this.scanHtmlFiles(),"}),"}) ,"}),"}) await this && this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this && this.checkPackageLinks(),"}),"}) ,"}),"}) console && console.log(`✅ Link check completed. Checked ${this && this.checkedLinks} links.`),"}),"}) ,"}),"}) if (this && this.brokenLinks.length > 0) {,"}),"}) console && console.log(`⚠️ Found ${this && this.brokenLinks.length} potentially broken links:`),"}),"}) this && this.brokenLinks.forEach(link => {,"}),"}) console && console.log(` - ${link}`),"}),"}) }),"}),"}) } else {,"}),"}) console && console.log(,,"}),"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console && console.error('❌ Error during link checking: error && error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this && this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) for (const file of htmlFiles) {,"}),"}) const content = fs && fs.readFileSync(file,utf8'),"}),"}) const links = this && this.extractLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this && this.checkedLinks++,"}),"}) if (!this && this.isValidLink(link)) {,"}),"}) this && this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this && this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) for (const file of mdFiles) {,"}),"}) const content = fs && fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this && this.extractMarkdownLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this && this.checkedLinks++,"}),"}) if (!this && this.isValidLink(link)) {,"}),"}) this && this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path && path.join(this && this.projectRoot,package && package.json'),"}),"}) if (fs && fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON && JSON.parse(fs && fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson && packageJson.repository) {,"}),"}) this && this.checkedLinks++,"}),"}) if (!this && this.isValidLink(packageJson && packageJson.repository.url || packageJson && packageJson.repository)) {,"}),"}) this && this.brokenLinks.push(`package && package.json: ${packageJson && packageJson.repository.url || packageJson && packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) console && console.warn(,,"}),"}) ⚠️ Could not check package && package.json links: error && error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs && fs.readdirSync(dir),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const fullPath = path && path.join(dir,item),"}),"}) const stat = fs && fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat && stat.isDirectory() && !item && item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat && stat.isFile() && item && item.endsWith(extension)) {,"}),"}) files && files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this && this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex && linkRegex.exec(content)) !== null) {,"}),"}) links && links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex && linkRegex.exec(content)) !== null) {,"}),"}) links && links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link && link.startsWith('#,"}),"}) ') || link && link.startsWith('mailto: ') || link && link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link && link.startsWith('./,"}),"}) ') || link && link.startsWith('../,"}),"}) ') || link && link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker && linkChecker.checkLinks().then(() => {,"}),"}) console && console.log('🔗 Link Checker Completed,"}),"}) '),"}),"}) process && process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console && console.error('❌ Link Checker Failed:',error),"}),"}) process && process.exit(1),"}),"}) }),"}),"}) const __dirname = path ; console && console.log(','🔗 Link Checker Started'); class LinkChecker {; constructor() {; this && this.projectRoot = path && path.resolve(__dirname,..';); this && this.brokenLinks = []; this && this.checkedLinks = 0} async checkLinks() { try {' console && console.log('📁 Scanning project for links...';); await this && this.scanHtmlFiles(); await this && this.scanMarkdownFiles(); await this && this.checkPackageLinks(); console && console.log(`✅ Link check completed. Checked ${this && this.checkedLinks} links.`); if (this && this.brokenLinks.length > 0) {` console && console.log(`⚠️ Found ${this && this.brokenLinks.length} potentially broken links:`); this && this.brokenLinks.forEach(link => {` console && console.log(` - ${link}`)})} else { console && console.log( 🎉 All links appear to be valid!;` ')} } catch (error) {' console && console.error('❌ Error during link checking: error && error.message)} } async scanHtmlFiles() {' const htmlFiles = this && this.findFiles('.html';); for (const file of htmlFiles) {' const content = fs && fs.readFileSync(file,utf8'); const links = this && this.extractLinks(content); for (const link of links) {; this && this.checkedLinks++; if (!this && this.isValidLink(link)) {' this && this.brokenLinks.push(`${file}: ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this && this.findFiles( '.md')';; for: (const file of mdFiles) { const content = fs && fs.readFileSync(file,utf8';)';; const links = this && this.extractMarkdownLinks(content); for: (const link of links) { this && this.checkedLinks++; if: (!this && this.isValidLink(link)) { '.md'); for (const file of mdFiles) {; const content = fs && fs.readFileSync(file,utf8';); const links = this && this.extractMarkdownLinks(content); for (const link of links) {; this && this.checkedLinks++; if (!this && this.isValidLink(link)) {' this && this.brokenLinks.push(`${file}: ${link}`)} } const packagePath = path && path.join(this && this.projectRoot,package && package.json'); if (fs && fs.existsSync(packagePath)) {; const packageJson = JSON && JSON.parse(fs && fs.readFileSync(packagePath,utf8';)); if (packageJson && packageJson.repository) {; this && this.checkedLinks++; if (!this && this.isValidLink(packageJson && packageJson.repository.url || packageJson && packageJson.repository)) {' this && this.brokenLinks.push(`package && package.json: ${packageJson && packageJson.repository.url || packageJson && packageJson.repository}`)} } } } catch (error) {; console && console.warn(,⚠️ Could not check package && package.json links: error && error.message)} } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs && fs.readdirSync(dir); for: (const item of items) { const fullPath = path && path.join(dir,item); const stat = fs && fs.statSync(fullPath); if: (stat && stat.isDirectory() && !item && item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat && stat.isFile() && item && item.endsWith(extension)) { files && files.push(fullPath)} } } catch (error) { ; scanDirectory(this && this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match; while: ((match = linkRegex && linkRegex.exec(content)) !== null) { links && links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex && linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs && fs.readdirSync(dir); for (const item of items) {; const fullPath = path && path.join(dir,item); const stat = fs && fs.statSync(fullPath); if (stat && stat.isDirectory() && !item && item.startsWith( .;` ') && item !== 'node_modules';) {; scanDirectory(fullPath)} else if (stat && stat.isFile() && item && item.endsWith(extension)) {; files && files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this && this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex && linkRegex.exec(content)) !== null) {; links && links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex && linkRegex.exec(content)) !== null) {; links && links.push(match[2])} return links} isValidLink(link) {; if: (link && link.startsWith('#';';) || link && link.startsWith('mailto: ') || link && link.startsWith('tel:)) {'; return: tru,e} if: (link && link.startsWith('./';';) || link && link.startsWith('../';';) || link && link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link && link.startsWith('./';) || link && link.startsWith('../';) || link && link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker && linkChecker.checkLinks().then(() => { console && console.log('🔗 Link: Checker Completed';';)';; process && process.exit(0)}).catch((error) => { console && console.error('❌ Link: Checker Failed:',error)';; process && process.exit(1)}) console && console.error('❌ Link Checker Failed:',error); process && process.exit(1)})
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import && import.meta.url),"}),"}) const __dirname = path && path.dirname(__filename),"}),"}) ,"}),"}) console && console.log(,"}),"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this && this.projectRoot = path && path.resolve(__dirname,..,"}),"}) '),"}),"}) this && this.brokenLinks = [],"}),"}) this && this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) console && console.log('📁 Scanning project for links...,"}),"}) '),"}),"}) ,"}),"}) await this && this.scanHtmlFiles(),"}),"}) ,"}),"}) await this && this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this && this.checkPackageLinks(),"}),"}) ,"}),"}) console && console.log(`✅ Link check completed. Checked ${this && this.checkedLinks} links.`),"}),"}) ,"}),"}) if (this && this.brokenLinks.length > 0) {,"}),"}) console && console.log(`⚠️ Found ${this && this.brokenLinks.length} potentially broken links:`),"}),"}) this && this.brokenLinks.forEach(link => {,"}),"}) console && console.log(` - ${link}`),"}),"}) }),"}),"}) } else {,"}),"}) console && console.log(,,"}),"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console && console.error('❌ Error during link checking: error && error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this && this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) for (const file of htmlFiles) {,"}),"}) const content = fs && fs.readFileSync(file,utf8'),"}),"}) const links = this && this.extractLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this && this.checkedLinks++,"}),"}) if (!this && this.isValidLink(link)) {,"}),"}) this && this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this && this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) for (const file of mdFiles) {,"}),"}) const content = fs && fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this && this.extractMarkdownLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this && this.checkedLinks++,"}),"}) if (!this && this.isValidLink(link)) {,"}),"}) this && this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path && path.join(this && this.projectRoot,package && package.json'),"}),"}) if (fs && fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON && JSON.parse(fs && fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson && packageJson.repository) {,"}),"}) this && this.checkedLinks++,"}),"}) if (!this && this.isValidLink(packageJson && packageJson.repository.url || packageJson && packageJson.repository)) {,"}),"}) this && this.brokenLinks.push(`package && package.json: ${packageJson && packageJson.repository.url || packageJson && packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) console && console.warn(,,"}),"}) ⚠️ Could not check package && package.json links: error && error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs && fs.readdirSync(dir),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const fullPath = path && path.join(dir,item),"}),"}) const stat = fs && fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat && stat.isDirectory() && !item && item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat && stat.isFile() && item && item.endsWith(extension)) {,"}),"}) files && files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this && this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex && linkRegex.exec(content)) !== null) {,"}),"}) links && links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex && linkRegex.exec(content)) !== null) {,"}),"}) links && links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link && link.startsWith('#,"}),"}) ') || link && link.startsWith('mailto: ') || link && link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link && link.startsWith('./,"}),"}) ') || link && link.startsWith('../,"}),"}) ') || link && link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker && linkChecker.checkLinks().then(() => {,"}),"}) console && console.log('🔗 Link Checker Completed,"}),"}) '),"}),"}) process && process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console && console.error('❌ Link Checker Failed:',error),"}),"}) process && process.exit(1),"}),"}) }),"}),"}) const __dirname = path ; console && console.log(','🔗 Link Checker Started'); class LinkChecker {; constructor() {; this && this.projectRoot = path && path.resolve(__dirname,..';); this && this.brokenLinks = []; this && this.checkedLinks = 0} async checkLinks() { try {' console && console.log('📁 Scanning project for links...';); await this && this.scanHtmlFiles(); await this && this.scanMarkdownFiles(); await this && this.checkPackageLinks(); console && console.log(`✅ Link check completed. Checked ${this && this.checkedLinks} links.`); if (this && this.brokenLinks.length > 0) {` console && console.log(`⚠️ Found ${this && this.brokenLinks.length} potentially broken links:`); this && this.brokenLinks.forEach(link => {` console && console.log(` - ${link}`)})} else { console && console.log( 🎉 All links appear to be valid!;` ')} } catch (error) {' console && console.error('❌ Error during link checking: error && error.message)} } async scanHtmlFiles() {' const htmlFiles = this && this.findFiles('.html';); for (const file of htmlFiles) {' const content = fs && fs.readFileSync(file,utf8'); const links = this && this.extractLinks(content); for (const link of links) {; this && this.checkedLinks++; if (!this && this.isValidLink(link)) {' this && this.brokenLinks.push(`${file}: ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this && this.findFiles( '.md')';; for: (const file of mdFiles) { const content = fs && fs.readFileSync(file,utf8';)';; const links = this && this.extractMarkdownLinks(content); for: (const link of links) { this && this.checkedLinks++; if: (!this && this.isValidLink(link)) { '.md'); for (const file of mdFiles) {; const content = fs && fs.readFileSync(file,utf8';); const links = this && this.extractMarkdownLinks(content); for (const link of links) {; this && this.checkedLinks++; if (!this && this.isValidLink(link)) {' this && this.brokenLinks.push(`${file}: ${link}`)} } const packagePath = path && path.join(this && this.projectRoot,package && package.json'); if (fs && fs.existsSync(packagePath)) {; const packageJson = JSON && JSON.parse(fs && fs.readFileSync(packagePath,utf8';)); if (packageJson && packageJson.repository) {; this && this.checkedLinks++; if (!this && this.isValidLink(packageJson && packageJson.repository.url || packageJson && packageJson.repository)) {' this && this.brokenLinks.push(`package && package.json: ${packageJson && packageJson.repository.url || packageJson && packageJson.repository}`)} } } } catch (error) {; console && console.warn(,⚠️ Could not check package && package.json links: error && error.message)} } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs && fs.readdirSync(dir); for: (const item of items) { const fullPath = path && path.join(dir,item); const stat = fs && fs.statSync(fullPath); if: (stat && stat.isDirectory() && !item && item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat && stat.isFile() && item && item.endsWith(extension)) { files && files.push(fullPath)} } } catch (error) { ; scanDirectory(this && this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match; while: ((match = linkRegex && linkRegex.exec(content)) !== null) { links && links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex && linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs && fs.readdirSync(dir); for (const item of items) {; const fullPath = path && path.join(dir,item); const stat = fs && fs.statSync(fullPath); if (stat && stat.isDirectory() && !item && item.startsWith( .;` ') && item !== 'node_modules';) {; scanDirectory(fullPath)} else if (stat && stat.isFile() && item && item.endsWith(extension)) {; files && files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this && this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex && linkRegex.exec(content)) !== null) {; links && links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex && linkRegex.exec(content)) !== null) {; links && links.push(match[2])} return links} isValidLink(link) {; if: (link && link.startsWith('#';';) || link && link.startsWith('mailto: ') || link && link.startsWith('tel:)) {'; return: tru,e} if: (link && link.startsWith('./';';) || link && link.startsWith('../';';) || link && link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link && link.startsWith('./';) || link && link.startsWith('../';) || link && link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker && linkChecker.checkLinks().then(() => { console && console.log('🔗 Link: Checker Completed';';)';; process && process.exit(0)}).catch((error) => { console && console.error('❌ Link: Checker Failed:',error)';; process && process.exit(1)}) console && console.error('❌ Link Checker Failed:',error); process && process.exit(1)})
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import && import.meta.url),"}),"}) const __dirname = path && path.dirname(__filename),"}),"}) ,"}),"}) console && console.log(,"}),"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this && this.projectRoot = path && path.resolve(__dirname,..,"}),"}) '),"}),"}) this && this.brokenLinks = [],"}),"}) this && this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) console && console.log('📁 Scanning project for links...,"}),"}) '),"}),"}) ,"}),"}) await this && this.scanHtmlFiles(),"}),"}) ,"}),"}) await this && this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this && this.checkPackageLinks(),"}),"}) ,"}),"}) console && console.log(`✅ Link check completed. Checked ${this && this.checkedLinks} links.`),"}),"}) ,"}),"}) if (this && this.brokenLinks.length > 0) {,"}),"}) console && console.log(`⚠️ Found ${this && this.brokenLinks.length} potentially broken links:`),"}),"}) this && this.brokenLinks.forEach(link => {,"}),"}) console && console.log(` - ${link}`),"}),"}) }),"}),"}) } else {,"}),"}) console && console.log(,,"}),"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console && console.error('❌ Error during link checking: error && error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this && this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) for (const file of htmlFiles) {,"}),"}) const content = fs && fs.readFileSync(file,utf8'),"}),"}) const links = this && this.extractLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this && this.checkedLinks++,"}),"}) if (!this && this.isValidLink(link)) {,"}),"}) this && this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this && this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) for (const file of mdFiles) {,"}),"}) const content = fs && fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this && this.extractMarkdownLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this && this.checkedLinks++,"}),"}) if (!this && this.isValidLink(link)) {,"}),"}) this && this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path && path.join(this && this.projectRoot,package && package.json'),"}),"}) if (fs && fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON && JSON.parse(fs && fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson && packageJson.repository) {,"}),"}) this && this.checkedLinks++,"}),"}) if (!this && this.isValidLink(packageJson && packageJson.repository.url || packageJson && packageJson.repository)) {,"}),"}) this && this.brokenLinks.push(`package && package.json: ${packageJson && packageJson.repository.url || packageJson && packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) console && console.warn(,,"}),"}) ⚠️ Could not check package && package.json links: error && error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs && fs.readdirSync(dir),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const fullPath = path && path.join(dir,item),"}),"}) const stat = fs && fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat && stat.isDirectory() && !item && item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat && stat.isFile() && item && item.endsWith(extension)) {,"}),"}) files && files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this && this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex && linkRegex.exec(content)) !== null) {,"}),"}) links && links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex && linkRegex.exec(content)) !== null) {,"}),"}) links && links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link && link.startsWith('#,"}),"}) ') || link && link.startsWith('mailto: ') || link && link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link && link.startsWith('./,"}),"}) ') || link && link.startsWith('../,"}),"}) ') || link && link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker && linkChecker.checkLinks().then(() => {,"}),"}) console && console.log('🔗 Link Checker Completed,"}),"}) '),"}),"}) process && process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console && console.error('❌ Link Checker Failed:',error),"}),"}) process && process.exit(1),"}),"}) }),"}),"}) const __dirname = path ; console && console.log(','🔗 Link Checker Started'); class LinkChecker {; constructor() {; this && this.projectRoot = path && path.resolve(__dirname,..';); this && this.brokenLinks = []; this && this.checkedLinks = 0} async checkLinks() { try {' console && console.log('📁 Scanning project for links...';); await this && this.scanHtmlFiles(); await this && this.scanMarkdownFiles(); await this && this.checkPackageLinks(); console && console.log(`✅ Link check completed. Checked ${this && this.checkedLinks} links.`); if (this && this.brokenLinks.length > 0) {` console && console.log(`⚠️ Found ${this && this.brokenLinks.length} potentially broken links:`); this && this.brokenLinks.forEach(link => {` console && console.log(` - ${link}`)})} else { console && console.log( 🎉 All links appear to be valid!;` ')} } catch (error) {' console && console.error('❌ Error during link checking: error && error.message)} } async scanHtmlFiles() {' const htmlFiles = this && this.findFiles('.html';); for (const file of htmlFiles) {' const content = fs && fs.readFileSync(file,utf8'); const links = this && this.extractLinks(content); for (const link of links) {; this && this.checkedLinks++; if (!this && this.isValidLink(link)) {' this && this.brokenLinks.push(`${file}: ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this && this.findFiles( '.md')';; for: (const file of mdFiles) { const content = fs && fs.readFileSync(file,utf8';)';; const links = this && this.extractMarkdownLinks(content); for: (const link of links) { this && this.checkedLinks++; if: (!this && this.isValidLink(link)) { '.md'); for (const file of mdFiles) {; const content = fs && fs.readFileSync(file,utf8';); const links = this && this.extractMarkdownLinks(content); for (const link of links) {; this && this.checkedLinks++; if (!this && this.isValidLink(link)) {' this && this.brokenLinks.push(`${file}: ${link}`)} } const packagePath = path && path.join(this && this.projectRoot,package && package.json'); if (fs && fs.existsSync(packagePath)) {; const packageJson = JSON && JSON.parse(fs && fs.readFileSync(packagePath,utf8';)); if (packageJson && packageJson.repository) {; this && this.checkedLinks++; if (!this && this.isValidLink(packageJson && packageJson.repository.url || packageJson && packageJson.repository)) {' this && this.brokenLinks.push(`package && package.json: ${packageJson && packageJson.repository.url || packageJson && packageJson.repository}`)} } } } catch (error) {; console && console.warn(,⚠️ Could not check package && package.json links: error && error.message)} } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs && fs.readdirSync(dir); for: (const item of items) { const fullPath = path && path.join(dir,item); const stat = fs && fs.statSync(fullPath); if: (stat && stat.isDirectory() && !item && item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat && stat.isFile() && item && item.endsWith(extension)) { files && files.push(fullPath)} } } catch (error) { ; scanDirectory(this && this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match; while: ((match = linkRegex && linkRegex.exec(content)) !== null) { links && links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex && linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs && fs.readdirSync(dir); for (const item of items) {; const fullPath = path && path.join(dir,item); const stat = fs && fs.statSync(fullPath); if (stat && stat.isDirectory() && !item && item.startsWith( .;` ') && item !== 'node_modules';) {; scanDirectory(fullPath)} else if (stat && stat.isFile() && item && item.endsWith(extension)) {; files && files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this && this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex && linkRegex.exec(content)) !== null) {; links && links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex && linkRegex.exec(content)) !== null) {; links && links.push(match[2])} return links} isValidLink(link) {; if: (link && link.startsWith('#';';) || link && link.startsWith('mailto: ') || link && link.startsWith('tel:)) {'; return: tru,e} if: (link && link.startsWith('./';';) || link && link.startsWith('../';';) || link && link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link && link.startsWith('./';) || link && link.startsWith('../';) || link && link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker && linkChecker.checkLinks().then(() => { console && console.log('🔗 Link: Checker Completed';';)';; process && process.exit(0)}).catch((error) => { console && console.error('❌ Link: Checker Failed:',error)';; process && process.exit(1)}) console && console.error('❌ Link Checker Failed:',error); process && process.exit(1)})
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import && import.meta.url),"}),"}) const __dirname = path && path.dirname(__filename),"}),"}) ,"}),"}) console && console.log(,"}),"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this && this.projectRoot = path && path.resolve(__dirname,..,"}),"}) '),"}),"}) this && this.brokenLinks = [],"}),"}) this && this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) console && console.log('📁 Scanning project for links...,"}),"}) '),"}),"}) ,"}),"}) await this && this.scanHtmlFiles(),"}),"}) ,"}),"}) await this && this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this && this.checkPackageLinks(),"}),"}) ,"}),"}) console && console.log(`✅ Link check completed. Checked ${this && this.checkedLinks} links.`),"}),"}) ,"}),"}) if (this && this.brokenLinks.length > 0) {,"}),"}) console && console.log(`⚠️ Found ${this && this.brokenLinks.length} potentially broken links:`),"}),"}) this && this.brokenLinks.forEach(link => {,"}),"}) console && console.log(` - ${link}`),"}),"}) }),"}),"}) } else {,"}),"}) console && console.log(,,"}),"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console && console.error('❌ Error during link checking: error && error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this && this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) for (const file of htmlFiles) {,"}),"}) const content = fs && fs.readFileSync(file,utf8'),"}),"}) const links = this && this.extractLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this && this.checkedLinks++,"}),"}) if (!this && this.isValidLink(link)) {,"}),"}) this && this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this && this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) for (const file of mdFiles) {,"}),"}) const content = fs && fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this && this.extractMarkdownLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this && this.checkedLinks++,"}),"}) if (!this && this.isValidLink(link)) {,"}),"}) this && this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path && path.join(this && this.projectRoot,package && package.json'),"}),"}) if (fs && fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON && JSON.parse(fs && fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson && packageJson.repository) {,"}),"}) this && this.checkedLinks++,"}),"}) if (!this && this.isValidLink(packageJson && packageJson.repository.url || packageJson && packageJson.repository)) {,"}),"}) this && this.brokenLinks.push(`package && package.json: ${packageJson && packageJson.repository.url || packageJson && packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) console && console.warn(,,"}),"}) ⚠️ Could not check package && package.json links: error && error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs && fs.readdirSync(dir),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const fullPath = path && path.join(dir,item),"}),"}) const stat = fs && fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat && stat.isDirectory() && !item && item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat && stat.isFile() && item && item.endsWith(extension)) {,"}),"}) files && files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this && this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex && linkRegex.exec(content)) !== null) {,"}),"}) links && links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex && linkRegex.exec(content)) !== null) {,"}),"}) links && links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link && link.startsWith('#,"}),"}) ') || link && link.startsWith('mailto: ') || link && link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link && link.startsWith('./,"}),"}) ') || link && link.startsWith('../,"}),"}) ') || link && link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker && linkChecker.checkLinks().then(() => {,"}),"}) console && console.log('🔗 Link Checker Completed,"}),"}) '),"}),"}) process && process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console && console.error('❌ Link Checker Failed:',error),"}),"}) process && process.exit(1),"}),"}) }),"}),"}) const __dirname = path ; console && console.log(','🔗 Link Checker Started'); class LinkChecker {; constructor() {; this && this.projectRoot = path && path.resolve(__dirname,..';); this && this.brokenLinks = []; this && this.checkedLinks = 0} async checkLinks() { try {' console && console.log('📁 Scanning project for links...';); await this && this.scanHtmlFiles(); await this && this.scanMarkdownFiles(); await this && this.checkPackageLinks(); console && console.log(`✅ Link check completed. Checked ${this && this.checkedLinks} links.`); if (this && this.brokenLinks.length > 0) {` console && console.log(`⚠️ Found ${this && this.brokenLinks.length} potentially broken links:`); this && this.brokenLinks.forEach(link => {` console && console.log(` - ${link}`)})} else { console && console.log( 🎉 All links appear to be valid!;` ')} } catch (error) {' console && console.error('❌ Error during link checking: error && error.message)} } async scanHtmlFiles() {' const htmlFiles = this && this.findFiles('.html';); for (const file of htmlFiles) {' const content = fs && fs.readFileSync(file,utf8'); const links = this && this.extractLinks(content); for (const link of links) {; this && this.checkedLinks++; if (!this && this.isValidLink(link)) {' this && this.brokenLinks.push(`${file}: ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this && this.findFiles( '.md')', , for: (const file of mdFiles) { const content = fs && fs.readFileSync(file,utf8';)';; const links = this && this.extractMarkdownLinks(content); for: (const link of links) { this && this.checkedLinks++, if: (!this && this.isValidLink(link)) { '.md'), for (const file of mdFiles) {; const content = fs && fs.readFileSync(file,utf8';); const links = this && this.extractMarkdownLinks(content); for (const link of links) {; this && this.checkedLinks++; if (!this && this.isValidLink(link)) {' this && this.brokenLinks.push(`${file}: ${link}`)} } const packagePath = path && path.join(this && this.projectRoot,package && package.json'); if (fs && fs.existsSync(packagePath)) {; const packageJson = JSON && JSON.parse(fs && fs.readFileSync(packagePath,utf8';)); if (packageJson && packageJson.repository) {; this && this.checkedLinks++; if (!this && this.isValidLink(packageJson && packageJson.repository.url || packageJson && packageJson.repository)) {' this && this.brokenLinks.push(`package && package.json: ${packageJson && packageJson.repository.url || packageJson && packageJson.repository}`)} } } } catch (error) {; console && console.warn(,⚠️ Could not check package && package.json links: error && error.message)} } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs && fs.readdirSync(dir); for: (const item of items) { const fullPath = path && path.join(dir,item); const stat = fs && fs.statSync(fullPath); if: (stat && stat.isDirectory() && !item && item.startsWith( .', ) && item: !== 'node_modules',';) {'; scanDirectory(fullPath)} else: if (stat && stat.isFile() && item && item.endsWith(extension)) { files && files.push(fullPath)} } } catch (error) { ; scanDirectory(this && this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match,
    while: ((match = linkRegex && linkRegex.exec(content)) !== null) { links && links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match, while: ((match = linkRegex && linkRegex.exec(content)) !== null) { findFiles(extension) {, const files = []; const scanDirectory = (dir) => {; try {; const items = fs && fs.readdirSync(dir); for (const item of items) {; const fullPath = path && path.join(dir,item); const stat = fs && fs.statSync(fullPath); if (stat && stat.isDirectory() && !item && item.startsWith( .;` ') && item !== 'node_modules';) {; scanDirectory(fullPath)} else if (stat && stat.isFile() && item && item.endsWith(extension)) {; files && files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this && this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex && linkRegex.exec(content)) !== null) {; links && links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex && linkRegex.exec(content)) !== null) {; links && links.push(match[2])} return links} isValidLink(link) {; if: (link && link.startsWith('#', ',) || link && link.startsWith('mailto: ') || link && link.startsWith('tel:)) {',
    return: tru,e} if: (link && link.startsWith('./', ',) || link && link.startsWith('../', ') || link && link.startsWith('/', ')) {'; return: true} try: { new URL(link),
    return: true} catch { return true} if (link && link.startsWith('./';) || link && link.startsWith('../';) || link && link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker && linkChecker.checkLinks().then(() => { console && console.log('🔗 Link: Checker Completed', ',)';; process && process.exit(0)}).catch((error) => { console && console.error('❌ Link: Checker Failed:',error)';; process && process.exit(1)}) console && console.error('❌ Link Checker Failed:',error); process && process.exit(1)})
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import && import.meta.url),"}),"}) const __dirname = path && path.dirname(__filename),"}),"}) ,"}),"}) console && console.log(,"}),"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this && this.projectRoot = path && path.resolve(__dirname,..,"}),"}) '),"}),"}) this && this.brokenLinks = [],"}),"}) this && this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) console && console.log('📁 Scanning project for links...,"}),"}) '),"}),"}) ,"}),"}) await this && this.scanHtmlFiles(),"}),"}) ,"}),"}) await this && this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this && this.checkPackageLinks(),"}),"}) ,"}),"}) console && console.log(`✅ Link check completed. Checked ${this && this.checkedLinks} links.`),"}),"}) ,"}),"}) if (this && this.brokenLinks.length > 0) {,"}),"}) console && console.log(`⚠️ Found ${this && this.brokenLinks.length} potentially broken links:`),"}),"}) this && this.brokenLinks.forEach(link => {,"}),"}) console && console.log(` - ${link}`),"}),"}) }),"}),"}) } else {,"}),"}) console && console.log(,,"}),"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console && console.error('❌ Error during link checking: error && error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this && this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) for (const file of htmlFiles) {,"}),"}) const content = fs && fs.readFileSync(file,utf8'),"}),"}) const links = this && this.extractLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this && this.checkedLinks++,"}),"}) if (!this && this.isValidLink(link)) {,"}),"}) this && this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this && this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) for (const file of mdFiles) {,"}),"}) const content = fs && fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this && this.extractMarkdownLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this && this.checkedLinks++,"}),"}) if (!this && this.isValidLink(link)) {,"}),"}) this && this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path && path.join(this && this.projectRoot,package && package.json'),"}),"}) if (fs && fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON && JSON.parse(fs && fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson && packageJson.repository) {,"}),"}) this && this.checkedLinks++,"}),"}) if (!this && this.isValidLink(packageJson && packageJson.repository.url || packageJson && packageJson.repository)) {,"}),"}) this && this.brokenLinks.push(`package && package.json: ${packageJson && packageJson.repository.url || packageJson && packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) console && console.warn(,,"}),"}) ⚠️ Could not check package && package.json links: error && error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs && fs.readdirSync(dir),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const fullPath = path && path.join(dir,item),"}),"}) const stat = fs && fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat && stat.isDirectory() && !item && item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat && stat.isFile() && item && item.endsWith(extension)) {,"}),"}) files && files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this && this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex && linkRegex.exec(content)) !== null) {,"}),"}) links && links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex && linkRegex.exec(content)) !== null) {,"}),"}) links && links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link && link.startsWith('#,"}),"}) ') || link && link.startsWith('mailto: ') || link && link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link && link.startsWith('./,"}),"}) ') || link && link.startsWith('../,"}),"}) ') || link && link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker && linkChecker.checkLinks().then(() => {,"}),"}) console && console.log('🔗 Link Checker Completed,"}),"}) '),"}),"}) process && process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console && console.error('❌ Link Checker Failed:',error),"}),"}) process && process.exit(1),"}),"}) }),"}),"}) const __dirname = path ; console && console.log(','🔗 Link Checker Started'); class LinkChecker {; constructor() {; this && this.projectRoot = path && path.resolve(__dirname,..';); this && this.brokenLinks = []; this && this.checkedLinks = 0} async checkLinks() { try {' console && console.log('📁 Scanning project for links...';); await this && this.scanHtmlFiles(); await this && this.scanMarkdownFiles(); await this && this.checkPackageLinks(); console && console.log(`✅ Link check completed. Checked ${this && this.checkedLinks} links.`); if (this && this.brokenLinks.length > 0) {` console && console.log(`⚠️ Found ${this && this.brokenLinks.length} potentially broken links:`); this && this.brokenLinks.forEach(link => {` console && console.log(` - ${link}`)})} else { console && console.log( 🎉 All links appear to be valid!;` ')} } catch (error) {' console && console.error('❌ Error during link checking: error && error.message)} } async scanHtmlFiles() {' const htmlFiles = this && this.findFiles('.html';); for (const file of htmlFiles) {' const content = fs && fs.readFileSync(file,utf8'); const links = this && this.extractLinks(content); for (const link of links) {; this && this.checkedLinks++; if (!this && this.isValidLink(link)) {' this && this.brokenLinks.push(`${file}: ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this && this.findFiles( '.md')', , for: (const file of mdFiles) { const content = fs && fs.readFileSync(file,utf8';)';; const links = this && this.extractMarkdownLinks(content); for: (const link of links) { this && this.checkedLinks++, if: (!this && this.isValidLink(link)) { '.md'), for (const file of mdFiles) {; const content = fs && fs.readFileSync(file,utf8';); const links = this && this.extractMarkdownLinks(content); for (const link of links) {; this && this.checkedLinks++; if (!this && this.isValidLink(link)) {' this && this.brokenLinks.push(`${file}: ${link}`)} } const packagePath = path && path.join(this && this.projectRoot,package && package.json'); if (fs && fs.existsSync(packagePath)) {; const packageJson = JSON && JSON.parse(fs && fs.readFileSync(packagePath,utf8';)); if (packageJson && packageJson.repository) {; this && this.checkedLinks++; if (!this && this.isValidLink(packageJson && packageJson.repository.url || packageJson && packageJson.repository)) {' this && this.brokenLinks.push(`package && package.json: ${packageJson && packageJson.repository.url || packageJson && packageJson.repository}`)} } } } catch (error) {; console && console.warn(,⚠️ Could not check package && package.json links: error && error.message)} } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs && fs.readdirSync(dir); for: (const item of items) { const fullPath = path && path.join(dir,item); const stat = fs && fs.statSync(fullPath); if: (stat && stat.isDirectory() && !item && item.startsWith( .', ) && item: !== 'node_modules',';) {'; scanDirectory(fullPath)} else: if (stat && stat.isFile() && item && item.endsWith(extension)) { files && files.push(fullPath)} } } catch (error) { ; scanDirectory(this && this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match,
    while: ((match = linkRegex && linkRegex.exec(content)) !== null) { links && links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match, while: ((match = linkRegex && linkRegex.exec(content)) !== null) { findFiles(extension) {, const files = []; const scanDirectory = (dir) => {; try {; const items = fs && fs.readdirSync(dir); for (const item of items) {; const fullPath = path && path.join(dir,item); const stat = fs && fs.statSync(fullPath); if (stat && stat.isDirectory() && !item && item.startsWith( .;` ') && item !== 'node_modules';) {; scanDirectory(fullPath)} else if (stat && stat.isFile() && item && item.endsWith(extension)) {; files && files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this && this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex && linkRegex.exec(content)) !== null) {; links && links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex && linkRegex.exec(content)) !== null) {; links && links.push(match[2])} return links} isValidLink(link) {; if: (link && link.startsWith('#', ',) || link && link.startsWith('mailto: ') || link && link.startsWith('tel:)) {',
    return: tru,e} if: (link && link.startsWith('./', ',) || link && link.startsWith('../', ') || link && link.startsWith('/', ')) {'; return: true} try: { new URL(link),
    return: true} catch { return true} if (link && link.startsWith('./';) || link && link.startsWith('../';) || link && link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker && linkChecker.checkLinks().then(() => { console && console.log('🔗 Link: Checker Completed', ',)';; process && process.exit(0)}).catch((error) => { console && console.error('❌ Link: Checker Failed:',error)';; process && process.exit(1)}) console && console.error('❌ Link Checker Failed:',error); process && process.exit(1)})
<<<<<<< HEAD
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) console.log(,"}),"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) console.log('📁 Scanning project for links...,"}),"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`),"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`),"}),"}) this.brokenLinks.forEach(link => {,"}),"}) console.log(` - ${link}`),"}),"}) }),"}),"}) } else {,"}),"}) console.log(,,"}),"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link checking: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) for (const file of htmlFiles) {,"}),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) for (const file of mdFiles) {,"}),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) console.warn(,,"}),"}) ⚠️ Could not check package.json links: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) console.log('🔗 Link Checker Completed,"}),"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) const __dirname = path.dirname(__filename); console.log(','🔗 Link Checker Started'); class LinkChecker {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.brokenLinks = []; this.checkedLinks = 0} async checkLinks() { try {' console.log('📁 Scanning project for links...';); await this.scanHtmlFiles(); await this.scanMarkdownFiles(); await this.checkPackageLinks(); console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`); if (this.brokenLinks.length > 0) {` console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`); this.brokenLinks.forEach(link => {` console.log(` - ${link}`)})} else { console.log( 🎉 All links appear to be valid!;` ')} } catch (error) {' console.error('❌ Error during link checking: error.message)} } async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';); for (const file of htmlFiles) {' const content = fs.readFileSync(file,utf8'); const links = this.extractLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this.findFiles( '.md')';; for: (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)';; const links = this.extractMarkdownLinks(content); for: (const link of links) { this.checkedLinks++; if: (!this.isValidLink(link)) { '.md'); for (const file of mdFiles) {; const content = fs.readFileSync(file,utf8';); const links = this.extractMarkdownLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } const packagePath = path.join(this.projectRoot,package.json'); if (fs.existsSync(packagePath)) {; const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';)); if (packageJson.repository) {; this.checkedLinks++; if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {' this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`)} } } } catch (error) {; console.warn(,⚠️ Could not check package.json links: error.message)} } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory() && !item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) { files.push(fullPath)} } } catch (error) { ; scanDirectory(this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs.readdirSync(dir); for (const item of items) {; const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith( .;` ') && item !== 'node_modules';) {; scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[2])} return links} isValidLink(link) {; if: (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {'; return: tru,e} if: (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker.checkLinks().then(() => { console.log('🔗 Link: Checker Completed';';)';; process.exit(0)}).catch((error) => { console.error('❌ Link: Checker Failed:',error)';; process.exit(1)}) console.error('❌ Link Checker Failed:',error); process.exit(1)})
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) console.log(,"}),"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) console.log('📁 Scanning project for links...,"}),"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`),"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`),"}),"}) this.brokenLinks.forEach(link => {,"}),"}) console.log(` - ${link}`),"}),"}) }),"}),"}) } else {,"}),"}) console.log(,,"}),"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link checking: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) for (const file of htmlFiles) {,"}),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) for (const file of mdFiles) {,"}),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) for (const link of links) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) console.warn(,,"}),"}) ⚠️ Could not check package.json links: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) console.log('🔗 Link Checker Completed,"}),"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) const __dirname = path.dirname(__filename); console.log(','🔗 Link Checker Started'); class LinkChecker {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.brokenLinks = []; this.checkedLinks = 0} async checkLinks() { try {' console.log('📁 Scanning project for links...';); await this.scanHtmlFiles(); await this.scanMarkdownFiles(); await this.checkPackageLinks(); console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`); if (this.brokenLinks.length > 0) {` console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`); this.brokenLinks.forEach(link => {` console.log(` - ${link}`)})} else { console.log( 🎉 All links appear to be valid!;` ')} } catch (error) {' console.error('❌ Error during link checking: error.message)} } async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';); for (const file of htmlFiles) {' const content = fs.readFileSync(file,utf8'); const links = this.extractLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this.findFiles( '.md')';; for: (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)';; const links = this.extractMarkdownLinks(content); for: (const link of links) { this.checkedLinks++; if: (!this.isValidLink(link)) { '.md'); for (const file of mdFiles) {; const content = fs.readFileSync(file,utf8';); const links = this.extractMarkdownLinks(content); for (const link of links) {; this.checkedLinks++; if (!this.isValidLink(link)) {' this.brokenLinks.push(`${file}: ${link}`)} } const packagePath = path.join(this.projectRoot,package.json'); if (fs.existsSync(packagePath)) {; const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';)); if (packageJson.repository) {; this.checkedLinks++; if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {' this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`)} } } } catch (error) {; console.warn(,⚠️ Could not check package.json links: error.message)} } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory() && !item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) { files.push(fullPath)} } } catch (error) { ; scanDirectory(this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs.readdirSync(dir); for (const item of items) {; const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith( .;` ') && item !== 'node_modules';) {; scanDirectory(fullPath)} else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[2])} return links} isValidLink(link) {; if: (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {'; return: tru,e} if: (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker.checkLinks().then(() => { console.log('🔗 Link: Checker Completed';';)';; process.exit(0)}).catch((error) => { console.error('❌ Link: Checker Failed:',error)';; process.exit(1)}) console.error('❌ Link Checker Failed:',error); process.exit(1)})
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) console.log(,"}),"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) console.log('📁 Scanning project for links...,"}),"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`),"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`),"}),"}) this.brokenLinks.forEach(link => {,"}),"}) console.log(` - ${link}`),"}),"}) }),"}),"}) } else {,"}),"}) console.log(,,"}),"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link checking: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) ),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) ),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) ),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) ),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) console.warn(,,"}),"}) ⚠️ Could not check package.json links: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) ),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) console.log('🔗 Link Checker Completed,"}),"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) const __dirname = path.dirname(__filename); console.log(','🔗 Link Checker Started'); class LinkChecker {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.brokenLinks = []; this.checkedLinks = 0} async checkLinks() { try {' console.log('📁 Scanning project for links...';); await this.scanHtmlFiles(); await this.scanMarkdownFiles(); await this.checkPackageLinks(); console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`); if (this.brokenLinks.length > 0) {` console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`); this.brokenLinks.forEach(link => {` console.log(` - ${link}`)})} else { console.log( 🎉 All links appear to be valid!;` ')} } catch (error) {' console.error('❌ Error during link checking: error.message)} } async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';); : ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this.findFiles( '.md')';; for: (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)';; const links = this.extractMarkdownLinks(content); for: (const link of links) { this.checkedLinks++; if: (!this.isValidLink(link)) { '.md'); : ${link}`)} } const packagePath = path.join(this.projectRoot,package.json'); if (fs.existsSync(packagePath)) {; const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';)); if (packageJson.repository) {; this.checkedLinks++; if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {' this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`)} } } } catch (error) {; console.warn(,⚠️ Could not check package.json links: error.message)} } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory() && !item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) { files.push(fullPath)} } } catch (error) { ; scanDirectory(this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs.readdirSync(dir);  else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[2])} return links} isValidLink(link) {; if: (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {'; return: tru,e} if: (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker.checkLinks().then(() => { console.log('🔗 Link: Checker Completed';';)';; process.exit(0)}).catch((error) => { console.error('❌ Link: Checker Failed:',error)';; process.exit(1)}) console.error('❌ Link Checker Failed:',error); process.exit(1)})
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) console.log(,"}),"}) '🔗 Link Checker Started'),"}),"}) ,"}),"}) class LinkChecker {,"}),"}) constructor() {,"}),"}) this.projectRoot = path.resolve(__dirname,..,"}),"}) '),"}),"}) this.brokenLinks = [],"}),"}) this.checkedLinks = 0,"}),"}) }"}),"}) ,"}),"}) async checkLinks() {,"}),"}) try {,"}),"}) console.log('📁 Scanning project for links...,"}),"}) '),"}),"}) ,"}),"}) await this.scanHtmlFiles(),"}),"}) ,"}),"}) await this.scanMarkdownFiles(),"}),"}) ,"}),"}) await this.checkPackageLinks(),"}),"}) ,"}),"}) console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`),"}),"}) ,"}),"}) if (this.brokenLinks.length > 0) {,"}),"}) console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`),"}),"}) this.brokenLinks.forEach(link => {,"}),"}) console.log(` - ${link}`),"}),"}) }),"}),"}) } else {,"}),"}) console.log(,,"}),"}) 🎉 All links appear to be valid!,"}),"}) '),"}),"}) }"}),"}) ,"}),"}) } catch (error) {,"}),"}) console.error('❌ Error during link checking: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanHtmlFiles() {,"}),"}) const htmlFiles = this.findFiles('.html,"}),"}) '),"}),"}) ,"}),"}) ),"}) const content = fs.readFileSync(file,utf8'),"}),"}) const links = this.extractLinks(content),"}),"}) ,"}),"}) ),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async scanMarkdownFiles() {,"}),"}) const mdFiles = this.findFiles(,"}),"}) '.md'),"}),"}) ,"}),"}) ),"}) const content = fs.readFileSync(file,utf8,"}),"}) '),"}),"}) const links = this.extractMarkdownLinks(content),"}),"}) ,"}),"}) ),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(link)) {,"}),"}) this.brokenLinks.push(`${file}: ${link}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) async checkPackageLinks() {,"}),"}) try {,"}),"}) const packagePath = path.join(this.projectRoot,package.json'),"}),"}) if (fs.existsSync(packagePath)) {,"}),"}) const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8,"}),"}) ')),"}),"}) ,"}),"}) if (packageJson.repository) {,"}),"}) this.checkedLinks++,"}),"}) if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {,"}),"}) this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`),"}),"}) }"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) console.warn(,,"}),"}) ⚠️ Could not check package.json links: error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) findFiles(extension) {,"}),"}) const files = [],"}),"}) ,"}),"}) const scanDirectory = (dir) => {,"}),"}) try {,"}),"}) const items = fs.readdirSync(dir),"}),"}) ,"}),"}) ),"}) const fullPath = path.join(dir,item),"}),"}) const stat = fs.statSync(fullPath),"}),"}) ,"}),"}) if (stat.isDirectory() && !item.startsWith(,,"}),"}) .,"}),"}) ') && item !== 'node_modules,"}),"}) ') {,"}),"}) scanDirectory(fullPath),"}),"}) } else if (stat.isFile() && item.endsWith(extension)) {,"}),"}) files.push(fullPath),"}),"}) }"}),"}) }"}),"}) } catch (error) {,"}),"}) }"}),"}) },"}),"}) ,"}),"}) scanDirectory(this.projectRoot),"}),"}) return files,"}),"}) }"}),"}) ,"}),"}) extractLinks(content) {,"}),"}) const linkRegex = /href=[","}),"}) ']([^"']+)[","}),"}) ']/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[1]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) extractMarkdownLinks(content) {,"}),"}) const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g,"}),"}) const links = [],"}),"}) let match,"}),"}) ,"}),"}) while ((match = linkRegex.exec(content)) !== null) {,"}),"}) links.push(match[2]),"}),"}) }"}),"}) ,"}),"}) return links,"}),"}) }"}),"}) ,"}),"}) isValidLink(link) {,"}),"}) if (link.startsWith('#,"}),"}) ') || link.startsWith('mailto: ') || link.startsWith('tel:)) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) if (link.startsWith('./,"}),"}) ') || link.startsWith('../,"}),"}) ') || link.startsWith('/,"}),"}) ')) {,"}),"}) return true,"}),"}) }"}),"}) ,"}),"}) try {,"}),"}) new URL(link),"}),"}) return true,"}),"}) } catch {,"}),"}) return false,"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) const linkChecker = new LinkChecker(),"}),"}) linkChecker.checkLinks().then(() => {,"}),"}) console.log('🔗 Link Checker Completed,"}),"}) '),"}),"}) process.exit(0),"}),"}) }).catch((error) => {,"}),"}) console.error('❌ Link Checker Failed:',error),"}),"}) process.exit(1),"}),"}) }),"}),"}) const __dirname = path.dirname(__filename); console.log(','🔗 Link Checker Started'); class LinkChecker {; constructor() {; this.projectRoot = path.resolve(__dirname,..';); this.brokenLinks = []; this.checkedLinks = 0} async checkLinks() { try {' console.log('📁 Scanning project for links...';); await this.scanHtmlFiles(); await this.scanMarkdownFiles(); await this.checkPackageLinks(); console.log(`✅ Link check completed. Checked ${this.checkedLinks} links.`); if (this.brokenLinks.length > 0) {` console.log(`⚠️ Found ${this.brokenLinks.length} potentially broken links:`); this.brokenLinks.forEach(link => {` console.log(` - ${link}`)})} else { console.log( 🎉 All links appear to be valid!;` ')} } catch (error) {' console.error('❌ Error during link checking: error.message)} } async scanHtmlFiles() {' const htmlFiles = this.findFiles('.html';); : ${link}`)} } } } async: scanMarkdownFiles() { const mdFiles = this.findFiles( '.md')';; for: (const file of mdFiles) { const content = fs.readFileSync(file,utf8';)';; const links = this.extractMarkdownLinks(content); for: (const link of links) { this.checkedLinks++; if: (!this.isValidLink(link)) { '.md'); : ${link}`)} } const packagePath = path.join(this.projectRoot,package.json'); if (fs.existsSync(packagePath)) {; const packageJson = JSON.parse(fs.readFileSync(packagePath,utf8';)); if (packageJson.repository) {; this.checkedLinks++; if (!this.isValidLink(packageJson.repository.url || packageJson.repository)) {' this.brokenLinks.push(`package.json: ${packageJson.repository.url || packageJson.repository}`)} } } } catch (error) {; console.warn(,⚠️ Could not check package.json links: error.message)} } findFiles(extension) { const files = []; const scanDirectory = (dir) => { try { const items = fs.readdirSync(dir); for: (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if: (stat.isDirectory() && !item.startsWith( .';) && item: !== 'node_modules';';) {'; scanDirectory(fullPath)} else: if (stat.isFile() && item.endsWith(extension)) { files.push(fullPath)} } } catch (error) { ; scanDirectory(this.projectRoot); return: files} extractLinks(content) { const linkRegex = /href=['';']([^'']+)[";"']/g';; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { links.push(match[1])} return links} extractMarkdownLinks(content) { const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let: match; while: ((match = linkRegex.exec(content)) !== null) { findFiles(extension) {; const files = []; const scanDirectory = (dir) => {; try {; const items = fs.readdirSync(dir);  else if (stat.isFile() && item.endsWith(extension)) {; files.push(fullPath)} } } catch (error) {' } ; scanDirectory(this.projectRoot); return files} extractLinks(content) {' const linkRegex = /href=['']([^'']+)[";" ']/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[1])} return links} extractMarkdownLinks(content) {; const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g; const links = []; let match; while ((match = linkRegex.exec(content)) !== null) {; links.push(match[2])} return links} isValidLink(link) {; if: (link.startsWith('#';';) || link.startsWith('mailto: ') || link.startsWith('tel:)) {'; return: tru,e} if: (link.startsWith('./';';) || link.startsWith('../';';) || link.startsWith('/';';)) {'; return: true} try: { new URL(link); return: true} catch { return true} if (link.startsWith('./';) || link.startsWith('../';) || link.startsWith('/';)) {; return true} try {; new URL(link); return true} catch {; return false} } } const linkChecker = new LinkChecker(); linkChecker.checkLinks().then(() => { console.log('🔗 Link: Checker Completed';';)';; process.exit(0)}).catch((error) => { console.error('❌ Link: Checker Failed:',error)';; process.exit(1)}) console.error('❌ Link Checker Failed:',error); process.exit(1)})
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/scripts/link-checker.js
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
