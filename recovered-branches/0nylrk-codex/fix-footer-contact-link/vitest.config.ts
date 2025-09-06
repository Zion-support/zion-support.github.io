<<<<<<< HEAD
import { defineConfig } from 'vitest/config';
<<<<<<< HEAD
import path from 'node: path';
=======
import {defineConfig} from 'vitest/config';
import path from 'node: path'
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
import path from 'node:path';
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')}}
  test: {
    environment: 'jsdom';
<<<<<<< HEAD
    setupFiles: './tests/setup.ts';
    globals: true}}),
=======
    setupFiles: './tests/setup.ts'
    globals: true}});
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
