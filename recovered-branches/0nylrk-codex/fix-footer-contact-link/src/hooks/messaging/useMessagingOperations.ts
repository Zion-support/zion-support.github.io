<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { UserProfile, UserDetails  } from '@/types/auth';
import { Message, Conversation, ConversationContextData  } from '@/types/messaging';
import { useConversationState  } from './useConversationState';
import { useConversations  } from './useConversations';
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import { useMessages } from './useMessages';
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {UserProfile, UserDetails} from '@/types/auth';
import {Message, Conversation, ConversationContextData} from '@/types/messaging';
import {useConversationState} from './useConversationState';
import {useConversations} from './useConversations';
import {useMessages} from './useMessages';
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
// Allow either UserProfile or UserDetails

// Allow either UserProfile or UserDetails;
type UserWithProfile = UserProfile | UserDetails | null;
/**
<<<<<<< HEAD

=======
 * Hook that combines all messaging operations
<<<<<<< HEAD
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
=======
=======
import {UserProfile, UserDetails} from '@/types / auth';
import {Message, Conversation, ConversationContextData} from '@/types / messaging';
import {useConversationState} from './useConversationState';
import {use_conversations} from './use_conversations';
import {use_messages} from './use_messages';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
  const {}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
  const {}
=======
    setIsLoading);
;
  // Messages management;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
  return {}
=======
    fetch_conversations);
;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
  }
}

type UserWithProfile = UserProfile | UserDetails | null;
/**
 * Hook that combines all messaging operations  }
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
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
=======
<<<<<<< HEAD
    fetch_conversations;
    load_messages;
  }
}

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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
