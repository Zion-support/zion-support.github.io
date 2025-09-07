


import { UserProfile, UserDetails  } from '@/types/auth';
import { supabase  } from '@/integrations/supabase/client';
import { Message, Conversation  } from '@/types/messaging';
import { toast } from '@/hooks/use-toast';

  }
}
}
</void>
  fetchConversations:() => Promise<void>;
fetchConversations: () => Promise<void>) {
  /** * Fetch messages for a conversation */setIsLoading (true);
try {
  const {
  data, error 
}= await supabase .from ('messages') .select ('*') .eq ('conversation id', conversationId) if (error) throw error;
//Use updater function for setActiveMessages //Mark messages as read const unreadMessages = data.filter (msg => !msg.read && msg.recipient id === user.id);
/** * Send a message to an existing conversation */ //Send the message const {
  data, error 
}= await supabase .from ('messages') .insert ({
  conversation id: conversationId, sender id: user.id, recipient id: conversation.user id, content, created at: new Date () .toISOString (), read: false 
}) .select ('*') .single ();
if (error) throw error;
//Update active messages if this conversation is selected //Update conversations list await fetchConversations ();
//Return the sent message 
}
};
/** * Mark messages as read */try {
  const {
  error 
}= await supabase .from ('messages') .update ({
  read: true 
}) .eq ('conversation id', conversationId) .eq ('recipient id', user.id) .eq ('read', false);
if (error) throw error;
//Update active messages to show they've been read setActiveMessages (prev => prev.map (msg => msg.recipient id === user.id ? {
  ...msg, read: true 
}: msg) );
//Update conversations to reflect read messages setConversations (prev => prev.map (conv => conv.id === conversationId ? {
  ...conv, unread count: 0 
}: conv) );
// Recalculate unread count setUnreadCount (prev => {
  const updatedConversations = conversations.map (conv => conv.id === conversationId ? {
  ...conv, unread count: 0 
}: conv);
return updatedConversations.reduce ( (total, conv) => total + (conv.unread count || 0);
0 
}
  }
}
}
pr-12325
</void>'

