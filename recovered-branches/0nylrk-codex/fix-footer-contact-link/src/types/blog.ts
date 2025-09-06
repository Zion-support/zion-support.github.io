<<<<<<< HEAD
<<<<<<< HEAD
export interface BlogAuthor {
export interface BlogAuthor {;
  name: string;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
export interface BlogAuthor {
  name: string;
  title: string;
  avatarUrl: string;
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

  title: string,
  avatar_url: string;

export interface BlogAuthor {
  name: string;
}export interface BlogAuthor {
  name: string;
}
export interface BlogPost {

export interface BlogPost {;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  id: string;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: BlogAuthor;
  meta_description: string;
  body: string;
  tags: string[];
  tweetSummary?: string;
  imagePrompt?: string;
}

  tweet_summary?: string,
  image_prompt?: string;
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  subject: string;
  previewText: string;

  body: string

  cta: string
}
export interface BlogAuthor {;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  name: string,;
=======
}  name: string,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}  name: string,;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
// Type for generated newsletter content;
export interface GeneratedNewsletterContent {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  subject: string;
  previewText: string;
<<<<<<< HEAD

  body: string

  cta: string
=======
  body: string;
  cta: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======

export interface BlogAuthor {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export interface BlogAuthor {;

// Type for generated newsletter content;
export interface GeneratedNewsletterContent {;
  subject: string,;
  previewText: string,;
  body: string;
  cta: string;
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
