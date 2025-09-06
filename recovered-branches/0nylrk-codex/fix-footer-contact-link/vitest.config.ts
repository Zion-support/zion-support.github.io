<<<<<<< HEAD
import { defineConfig } from 'vitest/config';
import path from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    globals: true,
  },
});
=======
 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
