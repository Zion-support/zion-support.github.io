 import Head from &apos;next/head&apos; interface SEOProps {
  title?: string;
   description?: string;
   keywords?: string;
   image?: string;
   url?: string;
   type?: &apos;website&apos; | &apos;article&apos; | &apos;product';
   author?: string;
   publishedTime?: string;
   modifiedTime?: string;
   section?: string;
   tags?: string[];
   locale?: string;
   alternateLocales?: { locale: string
   ur,l: string}[] noindex?: boolean nofollow?: boolean canonical?: string structuredData?: any }&apos;&apos; const EnhancedSEOOptimizer: React.FC<SEOProps> = ({ title = &apos;Zion Tech Group - Leading Technology Solutions Provider&apos;, description = &apos;Transform your business with cutting-edge AI, quantum computing, blockchain infrastructure, and innovative development services. Trusted by 500+ companies worldwide.&apos;, keywords = &apos;technology solutions, AI services, quantum computing, blockchain, software development, digital transformation, enterprise solutions&apos;, image = &apos;https:&apos;&apos;'';}'