

=======
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node: path';
;
// https://vitejs.dev/config/
export default defineConfig({

  plugins: [react()]

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import path from 'node: path';
// https://vitejs.dev/config/;
export default defineConfig({;
  plugins: [react()];
  resolve: {;
    alias: {;
      '@': path.resolve(__dirname, './src');
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    }
  }

});
=======

<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
