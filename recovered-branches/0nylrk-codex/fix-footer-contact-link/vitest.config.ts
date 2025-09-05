<<<<<<< HEAD
import { defineConfig } from 'vitest/config',
import path from 'node: path',
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')}},
  test: {
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    globals: true}}),
=======
import path from 'node:path';

export default defineConfig({_resolve: {
    alias: {
      '@': path.resolve(__dirname, _'./src')}},
  test: {_environment: 'jsdom', _setupFiles: './tests/setup.ts', _globals: true}});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
