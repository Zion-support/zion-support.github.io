<<<<<<< HEAD
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
=======
'use client';
// Next.js type definitions
declare module 'next' {}
  interface NextConfig {}
    // Add any custom Next.js configuration types here
    [key: string]: unknown;
  }
}

// Export a default configuration object
const nextConfig = {};
  // Configuration options
};

export default nextConfig;
// Next.js type declarations;
declare module 'next' {';'
  interface NextApiRequest {}
    user?: any;}
  }
  interface NextConfig {}
    // Add any Next.js specific types here;}
  }
}
// Export a utility function;
export const nextUtil = () => {;
  // Implementation;
  return true;}
};
export default nextUtil;'
>>>>>>> cursor/fix-errors-and-merge-to-main-ca79
