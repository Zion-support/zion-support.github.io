<<<<<<< HEAD
export interface BlogSEO {
  metaTitle: string,
  metaDescription: string,
  ogImageUrl?: string
}
=======
export interface BlogSEO {_metaTitle: string;
  metaDescription: string;
  ogImageUrl?: string;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export type PostStatus = 'draft' | 'published',

<<<<<<< HEAD
export interface BlogMetrics {
  views: number,
  likes: number,
  shares: number
}

export interface BlogPost {
  id: string,
  title: string,
  slug: string,
  coverImageUrl?: string,
  author: string,
  publishDate: string, // ISO string
  tags: string[],
  topics: string[],
  seo: BlogSEO,
  body: string, // Markdown or HTML
  status: PostStatus,
  metrics: BlogMetrics
}
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
