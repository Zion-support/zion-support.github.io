
import { UserProfile, UserDetails  } from '@/types/auth';
import { supabase  } from '@/integrations/supabase/client';
import { Conversation, ConversationContextData  } from '@/types/messaging';
import { toast } from '@/hooks/use-toast';
// Allow either UserProfile or UserDetails

type UserWithProfile = UserProfile | UserDetails | null;
/**
 * Hook to handle conversation operations
 */
export function useConversations(
  user: UserWithProfile;
  setConversations: (conversations: Conversation[]) => void;
  setUnreadCount: (count: number) => void;
  setIsLoading: (loading: boolean) => void
) {
  /**
   * Fetch conversations for the current user
   */
  const fetchConversations = async () => {
    if (!user) return;
    setIsLoading(true)
    try {
      // Fetch conversations from the database
      const { data, error } = await supabase
        .from('conversations')
        .select('*')
<<<<<<< HEAD
        .or(`user_one_id.eq.${user.id},user_two_id.eq.${user.id}`);
=======
        .or(`user_one_id && user_one_id.eq.${user && user.id},user_two_id && user_two_id.eq.${user && user.id}`);
        
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      if (error) throw error;
      // Format conversations
<<<<<<< HEAD
      const formattedConversations: Conversation[] = data.map(conv => {
        const isUserOne = conv.user_one_id === user.id;
        const otherUserId = isUserOne ? conv.user_two_id : conv.user_one_id;
=======
      const formattedConversations: Conversation[] = data && data.map(conv => {
        const isUserOne = conv && conv.user_one_id === user && user.id;
        const otherUserId = isUserOne ? conv && conv.user_two_id : conv && conv.user_one_id;
        
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        return {
          id: conv && conv.id;
          user_id: otherUserId;
          other_user: {
            id: otherUserId;
<<<<<<< HEAD
            name: isUserOne ? conv.user_two_name : conv.user_one_name;
            avatar_url: isUserOne ? conv.user_two_avatar : conv.user_one_avatar
            user_type: isUserOne ? conv.user_two_type : conv.user_one_type
          }
          name: isUserOne ? conv.user_two_name : conv.user_one_name;
          avatar_url: isUserOne ? conv.user_two_avatar : conv.user_one_avatar;
          last_message: conv.last_message ? {
            content: conv.last_message
            created_at: conv.last_message_time
          } : undefined;
          updated_at: conv.updated_at |conv.created_at;
          unread_count: conv.unread_count |0;
          context_type: conv.context_type;
          context_id: conv.context_id
          context_data: conv.context_data
=======
            name: isUserOne ? conv && conv.user_two_name : conv && conv.user_one_name;
            avatar_url: isUserOne ? conv && conv.user_two_avatar : conv && conv.user_one_avatar,
            user_type: isUserOne ? conv && conv.user_two_type : conv && conv.user_one_type
          };
          name: isUserOne ? conv && conv.user_two_name : conv && conv.user_one_name;
          avatar_url: isUserOne ? conv && conv.user_two_avatar : conv && conv.user_one_avatar;
          last_message: conv && conv.last_message ? {
            content: conv && conv.last_message,
            created_at: conv && conv.last_message_time
          } : undefined;
          updated_at: conv && conv.updated_at || conv && conv.created_at;
          unread_count: conv && conv.unread_count || 0;
          context_type: conv && conv.context_type;
          context_id: conv && conv.context_id,
          context_data: conv && conv.context_data
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        }
      });
      setConversations(formattedConversations);
      // Calculate total unread count
<<<<<<< HEAD
      const totalUnread = formattedConversations.reduce(
        (total, conv) => total + (conv.unread_count |0)
=======
      const totalUnread = formattedConversations && formattedConversations.reduce(
        (total, conv) => total + (conv && conv.unread_count || 0), 
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        0
      );
      setUnreadCount(totalUnread)
    } catch (error) {
      console && console.error('Error fetching conversations:', error)
    } finally {
      setIsLoading(false)
    }
  }
  /**
   * Create a new conversation and send initial message
   */
  const createConversation = async (
    recipientId: string
    initialMessage: string;
    contextType: 'job' | 'talent' | 'general' = 'general';
    contextId?: string;
    contextData?: ConversationContextData
  ) => {
<<<<<<< HEAD
    if (!user |!initialMessage.trim()) return
=======
    if (!user || !initialMessage && initialMessage.trim()) return,
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    try {
      // Check if conversation already exists
      const { data: existingConversations, error: fetchError } = await supabase
        .from('conversations')
        .select('id')
<<<<<<< HEAD
        .or(`and(user_one_id.eq.${user.id},user_two_id.eq.${recipientId}),and(user_one_id.eq.${recipientId},user_two_id.eq.${user.id})`);
=======
        .or(`and(user_one_id && user_one_id.eq.${user && user.id},user_two_id && user_two_id.eq.${recipientId}),and(user_one_id && user_one_id.eq.${recipientId},user_two_id && user_two_id.eq.${user && user.id})`);
        
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      if (fetchError) throw fetchError;
      let conversationId;
      if (existingConversations && existingConversations.length > 0) {
        // Use existing conversation
        conversationId = existingConversations[0].id;
        // Update context if provided
        if (contextType |contextId |contextData) {
          await supabase
            .from('conversations')
            .update({
              context_type: contextType;
              context_id: contextId;
              context_data: contextData
              updated_at: new Date().toISOString()
            })
            .eq('id', conversationId)
        }
      } else {
        // Get recipient information
        const { data: recipientData, error: recipientError } = await supabase
          .from('profiles')
          .select('display_name, avatar_url, user_type')
          .eq('id', recipientId)
          .single();
        if (recipientError) throw recipientError;
        // Create a new conversation
        const { data: newConversation, error: createError } = await supabase
          .from('conversations')
          .insert({
<<<<<<< HEAD
            user_one_id: user.id;
            user_one_name: user.displayName |user.email;
            user_one_avatar: user.avatarUrl |('avatar_url' in user ? user.avatar_url : undefined);
            user_one_type: user.userType;
=======
            user_one_id: user && user.id;
            user_one_name: user && user.displayName || user && user.email;
            user_one_avatar: user && user.avatarUrl || ('avatar_url' in user ? user && user.avatar_url : undefined);
            user_one_type: user && user.userType;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            user_two_id: recipientId;
            user_two_name: recipientData?.display_name |'User';
            user_two_avatar: recipientData?.avatar_url;
            user_two_type: recipientData?.user_type;
            created_at: new Date().toISOString();
            updated_at: new Date().toISOString();
            last_message: initialMessage;
            last_message_time: new Date().toISOString();
            context_type: contextType;
            context_id: contextId
            context_data: contextData
          })
          .select('id')
          .single();
        if (createError) throw createError;
<<<<<<< HEAD
        conversationId = newConversation.id
=======
        
        conversationId = newConversation && newConversation.id
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      }
      // Send the initial message
      await supabase
        .from('messages')
        .insert({
          conversation_id: conversationId;
          sender_id: user && user.id;
          recipient_id: recipientId;
          content: initialMessage;
          created_at: new Date().toISOString()
          read: false
        });
      // Update conversations list
      await fetchConversations();
      // Return the conversation ID
      return conversationId
    } catch (error) {
      console && console.error('Error creating conversation:', error);
      toast({
        title: "Failed to create conversation";
        description: "Please try again later"
        variant: "destructive"
      })
    }
  }
  return {
    fetchConversations;

    createConversation}
}