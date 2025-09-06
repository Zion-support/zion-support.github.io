<<<<<<< HEAD
// Type declarations for modules used in Vite configuration;
declare module 'vitest / config' {
  export { define_config } from 'vite';
}


=======

// Type declarations for modules used in Vite configuration
declare module 'vitest/config' {
  export { defineConfig } from 'vite'
}
declare module '@vitejs/plugin-react-swc' {
  import { Plugin } from 'vite';
  export default function reactSWC(): Plugin
}
declare module 'path' {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

declare module '@vitejs/plugin-react-swc' {;
import {Plugin} from 'vite';
  export default function reactSWC(): Plugin
}

declare module 'path' {;
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  export function resolve(...paths: string[]): string;

  export function join(...paths: string[]): string

  export function dirname(path: string): string
}

declare module '@vitejs/plugin-react - swc' {


declare module 'lovable-tagger' {;

import {Plugin} from 'vite';
  export default function reactSWC (): Plugin;
}

;

<<<<<<< HEAD
=======
=======
declare module 'lovable-tagger' {
  import { Plugin } from 'vite';
  export function componentTagger(): Plugin
}

declare module 'lovable-tagger' {;
import {Plugin} from 'vite';
  export function componentTagger(): Plugin
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
