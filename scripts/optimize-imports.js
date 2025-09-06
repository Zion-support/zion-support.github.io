<<<<<<< HEAD

#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) class ImportOptimizer {,"}),"}) constructor() {,"}),"}) this.projectRoot = process.cwd(),"}),"}) this.optimizedFiles = [],"}),"}) this.totalOptimizations = 0,"}),"}) }"}),"}) ,"}),"}) async optimizeImports() {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) for (const dir of directories) {,"}),"}) const dirPath = path.join(this.projectRoot,dir),"}),"}) if (fs.existsSync(dirPath)) {,"}),"}) await this.processDirectory(dirPath),"}),"}) }"}),"}) }"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) }"}),"}) ,"}),"}) async processDirectory(dirPath) {,"}),"}) const items = fs.readdirSync(dirPath),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const itemPath = path.join(dirPath,item),"}),"}) const stat = fs.statSync(itemPath),"}),"}) ,"}),"}) if (stat.isDirectory()) {,"}),"}) await this.processDirectory(itemPath),"}),"}) } else if (this.isJavaScriptFile(item)) {,"}),"}) await this.optimizeFile(itemPath),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) isJavaScriptFile(filePath) {,"}),"}) const ext = path.extname(filePath),"}),"}) return [,"}),"}) '.js',,"}),"}) '.jsx',,"}),"}) '.ts',,"}),"}) '.tsx'].includes(ext),"}),"}) }"}),"}) ,"}),"}) async optimizeFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,,"}),"}) 'utf8'),"}),"}) let optimizedContent = content,"}),"}) let optimizations = 0,"}),"}) ,"}),"}) optimizedContent = this.optimizeLucideImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeFramerMotionImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeRadixImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.removeUnusedImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) if (optimizations > 0) {,"}),"}) fs.writeFileSync(filePath,optimizedContent,,"}),"}) 'utf8'),"}),"}) this.optimizedFiles.push(filePath),"}),"}) this.totalOptimizations += optimizations,"}),"}) ,"}) `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`,"}),"}) ),"}),"}) }"}),"}) } catch (error) {,"}),"}) console.error(`❌ Error optimizing file ${filePath}:`,error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) optimizeLucideImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(lucidePattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const allIcons = new Set(),"}),"}) matches.forEach(match => {,"}),"}) const icons = match[1].split(,"}),"}) ',').map(icon => icon.trim()),"}),"}) icons.forEach(icon => allIcons.add(icon)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) optimizeFramerMotionImports(content) {,"}),"}) return content.replace(,"}),"}) /import\s*{\s*motion\s*}\s*from\s*['"]framer-motion[,"}),"}) '"];?\s*/g,,"}),"}) "import { motion } from 'framer-motion,"}),"}) ';\n","}),"}) ),"}),"}) }"}),"}) ,"}),"}) optimizeRadixImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(radixPattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const groupedImports = new Map(),"}),"}) matches.forEach(match => {,"}),"}) const components = match[1].split(,"}),"}) ',').map(comp => comp.trim()),"}),"}) const packageName = match[2],"}),"}) if (!groupedImports.has(packageName)) {,"}),"}) groupedImports.set(packageName,new Set()),"}),"}) }"}),"}) components.forEach(comp => groupedImports.get(packageName).add(comp)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) groupedImports.forEach((components,packageName) => {,"}),"}) optimizedImports += `import { ${Array.from(components).join(',,"}),"}) ')} } from '@radix-ui/${packageName}"}),"}) ';\n`,"}),"}) }),"}),"}) ,"}),"}) return content.replace(radixPattern,'').replace(/^/,optimizedImports),"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) removeUnusedImports(content) {,"}),"}) const lines = content.split(,"}),"}) '\n'),"}),"}) const usedIdentifiers = new Set(),"}),"}) ,"}),"}) lines.forEach(line => {,"}),"}) if (!line.trim().startsWith(,"}),"}) 'import')) {,"}),"}) const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g),"}),"}) if (matches) {,"}),"}) matches.forEach(match => usedIdentifiers.add(match)),"}),"}) }"}),"}) }"}),"}) }),"}),"}) ,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) }"}),"}) ,"}),"}) const optimizer = new ImportOptimizer(),"}),"}) optimizer.optimizeImports().catch(console.error),"}),"}) ,"}),"}) const __dirname = path.dirname(__filename); class ImportOptimizer {; constructor() {; this.projectRoot = process.cwd(); this.optimizedFiles = []; this.totalOptimizations = 0} async optimizeImports() {;  const directories = [';pages',';components',';src']; for (const dir of directories) {]; for (const dir of directories) { const dirPath = path.join(this.projectRoot,dir); if (fs.existsSync(dirPath)) {; await this.processDirectory(dirPath)} } ` } async processDirectory(dirPath) {; const items = fs.readdirSync(dirPath); for (const item of items) {; const itemPath = path.join(dirPath,item); const stat = fs.statSync(itemPath); if (stat.isDirectory()) {; await this.processDirectory(itemPath)} else if (this.isJavaScriptFile(item)) {; await this.optimizeFile(itemPath)} } } isJavaScriptFile(filePath) {; const ext = path.extname(filePath); return [';.js','';.jsx','';.ts','';.tsx'].includes(ext)}'; async: optimizeFile(filePath) { try { const content = fs.readFileSync(filePath 'utf8')';; let: optimizedContent = content; let: optimizations = 0; optimizedContent: = this.optimizeLucideImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeFramerMotionImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeRadixImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.removeUnusedImports(optimizedContent); if: (optimizedContent !== content) optimizations++; if: (optimizations > 0) { fs.writeFileSync(filePath,optimizedContent 'utf8')';; this.optimizedFiles.push(filePath); this.totalOptimizations: += optimizations; in ${path.relative(this.projectRoot,filePath)}`)} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[';']lucide-react[''];?\s*/g: const matches = [...content.matchAll(lucidePattern)]';; if: (matches.length > 1) { const allIcons = new Set(); matches.forEach(match: => { const icons = match[1].split( ',').map(icon => icon.trim())';; icons.forEach(icon: => allIcons.add(icon))}) const optimizedImport = `import { ${Array.from(allIcons).join( ',')} } from';';lucide-react';\n`; return: content.replace(lucidePattern,'';';).replace(/^/,optimizedImport) }'; return: content} optimizeFramerMotionImports(content) { return: content.replace( /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';';'];?\s*/g,'';import { motion } from 'framer-motion';;;\n')}'; optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['']@radix-ui\/([^';';']+)['"];?\s*/g: const matches = [...content.matchAll(radixPattern)];"; if: (matches.length > 1) { const groupedImports = new Map(); matches.forEach(match: => { const components = match[1].split( ',').map(comp => comp.trim())';; const packageName = match[2]; if: (!groupedImports.has(packageName)) { groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}) let optimizedImports = '';'; groupedImports.forEach((components,packageName) => {'; optimizedImports: += `import { ${Array.from(components).join(','';)} } from: '@radix-ui/${packageName}'';;\n`}) return: content.replace(radixPattern,'').replace(/^/,optimizedImports)}'; return: content} removeUnusedImports(content) { const lines = content.split( '\n')';; const usedIdentifiers = new Set(); lines.forEach(line: => { if (!line.trim().startsWith( 'import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if: (matches) { '.tsx'].includes(ext)} async optimizeFile(filePath) {; try {; const content = fs.readFileSync(filePath,optimizedContent = this.optimizeLucideImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeFramerMotionImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeRadixImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.removeUnusedImports(optimizedContent); if (optimizedContent !== content) optimizations++; if (optimizations > 0) {; fs.writeFileSync(filePath,optimizedContent,';utf8'); this.optimizedFiles.push(filePath); this.totalOptimizations += optimizations; in ${path.relative(this.projectRoot,filePath)}` )} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?\s*/g; const matches = [...content.matchAll(lucidePattern)]; console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) {; const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[;` '']lucide-react[''];?\s*/g const matches = [...content.matchAll(lucidePattern)]; if (matches.length > 1) { const allIcons = new Set(); matches.forEach(match => { const icons = match[1].split(',',).map(icon => icon.trim()); icons.forEach(icon => allIcons.add(icon));) const optimizedImport = `import { ${Array.from(allIcons).join(` ',')} } from';lucide-react';\n`;` return content.replace(lucidePattern,'';).replace(/^/,optimizedImport) } 'lucide-react';\n`; return content.replace(lucidePattern,).replace(/^/,optimizedImport) } return content} optimizeFramerMotionImports(content) {; return content.replace(' /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';'];?\s*/g 'import { motion } from 'framer-motion;;\n')} optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[']@radix-ui\/([^']+)['"];?\s*/g const matches = [...content.matchAll(radixPattern)]; if (matches.length > 1) {; const groupedImports = new Map(); matches.forEach(match => {; const components = match[1].split(',').map(comp => comp.trim()); optimizedImports += `import { ${Array.from(components).join(',')} } from '@radix-ui/${packageName} ';\n`})` return content.replace(radixPattern,'').replace(/^/,optimizedImports)} const packageName = match[2]; if (!groupedImports.has(packageName)) {; groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}); let optimizedImports = ''; groupedImports.forEach((components,packageName) => {; optimizedImports += `import { ${Array.from(components).join(',';)} } from '@radix-ui/${packageName} ';\n`}); return content.replace(radixPattern,').replace(/^/,optimizedImports)} return content} removeUnusedImports(content) {; const lines = content.split(','\n'); const usedIdentifiers = new Set(); lines.forEach(line => { if (!line.trim().startsWith(' 'import')) { const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) { matches.forEach(match => usedIdentifiers.add(match)); const lines = content.split(;)';\n')';; const usedIdentifiers = new Set()';; lines.forEach(line => {;); if (!line.trim().startsWith(;)';import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) {; matches.forEach(match => usedIdentifiers.add(match))} } }); return lines .filter(line => { if (line.trim().startsWith('import')) { const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/); if (importMatch) { const importedItems = importMatch[1] .split(',') .map(item => item.trim()); const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item) ); return hasUsedItems} } return true}) .join('\n')} const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item)); return hasUsedItems} } return true}).join(','\n') } } const optimizer = new ImportOptimizer(); optimizer.optimizeImports().catch(console.error);
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
ursor/fix-syntax-push-and-merge-to-main-40de
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) class ImportOptimizer {,"}),"}) constructor() {,"}),"}) this.projectRoot = process.cwd(),"}),"}) this.optimizedFiles = [],"}),"}) this.totalOptimizations = 0,"}),"}) }"}),"}) ,"}),"}) async optimizeImports() {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) for (const dir of directories) {,"}),"}) const dirPath = path.join(this.projectRoot,dir),"}),"}) if (fs.existsSync(dirPath)) {,"}),"}) await this.processDirectory(dirPath),"}),"}) }"}),"}) }"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) }"}),"}) ,"}),"}) async processDirectory(dirPath) {,"}),"}) const items = fs.readdirSync(dirPath),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const itemPath = path.join(dirPath,item),"}),"}) const stat = fs.statSync(itemPath),"}),"}) ,"}),"}) if (stat.isDirectory()) {,"}),"}) await this.processDirectory(itemPath),"}),"}) } else if (this.isJavaScriptFile(item)) {,"}),"}) await this.optimizeFile(itemPath),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) isJavaScriptFile(filePath) {,"}),"}) const ext = path.extname(filePath),"}),"}) return [,"}),"}) '.js',,"}),"}) '.jsx',,"}),"}) '.ts',,"}),"}) '.tsx'].includes(ext),"}),"}) }"}),"}) ,"}),"}) async optimizeFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,,"}),"}) 'utf8'),"}),"}) let optimizedContent = content,"}),"}) let optimizations = 0,"}),"}) ,"}),"}) optimizedContent = this.optimizeLucideImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeFramerMotionImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeRadixImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.removeUnusedImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) if (optimizations > 0) {,"}),"}) fs.writeFileSync(filePath,optimizedContent,,"}),"}) 'utf8'),"}),"}) this.optimizedFiles.push(filePath),"}),"}) this.totalOptimizations += optimizations,"}),"}) ,"}) `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`,"}),"}) ),"}),"}) }"}),"}) } catch (error) {,"}),"}) console.error(`❌ Error optimizing file ${filePath}:`,error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) optimizeLucideImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(lucidePattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const allIcons = new Set(),"}),"}) matches.forEach(match => {,"}),"}) const icons = match[1].split(,"}),"}) ',').map(icon => icon.trim()),"}),"}) icons.forEach(icon => allIcons.add(icon)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) optimizeFramerMotionImports(content) {,"}),"}) return content.replace(,"}),"}) /import\s*{\s*motion\s*}\s*from\s*['"]framer-motion[,"}),"}) '"];?\s*/g,,"}),"}) "import { motion } from 'framer-motion,"}),"}) ';\n","}),"}) ),"}),"}) }"}),"}) ,"}),"}) optimizeRadixImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(radixPattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const groupedImports = new Map(),"}),"}) matches.forEach(match => {,"}),"}) const components = match[1].split(,"}),"}) ',').map(comp => comp.trim()),"}),"}) const packageName = match[2],"}),"}) if (!groupedImports.has(packageName)) {,"}),"}) groupedImports.set(packageName,new Set()),"}),"}) }"}),"}) components.forEach(comp => groupedImports.get(packageName).add(comp)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) groupedImports.forEach((components,packageName) => {,"}),"}) optimizedImports += `import { ${Array.from(components).join(',,"}),"}) ')} } from '@radix-ui/${packageName}"}),"}) ';\n`,"}),"}) }),"}),"}) ,"}),"}) return content.replace(radixPattern,'').replace(/^/,optimizedImports),"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) removeUnusedImports(content) {,"}),"}) const lines = content.split(,"}),"}) '\n'),"}),"}) const usedIdentifiers = new Set(),"}),"}) ,"}),"}) lines.forEach(line => {,"}),"}) if (!line.trim().startsWith(,"}),"}) 'import')) {,"}),"}) const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g),"}),"}) if (matches) {,"}),"}) matches.forEach(match => usedIdentifiers.add(match)),"}),"}) }"}),"}) }"}),"}) }),"}),"}) ,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) }"}),"}) ,"}),"}) const optimizer = new ImportOptimizer(),"}),"}) optimizer.optimizeImports().catch(console.error),"}),"}) ,"}),"}) const __dirname = path.dirname(__filename); class ImportOptimizer {; constructor() {; this.projectRoot = process.cwd(); this.optimizedFiles = []; this.totalOptimizations = 0} async optimizeImports() {;  const directories = [';pages',';components',';src']; for (const dir of directories) {]; for (const dir of directories) { const dirPath = path.join(this.projectRoot,dir); if (fs.existsSync(dirPath)) {; await this.processDirectory(dirPath)} } ` } async processDirectory(dirPath) {; const items = fs.readdirSync(dirPath); for (const item of items) {; const itemPath = path.join(dirPath,item); const stat = fs.statSync(itemPath); if (stat.isDirectory()) {; await this.processDirectory(itemPath)} else if (this.isJavaScriptFile(item)) {; await this.optimizeFile(itemPath)} } } isJavaScriptFile(filePath) {; const ext = path.extname(filePath); return [';.js','';.jsx','';.ts','';.tsx'].includes(ext)}'; async: optimizeFile(filePath) { try { const content = fs.readFileSync(filePath 'utf8')';; let: optimizedContent = content; let: optimizations = 0; optimizedContent: = this.optimizeLucideImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeFramerMotionImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeRadixImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.removeUnusedImports(optimizedContent); if: (optimizedContent !== content) optimizations++; if: (optimizations > 0) { fs.writeFileSync(filePath,optimizedContent 'utf8')';; this.optimizedFiles.push(filePath); this.totalOptimizations: += optimizations; in ${path.relative(this.projectRoot,filePath)}`)} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[';']lucide-react[''];?\s*/g: const matches = [...content.matchAll(lucidePattern)]';; if: (matches.length > 1) { const allIcons = new Set(); matches.forEach(match: => { const icons = match[1].split( ',').map(icon => icon.trim())';; icons.forEach(icon: => allIcons.add(icon))}) const optimizedImport = `import { ${Array.from(allIcons).join( ',')} } from';';lucide-react';\n`; return: content.replace(lucidePattern,'';';).replace(/^/,optimizedImport) }'; return: content} optimizeFramerMotionImports(content) { return: content.replace( /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';';'];?\s*/g,'';import { motion } from 'framer-motion';;;\n')}'; optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['']@radix-ui\/([^';';']+)['"];?\s*/g: const matches = [...content.matchAll(radixPattern)];"; if: (matches.length > 1) { const groupedImports = new Map(); matches.forEach(match: => { const components = match[1].split( ',').map(comp => comp.trim())';; const packageName = match[2]; if: (!groupedImports.has(packageName)) { groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}) let optimizedImports = '';'; groupedImports.forEach((components,packageName) => {'; optimizedImports: += `import { ${Array.from(components).join(','';)} } from: '@radix-ui/${packageName}'';;\n`}) return: content.replace(radixPattern,'').replace(/^/,optimizedImports)}'; return: content} removeUnusedImports(content) { const lines = content.split( '\n')';; const usedIdentifiers = new Set(); lines.forEach(line: => { if (!line.trim().startsWith( 'import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if: (matches) { '.tsx'].includes(ext)} async optimizeFile(filePath) {; try {; const content = fs.readFileSync(filePath,optimizedContent = this.optimizeLucideImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeFramerMotionImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeRadixImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.removeUnusedImports(optimizedContent); if (optimizedContent !== content) optimizations++; if (optimizations > 0) {; fs.writeFileSync(filePath,optimizedContent,';utf8'); this.optimizedFiles.push(filePath); this.totalOptimizations += optimizations; in ${path.relative(this.projectRoot,filePath)}` )} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?\s*/g; const matches = [...content.matchAll(lucidePattern)]; console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) {; const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[;` '']lucide-react[''];?\s*/g const matches = [...content.matchAll(lucidePattern)]; if (matches.length > 1) { const allIcons = new Set(); matches.forEach(match => { const icons = match[1].split(',',).map(icon => icon.trim()); icons.forEach(icon => allIcons.add(icon));) const optimizedImport = `import { ${Array.from(allIcons).join(` ',')} } from';lucide-react';\n`;` return content.replace(lucidePattern,'';).replace(/^/,optimizedImport) } 'lucide-react';\n`; return content.replace(lucidePattern,).replace(/^/,optimizedImport) } return content} optimizeFramerMotionImports(content) {; return content.replace(' /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';'];?\s*/g 'import { motion } from 'framer-motion;;\n')} optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[']@radix-ui\/([^']+)['"];?\s*/g const matches = [...content.matchAll(radixPattern)]; if (matches.length > 1) {; const groupedImports = new Map(); matches.forEach(match => {; const components = match[1].split(',').map(comp => comp.trim()); optimizedImports += `import { ${Array.from(components).join(',')} } from '@radix-ui/${packageName} ';\n`})` return content.replace(radixPattern,'').replace(/^/,optimizedImports)} const packageName = match[2]; if (!groupedImports.has(packageName)) {; groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}); let optimizedImports = ''; groupedImports.forEach((components,packageName) => {; optimizedImports += `import { ${Array.from(components).join(',';)} } from '@radix-ui/${packageName} ';\n`}); return content.replace(radixPattern,').replace(/^/,optimizedImports)} return content} removeUnusedImports(content) {; const lines = content.split(','\n'); const usedIdentifiers = new Set(); lines.forEach(line => { if (!line.trim().startsWith(' 'import')) { const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) { matches.forEach(match => usedIdentifiers.add(match)); const lines = content.split(;)';\n')';; const usedIdentifiers = new Set()';; lines.forEach(line => {;); if (!line.trim().startsWith(;)';import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) {; matches.forEach(match => usedIdentifiers.add(match))} } }); return lines .filter(line => { if (line.trim().startsWith('import')) { const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/); if (importMatch) { const importedItems = importMatch[1] .split(',') .map(item => item.trim()); const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item) ); return hasUsedItems} } return true}) .join('\n')} const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item)); return hasUsedItems} } return true}).join(','\n') } } const optimizer = new ImportOptimizer(); optimizer.optimizeImports().catch(console.error);
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) class ImportOptimizer {,"}),"}) constructor() {,"}),"}) this.projectRoot = process.cwd(),"}),"}) this.optimizedFiles = [],"}),"}) this.totalOptimizations = 0,"}),"}) }"}),"}) ,"}),"}) async optimizeImports() {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ),"}) const dirPath = path.join(this.projectRoot,dir),"}),"}) if (fs.existsSync(dirPath)) {,"}),"}) await this.processDirectory(dirPath),"}),"}) }"}),"}) }"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) }"}),"}) ,"}),"}) async processDirectory(dirPath) {,"}),"}) const items = fs.readdirSync(dirPath),"}),"}) ,"}),"}) ),"}) const itemPath = path.join(dirPath,item),"}),"}) const stat = fs.statSync(itemPath),"}),"}) ,"}),"}) if (stat.isDirectory()) {,"}),"}) await this.processDirectory(itemPath),"}),"}) } else if (this.isJavaScriptFile(item)) {,"}),"}) await this.optimizeFile(itemPath),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) isJavaScriptFile(filePath) {,"}),"}) const ext = path.extname(filePath),"}),"}) return [,"}),"}) '.js',,"}),"}) '.jsx',,"}),"}) '.ts',,"}),"}) '.tsx'].includes(ext),"}),"}) }"}),"}) ,"}),"}) async optimizeFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,,"}),"}) 'utf8'),"}),"}) let optimizedContent = content,"}),"}) let optimizations = 0,"}),"}) ,"}),"}) optimizedContent = this.optimizeLucideImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeFramerMotionImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeRadixImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.removeUnusedImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) if (optimizations > 0) {,"}),"}) fs.writeFileSync(filePath,optimizedContent,,"}),"}) 'utf8'),"}),"}) this.optimizedFiles.push(filePath),"}),"}) this.totalOptimizations += optimizations,"}),"}) ,"}) `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`,"}),"}) ),"}),"}) }"}),"}) } catch (error) {,"}),"}) console.error(`❌ Error optimizing file ${filePath}:`,error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) optimizeLucideImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(lucidePattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const allIcons = new Set(),"}),"}) matches.forEach(match => {,"}),"}) const icons = match[1].split(,"}),"}) ',').map(icon => icon.trim()),"}),"}) icons.forEach(icon => allIcons.add(icon)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) optimizeFramerMotionImports(content) {,"}),"}) return content.replace(,"}),"}) /import\s*{\s*motion\s*}\s*from\s*['"]framer-motion[,"}),"}) '"];?\s*/g,,"}),"}) "import { motion } from 'framer-motion,"}),"}) ';\n","}),"}) ),"}),"}) }"}),"}) ,"}),"}) optimizeRadixImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(radixPattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const groupedImports = new Map(),"}),"}) matches.forEach(match => {,"}),"}) const components = match[1].split(,"}),"}) ',').map(comp => comp.trim()),"}),"}) const packageName = match[2],"}),"}) if (!groupedImports.has(packageName)) {,"}),"}) groupedImports.set(packageName,new Set()),"}),"}) }"}),"}) components.forEach(comp => groupedImports.get(packageName).add(comp)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) groupedImports.forEach((components,packageName) => {,"}),"}) optimizedImports += `import { ${Array.from(components).join(',,"}),"}) ')} } from '@radix-ui/${packageName}"}),"}) ';\n`,"}),"}) }),"}),"}) ,"}),"}) return content.replace(radixPattern,'').replace(/^/,optimizedImports),"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) removeUnusedImports(content) {,"}),"}) const lines = content.split(,"}),"}) '\n'),"}),"}) const usedIdentifiers = new Set(),"}),"}) ,"}),"}) lines.forEach(line => {,"}),"}) if (!line.trim().startsWith(,"}),"}) 'import')) {,"}),"}) const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g),"}),"}) if (matches) {,"}),"}) matches.forEach(match => usedIdentifiers.add(match)),"}),"}) }"}),"}) }"}),"}) }),"}),"}) ,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) }"}),"}) ,"}),"}) const optimizer = new ImportOptimizer(),"}),"}) optimizer.optimizeImports().catch(console.error),"}),"}) ,"}),"}) const __dirname = path.dirname(__filename); class ImportOptimizer {; constructor() {; this.projectRoot = process.cwd(); this.optimizedFiles = []; this.totalOptimizations = 0} async optimizeImports() {;  const directories = [';pages',';components',';src'];  } ` } async processDirectory(dirPath) {; const items = fs.readdirSync(dirPath);  else if (this.isJavaScriptFile(item)) {; await this.optimizeFile(itemPath)} } } isJavaScriptFile(filePath) {; const ext = path.extname(filePath); return [';.js','';.jsx','';.ts','';.tsx'].includes(ext)}'; async: optimizeFile(filePath) { try { const content = fs.readFileSync(filePath 'utf8')';; let: optimizedContent = content; let: optimizations = 0; optimizedContent: = this.optimizeLucideImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeFramerMotionImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeRadixImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.removeUnusedImports(optimizedContent); if: (optimizedContent !== content) optimizations++; if: (optimizations > 0) { fs.writeFileSync(filePath,optimizedContent 'utf8')';; this.optimizedFiles.push(filePath); this.totalOptimizations: += optimizations; in ${path.relative(this.projectRoot,filePath)}`)} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[';']lucide-react[''];?\s*/g: const matches = [...content.matchAll(lucidePattern)]';; if: (matches.length > 1) { const allIcons = new Set(); matches.forEach(match: => { const icons = match[1].split( ',').map(icon => icon.trim())';; icons.forEach(icon: => allIcons.add(icon))}) const optimizedImport = `import { ${Array.from(allIcons).join( ',')} } from';';lucide-react';\n`; return: content.replace(lucidePattern,'';';).replace(/^/,optimizedImport) }'; return: content} optimizeFramerMotionImports(content) { return: content.replace( /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';';'];?\s*/g,'';import { motion } from 'framer-motion';;;\n')}'; optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['']@radix-ui\/([^';';']+)['"];?\s*/g: const matches = [...content.matchAll(radixPattern)];"; if: (matches.length > 1) { const groupedImports = new Map(); matches.forEach(match: => { const components = match[1].split( ',').map(comp => comp.trim())';; const packageName = match[2]; if: (!groupedImports.has(packageName)) { groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}) let optimizedImports = '';'; groupedImports.forEach((components,packageName) => {'; optimizedImports: += `import { ${Array.from(components).join(','';)} } from: '@radix-ui/${packageName}'';;\n`}) return: content.replace(radixPattern,'').replace(/^/,optimizedImports)}'; return: content} removeUnusedImports(content) { const lines = content.split( '\n')';; const usedIdentifiers = new Set(); lines.forEach(line: => { if (!line.trim().startsWith( 'import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if: (matches) { '.tsx'].includes(ext)} async optimizeFile(filePath) {; try {; const content = fs.readFileSync(filePath,optimizedContent = this.optimizeLucideImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeFramerMotionImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeRadixImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.removeUnusedImports(optimizedContent); if (optimizedContent !== content) optimizations++; if (optimizations > 0) {; fs.writeFileSync(filePath,optimizedContent,';utf8'); this.optimizedFiles.push(filePath); this.totalOptimizations += optimizations; in ${path.relative(this.projectRoot,filePath)}` )} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?\s*/g; const matches = [...content.matchAll(lucidePattern)]; console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) {; const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[;` '']lucide-react[''];?\s*/g const matches = [...content.matchAll(lucidePattern)]; if (matches.length > 1) { const allIcons = new Set(); matches.forEach(match => { const icons = match[1].split(',',).map(icon => icon.trim()); icons.forEach(icon => allIcons.add(icon));) const optimizedImport = `import { ${Array.from(allIcons).join(` ',')} } from';lucide-react';\n`;` return content.replace(lucidePattern,'';).replace(/^/,optimizedImport) } 'lucide-react';\n`; return content.replace(lucidePattern,).replace(/^/,optimizedImport) } return content} optimizeFramerMotionImports(content) {; return content.replace(' /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';'];?\s*/g 'import { motion } from 'framer-motion;;\n')} optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[']@radix-ui\/([^']+)['"];?\s*/g const matches = [...content.matchAll(radixPattern)]; if (matches.length > 1) {; const groupedImports = new Map(); matches.forEach(match => {; const components = match[1].split(',').map(comp => comp.trim()); optimizedImports += `import { ${Array.from(components).join(',')} } from '@radix-ui/${packageName} ';\n`})` return content.replace(radixPattern,'').replace(/^/,optimizedImports)} const packageName = match[2]; if (!groupedImports.has(packageName)) {; groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}); let optimizedImports = ''; groupedImports.forEach((components,packageName) => {; optimizedImports += `import { ${Array.from(components).join(',';)} } from '@radix-ui/${packageName} ';\n`}); return content.replace(radixPattern,').replace(/^/,optimizedImports)} return content} removeUnusedImports(content) {; const lines = content.split(','\n'); const usedIdentifiers = new Set(); lines.forEach(line => { if (!line.trim().startsWith(' 'import')) { const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) { matches.forEach(match => usedIdentifiers.add(match)); const lines = content.split(;)';\n')';; const usedIdentifiers = new Set()';; lines.forEach(line => {;); if (!line.trim().startsWith(;)';import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) {; matches.forEach(match => usedIdentifiers.add(match))} } }); return lines .filter(line => { if (line.trim().startsWith('import')) { const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/); if (importMatch) { const importedItems = importMatch[1] .split(',') .map(item => item.trim()); const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item) ); return hasUsedItems} } return true}) .join('\n')} const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item)); return hasUsedItems} } return true}).join(','\n') } } const optimizer = new ImportOptimizer(); optimizer.optimizeImports().catch(console.error);
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
#!/usr/bin/env node,"}),"})
/**,"}),"})
 * Import Optimizer,"}),"})
 * Optimizes import statements to reduce bundle size,"}),"})
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
class ImportOptimizer {,"}),"})
  constructor() {,"}),"})
    this.projectRoot = process.cwd(),"}),"})
    this.optimizedFiles = [],"}),"})
    this.totalOptimizations = 0,"}),"})
  }"}),"})
,"}),"})
  async optimizeImports() {,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
<<<<<<< HEAD
<<<<<<< HEAD

    ),"})

=======
    ),"})

    for (const dir of directories) {,"}),"})
    ),"})
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      const dirPath = path.join(this.projectRoot, dir),"}),"})
      if (fs.existsSync(dirPath)) {,"}),"})
        await this.processDirectory(dirPath),"}),"})
      }"}),"})
    }"}),"})
,"}),"})
    console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`),"}),"})
    console.log(`📊 Total "optimizations": ${this.totalOptimizations}`),"}),"})
  }"}),"})
,"}),"})
  async processDirectory(dirPath) {,"}),"})
    const items = fs.readdirSync(dirPath),"}),"})
,"}),"})
<<<<<<< HEAD

=======
    for (const item of items) {,"}),"})
    ),"})
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

    ),"})

=======
    ),"})

    for (const item of items) {,"}),"})
    ),"})
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      const itemPath = path.join(dirPath, item),"}),"})
      const stat = fs.statSync(itemPath),"}),"})
,"}),"})
      if (stat.isDirectory()) {,"}),"})
        await this.processDirectory(itemPath),"}),"})
      } else if (this.isJavaScriptFile(item)) {,"}),"})
        await this.optimizeFile(itemPath),"}),"})
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
  async optimizeFile(filePath) {,"}),"})
    try {,"}),"})
      const content = fs.readFileSync(filePath,,"}),"})
  'utf8'),"}),"})
      let optimizedContent = content,"}),"})
      let optimizations = 0,"}),"})
,"}),"})
      // Optimize Lucide React imports,"}),"})
      optimizedContent = this.optimizeLucideImports(optimizedContent),"}),"})
      if (optimizedContent !== content) optimizations++,"}),"})
,"}),"})
      // Optimize Framer Motion imports,"}),"})
      optimizedContent = this.optimizeFramerMotionImports(optimizedContent),"}),"})
      if (optimizedContent !== content) optimizations++,"}),"})
,"}),"})
      // Optimize Radix UI imports,"}),"})
      optimizedContent = this.optimizeRadixImports(optimizedContent),"}),"})
      if (optimizedContent !== content) optimizations++,"}),"})
,"}),"})
      // Remove unused imports,"}),"})
      optimizedContent = this.removeUnusedImports(optimizedContent),"}),"})
      if (optimizedContent !== content) optimizations++,"}),"})
,"}),"})
      if (optimizations > 0) {,"}),"})
        fs.writeFileSync(filePath, optimizedContent,,"}),"})
  'utf8'),"}),"})
        this.optimizedFiles.push(filePath),"}),"})
        this.totalOptimizations += optimizations,"}),"})
        console.log(,"}),"})
          `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot, filePath)}`,"}),"})
        ),"}),"})
      }"}),"})
    } catch (error) {,"}),"})
      console.error(`❌ Error optimizing file ${filePath}:`, error.message),"}),"})
    }"}),"})
  }"}),"})
,"}),"})
  optimizeLucideImports(content) {,"}),"})
    // Convert individual icon imports to single import,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
    const matches = [...content.matchAll(lucidePattern)],"}),"})
,"}),"})
    if (matches.length > 1) {,"}),"})
      const allIcons = new Set(),"}),"})
      matches.forEach(match => {,"}),"})
        const icons = match[1].split(,"}),"})
  ', ').map(icon => icon.trim()),"}),"})
        icons.forEach(icon => allIcons.add(icon)),"}),"})
      }),"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
    }"}),"})
,"}),"})
    return content,"}),"})
  }"}),"})
,"}),"})
  optimizeFramerMotionImports(content) {,"}),"})
    // Optimize framer-motion imports,"}),"})
    return content.replace(,"}),"})
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      /import\s*{\s*motion\s*}\s*from\s*['"]framer-motion[,"}),"});
  '"];?\s*/g,,"}),"})
      "import { motion } from 'framer-motion,"}),"});

<<<<<<< HEAD
=======
      /import\s*{\s*motion\s*}\s*from\s*['"]framer-motion[,"}),"})
  '"];?\s*/g,,"}),"})
      "import { motion } from 'framer-motion,"}),"})
      /import\s*{\s*motion\s*}\s*from\s*['"]framer-motion[,"}),"});
  '"];?\s*/g,,"}),"})
      "import { motion } from 'framer-motion,"}),"});
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  ';\n","}),"})
    ),"}),"})
  }"}),"})
,"}),"})
  optimizeRadixImports(content) {,"}),"})
    // Group Radix UI imports,"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
    const matches = [...content.matchAll(radixPattern)],"}),"})
,"}),"})
    if (matches.length > 1) {,"}),"})
      const groupedImports = new Map(),"}),"})
      matches.forEach(match => {,"}),"})
        const components = match[1].split(,"}),"})
  ', ').map(comp => comp.trim()),"}),"})
        const packageName = match[2],"}),"})
        if (!groupedImports.has(packageName)) {,"}),"})
          groupedImports.set(packageName, new Set()),"}),"})
        }"}),"})
        components.forEach(comp => groupedImports.get(packageName).add(comp)),"}),"})
      }),"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
      groupedImports.forEach((components, packageName) => {,"}),"})
        optimizedImports += `import { ${Array.from(components).join(',,"}),"})
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

  ')} } from '@radix-ui/${packageName}"}),"});

=======
  ')} } from '@radix-ui/${packageName}"}),"});

  ')} } from '@radix-ui/${packageName}"}),"})
  ')} } from '@radix-ui/${packageName}"}),"});
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  ';\n`,"}),"})
      }),"}),"})
,"}),"})
      return content.replace(radixPattern, '').replace(/^/, optimizedImports),"}),"})
    }"}),"})
,"}),"})
    return content,"}),"})
  }"}),"})
,"}),"})
  removeUnusedImports(content) {,"}),"})
    // Simple unused import removal (basic implementation),"}),"})
    const lines = content.split(,"}),"})
  '\n'),"}),"})
    const usedIdentifiers = new Set(),"}),"})
,"}),"})
    // Find all used identifiers,"}),"})
    lines.forEach(line => {,"}),"})
      if (!line.trim().startsWith(,"}),"})
  'import')) {,"}),"})
        const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g),"}),"})
        if (matches) {,"}),"})
          matches.forEach(match => usedIdentifiers.add(match)),"}),"})
        }"}),"})
      }"}),"})
    }),"}),"})
,"}),"})
    // Remove unused imports (simplified),"}),"})
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})
  }"}),"})
}"}),"})
,"}),"})
// Run the optimizer,"}),"})
const optimizer = new ImportOptimizer(),"}),"})
optimizer.optimizeImports().catch(console.error),"}),"})
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

,"}),"});

=======
,"}),"});

,"}),"})
,"}),"});
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const __dirname = path.dirname(__filename);
class ImportOptimizer {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.optimizedFiles = [];
    this.totalOptimizations = 0}
  async optimizeImports() {;
    console.log(';⚡ Optimizing imports to reduce bundle size...');
    const directories = [';pages', ';components', ';src'];
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

    

=======
    

    for (const dir of directories) {];
    for (const dir of directories) {
      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {;
        await this.processDirectory(dirPath)}
    
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
    console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`);"
    console.log("📊 Total "optimizations": ${this.totalOptimizations}")}
  async processDirectory(dirPath) {;
    const items = fs.readdirSync(dirPath);
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

     else if (this.isJavaScriptFile(item)) {;

=======
     else if (this.isJavaScriptFile(item)) {;

    for (const item of items) {;
      const itemPath = path.join(dirPath, item);
      const stat = fs.statSync(itemPath);
      if (stat.isDirectory()) {;
        await this.processDirectory(itemPath)} else if (this.isJavaScriptFile(item)) {;
     else if (this.isJavaScriptFile(item)) {;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        await this.optimizeFile(itemPath)}
    }
  }
  isJavaScriptFile(filePath) {;
    const ext = path.extname(filePath);
    return [';.js', '';.jsx', '';.ts', '';.tsx'].includes(ext)}';
  "async": optimizeFile(filePath) {
    try {
      const content = fs.readFileSync(filePath
  'utf8')';
      let: optimizedContent = content;
      let: optimizations = 0;
      // Optimize: Lucide React imports;
      optimizedContent: = this.optimizeLucideImports(optimizedContent);
      if: (optimizedContent !== content) optimizations++;
      // Optimize: Framer Motion imports;
      optimizedContent: = this.optimizeFramerMotionImports(optimizedContent);
      if: (optimizedContent !== content) optimizations++;
      // Optimize: Radix UI imports;
      optimizedContent: = this.optimizeRadixImports(optimizedContent);
      if: (optimizedContent !== content) optimizations++;
      // Remove: unused imports;
      optimizedContent: = this.removeUnusedImports(optimizedContent);
      if: (optimizedContent !== content) optimizations++;
      if: (optimizations > 0) {
        fs.writeFileSync(filePath, optimizedContent
  'utf8')';
        this.optimizedFiles.push(filePath);
        this."totalOptimizations": += optimizations;
        console.log(
          "⚡ Optimized: ${optimizations} import(s) in ${path.relative(this.projectRoot, filePath)}")}
    } catch (error) {
      console.error("❌ Error optimizing file ${filePath}:", error.message)}
  }
  optimizeLucideImports(content) {
    // "Convert": individual icon imports to single import;
    const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[';']lucide-react[''];?\s*/"g": const matches = [...content.matchAll(lucidePattern)]';
    if: (matches.length > 1) {
      const allIcons = new Set();
      matches.forEach(match: => {
        const icons = match[1].split(
  ', ').map(icon => icon.trim())';
        icons.forEach("icon": => allIcons.add(icon))})
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

      const optimizedImport = "import { ${Array.from(allIcons).join(;

=======
      const optimizedImport = "import { ${Array.from(allIcons).join(;

      const optimizedImport = "import { ${Array.from(allIcons).join(
      const optimizedImport = "import { ${Array.from(allIcons).join(;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  ', ')} } from';';lucide-react';\n";
      "return": content.replace(lucidePattern, '';';).replace(/^/, optimizedImport)    }';
    "return": content}
  optimizeFramerMotionImports(content) {
    // Optimize framer-motion imports;
    "return": content.replace(
      /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';';'];?\s*/g, '';import { motion } from 'framer-motion';;\n')}';
  optimizeRadixImports(content) {
    // "Group": Radix UI imports;
    const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['']@radix-ui\/([^';';']+)['"];?\s*/"g": const matches = [...content.matchAll(radixPattern)];";
    if: (matches.length > 1) {
      const groupedImports = new Map();
      matches.forEach(match: => {
        const components = match[1].split(
  ', ').map(comp => comp.trim())';
        const packageName = match[2];
        "if": (!groupedImports.has(packageName)) {
          groupedImports.set(packageName, new Set())}
        components.forEach(comp => groupedImports.get(packageName).add(comp))})
      let optimizedImports = '';';      groupedImports.forEach((components, packageName) => {';
        "optimizedImports": += "import { ${Array.from(components).join(', '';)} } "from": '@radix-ui/${packageName}'';\n"})
      "return": content.replace(radixPattern, '').replace(/^/, optimizedImports)}';
    "return": content}
  removeUnusedImports(content) {
    // Simple unused import removal (basic implementation);
    const lines = content.split(
  '\n')';
    const usedIdentifiers = new Set();
    // "Find": all used identifiers;
    lines.forEach(line: => {
      if (!line.trim().startsWith(
  'import')) {';
        const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g);
        if: (matches) {
  '.tsx'].includes(ext)}
  async optimizeFile(filePath) {;
    try {;
      const content = fs.readFileSync(filePath,
      // Optimize Lucide React imports;
      optimizedContent = this.optimizeLucideImports(optimizedContent);
      if (optimizedContent !== content) optimizations++;
      // Optimize Framer Motion imports;
      optimizedContent = this.optimizeFramerMotionImports(optimizedContent);
      if (optimizedContent !== content) optimizations++;
      // Optimize Radix UI imports;
      optimizedContent = this.optimizeRadixImports(optimizedContent);
      if (optimizedContent !== content) optimizations++;
      // Remove unused imports;
      optimizedContent = this.removeUnusedImports(optimizedContent);
      if (optimizedContent !== content) optimizations++;
      if (optimizations > 0) {;
        fs.writeFileSync(filePath, optimizedContent, ';utf8');
        this.optimizedFiles.push(filePath);
        this.totalOptimizations += optimizations;
        console.log(
          "⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot, filePath)}"
        )}
    } catch (error) {
      console.error("❌ Error optimizing file ${filePath}:", error.message)}
  }
  optimizeLucideImports(content) {
    // Convert individual icon imports to single import
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

    const lucidePattern =;

=======
    const lucidePattern =;

    const lucidePattern =
    const lucidePattern =;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?\s*/g;
    const matches = [...content.matchAll(lucidePattern)];
      console.error("❌ Error optimizing file ${filePath}:", error.message)}
  }
  optimizeLucideImports(content) {;
    // Convert individual icon imports to single import;
    const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[;"
  '']lucide-react[''];?\s*/g    const matches = [...content.matchAll(lucidePattern)];
    if (matches.length > 1) {
      const allIcons = new Set();
      matches.forEach(match => {
        const icons = match[1].split(',
      ').map(icon => icon.trim());
        icons.forEach(icon => allIcons.add(icon));)
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

      const optimizedImport = `import { ${Array.from(allIcons).join(`;

=======
      const optimizedImport = `import { ${Array.from(allIcons).join(`;

      const optimizedImport = `import { ${Array.from(allIcons).join(`
      const optimizedImport = `import { ${Array.from(allIcons).join(`;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  ', ')} } from';lucide-react';\n";"
      return content.replace(lucidePattern, '';).replace(/^/, optimizedImport)    }
  'lucide-react';\n";
      return content.replace(lucidePattern).replace(/^/, optimizedImport)    }
    return content}
  optimizeFramerMotionImports(content) {;
    // Optimize framer-motion imports;
    return content.replace('
      /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';'];?\s*/g
      'import { motion }  from 'framer-motion;\n')}
  optimizeRadixImports(content) {
    // Group Radix UI imports;
    const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[']@radix-ui\/([^']+)['"];?\s*/g    const matches = [...content.matchAll(radixPattern)];
    if (matches.length > 1) {;
      const groupedImports = new Map();
      matches.forEach(match => {;
        const components = match[1].split(', ').map(comp => comp.trim());
        optimizedImports += "import { ${Array.from(components).join(',
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

      ')} } from '@radix-ui/${packageName};

=======
      ')} } from '@radix-ui/${packageName};

      ')} } from '@radix-ui/${packageName}
      ')} } from '@radix-ui/${packageName};
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  ';\n"})"
      return content.replace(radixPattern, '').replace(/^/, optimizedImports)}
        const packageName = match[2];
        if (!groupedImports.has(packageName)) {;
          groupedImports.set(packageName, new Set())}
        components.forEach(comp => groupedImports.get(packageName).add(comp))});
      let optimizedImports = '';      groupedImports.forEach((components, packageName) => {;
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

        optimizedImports += `import { ${Array.from(components).join(', ';)} } from '@radix-ui/${packageName}';

=======
        optimizedImports += `import { ${Array.from(components).join(', ';)} } from '@radix-ui/${packageName}';

        optimizedImports += `import { ${Array.from(components).join(', ';)} } from '@radix-ui/${packageName}
        optimizedImports += `import { ${Array.from(components).join(', ';)} } from '@radix-ui/${packageName}';
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  ';\n`});
      return content.replace(radixPattern, ').replace(/^/, optimizedImports)}
    return content}
  removeUnusedImports(content) {;
    // Simple unused import removal (basic implementation);
    const lines = content.split(',
      '\n');
    const usedIdentifiers = new Set();
    // Find all used identifiers;
    lines.forEach(line => {
      if (!line.trim().startsWith('
  'import')) {
        const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g);
        if (matches) {
          matches.forEach(match => usedIdentifiers.add(match));
    // Simple unused import removal (basic implementation);
    const lines = content.split(;)';\n')';    const usedIdentifiers = new Set()';    // Find all used identifiers;
    lines.forEach(line => {;);      if (!line.trim().startsWith(;)';import')) {';        const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g);
        if (matches) {;
          matches.forEach(match => usedIdentifiers.add(match))}
      }
    });
    // Remove unused imports (simplified)
    return lines
      .filter(line => {
        if (line.trim().startsWith('import')) {
          const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/);
          if (importMatch) {
            const importedItems = importMatch[1]
              .split(', ')
              .map(item => item.trim());
            const hasUsedItems = importedItems.some(item =>
              usedIdentifiers.has(item)
            );
            return hasUsedItems}
        }
        return true})
      .join('\n')}
          const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item));
          return hasUsedItems}
      }
      return true}).join(',
      '\n')  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) class ImportOptimizer {,"}),"}) constructor() {,"}),"}) this.projectRoot = process.cwd(),"}),"}) this.optimizedFiles = [],"}),"}) this.totalOptimizations = 0,"}),"}) }"}),"}) ,"}),"}) async optimizeImports() {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) for (const dir of directories) {,"}),"}) const dirPath = path.join(this.projectRoot,dir),"}),"}) if (fs.existsSync(dirPath)) {,"}),"}) await this.processDirectory(dirPath),"}),"}) }"}),"}) }"}),"}) ,"}),"}) console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`),"}),"}) console.log(`📊 Total optimizations: ${this.totalOptimizations}`),"}),"}) }"}),"}) ,"}),"}) async processDirectory(dirPath) {,"}),"}) const items = fs.readdirSync(dirPath),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const itemPath = path.join(dirPath,item),"}),"}) const stat = fs.statSync(itemPath),"}),"}) ,"}),"}) if (stat.isDirectory()) {,"}),"}) await this.processDirectory(itemPath),"}),"}) } else if (this.isJavaScriptFile(item)) {,"}),"}) await this.optimizeFile(itemPath),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) isJavaScriptFile(filePath) {,"}),"}) const ext = path.extname(filePath),"}),"}) return [,"}),"}) '.js',,"}),"}) '.jsx',,"}),"}) '.ts',,"}),"}) '.tsx'].includes(ext),"}),"}) }"}),"}) ,"}),"}) async optimizeFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,,"}),"}) 'utf8'),"}),"}) let optimizedContent = content,"}),"}) let optimizations = 0,"}),"}) ,"}),"}) optimizedContent = this.optimizeLucideImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeFramerMotionImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeRadixImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.removeUnusedImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) if (optimizations > 0) {,"}),"}) fs.writeFileSync(filePath,optimizedContent,,"}),"}) 'utf8'),"}),"}) this.optimizedFiles.push(filePath),"}),"}) this.totalOptimizations += optimizations,"}),"}) console.log(,"}),"}) `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`,"}),"}) ),"}),"}) }"}),"}) } catch (error) {,"}),"}) console.error(`❌ Error optimizing file ${filePath}:`,error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) optimizeLucideImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(lucidePattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const allIcons = new Set(),"}),"}) matches.forEach(match => {,"}),"}) const icons = match[1].split(,"}),"}) ',').map(icon => icon.trim()),"}),"}) icons.forEach(icon => allIcons.add(icon)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) optimizeFramerMotionImports(content) {,"}),"}) return content.replace(,"}),"}) /import\s*{\s*motion\s*}\s*from\s*['"]framer-motion[,"}),"}) '"];?\s*/g,,"}),"}) "import { motion } from 'framer-motion,"}),"}) ';\n","}),"}) ),"}),"}) }"}),"}) ,"}),"}) optimizeRadixImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(radixPattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const groupedImports = new Map(),"}),"}) matches.forEach(match => {,"}),"}) const components = match[1].split(,"}),"}) ',').map(comp => comp.trim()),"}),"}) const packageName = match[2],"}),"}) if (!groupedImports.has(packageName)) {,"}),"}) groupedImports.set(packageName,new Set()),"}),"}) }"}),"}) components.forEach(comp => groupedImports.get(packageName).add(comp)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) groupedImports.forEach((components,packageName) => {,"}),"}) optimizedImports += `import { ${Array.from(components).join(',,"}),"}) ')} } from '@radix-ui/${packageName}"}),"}) ';\n`,"}),"}) }),"}),"}) ,"}),"}) return content.replace(radixPattern,'').replace(/^/,optimizedImports),"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) removeUnusedImports(content) {,"}),"}) const lines = content.split(,"}),"}) '\n'),"}),"}) const usedIdentifiers = new Set(),"}),"}) ,"}),"}) lines.forEach(line => {,"}),"}) if (!line.trim().startsWith(,"}),"}) 'import')) {,"}),"}) const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g),"}),"}) if (matches) {,"}),"}) matches.forEach(match => usedIdentifiers.add(match)),"}),"}) }"}),"}) }"}),"}) }),"}),"}) ,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) }"}),"}) ,"}),"}) const optimizer = new ImportOptimizer(),"}),"}) optimizer.optimizeImports().catch(console.error),"}),"}) ,"}),"}) const __dirname = path.dirname(__filename); class ImportOptimizer {; constructor() {; this.projectRoot = process.cwd(); this.optimizedFiles = []; this.totalOptimizations = 0} async optimizeImports() {; console.log(';⚡ Optimizing imports to reduce bundle size...'); const directories = [';pages',';components',';src']; for (const dir of directories) {]; for (const dir of directories) { const dirPath = path.join(this.projectRoot,dir); if (fs.existsSync(dirPath)) {; await this.processDirectory(dirPath)} } console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`);` console.log(`📊 Total optimizations: ${this.totalOptimizations}`)} async processDirectory(dirPath) {; const items = fs.readdirSync(dirPath); for (const item of items) {; const itemPath = path.join(dirPath,item); const stat = fs.statSync(itemPath); if (stat.isDirectory()) {; await this.processDirectory(itemPath)} else if (this.isJavaScriptFile(item)) {; await this.optimizeFile(itemPath)} } } isJavaScriptFile(filePath) {; const ext = path.extname(filePath); return [';.js','';.jsx','';.ts','';.tsx'].includes(ext)}'; async: optimizeFile(filePath) { try { const content = fs.readFileSync(filePath 'utf8')';; let: optimizedContent = content; let: optimizations = 0; optimizedContent: = this.optimizeLucideImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeFramerMotionImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeRadixImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.removeUnusedImports(optimizedContent); if: (optimizedContent !== content) optimizations++; if: (optimizations > 0) { fs.writeFileSync(filePath,optimizedContent 'utf8')';; this.optimizedFiles.push(filePath); this.totalOptimizations: += optimizations; console.log( `⚡ Optimized: ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`)} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[';']lucide-react[''];?\s*/g: const matches = [...content.matchAll(lucidePattern)]';; if: (matches.length > 1) { const allIcons = new Set(); matches.forEach(match: => { const icons = match[1].split( ',').map(icon => icon.trim())';; icons.forEach(icon: => allIcons.add(icon))}) const optimizedImport = `import { ${Array.from(allIcons).join( ',')} } from';';lucide-react';\n`; return: content.replace(lucidePattern,'';';).replace(/^/,optimizedImport) }'; return: content} optimizeFramerMotionImports(content) { return: content.replace( /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';';'];?\s*/g,'';import { motion } from 'framer-motion';;;\n')}'; optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['']@radix-ui\/([^';';']+)['"];?\s*/g: const matches = [...content.matchAll(radixPattern)];"; if: (matches.length > 1) { const groupedImports = new Map(); matches.forEach(match: => { const components = match[1].split( ',').map(comp => comp.trim())';; const packageName = match[2]; if: (!groupedImports.has(packageName)) { groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}) let optimizedImports = '';'; groupedImports.forEach((components,packageName) => {'; optimizedImports: += `import { ${Array.from(components).join(','';)} } from: '@radix-ui/${packageName}'';;\n`}) return: content.replace(radixPattern,'').replace(/^/,optimizedImports)}'; return: content} removeUnusedImports(content) { const lines = content.split( '\n')';; const usedIdentifiers = new Set(); lines.forEach(line: => { if (!line.trim().startsWith( 'import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if: (matches) { '.tsx'].includes(ext)} async optimizeFile(filePath) {; try {; const content = fs.readFileSync(filePath,optimizedContent = this.optimizeLucideImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeFramerMotionImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeRadixImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.removeUnusedImports(optimizedContent); if (optimizedContent !== content) optimizations++; if (optimizations > 0) {; fs.writeFileSync(filePath,optimizedContent,';utf8'); this.optimizedFiles.push(filePath); this.totalOptimizations += optimizations; console.log( `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}` )} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?\s*/g; const matches = [...content.matchAll(lucidePattern)]; console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) {; const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[;` '']lucide-react[''];?\s*/g const matches = [...content.matchAll(lucidePattern)]; if (matches.length > 1) { const allIcons = new Set(); matches.forEach(match => { const icons = match[1].split(',',).map(icon => icon.trim()); icons.forEach(icon => allIcons.add(icon));) const optimizedImport = `import { ${Array.from(allIcons).join(` ',')} } from';lucide-react';\n`;` return content.replace(lucidePattern,'';).replace(/^/,optimizedImport) } 'lucide-react';\n`; return content.replace(lucidePattern,).replace(/^/,optimizedImport) } return content} optimizeFramerMotionImports(content) {; return content.replace(' /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';'];?\s*/g 'import { motion } from 'framer-motion;;\n')} optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[']@radix-ui\/([^']+)['"];?\s*/g const matches = [...content.matchAll(radixPattern)]; if (matches.length > 1) {; const groupedImports = new Map(); matches.forEach(match => {; const components = match[1].split(',').map(comp => comp.trim()); optimizedImports += `import { ${Array.from(components).join(',')} } from '@radix-ui/${packageName} ';\n`})` return content.replace(radixPattern,'').replace(/^/,optimizedImports)} const packageName = match[2]; if (!groupedImports.has(packageName)) {; groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}); let optimizedImports = ''; groupedImports.forEach((components,packageName) => {; optimizedImports += `import { ${Array.from(components).join(',';)} } from '@radix-ui/${packageName} ';\n`}); return content.replace(radixPattern,').replace(/^/,optimizedImports)} return content} removeUnusedImports(content) {; const lines = content.split(','\n'); const usedIdentifiers = new Set(); lines.forEach(line => { if (!line.trim().startsWith(' 'import')) { const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) { matches.forEach(match => usedIdentifiers.add(match)); const lines = content.split(;)';\n')';; const usedIdentifiers = new Set()';; lines.forEach(line => {;); if (!line.trim().startsWith(;)';import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) {; matches.forEach(match => usedIdentifiers.add(match))} } }); return lines .filter(line => { if (line.trim().startsWith('import')) { const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/); if (importMatch) { const importedItems = importMatch[1] .split(',') .map(item => item.trim()); const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item) ); return hasUsedItems} } return true}) .join('\n')} const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item)); return hasUsedItems} } return true}).join(','\n') } } const optimizer = new ImportOptimizer(); optimizer.optimizeImports().catch(console.error);

<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
=======
}
// Run the optimizer;
const optimizer = new ImportOptimizer();
optimizer.optimizeImports().catch(console.error);
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) class ImportOptimizer {,"}),"}) constructor() {,"}),"}) this.projectRoot = process.cwd(),"}),"}) this.optimizedFiles = [],"}),"}) this.totalOptimizations = 0,"}),"}) }"}),"}) ,"}),"}) async optimizeImports() {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) for (const dir of directories) {,"}),"}) const dirPath = path.join(this.projectRoot,dir),"}),"}) if (fs.existsSync(dirPath)) {,"}),"}) await this.processDirectory(dirPath),"}),"}) }"}),"}) }"}),"}) ,"}),"}) console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`),"}),"}) console.log(`📊 Total optimizations: ${this.totalOptimizations}`),"}),"}) }"}),"}) ,"}),"}) async processDirectory(dirPath) {,"}),"}) const items = fs.readdirSync(dirPath),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const itemPath = path.join(dirPath,item),"}),"}) const stat = fs.statSync(itemPath),"}),"}) ,"}),"}) if (stat.isDirectory()) {,"}),"}) await this.processDirectory(itemPath),"}),"}) } else if (this.isJavaScriptFile(item)) {,"}),"}) await this.optimizeFile(itemPath),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) isJavaScriptFile(filePath) {,"}),"}) const ext = path.extname(filePath),"}),"}) return [,"}),"}) '.js',,"}),"}) '.jsx',,"}),"}) '.ts',,"}),"}) '.tsx'].includes(ext),"}),"}) }"}),"}) ,"}),"}) async optimizeFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,,"}),"}) 'utf8'),"}),"}) let optimizedContent = content,"}),"}) let optimizations = 0,"}),"}) ,"}),"}) optimizedContent = this.optimizeLucideImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeFramerMotionImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeRadixImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.removeUnusedImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) if (optimizations > 0) {,"}),"}) fs.writeFileSync(filePath,optimizedContent,,"}),"}) 'utf8'),"}),"}) this.optimizedFiles.push(filePath),"}),"}) this.totalOptimizations += optimizations,"}),"}) console.log(,"}),"}) `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`,"}),"}) ),"}),"}) }"}),"}) } catch (error) {,"}),"}) console.error(`❌ Error optimizing file ${filePath}:`,error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) optimizeLucideImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(lucidePattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const allIcons = new Set(),"}),"}) matches.forEach(match => {,"}),"}) const icons = match[1].split(,"}),"}) ',').map(icon => icon.trim()),"}),"}) icons.forEach(icon => allIcons.add(icon)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) optimizeFramerMotionImports(content) {,"}),"}) return content.replace(,"}),"}) /import\s*{\s*motion\s*}\s*from\s*['"]framer-motion[,"}),"}) '"];?\s*/g,,"}),"}) "import { motion } from 'framer-motion,"}),"}) ';\n","}),"}) ),"}),"}) }"}),"}) ,"}),"}) optimizeRadixImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(radixPattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const groupedImports = new Map(),"}),"}) matches.forEach(match => {,"}),"}) const components = match[1].split(,"}),"}) ',').map(comp => comp.trim()),"}),"}) const packageName = match[2],"}),"}) if (!groupedImports.has(packageName)) {,"}),"}) groupedImports.set(packageName,new Set()),"}),"}) }"}),"}) components.forEach(comp => groupedImports.get(packageName).add(comp)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) groupedImports.forEach((components,packageName) => {,"}),"}) optimizedImports += `import { ${Array.from(components).join(',,"}),"}) ')} } from '@radix-ui/${packageName}"}),"}) ';\n`,"}),"}) }),"}),"}) ,"}),"}) return content.replace(radixPattern,'').replace(/^/,optimizedImports),"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) removeUnusedImports(content) {,"}),"}) const lines = content.split(,"}),"}) '\n'),"}),"}) const usedIdentifiers = new Set(),"}),"}) ,"}),"}) lines.forEach(line => {,"}),"}) if (!line.trim().startsWith(,"}),"}) 'import')) {,"}),"}) const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g),"}),"}) if (matches) {,"}),"}) matches.forEach(match => usedIdentifiers.add(match)),"}),"}) }"}),"}) }"}),"}) }),"}),"}) ,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) }"}),"}) ,"}),"}) const optimizer = new ImportOptimizer(),"}),"}) optimizer.optimizeImports().catch(console.error),"}),"}) ,"}),"}) const __dirname = path.dirname(__filename); class ImportOptimizer {; constructor() {; this.projectRoot = process.cwd(); this.optimizedFiles = []; this.totalOptimizations = 0} async optimizeImports() {; console.log(';⚡ Optimizing imports to reduce bundle size...'); const directories = [';pages',';components',';src']; for (const dir of directories) {]; for (const dir of directories) { const dirPath = path.join(this.projectRoot,dir); if (fs.existsSync(dirPath)) {; await this.processDirectory(dirPath)} } console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`);` console.log(`📊 Total optimizations: ${this.totalOptimizations}`)} async processDirectory(dirPath) {; const items = fs.readdirSync(dirPath); for (const item of items) {; const itemPath = path.join(dirPath,item); const stat = fs.statSync(itemPath); if (stat.isDirectory()) {; await this.processDirectory(itemPath)} else if (this.isJavaScriptFile(item)) {; await this.optimizeFile(itemPath)} } } isJavaScriptFile(filePath) {; const ext = path.extname(filePath); return [';.js','';.jsx','';.ts','';.tsx'].includes(ext)}'; async: optimizeFile(filePath) { try { const content = fs.readFileSync(filePath 'utf8')';; let: optimizedContent = content; let: optimizations = 0; optimizedContent: = this.optimizeLucideImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeFramerMotionImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeRadixImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.removeUnusedImports(optimizedContent); if: (optimizedContent !== content) optimizations++; if: (optimizations > 0) { fs.writeFileSync(filePath,optimizedContent 'utf8')';; this.optimizedFiles.push(filePath); this.totalOptimizations: += optimizations; console.log( `⚡ Optimized: ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`)} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[';']lucide-react[''];?\s*/g: const matches = [...content.matchAll(lucidePattern)]';; if: (matches.length > 1) { const allIcons = new Set(); matches.forEach(match: => { const icons = match[1].split( ',').map(icon => icon.trim())';; icons.forEach(icon: => allIcons.add(icon))}) const optimizedImport = `import { ${Array.from(allIcons).join( ',')} } from';';lucide-react';\n`; return: content.replace(lucidePattern,'';';).replace(/^/,optimizedImport) }'; return: content} optimizeFramerMotionImports(content) { return: content.replace( /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';';'];?\s*/g,'';import { motion } from 'framer-motion';;;\n')}'; optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['']@radix-ui\/([^';';']+)['"];?\s*/g: const matches = [...content.matchAll(radixPattern)];"; if: (matches.length > 1) { const groupedImports = new Map(); matches.forEach(match: => { const components = match[1].split( ',').map(comp => comp.trim())';; const packageName = match[2]; if: (!groupedImports.has(packageName)) { groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}) let optimizedImports = '';'; groupedImports.forEach((components,packageName) => {'; optimizedImports: += `import { ${Array.from(components).join(','';)} } from: '@radix-ui/${packageName}'';;\n`}) return: content.replace(radixPattern,'').replace(/^/,optimizedImports)}'; return: content} removeUnusedImports(content) { const lines = content.split( '\n')';; const usedIdentifiers = new Set(); lines.forEach(line: => { if (!line.trim().startsWith( 'import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if: (matches) { '.tsx'].includes(ext)} async optimizeFile(filePath) {; try {; const content = fs.readFileSync(filePath,optimizedContent = this.optimizeLucideImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeFramerMotionImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeRadixImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.removeUnusedImports(optimizedContent); if (optimizedContent !== content) optimizations++; if (optimizations > 0) {; fs.writeFileSync(filePath,optimizedContent,';utf8'); this.optimizedFiles.push(filePath); this.totalOptimizations += optimizations; console.log( `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}` )} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?\s*/g; const matches = [...content.matchAll(lucidePattern)]; console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) {; const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[;` '']lucide-react[''];?\s*/g const matches = [...content.matchAll(lucidePattern)]; if (matches.length > 1) { const allIcons = new Set(); matches.forEach(match => { const icons = match[1].split(',',).map(icon => icon.trim()); icons.forEach(icon => allIcons.add(icon));) const optimizedImport = `import { ${Array.from(allIcons).join(` ',')} } from';lucide-react';\n`;` return content.replace(lucidePattern,'';).replace(/^/,optimizedImport) } 'lucide-react';\n`; return content.replace(lucidePattern,).replace(/^/,optimizedImport) } return content} optimizeFramerMotionImports(content) {; return content.replace(' /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';'];?\s*/g 'import { motion } from 'framer-motion;;\n')} optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[']@radix-ui\/([^']+)['"];?\s*/g const matches = [...content.matchAll(radixPattern)]; if (matches.length > 1) {; const groupedImports = new Map(); matches.forEach(match => {; const components = match[1].split(',').map(comp => comp.trim()); optimizedImports += `import { ${Array.from(components).join(',')} } from '@radix-ui/${packageName} ';\n`})` return content.replace(radixPattern,'').replace(/^/,optimizedImports)} const packageName = match[2]; if (!groupedImports.has(packageName)) {; groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}); let optimizedImports = ''; groupedImports.forEach((components,packageName) => {; optimizedImports += `import { ${Array.from(components).join(',';)} } from '@radix-ui/${packageName} ';\n`}); return content.replace(radixPattern,').replace(/^/,optimizedImports)} return content} removeUnusedImports(content) {; const lines = content.split(','\n'); const usedIdentifiers = new Set(); lines.forEach(line => { if (!line.trim().startsWith(' 'import')) { const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) { matches.forEach(match => usedIdentifiers.add(match)); const lines = content.split(;)';\n')';; const usedIdentifiers = new Set()';; lines.forEach(line => {;); if (!line.trim().startsWith(;)';import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) {; matches.forEach(match => usedIdentifiers.add(match))} } }); return lines .filter(line => { if (line.trim().startsWith('import')) { const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/); if (importMatch) { const importedItems = importMatch[1] .split(',') .map(item => item.trim()); const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item) ); return hasUsedItems} } return true}) .join('\n')} const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item)); return hasUsedItems} } return true}).join(','\n') } } const optimizer = new ImportOptimizer(); optimizer.optimizeImports().catch(console.error);
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) class ImportOptimizer {,"}),"}) constructor() {,"}),"}) this.projectRoot = process.cwd(),"}),"}) this.optimizedFiles = [],"}),"}) this.totalOptimizations = 0,"}),"}) }"}),"}) ,"}),"}) async optimizeImports() {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) for (const dir of directories) {,"}),"}) const dirPath = path.join(this.projectRoot,dir),"}),"}) if (fs.existsSync(dirPath)) {,"}),"}) await this.processDirectory(dirPath),"}),"}) }"}),"}) }"}),"}) ,"}),"}) console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`),"}),"}) console.log(`📊 Total optimizations: ${this.totalOptimizations}`),"}),"}) }"}),"}) ,"}),"}) async processDirectory(dirPath) {,"}),"}) const items = fs.readdirSync(dirPath),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const itemPath = path.join(dirPath,item),"}),"}) const stat = fs.statSync(itemPath),"}),"}) ,"}),"}) if (stat.isDirectory()) {,"}),"}) await this.processDirectory(itemPath),"}),"}) } else if (this.isJavaScriptFile(item)) {,"}),"}) await this.optimizeFile(itemPath),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) isJavaScriptFile(filePath) {,"}),"}) const ext = path.extname(filePath),"}),"}) return [,"}),"}) '.js',,"}),"}) '.jsx',,"}),"}) '.ts',,"}),"}) '.tsx'].includes(ext),"}),"}) }"}),"}) ,"}),"}) async optimizeFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,,"}),"}) 'utf8'),"}),"}) let optimizedContent = content,"}),"}) let optimizations = 0,"}),"}) ,"}),"}) optimizedContent = this.optimizeLucideImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeFramerMotionImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeRadixImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.removeUnusedImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) if (optimizations > 0) {,"}),"}) fs.writeFileSync(filePath,optimizedContent,,"}),"}) 'utf8'),"}),"}) this.optimizedFiles.push(filePath),"}),"}) this.totalOptimizations += optimizations,"}),"}) console.log(,"}),"}) `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`,"}),"}) ),"}),"}) }"}),"}) } catch (error) {,"}),"}) console.error(`❌ Error optimizing file ${filePath}:`,error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) optimizeLucideImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(lucidePattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const allIcons = new Set(),"}),"}) matches.forEach(match => {,"}),"}) const icons = match[1].split(,"}),"}) ',').map(icon => icon.trim()),"}),"}) icons.forEach(icon => allIcons.add(icon)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) optimizeFramerMotionImports(content) {,"}),"}) return content.replace(,"}),"}) /import\s*{\s*motion\s*}\s*from\s*['"]framer-motion[,"}),"}) '"];?\s*/g,,"}),"}) "import { motion } from 'framer-motion,"}),"}) ';\n","}),"}) ),"}),"}) }"}),"}) ,"}),"}) optimizeRadixImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(radixPattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const groupedImports = new Map(),"}),"}) matches.forEach(match => {,"}),"}) const components = match[1].split(,"}),"}) ',').map(comp => comp.trim()),"}),"}) const packageName = match[2],"}),"}) if (!groupedImports.has(packageName)) {,"}),"}) groupedImports.set(packageName,new Set()),"}),"}) }"}),"}) components.forEach(comp => groupedImports.get(packageName).add(comp)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) groupedImports.forEach((components,packageName) => {,"}),"}) optimizedImports += `import { ${Array.from(components).join(',,"}),"}) ')} } from '@radix-ui/${packageName}"}),"}) ';\n`,"}),"}) }),"}),"}) ,"}),"}) return content.replace(radixPattern,'').replace(/^/,optimizedImports),"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) removeUnusedImports(content) {,"}),"}) const lines = content.split(,"}),"}) '\n'),"}),"}) const usedIdentifiers = new Set(),"}),"}) ,"}),"}) lines.forEach(line => {,"}),"}) if (!line.trim().startsWith(,"}),"}) 'import')) {,"}),"}) const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g),"}),"}) if (matches) {,"}),"}) matches.forEach(match => usedIdentifiers.add(match)),"}),"}) }"}),"}) }"}),"}) }),"}),"}) ,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) }"}),"}) ,"}),"}) const optimizer = new ImportOptimizer(),"}),"}) optimizer.optimizeImports().catch(console.error),"}),"}) ,"}),"}) const __dirname = path.dirname(__filename); class ImportOptimizer {; constructor() {; this.projectRoot = process.cwd(); this.optimizedFiles = []; this.totalOptimizations = 0} async optimizeImports() {; console.log(';⚡ Optimizing imports to reduce bundle size...'); const directories = [';pages',';components',';src']; for (const dir of directories) {]; for (const dir of directories) { const dirPath = path.join(this.projectRoot,dir); if (fs.existsSync(dirPath)) {; await this.processDirectory(dirPath)} } console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`);` console.log(`📊 Total optimizations: ${this.totalOptimizations}`)} async processDirectory(dirPath) {; const items = fs.readdirSync(dirPath); for (const item of items) {; const itemPath = path.join(dirPath,item); const stat = fs.statSync(itemPath); if (stat.isDirectory()) {; await this.processDirectory(itemPath)} else if (this.isJavaScriptFile(item)) {; await this.optimizeFile(itemPath)} } } isJavaScriptFile(filePath) {; const ext = path.extname(filePath); return [';.js','';.jsx','';.ts','';.tsx'].includes(ext)}'; async: optimizeFile(filePath) { try { const content = fs.readFileSync(filePath 'utf8')';; let: optimizedContent = content; let: optimizations = 0; optimizedContent: = this.optimizeLucideImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeFramerMotionImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeRadixImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.removeUnusedImports(optimizedContent); if: (optimizedContent !== content) optimizations++; if: (optimizations > 0) { fs.writeFileSync(filePath,optimizedContent 'utf8')';; this.optimizedFiles.push(filePath); this.totalOptimizations: += optimizations; console.log( `⚡ Optimized: ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`)} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[';']lucide-react[''];?\s*/g: const matches = [...content.matchAll(lucidePattern)]';; if: (matches.length > 1) { const allIcons = new Set(); matches.forEach(match: => { const icons = match[1].split( ',').map(icon => icon.trim())';; icons.forEach(icon: => allIcons.add(icon))}) const optimizedImport = `import { ${Array.from(allIcons).join( ',')} } from';';lucide-react';\n`; return: content.replace(lucidePattern,'';';).replace(/^/,optimizedImport) }'; return: content} optimizeFramerMotionImports(content) { return: content.replace( /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';';'];?\s*/g,'';import { motion } from 'framer-motion';;;\n')}'; optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['']@radix-ui\/([^';';']+)['"];?\s*/g: const matches = [...content.matchAll(radixPattern)];"; if: (matches.length > 1) { const groupedImports = new Map(); matches.forEach(match: => { const components = match[1].split( ',').map(comp => comp.trim())';; const packageName = match[2]; if: (!groupedImports.has(packageName)) { groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}) let optimizedImports = '';'; groupedImports.forEach((components,packageName) => {'; optimizedImports: += `import { ${Array.from(components).join(','';)} } from: '@radix-ui/${packageName}'';;\n`}) return: content.replace(radixPattern,'').replace(/^/,optimizedImports)}'; return: content} removeUnusedImports(content) { const lines = content.split( '\n')';; const usedIdentifiers = new Set(); lines.forEach(line: => { if (!line.trim().startsWith( 'import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if: (matches) { '.tsx'].includes(ext)} async optimizeFile(filePath) {; try {; const content = fs.readFileSync(filePath,optimizedContent = this.optimizeLucideImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeFramerMotionImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeRadixImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.removeUnusedImports(optimizedContent); if (optimizedContent !== content) optimizations++; if (optimizations > 0) {; fs.writeFileSync(filePath,optimizedContent,';utf8'); this.optimizedFiles.push(filePath); this.totalOptimizations += optimizations; console.log( `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}` )} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?\s*/g; const matches = [...content.matchAll(lucidePattern)]; console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) {; const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[;` '']lucide-react[''];?\s*/g const matches = [...content.matchAll(lucidePattern)]; if (matches.length > 1) { const allIcons = new Set(); matches.forEach(match => { const icons = match[1].split(',',).map(icon => icon.trim()); icons.forEach(icon => allIcons.add(icon));) const optimizedImport = `import { ${Array.from(allIcons).join(` ',')} } from';lucide-react';\n`;` return content.replace(lucidePattern,'';).replace(/^/,optimizedImport) } 'lucide-react';\n`; return content.replace(lucidePattern,).replace(/^/,optimizedImport) } return content} optimizeFramerMotionImports(content) {; return content.replace(' /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';'];?\s*/g 'import { motion } from 'framer-motion;;\n')} optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[']@radix-ui\/([^']+)['"];?\s*/g const matches = [...content.matchAll(radixPattern)]; if (matches.length > 1) {; const groupedImports = new Map(); matches.forEach(match => {; const components = match[1].split(',').map(comp => comp.trim()); optimizedImports += `import { ${Array.from(components).join(',')} } from '@radix-ui/${packageName} ';\n`})` return content.replace(radixPattern,'').replace(/^/,optimizedImports)} const packageName = match[2]; if (!groupedImports.has(packageName)) {; groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}); let optimizedImports = ''; groupedImports.forEach((components,packageName) => {; optimizedImports += `import { ${Array.from(components).join(',';)} } from '@radix-ui/${packageName} ';\n`}); return content.replace(radixPattern,').replace(/^/,optimizedImports)} return content} removeUnusedImports(content) {; const lines = content.split(','\n'); const usedIdentifiers = new Set(); lines.forEach(line => { if (!line.trim().startsWith(' 'import')) { const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) { matches.forEach(match => usedIdentifiers.add(match)); const lines = content.split(;)';\n')';; const usedIdentifiers = new Set()';; lines.forEach(line => {;); if (!line.trim().startsWith(;)';import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) {; matches.forEach(match => usedIdentifiers.add(match))} } }); return lines .filter(line => { if (line.trim().startsWith('import')) { const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/); if (importMatch) { const importedItems = importMatch[1] .split(',') .map(item => item.trim()); const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item) ); return hasUsedItems} } return true}) .join('\n')} const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item)); return hasUsedItems} } return true}).join(','\n') } } const optimizer = new ImportOptimizer(); optimizer.optimizeImports().catch(console.error);
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
// Run the optimizer;
const optimizer = new ImportOptimizer();
optimizer.optimizeImports().catch(console.error);
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) class ImportOptimizer {,"}),"}) constructor() {,"}),"}) this.projectRoot = process.cwd(),"}),"}) this.optimizedFiles = [],"}),"}) this.totalOptimizations = 0,"}),"}) }"}),"}) ,"}),"}) async optimizeImports() {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ),"}) const dirPath = path.join(this.projectRoot,dir),"}),"}) if (fs.existsSync(dirPath)) {,"}),"}) await this.processDirectory(dirPath),"}),"}) }"}),"}) }"}),"}) ,"}),"}) console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`),"}),"}) console.log(`📊 Total optimizations: ${this.totalOptimizations}`),"}),"}) }"}),"}) ,"}),"}) async processDirectory(dirPath) {,"}),"}) const items = fs.readdirSync(dirPath),"}),"}) ,"}),"}) ),"}) const itemPath = path.join(dirPath,item),"}),"}) const stat = fs.statSync(itemPath),"}),"}) ,"}),"}) if (stat.isDirectory()) {,"}),"}) await this.processDirectory(itemPath),"}),"}) } else if (this.isJavaScriptFile(item)) {,"}),"}) await this.optimizeFile(itemPath),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) isJavaScriptFile(filePath) {,"}),"}) const ext = path.extname(filePath),"}),"}) return [,"}),"}) '.js',,"}),"}) '.jsx',,"}),"}) '.ts',,"}),"}) '.tsx'].includes(ext),"}),"}) }"}),"}) ,"}),"}) async optimizeFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,,"}),"}) 'utf8'),"}),"}) let optimizedContent = content,"}),"}) let optimizations = 0,"}),"}) ,"}),"}) optimizedContent = this.optimizeLucideImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeFramerMotionImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeRadixImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.removeUnusedImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) if (optimizations > 0) {,"}),"}) fs.writeFileSync(filePath,optimizedContent,,"}),"}) 'utf8'),"}),"}) this.optimizedFiles.push(filePath),"}),"}) this.totalOptimizations += optimizations,"}),"}) console.log(,"}),"}) `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`,"}),"}) ),"}),"}) }"}),"}) } catch (error) {,"}),"}) console.error(`❌ Error optimizing file ${filePath}:`,error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) optimizeLucideImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(lucidePattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const allIcons = new Set(),"}),"}) matches.forEach(match => {,"}),"}) const icons = match[1].split(,"}),"}) ',').map(icon => icon.trim()),"}),"}) icons.forEach(icon => allIcons.add(icon)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) optimizeFramerMotionImports(content) {,"}),"}) return content.replace(,"}),"}) /import\s*{\s*motion\s*}\s*from\s*['"]framer-motion[,"}),"}) '"];?\s*/g,,"}),"}) "import { motion } from 'framer-motion,"}),"}) ';\n","}),"}) ),"}),"}) }"}),"}) ,"}),"}) optimizeRadixImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(radixPattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const groupedImports = new Map(),"}),"}) matches.forEach(match => {,"}),"}) const components = match[1].split(,"}),"}) ',').map(comp => comp.trim()),"}),"}) const packageName = match[2],"}),"}) if (!groupedImports.has(packageName)) {,"}),"}) groupedImports.set(packageName,new Set()),"}),"}) }"}),"}) components.forEach(comp => groupedImports.get(packageName).add(comp)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) groupedImports.forEach((components,packageName) => {,"}),"}) optimizedImports += `import { ${Array.from(components).join(',,"}),"}) ')} } from '@radix-ui/${packageName}"}),"}) ';\n`,"}),"}) }),"}),"}) ,"}),"}) return content.replace(radixPattern,'').replace(/^/,optimizedImports),"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) removeUnusedImports(content) {,"}),"}) const lines = content.split(,"}),"}) '\n'),"}),"}) const usedIdentifiers = new Set(),"}),"}) ,"}),"}) lines.forEach(line => {,"}),"}) if (!line.trim().startsWith(,"}),"}) 'import')) {,"}),"}) const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g),"}),"}) if (matches) {,"}),"}) matches.forEach(match => usedIdentifiers.add(match)),"}),"}) }"}),"}) }"}),"}) }),"}),"}) ,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) }"}),"}) ,"}),"}) const optimizer = new ImportOptimizer(),"}),"}) optimizer.optimizeImports().catch(console.error),"}),"}) ,"}),"}) const __dirname = path.dirname(__filename); class ImportOptimizer {; constructor() {; this.projectRoot = process.cwd(); this.optimizedFiles = []; this.totalOptimizations = 0} async optimizeImports() {; console.log(';⚡ Optimizing imports to reduce bundle size...'); const directories = [';pages',';components',';src'];  } console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`);` console.log(`📊 Total optimizations: ${this.totalOptimizations}`)} async processDirectory(dirPath) {; const items = fs.readdirSync(dirPath);  else if (this.isJavaScriptFile(item)) {; await this.optimizeFile(itemPath)} } } isJavaScriptFile(filePath) {; const ext = path.extname(filePath); return [';.js','';.jsx','';.ts','';.tsx'].includes(ext)}'; async: optimizeFile(filePath) { try { const content = fs.readFileSync(filePath 'utf8')';; let: optimizedContent = content; let: optimizations = 0; optimizedContent: = this.optimizeLucideImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeFramerMotionImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeRadixImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.removeUnusedImports(optimizedContent); if: (optimizedContent !== content) optimizations++; if: (optimizations > 0) { fs.writeFileSync(filePath,optimizedContent 'utf8')';; this.optimizedFiles.push(filePath); this.totalOptimizations: += optimizations; console.log( `⚡ Optimized: ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`)} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[';']lucide-react[''];?\s*/g: const matches = [...content.matchAll(lucidePattern)]';; if: (matches.length > 1) { const allIcons = new Set(); matches.forEach(match: => { const icons = match[1].split( ',').map(icon => icon.trim())';; icons.forEach(icon: => allIcons.add(icon))}) const optimizedImport = `import { ${Array.from(allIcons).join( ',')} } from';';lucide-react';\n`; return: content.replace(lucidePattern,'';';).replace(/^/,optimizedImport) }'; return: content} optimizeFramerMotionImports(content) { return: content.replace( /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';';'];?\s*/g,'';import { motion } from 'framer-motion';;;\n')}'; optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['']@radix-ui\/([^';';']+)['"];?\s*/g: const matches = [...content.matchAll(radixPattern)];"; if: (matches.length > 1) { const groupedImports = new Map(); matches.forEach(match: => { const components = match[1].split( ',').map(comp => comp.trim())';; const packageName = match[2]; if: (!groupedImports.has(packageName)) { groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}) let optimizedImports = '';'; groupedImports.forEach((components,packageName) => {'; optimizedImports: += `import { ${Array.from(components).join(','';)} } from: '@radix-ui/${packageName}'';;\n`}) return: content.replace(radixPattern,'').replace(/^/,optimizedImports)}'; return: content} removeUnusedImports(content) { const lines = content.split( '\n')';; const usedIdentifiers = new Set(); lines.forEach(line: => { if (!line.trim().startsWith( 'import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if: (matches) { '.tsx'].includes(ext)} async optimizeFile(filePath) {; try {; const content = fs.readFileSync(filePath,optimizedContent = this.optimizeLucideImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeFramerMotionImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeRadixImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.removeUnusedImports(optimizedContent); if (optimizedContent !== content) optimizations++; if (optimizations > 0) {; fs.writeFileSync(filePath,optimizedContent,';utf8'); this.optimizedFiles.push(filePath); this.totalOptimizations += optimizations; console.log( `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}` )} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?\s*/g; const matches = [...content.matchAll(lucidePattern)]; console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) {; const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[;` '']lucide-react[''];?\s*/g const matches = [...content.matchAll(lucidePattern)]; if (matches.length > 1) { const allIcons = new Set(); matches.forEach(match => { const icons = match[1].split(',',).map(icon => icon.trim()); icons.forEach(icon => allIcons.add(icon));) const optimizedImport = `import { ${Array.from(allIcons).join(` ',')} } from';lucide-react';\n`;` return content.replace(lucidePattern,'';).replace(/^/,optimizedImport) } 'lucide-react';\n`; return content.replace(lucidePattern,).replace(/^/,optimizedImport) } return content} optimizeFramerMotionImports(content) {; return content.replace(' /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';'];?\s*/g 'import { motion } from 'framer-motion;;\n')} optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[']@radix-ui\/([^']+)['"];?\s*/g const matches = [...content.matchAll(radixPattern)]; if (matches.length > 1) {; const groupedImports = new Map(); matches.forEach(match => {; const components = match[1].split(',').map(comp => comp.trim()); optimizedImports += `import { ${Array.from(components).join(',')} } from '@radix-ui/${packageName} ';\n`})` return content.replace(radixPattern,'').replace(/^/,optimizedImports)} const packageName = match[2]; if (!groupedImports.has(packageName)) {; groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}); let optimizedImports = ''; groupedImports.forEach((components,packageName) => {; optimizedImports += `import { ${Array.from(components).join(',';)} } from '@radix-ui/${packageName} ';\n`}); return content.replace(radixPattern,').replace(/^/,optimizedImports)} return content} removeUnusedImports(content) {; const lines = content.split(','\n'); const usedIdentifiers = new Set(); lines.forEach(line => { if (!line.trim().startsWith(' 'import')) { const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) { matches.forEach(match => usedIdentifiers.add(match)); const lines = content.split(;)';\n')';; const usedIdentifiers = new Set()';; lines.forEach(line => {;); if (!line.trim().startsWith(;)';import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) {; matches.forEach(match => usedIdentifiers.add(match))} } }); return lines .filter(line => { if (line.trim().startsWith('import')) { const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/); if (importMatch) { const importedItems = importMatch[1] .split(',') .map(item => item.trim()); const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item) ); return hasUsedItems} } return true}) .join('\n')} const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item)); return hasUsedItems} } return true}).join(','\n') } } const optimizer = new ImportOptimizer(); optimizer.optimizeImports().catch(console.error);
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) class ImportOptimizer {,"}),"}) constructor() {,"}),"}) this.projectRoot = process.cwd(),"}),"}) this.optimizedFiles = [],"}),"}) this.totalOptimizations = 0,"}),"}) }"}),"}) ,"}),"}) async optimizeImports() {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ),"}) const dirPath = path.join(this.projectRoot,dir),"}),"}) if (fs.existsSync(dirPath)) {,"}),"}) await this.processDirectory(dirPath),"}),"}) }"}),"}) }"}),"}) ,"}),"}) console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`),"}),"}) console.log(`📊 Total optimizations: ${this.totalOptimizations}`),"}),"}) }"}),"}) ,"}),"}) async processDirectory(dirPath) {,"}),"}) const items = fs.readdirSync(dirPath),"}),"}) ,"}),"}) ),"}) const itemPath = path.join(dirPath,item),"}),"}) const stat = fs.statSync(itemPath),"}),"}) ,"}),"}) if (stat.isDirectory()) {,"}),"}) await this.processDirectory(itemPath),"}),"}) } else if (this.isJavaScriptFile(item)) {,"}),"}) await this.optimizeFile(itemPath),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) isJavaScriptFile(filePath) {,"}),"}) const ext = path.extname(filePath),"}),"}) return [,"}),"}) '.js',,"}),"}) '.jsx',,"}),"}) '.ts',,"}),"}) '.tsx'].includes(ext),"}),"}) }"}),"}) ,"}),"}) async optimizeFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,,"}),"}) 'utf8'),"}),"}) let optimizedContent = content,"}),"}) let optimizations = 0,"}),"}) ,"}),"}) optimizedContent = this.optimizeLucideImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeFramerMotionImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeRadixImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.removeUnusedImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) if (optimizations > 0) {,"}),"}) fs.writeFileSync(filePath,optimizedContent,,"}),"}) 'utf8'),"}),"}) this.optimizedFiles.push(filePath),"}),"}) this.totalOptimizations += optimizations,"}),"}) console.log(,"}),"}) `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`,"}),"}) ),"}),"}) }"}),"}) } catch (error) {,"}),"}) console.error(`❌ Error optimizing file ${filePath}:`,error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) optimizeLucideImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(lucidePattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const allIcons = new Set(),"}),"}) matches.forEach(match => {,"}),"}) const icons = match[1].split(,"}),"}) ',').map(icon => icon.trim()),"}),"}) icons.forEach(icon => allIcons.add(icon)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) optimizeFramerMotionImports(content) {,"}),"}) return content.replace(,"}),"}) /import\s*{\s*motion\s*}\s*from\s*['"]framer-motion[,"}),"}) '"];?\s*/g,,"}),"}) "import { motion } from 'framer-motion,"}),"}) ';\n","}),"}) ),"}),"}) }"}),"}) ,"}),"}) optimizeRadixImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(radixPattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const groupedImports = new Map(),"}),"}) matches.forEach(match => {,"}),"}) const components = match[1].split(,"}),"}) ',').map(comp => comp.trim()),"}),"}) const packageName = match[2],"}),"}) if (!groupedImports.has(packageName)) {,"}),"}) groupedImports.set(packageName,new Set()),"}),"}) }"}),"}) components.forEach(comp => groupedImports.get(packageName).add(comp)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) groupedImports.forEach((components,packageName) => {,"}),"}) optimizedImports += `import { ${Array.from(components).join(',,"}),"}) ')} } from '@radix-ui/${packageName}"}),"}) ';\n`,"}),"}) }),"}),"}) ,"}),"}) return content.replace(radixPattern,'').replace(/^/,optimizedImports),"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) removeUnusedImports(content) {,"}),"}) const lines = content.split(,"}),"}) '\n'),"}),"}) const usedIdentifiers = new Set(),"}),"}) ,"}),"}) lines.forEach(line => {,"}),"}) if (!line.trim().startsWith(,"}),"}) 'import')) {,"}),"}) const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g),"}),"}) if (matches) {,"}),"}) matches.forEach(match => usedIdentifiers.add(match)),"}),"}) }"}),"}) }"}),"}) }),"}),"}) ,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) }"}),"}) ,"}),"}) const optimizer = new ImportOptimizer(),"}),"}) optimizer.optimizeImports().catch(console.error),"}),"}) ,"}),"}) const __dirname = path.dirname(__filename); class ImportOptimizer {; constructor() {; this.projectRoot = process.cwd(); this.optimizedFiles = []; this.totalOptimizations = 0} async optimizeImports() {; console.log(';⚡ Optimizing imports to reduce bundle size...'); const directories = [';pages',';components',';src'];  } console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`);` console.log(`📊 Total optimizations: ${this.totalOptimizations}`)} async processDirectory(dirPath) {; const items = fs.readdirSync(dirPath);  else if (this.isJavaScriptFile(item)) {; await this.optimizeFile(itemPath)} } } isJavaScriptFile(filePath) {; const ext = path.extname(filePath); return [';.js','';.jsx','';.ts','';.tsx'].includes(ext)}'; async: optimizeFile(filePath) { try { const content = fs.readFileSync(filePath 'utf8')';; let: optimizedContent = content; let: optimizations = 0; optimizedContent: = this.optimizeLucideImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeFramerMotionImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeRadixImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.removeUnusedImports(optimizedContent); if: (optimizedContent !== content) optimizations++; if: (optimizations > 0) { fs.writeFileSync(filePath,optimizedContent 'utf8')';; this.optimizedFiles.push(filePath); this.totalOptimizations: += optimizations; console.log( `⚡ Optimized: ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`)} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[';']lucide-react[''];?\s*/g: const matches = [...content.matchAll(lucidePattern)]';; if: (matches.length > 1) { const allIcons = new Set(); matches.forEach(match: => { const icons = match[1].split( ',').map(icon => icon.trim())';; icons.forEach(icon: => allIcons.add(icon))}) const optimizedImport = `import { ${Array.from(allIcons).join( ',')} } from';';lucide-react';\n`; return: content.replace(lucidePattern,'';';).replace(/^/,optimizedImport) }'; return: content} optimizeFramerMotionImports(content) { return: content.replace( /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';';'];?\s*/g,'';import { motion } from 'framer-motion';;;\n')}'; optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['']@radix-ui\/([^';';']+)['"];?\s*/g: const matches = [...content.matchAll(radixPattern)];"; if: (matches.length > 1) { const groupedImports = new Map(); matches.forEach(match: => { const components = match[1].split( ',').map(comp => comp.trim())';; const packageName = match[2]; if: (!groupedImports.has(packageName)) { groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}) let optimizedImports = '';'; groupedImports.forEach((components,packageName) => {'; optimizedImports: += `import { ${Array.from(components).join(','';)} } from: '@radix-ui/${packageName}'';;\n`}) return: content.replace(radixPattern,'').replace(/^/,optimizedImports)}'; return: content} removeUnusedImports(content) { const lines = content.split( '\n')';; const usedIdentifiers = new Set(); lines.forEach(line: => { if (!line.trim().startsWith( 'import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if: (matches) { '.tsx'].includes(ext)} async optimizeFile(filePath) {; try {; const content = fs.readFileSync(filePath,optimizedContent = this.optimizeLucideImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeFramerMotionImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeRadixImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.removeUnusedImports(optimizedContent); if (optimizedContent !== content) optimizations++; if (optimizations > 0) {; fs.writeFileSync(filePath,optimizedContent,';utf8'); this.optimizedFiles.push(filePath); this.totalOptimizations += optimizations; console.log( `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}` )} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?\s*/g; const matches = [...content.matchAll(lucidePattern)]; console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) {; const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[;` '']lucide-react[''];?\s*/g const matches = [...content.matchAll(lucidePattern)]; if (matches.length > 1) { const allIcons = new Set(); matches.forEach(match => { const icons = match[1].split(',',).map(icon => icon.trim()); icons.forEach(icon => allIcons.add(icon));) const optimizedImport = `import { ${Array.from(allIcons).join(` ',')} } from';lucide-react';\n`;` return content.replace(lucidePattern,'';).replace(/^/,optimizedImport) } 'lucide-react';\n`; return content.replace(lucidePattern,).replace(/^/,optimizedImport) } return content} optimizeFramerMotionImports(content) {; return content.replace(' /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';'];?\s*/g 'import { motion } from 'framer-motion;;\n')} optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[']@radix-ui\/([^']+)['"];?\s*/g const matches = [...content.matchAll(radixPattern)]; if (matches.length > 1) {; const groupedImports = new Map(); matches.forEach(match => {; const components = match[1].split(',').map(comp => comp.trim()); optimizedImports += `import { ${Array.from(components).join(',')} } from '@radix-ui/${packageName} ';\n`})` return content.replace(radixPattern,'').replace(/^/,optimizedImports)} const packageName = match[2]; if (!groupedImports.has(packageName)) {; groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}); let optimizedImports = ''; groupedImports.forEach((components,packageName) => {; optimizedImports += `import { ${Array.from(components).join(',';)} } from '@radix-ui/${packageName} ';\n`}); return content.replace(radixPattern,').replace(/^/,optimizedImports)} return content} removeUnusedImports(content) {; const lines = content.split(','\n'); const usedIdentifiers = new Set(); lines.forEach(line => { if (!line.trim().startsWith(' 'import')) { const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) { matches.forEach(match => usedIdentifiers.add(match)); const lines = content.split(;)';\n')';; const usedIdentifiers = new Set()';; lines.forEach(line => {;); if (!line.trim().startsWith(;)';import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) {; matches.forEach(match => usedIdentifiers.add(match))} } }); return lines .filter(line => { if (line.trim().startsWith('import')) { const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/); if (importMatch) { const importedItems = importMatch[1] .split(',') .map(item => item.trim()); const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item) ); return hasUsedItems} } return true}) .join('\n')} const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item)); return hasUsedItems} } return true}).join(','\n') } } const optimizer = new ImportOptimizer(); optimizer.optimizeImports().catch(console.error);
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
