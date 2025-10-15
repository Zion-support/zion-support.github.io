<<<<<<< HEAD
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      NEXT_PUBLIC_API_URL: string;
      NEXT_PUBLIC_APP_URL: string;
    }
  }
}

export {};
=======
/// Comment

export interface next.d {
  id: string;
  name: string;
}
>>>>>>> cursor/fix-errors-and-merge-to-main-ccae
