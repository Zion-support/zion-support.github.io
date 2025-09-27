const fs = require('fs');
const path = require('path');

function fixRemainingSyntaxErrors() {
  console.log('🔧 Fixing remaining syntax errors...');
  
  // Fix about.tsx - check for missing closing tags
  const aboutPath = 'pages/about.tsx';
  if (fs.existsSync(aboutPath)) {
    let content = fs.readFileSync(aboutPath, 'utf8');
    
    // Check if there are missing closing tags
    const openTags = (content.match(/</g) || []).length;
    const closeTags = (content.match(/>/g) || []).length;
    
    if (openTags !== closeTags) {
      console.log('⚠️  about.tsx has tag mismatch, but content looks correct');
    }
    
    // Check for missing closing div or section
    if (!content.includes('</div>') || content.split('</div>').length < content.split('<div').length) {
      console.log('🔧 Adding missing closing tags to about.tsx');
      content = content.replace(/}\s*$/, '\n\t\t\t</div>\n\t\t</div>\n\t</>\n\t);\n}');
    }
    
    fs.writeFileSync(aboutPath, content, 'utf8');
    console.log('✅ Fixed about.tsx');
  }
  
  // Fix dashboard.tsx - fix switch statement indentation
  const dashboardPath = 'pages/dashboard.tsx';
  if (fs.existsSync(dashboardPath)) {
    let content = fs.readFileSync(dashboardPath, 'utf8');
    
    // Fix switch statement formatting
    content = content.replace(/case\s*"overview":\s*return\s*\(\s*$/gm, 'case "overview":\n\t\t\treturn (\n\t\t\t\t<div className="flex justify-between items-center mb-8">');
    
    // Fix indentation issues
    content = content.replace(/^\s{8,12}/gm, '\t\t\t\t');
    
    fs.writeFileSync(dashboardPath, content, 'utf8');
    console.log('✅ Fixed dashboard.tsx');
  }
  
  // Fix faq.tsx - fix malformed objects
  const faqPath = 'pages/faq.tsx';
  if (fs.existsSync(faqPath)) {
    let content = fs.readFileSync(faqPath, 'utf8');
    
    // Fix malformed objects in FAQ data
    content = content.replace(/}\s*]\s*},/g, '}\n\t\t\t]\n\t\t},');
    content = content.replace(/]\s*},/g, ']\n\t\t},');
    content = content.replace(/\{category:\s*"Services & Pricing"questions:/g, '{\n\t\t\tcategory: "Services & Pricing",\n\t\t\tquestions:');
    content = content.replace(/>>>>>>\s*98b958e34f69a81b0adf5a8e38f8010f768ddaa3/g, '');
    
    // Fix malformed question objects
    content = content.replace(/id:\s*3,/g, 'id: 3,');
    content = content.replace(/question:\s*"WhatmakesZion Appdifferentfrom othertechnologycompanies?",/g, 'question: "What makes Zion App different from other technology companies?",');
    content = content.replace(/answer:\s*"We, combine, deep technical, expertise, with a, clien, t-first, approac, h\. Our, team, stays at, the, forefront of, technology, trends  uses, agile, development methodologies, and, provides transparent, communication, throughout theprojectlifecycle\. Wealsooffer ongoingsupportand maintenanceservices\.",/g, 'answer: "We combine deep technical expertise with a client-first approach. Our team stays at the forefront of technology trends, uses agile development methodologies, and provides transparent communication throughout the project lifecycle. We also offer ongoing support and maintenance services.",');
    
    fs.writeFileSync(faqPath, content, 'utf8');
    console.log('✅ Fixed faq.tsx');
  }
  
  // Fix index.tsx - fix features array
  const indexPath = 'pages/index.tsx';
  if (fs.existsSync(indexPath)) {
    let content = fs.readFileSync(indexPath, 'utf8');
    
    // Fix malformed features array
    content = content.replace(/}\s*\{title:\s*"CloudInfrastructure",/g, '},\n\t\t{\n\t\t\ttitle: "Cloud Infrastructure",');
    content = content.replace(/description:\s*"Scalable, secure, and reliablecloudsolutions tailoredtoyour specificbusinessrequirements\.",/g, 'description: "Scalable, secure, and reliable cloud solutions tailored to your specific business requirements.",');
    content = content.replace(/icon:\s*"☁️"color:\s*"green"\s*asconstdelay:\s*0\.2/g, 'icon: "☁️",\n\t\t\tcolor: "green" as const,\n\t\t\tdelay: 0.2');
    content = content.replace(/}\s*\{title:\s*"DigitalTransformation",/g, '},\n\t\t{\n\t\t\ttitle: "Digital Transformation",');
    content = content.replace(/description:\s*"Complete, digital, transformation servicestomodernize yourbusinessprocesses andsystems\.",/g, 'description: "Complete digital transformation services to modernize your business processes and systems.",');
    content = content.replace(/icon:\s*"🚀"color:\s*"purple"\s*asconstdelay:\s*0\.3/g, 'icon: "🚀",\n\t\t\tcolor: "purple" as const,\n\t\t\tdelay: 0.3');
    
    // Close the features array properly
    content = content.replace(/}\s*}\s*}\s*}\s*\]/g, '}\n\t\t]\n\t}, []);');
    
    fs.writeFileSync(indexPath, content, 'utf8');
    console.log('✅ Fixed index.tsx');
  }
  
  // Fix portfolio.tsx - fix projects array
  const portfolioPath = 'pages/portfolio.tsx';
  if (fs.existsSync(portfolioPath)) {
    let content = fs.readFileSync(portfolioPath, 'utf8');
    
    // Fix malformed projects array
    content = content.replace(/constprojects\s*=\s*\[/g, 'const projects = [');
    content = content.replace(/\{id:\s*1title:/g, '{\n\t\t\tid: 1,\n\t\t\ttitle:');
    content = content.replace(/title:\s*"AI-Powere,\s*d,\s*E-commercePlatform",/g, 'title: "AI-Powered E-commerce Platform",');
    content = content.replace(/client:\s*"TechRetailInc\.",/g, 'client: "TechRetail Inc.",');
    content = content.replace(/category:\s*'AI',/g, 'category: "AI",');
    content = content.replace(/description:\s*"Built,\s*a,\s*comprehensive e-commerce,\s*platfo,\s*rm,\s*with AI-poweredrecommendationsinventory managementandcustomer analytics\.",/g, 'description: "Built a comprehensive e-commerce platform with AI-powered recommendations, inventory management, and customer analytics.",');
    
    fs.writeFileSync(portfolioPath, content, 'utf8');
    console.log('✅ Fixed portfolio.tsx');
  }
  
  console.log('\n🎉 Remaining syntax error fixes completed!');
}

// Run the fix
fixRemainingSyntaxErrors();