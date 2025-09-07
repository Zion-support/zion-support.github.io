

import { UserProfile, UserDetails  } from '@/types/auth';
import { supabase  } from '@/integrations/supabase/client';
import { Message, Conversation  } from '@/types/messaging';
import { toast } from '@/hooks/use-toast';
import {UserProfile, UserDetails} from '@/types/auth';
import {supabase} from '@/integrations/supabase/client';
import {Message, Conversation} from '@/types/messaging';
import {toast} from '@/hooks/use-toast';
// Allow either UserProfile or UserDetails;
type UserWithProfile = UserProfile | UserDetails | null;
/**
 * Hook to handle message operations;
 */
export function useMessages(
  user: UserWithProfile;,
  active_conversation: Conversation | null;
  active_messages: Message[];,)
  setActiveMessages: (updater: (prev: Message[]) => Message[]) => void;,
  conversations: Conversation[];
  set_conversations: (updater: (prev: Conversation[]) => Conversation[]) => void;,
  setUnreadCount: (updater: (prev: number) => number) => void;,
  setIsLoading: (loading: boolean) => void;

      
      if (unreadMessages && unreadMessages.length > 0) {

        await markAsRead(conversationId)
      }
    } catch (error) {
      console && console.error('Error fetching messages:', error)
  fetch_conversations: () => Promise < void>) {
  /**;
  * Fetch messages for a conversation;
  */;
  const load_messages = async (conversation_id: string) => {
    // Check condition;
if (return) {
  $2;
    setIsLoading (true),
    try {
  // TODO: Implement
      const { data, error } = await supabase;
        .from ('messages');
        .select ('*');
        .eq ('conversation_id', conversation_id);
        .order ('created_at', { ascending: true });
;
      // Check condition;
if (throw error) {
      // Use updater function for setActiveMessages;
      setActiveMessages (() => data as Message[]);
      // Mark messages as read;
      const unread_messages = data.filter ()
        msg => !msg.read && msg.recipient_id === user.id);
      // Check condition;
if ( {) {
        await markAsRead (conversation_id);
      console.error ('Error fetching messages:', error);
    } finally {
  // TODO: Implement
      setIsLoading (false);

      if (unreadMessages.length > 0) {
import { UserProfile, UserDetails } from '@/types/auth',;
import { supabase } from '@/integrations/supabase/client',;
import { Message, Conversation } from '@/types/messaging',;
import { toast } from '@/hooks/use-toast',;
// Allow either UserProfile or UserDetails;
type UserWithProfile = UserProfile | UserDetails | null,;
/**;
export function useMessages(;
  user: UserWithProfile,;
  activeConversation: Conversation | null,;
  activeMessages: Message[],;)
  setActiveMessages: (updater: (prev: Message[]) => Message[]) => void,;
  conversations: Conversation[],;
  setConversations: (updater: (prev: Conversation[]) => Conversation[]) => void,;
  setUnreadCount: (updater: (prev: number) => number) => void,;
  setIsLoading: (loading: boolean) => void,;
  fetchConversations: () => Promise<void>;
</void>
  fetchConversations:() => Promise<void>;
fetchConversations: () => Promise<void>) {