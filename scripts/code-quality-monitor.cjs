const { execSync } = require('child_process');
const fs = require('fs');

console.log('📝 Code Quality Monitor Starting...');

const qualityChecks = [
  {
    name: 'ESLint check',
    check: () => {
      try {
        console.log('🔍 Running ESLint...');
        execSync('npm run lint', { stdio: 'pipe' });
        console.log('✅ No ESLint errors found');
        return true;
      } catch (error) {
        console.log('⚠️  ESLint errors detected. Run "npm run lint:fix" to fix automatically.');
        return false;
      }
    }
  },
  {
    name: 'TypeScript check',
    check: () => {
      try {
        console.log('🔍 Running TypeScript check...');
        execSync('npm run type-check', { stdio: 'pipe' });
        console.log('✅ No TypeScript errors found');
        return true;
      } catch (error) {
        console.log('⚠️  TypeScript errors detected. Please fix type issues.');
        return false;
      }
    }
  },
  {
    name: 'Test coverage check',
    check: () => {
      try {
        console.log('🔍 Running tests...');
        execSync('npm run test:smoke', { stdio: 'pipe' });
        console.log('✅ Tests passing');
        return true;
      } catch (error) {
        console.log('⚠️  Tests failing. Please fix test issues.');
        return false;
      }
    }
  },
  {
    name: 'File structure check',
    check: () => {
      const requiredFiles = [
        'package.json',
        'tsconfig.json',
        'next.config.ts',
        'App.tsx'
      ];
      
      const missingFiles = requiredFiles.filter(file => !fs.existsSync(file));
      
      if (missingFiles.length > 0) {
        console.log(`⚠️  Missing required files: ${missingFiles.join(', ')}`);
        return false;
      }
      
      console.log('✅ All required files present');
      return true;
    }
  },
  {
    name: 'Import/Export consistency check',
    check: () => {
      const srcFiles = [];
      
      function findTsxFiles(dir) {
        if (!fs.existsSync(dir)) return;
        
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          const filePath = `${dir}/${file}`;
          const stat = fs.statSync(filePath);
          
          if (stat.isDirectory()) {
            findTsxFiles(filePath);
          } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            srcFiles.push(filePath);
          }
        });
      }
      
      findTsxFiles('src');
      findTsxFiles('components');
      findTsxFiles('.');
      
      let hasIssues = false;
      
      srcFiles.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        
        lines.forEach((line, index) => {
          // Check for unused imports
          if (line.trim().startsWith('import ') && !line.includes('//')) {
            const importName = line.match(/import\s+.*?\s+from/);
            if (importName) {
              const name = importName[0].replace(/import\s+/, '').replace(/\s+from/, '');
              const isUsed = content.includes(name.replace(/\{|\}/g, '').split(',')[0].trim());
              if (!isUsed && !name.includes('*')) {
                console.log(`⚠️  Potentially unused import in ${file}:${index + 1} - ${name}`);
                hasIssues = true;
              }
            }
          }
        });
      });
      
      return !hasIssues;
    }
  }
];

let passed = 0;
let failed = 0;

qualityChecks.forEach(check => {
  try {
    if (check.check()) {
      console.log(`✅ ${check.name}`);
      passed++;
    } else {
      console.log(`❌ ${check.name}`);
      failed++;
    }
  } catch (error) {
    console.log(`❌ ${check.name} - Error: ${error.message}`);
    failed++;
  }
});

console.log(`\n📝 Code Quality Results: ${passed} passed, ${failed} failed`);

if (failed === 0) {
  console.log('🎉 All code quality checks passed!');
} else {
  console.log('⚠️  Code quality issues detected. Please review and fix.');
}
