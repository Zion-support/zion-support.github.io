  import { Plugin } from 'vite',

// Type declarations for modules used in Vite configuration,
declare module 'vitest/config' {,
  export { defineConfig } from 'vite',
}
,
declare module '@vitejs/plugin-react-swc' {,
  export default function reactSWC(): Plugin,
}
,
declare module 'path' {,
  export function resolve(...paths: string[]): string,
  export function join(...paths: string[]): string,
  export function dirname(path: string): string}
,
declare module 'lovable-tagger' {,
  export function componentTagger(): Plugin,
}
,