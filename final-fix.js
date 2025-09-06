<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
#!/usr/bin/env node; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); function fixFile(filePath) { try { const content = fs.readFileSync(filePath,"utf8"); let fixed = content; fixed = fixed.replace(/import\s+[^]+$/gm,(match) => { if (!match.endsWith(";")) { return match + ";",} return match}); fixed = fixed.replace(/<([^>]+)\s*>/g,(match) => { return match.replace(/\s+/g," ").trim()}); fixed = fixed.replace(/\[\s*([^\]]+)\s*\]/g,"[$1]"); fixed = fixed.replace(/\{\s*([^}]+)\s*\}/g,"{$1}"); fixed = fixed.replace(/\]\s*\[/g,"],["); fixed = fixed.replace(/\}\s*\{/g,"},{"); if (content !== fixed) { fs.writeFileSync(filePath,fixed,"utf8");  return true} return false} catch (error) { console.error(`Error: ${filePath}`,error.message); return false} } ; function processDirectory(dirPath) { const files = fs.readdirSync(dirPath); let fixedCount = 0; for (const file of files) { const fullPath = path.join(dirPath,file); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { fixedCount += processDirectory(fullPath)} else if (file.endsWith(".tsx") || file.endsWith(".ts") || file.endsWith(".jsx") || file.endsWith(".js")) { if (fixFile(fullPath)) { fixedCount++,} } } ; return fixedCount} ; const srcDir = path.join(__dirname,"src");  const totalFixed = processDirectory(srcDir); 
<<<<<<< HEAD
=======
=======
#!/usr/bin/env node; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); function fixFile(filePath) { try { const content = fs.readFileSync(filePath,"utf8"); let fixed = content; fixed = fixed.replace(/import\s+[^]+$/gm,(match) => { if (!match.endsWith(";")) { return match + ";",} return match}); fixed = fixed.replace(/<([^>]+)\s*>/g,(match) => { return match.replace(/\s+/g," ").trim()}); fixed = fixed.replace(/\[\s*([^\]]+)\s*\]/g,"[$1]"); fixed = fixed.replace(/\{\s*([^}]+)\s*\}/g,"{$1}"); fixed = fixed.replace(/\]\s*\[/g,"],["); fixed = fixed.replace(/\}\s*\{/g,"},{"); if (content !== fixed) { fs.writeFileSync(filePath,fixed,"utf8");  return true} return false} catch (error) { console.error(`Error: ${filePath}`,error.message); return false} } ; function processDirectory(dirPath) { const files = fs.readdirSync(dirPath); let fixedCount = 0;  else if (file.endsWith(".tsx") || file.endsWith(".ts") || file.endsWith(".jsx") || file.endsWith(".js")) { if (fixFile(fullPath)) { fixedCount++,} } } ; return fixedCount} ; const srcDir = path.join(__dirname,"src");  const totalFixed = processDirectory(srcDir); 
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
#!/usr/bin/env node;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
function fixFile(filePath) {
  try {
  const content = fs.readFileSync(filePath, "utf8");
    let fixed = content;
    // Fix missing semicolons after imports;
    fixed = fixed.replace(/import\s+[^]+$/gm, (match) => {
  if (!match.endsWith(";")) {
  return match + ";"}
      return match});
    // Fix broken JSX syntax;
    fixed = fixed.replace(/<([^>]+)\s*>/g, (match) => {
  return match.replace(/\s+/g, " ").trim()});
    // Fix malformed arrays and objects;
    fixed = fixed.replace(/\[\s*([^\]]+)\s*\]/g, "[$1]");
    fixed = fixed.replace(/\{\s*([^}]+)\s*\}/g, "{$1}");
    // Fix missing commas;
    fixed = fixed.replace(/\]\s*\[/g, "], [");
    fixed = fixed.replace(/\}\s*\{/g, "}, {");
    if (content !== fixed) {
  fs.writeFileSync(filePath, fixed, "utf8");
      console.log("""Fixed": ${filePath}"");
      return true}
    return false} catch (error) {
  console.error(`"Error": ${filePath}`, error.message);
    return false}
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
}
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
;
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
  for (const file of files) {
  const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
  fixedCount += processDirectory(fullPath)} else if (file.endsWith(".tsx") || file.endsWith(".ts") || file.endsWith(".jsx") || file.endsWith(".js")) {
<<<<<<< HEAD
=======
=======
   else if (file.endsWith(".tsx") || file.endsWith(".ts") || file.endsWith(".jsx") || file.endsWith(".js")) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
  if (fixFile(fullPath)) {
  fixedCount++}
    }
  }
  ;
  return fixedCount}
;
const srcDir = path.join(__dirname, "src");
console.log("Final fix...");
const totalFixed = processDirectory(srcDir);
console.log(""Fixed ${totalFixed} files"")
<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); function fixFile(filePath) { try { const content = fs.readFileSync(filePath,"utf8"); let fixed = content; fixed = fixed.replace(/import\s+[^]+$/gm,(match) => { if (!match.endsWith(";")) { return match + ";",} return match}); fixed = fixed.replace(/<([^>]+)\s*>/g,(match) => { return match.replace(/\s+/g," ").trim()}); fixed = fixed.replace(/\[\s*([^\]]+)\s*\]/g,"[$1]"); fixed = fixed.replace(/\{\s*([^}]+)\s*\}/g,"{$1}"); fixed = fixed.replace(/\]\s*\[/g,"],["); fixed = fixed.replace(/\}\s*\{/g,"},{"); if (content !== fixed) { fs.writeFileSync(filePath,fixed,"utf8"); console.log(``Fixed: ${filePath}``); return true} return false} catch (error) { console.error(`Error: ${filePath}`,error.message); return false} } ; function processDirectory(dirPath) { const files = fs.readdirSync(dirPath); let fixedCount = 0; for (const file of files) { const fullPath = path.join(dirPath,file); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { fixedCount += processDirectory(fullPath)} else if (file.endsWith(".tsx") || file.endsWith(".ts") || file.endsWith(".jsx") || file.endsWith(".js")) { if (fixFile(fullPath)) { fixedCount++,} } } ; return fixedCount} ; const srcDir = path.join(__dirname,"src"); console.log("Final fix..."); const totalFixed = processDirectory(srcDir); console.log(``Fixed ${totalFixed} files``)
#!/usr/bin/env node; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); function fixFile(filePath) { try { const content = fs.readFileSync(filePath,"utf8"); let fixed = content; fixed = fixed.replace(/import\s+[^]+$/gm,(match) => { if (!match.endsWith(";")) { return match + ";",} return match}); fixed = fixed.replace(/<([^>]+)\s*>/g,(match) => { return match.replace(/\s+/g," ").trim()}); fixed = fixed.replace(/\[\s*([^\]]+)\s*\]/g,"[$1]"); fixed = fixed.replace(/\{\s*([^}]+)\s*\}/g,"{$1}"); fixed = fixed.replace(/\]\s*\[/g,"],["); fixed = fixed.replace(/\}\s*\{/g,"},{"); if (content !== fixed) { fs.writeFileSync(filePath,fixed,"utf8"); console.log(``Fixed: ${filePath}``); return true} return false} catch (error) { console.error(`Error: ${filePath}`,error.message); return false} } ; function processDirectory(dirPath) { const files = fs.readdirSync(dirPath); let fixedCount = 0; for (const file of files) { const fullPath = path.join(dirPath,file); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { fixedCount += processDirectory(fullPath)} else if (file.endsWith(".tsx") || file.endsWith(".ts") || file.endsWith(".jsx") || file.endsWith(".js")) { if (fixFile(fullPath)) { fixedCount++,} } } ; return fixedCount} ; const srcDir = path.join(__dirname,"src"); console.log("Final fix..."); const totalFixed = processDirectory(srcDir); console.log(``Fixed ${totalFixed} files``)
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
#!/usr/bin/env node; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); function fixFile(filePath) { try { const content = fs.readFileSync(filePath,"utf8"); let fixed = content; fixed = fixed.replace(/import\s+[^]+$/gm,(match) => { if (!match.endsWith(";")) { return match + ";",} return match}); fixed = fixed.replace(/<([^>]+)\s*>/g,(match) => { return match.replace(/\s+/g," ").trim()}); fixed = fixed.replace(/\[\s*([^\]]+)\s*\]/g,"[$1]"); fixed = fixed.replace(/\{\s*([^}]+)\s*\}/g,"{$1}"); fixed = fixed.replace(/\]\s*\[/g,"],["); fixed = fixed.replace(/\}\s*\{/g,"},{"); if (content !== fixed) { fs.writeFileSync(filePath,fixed,"utf8"); console.log(``Fixed: ${filePath}``); return true} return false} catch (error) { console.error(`Error: ${filePath}`,error.message); return false} } ; function processDirectory(dirPath) { const files = fs.readdirSync(dirPath); let fixedCount = 0; for (const file of files) { const fullPath = path.join(dirPath,file); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { fixedCount += processDirectory(fullPath)} else if (file.endsWith(".tsx") || file.endsWith(".ts") || file.endsWith(".jsx") || file.endsWith(".js")) { if (fixFile(fullPath)) { fixedCount++,} } } ; return fixedCount} ; const srcDir = path.join(__dirname,"src"); console.log("Final fix..."); const totalFixed = processDirectory(srcDir); console.log(``Fixed ${totalFixed} files``)
=======
#!/usr/bin/env node; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); function fixFile(filePath) { try { const content = fs.readFileSync(filePath,"utf8"); let fixed = content; fixed = fixed.replace(/import\s+[^]+$/gm,(match) => { if (!match.endsWith(";")) { return match + ";",} return match}); fixed = fixed.replace(/<([^>]+)\s*>/g,(match) => { return match.replace(/\s+/g," ").trim()}); fixed = fixed.replace(/\[\s*([^\]]+)\s*\]/g,"[$1]"); fixed = fixed.replace(/\{\s*([^}]+)\s*\}/g,"{$1}"); fixed = fixed.replace(/\]\s*\[/g,"],["); fixed = fixed.replace(/\}\s*\{/g,"},{"); if (content !== fixed) { fs.writeFileSync(filePath,fixed,"utf8"); console.log(``Fixed: ${filePath}``); return true} return false} catch (error) { console.error(`Error: ${filePath}`,error.message); return false} } ; function processDirectory(dirPath) { const files = fs.readdirSync(dirPath); let fixedCount = 0; for (const file of files) { const fullPath = path.join(dirPath,file); const stat = fs.statSync(fullPath); if (stat.isDirectory()) { fixedCount += processDirectory(fullPath)} else if (file.endsWith(".tsx") || file.endsWith(".ts") || file.endsWith(".jsx") || file.endsWith(".js")) { if (fixFile(fullPath)) { fixedCount++,} } } ; return fixedCount} ; const srcDir = path.join(__dirname,"src"); console.log("Final fix..."); const totalFixed = processDirectory(srcDir); console.log(``Fixed ${totalFixed} files``)
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
=======
#!/usr/bin/env node; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); function fixFile(filePath) { try { const content = fs.readFileSync(filePath,"utf8"); let fixed = content; fixed = fixed.replace(/import\s+[^]+$/gm,(match) => { if (!match.endsWith(";")) { return match + ";",} return match}); fixed = fixed.replace(/<([^>]+)\s*>/g,(match) => { return match.replace(/\s+/g," ").trim()}); fixed = fixed.replace(/\[\s*([^\]]+)\s*\]/g,"[$1]"); fixed = fixed.replace(/\{\s*([^}]+)\s*\}/g,"{$1}"); fixed = fixed.replace(/\]\s*\[/g,"],["); fixed = fixed.replace(/\}\s*\{/g,"},{"); if (content !== fixed) { fs.writeFileSync(filePath,fixed,"utf8"); console.log(``Fixed: ${filePath}``); return true} return false} catch (error) { console.error(`Error: ${filePath}`,error.message); return false} } ; function processDirectory(dirPath) { const files = fs.readdirSync(dirPath); let fixedCount = 0;  else if (file.endsWith(".tsx") || file.endsWith(".ts") || file.endsWith(".jsx") || file.endsWith(".js")) { if (fixFile(fullPath)) { fixedCount++,} } } ; return fixedCount} ; const srcDir = path.join(__dirname,"src"); console.log("Final fix..."); const totalFixed = processDirectory(srcDir); console.log(``Fixed ${totalFixed} files``)
#!/usr/bin/env node; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); function fixFile(filePath) { try { const content = fs.readFileSync(filePath,"utf8"); let fixed = content; fixed = fixed.replace(/import\s+[^]+$/gm,(match) => { if (!match.endsWith(";")) { return match + ";",} return match}); fixed = fixed.replace(/<([^>]+)\s*>/g,(match) => { return match.replace(/\s+/g," ").trim()}); fixed = fixed.replace(/\[\s*([^\]]+)\s*\]/g,"[$1]"); fixed = fixed.replace(/\{\s*([^}]+)\s*\}/g,"{$1}"); fixed = fixed.replace(/\]\s*\[/g,"],["); fixed = fixed.replace(/\}\s*\{/g,"},{"); if (content !== fixed) { fs.writeFileSync(filePath,fixed,"utf8"); console.log(``Fixed: ${filePath}``); return true} return false} catch (error) { console.error(`Error: ${filePath}`,error.message); return false} } ; function processDirectory(dirPath) { const files = fs.readdirSync(dirPath); let fixedCount = 0;  else if (file.endsWith(".tsx") || file.endsWith(".ts") || file.endsWith(".jsx") || file.endsWith(".js")) { if (fixFile(fullPath)) { fixedCount++,} } } ; return fixedCount} ; const srcDir = path.join(__dirname,"src"); console.log("Final fix..."); const totalFixed = processDirectory(srcDir); console.log(``Fixed ${totalFixed} files``)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
