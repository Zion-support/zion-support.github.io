const fs = require('fs');
const path = require('path');

function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the broken features map section
    const brokenPattern = /<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">\s*<div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">\s*<feature\.icon className="w-8 h-8 text-white" \/>\s*<\/div>\s*<h3 className="text-xl font-semibold text-white mb-3">\s*{feature\.title}\s*<\/h3>\s*<p className="text-gray-300">{feature\.description}<\/p>\s*<\/div>\s*\)\)}/gs;
    
    const fixedContent = `{features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-2xl p-8 backdrop-blur-lg border border-white/10 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}`;
    
    if (brokenPattern.test(content)) {
      content = content.replace(brokenPattern, fixedContent);
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixPages(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += findAndFixPages(filePath);
    } else if (file === 'page.tsx') {
      if (fixPageFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

const appDir = path.join(__dirname, 'app');
const fixedCount = findAndFixPages(appDir);
console.log(`Fixed ${fixedCount} page files`);