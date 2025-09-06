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

            </div>;
                    src = {activeConversation && activeConversation.context_data.image_url,}
                    alt = {activeConversation && activeConversation.context_data.title || "Context",}

                    className="object-cover"
                    loading="lazy"
      {/* Context information (if available) */}
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
                    key = {message.id,}
                    message = {message,}
                    isUserMessage = {message.sender_id === user?.id,}
                  />                ))}
              </div>
            </div>
          ))
          />
          <Button

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


    </div>);
}

      </div>
    </div>
  )
