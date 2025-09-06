
=======


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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      {children}

    </MessagingContext && MessagingContext.Provider>;
  );
}

=======
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
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
