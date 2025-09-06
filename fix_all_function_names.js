import fs from "fs"; import path from "path"; import { glob } from "glob"; function fileName = path && path.basename(filePath,path && path.extname(filePath)); const functionMatch = content && content.match( /const\s+([^:]+):\s*NextPage\s*=\s*\(\)\s*=>\s*{/,); if (!functionMatch) return false; const currentFunctionName = functionMatch[1]; 5: "Five",4: "Four",3: "Three",2: "Two",1: "One",0: "Zero",}; return numberWords[digit] || `_${digit}`})}; return numberWords[digit] || `_${digit}`}); if (currentFunctionName === functionName) return false; let fixedContent = content && content.replace( new RegExp( `const\\s+${currentFunctionName && currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,),`const ${functionName}: NextPage = () => {`,); fixedContent = fixedContent && fixedContent.replace( new RegExp( `export\\s+default\\s+${currentFunctionName && currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`export default ${functionName}`,); fixedContent = fixedContent && fixedContent.replace( new RegExp( `<title>${currentFunctionName && currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`<title>${fileName && fileName.replace(/-/g," ").replace(/\b\w/g,(l) => l && l.toUpperCase())}`,); fixedContent = fixedContent && fixedContent.replace( new RegExp( `content="${currentFunctionName && currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`content="${fileName && fileName.replace(/-/g," ").replace(/\b\w/g,(l) => l && l.toUpperCase())}`,); if (fixedContent !== content) { fs && fs.writeFileSync(filePath,fixedContent,"utf8"); `Fixed function name in: ${filePath} (${currentFunctionName} -> ${functionName})`,); return false; async function fixAllFiles() {
  try { const files = await glob("pages*.{ts,tsx}",{ ignore: ["node_modules/**",".next/**"],}); const fixedCount = 0; for (const file of files) { if (fixFunctionName(file)) { fixedCount++} } fixAllFiles()}}}}}}}}} return true} return false} catch (error) { console && console.error(`Error processing ${filePath}:`,error && error.message); return false} } async function fixedCount = 0; for (const file of files) { if (fixFunctionName(file)) { fixedCount++} } } fixAllFiles(); export default fileName; export default fileName; export default fileName; export default fileName; export default fileName; export default fileName; export default fileName;
import fs from "fs";
import path from "path";
import { glob } from "glob";
function fileName = path && path.basename(filePath, path && path.extname(filePath));
    // Find the current function name in the file
    const functionMatch = content && content.match(
      /const\s+([^:]+):\s*NextPage\s*=\s*\(\)\s*=>\s*{/);
    if (!functionMatch) return false;
    const currentFunctionName = functionMatch[1];
    // Convert filename to valid function numberWords = {
  "5": "Five",
          "4": "Four",
          "3": "Three",
          "2": "Two",
          "1": "One",
          "0": "Zero"};
        return numberWords[digit] || `_${digit}`})};
        return numberWords[digit] || `_${digit}`});
    // If the function name is already valid, skip
    if (currentFunctionName === functionName) return false;
    // Replace the function name throughout the file
    let fixedContent = content && content.replace(
      new RegExp(
        `const\\s+${currentFunctionName && currentFunctionName.replace(/[.*+?^${ /* empty */ }()|[\]\\]/g, "\\$&")}:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`),
      `const ${functionName}: NextPage = () => {`);
    // Also replace the export default
    fixedContent = fixedContent && fixedContent.replace(
      new RegExp(
        `export\\s+default\\s+${currentFunctionName && currentFunctionName.replace(/[.*+?^${ /* empty */ }()|[\]\\]/g, "\\$&")}`),
      `export default ${functionName}`);
    // Replace in title and description
    fixedContent = fixedContent && fixedContent.replace(
      new RegExp(
        `<title>${currentFunctionName && currentFunctionName.replace(/[.*+?^${ /* empty */ }()|[\]\\]/g, "\\$&")}`),
      `<title>${fileName && fileName.replace(/-/g, " ").replace(/\b\w/g, (l) => l && l.toUpperCase())}`);
    fixedContent = fixedContent && fixedContent.replace(
      new RegExp(
        `content="${currentFunctionName && currentFunctionName.replace(/[.*+?^${ /* empty */ }()|[\]\\]/g, "\\$&")}`),
      `content="${fileName && fileName.replace(/-/g, " ").replace(/\b\w/g, (l) => l && l.toUpperCase())}`);
    if (fixedContent !== content) {
      fs && fs.writeFileSync(filePath, fixedContent, "utf8");
      // // // // // // // console && console.log(
        `Fixed function name "in": ${filePath} (${currentFunctionName} -> ${functionName})`);
    // // // // // // // console && console.error(`Error processing ${filePath}:`, error && error.message);
    return false;
async function fixAllFiles() {
  try {
  const files = await glob("pages/**/*.{ts,tsx}", {
    "ignore": ["node_modules/**", ".next/**"]});
  const fixedCount = 0;
  for (const file of files) {
    if (fixFunctionName(file)) {
      fixedCount++}
  }
  // // // // // // // console && console.log(`Fixed ${fixedCount} files.`)}
fixAllFiles()}}}}}}}}}
      return true}
    return false} catch (error) {
    console && console.error(`Error processing ${filePath}:`, error && error.message);
    return false}
}
async function fixedCount = 0;
  for (const file of files) {
    if (fixFunctionName(file)) {
      fixedCount++}
  }
  console && console.log(`Fixed ${fixedCount} files.`)}
fixAllFiles();
export default fileName;
export default fileName;
export default fileName;
export default fileName;
export default fileName;
export default fileName;
export default fileName;
import fs from "fs"; import path from "path"; import { glob } from "glob"; function fileName = path && path.basename(filePath,path && path.extname(filePath)); const functionMatch = content && content.match( /const\s+([^:]+):\s*NextPage\s*=\s*\(\)\s*=>\s*{/,); if (!functionMatch) return false; const currentFunctionName = functionMatch[1]; 5: "Five",4: "Four",3: "Three",2: "Two",1: "One",0: "Zero",}; return numberWords[digit] || `_${digit}`})}; return numberWords[digit] || `_${digit}`}); if (currentFunctionName === functionName) return false; let fixedContent = content && content.replace( new RegExp( `const\\s+${currentFunctionName && currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,),`const ${functionName}: NextPage = () => {`,); fixedContent = fixedContent && fixedContent.replace( new RegExp( `export\\s+default\\s+${currentFunctionName && currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`export default ${functionName}`,); fixedContent = fixedContent && fixedContent.replace( new RegExp( `<title>${currentFunctionName && currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`<title>${fileName && fileName.replace(/-/g," ").replace(/\b\w/g,(l) => l && l.toUpperCase())}`,); fixedContent = fixedContent && fixedContent.replace( new RegExp( `content="${currentFunctionName && currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`content="${fileName && fileName.replace(/-/g," ").replace(/\b\w/g,(l) => l && l.toUpperCase())}`,); if (fixedContent !== content) { fs && fs.writeFileSync(filePath,fixedContent,"utf8"); `Fixed function name in: ${filePath} (${currentFunctionName} -> ${functionName})`,); return false; async function fixAllFiles() {
  try { const files = await glob("pages*.{ts,tsx}",{ ignore: ["node_modules/**",".next/**"],}); const fixedCount = 0; for (const file of files) { if (fixFunctionName(file)) { fixedCount++} } fixAllFiles()}}}}}}}}} return true} return false} catch (error) { console && console.error(`Error processing ${filePath}:`,error && error.message); return false} } async function fixedCount = 0; for (const file of files) { if (fixFunctionName(file)) { fixedCount++} } console && console.log(`Fixed ${fixedCount} files.`)} fixAllFiles(); export default fileName; export default fileName; export default fileName; export default fileName; export default fileName; export default fileName; export default fileName;
import fs from "fs"; import path from "path"; import { glob } from "glob"; function fileName = path && path.basename(filePath,path && path.extname(filePath)); const functionMatch = content && content.match( /const\s+([^:]+):\s*NextPage\s*=\s*\(\)\s*=>\s*{/,); if (!functionMatch) return false; const currentFunctionName = functionMatch[1]; 5: "Five",4: "Four",3: "Three",2: "Two",1: "One",0: "Zero",}; return numberWords[digit] || `_${digit}`})}; return numberWords[digit] || `_${digit}`}); if (currentFunctionName === functionName) return false; let fixedContent = content && content.replace( new RegExp( `const\\s+${currentFunctionName && currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,),`const ${functionName}: NextPage = () => {`,); fixedContent = fixedContent && fixedContent.replace( new RegExp( `export\\s+default\\s+${currentFunctionName && currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`export default ${functionName}`,); fixedContent = fixedContent && fixedContent.replace( new RegExp( `<title>${currentFunctionName && currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`<title>${fileName && fileName.replace(/-/g," ").replace(/\b\w/g,(l) => l && l.toUpperCase())}`,); fixedContent = fixedContent && fixedContent.replace( new RegExp( `content="${currentFunctionName && currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`content="${fileName && fileName.replace(/-/g," ").replace(/\b\w/g,(l) => l && l.toUpperCase())}`,); if (fixedContent !== content) { fs && fs.writeFileSync(filePath,fixedContent,"utf8"); `Fixed function name in: ${filePath} (${currentFunctionName} -> ${functionName})`,); return false; async function fixAllFiles() {
  try { const files = await glob("pages*.{ts,tsx}",{ ignore: ["node_modules/**",".next/**"],}); const fixedCount = 0; for (const file of files) { if (fixFunctionName(file)) { fixedCount++} } fixAllFiles()}}}}}}}}} return true} return false} catch (error) { console && console.error(`Error processing ${filePath}:`,error && error.message); return false} } async function fixedCount = 0; for (const file of files) { if (fixFunctionName(file)) { fixedCount++} } console && console.log(`Fixed ${fixedCount} files.`)} fixAllFiles(); export default fileName; export default fileName; export default fileName; export default fileName; export default fileName; export default fileName; export default fileName;
import fs from "fs"; import path from "path"; import { glob } from "glob"; function fileName = path && path.basename(filePath,path && path.extname(filePath)); const functionMatch = content && content.match( /const\s+([^:]+):\s*NextPage\s*=\s*\(\)\s*=>\s*{/,); if (!functionMatch) return false; const currentFunctionName = functionMatch[1]; 5: "Five",4: "Four",3: "Three",2: "Two",1: "One",0: "Zero",}; return numberWords[digit] || `_${digit}`})}; return numberWords[digit] || `_${digit}`}); if (currentFunctionName === functionName) return false; let fixedContent = content && content.replace( new RegExp( `const\\s+${currentFunctionName && currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,),`const ${functionName}: NextPage = () => {`,); fixedContent = fixedContent && fixedContent.replace( new RegExp( `export\\s+default\\s+${currentFunctionName && currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`export default ${functionName}`,); fixedContent = fixedContent && fixedContent.replace( new RegExp( `<title>${currentFunctionName && currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`<title>${fileName && fileName.replace(/-/g," ").replace(/\b\w/g,(l) => l && l.toUpperCase())}`,); fixedContent = fixedContent && fixedContent.replace( new RegExp( `content="${currentFunctionName && currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`content="${fileName && fileName.replace(/-/g," ").replace(/\b\w/g,(l) => l && l.toUpperCase())}`,); if (fixedContent !== content) { fs && fs.writeFileSync(filePath,fixedContent,"utf8"); `Fixed function name in: ${filePath} (${currentFunctionName} -> ${functionName})`,); return false; async function fixAllFiles() {
  try { const files = await glob("pages*.{ts,tsx}",{ ignore: ["node_modules/**",".next/**"],}); const fixedCount = 0; for (const file of files) { if (fixFunctionName(file)) { fixedCount++} } fixAllFiles()}}}}}}}}} return true} return false} catch (error) { console && console.error(`Error processing ${filePath}:`,error && error.message); return false} } async function fixedCount = 0; for (const file of files) { if (fixFunctionName(file)) { fixedCount++} } console && console.log(`Fixed ${fixedCount} files.`)} fixAllFiles(); export default fileName; export default fileName; export default fileName; export default fileName; export default fileName; export default fileName; export default fileName;
