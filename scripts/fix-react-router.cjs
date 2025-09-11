const fs = require('fs');
const path = require('path');
const pagesDir = path.join(__dirname, '..', 'pages');
const files = fs.readdirSync(pagesDir).filter(file => file.endsWith('.tsx'));
let fixedCount = 0;
files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  // Fix react-router-dom imports
  if (content.includes('react-router-dom')) {
    content = content.replace(
      /import\s*{\s*Link\s*}\s*from\s*['"]react-router-dom['"];?/g,
      "import Link from 'next/link';"
    );
    content = content.replace(
      /import\s*{\s*Link\s*,\s*useNavigate\s*}\s*from\s*['"]react-router-dom['"];?/g,
      "import Link from 'next/link';\nimport { useRouter } from 'next/router';"
    );
    content = content.replace(
      /import\s*{\s*useNavigate\s*}\s*from\s*['"]react-router-dom['"];?/g,
      "import { useRouter } from 'next/router';"
    );
    // Fix Link usage
    content = content.replace(/to="/g, 'href="');
    content = content.replace(/to={/g, 'href={');
    // Fix useNavigate usage
    content = content.replace(/useNavigate\(\)/g, 'useRouter()');
    content = content.replace(/navigate\(/g, 'router.push(');
    // Add Head import if not present
    if (!content.includes('import Head from') && !content.includes('from \'next/head\'')) {
      content = content.replace(
        /import Link from 'next\/link';/g,
        "import Link from 'next/link';\nimport Head from 'next/head';"
      );
    }
    // Add basic Head component if missing
    if (content.includes('export default function') && !content.includes('<Head>')) {
      const componentName = file.replace('.tsx', '').replace(/-/g, '').replace(/\b\w/g, l => l.toUpperCase());
      content = content.replace(
        /export default function \w+\(\) \{\s*return\s*\(/g,
        `export default function ${componentName}() {\n  return (\n    <>\n      <Head>\n        <title>${componentName} — Zion Tech Group</title>\n        <meta name="description" content="Zion Tech Group ${componentName} page" />\n      </Head>`
      );
      // Close the Head component
      if (content.includes('<Head>') && !content.includes('</>')) {
        content = content.replace(
          /(\s*\);\s*}\s*)$/g,
          '\n    </>\n  );\n}'
        );
      }
    }
    modified = true;
  }
  if (modified) {
    fs.writeFileSync(filePath, content);
    fixedCount++;
  }
});
const fs = require("fs");"const path = require("path");"console.log(" Fixing react-router-dom imports.");"const pagesDir = path.join(__dirname, ".", "pages");"const files = fs.readdirSync(pagesDir).filter(file => file.endsWith(".tsx"));let fixedCount = 0;files.forEach(file => { const filePath = path.join(pagesDir, file);" let content = fs.readFileSync(filePath, "utf8"); let modified = false; / Fix react-router-dom imports" if (content.includes("react-router-dom")) { content = content.replace(" /import\s*{\s*Link\s*}\s*from\s*[""]react-router-dom[""];?/g,"" "import Link from "next/link";" ); content = content.replace("" /import\s*{\s*Link\s*,\s*useNavigate\s*}\s*from\s*[""]react-router-dom[""];?/g,"" "import Link from "next/link";\nimport { useRouter } from "next/router";" ); content = content.replace("" /import\s*{\s*useNavigate\s*}\s*from\s*[""]react-router-dom[""];?/g,"" "import { useRouter } from "next/router";" ); / Fix Link usage"" content = content.replace(/to="/g, "href="");" content = content.replace(/to={/g, "href={"); / Fix useNavigate usage" content = content.replace(/useNavigate\(\)/g, "useRouter()");" content = content.replace(/navigate\(/g, "router.push("); / Add Head import if not present" if (!content.includes("import Head from") && !content.includes("from \"next/head\"")) { content = content.replace(" /import Link from "next\/link";/g,"" "import Link from "next/link";\nimport Head from "next/head";" ); } / Add basic Head component if missing" if (content.includes("export default function") && !content.includes("<Head>")) {" const componentName = file.replace(".tsx", "").replace(/-/g, "").replace(/\b\w/g, l => l.toUpperCase()); content = content.replace( /export default function \w+\(\) \{\s*return\s*\(/g," `export default function ${componentName}() {\n return (\n <>\n <Head>\n <title>${componentName} Zion Tech Group</title>\n <meta name="description" content="Zion Tech Group ${componentName} page" />\n </Head>` ); / Close the Head component" if (content.includes("<Head>") && !content.includes("</>")) { content = content.replace( /(\s*\);\s*}\s*)$/g," "\n </>\n );\n}" ); } } modified = true; } if (modified) { fs.writeFileSync(filePath, content);` console.log(` Fixed ${file}`); fixedCount++; }});`console.log(` Fixed ${fixedCount} files`);""`"`
const fs = require('fs')
const path = require('path')
console.log(' Fixing react-router-dom imports...')
const pagesDir = path.join(__dirname, '..', 'pages')
const files = fs.readdirSync(pagesDir).filter(file => file.endsWith('.tsx')
  let content = fs.readFileSync(filePath, 'utf8')
  if (content.includes('react-router-dom')
      /import\s*{\s*Link\s*}\s*from\s*['']
      "
      /import\s*{\s*Link\s*,\s*useNavigate\s*}\s*from\s*['']
      "
      /import\s*{\s*useNavigate\s*}\s*from\s*['']
      "
    content = content.replace(/to="/g, 'href=')
        "
