const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all AI page files
const files = glob.sync('app/**/ai-*/page.tsx');

console.log(`Found ${files.length} AI page files to check`);

let fixedCount = 0;

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    // Check if this file has JSX elements in data structures
    const hasJSXInData = /icon: \s*<[^>]+className="[^"]*"\s*\/>/.test(content);
    
    if (hasJSXInData) {
      console.log(`Fixing JSX in data structure,
  s: ${file}`);
      
      // Replace JSX elements in data structures with iconType strings
      content = content.replace(
        /icon:\s*<(\w+)\s+className="[^"]*"\s*\/>/g,
        'iconType: \'$1\''
      );
      
      // Update the rendering logic to use iconType
      content = content.replace(
        /<(\w+)\.icon\s+className="[^"]*"\s*\/>/g,
        (match, variableName) => {
          return `{${variableName}.iconType === 'Zap' && <Zap className="w-8 h-8 text-cyan-400" />}
                  {${variableName}.iconType === 'Globe' && <Globe className="w-8 h-8 text-green-400" />}
                  {${variableName}.iconType === 'BarChart' && <BarChart className="w-8 h-8 text-purple-400" />}
                  {${variableName}.iconType === 'Brain' && <Brain className="w-8 h-8 text-orange-400" />}
                  {${variableName}.iconType === 'Workflow' && <Workflow className="w-8 h-8 text-blue-400" />}
                  {${variableName}.iconType === 'Settings' && <Settings className="w-8 h-8 text-indigo-400" />}
                  {${variableName}.iconType === 'Users' && <Users className="w-6 h-6 text-blue-400" />}
                  {${variableName}.iconType === 'Target' && <Target className="w-6 h-6 text-green-400" />}
                  {${variableName}.iconType === 'ShoppingCart' && <ShoppingCart className="w-6 h-6 text-purple-400" />}
                  {${variableName}.iconType === 'MessageCircle' && <MessageCircle className="w-6 h-6 text-purple-400" />}
                  {${variableName}.iconType === 'Server' && <Server className="w-6 h-6" />}
                  {${variableName}.iconType === 'Clock' && <Clock className="w-6 h-6" />}`;
        }
      );
      
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(file, content);
      console.log(`Fixed: ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files`);