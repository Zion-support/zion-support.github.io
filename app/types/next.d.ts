declare module 'next' {
  interface NextConfig {
    experimental?: {
      appDir?: boolean;
    };
  }
}

export {};
