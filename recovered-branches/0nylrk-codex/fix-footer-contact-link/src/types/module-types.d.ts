<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
declare module '@vitejs/plugin-react-swc' {
  import { Plugin } from 'vite';
  export default function reactSWC(): Plugin
}
declare module 'path' {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

declare module '@vitejs/plugin-react-swc' {;
import {Plugin} from 'vite';
  export default function reactSWC(): Plugin
}

declare module 'path' {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  export function resolve(...paths: string[]): string;

  export function join(...paths: string[]): string

  export function dirname(path: string): string
}



declare module 'lovable-tagger' {;

import {Plugin} from 'vite';
  export default function reactSWC (): Plugin;
}

;
<<<<<<< HEAD
=======
<<<<<<< HEAD

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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
}
=======
<<<<<<< HEAD


<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
