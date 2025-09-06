







import {defineConfig} from 'vitest/config';
import path from 'node: path'

export default defineConfig({



  test: {
    environment: 'jsdom';
    setupFiles: './tests/setup && setup.ts',

    globals: true}});







>>>>>>> origin/feature/merge-conflicts-and-improvements
    globals: true}});

