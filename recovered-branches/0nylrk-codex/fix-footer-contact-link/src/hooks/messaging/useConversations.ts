 //Allow either UserProfile or UserDetails type UserWithProfile = UserProfile | UserDetails | null;
/** * Hook to handle conversation operations */export function useConversations (user: UserWithProfile, setConversations: (conversations: Conversation[]) => void;
setUnreadCount: (count: number) => void;
setIsLoading: (loading: boolean) => void) {
  /** * Fetch conversations for the current user */setIsLoading (true);
try {
  //Fetch conversations from the database const {
  data, error 
}= await supabase .from ('conversations') .select ('*') if (error) throw error;
//Format conversations return {
  id: conv.id, user id: otherUserId, other user: {
  id: otherUserId, name: isUserOne ? conv.user two name : conv.user one name, avatar url: isUserOne ? conv.user two avatar : conv.user one avatar, user type: isUserOne ? conv.user two type : conv.user one type 
};
name: isUserOne ? conv.user two name : conv.user one name;
avatar url: isUserOne ? conv.user two avatar : conv.user one avatar;
last message: conv.last message ? {
  content: conv.last message, created at: conv.last message time 
}: undefined;
updated at: conv.updated at || conv.created at;
unread count: conv.unread count || 0;
context type: conv.context type;
context id: conv.context id;
context data: conv.context data 
}
});
setConversations (formattedConversations);
//Calculate total unread count const totalUnread = formattedConversations.reduce ( (total, conv) => total + (conv.unread count || 0);
0 /** * Create a new conversation and send initial message */try {
  //Check if conversation already exists const {
  data: existingConversations, error: fetchError 
}= await supabase .from ('conversations') .select ('id') if (fetchError) throw fetchError;
let conversationId;
//Update context if provided if (contextType || contextId || contextData) {
  await supabase .from ('conversations') .update ({
  
}
}else {
  //Get recipient information const {
  data: recipientData, error: recipientError 
}= await supabase .from ('profiles') .select ('display name, avatar url, user type') .eq ('id', recipientId) .single ();
if (recipientError) throw recipientError;
//Create a new conversation const {
  data: newConversation, error: createError 
}= await supabase .from ('conversations') .insert ({
  user one id: user.id, user one name: user.displayName || user.email, user one avatar: user.avatarUrl || ('avatar url' in user ? user.avatar url : undefined), user one type: user.userType, user two id: recipientId, user two name: recipientData?.display name || 'User', user two avatar: recipientData?.avatar url, user two type: recipientData?.user type, created at: new Date () .toISOString (), updated at: new Date () .toISOString (), last message: initialMessage, last message time: new Date () .toISOString (), context type: contextType, context id: contextId, context data: contextData 
}) .select ('id') .single ();
if (createError) throw createError;
conversationId = newConversation.id 
}//Send the initial message await supabase .from ('messages') //Update conversations list await fetchConversations ();
// Return the conversation ID 
}
};
}