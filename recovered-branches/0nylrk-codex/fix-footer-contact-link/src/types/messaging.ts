
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
  attachment_url?: string,
  attachment_name?: string;
}
// Define the shape of a conversation;

export interface Conversation {
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
// Define the shape of a message
export interface Message {;
  id: string;
  sender_id: string;
  recipient_id: string;
  content: string;
  created_at: string;
  read: boolean;
  sender_name?: string;
  sender_avatar?: string;

  attachment_url?: string

  attachment_name?: string
}
// Define the shape of a conversation
export interface Conversation {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  id: string;
  user_id: string;
  other_user: {
    id: string;
    name: string;

<<<<<<< HEAD
    avatar_url?: string,
    user_type?: string;

=======
    avatar_url?: string
    user_type?: string
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
  name: string;
  avatar_url?: string;
  last_message?: {
<<<<<<< HEAD

    content: string,
    created_at: string;

=======
    content: string
    created_at: string
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
  updated_at: string;
  unread_count: number;
  context_type?: 'job' | 'talent' | 'general';
<<<<<<< HEAD

  context_id?: string,
  context_data?: ConversationContextData;
}
// Context data for creating a conversation;

export interface ConversationContextData {
  title?: string;
  description?: string;
  image_url?: string;
}

=======


=======
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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
  attachment_name?: string;
}
;
// Define the shape of a conversation;
export interface Conversation {;
  id: string,;
  user_id: string,;
  other_user: {;
    id: string,;
    name: string,;
    avatar_url?: string,;
    user_type?: string;
  },;
  name: string,;
  avatar_url?: string,;
  last_message?: {;
    content: string,;
    created_at: string;
  },;
  updated_at: string,;
  unread_count: number,;
  context_type?: 'job' | 'talent' | 'general',;
  context_id?: string,;
  context_data?: ConversationContextData;
}
;
// Context data for creating a conversation;
export interface ConversationContextData {;
  title?: string,;
  description?: string,;
  image_url?: string;
}
;
<<<<<<< HEAD

// Define the shape of the messaging context;
export interface MessagingContextType {
  messages: Message[];
  conversations: Conversation[];
  unread_count: number;
  active_conversation: Conversation | null;
  active_messages: Message[];
  is_loading: boolean,
  send_message: (conversation_id: string, content: string) => Promise < void>,
  create_conversation: (
    recipient_id: string,
    initial_message: string,
    context_type?: 'job' | 'talent' | 'general';
    context_id?: string;
    context_data?: ConversationContextData) => Promise < void>;
  markAsRead: (conversation_id: string) => Promise < void>;
  /**;

=======
// Define the shape of the messaging context;
export interface MessagingContextType {;
  messages: Message[],;
  conversations: Conversation[],;
  unreadCount: number,;
  activeConversation: Conversation | null,;
  activeMessages: Message[],;
  isLoading: boolean,;
  sendMessage: (conversationId: string, content: string) => Promise<void>,;
  createConversation: (;
    recipientId: string,;
    initialMessage: string,;
    contextType?: 'job' | 'talent' | 'general',;
    contextId?: string,;
    contextData?: ConversationContextData;
  ) => Promise<void>,;
  markAsRead: (conversationId: string) => Promise<void>,;
  /**;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
   * Set the currently active conversation. Passing `null` will clear the;
   * selection.;
   */;
  setActiveConversation: (value: Conversation | null) => void,;
  fetchConversations: () => Promise<void>;
  loadMessages: (conversationId: string) => Promise<void>;
}
;
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
