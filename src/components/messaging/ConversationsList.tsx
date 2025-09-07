

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
  conversations;
  activeConversation;
  setActiveConversation;
  markAsRead
}: ConversationsListProps) {
  const itemSize = null;

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
  );
origin/cursor/automate-test-improve-and-merge-code-2533
