<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, X, Minimize2, Maximize2, MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { ChatMessage, Message } from './ChatMessage';
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { X } from "lucide-react";
<<<<<<< HEAD

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  message: string;
  timestamp: Date;
  read?: boolean;
}

export interface ChatAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  recipient: {
    id: string;
    name: string;
    avatarUrl?: string;
    role?: string;
  };
  conversationId?: string;
  initialMessages?: Message[];
  onSendMessage: (message: string, conversationId?: string) => Promise<void>;
  contextHeader?: ReactNode;
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
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    if (initialMessages.length > 0) {
      setMessages(initialMessages);
    }
  }, [initialMessages]);
=======
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974



}
export interface ChatAssistantProps extends React.PropsWithChildren<{}> {

  isOpen?: boolean;
  onClose?: ()    => void;

export interface ChatAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  recipient: {
    id: string;
    name: string;
    avatarUrl?: string;
    role?: string;
  };
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

<<<<<<< HEAD
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;
    
    // Add user message to the chat
    const newMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      message,
      timestamp: new Date()
    };
    
    setMessages((prev: Message[]) => [...prev, newMessage]);
    
    // Send message to recipient via the provided handler
    await onSendMessage(message, conversationId);
  };

  if (!isOpen) return null;

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
                role={msg.role}
                message={msg.message}
              />
            ))
          )}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input */}
        <div className="p-3 border-t border-zion-purple/20 bg-zion-blue-dark/30">
          <ChatInput onSend={handleSendMessage} />
        </div>
      </div>
    </div>
  );
}
=======
  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [
    isGuest
    initialMessages
    storedGuestMessages
    setStoredGuestMessages
    recipient.id])
  // Effect for logged-in user messages
  useEffect((,) => {
    if (!isGuest) {
      // Update state if initialMessages prop changes (e.g. new conversation loaded)
      setLoggedInMessages(initialMessages)
    }
  }, [isGuest, initialMessages, recipient.id])
  // Determine currentMessages and setCurrentMessages based on isGuest
  const currentMessages = isGuest ? displayGuestMessages : loggedInMessages
  const setCurrentMessages = (
    valueOrFn: Message[] | ((val: Message[],) => Message[])
  ) => {
    if (isGuest) {
      const newMessages = null;
        valueOrFn instanceof Function
          ? valueOrFn(displayGuestMessages)
          : valueOrFn
      setDisplayGuestMessages(newMessages)
      setStoredGuestMessages(newMessages), // Always update localStorage for guests
    } else {      setLoggedInMessages(newMessages)
    }
  }
  const debouncedApiCallParams = useDebounce(pendingApiCallParams, 3000)
  useEffect((,) => {
    if (debouncedApiCallParams) {
      onSendMessage(debouncedApiCallParams.message
        debouncedApiCallParams.conversationId)
    }
  }, [debouncedApiCallParams, onSendMessage])
  useEffect((,) => {
    scrollToBottom()
  }, [currentMessages]), // currentMessages will correctly refer to either guest or logged-in state
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  const handleSendMessage = async (messageContent: string,) => {
    if (!messageContent.trim()) return
    if (!isGuest) {
      // Logged-in user
      const newMessage: Message = {
        id: Date.now().toString()
        role: 'user'
        message: messageContent
        timestamp: new Date()}
      setCurrentMessages((prev: Message[],) => [...prev, newMessage])
      setPendingApiCallParams({ message: messageContent, conversationId })
    } else {
      // Guest user
      setGuestMessage(messageContent)
      setShowGuestModal(true)
    }
  }
  const handleModalSendConfirm = () => {
    if (!guestMessage) return
    const newMessage: Message = {
      id: Date.now().toString()
      role: 'user'
      message: guestMessage
      timestamp: new Date()}
    setCurrentMessages((prev: Message[],) => [...prev, newMessage]), // This will now use the guest-aware setCurrentMessages
    setPendingApiCallParams({ message: guestMessage, conversationId })
    setShowGuestModal(false)
    setGuestMessage(null)
  }
  const handleModalCancel = () => {
    setShowGuestModal(false);
    setGuestMessage(null);
  };

  useEffect(() => {
    if (!showGuestModal) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleModalCancel();
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])
  if (!isOpen) return null            aria-label="Close chat"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        {contextHeader && (;
          <div className="border-b border-zion-purple/20 bg-zion-blue-dark/50 p-3">;
            {contextHeader}
          </div>        )}
        {/* Messages */}
        <div
          className="flex-1 overflow-y-auto p-4 space-y-4"

                      {q}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            currentMessages.map((msg,) => (
              <ChatMessage key={msg.id} role={msg.role} message={msg.message} />
            ))
          )}        <div
          className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
            <h3
              id="confirm-message-title"
              className="text-lg font-semibold text-white mb-4"
            >
              Confirm Message
            </h3>
            <p className="text-zion-slate mb-6 whitespace-pre-wrap break-words">
              {guestMessage}
            </p>
            <div className="flex justify-end space-x-3">
              <Button
                variant="outline"                className="text-white border-zion-purple hover:bg-zion-purple/10"
              >
                Cancel
              </Button>
              <Button

                onClick={handleModalSendConfirm}

                className="bg-zion-purple hover:bg-zion-purple-dark text-white"
              >
                Send
              </Button>
            </div>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              <AnimatePresence>
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
              </AnimatePresence>
              
              {isTyping && (
                <motion.div
                  className="flex gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="w-8 h-8 rounded-full bg-zion-cyan flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-zion-blue-dark/50 text-white px-4 py-3 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-zion-blue-light/20">
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-4"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-zion-slate-light mt-2 text-center">
                Ask me about our services, pricing, or schedule a consultation
              </p>
            </div>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default ChatAssistant;
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
