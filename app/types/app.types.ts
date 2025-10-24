export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price?: number;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
}