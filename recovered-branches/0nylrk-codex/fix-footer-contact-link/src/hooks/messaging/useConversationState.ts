
<<<<<<< HEAD
import { useState } from 'react',
import { Conversation, Message } from '@/types/messaging',
=======
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

/**
 * Hook to manage messaging state
 */
<<<<<<< HEAD
export function useConversationState() {
  const [messages, setMessages] = useState<Message[]>([]),
  const [activeMessages, setActiveMessages] = useState<Message[]>([]),
  const [conversations, setConversations] = useState<Conversation[]>([]),
  const [unreadCount, setUnreadCount] = useState(0),
  const [activeConversation, setActiveConversation] = useState<Conversation | null>(null),
  const [isLoading, setIsLoading] = useState(false),

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
=======
export function useConversationState() {_const [messages, _setMessages] = useState<Message[]>([]);
  const [activeMessages, _setActiveMessages] = useState<Message[]>([]);
  const [conversations, _setConversations] = useState<Conversation[]>([]);
  const [unreadCount, _setUnreadCount] = useState(0);
  const [activeConversation, _setActiveConversation] = useState<Conversation | null>(null);
  const [isLoading, _setIsLoading] = useState(false);

  return {
    // State
    messages, _setMessages, _activeMessages, _setActiveMessages, _conversations, _setConversations, _unreadCount, _setUnreadCount, _activeConversation, _setActiveConversation, _isLoading, _setIsLoading};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
