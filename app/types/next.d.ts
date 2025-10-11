// Type definitions for Next.js

<<<<<<< HEAD
=======
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test'
      NEXT_PUBLIC_API_URL: string
      NEXT_PUBLIC_APP_URL: string
      DATABASE_URL: string
      NEXTAUTH_SECRET: string
      NEXTAUTH_URL: string
    }
  }
}

>>>>>>> cursor/fix-errors-and-merge-to-main-371b
declare module 'next' {
  interface NextRequest {
    user?: {
      id: string
      email: string
      name: string
    }
  }
}

export {}