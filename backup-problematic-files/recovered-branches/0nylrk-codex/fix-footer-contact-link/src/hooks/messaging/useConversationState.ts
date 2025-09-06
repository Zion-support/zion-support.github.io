
import { useState } from 'react';
import { Conversation, Message } from '@/types/messaging';
;
/**;
 * Hook to manage messaging state;
 */;
export function useConversationState() {;
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeMessages, setActiveMessages] = useState<Message[]>([]);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [activeConversation, setActiveConversation] = useState<Conversation | null>(null);
  const [isLoading, setIsLoading] = useState(false);
;
  return {;
    // State;
    messages;
    setMessages;
    activeMessages;
    setActiveMessages;
    conversations;
    setConversations;
    unreadCount;
    setUnreadCount;
    activeConversation;
    setActiveConversation;
    isLoading;
    setIsLoading};
} /** * Hook to manage messaging state */ 
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
