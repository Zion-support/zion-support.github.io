#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🔧 Starting TypeScript error fixer automation...');

// Get automation interval from environment variable (default: 45 minutes)
const AUTOMATION_INTERVAL =
  parseInt(process.env.AUTOMATION_INTERVAL) || 2700000; // 45 minutes

async function runTypeScriptErrorFixer() {
  try {
    console.log(
      `🔧 Running TypeScript error fixer at ${new Date().toISOString()}`
    );

    let fixesApplied = 0;

    // 1. Fix TypeScript compilation errors
    console.log('🔧 Fixing TypeScript compilation errors...');
    fixesApplied += await fixTypeScriptCompilationErrors();

    // 2. Fix type annotation errors
    console.log('🔧 Fixing type annotation errors...');
    fixesApplied += await fixTypeAnnotationErrors();

    // 3. Fix interface and type definition errors
    console.log('🔧 Fixing interface and type definition errors...');
    fixesApplied += await fixInterfaceTypeErrors();

    // 4. Fix import/export errors
    console.log('🔧 Fixing import/export errors...');
    fixesApplied += await fixImportExportErrors();

    // 5. Run TypeScript compiler to check for remaining errors
    console.log('🔧 Running TypeScript compiler check...');
    try {
      const result = await this.runCommand('npm', { args: ['run', 'type-check'] });
      this.log('No TypeScript errors detected');
      return [];
    } catch (error) {
      console.log(
        '⚠️  TypeScript compilation still has issues, but fixes were applied'
      );
    }

    // Generate TypeScript error fixer report
    console.log('📊 Generating TypeScript error fixer report...');
    const report = {
      timestamp: new Date().toISOString(),
      fixesApplied: fixesApplied,
      summary: 'TypeScript error fixer completed',
      status: 'completed',
    };

    const reportPath = path.join(
      process.cwd(),
      'typescript-error-fixer-report.json'
    );
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`✅ TypeScript error fixer report saved to ${reportPath}`);

    console.log(
      `✅ TypeScript error fixer completed successfully. Applied ${fixesApplied} fixes.`
    );
  } catch (error) {
    console.error('❌ TypeScript error fixer failed:', error.message);
  }
}

async function fixTypeScriptCompilationErrors() {
  let fixes = 0;

  // Fix files with TypeScript compilation errors
  const filesToFix = [
    'src/components/MobileExperienceEnhancer.tsx',
    'src/components/ModernUIEnhancer.tsx',
    'src/components/NotificationSystem.tsx',
    'src/components/PerformanceOptimizedLoader.tsx',
    'src/components/ProjectManagementTimeline.tsx',
    'src/components/ResourceManagementSystem.tsx',
    'src/components/ServicesOverview.tsx',
    'src/components/UltimateServicesShowcase.tsx',
    'src/components/UltimateServicesShowcase2025.tsx',
    'src/context/auth/AuthContext.tsx',
    'src/context/auth/profileMapper.ts',
    'src/context/auth/useAuthEventHandlers.ts',
    'src/context/auth/useAuthState.ts',
    'src/hooks/usePerformanceOptimization.ts',
    'src/layout/AppHeader.tsx',
    'src/layout/AppLayout.tsx',
    'src/layout/MainNavigation.tsx',
    'src/layout/PrimaryNav.tsx',
    'src/legal/TermsOfService.tsx',
    'src/pages/AIServicesPage.tsx',
    'src/pages/ForgotPassword.tsx',
    'src/pages/admin/SupportRequests.tsx',
    'src/pages/services/Cybersecurity.tsx',
    'src/pages/services/DigitalTransformation.tsx',
    'src/routes/AuthRoutes.tsx',
    'src/routes/CommunityRoutes.tsx',
    'src/routes/DeveloperRoutes.tsx',
    'src/routes/ErrorRoutes.tsx',
    'src/routes/TalentRoutes.tsx',
    'src/search/ActiveFiltersBar.tsx',
    'src/search/FilterSidebar.tsx',
    'src/components/ui/EnhancedNotificationSystem.tsx',
    'src/components/ui/form.tsx',
    'src/components/community/ForumCategories.tsx',
    'src/components/community/PostCard.tsx',
    'src/components/home/HeroFeatures.tsx',
    'src/components/SEO.tsx',
    'src/components/SEOOptimizer.tsx',
    'src/components/SecurityEnhancer.tsx',
    'src/data/advancedAIServices2025.ts',
    'src/data/emergingTechServices2025.ts',
    'src/data/expandedInnovativeServices2025.ts',
    'src/utils/tokenRewards.ts',
    'src/utils/messageChannelHandler.ts',
    'src/utils/testing-system.tsx',
  ];

  for (const filePath of filesToFix) {
    if (fs.existsSync(filePath)) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        // Fix 'any' type annotations with proper types
        content = content.replace(/:\s*any'/g, ': string');
        content = content.replace(/:\s*anyany/g, ': any');
        content = content.replace(/:\s*anystring/g, ': string');
        content = content.replace(/:\s*anykeyof\s+(\w+)/g, ': keyof $1');
        content = content.replace(/:\s*any\(\)/g, ': () => void');
        content = content.replace(/:\s*any\(/g, ': (');
        content = content.replace(/:\s*any\s*=>/g, ': ');
        content = content.replace(/:\s*any\s*{/g, ': {');
        content = content.replace(/:\s*any\s*;/g, ': any;');

        // Fix missing semicolons and colons
        content = content.replace(/\(\s*\)\s*=>\s*{/g, '() => {');
        content = content.replace(/:\s*{\s*;/g, ': {');
        content = content.replace(/:\s*{\s*}/g, ': {}');

        // Fix property signatures
        content = content.replace(/action\?\s*:\s*{\s*;/g, 'action?: {');
        content = content.replace(/lastPost\?\s*:\s*{\s*;/g, 'lastPost?: {');
        content = content.replace(/post\s*:\s*{\s*;/g, 'post: {');
        content = content.replace(/author\s*:\s*{\s*;/g, 'author: {');
        content = content.replace(/contactInfo\s*:\s*{\s*;/g, 'contactInfo: {');
        content = content.replace(
          /coreWebVitals\s*:\s*{\s*;/g,
          'coreWebVitals: {'
        );

        // Fix function signatures
        content = content.replace(
          /logout:\s*any\(\)\s*=>\s*Promise<any>;/g,
          'logout: () => Promise<any>;'
        );
        content = content.replace(
          /resetPassword:\s*any\(email:\s*string\)\s*=>\s*Promise<any>;/g,
          'resetPassword: (email: string) => Promise<any>;'
        );
        content = content.replace(
          /updateProfile:\s*any\(updates:\s*Partial<User>\)\s*=>\s*Promise<any>;/g,
          'updateProfile: (updates: Partial<User>) => Promise<any>;'
        );
        content = content.replace(
          /loginWithGoogle:\s*any\(\)\s*=>\s*Promise<any>;/g,
          'loginWithGoogle: () => Promise<any>;'
        );
        content = content.replace(
          /loginWithFacebook:\s*any\(\)\s*=>\s*Promise<any>;/g,
          'loginWithFacebook: () => Promise<any>;'
        );
        content = content.replace(
          /loginWithTwitter:\s*any\(\)\s*=>\s*Promise<any>;/g,
          'loginWithTwitter: () => Promise<any>;'
        );
        content = content.replace(
          /loginWithWeb3:\s*any\(\)\s*=>\s*Promise<any>;/g,
          'loginWithWeb3: () => Promise<any>;'
        );

        // Fix callback function types
        content = content.replace(
          /setUser:\s*any\(user:\s*User\s*\|\s*null\)\s*=>\s*void/g,
          'setUser: (user: User | null) => void'
        );
        content = content.replace(
          /setOnboardingStep:\s*any\(step:\s*number\)\s*=>\s*void/g,
          'setOnboardingStep: (step: number) => void'
        );

        // Fix specific type errors
        content = content.replace(
          /onClearAll:\s*any\(\)\s*=>\s*void;/g,
          'onClearAll: () => void;'
        );
        content = content.replace(
          /onClearFilters:\s*any\(\)\s*=>\s*void;/g,
          'onClearFilters: () => void;'
        );
        content = content.replace(
          /removeNotification:\s*any\(id:\s*string\)\s*=>\s*void;/g,
          'removeNotification: (id: string) => void;'
        );
        content = content.replace(
          /clearAll:\s*any\(\)\s*=>\s*void;/g,
          'clearAll: () => void;'
        );

        // Fix JSX expressions
        content = content.replace(
          /transition=\{\{\s*duration:\s*any(\d+\.?\d*),\s*delay:\s*(\d+\.?\d*)\s*\}\}/g,
          'transition={{ duration: $1, delay: $2 }}'
        );
        content = content.replace(/color:\s*any'([^']+)'/g, "color: '$1'");
        content = content.replace(/icon:\s*any'([^']+)'/g, "icon: '$1'");
        content = content.replace(/id:\s*any'([^']+)'/g, "id: '$1'");
        content = content.replace(
          /property:\s*any'([^']+)'/g,
          "property: '$1'"
        );
        content = content.replace(/rel:\s*any'([^']+)'/g, "rel: '$1'");

        // Fix specific component errors
        content = content.replace(
          /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/g,
          'const $1: React.FC = () => {'
        );

        if (content !== originalContent) {
          fs.writeFileSync(filePath, content);
          fixes++;
          console.log(`  ✅ Fixed TypeScript errors in ${filePath}`);
        }
      } catch (error) {
        console.log(`  ⚠️  Could not fix ${filePath}: ${error.message}`);
      }
    }
  }

  return fixes;
}

async function fixTypeAnnotationErrors() {
  let fixes = 0;

  // Fix specific type annotation issues
  const filesToFix = [
    'src/context/auth/useAuthState.ts',
    'src/hooks/usePerformanceOptimization.ts',
    'src/utils/tokenRewards.ts',
  ];

  for (const filePath of filesToFix) {
    if (fs.existsSync(filePath)) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        // Fix specific type errors
        content = content.replace(/anynull/g, 'null');
        content = content.replace(
          /IntersectionObserverCallback/g,
          'IntersectionObserverCallback'
        );
        content = content.replace(/NodeJS/g, 'NodeJS');
        content = content.replace(/apiClient/g, 'apiClient');

        if (content !== originalContent) {
          fs.writeFileSync(filePath, content);
          fixes++;
          console.log(`  ✅ Fixed type annotation errors in ${filePath}`);
        }
      } catch (error) {
        console.log(`  ⚠️  Could not fix ${filePath}: ${error.message}`);
      }
    }
  }

  return fixes;
}

async function fixInterfaceTypeErrors() {
  let fixes = 0;

  // Fix interface and type definition issues
  const filesToFix = [
    'src/components/NotificationSystem.tsx',
    'src/components/ui/EnhancedNotificationSystem.tsx',
    'src/components/ui/form.tsx',
  ];

  for (const filePath of filesToFix) {
    if (fs.existsSync(filePath)) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        // Fix interface property definitions
        content = content.replace(/action\?\s*:\s*{\s*;/g, 'action?: {');
        content = content.replace(
          /success:\s*any\(title:\s*string,\s*message:\s*string,\s*options\?\s*:\s*Partial<Notification>\)\s*=>\s*{/g,
          'success: (title: string, message: string, options?: Partial<Notification>) => {'
        );
        content = content.replace(
          /warning:\s*any\(title:\s*string,\s*message:\s*string,\s*options\?\s*:\s*Partial<Notification>\)\s*=>\s*{/g,
          'warning: (title: string, message: string, options?: Partial<Notification>) => {'
        );
        content = content.replace(
          /error:\s*\(title:\s*string,\s*message:\s*string,\s*options\?\s*:\s*Partial<Notification>\)\s*=>\s*{/g,
          'error: (title: string, message: string, options?: Partial<Notification>) => {'
        );
        content = content.replace(
          /info:\s*\(title:\s*string,\s*message:\s*string,\s*options\?\s*:\s*Partial<Notification>\)\s*=>\s*{/g,
          'info: (title: string, message: string, options?: Partial<Notification>) => {'
        );
        content = content.replace(
          /achievement:\s*\(title:\s*string,\s*message:\s*string,\s*options\?\s*:\s*Partial<Notification>\)\s*=>\s*{/g,
          'achievement: (title: string, message: string, options?: Partial<Notification>) => {'
        );

        // Fix form field type
        content = content.replace(/field:\s*any\{/g, 'field: {');
        content = content.replace(
          /onChange:\s*\(\)\s*=>\s*\{\s*\}\s*\}/g,
          'onChange: () => {} }'
        );

        if (content !== originalContent) {
          fs.writeFileSync(filePath, content);
          fixes++;
          console.log(`  ✅ Fixed interface type errors in ${filePath}`);
        }
      } catch (error) {
        console.log(`  ⚠️  Could not fix ${filePath}: ${error.message}`);
      }
    }
  }

  return fixes;
}

async function fixImportExportErrors() {
  let fixes = 0;

  // Fix import/export issues
  const filesToFix = [
    'src/pages/AIServicesPage.tsx',
    'src/utils/testing-system.tsx',
  ];

  for (const filePath of filesToFix) {
    if (fs.existsSync(filePath)) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        // Fix import statements
        content = content.replace(
          /import\s+\{\s*Brain,\s*Database,\s*Zap,\s*Shield,\s*BarChart3,\s*MessageSquare,\s*Code,\s*Globe,\s*Server,\s*Eye,\s*FileText,\s*CheckCircle,\s*Users,\s*Lock,\s*Search\s*\}\s*from\s*'lucide-react';/g,
          "import { Brain, Database, Zap, Shield, BarChart3, MessageSquare, Code, Globe, Server, Eye, FileText, CheckCircle, Users, Lock, Search } from 'lucide-react';"
        );

        // Fix export statements
        content = content.replace(
          /export\s+default\s+AIServicesPage;\s*$/g,
          'export default AIServicesPage;'
        );

        // Fix function declarations
        content = content.replace(
          /const\s+AIServicesPage:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/g,
          'const AIServicesPage: React.FC = () => {'
        );

        if (content !== originalContent) {
          fs.writeFileSync(filePath, content);
          fixes++;
          console.log(`  ✅ Fixed import/export errors in ${filePath}`);
        }
      } catch (error) {
        console.log(`  ⚠️  Could not fix ${filePath}: ${error.message}`);
      }
    }
  }

  return fixes;
}

// Main continuous loop
async function runContinuous() {
  console.log(
    `🚀 Starting TypeScript error fixer with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`
  );

  // Run initial error fixer
  await runTypeScriptErrorFixer();

  // Set up continuous execution
  setInterval(async () => {
    await runTypeScriptErrorFixer();
  }, AUTOMATION_INTERVAL);

  console.log(
    `✅ TypeScript error fixer running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`
  );
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Start the TypeScript error fixer
runContinuous().catch(error => {
  console.error('❌ Failed to start TypeScript error fixer:', error);
  process.exit(1);
});
