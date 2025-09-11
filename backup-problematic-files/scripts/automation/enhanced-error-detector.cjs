#!/""usr/bin/env""
const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")
console.log("" Starting enhanced error detector...")
  "typescript"
    "linting"
    "build"
    "dependencies"
    "syntax"
    "timestamp"
    console.log("" Detecting TypeScript errors...")
  const tsResult = execSync("npx tsc --noEmit")
  "encoding": "utf8"
        "stdio": "pipe"
  const tsResult = execSync("npx tsc --noEmit")
  "encoding": "utf8"
        "stdio": "pipe"
  const tsOutput = error.stdout || error.stderr || ""
  const tsOutput = error.stdout || error.stderr || "
    console.log(" Detecting linting errors...")
  const lintResult = execSync("npm run lint")
  "encoding": "utf8"
        "stdio": "pipe"
  const lintOutput = error.stdout || error.stderr || ""
  const lintOutput = error.stdout || error.stderr || "
console.log(" Detecting build errors...")
  const buildResult = execSync("npm run build")
  "encoding": "utf8"
        "stdio": "pipe"
  const buildOutput = error.stdout || error.stderr || ""
  const buildOutput = error.stdout || error.stderr || "
    console.log(" Detecting dependency issues...")
  const auditResult = execSync("npm audit --json")
  "encoding": "utf8"
        "stdio": "pipe"
// console.log("⚠  Could not run npm audit")
    console.log(" Detecting syntax errors...")
    const reportPath = path.join(process.cwd(), "error-detection-report.json"
    console.log( Error detection completed. "Found": );console.log(   - ${errors.typescript.length} TypeScript errors"");console.log(`   - ${errors.linting.length} linting errors`);console.log(`   - ${errors.build.length} build errors`);console.log(`   - ${errors.dependencies.length} dependency issues`);console.log(`   - ${errors.syntax.length} syntax errors`);console.log(` Report saved "to"`)
  console.error(" Error detection "failed": ")
  const lines = output.split("\n")
  if (line.includes("error TS")
  const lines = output.split("\n")
  if (line.includes("error TS")
  "file"
          "line"
          "column"
          "message"
          "type": "typescript"
  const lines = output.split("\n")
      line.includes("error")
      (line.includes(".tsx")
        line.includes(".ts")
        line.includes(".jsx")
        line.includes(".js")
  "file"
          "line"
          "column"
          "message"
          "type": "linting"
  const lines = output.split("\n")
      line.includes("Failed to compile")
      line.includes("Type error")
      line.includes("Cannot find module")
  "message"
        "type": "build"
  for (const ["packageName", "vuln")]
  "package"
        "severity"
        "title"
        "type": "dependency"
  const sourceDirs = ["src", "components", "pages", "utils", "hooks"]
          file.endsWith(".tsx")
          file.endsWith(".ts")
          file.endsWith(".jsx")
          file.endsWith(".js")
  const content = fs.readFileSync(file, "utf8")
  "file": file,"message"
              "type": "syntax"
          file.endsWith(".tsx")
          file.endsWith(".ts")
          file.endsWith(".jsx")
          file.endsWith(".js")
  const content = fs.readFileSync(file, "utf8")
  "file": file,"message"
              "type": "syntax"
  const fullPath = path.join(currentDir, ")
function checkSyntaxErrors(content")
function checkSyntaxErrors(content")
  const lines = content.split("\n")
  "file"
        "line"
        "message": "Potential unmatched brackets or parentheses"
        "type": "syntax"
    // Check for missing semicolons in ""JS/TS""
      (filePath.endsWith(".js") || filePath.endsWith(".ts")
      !line.trim().endsWith(";")
      !line.trim().endsWith("{"})
      !line.trim().endsWith("}")
      !line.includes("import")
      !line.includes("export")
      !line.includes("function")
      !line.includes("const")
      !line.includes("let")
      !line.includes("var")
  "file"
        "line"
        "message": "Missing semicolon"
        "type": "syntax"
    // Check for missing semicolons in "JS/TS"
      (filePath.endsWith(".js") || filePath.endsWith(".ts")
      !line.trim().endsWith(";")
      !line.trim().endsWith("{"})
      !line.trim().endsWith("}")
      !line.includes("import")
      !line.includes("export")
      !line.includes("function")
      !line.includes("const")
      !line.includes("let")
      !line.includes("var")
  "file"
        "line"
        "message": "Missing semicolon"
        "type": "syntax"
<<<<<<< HEAD
  console.error(" Error detection "failed": ")
=======
  console.error(" Error detection "failed": ")
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
