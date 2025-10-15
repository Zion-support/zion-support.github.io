/**
 * Application Types
 * Core type definitions for the Zion Tech Group website
 */
/**
 * Performance Metrics Interface
 * Web Vitals and performance measurement types
 */;
export interface PerformanceMetrics {fcp?: number; // First Contentful Paint;
  lcp?: number; // Largest Contentful Paint;}
  fid?: number; // First Input Delay;}
  cls?: number; // Cumulative Layout Shift;}
  ttfb?: number; // Time to First Byte}
}
export interface PerformanceReport {
  webVitals: "Partial<PerformanceMetrics>";
  resources: ResourceStats;
  memor",";
    y: MemoryStats | null;
  timestam,
    p: number;
}
/**;
 * Resource Statistics Interface;
 */;
export interface ResourceStats {
  total: "number";
  scripts: number;
  styles: number;
  image",";
    s: number;
  font,
    s: number;
}
/**;
 * Memory Statistics Interface;
 */;
export interface MemoryStats {
  usedJSHeapSize: "number";
  totalJSHeapSiz",";
export interface LayoutShift extends PerformanceEntry {}
  value: number;}
  hadRecentInput: boolean;}
}
/**;
 * Performance with Memory Interface;
 */;
export interface PerformanceWithMemory extends Performance {
  memory: "{";
    usedJSHeapSize: number;
    totalJSHeapSiz",";
}
/**;
 * Service Configuration Interface;
 */;
export interface ServiceConfig {
  id: "string";
  name: string;
  description: string;
  icon: string;
  category: string;
  features: string[];
  pricing?: {
    startin",";
}
/**;
 * Blog Post Interface;
 */;
export interface BlogPost {
  id: "string";
  featured: boolean;
  readingTime: number;
  seo: {
    title: string;
    descriptio",";
}
/**;
 * Contact Form Interface;
 */;
export interface ContactForm {
  name: "string";
  email: string;
  company?: string;
  phone?: string;
  service: string;
  messag",";
  data?: T;}
  error?: string;}
  message?: string;}
  timestamp: number;}
}
/**;
 * SEO Metadata Interface;
 */;
export interface SEOMetadata {
  title: "string";
  descriptio",";
  }
/**;
 * Testimonial Interface;
 */;
export interface Testimonial {
  id: "string";
  name: string;
  company: string;
  position: string;
  content: string;
  ratin",";
}
/**;
 * Case Study Interface;
 */;
export interface CaseStudy {
  id: "string";
  challenge: string;
  solution: string;
  results: {
    metric: string;
    valu",";
    e: string;
    improvemen,
    t: string;
  }[];
  technologies: "string[]";
  duration: string;
  teamSize: number;
  featured: boolean;
  image",";
    s: string[];
  publishedA,
    t: string;
}
/**;
 * Team Member Interface;
 */;
export interface TeamMember {
  id: "string";
  name: string;
  position: string;
  bio: string;
  avata",";
}
/**;
 * FAQ Item Interface;
 */;
export interface FAQItem {
  id: "string";
  question: string;
  answer: string;
  categor",";
    y: string;
  orde,
    r: number;
}
/**;
 * Newsletter Subscription Interface;
 */;
export interface NewsletterSubscription {
  email: "string";
  name?: string;
  interests: string[];
  subscribedA",";
  }
/**;
 * Theme Configuration Interface;
 */;
export interface ThemeConfig {
  mode: "'light' | 'dark' | 'system"'"'"'";
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  fontFamil",";
}
/**;
 * User Preferences Interface;
 */;
export interface UserPreferences {
  theme: "ThemeConfig";
  language: string;
  notifications: {
    email: boolean;
    pus",";
    h: boolean;
    sm,
    s: boolean;
  };
  privacy: "{";
    analytics: boolean;
    marketin",";
 * API Endpoint Types;
 */;
export type: ApiEndpoint =;
  | '/api/contact'";
  | '/api/newsletter'";
  | '/api/analytics'";
  | '/api/performance'";
  | '/api/health'";
/**;
 * HTTP Method Types;
 */;
export type: HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'";
/**;
 * Environment Types;
 */;
export type: Environment = 'development' | 'staging' | 'production'";
/**;
 * Build Configuration Interface;
 */;
export interface BuildConfig {
  environment: "Environment";
  version: string;
  buildTime: string;
  features: {
    analytics: boolean;
    performanceMonitoring: boolean;
    errorReportin",";
