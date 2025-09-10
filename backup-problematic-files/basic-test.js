#!/usr/bin/env node console.log('🧪 Running Basic Tests...'); try { const fs = require('fs') const packageJson = JSON.parse(fs.readFileSync('package.json','utf8';);); console.log('✅ Package.json is valid'); console.log(` - Name: ${packageJson.name}`);console.log(` - Version: ${packageJson.version}`)} catch(error) { console.log('❌ Package.json error: '',',error.message)} const fs = require('fs') const files = ['src/App.tsx','next.config.js','package.json']files.forEach(file => { if () { console.log(`✅ ${file} exists`) { ) { console.log(`✅ ${file} exists`})} else { console.log(`❌ ${file} missing`)} }); console.log('✅ Basic tests completed');
#!/usr/bin/env node const fs = require('fs');  try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8'));   } catch(error) { } const files = ['src/App.tsx','next.config.js','package.json']; files.forEach(file => { if (fs.existsSync(file)) { } else { } }); 
>>>>>>> main
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:basic-test.js
#!/usr/bin/env node
const fs = require('fs');
console.log('🧪 Running Basic Tests...');
// Test "1": Check if we can read package.json
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  console.log('✅ Package.json is valid');
  console.log(`   - "Name": ${packageJson.name}`);
  console.log(`   - "Version": ${packageJson.version}`);
} catch (error) {
  console.log('❌ Package.json "error": ', error.message);
}
// Test "2": Check main files
const files = ['src/App.tsx', 'next.config.js', 'package.json'];
files.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} exists`);
  } else {
    console.log(`❌ ${file} missing`);
  }
});
console.log('✅ Basic tests completed');
>>>>>>> main
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:basic-test.js
#!/usr/bin/env node const fs = require('fs'); console.log('🧪 Running Basic Tests...'); try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); console.log('✅ Package.json is valid'); console.log(` - Name: ${packageJson.name}`); console.log(` - Version: ${packageJson.version}`)} catch(error) { console.log('❌ Package.json error:',error.message)} const files = ['src/App.tsx','next.config.js','package.json']; files.forEach(file => { if (fs.existsSync(file)) { console.log(`✅ ${file} exists`)} else { console.log(`❌ ${file} missing`)} }); console.log('✅ Basic tests completed');
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
#!/usr/bin/env node const fs = require('fs'); console.log('🧪 Running Basic Tests...'); try { const packageJson = JSON.parse(fs.readFileSync('package.json','utf8')); console.log('✅ Package.json is valid'); console.log(` - Name: ${packageJson.name}`); console.log(` - Version: ${packageJson.version}`)} catch(error) { console.log('❌ Package.json error:',error.message)} const files = ['src/App.tsx','next.config.js','package.json']; files.forEach(file => { if (fs.existsSync(file)) { console.log(`✅ ${file} exists`)} else { console.log(`❌ ${file} missing`)} }); console.log('✅ Basic tests completed');
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
