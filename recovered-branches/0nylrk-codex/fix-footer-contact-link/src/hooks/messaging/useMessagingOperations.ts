import { UserProfile, UserDetails  } from '@/types/auth';
import { Message, Conversation, ConversationContextData  } from '@/types/messaging';
import { useConversationState  } from './useConversationState';
import { useConversations  } from './useConversations';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {UserProfile, UserDetails} from '@/types/auth';
import {Message, Conversation, ConversationContextData} from '@/types/messaging';
import {useConversationState} from './useConversationState';
import {useConversations} from './useConversations';
import {useMessages} from './useMessages';
<<<<<<< HEAD
=======

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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    is_loading,
    setIsLoading;
  } = useConversationState ();
;
  // Conversations management;
<<<<<<< HEAD
=======

  const {}
    fetch_conversations;
    create_conversation;
  } = use_conversations (
    user;
    set_conversations;
    setUnreadCount;
<<<<<<< HEAD
    setIsLoading);
;
  // Messages management;
=======

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
<<<<<<< HEAD
    fetch_conversations);
;
=======

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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
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
=======
>>>>>>> origin/chore/fix-lint-and-merge
}
import { useMessages } from './useMessages';