declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  createdAt: Date;
  updatedAt: Date;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  features: string[];
  benefits: string[];
  icon: string;
  popular: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  views: number;
  tags: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  service: string;
  challenge: string;
  solution: string;
  results: string[];
  duration: string;
  teamSize: string;
  image: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  tags: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
  service: string;
}

export interface ConsultationForm extends ContactForm {
  preferredDate: string;
  preferredTime: string;
  budget: string;
  timeline: string;
}

export interface Testimonial {
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

export interface Partner {
  id: string;
  name: string;
  type: string;
  category: string;
  logo: string;
  description: string;
  benefits: string[];
  tier: string;
  established: string;
  projects: number;
}

export interface TeamMember {
  name: string;
  role: string;
  expertise: string;
  image: string;
  bio: string;
}

export interface Metric {
  label: string;
  value: string;
  trend: string;
}

export interface Feature {
  icon: any;
  title: string;
  description: string;
  benefits: string[];
}

export interface Benefit {
  icon: any;
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  popular: boolean;
}

export interface NavigationItem {
  label: string;
  href: string;
  icon?: any;
  children?: NavigationItem[];
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

export interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
}

export interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  timestamp: Date;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

export interface LoadingState {
  isLoading: boolean;
  error?: string;
  data?: any;
}

export interface PaginationState {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
}

export interface FilterState {
  search: string;
  category: string;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}

export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
  fontFamily: string;
}

export interface Config {
  apiUrl: string;
  environment: 'development' | 'staging' | 'production';
  version: string;
  features: {
    analytics: boolean;
    chat: boolean;
    notifications: boolean;
    darkMode: boolean;
  };
}

export {};