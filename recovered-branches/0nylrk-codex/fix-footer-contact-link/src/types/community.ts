export type ForumCategory =
export type ForumCategory = 
export type ForumCategory = 

  | 'getting-hired'
  | 'project-help'
  | 'ai-tools'
  | 'feedback'
  | 'announcements';
export type ForumCategory =;
  | 'getting - hired';
  | 'project - help';
  | 'ai - tools';
  | 'feedback';
  | 'announcements';
export interface ForumCategoryInfo {
  id: ForumCategory;
  name: string;
  description: string;
adminOnly: boolean
  icon: string
}
export interface ForumPost {

export interface ForumPost {;
  id: ForumCategory;
  name: string;
  description: string;
  adminOnly: boolean
  icon: string
}

export interface ForumCategoryInfo {;

export type ForumCategory =
export type ForumCategory = 
export type ForumCategory = 
export type ForumCategory =
  | "getting-hired"
  | "project-help"
  | "ai-tools"
  | "feedback"
  | "announcements";

  id: ForumCategory;
  name: string;
  description: string;
  adminOnly: boolean;
  icon: string;
}

export interface ForumPost {;


export interface ForumPost {};
export interface ForumPost {;
export interface ForumPost {
  id: string;
export interface ForumPost {

export interface ForumPost {;
export interface ForumPost {
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

  reply_count: number;
  is_answered?: boolean;
  is_pinned?: boolean;
  is_locked?: boolean,
  is_featured?: boolean;

}

export interface ForumReply {

export interface ForumReply {;

}
export interface UserBadge {;

export interface ForumReply {;


export interface ForumReply {};
export interface ForumReply {;
}
export interface ForumReply {
  id: string;
export interface ForumReply {
export interface ForumReply {;
}
export interface ForumReply {
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

export interface Badge {;
}

export interface Badge {;

  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;

  icon: string,
color: string;
}
  user_id: string;
  badge_id: string,
  awarded_at: string;

}

export interface CommunityUser {
  // TODO: Implement
export interface UserBadge {;

  id: string;
  name: string;
  name: string,
  description: string;
  icon: string
  color: string
}
export interface UserBadge {

export interface UserBadge {;
export interface CommunityUser {}
export interface UserBadge {};
export interface UserBadge {;

  userId: string;
  badgeId: string;
  awardedAt: string;
}
export interface CommunityUser {

export interface CommunityUser {;
export interface UserBadge {

export interface UserBadge {;}
export interface UserBadge {

export interface UserBadge {;
  userId: string;
  // TODO: Implement
  userId: string;,
  badgeId: string;
  awardedAt: string;

export interface CommunityUser {;

  // TODO: Implement
}
export interface Badge {
  id: string;
  name: string;
export interface CommunityUser {;

}
export interface UserBadge {}
export interface UserBadge {;}
export interface Badge {

  // TODO: Implement
  description: string;

}
export interface CommunityUser {
export interface CommunityUser {};
  id: string;
  name: string;
  // TODO: Implement
  avatar?: string;
  role: string;,
  reputation: number;
post_count: number;
  reply_count: number;
  badges: Badge[];

  isModerator: boolean
}

  isVerified: boolean;
  isModerator: boolean;
}
"
  isVerified: boolean;
  isModerator: boolean;
}

  post_count: number;,
  reply_count: number;
  badges: Badge[];,
  isVerified: boolean;
  isModerator: boolean;
}
"
pr-12325

