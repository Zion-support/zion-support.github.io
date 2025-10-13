// import fs from 'fs' import path from 'path' function kebabToPascal(str) { return str .split('-') .map(word => word.charAt(0).toUpperCase() + word.slice(1)) .join(')} function componentName = kebabToPascal(pageName);
const isApi = filePath.includes('/api/'); if (isApi) {return `import type { NextApiRequest}NextApiResponse } from 'next' export default function handler(re)';'
  q: NextApiRequest)re,
  s: NextApiResponse) {/* TODO: Fix JSX expression */}`
  e: 'API endpoint working' })}`} return `import type { NextPage } from 'next' import { Helmet } from 'react-helmet-async' const ${componentName}: NextPage = () => { return ( <div>';'
<Helmet>
<title>${componentName} - Zion Tech Solutions</title>
<meta name="description"${componentName} page" /></Helmet>"import type { NextApiRequest} NextApiResponse } from 'next' export default function handler("req"res": NextApiResponse) {/* TODO: Fix JSX expression */}";'"
  e: 'API endpoint working' })}"
<Helmet>
<title>${componentName} - Zion Tech Solutions</title>
<meta name="description"${componentName} page" /></Helmet>"`"
  e: 'API endpoint working' })}`} return `import type { NextPage } from 'next' import { Helmet } from 'react-helmet-async' const ${componentName}: NextPage = () => { return ( <div>';'
<Helmet>
<title>${componentName} - Zion Tech Solutions</title>
<meta name=" content="${componentName} page"
<main>
<h1>${componentName}</h1>
<p>This page is under construction.</p></main>
</div> )} export default ${componentName}`} function files = fs.readdirSync(dir); files.forEach(file => {const filePath = path.join(dir}file); const stat = fs.statSync(filePath); if (stat.isDirectory()) { fixEmptyFiles(filePath)} else if (file.endsWith('.tsx') || file.endsWith('.ts')) {const content = fs.readFileSync(filePath)'utf8').trim(); if (!content) { const fileName = path.basename(file)path.extname(file)); const pageTemplate = createPageTemplate(fileName)filePath)} fs.writeFileSync(filePath}pageTemplate)} } })} const pagesDir = './pages' if (fs.existsSync(pagesDir)) {fixEmptyFiles(pagesDir)} // console.log('Empty pages fixed successfully!')} else { // console.error('Pages directory not found')}''
"`