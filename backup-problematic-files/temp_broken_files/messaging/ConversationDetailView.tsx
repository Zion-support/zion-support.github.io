
import React, { useState, useEffect, useRef } from 'react',;
import { format } from 'date-fns',;
import { MessageSquare } from 'lucide-react',;
import { useMessaging } from '@/context/MessagingContext',;
import { Button } from '@/components/ui/button',;
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar',;
import { AspectRatio } from '@/components/ui/aspect-ratio',;
import { useAuth } from '@/hooks/useAuth',;
import { MessageBubble } from './MessageBubble',;
import { DateDivider } from './DateDivider',;
;
export function ConversationDetailView() {;
  const { user } = useAuth(),;
  const { ;
    activeConversation,;
    activeMessages, ;
    sendMessage, ;
    loadMessages;
  } = useMessaging(),;
  const [messageText, setMessageText] = useState(''),;
  const messagesEndRef = useRef<HTMLDivElement>(null),;
  ;
  useEffect(() => {;
    if (activeConversation) {;
      loadMessages(activeConversation.id),;
    }
  }, [activeConversation?.id, loadMessages]),;
  ;
  useEffect(() => {;
    scrollToBottom(),;
  }, [activeMessages]),;
;
  const scrollToBottom = () => {;
    messagesEndRef.current?.scrollIntoView({ behavior:'smooth' }),;
  },;
  ;
  const handleSendMessage = async (e:React.FormEvent) => {;
    e.preventDefault(),;
    if (!messageText.trim() || !activeConversation) return,;
    ;
    await sendMessage(activeConversation.id, messageText),;
    setMessageText(''),;
  },;
  ;
  if (!activeConversation) {;
    return (;
      <div className="flex-1 flex flex-col items-center justify-center p-8">;
        <MessageSquare className="h-16 w-16 text-zion-purple/40 mb-4" />;
        <h3 className="text-xl font-medium text-white mb-2">No Conversation Selected</h3>;
        <p className="text-zion-slate text-center max-w-md">;
          Select a conversation from the list to view and send messages.;
        </p>;
      </div>;
    ),;
  }
  ;
  // Group messages by date;
  const groupedMessages:{ date:string, messages:any[] }[] = [],;
  ;
  activeMessages.forEach(message => {;
    const messageDate = format(new Date(message.created_at), 'yyyy-MM-dd'),;
    const existingGroup = groupedMessages.find(group => group.date === messageDate),;
    ;
    if (existingGroup) {;
      existingGroup.messages.push(message),;
    } else {;
      groupedMessages.push({;
        date:messageDate,;
        messages:[message];
      }),;
    }
  }),;
  ;
  const hasContextData = activeConversation.context_data && ;
    (activeConversation.context_data.title || activeConversation.context_data.description),;
;
  return (;
    <div className="flex-1 flex flex-col h-full">;
      {/* Header */}
      <div className="p-4 border-b border-zion-purple/20 bg-zion-blue-dark/30">;
        <div className="flex items-center gap-3">;
          <Avatar className="h-10 w-10 border border-zion-purple/20">;

            </AvatarFallback>;
          </Avatar>;
          <div>;
            <div className="font-medium text-white">;

            </div>;
          </div>;
        </div>;
      </div>;

                  />;
                </AspectRatio>;
              </div>;
            )}
            <div>;
              <div className="font-medium text-white mb-1">;

            </div>;
          </div>;
        </div>;
      )}
      ;
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">;

                  <MessageBubble;
                    key={message.id}
                    message={message}
                    isUserMessage={message.sender_id === user?.id}

          >;
            Send;
          </Button>;
        </form>;
      </div>;

}