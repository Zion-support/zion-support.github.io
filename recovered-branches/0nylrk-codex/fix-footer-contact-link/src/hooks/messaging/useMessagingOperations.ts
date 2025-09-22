
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { UserProfile, UserDetails  } from '@/types/auth';
import { Message, Conversation, ConversationContextData  } from '@/types/messaging';
import { useConversationState  } from './useConversationState';
import { useConversations  } from './useConversations';
<<<<<<< HEAD
<<<<<<< HEAD
import { useMessages } from './useMessages';
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import { useMessages } from './useMessages';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {UserProfile, UserDetails} from '@/types/auth';
import {Message, Conversation, ConversationContextData} from '@/types/messaging';
import {useConversationState} from './useConversationState';
import {useConversations} from './useConversations';
import {useMessages} from './useMessages';

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
// Allow either UserProfile or UserDetails
=======
import { UserProfile, UserDetails  } from '@/types/auth';'
import { Message, Conversation, ConversationContextData  } from '@/types/messaging';'
import { useConversationState  } from './useConversationState';'
import { useConversations  } from './useConversations';'
import { useMessages } from './useMessages';
'
import {UserProfile, UserDetails} from '@/types/auth';'
import {Message, Conversation, ConversationContextData} from '@/types/messaging';'
import {useConversationState} from './useConversationState';'
import {useConversations} from './useConversations';'
import {useMessages} from './useMessages';

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

// Allow either UserProfile or UserDetails;
type UserWithProfile = UserProfile | UserDetails | null;
/**
* Hook that combines all messaging operations
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
 */
function useMessagingOperations() {
  // State management;
  const {
// Allow either UserProfile or UserDetails;
type UserWithProfile = UserProfile | UserDetails | null;
;
/**;
* Hook that combines all messaging operations;
*/;
export /**;
 * useMessagingOperations - Function description;
 */
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    is_loading,
    setIsLoading;
  } = useConversationState ();
;
  // Conversations management;

  const {}
    fetch_conversations;
    create_conversation;
  } = use_conversations (
    user;
    set_conversations;
    setUnreadCount;

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
fetchConversations;
    loadMessages;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
import { useMessages } from './useMessages';// Allow either UserProfile or UserDetails
=======

// Allow either UserProfile or UserDetails
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import { useMessages } from './useMessages';// Allow either UserProfile or UserDetails
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

type UserWithProfile = UserProfile | UserDetails | null;
/**
 * Hook that combines all messaging operations  }
}
import { useMessages } from './useMessages';

import { UserProfile, UserDetails } from '@/types/auth',;
import { Message, Conversation, ConversationContextData } from '@/types/messaging',;
import { useConversationState } from './useConversationState',;
import { useConversations } from './useConversations',;
import { useMessages } from './useMessages',;
;
// Allow either UserProfile or UserDetails;
type UserWithProfile = UserProfile | UserDetails | null,;
;
/**;
 * Hook that combines all messaging operations;
 */;
export function useMessagingOperations(user:UserWithProfile) {;
// Allow either UserProfile or UserDetails;
type UserWithProfile = UserProfile | UserDetails | null,;
/**;
 * Hook that combines all messaging operations;
 */;
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
    setIsLoading;
  } = useConversationState(),;
  // Conversations management;
  const {;
    fetchConversations,;
    createConversation;
  } = useConversations(;
    user,;
    setConversations,;
    setUnreadCount,;
    setIsLoading;
  ),;
  // Messages management;
  const {;
    loadMessages,;
    sendMessage,;
    markAsRead;
  } = useMessages(;
    user,;
    activeConversation,;
    activeMessages,;
    setActiveMessages,;
    conversations,;
    setConversations,;
    setUnreadCount,;
    setIsLoading,;
    fetchConversations;
  ),;
  return {;
    // State;
    messages,;
    activeMessages,;
    setActiveMessages,;
    conversations,;
    setConversations,;
    unreadCount,;
    setUnreadCount,;
    activeConversation,;
    setActiveConversation,;
    isLoading,;
    // Operations;
    sendMessage,;
    createConversation,;
    markAsRead;
    fetchConversations;
    loadMessages;
  }
}
  }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
