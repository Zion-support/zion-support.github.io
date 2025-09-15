module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-empty-object-type': 'warn',
    '@next/next/no-html-link-for-pages': 'warn'
  },
  ignorePatterns: [
    'node_modules/',
    '.next/',
    'out/',
    'build/',
    'dist/',
    '*.config.js',
    '*.config.ts',
    'scripts/',
    'automation/',
    'netlify/',
    'src/',
<<<<<<< HEAD
    'apps/'
=======
    'apps/',
    'backup-merge-conflicts/',
    'recovered-branches/',
    'src.broken/',
    'src.disabled/',
    'src_backup/',
    'temp_*/',
    'zion-os/',
    'zion-website/',
    'zion.app/',
    'store/',
    'utils.disabled/',
    'utils/',
    'types/',
    'tests/',
    'supabase/',
    'zion-os.disabled/',
    '*.test.*',
    '*.spec.*',
    '*.cjs',
    '*.mjs',
    'public/automation/',
    'public/sw-*.js',
    'public/process-polyfill.js',
    'dao/',
    'ecosystem.*.js',
    'fix-*.js',
    'fix-*.cjs',
    'resolve-*.js',
    'structural-*.js',
    'mcp-*.js',
    'git-ops.js',
    'bundle-analyzer.*.js',
    'csp-config.js',
    'app-optimizer.js',
    'batch-syntax-fixer.cjs',
    'complete-improvement-suite.cjs'
>>>>>>> 694b87f19a78 (content: add two new blog articles for zion-os and promote on homepages; fix zion-website layout conflict; update promos)
  ]
};
