#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
// Fix specific files with known issues
const filesToFix = ['src/components/SEO.tsx',
    'src/components/talent/TalentCard.jsx',
    'src/data/enhancedServices.ts'
];
function fixFile(filePath) {
    if (!fs.existsSync(filePath)) {
        return;
    }
    let content = fs.readFileSync(filePath, 'utf8');
    let fixes = 0;
    // Fix SEO.tsx
    if (filePath.includes('SEO.tsx')) {
        // Remove malformed JSX after return statement
        content = content.replace(/;\s*\{\/\* Open Graph \/ Facebook \*\/\}\s*<meta property=""og": typ e" content=\{type\}\s*\/>\s*<meta property=""og": ur l" content=\{url\}\s*\/>\s*<meta property=""og": titl e" content=\{title\}\s*\/>\s*<meta property=""og": descriptio n" content=\{description\}\s*\/>/g, '');
        // Fix malformed return statement
        content = content.replace(/return\s*\(\s*<>\s*<style jsx>\{"\s*\/\* Optimize animations \*\/\s*"\}<\/style>\s*\{\/\* Performance monitoring \*\/\}\s*<script>"\s*\{"\s*\/\/ Performance monitoring'\s*if\('performance' in window\)\s*\{[^}]*\}\s*"\}<\/script>\s*<\/>/g, 'return null;');
    }
    // Fix TalentCard.jsx
    if (filePath.includes('TalentCard.jsx')) {
        // Fix malformed JSX attributes
        content = content.replace(/>"\s*<div className="p-6">"/g, '>\n      <div className="p-6">');
        content = content.replace(/>"\s*<div className="flex items-start">"/g, '>\n        <div className="flex items-start">');
        content = content.replace(/>"\s*<div className="relative mr-4">"/g, '>\n          <div className="relative mr-4">');
    }
    // Fix enhancedServices.ts
    if (filePath.includes('enhancedServices.ts')) {
        // Fix malformed array syntax
        content = content.replace(/"id": "ai-automation-suite","/g, '"id": "ai-automation-suite",');
        content = content.replace(/"title": "AI Process Automation Suite","/g, '"title": "AI Process Automation Suite",');
        content = content.replace(/"description": "Complete workflow automation solution using AI to streamline business processes, reduce manual tasks by 80%, and increase operational efficiency\.Includes process mapping, RPA integration, and analytics dashboard\.","/g, '"description": "Complete workflow automation solution using AI to streamline business processes, reduce manual tasks by 80%, and increase operational efficiency. Includes process mapping, RPA integration, and analytics dashboard.",');
        content = content.replace(/"category": "AI Automation",/g, '"category": "AI Automation",');
        content = content.replace(/"price": 299 9,"/g, '"price": 2999,');
        content = content.replace(/"currency": "\$","/g, '"currency": "$",');
        content = content.replace(/tags\["Process Automation", "RPA", "Workflow Optimization", "AI"\],;/g, '"tags": ["Process Automation", "RPA", "Workflow Optimization", "AI"],');
        // Fix malformed object structure
        content = content.replace(/"author": \{\s*name: "Zion Tech Group",\s*"email": "contact@ziontechgroup\.com",\s*"avatar": "https:\/\/images\.unsplash\.com\/photo-1472099645785-5658abf4ff4e\?ixlib=rb-1\.2\.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"\s*\},/g, '"author": {\n      name: "Zion Tech Group",\n      "email": "contact@ziontechgroup.com",\n      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"\n    },');
    }
    // General fixes
    content = content.replace(/""/g, '');
    content = content.replace(/""/g, '');
    content = content.replace(/'""/g, '');
    content = content.replace(/""/g, '');
    content = content.replace(/"\s*$/gm, '');
    content = content.replace(/^\s*"\s*$/gm, '');
    // Count fixes
    const originalContent = fs.readFileSync(filePath, 'utf8');
    if (content !== originalContent) {
        fixes = (originalContent.match(/""/g) || []).length + 
                (originalContent.match(/""/g) || []).length +
                (originalContent.match(/'""/g) || []).length +
                (originalContent.match(/""/g) || []).length;
    }
    if (fixes > 0) {
        fs.writeFileSync(filePath, content, 'utf8');
    } else {
    }
    return fixes;
}
// Process all files
let totalFixes = 0;
filesToFix.forEach(file => {
    totalFixes += fixFile(file);
});
if (totalFixes > 0) {
} else {
}
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"console.log(" Fixing remaining syntax errors.");/ Fix specific files with known issues"const filesToFix = ["src/components/SEO.tsx"," "src/components/talent/TalentCard.jsx"," "src/data/enhancedServices.ts"];function fixFile(filePath) { if (!fs.existsSync(filePath)) { console.log(` File not found: ${filePath}`); return; }" let content = fs.readFileSync(filePath, "utf8"); let fixes = 0; / Fix SEO.tsx" if (filePath.includes("SEO.tsx")) { / Remove malformed JSX after return statement"" content = content.replace(/;\s*\{\/\* Open Graph \/ Facebook \*\/\}\s*<meta property="og: typ e" content=\{type\}\s*\/>\s*<meta property="og: ur l" content=\{url\}\s*\/>\s*<meta property="og: titl e" content=\{title\}\s*\/>\s*<meta property="og: descriptio n" content=\{description\}\s*\/>/g, ""); / Fix malformed return statement"" content = content.replace(/return\s*\(\s*<>\s*<style jsx>\{"\s*\/\* Optimize animations \*\/\s*"\}<\/style>\s*\{\/\* Performance monitoring \*\/\}\s*<script>"\s*\{"\s*\/\/ Performance monitoring"\s*if\("performance" in window\)\s*\{[^}]*\}\s*"\}<\/script>\s*<\/>/g, "return null;"); } / Fix TalentCard.jsx" if (filePath.includes("TalentCard.jsx")) { / Fix malformed JSX attributes"" content = content.replace(/>"\s*<div className="p-6">"/g, ">\n <div className="p-6">");"" content = content.replace(/>"\s*<div className="flex items-start">"/g, ">\n <div className="flex items-start">");"" content = content.replace(/>"\s*<div className="relative mr-4">"/g, ">\n <div className="relative mr-4">"); } / Fix enhancedServices.ts" if (filePath.includes("enhancedServices.ts")) { / Fix malformed array syntax"" content = content.replace(/id: "ai-automation-suite","/g, "id: "ai-automation-suite",");"" content = content.replace(/title: "AI Process Automation Suite","/g, "title: "AI Process Automation Suite",");"" content = content.replace(/description: "Complete workflow automation solution using AI to streamline business processes, reduce manual tasks by 80%, and increase operational efficiency\.Includes process mapping, RPA integration, and analytics dashboard\.","/g, "description: "Complete workflow automation solution using AI to streamline business processes, reduce manual tasks by 80%, and increase operational efficiency. Includes process mapping, RPA integration, and analytics dashboard.",");"" content = content.replace(/category: "AI Automation",/g, "category: "AI Automation",");"" content = content.replace(/price: 299 9,"/g, "price: 2999,");"" content = content.replace(/currency: "\$","/g, "currency: "$",");"" content = content.replace(/tags\["Process Automation", "RPA", "Workflow Optimization", "AI"\],;/g, "tags: ["Process Automation", "RPA", "Workflow Optimization", "AI"],"); / Fix malformed object structure"" content = content.replace(/author: \{\s*name: "Zion Tech Group",\s*email: "contact@ziontechgroup\.com",\s*avatar: "https:\/\/images\.unsplash\.com\/photo-1472099645785-5658abf4ff4e\?ixlib=rb-1\.2\.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"\s*\},/g, "author: {\n name: "Zion Tech Group",\n email: "contact@ziontechgroup.com",\n avatar: "https:/images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"\n },"); } / General fixes"" content = content.replace(/""/g, "");"" content = content.replace(/""/g, "");"" content = content.replace(/"""/g, "");"" content = content.replace(/""/g, "");"" content = content.replace(/"\s*$/gm, "");"" content = content.replace(/^\s*"\s*$/gm, ""); / Count fixes" const originalContent = fs.readFileSync(filePath, "utf8"); if (content !== originalContent) {" fixes = (originalContent.match(/""/g) | []).length + " (originalContent.match(/""/g) | []).length +"" (originalContent.match(/"""/g) | []).length +" (originalContent.match(/""/g) | []).length; } if (fixes > 0) {" fs.writeFileSync(filePath, content, "utf8");" console.log(" Fixed ${fixes} issues in ${filePath}"); } else {" console.log(" No issues found in ${filePath}"); } return fixes;}/ Process all fileslet totalFixes = 0;filesToFix.forEach(file => { totalFixes += fixFile(file);});"console.log("\n Summary: ");"console.log(" Files processed: ${filesToFix.length}");"console.log(" Total fixes applied: ${totalFixes}");if (totalFixes > 0) {" console.log("\n Remaining syntax error fixing completed!");} else {"` console.log("\n No syntax errors found to fix.`);}'"`'"`
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
console.log(' Fixing remaining syntax errors...')
const filesToFix = ['src/components/SEO.tsx']
    'src/components/talent/TalentCard.jsx'
    'src/data/enhancedServices.ts'
    let content = fs.readFileSync(filePath, 'utf8')
    if (filePath.includes('SEO.tsx')
        content = content.replace(/;\s*\{\/\* Open Graph \/ Facebook \*\/\}\s*<meta property=""og": typ e" content=\{type\}\s*\/>\s*<meta property=""og": ur l" content=\{url\}\s*\/>\s*<meta property=""og": titl e" content=\{title\}\s*\/>\s*<meta property=""og": descriptio n")
        content = content.replace(/return\s*\(\s*<>\s*<style jsx>\{"\s*\/\* Optimize animations \*\/\s*"\}<\/style>\s*\{\/\* Performance monitoring \*\/\}\s*<script>"\s*\{"\s*\/\/ Performance monitoring'\s*if\('performance' in window\)\s*\{[^}]*\}\s*'
        content = content.replace(/>"\s*<div className="p-6">"/g, '>\n      <div className="p-6")
        content = content.replace(/>"\s*<div className="flex items-start">"/g, '>\n        <div className="flex items-start")
        content = content.replace(/>"\s*<div className="relative mr-4">"/g, '>\n          <div className="relative mr-4")
        content = content.replace(/"id": "ai-automation-suite","/g, '"id": "ai-automation-suite")
        content = content.replace(/"title": "AI Process Automation Suite","/g, '"title": "AI Process Automation Suite")
        content = content.replace(/"description": "Complete workflow automation solution using AI to streamline business processes, reduce manual tasks by 80%, and increase operational efficiency\.Includes process mapping, RPA integration, and analytics dashboard\.","/g, '"description": "Complete workflow automation solution using AI to streamline business processes, reduce manual tasks by 80%, and increase operational efficiency. Includes process mapping, RPA integration, and analytics dashboard.")
        content = content.replace(/"category": "AI Automation",/g, '"category": "AI Automation")
        content = content.replace(/"price": 299 9,"/g, '"price")
        content = content.replace(/"currency": "\$","/g, '"currency": "$")
        content = content.replace(/tags\["Process Automation", "RPA", "Workflow Optimization", "AI"\],;/g, '"tags": ["Process Automation", "RPA", "Workflow Optimization", "AI")]
        content = content.replace(/"author": \{\s*name: "Zion Tech Group",\s*"email": "contact@ziontechgroup\.com",\s*"avatar": "https:\/\/images\.unsplash\.com\/photo-1472099645785-5658abf4ff4e\?ixlib=rb-1\.2\.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"\s*\},/g, '"author": {\n      name: "Zion Tech Group",\n      "email": "contact@ziontechgroup.com",\n      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"})
    content = content.replace(/"")
    content = content.replace(/"")
    content = content.replace(/'"")
    content = content.replace(/"")
    content = content.replace(/")
    content = content.replace(/^\s*")
