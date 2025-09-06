
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import React, { createContext, useContext, useEffect, ReactNode } from 'react',;
import { useAuth } from '@/hooks/useAuth',;
import { MessagingContextType } from '@/types/messaging',;
import { useMessagingOperations, useMessagingRealtime } from '@/hooks/messaging',;
// Default context used when React type definitions are missing;
const defaultContext: MessagingContextType = {;
  messages: [],;
  conversations: [],;
  unreadCount: 0,;
  activeConversation: null,;
  activeMessages: [],;
  isLoading: false,;
  sendMessage: async () => {},;
  createConversation: async () => {},;
  markAsRead: async () => {},;
  setActiveConversation: () => {},;
  fetchConversations: async () => {},;
  loadMessages: async () => {}
},
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

const defaultContext: MessagingContextType = {
  messages: []
  conversations: []
  unreadCount: 0
  activeConversation: null
  activeMessages: []
  isLoading: false
  sendMessage: async () => {}
  createConversation: async () => {}
  markAsRead: async () => {}
  setActiveConversation: () => {}
  fetchConversations: async () => {}
  loadMessages: async () => {}
}
// "createContext" may be untyped if React type definitions are missing.
// To avoid TS2347 when the definitions are unavailable, we cast the default
// value instead of passing a generic type parameter directly.
const MessagingContext = createContext(
  defaultContext as MessagingContextType

// Hook for using the messaging context
export function useMessaging(): MessagingContextType {

  if (context === undefined) {
    throw new Error('useMessaging must be used within a MessagingProvider')
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
  return context;
}
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
// Provider component
export function MessagingProvider({ children }: { children: ReactNode }) {;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const { user } = useAuth();

  const {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    messages;
    active_messages;
    setActiveMessages;
    conversations;
    set_conversations;
    unread_count;
    setUnreadCount;
    active_conversation;
    setActiveConversation;
    is_loading;
    send_message;
    create_conversation;
    markAsRead;

  return (
    <MessagingContext.Provider value={contextValue}>

      setUnreadCount(0);
    }
  }, [user, fetchConversations, setConversations, setUnreadCount]);


  // Create context value with all the methods and states;
  const contextValue: MessagingContextType = {;

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    messages;
    active_messages;
    conversations;
    unread_count;
    active_conversation;
    is_loading;
    send_message;
    create_conversation;
    markAsRead;
    setActiveConversation;

    fetchConversations,;
    loadMessages;
  };
  return (;
    <MessagingContext.Provider value={contextValue}>;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      {children}

    </MessagingContext && MessagingContext.Provider>;
  );
}

=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
