const fs = require('fs');
const path = require('path');

// Files that need comprehensive fixing
const filesToFix = [
  'app/ai-powered-devops/page.tsx',
  'app/ai-quantum-computing/page.tsx',
  'app/ai-powered-email-analyzer/page.tsx',
  'app/ai-services/page.tsx',
  'app/ai-voice-assistant-pro/page.tsx',
  'app/ar-vr-development/page.tsx',
  'app/asset-management/page.tsx',
  'app/cloud-infrastructure/page.tsx',
  'app/cloud-services/page.tsx',
  'app/ai-data-analytics-pro/page.tsx'
];

// Icons that need to be imported
const iconImports = {
  'Brain': 'Brain',
  'ArrowRight': 'ArrowRight', 
  'Monitor': 'Monitor',
  'Zap': 'Zap',
  'CheckCircle': 'CheckCircle',
  'Award': 'Award',
  'DollarSign': 'DollarSign',
  'Star': 'Star',
  'MessageSquare': 'MessageSquare',
  'Phone': 'Phone',
  'Globe': 'Globe',
  'Atom': 'Atom',
  'Cpu': 'Cpu',
  'Users': 'Users',
  'Mic': 'Mic',
  'Volume2': 'Volume2',
  'Settings': 'Settings',
  'Eye': 'Eye',
  'Box': 'Box',
  'Package': 'Package',
  'Server': 'Server',
  'Database': 'Database',
  'Cloud': 'Cloud',
  'Lock': 'Lock',
  'HardDrive': 'HardDrive',
  'Network': 'Network'
};

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Add missing imports
    const missingImports = [];
    
    // Check for missing Helmet import
    if (content.includes('Helmet') && !content.includes('react-helmet-async')) {
      missingImports.push("import { Helmet } from 'react-helmet-async';");
    }
    
    // Check for missing Link import
    if (content.includes('Link') && !content.includes('react-router-dom')) {
      missingImports.push("import { Link } from 'react-router-dom';");
    }
    
    // Check for missing motion import
    if (content.includes('motion') && !content.includes('framer-motion')) {
      missingImports.push("import { motion } from 'framer-motion';");
    }

    // Check for missing icon imports
    const currentImports = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*'lucide-react';/);
    if (currentImports) {
      const existingIcons = currentImports[1].split(',').map(icon => icon.trim());
      const neededIcons = [];
      
      for (const [iconName, iconImport] of Object.entries(iconImports)) {
        if (content.includes(iconName) && !existingIcons.includes(iconImport)) {
          neededIcons.push(iconImport);
        }
      }
      
      if (neededIcons.length > 0) {
        const newImport = `import { ${existingIcons.join(', ')}, ${neededIcons.join(', ')} } from 'lucide-react';`;
        content = content.replace(/import\s*{\s*[^}]+\s*}\s*from\s*'lucide-react';/, newImport);
        modified = true;
      }
    }

    // Add missing imports after lucide-react import
    if (missingImports.length > 0) {
      const lucideImportMatch = content.match(/import\s*{\s*[^}]+\s*}\s*from\s*'lucide-react';/);
      if (lucideImportMatch) {
        const insertIndex = lucideImportMatch.index + lucideImportMatch[0].length;
        content = content.slice(0, insertIndex) + '\n' + missingImports.join('\n') + content.slice(insertIndex);
        modified = true;
      }
    }

    // Add missing data arrays
    const functionStart = content.search(/const\s+\w+\s*=\s*\(\)\s*=>\s*{|export\s+default\s+function/);
    if (functionStart !== -1) {
      const beforeFunction = content.substring(0, functionStart);
      const afterFunction = content.substring(functionStart);
      
      let newContent = beforeFunction;
      
      // Add missing arrays based on usage
      if (content.includes('benefits.map') && !content.includes('const benefits')) {
        newContent += `const benefits = [
    "Benefit 1",
    "Benefit 2", 
    "Benefit 3"
  ];\n\n`;
      }
      
      if (content.includes('capabilities.map') && !content.includes('const capabilities')) {
        newContent += `const capabilities = [
    "Capability 1",
    "Capability 2",
    "Capability 3"
  ];\n\n`;
      }
      
      if (content.includes('applications.map') && !content.includes('const applications')) {
        newContent += `const applications = [
    "Application 1",
    "Application 2", 
    "Application 3"
  ];\n\n`;
      }
      
      if (content.includes('testimonials.map') && !content.includes('const testimonials')) {
        newContent += `const testimonials = [
    {
      name: "John Doe",
      role: "CEO",
      company: "Company Inc",
      content: "Great service!",
      rating: 5
    }
  ];\n\n`;
      }
      
      if (newContent !== beforeFunction) {
        content = newContent + afterFunction;
        modified = true;
      }
    }

    // Fix SEOOptimizer component usage
    if (content.includes('SEOOptimizer') && content.includes('title:') && content.includes('description:')) {
      content = content.replace(
        /<SEOOptimizer\s+title="[^"]*"\s+description="[^"]*"\s*\/>/g,
        '<SEOOptimizer />'
      );
      modified = true;
    }

    // Fix testimonial avatar property
    if (content.includes('testimonial.avatar')) {
      content = content.replace(/testimonial\.avatar/g, 'testimonial.name');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);
console.log('Remaining issues fixes completed!');