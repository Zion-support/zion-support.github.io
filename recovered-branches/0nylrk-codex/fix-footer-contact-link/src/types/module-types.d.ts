// Type declarations for modules used in Vite configuration;
declare module 'vitest / config' {
  export { define_config } from 'vite';
}


<<<<<<< HEAD
// Type declarations for modules used in Vite configuration
declare module 'vitest/config' {
  export { defineConfig } from 'vite'
}
declare module '@vitejs/plugin-react-swc' {
  import { Plugin } from 'vite';
  export default function reactSWC(): Plugin
}
declare module 'path' {
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

declare module '@vitejs/plugin-react-swc' {;
import {Plugin} from 'vite';
  export default function reactSWC(): Plugin
}

declare module 'path' {;
<<<<<<< HEAD
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
<<<<<<< HEAD
<<<<<<< HEAD
declare module 'lovable-tagger' {
  import { Plugin } from 'vite';
  export function componentTagger(): Plugin
}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

declare module 'lovable-tagger' {;

import {Plugin} from 'vite';
  export default function reactSWC (): Plugin;
}

;
<<<<<<< HEAD
=======

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
