<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useConversations.ts


<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
import { UserProfile, UserDetails  } from '@/types/auth';
import { supabase  } from '@/integrations/supabase/client';
import { Conversation, ConversationContextData  } from '@/types/messaging';
import { toast } from '@/hooks/use-toast';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import {UserProfile, UserDetails} from '@/types/auth';
import {supabase} from '@/integrations/supabase/client';
import {Conversation, ConversationContextData} from '@/types/messaging';
import {toast} from '@/hooks/use-toast';
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// Allow either UserProfile or UserDetails

type UserWithProfile = UserProfile | UserDetails | null;
/**
 * Hook to handle conversation operations
 */
<<<<<<< HEAD
export function useConversations(
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useConversations.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useConversations.ts

        .or(`user_one_id && user_one_id.eq.${user && user.id},user_two_id && user_two_id.eq.${user && user.id}`);
        

      if (error) throw error;
      // Format conversations

      const formattedConversations: Conversation[] = data && data.map(conv => {
        const isUserOne = conv && conv.user_one_id === user && user.id;
        const otherUserId = isUserOne ? conv && conv.user_two_id : conv && conv.user_one_id;
        

=======
========
        .or(`user_one_id && user_one_id.eq.${user && user.id},user_two_id && user_two_id.eq.${user && user.id}`);
      if (error) throw error;
      // Format conversations
      const formattedConversations: Conversation[] = data && data.map(conv => {
        const isUserOne = conv && conv.user_one_id === user && user.id;
        const otherUserId = isUserOne ? conv && conv.user_two_id : conv && conv.user_one_id;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useConversations.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useConversations.ts

            avatar_url: isUserOne ? conv.user_two_avatar : conv.user_one_avatar,
            user_type: isUserOne ? conv.user_two_type : conv.user_one_type;

========
            avatar_url: isUserOne ? conv.user_two_avatar : conv.user_one_avatar,
            user_type: isUserOne ? conv.user_two_type : conv.user_one_type;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useConversations.ts
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          }
          name: isUserOne ? conv.user_two_name : conv.user_one_name;
          avatar_url: isUserOne ? conv.user_two_avatar : conv.user_one_avatar;
          last_message: conv.last_message ? {
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useConversations.ts

            content: conv.last_message,
            created_at: conv.last_message_time;

========
            content: conv.last_message,
            created_at: conv.last_message_time;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useConversations.ts
=======
            content: conv.last_message
            created_at: conv.last_message_time
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          } : undefined;
          updated_at: conv.updated_at |conv.created_at;
          unread_count: conv.unread_count |0;
          context_type: conv.context_type;
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useConversations.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useConversations.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useConversations.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useConversations.ts
=======
          context_id: conv.context_id
          context_data: conv.context_data
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        }
      });
      setConversations(formattedConversations);
      // Calculate total unread count
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useConversations.ts

      const totalUnread = formattedConversations && formattedConversations.reduce(
        (total, conv) => total + (conv && conv.unread_count || 0), 

========
      const totalUnread = formattedConversations && formattedConversations.reduce(
        (total, conv) => total + (conv && conv.unread_count || 0), 
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useConversations.ts
=======
      const totalUnread = formattedConversations.reduce(
        (total, conv) => total + (conv.unread_count |0)
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        0
      );
      setUnreadCount(totalUnread)
    } catch (error) {
<<<<<<< HEAD
      console && console.error('Error fetching conversations:', error)
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useConversations.ts

    if (!user || !initialMessage && initialMessage.trim()) return,
    

========
    if (!user || !initialMessage && initialMessage.trim()) return,
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useConversations.ts
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    try {
      // Check if conversation already exists
      const { data: existingConversations, error: fetchError } = await supabase
        .from('conversations')
        .select('id')
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useConversations.ts

        .or(`and(user_one_id && user_one_id.eq.${user && user.id},user_two_id && user_two_id.eq.${recipientId}),and(user_one_id && user_one_id.eq.${recipientId},user_two_id && user_two_id.eq.${user && user.id})`);
        

========
        .or(`and(user_one_id && user_one_id.eq.${user && user.id},user_two_id && user_two_id.eq.${recipientId}),and(user_one_id && user_one_id.eq.${recipientId},user_two_id && user_two_id.eq.${user && user.id})`);
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useConversations.ts
=======
        .or(`and(user_one_id.eq.${user.id},user_two_id.eq.${recipientId}),and(user_one_id.eq.${recipientId},user_two_id.eq.${user.id})`);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useConversations.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useConversations.ts
            user_one_id: user && user.id;
            user_one_name: user && user.displayName || user && user.email;
            user_one_avatar: user && user.avatarUrl || ('avatar_url' in user ? user && user.avatar_url : undefined);
            user_one_type: user && user.userType;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useConversations.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useConversations.ts
=======
            user_one_id: user.id;
            user_one_name: user.displayName |user.email;
            user_one_avatar: user.avatarUrl |('avatar_url' in user ? user.avatar_url : undefined);
            user_one_type: user.userType;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useConversations.ts
<<<<<<< HEAD
        conversationId = newConversation.id

=======

        
        conversationId = newConversation && newConversation.id

========
        conversationId = newConversation && newConversation.id
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useConversations.ts
      }
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
        conversationId = newConversation.id
<<<<<<< HEAD
      }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

<<<<<<< HEAD
      }

=======

=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
      
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      // Send the initial message
      await supabase
        .from('messages')
        .insert({
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
          conversation_id: conversationId;
          sender_id: user.id;
          recipient_id: recipientId;
          content: initialMessage;
          created_at: new Date().toISOString()
          read: false
        });
      // Update conversations list
      await fetchConversations();
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          conversation_id: conversationId,
          sender_id: user.id,
          recipient_id: recipientId,
          content: initialMessage,
          created_at: new Date().toISOString(),
          read: false
        }),
      
      // Update conversations list
      await fetchConversations(),
      
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      // Return the conversation ID
      return conversationId
    } catch (error) {
      console && console.error('Error creating conversation:', error);
      toast({
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      // Return the conversation ID
      return conversationId
    } catch (error) {
      console.error('Error creating conversation:', error),
      toast({
<<<<<<< HEAD
        title: "Failed to create conversation";
        description: "Please try again later"
        variant: "destructive"
      })
    }
  }
  return {
=======
        title: "Failed to create conversation",
        description: "Please try again later",
        variant: "destructive"
      })
<<<<<<< HEAD
=======
<<<<<<< HEAD
    }
  };

  return {
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
;
      // Send the initial message;
      await supabase;
        .from('messages');
        .insert({;
          conversation_id: conversationId,;
          sender_id: user.id,;
          recipient_id: recipientId,;
          content: initialMessage,;
          created_at: new Date().toISOString(),;
          read: false;
        }),;
      // Update conversations list;
      await fetchConversations(),;
      // Return the conversation ID;
      return conversationId;
    } catch (error) {;
      console.error('Error creating conversation:', error),;
      toast({;
        title: "Failed to create conversation",;
        description: "Please try again later",;
        variant: "destructive";
      });
    }
  };
  return {;
<<<<<<< HEAD
=======


        title: "Failed to create conversation",
        description: "Please try again later",
        variant: "destructive"
      })

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

    fetchConversations;
    createConversation}
;
  /**;
  * Create a new conversation and send initial message;
  */;
  const create_conversation = async (
    recipient_id: string,
    initial_message: string;
    context_type: 'job' | 'talent' | 'general' = 'general';
    context_id?: string;
    context_data?: ConversationContextData) => {
    if () return, ) {
  $2
}
    try {
      // Check if conversation already exists;
      const { data: existing_conversations, error: fetch_error } = await supabase;
        .from ('conversations');
        .select ('id');
        .or (`and (user_one_id.eq.${user.id}, user_two_id.eq.${recipient_id}), and (user_one_id.eq.${recipient_id}, user_two_id.eq.${user.id})`);
;
      // Check condition
if (throw fetch_error) {
  $2
}
      let conversation_id;
;
      // Check condition
if ( {) {
  $2
}
        // Use existing conversation;
        conversation_id = existing_conversations[0].id;
;
        // Update context if provided;
        // Check condition
if ( {) {
  $2
}
          await supabase;
            .from ('conversations');
            .update ({
              context_type: context_type;
              context_id: context_id;
              context_data: context_data,
              updated_at: new Date ().toISOString ();
            });
            .eq ('id', conversation_id);
        }
      } else {
        // Get recipient information;
        const { data: recipient_data, error: recipient_error } = await supabase;
          .from ('profiles');
          .select ('display_name, avatar_url, user_type');
          .eq ('id', recipient_id);
          .single ();
;
        // Check condition
if (throw recipient_error) {
  $2
}
        // Create a new conversation;
        const { data: new_conversation, error: create_error } = await supabase;
          .from ('conversations');
          .insert ({
            user_one_id: user.id;
            user_one_name: user.display_name || user.email;
            user_one_avatar: user.avatar_url || ('avatar_url' in user ? user.avatar_url : undefined);
            user_one_type: user.user_type;
            user_two_id: recipient_id;
            user_two_name: recipient_data?.display_name || 'User';
            user_two_avatar: recipient_data?.avatar_url;
            user_two_type: recipient_data?.user_type;
            created_at: new Date ().toISOString ();
            updated_at: new Date ().toISOString ();
            last_message: initial_message;
            last_message_time: new Date ().toISOString ();
            context_type: context_type;
            context_id: context_id,
            context_data: context_data;
          });
          .select ('id');
          .single ();
;
        // Check condition
if (throw create_error) {
  $2
}
        conversation_id = new_conversation.id;
      }
      // Send the initial message;
      await supabase;
        .from ('messages');
        .insert ({
          conversation_id: conversation_id;
          sender_id: user.id;
          recipient_id: recipient_id;
          content: initial_message;
          created_at: new Date ().toISOString (),
          read: false;
        });
;
      // Update conversations list;
      await fetch_conversations ();
;
      // Return the conversation ID;
      return conversation_id;
    } catch (error) {
      console.error ('Error creating conversation:', error);
      toast ({
        title: "Failed to create conversation";
        description: "Please try again later",
        variant: "destructive";
      });
    }
  }
;
  return {
    fetch_conversations;
    create_conversation}
}
=======

import { UserProfile, UserDetails } from '@/types/auth',;
import { supabase } from '@/integrations/supabase/client',;
import { Conversation, ConversationContextData } from '@/types/messaging',;
import { toast } from '@/hooks/use-toast',;
;
// Allow either UserProfile or UserDetails;
type UserWithProfile = UserProfile | UserDetails | null,;
;
/**;
 * Hook to handle conversation operations;
 */;
export function useConversations(;
  user:UserWithProfile,;
  setConversations:(conversations:Conversation[]) => void,;
  setUnreadCount:(count:number) => void,;
  setIsLoading:(loading:boolean) => void;
) {;
  /**;
   * Fetch conversations for the current user;
   */;
  const fetchConversations = async () => {;
    if (!user) return,;
    ;
    setIsLoading(true),;
    ;
    try {;
      // Fetch conversations from the database;
      const { data, error } = await supabase;
        .from('conversations');
        .select('*');
        .or(`user_one_id.eq.${user.id},user_two_id.eq.${user.id}`),;
        ;
      if (error) throw error,;
      ;
      // Format conversations;
      const formattedConversations:Conversation[] = data.map(conv => {;
        const isUserOne = conv.user_one_id === user.id,;
        const otherUserId = isUserOne ? conv.user_two_id :conv.user_one_id,;
        ;
        return {;
          id:conv.id,;
          user_id:otherUserId,;
          other_user:{;
            id:otherUserId,;
            name:isUserOne ? conv.user_two_name :conv.user_one_name,;
            avatar_url:isUserOne ? conv.user_two_avatar :conv.user_one_avatar,;
            user_type:isUserOne ? conv.user_two_type :conv.user_one_type;
          },;
          name:isUserOne ? conv.user_two_name :conv.user_one_name,;
          avatar_url:isUserOne ? conv.user_two_avatar :conv.user_one_avatar,;
          last_message:conv.last_message ? {;
            content:conv.last_message,;
            created_at:conv.last_message_time;
          } undefined,;
          updated_at:conv.updated_at || conv.created_at,;
          unread_count:conv.unread_count || 0,;
          context_type:conv.context_type,;
          context_id:conv.context_id,;
          context_data:conv.context_data;
        },;
      }),;
      ;
      setConversations(formattedConversations),;
      ;
      // Calculate total unread count;
      const totalUnread = formattedConversations.reduce(;
        (total, conv) => total + (conv.unread_count || 0), ;
        0;
      ),;
      setUnreadCount(totalUnread),;
    } catch (error) {;
      console.error('Error fetching conversations:', error),;
    } finally {;
      setIsLoading(false),;
    }
  },;
;
  /**;
   * Create a new conversation and send initial message;
   */;
  const createConversation = async (;
    recipientId:string, ;
    initialMessage:string,;
    contextType:'job' | 'talent' | 'general' = 'general',;
    contextId?:string,;
    contextData?:ConversationContextData;
  ) => {;
    if (!user || !initialMessage.trim()) return,;
    ;
    try {;
      // Check if conversation already exists;
      const { data:existingConversations, error:fetchError } = await supabase;
        .from('conversations');
        .select('id');
        .or(`and(user_one_id.eq.${user.id},user_two_id.eq.${recipientId}),and(user_one_id.eq.${recipientId},user_two_id.eq.${user.id})`),;
        ;
      if (fetchError) throw fetchError,;
      ;
      let conversationId,;
      ;
      if (existingConversations && existingConversations.length > 0) {;
        // Use existing conversation;
        conversationId = existingConversations[0].id,;
        ;
        // Update context if provided;
        if (contextType || contextId || contextData) {;
          await supabase;
            .from('conversations');
            .update({;
              context_type:contextType,;
              context_id:contextId,;
              context_data:contextData,;
              updated_at:new Date().toISOString();
            });
            .eq('id', conversationId),;
        }
      } else {;
        // Get recipient information;
        const { data:recipientData, error:recipientError } = await supabase;
          .from('profiles');
          .select('display_name, avatar_url, user_type');
          .eq('id', recipientId);
          .single(),;
          ;
        if (recipientError) throw recipientError,;
        ;
        // Create a new conversation;
        const { data:newConversation, error:createError } = await supabase;
          .from('conversations');
          .insert({;
            user_one_id:user.id,;
            user_one_name:user.displayName || user.email,;
            user_one_avatar:user.avatarUrl || ('avatar_url' in user ? user.avatar_url :undefined),;
            user_one_type:user.userType,;
            user_two_id:recipientId,;
            user_two_name:recipientData?.display_name || 'User',;
            user_two_avatar:recipientData?.avatar_url,;
            user_two_type:recipientData?.user_type,;
            created_at:new Date().toISOString(),;
            updated_at:new Date().toISOString(),;
            last_message:initialMessage,;
            last_message_time:new Date().toISOString(),;
            context_type:contextType,;
            context_id:contextId,;
            context_data:contextData;
          });
          .select('id');
          .single(),;
          ;
        if (createError) throw createError,;
        ;
        conversationId = newConversation.id,;
      }
      ;
      // Send the initial message;
      await supabase;
        .from('messages');
        .insert({;
          conversation_id:conversationId,;
          sender_id:user.id,;
          recipient_id:recipientId,;
          content:initialMessage,;
          created_at:new Date().toISOString(),;
          read:false;
        }),;
      ;
      // Update conversations list;
      await fetchConversations(),;
      ;
      // Return the conversation ID;
      return conversationId,;
    } catch (error) {;
      console.error('Error creating conversation:', error),;
      toast({;
        title:"Failed to create conversation",;
        description:"Please try again later",;
        variant:"destructive";
      }),;
    }
  },;
;
  return {;
    fetchConversations,;
    createConversation},;
} //Allow either UserProfile or UserDetails type UserWithProfile = UserProfile | UserDetails | null;
/** * Hook to handle conversation operations */export function useConversations (user: UserWithProfile, setConversations: (conversations: Conversation[]) => void;
setUnreadCount: (count: number) => void;
setIsLoading: (loading: boolean) => void) {
  /** * Fetch conversations for the current user */setIsLoading (true);
try {
  //Fetch conversations from the database const {
  data, error 
}= await supabase .from ('conversations') .select ('*') if (error) throw error;
//Format conversations return {
  id: conv.id, user id: otherUserId, other user: {
  id: otherUserId, name: isUserOne ? conv.user two name : conv.user one name, avatar url: isUserOne ? conv.user two avatar : conv.user one avatar, user type: isUserOne ? conv.user two type : conv.user one type 
};
name: isUserOne ? conv.user two name : conv.user one name;
avatar url: isUserOne ? conv.user two avatar : conv.user one avatar;
last message: conv.last message ? {
  content: conv.last message, created at: conv.last message time 
}: undefined;
updated at: conv.updated at || conv.created at;
unread count: conv.unread count || 0;
context type: conv.context type;
context id: conv.context id;
context data: conv.context data 
}
});
setConversations (formattedConversations);
//Calculate total unread count const totalUnread = formattedConversations.reduce ( (total, conv) => total + (conv.unread count || 0);
0 /** * Create a new conversation and send initial message */try {
  //Check if conversation already exists const {
  data: existingConversations, error: fetchError 
}= await supabase .from ('conversations') .select ('id') if (fetchError) throw fetchError;
let conversationId;
//Update context if provided if (contextType || contextId || contextData) {
  await supabase .from ('conversations') .update ({
  
}
}else {
  //Get recipient information const {
  data: recipientData, error: recipientError 
}= await supabase .from ('profiles') .select ('display name, avatar url, user type') .eq ('id', recipientId) .single ();
if (recipientError) throw recipientError;
//Create a new conversation const {
  data: newConversation, error: createError 
}= await supabase .from ('conversations') .insert ({
  user one id: user.id, user one name: user.displayName || user.email, user one avatar: user.avatarUrl || ('avatar url' in user ? user.avatar url : undefined), user one type: user.userType, user two id: recipientId, user two name: recipientData?.display name || 'User', user two avatar: recipientData?.avatar url, user two type: recipientData?.user type, created at: new Date () .toISOString (), updated at: new Date () .toISOString (), last message: initialMessage, last message time: new Date () .toISOString (), context type: contextType, context id: contextId, context data: contextData 
}) .select ('id') .single ();
if (createError) throw createError;
conversationId = newConversation.id 
}//Send the initial message await supabase .from ('messages') //Update conversations list await fetchConversations ();
// Return the conversation ID 
}
};
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    fetchConversations;

    createConversation}
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
