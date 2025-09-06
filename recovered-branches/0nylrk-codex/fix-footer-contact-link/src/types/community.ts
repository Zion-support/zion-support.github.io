

export type ForumCategory =
  | 'getting-hired'
  | 'project-help'
  | 'ai-tools'
  | 'feedback'
  | 'announcements';
export interface ForumCategoryInfo {
  id: ForumCategory;
  name: string;
  description: string;
  adminOnly: boolean
  icon: string
}
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
  id: string;
  name: string;
  description: string;
  icon: string
  color: string
}
export interface UserBadge {
  userId: string;
  badgeId: string
  awardedAt: string
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
  isVerified: boolean

  isModerator: boolean
}