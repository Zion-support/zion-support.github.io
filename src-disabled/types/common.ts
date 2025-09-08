// Common type definitions;
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/types/common.ts
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
export interface ApiResponse<T = any>  {data: T;
  message: string;
  success: boolean;
  timestamp: string;
}export interface PaginationParams  {page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}export interface PaginatedResponse<T> extends ApiResponse<T[]>  {pagination: {page: number;
    limit: number;
    total: number;
    totalPages: number;
  }}export interface User  {id: string;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba

export interface ApiResponse<T = any />  {data: T;
  message: string;
  success: boolean;}
  timestamp: string;}
}

export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';}
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
  role: 'admin' | 'user' | 'moderator';
  createdAt: string;
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/types/common.ts
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  updatedAt: string;
}export interface Service  {id: string;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
  updatedAt: string;}
}

export interface Service  {id: string;
  name: string;
  description: string;
  category: string;
  pricing: {starter: number;
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/types/common.ts
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    professional: number;
    enterprise: number;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
    professional: number;}
    enterprise: number;}
  }features: string[];
  benefits: string[];
<<<<<<< HEAD
=======
<<<<<<< HEAD
  status: 'active' | 'inactive' | 'beta';
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
  status: active' | 'inactive | beta';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
}export interface ContactForm  {name: string;
=======
>>>>>>> merged-prs-20250907-203621
  status: 'active' | 'inactive' | 'beta';
}
>>>>>>> origin/cursor/delete-old-data-records-6bba


  email: string;
  company?: string;
  phone?: string;
  message: string;
<<<<<<< HEAD


=======
<<<<<<< HEAD
:src_backup/types/common.ts
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  service?: string;
}export interface Testimonial  {id: string;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
  service?: string;}
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
:src_backup/types/common.ts
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  createdAt: string;
}export interface CaseStudy  {id: string;
=======
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/cursor/delete-old-data-records-6bba
  createdAt: string;}
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
:src_backup/types/common.ts
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
  service: string;}
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