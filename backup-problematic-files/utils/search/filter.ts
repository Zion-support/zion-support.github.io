export type AccessLevel = 'public' | 'private' | 'admin';
export interface SearchResult {
  id: string;
  title: string,
  description: string;
  // TODO: Implement
}
  id: string;,
  title: string;
  description: string;,
pr-12325
  type: string;
  rating?: number;
  price?: number;
  location?: string;
  skills?: string[];
  keywords?: string[];
