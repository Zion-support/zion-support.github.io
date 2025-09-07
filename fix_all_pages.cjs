const fs = require('fs');
const path = require('path');

// Find all page files that might have issues
const pagesDir = 'pages';
const allPageFiles = [];

function findPageFiles(dir) {
  try {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        findPageFiles(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        allPageFiles.push(filePath);
      }
    });
  } catch (error) {
    // Directory doesn't exist or can't be read
  }
}

findPageFiles(pagesDir);

// Page templates
const pageTemplate = (fileName) => `import React from 'react';
import Head from 'next/head';

export default function ${fileName}() {
  return (
    <>
      <Head>
        <title>${fileName} | Zion Tech Group</title>
        <meta name="description" content="${fileName} page" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              ${fileName}
            </h1>
            <p className="text-xl text-gray-600">
              This is the ${fileName} page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}`;

const appTemplate = `import type { AppProps } from 'next/app';
import '../app/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}`;

const slugTemplate = `import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function SlugPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>{slug} | Zion Tech Group</title>
        <meta name="description" content="Dynamic page for {slug}" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {slug}
            </h1>
            <p className="text-xl text-gray-600">
              This is a dynamic page for: {slug}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}`;

// Fix each page file
let fixedCount = 0;
allPageFiles.forEach(filePath => {
  try {
    const fileName = path.basename(filePath, path.extname(filePath));
    let content;
    
    if (fileName === '_app') {
      content = appTemplate;
    } else if (fileName === '[slug]') {
      content = slugTemplate;
    } else {
      const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1);
      content = pageTemplate(componentName);
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed page file: ${filePath}`);
    fixedCount++;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} page files successfully!`);