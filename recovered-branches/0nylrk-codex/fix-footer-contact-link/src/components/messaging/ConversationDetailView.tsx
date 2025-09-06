import {format} from 'date-fns';
import {MessageSquare} from 'lucide-react';
import {useMessaging} from '@/context/MessagingContext';
import {Button} from '@/components/ui/button';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {AspectRatio} from '@/components/ui/aspect-ratio';
import {useAuth} from '@/hooks/useAuth';
import {MessageBubble} from './MessageBubble';
import {DateDivider} from './DateDivider';
export function ConversationDetailView() {;
  const { user } = useAuth();
  const {
    activeConversation;

    activeMessages
    sendMessage
    loadMessages
  } = useMessaging();
  const [messageText, setMessageText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (activeConversation) {
      loadMessages(activeConversation.id)
    }
  }, [activeConversation?.id, loadMessages]);
import {MessageSquare} from 'lucide-react';
import {use_messaging} from '@/context / MessagingContext';
import {Button} from '@/components / ui / button';
import {Avatar, AvatarFallback, AvatarImage} from '@/components / ui / avatar';
import {AspectRatio} from '@/components / ui / aspect - ratio';
import {use_auth} from '@/hooks / use_auth';
import {MessageBubble} from './MessageBubble';
import {DateDivider} from './DateDivider';

  }, [activeConversation?.id, loadMessages]),



  
  useEffect(() => {
    scrollToBottom()
  }, [activeMessages]),

    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8">;
        <MessageSquare className="h-16 w-16 text-zion-purple/40 mb-4" />;
        <h3 className="text-xl font-medium text-white mb-2">No Conversation Selected</h3>;
        <p className="text-zion-slate text-center max-w-md">;
          Select a conversation from the list to view and send messages.;
        </p>;
      </div>;
    );
  }
  // Group messages by date
  const groupedMessages: { date: string, messages: any[] }[] = []
  activeMessages.forEach(message => {
    const messageDate = format(new Date(message.created_at), 'yyyy-MM-dd');
    const existingGroup = groupedMessages.find(group => group.date === messageDate);
    if (existingGroup) {
      existingGroup.messages.push(message)
    } else {
      groupedMessages.push({
        date: messageDate
        messages: [message]
      })
    }
  });
;

  // Group messages by date;
  const groupedMessages: { date: string, messages: any[] }[] = [],;
    if (existingGroup) {;
      existingGroup && existingGroup.messages.push(message);
    } else {;
      groupedMessages && groupedMessages.push({;
        date: messageDate,;
        messages: [message];
      });
    }

  }),

  return (
    <div className="flex-1 flex flex-col h-full">;
      {/* Header */}
               activeConversation.other_user.user_type === 'admin' ? 'Admin' : 'User'}
            </div>
          </div>
        </div>
      </div>
            </div>;
          </div>;
        </div>;
      </div>;
                    className="object-cover"
                  />;
                </AspectRatio>;
              </div>;
            )}
            <div>;
              <div className="font-medium text-white mb-1">;
                {activeConversation && activeConversation.context_type === 'job' ? 'Regarding Job:' :;
                 activeConversation && activeConversation.context_type === 'talent' ? 'Regarding Talent:' :;
                 'Regarding:'}
              </div>;
              <div className="text-zion-cyan font-medium">;
                {activeConversation && activeConversation.context_data.title}
              </div>;
              {activeConversation && activeConversation.context_data.description && (;
                <div className="text-xs text-zion-slate mt-1 line-clamp-2">;
                  {activeConversation && activeConversation.context_data.description}
                </div>;
              )}
            </div>;
          </div>;
        </div>;
      )}
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">;
        {groupedMessages && groupedMessages.length === 0 ? (;
          <div className="text-center text-zion-slate py-12">;
            <p>No messages yet. Start the conversation!</p>;
          </div>;
        ) : (;
          groupedMessages && groupedMessages.map((group, groupIndex) => (;
            <div key={group && group.date}>;
              <DateDivider date={new Date(group && group.date)} />;
              <div className="space-y-3">;
                {group && group.messages.map((message) => (;
                  <MessageBubble
                    key={message && message.id}
                    message={message}
                    isUserMessage={message && message.sender_id === user?.id}
                  />;
                ))}
              </div>;
            </div>;
          ));
        )}
      {/* Input */}
      <div className="p-3 border-t border-zion-purple/20">;
        <form onSubmit={handleSendMessage} className="flex items-start gap-2">;
          <textarea
            value={messageText}
      <div className="p-3 border-t border-zion-purple/20">;
        <form onSubmit={handleSendMessage} className="flex items-start gap-2">;
          <textarea;
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            Send;
          </Button>;
        </form>;
      </div>;
}
    </div>);
}
