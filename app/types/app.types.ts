/**
 * Application Types
 * Core type definitions for the Zion Tech Group website
 */
/**
 * Performance Metrics Interface
 * Web Vitals and performance measurement types
 */;
export interface PerformanceMetrics {;
  fcp?: number; // First Contentful Paint;
  lcp?: number; // Largest Contentful Paint;};
  fid?: number; // First Input Delay;};
  cls?: number; // Cumulative Layout Shift;};
  ttfb?: number; // Time to First Byte};
};
/**;
 * Performance Report Interface;
 */;
<<<<<<< HEAD
export interface PerformanceReport {;
  webVitals: "Partial<PerformanceMetrics>;""
  resources: ResourceStats;"
  memor",""
    y: MemoryStats | null;
  timestam,
    p: number;
};
/**;";
 * Resource Statistics Interface;";";
 */;";";";
export interface ResourceStats {";";";
  total: "number;""
  scripts: number;";";";
  styles: number;"
  image",""
    s: number;
  font,
    s: number;
};
/**;";
 * Memory Statistics Interface;";";
 */;";";";
export interface MemoryStats {";";";
  usedJSHeapSize: "number;""
  totalJSHeapSiz",""
=======
export interface PerformanceReport {
  webVitals: "Partial<PerformanceMetrics>;""";
  resources: ResourceStats;
  memor",""";
    y: MemoryStats | null;
  timestam,
    p: number;
}
/**;
 * Resource Statistics Interface;
 */;
export interface ResourceStats {
  total: "number;""";
  scripts: number;
  styles: number;
  image",""";
    s: number;
  font,
    s: number;
}
/**;
 * Memory Statistics Interface;
 */;
export interface MemoryStats {
  usedJSHeapSize: "number;""";
  totalJSHeapSiz",""";
>>>>>>> main
    e: number;
  jsHeapSizeLimi,
    t: number;
};
/**;
 * Layout Shift Interface;
 */;
<<<<<<< HEAD
export interface LayoutShift extends PerformanceEntry {
  } catch (error) {;
    console.error(error);
  };
  }};
  hadRecentInput: boolean;};
};
/**;";
 * Performance with Memory Interface;";";
 */;";";";
export interface PerformanceWithMemory extends Performance {"
  memory: "{"";";";
    usedJSHeapSize: number;",";
    totalJSHeapSiz",""
=======
export interface LayoutShift extends PerformanceEntry {}
  value: number;}
  hadRecentInput: boolean;}
}
/**;
 * Performance with Memory Interface;
 */;
export interface PerformanceWithMemory extends Performance {
  memory: "{""";
    usedJSHeapSize: number;
    totalJSHeapSiz",""";
>>>>>>> main
    e: number;
    jsHeapSizeLimi,
    t: number;
  };
<<<<<<< HEAD
};
/**;";
 * Service Configuration Interface;";";
 */;";";";
export interface ServiceConfig {";";";
  id: "string;""
  name: string;
  description: string;
  icon: string;";
  category: string;";";
  features: string[];";";";
  pricing?: {",";
    startin",""
=======
}
/**;
 * Service Configuration Interface;
 */;
export interface ServiceConfig {
  id: "string;""";
  name: string;
  description: string;
  icon: string;
  category: string;
  features: string[];
  pricing?: {
    startin",""";
>>>>>>> main
    g: number;
    currenc,
    y: string;
  };
<<<<<<< HEAD
};
/**;";
 * Blog Post Interface;";";
 */;";";";
export interface BlogPost {";";";
  id: "string;""
=======
}
/**;
 * Blog Post Interface;
 */;
export interface BlogPost {
  id: "string;""";
>>>>>>> main
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  category: string;
<<<<<<< HEAD
  featured: boolean;";
  readingTime: number;";";
  seo: {";";";
    title: string;",";
    descriptio",""
=======
  featured: boolean;
  readingTime: number;
  seo: {
    title: string;
    descriptio",""";
>>>>>>> main
    n: string;
    keyword,
    s: string[];
  };
<<<<<<< HEAD
};
/**;";
 * Contact Form Interface;";";
 */;";";";
export interface ContactForm {";";";
  name: "string;""
  email: string;";
  company?: string;";";
  phone?: string;";";";
  service: string;"
  messag",""
=======
}
/**;
 * Contact Form Interface;
 */;
export interface ContactForm {
  name: "string;""";
  email: string;
  company?: string;
  phone?: string;
  service: string;
  messag",""";
>>>>>>> main
    e: string;
  budget?: string;
  timeline?: string;
  consen,
    t: boolean;
};
/**
 * API Response Interface
 */;
export interface ApiResponse<T = any> {;
  success: boolean;
<<<<<<< HEAD
  data?: T;};
  error?: string;};
  message?: string;};
  timestamp: number;};
};
/**;";
 * SEO Metadata Interface;";";
 */;";";";
export interface SEOMetadata {";";";
  title: "string;""
  descriptio",""
=======
  data?: T;}
  error?: string;}
  message?: string;}
  timestamp: number;}
}
/**;
 * SEO Metadata Interface;
 */;
export interface SEOMetadata {
  title: "string;""";
  descriptio",""";
>>>>>>> main
    n: string;
  keyword,
    s: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noindex?: boolean;
  nofollow?: boolean;
,
  };
/**;
 * Navigation Item Interface;
 */;
export interface NavigationItem {;
  label: string;
  hre,
    f: string;
  external?: boolean;
  children?: NavigationItem[];
,
<<<<<<< HEAD
  };
/**;";
 * Testimonial Interface;";";
 */;";";";
export interface Testimonial {";";";
  id: "string;""
  name: string;";
  company: string;";";
  position: string;";";";
  content: string;"
  ratin",""
=======
  }
/**;
 * Testimonial Interface;
 */;
export interface Testimonial {
  id: "string;""";
  name: string;
  company: string;
  position: string;
  content: string;
  ratin",""";
>>>>>>> main
    g: number;
  avatar?: string;
  feature,
    d: boolean;
<<<<<<< HEAD
};
/**;";
 * Case Study Interface;";";
 */;";";";
export interface CaseStudy {";";";
  id: "string;""
=======
}
/**;
 * Case Study Interface;
 */;
export interface CaseStudy {
  id: "string;""";
>>>>>>> main
  title: string;
  slug: string;
  client: string;
  industry: string;
<<<<<<< HEAD
  challenge: string;";
  solution: string;";";
  results: {";";";
    metric: string;",";
    valu",""
    e: string;";
    improvemen,";";
    t: string;";";";
  }[];"
  technologies: "string[];""
  duration: string;";";
  teamSize: number;";";";
  featured: boolean;"
  image",""
    s: string[];
  publishedA,
    t: string;
};
/**;";
 * Team Member Interface;";";
 */;";";";
export interface TeamMember {";";";
  id: "string;""
  name: string;";";
  position: string;";";";
  bio: string;"
  avata",""
=======
  challenge: string;
  solution: string;
  results: {
    metric: string;
    valu",""";
    e: string;
    improvemen,
    t: string;
  }[];
  technologies: "string[];""";
  duration: string;
  teamSize: number;
  featured: boolean;
  image",""";
    s: string[];
  publishedA,
    t: string;
}
/**;
 * Team Member Interface;
 */;
export interface TeamMember {
  id: "string;""";
  name: string;
  position: string;
  bio: string;
  avata",""";
>>>>>>> main
    r: string;
  socia,
    l: {
    linkedin?: string;
    twitter?: string;
    github?: string;,
  ,
  };
  expertise: string[];
  featured: boolean;
<<<<<<< HEAD
};
/**;";
 * FAQ Item Interface;";";
 */;";";";
export interface FAQItem {";";";
  id: "string;""
  question: string;";";";
  answer: string;"
  categor",""
    y: string;
  orde,
    r: number;
};
/**;";
 * Newsletter Subscription Interface;";";
 */;";";";
export interface NewsletterSubscription {";";";
  email: "string;""
  name?: string;";";";
  interests: string[];"
  subscribedA",""
=======
}
/**;
 * FAQ Item Interface;
 */;
export interface FAQItem {
  id: "string;""";
  question: string;
  answer: string;
  categor",""";
    y: string;
  orde,
    r: number;
}
/**;
 * Newsletter Subscription Interface;
 */;
export interface NewsletterSubscription {
  email: "string;""";
  name?: string;
  interests: string[];
  subscribedA",""";
>>>>>>> main
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
    hasError: boolean;
  error?: Error;
,
<<<<<<< HEAD
  };
/**;";
 * Theme Configuration Interface;";";
 */;";";";
export interface ThemeConfig {";";";
  mode: "'light' | 'dark' | 'system;"'"'"'"
  primaryColor: string;";";
  secondaryColor: string;";";";
  accentColor: string;"
  fontFamil",""
=======
  }
/**;
 * Theme Configuration Interface;
 */;
export interface ThemeConfig {
  mode: "'light' | 'dark' | 'system;"'"'"'"";";
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  fontFamil",""";
>>>>>>> main
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
  label?: string;
  value?: number;
  custom_parameters?: Record<string, unknown>
<<<<<<< HEAD
};
/**;";
 * User Preferences Interface;";";
 */;";";";
export interface UserPreferences {";";";
  theme: "ThemeConfig;""
  language: string;";";
  notifications: {";";";
    email: boolean;",";
    pus",""
    h: boolean;";
    sm,";";
    s: boolean;";";";
  };"
  privacy: "{""
    analytics: boolean;",";
    marketin",""
=======
}
/**;
 * User Preferences Interface;
 */;
export interface UserPreferences {
  theme: "ThemeConfig;""";
  language: string;
  notifications: {
    email: boolean;
    pus",""";
    h: boolean;
    sm,
    s: boolean;
  };
  privacy: "{""";
    analytics: boolean;
    marketin",""";
>>>>>>> main
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
,
  };
/**;
<<<<<<< HEAD
 * API Endpoint Types;";
 */;";";
export type ApiEndpoint =;";";";
  | '/api/contact;''
  | '/api/newsletter;''
  | '/api/analytics;''
  | '/api/performance;''
  | '/api/health;'"
/**;";
 * HTTP Method Types;";";
 */;";";";
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH;'"
/**;";
 * Environment Types;";";
 */;";";";
export type Environment = 'development' | 'staging' | 'production;'"
/**;";
 * Build Configuration Interface;";";
 */;";";";
export interface BuildConfig {";";";
  environment: "Environment;""
  version: string;
  buildTime: string;";
  features: {";";
    analytics: boolean;";";";
    performanceMonitoring: boolean;",";
    errorReportin",""
=======
 * API Endpoint Types;
 */;
export type: ApiEndpoint =;
  | '/api/contact;''";
  | '/api/newsletter;''";
  | '/api/analytics;''";
  | '/api/performance;''";
  | '/api/health;''";
/**;
 * HTTP Method Types;
 */;
export type: HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH;''";
/**;
 * Environment Types;
 */;
export type: Environment = 'development' | 'staging' | 'production;''";
/**;
 * Build Configuration Interface;
 */;
export interface BuildConfig {
  environment: "Environment;""";
  version: string;
  buildTime: string;
  features: {
    analytics: boolean;
    performanceMonitoring: boolean;
    errorReportin",""";
>>>>>>> main
    g: boolean;
    pw,";
    a: boolean;";";
  };";";";
}"