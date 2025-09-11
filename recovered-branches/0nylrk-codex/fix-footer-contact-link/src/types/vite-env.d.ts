>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string,
  readonly VITE_SUPABASE_URL: string,
  readonly VITE_SUPABASE_ANON_KEY: string,
=======
;
interface ImportMetaEnv {readonly VITE_APP_TITLE: string;
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;  // add more env variables as needed;
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

=======
=======  export function componentTagger(): Plugin;
}
// Add Node.js globals



=======
<<<<<<< HEAD
  }
<<<<<<< HEAD
}
  }
};
  }
};
=======
}=======
  }
};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
