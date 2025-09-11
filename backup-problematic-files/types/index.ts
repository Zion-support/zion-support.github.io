// Contact information
export interface ContactInfo {
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
  }
}