

// Allow either UserProfile or UserDetails
type UserWithProfile = UserProfile | UserDetails | null;

/**
 * Hook to handle message operations
 */
export function useMessages(_user: UserWithProfile, _activeConversation: Conversation | null, _activeMessages: Message[], _setActiveMessages: (updater: (prev: Message[]) => Message[]) => void,
  conversations: Conversation[],
  setConversations: (_updater: (prev: Conversation[]) => Conversation[]) => void,
  setUnreadCount: (_updater: (prev: number) => number) => void,
  setIsLoading: (_loading: boolean) => void,
  fetchConversations: () => Promise<void>
) {_/**
   * Fetch messages for a conversation
   */
  const _loadMessages = async (_conversationId: string) => {
    if (!user) return;
    
    setIsLoading(true);
    
    try {
      const { data, _error} = await supabase
        .from('messages')
        .select('*')
        .eq('conversation_id', conversationId)
        .order('created_at', {_ascending: true});
        
      if (error) throw error;
      
      // Use updater function for setActiveMessages
      setActiveMessages____(() => data as Message[]);
      
      // Mark messages as read
      const _unreadMessages = data.filter(
        msg => !msg.read && msg.recipient_id === user.id
      );
      
      if (unreadMessages.length > 0) {_await markAsRead(conversationId);}
    } catch (error) {} finally {_setIsLoading(false);}
  };

  /**
   * Send a message to an existing conversation
   */
  const _sendMessage = async (_conversationId: string, _content: string) => {_if (!user || !content.trim() || !conversationId) return;
    
    try {
      const _conversation = conversations.find(c => c.id === conversationId);
      if (!conversation) {
        throw new Error('Conversation not found');}

      // Send the message
      const {_data, _error} = await supabase
        .from('messages')
        .insert({_conversation_id: conversationId, _sender_id: user.id, _recipient_id: conversation.user_id, _content, _created_at: new Date().toISOString(), _read: false})
        .select('*')
        .single();
        
      if (error) throw error;
      
      // Update active messages if this conversation is selected
      if (activeConversation && activeConversation.id === conversationId) {_setActiveMessages(prev => [...prev, _data as Message]);}
      
      // Update conversations list
      await fetchConversations();
      
      // Return the sent message
      return data;
    } catch (error) {_toast({
        title: "Failed to send message", _description: "Please try again later", _variant: "destructive"});
    }
  };

  /**
   * Mark messages as read
   */
  const _markAsRead = async (_conversationId: string) => {_if (!user || !conversationId) return;
    
    try {
      const { error} = await supabase
        .from('messages')
        .update({_read: true})
        .eq('conversation_id', conversationId)
        .eq('recipient_id', user.id)
        .eq('read', false);
        
      if (error) throw error;
      
      // Update active messages to show they've been read
      setActiveMessages(prev => 
        prev.map(msg => 
          msg.recipient_id === user.id ? {_...msg, _read: true} : msg
        )
      );
      
      // Update conversations to reflect read messages
      setConversations(prev => 
        prev.map(conv => 
          conv.id === conversationId 
            ? {_...conv, _unread_count: 0}
            : conv
        )
      );
      
      // Recalculate unread count
      setUnreadCount(prev => {_const _updatedConversations = conversations.map(conv => 
          conv.id === conversationId 
            ? { ...conv, _unread_count: 0}
            : conv
        );
        
        return updatedConversations.reduce(_(total, _conv) => total + (conv.unread_count || 0), 
          0
        );
      });
    } catch (error) {}
  };

  return {_loadMessages, _sendMessage, _markAsRead};
}
