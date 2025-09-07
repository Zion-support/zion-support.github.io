

    // Clean up any remaining conflict markers;
    content = content.replace(/^.*$/gm, );"
    content = content.replace(/^

    // Remove empty lines that might be left behind;)"
    content = content.replace(/\n\s*\n\s*\n/g, "\n\n");"
    fs.writeFileSync(filePath, content);
    
    return true} catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false}
}

#!/usr/bin/env node"
const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")
console.log(" Starting lint error fixes...")
    let content = fs.readFileSync(filePath, "utf8")
    content = content.replace(/[\s\S]*?[\s\S]*?[^\n]*/g, )
    content = content.replace(/[^\n]*[\s\S]*?[\s\S]*?[^\n]*/g, )
    content = content.replace(/^.*$/gm, )
    content = content.replace(/^.*$/gm, )
    content = content.replace(/^.*$/gm, )
    content = content.replace(/\n\s*\n\s*\n/g, "\n\n")
    console.log(` Resolved conflicts "in"`)
    let content = fs.readFileSync(filePath, "utf8")
      if (line.includes('from "lucide-react") || line.includes(')
        const importMatch = line.match(/import\s*{([^}]+)}\s*from\s*["]lucide-react[]
cursor/fix-lint-push-and-merge-to-main-f3c1;
'