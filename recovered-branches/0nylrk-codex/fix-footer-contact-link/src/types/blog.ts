
  title: string,
  avatar_url: string;

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

  featured_image: string;
  is_featured?: boolean;
  is_published?: boolean;
  created_by?: string,
  updated_at?: string;
}
// Type for generated blog content;

export interface GeneratedBlogContent {
  title: string;
  meta_description: string;
  body: string;
  tags: string[];

  tweet_summary?: string,
  image_prompt?: string;
}
// Type for generated newsletter content
export interface GeneratedNewsletterContent {;
  subject: string;
  previewText: string;

  body: string

  cta: string
}
=======

export interface BlogAuthor {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
