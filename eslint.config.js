import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist', 'backup*', 'corrupted*', 'clean-build', 'src_backup*', 'src/pages_backup', 'src/components/GlobalErrorBoundary.tsx', 'src/components/HeroSection.tsx', 'src/components/ImageOptimizer.tsx', 'src/components/ImprovedErrorBoundary.tsx', 'src/offline/page.tsx', 'src/page-minimal.tsx', 'src/page-optimized.tsx', 'src/page.tsx', 'src/pages_backup', 'src/ai-*', 'src/analytics-tools/page.tsx', 'src/api-docs/page.tsx', 'src/productivity/page.tsx', 'src/quantum-computing/page.tsx', 'src/request-quote/page.tsx', 'src/research-development/page.tsx'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  }
);