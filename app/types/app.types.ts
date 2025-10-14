/**;
 * Application Types;
 * Core type definitions for the Zion Tech Group website;
 */;
/**;
 * Performance Metrics Interface;
 * Web Vitals and performance measurement types;
 */;
export interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint;
  lcp?: number; // Largest Contentful Paint;
  fid?: number; // First Input Delay;
  cls?: number; // Cumulative Layout Shift;
  ttfb?: number; // Time to First Byte;
}

/**;
 * Performance Report Interface;
 */;
export interface PerformanceReport {
  webVitals: "Partial<PerformanceMetrics>;
  resources: ResourceStats;
  memor",
    y: MemoryStats | null;
  timestam,
    p: number;
}

/**;
 * Resource Statistics Interface;
 */;
export interface ResourceStats {
  total: "number;
  scripts: number;
  styles: number;
  image",
    s: number;
  font,
    s: number;
}

/**;
 * Memory Statistics Interface;
 */;
export interface MemoryStats {
  usedJSHeapSize: "number;
  totalJSHeapSiz",
    e: number;
  jsHeapSizeLimi,
    t: number;
}

/**;
 * Layout Shift Interface;
 */;
export interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInpu,
    t: boolean;
}

/**;
 * Performance with Memory Interface;
 */;
export interface PerformanceWithMemory extends Performance {
  memory: "{
    usedJSHeapSize: number;
    totalJSHeapSiz",
    e: number;
    jsHeapSizeLimi,
    t: number;
  };
}

/**;
 * Service Configuration Interface;
 */;
export interface ServiceConfig {
  id: "string;
  name: string;
  description: string;
  icon: string;
  category: string;
  features: string[];
  pricing?: {
    startin",
    g: number;
    currenc,
    y: string;
  };
}

/**;
 * Blog Post Interface;
 */;
export interface BlogPost {
  id: "string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  category: string;
  featured: boolean;
  readingTime: number;
  seo: {
    title: string;
    descriptio",
    n: string;
    keyword,
    s: string[];
  };
}

/**;
 * Contact Form Interface;
 */;
export interface ContactForm {
  name: "string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  messag",
    e: string;
  budget?: string;
  timeline?: string;
  consen,
    t: boolean;
}

/**
 * API Response Interface
 */
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestam,
    p: number;
}

/**;
 * SEO Metadata Interface;
 */;
export interface SEOMetadata {
  title: "string;
  descriptio",
    n: string;
  keyword,
    s: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

/**;
 * Navigation Item Interface;
 */;
export interface NavigationItem {
  label: string;
  hre,
    f: string;
  external?: boolean;
  children?: NavigationItem[];
}

/**;
 * Testimonial Interface;
 */;
export interface Testimonial {
  id: "string;
  name: string;
  company: string;
  position: string;
  content: string;
  ratin",
    g: number;
  avatar?: string;
  feature,
    d: boolean;
}

/**;
 * Case Study Interface;
 */;
export interface CaseStudy {
  id: "string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    valu",
    e: string;
    improvemen,
    t: string;
  }[];
  technologies: "string[];
  duration: string;
  teamSize: number;
  featured: boolean;
  image",
    s: string[];
  publishedA,
    t: string;
}

/**;
 * Team Member Interface;
 */;
export interface TeamMember {
  id: "string;
  name: string;
  position: string;
  bio: string;
  avata",
    r: string;
  socia,
    l: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  expertise: string[];
  feature,
    d: boolean;
}

/**;
 * FAQ Item Interface;
 */;
export interface FAQItem {
  id: "string;
  question: string;
  answer: string;
  categor",
    y: string;
  orde,
    r: number;
}

/**;
 * Newsletter Subscription Interface;
 */;
export interface NewsletterSubscription {
  email: "string;
  name?: string;
  interests: string[];
  subscribedA",
    t: string;
  activ,
    e: boolean;
}

/**;
 * Error Boundary Props Interface;
 */;
export interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
  onError?: (_error: Error, _errorInfo: React.ErrorInfo) => void;
}

/**;
 * Error Boundary State Interface;
 */;
export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

/**;
 * Theme Configuration Interface;
 */;
export interface ThemeConfig {
  mode: "'light' | 'dark' | 'system';
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  fontFamil",
    y: string;
  borderRadiu,
    s: number;
}

/**;
 * Analytics Event Interface;
 */;
export interface AnalyticsEvent {
  action: string;
  categor,
    y: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, unknown>;
}

/**;
 * User Preferences Interface;
 */;
export interface UserPreferences {
  theme: "ThemeConfig;
  language: string;
  notifications: {
    email: boolean;
    pus",
    h: boolean;
    sm,
    s: boolean;
  };
  privacy: "{
    analytics: boolean;
    marketin",
    g: boolean;
    functiona,
    l: boolean;
  };
}

/**;
 * Utility Types;
 */;
export type Optional<T, K extends keyof T> = Omit<////T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**;
 * API Endpoint Types;
 */;
export type ApiEndpoint =;
  | '/api/contact';
  | '/api/newsletter';
  | '/api/analytics';
  | '/api/performance';
  | '/api/health';

/**;
 * HTTP Method Types;
 */;
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

/**;
 * Environment Types;
 */;
export type Environment = 'development' | 'staging' | 'production';

/**;
 * Build Configuration Interface;
 */;
export interface BuildConfig {
  environment: "Environment;
  version: string;
  buildTime: string;
  features: {
    analytics: boolean;
    performanceMonitoring: boolean;
    errorReportin",
    g: boolean;
    pw,
    a: boolean;
  };
</PerformanceMetrics></T></string></T></T></Pick></T></Pick></T></T></PerformanceMetrics></T></string></T></T></Pick></T></Pick></T></T>}