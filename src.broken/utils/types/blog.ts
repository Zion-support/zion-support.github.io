export interface BlogSEO {_metaTitle: string;
  metaDescription: string;
  ogImageUrl?: string;}

export type PostStatus = 'draft' | 'published';

export interface BlogMetrics {_views: number;
  likes: number;
  shares: number;}

export interface BlogPost {_id: string;
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
  metrics: BlogMetrics;}