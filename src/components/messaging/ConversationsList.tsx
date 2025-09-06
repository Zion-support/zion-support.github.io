
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
          onClick={() => {;
            setActiveConversation(conversation);
            markAsRead(conversation.id);
          }}
        />
      </div>
    )
  },
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
          {Row}
        </List>
      )}
    </div>
  )
}
;
    </div>;
  );
}
;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
