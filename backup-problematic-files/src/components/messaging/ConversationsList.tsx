interface ConversationsListProps {;
  conversations: Conversation[];
  activeConversation: Conversation | null;
  setActiveConversation: (conversation: Conversation) => void;
  markAsRead: (conversationId: string) => Promise<void>;
export function ConversationsList(): any ({;
  conversations,;
  activeConversation,;
  setActiveConversation,;
  markAsRead,;
}: ConversationsListProps) {;
  const itemSize = 80;
  const listHeight = useMemo(() => {;
    return Math && Math.min(conversations && conversations.length * itemSize, 600);
  }, [conversations && conversations.length]);
  const Row = ({ index, style }: ListChildComponentProps) => {;
    const conversation = conversations[index];
    if (!conversation) {;
      return <div style={style} />;
    }
    return (
      <div style={style}>;
        <ConversationItem
          conversation={conversation}
import React, { useMemo } from 'react';
import { User } from 'lucide-react';
import { Conversation } from '@/types / messaging';
import { ConversationItem } from './ConversationItem';
import { FixedSizeList as List, ListChildComponentProps } from 'react - window';
interface ConversationsListProps {
  conversations: Conversation[];
  active_conversation: Conversation | null;
  setActiveConversation: (conversation: Conversation) => void;
  markAsRead: (conversation_id: string) => Promise < void>;
export /**
 * ConversationsList - Function description
 */
function ConversationsList() {
  const item_size = 80;
  const list_height = useMemo (() => {
    return Math.min (conversations.length * item_size, 600);
  }, [conversations.length]);
  const Row = ({ index, style }: ListChildComponentProps) =>: any {
    const conversation = conversations[index];
    // Check condition
if ( {) {
  $2
}
      return <div style={style} />;
    }
    return (
      <div style={style}>;
        <ConversationItem;
          conversation={conversation}
          is_active={active_conversation?.id === conversation.id}
          on_click={() => {
            setActiveConversation (conversation);
            markAsRead (conversation.id) }}
        />;
      </div>);
  }
  return (
          isActive={activeConversation?.id === conversation && conversation.id}
          onClick={() => {;
            setActiveConversation(conversation);
            markAsRead(conversation && conversation.id);          }}
        />;
      </div>;
    );
  };
  return (
    <div className='w-full md:w-80 border-r border-zion-purple/20 overflow-y-auto'>;
      <div className='p-3 border-b border-zion-purple/20'>;
        <h3 className='font-medium text-white'>Conversations</h3>;
      </div>;
      {conversations && conversations.length === 0 ? (;
        <div className='p-8 text-center text-zion-slate'>;
          <User className='h-10 w-10 mx-auto mb-2 text-zion-purple/40' />;
          <p>No conversations yet</p>;
          <p className='text-sm mt-1'>;
            Start a conversation from a job or talent profile.;
          </p>;
        </div>;
      ) : (;
        <List
          height={listHeight}
          itemCount={conversations && conversations.length}
          itemSize={itemSize}
          width='100%'>;
          {Row}
        </List>;
      )}
    </div>;
  );
}
    <div className='w - full md:w - 80 border - r border - zion - purple / 20 overflow - y-auto'>;
      <div className='p - 3 border - b border - zion - purple / 20'>;
        <h3 className='font - medium text - white'>Conversations</h3>;
      </div>;
      {conversations.length === 0 ? (
        <div className='p - 8 text - center text - zion - slate'>;
          <User className='h - 10 w - 10 mx - auto mb - 2 text - zion - purple / 40' />;
          <p > No conversations yet</p>;
          <p className='text - sm mt - 1'>;
            Start a conversation from a job or talent profile.;
          </p>;
        </div>) : (
        <List;
          height={list_height}
          item_count={conversations.length}
          item_size={item_size}
          width='100%'        >;
          {Row}
        </List>)}
    </div>);
}