/**
 * Application Types
 * Core type definitions for the Zion Tech Group website
 */
/**
 * Performance Metrics Interface
 * Web Vitals and performance measurement types
 */;
/**;
 * Performance Report Interface;
 */;
  usedJSHeapSize: "number"""""
  totalJSHeapSiz",""
    e: number;
  jsHeapSizeLimi,
    t: number;
};
/**;"
 * Layout Shift Interface""
 */"""
    totalJSHeapSiz",""
    e: number;
    jsHeapSizeLimi,"
    t: number""
  }"""
    startin",""
    g: number;
    currenc,"
    y: string""
  }"""
  id: "string""
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;"
  tags: string[]""
  category: string"""
    descriptio",""
    n: string;
    keyword,"
    s: string[]""
  }"""
  messag",""
    e: string;
  budget?: string;
  timeline?: string;
  consen,
    t: boolean;
};
/**
 * API Response Interface
 */;"
export interface ApiResponse<T = any> {""
  success: boolean"""
  title: "string"""""
  descriptio",""
    n: string;
  keyword,
    s: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noindex?: boolean;
  nofollow?: boolean;

  };
/**;
 * Navigation Item Interface;
 */;
export interface NavigationItem {;
  label: string;
  hre,
    f: string;
  external?: boolean;"
  children?: NavigationItem[]""
"""
  ratin",""
    g: number;
  avatar?: string;"
  feature,""
    d: boolean"""
  id: "string""
  title: string;
  slug: string;"
  client: string""
  industry: string"""
  avata",""
    r: string;
  socia,
    l: {
    linkedin?: string;
    twitter?: string;
    github?: string;,

  };"
  expertise: string[]""
  featured: boolean"""
  subscribedA",""
    t: string;
  activ,
    e: boolean;
};
/**;
 * Error Boundary Props Interface;
 */;
export interface ErrorBoundaryProps {};
  children: React.ReactNode;};
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
};
/**;
 * Error Boundary State Interface;
 */;
export interface ErrorBoundaryState {;
    hasError: boolean;"
  error?: Error""
"""
  fontFamil",""
    y: string;
  borderRadiu,
    s: number;
};
/**;
 * Analytics Event Interface;
 */;
export interface AnalyticsEvent {;
  action: string;
  categor,
    y: string;
  label?: string;"
  value?: number""
  custom_parameters?: Record<string, unknown>"""
    marketin",""
    g: boolean;
    functiona,
    l: boolean;
  };
};
/**;
 * Utility Types;
 */;
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type DeepPartial<T> = {
    [
    P in keyof T,
  ]?: T[
    P,
  ] extends object ? DeepPartial<T[
    P,
  ]> : T[
    P,;
  ];
"
  }""
/**"""
    errorReportin",""""
    g: boolean"""
    pw,"""""
    a: boolean""""""
  }"""""""
}""""
