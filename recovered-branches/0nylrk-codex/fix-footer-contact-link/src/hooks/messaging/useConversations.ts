
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import {UserProfile, UserDetails} from '@/types/auth';
import {supabase} from '@/integrations/supabase/client';
import {Conversation, ConversationContextData} from '@/types/messaging';
import {toast} from '@/hooks/use-toast';
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Allow either UserProfile or UserDetails

type UserWithProfile = UserProfile | UserDetails | null;
/**
 * Hook to handle conversation operations
 */
        .or(`user_one_id && user_one_id.eq.${user && user.id},user_two_id && user_two_id.eq.${user && user.id}`);
        

      if (error) throw error;
      // Format conversations

      const formattedConversations: Conversation[] = data && data.map(conv => {
        const isUserOne = conv && conv.user_one_id === user && user.id;
        const otherUserId = isUserOne ? conv && conv.user_two_id : conv && conv.user_one_id;
        

=======
=======
            user_one_id: user && user.id;
            user_one_name: user && user.displayName || user && user.email;
            user_one_avatar: user && user.avatarUrl || ('avatar_url' in user ? user && user.avatar_url : undefined);
            user_one_type: user && user.userType;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
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



=======import { UserProfile, UserDetails } from '@/types/auth',;
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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      }
      >>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

      }
      
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      // Send the initial message
      await supabase
        .from('messages')
        .insert({
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======          conversation_id: conversationId,
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

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        title: "Failed to create conversation",
        description: "Please try again later",
        variant: "destructive"
      })
  return {
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


        title: "Failed to create conversation",
        description: "Please try again later",
        variant: "destructive"
      })
=======

    fetchConversations;
    createConversation}
=======


    fetchConversations;

    createConversation}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    fetchConversations;

    createConversation}
}
=======}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
