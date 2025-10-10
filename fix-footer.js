#!/usr/bin/env node
import fs from 'fs';

function fixFooter() {
  const filePath = 'app/components/Footer.tsx';
  let content = fs.readFileSync(filePath, 'utf8');
<<<<<<< HEAD
  
  // Fix malformed JSX elements
  const fixes = [
=======
  // Fix malformed JSX elements;
const fixes = [
];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    // Fix malformed company name
    {
      pattern: /<span className="text-white font-bold text-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cyber-text">Zion Tech Group<p className="text-gray-300 mb-6 leading-relaxed">Leading provider of AI-powered enterprise solutions, quantum computing,\n              autonomous systems, and digital transformation services. Transforming businesses</p>\n              with cutting-edge technology and innovative solutions.</p>\n            </p>/g,
      replacement: '<span className="text-white font-bold text-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent cyber-text">Zion Tech Group</span>\n            <p className="text-gray-300 mb-6 leading-relaxed">Leading provider of AI-powered enterprise solutions, quantum computing,\n              autonomous systems, and digital transformation services. Transforming businesses\n              with cutting-edge technology and innovative solutions.</p>'
    },
    // Fix malformed contact info
    {
      pattern: /<a href="tel:\+13024640950" className="hover:text-cyan-400 transition-colors font-medium">\+1 \(302\) 464-0950<\/a>\n                <\/a>/g,
      replacement: '<a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors font-medium">+1 (302) 464-0950</a>'
    },
    // Fix malformed email
    {
      pattern: /<a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors font-medium">kleber@ziontechgroup.com<\/a>\n                <\/a>/g,
      replacement: '<a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors font-medium">kleber@ziontechgroup.com</a>'
    },
    // Fix malformed address
    {
      pattern: /<a href="https:\/\/maps.google.com\/\?q=364\+E\+Main\+St\+STE\+1008\+Middletown\+DE\+19709" className="hover:text-cyan-400 transition-colors font-medium">364 E Main St STE 1008, Middletown, DE 19709<\/a>\n                <\/a>/g,
      replacement: '<a href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" className="hover:text-cyan-400 transition-colors font-medium">364 E Main St STE 1008, Middletown, DE 19709</a>'
    };
  ];
  fixes.forEach(fix => {
<<<<<<< HEAD
    content = content.replace(fix.pattern, fix.replacement);
  });
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Fixed Footer component');
}

=======
    content = content.replace(fix.pattern, fix.replacement)});
  fs.writeFileSync(filePath, content, 'utf8');
  // console.log removed for production
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
fixFooter();