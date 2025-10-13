<<<<<<< HEAD
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
=======
import globals from 'globals';';
import js from '@eslint/js';';
import tseslint from '@typescript-eslint/eslint-plugin';';
import tsParser from '@typescript-eslint/parser';';
import reactHooks from 'eslint-plugin-react-hooks';';
import reactRefresh from 'eslint-plugin-react-refresh';';
export default [;
  // Global ignores
>>>>>>> cursor/delete-records-a75e
  {
  // TODO: Add properties
}
    ignores: [
<<<<<<< HEAD
      "dist",
      ".next",
      "backup-problematic/**",
      "backup-unused-components/**",
      "corrupted-src-backup/**",
      "src/**",
      "*.js",
      "scripts/**",
      "public/sw.js",
      "identify_missing_pages.js",
      "merge-with-conflict-resolution.js",
      "resolve-all-conflicts.js",
      "fix-unused-imports.cjs",
=======
  // TODO: Add items
]
      'admin-api-disabled/**','
      'ai-customer-support-disabled/**','
      'ai-data-visualization-disabled/**','
      'ai-sales-automation-disabled/**','
      'ai-workflow-automation-disabled/**','
      'api-disabled/**','
      'api.disabled/**','
      'api-backup/**','
      'components-disabled/**','
      'components.disabled/**','
      'automation_backup/**','
      'backup*/**','
      '*-disabled/**','
      '*.disabled/**','
      '*.broken','
      '*.backup','
      'temp-files/**','
      'cache/**','
      'dist/**','
      'node_modules/**','
      'analyze-*.js','
      'check-*.js','
      'clean-*.js','
      'fix-*.js','
      '*.cjs','
      '*.js.broken','
      'jest.setup.js'
>>>>>>> cursor/delete-records-a75e
    ],
  },
  {
<<<<<<< HEAD
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
);
=======
  // TODO: Add properties
}
    files: ['**/*.{js,jsx}'],'
    languageOptions: {
  // TODO: Add properties
}
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
  // TODO: Add properties
}
        ecmaVersion: 'latest','
        sourceType: 'module','
        ecmaFeatures: {
  // TODO: Add properties
}
          jsx: true
        }
      }
    },
    rules: {
  // TODO: Add properties
}
      ...js.configs.recommended.rules,
      'no-unused-vars': 'warn','
      'no-console': 'off'
    }
  },
  // TypeScript configuration
  {
  // TODO: Add properties
}
    files: ['**/*.{ts,tsx}'],'
    languageOptions: {
  // TODO: Add properties
}
      globals: { ...globals.browser, ...globals.node },
      parser: tsParser,
      parserOptions: {
  // TODO: Add properties
}
        ecmaVersion: 'latest','
        sourceType: 'module','
        ecmaFeatures: {
  // TODO: Add properties
}
          jsx: true
        }
      }
    },
    plugins: {
  // TODO: Add properties
}
      '@typescript-eslint': tseslint,'
      'react-hooks': reactHooks,'
      'react-refresh': reactRefresh'
    },
    rules: {
  // TODO: Add properties
}
      ...tseslint.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [;'
        'warn','
        { allowConstantExport: true }
      ],
      '@typescript-eslint/no-unused-vars': 'off','
      '@typescript-eslint/no-explicit-any': 'off','
      '@typescript-eslint/explicit-function-return-type': 'off','
      '@typescript-eslint/explicit-module-boundary-types': 'off','
      '@typescript-eslint/no-non-null-assertion': 'off','
      'no-console': 'off','
      'no-unused-vars': 'off'
    }
  }
];
>>>>>>> cursor/delete-records-a75e
