#!/usr/bin/env node

const fs = require('fs');

console.log('🔧 Quick syntax fix...');

// Fix the specific files we know have issues
const fixes = [
  {
    file: 'components/Footer.tsx',
    patterns: [
      { from: /"hover":\s*/g, to: 'hover:' },
      { from: /"md":\s*/g, to: 'md:' },
      { from: /"lg":\s*/g, to: 'lg:' }
    ]
  },
  {
    file: 'components/Header.tsx', 
    patterns: [
      { from: /"hover":\s*/g, to: 'hover:' },
      { from: /"sm":\s*/g, to: 'sm:' },
      { from: /"lg":\s*/g, to: 'lg:' }
    ]
  },
  {
    file: 'pages/about.tsx',
    patterns: [
      { from: /"hover":\s*/g, to: 'hover:' },
      { from: /"y":\s*/g, to: 'y:' },
      { from: /"opacity":\s*/g, to: 'opacity:' },
      { from: /"duration":\s*/g, to: 'duration:' },
      { from: /"delay":\s*/g, to: 'delay:' },
      { from: /"once":\s*/g, to: 'once:' }
    ]
  },
  {
    file: 'pages/ai-services.tsx',
    patterns: [
      { from: /"hover":\s*/g, to: 'hover:' },
      { from: /"group-hover":\s*/g, to: 'group-hover:' },
      { from: /"y":\s*/g, to: 'y:' },
      { from: /"opacity":\s*/g, to: 'opacity:' },
      { from: /"duration":\s*/g, to: 'duration:' },
      { from: /"delay":\s*/g, to: 'delay:' },
      { from: /"once":\s*/g, to: 'once:' }
    ]
  },
  {
    file: 'pages/blog.tsx',
    patterns: [
      { from: /"hover":\s*/g, to: 'hover:' },
      { from: /"y":\s*/g, to: 'y:' },
      { from: /"opacity":\s*/g, to: 'opacity:' },
      { from: /"duration":\s*/g, to: 'duration:' },
      { from: /"delay":\s*/g, to: 'delay:' },
      { from: /"once":\s*/g, to: 'once:' }
    ]
  },
  {
    file: 'pages/contact.tsx',
    patterns: [
      { from: /"focus":\s*/g, to: 'focus:' }
    ]
  },
  {
    file: 'pages/index.tsx',
    patterns: [
      { from: /"hover":\s*/g, to: 'hover:' },
      { from: /"group-hover":\s*/g, to: 'group-hover:' },
      { from: /"y":\s*/g, to: 'y:' },
      { from: /"opacity":\s*/g, to: 'opacity:' },
      { from: /"duration":\s*/g, to: 'duration:' },
      { from: /"delay":\s*/g, to: 'delay:' },
      { from: /"once":\s*/g, to: 'once:' }
    ]
  }
];

let totalFixed = 0;

fixes.forEach(fix => {
  try {
    if (fs.existsSync(fix.file)) {
      let content = fs.readFileSync(fix.file, 'utf8');
      let modified = false;
      
      fix.patterns.forEach(pattern => {
        if (pattern.from.test(content)) {
          content = content.replace(pattern.from, pattern.to);
          modified = true;
        }
      });
      
      if (modified) {
        fs.writeFileSync(fix.file, content);
        console.log(`✅ Fixed ${fix.file}`);
        totalFixed++;
      }
    } else {
      console.log(`⚠️ File not found: ${fix.file}`);
    }
  } catch (error) {
    console.log(`❌ Error fixing ${fix.file}: ${error.message}`);
  }
});

console.log(`✅ Fixed ${totalFixed} files`);
console.log('🎉 Quick syntax fix completed!');