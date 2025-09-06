import React, { useMemo } from 'react';
import { User } from 'lucide-react';
import { Conversation } from '@/types/messaging';
import { ConversationItem } from './ConversationItem';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';

interface ConversationsListProps {
  conversations: Conversation[];
  activeConversation: Conversation | null;
  onConversationSelect: (conversation: Conversation) => void;
  loading?: boolean;
}

export const ConversationsList: React.FC<ConversationsListProps> = ({
  conversations,
  activeConversation,
  onConversationSelect,
  loading = false,
}) => {
  const sortedConversations = useMemo(() => {
    return [...conversations].sort((a, b) => {
      const aTime = new Date(a.lastMessage?.timestamp || a.createdAt).getTime();
      const bTime = new Date(b.lastMessage?.timestamp || b.createdAt).getTime();
      return bTime - aTime;
    });
  }, [conversations]);

  const ConversationRow = ({ index, style }: ListChildComponentProps) => {
    const conversation = sortedConversations[index];
    return (
      <div style={style}>
        <ConversationItem
          conversation={conversation}
          isActive={activeConversation?.id === conversation.id}
          onClick={() => onConversationSelect(conversation)}
        />
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-2 text-sm text-gray-500">Loading conversations...</p>
        </div>
      </div>
    );
  }

  if (conversations.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <User className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No conversations</h3>
          <p className="mt-1 text-sm text-gray-500">
            Start a conversation to see it here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full">
      <List
        height={600}
        itemCount={sortedConversations.length}
        itemSize={80}
        width="100%"
      >
        {ConversationRow}
      </List>
    </div>
  );
};