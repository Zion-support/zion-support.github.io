




import {define_config} from 'vite';


export default defineConfig({

  plugins: [react()]


import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import path from 'node: path';
// https://vitejs.dev/config/;
export default defineConfig({;
  plugins: [react()];
  resolve: {;
    alias: {;
      '@': path.resolve(__dirname, './src');


