#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing all page syntax errors...');

// Function to fix a file
function fixFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return false;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Fix common syntax errors
  content = content.replace(/setIsVisible\(true\)\}, \[\]\);/, 'setIsVisible(true);\n  }, []);');
  content = content.replace(/setIsVisible\(true\)\}, \[\]\);/g, 'setIsVisible(true);\n  }, []);');
  content = content.replace(/newOpenItems\.delete\(id\)\} else \{/g, 'newOpenItems.delete(id);\n    } else {\n      ');
  content = content.replace(/newOpenItems\.add\(id\)\}/g, 'newOpenItems.add(id);\n    }');
  content = content.replace(/trackClick\(`faq-toggle-\$\{id\}`, 'interaction'\)\};/g, 'trackClick(`faq-toggle-${id}`, \'interaction\');\n  }');
  
  // Fix className spacing issues
  content = content.replace(/divclassName="([^"]*)"/g, 'div className="$1"');
  content = content.replace(/navclassName="([^"]*)"/g, 'nav className="$1"');
  content = content.replace(/Linkhref="/g, 'Link href="/');
  content = content.replace(/className="([^"]*), ([^"]*)"/g, 'className="$1 $2"');
  content = content.replace(/className="([^"]*),([^"]*)"/g, 'className="$1$2"');
  
  // Fix specific malformed class names
  content = content.replace(/className="m, i, n-h-screen, b, g-gradie, n, t-to-br, fro, m-bl, u, e-50 to-indigo-100"/g, 'className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"');
  content = content.replace(/className="containermx-auto, p, x-4 py-8 max-w-6 xl"/g, 'className="container mx-auto px-4 py-8 max-w-6xl"');
  content = content.replace(/className="mb-8"/g, 'className="mb-8"');
  content = content.replace(/className="text-bl, u, e-600, hover: te, x, t-bl, u, e-800, fon, t-mediumtransition-colors"/g, 'className="text-blue-600 hover:text-blue-800 font-medium transition-colors"');
  
  // Fix text content issues
  content = content.replace(/← Back, to, Home/g, '← Back to Home');
  
  // Fix missing imports
  if (content.includes('Link href=') && !content.includes("import Link from 'next/link'")) {
    content = content.replace(/import React, { useState, useEffect } from 'react';/, "import React, { useState, useEffect } from 'react';\nimport Link from 'next/link';");
  }
  
  // Fix missing state declarations
  if (content.includes('setOpenItems') && !content.includes('const [openItems, setOpenItems]')) {
    content = content.replace(/const \[searchTerm, setSearchTerm\] = useState\(''\);/g, "const [searchTerm, setSearchTerm] = useState('');\n  const [openItems, setOpenItems] = useState(new Set());");
  }
  
  // Fix missing variable declarations
  if (content.includes('faqData') && !content.includes('const faqData')) {
    content = content.replace(/const faqs = \[/g, 'const faqData = [\n    {\n      category: \'General\',\n      questions: [\n        {\n          question: \'What services do you offer?\',\n          answer: \'We offer comprehensive technology solutions including AI development, cloud infrastructure, digital transformation, cybersecurity, and more.\'\n        },\n        {\n          question: \'How can I get started?\',\n          answer: \'Contact us through our contact page or call us directly. We will schedule a consultation to discuss your needs.\'\n        },\n        {\n          question: \'Do you provide ongoing support?\',\n          answer: \'Yes, we provide comprehensive ongoing support and maintenance for all our solutions.\'\n        }\n      ]\n    }\n  ];\n\n  const faqs = [');
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed ${filePath}`);
    return true;
  }
  return false;
}

// Fix all problematic page files
const filesToFix = [
  '/workspace/pages/faq.tsx',
  '/workspace/pages/dashboard.tsx',
  '/workspace/pages/enhanced-home.tsx',
  '/workspace/pages/services.tsx',
  '/workspace/pages/portfolio.tsx',
  '/workspace/pages/contact.tsx',
  '/workspace/pages/about.tsx'
];

let fixedCount = 0;
filesToFix.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`🎉 Fixed ${fixedCount} page files`);