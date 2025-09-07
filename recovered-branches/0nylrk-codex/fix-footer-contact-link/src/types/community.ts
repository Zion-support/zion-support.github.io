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

  id: ForumCategory;
  name: string;
  description: string;
  adminOnly: boolean
  icon: string
}

export type ForumCategory =
export type ForumCategory = 
export type ForumCategory = 

  id: ForumCategory;
  name: string;
  description: string;
  adminOnly: boolean;
  icon: string;
}

export interface ForumPost {;

export interface ForumPost {};
export interface ForumPost {;

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

}
export interface UserBadge {;

export interface ForumReply {;

export interface ForumReply {};
export interface ForumReply {;
}

  id: string;

export interface Badge {;

  color: string;

  icon: string,

  user_id: string;
  badge_id: string,
  awarded_at: string;

}

export interface CommunityUser {
  // TODO: Implement
export interface UserBadge {;

  id: string;
  name: string;

  description: string;
  icon: string
  color: string
}

export interface UserBadge {

export interface UserBadge {;

  userId: string;
  badgeId: string;
  awardedAt: string;
}

  badgeId: string;
  awardedAt: string;

export interface CommunityUser {;

  // TODO: Implement
}

  id: string;
  name: string;

  description: string;

}

  id: string;
  name: string;

  avatar?: string;
  role: string;,
  reputation: number;

  post_count: number;
  reply_count: number;
  badges: Badge[];