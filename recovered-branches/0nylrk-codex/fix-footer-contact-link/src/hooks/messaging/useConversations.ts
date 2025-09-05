
import { UserProfile, UserDetails } from '@/types/auth',
import { supabase } from '@/integrations/supabase/client',
import { Conversation, ConversationContextData } from '@/types/messaging',
import { toast } from '@/hooks/use-toast',// Allow either UserProfile or UserDetails,
type UserWithProfile = UserProfile | UserDetails | null,

/**
 * Hook to handle conversation operations
 */
export function useConversations(user: UserWithProfile, setConversations: (conversations: Conversation[]) => void,
  setUnreadCount: (count: number) => void,
  setIsLoading: (loading: boolean) => void
) {_/**
   * Fetch conversations for the current user
   */
  const fetchConversations = async () => {
    if (!user) return,    
    setIsLoading(true),
    
    try {
      // Fetch conversations from the database,
const { data, error} = await supabase
        .from('conversations')
        .select('*')
        .or(`userone_id.eq.${user.id},usertwo_id.eq.${user.id}`),        
      if (error) throw error,
      
      // Format conversations,
const formattedConversations: Conversation[] = data.map(conv => {
        const isUserOne = conv.userone_id === user.id,
        const otherUserId = isUserOne ? conv.usertwo_id : conv.userone_id,        
        return {
          id: conv.id, user_id: otherUserId, other_user: {
            id: otherUserId, name: isUserOne ? conv.usertwo_name : conv.userone_name, avatar_url: isUserOne ? conv.usertwo_avatar : conv.userone_avatar, user_type: isUserOne ? conv.usertwo_type : conv.userone_type},
          name: isUserOne ? conv.usertwo_name : conv.userone_name,
          avatarurl: isUserOne ? conv.usertwo_avatar : conv.userone_avatar,
          lastmessage: conv.lastmessage ? {content: conv.lastmessage, created_at: conv.lastmessage_time} : undefined,
          updatedat: conv.updatedat || conv.createdat,
          unreadcount: conv.unreadcount || 0,
          contexttype: conv.contexttype,
          contextid: conv.contextid,
          contextdata: conv.contextdata
        }
      }),
      
      setConversations(formattedConversations),
      
      // Calculate total unread count,
const totalUnread = formattedConversations.reduce(_(total, conv) => total + (conv.unreadcount || 0), 
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
  const createConversation = async (
    recipientId: string,
    initialMessage: string,
    contextType: 'job' | 'talent' | 'general' = 'general',
    contextId?: string,
    contextData?: ConversationContextData
  ) => {
    if (!user || !initialMessage.trim()) return,    
    try {
      // Check if conversation already exists,
const { data: existingConversations, error: fetchError} = await supabase
        .from('conversations')
        .select('id')
        .or(`and(userone_id.eq.${user.id},usertwo_id.eq.${recipientId}),and(userone_id.eq.${recipientId},usertwo_id.eq.${user.id})`),        
      if (fetchError) throw fetchError,
      
      let conversationId,
      
      if (existingConversations && existingConversations.length > 0) {
        // Use existing conversation,
conversationId = existingConversations[0].id,        
        // Update context if provided,
if (contextType || contextId || contextData) {
          await supabase
            .from('conversations')
            .update({
              contexttype: contextType,
              contextid: contextId,
              contextdata: contextData,
              updatedat: new Date().toISOString()
            })
            .eq('id', conversationId)        }
      } else {_// Get recipient information,
const { data: recipientData, error: recipientError} = await supabase
          .from('profiles')
          .select('displayname, avatarurl, usertype')
          .eq('id', recipientId)
          .single(),
          
        if (recipientError) throw recipientError,
        
        // Create a new conversation,
const {data: newConversation, error: createError} = await supabase
          .from('conversations')
          .insert({user_one_id: user.id, user_one_name: user.displayName || user.email, user_one_avatar: user.avatarUrl || ('avatarurl' in user ? user.avatarurl : undefined), user_one_type: user.userType, user_two_id: recipientId, user_two_name: recipientData?.displayname || 'User', user_two_avatar: recipientData?.avatarurl, user_two_type: recipientData?.usertype, created_at: new Date().toISOString(), updated_at: new Date().toISOString(), last_message: initialMessage, last_message_time: new Date().toISOString(), context_type: contextType, context_id: contextId, context_data: contextData})
          .select('id')
          .single(),
          
        if (createError) throw createError,
        
        conversationId = newConversation.id
      }
      
      // Send the initial message,
await supabase
        .from('messages')
        .insert({
          conversationid: conversationId,
          senderid: user.id,
          recipientid: recipientId,
          content: initialMessage,
          createdat: new Date().toISOString(),
          read: false
        }),      
      // Update conversations list,
await fetchConversations(),
      
      // Return the conversation ID,
return conversationId
    } catch (error) {
      console.error('Error creating conversation:', error),
      toast({
        title: "Failed to create conversation",
        description: "Please try again later",
        variant: "destructive"
      })      return conversationId
    } catch (error) {toast({
        title: "Failed to create conversation", description: "Please try again later", variant: "destructive"})
    }
  },

  return {
    fetchConversations,
    createConversation}}
