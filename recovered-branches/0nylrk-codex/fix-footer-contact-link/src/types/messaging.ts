
// Define the shape of a message
<<<<<<< HEAD
export interface Message {
  id: string,
  sender_id: string,
  recipient_id: string,
  content: string,
  created_at: string,
  read: boolean,
  sender_name?: string,
  sender_avatar?: string,
  attachment_url?: string,
  attachment_name?: string
}

// Define the shape of a conversation
export interface Conversation {
  id: string,
  user_id: string,
  other_user: {
    id: string,
    name: string,
    avatar_url?: string,
    user_type?: string
  },
  name: string,
  avatar_url?: string,
  last_message?: {
    content: string,
    created_at: string
  },
  updated_at: string,
  unread_count: number,
  context_type?: 'job' | 'talent' | 'general',
  context_id?: string,
  context_data?: ConversationContextData
}

// Context data for creating a conversation
export interface ConversationContextData {
  title?: string,
  description?: string,
  image_url?: string
}

// Define the shape of the messaging context
export interface MessagingContextType {
  messages: Message[],
  conversations: Conversation[],
  unreadCount: number,
  activeConversation: Conversation | null,
  activeMessages: Message[],
  isLoading: boolean,
  sendMessage: (conversationId: string, content: string) => Promise<void>,
  createConversation: (
    recipientId: string, 
    initialMessage: string, 
    contextType?: 'job' | 'talent' | 'general',
    contextId?: string,
    contextData?: ConversationContextData
  ) => Promise<void>,
  markAsRead: (conversationId: string) => Promise<void>,
=======
export interface Message {_id: string;
  sender_id: string;
  recipient_id: string;
  content: string;
  created_at: string;
  read: boolean;
  sender_name?: string;
  sender_avatar?: string;
  attachment_url?: string;
  attachment_name?: string;}

// Define the shape of a conversation
export interface Conversation {_id: string;
  user_id: string;
  other_user: {
    id: string;
    name: string;
    avatar_url?: string;
    user_type?: string;};
  name: string;
  avatar_url?: string;
  last_message?: {_content: string;
    created_at: string;};
  updated_at: string;
  unread_count: number;
  context_type?: 'job' | 'talent' | 'general';
  context_id?: string;
  context_data?: ConversationContextData;
}

// Context data for creating a conversation
export interface ConversationContextData {_title?: string;
  description?: string;
  image_url?: string;}

// Define the shape of the messaging context
export interface MessagingContextType {_messages: Message[];
  conversations: Conversation[];
  unreadCount: number;
  activeConversation: Conversation | null;
  activeMessages: Message[];
  isLoading: boolean;
  sendMessage: (_conversationId: string, _content: string) => Promise<void>;
  createConversation: (_recipientId: string, _initialMessage: string, _contextType?: 'job' | 'talent' | 'general', _contextId?: string, _contextData?: ConversationContextData) => Promise<void>;
  markAsRead: (_conversationId: string) => Promise<void>;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  /**
   * Set the currently active conversation. Passing `null` will clear the
   * selection.
   */
<<<<<<< HEAD
  setActiveConversation: (value: Conversation | null) => void,
  fetchConversations: () => Promise<void>,
  loadMessages: (conversationId: string) => Promise<void>
}
=======
  setActiveConversation: (_value: Conversation | null) => void;
  fetchConversations: () => Promise<void>;
  loadMessages: (_conversationId: string) => Promise<void>;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
