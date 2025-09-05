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

files.forEach(file => {
  try {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf8');
      let modified = false;
      
      // Fix hover syntax
      if (content.includes('"hover":')) {
        content = content.replace(/"hover":\s*/g, 'hover:');
        modified = true;
      }
      
      // Fix focus syntax
      if (content.includes('"focus":')) {
        content = content.replace(/"focus":\s*/g, 'focus:');
        modified = true;
      }
      
      // Fix group-hover syntax
      if (content.includes('"group-hover":')) {
        content = content.replace(/"group-hover":\s*/g, 'group-hover:');
        modified = true;
      }
      
      // Fix responsive breakpoints
      if (content.includes('"sm":')) {
        content = content.replace(/"sm":\s*/g, 'sm:');
        modified = true;
      }
      
      if (content.includes('"md":')) {
        content = content.replace(/"md":\s*/g, 'md:');
        modified = true;
      }
      
      if (content.includes('"lg":')) {
        content = content.replace(/"lg":\s*/g, 'lg:');
        modified = true;
      }
      
      if (content.includes('"xl":')) {
        content = content.replace(/"xl":\s*/g, 'xl:');
        modified = true;
      }
      
      // Fix animation properties
      if (content.includes('"y":')) {
        content = content.replace(/"y":\s*/g, 'y:');
        modified = true;
      }
      
      if (content.includes('"opacity":')) {
        content = content.replace(/"opacity":\s*/g, 'opacity:');
        modified = true;
      }
      
      if (content.includes('"duration":')) {
        content = content.replace(/"duration":\s*/g, 'duration:');
        modified = true;
      }
      
      if (content.includes('"delay":')) {
        content = content.replace(/"delay":\s*/g, 'delay:');
        modified = true;
      }
      
      if (content.includes('"once":')) {
        content = content.replace(/"once":\s*/g, 'once:');
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(file, content);
        console.log(`✅ Fixed ${file}`);
      }
    }
  } catch (error) {
    console.log(`❌ Error fixing ${file}: ${error.message}`);
  }
}
});

console.log('✅ Syntax fixes completed!');
console.log('🎉 Ready for merge process!');
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')
const util = require('util')
    this.projectRoot = path.join(__dirname, '..')
  async log(message, level = 'INFO')
      const { stdout } = await execAsync('git diff --name-only --diff-filter=U')
      return stdout.trim().split('\n')
      await this.log(`Error finding conflicted "files"`)
      await this.log(`Encountered ${this.errors.length} "errors"`)
    console.log('You can now commit the changes "with": git add . && git commit -m "Resolve merge conflicts")
cursor/fix-lint-push-and-merge-to-main-f3c1;
