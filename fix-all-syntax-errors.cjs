const fs = require('fs');
const path = require('path');

// Files with syntax errors
const filesToFix = [
  'app/ai-3d-generation/page.tsx',
  'app/blockchain-web3/page.tsx',
  'app/components/AccessibilityEnhancer.tsx',
  'app/components/AdvancedPerformanceOptimizer.tsx',
  'app/components/ContentCarousel.tsx',
  'app/components/ContentPromotionBanner.tsx',
  'app/components/ContentStatistics.tsx'
];

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix merge conflict markers
    content = content.replace(/<<<<<<< HEAD\nconst \w+: React\.FC = \(\) => \{\n=======\nconst \w+Page: React\.FC = \(\) => \{\n>>>>>>> cursor\/fix-errors-and-merge-to-main-\w+\n/g, 
      (match) => {
        const lines = match.split('\n');
        const pageLine = lines.find(line => line.includes('Page: React.FC'));
        return pageLine || lines[1];
      });
    
    // Fix interface names with spaces
    content = content.replace(/interface\s+(\w+)\s+(\w+)\s+(\w+)/g, 'interface $1$2$3');
    
    // Fix property names with spaces
    content = content.replace(/(\w+)\s+(\w+)\s*:/g, '$1$2:');
    
    // Fix JSX closing tags
    content = content.replace(/<\/but>/g, '</button>');
    content = content.replace(/<but/g, '<button');
    
    // Fix JSX expressions with quotes
    content = content.replace(/\{'>'\}/g, "'>'");
    content = content.replace(/\{'<'\}/g, "'<'");
    content = content.replace(/\{'}\'\}/g, "'}'");
    content = content.replace(/\{'\}'\}/g, "'}'");
    
    // Fix function parameter syntax
    content = content.replace(/\(\s*(\w+)\s+(\w+)\s*\)/g, '($1$2)');
    
    // Fix object property syntax
    content = content.replace(/(\w+)\s+(\w+)\s*:/g, '$1$2:');
    
    // Fix CSS class concatenation
    content = content.replace(/(\w+)(\w+)(\w+)/g, (match, p1, p2, p3) => {
      if (p1 === 'flex' && p2 === 'flex' && p3 === 'col') return 'flex flex-col';
      if (p1 === 'sm' && p2 === 'flex' && p3 === 'row') return 'sm:flex-row';
      if (p1 === 'text' && p2 === 'white' && p3 === 'hover') return 'text-white hover';
      if (p1 === 'bg' && p2 === 'white' && p3 === '20') return 'bg-white/20';
      return match;
    });
    
    // Fix missing spaces in CSS classes
    content = content.replace(/(\w+)(\w+)(\w+)/g, (match, p1, p2, p3) => {
      if (p1 === 'inline' && p2 === 'flex' && p3 === 'items') return 'inline-flex items';
      if (p1 === 'items' && p2 === 'center' && p3 === 'gap') return 'items-center gap';
      if (p1 === 'gap' && p2 === '2' && p3 === 'bg') return 'gap-2 bg';
      if (p1 === 'bg' && p2 === 'gradient' && p3 === 'to') return 'bg-gradient to';
      if (p1 === 'to' && p2 === 'r' && p3 === 'from') return 'to-r from';
      if (p1 === 'from' && p2 === 'purple' && p3 === '500') return 'from-purple-500';
      if (p1 === 'to' && p2 === 'blue' && p3 === '500') return 'to-blue-500';
      if (p1 === 'text' && p2 === 'white' && p3 === 'px') return 'text-white px';
      if (p1 === 'px' && p2 === '6' && p3 === 'py') return 'px-6 py';
      if (p1 === 'py' && p2 === '3' && p3 === 'rounded') return 'py-3 rounded';
      if (p1 === 'rounded' && p2 === 'lg' && p3 === 'font') return 'rounded-lg font';
      if (p1 === 'font' && p2 === 'semibold' && p3 === 'hover') return 'font-semibold hover';
      if (p1 === 'hover' && p2 === 'from' && p3 === 'purple') return 'hover:from-purple';
      if (p1 === 'hover' && p2 === 'to' && p3 === 'blue') return 'hover:to-blue';
      if (p1 === 'transition' && p2 === 'all' && p3 === 'duration') return 'transition-all duration';
      if (p1 === 'duration' && p2 === '300' && p3 === 'transform') return 'duration-300 transform';
      if (p1 === 'transform' && p2 === 'hover' && p3 === 'scale') return 'transform hover:scale';
      if (p1 === 'hover' && p2 === 'scale' && p3 === '105') return 'hover:scale-105';
      return match;
    });
    
    // Fix export statements
    content = content.replace(/export default \w+;(?!Page)/g, (match) => {
      const componentName = match.replace('export default ', '').replace(';', '');
      return `export default ${componentName}Page;`;
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed syntax errors in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixSyntaxErrors);

console.log('All syntax error fixes completed!');