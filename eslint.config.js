
export default [
  // Global ignores
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '**/*.config.js',
      '**/*.config.ts',
      'public/**',
      'backup/**',
      'backup-pages/**',
      'backup-merge-conflicts/**',
      'src.corrupted/**',
      'backup-problematic-files/**',
      'src.disabled/**',
      'src.pages.disabled/**',
      'automation/**',
      'temp_broken_files/**',
      'cypress/**',
      '**/backup-problematic-files/**',
      '**/src.disabled/**',
      '**/src.corrupted/**',
      '**/src.pages.disabled/**',
      '**/temp_broken_files/**',
      '**/automation/**',
      '**/backup-pages/**',
      '**/backup-merge-conflicts/**',
      '**/cypress_backup/**',
      '**/components.disabled/**',
      '**/components.disabled_full/**',
      '**/contracts.disabled/**',
      '**/data.disabled/**',
      '**/automation_backup/**',
      '**/broken_files_backup/**',
      '**/vite.config-backup.*',
      '**/test-simple.*',
      
      '**/*.disabled.*',
      '**/*.backup.*',
      '**/*.broken.*',
      '**/*.corrupted.*',
      '**/*.temp.*',
      '**/*.disabled/**',
      '**/*.backup/**',
      '**/*.broken/**',
      '**/*.corrupted/**',
      '**/*.temp/**',
      'cypress/**',
      'tests/**',
      'coverage/**',
      'scripts/**',
      'pages/**',
      'store/**',
      'jest.setup.js',
      '**/vite.config-backup.*',
      '**/test-simple.*',
      '*.config.js',
      '*.config.ts'
    ]
  },

  // Base JavaScript configuration
  {
    files: ["**/*.{js,cjs,mjs}"],
    languageOptions: {
      globals: { ...globals.node },
    },
    ...js.configs.recommended,
  },

  // 3. TypeScript Configurations (non type-aware to avoid project resolution issues in CI)
  // Main application TS/TSX files (src, pages, but not tests, stories, cypress, supabase yet)
  ...tseslint.config({
    files: ["src/**/*.{ts,tsx}", "pages/**/*.{ts,tsx}"],
    // Exclude story and test files from this general src/pages config
    ignores: ["src/**/*.stories.tsx", "src/**/*.stories.ts", "src/**/*.test.tsx", "src/**/*.test.ts"],
    extends: [...tseslint.configs.recommended],
    languageOptions: {
      parserOptions: {},
      globals: { ...browserGlobals },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/no-misused-promises": "off",
    },
  }),

  // TypeScript configuration for config files
  ...tseslint.config({
    files: ["vite.config.ts", "tailwind.config.ts", "cypress.config.ts", "vitest.config.ts"], // Explicit list
    extends: [...tseslint.configs.recommended],
    languageOptions: {
      parserOptions: {},
      globals: { ...nodeGlobals },
    },
    rules: {
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  }),

  // Test files configuration
  ...tseslint.config({
    files: ["__tests__/**/*.{ts,tsx}"],
    extends: [...tseslint.configs.recommended],
    languageOptions: {
      parserOptions: {},
      globals: { ...globals.jest, ...browserGlobals }, // Jest and browser globals
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/unbound-method": "off",
    },
  }),

  // Test files configuration (tests/ directory)
  ...tseslint.config({
    files: ["tests/**/*.{ts,tsx,js,jsx}"], // Include JS/JSX as per its tsconfig
    ignores: ["tests/e2e/**"], // e2e tests inside 'tests' might be Playwright, not Jest
    extends: [...tseslint.configs.recommended],
    languageOptions: {
      parserOptions: {},
      globals: { ...globals.jest, ...browserGlobals }, // Jest and browser globals
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/unbound-method": "off", // for Jest matchers
      "@typescript-eslint/no-var-requires": "off", // Allow require in JS test files
      "@typescript-eslint/no-require-imports": "off", // Allow require in JS test files
    },
  }),

  // Storybook files configuration
  ...tseslint.config({
    files: [
      ".storybook/**/*.ts",
      ".storybook/**/*.tsx",
      "src/**/*.stories.tsx",
      "src/**/*.stories.ts", // Added .ts stories
      "stories/**/*.stories.tsx",
      "stories/**/*.stories.ts", // Added .ts stories
    ],
    extends: [...tseslint.configs.recommended],
    languageOptions: {
      parserOptions: {},
      globals: { ...browserGlobals },
    },
    rules: {
      "import/no-anonymous-default-export": "off",
      "react-refresh/only-export-components": "off",
    },
  },
  {
    files: ["supabase/functions/**/*.ts"],
    extends: [...tseslint.configs.recommended],
    languageOptions: {
      parserOptions: {},
      globals: { ...nodeGlobals },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-floating-promises": "warn", 
      "@typescript-eslint/restrict-template-expressions": "warn", 
    },
  }),
  
  // Cypress TypeScript Configuration
  ...tseslint.config({
    files: ["cypress/**/*.ts", "cypress/**/*.tsx"], // Target Cypress TS files
    extends: [...tseslint.configs.recommended], // Use non-type-aware to avoid parserOptions.project issues
    languageOptions: {
      parserOptions: {},
      globals: { // Cypress globals are typically provided by the plugin below
        ...browserGlobals, // Cypress runs in browser
        ...nodeGlobals,   // For tasks/plugins if any TS is used there
      },
    },
    rules: {
      "@typescript-eslint/no-namespace": "off", // Cypress often uses namespaces in d.ts
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      // Specific to Cypress tests, might not need strict method binding
      "@typescript-eslint/unbound-method": "off", 
    }
  }),

  // Cypress Global Configuration (Plugin for JS and TS files)
  // This spread should bring in necessary plugins, rules, and languageOptions (globals)
  {
    files: ["cypress/**/*.ts", "cypress/**/*.tsx"],
    languageOptions: {
      globals: { ...browserGlobals, ...nodeGlobals },
    },
    rules: {
      "@typescript-eslint/no-namespace": "off",
    }
  },
  {
    files: ["cypress/**/*.{js,ts,tsx}"],
    ...cypressPlugin.configs.recommended,
    rules: {
      ...cypressPlugin.configs.recommended.rules,
    }
  },
  {
    files: ["cypress/support/commands.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...(cypressPlugin.configs.recommended.languageOptions?.globals || {}),
        ...nodeGlobals,
      }
    }
  }
];
