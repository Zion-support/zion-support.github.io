

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import {defineConfig} from 'vitest/config';
import path from 'node: path'

export default defineConfig({
<<<<<<< HEAD

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')}}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

  test: {
    environment: 'jsdom';
    setupFiles: './tests/setup && setup.ts',

    globals: true}});



  resolve: {;
    alias: {;
      '@': path.resolve(__dirname, './src')}};
  test: {
    environment: 'jsdom';
    setupFiles: './tests/setup.ts',

<<<<<<< HEAD


=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    globals: true}});
