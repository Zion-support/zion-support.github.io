        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
<<<<<<< HEAD
<<<<<<< HEAD
        afterAll: 'readonly'
      }
=======
        afterAll: 'readonly',
      },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'no-console': 'warn',
      'react/prop-types': 'off',
<<<<<<< HEAD
<<<<<<< HEAD
      'react/react-in-jsx-scope': 'off'
=======
      'react/react-in-jsx-scope': 'off',
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    files: [
      '**/*.cjs',
      '**/scripts/**/*.js',
      '**/automation/**/*.js',
      '**/pm2/**/*.js'
    ],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'script',
      globals: {
        ...globals.node,
<<<<<<< HEAD
        console: 'readonly',
        process: 'readonly',
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        Buffer: 'readonly',
        global: 'readonly'
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
<<<<<<< HEAD
      'no-undef': 'error'
    }
  }
=======
      'no-undef': 'error',
    },
  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
];
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
