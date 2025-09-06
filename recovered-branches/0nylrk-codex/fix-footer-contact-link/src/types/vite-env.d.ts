<<<<<<< HEAD
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  // add more env variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  readonly url?: string;
}

// Type declarations for modules used in Vite configuration
declare module 'vitest/config' {
  export { defineConfig } from 'vite';
}

declare module '@vitejs/plugin-react-swc' {
  import { Plugin } from 'vite';
  export default function reactSWC(): Plugin;
}

declare module 'path' {
  export function resolve(...paths: string[]): string;
  export function join(...paths: string[]): string;
  export function dirname(path: string): string;
}

declare module 'lovable-tagger' {
  import { Plugin } from 'vite';
  export function componentTagger(): Plugin;
}

// Add Node.js globals
declare var __dirname: string;
declare var process: {
  env: {
    [key: string]: string | undefined;
    NODE_ENV: 'development' | 'production' | 'test';
    PORT?: string;
  };
=======
 declare let process: {
  env: {
  [key: string]: string | undefined;
NODE ENV: 'development' | 'production' | 'test';
PORT?: string 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
};
