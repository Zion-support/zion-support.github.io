
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { UserProfile, UserDetails  } from '@/types/auth';
import { supabase  } from '@/integrations/supabase/client';
import { Message, Conversation  } from '@/types/messaging';
import { toast } from '@/hooks/use-toast';
<<<<<<< HEAD


=======
// Allow either UserProfile or UserDetails
type UserWithProfile = $2;
/**
 * Hook to handle message operations
 */

>>>>>>> origin/cursor/delete-old-data-records-6bba
import {UserProfile, UserDetails} from '@/types/auth';
import {supabase} from '@/integrations/supabase/client';
import {Message, Conversation} from '@/types/messaging';
import {toast} from '@/hooks/use-toast';
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
// Allow either UserProfile or UserDetails

import { UserProfile, UserDetails  } from '@/types/auth';
import { supabase  } from '@/integrations/supabase/client';
import { Message, Conversation  } from '@/types/messaging';

type UserWithProfile = UserProfile | UserDetails | null;
/**
 * Hook to handle message operations

<<<<<<< HEAD
 */

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  user: UserWithProfile;

  active_conversation: Conversation | null;
  active_messages: Message[];
  setActiveMessages: (updater: (prev: Message[]) => Message[]) => void;
  conversations: Conversation[];
  set_conversations: (updater: (prev: Conversation[]) => Conversation[]) => void;
  setUnreadCount: (updater: (prev: number) => number) => void;
  setIsLoading: (loading: boolean) => void;

<<<<<<< HEAD

      

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      if (unreadMessages && unreadMessages.length > 0) {
        await markAsRead(conversationId)
      }
    } catch (error) {
      console && console.error('Error fetching messages:', error)
  fetch_conversations: () => Promise < void>) {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  /**;
  * Fetch messages for a conversation;
  */;
  const load_messages = async (conversation_id: string) => {}
    // Check condition;
if (return) {}
  $2;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
    setIsLoading (true),
    try {}
      const { data, error } = await supabase;'
        .from ('messages');'
        .select ('*');'
        .eq ('conversation_id', conversation_id);'
        .order ('created_at', { ascending: true });
;
      // Check condition;
if (throw error) {}
  $2;

}
      // Use updater function for setActiveMessages;
      setActiveMessages (() => data as Message[]);
;
      // Mark messages as read;
      const unread_messages = data.filter (
        msg => !msg.read && msg.recipient_id === user.id);
;

<<<<<<< HEAD
      // Check condition
if ( {) {
  $2
}
        await markAsRead (conversation_id);
      }
    } catch (error) {
      console.error ('Error fetching messages:', error);

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    } finally {

      setIsLoading (false);
    }
  }
<<<<<<< HEAD



=======
export function useMessages(;
  user: UserWithProfile;
  activeConversation: Conversation | null;
  activeMessages: Message[];
  setActiveMessages: (updater: (prev: Message[]) => Message[]) => void;
  conversations: Conversation[];
  setConversations: (updater: (prev: Conversation[]) => Conversation[]) => void;
  setUnreadCount: (updater: (prev: number) => number) => void;
  setIsLoading: (loading: boolean) => void;
  fetchConversations: () => Promise<void>
) {
  /**
   * Fetch messages for a conversation
   */
  const loadMessages = async (conversationId: string) => {
    if (!user) return;
    setIsLoading(true)
    try {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .eq('conversation_id', conversationId)
        .order('created_at', { ascending: true });
      if (error) throw error;
      // Use updater function for setActiveMessages
      setActiveMessages(() => data as Message[]);
      // Mark messages as read
      const unreadMessages = data.filter(
        msg => !msg.read && msg.recipient_id === user.id
      );
      if (unreadMessages.length > 0) {
        await markAsRead(conversationId)
>>>>>>> origin/cursor/delete-old-data-records-6bba
import { UserProfile, UserDetails } from '@/types/auth',;

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

<<<<<<< HEAD



      }

    } catch (error) {'
      console.error('Error fetching messages:', error)
    } finally {}

=======
      }
    } catch (error) {
      console.error('Error fetching messages:', error)
    } finally {
>>>>>>> origin/cursor/delete-old-data-records-6bba
      setIsLoading(false)
    }

  }
  };

<<<<<<< HEAD




  /**
   * Send a message to an existing conversation;
   */

  const sendMessage = async (conversationId: string, content: string) => {

      if (!conversation) {


        throw new Error('Conversation not found')
      }

=======
  /**
   * Send a message to an existing conversation;
   */
  const sendMessage = async (conversationId: string, content: string) => {}
  /**
   * Send a message to an existing conversation;
   */
  const sendMessage = async (conversationId: string, content: string) => {}
    if (!user || !content && content.trim() || !conversationId) return;
    
    try {}
      const conversation = conversations && conversations.find(c => c && c.id === conversationId),

      if (!conversation) {

        throw new Error('Conversation not found')
      }
      if (!conversation) {
        throw new Error('Conversation not found')
      }
      // Send the message
      const { data, error } = await supabase
        .from('messages')
        .insert({
          conversation_id: conversationId,
          sender_id: user.id,
          recipient_id: conversation.user_id,
          content,
          created_at: new Date().toISOString($2);
          read: false})
        .select('*')
        .single($2);
      if (error) throw error,
      
      // Update active messages if this conversation is selected
      if (activeConversation && activeConversation.id === conversationId) {
        setActiveMessages(prev => [...prev, data as Message])
      }
      // Update conversations list
      await fetchConversations($2);
      // Return the sent message
      return data
    } catch (error) {
      console.error($2);
      // Send the message,
        .from('messages')'
        .insert({
          }
          "conversation_id": conversationId;
          "sender_id": user && user.id;
          "recipient_id": conversation && conversation.user_id;          "sender_id": user && user.id;
          "recipient_id": conversation && conversation.user_id;

          sender_id: user && user.id;
          recipient_id: conversation && conversation.user_id;
          sender_id: user && user.id;
          recipient_id: conversation && conversation.user_id;


>>>>>>> origin/cursor/delete-old-data-records-6bba
          content;
          created_at: new Date().toISOString()
          read: false;
        })'
        .select('*')
        .single();
      if (error) throw error;
      // Update active messages if this conversation is selected;
      if (activeConversation && activeConversation.id === conversationId) {}
        setActiveMessages(prev => [...prev, data as Message])


<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  },;

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


<<<<<<< HEAD



      // Return the sent message
      return data
    } catch (error) {
      console && console.error('Error sending message:', error);
      toast({




      setActiveMessages(prev => 
        prev && prev.map(msg => 
          msg && msg.recipient_id === user && user.id ? { ...msg, read: true } : msg

        )
      );
      // Update conversations to reflect read messages

      setConversations(prev => 
        prev && prev.map(conv => 
          conv && conv.id === conversationId 



          0
        )
      })
    } catch (error) {


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
  }
  return {}
    loadMessages;

<<<<<<< HEAD
    sendMessage;
  }
;
  /**;
  * Send a message to an existing conversation;
  */;
  const send_message = async (conversation_id: string, content: string) => {
    if (|| !conversation_id) return) {
  $2
}
    try {
      const conversation = conversations.find (c => c.id === conversation_id),
      // Check condition
if ( {) {
  $2
}
        throw new Error ('Conversation not found');
      }
      // Send the message;
      const { data, error } = await supabase;
        .from ('messages');
        .insert ({
          conversation_id: conversation_id;
          sender_id: user.id;
          recipient_id: conversation.user_id;
          content;
          created_at: new Date ().toISOString (),
          read: false;
        });
        .select ('*');
        .single ();
;
      // Check condition
if (throw error) {
  $2
}
      // Update active messages if this conversation is selected;
      // Check condition
if ( {) {
  $2
}
        setActiveMessages (prev => [...prev, data as Message]);
      }
      // Update conversations list;
      await fetch_conversations ();
;
      // Return the sent message;
      return data;
    } catch (error) {
      console.error ('Error sending message:', error);
      toast ({
        title: "Failed to send message";
        description: "Please try again later",
        variant: "destructive";
      });
    }

    markAsRead

=======

;
  /**;
  * Send a message to an existing conversation;
  */;
  const send_message = async (conversation_id: string, content: string) => {}
    if (|| !conversation_id) return) {}
  $2;
}
    try {}
      const conversation = conversations.find (c => c.id === conversation_id),
      // Check condition;
if ( {) {}
  $2;
}'
        throw new Error ('Conversation not found');
      }
      // Send the message;
      const { data, error } = await supabase;'
        .from ('messages');
        .insert ({}
          conversation_id: conversation_id;
          sender_id: user.id;
          recipient_id: conversation.user_id;
          content;
          created_at: new Date ().toISOString (),
          read: false;
        });'
        .select ('*');
        .single ();
;
      // Check condition;
if (throw error) {}
  $2;
}
      // Update active messages if this conversation is selected;
      // Check condition;
if ( {) {}
  $2;
}
        setActiveMessages (prev => [...prev, data as Message]);
      }
      // Update conversations list;
      await fetch_conversations ();
;
      // Return the sent message;
      return data;
    } catch (error) {'
      console.error ('Error sending message:', error);

        variant: "destructive";
      });
    }


>>>>>>> origin/cursor/delete-old-data-records-6bba
  }

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

<<<<<<< HEAD


=======
}

import { UserProfile, UserDetails } from '@/types/auth',;
import { supabase } from '@/integrations/supabase/client',;
import { Message, Conversation } from '@/types/messaging',;
import { toast } from '@/hooks/use-toast',;
;
// Allow either UserProfile or UserDetails;
type UserWithProfile = UserProfile | UserDetails | null,;
;
/**;
 * Hook to handle message operations;
 */;
export function useMessages(;
  user:UserWithProfile,;
  activeConversation:Conversation | null,;
  activeMessages:Message[],;
  setActiveMessages:(updater:(prev:Message[]) => Message[]) => void,;
  conversations:Conversation[],;
  setConversations:(updater:(prev:Conversation[]) => Conversation[]) => void,;
  setUnreadCount:(updater:(prev:number) => number) => void,;
  setIsLoading:(loading:boolean) => void,;
  fetchConversations:() => Promise<void>;
) {;
  /**;
   * Fetch messages for a conversation;
   */;
  const loadMessages = async (conversationId:string) => {;
    if (!user) return,;
    ;
    setIsLoading(true),;
    ;
    try {;
      const { data, error } = await supabase;
        .from('messages');
        .select('*');
        .eq('conversation_id', conversationId);
        .order('created_at', { ascending:true }),;
        ;
      if (error) throw error,;
      ;
      // Use updater function for setActiveMessages;
      setActiveMessages(() => data as Message[]),;
      ;
      // Mark messages as read;
      const unreadMessages = data.filter(;
        msg => !msg.read && msg.recipient_id === user.id;
      ),;
      ;
      if (unreadMessages.length > 0) {;
        await markAsRead(conversationId),;
      }
    } catch (error) {;
      console.error('Error fetching messages:', error),;
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  /**;
   * Send a message to an existing conversation;
   */;
  const sendMessage = async (conversationId:string, content:string) => {;
    if (!user || !content.trim() || !conversationId) return,;
    ;
    try {;
      const conversation = conversations.find(c => c.id === conversationId),;
      if (!conversation) {;
        throw new Error('Conversation not found');
      }
;
      // Send the message;
      const { data, error } = await supabase;
        .from('messages');
        .insert({;
          conversation_id:conversationId,;
          sender_id:user.id,;
          recipient_id:conversation.user_id,;
          content,;
          created_at:new Date().toISOString(),;
          read:false;
        });
        .select('*');
        .single(),;
        ;
      if (error) throw error,;
      ;
      // Update active messages if this conversation is selected;
      if (activeConversation && activeConversation.id === conversationId) {;
        setActiveMessages(prev => [...prev, data as Message]),;
      }
      ;
      // Update conversations list;
      await fetchConversations(),;
      ;
      // Return the sent message;
      return data,;
    } catch (error) {;
      console.error('Error sending message:', error),;
      toast({;
        title:"Failed to send message",;
        description:"Please try again later",;
        variant:"destructive";
      }),;
    }
  },;
;
  /**;
   * Mark messages as read;
   */;
  const markAsRead = async (conversationId:string) => {;
    if (!user || !conversationId) return,;
    ;
    try {;
      const { error } = await supabase;
        .from('messages');
        .update({ read:true });
        .eq('conversation_id', conversationId);
        .eq('recipient_id', user.id);
        .eq('read', false),;
        ;
      if (error) throw error,;
      ;
      // Update active messages to show they've been read;
      setActiveMessages(prev => ;
        prev.map(msg => ;
          msg.recipient_id === user.id ? { ...msg, read:true } msg;
        );
      ),;
      ;
      // Update conversations to reflect read messages;
      setConversations(prev => ;
        prev.map(conv => ;
          conv.id === conversationId ;
            ? { ...conv, unread_count:0 } conv;
        );
      ),;
      ;
      // Recalculate unread count;
      setUnreadCount(prev => {;
        const updatedConversations = conversations.map(conv => ;
          conv.id === conversationId ;
            ? { ...conv, unread_count:0 } conv;
        ),;
        ;
        return updatedConversations.reduce(;
          (total, conv) => total + (conv.unread_count || 0), ;
          0;
        ),;
      }),;
    } catch (error) {;
      console.error('Error marking messages as read:', error),;
    }
  },;
;
  return {;
    loadMessages,;
    sendMessage,;
    markAsRead;
  },;
} //Allow either UserProfile or UserDetails type UserWithProfile = UserProfile | UserDetails | null;
/** * Hook to handle message operations */export function useMessages (user: UserWithProfile, activeConversation: Conversation | null, activeMessages: Message[], setActiveMessages: (updater: (prev: Message[]) => Message[]) => void;
conversations: Conversation[];
setConversations: (updater: (prev: Conversation[]) => Conversation[]) => void;
setUnreadCount: (updater: (prev: number) => number) => void;
setIsLoading: (loading: boolean) => void;
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
>>>>>>> origin/cursor/delete-old-data-records-6bba
