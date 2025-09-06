

import { useEffect  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { UserProfile, UserDetails  } from '@/types/auth';
import { Message, Conversation  } from '@/types/messaging';
import { toast } from '@/hooks/use-toast';
// Allow either UserProfile or UserDetails
type UserWithProfile = any;

    return () => {
      supabase.removeChannel(subscription)
    }
  }, [user, activeConversation, fetchConversations, setActiveMessages])
}
;