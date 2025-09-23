import { defineConfig } from 'vitest/config';
import path from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
<<<<<<< HEAD
      '@': path.resolve(__dirname, './src')}},
  test: {
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    globals: true}});
=======
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    globals: true,
  },
});
>>>>>>> origin/auto/autonomy-17186719616
