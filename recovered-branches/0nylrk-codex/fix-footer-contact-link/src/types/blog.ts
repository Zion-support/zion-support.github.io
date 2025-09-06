export interface BlogAuthor {
  name: string;
  title: string;
  avatarUrl: string;
}

  title: string,
  avatar_url: string;

<<<<<<< HEAD
export interface BlogAuthor {
  name: string;
}
=======
<<<<<<< HEAD
}
export interface BlogPost {
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export interface BlogAuthor {
  name: string;
}
<<<<<<< HEAD
export interface BlogPost {

export interface BlogPost {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: BlogAuthor;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  published_date: string;
  read_time: string;
  category: string;
  tags: string[];
<<<<<<< HEAD
=======
  featuredImage: string;
  isFeatured?: boolean;
  isPublished?: boolean;
  createdBy?: string;
  updatedAt?: string;
}

  featured_image: string;
  is_featured?: boolean;
  is_published?: boolean;
  created_by?: string,
  updated_at?: string;
}
// Type for generated blog content;

export interface GeneratedBlogContent {
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  title: string;
  meta_description: string;
  body: string;
  tags: string[];
<<<<<<< HEAD
=======
  tweetSummary?: string;
  imagePrompt?: string;
}

  tweet_summary?: string,
  image_prompt?: string;
}
=======
  publishedDate: string;
  readTime: string;
  category: string;
  tags: string[];
  featuredImage: string;
  isFeatured?: boolean;
  isPublished?: boolean;

  createdBy?: string

  updatedAt?: string
}
// Type for generated blog content
export interface GeneratedBlogContent {;
  title: string;
  metaDescription: string;
  body: string;
  tags: string[];

  tweetSummary?: string

  imagePrompt?: string
}
// Type for generated newsletter content
export interface GeneratedNewsletterContent {;
  subject: string;
  previewText: string;

  body: string

  cta: string
}
export interface BlogAuthor {;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
// Type for generated newsletter content;
export interface GeneratedNewsletterContent {
  subject: string;
  previewText: string;
  body: string;
  cta: string;
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

export interface BlogAuthor {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

export interface BlogAuthor {;

// Type for generated newsletter content;
export interface GeneratedNewsletterContent {;
  subject: string,;
  previewText: string,;
  body: string;
  cta: string;
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
