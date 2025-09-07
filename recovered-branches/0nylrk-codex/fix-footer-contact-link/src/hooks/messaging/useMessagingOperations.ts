

pr-12325
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
import {UserProfile, UserDetails} from '@/types/auth';
import {Message, Conversation, ConversationContextData} from '@/types/messaging';
import {useConversationState} from './useConversationState';
import {useConversations} from './useConversations';
import {useMessages} from './useMessages';

// Allow either UserProfile or UserDetails

type UserWithProfile = UserProfile | UserDetails | null;
/**
 * Hook that combines all messaging operations
import {UserProfile, UserDetails} from '@/types / auth';
import {Message, Conversation, ConversationContextData} from '@/types / messaging';
import {useConversationState} from './useConversationState';
import {use_conversations} from './use_conversations';
import {use_messages} from './use_messages';
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

*/
export function useMessagingOperations(user: UserWithProfile) {
  // State management
  const {;
    messages;
    setMessages;
    activeMessages;
    setActiveMessages;
    conversations;
    setConversations;
    unreadCount;
    setUnreadCount;
    activeConversation;
    setActiveConversation;
    isLoading
    setIsLoading
  } = useConversationState();
  // Conversations management
  const {
    fetchConversations;
    createConversation
  } = useConversations(
    user;
    setConversations;
    setUnreadCount;
    setIsLoading
  );
  // Messages management
  const {
    loadMessages;
    sendMessage;
    markAsRead
  } = useMessages(
    user;
    activeConversation;
    activeMessages;
    setActiveMessages;
    conversations;
    setConversations;
    setUnreadCount;
    setIsLoading;
    fetchConversations
  );
  return {
    // State
    messages;
    activeMessages;
    setActiveMessages;
    conversations;
    setConversations;
    unreadCount;
    setUnreadCount;
    activeConversation;
    setActiveConversation;
    isLoading;
    // Operations
    sendMessage;
    createConversation;
    markAsRead;
    fetchConversations;

    loadMessages
import { UserProfile, UserDetails } from '@/types/auth',;
import { Message, Conversation, ConversationContextData } from '@/types/messaging',;
import { useConversationState } from './useConversationState',;
import { useConversations } from './useConversations',;
import { useMessages } from './useMessages',;
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
    set_conversations;
    setUnreadCount;

)
    setIsLoading);
  // Messages management;

setIsLoading);
;
  // Messages management;
  const {
  // TODO: Implement
    load_messages;
    send_message;
    markAsRead;
  } = use_messages (
    user;
    active_conversation;
    active_messages;
    setActiveMessages;
    conversations;
    set_conversations;
    setUnreadCount;
    setIsLoading;

    fetch_conversations);

fetch_conversations);
;
  return {
  // TODO: Implement
    // State;
    messages;
    active_messages;
    setActiveMessages;
    conversations;
    set_conversations;
    unread_count;
    setUnreadCount;
    active_conversation;
    setActiveConversation;

    is_loading;
    // Operations;

  }
}
fetch_conversations;
    load_messages;
  }
}

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
  }
}
  }
}
pr-12325
