export type AccessLevel = 'public' | 'private' | 'admin';
export interface SearchResult {
  // TODO: Implement
}
  id: string;,
  title: string;
  description: string;,
  type: string;
  rating?: number;
  price?: number;
  location?: string;
  skills?: string[];
  keywords?: string[];
