import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node: path'
;
// https://vitejs.dev/config/
}

export default defineConfig({
<<<<<<< HEAD
  plugins: [react()];
=======
  plugins: [react()]
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})