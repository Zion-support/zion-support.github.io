#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common data arrays that are missing
const commonData = {
  stats: [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "99%", label: "Client Satisfaction" }
  ],
  benefits: [
    {
      icon: "🚀",
      title: "Increased Efficiency",
      description: "Streamline your operations with our AI-powered solutions"
    },
    {
      icon: "🔒",
      title: "Enhanced Security",
      description: "Enterprise-grade security measures to protect your data"
    },
    {
      icon: "📈",
      title: "Better Analytics",
      description: "Get insights and make data-driven decisions"
    },
    {
      icon: "⚡",
      title: "Faster Performance",
      description: "Optimized solutions for maximum speed and reliability"
    }
  ],
  testimonials: [
    {
      name: "John Smith",
      role: "CEO, TechCorp",
      content: "Zion Tech Group transformed our business with their innovative AI solutions. Highly recommended!",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "CTO, InnovateLabs",
      content: "The team's expertise and dedication to excellence is unmatched. Our productivity increased by 300%.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Founder, StartupXYZ",
      content: "Professional, reliable, and innovative. They delivered exactly what we needed and more.",
      rating: 5
    }
  ],
  categories: [
    { name: "AI Solutions", count: 15, description: "Advanced AI-powered applications" },
    { name: "Cloud Services", count: 8, description: "Scalable cloud infrastructure" },
    { name: "Cybersecurity", count: 12, description: "Enterprise security solutions" },
    { name: "Data Analytics", count: 10, description: "Business intelligence and insights" }
  ]
};

// Icon name corrections
const iconCorrections = {
  'watch': 'Watch',
  'note': 'FileText'
};

async function fixErrors() {
  // Files to process
  const filesToProcess = await glob('app/**/*.tsx', { cwd: process.cwd() });

  console.log(`Processing ${filesToProcess.length} files...`);

  filesToProcess.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);
  let content = fs.readFileSync(fullPath, 'utf8');
  let modified = false;

  // Fix icon name corrections
  Object.entries(iconCorrections).forEach(([wrong, correct]) => {
    const regex = new RegExp(`'${wrong}'`, 'g');
    if (content.includes(`'${wrong}'`)) {
      content = content.replace(regex, `'${correct}'`);
      modified = true;
    }
  });

  // Add missing data arrays
  if (content.includes('stats.map(') && !content.includes('const stats =')) {
    const statsData = `const stats = ${JSON.stringify(commonData.stats, null, 2)};`;
    content = content.replace(/(const values = \[[\s\S]*?\];)/, `$1\n\n  ${statsData}`);
    modified = true;
  }

  if (content.includes('benefits.map(') && !content.includes('const benefits =')) {
    const benefitsData = `const benefits = ${JSON.stringify(commonData.benefits, null, 2)};`;
    content = content.replace(/(const values = \[[\s\S]*?\];)/, `$1\n\n  ${benefitsData}`);
    modified = true;
  }

  if (content.includes('testimonials.map(') && !content.includes('const testimonials =')) {
    const testimonialsData = `const testimonials = ${JSON.stringify(commonData.testimonials, null, 2)};`;
    content = content.replace(/(const values = \[[\s\S]*?\];)/, `$1\n\n  ${testimonialsData}`);
    modified = true;
  }

  if (content.includes('categories.map(') && !content.includes('const categories =')) {
    const categoriesData = `const categories = ${JSON.stringify(commonData.categories, null, 2)};`;
    content = content.replace(/(const values = \[[\s\S]*?\];)/, `$1\n\n  ${categoriesData}`);
    modified = true;
  }

  // Remove unused imports (basic cleanup)
  const lines = content.split('\n');
  const newLines = [];
  const usedIcons = new Set();
  
  // Find used icons
  lines.forEach(line => {
    const iconMatch = line.match(/<(\w+)\s+className/);
    if (iconMatch) {
      usedIcons.add(iconMatch[1]);
    }
  });

  // Filter out unused imports
  lines.forEach(line => {
    if (line.includes('import {') && line.includes('lucide-react')) {
      const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
      if (importMatch) {
        const imports = importMatch[1].split(',').map(imp => imp.trim());
        const usedImports = imports.filter(imp => {
          const iconName = imp.replace(/\s+as\s+\w+/, '').trim();
          return usedIcons.has(iconName) || imp.includes('as');
        });
        
        if (usedImports.length > 0) {
          newLines.push(`import { ${usedImports.join(', ')} } from "lucide-react";`);
        }
      } else {
        newLines.push(line);
      }
    } else {
      newLines.push(line);
    }
  });

  if (modified || newLines.length !== lines.length) {
    fs.writeFileSync(fullPath, newLines.join('\n'));
    console.log(`Fixed: ${filePath}`);
  }
});

  console.log('Error fixing completed!');
}

fixErrors().catch(console.error);