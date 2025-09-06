<<<<<<< HEAD
import {defineConfig} from 'vitest/config';
import path from 'node: path',
export default defineConfig({
  resolve: {;
    alias: {;
      '@': path.resolve(__dirname, './src')}};
  test: {
    environment: 'jsdom';
    setupFiles: './tests/setup.ts',
=======
import { defineConfig } from 'vitest/config',;
import path from 'node: path',;
export default defineConfig({;
  resolve: {;
    alias: {;
      '@': path.resolve(__dirname, './src')}},;
  test: {;
    environment: 'jsdom',;
    setupFiles: './tests/setup.ts';
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    globals: true}});
