import SEO from '@/components/SEO';


interface SEOData {;
  "title": "string;
  "description": string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noindex?: boolean;
  structuredData?: object;
"}
;
interface UseSEOOptions {;
  enableAutoTitle?: "boolean;
  enableStructuredData?: boolean;
  enablePerformanceTracking?: boolean;
  enableAnalytics?: boolean;
"}