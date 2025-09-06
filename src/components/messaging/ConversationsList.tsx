<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
import React, { useMemo } from 'react';
import { User } from 'lucide-react';
import { Conversation } from '@/types/messaging';
import { ConversationItem } from './ConversationItem';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
<<<<<<< HEAD

interface ConversationsListProps {
  conversations: Conversation[];
  activeConversation: Conversation | null;
  setActiveConversation: (conversation: Conversation) => void;
  markAsRead: (conversationId: string) => Promise<void>;
=======
interface ConversationsListProps {
  conversations: Conversation[],
  activeConversation: Conversation | null,
  setActiveConversation: (conversation: Conversation,) => void,
  markAsRead: (conversationId: string,) => Promise<void>
}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b

export function ConversationsList({
  conversations,
  activeConversation,
  setActiveConversation,
  markAsRead,
}: ConversationsListProps) {
  const itemSize = 80;

<<<<<<< HEAD
  const listHeight = useMemo(() => {
    return Math.min(conversations.length * itemSize, 600);
  }, [conversations.length]);

  const Row = ({ index, style }: ListChildComponentProps) => {
    const conversation = conversations[index];

=======
  const listHeight = useMemo((,) => {
    return Math.min(conversations.length * itemSize, 600)
  }, [conversations.length]),

  const Row = ({ index, style }: ListChildComponentProps,) => {
    const conversation = conversations[index],
    
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
    if (!conversation) {
      return <div style={style} />;
    }

    return (
      <div style={style}>
        <ConversationItem
<<<<<<< HEAD
          conversation={conversation}
          isActive={activeConversation?.id === conversation.id}
          onClick={() => {
            setActiveConversation(conversation);
            markAsRead(conversation.id);
=======
          conversation = {conversation,}
          isActive = {activeConversation?.id === conversation.id,}
          onClick={(,) => {
            setActiveConversation(conversation),
            markAsRead(conversation.id)
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
          }}
        />
      </div>
    );
  };

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
        <List
<<<<<<< HEAD
          height={listHeight}
          itemCount={conversations.length}
          itemSize={itemSize}
          width='100%'
=======
          height = {listHeight,}
          itemCount = {conversations.length,}
          itemSize = {itemSize,}
          width="100%"
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-b31b
        >
          {Row}
        </List>
      )}
    </div>
  );
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
