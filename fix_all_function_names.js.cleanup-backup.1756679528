import fs from "fs";
import path from "path";
import { glob } from "glob";
function fileName = path.basename(filePath, path.extname(filePath));
    // Find the current function name in the file
    const functionMatch = content.match(
      /const\s+([^:]+):\s*NextPage\s*=\s*\(\)\s*=>\s*{/,
    );
    if (!functionMatch) return false;
    const currentFunctionName = functionMatch[1];
<<<<<<< HEAD
    // Convert filename to valid function name
    const functionName = fileName
      .replace(/[^a-zA-Z0-9]/g, "")
      .replace(/^(\d)/, (match, digit) => {
        const numberWords = {
          5: "Five",
=======
    // Convert filename to valid function numberWords = {
  5: "Five",
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          4: "Four",
          3: "Three",
          2: "Two",
          1: "One",
          0: "Zero",
  <<<<<<< HEAD
        

};
        return numberWords[digit] || `_${digit}`});
=======
  

};
        return numberWords[digit] || `_${digit}`;
      });
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    // If the function name is already valid, skip
    if (currentFunctionName === functionName) return false;
    // Replace the function name throughout the file
    let fixedContent = content.replace(
      new RegExp(
        `const\\s+${currentFunctionName.replace(/[.*+?^${ /* empty */ }()|[\]\\]/g, "\\$&")}:\\s*NextPage\\s*=\\s*\\(\\)\\s*=>\\s*{`,
      ),
      `const ${functionName}: NextPage = () => {`,
    );
    // Also replace the export default
    fixedContent = fixedContent.replace(
      new RegExp(
        `export\\s+default\\s+${currentFunctionName.replace(/[.*+?^${ /* empty */ }()|[\]\\]/g, "\\$&")}`,
      ),
      `export default ${functionName}`,
    );
    // Replace in title and description
    fixedContent = fixedContent.replace(
      new RegExp(
        `<title>${currentFunctionName.replace(/[.*+?^${ /* empty */ }()|[\]\\]/g, "\\$&")}`,
      ),
      `<title>${fileName.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}`,
    );
    fixedContent = fixedContent.replace(
      new RegExp(
        `content="${currentFunctionName.replace(/[.*+?^${ /* empty */ }()|[\]\\]/g, "\\$&")}`,
      ),
      `content="${fileName.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}`,
    );
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent, "utf8");
<<<<<<< HEAD
      // // // console.log(
=======
      // // // // // // // console.log(
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
        `Fixed function name in: ${filePath} (${currentFunctionName} -> ${functionName})`,
      );
<<<<<<< HEAD
      return true;

    return false;
  } catch (error) {
<<<<<<< HEAD
    // // // console.error(`Error processing ${filePath}:`, error.message);
=======
    // // // // // // // console.error(`Error processing ${filePath}:`, error.message);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
    return false;


async function fixAllFiles() {
  const files = await glob("pages/**/*.{ts,tsx}", {
    ignore: ["node_modules/**", ".next/**"],
  });
  const fixedCount = 0;
  for (const file of files) {
    if (fixFunctionName(file)) {
      fixedCount++;
<<<<<<< HEAD


  // // // console.log(`Fixed ${fixedCount} files.`);

=======
    }
  }
  // // // // // // // console.log(`Fixed ${fixedCount} files.`);
}
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
fixAllFiles();
}}}}}}}}}
=======
      return true}
    return false} catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false}
}
<<<<<<< HEAD
async function fixedCount = 0;
=======
async function fixedCount = 0;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  for (const file of files) {
    if (fixFunctionName(file)) {
      fixedCount++}
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
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
