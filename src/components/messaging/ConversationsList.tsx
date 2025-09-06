<<<<<<< HEAD

<<<<<<< HEAD
import React, { useMemo } from 'react';
=======
<<<<<<< HEAD
import React, { useMemo } from 'react'
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
    }
    return (
      <div style={style}>
        <ConversationItem
          conversation={conversation}
          isActive={activeConversation?.id === conversation.id}
          onClick={() => {
            setActiveConversation(conversation)
            markAsRead(conversation.id) }}
        />
      </div>
    )
  }
=======
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
          }}
        />
      </div>
    )
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
          width='100%'        >
<<<<<<< HEAD
=======
          width="100%"
        >
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          {Row}
        </List>
      )}
<<<<<<< HEAD
    </div>
  )
}
=======
=======
          {Row}
        </List>
      )};
    </div>;
  );
};
}
=======
          width="100%"
        >
          {Row}
        </List>;
      )}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    </div>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
