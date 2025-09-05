
<<<<<<< HEAD
import { UserProfile, UserDetails } from '@/types/auth',
import { Message, Conversation, ConversationContextData } from '@/types/messaging',
import { useConversationState } from './useConversationState',
import { useConversations } from './useConversations',
import { useMessages } from './useMessages',
=======

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
// Allow either UserProfile or UserDetails
type UserWithProfile = UserProfile | UserDetails | null,

/**
 * Hook that combines all messaging operations
 */
export function useMessagingOperations(_user: UserWithProfile) {_// State management
  const {
<<<<<<< HEAD
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
    setIsLoading
  } = useConversationState(),
=======
    messages, _setMessages, _activeMessages, _setActiveMessages, _conversations, _setConversations, _unreadCount, _setUnreadCount, _activeConversation, _setActiveConversation, _isLoading, _setIsLoading} = useConversationState();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Conversations management
  const {_fetchConversations, _createConversation} = useConversations(
    user,
    setConversations,
    setUnreadCount,
    setIsLoading
  ),

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
  ),

<<<<<<< HEAD
  return {
    // State
    messages,
    activeMessages,
    setActiveMessages,
    conversations,
    setConversations,
    unreadCount,
    setUnreadCount,
    activeConversation,
    setActiveConversation,
    isLoading,
    // Operations
    sendMessage,
    createConversation,
    markAsRead,
    fetchConversations,
    loadMessages
  }
=======
  return {_// State
    messages, _activeMessages, _setActiveMessages, _conversations, _setConversations, _unreadCount, _setUnreadCount, _activeConversation, _setActiveConversation, _isLoading, _// Operations
    sendMessage, _createConversation, _markAsRead, _fetchConversations, _loadMessages};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
