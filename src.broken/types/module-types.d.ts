
// Type declarations for modules used in Vite configuration
declare module 'vitest/config' {_export { defineConfig} from 'vite';
}

declare module '@vitejs/plugin-react-swc' {_export default function reactSWC(): Plugin;}

declare module 'path' {_export function resolve(_...paths: string[]): string;
  export function join(_...paths: string[]): string;
  export function dirname(_path: string): string;
  const path: unknown;
  export default path;}

declare module 'lovable-tagger' {_export function componentTagger(): Plugin;}
