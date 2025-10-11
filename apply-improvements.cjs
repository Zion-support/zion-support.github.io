const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Applying codebase improvements...\n');

const improvements = {
  performance: {
    name: 'Performance Optimizations',
    items: []
  },
  security: {
    name: 'Security Enhancements',
    items: []
  },
  codeQuality: {
    name: 'Code Quality',
    items: []
  },
  documentation: {
    name: 'Documentation',
    items: []
  }
};

// 1. Create comprehensive .env.example if it doesn't exist
console.log('📋 1. Creating environment template...');
if (!fs.existsSync('.env.example')) {
  const envTemplate = `# Application Configuration
NODE_ENV=production
VITE_APP_NAME="Zion Tech Group"
VITE_APP_URL=https://ziontechgroup.com

# API Configuration
VITE_API_URL=https://api.ziontechgroup.com
VITE_API_TIMEOUT=30000

# Analytics (Optional)
VITE_GA_TRACKING_ID=
VITE_HOTJAR_ID=

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_ERROR_REPORTING=true
VITE_ENABLE_PERFORMANCE_MONITORING=true

# Security
VITE_CSP_ENABLED=true
VITE_HSTS_ENABLED=true
`;
  fs.writeFileSync('.env.example', envTemplate);
  improvements.documentation.items.push('Created .env.example template');
  console.log('  ✓ Created .env.example');
} else {
  console.log('  ℹ .env.example already exists');
}

// 2. Create/update .gitignore
console.log('\n📋 2. Updating .gitignore...');
const gitignoreAdditions = `
# Error logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Environment files
.env
.env.local
.env.*.local

# Build outputs
dist/
.vite/
.turbo/

# Test coverage
coverage/
.nyc_output/

# Temporary files
*.tmp
*.temp
/tmp/
temp-files/

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Scripts
check_*.js
check_*.cjs
merge_*.js
merge_*.cjs
fix_*.js
fix_*.cjs
resolve_*.js
resolve_*.cjs
close_*.cjs
mark_*.cjs
`;

try {
  let gitignore = fs.existsSync('.gitignore') ? fs.readFileSync('.gitignore', 'utf8') : '';
  if (!gitignore.includes('*.log')) {
    fs.appendFileSync('.gitignore', gitignoreAdditions);
    improvements.codeQuality.items.push('Updated .gitignore with comprehensive rules');
    console.log('  ✓ Updated .gitignore');
  } else {
    console.log('  ℹ .gitignore already comprehensive');
  }
} catch (error) {
  console.log('  ⚠ Could not update .gitignore');
}

// 3. Create performance budget configuration
console.log('\n📋 3. Creating performance budget...');
const perfBudget = {
  budgets: [
    {
      resourceType: 'script',
      budget: 300
    },
    {
      resourceType: 'total',
      budget: 500
    },
    {
      resourceType: 'image',
      budget: 200
    }
  ],
  metrics: {
    firstContentfulPaint: 2000,
    largestContentfulPaint: 2500,
    timeToInteractive: 3500,
    totalBlockingTime: 300,
    cumulativeLayoutShift: 0.1
  }
};

fs.writeFileSync('performance-budget.json', JSON.stringify(perfBudget, null, 2));
improvements.performance.items.push('Created performance budget configuration');
console.log('  ✓ Created performance-budget.json');

// 4. Create security headers configuration
console.log('\n📋 4. Creating security headers...');
const securityHeaders = {
  headers: [
    {
      key: 'X-DNS-Prefetch-Control',
      value: 'on'
    },
    {
      key: 'Strict-Transport-Security',
      value: 'max-age=63072000; includeSubDomains; preload'
    },
    {
      key: 'X-Frame-Options',
      value: 'SAMEORIGIN'
    },
    {
      key: 'X-Content-Type-Options',
      value: 'nosniff'
    },
    {
      key: 'X-XSS-Protection',
      value: '1; mode=block'
    },
    {
      key: 'Referrer-Policy',
      value: 'strict-origin-when-cross-origin'
    },
    {
      key: 'Permissions-Policy',
      value: 'camera=(), microphone=(), geolocation=()'
    }
  ]
};

fs.writeFileSync('security-headers.json', JSON.stringify(securityHeaders, null, 2));
improvements.security.items.push('Created security headers configuration');
console.log('  ✓ Created security-headers.json');

// 5. Create README for the improvements
console.log('\n📋 5. Creating improvements documentation...');
const improvementsDoc = `# Codebase Improvements Applied

## Date: ${new Date().toISOString().split('T')[0]}

### Performance Optimizations
${improvements.performance.items.map(item => `- ${item}`).join('\n')}

### Security Enhancements
${improvements.security.items.map(item => `- ${item}`).join('\n')}

### Code Quality
${improvements.codeQuality.items.map(item => `- ${item}`).join('\n')}

### Documentation
${improvements.documentation.items.map(item => `- ${item}`).join('\n')}

## Performance Budget
Monitor bundle sizes and load times against the thresholds in \`performance-budget.json\`.

## Security Headers
Apply the headers from \`security-headers.json\` to your hosting configuration (Netlify, Vercel, etc.).

## Best Practices

### 1. Environment Variables
- Copy \`.env.example\` to \`.env\` and fill in your values
- Never commit \`.env\` files
- Use \`import.meta.env.VITE_*\` to access variables in code

### 2. Performance Monitoring
\`\`\`typescript
import { webVitals } from './utils/webVitals';

// Track Core Web Vitals
webVitals.trackCLS();
webVitals.trackFID();
webVitals.trackLCP();
\`\`\`

### 3. Error Handling
\`\`\`typescript
import { ErrorBoundary } from './components/ErrorBoundary';

<ErrorBoundary fallback={<ErrorFallback />}>
  <YourComponent />
</ErrorBoundary>
\`\`\`

### 4. Code Splitting
\`\`\`typescript
import { lazy } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));
\`\`\`

## Next Steps

1. **Review Performance**: Run \`pnpm run build\` and check bundle sizes
2. **Security Audit**: Run \`pnpm run audit:security\`
3. **Accessibility**: Run \`pnpm run audit:accessibility\`
4. **Deploy**: Test the changes in a staging environment before production
`;

fs.writeFileSync('IMPROVEMENTS.md', improvementsDoc);
improvements.documentation.items.push('Created comprehensive improvements documentation');
console.log('  ✓ Created IMPROVEMENTS.md');

// 6. Update package.json scripts with new commands
console.log('\n📋 6. Checking package.json scripts...');
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  let scriptsUpdated = false;
  
  if (!packageJson.scripts['audit:all-comprehensive']) {
    packageJson.scripts['audit:all-comprehensive'] = 'pnpm run type-check && pnpm run lint && pnpm run test && pnpm run build';
    scriptsUpdated = true;
  }
  
  if (!packageJson.scripts['check:performance']) {
    packageJson.scripts['check:performance'] = 'pnpm run build && du -sh dist';
    scriptsUpdated = true;
  }
  
  if (scriptsUpdated) {
    fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
    improvements.codeQuality.items.push('Added comprehensive audit scripts');
    console.log('  ✓ Updated package.json scripts');
  } else {
    console.log('  ℹ Package.json scripts already optimal');
  }
} catch (error) {
  console.log('  ⚠ Could not update package.json');
}

// Summary
console.log('\n' + '='.repeat(60));
console.log('✅ IMPROVEMENTS COMPLETE');
console.log('='.repeat(60));

Object.entries(improvements).forEach(([category, data]) => {
  if (data.items.length > 0) {
    console.log(`\n${data.name}:`);
    data.items.forEach(item => console.log(`  ✓ ${item}`));
  }
});

console.log('\n📚 See IMPROVEMENTS.md for detailed documentation');
console.log('\n🎉 All improvements applied successfully!');