import { defineConfig } from 'vitest/config';
import path from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
<<<<<<< HEAD
=======
      '@': path.resolve(__dirname, './src')}},
  test: {
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    globals: true}});
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
