<<<<<<< HEAD

  name: string;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  title: string,
  avatar_url: string;

}
<<<<<<< HEAD

=======
export interface BlogPost {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD
// Type for generated newsletter content
export interface GeneratedNewsletterContent {;
  subject: string;
  previewText: string;

  body: string

  cta: string
}

  name: string,;
  title: string,;
  avatarUrl: string;
}
;
export interface BlogPost {;
  id: string,;
  title: string,;
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
  updatedAt?: string;
}
;
// Type for generated blog content;
export interface GeneratedBlogContent {;
  title: string,;
  metaDescription: string,;
  body: string,;
  tags: string[],;
  tweetSummary?: string,;
  imagePrompt?: string;
}
;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
// Type for generated newsletter content;
export interface GeneratedNewsletterContent {
  subject: string;
  preview_text: string;
  body: string,
  cta: string;

}
<<<<<<< HEAD
;

=======
=======

export interface BlogAuthor {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
