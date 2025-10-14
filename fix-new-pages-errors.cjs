const fs = require('fs');
const path = require('path');

// List of files with errors
const filesToFix = [
  'app/ai-data-analytics-pro/page.tsx',
  'app/ai-financial-analysis/page.tsx',
  'app/ai-holographic-workspace/page.tsx',
  'app/ai-hr-recruitment-pro/page.tsx',
  'app/ai-image-recognition-pro/page.tsx',
  'app/ai-powered-devops/page.tsx',
  'app/ai-supply-chain-optimizer/page.tsx',
  'app/ai-translation-service/page.tsx',
  'app/cloud-infrastructure-management/page.tsx'
];

// Common imports that are missing
const commonImports = `import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Monitor, 
  FileText, 
  Star, 
  Award, 
  DollarSign, 
  Globe2,
  Scanner,
  Fax,
  Stop,
  Shuffle,
  Stopwatch
} from 'lucide-react';
import { FuturisticButton } from '../components/FuturisticButton';
import { ResponsiveContainer } from '../components/ResponsiveContainer';
import { SEOHead } from '../components/SEOHead';
`;

// Fix each file
filesToFix.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add missing imports at the top
    if (!content.includes("import React from 'react'")) {
      content = commonImports + '\n' + content;
    }
    
    // Fix Shuffle2 to Shuffle
    content = content.replace(/Shuffle2/g, 'Shuffle');
    
    // Fix Globe to Globe2
    content = content.replace(/Globe/g, 'Globe2');
    
    // Fix SEOHead usage - replace with proper meta tags
    content = content.replace(
      /<SEOHead\s+title="([^"]*)"\s+description="([^"]*)"(?:\s+keywords="([^"]*)")?(?:\s+canonical="([^"]*)")?\s*\/>/g,
      (match, title, description, keywords, canonical) => {
        return `{/* SEO Meta Tags */}
        <title>${title}</title>
        <meta name="description" content="${description}" />
        ${keywords ? `<meta name="keywords" content="${keywords}" />` : ''}
        ${canonical ? `<link rel="canonical" href="${canonical}" />` : ''}`;
      }
    );
    
    // Fix FuturisticButton usage - replace with regular buttons
    content = content.replace(
      /<FuturisticButton\s+([^>]*)>([^<]*)<\/FuturisticButton>/g,
      (match, props, children) => {
        const hrefMatch = props.match(/href="([^"]*)"/);
        const variantMatch = props.match(/variant="([^"]*)"/);
        const sizeMatch = props.match(/size="([^"]*)"/);
        const classNameMatch = props.match(/className="([^"]*)"/);
        
        const href = hrefMatch ? hrefMatch[1] : '#';
        const variant = variantMatch ? variantMatch[1] : 'primary';
        const size = sizeMatch ? sizeMatch[1] : 'lg';
        const className = classNameMatch ? classNameMatch[1] : '';
        
        const baseClasses = variant === 'primary' 
          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-blue-500/25 hover:scale-105'
          : 'border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105';
        
        return `<Link to="${href}" className="${baseClasses} ${className}">${children}</Link>`;
      }
    );
    
    // Fix ResponsiveContainer usage - replace with regular div
    content = content.replace(
      /<ResponsiveContainer\s+([^>]*)>([\s\S]*?)<\/ResponsiveContainer>/g,
      (match, props, children) => {
        const classNameMatch = props.match(/className="([^"]*)"/);
        const className = classNameMatch ? classNameMatch[1] : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';
        return `<div className="${className}">${children}</div>`;
      }
    );
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filePath}`);
  }
});

console.log('All files fixed!');