 // Allow either UserProfile or UserDetails type UserWithProfile = UserProfile | UserDetails | null;
/** * Hook that combines all messaging operations */ export function useMessagingOperations (user: UserWithProfile) {
  // State management const {
  // Conversations management const {
  fetchConversations, createConversation 
}= useConversations (user;
setConversations;
setUnreadCount;
setIsLoading);
// Messages management const {
  loadMessages, sendMessage, markAsRead 
}= useMessages (user;
activeConversation;
activeMessages;
setActiveMessages;
conversations;
setConversations;
setUnreadCount;
setIsLoading;
fetchConversations);
}