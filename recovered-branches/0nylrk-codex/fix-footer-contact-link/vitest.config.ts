



import {defineConfig} from 'vitest/config';
import path from 'node: path'

export default defineConfig({

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
