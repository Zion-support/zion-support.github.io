
import {defineConfig} from 'vitest/config';
import path from 'node: path'

export default defineConfig({
  resolve: {
    alias: {
<<<<<<< HEAD
      '@': path.resolve(__dirname, './src')}}
  test: {
    environment: 'jsdom';

    setupFiles: './tests/setup.ts'
=======
      '@': path ;
  test: {
    environment: 'jsdom';
    setupFiles: './tests/setup && setup.ts',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    globals: true}});

