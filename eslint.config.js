import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import eslintConfigPrettier from "eslint-config-prettier";
// import eslintConfigNext from 'eslint-config-next';

const projectRoot = import.meta.dirname;
const tsPluginDef = { "@typescript-eslint": tseslint.plugin };

export default tseslint.config(
  // 1. Global Ignores
  {
    ignores: ["node_modules/**", "dist/**", "out/**", "coverage/**", "build/**", ".next/**", "public/build/**"],
  },

  // eslintConfigNext,

  // Fallback for problematic files (non-type-aware TS linting)
  {
    files: [
      "src/hooks/useAuth.tsx",
      "src/components/ui/sidebar/index.tsx",
      "src/types/pwa.d.ts",
      "vite.config.d.ts"
    ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      '**/typechain-types.disabled/**',
      'test*.js',
      'test*.ts',
      'test*.tsx'
      '**/src_backup/**',
      '**/src_disabled/**',
      '**/services.disabled.temp/**',
      'test-*.js',
      'workbox-config.js',
      '*.backup.*',
      '**/data/*.ts',
      '**/pages/*.tsx',
      '**/public/*.js',
      '**/*.mjs',
      '**/server.mjs',
      '**/seed.js',
      '**/jest.setup.js',
      '**/extractFailingCode.js',
      '**/fix-corrupted-files.js',
      '**/fix-corruption.js',
      '**/fix-merge-conflicts.js',
      '**/fix-syntax-errors.js',
      '**/mcp-automation-system.js',
      '**/run-cursor-memory-automation.js',
      '**/script.js',
      '**/simple-mcp-test.js',
      '**/simple-server.js',
      '**/start-all-automations.js',
      '**/backup/**',
      '**/.temp_backup_components/**',
      '**/src.broken/**',
      '**/data.temp/**',
      '**/contracts/**',
      '**/cypress/**',
      '**/src/components/disabled/**',
      '**/src/components/header/**',
      '**/src/components/ui/Futuristic*.tsx',
      '**/src/components/ui/accordion.tsx',
      '**/src/components/ui/alert.tsx',
      '**/src/components/ui/avatar.tsx',
      '**/src/components/ui/badge.tsx',
      '**/src/components/ui/button.tsx',
      '**/src/components/ui/card.tsx',
      '**/src/components/ui/floating-action-button.tsx',
      '**/src/components/ui/input.tsx',
      '**/src/components/ui/loading-spinner.tsx',
      '**/src/components/ui/loading.tsx',
      '**/src/components/ui/select.tsx',
      '**/src/components/ui/separator.tsx',
      '**/src/components/ui/skeleton.tsx',
      '**/src/components/ui/steps.tsx',
      '**/src/components/ui/tabs.tsx',
      '**/src/components/ui/textarea.tsx',
      '**/src/components/ui/use-toast.tsx',
      '**/src/hooks/use-toast.ts',
      '**/src/hooks/usePerformance.ts',
      '**/src/lib/utils.ts',
      '**/src/main.tsx',
      '**/src/types/listings.ts',
      '**/src/components/AccessibilityEnhancer.tsx',
      '**/src/components/Breadcrumb.tsx',
      '**/src/components/ErrorBoundary.tsx',
      '**/src/components/GradientHeading.tsx',
      '**/src/components/LazyImage.tsx',
      '**/src/components/LoadingSkeleton.tsx',
      '**/src/components/SEO.tsx',
      '**/src/components/SecurityHeaders.tsx',
      '**/src/components/Sidebar.tsx',
      '**/src/components/TrustIndicators.tsx',
      '**/auto-fix-watcher.js',
      '**/auto-run-all.js',
      '**/comprehensive-automation-test.js',
      '**/debug-paths.js',
      '**/pages/**'
