

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

  const [messages, set_messages] = useState < Message[]>([]);
  const [active_messages, setActiveMessages] = useState < Message[]>([]);
  const [conversations, set_conversations] = useState < Conversation[]>([]);
  const [unread_count, setUnreadCount] = useState (0);
  const [active_conversation, setActiveConversation] = useState < Conversation | null>(null);
  const [is_loading, setIsLoading] = useState (false);
;
  return {
  // TODO: Implement
}
    // State;
    messages;
    set_messages;
    active_messages;
    setActiveMessages;
    conversations;
    set_conversations;
    unread_count;
    setUnreadCount;

    activeConversation;
import { useState } from 'react',;
import { Conversation, Message } from '@/types/messaging',;
/**;
 */;
  const [messages, setMessages] = useState<Message[]>([]),;

  const [activeMessages, setActiveMessages] = useState<Message[]>([]),;

  const [conversations, setConversations] = useState<Conversation[]>([]),;

  const [activeConversation, setActiveConversation] = useState<Conversation | null>(null),;
