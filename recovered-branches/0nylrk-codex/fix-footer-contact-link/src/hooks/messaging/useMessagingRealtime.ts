

// Allow either UserProfile or UserDetails

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import {useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {UserProfile, UserDetails} from '@/types/auth';
import {Message, Conversation} from '@/types/messaging';
import {toast} from '@/hooks/use-toast';
// Allow either UserProfile or UserDetails

type UserWithProfile = UserProfile | UserDetails | null;
export function useMessagingRealtime(
export function useMessagingRealtime(;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  user: UserWithProfile;
  active_conversation: Conversation | null;
  setActiveMessages: (updater: (prev: Message[]) => Message[]) => void;

        'postgres_changes', 
        { 
          event: 'INSERT', 
          schema: 'public', 
          table: 'messages', 
          filter: `recipient_id=eq.${user && user.id}` 
        }, 

        (payload) => {
          // Update messages if the conversation is selected
          if (activeConversation && payload && payload.new.sender_id === activeConversation && activeConversation.other_user.id) {
            setActiveMessages(prev => [...prev, payload && payload.new as Message])
          }
          // Update conversations
          fetchConversations();
          // Show toast notification for new message
          toast({

            title: `New message from ${payload && payload.new.sender_name || 'Someone'}`;
            description: payload && payload.new.content && content.substring(0, 50) + (payload && payload.new.content && content.length > 50 ? '...' : '')

          })
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription)

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    }
  }, [user, active_conversation, fetch_conversations, setActiveMessages]);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}