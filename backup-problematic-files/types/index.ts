
export interface ContactInfo {
  // TODO: Implement
}
  phone: string;,
  email: string;
  address: string;,
  site: string;

// Service interfaces;
export interface Service {

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
export interface SEOProps {
  title: string;
  description: string;
  count: number;,
  features: string[];
  href: string;,
  color: string;
title: string, description: string,
  features: string[], href: string,
  icon: string, color: string,
export interface ServiceCategory {;
}
export interface ServiceCategory {
  title: string, description: string,
  count: number, features: string[],
  href: string, color: string,
export interface SEOProps {;
  title: string, description: string,
  keywords?: string;
  canonical?: string;
  og_image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
export interface LoadingState {;
  isLoading: boolean, error?: string,
export interface AnimationState {;
  isLoaded: boolean, hasError: boolean,
export interface ContactInfo {,
  phone: string,
  email: string,
  address: string,
  site: string,
};
,
export interface Service {,
  title: string,
  description: string,
  features: string[],
  href: string,
  icon: string,
  color: string,
};
,
export interface ServiceCategory {,
  title: string,
  description: string,
  count: number,
  features: string[],
  href: string,
  color: string,
};
,
export interface SEOProps {,
  title: string,
  description: string,
  keywords?: string,
  canonical?: string,
  ogImage?: string,
  noindex?: boolean,
};
,
export interface LoadingState {,
  isLoading: boolean,
  error?: string,
};
,
export interface AnimationState {,
  isLoaded: boolean,
  hasError: boolean,
};
}

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

// Loading and error states
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
}

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
message?: string;
  };
}
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
};
  preferences: {
    theme: 'light' | 'dark' | 'auto';
    language: string;
    notifications: {
      email: boolean;
      push: boolean;
      sms: boolean;
};
  };
  activity: {
    lastLogin: Date;
    loginCount: number;
    projects: string[];
    tasks: string[];
  };
  subscription: {
    plan: 'free' | 'basic' | 'premium' | 'enterprise';
    status: 'active' | 'inactive' | 'cancelled' | 'expired';
    startDate: Date;
    endDate: Date;
    features: string[];
  };
}
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
};
  category: 'system' | 'project' | 'team' | 'client' | 'billing';
  priority: 'low' | 'medium' | 'high';
  expires?: Date;
}

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export interface InputProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  disabled?: boolean;
  loading?: boolean;
onClick?: () => void;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  required?: boolean;
}

export interface Environment {
  NODE_ENV: 'development' | 'production' | 'test';
  NEXT_PUBLIC_API_URL?: string;
  NEXT_PUBLIC_APP_URL?: string;
  NEXT_PUBLIC_GA_ID?: string;
  NEXT_PUBLIC_SENTRY_DSN?: string;
