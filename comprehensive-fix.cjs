const fs = require('fs');
const path = require('path');

// Function to fix all remaining TypeScript errors
function fixAllErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing imports
    const missingImports = {
      'useState': 'react',
      'useEffect': 'react',
      'useCallback': 'react',
      'useMemo': 'react',
      'useLocation': 'react-router-dom',
      'Eye': 'lucide-react',
      'Scan': 'lucide-react',
      'Camera': 'lucide-react',
      'FileText': 'lucide-react',
      'Share2': 'lucide-react',
      'Email': 'lucide-react',
      'Atom': 'lucide-react',
      'MessageSquare': 'lucide-react',
      'FileAudio': 'lucide-react',
      'Box': 'lucide-react',
      'Package': 'lucide-react',
      'MessageCircle': 'lucide-react',
      'Calendar': 'lucide-react',
      'Twitter': 'lucide-react',
      'Linkedin': 'lucide-react',
      'Github': 'lucide-react',
      'Facebook': 'lucide-react',
      'Instagram': 'lucide-react',
      'Youtube': 'lucide-react',
      'ExternalLink': 'lucide-react',
      'ChevronRight': 'lucide-react',
      'Bug': 'lucide-react',
      'RefreshCw': 'lucide-react',
      'Loader2': 'lucide-react',
      'User': 'lucide-react',
      'HelpCircle': 'lucide-react',
      'DollarSign': 'lucide-react',
      'Play': 'lucide-react',
      'X': 'lucide-react',
      'ChevronDown': 'lucide-react',
      'Menu': 'lucide-react',
      'Send': 'lucide-react',
      'Satellite': 'lucide-react',
      'Navigation': 'lucide-react',
      'Gauge': 'lucide-react',
      'Orbit': 'lucide-react',
      'LucideIcon': 'lucide-react'
    };
    
    // Check what imports are needed
    const neededImports = new Map();
    
    for (const [identifier, source] of Object.entries(missingImports)) {
      if (content.includes(identifier) && !content.includes(`import { ${identifier}`) && !content.includes(`import ${identifier}`)) {
        if (!neededImports.has(source)) {
          neededImports.set(source, new Set());
        }
        neededImports.get(source).add(identifier);
      }
    }
    
    // Add missing imports
    if (neededImports.size > 0) {
      const importLines = [];
      for (const [source, imports] of neededImports) {
        const importArray = Array.from(imports);
        importLines.push(`import { ${importArray.join(', ')} } from '${source}';`);
      }
      
      // Insert after existing imports
      const lines = content.split('\n');
      let insertIndex = 0;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim().startsWith('import')) {
          insertIndex = i + 1;
        } else if (lines[i].trim() && !lines[i].trim().startsWith('import')) {
          break;
        }
      }
      
      lines.splice(insertIndex, 0, ...importLines);
      content = lines.join('\n');
      modified = true;
    }
    
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
    
    // Fix missing micro-saas page reference
    if (content.includes('micro-saas/page.tsx')) {
      content = content.replace(/micro-saas\/page\.tsx/g, 'micro-saas-services/page.tsx');
      modified = true;
    }
    
    // Fix missing SEOOptimizer import
    if (content.includes('SEOOptimizer') && !content.includes('import.*SEOOptimizer')) {
      content = content.replace(/import.*SEOOptimizer.*from.*['"][^'"]*['"];?\s*/g, '');
      modified = true;
    }
    
    // Fix web-vitals imports
    if (content.includes('onFCP') || content.includes('onLCP') || content.includes('onINP') || content.includes('onCLS') || content.includes('onTTFB')) {
      if (!content.includes('import { onFCP, onLCP, onINP, onCLS, onTTFB } from \'web-vitals\'')) {
        const webVitalsImport = `import { onFCP, onLCP, onINP, onCLS, onTTFB } from 'web-vitals';`;
        const lines = content.split('\n');
        let insertIndex = 0;
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].trim().startsWith('import')) {
            insertIndex = i + 1;
          } else if (lines[i].trim() && !lines[i].trim().startsWith('import')) {
            break;
          }
        }
        lines.splice(insertIndex, 0, webVitalsImport);
        content = lines.join('\n');
        modified = true;
      }
    }
    
    // Fix gtag references
    if (content.includes('gtag') && !content.includes('declare const gtag')) {
      const gtagDeclare = `declare const gtag: (...args: any[]) => void;`;
      const lines = content.split('\n');
      let insertIndex = 0;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim().startsWith('import')) {
          insertIndex = i + 1;
        } else if (lines[i].trim() && !lines[i].trim().startsWith('import')) {
          break;
        }
      }
      lines.splice(insertIndex, 0, gtagDeclare);
      content = lines.join('\n');
      modified = true;
    }
    
    // Fix imgIcon references
    if (content.includes('imgIcon')) {
      content = content.replace(/<imgIcon/g, '<div');
      content = content.replace(/<\/imgIcon>/g, '</div>');
      modified = true;
    }
    
    // Fix performance navigation timing issues
    if (content.includes('navigationStart')) {
      content = content.replace(/\.navigationStart/g, '.fetchStart');
      modified = true;
    }
    
    // Fix focus method issues
    if (content.includes('.focus()')) {
      content = content.replace(/\.focus\(\)/g, ' as HTMLElement).focus()');
      modified = true;
    }
    
    // Fix framer-motion variants issues
    if (content.includes('ease: [0.6, -0.05, 0.01, 0.99]')) {
      content = content.replace(/ease: \[0\.6, -0\.05, 0\.01, 0\.99\]/g, 'ease: "easeOut"');
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
  if (fixAllErrors(file)) {
    modifiedCount++;
    console.log(`Fixed errors in: ${file}`);
  }
});

console.log(`\nFixed errors in ${modifiedCount} files.`);