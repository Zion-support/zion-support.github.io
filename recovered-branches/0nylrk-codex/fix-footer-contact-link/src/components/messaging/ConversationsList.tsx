
import React from 'react';
import { User } from 'lucide-react';
import { Conversation } from '@/types/messaging';
import { ConversationItem } from './ConversationItem';

interface ConversationsListProps {
  conversations: Conversation[];
  activeConversation: Conversation | null;
  setActiveConversation: (conversation: Conversation) => void;
  markAsRead: (conversationId: string) => Promise<void>;
}

export function ConversationsList({ 
  conversations, 
  activeConversation, 
  setActiveConversation, 
  markAsRead 
}: ConversationsListProps) {
  return (
    <div className=&quot;w-full md:w-80 border-r border-zion-purple/20 overflow-y-auto&quot;>
      <div className=&quot;p-3 border-b border-zion-purple/20&quot;>
        <h3 className=&quot;font-medium text-white&quot;>Conversations</h3>
      </div>
      
      {conversations.length === 0 ? (
        <div className=&quot;p-8 text-center text-zion-slate&quot;>
          <User className=&quot;h-10 w-10 mx-auto mb-2 text-zion-purple/40&quot; />
          <p>No conversations yet</p>
          <p className=&quot;text-sm mt-1&quot;>
            Start a conversation from a job or talent profile.
          </p>
        </div>
      ) : (
        <div>
          {conversations.map((conversation) => (
            <ConversationItem
              key={conversation.id}
              conversation={conversation}
              isActive={activeConversation?.id === conversation.id}
              onClick={() => {
                setActiveConversation(conversation);
                markAsRead(conversation.id);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
