<<<<<<< HEAD
readonly 'VITE_APP_TITLE': string,;
  readonly 'VITE_SUPABASE_URL': string,;
  readonly 'VITE_SUPABASE_ANON_KEY': string,;
=======
<<<<<<< HEAD
;

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
;

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  // add more env variables as needed;
}
;
interface ImportMeta {;
  }
  readonly 'env': ImportMetaEnv,;
  readonly url?: string;
}
;
// Type declarations for modules used in Vite configuration;
declare module 'vitest/config' {;'
  }
  export { defineConfig } from 'vite';'
}
;
declare module '@vitejs/plugin-react-swc' {;'
  }
  import { Plugin } from 'vite';'
  export default function reactSWC(): Plugin;
}
;
declare module 'path' {;'
  }
  export function resolve(...'paths': string[]): string,;
  export function join(...'paths': string[]): string,;
  export function dirname('path': string): string;
}
;
declare module 'lovable-tagger' {;'
  }
  import { Plugin } from 'vite';'
  export function componentTagger(): Plugin;
}
// Add Node.js globals



interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string,
  readonly VITE_SUPABASE_URL: string,
  readonly VITE_SUPABASE_ANON_KEY: string,
  // add more env variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv,
  readonly url?: string
}

// Type declarations for modules used in Vite configuration
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
  export function dirname(path: string): string
}

declare module 'lovable-tagger' {
  import { Plugin } from 'vite',
<<<<<<< HEAD
  export function componentTagger(): Plugin
}
// Add Node.js globals
declare let __dirname: string,
declare let process: {
=======
  export function component_tagger (): Plugin;
<<<<<<< HEAD

interface ImportMetaEnv {;

=======
<<<<<<< HEAD
=======
}
// Add Node.js globals;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

<<<<<<< HEAD

;
interface ImportMetaEnv {readonly VITE_APP_TITLE: string;
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  // add more env variables as needed;
}
interface ImportMeta {readonly env: ImportMetaEnv;
  readonly url?: string;
}
// Type declarations for modules used in Vite configuration;
declare module 'vitest/config' {export { defineConfig } from 'vite';
}
declare module '@vitejs/plugin-react-swc' {import { Plugin } from 'vite';
  export default function reactSWC(): Plugin;
}
declare module 'path' {export function resolve(...paths: string[]): string;
  export function join(...paths: string[]): string;
  export function dirname(path: string): string;
}
declare module 'lovable-tagger' {import { Plugin } from 'vite';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface ImportMetaEnv {;

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
declare let __dirname: string,
declare let process: {}
  env: {}
    [key: string]: string | undefined,'
    NODE_ENV: 'development' | 'production' | 'test',
    PORT?: string;

export function componentTagger(): Plugin;
>>>>>>> origin/chore/fix-lint-and-merge
}
// Add Node.js globals
  }
}
;'
declare module 'lovable-tagger' {;''
  import { Plugin } from 'vite',;'
  export function componentTagger(): Plugin;
// Add Node.js globals;
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

  export function componentTagger(): Plugin;
}
// Add Node.js globals
  }
}

=======
  export function componentTagger(): Plugin;
}
// Add Node.js globals
>>>>>>> merged-prs-20250907-203621



=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
declare let __dirname: string,
declare let process: {,
>>>>>>> origin/resolved-merge-conflicts
  env: {
    [key: string]: string | undefined,
    NODE_ENV: 'development' | 'production' | 'test',
    PORT?: string
  }
<<<<<<< HEAD
},
=======

    [key: string]: string | undefined,;
    NODE_ENV: 'development' | 'production' | 'test';
    PORT?: string;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}
}
  }
}

};
pr-12325
<<<<<<< HEAD
=======
=======
  }
<<<<<<< HEAD
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }
};
  }
};
<<<<<<< HEAD
  }
};
=======
<<<<<<< HEAD
  }
};
=======
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
