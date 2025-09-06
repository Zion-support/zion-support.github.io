
import { useState } from 'react';
import { Conversation, Message } from '@/types/messaging';
/**
 * Hook to manage messaging state
 */
export function useConversationState() {
  const [messages, setMessages] = useState<Message[]>([]),
  const [activeMessages, setActiveMessages] = useState<Message[]>([]),
  const [conversations, setConversations] = useState<Conversation[]>([]),
  const [unreadCount, setUnreadCount] = useState($2);
  const [activeConversation, setActiveConversation] = useState<Conversation | null>(null),
  const [isLoading, setIsLoading] = useState($2);
  return {
    // State
    messages,
    setMessages,
    activeMessages,
    setActiveMessages,
    conversations,
    setConversations,
    unreadCount,
    setUnreadCount,
    activeConversation,
    setActiveConversation,
    isLoading,
    setIsLoading}
}
