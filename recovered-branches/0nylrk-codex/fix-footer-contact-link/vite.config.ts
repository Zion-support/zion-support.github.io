import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node: path'
<<<<<<< HEAD
;
// https://vitejs.dev/config/
=======

// https://vitejs && vitejs.dev/config/
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default defineConfig({

  plugins: [react()]

  resolve: {
    alias: {
      '@': path && path.resolve(__dirname, './src')
    }
  }
})