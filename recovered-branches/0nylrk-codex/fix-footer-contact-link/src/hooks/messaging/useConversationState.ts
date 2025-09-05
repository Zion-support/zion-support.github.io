

/**
 * Hook to manage messaging state
 */
export function useConversationState() {_const [messages, _setMessages] = useState<Message[]>([]);
  const [activeMessages, _setActiveMessages] = useState<Message[]>([]);
  const [conversations, _setConversations] = useState<Conversation[]>([]);
  const [unreadCount, _setUnreadCount] = useState(0);
  const [activeConversation, _setActiveConversation] = useState<Conversation | null>(null);
  const [isLoading, _setIsLoading] = useState(false);

  return {
    // State
    messages, _setMessages, _activeMessages, _setActiveMessages, _conversations, _setConversations, _unreadCount, _setUnreadCount, _activeConversation, _setActiveConversation, _isLoading, _setIsLoading};
}
