
export type ForumCategory = 


  | 'getting-hired'
  | 'project-help'
  | 'ai-tools'
  | 'feedback'
  | 'announcements';


export interface ForumCategoryInfo {;


  id: ForumCategory;
  name: string;
  description: string;

  admin_only: boolean,
  icon: string;

}
export interface ForumPost {

export interface ForumPost {;

export interface ForumCategoryInfo {;
  id: ForumCategory;
  name: string;
  description: string;
  adminOnly: boolean
  icon: string
}  id: string;
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
export interface ForumPost {;
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
export interface ForumReply {
  isAnswered?: boolean;
  isPinned?: boolean;
  isLocked?: boolean
  isFeatured?: boolean
}
  reply_count: number;
  is_answered?: boolean;
  is_pinned?: boolean;
  is_locked?: boolean,
  is_featured?: boolean;

}
export interface ForumReply {

export interface ForumReply {;
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
export interface ForumReply {;
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
export interface Badge {

export interface Badge {;
  id: string;
  name: string;
  description: string;
  icon: string
  color: string
}
  downvotes: number,
  is_answer?: boolean;

}
export interface Badge {
}


export interface Badge {;

export interface Badge {
  downvotes: number
  isAnswer?: boolean
}

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
export interface UserBadge {;

export interface UserBadge {;
  id: string;
  name: string;
  description: string;
  icon: string
  color: string
}
  userId: string;
  badgeId: string
  awardedAt: string
}


export interface CommunityUser {;

export interface CommunityUser {;
  id: string;
  name: string;
  avatar?: string;
  role: string;
  reputation: number;
  isModerator: boolean
}
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

  reply_count: number;
  badges: Badge[];


