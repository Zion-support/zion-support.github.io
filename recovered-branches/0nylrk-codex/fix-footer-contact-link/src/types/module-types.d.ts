
// Type declarations for modules used in Vite configuration
declare module 'vitest/config' {
  export { defineConfig } from 'vite'
}
<<<<<<< HEAD
<<<<<<< HEAD
declare module '@vitejs/plugin-react-swc' {
  import { Plugin } from 'vite';
  export default function reactSWC(): Plugin
}
declare module 'path' {
=======

declare module '@vitejs/plugin-react-swc' {;
import {Plugin} from 'vite';
  export default function reactSWC(): Plugin
}

declare module 'path' {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  export function resolve(...paths: string[]): string;

  export function join(...paths: string[]): string

  export function dirname(path: string): string
}
<<<<<<< HEAD
declare module 'lovable-tagger' {
  import { Plugin } from 'vite';
  export function componentTagger(): Plugin
}
=======

declare module 'lovable-tagger' {;
import {Plugin} from 'vite';
  export function componentTagger(): Plugin
}
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
;
declare module '@vitejs/plugin-react-swc' {;
  import { Plugin } from 'vite',;
  export default function reactSWC(): Plugin;
}
;
declare module 'path' {;
  export function resolve(...paths: string[]): string,;
  export function join(...paths: string[]): string;
  export function dirname(path: string): string;
}
;
declare module 'lovable-tagger' {;
  import { Plugin } from 'vite';
  export function componentTagger(): Plugin;
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
