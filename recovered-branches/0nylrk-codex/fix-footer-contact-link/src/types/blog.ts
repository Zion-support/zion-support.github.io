export interface BlogAuthor {
  // TODO: Implement
}
  name: string;,
  title: string;
  avatarUrl: string;

  title: string,
  avatar_url: string;

export interface BlogPost {
  // TODO: Implement
  // TODO: Implement
  name: string;
  // TODO: Implement
export interface BlogPost {;
  id: string;,
  slug: string;,
  excerpt: string;
  content: string;,
  author: BlogAuthor;
  published_date: string;,
  read_time: string;
  category: string;,
  tags: string[];
  featuredImage: string;
  isFeatured?: boolean;
  isPublished?: boolean;
  createdBy?: string;
  updatedAt?: string;

  featured_image: string;
  is_featured?: boolean;
  is_published?: boolean;
  created_by?: string,
  updated_at?: string;
// Type for generated blog content;

export interface GeneratedBlogContent {
  // TODO: Implement
  title: string;,
  meta_description: string;
  body: string;,
  tweetSummary?: string;
  imagePrompt?: string;

  tweet_summary?: string,
  image_prompt?: string;
  publishedDate: string;,
  readTime: string;

// Type for generated blog content;
export interface GeneratedBlogContent {;
  metaDescription: string;

// Type for generated newsletter content;
export interface GeneratedNewsletterContent {;
  subject: string;,
  previewText: string;

  cta: string;
export interface BlogAuthor {;
  name: string,;
  title: string,;
;
  id: string,;
  slug: string,;
  excerpt: string,;
  content: string,;
  author: BlogAuthor,;
  publishedDate: string,;
  readTime: string,;
  category: string,;
  tags: string[],;
  featuredImage: string,;
  isFeatured?: boolean,;
  isPublished?: boolean,;
  createdBy?: string,;
// Type for generated blog content;
  metaDescription: string,;
  body: string,;
  tweetSummary?: string,;
// Type for generated newsletter content;
export interface GeneratedNewsletterContent {
  // TODO: Implement


// Type for generated newsletter content;
  subject: string,;
  previewText: string,;
