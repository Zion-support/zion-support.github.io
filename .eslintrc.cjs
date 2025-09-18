module.exports = {
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-empty-object-type': 'warn',
    'no-undef': 'off', // TypeScript handles this
    'react/prop-types': 'off', // TypeScript handles prop validation
    'react/react-in-jsx-scope': 'off' // Not needed with React 17+
  },
  ignorePatterns: [
    'node_modules/',
    '.next/',
    'out/',
    'build/',
    'dist/',
    'coverage/',
    '*.config.js',
    '*.config.ts',
    'scripts/',
    'automation/',
    'netlify/',
    'apps/',
    'zion-os/',
    'zion-os.disabled/',
    'zion-website/',
    'zion.app/',
    'zion_academy/',
    'backup*/',
    '*.backup.*',
    '*.cjs',
    '*.js',
    '*.jsx',
    '**/.next/**',
    '**/static/**',
    '**/chunks/**',
    '**/server/**',
    '**/middleware-*',
    '**/server-reference-*',
    '**/postcss.config.js',
    '**/tailwind.config.js',
    '**/next.config.js',
    '**/sw.js',
    '**/analytics.js',
    '**/feedback.js',
    '**/integration.js'
  ]
};
