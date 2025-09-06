
<<<<<<< HEAD

=======
import { useState  } from 'react';
import { Conversation, Message  } from '@/types/messaging';
/**
 * Hook to manage messaging state
 */
export function useConversationState() {
  const [messages, setMessages] = useState<Message[]>([]),
  const [activeMessages, setActiveMessages] = useState<Message[]>([]),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import {useState} from 'react';
import {Conversation, Message} from '@/types/messaging';
/**
 * Hook to manage messaging state
 */
export function useConversationState() {;
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeMessages, setActiveMessages] = useState<Message[]>([]);
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [activeConversation, setActiveConversation] = useState<Conversation | null>(null),
  const [isLoading, setIsLoading] = useState(false);
<<<<<<< HEAD
=======
import {useState} from 'react';
import {Conversation, Message} from '@/types / messaging';
/**;
* Hook to manage messaging state;
*/;
export /**
 * useConversationState - Function description
 */
function useConversationState() {
  const [messages, set_messages] = useState < Message[]>([]);
  const [active_messages, setActiveMessages] = useState < Message[]>([]);
  const [conversations, set_conversations] = useState < Conversation[]>([]);
  const [unread_count, setUnreadCount] = useState (0);
  const [active_conversation, setActiveConversation] = useState < Conversation | null>(null);
  const [is_loading, setIsLoading] = useState (false);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return {
    // State;
    messages;
    set_messages;
    active_messages;
    setActiveMessages;
    conversations;
    set_conversations;
    unread_count;
    setUnreadCount;

=======
  return {
    // State
    messages;
    setMessages;
    activeMessages;
    setActiveMessages;
    conversations;
    setConversations;
    unreadCount;
    setUnreadCount;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    activeConversation;
import { useState } from 'react',;
import { Conversation, Message } from '@/types/messaging',;
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


    setActiveConversation;
    is_loading;
    setIsLoading}
<<<<<<< HEAD
}
=======
}

import { useState } from 'react',;
import { Conversation, Message } from '@/types/messaging',;
;
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
;
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
    setActiveConversation,;
    isLoading,;
    setIsLoading},;
} /** * Hook to manage messaging state */ 
}
    setActiveConversation;
    isLoading;
    setIsLoading}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
