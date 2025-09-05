
import React, { useState, useEffect, useRef } from 'react';
import { format } from 'date-fns';
import { MessageSquare } from 'lucide-react';
import { useMessaging } from '@/context/MessagingContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useAuth } from '@/hooks/useAuth';
import { MessageBubble } from './MessageBubble';
import { DateDivider } from './DateDivider';

export function ConversationDetailView() {
  const { user } = useAuth();
  const { 
    activeConversation, 
    activeMessages, 
    sendMessage, 
    loadMessages
  } = useMessaging();
  const [messageText, setMessageText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (activeConversation) {
      loadMessages(activeConversation.id);
    }
  }, [activeConversation?.id, loadMessages]);
  
  useEffect(() => {
    scrollToBottom();
  }, [activeMessages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageText.trim() || !activeConversation) return;
    
    await sendMessage(activeConversation.id, messageText);
    setMessageText('');
  };
  
  if (!activeConversation) {
    return (
      <div className=&quot;flex-1 flex flex-col items-center justify-center p-8&quot;>
        <MessageSquare className=&quot;h-16 w-16 text-zion-purple/40 mb-4&quot; />
        <h3 className=&quot;text-xl font-medium text-white mb-2&quot;>No Conversation Selected</h3>
        <p className=&quot;text-zion-slate text-center max-w-md&quot;>
          Select a conversation from the list to view and send messages.
        </p>
      </div>
    );
  }
  
  // Group messages by date
  const groupedMessages: { date: string; messages: any[] }[] = [];
  
  activeMessages.forEach(message => {
    const messageDate = format(new Date(message.created_at), 'yyyy-MM-dd');
    const existingGroup = groupedMessages.find(group => group.date === messageDate);
    
    if (existingGroup) {
      existingGroup.messages.push(message);
    } else {
      groupedMessages.push({
        date: messageDate,
        messages: [message]
      });
    }
  });
  
  const hasContextData = activeConversation.context_data && 
    (activeConversation.context_data.title || activeConversation.context_data.description);

  return (
    <div className=&quot;flex-1 flex flex-col h-full&quot;>
      {/* Header */}
      <div className=&quot;p-4 border-b border-zion-purple/20 bg-zion-blue-dark/30&quot;>
        <div className=&quot;flex items-center gap-3&quot;>
          <Avatar className=&quot;h-10 w-10 border border-zion-purple/20&quot;>
            <AvatarImage 
              src={activeConversation.other_user.avatar_url} 
              alt={activeConversation.other_user.name} 
            />
            <AvatarFallback className=&quot;bg-zion-blue-dark text-white&quot;>
              {activeConversation.other_user.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className=&quot;font-medium text-white&quot;>
              {activeConversation.other_user.name}
            </div>
            <div className=&quot;text-xs text-zion-slate&quot;>
              {activeConversation.other_user.user_type === 'talent' ? 'Talent' : 
               activeConversation.other_user.user_type === 'employer' ? 'Employer' : 
               activeConversation.other_user.user_type === 'admin' ? 'Admin' : 'User'}
            </div>
          </div>
        </div>
      </div>
      
      {/* Context information (if available) */}
      {hasContextData && (
        <div className=&quot;p-4 border-b border-zion-purple/20 bg-zion-blue-dark/10&quot;>
          <div className=&quot;text-sm text-zion-slate flex items-start gap-3&quot;>
            {activeConversation.context_data.image_url && (
              <div className=&quot;w-16 h-16 flex-shrink-0&quot;>
                <AspectRatio ratio={1/1} className=&quot;rounded bg-zion-blue-dark/30 overflow-hidden&quot;>
                  <img
                    src={activeConversation.context_data.image_url}
                    alt={activeConversation.context_data.title || &quot;Context&quot;}
                    className=&quot;object-cover&quot;
                  />
                </AspectRatio>
              </div>
            )}
            <div>
              <div className=&quot;font-medium text-white mb-1&quot;>
                {activeConversation.context_type === 'job' ? 'Regarding Job:' :
                 activeConversation.context_type === 'talent' ? 'Regarding Talent:' :
                 'Regarding:'}
              </div>
              <div className=&quot;text-zion-cyan font-medium&quot;>
                {activeConversation.context_data.title}
              </div>
              {activeConversation.context_data.description && (
                <div className=&quot;text-xs text-zion-slate mt-1 line-clamp-2&quot;>
                  {activeConversation.context_data.description}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Messages */}
      <div className=&quot;flex-1 overflow-y-auto p-4 space-y-4&quot;>
        {groupedMessages.length === 0 ? (
          <div className=&quot;text-center text-zion-slate py-12&quot;>
            <p>No messages yet. Start the conversation!</p>
          </div>
        ) : (
          groupedMessages.map((group, groupIndex) => (
            <div key={group.date}>
              <DateDivider date={new Date(group.date)} />
              <div className=&quot;space-y-3&quot;>
                {group.messages.map((message) => (
                  <MessageBubble
                    key={message.id}
                    message={message}
                    isUserMessage={message.sender_id === user?.id}
                  />
                ))}
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input */}
      <div className=&quot;p-3 border-t border-zion-purple/20&quot;>
        <form onSubmit={handleSendMessage} className=&quot;flex items-start gap-2&quot;>
          <textarea
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            placeholder=&quot;Type a message...&quot;
            className=&quot;flex-1 bg-zion-blue-dark/30 border border-zion-purple/20 rounded-md p-2 min-h-[80px] text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan&quot;
          />
          <Button 
            type=&quot;submit&quot;
            className=&quot;bg-zion-purple hover:bg-zion-purple-dark text-white&quot;
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}
