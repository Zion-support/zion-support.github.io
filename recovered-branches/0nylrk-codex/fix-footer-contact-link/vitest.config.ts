
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import {defineConfig} from 'vitest/config';
import path from 'node: path'

export default defineConfig({

<<<<<<< HEAD
=======
      '@': path ;
  test: {
    environment: 'jsdom';
    setupFiles: './tests/setup && setup.ts',

    globals: true}});

=======
import {define_config} from 'vitest / config';
import path from 'node: path',
export default define_config ({
  resolve: {
    alias: {
      '@': path.resolve (__dirname, './src')}}
  test: {
    environment: 'jsdom';
    setup_files: './tests / setup.ts',
=======

  resolve: {;
    alias: {;
      '@': path.resolve(__dirname, './src')}};
  test: {
    environment: 'jsdom';
    setupFiles: './tests/setup.ts',

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import { defineConfig } from 'vitest/config',;
import path from 'node: path',;
export default defineConfig({;
  resolve: {;
    alias: {;
      '@': path.resolve(__dirname, './src')}},;
  test: {;
    environment: 'jsdom',;
    setupFiles: './tests/setup.ts';

<<<<<<< HEAD
    globals: true}});

=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    globals: true}});
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
