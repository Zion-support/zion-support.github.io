<<<<<<< HEAD
=======

<<<<<<< HEAD

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export type ForumCategory = 


  | 'getting-hired'
  | 'project-help'
  | 'ai-tools'
  | 'feedback'
  | 'announcements';
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export type ForumCategory =;
  | 'getting - hired';
  | 'project - help';
  | 'ai - tools';
  | 'feedback';
  | 'announcements';
<<<<<<< HEAD
  id: ForumCategory;
  name: string;
  description: string;
  adminOnly: boolean
  icon: string
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export interface ForumCategoryInfo {
  id: ForumCategory;
  name: string;
  description: string;

  id: ForumCategory;
  name: string;
  description: string;
  adminOnly: boolean
  icon: string
}

export type ForumCategory =
export type ForumCategory = 
export type ForumCategory = 

  id: ForumCategory;
  name: string;
  description: string;
  adminOnly: boolean;
  icon: string;
}
<<<<<<< HEAD

export interface ForumPost {;

export interface ForumPost {};
export interface ForumPost {;

=======
export interface ForumPost {
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}


export interface ForumPost {;

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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

}
export interface ForumReply {
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}

}
export interface UserBadge {;

export interface ForumReply {;

<<<<<<< HEAD
export interface ForumReply {};
export interface ForumReply {;
}

  id: string;

export interface Badge {;

  color: string;
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  downvotes: number,
  is_answer?: boolean;

}
export interface Badge {
}


export interface Badge {;

  id: string;
  name: string;
  description: string;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  icon: string,

  user_id: string;
  badge_id: string,
  awarded_at: string;

}
<<<<<<< HEAD
=======
export interface CommunityUser {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
export interface UserBadge {

export interface UserBadge {;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  userId: string;
  badgeId: string;
  awardedAt: string;
}

  badgeId: string;
  awardedAt: string;

export interface CommunityUser {;

<<<<<<< HEAD
  // TODO: Implement
}

=======
<<<<<<< HEAD
export interface CommunityUser {

export interface CommunityUser {;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  id: string;
  name: string;

  description: string;

}

  id: string;
  name: string;

  avatar?: string;
  role: string;,
  reputation: number;
<<<<<<< HEAD

  post_count: number;
  reply_count: number;
  badges: Badge[];
=======
<<<<<<< HEAD
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

=======
  post_count: number;
  reply_count: number;
  badges: Badge[];


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
