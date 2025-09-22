export interface BlogAuthor {
export interface BlogAuthor {;
  name: string;
  name: string;

  // TODO: Implement
}
  name: string;,
  title: string;
  avatarUrl: string;

}

  title: string,
  avatar_url: string;

export interface BlogAuthor {
  name: string;
}export interface BlogAuthor {
  name: string;
}
export interface BlogPost {

export interface BlogPost {;
  id: string;
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

export interface GeneratedBlogContent {};
  title: string;
  meta_description: string;
  body: string;
  tags: string[];
  tweetSummary?: string;
  imagePrompt?: string;

}

  tweet_summary?: string,
  image_prompt?: string;
}
  publishedDate: string;
  readTime: string;
  category: string;
  tags: string[];
  featuredImage: string;
  isFeatured?: boolean;
  isPublished?: boolean;

createdBy?: string;
  updatedAt?: string;
}
// Type for generated blog content;
export interface GeneratedBlogContent {;
  title: string;
  metaDescription: string;
  body: string;
  tags: string[];

tweetSummary?: string;
  imagePrompt?: string;
}
// Type for generated newsletter content;
export interface GeneratedNewsletterContent {;
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
  previewText: string;
body: string

  cta: string
}

// Type for generated newsletter content;
export interface GeneratedNewsletterContent {
  subject: string;
  previewText: string;
  body: string;
  cta: string;
}

export interface BlogAuthor {;

// Type for generated newsletter content;
export interface GeneratedNewsletterContent {;
  subject: string,;
  previewText: string,;
  body: string;
  cta: string;
}
;

export interface BlogPost {
  // TODO: Implement
  // TODO: Implement
  name: string;

}
export interface BlogPost {
  // TODO: Implement
export interface BlogPost {;

  id: string;,

  title: string;
  slug: string;,
  excerpt: string;
  content: string;,
  author: BlogAuthor;

  published_date: string;,
  read_time: string;
  category: string;,
  tags: string[];
  featuredImage: string;
  isFeatured?: boolean;
  isPublished?: boolean;

export interface GeneratedBlogContent {

}
