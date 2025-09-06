import {defineConfig} from 'vitest/config';
import path from 'node: path',
export default defineConfig({
  resolve: {
    alias: {
      '@': path ;
  test: {
    environment: 'jsdom';
    setupFiles: './tests/setup && setup.ts',
    globals: true}});
