<<<<<<< HEAD

import { UserProfile, UserDetails  } from '@/types/auth';
import { Message, Conversation, ConversationContextData  } from '@/types/messaging';
import { useConversationState  } from './useConversationState';
import { useConversations  } from './useConversations';
import { useMessages } from './useMessages';
// Allow either UserProfile or UserDetails

type UserWithProfile = UserProfile | UserDetails | null;
/**
 * Hook that combines all messaging operations
=======
import {UserProfile, UserDetails} from '@/types / auth';
import {Message, Conversation, ConversationContextData} from '@/types / messaging';
import {useConversationState} from './useConversationState';
import {use_conversations} from './use_conversations';
import {use_messages} from './use_messages';
// Allow either UserProfile or UserDetails;
type UserWithProfile = UserProfile | UserDetails | null;
;
/**;
* Hook that combines all messaging operations;
*/;
export /**
 * useMessagingOperations - Function description
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
<<<<<<< HEAD
    isLoading
    setIsLoading
  } = useConversationState();
  // Conversations management
=======
    is_loading,
    setIsLoading;
  } = useConversationState ();
;
  // Conversations management;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  const {
    fetch_conversations;
    create_conversation;
  } = use_conversations (
    user;
    set_conversations;
    setUnreadCount;
<<<<<<< HEAD
    setIsLoading
  );
  // Messages management
=======
    setIsLoading);
;
  // Messages management;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
    fetchConversations
  );
=======
    fetch_conversations);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
    isLoading;
    // Operations
    sendMessage;
    createConversation;
    markAsRead;
    fetchConversations;

    loadMessages
=======
    is_loading;
;
    // Operations;
    send_message;
    create_conversation;
    markAsRead;
    fetch_conversations;
    load_messages;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
}