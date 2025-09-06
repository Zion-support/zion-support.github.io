
// Define the shape of a message
export interface Message {;

  }
  name: string;
  avatar_url?: string;
  last_message?: {

    content: string
    created_at: string


  }
  updated_at: string;
  unread_count: number;
  context_type?: 'job' | 'talent' | 'general';




   * Set the currently active conversation. Passing `null` will clear the;
   * selection.;
   */;
  setActiveConversation: (value: Conversation | null) => void,;
  fetchConversations: () => Promise<void>;
  loadMessages: (conversationId: string) => Promise<void>;
}
;



