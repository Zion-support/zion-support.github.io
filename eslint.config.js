import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'coverage/**',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      'scripts/**',
      'automation/**',
      'tools/**',
      'temp_components/**',
      'temp_conflicts/**',
      'src_backup/**',
      'zion-os/**',
      'zion-website/**',
      'zion_academy/**',
      'zion-ai-assistant/**',
      'zion-film/**',
      'token/**',
      'wiki/**',
      'vision/**',
      'pages_disabled/**',
      'stale-content-auditor-runner-report.md',
      'supabase-mcp-test-report.md',
      'sync-health-redundancy-report.md',
      'syntax-fix-report.json',
      'todo-scanner-runner-report.md',
      'todo-summary-runner-report.md',
      'topic-cluster-builder-runner-report.md',
      'topics-map-runner-report.md',
      'trigger-all-and-commit-report.md',
      'ultrafast-front-orchestrator-report.md',
      'ultrafast-orchestrator-report.md',
      'unused-media-scanner-report.md',
      'workflow-health-report.md',
      'workflow-testing-report.md',
      'workflow-testing-summary.md',
      'zion-website-improvements-summary.md',
      'test-results/**',
      'test_results.json',
      'tests/**',
      'theme-test.html',
      'test-server.js',
      'test-workflows-locally.sh',
      'trigger-workflows.sh',
      'start-automation.sh',
      'styles/**',
      'temp_check_env.cjs',
      'types/**',
      'utils/**',
      'workbox-config.js'
    ]
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      "no-console": "warn",
    },
  },
];