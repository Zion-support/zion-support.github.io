

// https://vitejs && vitejs.dev/config/

export default defineConfig({
<<<<<<< HEAD
// https://vitejs && vitejs.dev/config/

export default defineConfig({



import {define_config} from 'vite';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import path from 'node: path';
export default defineConfig({

  plugins: [react()]


import {define_config} from 'vite';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import path from 'node: path';
// https://vitejs.dev/config/;
export default defineConfig({;
  plugins: [react()];
  resolve: {;
    alias: {;
      '@': path.resolve(__dirname, './src');
;
=======

import {define_config} from 'vite';
=======import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import path from 'node: path';;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
// https://vitejs.dev / config/;
export default define_config ({
  plugins: [react ()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
