<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react'
import { format } from 'date-fns'
import { MessageSquare } from 'lucide-react'import { useMessaging } from '@/context/MessagingContext'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { useAuth } from '@/hooks/useAuth'
import { MessageBubble } from './MessageBubble'
import { DateDivider } from './DateDivider'
export function ConversationDetailView() {
  const { user } = useAuth()
  const { 
    activeConversation
    activeMessages, 
    sendMessage, 
    loadMessages
  } = useMessaging()
  const [messageText, setMessageText] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement | null>(null)
        {/* Header */}

import React, { useState, useEffect, useRef } from 'react';
<<<<<<< HEAD
import { _format } from 'date-fns';

    await sendMessage(activeConversation.id", messageText);export default function Page(props: any) {
, [activeConversation, loadMessages]); // Changed activeConversation?.id to activeConversation
  useEffect(() => {
  // TODO: Add dependencies if needed
}, []);
    scrollToBottom();
  }, [activeMessages]);
';
  const _scrollToBottom = (props: any) => {';';    await sendMessage(activeConversation.id, messageText);
    setMessageText('');
  };
  if(!activeConversation) {
    return (
        <div className="flex-1 flex flex-col items-center justify-center p-8">
        <MessageSquare className="h-16 w-16 text-zion-purple/40 mb-4"  />
        <h3 className="text-xl font-medium text-white mb-2">No Conversation Selected
        <p className="text-zion-slate text-center max-w-md">
          Select a conversation from the list to view and send messages.</p>
      </div>
;
    await sendMessage(activeConversation.id, messageText);
    setMessageText('');
  };
;
  if(!activeConversation) {;
    return (<div className="flex-1 flex flex-col items-center justify-center p-8">;
        <MessageSquare className="h-16 w-16 text-zion-purple/40 mb-4"  />;
        <h3 className="text-xl font-medium text-white mb-2">No Conversation Selected;
        <p className="text-zion-slate text-center max-w-md">;
          Select a conversation from the list to view and send messages.</p>;
=======
</div>;
          </div>;
        </div>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </div>;

<<<<<<< HEAD
=======
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
    const { activeConversation, activeMessages, sendMessage, loadMessages } = useMessaging();
    const [messageText, setMessageText] = useState('');
    const messagesEndRef = useRef(null);
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
    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!messageText.trim() || !activeConversation)
            return;
        await sendMessage(activeConversation.id, messageText);
        setMessageText('');
    };
    if (!activeConversation) {
        return (<div className="flex-1 flex flex-col items-center justify-center p-8">
        <MessageSquare className="h-16 w-16 text-zion-purple/40 mb-4"      />
        <h3 className="text-xl font-medium text-white mb-2">No Conversation Selected</h3>
        <p className="text-zion-slate text-center max-w-md">
          Select a conversation from the list to view and send messages.
        </p>
      </div>);
    }
<<<<<<< HEAD
  }),
  
  const hasContextData = activeConversation.context_data && 
    (activeConversation.context_data.title || activeConversation.context_data.description),

            </div>;
</div>;
          </div>;
        </div>;
      </div>;

    loadMessages
  } = useMessaging();
  const [messageText, setMessageText] = useState('');
  const messagesEndRef = null;
  return (
    <div className="flex-1 flex flex-col h-full">
      {/* Header */}
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border border-zion-purple/20">
            <AvatarImage
              src = {activeConversation.other_user.avatar_url,}
              alt = {activeConversation.other_user.name,}
      <div className="p-4 border-b border-zion-purple/20 bg-zion-blue-dark/30">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border border-zion-purple/20">
            <AvatarImage
              src = {activeConversation.other_user.avatar_url,}
              alt = {activeConversation.other_user.name,}
            <AvatarImage 
              src={activeConversation.other_user.avatar_url} 
              alt={activeConversation.other_user.name} 
            />
            <AvatarFallback className="bg-zion-blue-dark text-white">
              {activeConversation.other_user.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium text-white">
              {activeConversation.other_user.name}
            </div>
            <div className="text-xs text-zion-slate">
              {activeConversation.other_user.user_type === 'talent' ? 'Talent' :
               activeConversation.other_user.user_type === 'employer' ? 'Employer' :
              {activeConversation.other_user.user_type === 'talent' ? 'Talent' :
               activeConversation.other_user.user_type === 'employer' ? 'Employer' :
              {activeConversation.other_user.user_type === 'talent' ? 'Talent' : 
               activeConversation.other_user.user_type === 'employer' ? 'Employer' : 
               activeConversation.other_user.user_type === 'admin' ? 'Admin' : 'User'}
            </div>
          </div>
        </div>
      </div>
      
      {/* Context information (if available) */}
      {hasContextData && (<div className="p-4 border-b border-zion-purple/20 bg-zion-blue-dark/10">
          <div className="text-sm text-zion-slate flex items-start gap-3">
            {activeConversation.context_data && activeConversation.context_data.image_url && (
              <div className="w-16 h-16 flex-shrink-0">
                <AspectRatio ratio={1/1} className="rounded bg-zion-blue-dark/30 overflow-hidden">
                  <img
                    className="object-cover"
                    loading="lazy"
      {/* Context information (if available) */}
=======
                    src = {activeConversation && activeConversation.context_data.image_url,}
                    alt = {activeConversation && activeConversation.context_data.title || "Context",}

                    className="object-cover"
                    loading="lazy"
      {/* Context information (if available) */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {hasContextData && (
        <div className="p - 4 border - b border - zion - purple / 20 bg - zion - blue - dark / 10">;
          <div className="text - sm text - zion - slate flex items - start gap - 3">;
            {active_conversation.context_data && active_conversation.context_data.image_url && (
              <div className="w - 16 h - 16 flex - shrink - 0">;
                <AspectRatio ratio={1 / 1} className="rounded bg - zion - blue - dark / 30 overflow - hidden">;
                  <img;
                    src = {active_conversation.context_data.image_url, }
                    alt = {active_conversation.context_data.title || "Context", }
                    className="object - cover";
                    loading="lazy";

                    src={activeConversation.context_data.image_url}
                    alt={activeConversation.context_data.title || "Context"}

                    alt = {activeConversation.context_data.title || "Context",}
                    src={activeConversation.context_data.image_url}
                    alt={activeConversation.context_data.title || "Context"}
                    className="object-cover"
<<<<<<< HEAD
                    alt = {activeConversation.context_data.title |"Context",}
                    alt = {activeConversation.context_data.title || "Context",}
                    src={activeConversation.context_data.image_url}
                    alt={activeConversation.context_data.title || "Context"}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    loading="lazy"
                  />
                </AspectRatio>
              </div>            )}
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
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {groupedMessages.length === 0 ? (
          <div className="text-center text-zion-slate py-12">
            <p>No messages yet. Start the conversation!</p>
          </div>
        ) : (
          groupedMessages.map((group, groupIndex,) => (
            <div key={group.date}>
              <DateDivider date={new Date(group.date)} />
              <div className="space-y-3">
                {group.messages.map((message,) => (
                  <MessageBubble
<<<<<<< HEAD
                    key={message.id}
                    message={message}
                    isUserMessage={message.sender_id === user?.id}
                  />;
                </AspectRatio>;
              </div>            )}
            <div>;



                    src = {activeConversation.context_data.image_url,}
                    alt = {activeConversation.context_data.title |"Context",}
                    src={activeConversation.context_data.image_url}
                    alt={activeConversation.context_data.title || "Context"}
                    alt = {activeConversation.context_data.title || "Context",}
                    src={activeConversation.context_data.image_url}
                    alt={activeConversation.context_data.title || "Context"}
                    className="object-cover"
                    loading="lazy"
                  />
                </AspectRatio>
              </div>            )}
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
                </div>
              )}
            </div>
          </div>
        </div>
      )}
=======
                    key = {message.id,}
                    message = {message,}
                    isUserMessage = {message.sender_id === user?.id,}
                  />                ))}
              </div>
            </div>
          ))
                {group.messages.map((message) => (
                  <MessageBubble
                    key={message.id}
                    message={message}
                    isUserMessage={message.sender_id === user?.id}
                  />;
                </AspectRatio>;
              </div>            )}
            <div>;



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {groupedMessages.length === 0 ? (
          <div className="text-center text-zion-slate py-12">
            <p>No messages yet. Start the conversation!</p>
          </div>
        ) : (
          groupedMessages.map((group, groupIndex,) => (
            <div key={group.date}>
              <DateDivider date={new Date(group.date)} />
              <div className="space-y-3">
<<<<<<< HEAD
                {group.messages.map((message,) => (
                  <MessageBubble
                    key = {message.id,}
                    message = {message,}
                    isUserMessage = {message.sender_id === user?.id,}
                  />                ))}
              </div>
            </div>
          ))
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        )}

        <div ref={messagesEndRef} />;
      </div>;


<<<<<<< HEAD
      <div className="p-3 border-t border-zion-purple/20">;
        <form onSubmit={handleSendMessage} className="flex items-start gap-2">;
          <textarea
        )}
        <div ref={messagesEndRef} />
      </div>
      
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Input */}
      <div className="p-3 border-t border-zion-purple/20">
        <form onSubmit={handleSendMessage} className="flex items-start gap-2">
          <textarea
<<<<<<< HEAD
            value = {messageText,}
            onChange = {(e,) => setMessageText(e.target.value),}
            onKeyDown = {handleKeyDown,}
            placeholder="Type a message..."
            className="flex-1 bg-zion-blue-dark/30 border border-zion-purple/20 rounded-md p-2 min-h-[80px] text-black focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            ref = {inputRef,}
          />
          <Button
          />
          <Button
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="flex-1 bg-zion-blue-dark/30 border border-zion-purple/20 rounded-md p-2 min-h-[80px] text-black focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            ref={inputRef}
<<<<<<< HEAD
          <Button 
          />
          <Button 
          />
          <Button 
            type="submit"
=======
  };

  if (!currentConversation) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No conversation selected</h3>
          <p className="mt-1 text-sm text-gray-500">
            Choose a conversation from the list to start messaging.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center space-x-3 p-4 border-b border-gray-200">
        <Avatar className="h-10 w-10">
          <AvatarImage src={currentConversation.participant.avatar} />
          <AvatarFallback>
            {currentConversation.participant.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">
            {currentConversation.participant.name}
          </h3>
          <p className="text-sm text-gray-500">
            {currentConversation.participant.isOnline ? 'Online' : 'Offline'}
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
              <p className="mt-2 text-sm text-gray-500">Loading messages...</p>
            </div>
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
          </div>
        ) : (
          messages.map((message, index) => {
            const isUserMessage = message.senderId === user?.id;
            const prevMessage = messages[index - 1];
            const showDateDivider = !prevMessage || 
              format(new Date(message.timestamp), 'yyyy-MM-dd') !== 
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
      <div className="p-4 border-t border-gray-200">
        <form onSubmit={handleSendMessage} className="flex space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isSending}
          />
          <Button
            type="submit"
            disabled={!newMessage.trim() || isSending}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          >
            {isSending ? 'Sending...' : 'Send'}
          </Button>
        </form>
<<<<<<< HEAD
=======



          />
          <Button 
            type="submit"
            className="bg-zion-purple hover: bg-zion-purple-dark text-white"
          >
            Send
          </Button>
        </form>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          />;
          <Button
            type="submit"
            className="bg-zion-purple hover: bg-zion-purple-dark text-white">;
              <div className="font - medium text - white mb - 1">;
                {active_conversation.context_type === 'job' ? 'Regarding Job:' :;
                active_conversation.context_type === 'talent' ? 'Regarding Talent:' :;
                'Regarding:'}
              </div>;
              <div className="text - zion - cyan font - medium">;
                {active_conversation.context_data && active_conversation.context_data.title}
              </div>;
              {active_conversation.context_data && active_conversation.context_data.description && (
                <div className="text - xs text - zion - slate mt - 1 line - clamp - 2">;
                  {active_conversation.context_data.description}
                </div>)}
            </div>;
          </div>;
        </div>)}
      {/* Messages */}
      <div className="flex - 1 overflow - y-auto p - 4 space - y-4">;
        {grouped_messages.length === 0 ? (
          <div className="text - center text - zion - slate py - 12">;
            <p > No messages yet. Start the conversation!</p>;
          </div>) : (
          grouped_messages.map ((group, group_index, ) => (
            <div key={group.date}>;
              <DateDivider date={new Date (group.date)} />;
              <div className="space - y-3">;
                {group.messages.map ((message, ) => (
                  <MessageBubble;
                    key = {message.id, }
                    message = {message, }
                    isUserMessage = {message.sender_id === user?.id, }
                  />                ))}
              </div>;
            </div>)))}
        <div ref={messagesEndRef} />;
      </div>;
<<<<<<< HEAD
    </div>;
  );
};
}
      </div>;
    </div>;
  );
};
      </div>
    </div>
  )
}
      <div className="p-3 border-t border-zion-purple/20">;
        <form onSubmit={handleSendMessage} className="flex items-start gap-2">;
=======
      {/* Input */}
      <div className="p - 3 border - t border - zion - purple / 20">;
        <form on_submit={handleSendMessage} className="flex items - start gap - 2">;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            Send;
          </Button>;
        </form>;
      </div>;
<<<<<<< HEAD


    </div>);
}

      </div>
    </div>
  )
=======
      </div>
    </div>
  );
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
