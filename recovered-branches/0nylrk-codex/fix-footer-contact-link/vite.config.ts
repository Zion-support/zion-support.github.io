<<<<<<< HEAD
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node: path'
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
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
