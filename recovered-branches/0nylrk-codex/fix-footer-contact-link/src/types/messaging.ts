
// Define the shape of a message
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
  /**
   * Set the currently active conversation. Passing `null` will clear the
   * selection.
   */
  setActiveConversation: (_value: Conversation | null) => void;
  fetchConversations: () => Promise<void>;
  loadMessages: (_conversationId: string) => Promise<void>;}
