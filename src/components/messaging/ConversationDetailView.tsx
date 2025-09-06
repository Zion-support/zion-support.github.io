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
  const { currentConversation, sendMessage, messages, loading } = useMessaging();,
  const [newMessage, setNewMessage] = useState('');,
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);,
  const handleSendMessage = async (e: React.FormEvent) => {,
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
    }
  };
  if (!currentConversation) {
    return (
      <div className="flex items-center justify-center h-full">"
        <div className="text-center">"
          <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />"
          <h3 className="mt-2 text-sm font-medium text-gray-900">No conversation selected</h3>"
          <p className="mt-1 text-sm text-gray-500">"
            Choose a conversation from the list to start messaging.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col h-full">"
      {/* Header */}
      <div className="flex items-center space-x-3 p-4 border-b border-gray-200">"
        <Avatar className="h-10 w-10">"
          <AvatarImage src={currentConversation.participant.avatar} />
          <AvatarFallback>
            {currentConversation.participant.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">"
          <h3 className="font-semibold text-gray-900">"
            {currentConversation.participant.name}
          </h3>
          <p className="text-sm text-gray-500">"
            {currentConversation.participant.isOnline ? 'Online' : 'Offline'}'
          </p>
        </div>
      </div>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">"
        {loading ? (
          <div className="flex items-center justify-center h-full">"
            <div className="text-center">"
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>"
              <p className="mt-2 text-sm text-gray-500">Loading messages...</p>"
            </div>
          </div>
        ) : messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">"
            <div className="text-center">"
              <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />"
              <h3 className="mt-2 text-sm font-medium text-gray-900">No messages yet</h3>"
              <p className="mt-1 text-sm text-gray-500">"
                Start the conversation by sending a message.
              </p>
            </div>
          </div>
        ) : (
          messages.map((message, index) => {
            const isUserMessage = message.senderId === user?.id;
            const prevMessage = messages[index - 1];,
            const showDateDivider = !prevMessage ||
              format(new Date(message.timestamp), 'yyyy-MM-dd') !== '
              format(new Date(prevMessage.timestamp), 'yyyy-MM-dd');
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
        )}
        <div ref={messagesEndRef} />
      </div>
      {/* Message Input */}
      <div className="p-4 border-t border-gray-200">"
        <form onSubmit={handleSendMessage} className="flex space-x-2">"
          <input
            type="text""
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message...""
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"",
            disabled={isSending}
          />
          <Button
            type="submit""
            disabled={!newMessage.trim() || isSending}
          >
            {isSending ? 'Sending...' : 'Send'}'
          </Button>
        </form>
      </div>
    </div>
  );
}
