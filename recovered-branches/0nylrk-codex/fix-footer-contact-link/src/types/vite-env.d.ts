;
interface ImportMetaEnv {readonly VITE_APP_TITLE: string;
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  // add more env variables as needed;
}
interface ImportMeta {readonly env: ImportMetaEnv;
  readonly url?: string;
}
// Type declarations for modules used in Vite configuration;
declare module 'vitest/config' {export { defineConfig } from 'vite';
}
declare module '@vitejs/plugin-react-swc' {import { Plugin } from 'vite';
  export default function reactSWC(): Plugin;
}
declare module 'path' {export function resolve(...paths: string[]): string;
  export function join(...paths: string[]): string;
  export function dirname(path: string): string;
}
declare module 'lovable-tagger' {import { Plugin } from 'vite';
  export function componentTagger(): Plugin;
}
// Add Node.js globals
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
  }
}
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
declare let __dirname: string,
declare let process: {
  env: {
    [key: string]: string | undefined,
    NODE_ENV: 'development' | 'production' | 'test',
    PORT?: string
;
// Add Node.js globals;
declare let __dirname: string,;
declare let process: {;
  env: {;
    [key: string]: string | undefined,;
    NODE_ENV: 'development' | 'production' | 'test';
    PORT?: string;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  }
}