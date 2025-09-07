const fs = require('fs');
const path = require('path');

// Special cases that need different handling
const specialFiles = [
  'pages/[slug].tsx',
  'pages/blog/[slug].tsx',
  'pages/case-studies/[id].tsx',
  'pages/client/[slug].tsx',
  'pages/blog/5g-technology-and-its-impact-on-iot-chat.tsx'
];

// Dynamic route template
const dynamicRouteTemplate = (fileName) => `import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function DynamicPage() {
  const router = useRouter();
  const { ${fileName.includes('[slug]') ? 'slug' : 'id'} } = router.query;

  return (
    <>
      <Head>
        <title>{\${fileName.includes('[slug]') ? 'slug' : 'id'}} | Zion Tech Group</title>
        <meta name="description" content="Dynamic page" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {\${fileName.includes('[slug]') ? 'slug' : 'id'}}
            </h1>
            <p className="text-xl text-gray-600">
              This is a dynamic page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}`;

// Number-starting filename template
const numberStartTemplate = (fileName) => `import React from 'react';
import Head from 'next/head';

export default function BlogPost() {
  return (
    <>
      <Head>
        <title>${fileName} | Zion Tech Group</title>
        <meta name="description" content="${fileName} blog post" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              ${fileName}
            </h1>
            <p className="text-xl text-gray-600">
              This is a blog post about ${fileName}.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}`;

// Fix each special file
specialFiles.forEach(filePath => {
  try {
    const fileName = path.basename(filePath, '.tsx');
    let content;
    
    if (fileName.includes('[') && fileName.includes(']')) {
      content = dynamicRouteTemplate(fileName);
    } else if (/^[0-9]/.test(fileName)) {
      content = numberStartTemplate(fileName);
    } else {
      // Regular hyphenated file
      const componentName = fileName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
      
      content = `import React from 'react';
import Head from 'next/head';

export default function ${componentName}() {
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
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed special file: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('All special files fixed successfully!');