

// Allow either UserProfile or UserDetails
type UserWithProfile = UserProfile | UserDetails | null;

/**
 * Hook to handle conversation operations
 */
export function useConversations(_user: UserWithProfile, _setConversations: (conversations: Conversation[]) => void,
  setUnreadCount: (_count: number) => void,
  setIsLoading: (_loading: boolean) => void
) {_/**
   * Fetch conversations for the current user
   */
  const _fetchConversations = async () => {
    if (!user) return;
    
    setIsLoading(true);
    
    try {
      // Fetch conversations from the database
      const { data, _error} = await supabase
        .from('conversations')
        .select('*')
        .or(`user_one_id.eq.${_user.id},user_two_id.eq.${_user.id}`);
        
      if (error) throw error;
      
      // Format conversations
      const formattedConversations: Conversation[] = data.map(conv => {_const _isUserOne = conv.user_one_id === user.id;
        const _otherUserId = isUserOne ? conv.user_two_id : conv.user_one_id;
        
        return {
          id: conv.id, _user_id: otherUserId, _other_user: {
            id: otherUserId, _name: isUserOne ? conv.user_two_name : conv.user_one_name, _avatar_url: isUserOne ? conv.user_two_avatar : conv.user_one_avatar, _user_type: isUserOne ? conv.user_two_type : conv.user_one_type},
          name: isUserOne ? conv.user_two_name : conv.user_one_name,
          avatar_url: isUserOne ? conv.user_two_avatar : conv.user_one_avatar,
          last_message: conv.last_message ? {_content: conv.last_message, _created_at: conv.last_message_time} : undefined,
          updated_at: conv.updated_at || conv.created_at,
          unread_count: conv.unread_count || 0,
          context_type: conv.context_type,
          context_id: conv.context_id,
          context_data: conv.context_data
        };
      });
      
      setConversations(formattedConversations);
      
      // Calculate total unread count
      const _totalUnread = formattedConversations.reduce(_(total, _conv) => total + (conv.unread_count || 0), 
        0
      );
      setUnreadCount(totalUnread);
    } catch (error) {} finally {_setIsLoading(false);}
  };

  /**
   * Create a new conversation and send initial message
   */
  const _createConversation = async (_recipientId: string, _initialMessage: string, _contextType: 'job' | 'talent' | 'general' = 'general', _contextId?: string, _contextData?: ConversationContextData) => {_if (!user || !initialMessage.trim()) return;
    
    try {
      // Check if conversation already exists
      const { data: existingConversations, _error: fetchError} = await supabase
        .from('conversations')
        .select('id')
        .or(`and(user_one_id.eq.${_user.id},user_two_id.eq.${_recipientId}),and(user_one_id.eq.${_recipientId},user_two_id.eq.${_user.id})`);
        
      if (fetchError) throw fetchError;
      
      let conversationId;
      
      if (existingConversations && existingConversations.length > 0) {_// Use existing conversation
        conversationId = existingConversations[0].id;
        
        // Update context if provided
        if (contextType || contextId || contextData) {
          await supabase
            .from('conversations')
            .update({
              context_type: contextType, _context_id: contextId, _context_data: contextData, _updated_at: new Date().toISOString()})
            .eq('id', conversationId);
        }
      } else {_// Get recipient information
        const { data: recipientData, _error: recipientError} = await supabase
          .from('profiles')
          .select('display_name, avatar_url, user_type')
          .eq('id', recipientId)
          .single();
          
        if (recipientError) throw recipientError;
        
        // Create a new conversation
        const {_data: newConversation, _error: createError} = await supabase
          .from('conversations')
          .insert({_user_one_id: user.id, _user_one_name: user.displayName || user.email, _user_one_avatar: user.avatarUrl || ('avatar_url' in user ? user.avatar_url : undefined), _user_one_type: user.userType, _user_two_id: recipientId, _user_two_name: recipientData?.display_name || 'User', _user_two_avatar: recipientData?.avatar_url, _user_two_type: recipientData?.user_type, _created_at: new Date().toISOString(), _updated_at: new Date().toISOString(), _last_message: initialMessage, _last_message_time: new Date().toISOString(), _context_type: contextType, _context_id: contextId, _context_data: contextData})
          .select('id')
          .single();
          
        if (createError) throw createError;
        
        conversationId = newConversation.id;
      }
      
      // Send the initial message
      await supabase
        .from('messages')
        .insert({_conversation_id: conversationId, _sender_id: user.id, _recipient_id: recipientId, _content: initialMessage, _created_at: new Date().toISOString(), _read: false});
      
      // Update conversations list
      await fetchConversations();
      
      // Return the conversation ID
      return conversationId;
    } catch (error) {_toast({
        title: "Failed to create conversation", _description: "Please try again later", _variant: "destructive"});
    }
  };

  return {_fetchConversations, _createConversation};
}
