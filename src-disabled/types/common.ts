

:src_backup/types/common.ts
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


:src_backup/types/common.ts
  updatedAt: string;
}export interface Service  {id: string;


:src_backup/types/common.ts
    professional: number;
    enterprise: number;
  status: 'active' | 'inactive' | 'beta';
  status: active' | 'inactive | beta';
}export interface ContactForm  {name: string;


:src_backup/types/common.ts
  service?: string;
}export interface Testimonial  {id: string;


:src_backup/types/common.ts
  createdAt: string;
}export interface CaseStudy  {id: string;


:src_backup/types/common.ts
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
