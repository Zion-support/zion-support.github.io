module.exports = {
<<<<<<< HEAD
  extends: [
    "next/core-web-vitals"
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};
=======
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    'no-undef': 'off',
    'no-console': 'off',
    'react/no-unescaped-entities': 'warn'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    dom: true
  },
  globals: {
    KeyboardEvent: 'readonly',
<<<<<<< HEAD
<<<<<<< HEAD
  },
};
=======
    MouseEvent: 'readonly',
    Event: 'readonly'
  }
};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> 205f16ce4ac3a8c2ac0b2e278708c4357550db22
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
