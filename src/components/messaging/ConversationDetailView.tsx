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

<<<<<<< HEAD
=======
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

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState, useEffect, useRef } from 'react';
import { format  } from 'date-fns';
import { MessageSquare } from 'lucide-react'
import { useMessaging  } from '@/context/MessagingContext';
import { Button  } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage  } from '@/components/ui/avatar';
import { AspectRatio  } from '@/components/ui/aspect-ratio';
import { useAuth  } from '@/hooks/useAuth';
import { MessageBubble  } from './MessageBubble';
import { DateDivider } from './DateDivider';
export function ConversationDetailView() {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

      <div className="p-4 border-b border-zion-purple/20 bg-zion-blue-dark/30">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border border-zion-purple/20">

=======
>>>>>>>       <div className="p-4 border-b border-zion-purple/20 bg-zion-blue-dark/30">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border border-zion-purple/20">
            <AvatarImage
              src = {activeConversation.other_user.avatar_url,}
              alt = {activeConversation.other_user.name,}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      <div className="p-4 border-b border-zion-purple/20 bg-zion-blue-dark/30">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border border-zion-purple/20">
            <AvatarImage
              src = {activeConversation.other_user.avatar_url,}
              alt = {activeConversation.other_user.name,}
            <AvatarImage 
              src={activeConversation.other_user.avatar_url} 
              alt={activeConversation.other_user.name} 
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
              {activeConversation.other_user.user_type === 'talent' ? 'Talent' :
               activeConversation.other_user.user_type === 'employer' ? 'Employer' :
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              {activeConversation.other_user.user_type === 'talent' ? 'Talent' :
               activeConversation.other_user.user_type === 'employer' ? 'Employer' :
              {activeConversation.other_user.user_type === 'talent' ? 'Talent' : 
               activeConversation.other_user.user_type === 'employer' ? 'Employer' : 
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
               activeConversation.other_user.user_type === 'admin' ? 'Admin' : 'User'}
            </div>
          </div>
        </div>
      </div>
      {/* Context information (if available) */}
      {hasContextData && (
        <div className="p-4 border-b border-zion-purple/20 bg-zion-blue-dark/10">
          <div className="text-sm text-zion-slate flex items-start gap-3">
            {activeConversation.context_data && activeConversation.context_data.image_url && (
              <div className="w-16 h-16 flex-shrink-0">
                <AspectRatio ratio={1/1} className="rounded bg-zion-blue-dark/30 overflow-hidden">
                  <img
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                    alt = {activeConversation.context_data.title || "Context",}

                    src={activeConversation.context_data.image_url}
                    alt={activeConversation.context_data.title || "Context"}

                    className="object-cover"
=======
                    alt = {activeConversation.context_data.title |"Context",}
                    alt = {activeConversation.context_data.title || "Context",}
                    src={activeConversation.context_data.image_url}
                    alt={activeConversation.context_data.title || "Context"}
>>>>>>> >>>>>>>                     className="object-cover"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD

=======
                {group.messages.map((message,) => (
                  <MessageBubble
                    key = {message.id,}
                    message = {message,}
                    isUserMessage = {message.sender_id === user?.id,}
                  />                ))}
              </div>
            </div>
          ))
>>>>>>>         )}
        <div ref={messagesEndRef} />
      </div>
ursor/fix-website-loading-errors-and-merge-6662
                  />;
                </AspectRatio>;
              </div>            )}
            <div>;



=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
                ))}
              </div>;
            </div>;
          ));
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        )}

        <div ref={messagesEndRef} />;
      </div>;


>>>>>>>       {/* Input */}
      <div className="p-3 border-t border-zion-purple/20">;
        <form onSubmit={handleSendMessage} className="flex items-start gap-2">;
          <textarea
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        )}
        <div ref={messagesEndRef} />
      </div>
      {/* Input */}
      <div className="p-3 border-t border-zion-purple/20">
        <form onSubmit={handleSendMessage} className="flex items-start gap-2">
          <textarea
            value = {messageText,}
            onChange = {(e,) => setMessageText(e.target.value),}
            onKeyDown = {handleKeyDown,}
            placeholder="Type a message..."
            className="flex-1 bg-zion-blue-dark/30 border border-zion-purple/20 rounded-md p-2 min-h-[80px] text-black focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            ref = {inputRef,}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD

=======
          />
          <Button
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
          />
          <Button
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="flex-1 bg-zion-blue-dark/30 border border-zion-purple/20 rounded-md p-2 min-h-[80px] text-black focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            ref={inputRef}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

          />
          <Button 

=======
>>>>>>>           />
          <Button 
>>>>>>>             type="submit"
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          />
          <Button 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
          />
          <Button 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            type="submit"
>>>>>>>             className="bg-zion-purple hover: bg-zion-purple-dark text-white"
          >
            Send
          </Button>
        </form>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
      </div>;
    </div>;
  );
};
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      </div>;
    </div>;
  );
};
      </div>
    </div>
  )
}
<<<<<<< HEAD
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            Send;
          </Button>;
        </form>;
      </div>;
    </div>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 
      </div>
    </div>
  )

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
