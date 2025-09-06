<<<<<<< HEAD
export interface BlogSEO {
  metaTitle: string;
  metaDescription: string;
  ogImageUrl?: string;
}

export type PostStatus = 'draft' | 'published';

export interface BlogMetrics {
  views: number;
  likes: number;
  shares: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  coverImageUrl?: string;
  author: string;
  publishDate: string; // ISO string
  tags: string[];
  topics: string[];
  seo: BlogSEO;
  body: string; // Markdown or HTML
  status: PostStatus;
  metrics: BlogMetrics;
}
=======
 export type PostStatus = 'draft' | 'published';
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
