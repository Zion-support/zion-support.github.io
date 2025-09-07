<<<<<<< HEAD
<<<<<<< HEAD

=======
// Contact information
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
// Contact information;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export interface ContactInfo {
  // TODO: Implement
}
  phone: string;,
  email: string;
  address: string;,
  site: string;

// Service interfaces;
export interface Service {
<<<<<<< HEAD

=======
  id: string;
  name: string,
  description: string;
  category: 'micro-saas' | 'ai-services' | 'it-services';
  price: {
    min: number;
    max: number;
    currency: string
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD

export interface SEOProps {
  title: string;
=======
}

export interface ServiceCategory {
  title: string,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

export interface ServiceCategory {
  title: string,
  // TODO: Implement
  title: string;,
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  description: string;
  count: number;,
  features: string[];
  href: string;,
  color: string;
<<<<<<< HEAD
<<<<<<< HEAD
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

=======
}
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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

<<<<<<< HEAD
// Loading and error states
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
// Loading and error states;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export interface LoadingState {
  // TODO: Implement
  isLoading: boolean;
  error?: string;
  progress?: number;

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export interface ErrorInfo {
  // TODO: Implement
  message: string;
  code?: string;
  details?: any;
  timestamp: string;
  userAgent?: string;
  url?: string;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

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
<<<<<<< HEAD
    message?: string;
  };
}

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
  };
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  preferences: {
    theme: 'light' | 'dark' | 'auto';
    language: string;
    notifications: {
      email: boolean;
      push: boolean;
      sms: boolean;
<<<<<<< HEAD
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

=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
  };
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  category: 'system' | 'project' | 'team' | 'client' | 'billing';
  priority: 'low' | 'medium' | 'high';
  expires?: Date;
}

<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  children?: React.ReactNode;
  id?: string;
  disabled?: boolean;
  loading?: boolean;
<<<<<<< HEAD
  onClick?: () => void;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  error?: string;
  required?: boolean;
}

<<<<<<< HEAD
=======
// Environment
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export interface Environment {
  NODE_ENV: 'development' | 'production' | 'test';
  NEXT_PUBLIC_API_URL?: string;
  NEXT_PUBLIC_APP_URL?: string;
  NEXT_PUBLIC_GA_ID?: string;
  NEXT_PUBLIC_SENTRY_DSN?: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
