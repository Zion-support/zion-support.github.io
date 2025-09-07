
<<<<<<< HEAD

export type ForumCategory = any;

  isModerator: boolean
=======
export type ForumCategory =
export type ForumCategory = 
export type ForumCategory = 
  id: ForumCategory;
  name: string,
  description: string;
export type ForumCategory =
export type ForumCategory =

  | "getting-hired"""
  | "project-help"""
  | "ai-tools"""
  | "feedback"""
  | "announcements";"
  id: ForumCategory;,
  name: string;
  description: string;,
pr-12325
  adminOnly: boolean;
  icon: string;
}

export interface ForumPost {;

  title: string;
  content: string;

export interface ForumPost {;

  adminOnly: boolean;
  icon: string;
}
export interface ForumPost {;


export interface ForumPost {
  // TODO: Implement
  // TODO: Implement
  id: string;,

  title: string;
  content: string;,
pr-12325
  author_id: string;
  author_name: string;
  author_avatar?: string;
  author_role?: string;
  category_id: ForumCategory;
  tags: string[];
  created_at: string;
  updated_at: string;
  upvotes: number;
  category_id: ForumCategory;,
  tags: string[];
  created_at: string;,
  updated_at: string;
  upvotes: number;,
pr-12325
  downvotes: number;
  replyCount: number;
  isAnswered?: boolean;
  isPinned?: boolean;
  isLocked?: boolean;}
  isFeatured?: boolean;}
}

export interface ForumReply {;

  post_id: string;
  parentReplyId?: string;
  content: string;
export interface ForumReply {;


export interface ForumReply {
  // TODO: Implement
}
export interface ForumReply {;
}
export interface ForumReply {
  // TODO: Implement
}
  id: string;,

  post_id: string;
  parentReplyId?: string;
  content: string;,
  author_id: string;
  author_name: string;
  author_avatar?: string;
  author_role?: string;
  created_at: string;
  updated_at: string;
  upvotes: number;
  created_at: string;,
  updated_at: string;

  upvotes: number;,
  downvotes: number;
  isAnswer?: boolean;

}

export interface Badge {;

  id: string;
  name: string,
  description: string;
export interface Badge {;


  id: string;,
  name: string;
  description: string;,
  icon: string;
  color: string;

}
  icon: string,
  color: string;
}
export interface UserBadge {
  user_id: string;

  // TODO: Implement
}
  user_id: string;,
  badge_id: string,
  awarded_at: string;

}
export interface CommunityUser {

export interface UserBadge {;

  name: string,
  description: string;
  icon: string
  color: string
}
export interface UserBadge {

export interface UserBadge {;}
export interface Badge {
  id: string;
  name: string,
  description: string;
}
export interface CommunityUser {
  id: string;
  name: string;
  avatar?: string;
  role: string;
  reputation: number;
  post_count: number;
  reply_count: number;
  badges: Badge[];
  // TODO: Implement
>>>>>>> origin/main
}
export interface UserBadge {;


export interface ForumReply {;

export interface ForumReply {
  // TODO: Implement
  // TODO: Implement
  post_id: string;
  parentReplyId?: string;
  isAnswer?: boolean;


export interface Badge {;

  color: string;

  icon: string,
export interface UserBadge {
  // TODO: Implement
  user_id: string;,
  badge_id: string,
  awarded_at: string;

export interface CommunityUser {
  // TODO: Implement
export interface UserBadge {;

  // TODO: Implement
  userId: string;,
  badgeId: string;
  awardedAt: string;


export interface CommunityUser {;

  // TODO: Implement
}
export interface CommunityUser {;

}
export interface UserBadge {}
export interface UserBadge {;}
export interface Badge {

  // TODO: Implement
  description: string;

}
export interface CommunityUser {
  // TODO: Implement
  avatar?: string;
  role: string;,
  reputation: number;

  post_count: number;,
  reply_count: number;
  badges: Badge[];,
  isVerified: boolean;
  isModerator: boolean;
"
pr-12325

