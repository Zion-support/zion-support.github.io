
// Type declarations for modules used in Vite configuration
<<<<<<< HEAD
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
  export function dirname(path: string): string,
  const path: any,
  export default path
}

declare module 'lovable-tagger' {
  import { Plugin } from 'vite',
  export function componentTagger(): Plugin
}
=======
declare module 'vitest/config' {_export { defineConfig} from 'vite';
}

declare module '@vitejs/plugin-react-swc' {_export default function reactSWC(): Plugin;}

declare module 'path' {_export function resolve(_...paths: string[]): string;
  export function join(_...paths: string[]): string;
  export function dirname(_path: string): string;
  const path: unknown;
  export default path;}

declare module 'lovable-tagger' {_export function componentTagger(): Plugin;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
