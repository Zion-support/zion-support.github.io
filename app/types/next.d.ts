<<<<<<< HEAD
<<<<<<< HEAD
declare module 'next' {
  export interface NextPageProps {
    params: { [key: string]: string | string[] | undefined };
    searchParams: { [key: string]: string | string[] | undefined };
  }
}
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
// Next.js type definitions

declare module 'next' {
  interface NextConfig {
    experimental?: {
      appDir?: boolean;
    };
  }
}

export {};

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
