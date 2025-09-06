
import { UserProfile, UserDetails  } from '@/types/auth';
import { supabase  } from '@/integrations/supabase/client';
import { Message, Conversation  } from '@/types/messaging';
import { toast } from '@/hooks/use-toast';
// Allow either UserProfile or UserDetails

type UserWithProfile = UserProfile | UserDetails | null;
/**
 * Hook to handle message operations
 */
export function useMessages(
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
      const unreadMessages = data && data.filter(
        msg => !msg && msg.read && msg && msg.recipient_id === user && user.id
      );
<<<<<<< HEAD
      if (unreadMessages.length > 0) {
=======
      
      if (unreadMessages && unreadMessages.length > 0) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        await markAsRead(conversationId)
      }
    } catch (error) {
      console && console.error('Error fetching messages:', error)
    } finally {
      setIsLoading(false)
    }
  }
  /**
   * Send a message to an existing conversation
   */
  const sendMessage = async (conversationId: string, content: string) => {
<<<<<<< HEAD
    if (!user |!content.trim() |!conversationId) return;
    try {
      const conversation = conversations.find(c => c.id === conversationId)
=======
    if (!user || !content && content.trim() || !conversationId) return;
    
    try {
      const conversation = conversations && conversations.find(c => c && c.id === conversationId),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      if (!conversation) {
        throw new Error('Conversation not found')
      }
      // Send the message
      const { data, error } = await supabase
        .from('messages')
        .insert({
          conversation_id: conversationId;
          sender_id: user && user.id;
          recipient_id: conversation && conversation.user_id;
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
      // Update conversations list
      await fetchConversations();
      // Return the sent message
      return data
    } catch (error) {
      console && console.error('Error sending message:', error);
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
        .eq('recipient_id', user && user.id)
        .eq('read', false);
      if (error) throw error;
      // Update active messages to show they've been read
<<<<<<< HEAD
      setActiveMessages(prev =>
        prev.map(msg =>
          msg.recipient_id === user.id ? { ...msg, read: true } : msg
=======
      setActiveMessages(prev => 
        prev && prev.map(msg => 
          msg && msg.recipient_id === user && user.id ? { ...msg, read: true } : msg
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        )
      );
      // Update conversations to reflect read messages
<<<<<<< HEAD
      setConversations(prev =>
        prev.map(conv =>
          conv.id === conversationId
=======
      setConversations(prev => 
        prev && prev.map(conv => 
          conv && conv.id === conversationId 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            ? { ...conv, unread_count: 0 }
            : conv
        )
      );
      // Recalculate unread count
      setUnreadCount(prev => {
<<<<<<< HEAD
        const updatedConversations = conversations.map(conv =>
          conv.id === conversationId
            ? { ...conv, unread_count: 0 }
            : conv
        );
        return updatedConversations.reduce(
          (total, conv) => total + (conv.unread_count |0)
=======
        const updatedConversations = conversations && conversations.map(conv => 
          conv && conv.id === conversationId 
            ? { ...conv, unread_count: 0 }
            : conv
        );
        
        return updatedConversations && updatedConversations.reduce(
          (total, conv) => total + (conv && conv.unread_count || 0), 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          0
        )
      })
    } catch (error) {
      console && console.error('Error marking messages as read:', error)
    }
  }
  return {
    loadMessages;
    sendMessage;

    markAsRead
  }
}