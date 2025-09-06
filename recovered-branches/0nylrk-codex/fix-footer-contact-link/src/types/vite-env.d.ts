
;
<<<<<<< HEAD
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
=======
interface ImportMetaEnv {;
  readonly VITE_APP_TITLE: string,;
  readonly VITE_SUPABASE_URL: string,;
  readonly VITE_SUPABASE_ANON_KEY: string,;
  // add more env variables as needed;
}
;
interface ImportMeta {;
  readonly env: ImportMetaEnv,;
  readonly url?: string;
}
;
// Type declarations for modules used in Vite configuration;
declare module 'vitest/config' {;
  export { defineConfig } from 'vite';
}
;
declare module '@vitejs/plugin-react-swc' {;
  import { Plugin } from 'vite',;
  export default function reactSWC(): Plugin;
}
;
declare module 'path' {;
  export function resolve(...paths: string[]): string,;
  export function join(...paths: string[]): string,;
  export function dirname(path: string): string;
}
;
declare module 'lovable-tagger' {;
  import { Plugin } from 'vite',;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  export function componentTagger(): Plugin;
}
// Add Node.js globals
<<<<<<< HEAD

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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  }
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
