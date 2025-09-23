
<<<<<<< HEAD
import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { MessagingContextType } from '@/types/messaging';
import { useMessagingOperations, useMessagingRealtime } from '@/hooks/messaging';
=======
import React{ createContextuseContextuseEffectReactNode } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { MessagingContextType } from '@/types/messaging';
import { useMessagingOperationsuseMessagingRealtime } from '@/hooks/messaging';
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

// Default context used when React type definitions are missing
const defaultContext: MessagingContextType = {
  messages: [],
  conversations: [],
  unreadCount: 0,
  activeConversation: null,
  activeMessages: [],
  isLoading: false,
  sendMessage: async () => {},
  createConversation: async () => {},
  markAsRead: async () => {},
  setActiveConversation: () => {},
  fetchConversations: async () => {},
  loadMessages: async () => {}
};

// "createContext" may be untyped if React type definitions are missing.
<<<<<<< HEAD
// To avoid TS2347 when the definitions are unavailable, we cast the default
=======
// To avoid TS2347 when the definitions are unavailablewe cast the default
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
// value instead of passing a generic type parameter directly.
const MessagingContext = createContext(
  defaultContext as MessagingContextType
);

// Hook for using the messaging context
export function useMessaging(): MessagingContextType {
  // Cast to avoid type errors when React type definitions are missing
  const context = useContext(MessagingContext) as MessagingContextType;
  if (context === undefined) {
    throw new Error('useMessaging must be used within a MessagingProvider');
  }
  return context;
}

// Provider component
export function MessagingProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  
  const {
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
    sendMessage,
    createConversation,
    markAsRead,
    fetchConversations,
    loadMessages
  } = useMessagingOperations(user);

  // Setup real-time subscription
<<<<<<< HEAD
  useMessagingRealtime(user, activeConversation, setActiveMessages, fetchConversations);
=======
  useMessagingRealtime(useractiveConversationsetActiveMessagesfetchConversations);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

  // Calculate unread count from conversations
  useEffect(() => {
    if (conversations.length > 0) {
<<<<<<< HEAD
      const count = conversations.reduce((acc, conversation) => acc + conversation.unread_count, 0);
      setUnreadCount(count);
    }
  }, [conversations, setUnreadCount]);
=======
      const count = conversations.reduce((acconversation) => acc + conversation.unread_count0);
      setUnreadCount(count);
    }
  }[conversationsetUnreadCount]);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

  // Fetch conversations when user changes
  useEffect(() => {
    if (user) {
      fetchConversations();
    } else {
      setConversations([]);
      setUnreadCount(0);
    }
<<<<<<< HEAD
  }, [user, fetchConversations, setConversations, setUnreadCount]);
=======
  }[userfetchConversationsetConversationsetUnreadCount]);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

  // Create context value with all the methods and states
  const contextValue: MessagingContextType = {
    messages,
    activeMessages,
    conversations,
    unreadCount,
    activeConversation,
    isLoading,
    sendMessage,
    createConversation,
    markAsRead,
    setActiveConversation,
    fetchConversations,
    loadMessages
  };

  return (
    <MessagingContext.Provider value={contextValue}>
      {children}
    </MessagingContext.Provider>
  );
}
