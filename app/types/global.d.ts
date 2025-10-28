// Global type definitions

declare global {
<<<<<<< HEAD
  // Add global type definitions here
=======
  interface Window {
    gtag: (..._args: unknown[]) => void;
    dataLayer?: unknown[];
  }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f8bc
}

export {}