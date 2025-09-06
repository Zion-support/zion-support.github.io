


  | 'getting-hired'
  | 'project-help'
  | 'ai-tools'
  | 'feedback'
  | 'announcements';


>>>>>>> origin/feature/merge-conflicts-and-improvements
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



export interface ForumReply {

export interface ForumReply {;



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements
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



export interface Badge {

export interface Badge {;



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/feature/merge-conflicts-and-improvements
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




  id: string;
  name: string;
  description: string;
  icon: string
  color: string
}



export interface UserBadge {


export interface UserBadge {;




  userId: string;
  badgeId: string
  awardedAt: string
}





>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

  id: string;
  name: string;
  avatar?: string;
  role: string;
  reputation: number;
  post_count: number;
  reply_count: number;
  badges: Badge[];



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements
