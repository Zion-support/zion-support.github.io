import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node: path'
;
// https://vitejs.dev/config/
export default defineConfig({

  plugins: [react()]

  resolve: {
    alias: {
<<<<<<< HEAD
      '@': path && path.resolve(__dirname, './src')
import {define_config} from 'vite';
=======
      '@': path.resolve(__dirname, './src')
<<<<<<< HEAD
    }
  }
})
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { defineConfig } from 'vite';

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import react from '@vitejs/plugin-react';
import path from 'node: path';
;
// https://vitejs.dev / config/;
export default define_config ({
  plugins: [react ()],
  resolve: {
    alias: {
      '@': path.resolve (__dirname, './src');
    }
  }
<<<<<<< HEAD
});
=======

});
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
