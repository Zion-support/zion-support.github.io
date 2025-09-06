
<<<<<<< HEAD
import React, { useMemo } from 'react';
import { User } from 'lucide-react'
import { Conversation  } from '@/types/messaging';
import { ConversationItem  } from './ConversationItem';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
interface ConversationsListProps {
  conversations: Conversation[];
  activeConversation: Conversation | null;
  setActiveConversation: (conversation: Conversation) => void;
  markAsRead: (conversationId: string) => Promise<void>
export function ConversationsList({

  conversations
  activeConversation
  setActiveConversation
  markAsRead
}: ConversationsListProps) {
  const itemSize = 80
  const listHeight = useMemo(() => {
    return Math.min(conversations.length * itemSize, 600)
  }, [conversations.length])
  const Row = ({ index, style }: ListChildComponentProps) => {
    const conversation = conversations[index]
    if (!conversation) {
      return <div style={style} />
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
    return (
      <div style={style}>;
        <ConversationItem
          conversation={conversation}
<<<<<<< HEAD
          isActive={activeConversation?.id === conversation.id}
          onClick={() => {
            setActiveConversation(conversation)
            markAsRead(conversation.id) }}
        />
      </div>
    )
  }

  return (
    <div className='w-full md:w-80 border-r border-zion-purple/20 overflow-y-auto'>
      <div className='p-3 border-b border-zion-purple/20'>
        <h3 className='font-medium text-white'>Conversations</h3>
      </div>
      {conversations.length === 0 ? (
        <div className='p-8 text-center text-zion-slate'>
          <User className='h-10 w-10 mx-auto mb-2 text-zion-purple/40' />
          <p>No conversations yet</p>
          <p className='text-sm mt-1'>
            Start a conversation from a job or talent profile.
          </p>
        </div>
      ) : (
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <List
          height={listHeight}
          itemCount={conversations && conversations.length}
          itemSize={itemSize}
          width='100%'>;
          {Row}
        </List>;
      )}
<<<<<<< HEAD
    </div>
  )
}
=======
    </div>;
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
