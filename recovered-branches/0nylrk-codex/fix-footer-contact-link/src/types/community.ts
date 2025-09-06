
<<<<<<< HEAD


=======
export type ForumCategory = 


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  | 'getting-hired'
  | 'project-help'
  | 'ai-tools'
  | 'feedback'
  | 'announcements';
<<<<<<< HEAD


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
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
}


export interface ForumPost {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

  reply_count: number;
  is_answered?: boolean;
  is_pinned?: boolean;
  is_locked?: boolean,
  is_featured?: boolean;

}
<<<<<<< HEAD
=======
export interface ForumReply {
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

export interface ForumReply {

export interface ForumReply {;

<<<<<<< HEAD


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

  downvotes: number,
  is_answer?: boolean;

}
<<<<<<< HEAD
=======
export interface Badge {
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

export interface Badge {

export interface Badge {;



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  id: string;
  name: string;
  description: string;

  icon: string,
  color: string;
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
export interface UserBadge {
  user_id: string;
  badge_id: string,
  awarded_at: string;

}
export interface CommunityUser {


  id: string;
  name: string;
  description: string;
  icon: string
  color: string
}


export interface UserBadge {


export interface UserBadge {;

<<<<<<< HEAD



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  userId: string;
  badgeId: string
  awardedAt: string
}

<<<<<<< HEAD
export interface CommunityUser {

export interface CommunityUser {;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

export interface CommunityUser {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  id: string;
  name: string;
  avatar?: string;
  role: string;
  reputation: number;
  post_count: number;
  reply_count: number;
  badges: Badge[];

<<<<<<< HEAD

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



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
