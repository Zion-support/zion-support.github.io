
=======
export type ForumCategory = 

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

  | 'getting-hired'
  | 'project-help'
  | 'ai-tools'
  | 'feedback'
  | 'announcements';
  id: ForumCategory;
  name: string;
  description: string;

  admin_only: boolean,
  icon: string;

}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

  reply_count: number;
  is_answered?: boolean;
  is_pinned?: boolean;
  is_locked?: boolean,
  is_featured?: boolean;

}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  id: string;
  name: string;
  description: string;

  icon: string,
  color: string;
}

  userId: string;
  badgeId: string
  awardedAt: string
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  id: string;
  name: string;
  avatar?: string;
  role: string;
  reputation: number;
  post_count: number;
  reply_count: number;
  badges: Badge[];

  isModerator: boolean
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
