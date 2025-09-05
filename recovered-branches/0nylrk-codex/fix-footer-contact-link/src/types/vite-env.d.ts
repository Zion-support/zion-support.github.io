


<<<<<<< HEAD
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string,
  readonly VITE_SUPABASE_URL: string,
  readonly VITE_SUPABASE_ANON_KEY: string,
  // add more env variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv,
  readonly url?: string
}

// Type declarations for modules used in Vite configuration
declare module 'vitest/config' {
  export { defineConfig } from 'vite'
}

declare module '@vitejs/plugin-react-swc' {
  import { Plugin } from 'vite',
  export default function reactSWC(): Plugin
}

declare module 'path' {
  export function resolve(...paths: string[]): string,
  export function join(...paths: string[]): string,
  export function dirname(path: string): string
}

declare module 'lovable-tagger' {
  import { Plugin } from 'vite',
  export function componentTagger(): Plugin
}

// Add Node.js globals
<<<<<<< HEAD
declare let __dirname: string,
=======
declare let __dirname: string;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
declare let process: {
  env: {
    [key: string]: string | undefined,
    NODE_ENV: 'development' | 'production' | 'test',
    PORT?: string
  }
},
=======
interface ImportMetaEnv {_readonly VITE_APP_TITLE: string;
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  // add more env variables as needed}

interface ImportMeta {_readonly env: ImportMetaEnv;
  readonly url?: string;}

// Type declarations for modules used in Vite configuration
declare module 'vitest/config' {_export { defineConfig} from 'vite';
}

declare module '@vitejs/plugin-react-swc' {_export default function reactSWC(): Plugin;}

declare module 'path' {_export function resolve(_...paths: string[]): string;
  export function join(_...paths: string[]): string;
  export function dirname(_path: string): string;}

declare module 'lovable-tagger' {_export function componentTagger(): Plugin;}

// Add Node.js globals
declare var __dirname: string;
declare var process: {_env: {
    [key: string]: string | undefined;
    NODE_ENV: 'development' | 'production' | 'test';
    PORT?: string;}
};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
