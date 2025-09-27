const fs = require('fs');
const path = require('path');

// List of files with syntax errors
const filesToFix = [
  'pages/about.tsx',
  'pages/dashboard.tsx', 
  'pages/faq.tsx',
  'pages/index.tsx',
  'pages/portfolio.tsx'
];

function fixSyntaxErrors() {
  console.log('🔧 Starting comprehensive syntax error fixes...');
  
  filesToFix.forEach(filePath => {
    try {
      console.log(`\n📝 Fixing ${filePath}...`);
      
      if (!fs.existsSync(filePath)) {
        console.log(`❌ File not found: ${filePath}`);
        return;
      }
      
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      // Fix common syntax errors
      
      // Fix malformed variable names with commas
      content = content.replace(/setIsVisib,\s*l,\s*e/g, 'setIsVisible');
      content = content.replace(/setIsVisib,le/g, 'setIsVisible');
      content = content.replace(/setIsLoadi,\s*n,\s*g/g, 'setIsLoading');
      content = content.replace(/performanceMetri,\s*c,\s*s/g, 'performanceMetrics');
      content = content.replace(/setPerformanceMetri,\s*c,\s*s/g, 'setPerformanceMetrics');
      content = content.replace(/openIte,\s*m,\s*s/g, 'openItems');
      content = content.replace(/setOpenIte,\s*m,\s*s/g, 'setOpenItems');
      content = content.replace(/searchTermsetSearchTerm/g, 'searchTerm, setSearchTerm');
      content = content.replace(/selectedProject,\s*setSelectedProje,\s*c,\s*t/g, 'selectedProject, setSelectedProject');
      
      // Fix malformed useRef and useInView calls
      content = content.replace(/useR,\s*e,\s*f/g, 'useRef');
      content = content.replace(/useInVi,\s*e,\s*w/g, 'useInView');
      content = content.replace(/heroR,\s*e,\s*f/g, 'heroRef');
      content = content.replace(/featuresR,\s*e,\s*f/g, 'featuresRef');
      
      // Fix malformed function calls
      content = content.replace(/useAnalyti,\s*cs/g, 'useAnalytics');
      content = content.replace(/usePageVi,\s*ew/g, 'usePageView');
      content = content.replace(/trackCli,\s*ck/g, 'trackClick');
      
      // Fix malformed object properties
      content = content.replace(/ent,\s*r,\s*y/g, 'entry');
      content = content.replace(/li,\s*s,\s*t/g, 'list');
      content = content.replace(/entri,\s*e,\s*s/g, 'entries');
      content = content.replace(/forEa,\s*c,\s*h/g, 'forEach');
      content = content.replace(/getEntri,\s*e,\s*s/g, 'getEntries');
      
      // Fix malformed strings and quotes
      content = content.replace(/"eve,\s*n,\s*t'/g, "'event'");
      content = content.replace(/"click"\{/g, "'click', {");
      content = content.replace(/event_category:\s*"engagement"event_label:/g, 'event_category: "engagement", event_label:');
      content = content.replace(/event_label:\s*"get_started_button"/g, 'event_label: "get_started_button"');
      
      // Fix malformed arrays and objects
      content = content.replace(/}\}\}\},/g, '}');
      content = content.replace(/constfaqData/g, 'const faqData');
      content = content.replace(/{category:\s*"Gener,\s*al"questions:/g, '{category: "General", questions:');
      
      // Fix malformed JSX
      content = content.replace(/<divclassName=/g, '<div className=');
      content = content.replace(/<divclassName="p-8">/g, '<div className="p-8">');
      content = content.replace(/<divclassName="flexjustify-betweenitems-centermb-8">/g, '<div className="flex justify-between items-center mb-8">');
      
      // Fix malformed useEffect calls
      content = content.replace(/setIsVisible\(true\)\}\[\];/g, 'setIsVisible(true);\n\t}, []);');
      content = content.replace(/setIsVisible\(true\)\}\[\];/g, 'setIsVisible(true);\n\t}, []);');
      
      // Fix malformed switch statements
      content = content.replace(/case\s*"overview":\s*return\s*\(\s*$/gm, 'case "overview":\n\t\t\treturn (\n\t\t\t\t<div className="flex justify-between items-center mb-8">');
      
      // Fix malformed imports
      content = content.replace(/import\s*{\s*useStateuseEffect\s*}\s*from\s*"react";/g, 'import { useState, useEffect } from "react";');
      
      // Fix malformed PerformanceObserver
      content = content.replace(/new,\s*PerformanceObserve,\s*r/g, 'new PerformanceObserver');
      content = content.replace(/observ,\s*er/g, 'observer');
      content = content.replace(/disconnect\(\)\}\}\[\];/g, 'disconnect();\n\t\t}\n\t}, []);');
      
      // Fix malformed window checks
      content = content.replace(/typeofwindow/g, 'typeof window');
      content = content.replace(/typeofwindow\s*!==\s*"undefined"/g, 'typeof window !== "undefined"');
      
      // Fix malformed gtag calls
      content = content.replace(/window\.gtag\('event''click'\{/g, "window.gtag('event', 'click', {");
      
      // Fix malformed features array
      content = content.replace(/const\s*features\s*=\s*useMemo\(\(\)\s*=>\s*\[\s*window\.gtag/g, 'const features = useMemo(() => [');
      
      // Fix malformed template literals
      content = content.replace(/`select-plan-\$\{tierId\}`\s*"conversion'/g, '`select-plan-${tierId}`, "conversion"');
      content = content.replace(/`read-blog-\$\{slug\}`\s*"engagement'/g, '`read-blog-${slug}`, "engagement"');
      
      // Fix malformed console.log statements
      content = content.replace(/console\.log\('Selected\s*plan:"tierId\)/g, "console.log('Selected plan:', tierId);");
      content = content.replace(/console\.log\('Read\s*more:",\s*slug\)/g, "console.log('Read more:', slug);");
      
      // Fix malformed objects in features array
      content = content.replace(/title:\s*"AI-PoweredSolutions",/g, 'title: "AI-Powered Solutions",');
      content = content.replace(/description:\s*"Leverage,\s*cuttin,\s*g-edge,\s*artificial,\s*intelligence\s*totransformyour\s*businessoperationsand\s*driveinnovation\.",/g, 'description: "Leverage cutting-edge artificial intelligence to transform your business operations and drive innovation.",');
      content = content.replace(/icon:\s*"🤖"color:\s*"blue"\s*asconstdelay:\s*0\.1/g, 'icon: "🤖",\n\t\tcolor: "blue" as const,\n\t\tdelay: 0.1');
      
      // Fix malformed closing braces
      content = content.replace(/}\s*}\s*}\s*}\s*\]/g, '}]');
      
      // Write the fixed content back to the file
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Fixed syntax errors in ${filePath}`);
      } else {
        console.log(`ℹ️  No changes needed for ${filePath}`);
      }
      
    } catch (error) {
      console.error(`❌ Error fixing ${filePath}:`, error.message);
    }
  });
  
  console.log('\n🎉 Syntax error fixes completed!');
}

// Run the fix
fixSyntaxErrors();