const fs = require('fs');
const path = require('path');

function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing anchor tags in CTA section
    const ctaPattern = /<div className="flex flex-col sm:flex-row gap-4 justify-center">\s*\n\s*Start Your Project\s*\n\s*<\/a>\s*\n\s*Learn More\s*\n\s*<\/a>/gs;
    const ctaReplacement = `<div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Project
              </a>
              <a
                href="/services"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </a>`;
    
    if (ctaPattern.test(content)) {
      content = content.replace(ctaPattern, ctaReplacement);
      modified = true;
    }
    
    // Fix broken features map patterns
    const featuresPattern = /<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">\s*<div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">\s*<feature\.icon className="w-8 h-8 text-white" \/>\s*<\/div>\s*<h3 className="text-xl font-semibold text-white mb-3">\s*{feature\.title}\s*<\/h3>\s*<p className="text-gray-300">{feature\.description}<\/p>\s*<\/div>\s*\)\)}/gs;
    const featuresReplacement = `{features.map((feature, index) => (
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
    
    if (featuresPattern.test(content)) {
      content = content.replace(featuresPattern, featuresReplacement);
      modified = true;
    }
    
    if (modified) {
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