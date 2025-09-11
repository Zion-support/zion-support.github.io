
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import {UserProfile, UserDetails} from '@/types/auth';
import {Message, Conversation, ConversationContextData} from '@/types/messaging';
import {useConversationState} from './useConversationState';
import {useConversations} from './useConversations';
import {useMessages} from './useMessages';
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// Allow either UserProfile or UserDetails

type UserWithProfile = UserProfile | UserDetails | null;
/**
 * Hook that combines all messaging operations
    loadMessages
import { UserProfile, UserDetails } from '@/types/auth',;
import { Message, Conversation, ConversationContextData } from '@/types/messaging',;
import { useConversationState } from './useConversationState',;
import { useConversations } from './useConversations',;
import { useMessages } from './useMessages',;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  const {
    fetch_conversations;
    create_conversation;
  } = use_conversations (
    user;
    set_conversations;
    setUnreadCount;
    setIsLoading);
;
  // Messages management;

