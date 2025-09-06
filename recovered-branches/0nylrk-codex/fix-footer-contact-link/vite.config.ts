import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node: path';
;
// https://vitejs.dev/config/
export default defineConfig({

  plugins: [react()]

<<<<<<< HEAD
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
=======

import {define_config} from 'vite';
=======
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
