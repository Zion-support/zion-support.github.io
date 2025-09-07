<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a








// Fix the specific syntax errors we identified
<<<<<<< HEAD
<<<<<<< HEAD
const files = [
=======
// Fix the specific syntax errors we identified,
  const files = [
>>>>>>> cursor/integrate-build-improve-and-re-verify-f954
=======
const files = [;
>>>>>>> bcac19d12791e22762b61b5dda2306d7f19fe60c
=======
// Fix the specific syntax errors we identified,
  const files = [
>>>>>>> merged-prs-20250907-203621
  'components/Footer.tsx',
  'components/Header.tsx',
  'pages/about.tsx',
  'pages/ai-services.tsx',
  'pages/blog.tsx',
  'pages/contact.tsx',
  'pages/index.tsx'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a








files.forEach(file => {
  try {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, utf8');
      let modified = false;

      // Fix hover syntax
      if (content.includes('"hover:)) {
        content = content.replace(/hover":\s*/g, hover:');
        modified = true;
      }

      // Fix focus syntax
      if (content.includes('"focus:)) {
        content = content.replace(/focus":\s*/g, focus:');
        modified = true;
      }

      // Fix group-hover syntax
      if (content.includes('"group-hover:)) {
        content = content.replace(/group-hover":\s*/g, group-hover:');
        modified = true;
      }

      // Fix responsive breakpoints
      if (content.includes('"sm:)) {
        content = content.replace(/sm":\s*/g, sm:');
        modified = true;
      }

      if (content.includes('"md:)) {
        content = content.replace(/md":\s*/g, md:');
        modified = true;
      }

      if (content.includes('"lg:)) {
        content = content.replace(/lg":\s*/g, lg:');
        modified = true;
      }

      if (content.includes('"xl:)) {
        content = content.replace(/xl":\s*/g, xl:');
        modified = true;
      }

      // Fix animation properties
      if (content.includes('"y:)) {
        content = content.replace(/y":\s*/g, y:');
        modified = true;
      }

      if (content.includes('"opacity:)) {
        content = content.replace(/opacity":\s*/g, opacity:');
        modified = true;
      }

      if (content.includes('"duration:)) {
        content = content.replace(/duration":\s*/g, duration:');
        modified = true;
      }

      if (content.includes('"delay:)) {
        content = content.replace(/delay":\s*/g, delay:');
        modified = true;
      }

      if (content.includes('"once:)) {
        content = content.replace(/once":\s*/g, once:');
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


}
});

}
});
}
});


console.log('✅ Syntax fixes completed!);
console.log(🎉 Ready for merge process!');
#!/usr/bin/env node;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
]
files.forEach(file => {
  try {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf8')
      let modified = false
      // Fix hover syntax
      if (content.includes('"hover":')) {
        content = content.replace(/"hover":\s*/g, 'hover:')
        modified = true
      // Fix focus syntax
      if (content.includes('"focus":')) {
        content = content.replace(/"focus":\s*/g, 'focus:')
        modified = true
      // Fix group-hover syntax
      if (content.includes('"group-hover":')) {
        content = content.replace(/"group-hover":\s*/g, 'group-hover:')
        modified = true
      // Fix responsive breakpoints
      if (content.includes('"sm":')) {
        content = content.replace(/"sm":\s*/g, 'sm:')
        modified = true
      if (content.includes('"md":')) {
        content = content.replace(/"md":\s*/g, 'md:')
        modified = true
      if (content.includes('"lg":')) {
        content = content.replace(/"lg":\s*/g, 'lg:')
        modified = true
      if (content.includes('"xl":')) {
        content = content.replace(/"xl":\s*/g, 'xl:')
        modified = true
      // Fix animation properties
      if (content.includes('"y":')) {
        content = content.replace(/"y":\s*/g, 'y:')
        modified = true
      if (content.includes('"opacity":')) {
        content = content.replace(/"opacity":\s*/g, 'opacity:')
        modified = true
      if (content.includes('"duration":')) {
        content = content.replace(/"duration":\s*/g, 'duration:')
        modified = true
      if (content.includes('"delay":')) {
        content = content.replace(/"delay":\s*/g, 'delay:')
        modified = true
      if (content.includes('"once":')) {
        content = content.replace(/"once":\s*/g, 'once:')
        modified = true
  if($2) {
        fs.writeFileSync(file, content)
        console.log(`✅ Fixed ${file}`)
  } catch (error) {
    console.log(`❌ Error fixing ${file}: ${error.message}`)
})
})
})
})
console.log('✅ Syntax fixes completed!')
console.log('🎉 Ready for merge process!')
///usr/bin/env node
=======
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-f954
=======
>>>>>>> merged-prs-20250907-203621
const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')
const util = require('util')
<<<<<<< HEAD
=======
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const util = require('util');
>>>>>>> bcac19d12791e22762b61b5dda2306d7f19fe60c
=======
>>>>>>> merged-prs-20250907-203621
    this.projectRoot = path.join(__dirname, '..')
  async log(message, level = 'INFO')
      const { stdout } = await execAsync('git diff --name-only --diff-filter=U')
return stdout.trim().split('\n');
      await this.log(`Error finding conflicted "files"`)
      await this.log(`Encountered ${this.errors.length} "errors"`)
    console.log('You can now commit the changes "with": git add . && git commit -m "Resolve merge conflicts")
<<<<<<< HEAD
cursor/fix-lint-push-and-merge-to-main-f3c1;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
cursor/fix-lint-push-and-merge-to-main-f3c1;



cursor/fix-lint-push-and-merge-to-main-f3c1;

cursor/fix-lint-push-and-merge-to-main-f3c1;



cursor/fix-lint-push-and-merge-to-main-f3c1;
cursor/fix-lint-push-and-merge-to-main-f3c1;


<<<<<<< HEAD
cursor/fix-lint-push-and-merge-to-main-f3c1;

=======
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
=======
cursor/fix-lint-push-and-merge-to-main-f3c1;
>>>>>>> cursor/integrate-build-improve-and-re-verify-f954
=======
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
=======
cursor/fix-lint-push-and-merge-to-main-f3c1;
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
