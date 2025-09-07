
<<<<<<< HEAD

import { useState  } from 'react';
import { Conversation, Message  } from '@/types/messaging';

/**
 * Hook to manage messaging state
 */
export function useConversationState() {

  const [messages, setMessages] = useState<Message[]>([]),
  const [activeMessages, setActiveMessages] = useState<Message[]>([]),
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [activeConversation, setActiveConversation] = useState<Conversation | null>(null),
  const [isLoading, setIsLoading] = useState(false);

=======
  const [unreadCount, setUnreadCount] = useState(0);
  const [activeConversation, setActiveConversation] = useState<Conversation | null>(null),
  const [isLoading, setIsLoading] = useState(false);
import {useState} from 'react';
import {Conversation, Message} from '@/types / messaging';
/**;
* Hook to manage messaging state;
*/;
export /**
 * useConversationState - Function description
 */
function useConversationState() {


import {useState} from 'react';
import {Conversation, Message} from '@/types/messaging';
/**
 * Hook to manage messaging state;
 */
export function useConversationState() {;
  const [messages, setMessages] = useState<Message[]>([]);

  const [activeMessages, setActiveMessages] = useState<Message[]>([]);



  const [conversations, setConversations] = useState<Conversation[]>([]);

  const [activeConversation, setActiveConversation] = useState<Conversation | null>(null),

pr-12325
</Conversation>

  const [messages, set_messages] = useState < Message[]>([]);
  const [active_messages, setActiveMessages] = useState < Message[]>([]);
  const [conversations, set_conversations] = useState < Conversation[]>([]);
  const [unread_count, setUnreadCount] = useState (0);
  const [active_conversation, setActiveConversation] = useState < Conversation | null>(null);
  const [is_loading, setIsLoading] = useState (false);
;
>>>>>>> origin/main
  return {
  // TODO: Implement
}
pr-12325
    // State;
    messages;
    set_messages;
    active_messages;
    setActiveMessages;
    conversations;
    set_conversations;

    unread_count;
    setUnreadCount;    activeConversation;
import { useState } from 'react',;
import { Conversation, Message } from '@/types/messaging',;
    setUnreadCount;

    activeConversation;'
import { useState } from 'react',;''
import { Conversation, Message } from '@/types/messaging',;'

/**;
 * Hook to manage messaging state;
 */;
export function useConversationState() {;

  const [messages, setMessages] = useState<Message[]>([]),;
  const [activeMessages, setActiveMessages] = useState<Message[]>([]),;
  const [conversations, setConversations] = useState<Conversation[]>([]),;
  const [unreadCount, setUnreadCount] = useState(0),;
  const [activeConversation, setActiveConversation] = useState<Conversation | null>(null),;
  const [isLoading, setIsLoading] = useState(false),;
  return {;
    // State;
    messages,;
    setMessages,;
    activeMessages,;
    setActiveMessages,;
    conversations,;
    setConversations,;
    unreadCount,;
    setUnreadCount,;
    activeConversation,;
    active_conversation;
    setActiveConversation;
    is_loading;
    setIsLoading}
}}
    setUnreadCount;

    activeConversation;
import { useState } from 'react',;
import { Conversation, Message } from '@/types/messaging',;
/**;
 */;
  const [messages, setMessages] = useState<Message[]>([]),;

</Message>
  const [activeMessages, setActiveMessages] = useState<Message[]>([]),;

  const [conversations, setConversations] = useState<Conversation[]>([]),;

  const [activeConversation, setActiveConversation] = useState<Conversation | null>(null),;
pr-12325
</Conversation>'

