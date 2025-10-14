import React from "react";
import { Helmet } from "react-helmet-async";

declare module "next" {""
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
  }
}

declare module "*.svg" {""
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

declare module "*.png" {""
  const content: string;
}

declare module "*.jpg" {""
  const content: string;
}

declare module "*.jpeg" {""
  const content: string;
}

declare module "*.gif" {""
  const content: string;
}

declare module "*.webp" {""
  const content: string;
}
  }
  interface NextConfig { // Add any Next.js specific types here; }
  }
}
// Export a utility function;
export const nextUtil = () => { // Implementation;
  return true; }
};
export default nextUtil;
'

