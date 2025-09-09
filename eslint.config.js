import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import eslintConfigPrettier from "eslint-config-prettier";
// import eslintConfigNext from 'eslint-config-next';

export default [
  { ...js.configs.recommended, files: ['app/**/*.{js,jsx,ts,tsx}'] },
  {
    ignores: ["node_modules/**", "dist/**", "out/**", "coverage/**", "build/**", ".next/**", "public/build/**"],
  },

  // eslintConfigNext,

  // Fallback for problematic files (non-type-aware TS linting)
  {
    files: [
      "src/hooks/useAuth.tsx",
      "src/components/ui/sidebar/index.tsx",
      "src/types/pwa.d.ts",
      "vite.config.d.ts"
    ],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      react: react,
      'react-hooks': reactHooks,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-debugger': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'dist/**',
      'build/**',
      'public/**',
      'temp_conflicts/**',
      'temp_exclude/**',
      '__tests__/**',
      'tests/**',
      'apps/**',
      'utils/**',
      'types/**',
      'zion-*/**',
      'zion_os/**',
      'zion/**'
    ],
  },
];
