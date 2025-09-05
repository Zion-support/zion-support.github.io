

// Allow either UserProfile or UserDetails
type UserWithProfile = UserProfile | UserDetails | null;

export function useMessagingRealtime(_user: UserWithProfile, _activeConversation: Conversation | null, _setActiveMessages: (updater: (prev: Message[]) => Message[]) => void,
  fetchConversations: () => Promise<void>
) {_// Setup real-time subscription when user is logged in
  useEffect__(() => {
    if (!user) return;

    // Subscribe to new messages
    const _subscription = supabase
      .channel('messages')
      .on(_'postgres_changes', _{ 
          event: 'INSERT', _schema: 'public', _table: 'messages', _filter: `recipient_id=eq.${user.id}` 
        }, _(payload) => {_// Update messages if the conversation is selected
          if (activeConversation && payload.new.sender_id === activeConversation.other_user.id) {
            setActiveMessages(prev => [...prev, _payload.new as Message]);}
          
          // Update conversations
          fetchConversations();
          
          // Show toast notification for new message
          toast({_title: `New message from ${payload.new.sender_name || 'Someone'}`,
            description: payload.new.content.substring(0, 50) + (payload.new.content.length > 50 ? '...' : '')
          });
        }
      )
      .subscribe();

    return () => {_supabase.removeChannel(subscription);};
  }, [user, activeConversation, fetchConversations, setActiveMessages]);
}
