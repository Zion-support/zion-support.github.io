:src/components/ChatAssistant.tsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  user?: {
    id: string;
    name: string;
    role: string;
  };
  onSendMessage?: (message: string) => Promise<string>;
  starterQuestions?: string[];
}

export function ChatAssistant({ 
  isOpen, 
  onClose, 
  user, 
  onSendMessage,
  starterQuestions = []
}: ChatAssistantProps) {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: message,
      sender: 'user',
      timestamp: new Date()
    };

    setChatHistory(prev => [...prev, userMessage]);
    setMessage('');
    setIsLoading(true);

    try {
      let botResponse = 'Thank you for your message! How can I help you today?';
      
      if (onSendMessage) {
        botResponse = await onSendMessage(message);
      }

      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setChatHistory(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, I encountered an error. Please try again.',
        sender: 'bot',
        timestamp: new Date()
      };
      setChatHistory(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStarterQuestion = (question: string) => {
    setMessage(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
const ChatAssistant: React.FC = () => {,
  const [isOpen, setIsOpen] = useState(false);,
  const [message, setMessage] = useState('');,
  const [messages, setMessages] = useState([,
    {
      id: 1,
text: "Hello! I'm Zion Tech's AI assistant. How can I help you today?","
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        isBot: false,
        timestamp: new Date(),
      };
,
      setMessages([...messages, newMessage]);
      setMessage('');
      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
text: "Thank you for your message! Our team will get back to you shortly. In the meantime, feel free to explore our services or contact us directly.","
          isBot: true,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {,
    if (e.key === 'Enter' && !e.shiftKey) {'
      e.preventDefault();
      handleSendMessage();
    }
  };
:src/components/ChatAssistant.tsx

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-end justify-end p-4"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
        
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="relative bg-white rounded-lg shadow-xl w-full max-w-md h-96 flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">AI Assistant</h3>
                <p className="text-xs text-gray-500">Online now</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {chatHistory.length === 0 && starterQuestions.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Quick questions:</p>
                {starterQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleStarterQuestion(question)}
                    className="block w-full text-left p-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            {chatHistory.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg px-3 py-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!message.trim() || isLoading}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50""
        >
          <MessageCircle className="w-6 h-6" />"
        </button>
      )}
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 flex flex-col">"
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">"
            <div>
              <h3 className="font-semibold">Zion Tech Assistant</h3>"
              <p className="text-sm opacity-90">Online now</p>"
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors""
            >
              <X className="w-5 h-5" />"
            </button>
          </div>
          {/* Messages */}
<div className="flex-1 p-4 overflow-y-auto space-y-4">"
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}`
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${`
                    msg.isBot
                      ? 'bg-gray-100 text-gray-800''
                      : 'bg-blue-600 text-white''
                  }`}`
                >
<p className="text-sm">{msg.text}</p>"
                  <p className="text-xs opacity-70 mt-1">"
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: '2-digit', '
                      minute: '2-digit' '
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Input */}
          <div className="p-4 border-t border-gray-200">"
            <div className="flex space-x-2">"
              <input
                type="text""
                value={message}
                onChange={e => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message...""
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm""
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors""
              >
                <Send className="w-4 h-4" />"
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatAssistant;
