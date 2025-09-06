export interface BlogAuthor {
  name: string;
<<<<<<< HEAD

  title: string

  avatarUrl: string
=======
  title: string,
  avatar_url: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
<<<<<<< HEAD
  featuredImage: string;
  isFeatured?: boolean;
  isPublished?: boolean;

  createdBy?: string

  updatedAt?: string
}
// Type for generated blog content
=======
  featured_image: string;
  is_featured?: boolean;
  is_published?: boolean;
  created_by?: string,
  updated_at?: string;
}
// Type for generated blog content;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export interface GeneratedBlogContent {
  title: string;
  meta_description: string;
  body: string;
  tags: string[];
<<<<<<< HEAD

  tweetSummary?: string

  imagePrompt?: string
}
// Type for generated newsletter content
export interface GeneratedNewsletterContent {
  subject: string;
  previewText: string;

  body: string

  cta: string
=======
  tweet_summary?: string,
  image_prompt?: string;
}
// Type for generated newsletter content;
export interface GeneratedNewsletterContent {
  subject: string;
  preview_text: string;
  body: string,
  cta: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}