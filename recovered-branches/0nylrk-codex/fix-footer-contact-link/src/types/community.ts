export type ForumCategory =
  | "getting-hired"
  | "project-help"
  | "ai-tools"
  | "feedback"
  | "announcements";

  id: ForumCategory;
  name: string;
  description: string;
  adminOnly: boolean;
  icon: string;
}


=======
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

export interface ForumPost {;

export interface ForumPost {};
export interface ForumPost {;


>>>>>>> origin/cursor/delete-old-data-records-6bba
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

}
=======
  replyCount: number;
  isAnswered?: boolean;
  isPinned?: boolean;
  isLocked?: boolean
  isFeatured?: boolean


}
>>>>>>> origin/cursor/delete-old-data-records-6bba

}
export interface UserBadge {;

export interface ForumReply {;

<<<<<<< HEAD
=======

export interface ForumReply {};
export interface ForumReply {;
}
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
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

  user_id: string;
  badge_id: string,
  awarded_at: string;

}

<<<<<<< HEAD
export interface CommunityUser {

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  userId: string;
  badgeId: string;
  awardedAt: string;
}


export interface CommunityUser {;

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export interface CommunityUser {

export interface CommunityUser {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
export interface Badge {
  id: string;
  name: string;
  description: string;
}
export interface CommunityUser {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  id: string;
  name: string;
  avatar?: string;
  role: string;
  reputation: number;
<<<<<<< HEAD
<<<<<<< HEAD
  post_count: number;
  reply_count: number;
  badges: Badge[];
  isVerified: boolean;
  isModerator: boolean;
}
