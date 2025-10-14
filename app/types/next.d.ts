// Next.js type definitions
<<<<<<< HEAD

declare module "next" {
  export interface NextPageProps {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
  }
}

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.jpeg" {
  const content: string;
  export default content;
}

declare module "*.gif" {
  const content: string;
  export default content;
}

declare module "*.webp" {
  const content: string;
  export default content;
}
=======
declare module 'next' {
  interface NextConfig {
    // Add any custom Next.js configuration types here
    reactStrictMode?: boolean;
    swcMinify?: boolean;
    images?: {
      domains?: string[];
      formats?: string[];
    };
    experimental?: {
      optimizeCss?: boolean;
    };
    compiler?: {
      removeConsole?: boolean;
    };
  }
}
>>>>>>> cursor/fix-errors-and-merge-to-main-fabf
