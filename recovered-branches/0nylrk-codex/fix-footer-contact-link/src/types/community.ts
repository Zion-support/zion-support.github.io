<<<<<<< HEAD

export type ForumCategory =
export type ForumCategory = 
export type ForumCategory = 
=======
export type ForumCategory =
  | "getting-hired"
  | "project-help"
  | "ai-tools"
  | "feedback"
  | "announcements";
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

  id: ForumCategory;
  name: string;
  description: string;
  adminOnly: boolean;
  icon: string;
}


export interface ForumPost {;

export interface ForumPost {

export interface ForumPost {;
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
  isLocked?: boolean;
  isFeatured?: boolean;
}


export interface ForumReply {;

export interface ForumReply {

export interface ForumReply {;
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
  downvotes: number;
  isAnswer?: boolean;
}


export interface Badge {;

  id: string;
  name: string;
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
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD


export interface UserBadge {;

<<<<<<< HEAD
=======
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  id: string;
  name: string;
  description: string;
  icon: string
  color: string
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
export interface UserBadge {


export interface UserBadge {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  userId: string;
  badgeId: string;
  awardedAt: string;
}


export interface CommunityUser {;

<<<<<<< HEAD
export interface CommunityUser {

export interface CommunityUser {;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export interface CommunityUser {

export interface CommunityUser {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
}
export interface Badge {
  id: string;
  name: string;
  description: string;
}
export interface CommunityUser {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  id: string;
  name: string;
  avatar?: string;
  role: string;
  reputation: number;
}
export interface Badge {
  id: string;
  name: string;
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
=======
  isVerified: boolean;
  isModerator: boolean;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
}
