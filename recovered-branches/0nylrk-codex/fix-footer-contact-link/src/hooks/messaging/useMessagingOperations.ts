

// Allow either UserProfile or UserDetails
type UserWithProfile = UserProfile | UserDetails | null;

/**
 * Hook that combines all messaging operations
 */
export function useMessagingOperations(_user: UserWithProfile) {_// State management
  const {
    messages, _setMessages, _activeMessages, _setActiveMessages, _conversations, _setConversations, _unreadCount, _setUnreadCount, _activeConversation, _setActiveConversation, _isLoading, _setIsLoading} = useConversationState();

  // Conversations management
  const {_fetchConversations, _createConversation} = useConversations(
    user,
    setConversations,
    setUnreadCount,
    setIsLoading
  );

  // Messages management
  const {_loadMessages, _sendMessage, _markAsRead} = useMessages(
    user,
    activeConversation,
    activeMessages,
    setActiveMessages,
    conversations,
    setConversations,
    setUnreadCount,
    setIsLoading,
    fetchConversations
  );

  return {_// State
    messages, _activeMessages, _setActiveMessages, _conversations, _setConversations, _unreadCount, _setUnreadCount, _activeConversation, _setActiveConversation, _isLoading, _// Operations
    sendMessage, _createConversation, _markAsRead, _fetchConversations, _loadMessages};
}
