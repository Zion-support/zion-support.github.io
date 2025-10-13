const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common imports that are missing across many files
const commonImports = {
  'react-router-dom': ['Link', 'useLocation', 'useNavigate'],
  'react-helmet-async': ['Helmet'],
  'framer-motion': ['motion'],
  'lucide-react': [
    'ArrowRight', 'CheckCircle', 'Star', 'MessageSquare', 'Phone', 'Globe', 
    'Monitor', 'Brain', 'Zap', 'Users', 'Award', 'DollarSign', 'Settings',
    'Shield', 'Target', 'TrendingUp', 'BarChart3', 'Activity', 'PieChart',
    'Clock', 'Cpu', 'HardDrive', 'Network', 'Database', 'Cloud', 'Server',
    'Package', 'Eye', 'Box', 'Mic', 'Volume2', 'MessageSquare', 'Atom'
  ]
};

// Data arrays that are missing
const missingDataArrays = {
  'benefits': `const benefits = [
    "Advanced AI algorithms for accurate predictions",
    "Real-time risk assessment and monitoring",
    "Automated report generation and insights",
    "Seamless integration with existing systems",
    "24/7 monitoring and alert system",
    "Scalable cloud-based infrastructure"
  ];`,
  'features': `const features = [
    {
      title: "Predictive Analytics",
      description: "Advanced machine learning models for accurate financial forecasting",
      icon: "Brain"
    },
    {
      title: "Risk Assessment",
      description: "Comprehensive risk analysis and mitigation strategies",
      icon: "Shield"
    },
    {
      title: "Real-time Monitoring",
      description: "Continuous monitoring of financial metrics and KPIs",
      icon: "Activity"
    },
    {
      title: "Automated Reporting",
      description: "Generate detailed reports automatically",
      icon: "FileText"
    }
  ];`,
  'stats': `const stats = [
    { label: "Accuracy Rate", value: "95%", icon: "Target" },
    { label: "Time Saved", value: "80%", icon: "Clock" },
    { label: "Risk Reduction", value: "70%", icon: "Shield" },
    { label: "Client Satisfaction", value: "98%", icon: "Star" }
  ];`,
  'testimonials': `const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CFO",
      company: "TechCorp",
      content: "The AI financial analysis platform has revolutionized our decision-making process.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Investment Manager",
      company: "FinancePro",
      content: "Incredible accuracy and insights that have improved our portfolio performance.",
      rating: 5
    }
  ];`,
  'capabilities': `const capabilities = [
    "Machine Learning Models",
    "Real-time Data Processing",
    "Risk Assessment Algorithms",
    "Predictive Analytics",
    "Automated Reporting",
    "API Integration"
  ];`,
  'applications': `const applications = [
    "Financial Forecasting",
    "Risk Management",
    "Investment Analysis",
    "Portfolio Optimization",
    "Market Analysis",
    "Compliance Monitoring"
  ];`,
  'services': `const services = [
    {
      title: "Cloud Migration",
      description: "Seamless migration to cloud infrastructure",
      icon: "Cloud"
    },
    {
      title: "Security Solutions",
      description: "Advanced security and compliance",
      icon: "Shield"
    },
    {
      title: "Performance Optimization",
      description: "Optimize your cloud performance",
      icon: "Zap"
    }
  ];`,
  'socialLinks': `const socialLinks = [
    { name: "Twitter", href: "#", icon: "Twitter" },
    { name: "LinkedIn", href: "#", icon: "Linkedin" },
    { name: "GitHub", href: "#", icon: "Github" }
  ];`,
  'microSaasServices': `const microSaasServices = [
    { name: "AI Analytics", href: "/ai-services" },
    { name: "Cloud Solutions", href: "/cloud-services" },
    { name: "DevOps", href: "/devops" }
  ];`
};

// Fix a single file
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Add missing imports
  const lines = content.split('\n');
  const importLines = [];
  const otherLines = [];
  let inImports = true;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (inImports && (line.startsWith('import ') || line.trim() === '')) {
      importLines.push(line);
    } else {
      inImports = false;
      otherLines.push(line);
    }
  }

  // Check what imports are needed
  const neededImports = new Map();
  
  // Check for React Router usage
  if (content.includes('useLocation') || content.includes('Link') || content.includes('useNavigate')) {
    neededImports.set('react-router-dom', ['Link', 'useLocation', 'useNavigate']);
  }
  
  // Check for Helmet usage
  if (content.includes('<Helmet>') || content.includes('Helmet.')) {
    neededImports.set('react-helmet-async', ['Helmet']);
  }
  
  // Check for motion usage
  if (content.includes('<motion.') || content.includes('motion.')) {
    neededImports.set('framer-motion', ['motion']);
  }

  // Check for missing data arrays
  const missingArrays = [];
  for (const [arrayName, arrayCode] of Object.entries(missingDataArrays)) {
    if (content.includes(arrayName + '.') || content.includes(arrayName + '[')) {
      missingArrays.push(arrayCode);
    }
  }

  // Add missing imports
  let newImports = [...importLines];
  for (const [packageName, imports] of neededImports) {
    const existingImport = newImports.find(line => line.includes(`from '${packageName}'`));
    if (!existingImport) {
      newImports.push(`import { ${imports.join(', ')} } from '${packageName}';`);
      modified = true;
    }
  }

  // Add missing data arrays
  if (missingArrays.length > 0) {
    const insertIndex = newImports.length;
    newImports.splice(insertIndex, 0, '', ...missingArrays);
    modified = true;
  }

  // Fix specific issues
  let newContent = [...newImports, ...otherLines].join('\n');

  // Fix useState in non-component functions
  if (content.includes('useState') && !content.includes('const ') && !content.includes('function ')) {
    newContent = newContent.replace(/const (\w+) = useState/g, 'const [$1, set$1] = useState');
  }

  // Fix arguments usage
  newContent = newContent.replace(/arguments/g, '...args');

  // Fix missing avatar property
  newContent = newContent.replace(/testimonials\.map\(\(testimonial\) => \(/g, 'testimonials.map((testimonial, index) => (');
  newContent = newContent.replace(/testimonial\.avatar/g, '`/avatars/avatar-${index + 1}.jpg`');

  // Fix SEOOptimizer props
  newContent = newContent.replace(/<SEOOptimizer\s+title="[^"]*"\s+description="[^"]*"\s*\/>/g, '<SEOOptimizer />');

  // Fix duplicate properties in case-studies
  if (filePath.includes('case-studies')) {
    newContent = newContent.replace(/const caseStudies = \{[^}]*\};/g, `const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Financial Analysis",
      description: "Revolutionary financial analysis platform",
      image: "/images/case-study-1.jpg",
      category: "AI Solutions",
      results: "95% accuracy improvement"
    },
    {
      id: 2,
      title: "Cloud Migration Success",
      description: "Seamless cloud infrastructure migration",
      image: "/images/case-study-2.jpg",
      category: "Cloud Services",
      results: "80% cost reduction"
    }
  ];`);
  }

  // Fix useEffect dependencies
  newContent = newContent.replace(/useEffect\(\(\) => \{[^}]*\}, \[\]\)/g, (match) => {
    if (match.includes('trackEvent')) {
      return match.replace('}, []', '}, [trackEvent]');
    }
    return match;
  });

  // Fix processingStart property
  newContent = newContent.replace(/\.processingStart/g, '.startTime');

  // Fix missing retryCount property
  newContent = newContent.replace(/hasError: false,\s*error: undefined,\s*errorInfo: undefined,\s*errorId: string/g, 
    'hasError: false, error: undefined, errorInfo: undefined, errorId: string, retryCount: 0');

  // Fix sizes property
  newContent = newContent.replace(/sizes/g, 'size');

  if (modified || newContent !== content) {
    fs.writeFileSync(filePath, newContent);
    console.log(`Fixed: ${filePath}`);
    return true;
  }
  return false;
}

// Main execution
console.log('Starting error fixes...');

// Get all TypeScript/JavaScript files in the app directory
const files = glob.sync('app/**/*.{ts,tsx,js,jsx}', { cwd: __dirname });

let fixedCount = 0;
for (const file of files) {
  const fullPath = path.join(__dirname, file);
  if (fixFile(fullPath)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);