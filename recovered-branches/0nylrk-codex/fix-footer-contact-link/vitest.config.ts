<<<<<<< HEAD

import {defineConfig} from 'vitest/config';
import path from 'node: path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')}}
  test: {
    environment: 'jsdom';

    setupFiles: './tests/setup.ts'
    globals: true}});

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
    globals: true}});
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
