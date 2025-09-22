
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { UserProfile, UserDetails  } from '@/types/auth';
import { supabase  } from '@/integrations/supabase/client';
import { Message, Conversation  } from '@/types/messaging';
import { toast } from '@/hooks/use-toast';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {UserProfile, UserDetails} from '@/types/auth';
import {supabase} from '@/integrations/supabase/client';
import {Message, Conversation} from '@/types/messaging';
import {toast} from '@/hooks/use-toast';

=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
// Allow either UserProfile or UserDetails
=======
import { UserProfile, UserDetails  } from '@/types/auth';
import { supabase  } from '@/integrations/supabase/client';
import { Message, Conversation  } from '@/types/messaging';
import { toast } from '@/hooks/use-toast';// Allow either UserProfile or UserDetails
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

import { UserProfile, UserDetails  } from '@/types/auth';
import { supabase  } from '@/integrations/supabase/client';
import { Message, Conversation  } from '@/types/messaging';
import { toast } from '@/hooks/use-toast';// Allow either UserProfile or UserDetails
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

type UserWithProfile = UserProfile | UserDetails | null;
/**
 * Hook to handle message operations
<<<<<<< HEAD
 */
<<<<<<< HEAD
<<<<<<< HEAD
export function useMessages(
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { UserProfile, UserDetails  } from '@/types/auth';'
import { supabase  } from '@/integrations/supabase/client';'
import { Message, Conversation  } from '@/types/messaging';'
import { toast } from '@/hooks/use-toast';
'
import {UserProfile, UserDetails} from '@/types/auth';'
import {supabase} from '@/integrations/supabase/client';'
import {Message, Conversation} from '@/types/messaging';'
import {toast} from '@/hooks/use-toast';

// Allow either UserProfile or UserDetails;
type UserWithProfile = UserProfile | UserDetails | null;
/**
 * Hook to handle message operations;
 */

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  user: UserWithProfile;
=======
 */  user: UserWithProfile;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
 */  user: UserWithProfile;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
 */
export function useMessages(
  user: UserWithProfile;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
      console && console.error('Error fetching messages:', error)
<<<<<<< HEAD
  /**;
  * Fetch messages for a conversation;
  */;
  const load_messages = async (conversation_id: string) => {}
    // Check condition;
if (return) {}
  $2;
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
// Check condition;
if ( {) {}
  $2;
}
        await markAsRead (conversation_id);
      }
    } catch (error) {'
      console.error ('Error fetching messages:', error);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    } finally {
=======
      // Check condition
if ( {) {
  $2
}
        await markAsRead (conversation_id);
      }
    } catch (error) {
      console.error ('Error fetching messages:', error);
    } finally {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      setIsLoading (false);
    }
  }

if (unreadMessages.length > 0) {}
        await markAsRead(conversationId)
<<<<<<< HEAD
import { UserProfile, UserDetails } from '@/types/auth',;
=======
      console && console.error('Error fetching messages:', error)import { UserProfile, UserDetails } from '@/types/auth',;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      console && console.error('Error fetching messages:', error)import { UserProfile, UserDetails } from '@/types/auth',;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      if (unreadMessages.length > 0) {
        await markAsRead(conversationId)
import { UserProfile, UserDetails } from '@/types/auth',;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { supabase } from '@/integrations/supabase/client',;
import { Message, Conversation } from '@/types/messaging',;
=======

'
import { UserProfile, UserDetails } from '@/types/auth',;'
import { supabase } from '@/integrations/supabase/client',;'
import { Message, Conversation } from '@/types/messaging',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      }
    } catch (error) {'
      console.error('Error fetching messages:', error)
    } finally {}
      setIsLoading(false)
    }

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
  };

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
};

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  /**
   * Send a message to an existing conversation;
   */
  const sendMessage = async (conversationId: string, content: string) => {}
    if (!user || !content && content.trim() || !conversationId) return;

    try {}
      const conversation = conversations && conversations.find(c => c && c.id === conversationId),

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  }
  };

  /**
   * Send a message to an existing conversation
   */
  const sendMessage = async (conversationId: string, content: string) => {

    if (!user || !content && content.trim() || !conversationId) return;

    try {
      const conversation = conversations && conversations.find(c => c && c.id === conversationId),

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      if (!conversation) {
=======

      if (!conversation) {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        throw new Error('Conversation not found')
      }
      // Send the message;
      const { data, error } = await supabase'
        .from('messages')
        .insert({}
          conversation_id: conversationId;

          sender_id: user && user.id;
          recipient_id: conversation && conversation.user_id;
          sender_id: user && user.id;
          recipient_id: conversation && conversation.user_id;

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
      }
<<<<<<< HEAD
<<<<<<< HEAD
      // Update conversations list
      await fetchConversations();
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  },;
=======
      }  },;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      }  },;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      }

  },;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
      const { data, error } = await supabase;'
        .from('messages');
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
      }
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

      // Update conversations list;
      await fetchConversations(),

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      // Return the sent message
      return data
    } catch (error) {
      console && console.error('Error sending message:', error);
      toast({

      // Return the sent message;
      return data;
    } catch (error) {'
      console.error('Error sending message:', error),
      toast({}
        title: "Failed to send message";"
        description: "Please try again later""
        variant: "destructive"
      })
    }
  }
  /**
   * Mark messages as read;
   */
  const markAsRead = async (conversationId: string) => {}
    if (!user |!conversationId) return;
    try {}
      const { error } = await supabase'
        .from('messages')
        .update({ read: true })'
        .eq('conversation_id', conversationId)'
        .eq('recipient_id', user.id)'
        .eq('read', false);
if (error) throw error;
      // Update active messages to show they've been read
setActiveMessages(prev =>
        prev.map(msg =>
          msg.recipient_id === user.id ? { ...msg, read: true } : msg
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      setActiveMessages(prev => 
        prev && prev.map(msg => 
          msg && msg.recipient_id === user && user.id ? { ...msg, read: true } : msg

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        )
      );
      // Update conversations to reflect read messages

      setConversations(prev => 
        prev && prev.map(conv => 
          conv && conv.id === conversationId
      setActiveMessages(prev =>
        prev.map(msg =>
          msg.recipient_id === user.id ? { ...msg, read: true } : msg;
      setActiveMessages(prev => 
        prev && prev.map(msg => 
msg && msg.recipient_id === user && user.id ? { ...msg, read: true } : msg

        .eq('recipient_id', user && user.id)
=======
      }      
      // Update conversations list
      await fetchConversations(),
              .eq('recipient_id', user && user.id)
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          msg && msg.recipient_id === user && user.id ? { ...msg, read: true } : msg;
'
        .eq('recipient_id', user && user.id)'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      }

      // Update conversations list
      await fetchConversations(),

      // Return the sent message
      return data
    } catch (error) {
      console && console.error('Error sending message:', error);
      toast({

      // Return the sent message
      return data
    } catch (error) {
      console.error('Error sending message:', error),
      toast({
        title: "Failed to send message";
        description: "Please try again later"
        variant: "destructive"
      })
    }
  }
  /**
   * Mark messages as read
   */
  const markAsRead = async (conversationId: string) => {
    if (!user |!conversationId) return
    try {
      const { error } = await supabase
        .from('messages')
        .update({ read: true })
        .eq('conversation_id', conversationId)
        .eq('recipient_id', user.id)
        .eq('read', false);
      if (error) throw error;
      // Update active messages to show they've been read
      setActiveMessages(prev => 
        prev && prev.map(msg => 
          msg && msg.recipient_id === user && user.id ? { ...msg, read: true } : msg

        )
      );
      // Update conversations to reflect read messages

      setConversations(prev => 
        prev && prev.map(conv => 
          conv && conv.id === conversationId 

      setActiveMessages(prev =>
        prev.map(msg =>
          msg.recipient_id === user.id ? { ...msg, read: true } : msg

      setActiveMessages(prev => 
        prev && prev.map(msg => 
          msg && msg.recipient_id === user && user.id ? { ...msg, read: true } : msg

        .eq('recipient_id', user && user.id)
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        .eq('read', false);
      if (error) throw error;'
      // Update active messages to show they've been read;
        )
      );
// Update conversations to reflect read messages
      setConversations(prev =>
        prev.map(conv =>
          conv.id === conversationId
            ? { ...conv, unread_count: 0 }
            : conv
        )
      );
      // Recalculate unread count
      setUnreadCount(prev => {

        const updatedConversations = conversations && conversations.map(conv => 
          conv && conv.id === conversationId 
            ? { ...conv, unread_count: 0 }
            : conv
        );

        return updatedConversations && updatedConversations.reduce(
          (total, conv) => total + (conv && conv.unread_count || 0), 

          0
        )
      })
    } catch (error) {
console && console.error('Error marking messages as read:', error)      console && console.error('Error marking messages as read:', error)
    }
  }
  return {}
    loadMessages;
<<<<<<< HEAD
    sendMessage;

<<<<<<< HEAD
    markAsRead
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    sendMessage;

    markAsRead
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

  }
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
toast ({
        title: "Failed to send message";
        description: "Please try again later",
        variant: "destructive";
      });
    }
variant: "destructive";
      });
    }

markAsRead
        title: "Failed to send message",
        description: "Please try again later",
        variant: "destructive"
      })
;
      // Update conversations list;
      await fetchConversations(),;
      // Return the sent message;
      return data;
    } catch (error) {;
      console.error('Error sending message:', error),;
      toast({;
        title: "Failed to send message",;
        description: "Please try again later",;
        variant: "destructive";
      });
    }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  },;
  /**;
   * Mark messages as read;
   */;
  const markAsRead = async (conversationId: string) => {;
    if (!user || !conversationId) return,;
    try {;
      const { error } = await supabase;
        .from('messages');
        .update({ read: true });
        .eq('conversation_id', conversationId);
        .eq('recipient_id', user.id);
        .eq('read', false),;
      if (error) throw error,;
      // Update active messages to show they've been read;
      setActiveMessages(prev =>;
        prev.map(msg =>;
          msg.recipient_id === user.id ? { ...msg, read: true } : msg;
        );
      ),;
      // Update conversations to reflect read messages;
      setConversations(prev =>;
        prev.map(conv =>;
          conv.id === conversationId;
            ? { ...conv, unread_count: 0 }
            : conv;
        );
      ),;
      // Recalculate unread count;
      setUnreadCount(prev => {;
        const updatedConversations = conversations.map(conv =>;
          conv.id === conversationId;
            ? { ...conv, unread_count: 0 }
            : conv;
        ),;
        return updatedConversations.reduce(;
          (total, conv) => total + (conv.unread_count || 0),;
          0;
        );
      });
    } catch (error) {;
      console.error('Error marking messages as read:', error);
    }
  },;
  return {;
    loadMessages;
    sendMessage;
    markAsRead;
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  }
=======
    sendMessage;  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    sendMessage;  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  }
}
}
<<<<<<< HEAD
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
