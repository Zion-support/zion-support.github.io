import fs from 'fs';

const filePath = 'app/components/Footer.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix malformed import statements
const fixes = [
  // Fix duplicate import statements
  { from: /} from '@heroicons\/react\/24\/outline';\s*} from '@heroicons\/react\/24\/outline';'/g, to: "} from '@heroicons/react/24/outline';" },
  
  // Fix malformed import statements with extra quotes
  { from: /import { ArrowRight, Facebook, Twitter, Linkedin, Github } from 'lucide-react';'/g, to: "import { ArrowRight, Facebook, Twitter, Linkedin, Github } from 'lucide-react';" },
  
  // Fix malformed object properties with extra quotes
  { from: /{ name: '([^']+)', href: '([^']+)' },'/g, to: "{ name: '$1', href: '$2' }," },
  
  // Fix malformed array syntax
  { from: /const \w+ = \[\s*{ name: '([^']+)', href: '([^']+)' },\s*{ name: '([^']+)', href: '([^']+)' },\s*{ name: '([^']+)', href: '([^']+)' },\s*{ name: '([^']+)', href: '([^']+)' },\s*{ name: '([^']+)', href: '([^']+)' },\s*{ name: '([^']+)', href: '([^']+)' },\s*{ name: '([^']+)', href: '([^']+)' }'\s*\]/g, to: "const services = [\n    { name: '$1', href: '$2' },\n    { name: '$3', href: '$4' },\n    { name: '$5', href: '$6' },\n    { name: '$7', href: '$8' },\n    { name: '$9', href: '$10' },\n    { name: '$11', href: '$12' },\n    { name: '$13', href: '$14' }\n  ];" },
  
  // Clean up any remaining malformed syntax
  { from: /}\s*from '@heroicons\/react\/24\/outline';'/g, to: "} from '@heroicons/react/24/outline';" },
  
  // Fix malformed object properties
  { from: /{ name: '([^']+)', href: '([^']+)' },'/g, to: "{ name: '$1', href: '$2' }," }
];

let modified = false;
fixes.forEach(fix => {
  if (fix.from.test(content)) {
    content = content.replace(fix.from, fix.to);
    modified = true;
  }
});

if (modified) {
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Fixed Footer component');
} else {
  console.log('No changes needed');
}