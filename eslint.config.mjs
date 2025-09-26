// ESLint flat config for Next.js 14 + ESLint 9
// Uses Next's official flat config
import next from 'eslint-config-next';

export default [
  // Next.js recommended rules (includes react/react-hooks, etc.)
  ...next,
  // Project-specific ignores
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'dist/**',
      'build/**',
      'coverage/**',
      '**/*.backup.*',
      '**/*.bak*',
      '**/.DS_Store',
      'reports/**',
      'playwright-report/**',
      'playwright-logs/**',
      'test-results/**',
      'public/**',
    ],
  },
];

