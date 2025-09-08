
import { UserProfile, UserDetails  } from '@/types/auth';
import { supabase  } from '@/integrations/supabase/client';
import { Message, Conversation  } from '@/types/messaging';
import { toast } from '@/hooks/use-toast';// Allow either UserProfile or UserDetails

import { UserProfile, UserDetails  } from '@/types/auth';
import { supabase  } from '@/integrations/supabase/client';
import { Message, Conversation  } from '@/types/messaging';

type UserWithProfile = UserProfile | UserDetails | null;
/**
 * Hook to handle message operations
 */  user: UserWithProfile;
  active_conversation: Conversation | null;
  active_messages: Message[];
  setActiveMessages: (updater: (prev: Message[]) => Message[]) => void;
  conversations: Conversation[];
  set_conversations: (updater: (prev: Conversation[]) => Conversation[]) => void;
  setUnreadCount: (updater: (prev: number) => number) => void;
  setIsLoading: (loading: boolean) => void;

      
      if (unreadMessages && unreadMessages.length > 0) {
        await markAsRead(conversationId)
      }
    } catch (error) {
      console && console.error('Error fetching messages:', error)import { UserProfile, UserDetails } from '@/types/auth',;
import { supabase } from '@/integrations/supabase/client',;
import { Message, Conversation } from '@/types/messaging',;

import { toast } from '@/hooks/use-toast',;
// Allow either UserProfile or UserDetails;
type UserWithProfile = UserProfile | UserDetails | null,;
/**;
 * Hook to handle message operations;
 */;
export function useMessages(;
  user: UserWithProfile,;
  activeConversation: Conversation | null,;
  activeMessages: Message[],;
  setActiveMessages: (updater: (prev: Message[]) => Message[]) => void,;
  conversations: Conversation[],;
  setConversations: (updater: (prev: Conversation[]) => Conversation[]) => void,;
  setUnreadCount: (updater: (prev: number) => number) => void,;
  setIsLoading: (loading: boolean) => void,;
  fetchConversations: () => Promise<void>;
) {;
  /**;
   * Fetch messages for a conversation;
   */;
  const loadMessages = async (conversationId: string) => {;
    if (!user) return,;
    setIsLoading(true),;
    try {;
      const { data, error } = await supabase;'
        .from('messages');'
        .select('*');'
        .eq('conversation_id', conversationId);'
        .order('created_at', { ascending: true }),;
      if (error) throw error,;
      // Use updater function for setActiveMessages;
      setActiveMessages(() => data as Message[]),;
      // Mark messages as read;
      const unreadMessages = data.filter(;
        msg => !msg.read && msg.recipient_id === user.id;
      ),;
      if (unreadMessages.length > 0) {;
        await markAsRead(conversationId);

      }
    } catch (error) {
      console.error('Error fetching messages:', error)
    } finally {
>>>>>>> origin/cursor/delete-old-data-records-6bba
      setIsLoading(false)
    }

  };

      if (!conversation) {
        throw new Error('Conversation not found')
      }
      // Send the message
      const { data, error } = await supabase
        .from('messages')
        .insert({
          conversation_id: conversationId;
          sender_id: user && user.id;
          recipient_id: conversation && conversation.user_id;          sender_id: user && user.id;
          recipient_id: conversation && conversation.user_id;
          content;
          created_at: new Date().toISOString()
          read: false
        })
        .select('*')
        .single($2);
      if (error) throw error,
      
      // Update active messages if this conversation is selected
      if (activeConversation && activeConversation.id === conversationId) {
        setActiveMessages(prev => [...prev, data as Message])
      }  },;
  /**;
   * Send a message to an existing conversation;
   */;
  const sendMessage = async (conversationId: string, content: string) => {;
    if (!user || !content.trim() || !conversationId) return,;
    try {;
      const conversation = conversations.find(c => c.id === conversationId),;
      if (!conversation) {;'
        throw new Error('Conversation not found');
      }
;
      // Send the message;
<<<<<<< HEAD

      const { data, error } = await supabase;'
        .from('messages');

=======
        .from('messages');'
>>>>>>> origin/cursor/delete-old-data-records-6bba
        .insert({;
          conversation_id: conversationId,;
          sender_id: user.id,;
          recipient_id: conversation.user_id,;
          content,;
          created_at: new Date().toISOString(),;
          read: false;
        });'
        .select('*');
        .single(),;
      if (error) throw error,;
      // Update active messages if this conversation is selected;
      if (activeConversation && activeConversation.id === conversationId) {;
        setActiveMessages(prev => [...prev, data as Message]);
      }      
      // Update conversations list
      await fetchConversations(),
              .eq('recipient_id', user && user.id)
        .eq('read', false);
      if (error) throw error;
      // Update active messages to show they've been read
        )
      );
      // Update conversations to reflect read messages
      setConversations(prev =>
        prev.map(conv =>
          conv.id === conversationId
            : conv
        )
      );
      // Recalculate unread count
      setUnreadCount(prev => {          0
        )
      })
    } catch (error) {
      console && console.error('Error marking messages as read:', error)      console && console.error('Error marking messages as read:', error)
    }
  }
  return {
    loadMessages;
    sendMessage;  }
;
  /**;
  * Mark messages as read;
  */;
  const markAsRead = async (conversation_id: string) => {}
    // Check condition;
if (return, ) {}
  $2;
}
    try {}
      const { error } = await supabase;'
        .from ('messages');
        .update ({ read: true });'
        .eq ('conversation_id', conversation_id);'
        .eq ('recipient_id', user.id);'
        .eq ('read', false);
;
      // Check condition;
if (throw error) {}
  $2;
}'
      // Update active messages to show they've been read;
      setActiveMessages (prev =>;
        prev.map (msg =>;
          msg.recipient_id === user.id ? { ...msg, read: true } : msg));
;
      // Update conversations to reflect read messages;
      set_conversations (prev =>;
        prev.map (conv =>;
          conv.id === conversation_id;
            ? { ...conv, unread_count: 0 }
            : conv));
;
      // Recalculate unread count;
      setUnreadCount (prev => {}
        const updated_conversations = conversations.map (conv =>;
          conv.id === conversation_id;
            ? { ...conv, unread_count: 0 }
            : conv);
;
        return updated_conversations.reduce (
          (total, conv) => total + (conv.unread_count || 0),
          0);
      });
    } catch (error) {'
      console.error ('Error marking messages as read:', error);
    }
  }
;
  return {}
    load_messages;
    send_message;
    markAsRead;

  }
}
}
