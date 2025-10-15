<<<<<<< HEAD
/// Comment

export interface next.d {
  id: string;
  name: string;
}
=======
declare module 'next' {
  interface NextPageProps {
    params: { [key: string]: string | string[] | undefined };
    searchParams: { [key: string]: string | string[] | undefined };
  }
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      NEXT_PUBLIC_API_URL?: string;
    }
  }
}
>>>>>>> 82730201b6fc9753a1b36a2b09669d51935f2624
