#!/usr/bin/env node

import fs from 'fs';

// Function to fix Navigation.tsx syntax errors
function fixNavigation() {
  try {
    let content = fs.readFileSync('app/components/Navigation.tsx', 'utf8');
    
    // Fix button elements with broken syntax
    const fixes = [
      // Fix AI Services button
      {
        pattern: /<button>\s*onClick={toggleAiServices}\s*className="[^"]*"><\/button>\s*<Brain[^>]*\/>\s*<span>AI Services<\/span>\s*<ChevronDown[^>]*\/>\s*<\/button>/gs,
        replacement: `<button
                onClick={toggleAiServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className={\`w-4 h-4 transition-transform duration-300 \${aiServicesOpen ? 'rotate-180' : ''}\`} />
              </button>`
      },
      // Fix IT Services button
      {
        pattern: /<button>\s*onClick={toggleItServices}\s*className="[^"]*"><\/button>\s*<Cloud[^>]*\/>\s*<span>IT Services<\/span>\s*<ChevronDown[^>]*\/>\s*<\/button>/gs,
        replacement: `<button
                onClick={toggleItServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                <Cloud className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className={\`w-4 h-4 transition-transform duration-300 \${itServicesOpen ? 'rotate-180' : ''}\`} />
              </button>`
      },
      // Fix Micro SAAS button
      {
        pattern: /<button>\s*onClick={toggleMicroSaas}\s*className="[^"]*"><\/button>\s*<Cpu[^>]*\/>\s*<span>Micro SAAS<\/span>\s*<ChevronDown[^>]*\/>\s*<\/button>/gs,
        replacement: `<button
                onClick={toggleMicroSaas}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                <Cpu className="w-4 h-4" />
                <span>Micro SAAS</span>
                <ChevronDown className={\`w-4 h-4 transition-transform duration-300 \${microSaasOpen ? 'rotate-180' : ''}\`} />
              </button>`
      },
      // Fix Emerging Tech button
      {
        pattern: /<button>\s*onClick={toggleServices}\s*className="[^"]*"><\/button>\s*<Zap[^>]*\/>\s*<span>Emerging Tech<\/span>\s*<ChevronDown[^>]*\/>\s*<\/button>/gs,
        replacement: `<button
                onClick={toggleServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                <Zap className="w-4 h-4" />
                <span>Emerging Tech</span>
                <ChevronDown className={\`w-4 h-4 transition-transform duration-300 \${servicesOpen ? 'rotate-180' : ''}\`} />
              </button>`
      },
      // Fix Link elements with broken syntax
      {
        pattern: /<Link>\s*key={([^}]+)}\s*to={([^}]+)}\s*className="([^"]*)"\s*onClick={([^}]+)}\s*>/gs,
        replacement: `<Link
                        key={$1}
                        to={$2}
                        className="$3"
                        onClick={$4}>`
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
      console.log('Fixed Navigation.tsx syntax errors');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error('Error fixing Navigation.tsx:', error.message);
    return false;
  }
}

// Main execution
console.log('Fixing Navigation.tsx...');
const success = fixNavigation();
if (success) {
  console.log('Navigation.tsx fixes completed!');
} else {
  console.log('No fixes needed or error occurred');
}