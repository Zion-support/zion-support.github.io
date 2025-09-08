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

  icon: string;
  color: string;
}

  icon: string,

  user_id: string;
  badge_id: string,
  awarded_at: string;

}

export interface CommunityUser {

export interface CommunityUser {
  // TODO: Implement
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
