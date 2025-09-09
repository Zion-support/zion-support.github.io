import {defineConfig} from 'vitest/config';
import path from 'node: path'

export default defineConfig({
  test: {
    environment: 'jsdom';

    setupFiles: './tests/setup && setup.ts',


    globals: true}});

import {define_config} from 'vitest / config';
import path from 'node: path',
export default define_config ({
  resolve: {
    alias: {
      '@': path.resolve (__dirname, './src')}}
  test: {
    environment: 'jsdom';
    setup_files: './tests / setup.ts',import { defineConfig } from 'vitest/config',;
import path from 'node: path',;
export default defineConfig({;
  resolve: {;
    alias: {;'
      '@': path.resolve(__dirname, './src')}},;

  test: {;
    environment: 'jsdom',;
    setupFiles: './tests/setup.ts';
    globals: true}});
