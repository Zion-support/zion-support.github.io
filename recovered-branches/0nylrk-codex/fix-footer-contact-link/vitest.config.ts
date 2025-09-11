



import {defineConfig} from 'vitest/config';
import path from 'node: path'

export default defineConfig({
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      '@': path ;
  test: {
    environment: 'jsdom';
    setupFiles: './tests/setup && setup.ts',

    globals: true}});

    setupFiles: './tests/setup.ts'
    globals: true}});

==============
=======
  resolve: {;
    alias: {;
      '@': path.resolve(__dirname, './src')}};
  test: {
    environment: 'jsdom';
    setupFiles: './tests/setup.ts',
==============

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { defineConfig } from 'vitest/config',;
import path from 'node: path',;
export default defineConfig({;
  resolve: {;
    alias: {;
      '@': path.resolve(__dirname, './src')}},;
  test: {;
    environment: 'jsdom',;
    setupFiles: './tests/setup.ts';

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    globals: true}});