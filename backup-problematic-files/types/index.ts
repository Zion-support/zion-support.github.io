// Contact information
export interface ContactInfo {
<<<<<<< HEAD
export interface ContactInfo {;
export interface ContactInfo {
  phone: string, email: string,
  address: string, site: string,
export interface Service {;
=======
  phone: string;
  email: string;
  address: string;
  site: string;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}

// Service interfaces
export interface Service {
  id: string;
  name: string;
  description: string;
  category: 'micro-saas' | 'ai-services' | 'it-services';
  price: {
    min: number;
    max: number;
    currency: string;
  };
  features: string[];
  technologies: string[];
  delivery_time: string;
  support: string;
  image?: string;
  popular?: boolean;
}

export interface ServiceCategory {
  title: string;
  description: string;
  count: number;
  features: string[];
  href: string;
  color: string;
}

// SEO and performance
export interface SEOProps {
<<<<<<< HEAD
  title?: string;
  description?: string;
  title: string;
  href: string;
  icon: string;
  color: string;
}
export interface ServiceCategory {
  title: string;
  description: string;
  count: number;
  features: string[];
  href: string;
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
=======
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}

export interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

// Loading and error states
export interface LoadingState {
  isLoading: boolean;
  error?: string;
  progress?: number;
}

export interface ErrorInfo {
  message: string;
  code?: string;
  details?: any;
  timestamp: string;
  userAgent?: string;
  url?: string;
}

// Form interfaces
export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  budget?: string;
  message: string;
  preferredContact: 'email' | 'phone' | 'both';
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio';
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

// Team and company
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  skills: string[];
  linkedin?: string;
  github?: string;
  twitter?: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  certifications: string[];
}

// Content interfaces
export interface Testimonial {
  id: string;
  name: string;
  company: string;
  position: string;
  content: string;
  rating: number;
  image?: string;
  project?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  duration: string;
  teamSize: number;
  image: string;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  category: string;
  image: string;
  featured?: boolean;
  readTime: number;
}

// Pricing
export interface PricingTier {
  id: string;
  name: string;
  price: number;
  currency: string;
  period: 'month' | 'year' | 'one-time';
  features: string[];
  limitations?: string[];
  popular?: boolean;
  cta: string;
  description: string;
}

// API interfaces
export interface ApiRequest {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  url: string;
  data?: any;
  params?: Record<string, any>;
  headers?: Record<string, string>;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
  sort?: string;
  order?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
    hasNext: boolean;
    hasPrev: boolean;
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
<<<<<<< HEAD
  }
=======
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  preferences: {
    theme: 'light' | 'dark' | 'auto';
    language: string;
    notifications: {
      email: boolean;
      push: boolean;
      sms: boolean;
<<<<<<< HEAD
    }
  }
  activity: {
    last_login: Date;
    login_count: number;
    projects: string[];
    tasks: string[];
  }
  subscription: {
    plan: 'free' | 'basic' | 'premium' | 'enterprise';
    status: 'active' | 'inactive' | 'cancelled' | 'expired';
    start_date: Date;
    end_date: Date;
    features: string[];
  }
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: string;
  accessibility: AccessibilitySettings;
  notifications: {
    email: boolean;
    browser: boolean;
    marketing: boolean;
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
<<<<<<< HEAD
  }
=======
  };
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  category: 'system' | 'project' | 'team' | 'client' | 'billing';
  priority: 'low' | 'medium' | 'high';
  expires?: Date;
}

// Project management
export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'planning' | 'in-progress' | 'completed' | 'on-hold' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'critical';
  startDate: Date;
  endDate: Date;
  budget: {
    allocated: number;
    spent: number;
    currency: string;
  };
  team: {
    lead: string;
    members: string[];
    external: string[];
  };
  client: {
    name: string;
    contact: string;
    industry: string;
  };
  deliverables: {
    name: string;
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
    type: 'blocking' | 'influencing';
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
<<<<<<< HEAD
  class_name?: string;
=======
  className?: string;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  children?: React.ReactNode;
  id?: string;
  disabled?: boolean;
  loading?: boolean;
<<<<<<< HEAD
  on_click?: () => void;
  type?: 'button' | 'submit' | 'reset';
}
export interface InputProps {
  class_name?: string;
=======
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export interface InputProps {
  className?: string;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  children?: React.ReactNode;
  id?: string;
  disabled?: boolean;
  loading?: boolean;
<<<<<<< HEAD
  on_click?: () => void;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number';
  placeholder?: string;
  value?: string;
  on_change?: (value: string) => void;
=======
  onClick?: () => void;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
}
=======
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
