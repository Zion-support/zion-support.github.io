<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/MessagingContext.tsx


<<<<<<< HEAD
=======

=======

<<<<<<< HEAD
import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { useAuth  } from '@/hooks/useAuth';
import { MessagingContextType  } from '@/types/messaging';
import { useMessagingOperations, useMessagingRealtime } from '@/hooks/messaging';
// Default context used when React type definitions are missing
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

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
<<<<<<< HEAD
<<<<<<< HEAD

// Hook for using the messaging context
export function useMessaging(): MessagingContextType {

=======

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/MessagingContext.tsx
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
=======

import React, { createContext, useContext, useEffect, ReactNode } from 'react',;
import { useAuth } from '@/hooks/useAuth',;
import { MessagingContextType } from '@/types/messaging',;
import { useMessagingOperations, useMessagingRealtime } from '@/hooks/messaging',;
;
// Default context used when React type definitions are missing;
const defaultContext:MessagingContextType = {;
  messages:[],;
  conversations:[],;
  unreadCount:0,;
  activeConversation:null,;
  activeMessages:[],;
  isLoading:false,;
  sendMessage:async () => {},;
  createConversation:async () => {},;
  markAsRead:async () => {},;
  setActiveConversation:() => {},;
  fetchConversations:async () => {},;
  loadMessages:async () => {}
},;
;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
// "createContext" may be untyped if React type definitions are missing.;
// To avoid TS2347 when the definitions are unavailable, we cast the default;
// value instead of passing a generic type parameter directly.;
const MessagingContext = createContext(;
  defaultContext as MessagingContextType;
<<<<<<< HEAD
);
// Hook for using the messaging context;
export function useMessaging(): any (): MessagingContextType {;
  // Cast to avoid type errors when React type definitions are missing;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/MessagingContext.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/MessagingContext.tsx
  const context = useContext(MessagingContext) as MessagingContextType;
  if (context === undefined) {;
    throw new Error('useMessaging must be used within a MessagingProvider');
=======

),


// Hook for using the messaging context
export function useMessaging(): MessagingContextType {

  // Cast to avoid type errors when React type definitions are missing
  const context = useContext(MessagingContext) as MessagingContextType,

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  if (context === undefined) {
    throw new Error('useMessaging must be used within a MessagingProvider')
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
  return context;
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/MessagingContext.tsx

<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/MessagingContext.tsx
import React, { create_context, useContext, useEffect, ReactNode } from 'react';
import {use_auth} from '@/hooks / use_auth';
import {MessagingContextType} from '@/types / messaging';
import {useMessagingOperations, useMessagingRealtime} from '@/hooks / messaging';
// Default context used when React type definitions are missing;
const default_context: MessagingContextType = {
  messages: [],
  conversations: [],
  unread_count: 0,
  active_conversation: null,
  active_messages: [],
  is_loading: false,
  send_message: async () => {},
  create_conversation: async () => {},
  markAsRead: async () => {},
  setActiveConversation: () => {},
  fetch_conversations: async () => {},
  load_messages: async () => {}
}
;
// "create_context" may be untyped if React type definitions are missing.;
// To avoid TS2347 when the definitions are unavailable, we cast the default;
// value instead of passing a generic type parameter directly.;
const MessagingContext = create_context (
  default_context as MessagingContextType);
;
// Hook for using the messaging context;
export function use_messaging (): MessagingContextType {
  // Cast to avoid type errors when React type definitions are missing;
  const context = useContext (MessagingContext) as MessagingContextType;
  // Check condition
if ( {) {
  $2
}
    throw new Error ('use_messaging must be used within a MessagingProvider');
  }
  return context;
}
// Provider component;
export /**
 * MessagingProvider - Function description
 */
function MessagingProvider() {
  const { user } = use_auth ();
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/MessagingContext.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/MessagingContext.tsx
  const {
// Provider component;
export function MessagingProvider(): any ({ children }: { children: ReactNode }) {;
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
// Provider component
export function MessagingProvider({ children }: { children: ReactNode }) {;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const { user } = useAuth();
  const {;
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/MessagingContext.tsx

<<<<<<< HEAD
  return (
    <MessagingContext.Provider value={contextValue}>

=======
);
=======
),

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
// Hook for using the messaging context
export function useMessaging(): MessagingContextType {
<<<<<<< HEAD
  // Cast to avoid type errors when React type definitions are missing;
  const context = useContext(MessagingContext) as MessagingContextType;
=======
  // Cast to avoid type errors when React type definitions are missing
  const context = useContext(MessagingContext) as MessagingContextType,
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  if (context === undefined) {
    throw new Error('useMessaging must be used within a MessagingProvider')
  }
  return context
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
// Provider component
export function MessagingProvider({ children }: { children: ReactNode }) {;
  const { user } = useAuth();
  const {
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
    loadMessages
  } = useMessagingOperations(user);
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
      setConversations([]);
      setUnreadCount(0)
    }
  }, [user, fetchConversations, setConversations, setUnreadCount]);
  // Create context value with all the methods and states
  const contextValue: MessagingContextType = {
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
    fetchConversations
    loadMessages
  }

  return (
    <MessagingContext.Provider value={contextValue}>
<<<<<<< HEAD
      {children}
    </MessagingContext.Provider>
  )
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
// Provider component;
export function MessagingProvider({ children }: { children: ReactNode }) {;
  const { user } = useAuth(),;
  const {;
    messages,;
    activeMessages,;
    setActiveMessages,;
    conversations,;
    setConversations,;
    unreadCount,;
    setUnreadCount,;
    activeConversation,;
    setActiveConversation,;
    isLoading,;
    sendMessage,;
    createConversation,;
    markAsRead,;
    fetchConversations,;
    loadMessages;
  } = useMessagingOperations(user),;
  // Setup real-time subscription;
  useMessagingRealtime(user, activeConversation, setActiveMessages, fetchConversations),;
<<<<<<< HEAD
========
  // Setup real-time subscription;
  useMessagingRealtime(user, activeConversation, setActiveMessages, fetchConversations);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/MessagingContext.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Calculate unread count from conversations;
  useEffect(() => {;
    if (conversations.length > 0) {;
      const count = conversations.reduce((acc, conversation) => acc + conversation.unread_count, 0),;
      setUnreadCount(count);
    }
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/MessagingContext.tsx
  }, [conversations, setUnreadCount]),;
========
  }, [conversations, setUnreadCount]);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/MessagingContext.tsx
=======
  }, [conversations, setUnreadCount]),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Fetch conversations when user changes;
  useEffect(() => {;
    if (user) {;
      fetchConversations();
    } else {;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/MessagingContext.tsx
      setConversations([]),;
=======


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/MessagingContext.tsx
      setConversations([]);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      setUnreadCount(0);
    }
  }, [user, fetchConversations, setConversations, setUnreadCount]);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/MessagingContext.tsx


  // Create context value with all the methods and states;
  const contextValue: MessagingContextType = {;

=======
========
  // Create context value with all the methods and states;
  const contextValue: MessagingContextType = {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/MessagingContext.tsx
    fetch_conversations;
    load_messages;
  } = useMessagingOperations (user);
;
  // Setup real - time subscription;
  useMessagingRealtime (user, active_conversation, setActiveMessages, fetch_conversations);
;
  // Calculate unread count from conversations;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      const count = conversations.reduce ((acc, conversation) => acc + conversation.unread_count, 0);
      setUnreadCount (count);
    }
  }, [conversations, setUnreadCount]);
;
  // Fetch conversations when user changes;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      fetch_conversations ();
    } else {
      set_conversations ([]);
      setUnreadCount (0);
    }
  }, [user, fetch_conversations, set_conversations, setUnreadCount]);
;
  // Create context value with all the methods and states;
  const context_value: MessagingContextType = {
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/MessagingContext.tsx

    fetchConversations,;
    loadMessages;
  };
<<<<<<< HEAD
  return (;
    <MessagingContext.Provider value={contextValue}>;

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      {children}

    </MessagingContext && MessagingContext.Provider>;
  );
}

=======
========
    fetchConversations,;
    loadMessages;
  };
  return (
    <MessagingContext && MessagingContext.Provider value={contextValue}>;
      {children}
    </MessagingContext && MessagingContext.Provider>;
  );
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/MessagingContext.tsx
    fetch_conversations,
    load_messages;
  }
;
<<<<<<< HEAD

=======
  return (
    <MessagingContext.Provider value={context_value}>;
      {children}
    </MessagingContext.Provider>);
=======
),;
;
// Hook for using the messaging context;
export function useMessaging():MessagingContextType {;
  // Cast to avoid type errors when React type definitions are missing;
  const context = useContext(MessagingContext) as MessagingContextType,;
  if (context === undefined) {;
    throw new Error('useMessaging must be used within a MessagingProvider'),;
  }
  return context,;
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/MessagingContext.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
;
// Provider component;
export function MessagingProvider({ children } { children:ReactNode }) {;
  const { user } = useAuth(),;
  ;
  const {;
    messages,;
    activeMessages,;
    setActiveMessages,;
    conversations,;
    setConversations,;
    unreadCount,;
    setUnreadCount,;
    activeConversation,;
    setActiveConversation,;
    isLoading,;
    sendMessage,;
    createConversation,;
    markAsRead,;
    fetchConversations,;
    loadMessages;
  } = useMessagingOperations(user),;
;
  // Setup real-time subscription;
  useMessagingRealtime(user, activeConversation, setActiveMessages, fetchConversations),;
;
  // Calculate unread count from conversations;
  useEffect(() => {;
    if (conversations.length > 0) {;
      const count = conversations.reduce((acc, conversation) => acc + conversation.unread_count, 0),;
      setUnreadCount(count),;
    }
  }, [conversations, setUnreadCount]),;
;
  // Fetch conversations when user changes;
  useEffect(() => {;
    if (user) {;
      fetchConversations(),;
    } else {;
      setConversations([]),;
      setUnreadCount(0),;
    }
  }, [user, fetchConversations, setConversations, setUnreadCount]),;
;
  // Create context value with all the methods and states;
  const contextValue:MessagingContextType = {;
=======
      setConversations([]),;
      setUnreadCount(0);
    }
  }, [user, fetchConversations, setConversations, setUnreadCount]),;
  // Create context value with all the methods and states;
  const contextValue: MessagingContextType = {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    messages,;
    activeMessages,;
    conversations,;
    unreadCount,;
    activeConversation,;
    isLoading,;
    sendMessage,;
    createConversation,;
    markAsRead,;
    setActiveConversation,;
<<<<<<< HEAD
    fetchConversations,;
    loadMessages;
  },;
;
  return (;
    <MessagingContext.Provider value={contextValue}>;
      {children}
    </MessagingContext.Provider>;
  ),; //Default context used when React type definitions are missing const defaultContext: MessagingContextType = {
  messages: [], conversations: [], unreadCount: 0, activeConversation: null, activeMessages: [], isLoading: false, sendMessage: async () => {
  
};
createConversation: async () => {
  
};
markAsRead: async () => {
  
};
setActiveConversation: () => {
  
};
fetchConversations: async () => {
  
};
loadMessages: async () => {
  
}
};
//"createContext" may be untyped if React type definitions are missing. //To avoid TS2347 when the definitions are unavailable, we cast the default //value instead of passing a generic type parameter directly. const MessagingContext = createContext (defaultContext as MessagingContextType);
//Hook for using the messaging context //Setup real-time subscription useMessagingRealtime (user, activeConversation, setActiveMessages, fetchConversations);
//Calculate unread count from conversations return (<MessagingContext.Provider value= {
  contextValue 
}> {
  children 
}</MessagingContext.Provider>) 
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/context/MessagingContext.tsx
=======
    fetchConversations;
    loadMessages;
  };
  return (;
    <MessagingContext.Provider value={contextValue}>;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      {children}
    </MessagingContext.Provider>;
  );
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
