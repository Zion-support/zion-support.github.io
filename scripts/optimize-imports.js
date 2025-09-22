<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) class ImportOptimizer {,"}),"}) constructor() {,"}),"}) this.projectRoot = process.cwd(),"}),"}) this.optimizedFiles = [],"}),"}) this.totalOptimizations = 0,"}),"}) }"}),"}) ,"}),"}) async optimizeImports() {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) for (const dir of directories) {,"}),"}) const dirPath = path.join(this.projectRoot,dir),"}),"}) if (fs.existsSync(dirPath)) {,"}),"}) await this.processDirectory(dirPath),"}),"}) }"}),"}) }"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) }"}),"}) ,"}),"}) async processDirectory(dirPath) {,"}),"}) const items = fs.readdirSync(dirPath),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const itemPath = path.join(dirPath,item),"}),"}) const stat = fs.statSync(itemPath),"}),"}) ,"}),"}) if (stat.isDirectory()) {,"}),"}) await this.processDirectory(itemPath),"}),"}) } else if (this.isJavaScriptFile(item)) {,"}),"}) await this.optimizeFile(itemPath),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) isJavaScriptFile(filePath) {,"}),"}) const ext = path.extname(filePath),"}),"}) return [,"}),"}) '.js',,"}),"}) '.jsx',,"}),"}) '.ts',,"}),"}) '.tsx'].includes(ext),"}),"}) }"}),"}) ,"}),"}) async optimizeFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,,"}),"}) 'utf8'),"}),"}) let optimizedContent = content,"}),"}) let optimizations = 0,"}),"}) ,"}),"}) optimizedContent = this.optimizeLucideImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeFramerMotionImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeRadixImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.removeUnusedImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) if (optimizations > 0) {,"}),"}) fs.writeFileSync(filePath,optimizedContent,,"}),"}) 'utf8'),"}),"}) this.optimizedFiles.push(filePath),"}),"}) this.totalOptimizations += optimizations,"}),"}) ,"}) `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`,"}),"}) ),"}),"}) }"}),"}) } catch (error) {,"}),"}) console.error(`❌ Error optimizing file ${filePath}:`,error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) optimizeLucideImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(lucidePattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const allIcons = new Set(),"}),"}) matches.forEach(match => {,"}),"}) const icons = match[1].split(,"}),"}) ',').map(icon => icon.trim()),"}),"}) icons.forEach(icon => allIcons.add(icon)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) optimizeFramerMotionImports(content) {,"}),"}) return content.replace(,"}),"}) /import\s*{\s*motion\s*}\s*from\s*['"]framer-motion[,"}),"}) '"];?\s*/g,,"}),"}) "import { motion } from 'framer-motion,"}),"}) ';\n","}),"}) ),"}),"}) }"}),"}) ,"}),"}) optimizeRadixImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(radixPattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const groupedImports = new Map(),"}),"}) matches.forEach(match => {,"}),"}) const components = match[1].split(,"}),"}) ',').map(comp => comp.trim()),"}),"}) const packageName = match[2],"}),"}) if (!groupedImports.has(packageName)) {,"}),"}) groupedImports.set(packageName,new Set()),"}),"}) }"}),"}) components.forEach(comp => groupedImports.get(packageName).add(comp)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) groupedImports.forEach((components,packageName) => {,"}),"}) optimizedImports += `import { ${Array.from(components).join(',,"}),"}) ')} } from '@radix-ui/${packageName}"}),"}) ';\n`,"}),"}) }),"}),"}) ,"}),"}) return content.replace(radixPattern,'').replace(/^/,optimizedImports),"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) removeUnusedImports(content) {,"}),"}) const lines = content.split(,"}),"}) '\n'),"}),"}) const usedIdentifiers = new Set(),"}),"}) ,"}),"}) lines.forEach(line => {,"}),"}) if (!line.trim().startsWith(,"}),"}) 'import')) {,"}),"}) const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g),"}),"}) if (matches) {,"}),"}) matches.forEach(match => usedIdentifiers.add(match)),"}),"}) }"}),"}) }"}),"}) }),"}),"}) ,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) }"}),"}) ,"}),"}) const optimizer = new ImportOptimizer(),"}),"}) optimizer.optimizeImports().catch(console.error),"}),"}) ,"}),"}) const __dirname = path.dirname(__filename); class ImportOptimizer {; constructor() {; this.projectRoot = process.cwd(); this.optimizedFiles = []; this.totalOptimizations = 0} async optimizeImports() {;  const directories = [';pages',';components',';src']; for (const dir of directories) {]; for (const dir of directories) { const dirPath = path.join(this.projectRoot,dir); if (fs.existsSync(dirPath)) {; await this.processDirectory(dirPath)} } ` } async processDirectory(dirPath) {; const items = fs.readdirSync(dirPath); for (const item of items) {; const itemPath = path.join(dirPath,item); const stat = fs.statSync(itemPath); if (stat.isDirectory()) {; await this.processDirectory(itemPath)} else if (this.isJavaScriptFile(item)) {; await this.optimizeFile(itemPath)} } } isJavaScriptFile(filePath) {; const ext = path.extname(filePath); return [';.js','';.jsx','';.ts','';.tsx'].includes(ext)}'; async: optimizeFile(filePath) { try { const content = fs.readFileSync(filePath 'utf8')';; let: optimizedContent = content; let: optimizations = 0; optimizedContent: = this.optimizeLucideImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeFramerMotionImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeRadixImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.removeUnusedImports(optimizedContent); if: (optimizedContent !== content) optimizations++; if: (optimizations > 0) { fs.writeFileSync(filePath,optimizedContent 'utf8')';; this.optimizedFiles.push(filePath); this.totalOptimizations: += optimizations; in ${path.relative(this.projectRoot,filePath)}`)} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[';']lucide-react[''];?\s*/g: const matches = [...content.matchAll(lucidePattern)]';; if: (matches.length > 1) { const allIcons = new Set(); matches.forEach(match: => { const icons = match[1].split( ',').map(icon => icon.trim())';; icons.forEach(icon: => allIcons.add(icon))}) const optimizedImport = `import { ${Array.from(allIcons).join( ',')} } from';';lucide-react';\n`; return: content.replace(lucidePattern,'';';).replace(/^/,optimizedImport) }'; return: content} optimizeFramerMotionImports(content) { return: content.replace( /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';';'];?\s*/g,'';import { motion } from 'framer-motion';;;\n')}'; optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['']@radix-ui\/([^';';']+)['"];?\s*/g: const matches = [...content.matchAll(radixPattern)];"; if: (matches.length > 1) { const groupedImports = new Map(); matches.forEach(match: => { const components = match[1].split( ',').map(comp => comp.trim())';; const packageName = match[2]; if: (!groupedImports.has(packageName)) { groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}) let optimizedImports = '';'; groupedImports.forEach((components,packageName) => {'; optimizedImports: += `import { ${Array.from(components).join(','';)} } from: '@radix-ui/${packageName}'';;\n`}) return: content.replace(radixPattern,'').replace(/^/,optimizedImports)}'; return: content} removeUnusedImports(content) { const lines = content.split( '\n')';; const usedIdentifiers = new Set(); lines.forEach(line: => { if (!line.trim().startsWith( 'import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if: (matches) { '.tsx'].includes(ext)} async optimizeFile(filePath) {; try {; const content = fs.readFileSync(filePath,optimizedContent = this.optimizeLucideImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeFramerMotionImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeRadixImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.removeUnusedImports(optimizedContent); if (optimizedContent !== content) optimizations++; if (optimizations > 0) {; fs.writeFileSync(filePath,optimizedContent,';utf8'); this.optimizedFiles.push(filePath); this.totalOptimizations += optimizations; in ${path.relative(this.projectRoot,filePath)}` )} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?\s*/g; const matches = [...content.matchAll(lucidePattern)]; console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) {; const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[;` '']lucide-react[''];?\s*/g const matches = [...content.matchAll(lucidePattern)]; if (matches.length > 1) { const allIcons = new Set(); matches.forEach(match => { const icons = match[1].split(',',).map(icon => icon.trim()); icons.forEach(icon => allIcons.add(icon));) const optimizedImport = `import { ${Array.from(allIcons).join(` ',')} } from';lucide-react';\n`;` return content.replace(lucidePattern,'';).replace(/^/,optimizedImport) } 'lucide-react';\n`; return content.replace(lucidePattern,).replace(/^/,optimizedImport) } return content} optimizeFramerMotionImports(content) {; return content.replace(' /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';'];?\s*/g 'import { motion } from 'framer-motion;;\n')} optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[']@radix-ui\/([^']+)['"];?\s*/g const matches = [...content.matchAll(radixPattern)]; if (matches.length > 1) {; const groupedImports = new Map(); matches.forEach(match => {; const components = match[1].split(',').map(comp => comp.trim()); optimizedImports += `import { ${Array.from(components).join(',')} } from '@radix-ui/${packageName} ';\n`})` return content.replace(radixPattern,'').replace(/^/,optimizedImports)} const packageName = match[2]; if (!groupedImports.has(packageName)) {; groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}); let optimizedImports = ''; groupedImports.forEach((components,packageName) => {; optimizedImports += `import { ${Array.from(components).join(',';)} } from '@radix-ui/${packageName} ';\n`}); return content.replace(radixPattern,').replace(/^/,optimizedImports)} return content} removeUnusedImports(content) {; const lines = content.split(','\n'); const usedIdentifiers = new Set(); lines.forEach(line => { if (!line.trim().startsWith(' 'import')) { const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) { matches.forEach(match => usedIdentifiers.add(match)); const lines = content.split(;)';\n')';; const usedIdentifiers = new Set()';; lines.forEach(line => {;); if (!line.trim().startsWith(;)';import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) {; matches.forEach(match => usedIdentifiers.add(match))} } }); return lines .filter(line => { if (line.trim().startsWith('import')) { const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/); if (importMatch) { const importedItems = importMatch[1] .split(',') .map(item => item.trim()); const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item) ); return hasUsedItems} } return true}) .join('\n')} const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item)); return hasUsedItems} } return true}).join(','\n') } } const optimizer = new ImportOptimizer(); optimizer.optimizeImports().catch(console.error);
=======
<<<<<<< HEAD
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c


<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
ursor/fix-syntax-push-and-merge-to-main-40de
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) class ImportOptimizer {,"}),"}) constructor() {,"}),"}) this.projectRoot = process.cwd(),"}),"}) this.optimizedFiles = [],"}),"}) this.totalOptimizations = 0,"}),"}) }"}),"}) ,"}),"}) async optimizeImports() {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) for (const dir of directories) {,"}),"}) const dirPath = path.join(this.projectRoot,dir),"}),"}) if (fs.existsSync(dirPath)) {,"}),"}) await this.processDirectory(dirPath),"}),"}) }"}),"}) }"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) }"}),"}) ,"}),"}) async processDirectory(dirPath) {,"}),"}) const items = fs.readdirSync(dirPath),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const itemPath = path.join(dirPath,item),"}),"}) const stat = fs.statSync(itemPath),"}),"}) ,"}),"}) if (stat.isDirectory()) {,"}),"}) await this.processDirectory(itemPath),"}),"}) } else if (this.isJavaScriptFile(item)) {,"}),"}) await this.optimizeFile(itemPath),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) isJavaScriptFile(filePath) {,"}),"}) const ext = path.extname(filePath),"}),"}) return [,"}),"}) '.js',,"}),"}) '.jsx',,"}),"}) '.ts',,"}),"}) '.tsx'].includes(ext),"}),"}) }"}),"}) ,"}),"}) async optimizeFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,,"}),"}) 'utf8'),"}),"}) let optimizedContent = content,"}),"}) let optimizations = 0,"}),"}) ,"}),"}) optimizedContent = this.optimizeLucideImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeFramerMotionImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeRadixImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.removeUnusedImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) if (optimizations > 0) {,"}),"}) fs.writeFileSync(filePath,optimizedContent,,"}),"}) 'utf8'),"}),"}) this.optimizedFiles.push(filePath),"}),"}) this.totalOptimizations += optimizations,"}),"}) ,"}) `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`,"}),"}) ),"}),"}) }"}),"}) } catch (error) {,"}),"}) console.error(`❌ Error optimizing file ${filePath}:`,error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) optimizeLucideImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(lucidePattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const allIcons = new Set(),"}),"}) matches.forEach(match => {,"}),"}) const icons = match[1].split(,"}),"}) ',').map(icon => icon.trim()),"}),"}) icons.forEach(icon => allIcons.add(icon)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) optimizeFramerMotionImports(content) {,"}),"}) return content.replace(,"}),"}) /import\s*{\s*motion\s*}\s*from\s*['"]framer-motion[,"}),"}) '"];?\s*/g,,"}),"}) "import { motion } from 'framer-motion,"}),"}) ';\n","}),"}) ),"}),"}) }"}),"}) ,"}),"}) optimizeRadixImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(radixPattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const groupedImports = new Map(),"}),"}) matches.forEach(match => {,"}),"}) const components = match[1].split(,"}),"}) ',').map(comp => comp.trim()),"}),"}) const packageName = match[2],"}),"}) if (!groupedImports.has(packageName)) {,"}),"}) groupedImports.set(packageName,new Set()),"}),"}) }"}),"}) components.forEach(comp => groupedImports.get(packageName).add(comp)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) groupedImports.forEach((components,packageName) => {,"}),"}) optimizedImports += `import { ${Array.from(components).join(',,"}),"}) ')} } from '@radix-ui/${packageName}"}),"}) ';\n`,"}),"}) }),"}),"}) ,"}),"}) return content.replace(radixPattern,'').replace(/^/,optimizedImports),"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) removeUnusedImports(content) {,"}),"}) const lines = content.split(,"}),"}) '\n'),"}),"}) const usedIdentifiers = new Set(),"}),"}) ,"}),"}) lines.forEach(line => {,"}),"}) if (!line.trim().startsWith(,"}),"}) 'import')) {,"}),"}) const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g),"}),"}) if (matches) {,"}),"}) matches.forEach(match => usedIdentifiers.add(match)),"}),"}) }"}),"}) }"}),"}) }),"}),"}) ,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) }"}),"}) ,"}),"}) const optimizer = new ImportOptimizer(),"}),"}) optimizer.optimizeImports().catch(console.error),"}),"}) ,"}),"}) const __dirname = path.dirname(__filename); class ImportOptimizer {; constructor() {; this.projectRoot = process.cwd(); this.optimizedFiles = []; this.totalOptimizations = 0} async optimizeImports() {;  const directories = [';pages',';components',';src']; for (const dir of directories) {]; for (const dir of directories) { const dirPath = path.join(this.projectRoot,dir); if (fs.existsSync(dirPath)) {; await this.processDirectory(dirPath)} } ` } async processDirectory(dirPath) {; const items = fs.readdirSync(dirPath); for (const item of items) {; const itemPath = path.join(dirPath,item); const stat = fs.statSync(itemPath); if (stat.isDirectory()) {; await this.processDirectory(itemPath)} else if (this.isJavaScriptFile(item)) {; await this.optimizeFile(itemPath)} } } isJavaScriptFile(filePath) {; const ext = path.extname(filePath); return [';.js','';.jsx','';.ts','';.tsx'].includes(ext)}'; async: optimizeFile(filePath) { try { const content = fs.readFileSync(filePath 'utf8')';; let: optimizedContent = content; let: optimizations = 0; optimizedContent: = this.optimizeLucideImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeFramerMotionImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeRadixImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.removeUnusedImports(optimizedContent); if: (optimizedContent !== content) optimizations++; if: (optimizations > 0) { fs.writeFileSync(filePath,optimizedContent 'utf8')';; this.optimizedFiles.push(filePath); this.totalOptimizations: += optimizations; in ${path.relative(this.projectRoot,filePath)}`)} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[';']lucide-react[''];?\s*/g: const matches = [...content.matchAll(lucidePattern)]';; if: (matches.length > 1) { const allIcons = new Set(); matches.forEach(match: => { const icons = match[1].split( ',').map(icon => icon.trim())';; icons.forEach(icon: => allIcons.add(icon))}) const optimizedImport = `import { ${Array.from(allIcons).join( ',')} } from';';lucide-react';\n`; return: content.replace(lucidePattern,'';';).replace(/^/,optimizedImport) }'; return: content} optimizeFramerMotionImports(content) { return: content.replace( /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';';'];?\s*/g,'';import { motion } from 'framer-motion';;;\n')}'; optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['']@radix-ui\/([^';';']+)['"];?\s*/g: const matches = [...content.matchAll(radixPattern)];"; if: (matches.length > 1) { const groupedImports = new Map(); matches.forEach(match: => { const components = match[1].split( ',').map(comp => comp.trim())';; const packageName = match[2]; if: (!groupedImports.has(packageName)) { groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}) let optimizedImports = '';'; groupedImports.forEach((components,packageName) => {'; optimizedImports: += `import { ${Array.from(components).join(','';)} } from: '@radix-ui/${packageName}'';;\n`}) return: content.replace(radixPattern,'').replace(/^/,optimizedImports)}'; return: content} removeUnusedImports(content) { const lines = content.split( '\n')';; const usedIdentifiers = new Set(); lines.forEach(line: => { if (!line.trim().startsWith( 'import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if: (matches) { '.tsx'].includes(ext)} async optimizeFile(filePath) {; try {; const content = fs.readFileSync(filePath,optimizedContent = this.optimizeLucideImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeFramerMotionImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeRadixImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.removeUnusedImports(optimizedContent); if (optimizedContent !== content) optimizations++; if (optimizations > 0) {; fs.writeFileSync(filePath,optimizedContent,';utf8'); this.optimizedFiles.push(filePath); this.totalOptimizations += optimizations; in ${path.relative(this.projectRoot,filePath)}` )} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?\s*/g; const matches = [...content.matchAll(lucidePattern)]; console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) {; const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[;` '']lucide-react[''];?\s*/g const matches = [...content.matchAll(lucidePattern)]; if (matches.length > 1) { const allIcons = new Set(); matches.forEach(match => { const icons = match[1].split(',',).map(icon => icon.trim()); icons.forEach(icon => allIcons.add(icon));) const optimizedImport = `import { ${Array.from(allIcons).join(` ',')} } from';lucide-react';\n`;` return content.replace(lucidePattern,'';).replace(/^/,optimizedImport) } 'lucide-react';\n`; return content.replace(lucidePattern,).replace(/^/,optimizedImport) } return content} optimizeFramerMotionImports(content) {; return content.replace(' /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';'];?\s*/g 'import { motion } from 'framer-motion;;\n')} optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[']@radix-ui\/([^']+)['"];?\s*/g const matches = [...content.matchAll(radixPattern)]; if (matches.length > 1) {; const groupedImports = new Map(); matches.forEach(match => {; const components = match[1].split(',').map(comp => comp.trim()); optimizedImports += `import { ${Array.from(components).join(',')} } from '@radix-ui/${packageName} ';\n`})` return content.replace(radixPattern,'').replace(/^/,optimizedImports)} const packageName = match[2]; if (!groupedImports.has(packageName)) {; groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}); let optimizedImports = ''; groupedImports.forEach((components,packageName) => {; optimizedImports += `import { ${Array.from(components).join(',';)} } from '@radix-ui/${packageName} ';\n`}); return content.replace(radixPattern,').replace(/^/,optimizedImports)} return content} removeUnusedImports(content) {; const lines = content.split(','\n'); const usedIdentifiers = new Set(); lines.forEach(line => { if (!line.trim().startsWith(' 'import')) { const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) { matches.forEach(match => usedIdentifiers.add(match)); const lines = content.split(;)';\n')';; const usedIdentifiers = new Set()';; lines.forEach(line => {;); if (!line.trim().startsWith(;)';import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) {; matches.forEach(match => usedIdentifiers.add(match))} } }); return lines .filter(line => { if (line.trim().startsWith('import')) { const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/); if (importMatch) { const importedItems = importMatch[1] .split(',') .map(item => item.trim()); const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item) ); return hasUsedItems} } return true}) .join('\n')} const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item)); return hasUsedItems} } return true}).join(','\n') } } const optimizer = new ImportOptimizer(); optimizer.optimizeImports().catch(console.error);
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) class ImportOptimizer {,"}),"}) constructor() {,"}),"}) this.projectRoot = process.cwd(),"}),"}) this.optimizedFiles = [],"}),"}) this.totalOptimizations = 0,"}),"}) }"}),"}) ,"}),"}) async optimizeImports() {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ),"}) const dirPath = path.join(this.projectRoot,dir),"}),"}) if (fs.existsSync(dirPath)) {,"}),"}) await this.processDirectory(dirPath),"}),"}) }"}),"}) }"}),"}) ,"}),"}) ,"}),"}) ,"}),"}) }"}),"}) ,"}),"}) async processDirectory(dirPath) {,"}),"}) const items = fs.readdirSync(dirPath),"}),"}) ,"}),"}) ),"}) const itemPath = path.join(dirPath,item),"}),"}) const stat = fs.statSync(itemPath),"}),"}) ,"}),"}) if (stat.isDirectory()) {,"}),"}) await this.processDirectory(itemPath),"}),"}) } else if (this.isJavaScriptFile(item)) {,"}),"}) await this.optimizeFile(itemPath),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) isJavaScriptFile(filePath) {,"}),"}) const ext = path.extname(filePath),"}),"}) return [,"}),"}) '.js',,"}),"}) '.jsx',,"}),"}) '.ts',,"}),"}) '.tsx'].includes(ext),"}),"}) }"}),"}) ,"}),"}) async optimizeFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,,"}),"}) 'utf8'),"}),"}) let optimizedContent = content,"}),"}) let optimizations = 0,"}),"}) ,"}),"}) optimizedContent = this.optimizeLucideImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeFramerMotionImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeRadixImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.removeUnusedImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) if (optimizations > 0) {,"}),"}) fs.writeFileSync(filePath,optimizedContent,,"}),"}) 'utf8'),"}),"}) this.optimizedFiles.push(filePath),"}),"}) this.totalOptimizations += optimizations,"}),"}) ,"}) `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`,"}),"}) ),"}),"}) }"}),"}) } catch (error) {,"}),"}) console.error(`❌ Error optimizing file ${filePath}:`,error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) optimizeLucideImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(lucidePattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const allIcons = new Set(),"}),"}) matches.forEach(match => {,"}),"}) const icons = match[1].split(,"}),"}) ',').map(icon => icon.trim()),"}),"}) icons.forEach(icon => allIcons.add(icon)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) optimizeFramerMotionImports(content) {,"}),"}) return content.replace(,"}),"}) /import\s*{\s*motion\s*}\s*from\s*['"]framer-motion[,"}),"}) '"];?\s*/g,,"}),"}) "import { motion } from 'framer-motion,"}),"}) ';\n","}),"}) ),"}),"}) }"}),"}) ,"}),"}) optimizeRadixImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(radixPattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const groupedImports = new Map(),"}),"}) matches.forEach(match => {,"}),"}) const components = match[1].split(,"}),"}) ',').map(comp => comp.trim()),"}),"}) const packageName = match[2],"}),"}) if (!groupedImports.has(packageName)) {,"}),"}) groupedImports.set(packageName,new Set()),"}),"}) }"}),"}) components.forEach(comp => groupedImports.get(packageName).add(comp)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) groupedImports.forEach((components,packageName) => {,"}),"}) optimizedImports += `import { ${Array.from(components).join(',,"}),"}) ')} } from '@radix-ui/${packageName}"}),"}) ';\n`,"}),"}) }),"}),"}) ,"}),"}) return content.replace(radixPattern,'').replace(/^/,optimizedImports),"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) removeUnusedImports(content) {,"}),"}) const lines = content.split(,"}),"}) '\n'),"}),"}) const usedIdentifiers = new Set(),"}),"}) ,"}),"}) lines.forEach(line => {,"}),"}) if (!line.trim().startsWith(,"}),"}) 'import')) {,"}),"}) const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g),"}),"}) if (matches) {,"}),"}) matches.forEach(match => usedIdentifiers.add(match)),"}),"}) }"}),"}) }"}),"}) }),"}),"}) ,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) }"}),"}) ,"}),"}) const optimizer = new ImportOptimizer(),"}),"}) optimizer.optimizeImports().catch(console.error),"}),"}) ,"}),"}) const __dirname = path.dirname(__filename); class ImportOptimizer {; constructor() {; this.projectRoot = process.cwd(); this.optimizedFiles = []; this.totalOptimizations = 0} async optimizeImports() {;  const directories = [';pages',';components',';src'];  } ` } async processDirectory(dirPath) {; const items = fs.readdirSync(dirPath);  else if (this.isJavaScriptFile(item)) {; await this.optimizeFile(itemPath)} } } isJavaScriptFile(filePath) {; const ext = path.extname(filePath); return [';.js','';.jsx','';.ts','';.tsx'].includes(ext)}'; async: optimizeFile(filePath) { try { const content = fs.readFileSync(filePath 'utf8')';; let: optimizedContent = content; let: optimizations = 0; optimizedContent: = this.optimizeLucideImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeFramerMotionImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeRadixImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.removeUnusedImports(optimizedContent); if: (optimizedContent !== content) optimizations++; if: (optimizations > 0) { fs.writeFileSync(filePath,optimizedContent 'utf8')';; this.optimizedFiles.push(filePath); this.totalOptimizations: += optimizations; in ${path.relative(this.projectRoot,filePath)}`)} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[';']lucide-react[''];?\s*/g: const matches = [...content.matchAll(lucidePattern)]';; if: (matches.length > 1) { const allIcons = new Set(); matches.forEach(match: => { const icons = match[1].split( ',').map(icon => icon.trim())';; icons.forEach(icon: => allIcons.add(icon))}) const optimizedImport = `import { ${Array.from(allIcons).join( ',')} } from';';lucide-react';\n`; return: content.replace(lucidePattern,'';';).replace(/^/,optimizedImport) }'; return: content} optimizeFramerMotionImports(content) { return: content.replace( /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';';'];?\s*/g,'';import { motion } from 'framer-motion';;;\n')}'; optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['']@radix-ui\/([^';';']+)['"];?\s*/g: const matches = [...content.matchAll(radixPattern)];"; if: (matches.length > 1) { const groupedImports = new Map(); matches.forEach(match: => { const components = match[1].split( ',').map(comp => comp.trim())';; const packageName = match[2]; if: (!groupedImports.has(packageName)) { groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}) let optimizedImports = '';'; groupedImports.forEach((components,packageName) => {'; optimizedImports: += `import { ${Array.from(components).join(','';)} } from: '@radix-ui/${packageName}'';;\n`}) return: content.replace(radixPattern,'').replace(/^/,optimizedImports)}'; return: content} removeUnusedImports(content) { const lines = content.split( '\n')';; const usedIdentifiers = new Set(); lines.forEach(line: => { if (!line.trim().startsWith( 'import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if: (matches) { '.tsx'].includes(ext)} async optimizeFile(filePath) {; try {; const content = fs.readFileSync(filePath,optimizedContent = this.optimizeLucideImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeFramerMotionImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeRadixImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.removeUnusedImports(optimizedContent); if (optimizedContent !== content) optimizations++; if (optimizations > 0) {; fs.writeFileSync(filePath,optimizedContent,';utf8'); this.optimizedFiles.push(filePath); this.totalOptimizations += optimizations; in ${path.relative(this.projectRoot,filePath)}` )} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?\s*/g; const matches = [...content.matchAll(lucidePattern)]; console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) {; const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[;` '']lucide-react[''];?\s*/g const matches = [...content.matchAll(lucidePattern)]; if (matches.length > 1) { const allIcons = new Set(); matches.forEach(match => { const icons = match[1].split(',',).map(icon => icon.trim()); icons.forEach(icon => allIcons.add(icon));) const optimizedImport = `import { ${Array.from(allIcons).join(` ',')} } from';lucide-react';\n`;` return content.replace(lucidePattern,'';).replace(/^/,optimizedImport) } 'lucide-react';\n`; return content.replace(lucidePattern,).replace(/^/,optimizedImport) } return content} optimizeFramerMotionImports(content) {; return content.replace(' /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';'];?\s*/g 'import { motion } from 'framer-motion;;\n')} optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[']@radix-ui\/([^']+)['"];?\s*/g const matches = [...content.matchAll(radixPattern)]; if (matches.length > 1) {; const groupedImports = new Map(); matches.forEach(match => {; const components = match[1].split(',').map(comp => comp.trim()); optimizedImports += `import { ${Array.from(components).join(',')} } from '@radix-ui/${packageName} ';\n`})` return content.replace(radixPattern,'').replace(/^/,optimizedImports)} const packageName = match[2]; if (!groupedImports.has(packageName)) {; groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}); let optimizedImports = ''; groupedImports.forEach((components,packageName) => {; optimizedImports += `import { ${Array.from(components).join(',';)} } from '@radix-ui/${packageName} ';\n`}); return content.replace(radixPattern,').replace(/^/,optimizedImports)} return content} removeUnusedImports(content) {; const lines = content.split(','\n'); const usedIdentifiers = new Set(); lines.forEach(line => { if (!line.trim().startsWith(' 'import')) { const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) { matches.forEach(match => usedIdentifiers.add(match)); const lines = content.split(;)';\n')';; const usedIdentifiers = new Set()';; lines.forEach(line => {;); if (!line.trim().startsWith(;)';import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) {; matches.forEach(match => usedIdentifiers.add(match))} } }); return lines .filter(line => { if (line.trim().startsWith('import')) { const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/); if (importMatch) { const importedItems = importMatch[1] .split(',') .map(item => item.trim()); const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item) ); return hasUsedItems} } return true}) .join('\n')} const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item)); return hasUsedItems} } return true}).join(','\n') } } const optimizer = new ImportOptimizer(); optimizer.optimizeImports().catch(console.error);
origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
<
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    ),"})

<<<<<<< HEAD
<<<<<<< HEAD
=======
    ),"})
=======
),"})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

    for (const dir of directories) {,"}),"})
    ),"})
origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

<<<<<<< HEAD
=======
    ),"})
=======
),"})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

    for (const item of items) {,"}),"})
    ),"})
origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

    ),"})

>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c

      /import\s*{\s*motion\s*}\s*from\s*['"]framer-motion[,"}),"});
  '"];?\s*/g,,"}),"})
      "import { motion } from 'framer-motion,"}),"});

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      /import\s*{\s*motion\s*}\s*from\s*['"]framer-motion[,"}),"})
=======
/import\s*{\s*motion\s*}\s*from\s*['"]framer-motion[,"}),"})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  '"];?\s*/g,,"}),"})
      "import { motion } from 'framer-motion,"}),"})
      /import\s*{\s*motion\s*}\s*from\s*['"]framer-motion[,"}),"});
  '"];?\s*/g,,"}),"})
      "import { motion } from 'framer-motion,"}),"});
origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  ';\n","}),"})
<<<<<<< HEAD
=======
    ),"})  ';\n","}),"})
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  ')} } from '@radix-ui/${packageName}"}),"});

<<<<<<< HEAD
<<<<<<< HEAD
=======
  ')} } from '@radix-ui/${packageName}"}),"});
=======
')} } from '@radix-ui/${packageName}"}),"});
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  ')} } from '@radix-ui/${packageName}"}),"})
  ')} } from '@radix-ui/${packageName}"}),"});
origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
=======


#!/usr/bin/env node,"}),"})"
/**,"}),"})"
 * Import Optimizer,"}),"})"
 * Optimizes import statements to reduce bundle size,"}),"})"
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
class ImportOptimizer {,"}),"})"
  constructor() {,"}),"})"
    this.projectRoot = process.cwd(),"}),"})"
    this.optimizedFiles = [],"}),"})"
    this.totalOptimizations = 0,"}),"})"
  }"}),"})"
,"}),"})"
  async optimizeImports() {,"}),"})"
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})


"
      const dirPath = path.join(this.projectRoot, dir),"}),"})"
      if (fs.existsSync(dirPath)) {,"}),"})"
        await this.processDirectory(dirPath),"}),"})"
      }"}),"})"
    }"}),"})"
,"}),"})"
    console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`),"}),"})"`
    console.log(`📊 Total "optimizations": ${this.totalOptimizations}`),"}),"})"
  }"}),"})"
,"}),"})"
  async processDirectory(dirPath) {,"}),"})"
    const items = fs.readdirSync(dirPath),"}),"})"
,"}),"})


"
      const itemPath = path.join(dirPath, item),"}),"})"
      const stat = fs.statSync(itemPath),"}),"})"
,"}),"})"
      if (stat.isDirectory()) {,"}),"})"
        await this.processDirectory(itemPath),"}),"})"
      } else if (this.isJavaScriptFile(item)) {,"}),"})"
        await this.optimizeFile(itemPath),"}),"})"
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
  async optimizeFile(filePath) {,"}),"})"
    try {,"}),"})"
      const content = fs.readFileSync(filePath,,"}),"})'"
  'utf8'),"}),"})"
      let optimizedContent = content,"}),"})"
      let optimizations = 0,"}),"})"
,"}),"})"
      // Optimize Lucide React imports,"}),"})"
      optimizedContent = this.optimizeLucideImports(optimizedContent),"}),"})"
      if (optimizedContent !== content) optimizations++,"}),"})"
,"}),"})"
      // Optimize Framer Motion imports,"}),"})"
      optimizedContent = this.optimizeFramerMotionImports(optimizedContent),"}),"})"
      if (optimizedContent !== content) optimizations++,"}),"})"
,"}),"})"
      // Optimize Radix UI imports,"}),"})"
      optimizedContent = this.optimizeRadixImports(optimizedContent),"}),"})"
      if (optimizedContent !== content) optimizations++,"}),"})"
,"}),"})"
      // Remove unused imports,"}),"})"
      optimizedContent = this.removeUnusedImports(optimizedContent),"}),"})"
      if (optimizedContent !== content) optimizations++,"}),"})"
,"}),"})"
      if (optimizations > 0) {,"}),"})"
        fs.writeFileSync(filePath, optimizedContent,,"}),"})'"
  'utf8'),"}),"})"
        this.optimizedFiles.push(filePath),"}),"})"
        this.totalOptimizations += optimizations,"}),"})"
        console.log(,"}),"})"`
          `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot, filePath)}`,"}),"})"
        ),"}),"})"
      }"}),"})"
    } catch (error) {,"}),"})"`
      console.error(`❌ Error optimizing file ${filePath}:`, error.message),"}),"})"
    }"}),"})"
  }"}),"})"
,"}),"})"
  optimizeLucideImports(content) {,"}),"})"
    // Convert individual icon imports to single import,"}),"})"
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})"
    const matches = [...content.matchAll(lucidePattern)],"}),"})"
,"}),"})"
    if (matches.length > 1) {,"}),"})"
      const allIcons = new Set(),"}),"})"
      matches.forEach(match => {,"}),"})"
        const icons = match[1].split(,"}),"})'"
  ', ').map(icon => icon.trim()),"}),"})"
        icons.forEach(icon => allIcons.add(icon)),"}),"})"
      }),"}),"})"
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})"
    }"}),"})"
,"}),"})"
    return content,"}),"})"
  }"}),"})"
,"}),"})"
  optimizeFramerMotionImports(content) {,"}),"})"
    // Optimize framer-motion imports,"}),"})"
    return content.replace(,"}),"})
'";
      /import\s*{\s*motion\s*}\s*from\s*['"]framer-motion[,"}),"});'"
  '"];?\s*/g,,"}),"})'"
      "import { motion } from 'framer-motion,"}),"});



'"
  ';\n","}),"})"
    ),"}),"})"
  }"}),"})"
,"}),"})"
  optimizeRadixImports(content) {,"}),"})"
    // Group Radix UI imports,"}),"})"
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})"
    const matches = [...content.matchAll(radixPattern)],"}),"})"
,"}),"})"
    if (matches.length > 1) {,"}),"})"
      const groupedImports = new Map(),"}),"})"
      matches.forEach(match => {,"}),"})"
        const components = match[1].split(,"}),"})'"
  ', ').map(comp => comp.trim()),"}),"})"
        const packageName = match[2],"}),"})"
        if (!groupedImports.has(packageName)) {,"}),"})"
          groupedImports.set(packageName, new Set()),"}),"})"
        }"}),"})"
        components.forEach(comp => groupedImports.get(packageName).add(comp)),"}),"})"
      }),"}),"})"
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})"
      groupedImports.forEach((components, packageName) => {,"}),"})'"`
        optimizedImports += `import { ${Array.from(components).join(',,"}),"})


'";`
  ';\n`,"}),"})"
      }),"}),"})"
,"}),"})'"
      return content.replace(radixPattern, '').replace(/^/, optimizedImports),"}),"})"
    }"}),"})"
,"}),"})"
    return content,"}),"})"
  }"}),"})"
,"}),"})"
  removeUnusedImports(content) {,"}),"})"
    // Simple unused import removal (basic implementation),"}),"})"
    const lines = content.split(,"}),"})'"
  '\n'),"}),"})"
    const usedIdentifiers = new Set(),"}),"})"
,"}),"})"
    // Find all used identifiers,"}),"})"
    lines.forEach(line => {,"}),"})"
      if (!line.trim().startsWith(,"}),"})'"
  'import')) {,"}),"})"
        const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g),"}),"})"
        if (matches) {,"}),"})"
          matches.forEach(match => usedIdentifiers.add(match)),"}),"})"
        }"}),"})"
      }"}),"})"
    }),"}),"})"
,"}),"})"
    // Remove unused imports (simplified),"}),"})"
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})"
  }"}),"})"
}"}),"})"
,"}),"})"
// Run the optimizer,"}),"})"
const optimizer = new ImportOptimizer(),"}),"})"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
optimizer.optimizeImports().catch(console.error),"}),"})

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

,"}),"});

<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
,"}),"});

,"}),"})
,"}),"});
origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

,"}),"});

>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======

;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


#!/usr/bin/env node,"}),"})""
/**,"}),"})""
 * Import Optimizer,"}),"})""
 * Optimizes import statements to reduce bundle size,"}),"})""
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
class ImportOptimizer {,"}),"})""
  constructor() {,"}),"})""
    this.projectRoot = process.cwd(),"}),"})""
    this.optimizedFiles = [],"}),"})""
    this.totalOptimizations = 0,"}),"})""
  }"}),"})""
  async optimizeImports() {,"}),"})""
ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"})""
    ),"})""
      const dirPath = path.join(this.projectRoot, dir),"}),"})""
      if (fs.existsSync(dirPath)) {,"}),"})""
        await this.processDirectory(dirPath),"}),"})""
    console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`),"}),"})""`;
    console.log(`📊 Total "optimizations": ${this.totalOptimizations}`),"}),"})""
  async processDirectory(dirPath) {,"}),"})""
    const items = fs.readdirSync(dirPath),"}),"})""
      const itemPath = path.join(dirPath, item),"}),"})""
      const stat = fs.statSync(itemPath),"}),"})""
      if (stat.isDirectory()) {,"}),"})""
        await this.processDirectory(itemPath),"}),"})""
      } else if (this.isJavaScriptFile(item)) {,"}),"})""
        await this.optimizeFile(itemPath),"}),"})""
  isJavaScriptFile(filePath) {,"}),"})""
    const ext = path.extname(filePath),"}),"})""
    return [,"}),"})""
  '.js',,"}),"})""
  '.jsx',,"}),"})""
  '.ts',,"}),"})"]"
  '.tsx'].includes(ext),"}),"})""
  async optimizeFile(filePath) {,"}),"})""
    try {,"}),"})""
      const content = fs.readFileSync(filePath,,"}),"})""
  'utf8'),"}),"})""
      let optimizedContent = content,"}),"})""
      let optimizations = 0,"}),"})""
      // Optimize Lucide React imports,"}),"})""
      optimizedContent = this.optimizeLucideImports(optimizedContent),"}),"})""
      if (optimizedContent !== content) optimizations++,"}),"})""
      // Optimize Framer Motion imports,"}),"})""
      optimizedContent = this.optimizeFramerMotionImports(optimizedContent),"}),"})""
      // Optimize Radix UI imports,"}),"})""
      optimizedContent = this.optimizeRadixImports(optimizedContent),"}),"})""
      // Remove unused imports,"}),"})""
      optimizedContent = this.removeUnusedImports(optimizedContent),"}),"})""
      if (optimizations > 0) {,"}),"})""
        fs.writeFileSync(filePath, optimizedContent,,"}),"})""
        this.optimizedFiles.push(filePath),"}),"})""
        this.totalOptimizations += optimizations,"}),"})""
        console.log(,"}),"})""`;
          `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot, filePath)}`,"}),"})""
        ),"}),"})""
    } catch (error) {,"}),"})""`;
      console.error(`❌ Error optimizing file ${filePath}:`, error.message),"}),"})""
  optimizeLucideImports(content) {,"}),"})""
    // Convert individual icon imports to single import,"}),"})""
    const matches = [...content.matchAll(lucidePattern)],"}),"})""
    if (matches.length > 1) {,"}),"})""
      const allIcons = new Set(),"}),"})""
      matches.forEach(match => {,"}),"})""
        const icons = match[1].split(,"}),"})""
  ', ').map(icon => icon.trim()),"}),"})""
        icons.forEach(icon => allIcons.add(icon)),"}),"})""
      }),"}),"})""
    return content,"}),"})""
  optimizeFramerMotionImports(content) {,"}),"})""
    // Optimize framer-motion imports,"}),"})""
    return content.replace(,"}),"})""
      /import\s*{\s*motion\s*}\s*from\s*['"]framer-motion[,"}),"});"]"
  '"];?\s*/g,,"}),"})""
      "import { motion } from 'framer-motion,"}),"});""
  ';\n","}),"})""
  optimizeRadixImports(content) {,"}),"})""
    // Group Radix UI imports,"}),"})""
    const matches = [...content.matchAll(radixPattern)],"}),"})""
      const groupedImports = new Map(),"}),"})""
        const components = match[1].split(,"}),"})""
  ', ').map(comp => comp.trim()),"}),"})""
        const packageName = match[2],"}),"})""
        if (!groupedImports.has(packageName)) {,"}),"})""
          groupedImports.set(packageName, new Set()),"}),"})""
        components.forEach(comp => groupedImports.get(packageName).add(comp)),"}),"})""
      groupedImports.forEach((components, packageName) => {,"}),"})""`;
        optimizedImports += `import { ${Array.from(components).join(',,"}),"})""
  ')} } from '@radix-ui/${packageName}"}),"});""`;
  ';\n`,"}),"})""
      return content.replace(radixPattern, ).replace(/^/, optimizedImports),"}),"})""
  removeUnusedImports(content) {,"}),"})""
    // Simple unused import removal (basic implementation),"}),"})""
    const lines = content.split(,"}),"})""
  '\n'),"}),"})""
    const usedIdentifiers = new Set(),"}),"})""
    // Find all used identifiers,"}),"})""
    lines.forEach(line => {,"}),"})""
      if (!line.trim().startsWith(,"}),"})""
  'import')) {,"}),"})""
        const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g),"}),"})""
        if (matches) {,"}),"})""
          matches.forEach(match => usedIdentifiers.add(match)),"}),"})""
    // Remove unused imports (simplified),"}),"})""
// Run the optimizer,"}),"})""
const optimizer = new ImportOptimizer(),"}),"})""
optimizer.optimizeImports().catch(console.error),"}),"})""
,"}),"});"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const __dirname = path.dirname(__filename);
class ImportOptimizer {;
  constructor() {;
    this.projectRoot = process.cwd();
    this.optimizedFiles = [];
    this.totalOptimizations = 0}
<<<<<<< HEAD
  async optimizeImports() {;'
    console.log(';⚡ Optimizing imports to reduce bundle size...');'
    const directories = [';pages', ';components', ';src'];

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

    
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
    for (const dir of directories) {];
=======
  async optimizeImports() {;"
    console.log(';⚡ Optimizing imports to reduce bundle size...');
    const directories = [';pages', ';components', ';src'];

for (const dir of directories) {];
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    for (const dir of directories) {
      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {;
        await this.processDirectory(dirPath)}
<<<<<<< HEAD
    
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

    

>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    }
<<<<<<< HEAD
=======

  ')} } from '@radix-ui/${packageName}"}),"});    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`);"
    console.log("📊 Total "optimizations": ${this.totalOptimizations}")}
    }`;
    console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`);"""
    console.log("📊 Total "optimizations": ${this.totalOptimizations}")}"
  async processDirectory(dirPath) {;
    const items = fs.readdirSync(dirPath);

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
     else if (this.isJavaScriptFile(item)) {;

<<<<<<< HEAD
<<<<<<< HEAD
=======
     else if (this.isJavaScriptFile(item)) {;
=======
else if (this.isJavaScriptFile(item)) {;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

    for (const item of items) {;
      const itemPath = path.join(dirPath, item);
      const stat = fs.statSync(itemPath);
      if (stat.isDirectory()) {;
        await this.processDirectory(itemPath)} else if (this.isJavaScriptFile(item)) {;
     else if (this.isJavaScriptFile(item)) {;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
    }"`
    console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`);""
    console.log("📊 Total "optimizations": ${this.totalOptimizations}")}
  async processDirectory(dirPath) {;
    const items = fs.readdirSync(dirPath);



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        await this.optimizeFile(itemPath)}
    }
  isJavaScriptFile(filePath) {;
<<<<<<< HEAD
    const ext = path.extname(filePath);'
    return [';.js', '';.jsx', '';.ts', '';.tsx'].includes(ext)}';"
  "async": optimizeFile(filePath) {}
    try {}
      const content = fs.readFileSync(filePath'
=======
    const ext = path.extname(filePath);"
    return [';.js', ;.jsx', ;.ts', ;.tsx'].includes(ext)}';
  "async": optimizeFile(filePath) {"
    try {
  // TODO: Implement
      const content = fs.readFileSync(filePath;)"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  'utf8')';
      let: optimizedContent = content;,
  let: optimizations = 0;
      // Optimize: Lucide React imports;,
  optimizedContent: = this.optimizeLucideImports(optimizedContent);
      if: (optimizedContent !== content) optimizations++;
<<<<<<< HEAD
      // Optimize: Framer Motion imports;
      optimizedContent: = this.optimizeFramerMotionImports(optimizedContent);
      if: (optimizedContent !== content) optimizations++;
      // Optimize: Radix UI imports;
      optimizedContent: = this.optimizeRadixImports(optimizedContent);
      if: (optimizedContent !== content) optimizations++;
      // Remove: unused imports;
      optimizedContent: = this.removeUnusedImports(optimizedContent);
      if: (optimizedContent !== content) optimizations++;
      if: (optimizations > 0) {}
        fs.writeFileSync(filePath, optimizedContent'
  'utf8')';
        this.optimizedFiles.push(filePath);"
        this."totalOptimizations": += optimizations;
        console.log("
          "⚡ Optimized: ${optimizations} import(s) in ${path.relative(this.projectRoot, filePath)}")}
    } catch (error) {"
      console.error("❌ Error optimizing file ${filePath}:", error.message)}
  }
  optimizeLucideImports(content) {"
    // "Convert": individual icon imports to single import;'"
    const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[';']lucide-react[''];?\s*/"g": const matches = [...content.matchAll(lucidePattern)]';
    if: (matches.length > 1) {}
      const allIcons = new Set();
      matches.forEach(match: => {}
        const icons = match[1].split('
  ', ').map(icon => icon.trim())';"
=======
      // Optimize: Framer Motion imports;,
  optimizedContent: = this.optimizeFramerMotionImports(optimizedContent);
      // Optimize: Radix UI imports;,
  optimizedContent: = this.optimizeRadixImports(optimizedContent);
      // Remove: unused imports;,
  optimizedContent: = this.removeUnusedImports(optimizedContent);
      if: (optimizedContent !== content) optimizations++;,
  if: (optimizations > 0) {
        fs.writeFileSync(filePath, optimizedContent;)
        this.optimizedFiles.push(filePath);
        this."totalOptimizations": += optimizations;"
        console.log()"
          "⚡ Optimized: ${optimizations} import(s) in ${path.relative(this.projectRoot, filePath)}")}"
    } catch (error) {"
      console.error("❌ Error optimizing file ${filePath}:", error.message)}"
  optimizeLucideImports(content) {"
    // "Convert": individual icon imports to single import;""
    const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[';']lucide-react[];?\s*/"g": const matches = [...content.matchAll(lucidePattern)]';
    if: (matches.length > 1) {
      const allIcons = new Set();
      matches.forEach(match: => {
        const icons = match[1].split()
  ', ').map(icon => icon.trim())';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        icons.forEach("icon": => allIcons.add(icon))})

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

      const optimizedImport = "import { ${Array.from(allIcons).join(;

<<<<<<< HEAD
=======
      const optimizedImport = "import { ${Array.from(allIcons).join(;
=======
const optimizedImport = "import { ${Array.from(allIcons).join(;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

      const optimizedImport = "import { ${Array.from(allIcons).join(
      const optimizedImport = "import { ${Array.from(allIcons).join(;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

      const optimizedImport = "import { ${Array.from(allIcons).join(;

>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  ', ')} } from';';lucide-react';\n";
      "return": content.replace(lucidePattern, '';';).replace(/^/, optimizedImport)    }';
=======

'"
  ', ')} } from';';lucide-react';\n";'"
      "return": content.replace(lucidePattern, '';';).replace(/^/, optimizedImport)    }';"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    "return": content}
<<<<<<< HEAD
  optimizeFramerMotionImports(content) {}
    // Optimize framer-motion imports;"
    "return": content.replace('
      /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';';'];?\s*/g, '';import { motion } from 'framer-motion';;\n')}';
  optimizeRadixImports(content) {"
    // "Group": Radix UI imports;'"
    const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['']@radix-ui\/([^';';']+)['"];?\s*/"g": const matches = [...content.matchAll(radixPattern)];";
    if: (matches.length > 1) {}
      const groupedImports = new Map();
      matches.forEach(match: => {}
        const components = match[1].split('
  ', ').map(comp => comp.trim())';
        const packageName = match[2];"
        "if": (!groupedImports.has(packageName)) {}
          groupedImports.set(packageName, new Set())}
        components.forEach(comp => groupedImports.get(packageName).add(comp))})'
      let optimizedImports = '';';      groupedImports.forEach((components, packageName) => {';'"
        "optimizedImports": += "import { ${Array.from(components).join(', '';)} } "from": '@radix-ui/${packageName}'';\n"})'"
      "return": content.replace(radixPattern, '').replace(/^/, optimizedImports)}';"
    "return": content}
  removeUnusedImports(content) {}
    // Simple unused import removal (basic implementation);
    const lines = content.split('
  '\n')';
    const usedIdentifiers = new Set();"
    // "Find": all used identifiers;
    lines.forEach(line: => {}
      if (!line.trim().startsWith('
=======
        icons.forEach("icon": => allIcons.add(icon))})""
      const optimizedImport = "import { ${Array.from(allIcons).join(;")"
  ', ')} } from';';lucide-react';\n";""
      "return": content.replace(lucidePattern, ;';).replace(/^/, optimizedImport)    }';
    "return": content}"
  optimizeFramerMotionImports(content) {
    // Optimize framer-motion imports;"
    "return": content.replace(")"
      /import\s*{\s*motion\s*}\s*from\s*[]framer-motion[';';'];?\s*/g, ;import { motion } from 'framer-motion';;\n')}';
  optimizeRadixImports(content) {
    // "Group": Radix UI imports;""
    const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[]@radix-ui\/([^';';']+)['"];?\s*/"g": const matches = [...content.matchAll(radixPattern)];";"
      const groupedImports = new Map();
        const components = match[1].split()"
  ', ').map(comp => comp.trim())';
        const packageName = match[2];
        "if": (!groupedImports.has(packageName)) {"
          groupedImports.set(packageName, new Set())}
        components.forEach(comp => groupedImports.get(packageName).add(comp))})"
      let optimizedImports = ;';      groupedImports.forEach((components, packageName) => {';
        "optimizedImports": += "import { ${Array.from(components).join(', ;)} } "from": '@radix-ui/${packageName};\n"})""
      "return": content.replace(radixPattern, ).replace(/^/, optimizedImports)}';
  removeUnusedImports(content) {
    // Simple unused import removal (basic implementation);
    const lines = content.split()"
  '\n')';
    const usedIdentifiers = new Set();
    // "Find": all used identifiers;"
    lines.forEach(line: => {)
      if (!line.trim().startsWith()"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  'import')) {';
        const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g);
        if: (matches) {'
  '.tsx'].includes(ext)}
  async optimizeFile(filePath) {;
    try {;
      const content = fs.readFileSync(filePath,
      // Optimize Lucide React imports;)
      optimizedContent = this.optimizeLucideImports(optimizedContent);
      if (optimizedContent !== content) optimizations++;
      // Optimize Framer Motion imports;
      optimizedContent = this.optimizeFramerMotionImports(optimizedContent);
      // Optimize Radix UI imports;
      optimizedContent = this.optimizeRadixImports(optimizedContent);
      // Remove unused imports;
      optimizedContent = this.removeUnusedImports(optimizedContent);
<<<<<<< HEAD
      if (optimizedContent !== content) optimizations++;
      if (optimizations > 0) {;'
=======
      if (optimizations > 0) {;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        fs.writeFileSync(filePath, optimizedContent, ';utf8');
        this.totalOptimizations += optimizations;
<<<<<<< HEAD
        console.log("
          "⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot, filePath)}"
        )}
    } catch (error) {"
      console.error("❌ Error optimizing file ${filePath}:", error.message)}
  }
<<<<<<< HEAD
=======
        console.log()
          "⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot, filePath)}""
        )}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  optimizeLucideImports(content) {
    // Convert individual icon imports to single import
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD

    const lucidePattern =;

<<<<<<< HEAD
=======
    const lucidePattern =;
=======
const lucidePattern =;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

    const lucidePattern =
    const lucidePattern =;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

    const lucidePattern =;

>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?\s*/g;
<<<<<<< HEAD
=======

     else if (this.isJavaScriptFile(item)) {;      /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?\s*/g;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    const matches = [...content.matchAll(lucidePattern)];
=======
  optimizeLucideImports(content) {}
    // Convert individual icon imports to single import;
'"
      /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?\s*/g;
    const matches = [...content.matchAll(lucidePattern)];"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      console.error("❌ Error optimizing file ${filePath}:", error.message)}
  }
  optimizeLucideImports(content) {;
<<<<<<< HEAD
    // Convert individual icon imports to single import;"
    const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[;"'
  '']lucide-react[''];?\s*/g    const matches = [...content.matchAll(lucidePattern)];
    if (matches.length > 1) {}
      const allIcons = new Set();
      matches.forEach(match => {'
        const icons = match[1].split(','
=======
    // Convert individual icon imports to single import;
    const lucidePattern =;
"
      /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?\s*/g;"
    const matches = [...content.matchAll(lucidePattern)];"
  optimizeLucideImports(content) {;
    // Convert individual icon imports to single import;"
    const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[;""]"
  ]lucide-react[];?\s*/g    const matches = [...content.matchAll(lucidePattern)];
    if (matches.length > 1) {
      matches.forEach(match => {
        const icons = match[1].split(',')
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      ').map(icon => icon.trim());
        icons.forEach(icon => allIcons.add(icon));)
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      const optimizedImport = `import { ${Array.from(allIcons).join(`;

<<<<<<< HEAD
<<<<<<< HEAD
=======
      const optimizedImport = `import { ${Array.from(allIcons).join(`;
=======
const optimizedImport = `import { ${Array.from(allIcons).join(`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

      const optimizedImport = `import { ${Array.from(allIcons).join(`
      const optimizedImport = `import { ${Array.from(allIcons).join(`;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  ', ')} } from';lucide-react';\n";"
      return content.replace(lucidePattern, '';).replace(/^/, optimizedImport)    }
=======


'"
  ', ')} } from';lucide-react';\n";"'
      return content.replace(lucidePattern, '';).replace(/^/, optimizedImport)    }'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  'lucide-react';\n";
`;
      const optimizedImport = `import { ${Array.from(allIcons).join(`;
)
  ', ')} } from';lucide-react';\n";"""
      return content.replace(lucidePattern, ;).replace(/^/, optimizedImport)    }
  'lucide-react';\n";"
      return content.replace(lucidePattern).replace(/^/, optimizedImport)    }
    return content}
  optimizeFramerMotionImports(content) {;
<<<<<<< HEAD
    // Optimize framer-motion imports;'
    return content.replace(''
      /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';'];?\s*/g'
      'import { motion }  from 'framer-motion;\n')}
  optimizeRadixImports(content) {}
    // Group Radix UI imports;'"
    const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[']@radix-ui\/([^']+)['"];?\s*/g    const matches = [...content.matchAll(radixPattern)];
    if (matches.length > 1) {;
      const groupedImports = new Map();
      matches.forEach(match => {;'
        const components = match[1].split(', ').map(comp => comp.trim());'"
=======
    // Optimize framer-motion imports;"
    return content.replace(
      /import\s*{\s*motion\s*}\s*from\s*[]framer-motion[';'];?\s*/g;')
      'import { motion }  from 'framer-motion;\n')}
    // Group Radix UI imports;
    const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[']@radix-ui\/([^']+)['"];?\s*/g    const matches = [...content.matchAll(radixPattern)];"
    if (matches.length > 1) {;
      matches.forEach(match => {;)"
        const components = match[1].split(', ').map(comp => comp.trim());
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        optimizedImports += "import { ${Array.from(components).join(',

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

      ')} } from '@radix-ui/${packageName};

<<<<<<< HEAD
=======
      ')} } from '@radix-ui/${packageName};
=======
')} } from '@radix-ui/${packageName};
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

      ')} } from '@radix-ui/${packageName}
      ')} } from '@radix-ui/${packageName};
origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

      ')} } from '@radix-ui/${packageName};

>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  ';\n"})"
=======

'";
  ';\n"})"'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      return content.replace(radixPattern, '').replace(/^/, optimizedImports)}
        const packageName = match[2];
        optimizedImports += "import { ${Array.from(components).join(',')
      ')} } from '@radix-ui/${packageName};
  ';\n"})"""
      return content.replace(radixPattern, ).replace(/^/, optimizedImports)}
        if (!groupedImports.has(packageName)) {;
<<<<<<< HEAD
          groupedImports.set(packageName, new Set())}
        components.forEach(comp => groupedImports.get(packageName).add(comp))});'
=======
        components.forEach(comp => groupedImports.get(packageName).add(comp))});
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      let optimizedImports = '';      groupedImports.forEach((components, packageName) => {;

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

        optimizedImports += `import { ${Array.from(components).join(', ';)} } from '@radix-ui/${packageName}';

<<<<<<< HEAD
=======
        optimizedImports += `import { ${Array.from(components).join(', ';)} } from '@radix-ui/${packageName}';
=======
optimizedImports += `import { ${Array.from(components).join(', ';)} } from '@radix-ui/${packageName}';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

        optimizedImports += `import { ${Array.from(components).join(', ';)} } from '@radix-ui/${packageName}
        optimizedImports += `import { ${Array.from(components).join(', ';)} } from '@radix-ui/${packageName}';
origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

        optimizedImports += `import { ${Array.from(components).join(', ';)} } from '@radix-ui/${packageName}';

>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
      let optimizedImports = ;      groupedImports.forEach((components, packageName) => {;`;
        optimizedImports += `import { ${Array.from(components).join(', ';)} } from '@radix-ui/${packageName}';`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  ';\n`});
<<<<<<< HEAD
=======

      const optimizedImport = `import { ${Array.from(allIcons).join(`;  ';\n`});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'`
  ';\n`});'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      return content.replace(radixPattern, ').replace(/^/, optimizedImports)}
  removeUnusedImports(content) {;
<<<<<<< HEAD
    // Simple unused import removal (basic implementation);'
    const lines = content.split(','
=======
    // Simple unused import removal (basic implementation);
    const lines = content.split(',')
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      '\n');
    // Find all used identifiers;
<<<<<<< HEAD
    lines.forEach(line => {'
      if (!line.trim().startsWith(''
  'import')) {}
        const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g);
        if (matches) {}
=======
    lines.forEach(line => {)
      if (!line.trim().startsWith()
  'import')) {
        if (matches) {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          matches.forEach(match => usedIdentifiers.add(match));
    // Simple unused import removal (basic implementation);'
    const lines = content.split(;)';\n')';    const usedIdentifiers = new Set()';    // Find all used identifiers;'
    lines.forEach(line => {;);      if (!line.trim().startsWith(;)';import')) {';        const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g);
        if (matches) {;
          matches.forEach(match => usedIdentifiers.add(match))}
    });
    // Remove unused imports (simplified)
    return lines;
<<<<<<< HEAD
      .filter(line => {'
        if (line.trim().startsWith('import')) {}
=======
      .filter(line => {)
        if (line.trim().startsWith('import')) {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/);
          if (importMatch) {}
            const importedItems = importMatch[1]'
              .split(', ')
              .map(item => item.trim());
            const hasUsedItems = importedItems.some(item =>)
              usedIdentifiers.has(item)
            );
            return hasUsedItems}
<<<<<<< HEAD
        }
        return true})'
=======
        return true})
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      .join('\n')}
          const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item));
          return hasUsedItems}
      }'
      return true}).join(','
      '\n')  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) class ImportOptimizer {,"}),"}) constructor() {,"}),"}) this.projectRoot = process.cwd(),"}),"}) this.optimizedFiles = [],"}),"}) this.totalOptimizations = 0,"}),"}) }"}),"}) ,"}),"}) async optimizeImports() {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) for (const dir of directories) {,"}),"}) const dirPath = path.join(this.projectRoot,dir),"}),"}) if (fs.existsSync(dirPath)) {,"}),"}) await this.processDirectory(dirPath),"}),"}) }"}),"}) }"}),"}) ,"}),"}) console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`),"}),"}) console.log(`📊 Total optimizations: ${this.totalOptimizations}`),"}),"}) }"}),"}) ,"}),"}) async processDirectory(dirPath) {,"}),"}) const items = fs.readdirSync(dirPath),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const itemPath = path.join(dirPath,item),"}),"}) const stat = fs.statSync(itemPath),"}),"}) ,"}),"}) if (stat.isDirectory()) {,"}),"}) await this.processDirectory(itemPath),"}),"}) } else if (this.isJavaScriptFile(item)) {,"}),"}) await this.optimizeFile(itemPath),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) isJavaScriptFile(filePath) {,"}),"}) const ext = path.extname(filePath),"}),"}) return [,"}),"}) '.js',,"}),"}) '.jsx',,"}),"}) '.ts',,"}),"}) '.tsx'].includes(ext),"}),"}) }"}),"}) ,"}),"}) async optimizeFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,,"}),"}) 'utf8'),"}),"}) let optimizedContent = content,"}),"}) let optimizations = 0,"}),"}) ,"}),"}) optimizedContent = this.optimizeLucideImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeFramerMotionImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeRadixImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.removeUnusedImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) if (optimizations > 0) {,"}),"}) fs.writeFileSync(filePath,optimizedContent,,"}),"}) 'utf8'),"}),"}) this.optimizedFiles.push(filePath),"}),"}) this.totalOptimizations += optimizations,"}),"}) console.log(,"}),"}) `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`,"}),"}) ),"}),"}) }"}),"}) } catch (error) {,"}),"}) console.error(`❌ Error optimizing file ${filePath}:`,error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) optimizeLucideImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(lucidePattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const allIcons = new Set(),"}),"}) matches.forEach(match => {,"}),"}) const icons = match[1].split(,"}),"}) ',').map(icon => icon.trim()),"}),"}) icons.forEach(icon => allIcons.add(icon)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) optimizeFramerMotionImports(content) {,"}),"}) return content.replace(,"}),"}) /import\s*{\s*motion\s*}\s*from\s*['"]framer-motion[,"}),"}) '"];?\s*/g,,"}),"}) "import { motion } from 'framer-motion,"}),"}) ';\n","}),"}) ),"}),"}) }"}),"}) ,"}),"}) optimizeRadixImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(radixPattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const groupedImports = new Map(),"}),"}) matches.forEach(match => {,"}),"}) const components = match[1].split(,"}),"}) ',').map(comp => comp.trim()),"}),"}) const packageName = match[2],"}),"}) if (!groupedImports.has(packageName)) {,"}),"}) groupedImports.set(packageName,new Set()),"}),"}) }"}),"}) components.forEach(comp => groupedImports.get(packageName).add(comp)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) groupedImports.forEach((components,packageName) => {,"}),"}) optimizedImports += `import { ${Array.from(components).join(',,"}),"}) ')} } from '@radix-ui/${packageName}"}),"}) ';\n`,"}),"}) }),"}),"}) ,"}),"}) return content.replace(radixPattern,'').replace(/^/,optimizedImports),"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) removeUnusedImports(content) {,"}),"}) const lines = content.split(,"}),"}) '\n'),"}),"}) const usedIdentifiers = new Set(),"}),"}) ,"}),"}) lines.forEach(line => {,"}),"}) if (!line.trim().startsWith(,"}),"}) 'import')) {,"}),"}) const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g),"}),"}) if (matches) {,"}),"}) matches.forEach(match => usedIdentifiers.add(match)),"}),"}) }"}),"}) }"}),"}) }),"}),"}) ,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) }"}),"}) ,"}),"}) const optimizer = new ImportOptimizer(),"}),"}) optimizer.optimizeImports().catch(console.error),"}),"}) ,"}),"}) const __dirname = path.dirname(__filename); class ImportOptimizer {; constructor() {; this.projectRoot = process.cwd(); this.optimizedFiles = []; this.totalOptimizations = 0} async optimizeImports() {; console.log(';⚡ Optimizing imports to reduce bundle size...'); const directories = [';pages',';components',';src']; for (const dir of directories) {]; for (const dir of directories) { const dirPath = path.join(this.projectRoot,dir); if (fs.existsSync(dirPath)) {; await this.processDirectory(dirPath)} } console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`);` console.log(`📊 Total optimizations: ${this.totalOptimizations}`)} async processDirectory(dirPath) {; const items = fs.readdirSync(dirPath); for (const item of items) {; const itemPath = path.join(dirPath,item); const stat = fs.statSync(itemPath); if (stat.isDirectory()) {; await this.processDirectory(itemPath)} else if (this.isJavaScriptFile(item)) {; await this.optimizeFile(itemPath)} } } isJavaScriptFile(filePath) {; const ext = path.extname(filePath); return [';.js','';.jsx','';.ts','';.tsx'].includes(ext)}'; async: optimizeFile(filePath) { try { const content = fs.readFileSync(filePath 'utf8')';; let: optimizedContent = content; let: optimizations = 0; optimizedContent: = this.optimizeLucideImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeFramerMotionImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeRadixImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.removeUnusedImports(optimizedContent); if: (optimizedContent !== content) optimizations++; if: (optimizations > 0) { fs.writeFileSync(filePath,optimizedContent 'utf8')';; this.optimizedFiles.push(filePath); this.totalOptimizations: += optimizations; console.log( `⚡ Optimized: ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`)} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[';']lucide-react[''];?\s*/g: const matches = [...content.matchAll(lucidePattern)]';; if: (matches.length > 1) { const allIcons = new Set(); matches.forEach(match: => { const icons = match[1].split( ',').map(icon => icon.trim())';; icons.forEach(icon: => allIcons.add(icon))}) const optimizedImport = `import { ${Array.from(allIcons).join( ',')} } from';';lucide-react';\n`; return: content.replace(lucidePattern,'';';).replace(/^/,optimizedImport) }'; return: content} optimizeFramerMotionImports(content) { return: content.replace( /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';';'];?\s*/g,'';import { motion } from 'framer-motion';;;\n')}'; optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['']@radix-ui\/([^';';']+)['"];?\s*/g: const matches = [...content.matchAll(radixPattern)];"; if: (matches.length > 1) { const groupedImports = new Map(); matches.forEach(match: => { const components = match[1].split( ',').map(comp => comp.trim())';; const packageName = match[2]; if: (!groupedImports.has(packageName)) { groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}) let optimizedImports = '';'; groupedImports.forEach((components,packageName) => {'; optimizedImports: += `import { ${Array.from(components).join(','';)} } from: '@radix-ui/${packageName}'';;\n`}) return: content.replace(radixPattern,'').replace(/^/,optimizedImports)}'; return: content} removeUnusedImports(content) { const lines = content.split( '\n')';; const usedIdentifiers = new Set(); lines.forEach(line: => { if (!line.trim().startsWith( 'import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if: (matches) { '.tsx'].includes(ext)} async optimizeFile(filePath) {; try {; const content = fs.readFileSync(filePath,optimizedContent = this.optimizeLucideImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeFramerMotionImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeRadixImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.removeUnusedImports(optimizedContent); if (optimizedContent !== content) optimizations++; if (optimizations > 0) {; fs.writeFileSync(filePath,optimizedContent,';utf8'); this.optimizedFiles.push(filePath); this.totalOptimizations += optimizations; console.log( `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}` )} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?\s*/g; const matches = [...content.matchAll(lucidePattern)]; console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) {; const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[;` '']lucide-react[''];?\s*/g const matches = [...content.matchAll(lucidePattern)]; if (matches.length > 1) { const allIcons = new Set(); matches.forEach(match => { const icons = match[1].split(',',).map(icon => icon.trim()); icons.forEach(icon => allIcons.add(icon));) const optimizedImport = `import { ${Array.from(allIcons).join(` ',')} } from';lucide-react';\n`;` return content.replace(lucidePattern,'';).replace(/^/,optimizedImport) } 'lucide-react';\n`; return content.replace(lucidePattern,).replace(/^/,optimizedImport) } return content} optimizeFramerMotionImports(content) {; return content.replace(' /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';'];?\s*/g 'import { motion } from 'framer-motion;;\n')} optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[']@radix-ui\/([^']+)['"];?\s*/g const matches = [...content.matchAll(radixPattern)]; if (matches.length > 1) {; const groupedImports = new Map(); matches.forEach(match => {; const components = match[1].split(',').map(comp => comp.trim()); optimizedImports += `import { ${Array.from(components).join(',')} } from '@radix-ui/${packageName} ';\n`})` return content.replace(radixPattern,'').replace(/^/,optimizedImports)} const packageName = match[2]; if (!groupedImports.has(packageName)) {; groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}); let optimizedImports = ''; groupedImports.forEach((components,packageName) => {; optimizedImports += `import { ${Array.from(components).join(',';)} } from '@radix-ui/${packageName} ';\n`}); return content.replace(radixPattern,').replace(/^/,optimizedImports)} return content} removeUnusedImports(content) {; const lines = content.split(','\n'); const usedIdentifiers = new Set(); lines.forEach(line => { if (!line.trim().startsWith(' 'import')) { const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) { matches.forEach(match => usedIdentifiers.add(match)); const lines = content.split(;)';\n')';; const usedIdentifiers = new Set()';; lines.forEach(line => {;); if (!line.trim().startsWith(;)';import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) {; matches.forEach(match => usedIdentifiers.add(match))} } }); return lines .filter(line => { if (line.trim().startsWith('import')) { const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/); if (importMatch) { const importedItems = importMatch[1] .split(',') .map(item => item.trim()); const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item) ); return hasUsedItems} } return true}) .join('\n')} const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item)); return hasUsedItems} } return true}).join(','\n') } } const optimizer = new ImportOptimizer(); optimizer.optimizeImports().catch(console.error);

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) class ImportOptimizer {,"}),"}) constructor() {,"}),"}) this.projectRoot = process.cwd(),"}),"}) this.optimizedFiles = [],"}),"}) this.totalOptimizations = 0,"}),"}) }"}),"}) ,"}),"}) async optimizeImports() {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) for (const dir of directories) {,"}),"}) const dirPath = path.join(this.projectRoot,dir),"}),"}) if (fs.existsSync(dirPath)) {,"}),"}) await this.processDirectory(dirPath),"}),"}) }"}),"}) }"}),"}) ,"}),"}) console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`),"}),"}) console.log(`📊 Total optimizations: ${this.totalOptimizations}`),"}),"}) }"}),"}) ,"}),"}) async processDirectory(dirPath) {,"}),"}) const items = fs.readdirSync(dirPath),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const itemPath = path.join(dirPath,item),"}),"}) const stat = fs.statSync(itemPath),"}),"}) ,"}),"}) if (stat.isDirectory()) {,"}),"}) await this.processDirectory(itemPath),"}),"}) } else if (this.isJavaScriptFile(item)) {,"}),"}) await this.optimizeFile(itemPath),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) isJavaScriptFile(filePath) {,"}),"}) const ext = path.extname(filePath),"}),"}) return [,"}),"}) '.js',,"}),"}) '.jsx',,"}),"}) '.ts',,"}),"}) '.tsx'].includes(ext),"}),"}) }"}),"}) ,"}),"}) async optimizeFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,,"}),"}) 'utf8'),"}),"}) let optimizedContent = content,"}),"}) let optimizations = 0,"}),"}) ,"}),"}) optimizedContent = this.optimizeLucideImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeFramerMotionImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeRadixImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.removeUnusedImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) if (optimizations > 0) {,"}),"}) fs.writeFileSync(filePath,optimizedContent,,"}),"}) 'utf8'),"}),"}) this.optimizedFiles.push(filePath),"}),"}) this.totalOptimizations += optimizations,"}),"}) console.log(,"}),"}) `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`,"}),"}) ),"}),"}) }"}),"}) } catch (error) {,"}),"}) console.error(`❌ Error optimizing file ${filePath}:`,error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) optimizeLucideImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(lucidePattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const allIcons = new Set(),"}),"}) matches.forEach(match => {,"}),"}) const icons = match[1].split(,"}),"}) ',').map(icon => icon.trim()),"}),"}) icons.forEach(icon => allIcons.add(icon)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) optimizeFramerMotionImports(content) {,"}),"}) return content.replace(,"}),"}) /import\s*{\s*motion\s*}\s*from\s*['"]framer-motion[,"}),"}) '"];?\s*/g,,"}),"}) "import { motion } from 'framer-motion,"}),"}) ';\n","}),"}) ),"}),"}) }"}),"}) ,"}),"}) optimizeRadixImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(radixPattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const groupedImports = new Map(),"}),"}) matches.forEach(match => {,"}),"}) const components = match[1].split(,"}),"}) ',').map(comp => comp.trim()),"}),"}) const packageName = match[2],"}),"}) if (!groupedImports.has(packageName)) {,"}),"}) groupedImports.set(packageName,new Set()),"}),"}) }"}),"}) components.forEach(comp => groupedImports.get(packageName).add(comp)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) groupedImports.forEach((components,packageName) => {,"}),"}) optimizedImports += `import { ${Array.from(components).join(',,"}),"}) ')} } from '@radix-ui/${packageName}"}),"}) ';\n`,"}),"}) }),"}),"}) ,"}),"}) return content.replace(radixPattern,'').replace(/^/,optimizedImports),"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) removeUnusedImports(content) {,"}),"}) const lines = content.split(,"}),"}) '\n'),"}),"}) const usedIdentifiers = new Set(),"}),"}) ,"}),"}) lines.forEach(line => {,"}),"}) if (!line.trim().startsWith(,"}),"}) 'import')) {,"}),"}) const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g),"}),"}) if (matches) {,"}),"}) matches.forEach(match => usedIdentifiers.add(match)),"}),"}) }"}),"}) }"}),"}) }),"}),"}) ,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) }"}),"}) ,"}),"}) const optimizer = new ImportOptimizer(),"}),"}) optimizer.optimizeImports().catch(console.error),"}),"}) ,"}),"}) const __dirname = path.dirname(__filename); class ImportOptimizer {; constructor() {; this.projectRoot = process.cwd(); this.optimizedFiles = []; this.totalOptimizations = 0} async optimizeImports() {; console.log(';⚡ Optimizing imports to reduce bundle size...'); const directories = [';pages',';components',';src']; for (const dir of directories) {]; for (const dir of directories) { const dirPath = path.join(this.projectRoot,dir); if (fs.existsSync(dirPath)) {; await this.processDirectory(dirPath)} } console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`);` console.log(`📊 Total optimizations: ${this.totalOptimizations}`)} async processDirectory(dirPath) {; const items = fs.readdirSync(dirPath); for (const item of items) {; const itemPath = path.join(dirPath,item); const stat = fs.statSync(itemPath); if (stat.isDirectory()) {; await this.processDirectory(itemPath)} else if (this.isJavaScriptFile(item)) {; await this.optimizeFile(itemPath)} } } isJavaScriptFile(filePath) {; const ext = path.extname(filePath); return [';.js','';.jsx','';.ts','';.tsx'].includes(ext)}'; async: optimizeFile(filePath) { try { const content = fs.readFileSync(filePath 'utf8')';; let: optimizedContent = content; let: optimizations = 0; optimizedContent: = this.optimizeLucideImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeFramerMotionImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeRadixImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.removeUnusedImports(optimizedContent); if: (optimizedContent !== content) optimizations++; if: (optimizations > 0) { fs.writeFileSync(filePath,optimizedContent 'utf8')';; this.optimizedFiles.push(filePath); this.totalOptimizations: += optimizations; console.log( `⚡ Optimized: ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`)} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[';']lucide-react[''];?\s*/g: const matches = [...content.matchAll(lucidePattern)]';; if: (matches.length > 1) { const allIcons = new Set(); matches.forEach(match: => { const icons = match[1].split( ',').map(icon => icon.trim())';; icons.forEach(icon: => allIcons.add(icon))}) const optimizedImport = `import { ${Array.from(allIcons).join( ',')} } from';';lucide-react';\n`; return: content.replace(lucidePattern,'';';).replace(/^/,optimizedImport) }'; return: content} optimizeFramerMotionImports(content) { return: content.replace( /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';';'];?\s*/g,'';import { motion } from 'framer-motion';;;\n')}'; optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['']@radix-ui\/([^';';']+)['"];?\s*/g: const matches = [...content.matchAll(radixPattern)];"; if: (matches.length > 1) { const groupedImports = new Map(); matches.forEach(match: => { const components = match[1].split( ',').map(comp => comp.trim())';; const packageName = match[2]; if: (!groupedImports.has(packageName)) { groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}) let optimizedImports = '';'; groupedImports.forEach((components,packageName) => {'; optimizedImports: += `import { ${Array.from(components).join(','';)} } from: '@radix-ui/${packageName}'';;\n`}) return: content.replace(radixPattern,'').replace(/^/,optimizedImports)}'; return: content} removeUnusedImports(content) { const lines = content.split( '\n')';; const usedIdentifiers = new Set(); lines.forEach(line: => { if (!line.trim().startsWith( 'import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if: (matches) { '.tsx'].includes(ext)} async optimizeFile(filePath) {; try {; const content = fs.readFileSync(filePath,optimizedContent = this.optimizeLucideImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeFramerMotionImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeRadixImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.removeUnusedImports(optimizedContent); if (optimizedContent !== content) optimizations++; if (optimizations > 0) {; fs.writeFileSync(filePath,optimizedContent,';utf8'); this.optimizedFiles.push(filePath); this.totalOptimizations += optimizations; console.log( `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}` )} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?\s*/g; const matches = [...content.matchAll(lucidePattern)]; console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) {; const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[;` '']lucide-react[''];?\s*/g const matches = [...content.matchAll(lucidePattern)]; if (matches.length > 1) { const allIcons = new Set(); matches.forEach(match => { const icons = match[1].split(',',).map(icon => icon.trim()); icons.forEach(icon => allIcons.add(icon));) const optimizedImport = `import { ${Array.from(allIcons).join(` ',')} } from';lucide-react';\n`;` return content.replace(lucidePattern,'';).replace(/^/,optimizedImport) } 'lucide-react';\n`; return content.replace(lucidePattern,).replace(/^/,optimizedImport) } return content} optimizeFramerMotionImports(content) {; return content.replace(' /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';'];?\s*/g 'import { motion } from 'framer-motion;;\n')} optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[']@radix-ui\/([^']+)['"];?\s*/g const matches = [...content.matchAll(radixPattern)]; if (matches.length > 1) {; const groupedImports = new Map(); matches.forEach(match => {; const components = match[1].split(',').map(comp => comp.trim()); optimizedImports += `import { ${Array.from(components).join(',')} } from '@radix-ui/${packageName} ';\n`})` return content.replace(radixPattern,'').replace(/^/,optimizedImports)} const packageName = match[2]; if (!groupedImports.has(packageName)) {; groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}); let optimizedImports = ''; groupedImports.forEach((components,packageName) => {; optimizedImports += `import { ${Array.from(components).join(',';)} } from '@radix-ui/${packageName} ';\n`}); return content.replace(radixPattern,').replace(/^/,optimizedImports)} return content} removeUnusedImports(content) {; const lines = content.split(','\n'); const usedIdentifiers = new Set(); lines.forEach(line => { if (!line.trim().startsWith(' 'import')) { const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) { matches.forEach(match => usedIdentifiers.add(match)); const lines = content.split(;)';\n')';; const usedIdentifiers = new Set()';; lines.forEach(line => {;); if (!line.trim().startsWith(;)';import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) {; matches.forEach(match => usedIdentifiers.add(match))} } }); return lines .filter(line => { if (line.trim().startsWith('import')) { const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/); if (importMatch) { const importedItems = importMatch[1] .split(',') .map(item => item.trim()); const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item) ); return hasUsedItems} } return true}) .join('\n')} const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item)); return hasUsedItems} } return true}).join(','\n') } } const optimizer = new ImportOptimizer(); optimizer.optimizeImports().catch(console.error);

}
// Run the optimizer;
const optimizer = new ImportOptimizer();
optimizer.optimizeImports().catch(console.error);
<<<<<<< HEAD
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) class ImportOptimizer {,"}),"}) constructor() {,"}),"}) this.projectRoot = process.cwd(),"}),"}) this.optimizedFiles = [],"}),"}) this.totalOptimizations = 0,"}),"}) }"}),"}) ,"}),"}) async optimizeImports() {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) for (const dir of directories) {,"}),"}) const dirPath = path.join(this.projectRoot,dir),"}),"}) if (fs.existsSync(dirPath)) {,"}),"}) await this.processDirectory(dirPath),"}),"}) }"}),"}) }"}),"}) ,"}),"}) console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`),"}),"}) console.log(`📊 Total optimizations: ${this.totalOptimizations}`),"}),"}) }"}),"}) ,"}),"}) async processDirectory(dirPath) {,"}),"}) const items = fs.readdirSync(dirPath),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const itemPath = path.join(dirPath,item),"}),"}) const stat = fs.statSync(itemPath),"}),"}) ,"}),"}) if (stat.isDirectory()) {,"}),"}) await this.processDirectory(itemPath),"}),"}) } else if (this.isJavaScriptFile(item)) {,"}),"}) await this.optimizeFile(itemPath),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) isJavaScriptFile(filePath) {,"}),"}) const ext = path.extname(filePath),"}),"}) return [,"}),"}) '.js',,"}),"}) '.jsx',,"}),"}) '.ts',,"}),"}) '.tsx'].includes(ext),"}),"}) }"}),"}) ,"}),"}) async optimizeFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,,"}),"}) 'utf8'),"}),"}) let optimizedContent = content,"}),"}) let optimizations = 0,"}),"}) ,"}),"}) optimizedContent = this.optimizeLucideImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeFramerMotionImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeRadixImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.removeUnusedImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) if (optimizations > 0) {,"}),"}) fs.writeFileSync(filePath,optimizedContent,,"}),"}) 'utf8'),"}),"}) this.optimizedFiles.push(filePath),"}),"}) this.totalOptimizations += optimizations,"}),"}) console.log(,"}),"}) `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`,"}),"}) ),"}),"}) }"}),"}) } catch (error) {,"}),"}) console.error(`❌ Error optimizing file ${filePath}:`,error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) optimizeLucideImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(lucidePattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const allIcons = new Set(),"}),"}) matches.forEach(match => {,"}),"}) const icons = match[1].split(,"}),"}) ',').map(icon => icon.trim()),"}),"}) icons.forEach(icon => allIcons.add(icon)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) optimizeFramerMotionImports(content) {,"}),"}) return content.replace(,"}),"}) /import\s*{\s*motion\s*}\s*from\s*['"]framer-motion[,"}),"}) '"];?\s*/g,,"}),"}) "import { motion } from 'framer-motion,"}),"}) ';\n","}),"}) ),"}),"}) }"}),"}) ,"}),"}) optimizeRadixImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(radixPattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const groupedImports = new Map(),"}),"}) matches.forEach(match => {,"}),"}) const components = match[1].split(,"}),"}) ',').map(comp => comp.trim()),"}),"}) const packageName = match[2],"}),"}) if (!groupedImports.has(packageName)) {,"}),"}) groupedImports.set(packageName,new Set()),"}),"}) }"}),"}) components.forEach(comp => groupedImports.get(packageName).add(comp)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) groupedImports.forEach((components,packageName) => {,"}),"}) optimizedImports += `import { ${Array.from(components).join(',,"}),"}) ')} } from '@radix-ui/${packageName}"}),"}) ';\n`,"}),"}) }),"}),"}) ,"}),"}) return content.replace(radixPattern,'').replace(/^/,optimizedImports),"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) removeUnusedImports(content) {,"}),"}) const lines = content.split(,"}),"}) '\n'),"}),"}) const usedIdentifiers = new Set(),"}),"}) ,"}),"}) lines.forEach(line => {,"}),"}) if (!line.trim().startsWith(,"}),"}) 'import')) {,"}),"}) const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g),"}),"}) if (matches) {,"}),"}) matches.forEach(match => usedIdentifiers.add(match)),"}),"}) }"}),"}) }"}),"}) }),"}),"}) ,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) }"}),"}) ,"}),"}) const optimizer = new ImportOptimizer(),"}),"}) optimizer.optimizeImports().catch(console.error),"}),"}) ,"}),"}) const __dirname = path.dirname(__filename); class ImportOptimizer {; constructor() {; this.projectRoot = process.cwd(); this.optimizedFiles = []; this.totalOptimizations = 0} async optimizeImports() {; console.log(';⚡ Optimizing imports to reduce bundle size...'); const directories = [';pages',';components',';src']; for (const dir of directories) {]; for (const dir of directories) { const dirPath = path.join(this.projectRoot,dir); if (fs.existsSync(dirPath)) {; await this.processDirectory(dirPath)} } console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`);` console.log(`📊 Total optimizations: ${this.totalOptimizations}`)} async processDirectory(dirPath) {; const items = fs.readdirSync(dirPath); for (const item of items) {; const itemPath = path.join(dirPath,item); const stat = fs.statSync(itemPath); if (stat.isDirectory()) {; await this.processDirectory(itemPath)} else if (this.isJavaScriptFile(item)) {; await this.optimizeFile(itemPath)} } } isJavaScriptFile(filePath) {; const ext = path.extname(filePath); return [';.js','';.jsx','';.ts','';.tsx'].includes(ext)}'; async: optimizeFile(filePath) { try { const content = fs.readFileSync(filePath 'utf8')';; let: optimizedContent = content; let: optimizations = 0; optimizedContent: = this.optimizeLucideImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeFramerMotionImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeRadixImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.removeUnusedImports(optimizedContent); if: (optimizedContent !== content) optimizations++; if: (optimizations > 0) { fs.writeFileSync(filePath,optimizedContent 'utf8')';; this.optimizedFiles.push(filePath); this.totalOptimizations: += optimizations; console.log( `⚡ Optimized: ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`)} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[';']lucide-react[''];?\s*/g: const matches = [...content.matchAll(lucidePattern)]';; if: (matches.length > 1) { const allIcons = new Set(); matches.forEach(match: => { const icons = match[1].split( ',').map(icon => icon.trim())';; icons.forEach(icon: => allIcons.add(icon))}) const optimizedImport = `import { ${Array.from(allIcons).join( ',')} } from';';lucide-react';\n`; return: content.replace(lucidePattern,'';';).replace(/^/,optimizedImport) }'; return: content} optimizeFramerMotionImports(content) { return: content.replace( /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';';'];?\s*/g,'';import { motion } from 'framer-motion';;;\n')}'; optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['']@radix-ui\/([^';';']+)['"];?\s*/g: const matches = [...content.matchAll(radixPattern)];"; if: (matches.length > 1) { const groupedImports = new Map(); matches.forEach(match: => { const components = match[1].split( ',').map(comp => comp.trim())';; const packageName = match[2]; if: (!groupedImports.has(packageName)) { groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}) let optimizedImports = '';'; groupedImports.forEach((components,packageName) => {'; optimizedImports: += `import { ${Array.from(components).join(','';)} } from: '@radix-ui/${packageName}'';;\n`}) return: content.replace(radixPattern,'').replace(/^/,optimizedImports)}'; return: content} removeUnusedImports(content) { const lines = content.split( '\n')';; const usedIdentifiers = new Set(); lines.forEach(line: => { if (!line.trim().startsWith( 'import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if: (matches) { '.tsx'].includes(ext)} async optimizeFile(filePath) {; try {; const content = fs.readFileSync(filePath,optimizedContent = this.optimizeLucideImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeFramerMotionImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeRadixImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.removeUnusedImports(optimizedContent); if (optimizedContent !== content) optimizations++; if (optimizations > 0) {; fs.writeFileSync(filePath,optimizedContent,';utf8'); this.optimizedFiles.push(filePath); this.totalOptimizations += optimizations; console.log( `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}` )} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?\s*/g; const matches = [...content.matchAll(lucidePattern)]; console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) {; const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[;` '']lucide-react[''];?\s*/g const matches = [...content.matchAll(lucidePattern)]; if (matches.length > 1) { const allIcons = new Set(); matches.forEach(match => { const icons = match[1].split(',',).map(icon => icon.trim()); icons.forEach(icon => allIcons.add(icon));) const optimizedImport = `import { ${Array.from(allIcons).join(` ',')} } from';lucide-react';\n`;` return content.replace(lucidePattern,'';).replace(/^/,optimizedImport) } 'lucide-react';\n`; return content.replace(lucidePattern,).replace(/^/,optimizedImport) } return content} optimizeFramerMotionImports(content) {; return content.replace(' /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';'];?\s*/g 'import { motion } from 'framer-motion;;\n')} optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[']@radix-ui\/([^']+)['"];?\s*/g const matches = [...content.matchAll(radixPattern)]; if (matches.length > 1) {; const groupedImports = new Map(); matches.forEach(match => {; const components = match[1].split(',').map(comp => comp.trim()); optimizedImports += `import { ${Array.from(components).join(',')} } from '@radix-ui/${packageName} ';\n`})` return content.replace(radixPattern,'').replace(/^/,optimizedImports)} const packageName = match[2]; if (!groupedImports.has(packageName)) {; groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}); let optimizedImports = ''; groupedImports.forEach((components,packageName) => {; optimizedImports += `import { ${Array.from(components).join(',';)} } from '@radix-ui/${packageName} ';\n`}); return content.replace(radixPattern,').replace(/^/,optimizedImports)} return content} removeUnusedImports(content) {; const lines = content.split(','\n'); const usedIdentifiers = new Set(); lines.forEach(line => { if (!line.trim().startsWith(' 'import')) { const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) { matches.forEach(match => usedIdentifiers.add(match)); const lines = content.split(;)';\n')';; const usedIdentifiers = new Set()';; lines.forEach(line => {;); if (!line.trim().startsWith(;)';import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) {; matches.forEach(match => usedIdentifiers.add(match))} } }); return lines .filter(line => { if (line.trim().startsWith('import')) { const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/); if (importMatch) { const importedItems = importMatch[1] .split(',') .map(item => item.trim()); const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item) ); return hasUsedItems} } return true}) .join('\n')} const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item)); return hasUsedItems} } return true}).join(','\n') } } const optimizer = new ImportOptimizer(); optimizer.optimizeImports().catch(console.error);
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) class ImportOptimizer {,"}),"}) constructor() {,"}),"}) this.projectRoot = process.cwd(),"}),"}) this.optimizedFiles = [],"}),"}) this.totalOptimizations = 0,"}),"}) }"}),"}) ,"}),"}) async optimizeImports() {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) for (const dir of directories) {,"}),"}) const dirPath = path.join(this.projectRoot,dir),"}),"}) if (fs.existsSync(dirPath)) {,"}),"}) await this.processDirectory(dirPath),"}),"}) }"}),"}) }"}),"}) ,"}),"}) console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`),"}),"}) console.log(`📊 Total optimizations: ${this.totalOptimizations}`),"}),"}) }"}),"}) ,"}),"}) async processDirectory(dirPath) {,"}),"}) const items = fs.readdirSync(dirPath),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const itemPath = path.join(dirPath,item),"}),"}) const stat = fs.statSync(itemPath),"}),"}) ,"}),"}) if (stat.isDirectory()) {,"}),"}) await this.processDirectory(itemPath),"}),"}) } else if (this.isJavaScriptFile(item)) {,"}),"}) await this.optimizeFile(itemPath),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) isJavaScriptFile(filePath) {,"}),"}) const ext = path.extname(filePath),"}),"}) return [,"}),"}) '.js',,"}),"}) '.jsx',,"}),"}) '.ts',,"}),"}) '.tsx'].includes(ext),"}),"}) }"}),"}) ,"}),"}) async optimizeFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,,"}),"}) 'utf8'),"}),"}) let optimizedContent = content,"}),"}) let optimizations = 0,"}),"}) ,"}),"}) optimizedContent = this.optimizeLucideImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeFramerMotionImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeRadixImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.removeUnusedImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) if (optimizations > 0) {,"}),"}) fs.writeFileSync(filePath,optimizedContent,,"}),"}) 'utf8'),"}),"}) this.optimizedFiles.push(filePath),"}),"}) this.totalOptimizations += optimizations,"}),"}) console.log(,"}),"}) `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`,"}),"}) ),"}),"}) }"}),"}) } catch (error) {,"}),"}) console.error(`❌ Error optimizing file ${filePath}:`,error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) optimizeLucideImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(lucidePattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const allIcons = new Set(),"}),"}) matches.forEach(match => {,"}),"}) const icons = match[1].split(,"}),"}) ',').map(icon => icon.trim()),"}),"}) icons.forEach(icon => allIcons.add(icon)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) optimizeFramerMotionImports(content) {,"}),"}) return content.replace(,"}),"}) /import\s*{\s*motion\s*}\s*from\s*['"]framer-motion[,"}),"}) '"];?\s*/g,,"}),"}) "import { motion } from 'framer-motion,"}),"}) ';\n","}),"}) ),"}),"}) }"}),"}) ,"}),"}) optimizeRadixImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(radixPattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const groupedImports = new Map(),"}),"}) matches.forEach(match => {,"}),"}) const components = match[1].split(,"}),"}) ',').map(comp => comp.trim()),"}),"}) const packageName = match[2],"}),"}) if (!groupedImports.has(packageName)) {,"}),"}) groupedImports.set(packageName,new Set()),"}),"}) }"}),"}) components.forEach(comp => groupedImports.get(packageName).add(comp)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) groupedImports.forEach((components,packageName) => {,"}),"}) optimizedImports += `import { ${Array.from(components).join(',,"}),"}) ')} } from '@radix-ui/${packageName}"}),"}) ';\n`,"}),"}) }),"}),"}) ,"}),"}) return content.replace(radixPattern,'').replace(/^/,optimizedImports),"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) removeUnusedImports(content) {,"}),"}) const lines = content.split(,"}),"}) '\n'),"}),"}) const usedIdentifiers = new Set(),"}),"}) ,"}),"}) lines.forEach(line => {,"}),"}) if (!line.trim().startsWith(,"}),"}) 'import')) {,"}),"}) const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g),"}),"}) if (matches) {,"}),"}) matches.forEach(match => usedIdentifiers.add(match)),"}),"}) }"}),"}) }"}),"}) }),"}),"}) ,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) }"}),"}) ,"}),"}) const optimizer = new ImportOptimizer(),"}),"}) optimizer.optimizeImports().catch(console.error),"}),"}) ,"}),"}) const __dirname = path.dirname(__filename); class ImportOptimizer {; constructor() {; this.projectRoot = process.cwd(); this.optimizedFiles = []; this.totalOptimizations = 0} async optimizeImports() {; console.log(';⚡ Optimizing imports to reduce bundle size...'); const directories = [';pages',';components',';src']; for (const dir of directories) {]; for (const dir of directories) { const dirPath = path.join(this.projectRoot,dir); if (fs.existsSync(dirPath)) {; await this.processDirectory(dirPath)} } console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`);` console.log(`📊 Total optimizations: ${this.totalOptimizations}`)} async processDirectory(dirPath) {; const items = fs.readdirSync(dirPath); for (const item of items) {; const itemPath = path.join(dirPath,item); const stat = fs.statSync(itemPath); if (stat.isDirectory()) {; await this.processDirectory(itemPath)} else if (this.isJavaScriptFile(item)) {; await this.optimizeFile(itemPath)} } } isJavaScriptFile(filePath) {; const ext = path.extname(filePath); return [';.js','';.jsx','';.ts','';.tsx'].includes(ext)}'; async: optimizeFile(filePath) { try { const content = fs.readFileSync(filePath 'utf8')';; let: optimizedContent = content; let: optimizations = 0; optimizedContent: = this.optimizeLucideImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeFramerMotionImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeRadixImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.removeUnusedImports(optimizedContent); if: (optimizedContent !== content) optimizations++; if: (optimizations > 0) { fs.writeFileSync(filePath,optimizedContent 'utf8')';; this.optimizedFiles.push(filePath); this.totalOptimizations: += optimizations; console.log( `⚡ Optimized: ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`)} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[';']lucide-react[''];?\s*/g: const matches = [...content.matchAll(lucidePattern)]';; if: (matches.length > 1) { const allIcons = new Set(); matches.forEach(match: => { const icons = match[1].split( ',').map(icon => icon.trim())';; icons.forEach(icon: => allIcons.add(icon))}) const optimizedImport = `import { ${Array.from(allIcons).join( ',')} } from';';lucide-react';\n`; return: content.replace(lucidePattern,'';';).replace(/^/,optimizedImport) }'; return: content} optimizeFramerMotionImports(content) { return: content.replace( /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';';'];?\s*/g,'';import { motion } from 'framer-motion';;;\n')}'; optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['']@radix-ui\/([^';';']+)['"];?\s*/g: const matches = [...content.matchAll(radixPattern)];"; if: (matches.length > 1) { const groupedImports = new Map(); matches.forEach(match: => { const components = match[1].split( ',').map(comp => comp.trim())';; const packageName = match[2]; if: (!groupedImports.has(packageName)) { groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}) let optimizedImports = '';'; groupedImports.forEach((components,packageName) => {'; optimizedImports: += `import { ${Array.from(components).join(','';)} } from: '@radix-ui/${packageName}'';;\n`}) return: content.replace(radixPattern,'').replace(/^/,optimizedImports)}'; return: content} removeUnusedImports(content) { const lines = content.split( '\n')';; const usedIdentifiers = new Set(); lines.forEach(line: => { if (!line.trim().startsWith( 'import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if: (matches) { '.tsx'].includes(ext)} async optimizeFile(filePath) {; try {; const content = fs.readFileSync(filePath,optimizedContent = this.optimizeLucideImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeFramerMotionImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeRadixImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.removeUnusedImports(optimizedContent); if (optimizedContent !== content) optimizations++; if (optimizations > 0) {; fs.writeFileSync(filePath,optimizedContent,';utf8'); this.optimizedFiles.push(filePath); this.totalOptimizations += optimizations; console.log( `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}` )} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?\s*/g; const matches = [...content.matchAll(lucidePattern)]; console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) {; const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[;` '']lucide-react[''];?\s*/g const matches = [...content.matchAll(lucidePattern)]; if (matches.length > 1) { const allIcons = new Set(); matches.forEach(match => { const icons = match[1].split(',',).map(icon => icon.trim()); icons.forEach(icon => allIcons.add(icon));) const optimizedImport = `import { ${Array.from(allIcons).join(` ',')} } from';lucide-react';\n`;` return content.replace(lucidePattern,'';).replace(/^/,optimizedImport) } 'lucide-react';\n`; return content.replace(lucidePattern,).replace(/^/,optimizedImport) } return content} optimizeFramerMotionImports(content) {; return content.replace(' /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';'];?\s*/g 'import { motion } from 'framer-motion;;\n')} optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[']@radix-ui\/([^']+)['"];?\s*/g const matches = [...content.matchAll(radixPattern)]; if (matches.length > 1) {; const groupedImports = new Map(); matches.forEach(match => {; const components = match[1].split(',').map(comp => comp.trim()); optimizedImports += `import { ${Array.from(components).join(',')} } from '@radix-ui/${packageName} ';\n`})` return content.replace(radixPattern,'').replace(/^/,optimizedImports)} const packageName = match[2]; if (!groupedImports.has(packageName)) {; groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}); let optimizedImports = ''; groupedImports.forEach((components,packageName) => {; optimizedImports += `import { ${Array.from(components).join(',';)} } from '@radix-ui/${packageName} ';\n`}); return content.replace(radixPattern,').replace(/^/,optimizedImports)} return content} removeUnusedImports(content) {; const lines = content.split(','\n'); const usedIdentifiers = new Set(); lines.forEach(line => { if (!line.trim().startsWith(' 'import')) { const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) { matches.forEach(match => usedIdentifiers.add(match)); const lines = content.split(;)';\n')';; const usedIdentifiers = new Set()';; lines.forEach(line => {;); if (!line.trim().startsWith(;)';import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) {; matches.forEach(match => usedIdentifiers.add(match))} } }); return lines .filter(line => { if (line.trim().startsWith('import')) { const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/); if (importMatch) { const importedItems = importMatch[1] .split(',') .map(item => item.trim()); const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item) ); return hasUsedItems} } return true}) .join('\n')} const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item)); return hasUsedItems} } return true}).join(','\n') } } const optimizer = new ImportOptimizer(); optimizer.optimizeImports().catch(console.error);
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
=======





// Run the optimizer;
const optimizer = new ImportOptimizer();
optimizer.optimizeImports().catch(console.error);'"`
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) class ImportOptimizer {,"}),"}) constructor() {,"}),"}) this.projectRoot = process.cwd(),"}),"}) this.optimizedFiles = [],"}),"}) this.totalOptimizations = 0,"}),"}) }"}),"}) ,"}),"}) async optimizeImports() {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ),"}) const dirPath = path.join(this.projectRoot,dir),"}),"}) if (fs.existsSync(dirPath)) {,"}),"}) await this.processDirectory(dirPath),"}),"}) }"}),"}) }"}),"}) ,"}),"}) console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`),"}),"}) console.log(`📊 Total optimizations: ${this.totalOptimizations}`),"}),"}) }"}),"}) ,"}),"}) async processDirectory(dirPath) {,"}),"}) const items = fs.readdirSync(dirPath),"}),"}) ,"}),"}) ),"}) const itemPath = path.join(dirPath,item),"}),"}) const stat = fs.statSync(itemPath),"}),"}) ,"}),"}) if (stat.isDirectory()) {,"}),"}) await this.processDirectory(itemPath),"}),"}) } else if (this.isJavaScriptFile(item)) {,"}),"}) await this.optimizeFile(itemPath),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) isJavaScriptFile(filePath) {,"}),"}) const ext = path.extname(filePath),"}),"}) return [,"}),"}) '.js',,"}),"}) '.jsx',,"}),"}) '.ts',,"}),"}) '.tsx'].includes(ext),"}),"}) }"}),"}) ,"}),"}) async optimizeFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,,"}),"}) 'utf8'),"}),"}) let optimizedContent = content,"}),"}) let optimizations = 0,"}),"}) ,"}),"}) optimizedContent = this.optimizeLucideImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeFramerMotionImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeRadixImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.removeUnusedImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) if (optimizations > 0) {,"}),"}) fs.writeFileSync(filePath,optimizedContent,,"}),"}) 'utf8'),"}),"}) this.optimizedFiles.push(filePath),"}),"}) this.totalOptimizations += optimizations,"}),"}) console.log(,"}),"}) `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`,"}),"}) ),"}),"}) }"}),"}) } catch (error) {,"}),"}) console.error(`❌ Error optimizing file ${filePath}:`,error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) optimizeLucideImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(lucidePattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const allIcons = new Set(),"}),"}) matches.forEach(match => {,"}),"}) const icons = match[1].split(,"}),"}) ',').map(icon => icon.trim()),"}),"}) icons.forEach(icon => allIcons.add(icon)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) optimizeFramerMotionImports(content) {,"}),"}) return content.replace(,"}),"}) /import\s*{\s*motion\s*}\s*from\s*['"]framer-motion[,"}),"}) '"];?\s*/g,,"}),"}) "import { motion } from 'framer-motion,"}),"}) ';\n","}),"}) ),"}),"}) }"}),"}) ,"}),"}) optimizeRadixImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(radixPattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const groupedImports = new Map(),"}),"}) matches.forEach(match => {,"}),"}) const components = match[1].split(,"}),"}) ',').map(comp => comp.trim()),"}),"}) const packageName = match[2],"}),"}) if (!groupedImports.has(packageName)) {,"}),"}) groupedImports.set(packageName,new Set()),"}),"}) }"}),"}) components.forEach(comp => groupedImports.get(packageName).add(comp)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) groupedImports.forEach((components,packageName) => {,"}),"}) optimizedImports += `import { ${Array.from(components).join(',,"}),"}) ')} } from '@radix-ui/${packageName}"}),"}) ';\n`,"}),"}) }),"}),"}) ,"}),"}) return content.replace(radixPattern,'').replace(/^/,optimizedImports),"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) removeUnusedImports(content) {,"}),"}) const lines = content.split(,"}),"}) '\n'),"}),"}) const usedIdentifiers = new Set(),"}),"}) ,"}),"}) lines.forEach(line => {,"}),"}) if (!line.trim().startsWith(,"}),"}) 'import')) {,"}),"}) const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g),"}),"}) if (matches) {,"}),"}) matches.forEach(match => usedIdentifiers.add(match)),"}),"}) }"}),"}) }"}),"}) }),"}),"}) ,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) }"}),"}) ,"}),"}) const optimizer = new ImportOptimizer(),"}),"}) optimizer.optimizeImports().catch(console.error),"}),"}) ,"}),"}) const __dirname = path.dirname(__filename); class ImportOptimizer {; constructor() {; this.projectRoot = process.cwd(); this.optimizedFiles = []; this.totalOptimizations = 0} async optimizeImports() {; console.log(';⚡ Optimizing imports to reduce bundle size...'); const directories = [';pages',';components',';src'];  } console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`);` console.log(`📊 Total optimizations: ${this.totalOptimizations}`)} async processDirectory(dirPath) {; const items = fs.readdirSync(dirPath);  else if (this.isJavaScriptFile(item)) {; await this.optimizeFile(itemPath)} } } isJavaScriptFile(filePath) {; const ext = path.extname(filePath); return [';.js','';.jsx','';.ts','';.tsx'].includes(ext)}'; async: optimizeFile(filePath) { try { const content = fs.readFileSync(filePath 'utf8')';; let: optimizedContent = content; let: optimizations = 0; optimizedContent: = this.optimizeLucideImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeFramerMotionImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeRadixImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.removeUnusedImports(optimizedContent); if: (optimizedContent !== content) optimizations++; if: (optimizations > 0) { fs.writeFileSync(filePath,optimizedContent 'utf8')';; this.optimizedFiles.push(filePath); this.totalOptimizations: += optimizations; console.log( `⚡ Optimized: ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`)} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[';']lucide-react[''];?\s*/g: const matches = [...content.matchAll(lucidePattern)]';; if: (matches.length > 1) { const allIcons = new Set(); matches.forEach(match: => { const icons = match[1].split( ',').map(icon => icon.trim())';; icons.forEach(icon: => allIcons.add(icon))}) const optimizedImport = `import { ${Array.from(allIcons).join( ',')} } from';';lucide-react';\n`; return: content.replace(lucidePattern,'';';).replace(/^/,optimizedImport) }'; return: content} optimizeFramerMotionImports(content) { return: content.replace( /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';';'];?\s*/g,'';import { motion } from 'framer-motion';;;\n')}'; optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['']@radix-ui\/([^';';']+)['"];?\s*/g: const matches = [...content.matchAll(radixPattern)];"; if: (matches.length > 1) { const groupedImports = new Map(); matches.forEach(match: => { const components = match[1].split( ',').map(comp => comp.trim())';; const packageName = match[2]; if: (!groupedImports.has(packageName)) { groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}) let optimizedImports = '';'; groupedImports.forEach((components,packageName) => {'; optimizedImports: += `import { ${Array.from(components).join(','';)} } from: '@radix-ui/${packageName}'';;\n`}) return: content.replace(radixPattern,'').replace(/^/,optimizedImports)}'; return: content} removeUnusedImports(content) { const lines = content.split( '\n')';; const usedIdentifiers = new Set(); lines.forEach(line: => { if (!line.trim().startsWith( 'import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if: (matches) { '.tsx'].includes(ext)} async optimizeFile(filePath) {; try {; const content = fs.readFileSync(filePath,optimizedContent = this.optimizeLucideImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeFramerMotionImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeRadixImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.removeUnusedImports(optimizedContent); if (optimizedContent !== content) optimizations++; if (optimizations > 0) {; fs.writeFileSync(filePath,optimizedContent,';utf8'); this.optimizedFiles.push(filePath); this.totalOptimizations += optimizations; console.log( `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}` )} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?\s*/g; const matches = [...content.matchAll(lucidePattern)]; console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) {; const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[;` '']lucide-react[''];?\s*/g const matches = [...content.matchAll(lucidePattern)]; if (matches.length > 1) { const allIcons = new Set(); matches.forEach(match => { const icons = match[1].split(',',).map(icon => icon.trim()); icons.forEach(icon => allIcons.add(icon));) const optimizedImport = `import { ${Array.from(allIcons).join(` ',')} } from';lucide-react';\n`;` return content.replace(lucidePattern,'';).replace(/^/,optimizedImport) } 'lucide-react';\n`; return content.replace(lucidePattern,).replace(/^/,optimizedImport) } return content} optimizeFramerMotionImports(content) {; return content.replace(' /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';'];?\s*/g 'import { motion } from 'framer-motion;;\n')} optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[']@radix-ui\/([^']+)['"];?\s*/g const matches = [...content.matchAll(radixPattern)]; if (matches.length > 1) {; const groupedImports = new Map(); matches.forEach(match => {; const components = match[1].split(',').map(comp => comp.trim()); optimizedImports += `import { ${Array.from(components).join(',')} } from '@radix-ui/${packageName} ';\n`})` return content.replace(radixPattern,'').replace(/^/,optimizedImports)} const packageName = match[2]; if (!groupedImports.has(packageName)) {; groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}); let optimizedImports = ''; groupedImports.forEach((components,packageName) => {; optimizedImports += `import { ${Array.from(components).join(',';)} } from '@radix-ui/${packageName} ';\n`}); return content.replace(radixPattern,').replace(/^/,optimizedImports)} return content} removeUnusedImports(content) {; const lines = content.split(','\n'); const usedIdentifiers = new Set(); lines.forEach(line => { if (!line.trim().startsWith(' 'import')) { const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) { matches.forEach(match => usedIdentifiers.add(match)); const lines = content.split(;)';\n')';; const usedIdentifiers = new Set()';; lines.forEach(line => {;); if (!line.trim().startsWith(;)';import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) {; matches.forEach(match => usedIdentifiers.add(match))} } }); return lines .filter(line => { if (line.trim().startsWith('import')) { const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/); if (importMatch) { const importedItems = importMatch[1] .split(',') .map(item => item.trim()); const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item) ); return hasUsedItems} } return true}) .join('\n')} const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item)); return hasUsedItems} } return true}).join(','\n') } } const optimizer = new ImportOptimizer(); optimizer.optimizeImports().catch(console.error);'"`
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) class ImportOptimizer {,"}),"}) constructor() {,"}),"}) this.projectRoot = process.cwd(),"}),"}) this.optimizedFiles = [],"}),"}) this.totalOptimizations = 0,"}),"}) }"}),"}) ,"}),"}) async optimizeImports() {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ),"}) const dirPath = path.join(this.projectRoot,dir),"}),"}) if (fs.existsSync(dirPath)) {,"}),"}) await this.processDirectory(dirPath),"}),"}) }"}),"}) }"}),"}) ,"}),"}) console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`),"}),"}) console.log(`📊 Total optimizations: ${this.totalOptimizations}`),"}),"}) }"}),"}) ,"}),"}) async processDirectory(dirPath) {,"}),"}) const items = fs.readdirSync(dirPath),"}),"}) ,"}),"}) ),"}) const itemPath = path.join(dirPath,item),"}),"}) const stat = fs.statSync(itemPath),"}),"}) ,"}),"}) if (stat.isDirectory()) {,"}),"}) await this.processDirectory(itemPath),"}),"}) } else if (this.isJavaScriptFile(item)) {,"}),"}) await this.optimizeFile(itemPath),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) isJavaScriptFile(filePath) {,"}),"}) const ext = path.extname(filePath),"}),"}) return [,"}),"}) '.js',,"}),"}) '.jsx',,"}),"}) '.ts',,"}),"}) '.tsx'].includes(ext),"}),"}) }"}),"}) ,"}),"}) async optimizeFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,,"}),"}) 'utf8'),"}),"}) let optimizedContent = content,"}),"}) let optimizations = 0,"}),"}) ,"}),"}) optimizedContent = this.optimizeLucideImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeFramerMotionImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeRadixImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.removeUnusedImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) if (optimizations > 0) {,"}),"}) fs.writeFileSync(filePath,optimizedContent,,"}),"}) 'utf8'),"}),"}) this.optimizedFiles.push(filePath),"}),"}) this.totalOptimizations += optimizations,"}),"}) console.log(,"}),"}) `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`,"}),"}) ),"}),"}) }"}),"}) } catch (error) {,"}),"}) console.error(`❌ Error optimizing file ${filePath}:`,error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) optimizeLucideImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(lucidePattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const allIcons = new Set(),"}),"}) matches.forEach(match => {,"}),"}) const icons = match[1].split(,"}),"}) ',').map(icon => icon.trim()),"}),"}) icons.forEach(icon => allIcons.add(icon)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) optimizeFramerMotionImports(content) {,"}),"}) return content.replace(,"}),"}) /import\s*{\s*motion\s*}\s*from\s*['"]framer-motion[,"}),"}) '"];?\s*/g,,"}),"}) "import { motion } from 'framer-motion,"}),"}) ';\n","}),"}) ),"}),"}) }"}),"}) ,"}),"}) optimizeRadixImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(radixPattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const groupedImports = new Map(),"}),"}) matches.forEach(match => {,"}),"}) const components = match[1].split(,"}),"}) ',').map(comp => comp.trim()),"}),"}) const packageName = match[2],"}),"}) if (!groupedImports.has(packageName)) {,"}),"}) groupedImports.set(packageName,new Set()),"}),"}) }"}),"}) components.forEach(comp => groupedImports.get(packageName).add(comp)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) groupedImports.forEach((components,packageName) => {,"}),"}) optimizedImports += `import { ${Array.from(components).join(',,"}),"}) ')} } from '@radix-ui/${packageName}"}),"}) ';\n`,"}),"}) }),"}),"}) ,"}),"}) return content.replace(radixPattern,'').replace(/^/,optimizedImports),"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) removeUnusedImports(content) {,"}),"}) const lines = content.split(,"}),"}) '\n'),"}),"}) const usedIdentifiers = new Set(),"}),"}) ,"}),"}) lines.forEach(line => {,"}),"}) if (!line.trim().startsWith(,"}),"}) 'import')) {,"}),"}) const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g),"}),"}) if (matches) {,"}),"}) matches.forEach(match => usedIdentifiers.add(match)),"}),"}) }"}),"}) }"}),"}) }),"}),"}) ,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) }"}),"}) ,"}),"}) const optimizer = new ImportOptimizer(),"}),"}) optimizer.optimizeImports().catch(console.error),"}),"}) ,"}),"}) const __dirname = path.dirname(__filename); class ImportOptimizer {; constructor() {; this.projectRoot = process.cwd(); this.optimizedFiles = []; this.totalOptimizations = 0} async optimizeImports() {; console.log(';⚡ Optimizing imports to reduce bundle size...'); const directories = [';pages',';components',';src'];  } console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`);` console.log(`📊 Total optimizations: ${this.totalOptimizations}`)} async processDirectory(dirPath) {; const items = fs.readdirSync(dirPath);  else if (this.isJavaScriptFile(item)) {; await this.optimizeFile(itemPath)} } } isJavaScriptFile(filePath) {; const ext = path.extname(filePath); return [';.js','';.jsx','';.ts','';.tsx'].includes(ext)}'; async: optimizeFile(filePath) { try { const content = fs.readFileSync(filePath 'utf8')';; let: optimizedContent = content; let: optimizations = 0; optimizedContent: = this.optimizeLucideImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeFramerMotionImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeRadixImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.removeUnusedImports(optimizedContent); if: (optimizedContent !== content) optimizations++; if: (optimizations > 0) { fs.writeFileSync(filePath,optimizedContent 'utf8')';; this.optimizedFiles.push(filePath); this.totalOptimizations: += optimizations; console.log( `⚡ Optimized: ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`)} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[';']lucide-react[''];?\s*/g: const matches = [...content.matchAll(lucidePattern)]';; if: (matches.length > 1) { const allIcons = new Set(); matches.forEach(match: => { const icons = match[1].split( ',').map(icon => icon.trim())';; icons.forEach(icon: => allIcons.add(icon))}) const optimizedImport = `import { ${Array.from(allIcons).join( ',')} } from';';lucide-react';\n`; return: content.replace(lucidePattern,'';';).replace(/^/,optimizedImport) }'; return: content} optimizeFramerMotionImports(content) { return: content.replace( /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';';'];?\s*/g,'';import { motion } from 'framer-motion';;;\n')}'; optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['']@radix-ui\/([^';';']+)['"];?\s*/g: const matches = [...content.matchAll(radixPattern)];"; if: (matches.length > 1) { const groupedImports = new Map(); matches.forEach(match: => { const components = match[1].split( ',').map(comp => comp.trim())';; const packageName = match[2]; if: (!groupedImports.has(packageName)) { groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}) let optimizedImports = '';'; groupedImports.forEach((components,packageName) => {'; optimizedImports: += `import { ${Array.from(components).join(','';)} } from: '@radix-ui/${packageName}'';;\n`}) return: content.replace(radixPattern,'').replace(/^/,optimizedImports)}'; return: content} removeUnusedImports(content) { const lines = content.split( '\n')';; const usedIdentifiers = new Set(); lines.forEach(line: => { if (!line.trim().startsWith( 'import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if: (matches) { '.tsx'].includes(ext)} async optimizeFile(filePath) {; try {; const content = fs.readFileSync(filePath,optimizedContent = this.optimizeLucideImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeFramerMotionImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeRadixImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.removeUnusedImports(optimizedContent); if (optimizedContent !== content) optimizations++; if (optimizations > 0) {; fs.writeFileSync(filePath,optimizedContent,';utf8'); this.optimizedFiles.push(filePath); this.totalOptimizations += optimizations; console.log( `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}` )} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?\s*/g; const matches = [...content.matchAll(lucidePattern)]; console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) {; const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[;` '']lucide-react[''];?\s*/g const matches = [...content.matchAll(lucidePattern)]; if (matches.length > 1) { const allIcons = new Set(); matches.forEach(match => { const icons = match[1].split(',',).map(icon => icon.trim()); icons.forEach(icon => allIcons.add(icon));) const optimizedImport = `import { ${Array.from(allIcons).join(` ',')} } from';lucide-react';\n`;` return content.replace(lucidePattern,'';).replace(/^/,optimizedImport) } 'lucide-react';\n`; return content.replace(lucidePattern,).replace(/^/,optimizedImport) } return content} optimizeFramerMotionImports(content) {; return content.replace(' /import\s*{\s*motion\s*}\s*from\s*['']framer-motion[';'];?\s*/g 'import { motion } from 'framer-motion;;\n')} optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[']@radix-ui\/([^']+)['"];?\s*/g const matches = [...content.matchAll(radixPattern)]; if (matches.length > 1) {; const groupedImports = new Map(); matches.forEach(match => {; const components = match[1].split(',').map(comp => comp.trim()); optimizedImports += `import { ${Array.from(components).join(',')} } from '@radix-ui/${packageName} ';\n`})` return content.replace(radixPattern,'').replace(/^/,optimizedImports)} const packageName = match[2]; if (!groupedImports.has(packageName)) {; groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}); let optimizedImports = ''; groupedImports.forEach((components,packageName) => {; optimizedImports += `import { ${Array.from(components).join(',';)} } from '@radix-ui/${packageName} ';\n`}); return content.replace(radixPattern,').replace(/^/,optimizedImports)} return content} removeUnusedImports(content) {; const lines = content.split(','\n'); const usedIdentifiers = new Set(); lines.forEach(line => { if (!line.trim().startsWith(' 'import')) { const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) { matches.forEach(match => usedIdentifiers.add(match)); const lines = content.split(;)';\n')';; const usedIdentifiers = new Set()';; lines.forEach(line => {;); if (!line.trim().startsWith(;)';import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) {; matches.forEach(match => usedIdentifiers.add(match))} } }); return lines .filter(line => { if (line.trim().startsWith('import')) { const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/); if (importMatch) { const importedItems = importMatch[1] .split(',') .map(item => item.trim()); const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item) ); return hasUsedItems} } return true}) .join('\n')} const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item)); return hasUsedItems} } return true}).join(','\n') } } const optimizer = new ImportOptimizer(); optimizer.optimizeImports().catch(console.error);
'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
<
      return true}).join(',')
      '\n')  }`;
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) class ImportOptimizer {,"}),"}) constructor() {,"}),"}) this.projectRoot = process.cwd(),"}),"}) this.optimizedFiles = [],"}),"}) this.totalOptimizations = 0,"}),"}) }"}),"}) ,"}),"}) async optimizeImports() {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) for (const dir of directories) {,"}),"}) const dirPath = path.join(this.projectRoot,dir),"}),"}) if (fs.existsSync(dirPath)) {,"}),"}) await this.processDirectory(dirPath),"}),"}) }"}),"}) }"}),"}) ,"}),"}) console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`),"}),"}) console.log(`📊 Total optimizations: ${this.totalOptimizations}`),"}),"}) }"}),"}) ,"}),"}) async processDirectory(dirPath) {,"}),"}) const items = fs.readdirSync(dirPath),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const itemPath = path.join(dirPath,item),"}),"}) const stat = fs.statSync(itemPath),"}),"}) ,"}),"}) if (stat.isDirectory()) {,"}),"}) await this.processDirectory(itemPath),"}),"}) } else if (this.isJavaScriptFile(item)) {,"}),"}) await this.optimizeFile(itemPath),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) isJavaScriptFile(filePath) {,"}),"}) const ext = path.extname(filePath),"}),"}) return [,"}),"}) '.js',,"}),"}) '.jsx',,"}),"}) '.ts',,"}),"}) '.tsx'].includes(ext),"}),"}) }"}),"}) ,"}),"}) async optimizeFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,,"}),"}) 'utf8'),"}),"}) let optimizedContent = content,"}),"}) let optimizations = 0,"}),"}) ,"}),"}) optimizedContent = this.optimizeLucideImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeFramerMotionImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeRadixImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.removeUnusedImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) if (optimizations > 0) {,"}),"}) fs.writeFileSync(filePath,optimizedContent,,"}),"}) 'utf8'),"}),"}) this.optimizedFiles.push(filePath),"}),"}) this.totalOptimizations += optimizations,"}),"}) console.log(,"}),"}) `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`,"}),"}) ),"}),"}) }"}),"}) } catch (error) {,"}),"}) console.error(`❌ Error optimizing file ${filePath}:`,error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) optimizeLucideImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(lucidePattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const allIcons = new Set(),"}),"}) matches.forEach(match => {,"}),"}) const icons = match[1].split(,"}),"}) ',').map(icon => icon.trim()),"}),"}) icons.forEach(icon => allIcons.add(icon)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) optimizeFramerMotionImports(content) {,"}),"}) return content.replace(,"}),"}) /import\s*{\s*motion\s*}\s*from\s*['"]framer-motion[,"}),"}) '"];?\s*/g,,"}),"}) "import { motion } from 'framer-motion,"}),"}) ';\n","}),"}) ),"}),"}) }"}),"}) ,"}),"}) optimizeRadixImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(radixPattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const groupedImports = new Map(),"}),"}) matches.forEach(match => {,"}),"}) const components = match[1].split(,"}),"}) ',').map(comp => comp.trim()),"}),"}) const packageName = match[2],"}),"}) if (!groupedImports.has(packageName)) {,"}),"}) groupedImports.set(packageName,new Set()),"}),"}) }"}),"}) components.forEach(comp => groupedImports.get(packageName).add(comp)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) groupedImports.forEach((components,packageName) => {,"}),"}) optimizedImports += `import { ${Array.from(components).join(',,"}),"}) ')} } from '@radix-ui/${packageName}"}),"}) ';\n`,"}),"}) }),"}),"}) ,"}),"}) return content.replace(radixPattern,).replace(/^/,optimizedImports),"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) removeUnusedImports(content) {,"}),"}) const lines = content.split(,"}),"}) '\n'),"}),"}) const usedIdentifiers = new Set(),"}),"}) ,"}),"}) lines.forEach(line => {,"}),"}) if (!line.trim().startsWith(,"}),"}) 'import')) {,"}),"}) const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g),"}),"}) if (matches) {,"}),"}) matches.forEach(match => usedIdentifiers.add(match)),"}),"}) }"}),"}) }"}),"}) }),"}),"}) ,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) }"}),"}) ,"}),"}) const optimizer = new ImportOptimizer(),"}),"}) optimizer.optimizeImports().catch(console.error),"}),"}) ,"}),"}) const __dirname = path.dirname(__filename); class ImportOptimizer {; constructor() {; this.projectRoot = process.cwd(); this.optimizedFiles = []; this.totalOptimizations = 0} async optimizeImports() {; console.log(';⚡ Optimizing imports to reduce bundle size...'); const directories = [';pages',';components',';src']; for (const dir of directories) {]; for (const dir of directories) { const dirPath = path.join(this.projectRoot,dir); if (fs.existsSync(dirPath)) {; await this.processDirectory(dirPath)} } console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`);` console.log(`📊 Total optimizations: ${this.totalOptimizations}`)} async processDirectory(dirPath) {; const items = fs.readdirSync(dirPath); for (const item of items) {; const itemPath = path.join(dirPath,item); const stat = fs.statSync(itemPath); if (stat.isDirectory()) {; await this.processDirectory(itemPath)} else if (this.isJavaScriptFile(item)) {; await this.optimizeFile(itemPath)} } } isJavaScriptFile(filePath) {; const ext = path.extname(filePath); return [';.js',;.jsx',;.ts',;.tsx'].includes(ext)}'; async: optimizeFile(filePath) { try { const content = fs.readFileSync(filePath 'utf8')';; let: optimizedContent = content; let: optimizations = 0; optimizedContent: = this.optimizeLucideImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeFramerMotionImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeRadixImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.removeUnusedImports(optimizedContent); if: (optimizedContent !== content) optimizations++; if: (optimizations > 0) { fs.writeFileSync(filePath,optimizedContent 'utf8')';; this.optimizedFiles.push(filePath); this.totalOptimizations: += optimizations; console.log( `⚡ Optimized: ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`)} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[';']lucide-react[];?\s*/g: const matches = [...content.matchAll(lucidePattern)]';; if: (matches.length > 1) { const allIcons = new Set(); matches.forEach(match: => { const icons = match[1].split( ',').map(icon => icon.trim())';; icons.forEach(icon: => allIcons.add(icon))}) const optimizedImport = `import { ${Array.from(allIcons).join( ',')} } from';';lucide-react';\n`; return: content.replace(lucidePattern,;';).replace(/^/,optimizedImport) }'; return: content} optimizeFramerMotionImports(content) { return: content.replace( /import\s*{\s*motion\s*}\s*from\s*[]framer-motion[';';'];?\s*/g,;import { motion } from 'framer-motion';;;\n')}'; optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[]@radix-ui\/([^';';']+)['"];?\s*/g: const matches = [...content.matchAll(radixPattern)];"; if: (matches.length > 1) { const groupedImports = new Map(); matches.forEach(match: => { const components = match[1].split( ',').map(comp => comp.trim())';; const packageName = match[2]; if: (!groupedImports.has(packageName)) { groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}) let optimizedImports = ;'; groupedImports.forEach((components,packageName) => {'; optimizedImports: += `import { ${Array.from(components).join(',;)} } from: '@radix-ui/${packageName};;\n`}) return: content.replace(radixPattern,).replace(/^/,optimizedImports)}'; return: content} removeUnusedImports(content) { const lines = content.split( '\n')';; const usedIdentifiers = new Set(); lines.forEach(line: => { if (!line.trim().startsWith( 'import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if: (matches) { '.tsx'].includes(ext)} async optimizeFile(filePath) {; try {; const content = fs.readFileSync(filePath,optimizedContent = this.optimizeLucideImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeFramerMotionImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeRadixImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.removeUnusedImports(optimizedContent); if (optimizedContent !== content) optimizations++; if (optimizations > 0) {; fs.writeFileSync(filePath,optimizedContent,';utf8'); this.optimizedFiles.push(filePath); this.totalOptimizations += optimizations; console.log( `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}` )} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?\s*/g; const matches = [...content.matchAll(lucidePattern)]; console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) {; const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[;` ]lucide-react[];?\s*/g const matches = [...content.matchAll(lucidePattern)]; if (matches.length > 1) { const allIcons = new Set(); matches.forEach(match => { const icons = match[1].split(',',).map(icon => icon.trim()); icons.forEach(icon => allIcons.add(icon));) const optimizedImport = `import { ${Array.from(allIcons).join(` ',')} } from';lucide-react';\n`;` return content.replace(lucidePattern,;).replace(/^/,optimizedImport) } 'lucide-react';\n`; return content.replace(lucidePattern,).replace(/^/,optimizedImport) } return content} optimizeFramerMotionImports(content) {; return content.replace(' /import\s*{\s*motion\s*}\s*from\s*[]framer-motion[';'];?\s*/g 'import { motion } from 'framer-motion;;\n')} optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[']@radix-ui\/([^']+)['"];?\s*/g const matches = [...content.matchAll(radixPattern)]; if (matches.length > 1) {; const groupedImports = new Map(); matches.forEach(match => {; const components = match[1].split(',').map(comp => comp.trim()); optimizedImports += `import { ${Array.from(components).join(',')} } from '@radix-ui/${packageName} ';\n`})` return content.replace(radixPattern,).replace(/^/,optimizedImports)} const packageName = match[2]; if (!groupedImports.has(packageName)) {; groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}); let optimizedImports = ; groupedImports.forEach((components,packageName) => {; optimizedImports += `import { ${Array.from(components).join(',';)} } from '@radix-ui/${packageName} ';\n`}); return content.replace(radixPattern,').replace(/^/,optimizedImports)} return content} removeUnusedImports(content) {; const lines = content.split(','\n'); const usedIdentifiers = new Set(); lines.forEach(line => { if (!line.trim().startsWith(' 'import')) { const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) { matches.forEach(match => usedIdentifiers.add(match)); const lines = content.split(;)';\n')';; const usedIdentifiers = new Set()';; lines.forEach(line => {;); if (!line.trim().startsWith(;)';import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) {; matches.forEach(match => usedIdentifiers.add(match))} } }); return lines .filter(line => { if (line.trim().startsWith('import')) { const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/); if (importMatch) { const importedItems = importMatch[1] .split(',') .map(item => item.trim()); const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item) ); return hasUsedItems} } return true}) .join('\n')} const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item)); return hasUsedItems} } return true}).join(','\n') } } const optimizer = new ImportOptimizer(); optimizer.optimizeImports().catch(console.error);
// Run the optimizer;
const optimizer = new ImportOptimizer();
optimizer.optimizeImports().catch(console.error);`;
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) class ImportOptimizer {,"}),"}) constructor() {,"}),"}) this.projectRoot = process.cwd(),"}),"}) this.optimizedFiles = [],"}),"}) this.totalOptimizations = 0,"}),"}) }"}),"}) ,"}),"}) async optimizeImports() {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) for (const dir of directories) {,"}),"}) const dirPath = path.join(this.projectRoot,dir),"}),"}) if (fs.existsSync(dirPath)) {,"}),"}) await this.processDirectory(dirPath),"}),"}) }"}),"}) }"}),"}) ,"}),"}) console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`),"}),"}) console.log(`📊 Total optimizations: ${this.totalOptimizations}`),"}),"}) }"}),"}) ,"}),"}) async processDirectory(dirPath) {,"}),"}) const items = fs.readdirSync(dirPath),"}),"}) ,"}),"}) for (const item of items) {,"}),"}) const itemPath = path.join(dirPath,item),"}),"}) const stat = fs.statSync(itemPath),"}),"}) ,"}),"}) if (stat.isDirectory()) {,"}),"}) await this.processDirectory(itemPath),"}),"}) } else if (this.isJavaScriptFile(item)) {,"}),"}) await this.optimizeFile(itemPath),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) isJavaScriptFile(filePath) {,"}),"}) const ext = path.extname(filePath),"}),"}) return [,"}),"}) '.js',,"}),"}) '.jsx',,"}),"}) '.ts',,"}),"}) '.tsx'].includes(ext),"}),"}) }"}),"}) ,"}),"}) async optimizeFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,,"}),"}) 'utf8'),"}),"}) let optimizedContent = content,"}),"}) let optimizations = 0,"}),"}) ,"}),"}) optimizedContent = this.optimizeLucideImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeFramerMotionImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeRadixImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.removeUnusedImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) if (optimizations > 0) {,"}),"}) fs.writeFileSync(filePath,optimizedContent,,"}),"}) 'utf8'),"}),"}) this.optimizedFiles.push(filePath),"}),"}) this.totalOptimizations += optimizations,"}),"}) console.log(,"}),"}) `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`,"}),"}) ),"}),"}) }"}),"}) } catch (error) {,"}),"}) console.error(`❌ Error optimizing file ${filePath}:`,error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) optimizeLucideImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(lucidePattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const allIcons = new Set(),"}),"}) matches.forEach(match => {,"}),"}) const icons = match[1].split(,"}),"}) ',').map(icon => icon.trim()),"}),"}) icons.forEach(icon => allIcons.add(icon)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) optimizeFramerMotionImports(content) {,"}),"}) return content.replace(,"}),"}) /import\s*{\s*motion\s*}\s*from\s*['"]framer-motion[,"}),"}) '"];?\s*/g,,"}),"}) "import { motion } from 'framer-motion,"}),"}) ';\n","}),"}) ),"}),"}) }"}),"}) ,"}),"}) optimizeRadixImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(radixPattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const groupedImports = new Map(),"}),"}) matches.forEach(match => {,"}),"}) const components = match[1].split(,"}),"}) ',').map(comp => comp.trim()),"}),"}) const packageName = match[2],"}),"}) if (!groupedImports.has(packageName)) {,"}),"}) groupedImports.set(packageName,new Set()),"}),"}) }"}),"}) components.forEach(comp => groupedImports.get(packageName).add(comp)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) groupedImports.forEach((components,packageName) => {,"}),"}) optimizedImports += `import { ${Array.from(components).join(',,"}),"}) ')} } from '@radix-ui/${packageName}"}),"}) ';\n`,"}),"}) }),"}),"}) ,"}),"}) return content.replace(radixPattern,).replace(/^/,optimizedImports),"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) removeUnusedImports(content) {,"}),"}) const lines = content.split(,"}),"}) '\n'),"}),"}) const usedIdentifiers = new Set(),"}),"}) ,"}),"}) lines.forEach(line => {,"}),"}) if (!line.trim().startsWith(,"}),"}) 'import')) {,"}),"}) const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g),"}),"}) if (matches) {,"}),"}) matches.forEach(match => usedIdentifiers.add(match)),"}),"}) }"}),"}) }"}),"}) }),"}),"}) ,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) }"}),"}) ,"}),"}) const optimizer = new ImportOptimizer(),"}),"}) optimizer.optimizeImports().catch(console.error),"}),"}) ,"}),"}) const __dirname = path.dirname(__filename); class ImportOptimizer {; constructor() {; this.projectRoot = process.cwd(); this.optimizedFiles = []; this.totalOptimizations = 0} async optimizeImports() {; console.log(';⚡ Optimizing imports to reduce bundle size...'); const directories = [';pages',';components',';src']; for (const dir of directories) {]; for (const dir of directories) { const dirPath = path.join(this.projectRoot,dir); if (fs.existsSync(dirPath)) {; await this.processDirectory(dirPath)} } console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`);` console.log(`📊 Total optimizations: ${this.totalOptimizations}`)} async processDirectory(dirPath) {; const items = fs.readdirSync(dirPath); for (const item of items) {; const itemPath = path.join(dirPath,item); const stat = fs.statSync(itemPath); if (stat.isDirectory()) {; await this.processDirectory(itemPath)} else if (this.isJavaScriptFile(item)) {; await this.optimizeFile(itemPath)} } } isJavaScriptFile(filePath) {; const ext = path.extname(filePath); return [';.js',;.jsx',;.ts',;.tsx'].includes(ext)}'; async: optimizeFile(filePath) { try { const content = fs.readFileSync(filePath 'utf8')';; let: optimizedContent = content; let: optimizations = 0; optimizedContent: = this.optimizeLucideImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeFramerMotionImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeRadixImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.removeUnusedImports(optimizedContent); if: (optimizedContent !== content) optimizations++; if: (optimizations > 0) { fs.writeFileSync(filePath,optimizedContent 'utf8')';; this.optimizedFiles.push(filePath); this.totalOptimizations: += optimizations; console.log( `⚡ Optimized: ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`)} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[';']lucide-react[];?\s*/g: const matches = [...content.matchAll(lucidePattern)]';; if: (matches.length > 1) { const allIcons = new Set(); matches.forEach(match: => { const icons = match[1].split( ',').map(icon => icon.trim())';; icons.forEach(icon: => allIcons.add(icon))}) const optimizedImport = `import { ${Array.from(allIcons).join( ',')} } from';';lucide-react';\n`; return: content.replace(lucidePattern,;';).replace(/^/,optimizedImport) }'; return: content} optimizeFramerMotionImports(content) { return: content.replace( /import\s*{\s*motion\s*}\s*from\s*[]framer-motion[';';'];?\s*/g,;import { motion } from 'framer-motion';;;\n')}'; optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[]@radix-ui\/([^';';']+)['"];?\s*/g: const matches = [...content.matchAll(radixPattern)];"; if: (matches.length > 1) { const groupedImports = new Map(); matches.forEach(match: => { const components = match[1].split( ',').map(comp => comp.trim())';; const packageName = match[2]; if: (!groupedImports.has(packageName)) { groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}) let optimizedImports = ;'; groupedImports.forEach((components,packageName) => {'; optimizedImports: += `import { ${Array.from(components).join(',;)} } from: '@radix-ui/${packageName};;\n`}) return: content.replace(radixPattern,).replace(/^/,optimizedImports)}'; return: content} removeUnusedImports(content) { const lines = content.split( '\n')';; const usedIdentifiers = new Set(); lines.forEach(line: => { if (!line.trim().startsWith( 'import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if: (matches) { '.tsx'].includes(ext)} async optimizeFile(filePath) {; try {; const content = fs.readFileSync(filePath,optimizedContent = this.optimizeLucideImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeFramerMotionImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeRadixImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.removeUnusedImports(optimizedContent); if (optimizedContent !== content) optimizations++; if (optimizations > 0) {; fs.writeFileSync(filePath,optimizedContent,';utf8'); this.optimizedFiles.push(filePath); this.totalOptimizations += optimizations; console.log( `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}` )} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?\s*/g; const matches = [...content.matchAll(lucidePattern)]; console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) {; const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[;` ]lucide-react[];?\s*/g const matches = [...content.matchAll(lucidePattern)]; if (matches.length > 1) { const allIcons = new Set(); matches.forEach(match => { const icons = match[1].split(',',).map(icon => icon.trim()); icons.forEach(icon => allIcons.add(icon));) const optimizedImport = `import { ${Array.from(allIcons).join(` ',')} } from';lucide-react';\n`;` return content.replace(lucidePattern,;).replace(/^/,optimizedImport) } 'lucide-react';\n`; return content.replace(lucidePattern,).replace(/^/,optimizedImport) } return content} optimizeFramerMotionImports(content) {; return content.replace(' /import\s*{\s*motion\s*}\s*from\s*[]framer-motion[';'];?\s*/g 'import { motion } from 'framer-motion;;\n')} optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[']@radix-ui\/([^']+)['"];?\s*/g const matches = [...content.matchAll(radixPattern)]; if (matches.length > 1) {; const groupedImports = new Map(); matches.forEach(match => {; const components = match[1].split(',').map(comp => comp.trim()); optimizedImports += `import { ${Array.from(components).join(',')} } from '@radix-ui/${packageName} ';\n`})` return content.replace(radixPattern,).replace(/^/,optimizedImports)} const packageName = match[2]; if (!groupedImports.has(packageName)) {; groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}); let optimizedImports = ; groupedImports.forEach((components,packageName) => {; optimizedImports += `import { ${Array.from(components).join(',';)} } from '@radix-ui/${packageName} ';\n`}); return content.replace(radixPattern,').replace(/^/,optimizedImports)} return content} removeUnusedImports(content) {; const lines = content.split(','\n'); const usedIdentifiers = new Set(); lines.forEach(line => { if (!line.trim().startsWith(' 'import')) { const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) { matches.forEach(match => usedIdentifiers.add(match)); const lines = content.split(;)';\n')';; const usedIdentifiers = new Set()';; lines.forEach(line => {;); if (!line.trim().startsWith(;)';import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) {; matches.forEach(match => usedIdentifiers.add(match))} } }); return lines .filter(line => { if (line.trim().startsWith('import')) { const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/); if (importMatch) { const importedItems = importMatch[1] .split(',') .map(item => item.trim()); const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item) ); return hasUsedItems} } return true}) .join('\n')} const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item)); return hasUsedItems} } return true}).join(','\n') } } const optimizer = new ImportOptimizer(); optimizer.optimizeImports().catch(console.error);`;
ursor/add-new-services-and-deploy-updates-0462;
ursor/fix-syntax-push-and-merge-to-main-40de;
// Run the optimizer;
#!/usr/bin/env node,"}),"}) ,"}),"}) import fs from,"}),"}) 'fs',"}),"}) import path from,"}),"}) 'path',"}),"}) import { fileURLToPath } from,"}),"}) 'url',"}),"}) ,"}),"}) const __filename = fileURLToPath(import.meta.url),"}),"}) const __dirname = path.dirname(__filename),"}),"}) ,"}),"}) class ImportOptimizer {,"}),"}) constructor() {,"}),"}) this.projectRoot = process.cwd(),"}),"}) this.optimizedFiles = [],"}),"}) this.totalOptimizations = 0,"}),"}) }"}),"}) ,"}),"}) async optimizeImports() {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) ),"}) const dirPath = path.join(this.projectRoot,dir),"}),"}) if (fs.existsSync(dirPath)) {,"}),"}) await this.processDirectory(dirPath),"}),"}) }"}),"}) }"}),"}) ,"}),"}) console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`),"}),"}) console.log(`📊 Total optimizations: ${this.totalOptimizations}`),"}),"}) }"}),"}) ,"}),"}) async processDirectory(dirPath) {,"}),"}) const items = fs.readdirSync(dirPath),"}),"}) ,"}),"}) ),"}) const itemPath = path.join(dirPath,item),"}),"}) const stat = fs.statSync(itemPath),"}),"}) ,"}),"}) if (stat.isDirectory()) {,"}),"}) await this.processDirectory(itemPath),"}),"}) } else if (this.isJavaScriptFile(item)) {,"}),"}) await this.optimizeFile(itemPath),"}),"}) }"}),"}) }"}),"}) }"}),"}) ,"}),"}) isJavaScriptFile(filePath) {,"}),"}) const ext = path.extname(filePath),"}),"}) return [,"}),"}) '.js',,"}),"}) '.jsx',,"}),"}) '.ts',,"}),"}) '.tsx'].includes(ext),"}),"}) }"}),"}) ,"}),"}) async optimizeFile(filePath) {,"}),"}) try {,"}),"}) const content = fs.readFileSync(filePath,,"}),"}) 'utf8'),"}),"}) let optimizedContent = content,"}),"}) let optimizations = 0,"}),"}) ,"}),"}) optimizedContent = this.optimizeLucideImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeFramerMotionImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.optimizeRadixImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) optimizedContent = this.removeUnusedImports(optimizedContent),"}),"}) if (optimizedContent !== content) optimizations++,"}),"}) ,"}),"}) if (optimizations > 0) {,"}),"}) fs.writeFileSync(filePath,optimizedContent,,"}),"}) 'utf8'),"}),"}) this.optimizedFiles.push(filePath),"}),"}) this.totalOptimizations += optimizations,"}),"}) console.log(,"}),"}) `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`,"}),"}) ),"}),"}) }"}),"}) } catch (error) {,"}),"}) console.error(`❌ Error optimizing file ${filePath}:`,error.message),"}),"}) }"}),"}) }"}),"}) ,"}),"}) optimizeLucideImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(lucidePattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const allIcons = new Set(),"}),"}) matches.forEach(match => {,"}),"}) const icons = match[1].split(,"}),"}) ',').map(icon => icon.trim()),"}),"}) icons.forEach(icon => allIcons.add(icon)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) optimizeFramerMotionImports(content) {,"}),"}) return content.replace(,"}),"}) /import\s*{\s*motion\s*}\s*from\s*['"]framer-motion[,"}),"}) '"];?\s*/g,,"}),"}) "import { motion } from 'framer-motion,"}),"}) ';\n","}),"}) ),"}),"}) }"}),"}) ,"}),"}) optimizeRadixImports(content) {,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) const matches = [...content.matchAll(radixPattern)],"}),"}) ,"}),"}) if (matches.length > 1) {,"}),"}) const groupedImports = new Map(),"}),"}) matches.forEach(match => {,"}),"}) const components = match[1].split(,"}),"}) ',').map(comp => comp.trim()),"}),"}) const packageName = match[2],"}),"}) if (!groupedImports.has(packageName)) {,"}),"}) groupedImports.set(packageName,new Set()),"}),"}) }"}),"}) components.forEach(comp => groupedImports.get(packageName).add(comp)),"}),"}) }),"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) groupedImports.forEach((components,packageName) => {,"}),"}) optimizedImports += `import { ${Array.from(components).join(',,"}),"}) ')} } from '@radix-ui/${packageName}"}),"}) ';\n`,"}),"}) }),"}),"}) ,"}),"}) return content.replace(radixPattern,).replace(/^/,optimizedImports),"}),"}) }"}),"}) ,"}),"}) return content,"}),"}) }"}),"}) ,"}),"}) removeUnusedImports(content) {,"}),"}) const lines = content.split(,"}),"}) '\n'),"}),"}) const usedIdentifiers = new Set(),"}),"}) ,"}),"}) lines.forEach(line => {,"}),"}) if (!line.trim().startsWith(,"}),"}) 'import')) {,"}),"}) const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g),"}),"}) if (matches) {,"}),"}) matches.forEach(match => usedIdentifiers.add(match)),"}),"}) }"}),"}) }"}),"}) }),"}),"}) ,"}),"}) ursor/automate-test-fix-improve-and-merge-code-99d1,"}),"}) }"}),"}) }"}),"}) ,"}),"}) const optimizer = new ImportOptimizer(),"}),"}) optimizer.optimizeImports().catch(console.error),"}),"}) ,"}),"}) const __dirname = path.dirname(__filename); class ImportOptimizer {; constructor() {; this.projectRoot = process.cwd(); this.optimizedFiles = []; this.totalOptimizations = 0} async optimizeImports() {; console.log(';⚡ Optimizing imports to reduce bundle size...'); const directories = [';pages',';components',';src'];  } console.log(`✅ Optimized imports in ${this.optimizedFiles.length} files`);` console.log(`📊 Total optimizations: ${this.totalOptimizations}`)} async processDirectory(dirPath) {; const items = fs.readdirSync(dirPath);  else if (this.isJavaScriptFile(item)) {; await this.optimizeFile(itemPath)} } } isJavaScriptFile(filePath) {; const ext = path.extname(filePath); return [';.js',;.jsx',;.ts',;.tsx'].includes(ext)}'; async: optimizeFile(filePath) { try { const content = fs.readFileSync(filePath 'utf8')';; let: optimizedContent = content; let: optimizations = 0; optimizedContent: = this.optimizeLucideImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeFramerMotionImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.optimizeRadixImports(optimizedContent); if: (optimizedContent !== content) optimizations++; optimizedContent: = this.removeUnusedImports(optimizedContent); if: (optimizedContent !== content) optimizations++; if: (optimizations > 0) { fs.writeFileSync(filePath,optimizedContent 'utf8')';; this.optimizedFiles.push(filePath); this.totalOptimizations: += optimizations; console.log( `⚡ Optimized: ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}`)} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[';']lucide-react[];?\s*/g: const matches = [...content.matchAll(lucidePattern)]';; if: (matches.length > 1) { const allIcons = new Set(); matches.forEach(match: => { const icons = match[1].split( ',').map(icon => icon.trim())';; icons.forEach(icon: => allIcons.add(icon))}) const optimizedImport = `import { ${Array.from(allIcons).join( ',')} } from';';lucide-react';\n`; return: content.replace(lucidePattern,;';).replace(/^/,optimizedImport) }'; return: content} optimizeFramerMotionImports(content) { return: content.replace( /import\s*{\s*motion\s*}\s*from\s*[]framer-motion[';';'];?\s*/g,;import { motion } from 'framer-motion';;;\n')}'; optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[]@radix-ui\/([^';';']+)['"];?\s*/g: const matches = [...content.matchAll(radixPattern)];"; if: (matches.length > 1) { const groupedImports = new Map(); matches.forEach(match: => { const components = match[1].split( ',').map(comp => comp.trim())';; const packageName = match[2]; if: (!groupedImports.has(packageName)) { groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}) let optimizedImports = ;'; groupedImports.forEach((components,packageName) => {'; optimizedImports: += `import { ${Array.from(components).join(',;)} } from: '@radix-ui/${packageName};;\n`}) return: content.replace(radixPattern,).replace(/^/,optimizedImports)}'; return: content} removeUnusedImports(content) { const lines = content.split( '\n')';; const usedIdentifiers = new Set(); lines.forEach(line: => { if (!line.trim().startsWith( 'import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if: (matches) { '.tsx'].includes(ext)} async optimizeFile(filePath) {; try {; const content = fs.readFileSync(filePath,optimizedContent = this.optimizeLucideImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeFramerMotionImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.optimizeRadixImports(optimizedContent); if (optimizedContent !== content) optimizations++; optimizedContent = this.removeUnusedImports(optimizedContent); if (optimizedContent !== content) optimizations++; if (optimizations > 0) {; fs.writeFileSync(filePath,optimizedContent,';utf8'); this.optimizedFiles.push(filePath); this.totalOptimizations += optimizations; console.log( `⚡ Optimized ${optimizations} import(s) in ${path.relative(this.projectRoot,filePath)}` )} } catch (error) { console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) { const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?\s*/g; const matches = [...content.matchAll(lucidePattern)]; console.error(`❌ Error optimizing file ${filePath}:`,error.message)} } optimizeLucideImports(content) {; const lucidePattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[;` ]lucide-react[];?\s*/g const matches = [...content.matchAll(lucidePattern)]; if (matches.length > 1) { const allIcons = new Set(); matches.forEach(match => { const icons = match[1].split(',',).map(icon => icon.trim()); icons.forEach(icon => allIcons.add(icon));) const optimizedImport = `import { ${Array.from(allIcons).join(` ',')} } from';lucide-react';\n`;` return content.replace(lucidePattern,;).replace(/^/,optimizedImport) } 'lucide-react';\n`; return content.replace(lucidePattern,).replace(/^/,optimizedImport) } return content} optimizeFramerMotionImports(content) {; return content.replace(' /import\s*{\s*motion\s*}\s*from\s*[]framer-motion[';'];?\s*/g 'import { motion } from 'framer-motion;;\n')} optimizeRadixImports(content) { const radixPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*[']@radix-ui\/([^']+)['"];?\s*/g const matches = [...content.matchAll(radixPattern)]; if (matches.length > 1) {; const groupedImports = new Map(); matches.forEach(match => {; const components = match[1].split(',').map(comp => comp.trim()); optimizedImports += `import { ${Array.from(components).join(',')} } from '@radix-ui/${packageName} ';\n`})` return content.replace(radixPattern,).replace(/^/,optimizedImports)} const packageName = match[2]; if (!groupedImports.has(packageName)) {; groupedImports.set(packageName,new Set())} components.forEach(comp => groupedImports.get(packageName).add(comp))}); let optimizedImports = ; groupedImports.forEach((components,packageName) => {; optimizedImports += `import { ${Array.from(components).join(',';)} } from '@radix-ui/${packageName} ';\n`}); return content.replace(radixPattern,').replace(/^/,optimizedImports)} return content} removeUnusedImports(content) {; const lines = content.split(','\n'); const usedIdentifiers = new Set(); lines.forEach(line => { if (!line.trim().startsWith(' 'import')) { const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) { matches.forEach(match => usedIdentifiers.add(match)); const lines = content.split(;)';\n')';; const usedIdentifiers = new Set()';; lines.forEach(line => {;); if (!line.trim().startsWith(;)';import')) {'; const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g); if (matches) {; matches.forEach(match => usedIdentifiers.add(match))} } }); return lines .filter(line => { if (line.trim().startsWith('import')) { const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from/); if (importMatch) { const importedItems = importMatch[1] .split(',') .map(item => item.trim()); const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item) ); return hasUsedItems} } return true}) .join('\n')} const hasUsedItems = importedItems.some(item => usedIdentifiers.has(item)); return hasUsedItems} } return true}).join(','\n') } } const optimizer = new ImportOptimizer(); optimizer.optimizeImports().catch(console.error);`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
