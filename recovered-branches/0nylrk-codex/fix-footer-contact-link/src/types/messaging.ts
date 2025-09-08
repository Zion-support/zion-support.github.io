attachment_url?: string,

  attachment_url?: string,
  attachment_name?: string;
}
// Define the shape of a conversation;

<<<<<<< HEAD
export interface Conversation {


=======

  id: string;
  sender_id: string;
  recipient_id: string;
  content: string;
  created_at: string;
  read: boolean;
  sender_name?: string;


>>>>>>> origin/cursor/delete-old-data-records-6bba
  id: string;
  user_id: string;
  other_user: {}
    id: string;
    name: string;

<<<<<<< HEAD
=======
  }
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  attachment_url?: string;
// Define the shape of a conversation;
export interface Conversation {;
export interface Conversation {
  id: string;
  // TODO: Implement
  user_id: string;
  other_user: {,
  id: string;
    name: string;

    avatar_url?: string,
    user_type?: string;

avatar_url?: string
    user_type?: string
  }

  name: string;
pr-12325
  avatar_url?: string;

>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
  updated_at: string;
  unread_count: number;
  context_type?: 'job' | 'talent' | 'general';

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  context_id?: string,
  context_data?: ConversationContextData;
}


  name: string;
pr-12325
  avatar_url?: string;

  }
  updated_at: string;
  unread_count: number;
  context_type?: 'job' | 'talent' | 'general';


  context_id?: string

  context_data?: ConversationContextData
}
// Context data for creating a conversation
export interface ConversationContextData {;
  title?: string;
  description?: string;
  image_url?: string
}
// Define the shape of the messaging context
export interface MessagingContextType {;
  messages: Message[];
  conversations: Conversation[];
  unreadCount: number;
  activeConversation: Conversation | null;
  activeMessages: Message[];

  isLoading: boolean
  sendMessage: (conversationId: string, content: string) => Promise<void>
  createConversation: (
    recipientId: string
    initialMessage: string

    contextType?: 'job' | 'talent' | 'general';
    contextId?: string;
    contextData?: ConversationContextData
  ) => Promise<void>;
  markAsRead: (conversationId: string) => Promise<void>;
  /**
   * Set the currently active conversation. Passing `null` will clear the
   * selection.
   */
  setActiveConversation: (value: Conversation | null) => void;

  fetchConversations: () => Promise<void>

  loadMessages: (conversationId: string) => Promise<void>
}

<<<<<<< HEAD

// Define the shape of a message;
export interface Message {;
  id: string,;
  sender_id: string,;
  recipient_id: string,;
  content: string,;
  created_at: string,;
  read: boolean,;
  sender_name?: string,;
  sender_avatar?: string,;
  attachment_url?: string,;
;
// Define the shape of a conversation;
  user_id: string,;
  other_user: {;,
    name: string,;
    avatar_url?: string,;
  },;
  last_message?: {;
  updated_at: string,;

  context_type?: 'job' | 'talent' | 'general',;
  context_id?: string,;
// Context data for creating a conversation;
export interface ConversationContextData {;
  title?: string,;
  description?: string,;
  image_url?: string;
}

;


=======
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
