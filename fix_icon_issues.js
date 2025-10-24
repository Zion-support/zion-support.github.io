const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all page.tsx files
const files = glob.sync('app/**/page.tsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;

  // Fix icon rendering issues
  const iconPatterns = [
    { pattern: /\{([^}]*\.icon)\}/g, replacement: '<$1 className="w-6 h-6 text-cyan-400" />' },
    { pattern: /\{stat\.icon\}/g, replacement: '<stat.icon className="w-8 h-8 text-white" />' },
    { pattern: /\{feature\.icon\}/g, replacement: '<feature.icon className="w-6 h-6 text-cyan-400" />' },
    { pattern: /\{useCase\.icon\}/g, replacement: '<useCase.icon className="w-6 h-6 text-cyan-400" />' },
    { pattern: /\{category\.icon\}/g, replacement: '<category.icon className="w-8 h-8 text-cyan-400" />' },
    { pattern: /\{plan\.icon\}/g, replacement: '<plan.icon className="w-6 h-6 text-cyan-400" />' },
    { pattern: /\{service\.icon\}/g, replacement: '<service.icon className="w-6 h-6 text-cyan-400" />' }
  ];

  iconPatterns.forEach(({ pattern, replacement }) => {
    if (pattern.test(content)) {
      content = content.replace(pattern, replacement);
      modified = true;
    }
  });

  if (modified) {
    fs.writeFileSync(file, content);
    console.log(`Fixed icon issues in ${file}`);
  }
});

console.log('Icon fixes completed!');