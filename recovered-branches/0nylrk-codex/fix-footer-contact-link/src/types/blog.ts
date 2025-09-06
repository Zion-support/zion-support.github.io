export interface BlogAuthor {
  name: string;
<<<<<<< HEAD
  title: string;
=======
  title: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  avatarUrl: string
}
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: BlogAuthor;
  publishedDate: string;
  readTime: string;
  category: string;
  tags: string[];
  featuredImage: string;
  isFeatured?: boolean;
  isPublished?: boolean;
<<<<<<< HEAD
  createdBy?: string;
=======
  createdBy?: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  updatedAt?: string
}
// Type for generated blog content
export interface GeneratedBlogContent {
  title: string;
  metaDescription: string;
  body: string;
  tags: string[];
<<<<<<< HEAD
  tweetSummary?: string;
=======
  tweetSummary?: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  imagePrompt?: string
}
// Type for generated newsletter content
export interface GeneratedNewsletterContent {
  subject: string;
  previewText: string;
<<<<<<< HEAD
  body: string;
=======
  body: string
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  cta: string
}