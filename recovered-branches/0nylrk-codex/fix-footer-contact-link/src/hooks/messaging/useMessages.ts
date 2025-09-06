

import {UserProfile, UserDetails} from '@/types/auth';
import {supabase} from '@/integrations/supabase/client';
import {Message, Conversation} from '@/types/messaging';
import {toast} from '@/hooks/use-toast';

// Allow either UserProfile or UserDetails

type UserWithProfile = UserProfile | UserDetails | null;
/**
 * Hook to handle message operations
 */
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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
    } catch (error) {
      console.error('Error fetching messages:', error)
    } finally {
      setIsLoading(false)
    }

  };


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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      
      // Update conversations list
      await fetchConversations(),
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      // Return the sent message
      return data
    } catch (error) {
      console.error('Error sending message:', error),
      toast({


  }
}