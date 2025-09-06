
import React from 'react';

import { User  } from 'lucide-react';
import { Conversation  } from '@/types/messaging';
import { ConversationItem } from './ConversationItem';

interface ConversationsListProps {
  conversations: Conversation[];
  activeConversation: Conversation | null;
  setActiveConversation: (conversation: Conversation) => void;
  markAsRead: (conversationId: string) => Promise<void>
}

export function ConversationsList({ 
  conversations;

  activeConversation;
  setActiveConversation;
  markAsRead 
}: ConversationsListProps) {
  return (
    <div className;

                markAsRead(conversation.id)
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
