module.exports = {
  // TODO: Add properties
}
  root: true,
  env: {
  // TODO: Add properties
}
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
  // TODO: Add items
]
    'eslint:recommended','
    '@typescript-eslint/recommended','
    'plugin:react/recommended','
    'plugin:react-hooks/recommended','
    'plugin:jsx-a11 y/recommended','
    'next/core-web-vitals','
  ],
  parser: '@typescript-eslint/parser','
  parserOptions: {
  // TODO: Add properties
}
    ecmaFeatures: {
  // TODO: Add properties
}
      jsx: true,
    },
    ecmaVersion: 'latest','
    sourceType: 'module','
    project: './tsconfig.json','
  },
  plugins: [
  // TODO: Add items
]
    'react','
    'react-hooks','
    '@typescript-eslint','
    'jsx-a11 y','
  ],
  settings: {
  // TODO: Add properties
}
    react: {
  // TODO: Add properties
}
      version: 'detect','
    },
  },
  rules: {
  // TODO: Add properties
}
    // React rules
    'react/react-in-jsx-scope': 'off','
    'react/prop-types': 'off','
    'react/display-name': 'warn','
    'react/jsx-uses-react': 'off','
    'react/jsx-uses-vars': 'error','

    // React Hooks rules
    'react-hooks/rules-of-hooks': 'error','
    'react-hooks/exhaustive-deps': 'warn','

    // TypeScript rules
    '@typescript-eslint/no-unused-vars': ['
      'warn','
      {
  // TODO: Add properties
}
        argsIgnorePattern: '^_','
        varsIgnorePattern: '^_','
        ignoreRestSiblings: true
      }
    ],
    '@typescript-eslint/no-explicit-any': 'warn','
    '@typescript-eslint/no-empty-object-type': 'warn','
    '@typescript-eslint/no-non-null-assertion': 'warn','
    '@typescript-eslint/prefer-const': 'error','
    '@typescript-eslint/no-var-requires': 'off','

    // General rules
    'no-console': 'warn','
    'no-debugger': 'error','
    'prefer-const': 'error','
    'no-var': 'error','

    // Next.js rules
    '@next/next/no-html-link-for-pages': 'warn','
    '@next/next/no-img-element': 'warn','
  },
  ignorePatterns: [
  // TODO: Add items
]
    'node_modules/','
    '.next/','
    'out/','
    'build/','
    'dist/','
    '*.config.js','
    '*.config.ts','
    'scripts/','
    'automation/','
    'netlify/','
    'apps/','
    '.temp_backup_components/','
    '**/*.backup.*','
    '**/*.cleanup-backup.*','
    '**/*.disabled','
    '**/__mocks__/**','
    '**/__tests__/**','
    '**/*.test.*','
    '**/*.spec.*','
  ],
  overrides: [
  // TODO: Add items
]
    {
  // TODO: Add properties
}
      files: ['**/*.tsx', '**/*.ts'],'
      rules: {
  // TODO: Add properties
}
        '@typescript-eslint/explicit-function-return-type': 'off','
        '@typescript-eslint/explicit-module-boundary-types': 'off','
      },
    },
    {
  // TODO: Add properties
}
      files: ['**/*.js', '**/*.jsx'],'
      rules: {
  // TODO: Add properties
}
        '@typescript-eslint/no-var-requires': 'off','
      },
    },
  ],
};