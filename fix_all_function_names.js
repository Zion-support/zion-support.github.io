<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
import fs from "fs"; import path from "path"; import { glob } from "glob"; function fileName = path.basename(filePath,path.extname(filePath)); const functionMatch = content.match( /const\s+([^:]+):\s*NextPage\s*=\s*\(\)\s*=>\s*{/,); if (!functionMatch) return false; const currentFunctionName = functionMatch[1]; 5: "Five",4: "Four",3: "Three",2: "Two",1: "One",0: "Zero",}; return numberWords[digit] || `_${digit}`})}; return numberWords[digit] || `_${digit}`}); if (currentFunctionName === functionName) return false; let fixedContent = content.replace( new RegExp( `const\\s+${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,),`const ${functionName}: NextPage = () => {`,); fixedContent = fixedContent.replace( new RegExp( `export\\s+default\\s+${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`export default ${functionName}`,); fixedContent = fixedContent.replace( new RegExp( `<title>${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`<title>${fileName.replace(/-/g," ").replace(/\b\w/g,(l) => l.toUpperCase())}`,); fixedContent = fixedContent.replace( new RegExp( `content="${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`content="${fileName.replace(/-/g," ").replace(/\b\w/g,(l) => l.toUpperCase())}`,); if (fixedContent !== content) { fs.writeFileSync(filePath,fixedContent,"utf8"); `Fixed function name in: ${filePath} (${currentFunctionName} -> ${functionName})`,); return false; async function fixAllFiles() { const files = await glob("pages*.{ts,tsx}",{ ignore: ["node_modules/**",".next/**"],}); const fixedCount = 0; for (const file of files) { if (fixFunctionName(file)) { fixedCount++} } fixAllFiles()}}}}}}}}} return true} return false} catch (error) { console.error(`Error processing ${filePath}:`,error.message); return false} } async function fixedCount = 0; for (const file of files) { if (fixFunctionName(file)) { fixedCount++} } } fixAllFiles(); export default fileName; export default fileName; export default fileName; export default fileName; export default fileName; export default fileName; export default fileName;
=======
import fs from "fs"; import path from "path"; import { glob } from "glob"; function fileName = path.basename(filePath,path.extname(filePath)); const functionMatch = content.match( /const\s+([^:]+):\s*NextPage\s*=\s*\(\)\s*=>\s*{/,); if (!functionMatch) return false; const currentFunctionName = functionMatch[1]; 5: "Five",4: "Four",3: "Three",2: "Two",1: "One",0: "Zero",}; return numberWords[digit] || `_${digit}`})}; return numberWords[digit] || `_${digit}`}); if (currentFunctionName === functionName) return false; let fixedContent = content.replace( new RegExp( `const\\s+${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,),`const ${functionName}: NextPage = () => {`,); fixedContent = fixedContent.replace( new RegExp( `export\\s+default\\s+${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`export default ${functionName}`,); fixedContent = fixedContent.replace( new RegExp( `<title>${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`<title>${fileName.replace(/-/g," ").replace(/\b\w/g,(l) => l.toUpperCase())}`,); fixedContent = fixedContent.replace( new RegExp( `content="${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`content="${fileName.replace(/-/g," ").replace(/\b\w/g,(l) => l.toUpperCase())}`,); if (fixedContent !== content) { fs.writeFileSync(filePath,fixedContent,"utf8"); `Fixed function name in: ${filePath} (${currentFunctionName} -> ${functionName})`,); return false; async function fixAllFiles() { const files = await glob("pages*.{ts,tsx}",{ ignore: ["node_modules/**",".next/**"],}); const fixedCount = 0;  } fixAllFiles()}}}}}}}}} return true} return false} catch (error) { console.error(`Error processing ${filePath}:`,error.message); return false} } async function fixedCount = 0;  } } fixAllFiles(); export default fileName; export default fileName; export default fileName; export default fileName; export default fileName; export default fileName; export default fileName;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
import fs from "fs"; import path from "path"; import { glob } from "glob"; function fileName = path.basename(filePath,path.extname(filePath)); const functionMatch = content.match( /const\s+([^:]+):\s*NextPage\s*=\s*\(\)\s*=>\s*{/,); if (!functionMatch) return false; const currentFunctionName = functionMatch[1]; 5: "Five",4: "Four",3: "Three",2: "Two",1: "One",0: "Zero",}; return numberWords[digit] || `_${digit}`})}; return numberWords[digit] || `_${digit}`}); if (currentFunctionName === functionName) return false; let fixedContent = content.replace( new RegExp( `const\\s+${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,),`const ${functionName}: NextPage = () => {`,); fixedContent = fixedContent.replace( new RegExp( `export\\s+default\\s+${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`export default ${functionName}`,); fixedContent = fixedContent.replace( new RegExp( `<title>${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`<title>${fileName.replace(/-/g," ").replace(/\b\w/g,(l) => l.toUpperCase())}`,); fixedContent = fixedContent.replace( new RegExp( `content="${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`content="${fileName.replace(/-/g," ").replace(/\b\w/g,(l) => l.toUpperCase())}`,); if (fixedContent !== content) { fs.writeFileSync(filePath,fixedContent,"utf8"); `Fixed function name in: ${filePath} (${currentFunctionName} -> ${functionName})`,); return false; async function fixAllFiles() { const files = await glob("pages*.{ts,tsx}",{ ignore: ["node_modules/**",".next/**"],}); const fixedCount = 0; for (const file of files) { if (fixFunctionName(file)) { fixedCount++} } fixAllFiles()}}}}}}}}} return true} return false} catch (error) { console.error(`Error processing ${filePath}:`,error.message); return false} } async function fixedCount = 0; for (const file of files) { if (fixFunctionName(file)) { fixedCount++} } } fixAllFiles(); export default fileName; export default fileName; export default fileName; export default fileName; export default fileName; export default fileName; export default fileName;
>>>>>>> origin/main
import fs from "fs";
import path from "path";
import { glob } from "glob";
function fixFunctionName(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    const fileName = path.basename(filePath, path.extname(filePath));
    // Find the current function name in the file
    const functionMatch = content.match(
      /const\s+([^:]+):\s*NextPage\s*=\s*\(\)\s*=>\s*{/,
    );
    if (!functionMatch) return false;
    const currentFunctionName = functionMatch[1];
    // Convert filename to valid function name
    let functionName = fileName
      .replace(/[^a-zA-Z0-9]/g, "")
      .replace(/^(\d)/, (match, digit) => {
        const numberWords = {
          5: "Five",
          4: "Four",
          3: "Three",
          2: "Two",
          1: "One",
          0: "Zero",
        };
        return numberWords[digit] || `_${digit}`;
      });
    // If the function name is already valid, skip
    if (currentFunctionName === functionName) return false;
    // Replace the function name throughout the file
    let fixedContent = content.replace(
      new RegExp(
        `const\\s+${currentFunctionName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,
      ),
      `const ${functionName}: NextPage = () => {`,
    );
    // Also replace the export default
    fixedContent = fixedContent.replace(
      new RegExp(
        `export\\s+default\\s+${currentFunctionName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`,
      ),
      `export default ${functionName}`,
    );
    // Replace in title and description
    fixedContent = fixedContent.replace(
      new RegExp(
        `<title>${currentFunctionName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`,
      ),
      `<title>${fileName.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}`,
    );
    fixedContent = fixedContent.replace(
      new RegExp(
        `content="${currentFunctionName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`,
      ),
      `content="${fileName.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}`,
    );
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent, "utf8");
      console.log(
        `Fixed function name in: ${filePath} (${currentFunctionName} -> ${functionName})`,
      );
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}
async function fixAllFiles() {
  const files = await glob("pages/**/*.{ts,tsx}", {
    "ignore": ["node_modules/**", ".next/**"]});
  const fixedCount = 0;
<<<<<<< HEAD
  
=======
  for (const file of files) {
    if (fixFunctionName(file)) {
      fixedCount++}
>>>>>>> origin/main
  }
  // // // // // // // console.log(`Fixed ${fixedCount} files.`)}
fixAllFiles()}}}}}}}}}
      return true}
    return false} catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false}
<<<<<<< HEAD

async function fixedCount = 0;
  
=======
}
async function fixedCount = 0;
  for (const file of files) {
    if (fixFunctionName(file)) {
      fixedCount++}
>>>>>>> origin/main
  }
  console.log(`Fixed ${fixedCount} files.`)}
fixAllFiles();
export default fileName;
export default fileName;
export default fileName;
export default fileName;
export default fileName;
export default fileName;
export default fileName;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import fs from "fs"; import path from "path"; import { glob } from "glob"; function fileName = path.basename(filePath,path.extname(filePath)); const functionMatch = content.match( /const\s+([^:]+):\s*NextPage\s*=\s*\(\)\s*=>\s*{/,); if (!functionMatch) return false; const currentFunctionName = functionMatch[1]; 5: "Five",4: "Four",3: "Three",2: "Two",1: "One",0: "Zero",}; return numberWords[digit] || `_${digit}`})}; return numberWords[digit] || `_${digit}`}); if (currentFunctionName === functionName) return false; let fixedContent = content.replace( new RegExp( `const\\s+${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,),`const ${functionName}: NextPage = () => {`,); fixedContent = fixedContent.replace( new RegExp( `export\\s+default\\s+${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`export default ${functionName}`,); fixedContent = fixedContent.replace( new RegExp( `<title>${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`<title>${fileName.replace(/-/g," ").replace(/\b\w/g,(l) => l.toUpperCase())}`,); fixedContent = fixedContent.replace( new RegExp( `content="${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`content="${fileName.replace(/-/g," ").replace(/\b\w/g,(l) => l.toUpperCase())}`,); if (fixedContent !== content) { fs.writeFileSync(filePath,fixedContent,"utf8"); `Fixed function name in: ${filePath} (${currentFunctionName} -> ${functionName})`,); return false; async function fixAllFiles() { const files = await glob("pages*.{ts,tsx}",{ ignore: ["node_modules/**",".next/**"],}); const fixedCount = 0; for (const file of files) { if (fixFunctionName(file)) { fixedCount++} } fixAllFiles()}}}}}}}}} return true} return false} catch (error) { console.error(`Error processing ${filePath}:`,error.message); return false} } async function fixedCount = 0; for (const file of files) { if (fixFunctionName(file)) { fixedCount++} } console.log(`Fixed ${fixedCount} files.`)} fixAllFiles(); export default fileName; export default fileName; export default fileName; export default fileName; export default fileName; export default fileName; export default fileName;
=======
import fs from "fs"; import path from "path"; import { glob } from "glob"; function fileName = path.basename(filePath,path.extname(filePath)); const functionMatch = content.match( /const\s+([^:]+):\s*NextPage\s*=\s*\(\)\s*=>\s*{/,); if (!functionMatch) return false; const currentFunctionName = functionMatch[1]; 5: "Five",4: "Four",3: "Three",2: "Two",1: "One",0: "Zero",}; return numberWords[digit] || `_${digit}`})}; return numberWords[digit] || `_${digit}`}); if (currentFunctionName === functionName) return false; let fixedContent = content.replace( new RegExp( `const\\s+${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,),`const ${functionName}: NextPage = () => {`,); fixedContent = fixedContent.replace( new RegExp( `export\\s+default\\s+${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`export default ${functionName}`,); fixedContent = fixedContent.replace( new RegExp( `<title>${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`<title>${fileName.replace(/-/g," ").replace(/\b\w/g,(l) => l.toUpperCase())}`,); fixedContent = fixedContent.replace( new RegExp( `content="${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`content="${fileName.replace(/-/g," ").replace(/\b\w/g,(l) => l.toUpperCase())}`,); if (fixedContent !== content) { fs.writeFileSync(filePath,fixedContent,"utf8"); `Fixed function name in: ${filePath} (${currentFunctionName} -> ${functionName})`,); return false; async function fixAllFiles() { const files = await glob("pages*.{ts,tsx}",{ ignore: ["node_modules/**",".next/**"],}); const fixedCount = 0; for (const file of files) { if (fixFunctionName(file)) { fixedCount++} } fixAllFiles()}}}}}}}}} return true} return false} catch (error) { console.error(`Error processing ${filePath}:`,error.message); return false} } async function fixedCount = 0; for (const file of files) { if (fixFunctionName(file)) { fixedCount++} } console.log(`Fixed ${fixedCount} files.`)} fixAllFiles(); export default fileName; export default fileName; export default fileName; export default fileName; export default fileName; export default fileName; export default fileName;
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
import fs from "fs"; import path from "path"; import { glob } from "glob"; function fileName = path.basename(filePath,path.extname(filePath)); const functionMatch = content.match( /const\s+([^:]+):\s*NextPage\s*=\s*\(\)\s*=>\s*{/,); if (!functionMatch) return false; const currentFunctionName = functionMatch[1]; 5: "Five",4: "Four",3: "Three",2: "Two",1: "One",0: "Zero",}; return numberWords[digit] || `_${digit}`})}; return numberWords[digit] || `_${digit}`}); if (currentFunctionName === functionName) return false; let fixedContent = content.replace( new RegExp( `const\\s+${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,),`const ${functionName}: NextPage = () => {`,); fixedContent = fixedContent.replace( new RegExp( `export\\s+default\\s+${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`export default ${functionName}`,); fixedContent = fixedContent.replace( new RegExp( `<title>${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`<title>${fileName.replace(/-/g," ").replace(/\b\w/g,(l) => l.toUpperCase())}`,); fixedContent = fixedContent.replace( new RegExp( `content="${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`content="${fileName.replace(/-/g," ").replace(/\b\w/g,(l) => l.toUpperCase())}`,); if (fixedContent !== content) { fs.writeFileSync(filePath,fixedContent,"utf8"); `Fixed function name in: ${filePath} (${currentFunctionName} -> ${functionName})`,); return false; async function fixAllFiles() { const files = await glob("pages*.{ts,tsx}",{ ignore: ["node_modules/**",".next/**"],}); const fixedCount = 0;  } fixAllFiles()}}}}}}}}} return true} return false} catch (error) { console.error(`Error processing ${filePath}:`,error.message); return false} } async function fixedCount = 0;  } console.log(`Fixed ${fixedCount} files.`)} fixAllFiles(); export default fileName; export default fileName; export default fileName; export default fileName; export default fileName; export default fileName; export default fileName;
import fs from "fs"; import path from "path"; import { glob } from "glob"; function fileName = path.basename(filePath,path.extname(filePath)); const functionMatch = content.match( /const\s+([^:]+):\s*NextPage\s*=\s*\(\)\s*=>\s*{/,); if (!functionMatch) return false; const currentFunctionName = functionMatch[1]; 5: "Five",4: "Four",3: "Three",2: "Two",1: "One",0: "Zero",}; return numberWords[digit] || `_${digit}`})}; return numberWords[digit] || `_${digit}`}); if (currentFunctionName === functionName) return false; let fixedContent = content.replace( new RegExp( `const\\s+${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,),`const ${functionName}: NextPage = () => {`,); fixedContent = fixedContent.replace( new RegExp( `export\\s+default\\s+${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`export default ${functionName}`,); fixedContent = fixedContent.replace( new RegExp( `<title>${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`<title>${fileName.replace(/-/g," ").replace(/\b\w/g,(l) => l.toUpperCase())}`,); fixedContent = fixedContent.replace( new RegExp( `content="${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`content="${fileName.replace(/-/g," ").replace(/\b\w/g,(l) => l.toUpperCase())}`,); if (fixedContent !== content) { fs.writeFileSync(filePath,fixedContent,"utf8"); `Fixed function name in: ${filePath} (${currentFunctionName} -> ${functionName})`,); return false; async function fixAllFiles() { const files = await glob("pages*.{ts,tsx}",{ ignore: ["node_modules/**",".next/**"],}); const fixedCount = 0;  } fixAllFiles()}}}}}}}}} return true} return false} catch (error) { console.error(`Error processing ${filePath}:`,error.message); return false} } async function fixedCount = 0;  } console.log(`Fixed ${fixedCount} files.`)} fixAllFiles(); export default fileName; export default fileName; export default fileName; export default fileName; export default fileName; export default fileName; export default fileName;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
import fs from "fs"; import path from "path"; import { glob } from "glob"; function fileName = path.basename(filePath,path.extname(filePath)); const functionMatch = content.match( /const\s+([^:]+):\s*NextPage\s*=\s*\(\)\s*=>\s*{/,); if (!functionMatch) return false; const currentFunctionName = functionMatch[1]; 5: "Five",4: "Four",3: "Three",2: "Two",1: "One",0: "Zero",}; return numberWords[digit] || `_${digit}`})}; return numberWords[digit] || `_${digit}`}); if (currentFunctionName === functionName) return false; let fixedContent = content.replace( new RegExp( `const\\s+${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,),`const ${functionName}: NextPage = () => {`,); fixedContent = fixedContent.replace( new RegExp( `export\\s+default\\s+${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`export default ${functionName}`,); fixedContent = fixedContent.replace( new RegExp( `<title>${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`<title>${fileName.replace(/-/g," ").replace(/\b\w/g,(l) => l.toUpperCase())}`,); fixedContent = fixedContent.replace( new RegExp( `content="${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`content="${fileName.replace(/-/g," ").replace(/\b\w/g,(l) => l.toUpperCase())}`,); if (fixedContent !== content) { fs.writeFileSync(filePath,fixedContent,"utf8"); `Fixed function name in: ${filePath} (${currentFunctionName} -> ${functionName})`,); return false; async function fixAllFiles() { const files = await glob("pages*.{ts,tsx}",{ ignore: ["node_modules/**",".next/**"],}); const fixedCount = 0; for (const file of files) { if (fixFunctionName(file)) { fixedCount++} } fixAllFiles()}}}}}}}}} return true} return false} catch (error) { console.error(`Error processing ${filePath}:`,error.message); return false} } async function fixedCount = 0; for (const file of files) { if (fixFunctionName(file)) { fixedCount++} } console.log(`Fixed ${fixedCount} files.`)} fixAllFiles(); export default fileName; export default fileName; export default fileName; export default fileName; export default fileName; export default fileName; export default fileName;
<<<<<<< HEAD
import fs from "fs"; import path from "path"; import { glob } from "glob"; function fileName = path.basename(filePath,path.extname(filePath)); const functionMatch = content.match( /const\s+([^:]+):\s*NextPage\s*=\s*\(\)\s*=>\s*{/,); if (!functionMatch) return false; const currentFunctionName = functionMatch[1]; 5: "Five",4: "Four",3: "Three",2: "Two",1: "One",0: "Zero",}; return numberWords[digit] || `_${digit}`})}; return numberWords[digit] || `_${digit}`}); if (currentFunctionName === functionName) return false; let fixedContent = content.replace( new RegExp( `const\\s+${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,),`const ${functionName}: NextPage = () => {`,); fixedContent = fixedContent.replace( new RegExp( `export\\s+default\\s+${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`export default ${functionName}`,); fixedContent = fixedContent.replace( new RegExp( `<title>${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`<title>${fileName.replace(/-/g," ").replace(/\b\w/g,(l) => l.toUpperCase())}`,); fixedContent = fixedContent.replace( new RegExp( `content="${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`content="${fileName.replace(/-/g," ").replace(/\b\w/g,(l) => l.toUpperCase())}`,); if (fixedContent !== content) { fs.writeFileSync(filePath,fixedContent,"utf8"); `Fixed function name in: ${filePath} (${currentFunctionName} -> ${functionName})`,); return false; async function fixAllFiles() { const files = await glob("pages*.{ts,tsx}",{ ignore: ["node_modules/**",".next/**"],}); const fixedCount = 0; for (const file of files) { if (fixFunctionName(file)) { fixedCount++} } fixAllFiles()}}}}}}}}} return true} return false} catch (error) { console.error(`Error processing ${filePath}:`,error.message); return false} } async function fixedCount = 0; for (const file of files) { if (fixFunctionName(file)) { fixedCount++} } console.log(`Fixed ${fixedCount} files.`)} fixAllFiles(); export default fileName; export default fileName; export default fileName; export default fileName; export default fileName; export default fileName; export default fileName;
import fs from "fs"; import path from "path"; import { glob } from "glob"; function fileName = path.basename(filePath,path.extname(filePath)); const functionMatch = content.match( /const\s+([^:]+):\s*NextPage\s*=\s*\(\)\s*=>\s*{/,); if (!functionMatch) return false; const currentFunctionName = functionMatch[1]; 5: "Five",4: "Four",3: "Three",2: "Two",1: "One",0: "Zero",}; return numberWords[digit] || `_${digit}`})}; return numberWords[digit] || `_${digit}`}); if (currentFunctionName === functionName) return false; let fixedContent = content.replace( new RegExp( `const\\s+${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,),`const ${functionName}: NextPage = () => {`,); fixedContent = fixedContent.replace( new RegExp( `export\\s+default\\s+${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`export default ${functionName}`,); fixedContent = fixedContent.replace( new RegExp( `<title>${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`<title>${fileName.replace(/-/g," ").replace(/\b\w/g,(l) => l.toUpperCase())}`,); fixedContent = fixedContent.replace( new RegExp( `content="${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`content="${fileName.replace(/-/g," ").replace(/\b\w/g,(l) => l.toUpperCase())}`,); if (fixedContent !== content) { fs.writeFileSync(filePath,fixedContent,"utf8"); `Fixed function name in: ${filePath} (${currentFunctionName} -> ${functionName})`,); return false; async function fixAllFiles() { const files = await glob("pages*.{ts,tsx}",{ ignore: ["node_modules/**",".next/**"],}); const fixedCount = 0; for (const file of files) { if (fixFunctionName(file)) { fixedCount++} } fixAllFiles()}}}}}}}}} return true} return false} catch (error) { console.error(`Error processing ${filePath}:`,error.message); return false} } async function fixedCount = 0; for (const file of files) { if (fixFunctionName(file)) { fixedCount++} } console.log(`Fixed ${fixedCount} files.`)} fixAllFiles(); export default fileName; export default fileName; export default fileName; export default fileName; export default fileName; export default fileName; export default fileName;
=======
import fs from "fs"; import path from "path"; import { glob } from "glob"; function fileName = path.basename(filePath,path.extname(filePath)); const functionMatch = content.match( /const\s+([^:]+):\s*NextPage\s*=\s*\(\)\s*=>\s*{/,); if (!functionMatch) return false; const currentFunctionName = functionMatch[1]; 5: "Five",4: "Four",3: "Three",2: "Two",1: "One",0: "Zero",}; return numberWords[digit] || `_${digit}`})}; return numberWords[digit] || `_${digit}`}); if (currentFunctionName === functionName) return false; let fixedContent = content.replace( new RegExp( `const\\s+${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,),`const ${functionName}: NextPage = () => {`,); fixedContent = fixedContent.replace( new RegExp( `export\\s+default\\s+${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`export default ${functionName}`,); fixedContent = fixedContent.replace( new RegExp( `<title>${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`<title>${fileName.replace(/-/g," ").replace(/\b\w/g,(l) => l.toUpperCase())}`,); fixedContent = fixedContent.replace( new RegExp( `content="${currentFunctionName.replace(/[.*+?^${ }()|[\]\\]/g,"\\$&")}`,),`content="${fileName.replace(/-/g," ").replace(/\b\w/g,(l) => l.toUpperCase())}`,); if (fixedContent !== content) { fs.writeFileSync(filePath,fixedContent,"utf8"); `Fixed function name in: ${filePath} (${currentFunctionName} -> ${functionName})`,); return false; async function fixAllFiles() { const files = await glob("pages*.{ts,tsx}",{ ignore: ["node_modules/**",".next/**"],}); const fixedCount = 0; for (const file of files) { if (fixFunctionName(file)) { fixedCount++} } fixAllFiles()}}}}}}}}} return true} return false} catch (error) { console.error(`Error processing ${filePath}:`,error.message); return false} } async function fixedCount = 0; for (const file of files) { if (fixFunctionName(file)) { fixedCount++} } console.log(`Fixed ${fixedCount} files.`)} fixAllFiles(); export default fileName; export default fileName; export default fileName; export default fileName; export default fileName; export default fileName; export default fileName;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
>>>>>>> origin/main
