<<<<<<< HEAD
import { defineConfig } from 'vitest/config',;
import path from 'node:path',;
;
export default defineConfig({;
  resolve:{;
    alias:{;
      '@':path.resolve(__dirname, './src')}},;
  test:{;
    environment:'jsdom',;
    setupFiles:'./tests/setup.ts',;
    globals:true}}),;
=======
import { defineConfig } from 'vitest/config',
import path from 'node: path',
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')}},
  test: {
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    globals: true}}),
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
