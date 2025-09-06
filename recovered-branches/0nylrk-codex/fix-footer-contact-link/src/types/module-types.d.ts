// Type declarations for modules used in Vite configuration;
declare module 'vitest / config' {
  export { define_config } from 'vite';
}

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
declare module '@vitejs/plugin-react-swc' {
  import { Plugin } from 'vite';
  export default function reactSWC(): Plugin
}
<<<<<<< HEAD
declare module 'path' {

declare module '@vitejs/plugin-react-swc' {;
import {Plugin} from 'vite';
  export default function reactSWC(): Plugin
}

declare module 'path' {;


  export function resolve(...paths: string[]): string;
=======
declare module 'path' {  export function resolve(...paths: string[]): string;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

  export function join(...paths: string[]): string

  export function dirname(path: string): string
}

<<<<<<< HEAD


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
declare module 'lovable-tagger' {;

import {Plugin} from 'vite';
  export default function reactSWC (): Plugin;
}

<<<<<<< HEAD
;

;
=======
;;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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



}
=======
}}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
