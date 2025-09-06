
<<<<<<< HEAD
<<<<<<< HEAD

export type ForumCategory =
=======
export type ForumCategory = 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
}


export interface ForumPost {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
  replyCount: number;
  isAnswered?: boolean;
  isPinned?: boolean;
  isLocked?: boolean
  isFeatured?: boolean
}
<<<<<<< HEAD
export interface ForumReply {
=======
}


export interface ForumReply {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
  downvotes: number
  isAnswer?: boolean
}
<<<<<<< HEAD
export interface Badge {
=======
}


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
  user_id: string;
  badge_id: string,
  awarded_at: string;

}
export interface CommunityUser {
=======


export interface UserBadge {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  userId: string;
  badgeId: string
  awardedAt: string
}
<<<<<<< HEAD
export interface CommunityUser {
=======

export interface CommunityUser {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: string;
  name: string;
  avatar?: string;
  role: string;
  reputation: number;
  post_count: number;
  reply_count: number;
  badges: Badge[];

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
