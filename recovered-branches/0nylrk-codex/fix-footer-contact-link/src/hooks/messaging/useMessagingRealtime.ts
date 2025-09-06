
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useMessagingRealtime.ts

// Allow either UserProfile or UserDetails

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useMessagingRealtime.ts
import {useEffect} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {UserProfile, UserDetails} from '@/types / auth';
import {Message, Conversation} from '@/types / messaging';
import {toast} from '@/hooks / use - toast';
// Allow either UserProfile or UserDetails;
type UserWithProfile = UserProfile | UserDetails | null;
;
export function useMessagingRealtime (
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useMessagingRealtime.ts

=======

=======
<<<<<<< HEAD
import { useEffect  } from 'react';
import { supabase  } from '@/integrations/supabase/client';
import { UserProfile, UserDetails  } from '@/types/auth';
import { Message, Conversation  } from '@/types/messaging';
import { toast } from '@/hooks/use-toast';
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {UserProfile, UserDetails} from '@/types/auth';
import {Message, Conversation} from '@/types/messaging';
import {toast} from '@/hooks/use-toast';
<<<<<<< HEAD

// Allow either UserProfile or UserDetails


export function useMessagingRealtime(;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  user: UserWithProfile;
  active_conversation: Conversation | null;
  setActiveMessages: (updater: (prev: Message[]) => Message[]) => void;

========
  user: UserWithProfile;
  active_conversation: Conversation | null;
  setActiveMessages: (updater: (prev: Message[]) => Message[]) => void;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useMessagingRealtime.ts
        'postgres_changes', 
        { 
          event: 'INSERT', 
          schema: 'public', 
          table: 'messages', 
          filter: `recipient_id=eq.${user && user.id}` 
        }, 
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useMessagingRealtime.ts

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useMessagingRealtime.ts
        (payload) => {
          // Update messages if the conversation is selected
          if (activeConversation && payload && payload.new.sender_id === activeConversation && activeConversation.other_user.id) {
            setActiveMessages(prev => [...prev, payload && payload.new as Message])
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
// Allow either UserProfile or UserDetails

<<<<<<< HEAD
type UserWithProfile = UserProfile | UserDetails | null;
export function useMessagingRealtime(
=======
export function useMessagingRealtime(;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  user: UserWithProfile;
  activeConversation: Conversation | null;
  setActiveMessages: (updater: (prev: Message[]) => Message[]) => void;
  fetchConversations: () => Promise<void>
) {
  // Setup real-time subscription when user is logged in
  useEffect(() => {
    if (!user) return
    // Subscribe to new messages
    const subscription = supabase
      .channel('messages')
      .on(
        'postgres_changes'
        {
          event: 'INSERT'
          schema: 'public'
          table: 'messages'
          filter: `recipient_id=eq.${user.id}`
        }
        (payload) => {
          // Update messages if the conversation is selected
          if (activeConversation && payload.new.sender_id === activeConversation.other_user.id) {
            setActiveMessages(prev => [...prev, payload.new as Message])
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          }
          // Update conversations
          fetchConversations();
          // Show toast notification for new message
          toast({
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useMessagingRealtime.ts

            title: `New message from ${payload && payload.new.sender_name || 'Someone'}`;
            description: payload && payload.new.content && content.substring(0, 50) + (payload && payload.new.content && content.length > 50 ? '...' : '')

========
            title: `New message from ${payload && payload.new.sender_name || 'Someone'}`;
            description: payload && payload.new.content && content.substring(0, 50) + (payload && payload.new.content && content.length > 50 ? '...' : '')
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/messaging/useMessagingRealtime.ts
=======
            title: `New message from ${payload.new.sender_name |'Someone'}`;
            description: payload.new.content.substring(0, 50) + (payload.new.content.length > 50 ? '...' : '')
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          })
        }
      )
      .subscribe();
<<<<<<< HEAD
    return () => {
<<<<<<< HEAD
      supabase.removeChannel(subscription)

=======

    return () => {
      supabase.removeChannel(subscription)
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { useEffect } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { UserProfile, UserDetails } from '@/types/auth',;
import { Message, Conversation } from '@/types/messaging',;
import { toast } from '@/hooks/use-toast',;
// Allow either UserProfile or UserDetails;
type UserWithProfile = UserProfile | UserDetails | null,;
export function useMessagingRealtime(;
  user: UserWithProfile,;
  activeConversation: Conversation | null,;
  setActiveMessages: (updater: (prev: Message[]) => Message[]) => void,;
  fetchConversations: () => Promise<void>;
) {;
  // Setup real-time subscription when user is logged in;
  useEffect(() => {;
    if (!user) return,;
<<<<<<< HEAD
=======
      supabase && supabase.removeChannel(subscription)
    }
  }, [user, activeConversation, fetchConversations, setActiveMessages])
  fetch_conversations: () => Promise < void>) {
  // Setup real - time subscription when user is logged in;
  useEffect (() => {
    // Check condition
if (return, ) {
  $2
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    // Subscribe to new messages;
    const subscription = supabase;
      .channel ('messages');
      .on (
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `recipient_id = eq.${user.id}`;
        },
        (payload) => {
          // Update messages if the conversation is selected;
          // Check condition
if ( {) {
  $2
}
            setActiveMessages (prev => [...prev, payload.new as Message]);
          }
          // Update conversations;
          fetch_conversations ();
;
          // Show toast notification for new message;
          toast ({
            title: `New message from ${payload.new.sender_name || 'Someone'}`;
            description: payload.new.content.substring (0, 50) + (payload.new.content.length > 50 ? '...' : '');
          });
        }
      );

      .subscribe();
    return () => {;
      supabase.removeChannel(subscription);

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    }
  }, [user, active_conversation, fetch_conversations, setActiveMessages]);
}
=======

import { useEffect } from 'react',;
import { supabase } from '@/integrations/supabase/client',;
import { UserProfile, UserDetails } from '@/types/auth',;
import { Message, Conversation } from '@/types/messaging',;
import { toast } from '@/hooks/use-toast',;
;
// Allow either UserProfile or UserDetails;
type UserWithProfile = UserProfile | UserDetails | null,;
;
export function useMessagingRealtime(;
  user:UserWithProfile,;
  activeConversation:Conversation | null,;
  setActiveMessages:(updater:(prev:Message[]) => Message[]) => void,;
  fetchConversations:() => Promise<void>;
) {;
  // Setup real-time subscription when user is logged in;
  useEffect(() => {;
    if (!user) return,;
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    // Subscribe to new messages;
    const subscription = supabase;
      .channel('messages');
      .on(;
<<<<<<< HEAD
        'postgres_changes', ;
        { ;
          event:'INSERT', ;
          schema:'public', ;
          table:'messages', ;
          filter:`recipient_id=eq.${user.id}` ;
        }, ;
        (payload) => {;
          // Update messages if the conversation is selected;
          if (activeConversation && payload.new.sender_id === activeConversation.other_user.id) {;
            setActiveMessages(prev => [...prev, payload.new as Message]),;
          }
          ;
          // Update conversations;
          fetchConversations(),;
          ;
          // Show toast notification for new message;
          toast({;
            title:`New message from ${payload.new.sender_name || 'Someone'}`,;
            description:payload.new.content.substring(0, 50) + (payload.new.content.length > 50 ? '...' :'');
          }),;
        }
      );
      .subscribe(),;
;
    return () => {;
      supabase.removeChannel(subscription),;
    },;
  }, [user, activeConversation, fetchConversations, setActiveMessages]),;
} // Allow either UserProfile or UserDetails type UserWithProfile = UserProfile | UserDetails | null;
export function useMessagingRealtime (user: UserWithProfile, activeConversation: Conversation | null, setActiveMessages: (updater: (prev: Message[]) => Message[]) => void;
fetchConversations: () => Promise<void> // Subscribe to new messages const subscription = supabase .channel ('messages') .on ('postgres changes', {
  event: 'INSERT', schema: 'public', table: 'messages', filter: `recipient id=eq.$ {
  user.id 
}` 
}, (payload) => {
  // Update messages if the conversation is selected if (activeConversation && payload.new.sender id === activeConversation.other user.id) {
  // Update conversations fetchConversations ();
// Show toast notification for new message toast ({
  title: `New message from $ {
  payload.new.sender name || 'Someone' 
}`;
description: payload.new.content.substring (0, 50) + (payload.new.content.length > 50 ? '...' : '') 
}) 
}) .subscribe ();
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
        'postgres_changes',;
        {;
          event: 'INSERT',;
          schema: 'public',;
          table: 'messages',;
          filter: `recipient_id=eq.${user.id}`;
        },;
        (payload) => {;
          // Update messages if the conversation is selected;
          if (activeConversation && payload.new.sender_id === activeConversation.other_user.id) {;
            setActiveMessages(prev => [...prev, payload.new as Message]);
          }
;
          // Update conversations;
          fetchConversations(),;
          // Show toast notification for new message;
          toast({;
            title: `New message from ${payload.new.sender_name || 'Someone'}`;
            description: payload.new.content.substring(0, 50) + (payload.new.content.length > 50 ? '...' : '');
          });
        }
      );
      .subscribe();
    return () => {;
      supabase.removeChannel(subscription);
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
  }, [user, activeConversation, fetchConversations, setActiveMessages])
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
