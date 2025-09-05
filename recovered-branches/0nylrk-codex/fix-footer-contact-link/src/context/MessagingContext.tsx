 //Default context used when React type definitions are missing const defaultContext: MessagingContextType = {
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
}