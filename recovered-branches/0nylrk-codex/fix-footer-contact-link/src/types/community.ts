<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
export type ForumCategory =
export type ForumCategory = 
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
export type ForumCategory = 
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  | 'getting-hired'
  | 'project-help'
  | 'ai-tools'
  | 'feedback'
  | 'announcements';
<<<<<<< HEAD
export type ForumCategory =;
  | 'getting - hired';
  | 'project - help';
  | 'ai - tools';
  | 'feedback';
  | 'announcements';
export interface ForumCategoryInfo {
  id: ForumCategory;
  name: string;
  description: string;
adminOnly: boolean
  icon: string
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
export interface ForumPost {

export interface ForumPost {;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  id: ForumCategory;
  name: string;
  description: string;
  adminOnly: boolean
  icon: string
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

export interface ForumCategoryInfo {;

export type ForumCategory =
export type ForumCategory = 
export type ForumCategory = 
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export type ForumCategory =
  | "getting-hired"
  | "project-help"
  | "ai-tools"
  | "feedback"
  | "announcements";

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: ForumCategory;
  name: string;
  description: string;
  adminOnly: boolean;
  icon: string;
}

export interface ForumPost {;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

export interface ForumPost {};
export interface ForumPost {;
export interface ForumPost {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  id: string;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export interface ForumPost {

export interface ForumPost {;
export interface ForumPost {
  id: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
  isLocked?: boolean
  isFeatured?: boolean
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  reply_count: number;
  is_answered?: boolean;
  is_pinned?: boolean;
  is_locked?: boolean,
  is_featured?: boolean;

}
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export interface ForumReply {

export interface ForumReply {;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
export interface UserBadge {;

export interface ForumReply {;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

export interface ForumReply {};
export interface ForumReply {;
}
export interface ForumReply {
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  id: string;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export interface ForumReply {
export interface ForumReply {;
}
export interface ForumReply {
  id: string;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  downvotes: number,
  is_answer?: boolean;

}
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export interface Badge {

export interface Badge {;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}

export interface Badge {;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;

  icon: string,
color: string;
}
<<<<<<< HEAD
  user_id: string;
  badge_id: string,
  awarded_at: string;

}

export interface CommunityUser {
  // TODO: Implement
export interface UserBadge {;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  id: string;
  name: string;
=======
  name: string,
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  description: string;
  icon: string
  color: string
}
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export interface UserBadge {

export interface UserBadge {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export interface CommunityUser {}
export interface UserBadge {};
export interface UserBadge {;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  userId: string;
  badgeId: string;
  awardedAt: string;
}
export interface CommunityUser {

export interface CommunityUser {;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
export interface UserBadge {

export interface UserBadge {;}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export interface UserBadge {

export interface UserBadge {;
  userId: string;
=======
  // TODO: Implement
  userId: string;,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  badgeId: string;
  awardedAt: string;

export interface CommunityUser {;

  // TODO: Implement
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface Badge {
  id: string;
  name: string;
=======
export interface CommunityUser {;

}
export interface UserBadge {}
export interface UserBadge {;}
export interface Badge {

  // TODO: Implement
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  description: string;

}
export interface CommunityUser {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export interface CommunityUser {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  id: string;
  name: string;
=======
  // TODO: Implement
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  avatar?: string;
  role: string;,
  reputation: number;
post_count: number;
  reply_count: number;
  badges: Badge[];
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
  isModerator: boolean
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  isVerified: boolean;
  isModerator: boolean;
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  isVerified: boolean;
  isModerator: boolean;
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

  post_count: number;,
  reply_count: number;
  badges: Badge[];,
  isVerified: boolean;
  isModerator: boolean;
}
"
pr-12325

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
