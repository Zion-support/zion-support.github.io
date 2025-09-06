export interface BlogAuthor {
  name: string;

  title: any
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: BlogAuthor;
  published_date: string;
  read_time: string;
  category: string;
  tags: string[];
  featuredImage: string;
  isFeatured?: boolean;
  isPublished?: boolean;

  createdBy?: any
export interface GeneratedBlogContent {
  title: string;
  meta_description: string;
  body: string;
  tags: string[];

  tweetSummary?: any
export interface GeneratedNewsletterContent {
  subject: string;
  previewText: string;

  body: any