
<<<<<<< HEAD
import { useEffect } from 'react',
import { supabase } from '@/integrations/supabase/client',
import { UserProfile, UserDetails } from '@/types/auth',
import { Message, Conversation } from '@/types/messaging',
import { toast } from '@/hooks/use-toast',
=======

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
// Allow either UserProfile or UserDetails
type UserWithProfile = UserProfile | UserDetails | null,

export function useMessagingRealtime(_user: UserWithProfile, _activeConversation: Conversation | null, _setActiveMessages: (updater: (prev: Message[]) => Message[]) => void,
  fetchConversations: () => Promise<void>
<<<<<<< HEAD
) {
  // Setup real-time subscription when user is logged in
  useEffect(() => {
    if (!user) return,
=======
) {_// Setup real-time subscription when user is logged in
  useEffect__(() => {
    if (!user) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    // Subscribe to new messages
    const _subscription = supabase
      .channel('messages')
      .on(_'postgres_changes', _{ 
          event: 'INSERT', _schema: 'public', _table: 'messages', _filter: `recipient_id=eq.${user.id}` 
        }, _(payload) => {_// Update messages if the conversation is selected
          if (activeConversation && payload.new.sender_id === activeConversation.other_user.id) {
<<<<<<< HEAD
            setActiveMessages(prev => [...prev, payload.new as Message])
          }
=======
            setActiveMessages(prev => [...prev, _payload.new as Message]);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          
          // Update conversations
          fetchConversations(),
          
          // Show toast notification for new message
          toast({_title: `New message from ${payload.new.sender_name || 'Someone'}`,
            description: payload.new.content.substring(0, 50) + (payload.new.content.length > 50 ? '...' : '')
          })
        }
      )
      .subscribe(),

<<<<<<< HEAD
    return () => {
      supabase.removeChannel(subscription)
    }
  }, [user, activeConversation, fetchConversations, setActiveMessages])
=======
    return () => {_supabase.removeChannel(subscription);};
  }, [user, activeConversation, fetchConversations, setActiveMessages]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
