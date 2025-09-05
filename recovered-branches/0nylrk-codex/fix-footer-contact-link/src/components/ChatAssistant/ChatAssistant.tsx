import React, { useState, useEffect, useRef, ReactNode } from 'react',
import { ChatMessage } from './ChatMessage',
import { ChatInput } from './ChatInput',
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar",
import { Button } from "@/components/ui/button",
import { X } from "lucide-react",export interface Message {
  id: string,
  role: 'user' | 'assistant',
  message: string,
  timestamp: Date,
  read?: boolean
}

export interface ChatAssistantProps {
  isOpen: boolean,
  onClose: () => void,
  recipient: {
    id: string,
    name: string,
    avatarUrl?: string,
    role?: string
  },
  conversationId?: string,
  initialMessages?: Message[],
  onSendMessage: (message: string, conversationId?: string) => Promise<void>,
  contextHeader?: ReactNode
}

export function ChatAssistant({
  isOpen,
  onClose,
  recipient,
  conversationId,
  initialMessages = [],
  onSendMessage,
  contextHeader
}: ChatAssistantProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages),
  const messagesEndRef = useRef<HTMLDivElement | null>(null),
import React, {useState, useEffect, useRef, ReactNode} from 'react';

export interface Message {id: string,
  role: 'user' | 'assistant';
  message: string,
  timestamp: Date,
  read?: boolean}

export interface ChatAssistantProps {isOpen: boolean,
  onClose: () => void;
  recipient: {
    id: string,
    name: string,
    avatarUrl?: string;
    role?: string};
  conversationId?: string;
  initialMessages?: Message[];
  onSendMessage: (message: string, conversationId?: string) => Promise<void>;
  contextHeader?: ReactNode
}

export function ChatAssistant(_{isOpen, onClose, recipient, conversationId, initialMessages = [], onSendMessage, contextHeader}: ChatAssistantProps) {const [messages, setMessages] = useState<Message[]>(initialMessages);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  
  useEffect_(() => {
    if (initialMessages.length > 0) {
      setMessages(initialMessages)
    }
  }, [initialMessages]),

  useEffect(() => {
    scrollToBottom()
  }, [messages]),

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  },
  
  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return,
    
    // Add user message to the chat,
const newMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      message,
      timestamp: new Date()
    },
    
    setMessages((prev: Message[]) => [...prev, newMessage]),    
    // Send message to recipient via the provided handler,
await onSendMessage(message, conversationId)
  },

  if (!isOpen) return null,

  return (
    <div className=&quot;fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4&quot;>
      <div className=&quot;w-full max-w-xl bg-zion-blue rounded-lg shadow-xl overflow-hidden flex flex-col max-h-[80vh]&quot;>
        {/* Header */}
        <div className=&quot;bg-zion-blue-dark p-3 flex items-center justify-between border-b border-zion-purple/20&quot;>
          <div className=&quot;flex items-center space-x-3&quot;>
            <Avatar className=&quot;h-10 w-10 border border-zion-purple/20&quot;>
              <AvatarImage src={recipient.avatarUrl} alt={recipient.name} />
              <AvatarFallback className=&quot;bg-zion-purple/20 text-white&quot;>
                {recipient.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className=&quot;font-medium text-white&quot;>{recipient.name}</div>
              {recipient.role && (
                <div className=&quot;text-xs text-zion-slate&quot;>{recipient.role}</div>              )}
            </div>
          </div>
          <Button,
variant=&quot;ghost&quot; 
            size=&quot;icon&quot;
            className=&quot;text-white hover:bg-zion-purple/10 rounded-full&quot;
            onClick={onClose}          >
            <X className=&quot;h-5 w-5&quot; />
          </Button>
        </div>
        
        {/* Context Header (Optional) */}
        {contextHeader && (
          <div className=&quot;border-b border-zion-purple/20 bg-zion-blue-dark/50 p-3&quot;>            {contextHeader}
          </div>
        )}
        
        {/* Messages */}
        <div className=&quot;flex-1 overflow-y-auto p-4 space-y-4&quot;>
          {messages.length === 0 ? (
            <div className=&quot;text-center text-zion-slate py-8&quot;>              <p>Start a conversation with {recipient.name}</p>
            </div>
          ) : (messages.map((msg) => (
              <ChatMessage,
key={msg.id} 
                role={msg.role}
                message={msg.message}
              />
            ))
          )}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input */}
        <div className=&quot;p-3 border-t border-zion-purple/20 bg-zion-blue-dark/30&quot;>
          <ChatInput onSend={handleSendMessage} />        </div>
      </div>
    </div>
  )
}