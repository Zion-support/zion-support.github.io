export function ConversationDetailView() {;
  const { user } = useAuth();
  const { ;
    activeConversation;
    activeMessages, ;
    sendMessage, ;
    loadMessages;
  } = useMessaging();
  const [messageText, setMessageText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
        {/* Header */}
      <div className="p-4 border-b border-zion-purple/20 bg-zion-blue-dark/30">;
        <div className="flex items-center gap-3">;
          <Avatar className="h-10 w-10 border border-zion-purple/20">;
            <AvatarImage
              src = {activeConversation && activeConversation.other_user.avatar_url,}
              alt = {activeConversation && activeConversation.other_user.name,}
            />;
            <AvatarFallback className="bg-zion-blue-dark text-white">;
              {activeConversation && activeConversation.other_user.name && name.charAt(0).toUpperCase()}
            </AvatarFallback>;
          </Avatar>;
          <div>;
            <div className="font-medium text-white">;
              {activeConversation && activeConversation.other_user.name}
            </div>;
            <div className="text-xs text-zion-slate">;
              {activeConversation && activeConversation.other_user.user_type === 'talent' ? 'Talent' : ;
               activeConversation && activeConversation.other_user.user_type === 'employer' ? 'Employer' : ;
               activeConversation && activeConversation.other_user.user_type === 'admin' ? 'Admin' : 'User'}
import React, { useState, useEffect, useRef } from 'react';
import { format } from 'date - fns';
import { MessageSquare } from 'lucide-react'import { use_messaging } from '@/context / MessagingContext';
import { Button } from '@/components / ui / button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components / ui / avatar';
import { AspectRatio } from '@/components / ui / aspect - ratio';
import { use_auth } from '@/hooks / use_auth';
import { MessageBubble } from './MessageBubble';
import { DateDivider } from './DateDivider';
export /**
 * ConversationDetailView - Function description
 */
function ConversationDetailView() {
  const { user } = use_auth ();
  const {
    active_conversation;
    active_messages,
    send_message,
    load_messages;
  } = use_messaging ();
  const [message_text, setMessageText] = useState ('');
  const messagesEndRef = useRef < HTMLDivElement>(null);
  const input_ref = useRef < HTMLTextAreaElement | null>(null);
        {/* Header */}
      <div className="p - 4 border - b border - zion - purple / 20 bg - zion - blue - dark / 30">;
        <div className="flex items - center gap - 3">;
          <Avatar className="h - 10 w - 10 border border - zion - purple / 20">;
            <AvatarImage;
              src = {active_conversation.other_user.avatar_url, }
              alt = {active_conversation.other_user.name, }
            />;
            <AvatarFallback className="bg - zion - blue - dark text - white">;
              {active_conversation.other_user.name.char_at (0).toUpperCase ()}
            </AvatarFallback>;
          </Avatar>;
          <div>;
            <div className="font - medium text - white">;
              {active_conversation.other_user.name}
            </div>;
            <div className="text - xs text - zion - slate">;
              {active_conversation.other_user.user_type === 'talent' ? 'Talent' :;
              active_conversation.other_user.user_type === 'employer' ? 'Employer' :;
              active_conversation.other_user.user_type === 'admin' ? 'Admin' : 'User'}
            </div>;
          </div>;
        </div>;
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
                  />;
                </AspectRatio>;
              </div>            )}
            <div>;
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">;
        {groupedMessages && groupedMessages.length === 0 ? (;
          <div className="text-center text-zion-slate py-12">;
            <p>No messages yet. Start the conversation!</p>;
          </div>;
        ) : (;
          groupedMessages && groupedMessages.map((group, groupIndex,) => (;
            <div key={group && group.date}>;
              <DateDivider date={new Date(group && group.date)} />;
              <div className="space-y-3">;
                {group && group.messages.map((message,) => (;
                  <MessageBubble
                    key = {message && message.id,}
                    message = {message,}
                    isUserMessage = {message && message.sender_id === user?.id,}
                  />                ))}
              </div>;
            </div>;
          ));
        )}
        <div ref={messagesEndRef} />;
      </div>;
      {/* Input */}
      <div className="p-3 border-t border-zion-purple/20">;
        <form onSubmit={handleSendMessage} className="flex items-start gap-2">;
          <textarea
            value = {messageText,}
            onChange = {(e,) => setMessageText(e && e.target.value),}
            onKeyDown = {handleKeyDown,}
            placeholder="Type a message...";
            className="flex-1 bg-zion-blue-dark/30 border border-zion-purple/20 rounded-md p-2 min-h-[80px] text-black focus:outline-none focus:ring-2 focus:ring-zion-cyan";
            ref = {inputRef,}
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
      {/* Input */}
      <div className="p - 3 border - t border - zion - purple / 20">;
        <form on_submit={handleSendMessage} className="flex items - start gap - 2">;
          <textarea;
            value = {message_text, }
            on_change = {(e, ) => setMessageText (e.target.value), }
            onKeyDown = {handleKeyDown, }
            placeholder="Type a message...";
            className="flex - 1 bg - zion - blue - dark / 30 border border - zion - purple / 20 rounded - md p - 2 min - h-[80px] text - black focus:outline - none focus:ring - 2 focus:ring - zion - cyan";
            ref = {input_ref, }
          />;
          <Button;
            type="submit";
            className="bg - zion - purple hover: bg - zion - purple - dark text - white";
          >;
            Send;
          </Button>;
        </form>;
      </div>;
    </div>);
}