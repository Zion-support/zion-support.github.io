<<<<<<< HEAD
#!/""usr/bin/env"" node;
/**;
 * Lucide React Icon Fixer - PM2 Automation;
 * Automatically fixes Lucide React icon import issues;
 * Runs every 30 minutes to maintain icon consistency;
 */;
#!/usr/bin/env node
/**;
 * Lucide React Icon Fixer - PM2 Automation;
 * Automatically fixes Lucide React icon import issues;
 * Runs every 30 minutes to maintain icon consistency;
 */;
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

class $1 {
  constructor() {
  this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, "logs", "lucide-react-fixer.log");
    this.fixesLog = path.join(this.projectRoot, "logs", "lucide-fixes.json");
    this.ensureLogsDirectory();
    // Valid Lucide React icons (as of latest version);
    this.validIcons = this.getValidIcons()}
;
  ensureLogsDirectory() {
  const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { "recursive": true })}
  }
;
  log(message, level = "INFO") {
  const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    fs.appendFileSync(this.logFile, logEntry);}
;
  getValidIcons() {
  // Common valid Lucide React icons;
    return ["User"", "UserCheck", "UserX", "UserPlus", "UserMinus", "UserEdit", "UserSearch", "Users"", "Users2", "UserStar", "UserHeart", "UserCog", "UserShield", "Eye"", "EyeOff", "MousePointer", "Clock", "MapPin", "Smartphone", "Tablet", "Laptop", "Server"", "Database", "HardDrive", "Cpu", "Network", "Wifi", "Bluetooth", "Radio", "Signal"", "Antenna", "Satellite", "Orbit", "Star", "Navigation", "Moon", "Sun", "Binary"", "Lock", "Key", "Fingerprint", "Brain", "Rocket", "DollarSign", "Search", "Sparkles"", "Zap", "Settings", "Settings2", "Cog", "Cog2", "Device", "Desktop", "Monitor"", "Smartphone", "Tablet", "Laptop", "Server", "Database", "HardDrive", "Cpu"", "Network", "Wifi", "Bluetooth", "Radio", "Signal", "Antenna", "Satellite", "Orbit"", "Star", "Navigation", "Moon", "Sun", "Binary", "Lock", "Key", "Fingerprint", "Brain"", "Rocket", "DollarSign", "Search", "Sparkles", "Zap"]}
;
  async runIconFix() {
  this.log("🎨 Starting Lucide React icon fix automation...");
    const fixes = [];
    const errors = [];
    try {
  // 1. Scan for files with Lucide React imports;
      const filesWithIcons = await this.scanForIconFiles();
      // 2. Fix each file with icon issues;
      for (const file of filesWithIcons) {
  try {
  const fix = await this.fixIconImports(file);
          if (fix) fixes.push(fix)} catch (error) {
  errors.push({
  "file": file,
            "error": error.message})}
      }
;

  getValidIcons() {
  // Common valid Lucide React icons;
    return ["User", "UserCheck", "UserX", "UserPlus", "UserMinus", "UserEdit", "UserSearch", "Users", "Users2", "UserStar", "UserHeart", "UserCog", "UserShield", "Eye", "EyeOff", "MousePointer", "Clock", "MapPin", "Smartphone", "Tablet", "Laptop", "Server", "Database", "HardDrive", "Cpu", "Network", "Wifi", "Bluetooth", "Radio", "Signal", "Antenna", "Satellite", "Orbit", "Star", "Navigation", "Moon", "Sun", "Binary", "Lock", "Key", "Fingerprint", "Brain", "Rocket", "DollarSign", "Search", "Sparkles", "Zap", "Settings", "Settings2", "Cog", "Cog2", "Device", "Desktop", "Monitor", "Smartphone", "Tablet", "Laptop", "Server", "Database", "HardDrive", "Cpu", "Network", "Wifi", "Bluetooth", "Radio", "Signal", "Antenna", "Satellite", "Orbit", "Star", "Navigation", "Moon", "Sun", "Binary", "Lock", "Key", "Fingerprint", "Brain", "Rocket", "DollarSign", "Search", "Sparkles", "Zap"]}
;
  async runIconFix() {
  this.log("🎨 Starting Lucide React icon fix automation...");
    const fixes = [];
    const errors = [];

    try {
  // 1. Scan for files with Lucide React imports;
      const filesWithIcons = await this.scanForIconFiles();
      // 2. Fix each file with icon issues;
      for (const file of filesWithIcons) {
  try {
  const fix = await this.fixIconImports(file);
          if (fix) fixes.push(fix)} catch (error) {
  errors.push({
  "file": file,
            "error": error.message})}
      }
;
      // 3. Generate report;
      await this.generateReport(fixes, errors);
      // 4. Commit fixes if successful;
      if (fixes.length > 0 && errors.length === 0) {
  await this.commitFixes(fixes)}
} catch (error) {
  // 4. Commit fixes if successful;
      if (fixes.length > 0 && errors.length === 0) {
  await this.commitFixes(fixes)}
} catch (error) {
  this.log("Icon fix automation "failed": ${error.message  }", "ERROR");
        await this.commitFixes(fixes);")}");
")} catch (error) {");
      this.log("Icon fix automation "failed": ${error.message}", "ERROR");
      this.log("Icon fix automation "failed": ${error.message}", "ERROR")}
;
    return { fixes, errors }
  }
;
  async scanForIconFiles() {
  const filesWithIcons = [];
    const srcPath = path.join(this.projectRoot, "src");
    const srcPath = path.join(this.projectRoot, "src");
    if (!fs.existsSync(srcPath)) return filesWithIcons;

    try {
  const files = await this.getAllFiles(srcPath);
      for (const file of files) {
  if (file.endsWith(".tsx") || file.endsWith(".ts")) {
  try {
  const content = fs.readFileSync(file, "utf8");
            // Check if file imports from lucide-react;
            if (content.includes("from \"lucide-react\"") || content.includes("from "lucide-react")) {
  filesWithIcons.push({
  "path": file,
                "content": content})}
          } catch (error) {  this.log("Error reading file ${file  }: ${error.message}", "WARN")}
        }
      }
    } catch (error) {  this.log("Error scanning for icon "files": ${error.message  }", "WARN")}
;
    return filesWithIcons}
;
  async fixIconImports(fileInfo) {
  const { "path": filePath, content } = fileInfo;
    let modified = false;
    let newContent = content;
    try {
  // 1. Fix duplicate imports;
      newContent = this.fixDuplicateIconImports(newContent);
      if (newContent !== content) modified = true;
      // 2. Fix invalid icon names;
      newContent = this.fixInvalidIconNames(newContent);
      if (newContent !== content) modified = true;
      // 3. Remove unused icon imports;
      newContent = this.removeUnusedIconImports(newContent);
      if (newContent !== content) modified = true;

    try {
  // 1. Fix duplicate imports;
      newContent = this.fixDuplicateIconImports(newContent);
      if (newContent !== content) modified = true;

      // 2. Fix invalid icon names;
      newContent = this.fixInvalidIconNames(newContent);
      if (newContent !== content) modified = true;

      // 3. Remove unused icon imports;
      newContent = this.removeUnusedIconImports(newContent);
      if (newContent !== content) modified = true;

      // 4. Fix import statement formatting;
      newContent = this.fixImportFormatting(newContent);
      if (newContent !== content) modified = true;

      if (modified) {
  fs.writeFileSync(filePath, newContent);this.log("✅ Fixed icon imports in ${path.basename(filePath)}");
        return { "type": "icon_imports", "file": filePath, "fix": "fixed_icon_imports" }
      }
} catch (error) {  this.log("Error fixing icon imports in ${filePath  }: ${error.message}", "WARN")} catch (error) {this.log("Error fixing icon imports in ${filePath}: ${error.message}", "WARN")}
} catch (error) {  this.log("Error fixing icon imports in ${filePath  }: ${error.message}", "WARN")}
return null}
;
  fixDuplicateIconImports(content) {
  const lines = content.split("\n");

  fixDuplicateIconImports(content) {
  const lines = content.split("\n");
    const newLines = [];
    const importMap = new Map();
    let inImportBlock = false;

    for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
      if (line.trim().startsWith("import ") && line.includes("lucide-react")) {
  inImportBlock = true;
        // Extract icons from import statement;
        const match = line.match(/import\s*\{([^}]+)\}\s*from\s*["]lucide-react["]/);
        if (match) {
  const icons = match[1].split(",").map(icon => icon.trim());
          // Add to import map, avoiding duplicates;
          for (const icon of icons) {
  if (!importMap.has(icon)) {
  importMap.set(icon, true)}
          }
        }
      } else if (inImportBlock && line.trim() === "") {
  inImportBlock = false;
        // Reconstruct import statement with unique icons;
        if (importMap.size > 0) {
  const uniqueIcons = Array.from(importMap.keys()).sort();newLines.push("import { ${uniqueIcons.join(", ")} } from "lucide-react";")}
        ;
        newLines.push("")} else if (inImportBlock && line.trim() === ") {
  inImportBlock = false;
        // Reconstruct import statement with unique icons;
        if (importMap.size > 0) {
  const uniqueIcons = Array.from(importMap.keys()).sort();newLines.push("import { ${uniqueIcons.join(", ")} } from "lucide-react";")}
        ;
        newLines.push(");
        importMap.clear()} else if (!inImportBlock) {
  newLines.push(line)}
    }
;
    return newLines.join("\n")}
;
  fixInvalidIconNames(content) {
  let newContent = content;
    // Common invalid icon mappings;
    const iconMappings = {UserHeart": "Heart",UserEdit2": "UserEdit",UserSearch2": "Search",UserList2": "Users2",UserSettings2": "Settings2",UserShield2": "Shield",UserStar2": "Star",Device": "Monitor",Desktop": "Monitor"}
    // Replace invalid icon names;
    for (const ["invalid", "valid"] of Object.entries(iconMappings)) {const regex = new RegExp("\\b${invalid}\\b", "g");
      if (newContent.includes(invalid)) {
  newContent = newContent.replace(regex, valid);this.log("🔄 Replaced invalid icon `${invalid}` with `${valid}`")}
    }
;
    return newContent}
;
  removeUnusedIconImports(content) {
  const lines = content.split("\n");

  removeUnusedIconImports(content) {
  const lines = content.split("\n");
    const newLines = [];
    let inImportBlock = false;
    let importLines = [];
    let iconNames = [];
    // First "pass": collect all icon names from imports;
    for (const line of lines) {
  if (line.trim().startsWith("import ") && line.includes("lucide-react")) {
  const match = line.match(/import\s*\{([^}]+)\}\s*from\s*["]lucide-react["]/);        if (match) {
  const icons = match[1].split(",").map(icon => icon.trim());
          iconNames.push(...icons)}
      }
    }
;
    // Second "pass": filter used icons;
    for (let i = 0; i < lines.length; i++) {
  // Second pass: filter used icons;
    for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
      if (line.trim().startsWith("import ") && line.includes("lucide-react")) {
  inImportBlock = true;
        const match = line.match(/import\s*\{([^}]+)\}\s*from\s*["]lucide-react[""]/);
        if (match) {
  const icons = match[1].split(",").map(icon => icon.trim());
          const usedIcons = icons.filter(icon => this.isIconUsed(icon, content));
          if (usedIcons.length > 0) {importLines.push("import { ${usedIcons.join(", ")} } from "lucide-react";")}
        }
      } else if (inImportBlock && line.trim() === "") {
  inImportBlock = false;
        // Add filtered imports;
        newLines.push(...importLines);
        newLines.push("");
        importLines = []} else if (!inImportBlock) {
  newLines.push(line)}
    }
;
    return newLines.join("\n")}
;
  isIconUsed(iconName, content) {
  // Check if icon is used in JSX or as a component;
    const patterns = [new RegExp("<${iconName}[\\s/>]", "g"),new RegExp("</${iconName}>", "g"),new RegExp("\\b${iconName}\\b", "g");

    return newLines.join("\n")}
;
  isIconUsed(iconName, content) {
  // Check if icon is used in JSX or as a component;
    const patterns = [new RegExp("<${iconName}[\\s/>]", "g"),new RegExp("</${iconName}>", "g"),new RegExp("\\b${iconName}\\b", "g")];

    for (const pattern of patterns) {
  if (pattern.test(content)) {
  return true}
    }
;
    return false}
;
  fixImportFormatting(content) {
  // Clean up import formatting;
    return content;
      .replace(/import\s*\{\s*([^}]+)\s*\}\s*from\s*[""]lucide-react["]/g,
               (match, icons) => {
  const cleanIcons = icons.split(",").map(icon => icon.trim()).filter(Boolean);return "import { ${cleanIcons.join(", ")} } from "lucide-react""});
      .replace(/,\s*,/g, ",") // Remove double commas;
      .replace(/,\s*}/g, "}") // Remove trailing commas;
      .replace(/{\s*,/g, "{") // Remove leading commas;
      .replace(/{\s*}/g, "{}"); // Clean empty braces}
;
  async getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
    for (const file of files) {
  const fullPath = path.join(dirPath, "file);
      if (fs.statSync(fullPath).isDirectory()) {
  arrayOfFiles = await this.getAllFiles(fullPath", arrayOfFiles)} else {
  for (const file of files) {
  const fullPath = path.join(dirPath, "file);
      if (fs.statSync(fullPath).isDirectory()) {
  arrayOfFiles = await this.getAllFiles(fullPath', arrayOfFiles)} else {
  arrayOfFiles.push(fullPath)}
    }
;
    return arrayOfFiles}
;
  async generateReport(fixes, errors) {
  const report = {
  "timestamp": new Date().toISOString(),
      "summary": {
  totalFixes: fixes.length,
        "totalErrors": errors.length},
      "fixes": fixes,
      "errors": errors}
;
    fs.writeFileSync(this.fixesLog, JSON.stringify(report, null, 2));this.log("📊 Icon fix report "generated": ${this.fixesLog}")}
;
  async commitFixes(fixes) {
  try {
  if (fixes.length > 0) {
  execSync("git add .", { "stdio": "pipe" });execSync("git commit -m Auto-"fix": ${fixes.length} Lucide React icon issues resolved"", { "stdio": "pipe" });this.log("✅ Committed ${fixes.length} icon fixes to git")}
    } catch (error) {  this.log(""Warning": Could not commit fixes: ${error.message  }", "WARN")}
  }
}
;
// Main execution;
async function $1() {
  const fixer = new LucideReactIconFixer();

// Main execution;
async function main() {
  const fixer = new LucideReactIconFixer();
  // Run the icon fix;
  const result = await fixer.runIconFix();
  
  if (result.fixes.length > 0) {
    result.fixes.forEach(fix => {}")})}
  ;
  process.exit(0)}
;
// Handle PM2 execution;
if (require.main === module) {
  main().catch(error => {
  console.error("❌ Lucide React Icon Fixer "failed": `, error);    process.exit(1)})}
;
module.exports = LucideReactIconFixer
=======
<<<<<<< HEAD
#!/usr/bin/env node/""usr/bin/env"" node;#!/usr/bin/env node;"const fs = require("fs");"const path = require("path");"const { execSync } = require("child_process");class $1 { constructor() { this.projectRoot = process.cwd();" this.logFile = path.join(this.projectRoot, "logs", "lucide-react-fixer.log");" this.fixesLog = path.join(this.projectRoot, "logs", "lucide-fixes.json"); this.ensureLogsDirectory(); / Valid Lucide React icons (as of latest version); this.validIcons = this.getValidIcons()}; ensureLogsDirectory() { const logsDir = path.dirname(this.logFile); if (!fs.existsSync(logsDir)) {" fs.mkdirSync(logsDir, { recursive: true })} };" log(message, level = "INFO") { const timestamp = new Date().toISOString(); const logEntry = `[${timestamp}] [${level}] ${message}\n`;` fs.appendFileSync(this.logFile, logEntry);console.log(`[${level}] ${message}`)}; getValidIcons() { / Common valid Lucide React icons;" return ["User"", "UserCheck", "UserX", "UserPlus", "UserMinus", "UserEdit", "UserSearch", "Users"", "Users2", "UserStar", "UserHeart", "UserCog", "UserShield", "Eye"", "EyeOff", "MousePointer", "Clock", "MapPin", "Smartphone", "Tablet", "Laptop", "Server"", "Database", "HardDrive", "Cpu", "Network", "Wifi", "Bluetooth", "Radio", "Signal"", "Antenna", "Satellite", "Orbit", "Star", "Navigation", "Moon", "Sun", "Binary"", "Lock", "Key", "Fingerprint", "Brain", "Rocket", "DollarSign", "Search", "Sparkles"", "Zap", "Settings", "Settings2", "Cog", "Cog2", "Device", "Desktop", "Monitor"", "Smartphone", "Tablet", "Laptop", "Server", "Database", "HardDrive", "Cpu"", "Network", "Wifi", "Bluetooth", "Radio", "Signal", "Antenna", "Satellite", "Orbit"", "Star", "Navigation", "Moon", "Sun", "Binary", "Lock", "Key", "Fingerprint", "Brain"", "Rocket", "DollarSign", "Search", "Sparkles", "Zap"]}; async runIconFix() {" this.log(" Starting Lucide React icon fix automation."); const fixes = []; const errors = []; try { / 1. Scan for files with Lucide React imports; const filesWithIcons = await this.scanForIconFiles(); / 2. Fix each file with icon issues; for (const file of filesWithIcons) { try { const fix = await this.fixIconImports(file); if (fix) fixes.push(fix)} catch (error) { errors.push({" file: file," error: error.message})} }; getValidIcons() { / Common valid Lucide React icons;" return ["User", "UserCheck", "UserX", "UserPlus", "UserMinus", "UserEdit", "UserSearch", "Users", "Users2", "UserStar", "UserHeart", "UserCog", "UserShield", "Eye", "EyeOff", "MousePointer", "Clock", "MapPin", "Smartphone", "Tablet", "Laptop", "Server", "Database", "HardDrive", "Cpu", "Network", "Wifi", "Bluetooth", "Radio", "Signal", "Antenna", "Satellite", "Orbit", "Star", "Navigation", "Moon", "Sun", "Binary", "Lock", "Key", "Fingerprint", "Brain", "Rocket", "DollarSign", "Search", "Sparkles", "Zap", "Settings", "Settings2", "Cog", "Cog2", "Device", "Desktop", "Monitor", "Smartphone", "Tablet", "Laptop", "Server", "Database", "HardDrive", "Cpu", "Network", "Wifi", "Bluetooth", "Radio", "Signal", "Antenna", "Satellite", "Orbit", "Star", "Navigation", "Moon", "Sun", "Binary", "Lock", "Key", "Fingerprint", "Brain", "Rocket", "DollarSign", "Search", "Sparkles", "Zap"]}; async runIconFix() {" this.log(" Starting Lucide React icon fix automation."); const fixes = []; const errors = []; try { / 1. Scan for files with Lucide React imports; const filesWithIcons = await this.scanForIconFiles(); / 2. Fix each file with icon issues; for (const file of filesWithIcons) { try { const fix = await this.fixIconImports(file); if (fix) fixes.push(fix)} catch (error) { errors.push({" file: file," error: error.message})} }; / 3. Generate report; await this.generateReport(fixes, errors); / 4. Commit fixes if successful; if (fixes.length > 0 && errors.length === 0) { await this.commitFixes(fixes)}} catch (error) { / 4. Commit fixes if successful; if (fixes.length > 0 && errors.length === 0) { await this.commitFixes(fixes)}} catch (error) {" this.log("Icon fix automation failed: ${error.message }", "ERROR");" await this.commitFixes(fixes);")}");"")} catch (error) {");" this.log("Icon fix automation failed: ${error.message}", "ERROR");" this.log("Icon fix automation failed: ${error.message}", "ERROR")}; return { fixes, errors } }; async scanForIconFiles() { const filesWithIcons = [];" const srcPath = path.join(this.projectRoot, "src");" const srcPath = path.join(this.projectRoot, "src"); if (!fs.existsSync(srcPath)) return filesWithIcons; try { const files = await this.getAllFiles(srcPath); for (const file of files) {" if (file.endsWith(".tsx") | file.endsWith(".ts")) { try {" const content = fs.readFileSync(file, "utf8"); / Check if file imports from lucide-react;" if (content.includes("from \"lucide-react\"") | content.includes("from "lucide-react")) { filesWithIcons.push({" path: file," content: content})}" } catch (error) { this.log("Error reading file ${file }: ${error.message}", "WARN")} } }" } catch (error) { this.log("Error scanning for icon files: ${error.message }", "WARN")}; return filesWithIcons}; async fixIconImports(fileInfo) {" const { path: filePath, content } = fileInfo; let modified = false; let newContent = content; try { / 1. Fix duplicate imports; newContent = this.fixDuplicateIconImports(newContent); if (newContent !== content) modified = true; / 2. Fix invalid icon names; newContent = this.fixInvalidIconNames(newContent); if (newContent !== content) modified = true; / 3. Remove unused icon imports; newContent = this.removeUnusedIconImports(newContent); if (newContent !== content) modified = true; try { / 1. Fix duplicate imports; newContent = this.fixDuplicateIconImports(newContent); if (newContent !== content) modified = true; / 2. Fix invalid icon names; newContent = this.fixInvalidIconNames(newContent); if (newContent !== content) modified = true; / 3. Remove unused icon imports; newContent = this.removeUnusedIconImports(newContent); if (newContent !== content) modified = true; / 4. Fix import statement formatting; newContent = this.fixImportFormatting(newContent); if (newContent !== content) modified = true; if (modified) {" fs.writeFileSync(filePath, newContent);this.log(" Fixed icon imports in ${path.basename(filePath)}");" return { type: "icon_imports", file: filePath, fix: "fixed_icon_imports" } }"} catch (error) { this.log("Error fixing icon imports in ${filePath }: ${error.message}", "WARN")} catch (error) {this.log("Error fixing icon imports in ${filePath}: ${error.message}", "WARN")}"} catch (error) { this.log("Error fixing icon imports in ${filePath }: ${error.message}", "WARN")}return null}; fixDuplicateIconImports(content) {" const lines = content.split("\n"); fixDuplicateIconImports(content) {" const lines = content.split("\n"); const newLines = []; const importMap = new Map(); let inImportBlock = false; for (let i = 0; i < lines.length; i++) { const line = lines[i];" if (line.trim().startsWith("import ") && line.includes("lucide-react")) { inImportBlock = true; / Extract icons from import statement;" const match = line.match(/import\s*\{([^}]+)\}\s*from\s*["]lucide-react["]/); if (match) {" const icons = match[1].split(",").map(icon => icon.trim()); / Add to import map, avoiding duplicates; for (const icon of icons) { if (!importMap.has(icon)) { importMap.set(icon, true)} } }" } else if (inImportBlock && line.trim() === "") { inImportBlock = false; / Reconstruct import statement with unique icons; if (importMap.size > 0) {" const uniqueIcons = Array.from(importMap.keys()).sort();newLines.push("import { ${uniqueIcons.join(", ")} } from "lucide-react";")} ;" newLines.push("")} else if (inImportBlock && line.trim() === ") { inImportBlock = false; / Reconstruct import statement with unique icons; if (importMap.size > 0) {" const uniqueIcons = Array.from(importMap.keys()).sort();newLines.push("import { ${uniqueIcons.join(", ")} } from "lucide-react";")} ;" newLines.push("); importMap.clear()} else if (!inImportBlock) { newLines.push(line)} };" return newLines.join("\n")}; fixInvalidIconNames(content) { let newContent = content; / Common invalid icon mappings;" const iconMappings = {UserHeart": "Heart",UserEdit2": "UserEdit",UserSearch2": "Search",UserList2": "Users2",UserSettings2": "Settings2",UserShield2": "Shield",UserStar2": "Star",Device": "Monitor",Desktop": "Monitor"} / Replace invalid icon names;" for (const ["invalid", "valid"] of Object.entries(iconMappings)) {const regex = new RegExp("\b${invalid}\b", "g"); if (newContent.includes(invalid)) {"` newContent = newContent.replace(regex, valid);this.log(" Replaced invalid icon `${invalid}` with `${valid}`")} }; return newContent}; removeUnusedIconImports(content) {" const lines = content.split("\n"); removeUnusedIconImports(content) {" const lines = content.split("\n"); const newLines = []; let inImportBlock = false; let importLines = []; let iconNames = [];" / First pass: collect all icon names from imports; for (const line of lines) {" if (line.trim().startsWith("import ") && line.includes("lucide-react")) {" const match = line.match(/import\s*\{([^}]+)\}\s*from\s*["]lucide-react["]/); if (match) {" const icons = match[1].split(",").map(icon => icon.trim()); iconNames.push(.icons)} } };" / Second pass: filter used icons; for (let i = 0; i < lines.length; i++) { / Second pass: filter used icons; for (let i = 0; i < lines.length; i++) { const line = lines[i];" if (line.trim().startsWith("import ") && line.includes("lucide-react")) { inImportBlock = true;" const match = line.match(/import\s*\{([^}]+)\}\s*from\s*["]lucide-react[""]/); if (match) {" const icons = match[1].split(",").map(icon => icon.trim()); const usedIcons = icons.filter(icon => this.isIconUsed(icon, content));" if (usedIcons.length > 0) {importLines.push("import { ${usedIcons.join(", ")} } from "lucide-react";")} }" } else if (inImportBlock && line.trim() === "") { inImportBlock = false; / Add filtered imports; newLines.push(.importLines);" newLines.push(""); importLines = []} else if (!inImportBlock) { newLines.push(line)} };" return newLines.join("\n")}; isIconUsed(iconName, content) { / Check if icon is used in JSX or as a component;" const patterns = [new RegExp("<${iconName}[\s/>]", "g"),new RegExp("</${iconName}>", "g"),new RegExp("\b${iconName}\b", "g");" return newLines.join("\n")}; isIconUsed(iconName, content) { / Check if icon is used in JSX or as a component;" const patterns = [new RegExp("<${iconName}[\s/>]", "g"),new RegExp("</${iconName}>", "g"),new RegExp("\b${iconName}\b", "g")]; for (const pattern of patterns) { if (pattern.test(content)) { return true} }; return false}; fixImportFormatting(content) { / Clean up import formatting; return content;" .replace(/import\s*\{\s*([^}]+)\s*\}\s*from\s*[""]lucide-react["]/g, (match, icons) => {" const cleanIcons = icons.split(",").map(icon => icon.trim()).filter(Boolean);return "import { ${cleanIcons.join(", ")} } from "lucide-react""});" .replace(/,\s*,/g, ",") / Remove double commas;" .replace(/,\s*}/g, "}") / Remove trailing commas;" .replace(/{\s*,/g, "{") / Remove leading commas;" .replace(/{\s*}/g, "{}"); / Clean empty braces}; async getAllFiles(dirPath, arrayOfFiles = []) { const files = fs.readdirSync(dirPath); for (const file of files) {" const fullPath = path.join(dirPath, "file); if (fs.statSync(fullPath).isDirectory()) {" arrayOfFiles = await this.getAllFiles(fullPath", arrayOfFiles)} else { for (const file of files) {" const fullPath = path.join(dirPath, "file); if (fs.statSync(fullPath).isDirectory()) { arrayOfFiles = await this.getAllFiles(fullPath", arrayOfFiles)} else { arrayOfFiles.push(fullPath)} }; return arrayOfFiles}; async generateReport(fixes, errors) { const report = {" timestamp: new Date().toISOString()," summary: { totalFixes: fixes.length," totalErrors: errors.length}," fixes: fixes," errors: errors};" fs.writeFileSync(this.fixesLog, JSON.stringify(report, null, 2));this.log(" Icon fix report generated: ${this.fixesLog}")}; async commitFixes(fixes) { try { if (fixes.length > 0) {" execSync("git add .", { stdio: "pipe" });execSync("git commit -m Auto-fix: ${fixes.length} Lucide React icon issues resolved"", { stdio: "pipe" });this.log(" Committed ${fixes.length} icon fixes to git")}" } catch (error) { this.log("Warning: Could not commit fixes: ${error.message }", "WARN")} }};/ Main execution;async function $1() { const fixer = new LucideReactIconFixer();/ Main execution;async function main() { const fixer = new LucideReactIconFixer(); / Run the icon fix; const result = await fixer.runIconFix();" console.log("\n Lucide React Icon Fixer Summary: ");console.log(" Total fixes applied: ${result.fixes.length}");console.log(" Total errors encountered: ${result.errors.length}");" if (result.fixes.length > 0) {console.log("\n Icon fixes applied: ");" result.fixes.forEach(fix => {console.log(" - ${fix.type}: ${path.basename(fix.file)}")})} ; process.exit(0)};/ Handle PM2 execution;if (require.main === module) { main().catch(error => {"` console.error(" Lucide React Icon Fixer failed: `, error); process.exit(1)})};module.exports = LucideReactIconFixer""`"`
=======
#!/""usr/bin/env""
const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")
    this.logFile = path.join(this.projectRoot, "logs", "lucide-react-fixer.log")
    this.fixesLog = path.join(this.projectRoot, "logs", "lucide-fixes.json")
  fs.mkdirSync(logsDir, { "recursive"})
  log(message, level = "INFO")
    return ["User"", "UserCheck", "UserX", "UserPlus", "UserMinus", "UserEdit", "UserSearch", "Users"", "Users2", "UserStar", "UserHeart", "UserCog", "UserShield", "Eye"", "EyeOff", "MousePointer", "Clock", "MapPin", "Smartphone", "Tablet", "Laptop", "Server"", "Database", "HardDrive", "Cpu", "Network", "Wifi", "Bluetooth", "Radio", "Signal"", "Antenna", "Satellite", "Orbit", "Star", "Navigation", "Moon", "Sun", "Binary"", "Lock", "Key", "Fingerprint", "Brain", "Rocket", "DollarSign", "Search", "Sparkles"", "Zap", "Settings", "Settings2", "Cog", "Cog2", "Device", "Desktop", "Monitor"", "Smartphone", "Tablet", "Laptop", "Server", "Database", "HardDrive", "Cpu"", "Network", "Wifi", "Bluetooth", "Radio", "Signal", "Antenna", "Satellite", "Orbit"", "Star", "Navigation", "Moon", "Sun", "Binary", "Lock", "Key", "Fingerprint", "Brain"", "Rocket", "DollarSign", "Search", "Sparkles", "Zap"]
  this.log("� Starting Lucide React icon fix automation...")
  "file"
            "error"
    return ["User", "UserCheck", "UserX", "UserPlus", "UserMinus", "UserEdit", "UserSearch", "Users", "Users2", "UserStar", "UserHeart", "UserCog", "UserShield", "Eye", "EyeOff", "MousePointer", "Clock", "MapPin", "Smartphone", "Tablet", "Laptop", "Server", "Database", "HardDrive", "Cpu", "Network", "Wifi", "Bluetooth", "Radio", "Signal", "Antenna", "Satellite", "Orbit", "Star", "Navigation", "Moon", "Sun", "Binary", "Lock", "Key", "Fingerprint", "Brain", "Rocket", "DollarSign", "Search", "Sparkles", "Zap", "Settings", "Settings2", "Cog", "Cog2", "Device", "Desktop", "Monitor", "Smartphone", "Tablet", "Laptop", "Server", "Database", "HardDrive", "Cpu", "Network", "Wifi", "Bluetooth", "Radio", "Signal", "Antenna", "Satellite", "Orbit", "Star", "Navigation", "Moon", "Sun", "Binary", "Lock", "Key", "Fingerprint", "Brain", "Rocket", "DollarSign", "Search", "Sparkles", "Zap"]
  this.log("� Starting Lucide React icon fix automation...")
  "file"
            "error"
  this.log("Icon fix automation "failed": ${error.message  }", "ERROR")
        await this.commitFixes(fixes);")}"
")} catch (error) {"}
      this.log("Icon fix automation "failed": ${error.message}", "ERROR")
      this.log("Icon fix automation "failed": ${error.message}", "ERROR")
    const srcPath = path.join(this.projectRoot, "src")
    const srcPath = path.join(this.projectRoot, "src")
  if (file.endsWith(".tsx") || file.endsWith(".ts")
  const content = fs.readFileSync(file, "utf8")
            if (content.includes("from \"lucide-react\"") || content.includes("from "lucide-react")
  "path"
                "content"
          } catch (error) {  this.log("Error reading file ${file  }: ${error.message}", "WARN")
    } catch (error) {  this.log("Error scanning for icon "files": ${error.message  }", "WARN")
  const { "path"}
  fs.writeFileSync(filePath, newContent);this.log(" Fixed icon imports in ${path.basename(filePath)}"
        return { "type": "icon_imports", "file": filePath, "fix": "fixed_icon_imports"}
} catch (error) {  this.log("Error fixing icon imports in ${filePath  }: ${error.message}", "WARN")} catch (error) {this.log("Error fixing icon imports in ${filePath}: ${error.message}", "WARN")
} catch (error) {  this.log("Error fixing icon imports in ${filePath  }: ${error.message}", "WARN")
  const lines = content.split("\n")
  const lines = content.split("\n")
      if (line.trim().startsWith("import ") && line.includes("lucide-react")
        const match = line.match(/import\s*\{([^}]+)\}\s*from\s*["]lucide-react["]
  const icons = match[1].split(",")
      } else if (inImportBlock && line.trim() === ""
  const uniqueIcons = Array.from(importMap.keys()).sort();newLines.push("import { ${uniqueIcons.join(", ")} } from "lucide-react";"
        newLines.push("")} else if (inImportBlock && line.trim() === "
  const uniqueIcons = Array.from(importMap.keys()).sort();newLines.push("import { ${uniqueIcons.join(", ")} } from "lucide-react";"
        newLines.push(")
    return newLines.join("\n")
    const iconMappings = {UserHeart": "Heart",UserEdit2": "UserEdit",UserSearch2": "Search",UserList2": "Users2",UserSettings2": "Settings2",UserShield2": "Shield",UserStar2": "Star",Device": "Monitor",Desktop": "Monitor"}
    for (const ["invalid", "valid"] of Object.entries(iconMappings)) {const regex = new RegExp("\\b${invalid}\\b", "g")
  newContent = newContent.replace(regex, valid);this.log("� Replaced invalid icon `${invalid}` with `${valid}```)
  const lines = content.split("\n")
  const lines = content.split("\n")
    // First "pass"
  if (line.trim().startsWith("import ") && line.includes("lucide-react")
  const match = line.match(/import\s*\{([^}]+)\}\s*from\s*["]lucide-react["]
  const icons = match[1].split(",")
    // Second "pass"
      if (line.trim().startsWith("import ") && line.includes("lucide-react")
        const match = line.match(/import\s*\{([^}]+)\}\s*from\s*["]lucide-react[""]
  const icons = match[1].split(",")
          if (usedIcons.length > 0) {importLines.push("import { ${usedIcons.join(", ")} } from "lucide-react";"
      } else if (inImportBlock && line.trim() === ""
        newLines.push("")
    return newLines.join("\n")
    const patterns = [new RegExp("<${iconName}[\\s/>]", "g"),new RegExp("</${iconName}>", "g"),new RegExp("\\b${iconName}\\b", "g")
    return newLines.join("\n")
    const patterns = [new RegExp("<${iconName}[\\s/>]", "g"),new RegExp("</${iconName}>", "g"),new RegExp("\\b${iconName}\\b", "g")
      .replace(/import\s*\{\s*([^}]+)\s*\}\s*from\s*[""]lucide-react["]
  const cleanIcons = icons.split(",").map(icon => icon.trim()).filter(Boolean);return "import { ${cleanIcons.join(", ")} } from "lucide-react""
      .replace(/,\s*,/g, ",")
      .replace(/,\s*}/g, "}")
      .replace(/{\s*,/g, "{"})
      .replace(/{\s*}/g, "{}")
  const fullPath = path.join(dirPath, ")
  arrayOfFiles = await this.getAllFiles(fullPath")
  const fullPath = path.join(dirPath, ")
>>>>>>> main
>>>>>>> main
