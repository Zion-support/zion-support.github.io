
export type ForumCategory = 
  | 'getting-hired'
  | 'project-help'
  | 'ai-tools'
  | 'feedback'
  | 'announcements';

export interface ForumCategoryInfo {_id: ForumCategory;
  name: string;
  description: string;
  adminOnly: boolean;
  icon: string;}

export interface ForumPost {_id: string;
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
  isLocked?: boolean;
  isFeatured?: boolean;}

export interface ForumReply {_id: string;
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
  downvotes: number;
  isAnswer?: boolean;}

export interface Badge {_id: string;
  name: string;
  description: string;
  icon: string;
  color: string;}

export interface UserBadge {_userId: string;
  badgeId: string;
  awardedAt: string;}

export interface CommunityUser {_id: string;
  name: string;
  avatar?: string;
  role: string;
  reputation: number;
  postCount: number;
  replyCount: number;
  badges: Badge[];
  isVerified: boolean;
  isModerator: boolean;}
