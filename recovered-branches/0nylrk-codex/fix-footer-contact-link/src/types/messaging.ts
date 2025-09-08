
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
  sender_avatar?: string;  }
  name: string;
pr-12325
  avatar_url?: string;
  last_message?: {

    content: string,
    created_at: string;   * Set the currently active conversation. Passing `null` will clear the;
   * selection.;
   */;
  setActiveConversation: (value: Conversation | null) => void,;
  fetchConversations: () => Promise<void>;
  loadMessages: (conversationId: string) => Promise<void>;
}
;
}
