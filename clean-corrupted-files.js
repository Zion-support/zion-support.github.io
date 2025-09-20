const fs = require('fs');
const path = require('path');

// List of files that are too corrupted and need to be replaced with minimal working versions
const corruptedFiles = [
  'src/pages/Blog.tsx',
  'src/pages/BlogPost.tsx',
  'src/pages/Careers.tsx',
  'src/pages/Cart.tsx',
  'src/pages/CaseStudy.tsx'
];

// Create minimal working versions
const minimalPages = {
  'src/pages/Blog.tsx': `import React from 'react';

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Blog</h1>
        <p className="text-lg text-gray-600">Coming soon...</p>
      </div>
    </div>
  );
}`,
  
  'src/pages/BlogPost.tsx': `import React from 'react';

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Blog Post</h1>
        <p className="text-lg text-gray-600">Coming soon...</p>
      </div>
    </div>
  );
}`,
  
  'src/pages/Careers.tsx': `import React from 'react';

export default function Careers() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Careers</h1>
        <p className="text-lg text-gray-600">Join our team...</p>
      </div>
    </div>
  );
}`,
  
  'src/pages/Cart.tsx': `import React from 'react';

export default function Cart() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Shopping Cart</h1>
        <p className="text-lg text-gray-600">Your cart is empty.</p>
      </div>
    </div>
  );
}`,
  
  'src/pages/CaseStudy.tsx': `import React from 'react';

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Case Study</h1>
        <p className="text-lg text-gray-600">Case study details...</p>
      </div>
    </div>
  );
}`
};

// Replace corrupted files
corruptedFiles.forEach(filePath => {
  try {
    const content = minimalPages[filePath];
    if (content) {
      // Ensure directory exists
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      fs.writeFileSync(filePath, content);
      console.log(`Replaced corrupted file: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error replacing ${filePath}:`, error.message);
  }
});

console.log('Corrupted files cleanup completed!');