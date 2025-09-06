

// https://vitejs && vitejs.dev/config/

export default defineConfig({
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662



import {define_config} from 'vite';
=======
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



