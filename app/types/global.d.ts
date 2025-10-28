// Global type definitions

declare global {
interface Window {
    gtag: (..._args: unknown[]) => void;
    dataLayer?: unknown[];
  }
cursor/fix-errors-and-merge-to-main-7271
}

export {}