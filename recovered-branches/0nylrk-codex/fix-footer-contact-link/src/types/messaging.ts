// Define the shape of a message;
export interface Message {
  id: string;
  sender_id: string;
  recipient_id: string;
  content: string;
  created_at: string;
  read: boolean;
  sender_name?: string;
  sender_avatar?: string;
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
}