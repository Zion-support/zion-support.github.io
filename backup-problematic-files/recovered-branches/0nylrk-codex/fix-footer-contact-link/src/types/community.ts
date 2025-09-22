
<<<<<<< HEAD
export type ForumCategory = ;
  | 'getting-hired';
  | 'project-help';
  | 'ai-tools';
  | 'feedback';
  | 'announcements';
;
export interface ForumCategoryInfo {;
  id:ForumCategory;
  name:string;
  description:string;
  adminOnly:boolean;
  icon:string;
}
;
export interface ForumPost {;
  id:string;
  title:string;
  content:string;
  authorId:string;
  authorName:string;
  authorAvatar?:string;
  authorRole?:string;
  categoryId:ForumCategory;
  tags:string[];
  createdAt:string;
  updatedAt:string;
  upvotes:number;
  downvotes:number;
  replyCount:number;
  isAnswered?:boolean;
  isPinned?:boolean;
  isLocked?:boolean;
  isFeatured?:boolean;
}
;
export interface ForumReply {;
  id:string;
  postId:string;
  parentReplyId?:string;
  content:string;
  authorId:string;
  authorName:string;
  authorAvatar?:string;
  authorRole?:string;
  createdAt:string;
  updatedAt:string;
  upvotes:number;
  downvotes:number;
  isAnswer?:boolean;
}
;
export interface Badge {;
  id:string;
  name:string;
  description:string;
  icon:string;
  color:string;
}
;
export interface UserBadge {;
  userId:string;
  badgeId:string;
  awardedAt:string;
}
;
export interface CommunityUser {;
  id:string;
  name:string;
  avatar?:string;
  role:string;
  reputation:number;
  postCount:number;
  replyCount:number;
  badges:Badge[];
  isVerified:boolean;
  isModerator:boolean;
} export type ForumCategory = | 'getting-hired' | 'project-help' | 'ai-tools' | 'feedback' | 'announcements';
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
