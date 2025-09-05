export interface BlogSEO {;
  metaTitle:string,;
  metaDescription:string,;
  ogImageUrl?:string;
}
<<<<<<< HEAD
;
export type PostStatus = 'draft' | 'published',;
;
export interface BlogMetrics {;
  views:number,;
  likes:number,;
  shares:number;
=======
export type PostStatus = 'draft' | 'published',

export interface BlogMetrics {
  views: number,
  likes: number,
  shares: number
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
;
export interface BlogPost {;
  id:string,;
  title:string,;
  slug:string,;
  coverImageUrl?:string,;
  author:string,;
  publishDate:string, // ISO string;
  tags:string[],;
  topics:string[],;
  seo:BlogSEO,;
  body:string, // Markdown or HTML;
  status:PostStatus,;
  metrics:BlogMetrics;
}