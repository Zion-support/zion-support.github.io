
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

export interface ForumCategoryInfo {;
  id: ForumCategory;
  name: string;
  description: string;
}
}


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
}
}


export interface ForumReply {;
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
}
}


export interface Badge {;
  id: string;
  name: string;
  description: string;
  icon: string
  color: string
}
  user_id: string;
  badge_id: string,
  awarded_at: string;

}
export interface CommunityUser {


export interface UserBadge {;
  userId: string;
  badgeId: string
  awardedAt: string
}
  id: string;
  name: string;
  avatar?: string;
  role: string;
  reputation: number;
  post_count: number;
  reply_count: number;
  badges: Badge[];
