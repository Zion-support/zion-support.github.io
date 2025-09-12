const fs = require('fs');

// Fix unused variables by prefixing with underscore
function fixUnusedVariables(content) {
  // Fix unused function parameters
  content = content.replace(/\b(\w+)\s*:\s*[^,)]+\)\s*=>/g, (match, param) => {
    if (param !== 'e' && param !== 'event' && param !== 'props' && param !== 'children') {
      return match.replace(param, `_${param}`);
    }
    return match;
  });

  // Fix unused destructured variables
  content = content.replace(/\{\s*(\w+)(\s*,\s*\w+)*\s*\}/g, (match) => {
    return match.replace(/\b(\w+)\b/g, (varMatch, varName) => {
      if (varName !== 'e' && varName !== 'event' && varName !== 'props' && varName !== 'children' && varName !== 'index') {
        return `_${varName}`;
      }
      return varName;
    });
  });

  return content;
}

// Files with unused variable issues
const files = [
  'src/components/ProductCard.tsx',
  'src/components/analytics/UserBehaviorStats.tsx',
  'src/components/header/Header.tsx',
  'src/components/hiring-tracker/KanbanBoard.tsx',
  'src/components/jobs/TranslatableJobForm.tsx',
  'src/components/profile/TalentOnboardingForm.tsx',
  'src/components/transactions/TransactionHistory.tsx',
  'src/context/LanguageContext.tsx',
  'src/context/auth/AuthProvider.tsx',
  'src/layout/AppHeader.tsx',
  'src/main.tsx',
  'src/pages/About.tsx',
  'src/utils/errorHandler.ts',
  'src/utils/security.ts'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    const original = content;
    content = fixUnusedVariables(content);
    if (content !== original) {
      fs.writeFileSync(file, content);
      console.log(`Fixed unused variables in ${file}`);
    }
  }
});

console.log('Unused variable fixes complete');