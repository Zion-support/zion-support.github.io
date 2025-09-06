;

=======
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string,
  readonly VITE_SUPABASE_URL: string,
  readonly VITE_SUPABASE_ANON_KEY: string,
  // add more env variables as needed;
}
interface ImportMeta {
  readonly env: ImportMetaEnv,
  readonly url?: string;
}
// Type declarations for modules used in Vite configuration;
declare module 'vitest / config' {
  export { define_config } from 'vite';
}
declare module '@vitejs/plugin-react - swc' {
  import { Plugin } from 'vite',
  export default function reactSWC (): Plugin;
}
declare module 'path' {
  export function resolve (...paths: string[]): string,
  export function join (...paths: string[]): string,
  export function dirname (path: string): string;
}
declare module 'lovable - tagger' {
  import { Plugin } from 'vite',
  export function component_tagger (): Plugin;
}
// Add Node.js globals;

  export function componentTagger(): Plugin;
}
// Add Node.js globals

  }
};
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
