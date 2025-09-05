import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({_plugins: [react()], _resolve: {
    alias: {
      '@': path.resolve(__dirname, _'./src')}
  }
})