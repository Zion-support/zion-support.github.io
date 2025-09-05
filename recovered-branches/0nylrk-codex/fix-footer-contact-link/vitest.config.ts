import path from 'node:path';

export default defineConfig({_resolve: {
    alias: {
      '@': path.resolve(__dirname, _'./src')}},
  test: {_environment: 'jsdom', _setupFiles: './tests/setup.ts', _globals: true}});
