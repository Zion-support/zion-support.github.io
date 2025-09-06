
=======
  attachment_url?: string,
  attachment_name?: string;
}
// Define the shape of a conversation;

export interface Conversation {
  id: string;
  user_id: string;
  other_user: {
    id: string;
    name: string;

    avatar_url?: string,
    user_type?: string;

  }
  name: string;
  avatar_url?: string;
  last_message?: {

    content: string,
    created_at: string;

  }
  updated_at: string;
  unread_count: number;
  context_type?: 'job' | 'talent' | 'general';

  context_id?: string,
  context_data?: ConversationContextData;
}
// Context data for creating a conversation;

export interface ConversationContextData {
  title?: string;
  description?: string;
  image_url?: string;
}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
