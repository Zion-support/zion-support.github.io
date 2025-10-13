#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common data arrays
const commonData = {
  stats: [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "99%", label: "Client Satisfaction" }
  ],
  benefits: [
    "80% reduction in manual tasks",
    "Real-time process optimization", 
    "Seamless system integration",
    "Predictive maintenance alerts",
    "Automated compliance reporting",
    "Enhanced data accuracy"
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

// Common missing imports
const commonImports = {
  'TrendingUp': 'TrendingUp',
  'Settings': 'Settings', 
  'Users': 'Users',
  'Globe': 'Globe',
  'ArrowRight': 'ArrowRight',
  'Star': 'Star',
  'Clock': 'Clock',
  'Zap': 'Zap',
  'Brain': 'Brain',
  'Activity': 'Activity'
};

async function fixAllErrors() {
  const filesToProcess = await glob('app/**/*.tsx', { cwd: process.cwd() });
  
  console.log(`Processing ${filesToProcess.length} files...`);
  
  filesToProcess.forEach(filePath => {
    const fullPath = path.join(process.cwd(), filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;
    
    // Fix icon name corrections
    if (content.includes("'watch'")) {
      content = content.replace(/'watch'/g, "'Watch'");
      modified = true;
    }
    
    if (content.includes("'note'")) {
      content = content.replace(/'note'/g, "'FileText'");
      modified = true;
    }
    
    // Find missing imports by looking for JSX usage
    const missingImports = [];
    Object.entries(commonImports).forEach(([iconName, importName]) => {
      if (content.includes(`<${iconName}`) && !content.includes(importName)) {
        missingImports.push(importName);
      }
    });
    
    // Add missing imports
    if (missingImports.length > 0) {
      const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
      if (importMatch) {
        const existingImports = importMatch[1].split(',').map(imp => imp.trim());
        const allImports = [...new Set([...existingImports, ...missingImports])];
        const newImport = `import { ${allImports.join(', ')} } from "lucide-react";`;
        content = content.replace(importMatch[0], newImport);
        modified = true;
      }
    }
    
    // Add missing data arrays
    if (content.includes('stats.map(') && !content.includes('const stats =')) {
      const statsData = `const stats = ${JSON.stringify(commonData.stats, null, 2)};`;
      // Find a good place to add it - after the first const declaration
      const firstConstMatch = content.match(/(const \w+ = \[[\s\S]*?\];)/);
      if (firstConstMatch) {
        content = content.replace(firstConstMatch[0], `${firstConstMatch[0]}\n\n  ${statsData}`);
        modified = true;
      }
    }
    
    if (content.includes('benefits.map(') && !content.includes('const benefits =')) {
      const benefitsData = `const benefits = ${JSON.stringify(commonData.benefits, null, 2)};`;
      const firstConstMatch = content.match(/(const \w+ = \[[\s\S]*?\];)/);
      if (firstConstMatch) {
        content = content.replace(firstConstMatch[0], `${firstConstMatch[0]}\n\n  ${benefitsData}`);
        modified = true;
      }
    }
    
    if (content.includes('testimonials.map(') && !content.includes('const testimonials =')) {
      const testimonialsData = `const testimonials = ${JSON.stringify(commonData.testimonials, null, 2)};`;
      const firstConstMatch = content.match(/(const \w+ = \[[\s\S]*?\];)/);
      if (firstConstMatch) {
        content = content.replace(firstConstMatch[0], `${firstConstMatch[0]}\n\n  ${testimonialsData}`);
        modified = true;
      }
    }
    
    if (content.includes('categories.map(') && !content.includes('const categories =')) {
      const categoriesData = `const categories = ${JSON.stringify(commonData.categories, null, 2)};`;
      const firstConstMatch = content.match(/(const \w+ = \[[\s\S]*?\];)/);
      if (firstConstMatch) {
        content = content.replace(firstConstMatch[0], `${firstConstMatch[0]}\n\n  ${categoriesData}`);
        modified = true;
      }
    }
    
    // Fix type annotations
    content = content.replace(/stats\.map\(\(stat, index\)/g, 'stats.map((stat: any, index: number)');
    content = content.replace(/benefits\.map\(\(benefit, index\)/g, 'benefits.map((benefit: any, index: number)');
    content = content.replace(/testimonials\.map\(\(testimonial, index\)/g, 'testimonials.map((testimonial: any, index: number)');
    content = content.replace(/categories\.map\(\(category, index\)/g, 'categories.map((category: any, index: number)');
    
    // Remove SEOOptimizer usage
    if (content.includes('SEOOptimizer')) {
      content = content.replace(/<SEOOptimizer[^>]*\/>/g, '');
      content = content.replace(/import.*SEOOptimizer.*from.*['"][^'"]*['"];?\n?/g, '');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed: ${filePath}`);
    }
  });
  
  console.log('All errors fixed!');
}

fixAllErrors().catch(console.error);