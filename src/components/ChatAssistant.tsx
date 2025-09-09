import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';

interface ChatAssistantProps {
  isOpen?: boolean;
  onClose?: () => void;
  recipient?: {
    id: string;
    name: string;
    avatarUrl: string;
    role: string;
  };
  onSendMessage?: (message: string) => Promise<void>;
}

export function ChatAssistant({ 
  isOpen: externalIsOpen, 
  onClose, 
  recipient,
  onSendMessage 
}: ChatAssistantProps = {}) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{ 
    type: 'user' | 'assistant'; 
    content: string;
    timestamp: Date;
    id: string;
  }>>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Use external state if provided, otherwise use internal state
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const setIsOpen = externalIsOpen !== undefined ? (onClose || (() => {})) : setInternalIsOpen;

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = { 
      type: 'user' as const, 
      content: message,
      timestamp: new Date(),
      id: `user-${Date.now()}`
    };
    setChatHistory(prev => [...prev, userMessage]);
    const currentMessage = message;
    setMessage('');

    if (onSendMessage) {
      try {
        await onSendMessage(currentMessage);
      } catch (error) {
        console.error('Error sending message:', error);
      }
    } else {
      // Simulate assistant response with typing indicator
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const assistantMessage = { 
          type: 'assistant' as const, 
          content: 'Thank you for your message! I\'m here to help you with any questions about our services, marketplace, or technical support. How can I assist you today?',
          timestamp: new Date(),
          id: `assistant-${Date.now()}`
        };
        setChatHistory(prev => [...prev, assistantMessage]);
      }, 2000);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (!isOpen) {
    return (
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-4 rounded-full shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 z-50 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <MessageCircle className="w-6 h-6" />
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
      </motion.button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Zion AI Assistant</h3>
                <p className="text-xs text-white/80">Always here to help</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 hover:bg-white/20 rounded transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
import React, { useState } from 'react';

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! I\'m your AI assistant. How can I help you today?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user' as const,
      content: inputValue
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        type: 'bot' as const,
        content: 'Thank you for your message! Our team will get back to you soon. In the meantime, feel free to explore our services or contact us directly.'
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-zion-cyan text-white rounded-full shadow-lg hover:bg-zion-cyan/90 transition-colors flex items-center justify-center text-2xl"
        aria-label="Open chat assistant"
      >
        💬
      </button>
    );
  }

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-xl z-50">
          <div className="bg-zion-blue p-3 rounded-t-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold">Zion Tech Assistant</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-zion-slate-light hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-zion-blue-light">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 bg-zion-blue border border-zion-blue-light rounded text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-zion-cyan text-white rounded hover:bg-zion-cyan/90 transition-colors"
          >
            Send
          </button>
        </div>
      )}
    </>
  );
};
