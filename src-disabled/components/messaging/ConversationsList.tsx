

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
      <div className="flex items-center justify-center h-full">"
        <div className="text-center">"
          <User className="mx-auto h-12 w-12 text-gray-400" />"
          <h3 className="mt-2 text-sm font-medium text-gray-900">No conversations</h3>"
          <p className="mt-1 text-sm text-gray-500">"
            Start a conversation to see it here.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="h-full">"
      <List
        height={600}
        itemCount={sortedConversations.length}
        itemSize={80}
        width="100%""
      >
        {ConversationRow}
      </List>
    </div>
  );
};

import React, { useMemo } from 'react',;
import { User } from 'lucide-react';
import { Conversation } from '@/types/messaging',;
import { ConversationItem } from './ConversationItem',;
import { FixedSizeList as List, ListChildComponentProps } from 'react-window',;
interface ConversationsListProps {;
  conversations: Conversation[],;
  activeConversation: Conversation | null,;
  setActiveConversation: (conversation: Conversation) => void,;
  markAsRead: (conversationId: string) => Promise<void>;
}
;
export function ConversationsList({;
  conversations,;
  activeConversation,;
  setActiveConversation,;
  markAsRead;
}: ConversationsListProps) {;
  const itemSize = 80,;
  const listHeight = useMemo(() => {;
    return Math.min(conversations.length * itemSize, 600);
  }, [conversations.length]),;
  const Row = ({ index, style }: ListChildComponentProps) => {;
    const conversation = conversations[index],;
    if (!conversation) {;
      return <div style={style} />;
    }
;
    return (;
      <div style={style}>;
        <ConversationItem;
          conversation={conversation}
          isActive={activeConversation?.id === conversation.id}
          onClick={() => {;
            setActiveConversation(conversation);
            markAsRead(conversation.id);
          }
        />
      </div>
    )
  },

  return (
    <div className="w-full md:w-80 border-r border-zion-purple/20 overflow-y-auto">
      <div className="p-3 border-b border-zion-purple/20">
        <h3 className="font-medium text-white">Conversations</h3>
      </div>

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
          itemSize={itemSize}
          width="100%"
        >
          {Row}
        </List>;
      )}
    </div>;
  );
}
;
  );
origin/cursor/automate-test-improve-and-merge-code-2533
