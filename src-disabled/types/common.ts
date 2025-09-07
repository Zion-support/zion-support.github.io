// Common type definitions;
<<<<<<< HEAD
=======
<<<<<<< HEAD
export interface ApiResponse<T = any>  {data: T;
  message: string;
  success: boolean;
  timestamp: string;
}export interface PaginationParams  {page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc | desc';
}export interface PaginatedResponse<T> extends ApiResponse<T[]>  {pagination: {page: number;
    limit: number;
    total: number;
    totalPages: number;
  }}export interface User  {id: string;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621

export interface ApiResponse<T = any />  {data: T;
  message: string;
  success: boolean;}
  timestamp: string;}
}

export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc | desc';}
}
}

export interface PaginatedResponse<T /> extends ApiResponse<T[] />  {pagination: {page: number;
    limit: number;
    total: number;}
    totalPages: number;}
  }}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin | user' | 'moderator;
  createdAt: string;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  updatedAt: string;
}export interface Service  {id: string;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
  updatedAt: string;}
}
}

export interface Service  {id: string;
  name: string;
  description: string;
  category: string;
  pricing: {starter: number;
<<<<<<< HEAD
=======
<<<<<<< HEAD
    professional: number;
    enterprise: number;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
    professional: number;}
    enterprise: number;}
  }features: string[];
  benefits: string[];
<<<<<<< HEAD
=======
<<<<<<< HEAD
  status: active' | 'inactive | beta';
}export interface ContactForm  {name: string;
=======
>>>>>>> merged-prs-20250907-203621
  status: 'active' | 'inactive' | 'beta';
}

export interface ContactForm {
  name: string;
<<<<<<< HEAD
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
  email: string;
  company?: string;
  phone?: string;
  message: string;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  service?: string;
}export interface Testimonial  {id: string;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
  service?: string;}
}
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  content: string;
  rating: number;
  service: string;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  createdAt: string;
}export interface CaseStudy  {id: string;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
  createdAt: string;}
}
}

export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  timeline: string;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  service: string;
}export interface FAQ  {id: string;
  question: string;
  answer: string;
  category?: string;
  order: number;
}// Utility types;
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type DeepPartial<T> = {[P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
  service: string;}
}
}

export interface FAQ  {id: string;
  question: string;
  answer: string;
  category?: string;}
  order: number;}
}// Utility types;

export type Optional<T, K extends keyof T /> = Omit<T, K /> & Partial<Pick<T, K />>;

export type RequiredFields<T, K extends keyof T /> = T & Required<Pick<T, K />>;

export type DeepPartial<T /> = {[P in keyof T]?: T[P] extends object ? DeepPartial<T[P] /> : T[P];}
}