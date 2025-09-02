 import Head from 'next/head' interface SEOProps {
import { Common, File, User } from 'lucide-react';

// Common interfaces for better type safety
interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  message?: string;
}

interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
}

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

interface FormData {
  [key: string]: string | number | boolean | File;
}

interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}


  title?: string;
   description?: string;
   keywords?: string;
   image?: string;
   url?: string;
   type?: 'website' | 'article' | 'product';
   author?: string;
   publishedTime?: string;
   modifiedTime?: string;
   section?: string;
   tags?: string[];
   locale?: string;
   alternateLocales?: { locale: string
   url: string}[] noindex?: boolean nofollow?: boolean canonical?: string structuredData?: unknown } const EnhancedSEOOptimizer: React.FC<SEOProps> = ({ title = 'Zion Tech Group - Leading Technology Solutions Provider', description = 'Transform your business with cutting-edge AI, quantum computing, blockchain infrastructure, and innovative development services. Trusted by 500+ companies worldwide.', keywords = 'technology solutions, AI services, quantum computing, blockchain, software development, digital transformation, enterprise solutions', image = 'https:'''