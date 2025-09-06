export interface BlogAuthor {
  name: string;
}
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
export interface GeneratedBlogContent {
  title: string;
  meta_description: string;
  body: string;
  tags: string[];
}