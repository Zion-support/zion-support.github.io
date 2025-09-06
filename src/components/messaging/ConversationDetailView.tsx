<<<<<<< HEAD
<<<<<<< HEAD

import React, { useState, useEffect, useRef } from 'react',;
import { format } from 'date-fns',;
import { MessageSquare } from 'lucide-react';
import { useMessaging } from '@/context/MessagingContext',;
import { Button } from '@/components/ui/button',;
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar',;
import { AspectRatio } from '@/components/ui/aspect-ratio',;
import { useAuth } from '@/hooks/useAuth',;
import { MessageBubble } from './MessageBubble',;
import { DateDivider } from './DateDivider',;
export function ConversationDetailView() {;
  const { user } = useAuth(),;
  const {;
    activeConversation,;
    activeMessages,;
    sendMessage,;
    loadMessages;
  } = useMessaging(),;
  const [messageText, setMessageText] = useState(''),;
  const messagesEndRef = useRef<HTMLDivElement>(null),;
  const inputRef = useRef<HTMLTextAreaElement | null>(null),;
  useEffect(() => {;
    if (activeConversation) {;
      loadMessages(activeConversation.id);
=======
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
  const { currentConversation, sendMessage, messages, loading } = useMessaging();
  const [newMessage, setNewMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !currentConversation) return;

    setIsSending(true);
    try {
      await sendMessage({
        content: newMessage,
        recipientId: currentConversation.participantId,
        conversationId: currentConversation.id,
      });
      setNewMessage('');
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setIsSending(false);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
    inputRef.current?.focus();
  }, [activeConversation?.id, loadMessages]),;
  useEffect(() => {;
    scrollToBottom();
  }, [activeMessages]),;
  const scrollToBottom = () => {;
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  },;
  const send = async () => {;
    if (!messageText.trim() || !activeConversation) return,;
    await sendMessage(activeConversation.id, messageText),;
    setMessageText(''),;
    inputRef.current?.focus();
  },;
  const handleSendMessage = async (e: React.FormEvent) => {;
    e.preventDefault(),;
    await send();
  },;
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {;
    if (e.key === 'Enter' && !e.shiftKey) {;
      e.preventDefault(),;
      send();
    }
  },
  
  if (!activeConversation) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <MessageSquare className="h-16 w-16 text-zion-purple/40 mb-4" />
        <h3 className="text-xl font-medium text-white mb-2">No Conversation Selected</h3>
        <p className="text-zion-slate text-center max-w-md">
          Select a conversation from the list to view and send messages.
        </p>
      </div>
    )
  }
;
  // Group messages by date;
  const groupedMessages: { date: string, messages: any[] }[] = [],;
  activeMessages.forEach(message => {;
    const messageDate = format(new Date(message.created_at), 'yyyy-MM-dd'),;
    const existingGroup = groupedMessages.find(group => group.date === messageDate),;
    if (existingGroup) {;
      existingGroup.messages.push(message);
    } else {;
      groupedMessages.push({;
        date: messageDate,;
        messages: [message];
      });
    }
  }),
  
  const hasContextData = activeConversation.context_data && 
    (activeConversation.context_data.title || activeConversation.context_data.description),
=======
                    src = {activeConversation && activeConversation.context_data.image_url,}
                    alt = {activeConversation && activeConversation.context_data.title || "Context",}

  const { user } = useAuth()
  const {
    activeConversation
    activeMessages
    sendMessage
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

    loadMessages
  } = useMessaging();
  const [messageText, setMessageText] = useState('');
  const messagesEndRef = null;
  return (
    <div className="flex-1 flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-zion-purple/20 bg-zion-blue-dark/30">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border border-zion-purple/20">
<<<<<<< HEAD
            <AvatarImage 
              src={activeConversation.other_user.avatar_url} 
              alt={activeConversation.other_user.name} 
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            />
            <AvatarFallback className="bg-zion-blue-dark text-white">
              {activeConversation.other_user.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium text-white">
              {activeConversation.other_user.name}
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="text-xs text-zion-slate">
              {activeConversation.other_user.user_type === 'talent' ? 'Talent' : 
               activeConversation.other_user.user_type === 'employer' ? 'Employer' : 
               activeConversation.other_user.user_type === 'admin' ? 'Admin' : 'User'}
            </div>;
          </div>;
        </div>;
      </div>;
=======
            <div className="text-xs text-zion-slate">
               activeConversation.other_user.user_type === 'admin' ? 'Admin' : 'User'}
            </div>
          </div>
        </div>
      </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      {/* Context information (if available) */}
      {hasContextData && (
        <div className="p-4 border-b border-zion-purple/20 bg-zion-blue-dark/10">
          <div className="text-sm text-zion-slate flex items-start gap-3">
            {activeConversation.context_data && activeConversation.context_data.image_url && (
              <div className="w-16 h-16 flex-shrink-0">
                <AspectRatio ratio={1/1} className="rounded bg-zion-blue-dark/30 overflow-hidden">
                  <img
<<<<<<< HEAD
=======
                    alt = {activeConversation.context_data.title || "Context",}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
                    src={activeConversation.context_data.image_url}
                    alt={activeConversation.context_data.title || "Context"}
                    className="object-cover"
                    loading="lazy"
                  />
                </AspectRatio>
<<<<<<< HEAD
              </div>
            )}
=======
              </div>            )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            <div>
              <div className="font-medium text-white mb-1">
                {activeConversation.context_type === 'job' ? 'Regarding Job:' :
                 activeConversation.context_type === 'talent' ? 'Regarding Talent:' :
                 'Regarding:'}
              </div>
              <div className="text-zion-cyan font-medium">
                {activeConversation.context_data && activeConversation.context_data.title}
              </div>
              {activeConversation.context_data && activeConversation.context_data.description && (
                <div className="text-xs text-zion-slate mt-1 line-clamp-2">
                  {activeConversation.context_data.description}
<<<<<<< HEAD
                </div>;
              )}
            </div>;
          </div>;
        </div>;
      )}
;
=======
                </div>
              )}
            </div>
          </div>
        </div>
      )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {groupedMessages.length === 0 ? (
          <div className="text-center text-zion-slate py-12">
            <p>No messages yet. Start the conversation!</p>
<<<<<<< HEAD
          </div>
        ) : (
          groupedMessages.map((group, groupIndex) => (
            <div key={group.date}>
              <DateDivider date={new Date(group.date)} />
              <div className="space-y-3">
                {group.messages.map((message) => (
                  <MessageBubble
                    key={message.id}
                    message={message}
                    isUserMessage={message.sender_id === user?.id}
                  />;
                ))}
              </div>;
            </div>;
          ));
=======
          </div>
        ) : messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No messages yet</h3>
              <p className="mt-1 text-sm text-gray-500">
                Start the conversation by sending a message.
              </p>
            </div>
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
          </div>
        ) : (
          groupedMessages.map((group, groupIndex,) => (
            <div key={group.date}>
              <DateDivider date={new Date(group.date)} />
              <div className="space-y-3">

<<<<<<< HEAD
            return (
              <div key={message.id}>
                {showDateDivider && (
                  <DateDivider date={message.timestamp} />
                )}
                <MessageBubble
                  message={message}
                  isUserMessage={isUserMessage}
                />
              </div>
            );
          })
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        )}
        <div ref={messagesEndRef} />;
      </div>;
=======
        )}
        <div ref={messagesEndRef} />
      </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      {/* Input */}
      <div className="p-3 border-t border-zion-purple/20">
        <form onSubmit={handleSendMessage} className="flex items-start gap-2">
          <textarea
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
<<<<<<< HEAD
<<<<<<< HEAD
            className="flex-1 bg-zion-blue-dark/30 border border-zion-purple/20 rounded-md p-2 min-h-[80px] text-black focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            ref={inputRef}
=======
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isSending}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          />
          <Button 
            type="submit"
<<<<<<< HEAD
            className="bg-zion-purple hover: bg-zion-purple-dark text-white"
=======
=======
            className="flex-1 bg-zion-blue-dark/30 border border-zion-purple/20 rounded-md p-2 min-h-[80px] text-black focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            ref={inputRef}
          />
          <Button             type="submit"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            disabled={!newMessage.trim() || isSending}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          >
            Send
          </Button>
        </form>
<<<<<<< HEAD
      </div>
    </div>
<<<<<<< HEAD
  )
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      <div className="p-3 border-t border-zion-purple/20">;
        <form onSubmit={handleSendMessage} className="flex items-start gap-2">;
          <textarea;
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message...";
            className="flex-1 bg-zion-blue-dark/30 border border-zion-purple/20 rounded-md p-2 min-h-[80px] text-black focus:outline-none focus:ring-2 focus:ring-zion-cyan";
            ref={inputRef}
          />;
          <Button;
            type="submit";
            className="bg-zion-purple hover: bg-zion-purple-dark text-white";
          >;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            Send;
          </Button>;
        </form>;
      </div>;
<<<<<<< HEAD
    </div>;
  );
}
;
=======
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
