
<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react',
import { format } from 'date-fns',
import { MessageSquare } from 'lucide-react'
import { useMessaging } from '@/context/MessagingContext',
import { Button } from '@/components/ui/button',
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar',
import { AspectRatio } from '@/components/ui/aspect-ratio',
import { useAuth } from '@/hooks/useAuth',
import { MessageBubble } from './MessageBubble',
import { DateDivider } from './DateDivider',
export function ConversationDetailView() {
  const { user } = useAuth(),
  const { 
    activeConversation,
    activeMessages, 
    sendMessage, 
    loadMessages
  } = useMessaging(),
  const [messageText, setMessageText] = useState(''),
  const messagesEndRef = useRef<HTMLDivElement>(null),
  const inputRef = useRef<HTMLTextAreaElement | null>(null),
  
  useEffect(() => {
    if (activeConversation) {
      loadMessages(activeConversation.id)
    }
    inputRef.current?.focus()
  }, [activeConversation?.id, loadMessages]),
  
  useEffect(() => {
    scrollToBottom()
  }, [activeMessages]),

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  },
  
  const send = async () => {
    if (!messageText.trim() || !activeConversation) return,

    await sendMessage(activeConversation.id, messageText),
    setMessageText(''),
    inputRef.current?.focus()
  },

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault(),
    await send()
  },

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(),
      send()
    }
  },
  
  if (!activeConversation) {
    return (
      <div className=&quot;flex-1 flex flex-col items-center justify-center p-8&quot;>
        <MessageSquare className=&quot;h-16 w-16 text-zion-purple/40 mb-4&quot; />
        <h3 className=&quot;text-xl font-medium text-white mb-2&quot;>No Conversation Selected</h3>
        <p className=&quot;text-zion-slate text-center max-w-md&quot;>
          Select a conversation from the list to view and send messages.
        </p>
      </div>
    )
  }
  
  // Group messages by date
  const groupedMessages: { date: string, messages: any[] }[] = [],
  
  activeMessages.forEach(message => {
    const messageDate = format(new Date(message.created_at), 'yyyy-MM-dd'),
    const existingGroup = groupedMessages.find(group => group.date === messageDate),
    
    if (existingGroup) {
      existingGroup.messages.push(message)
    } else {
      groupedMessages.push({
        date: messageDate,
        messages: [message]
      })
=======
import React, {_useState, _useEffect, _useRef} from 'react';

export function ConversationDetailView() {_const { user} = useAuth();
  const {_activeConversation, _activeMessages, _sendMessage, _loadMessages} = useMessaging();
  const [messageText, setMessageText] = useState('');
  const _messagesEndRef = useRef<HTMLDivElement>(null);
  const _inputRef = useRef<HTMLTextAreaElement | null>(null);
  
  useEffect__(() => {_if (activeConversation) {
      loadMessages(activeConversation.id);}
    inputRef.current?.focus();
  }, [activeConversation?.id, loadMessages]);
  
  useEffect__(() => {_scrollToBottom();}, [activeMessages]);

  const _scrollToBottom = () => {_messagesEndRef.current?.scrollIntoView({ behavior: 'smooth'});
  };
  
  const _send = async () => {_if (!messageText.trim() || !activeConversation) return;

    await sendMessage(activeConversation.id, _messageText);
    setMessageText('');
    inputRef.current?.focus();};

  const _handleSendMessage = async (_e: React.FormEvent) => {_e.preventDefault();
    await send();};

  const _handleKeyDown = (_e: React.KeyboardEvent<HTMLTextAreaElement>) => {_if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();}
  };
  
  if (!activeConversation) {_return (
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <MessageSquare className="h-16 w-16 text-zion-purple/40 mb-4" />
        <h3 className="text-xl font-medium text-white mb-2">No Conversation Selected</h3>
        <p className="text-zion-slate text-center max-w-md">
          Select a conversation from the list to view and send messages.
        </p>
      </div>
    );}
  
  // Group messages by date
  const groupedMessages: {_date: string; messages: unknown[]}[] = [];
  
  activeMessages.forEach(message => {_const _messageDate = format(new Date(message.created_at), _'yyyy-MM-dd');
    const _existingGroup = groupedMessages.find(group => group.date === messageDate);
    
    if (existingGroup) {
      existingGroup.messages.push(message);} else {_groupedMessages.push({
        date: messageDate, _messages: [message]});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  }),
  
<<<<<<< HEAD
  const hasContextData = activeConversation.context_data && 
    (activeConversation.context_data.title || activeConversation.context_data.description),

  return (
    <div className=&quot;flex-1 flex flex-col h-full&quot;>
      {/* Header */}
      <div className=&quot;p-4 border-b border-zion-purple/20 bg-zion-blue-dark/30&quot;>
        <div className=&quot;flex items-center gap-3&quot;>
          <Avatar className=&quot;h-10 w-10 border border-zion-purple/20&quot;>
=======
  const _hasContextData = activeConversation.context_data && 
    (activeConversation.context_data.title || activeConversation.context_data.description);

  return (
    <div className="flex-1 flex flex-col h-full">
      {_/* Header */}
      <div className="p-4 border-b border-zion-purple/20 bg-zion-blue-dark/30">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border border-zion-purple/20">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <AvatarImage 
              src={_activeConversation.other_user.avatar_url} 
              alt={_activeConversation.other_user.name} 
            />
<<<<<<< HEAD
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
=======
            <AvatarFallback className="bg-zion-blue-dark text-white">
              {_activeConversation.other_user.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium text-white">
              {_activeConversation.other_user.name}
            </div>
            <div className="text-xs text-zion-slate">
              {_activeConversation.other_user.user_type === 'talent' ? 'Talent' : 
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
               activeConversation.other_user.user_type === 'employer' ? 'Employer' : 
               activeConversation.other_user.user_type === 'admin' ? 'Admin' : 'User'}
            </div>
          </div>
        </div>
      </div>
      
<<<<<<< HEAD
      {/* Context information (if available) */}
      {hasContextData && (
        <div className=&quot;p-4 border-b border-zion-purple/20 bg-zion-blue-dark/10&quot;>
          <div className=&quot;text-sm text-zion-slate flex items-start gap-3&quot;>
=======
      {_/* Context information (if available) */}
      {_hasContextData && (
        <div className="p-4 border-b border-zion-purple/20 bg-zion-blue-dark/10">
          <div className="text-sm text-zion-slate flex items-start gap-3">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            {activeConversation.context_data && activeConversation.context_data.image_url && (
              <div className=&quot;w-16 h-16 flex-shrink-0&quot;>
                <AspectRatio ratio={1/1} className=&quot;rounded bg-zion-blue-dark/30 overflow-hidden&quot;>
                  <img
<<<<<<< HEAD
                    src={activeConversation.context_data.image_url}
                    alt={activeConversation.context_data.title || &quot;Context&quot;}
                    className=&quot;object-cover&quot;
                    loading=&quot;lazy&quot;
=======
                    src={_activeConversation.context_data.image_url}
                    alt={_activeConversation.context_data.title || "Context"}
                    className="object-cover"
                    loading="lazy"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  />
                </AspectRatio>
              </div>
            )}
            <div>
<<<<<<< HEAD
              <div className=&quot;font-medium text-white mb-1&quot;>
                {activeConversation.context_type === 'job' ? 'Regarding Job:' :
                 activeConversation.context_type === 'talent' ? 'Regarding Talent:' :
                 'Regarding:'}
              </div>
              <div className=&quot;text-zion-cyan font-medium&quot;>
                {activeConversation.context_data && activeConversation.context_data.title}
              </div>
              {activeConversation.context_data && activeConversation.context_data.description && (
                <div className=&quot;text-xs text-zion-slate mt-1 line-clamp-2&quot;>
=======
              <div className="font-medium text-white mb-1">
                {_activeConversation.context_type === 'job' ? 'Regarding Job:' :
                 activeConversation.context_type === 'talent' ? 'Regarding Talent:' :
                 'Regarding:'}
              </div>
              <div className="text-zion-cyan font-medium">
                {_activeConversation.context_data && activeConversation.context_data.title}
              </div>
              {_activeConversation.context_data && activeConversation.context_data.description && (
                <div className="text-xs text-zion-slate mt-1 line-clamp-2">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  {activeConversation.context_data.description}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
<<<<<<< HEAD
      {/* Messages */}
      <div className=&quot;flex-1 overflow-y-auto p-4 space-y-4&quot;>
        {groupedMessages.length === 0 ? (
          <div className=&quot;text-center text-zion-slate py-12&quot;>
=======
      {_/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {_groupedMessages.length === 0 ? (
          <div className="text-center text-zion-slate py-12">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <p>No messages yet. Start the conversation!</p>
          </div>
        ) : (_groupedMessages.map((group, _groupIndex) => (
            <div key={group.date}>
<<<<<<< HEAD
              <DateDivider date={new Date(group.date)} />
              <div className=&quot;space-y-3&quot;>
                {group.messages.map((message) => (
=======
              <DateDivider date={_new Date(group.date)} />
              <div className="space-y-3">
                {_group.messages.map(_(message) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  <MessageBubble
                    key={message.id}
                    message={_message}
                    isUserMessage={_message.sender_id === user?.id}
                  />
                ))}
              </div>
            </div>
          ))
        )}
        <div ref={_messagesEndRef} />
      </div>
      
<<<<<<< HEAD
      {/* Input */}
      <div className=&quot;p-3 border-t border-zion-purple/20&quot;>
        <form onSubmit={handleSendMessage} className=&quot;flex items-start gap-2&quot;>
          <textarea
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder=&quot;Type a message...&quot;
            className=&quot;flex-1 bg-zion-blue-dark/30 border border-zion-purple/20 rounded-md p-2 min-h-[80px] text-black focus:outline-none focus:ring-2 focus:ring-zion-cyan&quot;
            ref={inputRef}
=======
      {_/* Input */}
      <div className="p-3 border-t border-zion-purple/20">
        <form onSubmit={_handleSendMessage} className="flex items-start gap-2">
          <textarea
            value={_messageText}
            onChange={_(_e) => setMessageText(e.target.value)}
            onKeyDown={_handleKeyDown}
            placeholder="Type a message..."
            className="flex-1 bg-zion-blue-dark/30 border border-zion-purple/20 rounded-md p-2 min-h-[80px] text-black focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            ref={_inputRef}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          />
          <Button 
<<<<<<< HEAD
            type="submit"
            className="bg-zion-purple hover: bg-zion-purple-dark text-white"
=======
            type=&quot;submit&quot;
            className=&quot;bg-zion-purple hover:bg-zion-purple-dark text-white&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  )
}
