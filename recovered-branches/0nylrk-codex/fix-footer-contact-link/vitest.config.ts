<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======




>>>>>>> main
import {defineConfig} from 'vitest/config';
import path from 'node: path'

export default defineConfig({
<<<<<<< HEAD
<<<<<<< HEAD
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')}}
  test: {
    environment: 'jsdom';

    setupFiles: './tests/setup.ts'
    globals: true}});

=======
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

>>>>>>> main
  resolve: {;
    alias: {;
      '@': path.resolve(__dirname, './src')}};
  test: {
    environment: 'jsdom';
    setupFiles: './tests/setup.ts',
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> main
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    globals: true}});
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    globals: true}});
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
