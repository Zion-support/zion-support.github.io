module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'node_modules',
    'build',
    'out',
    '*.config.js',
    '*.config.ts',
    'scripts/',
    'automation/',
    'netlify/',
    'apps/',
    'src/components-disabled/**/*',
    'src/utils-disabled/**/*',
    '**/components-disabled/**/*',
    '**/utils-disabled/**/*',
    'zion-os.disabled/**/*',
    'zion-os/**/*',
    'zion-website/**/*',
    'zion.app/**/*',
    'zion_academy/**/*',
    '**/.next/**/*',
    '**/static/**/*',
    '**/public/**/*'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-empty-object-type': 'warn'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
