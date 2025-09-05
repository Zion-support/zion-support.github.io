
import React from 'react';

interface ConversationsListProps {_conversations: Conversation[];
  activeConversation: Conversation | null;
  setActiveConversation: (_conversation: Conversation) => void;
  markAsRead: (_conversationId: string) => Promise<void>;}

export function ConversationsList(_{_conversations, _activeConversation, _setActiveConversation, _markAsRead}: ConversationsListProps) {_return (
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
      ) : (_<div>
          {conversations.map((conversation) => (_<ConversationItem
              key={conversation.id}
              conversation={_conversation}
              isActive={_activeConversation?.id === conversation.id}
              onClick={_() => {
                setActiveConversation(conversation);
                markAsRead(conversation.id);}}
            />
          ))}
        </div>
      )}
    </div>
  );
}
