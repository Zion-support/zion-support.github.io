<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export interface BlogAuthor {
export interface BlogAuthor {;
  name: string;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
export interface BlogAuthor {
=======
export interface BlogAuthor {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  name: string;
  title: string;
  avatarUrl: string;
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

  title: string,
  avatar_url: string;

<<<<<<< HEAD
<<<<<<< HEAD
=======
}
export interface BlogPost {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface BlogAuthor {
=======

export interface BlogAuthor {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  name: string;
}
<<<<<<< HEAD
export interface BlogPost {

export interface BlogPost {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  id: string;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  id: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: BlogAuthor;
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  published_date: string;
  read_time: string;
  category: string;
  tags: string[];
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

<<<<<<< HEAD
export interface GeneratedBlogContent {};
  title: string;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export interface GeneratedBlogContent {
  title: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
}

=======
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  publishedDate: string;
  readTime: string;
  category: string;
  tags: string[];
  featuredImage: string;
  isFeatured?: boolean;
  isPublished?: boolean;

<<<<<<< HEAD
  createdBy?: string;
  updatedAt?: string;
}
// Type for generated blog content;
=======
  createdBy?: string

  updatedAt?: string
}
// Type for generated blog content
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface GeneratedBlogContent {;
  title: string;
  metaDescription: string;
  body: string;
  tags: string[];

<<<<<<< HEAD
  tweetSummary?: string;
  imagePrompt?: string;
}
// Type for generated newsletter content;
export interface GeneratedNewsletterContent {;
=======
  subject: string;
  previewText: string;

  body: string;
  cta: string;
}
export interface BlogAuthor {;


  name: string,;
=======
}  name: string,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}  name: string,;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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
  name: string,;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
// Type for generated newsletter content;
export interface GeneratedNewsletterContent {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

// Type for generated newsletter content;
export interface GeneratedNewsletterContent {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
// Type for generated newsletter content;
export interface GeneratedNewsletterContent {
  subject: string;
  previewText: string;
  body: string;
  cta: string;
}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
