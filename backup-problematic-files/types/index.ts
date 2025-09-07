// Contact information;
export interface ContactInfo {
  // TODO: Implement
}
  phone: string;,
  email: string;
  address: string;,
  site: string;

// Service interfaces;
export interface Service {
  id: string;
  name: string,
  description: string;
  category: 'micro-saas' | 'ai-services' | 'it-services';
  price: {
    min: number;
    max: number;
    currency: string
};
  features: string[];
  // TODO: Implement
  id: string;,
  name: string;
  description: string;,
  category: 'micro-saas' | 'ai-services' | 'it-services';
  price: {,
  min: number;
    max: number;,
  currency: string;
  };
  features: string[];,
pr-12325
  technologies: string[];
  deliveryTime: string;,
  support: string;
  image?: string;
  popular?: boolean;

export interface ServiceCategory {
  title: string,
  // TODO: Implement
  title: string;,
pr-12325
  description: string;
  count: number;,
  features: string[];
  href: string;,
  color: string;

// SEO and performance;
export interface SEOProps {
  // TODO: Implement

export interface PerformanceMetrics {
  // TODO: Implement
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;

// Loading and error states;
export interface LoadingState {
  // TODO: Implement
  isLoading: boolean;
  error?: string;
  progress?: number;

export interface ErrorInfo {
  // TODO: Implement
  message: string;
  code?: string;
  details?: any;
  timestamp: string;
  userAgent?: string;
  url?: string;

// Form interfaces;
export interface ContactForm {
  // TODO: Implement
  name: string;,
  company?: string;
  phone?: string;
  service: string;
  budget?: string;
  message: string;,
  preferredContact: 'email' | 'phone' | 'both';

export interface FormField {
  // TODO: Implement
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio';',
  required: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string
};
}
    message?: string;
pr-12325

// Team and company;
export interface TeamMember {
  // TODO: Implement
  position: string;,
  bio: string;
  image: string;,
  skills: string[];
  linkedin?: string;
  github?: string;
  twitter?: string;

export interface CompanyInfo {
  name: string;
  tagline: string,
  description: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string
};
  contact: {
    phone: string;
    email: string;
    website: string
};
  // TODO: Implement
  tagline: string;
  address: {
    street: string;,
  city: string;
    state: string;,
  zip: string;
    country: string;
  contact: {,
  phone: string;
    email: string;,
  website: string;
pr-12325
  certifications: string[];

// Content interfaces;
export interface Testimonial {
  // TODO: Implement
  company: string;,
  position: string;
  content: string;,
  rating: number;
  project?: string;

export interface CaseStudy {
  // TODO: Implement
  title: string;
  client: string;,
  industry: string;
  challenge: string;,
  solution: string;
  results: string[];,
  duration: string;,
  teamSize: number;
  image: string;
  featured?: boolean;

export interface BlogPost {
  // TODO: Implement
  excerpt: string;,
  content: string;
  author: string;,
  publishedAt: string;
  updatedAt: string;,
  tags: string[];
  category: string;,
  readTime: number;

// Pricing;
export interface PricingTier {
  // TODO: Implement
  price: number;,
  period: 'month' | 'year' | 'one-time';',
  limitations?: string[];
  popular?: boolean;
  cta: string,
  description: string;
}
  cta: string;,
pr-12325

// API interfaces;
export interface ApiRequest {
  // TODO: Implement
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';',
  url: string;
  data?: any;
  params?: Record<string, any>;
</string>
  headers?: Record<string, string>;
export interface ApiResponse<T> {

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
    hasNext: boolean;
    hasPrev: boolean
};
}

// User and preferences
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'manager' | 'developer' | 'client' | 'guest';
  permissions: string[];
  profile: {
    avatar?: string;
    bio?: string;
    skills: string[];
    experience: number;
    location: string;
    timezone: string;
  preferences: {
    theme: 'light' | 'dark' | 'auto';
    language: string;
    notifications: {
      email: boolean;
      push: boolean;
      sms: boolean;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: string;
  accessibility: AccessibilitySettings;
  notifications: {
    email: boolean;
    browser: boolean;
    marketing: boolean
};
}

export interface AccessibilitySettings {
  highContrast: boolean;
  fontSize: number;
  reducedMotion: boolean;
  screenReader: boolean;
}

// Navigation
export interface NavigationItem {
  name: string;
  href: string;
  submenu?: NavigationItem[];
  external?: boolean;
}

export interface SocialLink {
  platform: 'linkedin' | 'twitter' | 'github' | 'facebook' | 'instagram';
  url: string;
  label: string;
}

// Notifications
export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  action?: {
    label: string;
    url: string;
  category: 'system' | 'project' | 'team' | 'client' | 'billing';
  priority: 'low' | 'medium' | 'high';
  expires?: Date;
}

// Project management
export interface Project {
  id: string;
  name: string,
  description: string;
  status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'critical';
  startDate: Date;
  endDate: Date;
  budget: {
    allocated: number;
    spent: number;
    currency: string
};
  team: {
    lead: string;
    members: string[];
    external: string[]
};
  client: {
    name: string;
    contact: string;
    industry: string
};
  deliverables: {
    name: string,
  description: string;
    status: 'pending' | 'in-progress' | 'completed' | 'review';
    dueDate: Date;
  }[];
  risks: {
    description: string;
    probability: 'low' | 'medium' | 'high';
    impact: 'low' | 'medium' | 'high';
    mitigation: string;
  }[];
  dependencies: {
    project: string;
    type: 'blocking' | 'influencing',
  description: string;
  }[];
  metrics: {
    name: string;
    value: number;
    unit: string;
    target: number;
  }[];
  lessons: {
    learned: string;
    category: 'technical' | 'process' | 'communication' | 'management';
    impact: 'positive' | 'negative' | 'neutral';
  }[];
}

// Component props
export interface BaseComponentProps {
  children?: React.ReactNode;
  id?: string;
  disabled?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
  id?: string;
  disabled?: boolean;
  loading?: boolean;
  error?: string;
  required?: boolean;
}

// Environment
export interface Environment {
  NODE_ENV: 'development' | 'production' | 'test';
  NEXT_PUBLIC_API_URL?: string;
  NEXT_PUBLIC_APP_URL?: string;
  NEXT_PUBLIC_GA_ID?: string;
  NEXT_PUBLIC_SENTRY_DSN?: string;
pr-12325
