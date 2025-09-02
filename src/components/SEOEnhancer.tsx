 import { Helmet } from 'react - helmet - async' interface SEOEnhancerProps {
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
   type?: string
   structuredData?: unknown} const SEOEnhancer: React.FC < SEOEnhancerProps> = ({ title = 'Zion Tech Group - Leading Technology Solutions Provider', description = 'Transform your business with cutting - edge AI, cloud architecture, and innovative development services. Expert technology solutions for modern enterprises.', keywords = 'technology solutions, AI services, cloud architecture, software development, digital transformation, IT consulting, micro - saas, enterprise solutions', image = 'https:'''"