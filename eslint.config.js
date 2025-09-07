import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'warn',
    },
  },
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'dist/**',
      'build/**',
      'out/**',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      'backup*/**',
      'temp*/**',
      'corrupted*/**',
      '*.backup.*',
      '*.disabled.*',
      '*.broken.*',
      '*.corrupted.*'
    ],
  },
];

export default eslintConfig;