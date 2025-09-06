
<<<<<<< HEAD
<<<<<<< HEAD
import { UserProfile, UserDetails  } from '@/types/auth';
import { supabase  } from '@/integrations/supabase/client';
import { Message, Conversation  } from '@/types/messaging';
import { toast } from '@/hooks/use-toast';
=======
import {UserProfile, UserDetails} from '@/types/auth';
import {supabase} from '@/integrations/supabase/client';
import {Message, Conversation} from '@/types/messaging';
import {toast} from '@/hooks/use-toast';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
// Allow either UserProfile or UserDetails

type UserWithProfile = UserProfile | UserDetails | null;
/**
 * Hook to handle message operations
 */
<<<<<<< HEAD
}

export function useMessages(
=======
export function useMessages(;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
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
=======
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
      const { data, error } = await supabase;
        .from('messages');
        .select('*');
        .eq('conversation_id', conversationId);
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
    } catch (error) {
      console.error('Error fetching messages:', error)
    } finally {
      setIsLoading(false)
    }
<<<<<<< HEAD
<<<<<<< HEAD
  }
=======
  };

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  /**
   * Send a message to an existing conversation
   */
  const sendMessage = async (conversationId: string, content: string) => {
    if (!user |!content.trim() |!conversationId) return;
    try {
      const conversation = conversations.find(c => c.id === conversationId)
      if (!conversation) {
        throw new Error('Conversation not found')
      }
      // Send the message
      const { data, error } = await supabase
        .from('messages')
        .insert({
          conversation_id: conversationId;
          sender_id: user.id;
          recipient_id: conversation.user_id;
          content;
          created_at: new Date().toISOString()
          read: false
        })
        .select('*')
        .single();
      if (error) throw error;
      // Update active messages if this conversation is selected
      if (activeConversation && activeConversation.id === conversationId) {
        setActiveMessages(prev => [...prev, data as Message])
      }
<<<<<<< HEAD
      // Update conversations list
      await fetchConversations();
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  },;
  /**;
   * Send a message to an existing conversation;
   */;
  const sendMessage = async (conversationId: string, content: string) => {;
    if (!user || !content.trim() || !conversationId) return,;
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
          conversation_id: conversationId,;
          sender_id: user.id,;
          recipient_id: conversation.user_id,;
          content,;
          created_at: new Date().toISOString(),;
          read: false;
        });
        .select('*');
        .single(),;
      if (error) throw error,;
      // Update active messages if this conversation is selected;
      if (activeConversation && activeConversation.id === conversationId) {;
        setActiveMessages(prev => [...prev, data as Message]);
      }
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      
      // Update conversations list
      await fetchConversations(),
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      // Return the sent message
      return data
    } catch (error) {
      console.error('Error sending message:', error),
      toast({
<<<<<<< HEAD
        title: "Failed to send message";
        description: "Please try again later"
        variant: "destructive"
      })
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
        prev.map(msg =>
          msg.recipient_id === user.id ? { ...msg, read: true } : msg
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
        const updatedConversations = conversations.map(conv =>
          conv.id === conversationId
            ? { ...conv, unread_count: 0 }
            : conv
        );
        return updatedConversations.reduce(
          (total, conv) => total + (conv.unread_count |0)
          0
        )
      })
    } catch (error) {
      console.error('Error marking messages as read:', error)
    }
  }
  return {
    loadMessages;
    sendMessage;

    markAsRead
=======
<<<<<<< HEAD
        title: "Failed to send message",
        description: "Please try again later",
        variant: "destructive"
      })
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}