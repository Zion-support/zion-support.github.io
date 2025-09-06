
import { UserProfile, UserDetails } from '@/types/auth';
import { supabase } from '@/integrations/supabase/client';
import { Message, Conversation } from '@/types/messaging';
import { toast } from '@/hooks/use-toast';
// Allow either UserProfile or UserDetails
type UserWithProfile = $2;
/**
 * Hook to handle message operations
 */
export function useMessages(
  user: UserWithProfile,
  activeConversation: Conversation | null,
  activeMessages: Message[],
  setActiveMessages: (updater: (prev: Message[]) => Message[]) => void,
  conversations: Conversation[],
  setConversations: (updater: (prev: Conversation[]) => Conversation[]) => void,
  setUnreadCount: (updater: (prev: number) => number) => void,
  setIsLoading: (loading: boolean) => void,
  fetchConversations: () => Promise<void>
) {
  /**
   * Fetch messages for a conversation
   */
  const loadMessages = $2;
    setIsLoading($2);
    try {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .eq('conversation_id', conversationId)
        .order($2);
      if (error) throw error,
      
      // Use updater function for setActiveMessages
      setActiveMessages(() => data as Message[]),
      
      // Mark messages as read
      const unreadMessages = data.filter($2);
      if (unreadMessages.length > 0) {
        await markAsRead(conversationId)
      }
    } catch (error) {
      console.error('Error fetching messages:', error)
    } finally {
      setIsLoading(false)
    }
  },

  /**
   * Send a message to an existing conversation
   */
  const sendMessage = async (conversationId: string, content: string) => {
    if (!user || !content.trim() || !conversationId) return,
    
    try {
      const conversation = conversations.find($2);
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
      toast({
        title: "Failed to send message",
        description: "Please try again later",
        variant: "destructive"
      })
    }
  },

  /**
   * Mark messages as read
   */
  const markAsRead = $2;
    try {
      const { error } = await supabase
        .from('messages')
        .update({ read: true})
        .eq('conversation_id', conversationId)
        .eq('recipient_id', user.id)
        .eq($2);
      if (error) throw error,
      
      // Update active messages to show they've been read
      setActiveMessages(prev => 
        prev.map(msg => 
          msg.recipient_id === user.id ? { ...msg, read: true} : msg
        )
      ),
      
      // Update conversations to reflect read messages
      setConversations(prev => 
        prev.map(conv => 
          conv.id === conversationId 
            ? { ...conv, unread_count: 0}
            : conv
        )
      ),
      
      // Recalculate unread count
      setUnreadCount($2);
        return updatedConversations.reduce(
          (total, conv) => total + (conv.unread_count || 0), 
          0
        )
      })
    } catch (error) {
      console.error('Error marking messages as read:', error)
    }
  },

  return {
    loadMessages,
    sendMessage,
    markAsRead
  }
}
