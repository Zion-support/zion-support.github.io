export interface Conversation {
  id: string;
  user_id: string;
  other_user: {
    id: string;
    name: string;

  }
  name: string;
  avatar_url?: string;
  last_message?: {
  }
  updated_at: string;
  unread_count: number;
  context_type?: 'job' | 'talent' | 'general';
export interface ConversationContextData {
  title?: string;
  description?: string;
  image_url?: string;
}
   * Set the currently active conversation. Passing `null` will clear the;
   * selection.;
   */;
  setActiveConversation: (value: Conversation | null) => void,;
  fetchConversations: () => Promise<void>;
  loadMessages: (conversationId: string) => Promise<void>;
}
;
