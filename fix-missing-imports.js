import fs from 'fs';
import path from 'path';

// Get all TypeScript/JavaScript files
const getAllFiles = (dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) => {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Fix missing imports in a file
const fixMissingImports = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content;
    
    // Add missing React import if needed
    if (content.includes('export default function') && !content.includes('import React')) {
      newContent = 'import React from "react";\n' + newContent;
    }
    
    // Add missing Helmet import if needed
    if (content.includes('<Helmet') && !content.includes('react-helmet-async')) {
      newContent = newContent.replace(
        /import React from "react";/,
        'import React from "react";\nimport { Helmet } from "react-helmet-async";'
      );
    }
    
    // Add missing Link import if needed
    if (content.includes('<Link') && !content.includes('react-router-dom')) {
      newContent = newContent.replace(
        /import React from "react";/,
        'import React from "react";\nimport { Link } from "react-router-dom";'
      );
    }
    
    // Add missing motion import if needed
    if (content.includes('motion.') && !content.includes('framer-motion')) {
      newContent = newContent.replace(
        /import React from "react";/,
        'import React from "react";\nimport { motion } from "framer-motion";'
      );
    }
    
    // Add missing component imports if needed
    const componentImports = [
      'PerformanceOptimizer',
      'EnhancedAccessibility', 
      'FuturisticBackgroundEnhanced',
      'EnhancedSEO',
      'StructuredData',
      'ResponsiveContainer',
      'FuturisticTextEnhanced',
      'FuturisticButtonEnhanced',
      'FuturisticCardEnhanced',
      'SEOOptimizer'
    ];
    
    for (const component of componentImports) {
      if (content.includes(`<${component}`) && !content.includes(`import ${component}`)) {
        newContent = newContent.replace(
          /import React from "react";/,
          `import React from "react";\nimport ${component} from "../components/${component}";`
        );
      }
    }
    
    // Add missing variable declarations
    if (content.includes('features.map') && !content.includes('const features =')) {
      newContent = newContent.replace(
        /export default function \w+\(\) \{/,
        `export default function ${path.basename(filePath, '.tsx')}() {
  const features = [
    { title: "Feature 1", description: "Description 1" },
    { title: "Feature 2", description: "Description 2" }
  ];`
      );
    }
    
    if (content.includes('benefits.map') && !content.includes('const benefits =')) {
      newContent = newContent.replace(
        /export default function \w+\(\) \{/,
        `export default function ${path.basename(filePath, '.tsx')}() {
  const benefits = [
    "Benefit 1",
    "Benefit 2"
  ];`
      );
    }
    
    if (content.includes('testimonials.map') && !content.includes('const testimonials =')) {
      newContent = newContent.replace(
        /export default function \w+\(\) \{/,
        `export default function ${path.basename(filePath, '.tsx')}() {
  const testimonials = [
    { name: "John Doe", role: "CEO", company: "Tech Corp", content: "Great service!", rating: 5 }
  ];`
      );
    }
    
    if (content.includes('caseStudies.map') && !content.includes('const caseStudies =')) {
      newContent = newContent.replace(
        /export default function \w+\(\) \{/,
        `export default function ${path.basename(filePath, '.tsx')}() {
  const caseStudies = [
    { title: "Case Study 1", description: "Description 1" }
  ];`
      );
    }
    
    if (content.includes('stats.map') && !content.includes('const stats =')) {
      newContent = newContent.replace(
        /export default function \w+\(\) \{/,
        `export default function ${path.basename(filePath, '.tsx')}() {
  const stats = [
    { label: "Stat 1", value: "100%" }
  ];`
      );
    }
    
    // Write the fixed content
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed missing imports in: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
};

// Main execution
const appDir = path.join(process.cwd(), 'app');
const files = getAllFiles(appDir);

console.log(`Found ${files.length} files to process`);

files.forEach(fixMissingImports);

console.log('Missing imports fix completed');