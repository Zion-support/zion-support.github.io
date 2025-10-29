const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/TSX files in the app directory
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: __dirname });

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix icon rendering patterns
  const patterns = [
    // Pattern 1: {stat.icon} -> <stat.icon className="w-8 h-8 text-white" />
    {
      regex: /(\s+)(\{stat\.icon\})/g,
      replacement: '$1<stat.icon className="w-8 h-8 text-white" />'
    },
    // Pattern 2: {feature.icon} -> <feature.icon className="w-12 h-12 text-cyan-400" />
    {
      regex: /(\s+)(\{feature\.icon\})/g,
      replacement: '$1<feature.icon className="w-12 h-12 text-cyan-400" />'
    },
    // Pattern 3: {useCase.icon} -> <useCase.icon className="w-12 h-12 text-purple-400" />
    {
      regex: /(\s+)(\{useCase\.icon\})/g,
      replacement: '$1<useCase.icon className="w-12 h-12 text-purple-400" />'
    },
    // Pattern 4: {category.icon} -> <category.icon className="w-8 h-8 text-cyan-400" />
    {
      regex: /(\s+)(\{category\.icon\})/g,
      replacement: '$1<category.icon className="w-8 h-8 text-cyan-400" />'
    },
    // Pattern 5: {demo.icon} -> <demo.icon className="w-8 h-8 text-cyan-400" />
    {
      regex: /(\s+)(\{demo\.icon\})/g,
      replacement: '$1<demo.icon className="w-8 h-8 text-cyan-400" />'
    },
    // Pattern 6: {service.icon} -> <service.icon className="w-8 h-8 text-cyan-400" />
    {
      regex: /(\s+)(\{service\.icon\})/g,
      replacement: '$1<service.icon className="w-8 h-8 text-cyan-400" />'
    },
    // Pattern 7: {plan.icon} -> <plan.icon className="w-8 h-8 text-cyan-400" />
    {
      regex: /(\s+)(\{plan\.icon\})/g,
      replacement: '$1<plan.icon className="w-8 h-8 text-cyan-400" />'
    },
    // Pattern 8: {item.icon} -> <item.icon className="w-8 h-8 text-cyan-400" />
    {
      regex: /(\s+)(\{item\.icon\})/g,
      replacement: '$1<item.icon className="w-8 h-8 text-cyan-400" />'
    }
  ];
  
  let modified = false;
  patterns.forEach(pattern => {
    if (pattern.regex.test(content)) {
      content = content.replace(pattern.regex, pattern.replacement);
      modified = true;
    }
  });
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed icon rendering in: ${file}`);
  }
});

console.log('Icon rendering fixes completed!');