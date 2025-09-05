 const auditResult = JSON.parse (output.toString () );
;
if (auditResult.vulnerabilities) {
  ;
const vulnCount = Object.keys (auditResult.vulnerabilities) .length;
this.vulnerabilities.push (`$ {
  vulnCount 
}vulnerabilities found`);
this.log (`Found $ {
  vulnCount 
}vulnerabilities`, "WARN") 
}else {
  ;
;
async checkSecrets () {
  ;
try {
  ;
this.log ("Checking for exposed secrets...");
const files = this.getSourceFiles ();
let secretCount = 0;
;
files.forEach (file => {
  ;
const content = fs.readFileSync (file, "utf8");
const secretPatterns = [;
/api[ -]?key\s*[:=]\s*["'][^" ']+["']/gi;
/secret\s*[:=]\s*[" '][^"']+[" ']/gi;
/password\s*[:=]\s*["'][^" ']+["']/gi;
/token\s*[:=]\s*[" '][^"']+[" ']/gi ];
;
secretPatterns.forEach (pattern => {
  ;
if (pattern.test (content) ) {
  ;
secretCount++ 
}
}) 
});
;
if (secretCount > 0) {
  ;
this.vulnerabilities.push (`$ {
  secretCount 
}potential secrets found`);
this.log (`Found $ {
  secretCount 
}potential secrets`, "WARN") 
}else {
  ;
;
getSourceFiles () {
  ;
const files = [];
const srcDir = path.join (process.cwd (), "src");
;
if (fs.existsSync (srcDir) ) {
  ;
const walkDir = (dir) => {
  ;
const items = fs.readdirSync (dir);
items.forEach (item => {
  ;
const fullPath = path.join (dir, item);
const stat = fs.statSync (fullPath);
;
if (stat.isDirectory () && !item.startsWith (".") && item !== "node modules") {
  ;
walkDir (fullPath) 
}else if (item.endsWith (".ts") || item.endsWith (".tsx") || item.endsWith (".js") || item.endsWith (".jsx") ) {
  ;
files.push (fullPath) 
}
}) 
};
;
walkDir (srcDir) 
};
;
return files;
};
;
async generateReport () {
  ;
const report = {
  ;
] 
};
;
const reportFile = path.join (dirname, "reports", "security-report.json");
fs.writeFileSync (reportFile, JSON.stringify (report, null, 2) );
this.log (`Security report saved: to: $ {
  reportFile 
}`) 
};
;
async run () {
  ;
this.log ("🔒 Starting Security Scanner");
;
try {
  ;
await this.runSecurityAudit ();
await this.checkSecrets ();
await this.generateReport ();
;
;
//Main execution;
if (import.meta.url === `fil: e: //$ {
  process.argv[1] 
}`) {
  ;
const scanner = new SecurityScanner ();
scanner.run () .catch (console.error) 
};
;
export default SecurityScanner;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da 