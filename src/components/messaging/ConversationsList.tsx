return (

<<<<<<< HEAD
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
=======
          isActive={activeConversation?.id === conversation && conversation.id}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          onClick={() => {;
            setActiveConversation(conversation);
            markAsRead(conversation.id);
          }}
        />
      </div>
    )
  },

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
          itemCount={conversations.length}
          itemSize={itemSize}
<<<<<<< HEAD
          width='100%'        >
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          width="100%"
        >
          {Row}
        </List>
      )}
    </div>
  )
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

          {Row}
        </List>
      )};
    </div>;
  );
};
}
          width="100%"
        >
          {Row}
        </List>;
      )}
<<<<<<< HEAD
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    </div>;
  );
}
;