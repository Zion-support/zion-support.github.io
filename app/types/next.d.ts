// Next.js type definitions
<<<<<<< HEAD
declare module "next" {
  export interface NextPageProps {
  }
}
declare module "*.svg" {
}
declare module "*.png" {
}
declare module "*.jpg" {
}
declare module "*.jpeg" {
}
declare module "*.gif" {
}
declare module "*.webp" {
}
=======

declare module 'next' {
  interface NextConfig {
    experimental?: {
      appDir?: boolean;
    };
  }
}

export {};
>>>>>>> origin/main
