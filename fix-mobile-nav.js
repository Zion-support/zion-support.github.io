#!/usr/bin/env node

import fs from 'fs';

// Function to fix mobile navigation syntax errors
function fixMobileNavigation() {
  try {
    let content = fs.readFileSync('app/components/Navigation.tsx', 'utf8');
    
    // Fix all mobile navigation buttons with broken syntax
    const fixes = [
      // Fix IT Services mobile button
      {
        pattern: /<button>\s*onClick={() => setItServicesOpen\(\!itServicesOpen\)}\s*className="[^"]*"><\/button>\s*<span className="flex items-center space-x-2"><\/span>\s*<Cloud[^>]*\/>\s*<span>IT Services<\/span>\s*<\/span>\s*<ChevronDown[^>]*\/>\s*<\/button>/gs,
        replacement: `<button
                  onClick={() => setItServicesOpen(!itServicesOpen)}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                  <span className="flex items-center space-x-2">
                    <Cloud className="w-4 h-4" />
                    <span>IT Services</span>
                  </span>
                  <ChevronDown className={\`w-4 h-4 transition-transform duration-300 \${itServicesOpen ? 'rotate-180' : ''}\`} />
                </button>`
      },
      // Fix Micro SAAS mobile button
      {
        pattern: /<button>\s*onClick={() => setMicroSaasOpen\(\!microSaasOpen\)}\s*className="[^"]*"><\/button>\s*<span className="flex items-center space-x-2"><\/span>\s*<Cpu[^>]*\/>\s*<span>Micro SAAS<\/span>\s*<\/span>\s*<ChevronDown[^>]*\/>\s*<\/button>/gs,
        replacement: `<button
                  onClick={() => setMicroSaasOpen(!microSaasOpen)}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                  <span className="flex items-center space-x-2">
                    <Cpu className="w-4 h-4" />
                    <span>Micro SAAS</span>
                  </span>
                  <ChevronDown className={\`w-4 h-4 transition-transform duration-300 \${microSaasOpen ? 'rotate-180' : ''}\`} />
                </button>`
      },
      // Fix Emerging Tech mobile button
      {
        pattern: /<button>\s*onClick={() => setServicesOpen\(\!servicesOpen\)}\s*className="[^"]*"><\/button>\s*<span className="flex items-center space-x-2"><\/span>\s*<Zap[^>]*\/>\s*<span>Emerging Tech<\/span>\s*<\/span>\s*<ChevronDown[^>]*\/>\s*<\/button>/gs,
        replacement: `<button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                  <span className="flex items-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span>Emerging Tech</span>
                  </span>
                  <ChevronDown className={\`w-4 h-4 transition-transform duration-300 \${servicesOpen ? 'rotate-180' : ''}\`} />
                </button>`
      }
    ];
    
    let fixed = false;
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        fixed = true;
      }
    }
    
    if (fixed) {
      fs.writeFileSync('app/components/Navigation.tsx', content);
      console.log('Fixed mobile navigation syntax errors');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error('Error fixing mobile navigation:', error.message);
    return false;
  }
}

// Main execution
console.log('Fixing mobile navigation...');
const success = fixMobileNavigation();
if (success) {
  console.log('Mobile navigation fixes completed!');
} else {
  console.log('No fixes needed or error occurred');
}