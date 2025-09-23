
<<<<<<< HEAD
import React, { useMemo } from 'react',
import { User } from 'lucide-react'
import { Conversation } from '@/types/messaging',
import { ConversationItem } from './ConversationItem',
import { FixedSizeList as List, ListChildComponentProps } from 'react-window',

interface ConversationsListProps {
  conversations: Conversation[],
  activeConversation: Conversation | null,
  setActiveConversation: (conversation: Conversation) => void,
  markAsRead: (conversationId: string) => Promise<void>
=======
import React, { useMemo } from 'react';
import { User } from 'lucide-react'
import { Conversation } from '@/types/messaging';
import { ConversationItem } from './ConversationItem';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';

interface ConversationsListProps {
  conversations: Conversation[];
  activeConversation: Conversation | null;
  setActiveConversation: (conversation: Conversation) => void;
  markAsRead: (conversationId: string) => Promise<void>;
>>>>>>> origin/auto/autonomy-17186719616
}

export function ConversationsList({
  conversations,
  activeConversation,
  setActiveConversation,
  markAsRead
}: ConversationsListProps) {
<<<<<<< HEAD
  const itemSize = 80,

  const listHeight = useMemo(() => {
    return Math.min(conversations.length * itemSize, 600),
  }, [conversations.length]),

  const Row = ({ index, style }: ListChildComponentProps) => {
    const conversation = conversations[index],
    
    if (!conversation) {
      return <div style={style} />,
=======
  const itemSize = 80;

  const listHeight = useMemo(() => {
    return Math.min(conversations.length * itemSize, 600);
  }, [conversations.length]);

  const Row = ({ index, style }: ListChildComponentProps) => {
    const conversation = conversations[index];
    
    if (!conversation) {
      return <div style={style} />;
>>>>>>> origin/auto/autonomy-17186719616
    }
    
    return (
      <div style={style}>
        <ConversationItem
          conversation={conversation}
          isActive={activeConversation?.id === conversation.id}
          onClick={() => {
<<<<<<< HEAD
            setActiveConversation(conversation),
            markAsRead(conversation.id),
          }}
        />
      </div>
    ),
  },
=======
            setActiveConversation(conversation);
            markAsRead(conversation.id);
          }}
        />
      </div>
    );
  };
>>>>>>> origin/auto/autonomy-17186719616

  return (
    <div className="w-full md:w-80 border-r border-zion-purple/20 overflow-y-auto">
      <div className="p-3 border-b border-zion-purple/20">
        <h3 className="font-medium text-white">Conversations</h3>
      </div>

<<<<<<< HEAD



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
=======
      {conversations.length === 0 ? (
        <div className="p-8 text-center text-zion-slate">
          <User className="h-10 w-10 mx-auto mb-2 text-zion-purple/40" />
          <p>No conversations yet</p>
          <p className="text-sm mt-1">
            Start a conversation from a job or talent profile.
          </p>
        </div>
      ) : (
        <List
          height={listHeight}
          itemCount={conversations.length}
>>>>>>> origin/auto/autonomy-17186719616
          itemSize={itemSize}
          width="100%"
        >
          {Row}
<<<<<<< HEAD
        </List>;
      )}
    </div>
  ),
=======
        </List>
      )}
    </div>
  );
>>>>>>> origin/auto/autonomy-17186719616
}
