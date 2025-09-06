
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

export type ForumCategory =
=======
export type ForumCategory = 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  | 'getting-hired'
  | 'project-help'
  | 'ai-tools'
  | 'feedback';
  | 'announcements';
<<<<<<< HEAD
export interface ForumCategoryInfo {
=======

export interface ForumCategoryInfo {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: ForumCategory;
  name: string;
  description: string;
  adminOnly: boolean
  icon: string
}
<<<<<<< HEAD
export interface ForumPost {
=======

export interface ForumPost {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: string;
  title: string;
  content: string;
  authorId: string;
  authorName: string;
  authorAvatar?: string;
  authorRole?: string;
  categoryId: ForumCategory;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  upvotes: number;
  downvotes: number;
  replyCount: number;
  isAnswered?: boolean;
  isPinned?: boolean;
  isLocked?: boolean
  isFeatured?: boolean
}
<<<<<<< HEAD
export interface ForumReply {
=======

export interface ForumReply {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: string;
  postId: string;
  parentReplyId?: string;
  content: string;
  authorId: string;
  authorName: string;
  authorAvatar?: string;
  authorRole?: string;
  createdAt: string;
  updatedAt: string;
  upvotes: number;
  downvotes: number
  isAnswer?: boolean
}
<<<<<<< HEAD
export interface Badge {
=======

export interface Badge {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: string;
  name: string;
  description: string;
  icon: string
  color: string
}
<<<<<<< HEAD
export interface UserBadge {
=======

export interface UserBadge {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
export type ForumCategory = 


  | 'getting-hired'
  | 'project-help'
  | 'ai-tools'
  | 'feedback'
  | 'announcements';
=======
export type ForumCategory =;
  | 'getting - hired';
  | 'project - help';
  | 'ai - tools';
  | 'feedback';
  | 'announcements';



export interface ForumCategoryInfo {;


  id: ForumCategory;
  name: string;
  description: string;

  admin_only: boolean,
  icon: string;

}
export interface ForumPost {
=======
}


export interface ForumPost {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  id: string;
  title: string;
  content: string;
  author_id: string;
  author_name: string;
  author_avatar?: string;
  author_role?: string;
  category_id: ForumCategory;
  tags: string[];
  created_at: string;
  updated_at: string;
  upvotes: number;
  downvotes: number;

  reply_count: number;
  is_answered?: boolean;
  is_pinned?: boolean;
  is_locked?: boolean,
  is_featured?: boolean;

}
export interface ForumReply {
=======
}


export interface ForumReply {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  id: string;
  post_id: string;
  parentReplyId?: string;
  content: string;
  author_id: string;
  author_name: string;
  author_avatar?: string;
  author_role?: string;
  created_at: string;
  updated_at: string;
  upvotes: number;

  downvotes: number,
  is_answer?: boolean;

}
export interface Badge {
=======
}


export interface Badge {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  id: string;
  name: string;
  description: string;

  icon: string,
  color: string;
}
export interface UserBadge {
  user_id: string;
  badge_id: string,
  awarded_at: string;

}
export interface CommunityUser {
=======


export interface UserBadge {;

>>>>>>> main
  userId: string;
  badgeId: string
  awardedAt: string
}
<<<<<<< HEAD
<<<<<<< HEAD
export interface CommunityUser {
=======

export interface CommunityUser {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


export interface CommunityUser {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
  id: string;
  name: string;
  avatar?: string;
  role: string;
  reputation: number;
<<<<<<< HEAD
  postCount: number;
  replyCount: number;
  badges: Badge[];
  isVerified: boolean

  isModerator: boolean
}
=======
export type ForumCategory =;
  | 'getting-hired';
  | 'project-help';
  | 'ai-tools';
  | 'feedback';
  | 'announcements',;
export interface ForumCategoryInfo {;
  id: ForumCategory,;
  name: string,;
  description: string,;
  adminOnly: boolean,;
  icon: string;
}
;
export interface ForumPost {;
  id: string,;
  title: string,;
  content: string,;
  authorId: string,;
  authorName: string,;
  authorAvatar?: string,;
  authorRole?: string,;
  categoryId: ForumCategory,;
  tags: string[],;
  createdAt: string,;
  updatedAt: string,;
  upvotes: number,;
  downvotes: number,;
  replyCount: number,;
  isAnswered?: boolean,;
  isPinned?: boolean,;
  isLocked?: boolean,;
  isFeatured?: boolean;
}
;
export interface ForumReply {;
  id: string,;
  postId: string,;
  parentReplyId?: string,;
  content: string,;
  authorId: string,;
  authorName: string,;
  authorAvatar?: string,;
  authorRole?: string,;
  createdAt: string,;
  updatedAt: string,;
  upvotes: number,;
  downvotes: number,;
  isAnswer?: boolean;
}
;
export interface Badge {;
  id: string,;
  name: string,;
  description: string,;
  icon: string,;
  color: string;
}
;
export interface UserBadge {;
  userId: string,;
  badgeId: string,;
  awardedAt: string;
}
;
export interface CommunityUser {;
  id: string,;
  name: string,;
  avatar?: string,;
  role: string,;
  reputation: number,;
  postCount: number,;
  replyCount: number,;
  badges: Badge[],;
  isVerified: boolean;
  isModerator: boolean;
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  post_count: number;
  reply_count: number;
  badges: Badge[];


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
