<<<<<<< HEAD
<<<<<<< HEAD
export interface BlogAuthor {
export interface BlogAuthor {;
  name: string;
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

  title: string,
  avatar_url: string;

=======
export interface BlogAuthor {
  name: string;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
}
<<<<<<< HEAD
<<<<<<< HEAD
export interface BlogPost {

export interface BlogPost {;
=======
export interface BlogPost {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
<<<<<<< HEAD

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
<<<<<<< HEAD
export interface BlogAuthor {;
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
// Type for generated newsletter content;
export interface GeneratedNewsletterContent {
  subject: string;
  preview_text: string;
  body: string,
  cta: string;

}
;
=======
=======

export interface BlogAuthor {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
