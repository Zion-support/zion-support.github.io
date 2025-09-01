module.exports = {
  extends: ['next/core-web-vitals', 'next/typescript'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-console': 'warn'
  },
  ignorePatterns: ['node_modules/', '.next/', 'out/', 'dist/', 'automation_backup/', 'automation/', '**/*.disabled', 'components.disabled/', 'pages.disabled/', 'hooks.disabled/', 'lib.disabled/', 'zion-os.disabled/', 'components/', 'contracts/']
};