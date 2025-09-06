
<<<<<<< HEAD
=======

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export type ForumCategory = 


  | 'getting-hired'
  | 'project-help'
  | 'ai-tools'
  | 'feedback'
  | 'announcements';
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export type ForumCategory =;
  | 'getting - hired';
  | 'project - help';
  | 'ai - tools';
  | 'feedback';
  | 'announcements';
<<<<<<< HEAD
=======
  id: ForumCategory;
  name: string;
  description: string;
  adminOnly: boolean
  icon: string
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



export interface ForumCategoryInfo {;


  id: ForumCategory;
  name: string;
  description: string;

  admin_only: boolean,
  icon: string;

}
export interface ForumPost {
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}


export interface ForumPost {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======
export interface ForumPost {

export interface ForumPost {;
  id: string;
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
  isLocked?: boolean
  isFeatured?: boolean
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  reply_count: number;
  is_answered?: boolean;
  is_pinned?: boolean;
  is_locked?: boolean,
  is_featured?: boolean;

}
export interface ForumReply {
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
}


export interface ForumReply {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======
export interface ForumReply {

export interface ForumReply {;
  id: string;
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
  downvotes: number
  isAnswer?: boolean
}
export interface Badge {

export interface Badge {;
  id: string;
  name: string;
  description: string;
  icon: string
  color: string
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  downvotes: number,
  is_answer?: boolean;

}
export interface Badge {
}


export interface Badge {;

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


export interface UserBadge {;

<<<<<<< HEAD
=======
export interface UserBadge {

export interface UserBadge {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  userId: string;
  badgeId: string
  awardedAt: string
}


export interface CommunityUser {;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export interface CommunityUser {

export interface CommunityUser {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  id: string;
  name: string;
  avatar?: string;
  role: string;
  reputation: number;
<<<<<<< HEAD
  post_count: number;
  reply_count: number;
  badges: Badge[];


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  postCount: number;
  replyCount: number;
  badges: Badge[];
  isVerified: boolean

  isModerator: boolean
}
export type ForumCategory =;
  | 'getting-hired';
  | 'project-help';
  | 'ai-tools';
  | 'feedback';
  | 'announcements',;
export interface ForumCategoryInfo {;
  id: ForumCategory,;
  name: string,;
  description: string,;
  adminOnly: boolean,;
  icon: string;
}
;
export interface ForumPost {;
  id: string,;
  title: string,;
  content: string,;
  authorId: string,;
  authorName: string,;
  authorAvatar?: string,;
  authorRole?: string,;
  categoryId: ForumCategory,;
  tags: string[],;
  createdAt: string,;
  updatedAt: string,;
  upvotes: number,;
  downvotes: number,;
  replyCount: number,;
  isAnswered?: boolean,;
  isPinned?: boolean,;
  isLocked?: boolean,;
  isFeatured?: boolean;
}
;
export interface ForumReply {;
  id: string,;
  postId: string,;
  parentReplyId?: string,;
  content: string,;
  authorId: string,;
  authorName: string,;
  authorAvatar?: string,;
  authorRole?: string,;
  createdAt: string,;
  updatedAt: string,;
  upvotes: number,;
  downvotes: number,;
  isAnswer?: boolean;
}
;
export interface Badge {;
  id: string,;
  name: string,;
  description: string,;
  icon: string,;
  color: string;
}
;
export interface UserBadge {;
  userId: string,;
  badgeId: string,;
  awardedAt: string;
}
;
export interface CommunityUser {;
  id: string,;
  name: string,;
  avatar?: string,;
  role: string,;
  reputation: number,;
  postCount: number,;
  replyCount: number,;
  badges: Badge[],;
  isVerified: boolean;
  isModerator: boolean;
}
;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
