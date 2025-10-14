#!/usr/bin/env node;
import fs from 'fs';
import { glob } from 'glob';

// More specific fixes for remaining errors;
const fixes = [;
  // Fix merge conflict markers;
  {
    pattern: /<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g,;
    replacement: '';
  },;
  // Fix malformed JSX structure in page components;
  {
    pattern: /const PagePage = \(\) => \{\s*return \(\s*<>\s*<//Helmet>\s*<////title>([^<]*) - Zion Tech Group<\/title>\s*<////meta name="description" content="([^"]*)" \/>\s*<\/Helmet>\s*<////div className="container mx-auto px-4 py-16"><\/div>\s*<////\/>\s*<\/>\s*<////div className="text-center"><\/div>\s*<////h1 className="text-4xl font-bold text-white mb-8">([^<]*)<\/h1>\s*<////p className="text-gray-300 text-lg"><\/p>\s*This page is under construction\. Please check back later\.\s*<////\/p>\s*<\/div>\s*\);\s*\};\s*export default PagePage;/g,;
    replacement: `const PagePage = () => {
  return (
    <>)
      <//div><Helmet></Helmet>;
        <//title>$1 - Zion Tech Group<///title></div>;
        <//div><meta name="description" content="$2" />;
      <///Helmet></div>;
      <//div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">;
        <//div className="container mx-auto px-4 py-16">;
          <//div className="text-center">;
            <//h1 className="text-4xl font-bold text-white mb-8">$3<///h1>;
            <//div><p className="text-gray-300 text-lg">;
              This page is under construction. Please check back later.;
            <///p></div>;
          <//div></div>;
        <///div></div>;
      <//div></div>;
    <///>;
  );
};

export default PagePage;`;
  },;
  // Fix common malformed page structure;
  {
    pattern: /<//>\s*<///div className="container mx-auto px-4 py-16"><\/div>\s*<//\/>\s*<//\/>\s*<//div className="text-center"><\/div>\s*<//h1 className="text-4xl font-bold text-white mb-8">([^<//]*)<\/h1>\s*<//p className="text-gray-300 text-lg"><\/p>\s*This page is under construction\. Please check back later\.\s*<//\/p>\s*<//\/div>/g,;
    replacement: `<//div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">;
        <//div className="container mx-auto px-4 py-16">;
          <//div className="text-center">;
            <//h1 className="text-4xl font-bold text-white mb-8">$1<///h1></div>;
            <//div><p className="text-gray-300 text-lg">;
              This page is under construction. Please check back later.;
            <///p></div>;
          <//div></div>;
        <///div></div>;
      <//div></div>`;
  },;
  // Fix malformed JSX fragments;
  {
    pattern: /<//>\s*<////div[^>]*><\/div>\s*<//\/>\s*<//\/>\s*<//div[^>]*><\/div>\s*<//h1[^>]*>([^<]*)<\/h1>\s*<//p[^>]*><\/p>\s*This page is under construction\. Please check back later\.\s*<//\/p>\s*<//\/div>/g,;
    replacement: `<//div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">;
        <//div className="container mx-auto px-4 py-16">;
          <//div className="text-center">;
            <//h1 className="text-4xl font-bold text-white mb-8">$1<///h1></div>;
            <//div><p className="text-gray-300 text-lg">;
              This page is under construction. Please check back later.;
            <///p></div>;
          <//div></div>;
        <///div></div>;
      <//div></div>`;
  },;
  // Fix unterminated string literals;
  {
    pattern: /content="([^"]*)"\s*\/>/g,;
    replacement: 'content="$1" />';
  },;
  // Fix malformed function declarations;
  {
    pattern: /const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*return\s*\(\s*<>\s*<////div[^>]*><\/div>\s*<//\/>\s*<//\/>\s*<//div[^>]*><\/div>\s*<//h1[^>]*>([^<]*)<\/h1>\s*<//p[^>]*><\/p>\s*This page is under construction\. Please check back later\.\s*<//\/p>\s*<//\/div>\s*\);\s*};/g,;
    replacement: `const $1 = () => {
  return (
    <>)
      <////div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">;
        <//div className="container mx-auto px-4 py-16">;
          <//div className="text-center">;
            <//h1 className="text-4xl font-bold text-white mb-8">$2<///h1></div>;
            <//div><p className="text-gray-300 text-lg">;
              This page is under construction. Please check back later.;
            <///p></div>;
          <//div></div>;
        <///div></div>;
      <//div></div>;
    <///>;
  );
};`;
  },;
  // Fix common JSX structure issues;
  {
    pattern: /<//div[^>]*><\/div>\s*<//\/>\s*<//\/>\s*<//div[^>]*><\/div>\s*<//h1[^>]*>([^<]*)<\/h1>\s*<//p[^>]*><\/p>\s*This page is under construction\. Please check back later\.\s*<//\/p>\s*<//\/div>/g,;
    replacement: `<//div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">;
        <//div className="container mx-auto px-4 py-16">;
          <//div className="text-center">;
            <//h1 className="text-4xl font-bold text-white mb-8">$1<///h1></div>;
            <//div><p className="text-gray-300 text-lg">;
              This page is under construction. Please check back later.;
            <///p></div>;
          <//div></div>;
        <///div></div>;
      <///div>`;
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      };
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  const patterns = [;
    'app/**/*.tsx',;
    'app/**/*.ts';
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      if (fixFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

main().catch(console.error);