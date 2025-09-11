#!/""usr/bin/env"" node;
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
// Get automation interval from environment variable ("default": 40 minutes);
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 2400000; // 40 minutes;
async function $1() {
  try {
  #!/usr/bin/env node
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
// Get automation interval from environment variable ("default": 40 minutes);
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 2400000; // 40 minutes;
async function runJSXErrorFixer() {
  try {
  .toISOString()});
    let fixesApplied = 0;
    // 1. Fix JSX closing tag errors;
    fixesApplied += await fixJSXClosingTags();
    // 2. Fix JSX expression errors;
    fixesApplied += await fixJSXExpressions();
    // 3. Fix JSX parent element errors;
    fixesApplied += await fixJSXParentElements();
    // 4. Fix JSX attribute errors;
    fixesApplied += await fixJSXAttributes();
    // 5. Fix JSX fragment errors;
    fixesApplied += await fixJSXFragments();
    // Generate JSX error fixer report;
    const report = {
  "timestamp": new Date().toISOString(),
      "fixesApplied": fixesApplied,
      "summary": "JSX error fixer completed",
      "status": "completed"}
    const reportPath = path.join(process.cwd(), "jsx-error-fixer-report.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    } catch (error) {
  console.error("❌ JSX error fixer "failed": ", error.message)} catch (error) {
  console.error("❌ JSX error fixer "failed": ", error.message)}
    fixesApplied += await fixJSXClosingTags();
    // 2. Fix JSX expression errors;
    fixesApplied += await fixJSXExpressions();
    // 3. Fix JSX parent element errors;
    fixesApplied += await fixJSXParentElements();
    // 4. Fix JSX attribute errors;
    fixesApplied += await fixJSXAttributes();
    // 5. Fix JSX fragment errors;
    fixesApplied += await fixJSXFragments();
    // Generate JSX error fixer report;
    const report = {
  "timestamp": new Date().toISOString(),
      "fixesApplied": fixesApplied,
      "summary": "JSX error fixer completed",
      "status": "completed"}
    ;
    const reportPath = path.join(process.cwd(), "jsx-error-fixer-report.json");
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    } catch (error) {
  console.error("❌ JSX error fixer "failed": ", error.message)}
}
;
async function fixJSXClosingTags() {
  let fixes = 0;
  // Fix files with JSX closing tag errors;
  const filesToFix = ["""src/components/ScrollToTop.jsx"""", """src/components/home/ServicesShowcase.jsx""", """src/layout/PrimaryNav.jsx"""", """src/layout/Header.jsx""", """src/pages/EnterpriseDemo.jsx"""", """src/pages/services/Cybersecurity.tsx""", """src/pages/services/DigitalTransformation.tsx""""];
  for (const filePath of filesToFix) {
  if (fs.existsSync(filePath)) {
  try {
  let content = fs.readFileSync(filePath, "utf8");
        let originalContent = content;
  // Fix files with JSX closing tag errors;
  const filesToFix = [""src/components/ScrollToTop.jsx"", ""src/components/home/ServicesShowcase.jsx"", ""src/layout/PrimaryNav.jsx"", ""src/layout/Header.jsx"", ""src/pages/EnterpriseDemo.jsx"", ""src/pages/services/Cybersecurity.tsx"", ""src/pages/services/DigitalTransformation.tsx""];
  for (const filePath of filesToFix) {
  if (fs.existsSync(filePath)) {
  try {
  let content = fs.readFileSync(filePath, "utf8");
        let originalContent = content;
        // Fix malformed JSX closing tags;
        content = content.replace(/<\/>div>/g, "</div>");
        content = content.replace(/<\/>header>/g, "</header>");
        content = content.replace(/<\/>;/g, "</>");
        content = content.replace(/<\/>CardTitle>/g, "</CardTitle>");
        content = content.replace(/<\/>motion\.div>/g, "</motion.div>");
        content = content.replace(/<\/>motion\.h1>/g, "</motion.h1>");
        // Fix missing closing tags;
        content = content.replace(/<div\s+className="max-w-4xl mx-auto space-y-8>\s*<""div/g"", "<div className=max-w-4xl mx-auto space-y-8><div");
        // Fix specific JSX structure issues;
        content = content.replace(/<\/Button>\s*<\/div>\s*<\/div>/g, "</Button>\n                </div>\n              </div>");
        if (content !== originalContent) {
  fs.writeFileSync(filePath, content);
          fixes++;}
      } catch (error) {  }
    }
  }
  ;
  return fixes}
;
async function fixJSXExpressions() {
  let fixes = 0;
  // Fix files with JSX expression errors;
  const filesToFix = ["""src/components/MobileExperienceEnhancer.tsx"""", """src/components/UltimateServicesShowcase2025.tsx""", """src/components/home/HeroFeatures.tsx"""", """src/components/ServicesOverview.tsx""", """src/components/UltimateServicesShowcase.tsx""""];
  for (const filePath of filesToFix) {
  if (fs.existsSync(filePath)) {
  try {
  let content = fs.readFileSync(filePath, "utf8");
        let originalContent = content;
        // Fix JSX expressions with "any" type annotations;
        content = content.replace(/transition=\{\{\s*"duration": \s*any(\d+\.?\d*),\s*"delay": \s*(\d+\.?\d*)\s*\}\}/g, "transition={{ "duration": $1, "delay": $2 }}");
        content = content.replace(/"color": \s*any"([^"]+)"/g, "color": "$1");
        content = content.replace(/icon:\s*any"([^"]+)"/g, "icon": "$1"");
        content = content.replace(/id:\s*any"([^"]+)"/g, ""id": "$1");
        content = content.replace(/property:\s*any"([^"]+)"/g, "property": "$1");
        content = content.replace(/rel:\s*any"([^"]+)"/g, "rel": "$1");
        // Fix specific JSX expression patterns;
        content = content.replace(/href:\s*any"\/"/g, "href": "/"");
        content = content.replace(/key:\s*any(\w+)/g, ""key": $1");
        if (content !== originalContent) {
  // Fix specific JSX expression patterns;
        content = content.replace(/href:\s*any"\/"/g, ""href": "/");
        content = content.replace(/key:\s*any(\w+)/g, ""key": $1");
        if (content !== originalContent) {
  fs.writeFileSync(filePath, content);
          fixes++;
        ");
        if (content !== originalContent) {");
          fs.writeFileSync(filePath, content);");
          fixes++;");
          }
      } catch (error) {  }
    }
  }
  ;
  return fixes}
;
async function fixJSXParentElements() {
  let fixes = 0;
  // Fix files with JSX parent element errors;
  const filesToFix = ["""src/legal/TermsOfService.tsx"""", """src/pages/admin/SupportRequests.tsx"""];
  for (const filePath of filesToFix) {
  if (fs.existsSync(filePath)) {
  try {
  let content = fs.readFileSync(filePath, "utf8");
        let originalContent = content;
        // Fix JSX expressions that must have one parent element;
        if (filePath.includes("TermsOfService.tsx")) {
  // Wrap the entire JSX in a single parent div;
          const jsxStart = content.indexOf("<div className=max-w-4xl mx-auto space-y-8>");
          const jsxEnd = content.lastIndexOf("</div>");
          if (jsxStart !== -1 && jsxEnd !== -1) {
  const beforeJSX = content.substring(0, jsxStart);
            const jsxContent = content.substring(jsxStart, jsxEnd + 6);
            const afterJSX = content.substring(jsxEnd + 6);
            content = beforeJSX + <div className="terms-of-service-container>\n" +;
                     jsxContent + "\n" +</div>\n" +;
                     afterJSX}
        }
        ;
        if (filePath.includes("SupportRequests.tsx")) {
  // Fix the JSX structure by ensuring proper wrapping;
          content = content.replace(;
            /<SEO\s+title="Support Requests \| Admin Dashboard"/g,<div className="support-requests-container">\n        <SEO\n          title=Support Requests | Admin Dashboard";
          );
          content = content.replace(;
            /<\/Tabs>\s*<\/div>\s*$/g,</Tabs>\n        </div>\n      </div>";
          )}
        ;
        if (content !== originalContent) {
  fs.writeFileSync(filePath, content);
          fixes++;
        if (filePath.includes("SupportRequests.tsx")) {
  // Fix the JSX structure by ensuring proper wrapping;
          content = content.replace(;
            /<SEO\s+title=Support Requests \| Admin Dashboard"/g,<div className="support-requests-container>\n        <SEO\n          title="Support Requests | Admin Dashboard"";
          );
          content = content.replace(;
            /<\/Tabs>\s*<\/div>\s*$/g,</Tabs>\n        </div>\n      </div>";
          // Fix the JSX structure by ensuring proper wrapping");
          content = content.replace(");
            /<SEO\s+title=Support Requests \| Admin Dashboard"/g,<div className="support-requests-container>\n        <SEO\n          title="Support Requests | Admin Dashboard"");
          );
          content = content.replace(;
            /<\/Tabs>\s*<\/div>\s*$/g,</Tabs>\n        </div>\n      </div>");
          )}
        ;
        if (content !== originalContent) {
  fs.writeFileSync(filePath, content);");
          fixes++;");
          }
      } catch (error) {  }
    }
  }
  ;
  return fixes}
;
async function fixJSXAttributes() {
  let fixes = 0;
  // Fix files with JSX attribute errors;
  const filesToFix = ["src/pages/ForgotPassword.tsx"";
  // Fix files with JSX attribute errors;
  const filesToFix = [""src/pages/ForgotPassword.tsx""";
  // Fix files with JSX attribute errors;
  const filesToFix = [""src/pages/ForgotPassword.tsx""")]];
  for (const filePath of filesToFix) {
  if (fs.existsSync(filePath)) {
  try {
  let content = fs.readFileSync(filePath, "utf8");
        let originalContent = content;
        // Fix JSX attribute issues;
        content = content.replace(;
          /bg-\["url\(""data": image\/svg\+xml", "%3Csvg[^>"]+%3E"\)/g,bg-["url(""data": "image/svg"+xml", "%3Csvg width=\\60\\ height=\\60\\ viewBox=\\"0 0 60 60\\" xmlns=\\"http": //www.w3."org/2000/svg"\\%3E%3Cg fill=\\none\\ fill-rule=\\evenodd\\%3E%3Cg fill=\\"%23ffffff\\" fill-opacity=\\0.05\\%3E%3Ccircle cx=\\30\\ cy=\\30\\ r=\\"2\\"/%3E%3"C/g"%3E%3"C/g"%3E%3"C/svg"%3E)"]";
        );
        // Fix JSX structure;
        content = content.replace(;
          /<div\s+className="absolute inset-0[^>]+>\s*<\/div>/g,<div className="absolute inset-0 bg-["url(\"data": "image/svg"+xml", "%3Csvg width=\\60\\ height=\\60\\ viewBox=\\"0 0 60 60\\" xmlns=\\"http": //www.w3."org/2000/svg"\\%3E%3Cg fill=\\none\\ fill-rule=\\evenodd\\%3E%3Cg fill=\\"%23ffffff\\" fill-opacity=\\0.05\\%3E%3Ccircle cx=\\30\\ cy=\\30\\ r=\\"2\\"/%3E%3"C/g"%3E%3"C/g"%3E%3"C/svg"%3E\)"] opacity-50></div>";
        );
        if (content !== originalContent) {
  fs.writeFileSync(filePath, content);
          fixes++;
        // Fix JSX attribute issues;
        content = content.replace(;
          /bg-\["url\(""data": image\/svg\+xml", "%3Csvg[^>"]+%3E"\)/g,bg-["url(""data": ""image/svg""+xml", "%3Csvg width=\\60\\ height=\\"60\\" viewBox=\\0 0 60 60\\ xmlns=\\""http": //www.w3.""org/2000/svg""\\"%3E%3Cg fill=\\none\\ fill-rule=\\"evenodd\\"%3E%3Cg fill=\\%23ffffff\\ fill-opacity=\\"0.05\\"%3E%3Ccircle cx=\\30\\ cy=\\"30\\" r=\\2\\/%3E%3""C/g""%3E%3""C/g""%3E%3""C/svg""%3E")"]";
        // Fix JSX attribute issues");
        content = content.replace(");
          /bg-\["url\("data:image\/svg\+xml", "%3Csvg[^>"]+%3E"\)/g,bg-["url(""data": ""image/svg""+xml", "%3Csvg width=\\"60\\ height=\\60\\" viewBox=\\"0 0 60 60\\ xmlns=\\"http": //www.w3.""org/2000/svg""\\"%3E%3Cg fill=\\"none\\ fill-rule=\\evenodd\\"%3E%3Cg fill=\\"%23ffffff\\ fill-opacity=\\0.05\\"%3E%3Ccircle cx=\\"30\\ cy=\\30\\" r=\\"2\\/%3E%3""C/g""%3E%3""C/g""%3E%3""C/svg""%3E)"]");
        );
        // Fix JSX structure;
        content = content.replace(;
          /<div\s+className="absolute inset-0[^>]+>\s*<\/div>/g,<div className="absolute inset-0 bg-["url(\""data": ""image/svg""+xml", "%3Csvg width=\\"60\\ height=\\60\\ viewBox=\\0 0 60 60\\ xmlns=\\"http": //www.w3.""org/2000/svg""\\"%3E%3Cg fill=\\"none\\ fill-rule=\\evenodd\\%3E%3Cg fill=\\%23ffffff\\ fill-opacity=\\0.05\\"%3E%3Ccircle cx=\\"30\\ cy=\\30\\ r=\\2\\/%3E%3""C/g""%3E%3""C/g""%3E%3""C/svg""%3E\)"] opacity-50"></div>"        );
        if (content !== originalContent) {
  fs.writeFileSync(filePath, content);");
          fixes++;");
          }
      } catch (error) {  }
    }
  }
  ;
  return fixes}
;
async function fixJSXFragments() {
  let fixes = 0;
  // Fix files with JSX fragment errors;
  const filesToFix = [""src/components/header/Header.jsx""";
  // Fix files with JSX fragment errors;
  const filesToFix = ["src/components/header/Header.jsx"";
  ");
  // Fix files with JSX fragment errors");
  const filesToFix = [""src/components/header/Header.jsx""")];
  for (const filePath of filesToFix) {
  if (fs.existsSync(filePath)) {
  try {
  let content = fs.readFileSync(filePath, "utf8");
        let originalContent = content;
        // Fix JSX fragment syntax;
        content = content.replace(/<\/><\/div>/g, "</></div>");
        content = content.replace(/<\/><\/header>/g, "</header>");
        content = content.replace(/<\/>;/g, "</>");
        // Fix specific JSX fragment issues;
        content = content.replace(;
          /<>\s*<div\s+className="[^]*">\s*<\/div>\s*<\/>/g,<div className="header-container>\n        </div>";
          /<>\s*<div\s+className="[^"]*">\s*<\/div>\s*<\/>/g,<div className="header-container">\n        </div>");
        );
        if (content !== originalContent) {
  fs.writeFileSync(filePath, content);");
          fixes++;");
          }
      } catch (error) {  }
    }
  }
  ;
  return fixes}
;
// Main continuous loop;
async function runContinuous() {
  // Run initial error fixer;
  await runJSXErrorFixer();
  // Set up continuous execution;
  setInterval(async () => {
  await runJSXErrorFixer()}, AUTOMATION_INTERVAL);
  }
;
// Handle graceful shutdown;
process.on("SIGINT", () => {
// Handle graceful shutdown;
process.on("SIGINT", () => {
  process.exit(0)});
process.on("SIGTERM", () => {
  process.exit(0)});
// Start the JSX error fixer;
runContinuous().catch(error => {
  console.error("❌ Failed to start JSX error "fixer": ", error);  process.exit(1)})
#!/usr/bin/env node/""usr/bin/env"" node;"const { execSync } = require("child_process");"const fs = require("fs");"const path = require("path");"console.log("" Starting JSX error fixer automation.");"/ Get automation interval from environment variable (default: 40 minutes);const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) | 2400000; / 40 minutes;async function $1() { try { #!/usr/bin/env node"const { execSync } = require("child_process");"const fs = require("fs");"const path = require("path");"console.log("" Starting JSX error fixer automation.");"/ Get automation interval from environment variable (default: 40 minutes);const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) | 2400000; / 40 minutes;"console.log(" Starting JSX error fixer automation.");async function runJSXErrorFixer() { try { console.log(` Running JSX error fixer at ${new Date().toISOString()}); let fixesApplied = 0; / 1. Fix JSX closing tag errors;"` console.log(`" Fixing JSX closing tag errors."); fixesApplied += await fixJSXClosingTags(); / 2. Fix JSX expression errors;" console.log(" Fixing JSX expression errors.""); fixesApplied += await fixJSXExpressions(); / 3. Fix JSX parent element errors;" console.log(" Fixing JSX parent element errors."); fixesApplied += await fixJSXParentElements(); / 4. Fix JSX attribute errors;" console.log(" Fixing JSX attribute errors."); fixesApplied += await fixJSXAttributes(); / 5. Fix JSX fragment errors;" console.log(" Fixing JSX fragment errors."); fixesApplied += await fixJSXFragments(); / Generate JSX error fixer report;" console.log(" Generating JSX error fixer report."); const report = {" timestamp: new Date().toISOString()," fixesApplied: fixesApplied," summary: "JSX error fixer completed"," status: "completed"}"` const reportPath = path.join(process.cwd(), "jsx-error-fixer-report.json`); fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));console.log( JSX error fixer report saved to ${reportPath});"` console.log( JSX error fixer completed successfully. Applied ${fixesApplied} fixes.`")} catch (error) {" console.error(" JSX error fixer failed: ", error.message)} catch (error) {" console.error(" JSX error fixer failed: ", error.message)} fixesApplied += await fixJSXClosingTags(); / 2. Fix JSX expression errors;" console.log(" Fixing JSX expression errors.""); fixesApplied += await fixJSXExpressions(); / 3. Fix JSX parent element errors;" console.log(" Fixing JSX parent element errors."); fixesApplied += await fixJSXParentElements(); / 4. Fix JSX attribute errors;" console.log(" Fixing JSX attribute errors."); fixesApplied += await fixJSXAttributes(); / 5. Fix JSX fragment errors;" console.log(" Fixing JSX fragment errors."); fixesApplied += await fixJSXFragments(); / Generate JSX error fixer report;" console.log(" Generating JSX error fixer report."); const report = {" timestamp: new Date().toISOString()," fixesApplied: fixesApplied," summary: "JSX error fixer completed"," status: "completed"} ;" const reportPath = path.join(process.cwd(), "jsx-error-fixer-report.json"); fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));console.log( JSX error fixer report saved to ${reportPath});" console.log( JSX error fixer completed successfully. Applied ${fixesApplied} fixes."")} catch (error) {" console.error(" JSX error fixer failed: ", error.message)}};async function fixJSXClosingTags() { let fixes = 0; / Fix files with JSX closing tag errors;" const filesToFix = ["""src/components/ScrollToTop.jsx"""", """src/components/home/ServicesShowcase.jsx""", """src/layout/PrimaryNav.jsx"""", """src/layout/Header.jsx""", """src/pages/EnterpriseDemo.jsx"""", """src/pages/services/Cybersecurity.tsx""", """src/pages/services/DigitalTransformation.tsx""""]; for (const filePath of filesToFix) { if (fs.existsSync(filePath)) { try {" let content = fs.readFileSync(filePath, "utf8"); let originalContent = content; / Fix files with JSX closing tag errors;" const filesToFix = [""src/components/ScrollToTop.jsx"", ""src/components/home/ServicesShowcase.jsx"", ""src/layout/PrimaryNav.jsx"", ""src/layout/Header.jsx"", ""src/pages/EnterpriseDemo.jsx"", ""src/pages/services/Cybersecurity.tsx"", ""src/pages/services/DigitalTransformation.tsx""]; for (const filePath of filesToFix) { if (fs.existsSync(filePath)) { try {" let content = fs.readFileSync(filePath, "utf8"); let originalContent = content; / Fix malformed JSX closing tags;" content = content.replace(/<\/>div>/g, "</div>");" content = content.replace(/<\/>header>/g, "</header>");" content = content.replace(/<\/>;/g, "</>");" content = content.replace(/<\/>CardTitle>/g, "</CardTitle>");" content = content.replace(/<\/>motion\.div>/g, "</motion.div>");" content = content.replace(/<\/>motion\.h1>/g, "</motion.h1>"); / Fix missing closing tags;" content = content.replace(/<div\s+className="max-w-4xl mx-auto space-y-8>\s*<""div/g"", "<div className=max-w-4xl mx-auto space-y-8><div"); / Fix specific JSX structure issues;" content = content.replace(/<\/Button>\s*<\/div>\s*<\/div>/g, "</Button>\n </div>\n </div>"); if (content !== originalContent) { fs.writeFileSync(filePath, content);` fixes++;console.log(` Fixed JSX closing tags in ${filePath}`)}` } catch (error) { console.log(` Could not fix ${filePath }: ${error.message}`)} } } ; return fixes};async function fixJSXExpressions() { let fixes = 0; / Fix files with JSX expression errors;" const filesToFix = ["""src/components/MobileExperienceEnhancer.tsx"""", """src/components/UltimateServicesShowcase2025.tsx""", """src/components/home/HeroFeatures.tsx"""", """src/components/ServicesOverview.tsx""", """src/components/UltimateServicesShowcase.tsx""""]; for (const filePath of filesToFix) { if (fs.existsSync(filePath)) { try {" let content = fs.readFileSync(filePath, "utf8"); let originalContent = content;" / Fix JSX expressions with "any" type annotations;" content = content.replace(/transition=\{\{\s*duration: \s*any(\d+\.?\d*),\s*delay: \s*(\d+\.?\d*)\s*\}\}/g, "transition={{ duration: $1, delay: $2 }}");" content = content.replace(/color: \s*any"([^"]+)"/g, color: "$1");" content = content.replace(/icon:\s*any"([^"]+)"/g, icon: "$1"");" content = content.replace(/id:\s*any"([^"]+)"/g, "id: "$1");" content = content.replace(/property:\s*any"([^"]+)"/g, property: "$1");" content = content.replace(/rel:\s*any"([^"]+)"/g, rel: "$1"); / Fix specific JSX expression patterns;" content = content.replace(/href:\s*any"\/"/g, href: "/"");" content = content.replace(/key:\s*any(\w+)/g, "key: $1"); if (content !== originalContent) { / Fix specific JSX expression patterns;" content = content.replace(/href:\s*any"\/"/g, "href: "/");" content = content.replace(/key:\s*any(\w+)/g, "key: $1"); if (content !== originalContent) { fs.writeFileSync(filePath, content); fixes++;" ");" if (content !== originalContent) {");" fs.writeFileSync(filePath, content);");" fixes++;");" console.log(" Fixed JSX expressions in ${filePath}")}" } catch (error) { console.log(" Could not fix ${filePath }: ${error.message}")} } } ; return fixes};async function fixJSXParentElements() { let fixes = 0; / Fix files with JSX parent element errors;" const filesToFix = ["""src/legal/TermsOfService.tsx"""", """src/pages/admin/SupportRequests.tsx"""]; for (const filePath of filesToFix) { if (fs.existsSync(filePath)) { try {" let content = fs.readFileSync(filePath, "utf8"); let originalContent = content; / Fix JSX expressions that must have one parent element;" if (filePath.includes("TermsOfService.tsx")) { / Wrap the entire JSX in a single parent div;" const jsxStart = content.indexOf("<div className=max-w-4xl mx-auto space-y-8>");" const jsxEnd = content.lastIndexOf("</div>"); if (jsxStart !== -1 && jsxEnd !== -1) { const beforeJSX = content.substring(0, jsxStart); const jsxContent = content.substring(jsxStart, jsxEnd + 6); const afterJSX = content.substring(jsxEnd + 6);" content = beforeJSX + <div className="terms-of-service-container>\n" +;" jsxContent + "\n" +</div>\n" +; afterJSX} } ;" if (filePath.includes("SupportRequests.tsx")) { / Fix the JSX structure by ensuring proper wrapping; content = content.replace(;" /<SEO\s+title="Support Requests \| Admin Dashboard"/g,<div className="support-requests-container">\n <SEO\n title=Support Requests | Admin Dashboard"; ); content = content.replace(;" /<\/Tabs>\s*<\/div>\s*$/g,</Tabs>\n </div>\n </div>"; )} ; if (content !== originalContent) { fs.writeFileSync(filePath, content); fixes++;" if (filePath.includes("SupportRequests.tsx")) { / Fix the JSX structure by ensuring proper wrapping; content = content.replace(;" /<SEO\s+title=Support Requests \| Admin Dashboard"/g,<div className="support-requests-container>\n <SEO\n title="Support Requests | Admin Dashboard""; ); content = content.replace(;" /<\/Tabs>\s*<\/div>\s*$/g,</Tabs>\n </div>\n </div>";" / Fix the JSX structure by ensuring proper wrapping");" content = content.replace(");" /<SEO\s+title=Support Requests \| Admin Dashboard"/g,<div className="support-requests-container>\n <SEO\n title="Support Requests | Admin Dashboard""); ); content = content.replace(;" /<\/Tabs>\s*<\/div>\s*$/g,</Tabs>\n </div>\n </div>"); )} ; if (content !== originalContent) {" fs.writeFileSync(filePath, content);");" fixes++;");` console.log(` Fixed JSX parent elements in ${filePath}`)}` } catch (error) { console.log(` Could not fix ${filePath }: ${error.message}`)} } } ; return fixes};async function fixJSXAttributes() { let fixes = 0; / Fix files with JSX attribute errors;" const filesToFix = ["src/pages/ForgotPassword.tsx""; / Fix files with JSX attribute errors;" const filesToFix = [""src/pages/ForgotPassword.tsx"""; / Fix files with JSX attribute errors;" const filesToFix = [""src/pages/ForgotPassword.tsx""")]]; for (const filePath of filesToFix) { if (fs.existsSync(filePath)) { try {" let content = fs.readFileSync(filePath, "utf8"); let originalContent = content; / Fix JSX attribute issues; content = content.replace(;" /bg-\["url\("data: image\/svg\+xml", "%3Csvg[^>"]+%3E"\)/g,bg-["url("data: "image/svg"+xml", "%3Csvg width=\60\ height=\60\ viewBox=\"0 0 60 60\" xmlns=\http: /www.w3."org/2000/svg"\%3E%3Cg fill=\none\ fill-rule=\evenodd\%3E%3Cg fill=\"%23ffffff\" fill-opacity=\0.05\%3E%3Ccircle cx=\30\ cy=\30\ r=\"2\"/%3E%3"C/g"%3E%3"C/g"%3E%3"C/svg"%3E)"]"; ); / Fix JSX structure; content = content.replace(;" /<div\s+className="absolute inset-0[^>]+>\s*<\/div>/g,<div className="absolute inset-0 bg-["url(\data: "image/svg"+xml", "%3Csvg width=\60\ height=\60\ viewBox=\"0 0 60 60\" xmlns=\http: /www.w3."org/2000/svg"\%3E%3Cg fill=\none\ fill-rule=\evenodd\%3E%3Cg fill=\"%23ffffff\" fill-opacity=\0.05\%3E%3Ccircle cx=\30\ cy=\30\ r=\"2\"/%3E%3"C/g"%3E%3"C/g"%3E%3"C/svg"%3E\)"] opacity-50></div>"; ); if (content !== originalContent) { fs.writeFileSync(filePath, content); fixes++; / Fix JSX attribute issues; content = content.replace(;" /bg-\["url\("data: image\/svg\+xml", "%3Csvg[^>"]+%3E"\)/g,bg-["url("data: ""image/svg""+xml", "%3Csvg width=\60\ height=\"60\" viewBox=\0 0 60 60\ xmlns=\"http: /www.w3.""org/2000/svg""\"%3E%3Cg fill=\none\ fill-rule=\"evenodd\"%3E%3Cg fill=\%23ffffff\ fill-opacity=\"0.05\"%3E%3Ccircle cx=\30\ cy=\"30\" r=\2\/%3E%3""C/g""%3E%3""C/g""%3E%3""C/svg""%3E")"]";" / Fix JSX attribute issues");" content = content.replace(");" /bg-\["url\("data:image\/svg\+xml", "%3Csvg[^>"]+%3E"\)/g,bg-["url("data: ""image/svg""+xml", "%3Csvg width=\"60\ height=\60\" viewBox=\"0 0 60 60\ xmlns=\http: /www.w3.""org/2000/svg""\"%3E%3Cg fill=\"none\ fill-rule=\evenodd\"%3E%3Cg fill=\"%23ffffff\ fill-opacity=\0.05\"%3E%3Ccircle cx=\"30\ cy=\30\" r=\"2\/%3E%3""C/g""%3E%3""C/g""%3E%3""C/svg""%3E)"]"); ); / Fix JSX structure; content = content.replace(;" /<div\s+className="absolute inset-0[^>]+>\s*<\/div>/g,<div className="absolute inset-0 bg-["url(\"data: ""image/svg""+xml", "%3Csvg width=\"60\ height=\60\ viewBox=\0 0 60 60\ xmlns=\http: /www.w3.""org/2000/svg""\"%3E%3Cg fill=\"none\ fill-rule=\evenodd\%3E%3Cg fill=\%23ffffff\ fill-opacity=\0.05\"%3E%3Ccircle cx=\"30\ cy=\30\ r=\2\/%3E%3""C/g""%3E%3""C/g""%3E%3""C/svg""%3E\)"] opacity-50"></div>" ); if (content !== originalContent) {" fs.writeFileSync(filePath, content);");" fixes++;");" console.log(" Fixed JSX attributes in ${filePath}")}" } catch (error) { console.log(" Could not fix ${filePath }: ${error.message}")} } } ; return fixes};async function fixJSXFragments() { let fixes = 0; / Fix files with JSX fragment errors;" const filesToFix = [""src/components/header/Header.jsx"""; / Fix files with JSX fragment errors;" const filesToFix = ["src/components/header/Header.jsx"";" ");" / Fix files with JSX fragment errors");" const filesToFix = [""src/components/header/Header.jsx""")]; for (const filePath of filesToFix) { if (fs.existsSync(filePath)) { try {" let content = fs.readFileSync(filePath, "utf8"); let originalContent = content; / Fix JSX fragment syntax;" content = content.replace(/<\/><\/div>/g, "</></div>");" content = content.replace(/<\/><\/header>/g, "</header>");" content = content.replace(/<\/>;/g, "</>"); / Fix specific JSX fragment issues; content = content.replace(;" /<>\s*<div\s+className="[^]*">\s*<\/div>\s*<\/>/g,<div className="header-container>\n </div>";" /<>\s*<div\s+className="[^"]*">\s*<\/div>\s*<\/>/g,<div className="header-container">\n </div>"); ); if (content !== originalContent) {" fs.writeFileSync(filePath, content);");" fixes++;");` console.log(` Fixed JSX fragments in ${filePath}`)}` } catch (error) { console.log(` Could not fix ${filePath }: ${error.message}`)} } } ; return fixes};/ Main continuous loop;`async function runContinuous() {console.log(` Starting JSX error fixer with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`); / Run initial error fixer; await runJSXErrorFixer(); / Set up continuous execution; setInterval(async () => { await runJSXErrorFixer()}, AUTOMATION_INTERVAL);` console.log(` JSX error fixer running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`)};/ Handle graceful shutdown;"process.on("SIGINT", () => {" console.log(" Received SIGINT, shutting down gracefully.");/ Handle graceful shutdown;"process.on("SIGINT", () => {" console.log(" Received SIGINT, shutting down gracefully."); process.exit(0)});"process.on("SIGTERM", () => {" console.log(" Received SIGTERM, shutting down gracefully."); process.exit(0)});/ Start the JSX error fixer;runContinuous().catch(error => {" console.error(" Failed to start JSX error fixer: ", error); process.exit(1)})"`"`
#!/""usr/bin/env""
const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")
console.log("" Starting JSX error fixer automation...")
// Get automation interval from environment variable ("default")
const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")
console.log("" Starting JSX error fixer automation...")
// Get automation interval from environment variable ("default")
// console.log(" Starting JSX error fixer automation...")
    console.log(`" Fixing JSX closing tag errors..."`)
// console.log(" Fixing JSX expression errors..."")
    console.log(" Fixing JSX parent element errors...")
// console.log(" Fixing JSX attribute errors...")
    console.log(" Fixing JSX fragment errors...")
    console.log(" Generating JSX error fixer report...")
  "timestamp"
      "fixesApplied"
      "summary": "JSX error fixer completed"
      "status": "completed"
    const reportPath = path.join(process.cwd(), "
    console.log( JSX error fixer completed successfully. Applied ${fixesApplied} fixes.```)
  console.error(" JSX error fixer "failed": ")
  console.error(" JSX error fixer "failed": ")
// console.log(" Fixing JSX expression errors..."")
    console.log(" Fixing JSX parent element errors...")
// console.log(" Fixing JSX attribute errors...")
    console.log(" Fixing JSX fragment errors...")
    console.log(" Generating JSX error fixer report...")
  "timestamp"
      "fixesApplied"
      "summary": "JSX error fixer completed"
      "status": "completed"
    const reportPath = path.join(process.cwd(), "jsx-error-fixer-report.json"
    console.log( JSX error fixer completed successfully. Applied ${fixesApplied} fixes."")
  console.error(" JSX error fixer "failed": ")
  const filesToFix = ["""src/components/ScrollToTop.jsx"""", """src/components/home/ServicesShowcase.jsx""", """src/layout/PrimaryNav.jsx"""", """src/layout/Header.jsx""", """src/pages/EnterpriseDemo.jsx"""", """src/pages/services/Cybersecurity.tsx""", """src/pages/services/DigitalTransformation.tsx""""]
  let content = fs.readFileSync(filePath, "utf8")
  const filesToFix = [""src/components/ScrollToTop.jsx"", ""src/components/home/ServicesShowcase.jsx"", ""src/layout/PrimaryNav.jsx"", ""src/layout/Header.jsx"", ""src/pages/EnterpriseDemo.jsx"", ""src/pages/services/Cybersecurity.tsx"", ""src/pages/services/DigitalTransformation.tsx""]
  let content = fs.readFileSync(filePath, "utf8")
        content = content.replace(/<\/>div>/g, "</div>")
        content = content.replace(/<\/>header>/g, "</header>")
        content = content.replace(/<\/>;/g, "</>")
        content = content.replace(/<\/>CardTitle>/g, "</CardTitle>")
        content = content.replace(/<\/>motion\.div>/g, "</motion.div>")
        content = content.replace(/<\/>motion\.h1>/g, "</motion.h1>")
        content = content.replace(/<div\s+className="max-w-4xl mx-auto space-y-8>\s*<""div/g"", "<div className=max-w-4xl mx-auto space-y-8><div")
        content = content.replace(/<\/Button>\s*<\/div>\s*<\/div>/g, "</Button>\n                </div>\n              </div>")
  const filesToFix = ["""src/components/MobileExperienceEnhancer.tsx"""", """src/components/UltimateServicesShowcase2025.tsx""", """src/components/home/HeroFeatures.tsx"""", """src/components/ServicesOverview.tsx""", """src/components/UltimateServicesShowcase.tsx""""]
  let content = fs.readFileSync(filePath, "utf8")
        // Fix JSX expressions with "any"
        content = content.replace(/transition=\{\{\s*"duration": \s*any(\d+\.?\d*),\s*"delay": \s*(\d+\.?\d*)\s*\}\}/g, "transition={{ "duration": $1, "delay": $2 }}"
        content = content.replace(/"color": \s*any"([^"]+)"/g, "color": "$1"
        content = content.replace(/icon:\s*any"([^"]+)"/g, "icon": "$1""
        content = content.replace(/id:\s*any"([^"]+)"/g, ""id": "$1"
        content = content.replace(/property:\s*any"([^"]+)"/g, "property": "$1"
        content = content.replace(/rel:\s*any"([^"]+)"/g, "rel": "$1"
        content = content.replace(/href:\s*any"\/"/g, "href": "/"")
        content = content.replace(/key:\s*any(\w+)/g, ""key": $1"
        content = content.replace(/href:\s*any"\/"/g, ""href": "/")
        content = content.replace(/key:\s*any(\w+)/g, ""key": $1"
        "
        if (content !== originalContent) {"}
          fs.writeFileSync(filePath, content);"
          fixes++;"
          console.log("   Fixed JSX expressions in ${filePath}")
      } catch (error) {  console.log("  ⚠  Could not fix ${filePath  }: ${error.message}")
  const filesToFix = ["""src/legal/TermsOfService.tsx"""", """src/pages/admin/SupportRequests.tsx"""]
  let content = fs.readFileSync(filePath, "utf8")
        if (filePath.includes("TermsOfService.tsx")
          const jsxStart = content.indexOf("<div className=max-w-4xl mx-auto space-y-8>")
          const jsxEnd = content.lastIndexOf("</div>")
            content = beforeJSX + <div className="terms-of-service-container>\n"
                     jsxContent + "\n" +</div>\n"
        if (filePath.includes("SupportRequests.tsx")
            /<SEO\s+title="Support Requests \| Admin Dashboard"/g,<div className="support-requests-container">\n        <SEO\n          title=Support Requests | Admin Dashboard"
            /<\/Tabs>\s*<\/div>\s*$/g,</Tabs>\n        </div>\n      </div>"
        if (filePath.includes("SupportRequests.tsx")
            /<SEO\s+title=Support Requests \| Admin Dashboard"/g,<div className="support-requests-container>\n        <SEO\n          title="Support Requests | Admin Dashboard""
            /<\/Tabs>\s*<\/div>\s*$/g,</Tabs>\n        </div>\n      </div>"
          // Fix the JSX structure by ensuring proper wrapping"
          content = content.replace(")
            /<SEO\s+title=Support Requests \| Admin Dashboard"/g,<div className="support-requests-container>\n        <SEO\n          title="Support Requests | Admin Dashboard""
            /<\/Tabs>\s*<\/div>\s*$/g,</Tabs>\n        </div>\n      </div>"
  fs.writeFileSync(filePath, content);"
          fixes++;"
  const filesToFix = ["src/pages/ForgotPassword.tsx""]
  const filesToFix = [""src/pages/ForgotPassword.tsx"""]
  const filesToFix = [""src/pages/ForgotPassword.tsx"""]
  let content = fs.readFileSync(filePath, "utf8")
          /bg-\["url\(""data": image\/svg\+xml", "%3Csvg[^>"]+%3E"\)/g,bg-["url(""data": "image/svg"+xml", "%3Csvg width=\\60\\ height=\\60\\ viewBox=\\"0 0 60 60\\" xmlns=\\"http": //www.w3."org/2000/svg"\\%3E%3Cg fill=\\none\\ fill-rule=\\evenodd\\%3E%3Cg fill=\\"%23ffffff\\" fill-opacity=\\0.05\\%3E%3Ccircle cx=\\30\\ cy=\\30\\ r=\\"2\\"/%3E%3"C/g"%3E%3"C/g"%3E%3"C/svg"%3E)"]"
          /<div\s+className="absolute inset-0[^>]+>\s*<\/div>/g,<div className="absolute inset-0 bg-["url(\"data": "image/svg"+xml", "%3Csvg width=\\60\\ height=\\60\\ viewBox=\\"0 0 60 60\\" xmlns=\\"http": //www.w3."org/2000/svg"\\%3E%3Cg fill=\\none\\ fill-rule=\\evenodd\\%3E%3Cg fill=\\"%23ffffff\\" fill-opacity=\\0.05\\%3E%3Ccircle cx=\\30\\ cy=\\30\\ r=\\"2\\"/%3E%3"C/g"%3E%3"C/g"%3E%3"C/svg"%3E\)"] opacity-50></div>"
          /bg-\["url\(""data": image\/svg\+xml", "%3Csvg[^>"]+%3E"\)/g,bg-["url(""data": ""image/svg""+xml", "%3Csvg width=\\60\\ height=\\"60\\" viewBox=\\0 0 60 60\\ xmlns=\\""http": //www.w3.""org/2000/svg""\\"%3E%3Cg fill=\\none\\ fill-rule=\\"evenodd\\"%3E%3Cg fill=\\%23ffffff\\ fill-opacity=\\"0.05\\"%3E%3Ccircle cx=\\30\\ cy=\\"30\\" r=\\2\\/%3E%3""C/g""%3E%3""C/g""%3E%3""C/svg""%3E")"]"
        // Fix JSX attribute issues"
        content = content.replace(")
          /bg-\["url\("data:image\/svg\+xml", "%3Csvg[^>"]+%3E"\)/g,bg-["url(""data": ""image/svg""+xml", "%3Csvg width=\\"60\\ height=\\60\\" viewBox=\\"0 0 60 60\\ xmlns=\\"http": //www.w3.""org/2000/svg""\\"%3E%3Cg fill=\\"none\\ fill-rule=\\evenodd\\"%3E%3Cg fill=\\"%23ffffff\\ fill-opacity=\\0.05\\"%3E%3Ccircle cx=\\"30\\ cy=\\30\\" r=\\"2\\/%3E%3""C/g""%3E%3""C/g""%3E%3""C/svg""%3E)"]"
          /<div\s+className="absolute inset-0[^>]+>\s*<\/div>/g,<div className="absolute inset-0 bg-["url(\""data": ""image/svg""+xml", "%3Csvg width=\\"60\\ height=\\60\\ viewBox=\\0 0 60 60\\ xmlns=\\"http": //www.w3.""org/2000/svg""\\"%3E%3Cg fill=\\"none\\ fill-rule=\\evenodd\\%3E%3Cg fill=\\%23ffffff\\ fill-opacity=\\0.05\\"%3E%3Ccircle cx=\\"30\\ cy=\\30\\ r=\\2\\/%3E%3""C/g""%3E%3""C/g""%3E%3""C/svg""%3E\)"] opacity-50"></div>"
  fs.writeFileSync(filePath, content);"
          fixes++;"
          console.log("   Fixed JSX attributes in ${filePath}")
      } catch (error) {  console.log("  ⚠  Could not fix ${filePath  }: ${error.message}")
  const filesToFix = [""src/components/header/Header.jsx"""]
  const filesToFix = ["src/components/header/Header.jsx""]
  "
  // Fix files with JSX fragment errors"
  const filesToFix = [""src/components/header/Header.jsx"""]
  let content = fs.readFileSync(filePath, "utf8")
        content = content.replace(/<\/><\/div>/g, "</></div>")
        content = content.replace(/<\/><\/header>/g, "</header>")
        content = content.replace(/<\/>;/g, "</>")
          /<>\s*<div\s+className="[^]*">\s*<\/div>\s*<\/>/g,<div className="header-container>\n        </div>"
          /<>\s*<div\s+className="[^"]*">\s*<\/div>\s*<\/>/g,<div className="header-container">\n        </div>"
  fs.writeFileSync(filePath, content);"
          fixes++;"
process.on("SIGINT")
  console.log("� Received SIGINT, shutting down gracefully...")
process.on("SIGINT")
  console.log("� Received SIGINT, shutting down gracefully...")
process.on("SIGTERM")
  console.log("� Received SIGTERM, shutting down gracefully...")
  console.error(" Failed to start JSX error "fixer": ")
