<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
export interface BlogAuthor {
=======
export interface BlogAuthor {;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  name: string;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

  title: string,
  avatar_url: string;

}
<<<<<<< HEAD
export interface BlogPost {
=======
<<<<<<< HEAD
export interface BlogPost {
=======

export interface BlogPost {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
=======
// Type for generated newsletter content
export interface GeneratedNewsletterContent {;
  subject: string;
  previewText: string;

  body: string

  cta: string
}
=======
<<<<<<< HEAD
export interface BlogAuthor {;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
// Type for generated newsletter content;
export interface GeneratedNewsletterContent {
  subject: string;
  preview_text: string;
  body: string,
  cta: string;

}
<<<<<<< HEAD
=======

export interface BlogAuthor {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
