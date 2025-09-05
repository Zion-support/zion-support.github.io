#!/usr/bin/env node

const fs = require('fs');

console.log('🔧 Immediate merge fix - resolving syntax errors...');

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
        { from: /"once":\s*/g, to: 'once:' },
        { from: /"col-span":\s*/g, to: 'col-span:' },
        { from: /"text-center":\s*/g, to: 'text-center:' },
        { from: /"bg-white":\s*/g, to: 'bg-white:' },
        { from: /"p-6":\s*/g, to: 'p-6:' },
        { from: /"rounded-lg":\s*/g, to: 'rounded-lg:' },
        { from: /"shadow-lg":\s*/g, to: 'shadow-lg:' },
        { from: /"overflow-hidden":\s*/g, to: 'overflow-hidden:' },
        { from: /"transition-shadow":\s*/g, to: 'transition-shadow:' },
        { from: /"transition-colors":\s*/g, to: 'transition-colors:' },
        { from: /"transition-all":\s*/g, to: 'transition-all:' },
        { from: /"duration-300":\s*/g, to: 'duration-300:' },
        { from: /"group":\s*/g, to: 'group:' },
        { from: /"w-full":\s*/g, to: 'w-full:' },
        { from: /"px-4":\s*/g, to: 'px-4:' },
        { from: /"py-3":\s*/g, to: 'py-3:' },
        { from: /"border":\s*/g, to: 'border:' },
        { from: /"border-gray-300":\s*/g, to: 'border-gray-300:' },
        { from: /"rounded-lg":\s*/g, to: 'rounded-lg:' },
        { from: /"outline-none":\s*/g, to: 'outline-none:' },
        { from: /"ring-2":\s*/g, to: 'ring-2:' },
        { from: /"ring-blue-500":\s*/g, to: 'ring-blue-500:' },
        { from: /"border-transparent":\s*/g, to: 'border-transparent:' },
        { from: /"bg-blue-600":\s*/g, to: 'bg-blue-600:' },
        { from: /"text-white":\s*/g, to: 'text-white:' },
        { from: /"py-2":\s*/g, to: 'py-2:' },
        { from: /"px-4":\s*/g, to: 'px-4:' },
        { from: /"font-semibold":\s*/g, to: 'font-semibold:' },
        { from: /"inline-flex":\s*/g, to: 'inline-flex:' },
        { from: /"items-center":\s*/g, to: 'items-center:' },
        { from: /"justify-center":\s*/g, to: 'justify-center:' },
        { from: /"text-sm":\s*/g, to: 'text-sm:' },
        { from: /"px-3":\s*/g, to: 'px-3:' },
        { from: /"py-2":\s*/g, to: 'py-2:' },
        { from: /"bg-white":\s*/g, to: 'bg-white:' },
        { from: /"border-gray-300":\s*/g, to: 'border-gray-300:' },
        { from: /"rounded-md":\s*/g, to: 'rounded-md:' },
        { from: /"bg-gray-50":\s*/g, to: 'bg-gray-50:' },
        { from: /"text-blue-600":\s*/g, to: 'text-blue-600:' },
        { from: /"mb-4":\s*/g, to: 'mb-4:' },
        { from: /"group-hover":\s*/g, to: 'group-hover:' },
        { from: /"text-purple-600":\s*/g, to: 'text-purple-600:' },
        { from: /"transition-colors":\s*/g, to: 'transition-colors:' }
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
console.log('🎉 Immediate merge fix completed!');