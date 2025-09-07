
import { UserProfile, UserDetails  } from '@/types/auth';
import { Message, Conversation, ConversationContextData  } from '@/types/messaging';
import { useConversationState  } from './useConversationState';
import { useConversations  } from './useConversations';


import {UserProfile, UserDetails} from '@/types/auth';
import {Message, Conversation, ConversationContextData} from '@/types/messaging';
import {useConversationState} from './useConversationState';
import {useConversations} from './useConversations';
import {useMessages} from './useMessages';

// Allow either UserProfile or UserDetails

// Allow either UserProfile or UserDetails;
type UserWithProfile = UserProfile | UserDetails | null;
/**


// Allow either UserProfile or UserDetails;
type UserWithProfile = UserProfile | UserDetails | null;
;
/**;
* Hook that combines all messaging operations;
*/;
export /**;
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
;
  // Conversations management;

  const {}
  const {
  const {}
    fetch_conversations;
    create_conversation;
  } = use_conversations (
    user;
    set_conversations;
    setUnreadCount;

  const {}
  const {
  const {}
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

  return {}
  return {
  return {}
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
;
    // Operations;
    send_message;
    create_conversation;
    markAsRead;


  }
}

type UserWithProfile = UserProfile | UserDetails | null;
/**
 * Hook that combines all messaging operations  }

import { useMessages } from './useMessages';
// Allow either UserProfile or UserDetails
type UserWithProfile = $2;
/**
 * Hook that combines all messaging operations
 */
}

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
  } = useConversationState($2);
  // Conversations management
  const {
    fetchConversations;
    createConversation
  } = useConversations($2);
  // Messages management
    loadMessages;
    sendMessage;
    markAsRead
  } = useMessages($2);
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
  }
}

import { useMessages } from './useMessages';
