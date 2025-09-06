<<<<<<< HEAD
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
  const path: any;
  export default path;
}

declare module 'lovable-tagger' {
  import { Plugin } from 'vite';
  export function componentTagger(): Plugin;
}
=======
 // Type declarations for modules used in Vite configuration 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
