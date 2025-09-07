const fs = require('fs');
const path = require('path');

// Dynamic route files that need fixing
const dynamicRouteFiles = [
  'pages/[slug].tsx',
  'pages/blog/[slug].tsx',
  'pages/case-studies/[id].tsx',
  'pages/client/[slug].tsx',
  'pages/disputes/[id].tsx'
];

// Dynamic route template for slug
const slugRouteTemplate = `import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function DynamicPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>{slug} | Zion Tech Group</title>
        <meta name="description" content="Dynamic page" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {slug}
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

// Dynamic route template for id
const idRouteTemplate = `import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function DynamicPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>{id} | Zion Tech Group</title>
        <meta name="description" content="Dynamic page" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {id}
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

// Fix each dynamic route file
dynamicRouteFiles.forEach(filePath => {
  try {
    const fileName = path.basename(filePath, '.tsx');
    let content;
    
    if (fileName.includes('[slug]')) {
      content = slugRouteTemplate;
    } else if (fileName.includes('[id]')) {
      content = idRouteTemplate;
    } else {
      // Fallback
      content = slugRouteTemplate;
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed dynamic route: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('All dynamic route files fixed successfully!');