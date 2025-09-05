#!/usr/bin/env node

const fs = require('fs');

console.log('🔧 Merge fix - resolving syntax errors...');

// Fix the specific syntax errors we identified
const files = [
  'components/Footer.tsx',
  'components/Header.tsx',
  'pages/about.tsx',
  'pages/ai-services.tsx',
  'pages/blog.tsx',
  'pages/contact.tsx',
  'pages/index.tsx'
];

let totalFixed = 0;

files.forEach(file => {
  try {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf8');
      let modified = false;
      
      // Fix all the syntax patterns we identified
      const patterns = [
        { from: /"hover":\s*/g, to: 'hover:' },
        { from: /"focus":\s*/g, to: 'focus:' },
        { from: /"group-hover":\s*/g, to: 'group-hover:' },
        { from: /"sm":\s*/g, to: 'sm:' },
        { from: /"md":\s*/g, to: 'md:' },
        { from: /"lg":\s*/g, to: 'lg:' },
        { from: /"xl":\s*/g, to: 'xl:' },
        { from: /"2xl":\s*/g, to: '2xl:' },
        { from: /"y":\s*/g, to: 'y:' },
        { from: /"opacity":\s*/g, to: 'opacity:' },
        { from: /"duration":\s*/g, to: 'duration:' },
        { from: /"delay":\s*/g, to: 'delay:' },
        { from: /"once":\s*/g, to: 'once:' }
      ];
      
      patterns.forEach(pattern => {
        if (pattern.from.test(content)) {
          content = content.replace(pattern.from, pattern.to);
          modified = true;
        }
      });
      
      if (modified) {
        fs.writeFileSync(file, content);
        console.log(`✅ Fixed ${file}`);
        totalFixed++;
      }
    }
  } catch (error) {
    console.log(`❌ Error fixing ${file}: ${error.message}`);
  }
});

console.log(`✅ Fixed ${totalFixed} files`);
console.log('🎉 Merge fix completed!');