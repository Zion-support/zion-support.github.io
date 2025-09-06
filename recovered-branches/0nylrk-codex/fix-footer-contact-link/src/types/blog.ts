export interface BlogAuthor {
  name: string;
  title: string;
  avatarUrl: string;
}

  title: string,
  avatar_url: string;

<<<<<<< HEAD
}
export interface BlogPost {
export interface BlogAuthor {
  name: string;
=======
export interface BlogAuthor {
  name: string;
}export interface BlogAuthor {
  name: string;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}
export interface BlogPost {

export interface BlogPost {;
<<<<<<< HEAD
  id: string;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: BlogAuthor;
<<<<<<< HEAD
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

export interface GeneratedBlogContent {
  title: string;
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  meta_description: string;
  body: string;
  tags: string[];
  tweetSummary?: string;
  imagePrompt?: string;
}

  tweet_summary?: string,
  image_prompt?: string;
<<<<<<< HEAD
}
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
  name: string,;
=======
}  name: string,;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
// Type for generated newsletter content;
export interface GeneratedNewsletterContent {
  subject: string;
  previewText: string;
  body: string;
  cta: string;
}

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export interface BlogAuthor {;

// Type for generated newsletter content;
export interface GeneratedNewsletterContent {;
  subject: string,;
  previewText: string,;
  body: string;
  cta: string;
}
;
