<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
;
// https://vitejs.dev/config/;
export default defineConfig({;
  plugins:[react()],;
  resolve:{;
    alias:{;
      '@':path.resolve(__dirname, './src');
    }
=======
import react from '@vitejs/plugin-react'
import path from 'node: path'

// https://vitejs.dev/config/
export default defineConfig({_plugins: [react()], _resolve: {
    alias: {
      '@': path.resolve(__dirname, _'./src')}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
  }
})