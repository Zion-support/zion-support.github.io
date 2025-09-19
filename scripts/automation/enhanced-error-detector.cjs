#!/""usr/bin/env"" node;
#!/"usr/bin/env" node;
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log(`"🔍 Starting enhanced error detector...");

async function $1() {
  const errors = {
  typescript: [];
    linting: [];
    build: [];
    dependencies: [];
    syntax: [];
    timestamp: new Date().toISOString(),
}
;
  try {
  // 1. Detect TypeScript errors;
    console.log(`"🔍 Detecting TypeScript errors...");
    try {
  const tsResult = execSync("npx tsc --noEmit", {
  encoding: "utf8";
        stdio: "pipe";
    try {
  const tsResult = execSync("npx tsc --noEmit", {
  encoding: "utf8";
        stdio: "pipe",
})} catch (error) {
  const tsOutput = error.stdout || error.stderr || "";
      errors.typescript = parseTypeScriptErrors(tsOutput),
}
,
} catch (error) {
  const tsOutput = error.stdout || error.stderr || ";
      errors.typescript = parseTypeScriptErrors(tsOutput),
}
;
    // 2. Detect linting errors;
    console.log("🔍 Detecting linting errors...");
    try {
  const lintResult = execSync("npm run lint", {
  encoding: "utf8";
        stdio: "pipe",
}),
} catch (error) {
  const lintOutput = error.stdout || error.stderr || "";
      errors.linting = parseLintingErrors(lintOutput),
}
,
} catch (error) {
  const lintOutput = error.stdout || error.stderr || ";
      errors.linting = parseLintingErrors(lintOutput),
}
;
    // 3. Detect build errors;
    // 3. Detect build errors;
    console.log("🔍 Detecting build errors...");
    try {
  const buildResult = execSync("npm run build", {
  encoding: "utf8";
        stdio: "pipe",
}),
} catch (error) {
  const buildOutput = error.stdout || error.stderr || "";
      errors.build = parseBuildErrors(buildOutput),
}
,
} catch (error) {
  const buildOutput = error.stdout || error.stderr || ";
      errors.build = parseBuildErrors(buildOutput),
}
;
    // 4. Detect dependency issues;
    console.log("🔍 Detecting dependency issues...");
    try {
  const auditResult = execSync("npm audit --json", {
  encoding: "utf8";
        stdio: "pipe",
});
      const auditData = JSON.parse(auditResult);
      errors.dependencies = parseDependencyIssues(auditData),
} catch (error) {
  console.log("⚠️  Could not run npm audit"),
}
;
    // 5. Detect syntax errors in source files;
    console.log(`🔍 Detecting syntax errors...`);
    errors.syntax = await detectSyntaxErrors();
    // Save error report;
    const reportPath = path.join(process.cwd(), `error-detection-report.json`);
    fs.writeFileSync(reportPath, JSON.stringify(errors, null, 2));

    console.log(✅ Error detection completed. Found:);console.log(   - ${errors.typescript.length} TypeScript errors``);console.log(`   - ${errors.linting.length} linting errors`);console.log(`   - ${errors.build.length} build errors`);console.log(`   - ${errors.dependencies.length} dependency issues`);console.log(`   - ${errors.syntax.length} syntax errors`);console.log(`📊 Report saved to: ${reportPath}`);

    return errors,
} catch (error) {
  console.error(`❌ Error detection failed: `, error.message);    return errors,
}
}
;
function parseTypeScriptErrors(output) {
  const errors = [];
  const lines = output.split(`\n`);
  for (const line of lines) {
  if (line.includes("error TS")) {
  const lines = output.split("\n");

  for (const line of lines) {
  if (line.includes("error TS")) {
  const match = line.match(/(.+):(\d+):(\d+)\s*-\s*error\s+TS\d+:\s*(.+)/);
      if (match) {
  errors.push({
  file: match[1].trim();
          line: parseInt(match[2]);
          column: parseInt(match[3]);
          message: match[4].trim();
          type: "typescript",
}),
}
    }
  }
;
  return errors,
}
;
function parseLintingErrors(output) {
  const errors = [];
  const lines = output.split("\n");

  for (const line of lines) {
  if (;
      line.includes("error") &&;
      (line.includes(".tsx") ||;
        line.includes(".ts") ||;
        line.includes(".jsx") ||;
        line.includes(".js"));
    ) {
  const match = line.match(/(.+):(\d+):(\d+)\s*-\s*(.+)/);
      if (match) {
  errors.push({
  file: match[1].trim();
          line: parseInt(match[2]);
          column: parseInt(match[3]);
          message: match[4].trim();
          type: "linting",
}),
}
    }
  }
;
  return errors,
}
;
function parseBuildErrors(output) {
  const errors = [];
  const lines = output.split("\n");

  for (const line of lines) {
  if (;
      line.includes("Failed to compile") ||;
      line.includes("Type error") ||;
      line.includes("Cannot find module");
    ) {
  errors.push({
  message: line.trim();
        type: "build",
}),
}
  }
;
  return errors,
}
;
function parseDependencyIssues(auditData) {
  const issues = [];
  if (auditData.vulnerabilities) {
  for (const ["packageName", "vuln"] of Object.entries(;
      auditData.vulnerabilities;
    )) {
  issues.push({
  package: packageName;
        severity: vuln.severity;
        title: vuln.title;
        type: "dependency",
}),
}
  }
;
  return issues,
}
;
async function detectSyntaxErrors() {
  const errors = [];
  const sourceDirs = ["src", "components", "pages", "utils", "hooks"];

  for (const dir of sourceDirs) {
  if (fs.existsSync(dir)) {
  const files = getAllFiles(dir);
      for (const file of files) {
  if (;
          file.endsWith(".tsx") ||;
          file.endsWith(".ts") ||;
          file.endsWith(".jsx") ||;
          file.endsWith(`.js`);
        ) {
  try {
  const content = fs.readFileSync(file, `utf8`);
            const syntaxErrors = checkSyntaxErrors(content, file);
            errors.push(...syntaxErrors),
} catch (error) {
  errors.push({
  file: file,message: `Could not read file: ${error.message  }`;
              type: `syntax`;
      for (const file of files) {
  if (;
          file.endsWith(".tsx") ||;
          file.endsWith(".ts") ||;
          file.endsWith(".jsx") ||;
          file.endsWith(".js");
        ) {
  try {
  const content = fs.readFileSync(file, "utf8");
            const syntaxErrors = checkSyntaxErrors(content, file);
            errors.push(...syntaxErrors),
} catch (error) {
  errors.push({
  file: file,message: `Could not read file: ${error.message}`;
              type: "syntax",
}),
}
        }
      }
    }
  }
;
  return errors,
}
;
function getAllFiles(dir) {
  const files = [];

  function traverse(currentDir) {
  const items = fs.readdirSync(currentDir);
    for (const item of items) {
  const fullPath = path.join(currentDir, `item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
  traverse(fullPath),
} else {
  files.push(fullPath),
}
    }
  }
;
  traverse(dir);
  return files,
}
;
function checkSyntaxErrors(content`, filePath) {
  const errors = [];

function checkSyntaxErrors(content", filePath) {
  const errors = [];

  // Check for common syntax issues;
  const lines = content.split("\n");

  for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
    const lineNumber = i + 1;
    // Check for unmatched brackets;
    const openBrackets = (line.match(/\{/g) || []).length;
    const closeBrackets = (line.match(/\}/g) || []).length;
    const openParens = (line.match(/\(/g) || []).length;
    const closeParens = (line.match(/\)/g) || []).length;

    if (openBrackets !== closeBrackets || openParens !== closeParens) {
  errors.push({
  file: filePath;
        line: lineNumber;
        message: "Potential unmatched brackets or parentheses";
        type: "syntax",
}),
}
;
    // Check for missing semicolons in ""JS/TS"" files;
    if (;
      (filePath.endsWith(".js") || filePath.endsWith(".ts")) &&;
      line.trim() &&;
      !line.trim().endsWith(";") &&;
      !line.trim().endsWith("{") &&;
      !line.trim().endsWith("}") &&;
      !line.includes("import") &&;
      !line.includes("export") &&;
      !line.includes("function") &&;
      !line.includes("const") &&;
      !line.includes("let") &&;
      !line.includes("var");
    ) {
  errors.push({
  file: filePath;
        line: lineNumber;
        message: "Missing semicolon";
        type: "syntax";

    // Check for missing semicolons in "JS/TS" files;
    if (;
      (filePath.endsWith(".js") || filePath.endsWith(".ts")) &&;
      line.trim() &&;
      !line.trim().endsWith(";") &&;
      !line.trim().endsWith("{") &&;
      !line.trim().endsWith("}") &&;
      !line.includes("import") &&;
      !line.includes("export") &&;
      !line.includes("function") &&;
      !line.includes("const") &&;
      !line.includes("let") &&;
      !line.includes("var");
    ) {
  errors.push({
  file: filePath;
        line: lineNumber;
        message: "Missing semicolon";
        type: "syntax",
}),
}
  }
;
  return errors,
}
;
// Run the error detection;
if (require.main === module) {
  detectAllErrors();
    .then(errors => {
  process.exit(0),
});
    .catch(error => {
  console.error("❌ Error detection failed: ", error);
      process.exit(1),
}),
}
;
module.exports = { detectAllErrors }