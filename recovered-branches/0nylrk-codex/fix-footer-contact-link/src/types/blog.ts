export interface BlogAuthor {;
  name:string,;
  title:string,;
  avatarUrl:string;
}
;
export interface BlogPost {;
  id:string,;
  title:string,;
  slug:string,;
  excerpt:string,;
  content:string,;
  author:BlogAuthor,;
  publishedDate:string,;
  readTime:string,;
  category:string,;
  tags:string[],;
  featuredImage:string,;
  isFeatured?:boolean,;
  isPublished?:boolean,;
  createdBy?:string,;
  updatedAt?:string;
}
;
// Type for generated blog content;
export interface GeneratedBlogContent {;
  title:string,;
  metaDescription:string,;
  body:string,;
  tags:string[],;
  tweetSummary?:string,;
  imagePrompt?:string;
}
<<<<<<< HEAD
;
// Type for generated newsletter content;
export interface GeneratedNewsletterContent {;
  subject:string,;
  previewText:string,;
  body:string,;
  cta:string;
}
=======

// Type for generated newsletter content
export interface GeneratedNewsletterContent {
  subject: string,
  previewText: string,
  body: string,
  cta: string
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
