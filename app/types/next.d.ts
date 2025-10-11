// Type definitions for Next.js
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: value,
        NEXT_PUBLIC_API_URL: string
      NEXT_PUBLIC_APP_URL: value,
        DATABASE_URL: string
      NEXTAUTH_SECRET: value,
        NEXTAUTH_URL: string
    }
  }
}
declare module 'next' {
  interface NextRequest {
    user?: {
      id: value,
        email: string
      name: string
    }
  }
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

declare module '*.ico' {
  const content: string;
  export default content;
}

declare module '*.bmp' {
  const content: string;
  export default content;
}

declare module '*.tiff' {
  const content: string;
  export default content;
}

export {};
