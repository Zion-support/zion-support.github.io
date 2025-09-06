<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useMessagingOperations.ts


<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
import { UserProfile, UserDetails  } from '@/types/auth';
import { Message, Conversation, ConversationContextData  } from '@/types/messaging';
import { useConversationState  } from './useConversationState';
import { useConversations  } from './useConversations';
import { useMessages } from './useMessages';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import {UserProfile, UserDetails} from '@/types/auth';
import {Message, Conversation, ConversationContextData} from '@/types/messaging';
import {useConversationState} from './useConversationState';
import {useConversations} from './useConversations';
import {useMessages} from './useMessages';
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// Allow either UserProfile or UserDetails

type UserWithProfile = UserProfile | UserDetails | null;
/**
 * Hook that combines all messaging operations
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { UserProfile, UserDetails } from '@/types/auth',;
import { Message, Conversation, ConversationContextData } from '@/types/messaging',;
import { useConversationState } from './useConversationState',;
import { useConversations } from './useConversations',;
import { useMessages } from './useMessages',;
<<<<<<< HEAD
=======
=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useMessagingOperations.ts
import {UserProfile, UserDetails} from '@/types / auth';
import {Message, Conversation, ConversationContextData} from '@/types / messaging';
import {useConversationState} from './useConversationState';
import {use_conversations} from './use_conversations';
import {use_messages} from './use_messages';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
// Allow either UserProfile or UserDetails;
type UserWithProfile = UserProfile | UserDetails | null;
;
/**;
* Hook that combines all messaging operations;
*/;
export /**
 * useMessagingOperations - Function description
 */
function useMessagingOperations() {
  // State management;
  const {
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useMessagingOperations.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useMessagingOperations.ts
    is_loading,
    setIsLoading;
  } = useConversationState ();
;
  // Conversations management;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useMessagingOperations.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useMessagingOperations.ts
  const {
    fetch_conversations;
    create_conversation;
  } = use_conversations (
    user;
    set_conversations;
    setUnreadCount;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useMessagingOperations.ts

    setIsLoading);
;
  // Messages management;

========
    setIsLoading);
;
  // Messages management;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useMessagingOperations.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useMessagingOperations.ts

    fetch_conversations);
;

========
    fetch_conversations);
;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useMessagingOperations.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useMessagingOperations.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useMessagingOperations.ts
    is_loading;
;
    // Operations;
    send_message;
    create_conversation;
    markAsRead;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useMessagingOperations.ts
<<<<<<< HEAD
    fetchConversations;
    loadMessages;

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
    fetch_conversations;
    load_messages;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useMessagingOperations.ts
  }
}
=======

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
=======
// Allow either UserProfile or UserDetails;
type UserWithProfile = UserProfile | UserDetails | null,;
/**;
 * Hook that combines all messaging operations;
 */;
export function useMessagingOperations(user: UserWithProfile) {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
    ;
    // Operations;
    sendMessage,;
    createConversation,;
    markAsRead,;
    fetchConversations,;
    loadMessages;
  },;
} // Allow either UserProfile or UserDetails type UserWithProfile = UserProfile | UserDetails | null;
/** * Hook that combines all messaging operations */ export function useMessagingOperations (user: UserWithProfile) {
  // State management const {
  // Conversations management const {
  fetchConversations, createConversation 
}= useConversations (user;
setConversations;
setUnreadCount;
setIsLoading);
// Messages management const {
  loadMessages, sendMessage, markAsRead 
}= useMessages (user;
activeConversation;
activeMessages;
setActiveMessages;
conversations;
setConversations;
setUnreadCount;
setIsLoading;
fetchConversations);
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
    // Operations;
    sendMessage,;
    createConversation,;
    markAsRead;
    fetchConversations;
    loadMessages;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
