const fs = require('fs');
const path = require('path');

//Template for blog pages
const blogTemplate = (
  title,
  description,
  slug,
  content
) => `import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function BlogPage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark text-white">
      <Helmet>
        <title>${title}</title>
        <meta 
          name="description" 
          content="${description}" 
        />
        <link 
          rel="canonical" 
          href="https://ziontechgroup.com/blog/${slug}" 
        />
      </Helmet>

      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">${title}</h1>
        <p className="text-zion-slate-light mb-8">${description}</p>
        <div className="prose prose-invert max-w-3xl">
          <p>
            ${content}
          </p>
        </div>
        <div className="mt-8">
          <Link to="/blog" className="text-cyan-300 hover:underline">← Back to Blog</Link>
        </div>
      </div>
    </div>
  );
}`;

//Find all corrupted blog files
// const blogDir = 'src/pages/blog';
const corruptedFiles = [];

function findCorruptedFiles(_dir) {
//   const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findCorruptedFiles(filePath);
    } else if (file.endsWith('.tsx')) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (
        content.includes('Merge conflict') ||
        content.includes('') ||
        content.includes('') ||
        content.includes('className=')
      ) {
        corruptedFiles.push(filePath);
      }
    }
  }
}

findCorruptedFiles(blogDir);

// console.log(`Found ${corruptedFiles.length} corrupted files`);

//Fix each corrupted file
for (const filePath of corruptedFiles) {
  try {
//     const slug = filePath.split('/').slice(-2, -1)[0];
    const title = slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

//     const description = `Learn about ${title.toLowerCase()} and how it can benefit your enterprise.`;
    const content = `This comprehensive guide covers ${title.toLowerCase()} and provides practical insights for enterprise implementation.`;

//     const newContent = blogTemplate(title, description, slug, content);
    fs.writeFileSync(filePath, newContent);
//     console.log(`Fixed: ${filePath}`);
  } catch (error) {
//     console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// console.log('Done fixing corrupted blog files');
