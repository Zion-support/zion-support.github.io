
<<<<<<< HEAD
import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { ChatMessage  } from './ChatMessage';
import { ChatInput  } from './ChatInput';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
export interface Message {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {ChatMessage} from './ChatMessage';
import {ChatInput} from './ChatInput';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {X} from "lucide-react";
import React, { useState, useEffect, useRef, ReactNode } from 'react',
import { ChatMessage } from './ChatMessage',
import { ChatInput } from './ChatInput',
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { X } from "lucide-react",
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export interface Message {
  id: string,
  role: 'user' | 'assistant',
  message: string,
  timestamp: Date,
  read?: boolean
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    id: string,
    name: string,;


<<<<<<< HEAD
}

  id: string
  role: 'user' | 'assistant'
  message: string
  timestamp: Date

  read?: boolean
}
export interface ChatAssistantProps {

  isOpen: boolean
  onClose: () => void
  recipient: {
    id: string
    name: string
    id: string,
    name: string,;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    avatarUrl?: string;
    role?: string
  }

  conversationId?: string;
  initialMessages?: Message[],
  onSendMessage: (message: string, conversationId?: string) => Promise<void>,
  contextHeader?: ReactNode
}
<<<<<<< HEAD
import {ChatMessage} from './ChatMessage';
import {ChatInput} from './ChatInput';

export function ChatAssistant({

export function ChatAssistant({;
=======

import {ChatMessage} from './ChatMessage';
import {ChatInput} from './ChatInput';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  isOpen;
  onClose;
  recipient;
  conversationId;

  initialMessages = [];
  onSendMessage;
<<<<<<< HEAD
  contextHeader
}: ChatAssistantProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (initialMessages.length > 0) {
      setMessages(initialMessages)
    }
  }, [initialMessages]);
  useEffect(() => {
    scrollToBottom()
  }, [messages]);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
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
  contextHeader;
}: ChatAssistantProps) {;

  contextHeader;
}: ChatAssistantProps) {;
=======
  contextHeader;
}: ChatAssistantProps) {;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [messages, setMessages] = useState<Message[]>(initialMessages),;
  const messagesEndRef = useRef<HTMLDivElement | null>(null),;
  useEffect(() => {;
    if (initialMessages.length > 0) {;
      setMessages(initialMessages);
    }
  }, [initialMessages]),
<<<<<<< HEAD
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]),

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  },
  
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  useEffect(() => {
    scrollToBottom()
  }, [messages]);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return
    // Add user message to the chat
    const newMessage: Message = {


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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

<<<<<<< HEAD
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

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

            </div>;
          </div>;
          <Button
            variant="ghost" 
            size="icon"
            className="text-white hover:bg-zion-purple/10 rounded-full"
            onClick={onClose}>;
            <X className="h-5 w-5" />;
          </Button>;
        </div>;


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


                key={msg.id} 


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                role={msg.role}
                message={msg.message}
              />
            ))
          )}
          <div ref={messagesEndRef} />
        </div>
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                key={msg && msg.id} 
                role={msg && msg.role}
                message={msg && msg.message}
              />;
            ));
          )}
          <div ref={messagesEndRef} />;
        </div>;

        {/* Input */}

        {/* Input */}
<<<<<<< HEAD
=======
        <div className="p - 3 border - t border - zion - purple / 20 bg - zion - blue - dark / 30">;
          <ChatInput on_send={handleSendMessage} />;
        </div>;
      </div>;
    </div>);

}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="p-3 border-t border-zion-purple/20 bg-zion-blue-dark/30">
          <ChatInput onSend={handleSendMessage} />
        </div>
      </div>
    </div>
  )

<<<<<<< HEAD
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
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
