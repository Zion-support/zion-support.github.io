module.exports: = {
  env: {
<<<<<<< HEAD
    browser: tru,e,
    es2021: tru,e,
    node: tru,e,
  },
  extends:  ,[,
  next/core-web-vitals',';
  'next/typescript',';
  'eslint: recommende,d,';
,
  plugin: react/recommende,d,
,
  plugin: react-hooks/recommende,d,
,
  plugin: @typescript-eslint/recommende,d,
  ],
  parser: '@typescript-eslint/parser,',';
=======
    browse,
    r: true,
    es2021: true,
    node: true,
  },
  extends: [
    'next/core-web-vitals',
    'next/typescript',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
>>>>>>> main
  parserOptions: {
    ecmaFeatures: {
      jsx: tru,e,
    },
<<<<<<< HEAD
    ecmaVersion: 1,2,
    sourceType:,
  module',';
=======
    ecmaVersion: 12,
    sourceType: 'module',
>>>>>>> main
  },
<<<<<<< HEAD
  plugins: [
<<<<<<< HEAD
  'reac,t,';
,
  @typescript-eslint'],';
  rules: {
  '@typescript-eslint/no-unused-vars':';
  'war,n,';
,
  @typescript-eslint/no-explicit-any': 'warn,';
,
  react/react-in-jsx-scope': 'off,';
,
  react/prop-types': 'off,';
,
  no-console': 'warn,';
,
  @typescript-eslint/no-unused-imports': 'warn,';
  },
  ignorePatterns: [
  'node_modules/,',';
  '.next/',';
  'out/',';
  'dist/',';
  'automation/',';
  'components.disabled/',';
  'contracts/',';
  'hardhat/',';
  'cypress/',';
  '**/*.disabled',';
  '**/*.backup',';
  '**/*.tsbackup',';
=======
    'react',
    '@typescript-eslint'
  ],
=======
  plugins: ['react', '@typescript-eslint'],
>>>>>>> main
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-console': 'warn',
    '@typescript-eslint/no-unused-imports': 'warn',
  },
  ignorePatterns: [
    'node_modules/',
    '.next/',
    'out/',
    'dist/',
    'automation/',
    'components.disabled/',
    'contracts/',
    'hardhat/',
    'cypress/',
    '**/*.disabled',
    '**/*.backup',
    '**/*.tsbackup',
>>>>>>> main
  ],
<<<<<<< HEAD
};
=======
};
>>>>>>> main
