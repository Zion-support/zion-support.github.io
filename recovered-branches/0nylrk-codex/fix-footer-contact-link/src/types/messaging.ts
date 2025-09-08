export interface Conversation {




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


