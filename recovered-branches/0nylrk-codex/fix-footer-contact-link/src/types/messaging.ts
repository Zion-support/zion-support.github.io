
  attachment_url?: string,
  attachment_name?: string;
}
// Define the shape of a conversation;

export interface Conversation {
  id: string;
  sender_id: string;
  recipient_id: string;
  content: string;
  created_at: string;
  read: boolean;
  sender_name?: string;
<<<<<<< HEAD
  sender_avatar?: string;

  attachment_url?: string;

  attachment_name?: string
}

// Define the shape of a conversation
export interface Conversation {
  id: string;
  user_id: string;
  other_user: {
    id: string;
    name: string;

    avatar_url?: string;
    user_type?: string
  },

=======
  sender_avatar?: string;  }
>>>>>>> origin/main
  name: string;
  // TODO: Implement
  id: string;,
  sender_id: string;
  recipient_id: string;,
  content: string;
  created_at: string;,
  read: boolean;
  sender_name?: string;
  sender_avatar?: string;

  attachment_url?: string;
// Define the shape of a conversation;
export interface Conversation {;
  // TODO: Implement
  user_id: string;
  other_user: {,
  id: string;
    name: string;

    avatar_url?: string,
    user_type?: string;

pr-12325
  avatar_url?: string;
  last_message?: {
<<<<<<< HEAD
    content: string;
    created_at: string

  },
  updated_at: string;
  unread_count: number;
  context_type?: 'job' | 'talent' | 'general';
  context_id?: string;

  context_data?: ConversationContextData
}
=======

    content: string,
    created_at: string;   * Set the currently active conversation. Passing `null` will clear the;
    created_at: string;

  updated_at: string;,
  unread_count: number;
  context_type?: 'job' | 'talent' | 'general';
  context_id?: string,
  context_data?: ConversationContextData;
// Context data for creating a conversation;
>>>>>>> origin/main

export interface ConversationContextData {
  // TODO: Implement
  title?: string;
  description?: string;
  image_url?: string;

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
  unread_count: number,;
  context_type?: 'job' | 'talent' | 'general',;
  context_id?: string,;
// Context data for creating a conversation;
export interface ConversationContextData {;
  title?: string,;
  description?: string,;

// Define the shape of the messaging context;
export interface MessagingContextType {
  // TODO: Implement
  messages: Message[];,
  conversations: Conversation[];
<<<<<<< HEAD
  unreadCount: number;
  activeConversation: Conversation | null;
  activeMessages: Message[];

  isLoading: boolean;
  sendMessage: (conversationId: string, content: string) => Promise<void>;
  createConversation: (
    recipientId: string;
    initialMessage: string;

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

  fetchConversations: () => Promise<void>;

  loadMessages: (conversationId: string) => Promise<void>
=======
  unread_count: number;,
  active_conversation: Conversation | null;
  active_messages: Message[];,
  is_loading: boolean,
  send_message: (conversation_id: string, content: string) => Promise < void>,
  create_conversation: (,
  recipient_id: string,
    initial_message: string,
    context_id?: string;)
    context_data?: ConversationContextData) => Promise < void>;
  markAsRead: (conversation_id: string) => Promise < void>;
  /**;

   * Set the currently active conversation. Passing `null` will clear the;
pr-12325
   * selection.;
   */;
  setActiveConversation: (value: Conversation | null) => void,;
  fetchConversations: () => Promise<void>;
  loadMessages: (conversationId: string) => Promise<void>;
>>>>>>> origin/main
}
;
}
</void>
  loadMessages: (conversationId: string) => Promise<void>;
</void>`;
pr-12325
