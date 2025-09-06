<<<<<<< HEAD


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
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export interface ForumCategoryInfo {
  id: ForumCategory;
  name: string;
  description: string;
<<<<<<< HEAD
  adminOnly: boolean
  icon: string
=======
  admin_only: boolean,
  icon: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
<<<<<<< HEAD
  replyCount: number;
  isAnswered?: boolean;
  isPinned?: boolean;
  isLocked?: boolean
  isFeatured?: boolean
=======
  reply_count: number;
  is_answered?: boolean;
  is_pinned?: boolean;
  is_locked?: boolean,
  is_featured?: boolean;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
<<<<<<< HEAD
  downvotes: number
  isAnswer?: boolean
=======
  downvotes: number,
  is_answer?: boolean;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
export interface Badge {
  id: string;
  name: string;
  description: string;
<<<<<<< HEAD
  icon: string
  color: string
}
export interface UserBadge {
  userId: string;
  badgeId: string
  awardedAt: string
=======
  icon: string,
  color: string;
}
export interface UserBadge {
  user_id: string;
  badge_id: string,
  awarded_at: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
<<<<<<< HEAD
  isVerified: boolean

  isModerator: boolean
=======
  is_verified: boolean,
  is_moderator: boolean;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}