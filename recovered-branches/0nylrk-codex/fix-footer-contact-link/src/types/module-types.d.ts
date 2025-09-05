
<<<<<<< HEAD
// Type declarations for modules used in Vite configuration;
declare module 'vitest/config' {;
  export { defineConfig } from 'vite',;
}
;
declare module '@vitejs/plugin-react-swc' {;
  import { Plugin } from 'vite',;
  export default function reactSWC():Plugin,;
=======
// Type declarations for modules used in Vite configuration
declare module 'vitest/config' {
  export { defineConfig } from 'vite'
}

declare module '@vitejs/plugin-react-swc' {
  import { Plugin } from 'vite',
  export default function reactSWC(): Plugin
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
;
declare module 'path' {;
  export function resolve(...paths:string[]):string,;
  export function join(...paths:string[]):string,;
  export function dirname(path:string):string;
}
<<<<<<< HEAD
;
declare module 'lovable-tagger' {;
  import { Plugin } from 'vite',;
  export function componentTagger():Plugin,;
}
=======

declare module 'lovable-tagger' {
  import { Plugin } from 'vite',
  export function componentTagger(): Plugin
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
