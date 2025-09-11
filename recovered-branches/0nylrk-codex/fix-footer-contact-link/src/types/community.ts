
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

export interface ForumCategoryInfo {;
  id: ForumCategory;
  name: string;
  description: string;
  adminOnly: boolean
  icon: string
}

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
export interface ForumReply {
=======
  replyCount: number;
  isAnswered?: boolean;
  isPinned?: boolean;
  isLocked?: boolean
  isFeatured?: boolean
}

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
export interface Badge {
=======
  downvotes: number
  isAnswer?: boolean
}

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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  id: string;
  name: string;
  avatar?: string;
  role: string;
  reputation: number;
  post_count: number;
  reply_count: number;
  badges: Badge[];


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
