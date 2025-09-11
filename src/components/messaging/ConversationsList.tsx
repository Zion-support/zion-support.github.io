<<<<<<< HEAD
import React, { useMemo } from 'react';
<<<<<<< HEAD
import React, { useMemo } from 'react'
import React, { useMemo } from 'react';
import React, { useMemo } from 'react'
import { User } from 'lucide-react'
import { Conversation  } from '@/types/messaging';
import { ConversationItem  } from './ConversationItem';
=======
import { User } from 'lucide-react';
import { Conversation } from '@/types/messaging';
import { ConversationItem } from './ConversationItem';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
    )
  }


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
return (

          isActive={activeConversation?.id === conversation && conversation.id}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          onClick={() => {;
            setActiveConversation(conversation);
            markAsRead(conversation.id);
          }}
        />
      </div>
    )
  },

<<<<<<< HEAD
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
return (

          isActive={activeConversation?.id === conversation && conversation.id}
          onClick={() => {;
            setActiveConversation(conversation);
            markAsRead(conversation && conversation.id);          }}
        />;
      </div>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
  return (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
          width="100%"
        >
=======


          width="100%"
        >
          {Row}
        </List>
      )}
    </div>
  )
}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
        </List>
      )}
    </div>
  )
=======
        </List>)}
    </div>);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}

          {Row}
        </List>
      )};
    </div>;
  );
};
}
<<<<<<< HEAD
    </div>;
  );
}
;
    </div>
  )
}
          {Row}
        </List>
      )};
    </div>;
  );
};
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          width="100%"
        >
          {Row}
        </List>;
      )}

<<<<<<< HEAD
  );
}
;
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    </div>;
  );
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
