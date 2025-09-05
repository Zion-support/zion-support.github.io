 // Allow either UserProfile or UserDetails type UserWithProfile = UserProfile | UserDetails | null;
export function useMessagingRealtime (user: UserWithProfile, activeConversation: Conversation | null, setActiveMessages: (updater: (prev: Message[]) => Message[]) => void;
fetchConversations: () => Promise<void> // Subscribe to new messages const subscription = supabase .channel ('messages') .on ('postgres changes', {
  event: 'INSERT', schema: 'public', table: 'messages', filter: `recipient id=eq.$ {
  user.id 
}` 
}, (payload) => {
  // Update messages if the conversation is selected if (activeConversation && payload.new.sender id === activeConversation.other user.id) {
  // Update conversations fetchConversations ();
// Show toast notification for new message toast ({
  title: `New message from $ {
  payload.new.sender name || 'Someone' 
}`;
description: payload.new.content.substring (0, 50) + (payload.new.content.length > 50 ? '...' : '') 
}) 
}) .subscribe ();
}