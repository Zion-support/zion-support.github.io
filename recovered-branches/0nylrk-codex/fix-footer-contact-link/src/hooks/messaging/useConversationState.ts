

=======
import {useState} from 'react';
import {Conversation, Message} from '@/types/messaging';
/**
 * Hook to manage messaging state
 */
export function useConversationState() {;
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeMessages, setActiveMessages] = useState<Message[]>([]);


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [activeConversation, setActiveConversation] = useState<Conversation | null>(null),
  const [isLoading, setIsLoading] = useState(false);
  return {
    // State;
    messages;
    set_messages;
    active_messages;
    setActiveMessages;
    conversations;
    set_conversations;
    unread_count;
    setUnreadCount;

    activeConversation;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    setActiveConversation;
    is_loading;
    setIsLoading}
}