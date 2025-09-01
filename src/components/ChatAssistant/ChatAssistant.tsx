import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  message: string;
  timestamp: Date;
  read?: boolean
};
export interface ChatAssistantProps extends React.PropsWithChildren<{}> {

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
  const [messages, setMessages] = useState(initialMessages);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  
      timestamp: new Date(),;
  ;
  ;
  ;
<<<<<<< HEAD
  ;

};
=======
  };
>>>>>>> main
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
=======
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
    // Simulate AI response
    setTimeout(: unknown {
      const aiMessage: Message = {

  id: (Date.now() + 1).toString(),
        role: 'assistant',
        message: 'Thank you for your message! Our team will get back to you soon.',
        timestamp: new Date(),;
  ;
  ;
<<<<<<< HEAD
  ;
  ;

};
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
=======
>>>>>>> main
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

    return ()
      <button
        onClick = {toggleChat}
        className="fixed bottom-6 right-6 bg-zion-cyan text-zion-blue-dark p-4 rounded-full shadow-lg hover:bg-zion-cyan-light transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:ring-offset-2 z-50"
        
      >;"
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">;"
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />;
        </svg>;
      </button>;
    )}
  return ("    <div className="fixed bottom-6 right-6 w-96 h-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50 flex flex-col">
      {/* Header */}"
      <div className="bg-zion-cyan text-zion-blue-dark p-4 rounded-t-lg flex items-center justify-between">"
        <h3 className="font-semibold">Chat with Zion Tech Group</h3>
        <button
          onClick={closeChat}"
          className="text-zion-blue-dark hover:text-zion-blue-dark/80 transition-colors"

          <X size={20}   />
        </button>
      </div>
      {/* Messages */}"
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? ("
          <div className="text-center text-gray-500 mt-8">
            <p>How can we help you today?</p>
          </div>
        ) : messages.map((message: unknown (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}

              <div`
                className={`max-w-xs px-4 py-2 rounded-lg ${message.role === 'user''
                    ? 'bg-zion-cyan text-zion-blue-dark''
                    : 'bg-gray-100 text-gray-800'`
                }`}
"
                <p className="text-sm">{message.message}</p>"
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </div>;
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>
      {/* Input */}"
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">;"
        <div className="flex space-x-2">
          <input"
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}"
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
          />
          <button"
            type="submit"
            className="bg-zion-cyan text-zion-blue-dark p-2 rounded-lg hover:bg-zion-cyan-light transition-colors"
          >
            <Send size={20}   />;
          </button>;
        </div>;
      </form>;
    </div>;
  )}
'"`