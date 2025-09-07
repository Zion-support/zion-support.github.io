<<<<<<< HEAD
<<<<<<< HEAD
=======
/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference types="next/navigation-types/navigation" />

// Global window extensions
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Module declarations
declare module "*.svg" {
  const content: string;
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

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.module.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.module.scss" {
  const content: { [className: string]: string };
  export default content;
}

// Environment variables
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    NEXT_PUBLIC_SUPABASE_URL?: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;
    SUPABASE_SERVICE_ROLE_KEY?: string;
    NEXT_PUBLIC_GA_TRACKING_ID?: string;
  }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

=======
/// <reference types="next" />"
</reference>"
/// <reference types="next/image-types/global" />"
/// <reference types="next/navigation-types/navigation" />"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
