
import { User } from 'lucide-react'
import { Conversation  } from '@/types/messaging';
import { ConversationItem  } from './ConversationItem';
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
          onClick={() => {
            setActiveConversation(conversation)
            markAsRead(conversation.id) }}
        />
      </div>
    )
  }

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

          {Row}
        </List>
      )}

    </div>;
  );
}
;
