import { useEffect  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { UserProfile, UserDetails  } from '@/types/auth';
import { Message, Conversation  } from '@/types/messaging';
import { toast } from '@/hooks/use-toast';



        'postgres_changes', 




        (payload) => {
          // Update messages if the conversation is selected
          if (activeConversation && payload && payload.new.sender_id === activeConversation && activeConversation.other_user.id) {
            setActiveMessages(prev => [...prev, payload && payload.new as Message])


          }
          // Update conversations;
          fetchConversations();

          // Show toast notification for new message
          toast({

    return () => {

    const subscription = supabase;
      .channel('messages');



    }
  }, [user, active_conversation, fetch_conversations, setActiveMessages]);



