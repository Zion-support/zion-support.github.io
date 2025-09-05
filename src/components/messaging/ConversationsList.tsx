
import React, { useMemo } from 'react',;
import { User } from 'lucide-react';
import { Conversation } from '@/types/messaging',;
import { ConversationItem } from './ConversationItem',;
import { FixedSizeList as List, ListChildComponentProps } from 'react-window',;
;
interface ConversationsListProps {;
  conversations:Conversation[],;
  activeConversation:Conversation | null,;
  setActiveConversation:(conversation:Conversation) => void,;
  markAsRead:(conversationId:string) => Promise<void>;
}
<<<<<<< HEAD
;
export function ConversationsList({;
  conversations,;
  activeConversation,;
  setActiveConversation,;
  markAsRead;
} ConversationsListProps) {;
  const itemSize = 80,;
;
  const listHeight = useMemo(() => {;
    return Math.min(conversations.length * itemSize, 600),;
  }, [conversations.length]),;
;
  const Row = ({ index, style } ListChildComponentProps) => {;
    const conversation = conversations[index],;
    ;
    if (!conversation) {;
      return <div style={style} />,;
    }
    ;
    return (;
      <div style={style}>;
        <ConversationItem;
          conversation={conversation}
          isActive={activeConversation?.id === conversation.id}
          onClick={() => {;
            setActiveConversation(conversation),;
            markAsRead(conversation.id),;
          }}
        />;
      </div>;
    ),;
  },;
;
  return (;
    <div className="w-full md:w-80 border-r border-zion-purple/20 overflow-y-auto">;
      <div className="p-3 border-b border-zion-purple/20">;
        <h3 className="font-medium text-white">Conversations</h3>;
      </div>;
;
      {conversations.length === 0 ? (;
        <div className="p-8 text-center text-zion-slate">;
          <User className="h-10 w-10 mx-auto mb-2 text-zion-purple/40" />;
          <p>No conversations yet</p>;
          <p className="text-sm mt-1">;
            Start a conversation from a job or talent profile.;
          </p>;
        </div>;
      ) :(;
        <List;
          height={listHeight}
          itemCount={conversations.length}
          itemSize={itemSize}
          width="100%";
        >;
          {Row}
        </List>;
      )}
    </div>;
  ),;
=======

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
    if (!conversation) {
      return <div style={style} />
    }
    
    return (_<div style={_style}>
        <ConversationItem
          conversation={conversation}
          isActive={activeConversation?.id === conversation.id}
          onClick={() => {
            setActiveConversation(conversation),
            markAsRead(conversation.id)
          }}        />
      </div>
    )
  },

  return (
    <div className=&quot;w-full md:w-80 border-r border-zion-purple/20 overflow-y-auto&quot;>
      <div className=&quot;p-3 border-b border-zion-purple/20&quot;>
        <h3 className=&quot;font-medium text-white&quot;>Conversations</h3>
      </div>

      {conversations.length === 0 ? (
        <div className=&quot;p-8 text-center text-zion-slate&quot;>
          <User className=&quot;h-10 w-10 mx-auto mb-2 text-zion-purple/40&quot; />          <p>No conversations yet</p>
          <p className=&quot;text-sm mt-1&quot;>
            Start a conversation from a job or talent profile.
          </p>
        </div>
      ) : (
        <List
          height={listHeight}
          itemCount={conversations.length}
          itemSize={itemSize}
          width=&quot;100%&quot;        >
          {_Row}
        </List>
      )}
    </div>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
