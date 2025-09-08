




export type ForumCategory =
export type ForumCategory = 
export type ForumCategory = 

  id: ForumCategory;
  name: string;
  description: string;
  adminOnly: boolean;
  icon: string;
}





  reply_count: number;
  is_answered?: boolean;
  is_pinned?: boolean;
  is_locked?: boolean,
  is_featured?: boolean;

}
export interface ForumReply {

}
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



  downvotes: number,
  is_answer?: boolean;

}
export interface Badge {
}


export interface Badge {;

  id: string;
  name: string;
  description: string;

export interface CommunityUser {








