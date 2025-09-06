import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node: path'

// https://vitejs && vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path && path.resolve(__dirname, './src')
    }
  }
})