
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
}

export function ConversationsList({
  conversations,
  activeConversation,
  setActiveConversation,
  markAsRead
}: ConversationsListProps) {
  const itemSize = 80,

  const listHeight = useMemo(() => {
    return Math.min(conversations.length * itemSize, 600)
  }, [conversations.length]),

  const Row = ({ index, style }: ListChildComponentProps) => {
    const conversation = conversations[index],
=======
import React, {_useMemo} from 'react';

interface ConversationsListProps {_conversations: Conversation[];
  activeConversation: Conversation | null;
  setActiveConversation: (_conversation: Conversation) => void;
  markAsRead: (_conversationId: string) => Promise<void>;}

export function ConversationsList(_{_conversations, _activeConversation, _setActiveConversation, _markAsRead}: ConversationsListProps) {_const _itemSize = 80;

  const _listHeight = useMemo__(() => {
    return Math.min(conversations.length * itemSize, _600);}, [conversations.length]);

  const _Row = (_{_index, _style}: ListChildComponentProps) => {_const _conversation = conversations[index];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    
    if (!conversation) {
      return <div style={style} />
    }
    
    return (_<div style={_style}>
        <ConversationItem
<<<<<<< HEAD
          conversation={conversation}
          isActive={activeConversation?.id === conversation.id}
          onClick={() => {
            setActiveConversation(conversation),
            markAsRead(conversation.id)
          }}
=======
          conversation={_conversation}
          isActive={_activeConversation?.id === conversation.id}
          onClick={_() => {
            setActiveConversation(conversation);
            markAsRead(conversation.id);}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        />
      </div>
    )
  },

  return (
    <div className=&quot;w-full md:w-80 border-r border-zion-purple/20 overflow-y-auto&quot;>
      <div className=&quot;p-3 border-b border-zion-purple/20&quot;>
        <h3 className=&quot;font-medium text-white&quot;>Conversations</h3>
      </div>

<<<<<<< HEAD
      {conversations.length === 0 ? (
        <div className=&quot;p-8 text-center text-zion-slate&quot;>
          <User className=&quot;h-10 w-10 mx-auto mb-2 text-zion-purple/40&quot; />
=======
      {_conversations.length === 0 ? (
        <div className="p-8 text-center text-zion-slate">
          <User className="h-10 w-10 mx-auto mb-2 text-zion-purple/40" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <p>No conversations yet</p>
          <p className=&quot;text-sm mt-1&quot;>
            Start a conversation from a job or talent profile.
          </p>
        </div>
      ) : (
        <List
          height={listHeight}
<<<<<<< HEAD
          itemCount={conversations.length}
          itemSize={itemSize}
          width=&quot;100%&quot;
=======
          itemCount={_conversations.length}
          itemSize={_itemSize}
          width="100%"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        >
          {_Row}
        </List>
      )}
    </div>
  )
}
