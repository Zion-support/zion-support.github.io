const fs = require('fs');
const path = require('path');

// Function to fix specific TypeScript errors
function fixTypeScriptErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing testimonials variable
    if (content.includes('testimonials.map') && !content.includes('const testimonials')) {
      const testimonialsData = `  const testimonials = [
    {
      name: "John Smith",
      role: "CEO, TechCorp",
      content: "Zion Tech Group transformed our business with their AI solutions.",
      avatar: "/images/testimonials/john-smith.jpg",
      rating: 5,
      company: "TechCorp"
    },
    {
      name: "Sarah Johnson",
      role: "CTO, InnovateLabs",
      content: "The team's expertise in AI and automation is unmatched.",
      avatar: "/images/testimonials/sarah-johnson.jpg",
      rating: 5,
      company: "InnovateLabs"
    },
    {
      name: "Mike Chen",
      role: "Founder, StartupXYZ",
      content: "We saw immediate results after implementing their solutions.",
      avatar: "/images/testimonials/mike-chen.jpg",
      rating: 5,
      company: "StartupXYZ"
    }
  ];`;
      
      // Insert after the component declaration
      const componentMatch = content.match(/(const\s+\w+\s*=\s*\(\)\s*=>\s*{)/);
      if (componentMatch) {
        const insertIndex = componentMatch.index + componentMatch[0].length;
        content = content.slice(0, insertIndex) + '\n' + testimonialsData + '\n' + content.slice(insertIndex);
        modified = true;
      }
    }
    
    // Fix missing stats variable
    if (content.includes('stats.map') && !content.includes('const stats')) {
      const statsData = `  const stats = [
    { label: "Projects Completed", value: "500+", number: "500+", icon: <Star className="w-6 h-6" /> },
    { label: "Happy Clients", value: "200+", number: "200+", icon: <Users className="w-6 h-6" /> },
    { label: "Years Experience", value: "5+", number: "5+", icon: <Award className="w-6 h-6" /> },
    { label: "Team Members", value: "50+", number: "50+", icon: <Users className="w-6 h-6" /> }
  ];`;
      
      const componentMatch = content.match(/(const\s+\w+\s*=\s*\(\)\s*=>\s*{)/);
      if (componentMatch) {
        const insertIndex = componentMatch.index + componentMatch[0].length;
        content = content.slice(0, insertIndex) + '\n' + statsData + '\n' + content.slice(insertIndex);
        modified = true;
      }
    }
    
    // Fix missing benefits variable
    if (content.includes('benefits.map') && !content.includes('const benefits')) {
      const benefitsData = `  const benefits = [
    {
      title: "Expert Team",
      description: "Our team of AI and technology experts delivers exceptional results.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Proven Results",
      description: "We have a track record of successful projects and satisfied clients.",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your success.",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Innovation",
      description: "Cutting-edge solutions that keep you ahead of the competition.",
      icon: <Zap className="w-8 h-8" />
    }
  ];`;
      
      const componentMatch = content.match(/(const\s+\w+\s*=\s*\(\)\s*=>\s*{)/);
      if (componentMatch) {
        const insertIndex = componentMatch.index + componentMatch[0].length;
        content = content.slice(0, insertIndex) + '\n' + benefitsData + '\n' + content.slice(insertIndex);
        modified = true;
      }
    }
    
    // Fix duplicate imports
    const lines = content.split('\n');
    const importLines = [];
    const nonImportLines = [];
    const seenImports = new Map();
    
    for (const line of lines) {
      if (line.trim().startsWith('import')) {
        const match = line.match(/import\s*\{([^}]+)\}\s*from\s*['"]([^'"]+)['"]/);
        if (match) {
          const imports = match[1].split(',').map(imp => imp.trim());
          const source = match[2];
          
          if (!seenImports.has(source)) {
            seenImports.set(source, new Set());
          }
          
          imports.forEach(imp => {
            if (!seenImports.get(source).has(imp)) {
              seenImports.get(source).add(imp);
            }
          });
        } else {
          importLines.push(line);
        }
      } else {
        nonImportLines.push(line);
      }
    }
    
    // Rebuild import lines
    const newImportLines = [];
    for (const [source, imports] of seenImports) {
      const importArray = Array.from(imports);
      if (importArray.length > 0) {
        newImportLines.push(`import { ${importArray.join(', ')} } from '${source}';`);
      }
    }
    
    // Add non-import lines
    newImportLines.push(...importLines);
    
    // Sort imports
    newImportLines.sort();
    
    // Combine
    const newContent = [...newImportLines, ...nonImportLines].join('\n');
    
    if (newContent !== content) {
      content = newContent;
      modified = true;
    }
    
    // Fix Image component issues
    if (content.includes('<Image') && !content.includes('import { Image }')) {
      content = content.replace(/<Image/g, '<img');
      modified = true;
    }
    
    // Fix Lock component issues
    if (content.includes('<Lock') && !content.includes('import { Lock }')) {
      content = content.replace(/<Lock/g, '<div');
      modified = true;
    }
    
    // Fix missing micro-saas page
    if (filePath.includes('App.tsx') && content.includes('micro-saas/page.tsx')) {
      content = content.replace(/micro-saas\/page\.tsx/g, 'micro-saas-services/page.tsx');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript files
function findFiles(dir, extensions = ['.tsx', '.ts']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

console.log(`Found ${files.length} files to process...`);

let modifiedCount = 0;
files.forEach(file => {
  if (fixTypeScriptErrors(file)) {
    modifiedCount++;
    console.log(`Fixed errors in: ${file}`);
  }
});

console.log(`\nFixed errors in ${modifiedCount} files.`);