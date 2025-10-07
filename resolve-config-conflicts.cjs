const fs = require('fs');

function resolveConfigConflicts() {
  // Fix eslint.config.js
  let eslintContent = fs.readFileSync('eslint.config.js', 'utf8');
  
  // Remove merge conflict markers and combine the best of both
  eslintContent = eslintContent.replace(/\n.*?\n\n.*?\n  
  // Fix the files configuration to include both src and app
  eslintContent = eslintContent.replace(
    /files: \["app\/\*\*\/\*\.\{ts,tsx\}"\]/,
    'files: ["src/**/*.{ts,tsx}", "app/**/*.{ts,tsx}"]'
  );
  
  fs.writeFileSync('eslint.config.js', eslintContent);
  console.log('Fixed eslint.config.js');
  
  // Fix package.json
  let packageContent = fs.readFileSync('package.json', 'utf8');
  
  // Remove merge conflict markers and use the src/ approach
  packageContent = packageContent.replace(/\n.*?\n\n.*?\n  packageContent = packageContent.replace(
    /"lint": "eslint app\/ --ext \.ts,\.tsx,\.js,\.jsx --max-warnings 0"/,
    '"lint": "eslint src/ --ext .ts,.tsx,.js,.jsx --max-warnings 0"'
  );
  
  fs.writeFileSync('package.json', packageContent);
  console.log('Fixed package.json');
  
  // Fix tsconfig.json
  let tsconfigContent = fs.readFileSync('tsconfig.json', 'utf8');
  
  // Remove merge conflict markers and use both src and app
  tsconfigContent = tsconfigContent.replace(/\n.*?\n\n.*?\n  tsconfigContent = tsconfigContent.replace(
    /"include": \["app"\]/,
    '"include": ["src", "app"]'
  );
  
  // Fix the exclude section
  tsconfigContent = tsconfigContent.replace(
    /"exclude": \[\s*"app\/blog\/\*\*\/\*",\s*"app\/components\/NewContentPromotionalBanner2026\.tsx",\s*"app\/components\/NewestContent2025Banner\.tsx",\s*"app\/components\/UltimateBusinessIntelligence2025Banner\.tsx",\s*"app\/components\/UltimateBusinessIntelligenceShowcase2025\.tsx",\s*"app\/components\/September30NewContent2025Banner\.tsx",/,
    '"exclude": [\n    "app/blog/**/*",\n    "app/components/**/*",'
  );
  
  fs.writeFileSync('tsconfig.json', tsconfigContent);
  console.log('Fixed tsconfig.json');
  
  console.log('All configuration conflicts resolved!');
}

resolveConfigConflicts();