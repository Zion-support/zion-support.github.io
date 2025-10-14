
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        // Jest globals
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        render: 'readonly',
        screen: 'readonly',
        // React Testing Library
        Helmet: 'readonly',
        HelmetProvider: 'readonly',
      },
    },
    plugins: {
      "react-hooks": reactHooks
      "react-refresh": reactRefresh
    },
    rules: {

