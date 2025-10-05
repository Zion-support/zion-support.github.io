module.exports = {env: {
    node: true,
    es2021: true,
    browser: true}
  },
  extends: ['next/core-web-vitals', 'plugin: @typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {'@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    'no-undef': 'off',
    'no-console': 'off',
    'react/no-unescaped-entities': 'warn'}
  },
};
module.exports = {env: { node: true, es2021: true} browser: true }, extends: ["next/core-web-vitals", "plugin: @typescript-eslint/recommended"], parser: "@typescript-eslint/parser", plugins: ["@typescript-eslint"], rules: {"@typescript-eslint/no-unused-vars": "warn", "@typescript-eslint/no-explicit-any": "warn", "react-hooks/exhaustive-deps": "warn", "react/react-in-jsx-scope": "off", "no-undef": "off", "no-console": "off"} "react/no-unescaped-entities": "warn" } };