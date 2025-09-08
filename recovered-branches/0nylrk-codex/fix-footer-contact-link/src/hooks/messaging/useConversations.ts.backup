<<<<<<< HEAD



import {UserProfile, UserDetails} from '@/types/auth';
import {supabase} from '@/integrations/supabase/client';
import {Conversation, ConversationContextData} from '@/types/messaging';
import {toast} from '@/hooks/use-toast';



// Allow either UserProfile or UserDetails


type UserWithProfile = UserProfile | UserDetails | null;
/**
 * Hook to handle conversation operations

 */


  user: UserWithProfile;

  set_conversations: (conversations: Conversation[]) => void;
  setUnreadCount: (count: number) => void;
      if (error) throw error;


      const formattedConversations: Conversation[] = data && data.map(conv => {
        const isUserOne = conv && conv.user_one_id === user && user.id;
        const otherUserId = isUserOne ? conv && conv.user_two_id : conv && conv.user_one_id;
        


  setIsLoading: (loading: boolean) => void) {

  /**;
  * Fetch conversations for the current user;
  */;
  const fetch_conversations = async () => {}
    // Check condition;
if (return) {}
  $2;
}
    setIsLoading (true),
    try {}
      // Fetch conversations from the database;
      const { data, error } = await supabase;'
        .from ('conversations');'
        .select ('*');
        .or (`user_one_id.eq.${user.id}, user_two_id.eq.${user.id}`);
;
      // Check condition;
if (throw error) {}
  $2;
}
      // Format conversations;
      const formatted_conversations: Conversation[] = data.map (conv => {}
        const isUserOne = conv.user_one_id === user.id;
        const otherUserId = isUserOne ? conv.user_two_id : conv.user_one_id;
;


        return {

          id: conv && conv.id;
          user_id: otherUserId;
          other_user: {}
            id: otherUserId;



=======
import { UserProfile, UserDetails  } from '@/types/auth';
import { supabase  } from '@/integrations/supabase/client';
import { Conversation, ConversationContextData  } from '@/types/messaging';
import { toast } from '@/hooks/use-toast';

// Allow either UserProfile or UserDetails
type UserWithProfile = $2;
/**
 * Hook to handle conversation operations
 */
}

export function useConversations(
  user: UserWithProfile;
  setConversations: (conversations: Conversation[]) => void;
  setUnreadCount: (count: number) => void;
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
        (total, conv) => total + (conv.unread_count |0)

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

>>>>>>> origin/cursor/delete-old-data-records-6bba
          }

          name: isUserOne ? conv.user_two_name : conv.user_one_name;
          avatar_url: isUserOne ? conv.user_two_avatar : conv.user_one_avatar;

<<<<<<< HEAD
          last_message: conv.last_message ? {
=======
      const totalUnread = formattedConversations && formattedConversations.reduce(
        (total, conv) => total + (conv && conv.unread_count || 0), 
>>>>>>> origin/cursor/delete-old-data-records-6bba

        0
      ),
      setUnreadCount(totalUnread)
<<<<<<< HEAD

    } catch (error) {

=======

    } catch (error) {}
    } finally {}

>>>>>>> origin/cursor/delete-old-data-records-6bba
      setIsLoading (false);
    }
  }

<<<<<<< HEAD

    if (!user || !initialMessage && initialMessage.trim()) return,
    


=======

    
>>>>>>> origin/cursor/delete-old-data-records-6bba
    try {
      // Check if conversation already exists
      const { data: existingConversations, error: fetchError} = await supabase
        .from('conversations')
        .select('id')
<<<<<<< HEAD


        .or(`and(user_one_id && user_one_id.eq.${user && user.id},user_two_id && user_two_id.eq.${recipientId}),and(user_one_id && user_one_id.eq.${recipientId},user_two_id && user_two_id.eq.${user && user.id})`);
        


      if (fetchError) throw fetchError;
      let conversationId;
=======
        .or(`and(user_one_id.eq.${user.id},user_two_id.eq.${recipientId}),and(user_one_id.eq.${recipientId},user_two_id.eq.${user.id})`),
        
      if (fetchError) throw fetchError,
      
      let conversationId,
      
>>>>>>> origin/cursor/delete-old-data-records-6bba
      if (existingConversations && existingConversations.length > 0) {
        // Use existing conversation
        conversationId = $2;
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
<<<<<<< HEAD

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

=======
            created_at: conv.last_message_time;        }
      });
      setConversations(formattedConversations);
      // Calculate total unread count      }
      
      }
      
      }
      
      }
      // Send the initial message
      await supabase
        .from('messages')
        .insert({

          conversation_id: conversationId,
          sender_id: user.id,
          recipient_id: recipientId,
          content: initialMessage,
          created_at: new Date().toISOString(),
          read: false
        }),
      
      // Update conversations list
      await fetchConversations(),
      

      // Return the conversation ID
      return conversationId
    } catch (error) {
      console && console.error('Error creating conversation:', error);
      toast({

          read: false
        });
      // Update conversations list
      // Return the conversation ID
      return conversationId
    } catch (error) {
      console.error('Error creating conversation:', error),
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
        title: 'Failed to create conversation';
        description: 'Please try again later'
        variant: 'destructive'
      })
    }
      toast({}
            user_one_id: user && user.id;
            user_one_name: user && user.displayName || user && user.email;
            user_one_avatar: user && user.avatarUrl || ('avatar_url' in user ? user && user.avatar_url : undefined);
            user_one_type: user && user.userType;
            user_one_id: user.id;
            user_one_name: user.displayName |user.email;
            user_one_avatar: user.avatarUrl |('avatar_url' in user ? user.avatar_url : undefined);
            user_one_type: user.userType;
            user_two_id: recipientId;
>>>>>>> origin/cursor/delete-old-data-records-6bba
            user_two_name: recipientData?.display_name |'User';
            user_two_avatar: recipientData?.avatar_url;
            user_two_type: recipientData?.user_type;
            created_at: new Date().toISOString();
            updated_at: new Date().toISOString();
            last_message: initialMessage;
            last_message_time: new Date().toISOString();
            context_type: contextType;

        conversationId = newConversation && newConversation.id
      }


<<<<<<< HEAD


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

    contextType: 'job' | 'talent' | 'general' = 'general',;
    contextId?: string,;
    contextData?: ConversationContextData;
  ) => {;
    if (!user || !initialMessage.trim()) return,;
    try {;
      // Check if conversation already exists;

        .or(`and(user_one_id.eq.${user.id},user_two_id.eq.${recipientId}),and(user_one_id.eq.${recipientId},user_two_id.eq.${user.id})`),;
      if (fetchError) throw fetchError,;
      let conversationId,;
      if (existingConversations && existingConversations.length > 0) {;
        // Use existing conversation;
        conversationId = existingConversations[0].id,;
        // Update context if provided;
        if (contextType || contextId || contextData) {;

            .from('conversations');
            .update({;
              context_type: contextType,;
              context_id: contextId,;
              context_data: contextData,;
              updated_at: new Date().toISOString();

            .eq('id', conversationId);
        }
      } else {;
        // Get recipient information;

          .eq('id', recipientId);
          .single(),;
        if (recipientError) throw recipientError,;
        // Create a new conversation;

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

          .select('id');
          .single(),;
        if (createError) throw createError,;
        conversationId = newConversation.id;

=======
        conversationId = newConversation.id
      }

      }
      
      }
      
      }
>>>>>>> origin/cursor/delete-old-data-records-6bba



<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      // Send the initial message
      await supabase
        .from('messages')
        .insert({


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
          conversation_id: conversationId,
          sender_id: user.id,
          recipient_id: recipientId,
          content: initialMessage,
          created_at: new Date().toISOString(),
          read: false;
        }),
      
      // Update conversations list;
      await fetchConversations(),

<<<<<<< HEAD
      
=======

      // Return the conversation ID
      return conversationId
    } catch (error) {
      console && console.error('Error creating conversation:', error);
      toast({

      // Return the conversation ID
      return conversationId
    } catch (error) {
      console.error('Error creating conversation:', error),
>>>>>>> origin/cursor/delete-old-data-records-6bba

        title: "Failed to create conversation";
        description: "Please try again later"
        variant: "destructive"
      })
    }

  }
  return {

<<<<<<< HEAD

        title: "Failed to create conversation",
        description: "Please try again later",
        variant: "destructive"

      })


=======
        title: "Failed to create conversation",
        description: "Please try again later",
        variant: "destructive"
      });
      // Send the initial message;
      await supabase;'
>>>>>>> origin/cursor/delete-old-data-records-6bba

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

        variant: "destructive";
      });
    }
  };

        variant: "destructive"
      })

    fetchConversations;
<<<<<<< HEAD
    createConversation}

;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  /**;
  const create_conversation = async (
    recipient_id: string,

    context_data?: ConversationContextData) => {
    if () return, ) {
  // TODO: Implement
      // Check if conversation already exists;
      const { data: existing_conversations, error: fetch_error } = await supabase;
        .select ('id');`;
        .or (`and (user_one_id.eq.${user.id}, user_two_id.eq.${recipient_id}), and (user_one_id.eq.${recipient_id}, user_two_id.eq.${user.id})`);
      // Check condition;
if (throw fetch_error) {
      let conversation_id;
      // Check condition;
if ( {) {

        // Use existing conversation;
        conversation_id = existing_conversations[0].id;
        // Update context if provided;

              context_type: context_type;
              context_id: context_id;
              context_data: context_data,
              updated_at: new Date ().toISOString ();

            .eq ('id', conversation_id);
  // TODO: Implement
        // Get recipient information;
        const { data: recipient_data, error: recipient_error } = await supabase;
          .from ('profiles');
          .select ('display_name, avatar_url, user_type');
          .eq ('id', recipient_id);
          .single ();
        // Check condition;
if (throw recipient_error) {
        // Create a new conversation;
        const { data: new_conversation, error: create_error } = await supabase;
          .insert ({

          .select ('id');
        // Check condition;
if (throw create_error) {

        conversation_id = new_conversation.id;
      // Send the initial message;

          conversation_id: conversation_id;
          sender_id: user.id;
          recipient_id: recipient_id;
          content: initial_message;

          created_at: new Date ().toISOString (),
      // Update conversations list;
      await fetch_conversations ();
      // Return the conversation ID;
      return conversation_id;

        variant: "destructive";
      });
    }
  }
;

    fetch_conversations;
    create_conversation}
<<<<<<< HEAD



=======

}
}

import { UserProfile, UserDetails } from '@/types/auth',;
import { supabase } from '@/integrations/supabase/client',;
import { Conversation, ConversationContextData } from '@/types/messaging',;
import { toast } from '@/hooks/use-toast',;
;

            created_at:conv.last_message_time;
          } undefined,;
          updated_at:conv.updated_at || conv.created_at,;
          unread_count:conv.unread_count || 0,;
          context_type:conv.context_type,;
          context_id:conv.context_id,;
          context_data:conv.context_data;

    recipientId:string, ;
    initialMessage:string,;
    contextType:'job' | 'talent' | 'general' = 'general',;
    contextId?:string,;

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

}
>>>>>>> origin/cursor/delete-old-data-records-6bba
