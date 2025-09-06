<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState, useEffect, useRef, ReactNode } from 'react';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { ChatMessage  } from './ChatMessage';
import { ChatInput  } from './ChatInput';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
<<<<<<< HEAD
<<<<<<< HEAD
export interface Message {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {ChatMessage} from './ChatMessage';
import {ChatInput} from './ChatInput';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {X} from "lucide-react";
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState, useEffect, useRef, ReactNode } from 'react',
import { ChatMessage } from './ChatMessage',
import { ChatInput } from './ChatInput',
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { X } from "lucide-react",
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export interface Message {
=======
export interface Message {export interface Message {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export interface Message {export interface Message {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  id: string,
  role: 'user' | 'assistant',
  message: string,
  timestamp: Date,
<<<<<<< HEAD
<<<<<<< HEAD
  read?: boolean
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    id: string,
    name: string,;


<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}

=======
  read?: boolean}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  read?: boolean}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

  read?: boolean
}
export interface ChatAssistantProps {

    id: string,
    name: string,;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    avatarUrl?: string;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    role?: string
  }

  conversationId?: string;
  initialMessages?: Message[],
  onSendMessage: (message: string, conversationId?: string) => Promise<void>,
  contextHeader?: ReactNode
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export function ChatAssistant({

export function ChatAssistant({;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

import {ChatMessage} from './ChatMessage';
import {ChatInput} from './ChatInput';

<<<<<<< HEAD
=======
import {ChatMessage} from './ChatMessage';
import {ChatInput} from './ChatInput';

export function ChatAssistant({

export function ChatAssistant({;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
import React, { useState, useEffect, useRef, ReactNode } from 'react';
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import React, { useState, useEffect, useRef, ReactNode } from 'react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import React, { useState, useEffect, useRef, ReactNode } from 'react';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  isOpen;
  onClose;
  recipient;
  conversationId;

  initialMessages = [];
<<<<<<< HEAD
<<<<<<< HEAD
  onSendMessage;
<<<<<<< HEAD
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
  contextHeader;
}: ChatAssistantProps) {;

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  contextHeader
}: ChatAssistantProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (initialMessages.length > 0) {
      setMessages(initialMessages)
    }
  }, [initialMessages]);
<<<<<<< HEAD
  contextHeader;
}: ChatAssistantProps) {;

  const [messages, setMessages] = useState<Message[]>(initialMessages),;
  const messagesEndRef = useRef<HTMLDivElement | null>(null),;
  useEffect(() => {;
    if (initialMessages.length > 0) {;
      setMessages(initialMessages);
    }
  }, [initialMessages]),
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  useEffect(() => {
=======
  onSendMessage;  useEffect(() => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  onSendMessage;  useEffect(() => {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    scrollToBottom()
  }, [messages]);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
<<<<<<< HEAD
<<<<<<< HEAD
  }
import React, { useState, useEffect, useRef, ReactNode } from 'react',
import { ChatMessage } from './ChatMessage',
import { ChatInput } from './ChatInput',
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { X } from "lucide-react",
export interface Message {
  id: string,
  role: 'user' | 'assistant',
  message: string,
  timestamp: Date,
  read?: boolean
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState, useEffect, useRef, ReactNode } from 'react',;
import { ChatMessage } from './ChatMessage',;
import { ChatInput } from './ChatInput',;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { X } from "lucide-react",;
export interface Message {;
  id: string,;
  role: 'user' | 'assistant',;
  message: string,;
  timestamp: Date,;
  read?: boolean;
}
;
export interface ChatAssistantProps {;
  isOpen: boolean,;
  onClose: () => void,;
  recipient: {;
    id: string,;
    name: string,;
    avatarUrl?: string,;
    role?: string;
  },;
  conversationId?: string,;
  initialMessages?: Message[],;
  onSendMessage: (message: string, conversationId?: string) => Promise<void>,;
  contextHeader?: ReactNode;
}
;
export function ChatAssistant({;
  isOpen,;
  onClose,;
  recipient,;
  conversationId,;
  initialMessages = [],;
  onSendMessage,;
<<<<<<< HEAD
=======
  contextHeader;
}: ChatAssistantProps) {;

<<<<<<< HEAD
  contextHeader;
}: ChatAssistantProps) {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const [messages, setMessages] = useState<Message[]>(initialMessages),;
  const messagesEndRef = useRef<HTMLDivElement | null>(null),;
  useEffect(() => {;
    if (initialMessages.length > 0) {;
      setMessages(initialMessages);
    }
  }, [initialMessages]),
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a




<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  useEffect(() => {
    scrollToBottom()
  }, [messages]);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
=======
  }

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  useEffect(() => {
=======
  }  useEffect(() => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  }  useEffect(() => {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    scrollToBottom()
  }, [messages]),

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  },
<<<<<<< HEAD

=======
  
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return
    // Add user message to the chat
    const newMessage: Message = {
<<<<<<< HEAD
=======

<<<<<<< HEAD

  useEffect(() => {;
    if (initialMessages && initialMessages.length > 0) {;
      setMessages(initialMessages);
    }
  }, [initialMessages]);

  useEffect(() => {;
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {;
    messagesEndRef && messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (message: string) => {;
    if (!message && message.trim()) return,;

    // Add user message to the chat;
    const newMessage: Message = {;
      id: Date && Date.now().toString(),;
      role: 'user',;
      message;
      timestamp: new Date();
    };

    setMessages((prev: Message[]) => [...prev, newMessage]);

    // Send message to recipient via the provided handler;
    await onSendMessage(message, conversationId);
  };


  if (!isOpen) return null;

<<<<<<< HEAD
=======
      id: Date.now().toString()
      role: 'user'
      message;
      timestamp: new Date()
    }
    setMessages((prev: Message[]) => [...prev, newMessage]);
    // Send message to recipient via the provided handler
    await onSendMessage(message, conversationId)
  }
  if (!isOpen) return null;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      id: Date.now().toString(),
      role: 'user',
      message,
      timestamp: new Date()
    },
    
    setMessages((prev: Message[]) => [...prev, newMessage]),
    
    // Send message to recipient via the provided handler
    await onSendMessage(message, conversationId)
  },

  if (!isOpen) return null,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">;
      <div className="w-full max-w-xl bg-zion-blue rounded-lg shadow-xl overflow-hidden flex flex-col max-h-[80vh]">;
        {/* Header */}
        <div className="bg-zion-blue-dark p-3 flex items-center justify-between border-b border-zion-purple/20">;
          <div className="flex items-center space-x-3">;
            <Avatar className="h-10 w-10 border border-zion-purple/20">;
              <AvatarImage src={recipient && recipient.avatarUrl} alt={recipient && recipient.name} />;
              <AvatarFallback className="bg-zion-purple/20 text-white">;
                {recipient && recipient.name.charAt(0).toUpperCase()}
              </AvatarFallback>;
            </Avatar>;
            <div>;
              <div className="font-medium text-white">{recipient && recipient.name}</div>;
              {recipient && recipient.role && (;
                <div className="text-xs text-zion-slate">{recipient && recipient.role}</div>;
              )}
        {/* Context Header (Optional) */}
        {contextHeader && (;
          <div className="border-b border-zion-purple/20 bg-zion-blue-dark/50 p-3">;
            {contextHeader}
          </div>;
        )}
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">;
          {messages && messages.length === 0 ? (;
            <div className="text-center text-zion-slate py-8">;
              <p>Start a conversation with {recipient && recipient.name}</p>;
            </div>;
          ) : (;
            messages && messages.map((msg) => (;
              <ChatMessage
<<<<<<< HEAD

=======
<<<<<<< HEAD


                key={msg.id} 


=======
                key={msg.id} 



  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-zion-blue rounded-lg shadow-xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Header */}
        <div className="bg-zion-blue-dark p-3 flex items-center justify-between border-b border-zion-purple/20">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10 border border-zion-purple/20">
              <AvatarImage src={recipient.avatarUrl} alt={recipient.name} />
              <AvatarFallback className="bg-zion-purple/20 text-white">
                {recipient.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium text-white">{recipient.name}</div>
              {recipient.role && (
                <div className="text-xs text-zion-slate">{recipient.role}</div>
              )}
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-zion-purple/10 rounded-full"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        {/* Context Header (Optional) */}
        {contextHeader && (
          <div className="border-b border-zion-purple/20 bg-zion-blue-dark/50 p-3">
            {contextHeader}
          </div>
        )}
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 ? (
            <div className="text-center text-zion-slate py-8">
              <p>Start a conversation with {recipient.name}</p>
            </div>
          ) : (
            messages.map((msg) => (
              <ChatMessage
                key={msg.id}
                key={msg.id} 
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                role={msg.role}
=======
    if (!message.trim()) return
    // Add user message to the chat
    const newMessage: Message = {                role={msg.role}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    if (!message.trim()) return
    // Add user message to the chat
    const newMessage: Message = {                role={msg.role}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                message={msg.message}
              />
            ))
          )}
          <div ref={messagesEndRef} />
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                key={msg && msg.id} 
                role={msg && msg.role}
                message={msg && msg.message}
              />;
            ));
          )}
          <div ref={messagesEndRef} />;
        </div>;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        {/* Input */}

import { Button } from '@/components / ui / button';
import { X } from './lucide-react';
export interface Message {
  id: string,
  role: 'user' | 'assistant',
  message: string,
  timestamp: Date,
  read?: boolean;
}
export interface ChatAssistantProps {
  is_open: boolean,
  on_close: () => void,
  recipient: {
    id: string,
    name: string,
    avatar_url?: string;
    role?: string;
  }
  conversation_id?: string;
  initial_messages?: Message[];
  onSendMessage: (message: string, conversation_id?: string) => Promise < void>;
  context_header?: ReactNode;
}
export /**
 * ChatAssistant - Function description
 */
function ChatAssistant() {
  const [messages, set_messages] = useState < Message[]>(initial_messages);
  const messagesEndRef = useRef < HTMLDivElement | null>(null);
;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      set_messages (initial_messages);
    }
  }, [initial_messages]);
;
  useEffect (() => {
    scrollToBottom ();
  }, [messages]);
;
  const scrollToBottom = () =>: any {
    messagesEndRef.current?.scrollIntoView ({ behavior: 'smooth' });
  }
;
  const handleSendMessage = async (message: string) => {
    if () return, ) {
  $2
}
    // Add user message to the chat;
    const new_message: Message = {
      id: Date.now ().to_string (),
      role: 'user',
      message;
      timestamp: new Date ();
    }
;
    set_messages ((prev: Message[]) => [...prev, new_message]);
;
    // Send message to recipient via the provided handler;
    await onSendMessage (message, conversation_id);
  }
;
  // Check condition
if (return null) {
  $2
}
  return (
    <div className="fixed inset - 0 bg - black / 50 z - 50 flex items - center justify - center p-4">;
      <div className="w - full max - w-xl bg - zion - blue rounded - lg shadow - xl overflow - hidden flex flex - col max-h-[80vh]">;
        {/* Header */}
        <div className="bg - zion - blue - dark p - 3 flex items - center justify - between border - b border - zion-purple / 20">;
          <div className="flex items - center space-x-3">;
            <Avatar className="h - 10 w - 10 border border - zion-purple / 20">;
              <AvatarImage src={recipient.avatar_url} alt={recipient.name} />;
              <AvatarFallback className="bg - zion - purple / 20 text-white">;
                {recipient.name.char_at (0).toUpperCase ()}
              </AvatarFallback>;
            </Avatar>;
            <div>;
              <div className="font - medium text-white">{recipient.name}</div>;
              {recipient.role && (
                <div className="text - xs text - zion-slate">{recipient.role}</div>)}
            </div>;
          </div>;
          <Button;
            variant="ghost";
            size="icon";
            className="text - white hover:bg - zion - purple / 10 rounded-full";
            on_click={on_close}
          >;
            <X className="h - 5 w-5" />;
          </Button>;
        </div>;
        {/* Context Header (Optional) */}
        {context_header && (
          <div className="border - b border - zion - purple / 20 bg - zion - blue - dark / 50 p-3">;
            {context_header}
          </div>)}
        {/* Messages */}
        <div className="flex - 1 overflow - y-auto p - 4 space-y-4">;
          {messages.length === 0 ? (
            <div className="text - center text - zion - slate py-8">;
              <p > Start a conversation with {recipient.name}</p>;
            </div>) : (
            messages.map ((msg) => (
              <ChatMessage;
                key={msg.id}
                role={msg.role}
                message={msg.message}
              />)))}
          <div ref={messagesEndRef} />;
        </div>;
        {/* Input */}
        <div className="p - 3 border - t border - zion - purple / 20 bg - zion - blue-dark / 30">;
          <ChatInput on_send={handleSendMessage} />;
        </div>;
      </div>;
    </div>);
<<<<<<< HEAD

}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
        <div className="p-3 border-t border-zion-purple/20 bg-zion-blue-dark/30">
          <ChatInput onSend={handleSendMessage} />
        </div>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  )
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
        {/* Input */}
        <div className="p-3 border-t border-zion-purple/20 bg-zion-blue-dark/30">
          <ChatInput onSend={handleSendMessage} />
        </div>
      </div>
    </div>
  )

import React, { useState, useEffect, useRef, ReactNode } from 'react',;
import { ChatMessage } from './ChatMessage',;
import { ChatInput } from './ChatInput',;
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",;
import { Button } from "@/components/ui/button",;
import { X } from "lucide-react",;
;
export interface Message {;
  id:string,;
  role:'user' | 'assistant',;
  message:string,;
  timestamp:Date,;
  read?:boolean;
}
;
export interface ChatAssistantProps {;
  isOpen:boolean,;
  onClose:() => void,;
  recipient:{;
    id:string,;
    name:string,;
    avatarUrl?:string,;
    role?:string;
  },;
  conversationId?:string,;
  initialMessages?:Message[],;
  onSendMessage:(message:string, conversationId?:string) => Promise<void>,;
  contextHeader?:ReactNode,;
}
;
export function ChatAssistant({;
  isOpen,;
  onClose,;
  recipient,;
  conversationId,;
  initialMessages = [],;
  onSendMessage,;
  contextHeader;
} ChatAssistantProps) {;
  const [messages, setMessages] = useState<Message[]>(initialMessages),;
  const messagesEndRef = useRef<HTMLDivElement | null>(null),;
  ;
  useEffect(() => {;
    if (initialMessages.length > 0) {;
      setMessages(initialMessages),;
    }
  }, [initialMessages]),;
;
  useEffect(() => {;
    scrollToBottom(),;
  }, [messages]),;
;
  const scrollToBottom = () => {;
    messagesEndRef.current?.scrollIntoView({ behavior:'smooth' }),;
  },;
  ;
  const handleSendMessage = async (message:string) => {;
    if (!message.trim()) return,;
    ;
    // Add user message to the chat;
    const newMessage:Message = {;
      id:Date.now().toString(),;
      role:'user',;
      message,;
      timestamp:new Date();
    },;
    ;
    setMessages((prev:Message[]) => [...prev, newMessage]),;
    ;
    // Send message to recipient via the provided handler;
    await onSendMessage(message, conversationId),;
  },;
;
  if (!isOpen) return null,;
;
  return (;
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">;
      <div className="w-full max-w-xl bg-zion-blue rounded-lg shadow-xl overflow-hidden flex flex-col max-h-[80vh]">;
        {/* Header */}
        <div className="bg-zion-blue-dark p-3 flex items-center justify-between border-b border-zion-purple/20">;
          <div className="flex items-center space-x-3">;
            <Avatar className="h-10 w-10 border border-zion-purple/20">;
              <AvatarImage src={recipient.avatarUrl} alt={recipient.name} />;
              <AvatarFallback className="bg-zion-purple/20 text-white">;
                {recipient.name.charAt(0).toUpperCase()}
              </AvatarFallback>;
            </Avatar>;
            <div>;
              <div className="font-medium text-white">{recipient.name}</div>;
              {recipient.role && (;
                <div className="text-xs text-zion-slate">{recipient.role}</div>;
              )}
            </div>;
          </div>;
          <Button ;
            variant="ghost" ;
            size="icon";
            className="text-white hover:bg-zion-purple/10 rounded-full";
            onClick={onClose}
          >;
            <X className="h-5 w-5" />;
          </Button>;
        </div>;
        ;
        {/* Context Header (Optional) */}
        {contextHeader && (;
          <div className="border-b border-zion-purple/20 bg-zion-blue-dark/50 p-3">;
            {contextHeader}
          </div>;        )}
        ;
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">;
          {messages.length === 0 ? (;
            <div className="text-center text-zion-slate py-8">;
              <p>Start a conversation with {recipient.name}</p>;
            </div>;
          ) :(;
            messages.map((msg) => (;
              <ChatMessage;
                key={msg.id} ;                role={msg.role}
                message={msg.message}
              />;
            ));
          )}
          <div ref={messagesEndRef} />;
        </div>;
        ;
        {/* Input */}
        <div className="p-3 border-t border-zion-purple/20 bg-zion-blue-dark/30">;
          <ChatInput onSend={handleSendMessage} />;
        </div>;
      </div>;
    </div>;
  ),; export interface Message {
  id: string;
role: 'user' | 'assistant';
message: string;
timestamp: Date;
read?: boolean 
}export interface ChatAssistantProps {
  isOpen: boolean;
onClose: () => void;
recipient: {
  id: string;
name: string;
avatarUrl?: string;
role?: string 
};
conversationId?: string;
initialMessages?: Message[];
onSendMessage: (message: string, conversationId?: string) => Promise<void>;
contextHeader?: ReactNode 
}export function ChatAssistant ({
  isOpen;
onClose;
recipient;
conversationId;
initialMessages = [];
onSendMessage;
contextHeader 
}: ChatAssistantProps) {
  const [messages, setMessages] = useState<Message[]> (initialMessages);
const messagesEndRef = useRef<HTMLDivElement | null> (null);
if (initialMessages.length > 0) {
  //Send message to recipient via the provided handler await onSendMessage (message, conversationId) 
};
if (!isOpen) return null;
return () 
}</div> </div> <Button > <X className="h-5 w-5" /> </Button> </div> {
  contextHeader 
}</div>) 
}<p>Start a conversation with {
  recipient.name 
}</p> </div>) : (messages.map ( (msg) => (<ChatMessage key= {
  msg.id 
}role= {
  msg.role 
}message= {
  msg.message 
}/>) ) ) 
}<div ref= {
  messagesEndRef 
}/> </div> </div> </div> </div>) 
}
}
};
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
};
}


}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  )
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
