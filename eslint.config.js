import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import typescript from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  { 
    ignores: [
      'dist/**', 'out/**', '.next/**', 'node_modules/**', 
      '*.config.js', '*.config.cjs', 'scripts/**', 'tools/**', 
      'pm2-automation/**', 'automation/**', 'deployment/**', 
      'e2e/**', 'ci-cd-reports/**', 'build-reports/**', 
      'all-automations-reports/**', 'error-prevention-reports/**', 
      'link-reports/**', 'lint-target/**', 'api-disabled/**', 
      'api.disabled/**', 'api.disabled.temp/**', 
      'components.disabled/**', 'components.disabled_full/**', 
      'corrupted_files_backup_2/**', 'broken_files_backup/**', 
      'ai-optimization-backups/**', 'disabled-api/**', 
      'data/**', 'hooks/**', 'lib/**', 'services/**', 
      'public/**', 'styles/**', 'server/**', 'netlify/**', 
      'middleware.ts', 'middleware.security.ts', 
      'cypress.config.ts', 'jest.config.jsx', 'jest.setup.js', 
      'jest.setup.jsx', 'next.config.analyze.js', 
      'next.config.analyzer.js', 'deployment/next.config.js', 
      'deployments/**', '*.cjs', '*.js', '*.sh', '*.md', 
      '*.txt', '*.log', '*.backup', '*.disabled', '*.minimal', 
      '*.working', '*.temp', '*.cache', '*.lock', '*.toml', 
      '*.html', '*.json', '*.yaml', '*.yml', '*.xml', 
      '*.csv', '*.sql', '*.py', '*.rb', '*.php', '*.java', 
      '*.cpp', '*.c', '*.h', '*.hpp', '*.cs', '*.vb', 
      '*.swift', '*.kt', '*.scala', '*.go', '*.rs', 
      '*.dart', '*.r', '*.m', '*.mm', '*.pl', '*.pm', 
      '*.t', '*.pod', '*.podspec', '*.xcconfig', 
      '*.pbxproj', '*.xcodeproj', '*.xcworkspace', 
      '*.storyboard', '*.xib', '*.nib', '*.strings', 
      '*.lproj', '*.bundle', '*.framework', '*.dylib', 
      '*.a', '*.so', '*.dll', '*.exe', '*.app', '*.ipa', 
      '*.apk', '*.deb', '*.rpm', '*.msi', '*.dmg', 
      '*.pkg', '*.zip', '*.tar', '*.gz', '*.bz2', 
      '*.xz', '*.7z', '*.rar', '*.iso', '*.img', 
      '*.bin', '*.hex', '*.elf', '*.o', '*.obj', 
      '*.lib', '*.exp', '*.pdb', '*.map', '*.sym', 
      '*.dwarf', '*.stabs', '*.coff', '*.pe', '*.macho', 
      '*.fat', '*.universal'
    ] 
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022
      },
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': typescript
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...typescript.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'warn',
      'no-debugger': 'error'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
];