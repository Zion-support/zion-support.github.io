<<<<<<< HEAD
#!/""usr/bin/env""""
const { execSync } = require("child_process")""
const fs = require("fs")""
const path = require("path")""
console.log("" Starting JSX error fixer automation...")""
// Get automation interval from environment variable ("default")""
// Get automation interval from environment variable ("default")""
// console.log(" Starting JSX error fixer automation...")""
    console.log(`" Fixing JSX closing tag errors..."`)""
// console.log(" Fixing JSX expression errors..."")""
    console.log(" Fixing JSX parent element errors...")""
// console.log(" Fixing JSX attribute errors...")""
    console.log(" Fixing JSX fragment errors...")""
    console.log(" Generating JSX error fixer report...")""
  "timestamp"""
      "fixesApplied"""
      "summary": "JSX error fixer completed"""
      "status": "completed"""
    const reportPath = path.join(process.cwd(), ""`;
    console.log( JSX error fixer completed successfully. Applied ${fixesApplied} fixes.```)"
  console.error(" JSX error fixer "failed": ")""
// console.log(" Fixing JSX expression errors..."")""
// console.log(" Fixing JSX attribute errors...")""
    const reportPath = path.join(process.cwd(), "jsx-error-fixer-report.json"""
    console.log( JSX error fixer completed successfully. Applied ${fixesApplied} fixes."")""
  const filesToFix = ["""src/components/ScrollToTop.jsx"""", """src/components/home/ServicesShowcase.jsx""", """src/layout/PrimaryNav.jsx"""", """src/layout/Header.jsx""", """src/pages/EnterpriseDemo.jsx"""", """src/pages/services/Cybersecurity.tsx""", """src/pages/services/DigitalTransformation.tsx""""]""
  let content = fs.readFileSync(filePath, "utf8")""
  const filesToFix = [""src/components/ScrollToTop.jsx"", ""src/components/home/ServicesShowcase.jsx"", ""src/layout/PrimaryNav.jsx"", ""src/layout/Header.jsx"", ""src/pages/EnterpriseDemo.jsx"", ""src/pages/services/Cybersecurity.tsx"", ""src/pages/services/DigitalTransformation.tsx""]""
        content = content.replace(/<\/>div>/g, "</div>")""
        content = content.replace(/<\/>header>/g, "</header>")""
        content = content.replace(/<\/>;/g, "</>")""
        content = content.replace(/<\/>CardTitle>/g, "")""
        content = content.replace(/<\/>motion\.div>/g, "</motion.div>")""
        content = content.replace(/<\/>motion\.h1>/g, "</motion.h1>")""
        content = content.replace(/<div\s+className="max-w-4xl mx-auto space-y-8>\s*<""div/g"", "<div className=max-w-4xl mx-auto space-y-8><div")"
</div>"
        content = content.replace(/<\/Button>\s*<\/div>\s*<\/div>/g, "\n                </div>\n              </div>")""
          const jsxStart = content.indexOf("<div className=max-w-4xl mx-auto space-y-8>")"
          const jsxEnd = content.lastIndexOf("</div>")""
            content = beforeJSX + <div className="terms-of-service-container>\n""
                     jsxContent + "\n" +</div>\n"""
            /<SEO\s+title="Support Requests \| Admin Dashboard"/g,<div className="support-requests-container">\n        <SEO\n          title=Support Requests | Admin Dashboard""
"
            /<\/Tabs>\s*<\/div>\s*$/g,\n        </div>\n      </div>"""
            /<SEO\s+title=Support Requests \| Admin Dashboard"/g,<div className="support-requests-container>\n        <SEO\n          title="Support Requests | Admin Dashboard"""
          /<div\s+className="absolute inset-0[^>]+>\s*<\/div>/g,<div className="absolute inset-0 bg-["url(\"data": "image/svg"+xml", "%3Csvg width=\\60\\ height=\\60\\ viewBox=\\"0 0 60 60\\" xmlns=\\"http": //www.w3."org/2000/svg"\\%3E%3Cg fill=\\none\\ fill-rule=\\evenodd\\%3E%3Cg fill=\\"%23ffffff\\" fill-opacity=\\0.05\\%3E%3Ccircle cx=\\30\\ cy=\\30\\ r=\\"2\\"/%3E%3"C/g"%3E%3"C/g"%3E%3"C/svg"%3E\)"] opacity-50></div>"""
          /<div\s+className="absolute inset-0[^>]+>\s*<\/div>/g,<div className="absolute inset-0 bg-["url(\""data": ""image/svg""+xml", "%3Csvg width=\\"60\\ height=\\60\\ viewBox=\\0 0 60 60\\ xmlns=\\"http": //www.w3.""org/2000/svg""\\"%3E%3Cg fill=\\"none\\ fill-rule=\\evenodd\\%3E%3Cg fill=\\%23ffffff\\ fill-opacity=\\0.05\\"%3E%3Ccircle cx=\\"30\\ cy=\\30\\ r=\\2\\/%3E%3""C/g""%3E%3""C/g""%3E%3""C/svg""%3E\)"] opacity-50"></div>"""
        content = content.replace(/<\/><\/div>/g, "</></div>")""
        content = content.replace(/<\/><\/header>/g, "</header>")""
          /<>\s*<div\s+className="[^]*">\s*<\/div>\s*<\/>/g,<div className="header-container>\n        </div>"""
          /<>\s*<div\s+className="[^"]*">\s*<\/div>\s*<\/>/g,<div className="header-container">\n        </div>"""`;
=======
#!/usr/bin/env
const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")
console.log( Starting JSX error fixer automation...")
// Get automation interval from environment variable ("default")
const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")
console.log( Starting JSX error fixer automation...")
// Get automation interval from environment variable ("default")
// console.log(" Starting JSX error fixer automation...")
    console.log(`" Fixing JSX closing tag errors..."`)
// console.log(" Fixing JSX expression errors...)
    console.log(" Fixing JSX parent element errors...")
// console.log(" Fixing JSX attribute errors...")
    console.log(" Fixing JSX fragment errors...")
    console.log(" Generating JSX error fixer report...")
  "timestamp"
      "fixesApplied"
      "summary": "JSX error fixer completed"
      "status": "completed"
    const reportPath = path.join(process.cwd(), 
    console.log( JSX error fixer completed successfully. Applied ${fixesApplied} fixes.```)"
  console.error(" JSX error fixer "failed": ")
  console.error(" JSX error fixer "failed": ")
// console.log(" Fixing JSX expression errors...)
    console.log(" Fixing JSX parent element errors...")
// console.log(" Fixing JSX attribute errors...")
    console.log(" Fixing JSX fragment errors...")
    console.log(" Generating JSX error fixer report...")
  "timestamp"
      "fixesApplied"
      "summary": "JSX error fixer completed"
      "status": "completed"
    const reportPath = path.join(process.cwd(), "jsx-error-fixer-report.json"
    console.log( JSX error fixer completed successfully. Applied ${fixesApplied} fixes.)
  console.error(" JSX error fixer "failed": ")
  const filesToFix = ["src/components/ScrollToTop.jsx, "src/components/home/ServicesShowcase.jsx", "src/layout/PrimaryNav.jsx, "src/layout/Header.jsx", "src/pages/EnterpriseDemo.jsx, "src/pages/services/Cybersecurity.tsx", "src/pages/services/DigitalTransformation.tsx]
  let content = fs.readFileSync(filePath, "utf8")
  const filesToFix = [src/components/ScrollToTop.jsx, src/components/home/ServicesShowcase.jsx, src/layout/PrimaryNav.jsx, src/layout/Header.jsx, src/pages/EnterpriseDemo.jsx, src/pages/services/Cybersecurity.tsx, src/pages/services/DigitalTransformation.tsx]
  let content = fs.readFileSync(filePath, "utf8")
        content = content.replace(/<\/>div>/g, "</div>")
        content = content.replace(/<\/>header>/g, "</header>")
        content = content.replace(/<\/>;/g, "</>")
        content = content.replace(/<\/>CardTitle>/g, "</CardTitle>")
        content = content.replace(/<\/>motion\.div>/g, "</motion.div>")
        content = content.replace(/<\/>motion\.h1>/g, "</motion.h1>")
        content = content.replace(/<div\s+className="max-w-4xl mx-auto space-y-8>\s*<div/g, "<div className=max-w-4xl mx-auto space-y-8><div")"
</div>"
        content = content.replace(/<\/Button>\s*<\/div>\s*<\/div>/g, "</Button>\n                </div>\n              </div>")
          const jsxStart = content.indexOf("<div className=max-w-4xl mx-auto space-y-8>")"
</div>"
          const jsxEnd = content.lastIndexOf("</div>")
            content = beforeJSX + <div className="terms-of-service-container>\n
</div>"
                     jsxContent + "\n" +</div>\n"
            /<SEO\s+title="Support Requests \| Admin Dashboard"/g,<div className="support-requests-container">\n        <SEO\n          title=Support Requests | Admin Dashboard
</SEO>"
            /<\/Tabs>\s*<\/div>\s*$/g,</Tabs>\n        </div>\n      </div>"
            /<SEO\s+title=Support Requests \| Admin Dashboard"/g,<div className="support-requests-container>\n        <SEO\n          title="Support Requests | Admin Dashboard"
</SEO>"
            /<\/Tabs>\s*<\/div>\s*$/g,</Tabs>\n        </div>\n      </div>"
            /<SEO\s+title=Support Requests \| Admin Dashboard"/g,<div className="support-requests-container>\n        <SEO\n          title="Support Requests | Admin Dashboard"
</SEO>"
            /<\/Tabs>\s*<\/div>\s*$/g,</Tabs>\n        </div>\n      </div>"
          /<div\s+className="absolute inset-0[^>]+>\s*<\/div>/g,<div className="absolute inset-0 bg-["url(\"data": "image/svg"+xml", "%3Csvg width=\\60\\ height=\\60\\ viewBox=\\"0 0 60 60\\" xmlns=\\"http": //www.w3."org/2000/svg"\\%3E%3Cg fill=\\none\\ fill-rule=\\evenodd\\%3E%3Cg fill=\\"%23ffffff\\" fill-opacity=\\0.05\\%3E%3Ccircle cx=\\30\\ cy=\\30\\ r=\\"2\\"/%3E%3"C/g"%3E%3"C/g"%3E%3"C/svg"%3E\)"] opacity-50></div>"
          /<div\s+className="absolute inset-0[^>]+>\s*<\/div>/g,<div className="absolute inset-0 bg-["url(\data": image/svg+xml", "%3Csvg width=\\"60\\ height=\\60\\ viewBox=\\0 0 60 60\\ xmlns=\\"http": //www.w3.org/2000/svg\\"%3E%3Cg fill=\\"none\\ fill-rule=\\evenodd\\%3E%3Cg fill=\\%23ffffff\\ fill-opacity=\\0.05\\"%3E%3Ccircle cx=\\"30\\ cy=\\30\\ r=\\2\\/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\)"] opacity-50"></div>"
        content = content.replace(/<\/><\/div>/g, "</></div>")
        content = content.replace(/<\/><\/header>/g, "</header>")
        content = content.replace(/<\/>;/g, "</>")
          /<>\s*<div\s+className="[^]*">\s*<\/div>\s*<\/>/g,<div className="header-container>\n        </div>"
          /<>\s*<div\s+className="[^"]*">\s*<\/div>\s*<\/>/g,<div className="header-container">\n        </div>"
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
