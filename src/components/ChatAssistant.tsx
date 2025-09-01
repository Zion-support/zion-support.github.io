import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  X,
  Send,
  Phone,
  Mail,
  User,
  Bot,
  Minimize2,
  Maximize2
} from 'lucide-react';
import { contactInfo } from '../data/services.js';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
  isTyping?: boolean;
}

interface ChatAssistantProps {
  enabled?: boolean;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  theme?: 'light' | 'dark' | 'auto';
}

export const ChatAssistant: React.FC<ChatAssistantProps> = ({
  enabled = true,
  position = 'bottom-right',
  theme = 'auto'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your AI assistant. How can I help you with Zion Tech Group\'s services today?',
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "I'd be happy to help you learn more about our services. You can check our comprehensive pricing at /pricing or contact us directly.",
        `For immediate assistance, please call us at ${contactInfo.mobile} or email ${contactInfo.email}.`,
        "Our AI and cybersecurity solutions are designed to transform your business. Would you like to schedule a consultation?",
        "We offer enterprise-grade solutions including AI transformation, quantum computing, and blockchain technology. Which area interests you most?"
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];

      const assistantMessage: Message = {
        id: Date.now().toString(),
        text: randomResponse,
        sender: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputText);
    }
  };

  const quickActions = [
    {
      text: "View Services",
      action: () => window.location.href = '/services'
    },
    {
      text: "Get Pricing",
      action: () => window.location.href = '/pricing'
    },
    {
      text: "Contact Sales",
      action: () => window.location.href = `mailto:${contactInfo.email}`
    },
    {
      text: "Call Now",
      action: () => window.location.href = `tel:${contactInfo.mobile}`
    }
  ];

  const positionClasses = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4'
  };

  if (!enabled) return null;

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className={`mb-4 w-80 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col ${
              isMinimized ? 'h-12' : 'h-96'
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Zion Assistant</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Online</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  {isMinimized ? (
                    <Maximize2 className="w-4 h-4 text-gray-500" />
                  ) : (
                    <Minimize2 className="w-4 h-4 text-gray-500" />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.sender === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.sender === 'user'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Actions */}
                <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap gap-2">
                    {quickActions.map((action, index) => (
                      <button
                        key={index}
                        onClick={action.action}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      >
                        {action.text}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                    <button
                      onClick={() => handleSendMessage(inputText)}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </motion.button>
    </div>
  );
};