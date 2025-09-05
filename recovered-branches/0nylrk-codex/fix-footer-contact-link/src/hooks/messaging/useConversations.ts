
<<<<<<< HEAD
import { UserProfile, UserDetails } from '@/types/auth',
import { supabase } from '@/integrations/supabase/client',
import { Conversation, ConversationContextData } from '@/types/messaging',
import { toast } from '@/hooks/use-toast',
=======

>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
// Allow either UserProfile or UserDetails
type UserWithProfile = UserProfile | UserDetails | null,

/**
 * Hook to handle conversation operations
 */
export function useConversations(_user: UserWithProfile, _setConversations: (conversations: Conversation[]) => void,
  setUnreadCount: (_count: number) => void,
  setIsLoading: (_loading: boolean) => void
) {_/**
   * Fetch conversations for the current user
   */
<<<<<<< HEAD
  const fetchConversations = async () => {
    if (!user) return,
=======
  const _fetchConversations = async () => {
    if (!user) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    setIsLoading(true),
    
    try {
      // Fetch conversations from the database
      const { data, _error} = await supabase
        .from('conversations')
        .select('*')
<<<<<<< HEAD
        .or(`user_one_id.eq.${user.id},user_two_id.eq.${user.id}`),
=======
        .or(`user_one_id.eq.${_user.id},user_two_id.eq.${_user.id}`);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
      if (error) throw error,
      
      // Format conversations
<<<<<<< HEAD
      const formattedConversations: Conversation[] = data.map(conv => {
        const isUserOne = conv.user_one_id === user.id,
        const otherUserId = isUserOne ? conv.user_two_id : conv.user_one_id,
=======
      const formattedConversations: Conversation[] = data.map(conv => {_const _isUserOne = conv.user_one_id === user.id;
        const _otherUserId = isUserOne ? conv.user_two_id : conv.user_one_id;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
        return {
          id: conv.id, _user_id: otherUserId, _other_user: {
            id: otherUserId, _name: isUserOne ? conv.user_two_name : conv.user_one_name, _avatar_url: isUserOne ? conv.user_two_avatar : conv.user_one_avatar, _user_type: isUserOne ? conv.user_two_type : conv.user_one_type},
          name: isUserOne ? conv.user_two_name : conv.user_one_name,
          avatar_url: isUserOne ? conv.user_two_avatar : conv.user_one_avatar,
          last_message: conv.last_message ? {_content: conv.last_message, _created_at: conv.last_message_time} : undefined,
          updated_at: conv.updated_at || conv.created_at,
          unread_count: conv.unread_count || 0,
          context_type: conv.context_type,
          context_id: conv.context_id,
          context_data: conv.context_data
        }
      }),
      
      setConversations(formattedConversations),
      
      // Calculate total unread count
      const _totalUnread = formattedConversations.reduce(_(total, _conv) => total + (conv.unread_count || 0), 
        0
<<<<<<< HEAD
      ),
      setUnreadCount(totalUnread)
    } catch (error) {
      console.error('Error fetching conversations:', error)
    } finally {
      setIsLoading(false)
    }
  },
=======
      );
      setUnreadCount(totalUnread);
    } catch (error) {} finally {_setIsLoading(false);}
  };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  /**
   * Create a new conversation and send initial message
   */
<<<<<<< HEAD
  const createConversation = async (
    recipientId: string, 
    initialMessage: string,
    contextType: 'job' | 'talent' | 'general' = 'general',
    contextId?: string,
    contextData?: ConversationContextData
  ) => {
    if (!user || !initialMessage.trim()) return,
=======
  const _createConversation = async (_recipientId: string, _initialMessage: string, _contextType: 'job' | 'talent' | 'general' = 'general', _contextId?: string, _contextData?: ConversationContextData) => {_if (!user || !initialMessage.trim()) return;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    try {
      // Check if conversation already exists
      const { data: existingConversations, _error: fetchError} = await supabase
        .from('conversations')
        .select('id')
<<<<<<< HEAD
        .or(`and(user_one_id.eq.${user.id},user_two_id.eq.${recipientId}),and(user_one_id.eq.${recipientId},user_two_id.eq.${user.id})`),
=======
        .or(`and(user_one_id.eq.${_user.id},user_two_id.eq.${_recipientId}),and(user_one_id.eq.${_recipientId},user_two_id.eq.${_user.id})`);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
      if (fetchError) throw fetchError,
      
      let conversationId,
      
<<<<<<< HEAD
      if (existingConversations && existingConversations.length > 0) {
        // Use existing conversation
        conversationId = existingConversations[0].id,
=======
      if (existingConversations && existingConversations.length > 0) {_// Use existing conversation
        conversationId = existingConversations[0].id;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        
        // Update context if provided
        if (contextType || contextId || contextData) {
          await supabase
            .from('conversations')
            .update({
<<<<<<< HEAD
              context_type: contextType,
              context_id: contextId,
              context_data: contextData,
              updated_at: new Date().toISOString()
            })
            .eq('id', conversationId)
=======
              context_type: contextType, _context_id: contextId, _context_data: contextData, _updated_at: new Date().toISOString()})
            .eq('id', conversationId);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        }
      } else {_// Get recipient information
        const { data: recipientData, _error: recipientError} = await supabase
          .from('profiles')
          .select('display_name, avatar_url, user_type')
          .eq('id', recipientId)
          .single(),
          
        if (recipientError) throw recipientError,
        
        // Create a new conversation
        const {_data: newConversation, _error: createError} = await supabase
          .from('conversations')
          .insert({_user_one_id: user.id, _user_one_name: user.displayName || user.email, _user_one_avatar: user.avatarUrl || ('avatar_url' in user ? user.avatar_url : undefined), _user_one_type: user.userType, _user_two_id: recipientId, _user_two_name: recipientData?.display_name || 'User', _user_two_avatar: recipientData?.avatar_url, _user_two_type: recipientData?.user_type, _created_at: new Date().toISOString(), _updated_at: new Date().toISOString(), _last_message: initialMessage, _last_message_time: new Date().toISOString(), _context_type: contextType, _context_id: contextId, _context_data: contextData})
          .select('id')
          .single(),
          
        if (createError) throw createError,
        
        conversationId = newConversation.id
      }
      
      // Send the initial message
      await supabase
        .from('messages')
<<<<<<< HEAD
        .insert({
          conversation_id: conversationId,
          sender_id: user.id,
          recipient_id: recipientId,
          content: initialMessage,
          created_at: new Date().toISOString(),
          read: false
        }),
=======
        .insert({_conversation_id: conversationId, _sender_id: user.id, _recipient_id: recipientId, _content: initialMessage, _created_at: new Date().toISOString(), _read: false});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      // Update conversations list
      await fetchConversations(),
      
      // Return the conversation ID
<<<<<<< HEAD
      return conversationId
    } catch (error) {
      console.error('Error creating conversation:', error),
      toast({
<<<<<<< HEAD
        title: "Failed to create conversation",
        description: "Please try again later",
        variant: "destructive"
      })
=======
        title: &quot;Failed to create conversation&quot;,
        description: &quot;Please try again later&quot;,
        variant: &quot;destructive&quot;
      });
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
      return conversationId;
    } catch (error) {_toast({
        title: "Failed to create conversation", _description: "Please try again later", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

<<<<<<< HEAD
  return {
    fetchConversations,
    createConversation}
=======
  return {_fetchConversations, _createConversation};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}
