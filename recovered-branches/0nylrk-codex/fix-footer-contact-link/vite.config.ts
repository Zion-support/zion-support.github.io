import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node: path';
;
// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD

  plugins: [react()]


  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')


=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662



import {define_config} from 'vite';
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import path from 'node: path';
// https://vitejs.dev/config/;
export default defineConfig({;
  plugins: [react()];
  resolve: {;
    alias: {;
      '@': path.resolve(__dirname, './src');
    }
  }

});



<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
