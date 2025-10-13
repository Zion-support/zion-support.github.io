import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
  // TODO: Add properties
}
    ignores: [
      "dist",
      ".next",
      "add-missing-routes*.jsx",
      "backup-problematic/**",
      "backup-unused-components/**",
      "backup/**",
      "cleanup-*.js",
      "cleanup-*.cjs",
      "comprehensive-*.js",
      "fix-*.js",
      "fix-*.cjs",
      "*.cjs",
      "scripts/**",
      "src/**",
      "create-*.js",
      "identify-*.js",
      "merge-*.js",
      "remove-*.js",
      "simple-*.js",
      "website-*.js",
      "public/sw.js",
      "identify_missing_pages.js",
      "merge-with-conflict-resolution.js",
      "resolve-all-conflicts.js",
      "fix-unused-imports.cjs",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
);
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  {
    ignores: [
      "dist", 
      "node_modules", 
      "*.config.js",
      "backup/**",
      "backup-problematic/**",
      "backup-problematic-files/**",
      "backup-unused-components/**",
      "corrupted-src-backup/**",
      "*.cjs",
      "*.js",
      "*.py",
      "*.sh",
      "*.md",
      "*.txt",
      "*.json",
      "*.html",
      "*.original",
      "*.backup*",
      "__tests__/**",
      "api/**",
      "analysis/**",
      "ci-cd-reports/**",
      "content/**",
      "contracts/**",
      "scripts/**"
    ],
  }
);
