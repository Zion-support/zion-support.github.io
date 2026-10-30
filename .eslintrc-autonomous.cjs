/**
 * Autonomous checks in ESLint 10 flat-config format.
 * Keep the established preset/rule severities and CI's zero-warning failure gate.
 * The two previously unregistered guards are explicit local syntax checks;
 * their behavior and limitations are documented in docs/autonomous-eslint-review.md.
 */
const nextVitals = require('eslint-config-next/core-web-vitals');
const typescript = require('typescript-eslint');
const unusedImports = require('eslint-plugin-unused-imports');
const globals = require('globals');
const autonomous = require('./eslint-rules/autonomous.cjs');

module.exports = [
  { ignores: [
  "**/.*",
  "node_modules/**",
  ".next/**",
  "out/**",
  "dist/**",
  "build/**",
  "coverage/**",
  ".hermes/**",
  "automation/reports/**",
  "**/*.config.js",
  "**/*.config.cjs",
  "scripts/automation/**",
  "automation/**/*.cjs",
  "eslint-rules/**"
] },
  ...nextVitals,
  ...typescript.configs.recommended,
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
    languageOptions: {
      parser: typescript.parser,
      // None of these rules requires type services. A project-wide parser would
      // reject JS/tools outside tsconfig before the actual checks can execute.
      parserOptions: { ecmaVersion: 2022, sourceType: 'module', ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser, ...globals.node }
    },
    plugins: { 'unused-imports': unusedImports, zion: autonomous },
    rules: {
  "no-eval": "error",
  "no-new-func": "error",
  "no-console": [
    "warn",
    {
      "allow": [
        "warn",
        "error"
      ]
    }
  ],
  "@typescript-eslint/no-explicit-any": [
    "error",
    {
      "fixToUnknown": false,
      "ignoreRestArgs": false
    }
  ],
  "require-await": "warn",
  "@typescript-eslint/no-unused-vars": [
    "warn",
    {
      "argsIgnorePattern": "^_"
    }
  ],
  "unused-imports/no-unused-imports": "warn",
  "unused-imports/no-unused-vars": [
    "warn",
    {
      "vars": "all",
      "varsIgnorePattern": "^_",
      "args": "after-used",
      "argsIgnorePattern": "^_"
    }
  ],
  "camelcase": [
    "error",
    {
      "properties": "always"
    }
  ],
  "@typescript-eslint/naming-convention": [
    "error",
    {
      "selector": "variable",
      "format": [
        "camelCase",
        "UPPER_CASE"
      ],
      "leadingUnderscore": "allow"
    },
    {
      "selector": "function",
      "format": [
        "camelCase"
      ]
    },
    {
      "selector": "parameter",
      "format": [
        "camelCase"
      ]
    },
    {
      "selector": "property",
      "format": [
        "camelCase",
        "snake_case",
        "UPPER_CASE"
      ]
    },
    {
      "selector": "memberLike",
      "format": [
        "camelCase"
      ]
    },
    {
      "selector": "typeLike",
      "format": [
        "PascalCase"
      ]
    }
  ],
  "complexity": [
    "warn",
    20
  ],
  "curly": [
    "error",
    "all"
  ],
  "no-magic-numbers": [
    "warn",
    {
      "ignore": [
        -1,
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        12,
        24,
        48,
        60,
        100,
        1024,
        86400
      ],
      "ignoreArrayIndexes": true
    }
  ],
  "zion/no-inner-html": "error",
  "zion/require-async-try-catch": "error"
}
  },
  {
  "files": [
    "test/**/*.ts",
    "**/*.test.ts",
    "**/*.spec.ts"
  ],
  "rules": {
    "no-console": "off",
    "@typescript-eslint/no-explicit-any": "off"
  }
}
];
