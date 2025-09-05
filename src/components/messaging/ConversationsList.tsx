
import React, {_useMemo} from 'react';

interface ConversationsListProps {_conversations: Conversation[];
  activeConversation: Conversation | null;
  setActiveConversation: (_conversation: Conversation) => void;
  markAsRead: (_conversationId: string) => Promise<void>;}

export function ConversationsList(_{_conversations, _activeConversation, _setActiveConversation, _markAsRead}: ConversationsListProps) {_const _itemSize = 80;

  const _listHeight = useMemo__(() => {
    return Math.min(conversations.length * itemSize, _600);}, [conversations.length]);

  const _Row = (_{_index, _style}: ListChildComponentProps) => {_const _conversation = conversations[index];
    
    if (!conversation) {
      return <div style={style} />;
    }
    
    return (_<div style={_style}>
        <ConversationItem
          conversation={_conversation}
          isActive={_activeConversation?.id === conversation.id}
          onClick={_() => {
            setActiveConversation(conversation);
            markAsRead(conversation.id);}}
        />
      </div>
    );
  };

  return (
    <div className="w-full md:w-80 border-r border-zion-purple/20 overflow-y-auto">
      <div className="p-3 border-b border-zion-purple/20">
        <h3 className="font-medium text-white">Conversations</h3>
      </div>

      {_conversations.length === 0 ? (
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
          itemCount={_conversations.length}
          itemSize={_itemSize}
          width="100%"
        >
          {_Row}
        </List>
      )}
    </div>
  );
}
