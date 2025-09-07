export default {
<<<<<<< HEAD
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-unescaped-entities': 'off',
    '@next/next/no-page-custom-font': 'off'
  }
=======
  // TODO: Implement
}
  extends: [next/core-web-vitals,plugin:@typescript-eslint/recommended],
  parser: @typescript-eslint/parser,
  plugins: [@typescript-eslint],
  rules: {
    '@typescript-eslint/no-unused-vars: warn,@typescript-eslint/no-explicit-any: warn,react-hooks/exhaustive-deps: warn,react/react-in-jsx-scope: off,no-undef: off
  },
  ignorePatterns: [
    'node_modules/,.next/,out/,dist/,build/,coverage/,*.config.js,*.config.cjs,*.config.mjs]
  ]
>>>>>>> cursor/automate-test-improve-and-merge-code-6af4
};