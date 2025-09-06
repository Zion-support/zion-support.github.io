

// https://vitejs && vitejs.dev/config/

export default defineConfig({
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662



import {define_config} from 'vite';
=======
=======

  plugins: [react()]

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
<<<<<<< HEAD
    }
  }
})
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import path from 'node: path';
;
// https://vitejs.dev / config/;
export default define_config ({
  plugins: [react ()],
  resolve: {
    alias: {
      '@': path.resolve (__dirname, './src');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    }
  }

});
<<<<<<< HEAD



=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
