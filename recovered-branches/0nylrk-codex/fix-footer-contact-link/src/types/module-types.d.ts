
// Type declarations for modules used in Vite configuration
declare module 'vitest/config' {
  export { defineConfig } from 'vite'
}
declare module '@vitejs/plugin-react-swc' {
  import { Plugin } from 'vite';
  export default function reactSWC(): Plugin
}
declare module 'path' {
  export function resolve(...paths: string[]): string;
<<<<<<< HEAD
  export function join(...paths: string[]): string;
=======
  export function join(...paths: string[]): string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  export function dirname(path: string): string
}
declare module 'lovable-tagger' {
  import { Plugin } from 'vite';
  export function componentTagger(): Plugin
}