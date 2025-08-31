import fs from 'fs';
import path from 'path';
// Function to convert kebab-case to PascalCase
function kebabToPascal(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
<<<<<<< HEAD
    .join('');

=======
    .join('')}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
// Function to create a proper Next.js page template
function componentName = kebabToPascal(pageName);
  const isApi = filePath.includes('/api/');

  if (isApi) {
    return `import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  res.status(200).json({ message: 'API endpoint working' });
}`;

=======
  res.status(200).json({ message: 'API endpoint working' })}`}
  
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  return `import type { NextPage } from 'next';
import { Helmet } from 'react-helmet-async';
const ${componentName}: NextPage = () => {
  return (
    <div>
      <Helmet>
        <title>${componentName} - Zion Tech Solutions</title>
        <meta name="description" content="${componentName} page" />
      </Helmet>

      <main>
        <h1>${componentName}</h1>
        <p>This page is under construction.</p>
      </main>
    </div>
<<<<<<< HEAD
  );
};
export default ${componentName};`;

// Function to fix empty files
function fixEmptyFiles(dir) {
  const files = fs.readdirSync(dir);

=======
  )};
export default ${componentName};`}
// Function to fix empty files
function files = fs.readdirSync(dir);
  
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixEmptyFiles(filePath)} else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const content = fs.readFileSync(filePath, 'utf8').trim();

      if (!content) {
<<<<<<< HEAD
        // // // console.log(`Fixing empty file: ${filePath}`);
=======
        // // // // // // // console.log(`Fixing empty file: ${filePath}`);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
        const fileName = path.basename(file, path.extname(file));
        const pageTemplate = createPageTemplate(fileName, filePath);
<<<<<<< HEAD
        fs.writeFileSync(filePath, pageTemplate);


  });

=======
        fs.writeFileSync(filePath, pageTemplate)}
    }
  })}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
// Start fixing from the pages directory
const pagesDir = './pages';
if (fs.existsSync(pagesDir)) {
<<<<<<< HEAD
  // // // console.log('Fixing empty pages...');
  fixEmptyFiles(pagesDir);
<<<<<<< HEAD
  // // // console.log('Empty pages fixed successfully!');
} else {
  // // // console.error('Pages directory not found');
}}}}}}}
=======
  // // // // // // // console.log('Fixing empty pages...');
  fixEmptyFiles(pagesDir);
  // // // // // // // console.log('Empty pages fixed successfully!');
} else {
  // // // // // // // console.error('Pages directory not found');
}
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
=======
  console.log('Empty pages fixed successfully!')} else {
  console.error('Pages directory not found')}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
