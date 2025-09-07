<<<<<<< HEAD
export type ForumCategory =
  | "getting-hired"
  | "project-help"
  | "ai-tools"
  | "feedback"
  | "announcements";

  id: ForumCategory;
  name: string;
=======

export type ForumCategory =
export type ForumCategory = 
export type ForumCategory = 
  id: ForumCategory;
  name: string,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  description: string;
  adminOnly: boolean;
  icon: string;
}

<<<<<<< HEAD

export interface ForumPost {;

export interface ForumPost {

export interface ForumPost {;
export interface ForumPost {
  id: string;
=======
export interface ForumPost {;

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

<<<<<<< HEAD

export interface ForumReply {;

export interface ForumReply {

export interface ForumReply {;
}
export interface ForumReply {
  id: string;
=======
export interface ForumReply {;

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

<<<<<<< HEAD

export interface Badge {;

  id: string;
  name: string;
=======
export interface Badge {;

  id: string;
  name: string,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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

<<<<<<< HEAD

export interface UserBadge {;

export interface UserBadge {


export interface UserBadge {;
  userId: string;
  badgeId: string;
  awardedAt: string;
}


export interface CommunityUser {;

export interface CommunityUser {

export interface CommunityUser {;
}
export interface Badge {
  id: string;
  name: string;
=======
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
  isVerified: boolean;
  isModerator: boolean;
}
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
