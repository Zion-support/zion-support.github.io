// Next.js type definitions
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

// Global types
interface Window {
  gtag?: (...args: any[]) => void;
  dataLayer?: any[];
}

// Process environment variables
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    NEXT_PUBLIC_ANALYTICS_ID?: string;
    NEXT_PUBLIC_GA_ID?: string;
    NEXT_PUBLIC_SITE_URL?: string;
  }
}