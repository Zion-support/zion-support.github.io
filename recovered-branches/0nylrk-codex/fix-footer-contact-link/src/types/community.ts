
export type ForumCategory =
export type ForumCategory = 
export type ForumCategory = 
  id: ForumCategory;
  name: string,
  description: string;
  adminOnly: boolean;
  icon: string;
}

export interface ForumPost {;

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
  isLocked?: boolean;
  isFeatured?: boolean;
}

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
  downvotes: number;
  isAnswer?: boolean;
}

export interface Badge {;

  id: string;
  name: string,
  description: string;
  icon: string;
  color: string;
}

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

export type ForumCategory = $2;
export interface ForumCategoryInfo {
  id: ForumCategory,
  name: string,
  description: string,
  adminOnly: boolean,
  icon: string}

export interface ForumPost {
  id: string,
  title: string,
  content: string,
  authorId: string,
  authorName: string,
  authorAvatar?: string,
  authorRole?: string,
  categoryId: ForumCategory,
  tags: string[],
  createdAt: string,
  updatedAt: string,
  upvotes: number,
  downvotes: number,
  replyCount: number,
  isAnswered?: boolean,
  isPinned?: boolean,
  isLocked?: boolean,
  isFeatured?: boolean
}
export interface ForumReply {
  id: string,
  postId: string,
  parentReplyId?: string,
  content: string,
  authorId: string,
  authorName: string,
  authorAvatar?: string,
  authorRole?: string,
  createdAt: string,
  updatedAt: string,
  upvotes: number,
  downvotes: number,
  isAnswer?: boolean
}
export interface Badge {
  id: string,
  name: string,
  description: string,
  icon: string,
  color: string}

export interface UserBadge {
  userId: string,
  badgeId: string,
  awardedAt: string}

export interface CommunityUser {
  id: string,
  name: string,
  avatar?: string,
  role: string,
  reputation: number,
  postCount: number,
  replyCount: number,
  badges: Badge[],
  isVerified: boolean,
  isModerator: boolean}
