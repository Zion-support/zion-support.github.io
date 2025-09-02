import Head from 'next/head' interface StructuredDataProps {
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


  type?: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'Article';
   data?: unknown} export const StructuredData: React.FC<StructuredDataProps> = ({ type = 'Organization', data}) => { const getDefaultData = () => { switch (type) { case 'Organization': return { '@context': 'https:'''