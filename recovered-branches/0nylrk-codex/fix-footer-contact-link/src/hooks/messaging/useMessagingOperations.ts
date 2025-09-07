

<<<<<<< HEAD
=======
pr-12325
>>>>>>> origin/main
import { UserProfile, UserDetails  } from '@/types/auth';
import { Message, Conversation, ConversationContextData  } from '@/types/messaging';
import { useConversationState  } from './useConversationState';
import { useConversations  } from './useConversations';
import { useMessages } from './useMessages';// Allow either UserProfile or UserDetails

type UserWithProfile = UserProfile | UserDetails | null;
/**
 * Hook that combines all messaging operations  }
}
import { useMessages } from './useMessages';
<<<<<<< HEAD
// Allow either UserProfile or UserDetails
type UserWithProfile = any;

    loadMessages
  }
}
;
=======
import {UserProfile, UserDetails} from '@/types/auth';
import {Message, Conversation, ConversationContextData} from '@/types/messaging';
import {useConversationState} from './useConversationState';
import {useConversations} from './useConversations';
import {useMessages} from './useMessages';
// Allow either UserProfile or UserDetails;
type UserWithProfile = UserProfile | UserDetails | null;
/**
 * Hook that combines all messaging operations;
// Allow either UserProfile or UserDetails;
;
/**;
*/;
export /**
 * useMessagingOperations - Function description;
 */
    messages;
    set_messages;
    active_messages;
    setActiveMessages;
    conversations;
    set_conversations;
    unread_count;
    setUnreadCount;
    active_conversation;
    setActiveConversation;

    is_loading,
    setIsLoading;
  } = useConversationState ();
  // Conversations management;

  const {
  // TODO: Implement
}
    fetch_conversations;
    create_conversation;
  } = use_conversations (
    user;
)
    setIsLoading);
  // Messages management;

  // TODO: Implement
    load_messages;
    send_message;
    markAsRead;
  } = use_messages (
    fetch_conversations);

  return {
  // TODO: Implement
    // State;

    is_loading;
    // Operations;


import { UserProfile, UserDetails } from '@/types/auth',;
import { Message, Conversation, ConversationContextData } from '@/types/messaging',;
import { useConversationState } from './useConversationState',;
import { useConversations } from './useConversations',;
import { useMessages } from './useMessages',;
// Allow either UserProfile or UserDetails;
type UserWithProfile = UserProfile | UserDetails | null,;
/**;
export function useMessagingOperations(user:UserWithProfile) {;
// Allow either UserProfile or UserDetails;
/**;
export function useMessagingOperations(user: UserWithProfile) {;
  // State management;
  const {;
    messages,;
    setMessages,;
    activeMessages,;
    setActiveMessages,;
    conversations,;
    setConversations,;
    unreadCount,;
    setUnreadCount,;
    activeConversation,;
    setActiveConversation,;
    isLoading,;
  } = useConversationState(),;
  // Conversations management;
    fetchConversations,;
    createConversation;
  } = useConversations(;
    user,;
    setIsLoading;)
  ),;
  // Messages management;
    loadMessages,;
    sendMessage,;
  } = useMessages(;
    setIsLoading,;
    fetchConversations;)
  return {;
    // State;
    // Operations;
    createConversation,;
    fetchConversations;
    loadMessages;
pr-12325
>>>>>>> origin/main
