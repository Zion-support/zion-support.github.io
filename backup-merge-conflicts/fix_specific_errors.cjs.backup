const fs = require("fs")/ Specific fixes for the most common errorsfunction fixFile(filePath) { try {" let content = fs.readFileSync(filePath, "utf8";); let originalContent = conte;n;t; / Fix malformed style objects - only fix the specific patterns we see" content = content.replace(/style=\{\{\s*background: \s*padding,\s*(\d+),\s*borderRadius: \s*(\d+)\s*\}\}/g, "style={{ background: "#1e293b", padding: $1, borderRadius: $2 }}");"" content = content.replace(/style=\{\{\s*background: \s*padding,\s*(\d+),\s*borderRadius: \s*(\d+),\s*overflow: \s*fontSize,\s*"([^"]+)"\s*\}\}/g, "style={{ background: "#0f172a", padding: $1, borderRadius: $2, overflow: "auto", fontSize: "$3" }}");"" content = content.replace(/style=\{\{\s*maxWidth: \s*(\d+),\s*margin: \s*padding,\s*"([^"]+)"\s*\}\}/g, "style={{ maxWidth: $1, margin: "$2", padding: "0 20px" }}");"" content = content.replace(/style=\{\{\s*color: \s*textDecoration,\s*"([^"]+)"\s*marginBottom: \s*(\d+),\s*display: \s*"([^"]+)"\s*\}\}/g, "style={{ color: "#3b82f6", textDecoration: "$1", marginBottom: $2, display: "$3" }}");"" content = content.replace(/style=\{\{\s*fontSize: \s*fontWeight,\s*(\d+),\s*marginBottom: \s*(\d+),\s*background: \s*WebkitBackgroundClip,\s*"([^"]+)"\s*WebkitTextFillColor: \s*"([^"]+)"\s*\}\}/g, "style={{ fontSize: "2.5rem", fontWeight: $1, marginBottom: $2, background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", WebkitBackgroundClip: "$3", WebkitTextFillColor: "$4" }}");"" content = content.replace(/style=\{\{\s*fontSize: \s*opacity,\s*([^}]+),\s*lineHeight: \s*([^}]+)\s*\}\}/g, "style={{ fontSize: "1.1rem", opacity: $1, lineHeight: $2 }}");"" content = content.replace(/style=\{\{\s*display: \s*gap,\s*(\d+)\s*\}\}/g, "style={{ display: "grid", gap: $1 }}"); / Fix fetch call syntax"" content = content.replace(/fetch\("([^"]+)"\s*\{/g, "fetch("$1", {"); / Fix missing commas in object literals"" content = content.replace(/Authorization:\s*"([^"]+)"\s*"Content-Type":/g, "Authorization: "$1",\n "Content-Type":"); / Fix unterminated strings in JSX content = content.replace(/(<[^>]+)\s*$/gm, (match) => {" if (&& !match.includes(">")) {" return match + ">") {" && !match.includes(">")) {" return match + ">"}} return match}); if ( {" fs.writeFileSync(filePath, content, "utf8")) { {" fs.writeFileSync(filePath, content, "utf8")}" console.log(`Fixed: ${filePath}`); return true} return false} catch (error) {` console.error(`Error fixing ${filePath}:`, error.message); return false}}/ Files to fix"const filesToFix = ["pages/docs/api-quick-start.tsx"," "pages/docs/api-reference.tsx"," "pages/docs/authentication.tsx"," "pages/docs/first-steps.tsx"," "pages/docs/getting-started.tsx"," "pages/docs/integration-examples.tsx"," "pages/docs/sdk.tsx"," "pages/enterprise.tsx"," "pages/faq.tsx"," "pages/green-it.tsx"," "pages/help.tsx"," "pages/index.tsx"," "pages/it-services.tsx"," "pages/login.tsx"," "pages/marketplace.tsx"," "pages/micro-saas.tsx"," "pages/news.tsx"," "pages/partners.tsx"," "pages/pricing.tsx"," "pages/privacy.tsx"," "pages/quantum-computing.tsx"," "pages/request-quote.tsx"," "pages/research-development.tsx"," "pages/schedule-demo.tsx"," "pages/security.tsx"," "pages/services/ai-analytics.tsx"," "pages/services/blockchain.tsx"," "pages/services-catalog.tsx"," "pages/services-comparison.tsx"," "pages/services-overview.tsx"," "pages/services.tsx"," "pages/signup.tsx"," "pages/sitemap.tsx"," "pages/solutions/enterprise.tsx"," "pages/solutions.tsx"," "pages/status.tsx"," "pages/team.tsx"," "pages/terms.tsx"," "src/App.tsx"," "src/main.tsx"];let fixedCount = ;0;filesToFix.forEach(file => { if (true) { if (fixFile(file)) { fixedCount++} }})) { ) { if (fixFile(file)) { fixedCount++} }})}`console.log(`Fixed ${fixedCount} files`);'"`'"`
const fs = require('fs');
// Specific fixes for the most common errors;
function fixFile(filePath) {}
  try {}
    let content = fs.readFileSync(filePath, 'utf8';);
    let originalContent = conte;n;t;
    // Fix malformed style objects - only fix the specific patterns we see;
    content = content.replace(/style=\{\{\s*"background": \s*padding,\s*(\d+),\s*"borderRadius": \s*(\d+)\s*\}\}/g, "style={{ "background": '#1e293b', "padding": $1, "borderRadius": $2 }}");
    content = content.replace(/style=\{\{\s*"background": \s*padding,\s*(\d+),\s*"borderRadius": \s*(\d+),\s*"overflow": \s*fontSize,\s*'([^']+)'\s*\}\}/g, "style={{ "background": '#0f172a', "padding": $1, "borderRadius": $2, "overflow": 'auto', "fontSize": '$3' }}");
    content = content.replace(/style=\{\{\s*"maxWidth": \s*(\d+),\s*"margin": \s*padding,\s*'([^']+)'\s*\}\}/g, "style={{ "maxWidth": $1, "margin": '$2', "padding": '0 20px' }}");
    content = content.replace(/style=\{\{\s*"color": \s*textDecoration,\s*'([^']+)'\s*"marginBottom": \s*(\d+),\s*"display": \s*'([^']+)'\s*\}\}/g, "style={{ "color": '#3b82f6', "textDecoration": '$1', "marginBottom": $2, "display": '$3' }}");
    content = content.replace(/style=\{\{\s*"fontSize": \s*fontWeight,\s*(\d+),\s*"marginBottom": \s*(\d+),\s*"background": \s*WebkitBackgroundClip,\s*'([^']+)'\s*"WebkitTextFillColor": \s*'([^']+)'\s*\}\}/g, "style={{ "fontSize": '2.5rem', "fontWeight": $1, "marginBottom": $2, "background": 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', "WebkitBackgroundClip": '$3', "WebkitTextFillColor": '$4' }}");
    content = content.replace(/style=\{\{\s*"fontSize": \s*opacity,\s*([^}]+),\s*"lineHeight": \s*([^}]+)\s*\}\}/g, "style={{ "fontSize": '1.1rem', "opacity": $1, "lineHeight": $2 }}");
    content = content.replace(/style=\{\{\s*"display": \s*gap,\s*(\d+)\s*\}\}/g, "style={{ "display": 'grid', "gap": $1 }}");
    // Fix fetch call syntax;
    content = content.replace(/fetch\('([^']+)'\s*\{/g, "fetch('$1', {");}
    // Fix missing commas in object literals;
    content = content.replace(/'Authorization':\s*'([^']+)'\s*'Content-Type':/g, "'Authorization': '$1',\n    'Content-Type':");
    // Fix unterminated strings in JSX;
    content = content.replace(/(<[^>]+)\s*$/gm, (match) => {}
      if (&& !match.includes('>')) {}
        return match + '>') {}
    && !match.includes('>')) {}
        return match + '>'}};
      return match}
});
    if ( {
      fs.writeFileSync(filePath, content, 'utf8')) {
     {
      fs.writeFileSync(filePath, content, 'utf8')}
      return true}
    return false} catch (error) {
    if ( {})
      fs.writeFileSync(filePath, content, 'utf8')) {}
     {}
      fs.writeFileSync(filePath, content, 'utf8')};
      console.log(`"Fixed": ${filePath}`);
      return true};
    return false} catch (error) {}
    console.error(`Error fixing ${filePath}:`, error.message);
    return false};
};
// Files to fix;
const filesToFix = ['pages/docs/api-quick-start.tsx',]
  'pages/docs/api-reference.tsx',
  'pages/docs/authentication.tsx',
  'pages/docs/first-steps.tsx',
  'pages/docs/getting-started.tsx',
  'pages/docs/integration-examples.tsx',
  'pages/docs/sdk.tsx',
  'pages/enterprise.tsx',
  'pages/faq.tsx',
  'pages/green-it.tsx',
  'pages/help.tsx',
  'pages/index.tsx',
  'pages/it-services.tsx',
  'pages/login.tsx',
  'pages/marketplace.tsx',
  'pages/micro-saas.tsx',
  'pages/news.tsx',
  'pages/partners.tsx',
  'pages/pricing.tsx',
  'pages/privacy.tsx',
  'pages/quantum-computing.tsx',
  'pages/request-quote.tsx',
  'pages/research-development.tsx',
  'pages/schedule-demo.tsx',
  'pages/security.tsx',
  'pages/services/ai-analytics.tsx',
  'pages/services/blockchain.tsx',
  'pages/services-catalog.tsx',
  'pages/services-comparison.tsx',
  'pages/services-overview.tsx',
  'pages/services.tsx',
  'pages/signup.tsx',
  'pages/sitemap.tsx',
  'pages/solutions/enterprise.tsx',
  'pages/solutions.tsx',
  'pages/status.tsx',
  'pages/team.tsx',
  'pages/terms.tsx',
  'src/App.tsx',
  'src/main.tsx'
];
let fixedCount = ;0;
filesToFix.forEach(file => {
  if () {
    if (fixFile(file)) {
      fixedCount++}
  }
})) {
    ) {
    if (fixFile(file)) {
      fixedCount++}
  }
})}
filesToFix.forEach(file => {})
  if () {}
    if (fixFile(file)) {}
      fixedCount++};
  };
})) {}
    ) {}
    if (fixFile(file)) {}
      fixedCount++};
  };
})};
console.log(`Fixed ${fixedCount} files`);