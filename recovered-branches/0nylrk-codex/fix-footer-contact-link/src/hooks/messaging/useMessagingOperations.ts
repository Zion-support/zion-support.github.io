<<<<<<< HEAD

<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { UserProfile, UserDetails  } from '@/types/auth';
import { Message, Conversation, ConversationContextData  } from '@/types/messaging';
import { useConversationState  } from './useConversationState';
import { useConversations  } from './useConversations';
import { useMessages } from './useMessages';
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {UserProfile, UserDetails} from '@/types/auth';
import {Message, Conversation, ConversationContextData} from '@/types/messaging';
import {useConversationState} from './useConversationState';
import {useConversations} from './useConversations';
import {useMessages} from './useMessages';
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
// Allow either UserProfile or UserDetails

type UserWithProfile = UserProfile | UserDetails | null;
/**
 * Hook that combines all messaging operations
<<<<<<< HEAD
<<<<<<< HEAD
=======
import {UserProfile, UserDetails} from '@/types / auth';
import {Message, Conversation, ConversationContextData} from '@/types / messaging';
import {useConversationState} from './useConversationState';
import {use_conversations} from './use_conversations';
import {use_messages} from './use_messages';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
// Allow either UserProfile or UserDetails;
type UserWithProfile = UserProfile | UserDetails | null;
;
/**;
* Hook that combines all messaging operations;
*/;
export /**
 * useMessagingOperations - Function description
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
<<<<<<< HEAD

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    is_loading,
    setIsLoading;
  } = useConversationState ();
;
  // Conversations management;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    fetch_conversations;
    create_conversation;
  } = use_conversations (
    user;
    set_conversations;
    setUnreadCount;
<<<<<<< HEAD
<<<<<<< HEAD

    setIsLoading);
;
  // Messages management;

=======
    setIsLoading);
;
  // Messages management;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const {
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
<<<<<<< HEAD

    fetch_conversations);
;

=======
    fetch_conversations);
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return {
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
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    is_loading;
;
    // Operations;
    send_message;
    create_conversation;
    markAsRead;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
}
=======
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
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
