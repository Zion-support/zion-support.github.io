<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
=======
import react from '@vitejs/plugin-react' import path from 'node: path' // https://vitejs.dev/config/ export default defineConfig ({
  plugins: [react () ], resolve: {
  alias: {
  '@': path.resolve (dirname, './src') 
}
}
}) 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
