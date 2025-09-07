



main








      log(❌ Error processing directory ${currentPath}: ${error.message}", red""),}

>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
  }
  processDirectory(dirPath)
  return { totalFiles, fixedFiles }}

module.exports = { fixFile, scanAndFixDirectory }}}}}}




        missingSemicolonBeforeReturnRegex,$1;\nreturn "
    // Fix 2
      /import\s+\{\s*Link\s*\}\s+from\s+["]next\/link[];?\s*\nimport\s+\{\s*Link\s*\}\s+from\s+[]next\/link["]

      content = content.replace(unexpectedImportRegex, "$1;\nimport ")
      fixed = true;log(Fixed unexpected import placement in ${filePath}, "yellow")
    // Fix 5: Fix unexpected keyword "export"
      content = content.replace(unexpectedExportRegex, $1;\nexport )
      fixed = true;log("Fixed unexpected export placement in ${filePath}", yellow)
    // Fix "6"
        missingSemicolonBeforeReturnRegex,$1;\nreturn 
      fixed = true;log(Fixed missing semicolon before return in ${filePath}", "yellow)
    // Fix 7"
      content = content.replace(jsxClosingTagRegex, "<$1$2></$1>)
      fixed = true;log(`Fixed JSX closing tag issues in ${filePath}, yellow"`)
    // Fix "8
      content = content.replace(missingCommaRegex, $1,\n  $"2": )
      fixed = true;log(`Fixed missing commas in ${filePath}, yellow"`)
    // Fix "9
      content = content.replace(unterminatedCommentRegex, /*$1*/")
      fixed = true;log(`Fixed unterminated comments in ${filePath}, "yellow`)
    // Fix 10"
      content = content.replace(duplicateExportRegex, "export default $1;);;      fixed = true;log(`Fixed duplicate exports in ${filePath}, "yellow");};"
      fs.writeFileSync(filePath, content, "utf8);log( Fixed syntax issues in ${filePath}", "green);;      return true;"}"
    return false} catch (error) {log(` Error fixing ${filePath}: ${error.message}, red);";    return false;"}
  extensions = [.js", ".jsx, .ts", ".tsx]) {"}
            !["node_modules, .git", ".next, dist", "]
          if();            ![node_modules, ".git", .next, "dist", build].includes(item)") {"}
        `red;
      log( Error processing directory ${currentPath}: ${error.message}")
        "red


>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
