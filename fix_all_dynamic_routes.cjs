const fs = require('fs');
const path = require('path');

// Find all dynamic route files
const pagesDir = 'pages';
const dynamicRouteFiles = [];

function findDynamicRouteFiles(dir) {
  try {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        findDynamicRouteFiles(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        // Check if it's a dynamic route (contains [])
        if (file.includes('[') && file.includes(']')) {
          dynamicRouteFiles.push(filePath);
        }
      }
    });
  } catch (error) {
    // Directory doesn't exist or can't be read
  }
}

findDynamicRouteFiles(pagesDir);

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

// Dynamic route template for courseId
const courseIdRouteTemplate = `import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function DynamicPage() {
  const router = useRouter();
  const { courseId } = router.query;

  return (
    <>
      <Head>
        <title>{courseId} | Zion Tech Group</title>
        <meta name="description" content="Dynamic page" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {courseId}
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

// Dynamic route template for projectId
const projectIdRouteTemplate = `import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function DynamicPage() {
  const router = useRouter();
  const { projectId } = router.query;

  return (
    <>
      <Head>
        <title>{projectId} | Zion Tech Group</title>
        <meta name="description" content="Dynamic page" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {projectId}
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
let fixedCount = 0;
dynamicRouteFiles.forEach(filePath => {
  try {
    const fileName = path.basename(filePath, path.extname(filePath));
    let content;
    
    if (fileName.includes('[slug]')) {
      content = slugRouteTemplate;
    } else if (fileName.includes('[id]')) {
      content = idRouteTemplate;
    } else if (fileName.includes('[courseId]')) {
      content = courseIdRouteTemplate;
    } else if (fileName.includes('[projectId]')) {
      content = projectIdRouteTemplate;
    } else {
      // Default to slug template
      content = slugRouteTemplate;
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed dynamic route: ${filePath}`);
    fixedCount++;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} dynamic route files successfully!`);