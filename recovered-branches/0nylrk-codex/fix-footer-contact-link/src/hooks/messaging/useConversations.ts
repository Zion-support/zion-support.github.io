
import { UserProfile, UserDetails } from '@/types/auth';
import { supabase } from '@/integrations/supabase/client';
import { Conversation, ConversationContextData } from '@/types/messaging';
import { toast } from '@/hooks/use-toast';
// Allow either UserProfile or UserDetails
type UserWithProfile = $2;
/**
 * Hook to handle conversation operations
 */
export function useConversations(
  user: UserWithProfile,
  setConversations: (conversations: Conversation[]) => void,
  setUnreadCount: (count: number) => void,
  setIsLoading: (loading: boolean) => void
) {
  /**
   * Fetch conversations for the current user
   */
  const fetchConversations = $2;
    setIsLoading($2);
    try {
      // Fetch conversations from the database
      const { data, error } = await supabase
        .from('conversations')
        .select('*')
        .or($2);
      if (error) throw error,
      
      // Format conversations
      const formattedConversations: Conversation[] = data.map($2);
      setConversations($2);
      // Calculate total unread count
      const totalUnread = formattedConversations.reduce(
        (total, conv) => total + (conv.unread_count || 0), 
        0
      ),
      setUnreadCount(totalUnread)
    } catch (error) {
      console.error('Error fetching conversations:', error)
    } finally {
      setIsLoading(false)
    }
  },

  /**
   * Create a new conversation and send initial message
   */
  const createConversation = $2;
    initialMessage: string,
    contextType: 'job' | 'talent' | 'general' = 'general',
    contextId?: string,
    contextData?: ConversationContextData
  ) => {
    if (!user || !initialMessage.trim()) return,
    
    try {
      // Check if conversation already exists
      const { data: existingConversations, error: fetchError} = await supabase
        .from('conversations')
        .select('id')
        .or(`and(user_one_id.eq.${user.id},user_two_id.eq.${recipientId}),and(user_one_id.eq.${recipientId},user_two_id.eq.${user.id})`),
        
      if (fetchError) throw fetchError,
      
      let conversationId,
      
      if (existingConversations && existingConversations.length > 0) {
        // Use existing conversation
        conversationId = $2;
        // Update context if provided
        if (contextType || contextId || contextData) {
          await supabase
            .from('conversations')
            .update({
              context_type: contextType,
              context_id: contextId,
              context_data: contextData,
              updated_at: new Date().toISOString()
            })
            .eq('id', conversationId)
        }
      } else {
        // Get recipient information
        const { data: recipientData, error: recipientError} = await supabase
          .from('profiles')
          .select('display_name, avatar_url, user_type')
          .eq('id', recipientId)
          .single($2);
        if (recipientError) throw recipientError,
        
        // Create a new conversation
        const { data: newConversation, error: createError} = await supabase
          .from('conversations')
          .insert($2);
            user_one_type: user.userType,
            user_two_id: recipientId,
            user_two_name: recipientData ?.display_name || 'User',
            user_two_avatar: recipientData ?.avatar_url,
            user_two_type: recipientData ?.user_type,
            created_at: new Date().toISOString($2);
            updated_at: new Date().toISOString($2);
            last_message: initialMessage,
            last_message_time: new Date().toISOString($2);
            context_type: contextType,
            context_id: contextId,
            context_data: contextData})
          .select('id')
          .single($2);
        if (createError) throw createError,
        
        conversationId = $2;
          sender_id: user.id,
          recipient_id: recipientId,
          content: initialMessage,
          created_at: new Date().toISOString($2);
          read: false}),
      
      // Update conversations list
      await fetchConversations($2);
      // Return the conversation ID
      return conversationId
    } catch (error) {
      console.error($2);
      toast({
        title: "Failed to create conversation",
        description: "Please try again later",
        variant: "destructive"
      })
    }
  },

  return {
    fetchConversations,
    createConversation}
}
