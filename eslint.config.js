import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        React: 'readonly',
        console: 'readonly',
        process: 'readonly',
        window: 'readonly',
        document: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        HTMLElement: 'readonly',
        HTMLAnchorElement: 'readonly',
        performance: 'readonly',
        module: 'readonly',
        require: 'readonly',
        jest: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': typescript,
      'react': react,
      'react-hooks': reactHooks
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react/no-unescaped-entities': 'off',
      'react-hooks/exhaustive-deps': 'warn',
      'no-undef': 'off',
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-undef': 'error'
    }
  },
  {
    ignores: [
      'node_modules/',
      '.next/',
      'out/',
      'build/',
      'dist/',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      'src/pages/services/',
      'src/pages/solutions/',
      'src/pages/talent/',
      'src/routes/',
      'src/services/',
      'src/store/',
      'src/test/',
      'src/utils/',
      'tests/',
      'tests.disabled/',
      'types.disabled/',
      'zion-os.disabled/',
      'zion_academy/',
      'temp_working/',
      'test_build/',
      'supabase/',
      'working-automation-suite.cjs',
      'automation/',
      'scripts/',
      '*.cjs',
      '*.mjs'
    ]
  }
];
=======
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
    files: ['**/*.test.{js,jsx,ts,tsx}', '**/__tests__/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        jest: 'readonly',
        fireEvent: 'readonly',
        render: 'readonly',
        screen: 'readonly',
      },
    },
    rules: {
      'no-console': 'off',
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
  {
    ignores: [
      'node_modules/',
      '.next/',
      'out/',
      'dist/',
      '*.min.js',
      'build/',
      'coverage/',
    ],
  },
];
=======
import js from '@eslint/js'; import react from 'eslint-plugin-react'; import reactHooks from 'eslint-plugin-react-hooks'; import tseslint from '@typescript-eslint/eslint-plugin'; import tsparser from '@typescript-eslint/parser'; export default [ { files: ['***.{ts,tsx}'],languageOptions: { ecmaVersion: 2021,sourceType: 'module',parser: tsparser,parserOptions: { ecmaFeatures: { jsx: true } },globals: { window: 'readonly',document: 'readonly',console: 'readonly',process: 'readonly',PerformanceObserver: 'readonly',JSX: 'readonly',React: 'readonly',HTMLDivElement: 'readonly',MouseEvent: 'readonly',Node: 'readonly',RequestInit: 'readonly',Response: 'readonly',Headers: 'readonly',HTMLElement: 'readonly' } },plugins: { react,'react-hooks': reactHooks,'@typescript-eslint': tseslint },rules: { 'react/react-in-jsx-scope': 'off','react/prop-types': 'off','@typescript-eslint/no-unused-vars': ['warn',{ argsIgnorePattern: '^_' }],'@typescript-eslint/explicit-function-return-type': 'off','@typescript-eslint/explicit-module-boundary-types': 'off','no-unused-vars': 'off','no-console': 'warn','no-undef': 'off' },settings: { react: { version: 'detect' } } },{ ignores: [ 'node_modules*.ts','****','pages._quarantine*.cjs','next.config.*','playwright.config.ts','vite.config-backup.ts','public/**','.venv/**','api/**','jest.config.*','fix-*.js','fix-*.jsx','components/**','src/**','lib/**','utils/**','deployments/**','hooks/**','pages/**','pages.__backup/**','pages-disabled/**' ] } ];
>>>>>>> origin/automation-improvements
