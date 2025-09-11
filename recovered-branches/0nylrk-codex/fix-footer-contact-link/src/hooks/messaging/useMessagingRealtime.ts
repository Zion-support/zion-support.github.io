
import {useEffect} from 'react';
import {supabase} from '@/integrations / supabase / client';
import {UserProfile, UserDetails} from '@/types / auth';
import {Message, Conversation} from '@/types / messaging';
import {toast} from '@/hooks / use - toast';
// Allow either UserProfile or UserDetails;
type UserWithProfile = UserProfile | UserDetails | null;
;
export function useMessagingRealtime (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
import {useEffect} from 'react';
import {supabase} from '@/integrations/supabase/client';
import {UserProfile, UserDetails} from '@/types/auth';
import {Message, Conversation} from '@/types/messaging';
import {toast} from '@/hooks/use-toast';
// Allow either UserProfile or UserDetails


export function useMessagingRealtime(;
  user: UserWithProfile;
  active_conversation: Conversation | null;
  setActiveMessages: (updater: (prev: Message[]) => Message[]) => void;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        (payload) => {
          // Update messages if the conversation is selected
          if (activeConversation && payload && payload.new.sender_id === activeConversation && activeConversation.other_user.id) {
            setActiveMessages(prev => [...prev, payload && payload.new as Message])
type UserWithProfile = UserProfile | UserDetails | null;
export function useMessagingRealtime(
export function useMessagingRealtime(;
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
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          }
          // Update conversations
          fetchConversations();
          // Show toast notification for new message
          toast({
            title: `New message from ${payload && payload.new.sender_name || 'Someone'}`;
            description: payload && payload.new.content && content.substring(0, 50) + (payload && payload.new.content && content.length > 50 ? '...' : '')

    return () => {
      .subscribe();
    return () => {;
      supabase.removeChannel(subscription);



    }
  }, [user, active_conversation, fetch_conversations, setActiveMessages]);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
