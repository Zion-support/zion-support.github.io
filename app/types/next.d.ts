// Type definitions for Next.js

declare module 'next' {
  interface NextRequest {
    user?: {
      id: string;
      email: string;
      name: string;
    };
  }
}

declare module 'next/image' {
  interface ImageProps {
    alt: string;
    src: string;
    width?: number;
    height?: number;
    className?: string;
  }
}

declare module 'next/link' {
  interface LinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
  }
}

export {};