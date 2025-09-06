
import React, { createContext, useContext, useEffect, ReactNode } from 'react';
<<<<<<< HEAD
import { useAuth  } from '@/hooks/useAuth';
import { MessagingContextType  } from '@/types/messaging';
import { useMessagingOperations, useMessagingRealtime } from '@/hooks/messaging';
// Default context used when React type definitions are missing

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
);
// Hook for using the messaging context
export function useMessaging(): MessagingContextType {
  // Cast to avoid type errors when React type definitions are missing
=======
import {useAuth} from '@/hooks/useAuth';
import {MessagingContextType} from '@/types/messaging';
import {useMessagingOperations, useMessagingRealtime} from '@/hooks/messaging';

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
};

// "createContext" may be untyped if React type definitions are missing.;
// To avoid TS2347 when the definitions are unavailable, we cast the default;
// value instead of passing a generic type parameter directly.;
const MessagingContext = createContext(;
  defaultContext as MessagingContextType;
);

// Hook for using the messaging context;
export function useMessaging(): any (): MessagingContextType {;
  // Cast to avoid type errors when React type definitions are missing;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const context = useContext(MessagingContext) as MessagingContextType;
  if (context === undefined) {;
    throw new Error('useMessaging must be used within a MessagingProvider');
  }
  return context;
}
<<<<<<< HEAD
// Provider component
export function MessagingProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const {
=======

// Provider component;
export function MessagingProvider(): any ({ children }: { children: ReactNode }) {;
  const { user } = useAuth();

  const {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    messages;
    activeMessages;
    setActiveMessages;
    conversations;
    setConversations;
    unreadCount;
    setUnreadCount;
    activeConversation;
    setActiveConversation;
    isLoading;
    sendMessage;
    createConversation;
    markAsRead;
    fetchConversations;
    loadMessages;
  } = useMessagingOperations(user);
<<<<<<< HEAD
  // Setup real-time subscription
  useMessagingRealtime(user, activeConversation, setActiveMessages, fetchConversations);
  // Calculate unread count from conversations
  useEffect(() => {
    if (conversations.length > 0) {
      const count = conversations.reduce((acc, conversation) => acc + conversation.unread_count, 0);
      setUnreadCount(count)
    }
  }, [conversations, setUnreadCount]);
  // Fetch conversations when user changes
  useEffect(() => {
    if (user) {
      fetchConversations()
    } else {
=======

  // Setup real-time subscription;
  useMessagingRealtime(user, activeConversation, setActiveMessages, fetchConversations);

  // Calculate unread count from conversations;
  useEffect(() => {;
    if (conversations && conversations.length > 0) {;
      const count = conversations && conversations.reduce((acc, conversation) => acc + conversation && conversation.unread_count, 0);
      setUnreadCount(count);
    }
  }, [conversations, setUnreadCount]);

  // Fetch conversations when user changes;
  useEffect(() => {;
    if (user) {;
      fetchConversations();
    } else {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      setConversations([]);
      setUnreadCount(0);
    }
  }, [user, fetchConversations, setConversations, setUnreadCount]);
<<<<<<< HEAD
  // Create context value with all the methods and states
  const contextValue: MessagingContextType = {
=======

  // Create context value with all the methods and states;
  const contextValue: MessagingContextType = {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    messages;
    activeMessages;
    conversations;
    unreadCount;
    activeConversation;
    isLoading;
    sendMessage;
    createConversation;
    markAsRead;
    setActiveConversation;
<<<<<<< HEAD
    fetchConversations
    loadMessages
  }
=======
    fetchConversations,;
    loadMessages;
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  return (
    <MessagingContext && MessagingContext.Provider value={contextValue}>;
      {children}
<<<<<<< HEAD
    </MessagingContext.Provider>
  )
}
=======
    </MessagingContext && MessagingContext.Provider>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
