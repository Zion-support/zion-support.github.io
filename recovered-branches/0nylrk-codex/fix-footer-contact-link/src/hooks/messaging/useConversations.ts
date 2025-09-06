

// Allow either UserProfile or UserDetails

type UserWithProfile = UserProfile | UserDetails | null;
/**
 * Hook to handle conversation operations
 */

import {UserProfile, UserDetails} from '@/types / auth';
import {supabase} from '@/integrations / supabase / client';
import {Conversation, ConversationContextData} from '@/types / messaging';
import {toast} from '@/hooks / use - toast';
// Allow either UserProfile or UserDetails;
type UserWithProfile = UserProfile | UserDetails | null;
;
/**;
* Hook to handle conversation operations;
*/;
export function use_conversations (


  user: UserWithProfile;
  set_conversations: (conversations: Conversation[]) => void;
  setUnreadCount: (count: number) => void;
      if (error) throw error;
      // Format conversations


  setIsLoading: (loading: boolean) => void) {
  /**;
  * Fetch conversations for the current user;
  */;
  const fetch_conversations = async () => {
    // Check condition
if (return) {
  $2
}
    setIsLoading (true),
    try {
      // Fetch conversations from the database;
      const { data, error } = await supabase;
        .from ('conversations');
        .select ('*');
        .or (`user_one_id.eq.${user.id}, user_two_id.eq.${user.id}`);
;
      // Check condition
if (throw error) {
  $2
}
      // Format conversations;
      const formatted_conversations: Conversation[] = data.map (conv => {
        const isUserOne = conv.user_one_id === user.id;
        const otherUserId = isUserOne ? conv.user_two_id : conv.user_one_id;
;
        return {
          id: conv && conv.id;
          user_id: otherUserId;
          other_user: {
            id: otherUserId;

            avatar_url: isUserOne ? conv.user_two_avatar : conv.user_one_avatar,
            user_type: isUserOne ? conv.user_two_type : conv.user_one_type;
export function useConversations(;
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
        .or(`user_one_id.eq.${user.id},user_two_id.eq.${user.id}`);
      if (error) throw error;
      // Format conversations
      const formattedConversations: Conversation[] = data.map(conv => {
        const isUserOne = conv.user_one_id === user.id;
        const otherUserId = isUserOne ? conv.user_two_id : conv.user_one_id;
        return {
          id: conv.id;
          user_id: otherUserId;
          other_user: {
            id: otherUserId;
            name: isUserOne ? conv.user_two_name : conv.user_one_name;
            avatar_url: isUserOne ? conv.user_two_avatar : conv.user_one_avatar
            user_type: isUserOne ? conv.user_two_type : conv.user_one_type


          }
          name: isUserOne ? conv.user_two_name : conv.user_one_name;
          avatar_url: isUserOne ? conv.user_two_avatar : conv.user_one_avatar;
          last_message: conv.last_message ? {

            content: conv.last_message,
            created_at: conv.last_message_time;
            content: conv.last_message
            created_at: conv.last_message_time


          } : undefined;
          updated_at: conv.updated_at |conv.created_at;
          unread_count: conv.unread_count |0;
          context_type: conv.context_type;


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

          context_id: conv.context_id
          context_data: conv.context_data


        }
      });
      setConversations(formattedConversations);
      // Calculate total unread count

      const totalUnread = formattedConversations && formattedConversations.reduce(
        (total, conv) => total + (conv && conv.unread_count || 0), 
      const totalUnread = formattedConversations.reduce(
        (total, conv) => total + (conv.unread_count |0)


        0
      );
      setUnreadCount(totalUnread)
    } catch (error) {

          context_id: conv.context_id,
          context_data: conv.context_data;
        }
      });
;
      set_conversations (formatted_conversations);
;
      // Calculate total unread count;
      const total_unread = formatted_conversations.reduce (
        (total, conv) => total + (conv.unread_count || 0),
        0);
      setUnreadCount (total_unread);
    } catch (error) {
      console.error ('Error fetching conversations:', error);


    } finally {
      setIsLoading (false);
    }
  }

    if (!user || !initialMessage && initialMessage.trim()) return,
      console.error('Error fetching conversations:', error)
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
    if (!user |!initialMessage.trim()) return


    try {
      // Check if conversation already exists
      const { data: existingConversations, error: fetchError } = await supabase
        .from('conversations')
        .select('id')

        .or(`and(user_one_id && user_one_id.eq.${user && user.id},user_two_id && user_two_id.eq.${recipientId}),and(user_one_id && user_one_id.eq.${recipientId},user_two_id && user_two_id.eq.${user && user.id})`);
        .or(`and(user_one_id.eq.${user.id},user_two_id.eq.${recipientId}),and(user_one_id.eq.${recipientId},user_two_id.eq.${user.id})`);


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


            user_one_id: user && user.id;
            user_one_name: user && user.displayName || user && user.email;
            user_one_avatar: user && user.avatarUrl || ('avatar_url' in user ? user && user.avatar_url : undefined);
            user_one_type: user && user.userType;

            user_one_id: user.id;
            user_one_name: user.displayName |user.email;
            user_one_avatar: user.avatarUrl |('avatar_url' in user ? user.avatar_url : undefined);
            user_one_type: user.userType;


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

        
        conversationId = newConversation && newConversation.id


        conversationId = newConversation && newConversation.id

      }




import { UserProfile, UserDetails } from '@/types/auth',;
import { supabase } from '@/integrations/supabase/client',;
import { Conversation, ConversationContextData } from '@/types/messaging',;
import { toast } from '@/hooks/use-toast',;
// Allow either UserProfile or UserDetails;
type UserWithProfile = UserProfile | UserDetails | null,;
/**;
 * Hook to handle conversation operations;
 */;
export function useConversations(;
  user: UserWithProfile,;
  setConversations: (conversations: Conversation[]) => void,;
  setUnreadCount: (count: number) => void,;
  setIsLoading: (loading: boolean) => void;
) {;
  /**;
   * Fetch conversations for the current user;
   */;
  const fetchConversations = async () => {;
    if (!user) return,;
    setIsLoading(true),;
    try {;
      // Fetch conversations from the database;
      const { data, error } = await supabase;
        .from('conversations');
        .select('*');
        .or(`user_one_id.eq.${user.id},user_two_id.eq.${user.id}`),;
      if (error) throw error,;
      // Format conversations;
      const formattedConversations: Conversation[] = data.map(conv => {;
        const isUserOne = conv.user_one_id === user.id,;
        const otherUserId = isUserOne ? conv.user_two_id : conv.user_one_id,;
        return {;
          id: conv.id,;
          user_id: otherUserId,;
          other_user: {;
            id: otherUserId,;
            name: isUserOne ? conv.user_two_name : conv.user_one_name,;
            avatar_url: isUserOne ? conv.user_two_avatar : conv.user_one_avatar,;
            user_type: isUserOne ? conv.user_two_type : conv.user_one_type;
          },;
          name: isUserOne ? conv.user_two_name : conv.user_one_name,;
          avatar_url: isUserOne ? conv.user_two_avatar : conv.user_one_avatar,;
          last_message: conv.last_message ? {;
            content: conv.last_message,;
            created_at: conv.last_message_time;
          } : undefined,;
          updated_at: conv.updated_at || conv.created_at,;
          unread_count: conv.unread_count || 0,;
          context_type: conv.context_type,;
          context_id: conv.context_id,;
          context_data: conv.context_data;
        }
      }),;
      setConversations(formattedConversations),;
      // Calculate total unread count;
      const totalUnread = formattedConversations.reduce(;
        (total, conv) => total + (conv.unread_count || 0),;
        0;
      ),;
      setUnreadCount(totalUnread);
    } catch (error) {;
      console.error('Error fetching conversations:', error);
    } finally {;
      setIsLoading(false);
    }
  },;
  /**;
   * Create a new conversation and send initial message;
   */;
  const createConversation = async (;
    recipientId: string,;
    initialMessage: string,;
    contextType: 'job' | 'talent' | 'general' = 'general',;
    contextId?: string,;
    contextData?: ConversationContextData;
  ) => {;
    if (!user || !initialMessage.trim()) return,;
    try {;
      // Check if conversation already exists;
      const { data: existingConversations, error: fetchError } = await supabase;
        .from('conversations');
        .select('id');
        .or(`and(user_one_id.eq.${user.id},user_two_id.eq.${recipientId}),and(user_one_id.eq.${recipientId},user_two_id.eq.${user.id})`),;
      if (fetchError) throw fetchError,;
      let conversationId,;
      if (existingConversations && existingConversations.length > 0) {;
        // Use existing conversation;
        conversationId = existingConversations[0].id,;
        // Update context if provided;
        if (contextType || contextId || contextData) {;
          await supabase;
            .from('conversations');
            .update({;
              context_type: contextType,;
              context_id: contextId,;
              context_data: contextData,;
              updated_at: new Date().toISOString();
            });
            .eq('id', conversationId);
        }
      } else {;
        // Get recipient information;
        const { data: recipientData, error: recipientError } = await supabase;
          .from('profiles');
          .select('display_name, avatar_url, user_type');
          .eq('id', recipientId);
          .single(),;
        if (recipientError) throw recipientError,;
        // Create a new conversation;
        const { data: newConversation, error: createError } = await supabase;
          .from('conversations');
          .insert({;
            user_one_id: user.id,;
            user_one_name: user.displayName || user.email,;
            user_one_avatar: user.avatarUrl || ('avatar_url' in user ? user.avatar_url : undefined),;
            user_one_type: user.userType,;
            user_two_id: recipientId,;
            user_two_name: recipientData?.display_name || 'User',;
            user_two_avatar: recipientData?.avatar_url,;
            user_two_type: recipientData?.user_type,;
            created_at: new Date().toISOString(),;
            updated_at: new Date().toISOString(),;
            last_message: initialMessage,;
            last_message_time: new Date().toISOString(),;
            context_type: contextType,;
            context_id: contextId,;
            context_data: contextData;
          });
          .select('id');
          .single(),;
        if (createError) throw createError,;
        conversationId = newConversation.id;

      }
      
      }
      


      // Send the initial message
      await supabase
        .from('messages')
        .insert({

          conversation_id: conversationId;
          sender_id: user.id;
          recipient_id: recipientId;
          content: initialMessage;
          created_at: new Date().toISOString()
          read: false
        });
      // Update conversations list
      await fetchConversations();

          conversation_id: conversationId,
          sender_id: user.id,
          recipient_id: recipientId,
          content: initialMessage,
          created_at: new Date().toISOString(),
          read: false
        }),
      
      // Update conversations list
      await fetchConversations(),
      


