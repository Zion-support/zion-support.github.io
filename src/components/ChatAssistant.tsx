import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Send, 
  Loader2, 
  Minimize2, 
  Maximize2,
  Paperclip,
  Mic,
  MicOff
} from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

interface ChatAssistantProps {
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  theme?: 'light' | 'dark';
  title?: string;
  subtitle?: string;
  placeholder?: string;
  suggestions?: string[];
  enableFileUpload?: boolean;
  enableVoice?: boolean;
  maxMessages?: number;
  className?: string;
}

export function ChatAssistant({
  position = 'bottom-right',
  theme = 'dark',
  title = 'AI Assistant',
  subtitle = 'How can I help you today?',
  placeholder = 'Type your message...',
  suggestions = [
    'Tell me about your services',
    'How can I get started?',
    'What are your pricing options?',
    'Contact sales team'
  ],
  enableFileUpload = false,
  enableVoice = false,
  maxMessages = 50,
  className = ''
}: ChatAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your AI assistant. How can I help you today?',
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const positionClasses = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4'
  };

  const themeClasses = {
    light: 'bg-white text-gray-900 border-gray-200',
    dark: 'bg-gray-900 text-white border-gray-700'
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isProcessing) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsProcessing(true);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: `Thank you for your message: "${userMessage.text}". I'm here to help you with any questions about Zion Tech Group's services.`,
        sender: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => {
        const newMessages = [...prev, assistantMessage];
        if (newMessages.length > maxMessages) {
          return newMessages.slice(-maxMessages);
        }
        return newMessages;
      });
      setIsProcessing(false);
    }, 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    inputRef.current?.focus();
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('File uploaded:', file.name);
      // Handle file upload logic here
    }
  };

  const handleVoiceInput = () => {
    setIsListening(!isListening);
    // Handle voice input logic here
  };

  return (
    <div className={`fixed ${positionClasses[position]} z-50 ${className}`}>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleChat}
          className={`p-4 rounded-full shadow-lg transition-all duration-200 ${
            theme === 'dark' 
              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
              : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-200'
          }`}
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className={`w-80 h-96 rounded-lg shadow-xl border ${themeClasses[theme]} flex flex-col`}
          >
            {/* Header */}
            <div className={`p-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} flex items-center justify-between`}>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {subtitle}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMinimize}
                  className={`p-1 rounded transition-colors ${
                    theme === 'dark' 
                      ? 'hover:bg-gray-800' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={toggleChat}
                  className={`p-1 rounded transition-colors ${
                    theme === 'dark' 
                      ? 'hover:bg-gray-800' 
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs px-3 py-2 rounded-lg ${
                          message.sender === 'user'
                            ? theme === 'dark'
                              ? 'bg-blue-600 text-white'
                              : 'bg-blue-500 text-white'
                            : theme === 'dark'
                            ? 'bg-gray-800 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === 'user'
                            ? 'text-blue-100'
                            : theme === 'dark'
                            ? 'text-gray-400'
                            : 'text-gray-500'
                        }`}>
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))}
                  {isProcessing && (
                    <div className="flex justify-start">
                      <div className={`max-w-xs px-3 py-2 rounded-lg ${
                        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                      }`}>
                        <div className="flex items-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span className="text-sm">Typing...</span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Suggestions */}
                {suggestions.length > 0 && (
                  <div className={`p-4 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="flex flex-wrap gap-2">
                      {suggestions.map((suggestion, index) => (
                        <motion.button
                          key={index}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className={`px-3 py-1.5 text-xs rounded-full transition-colors border ${
                            theme === 'dark'
                              ? 'bg-blue-900/50 text-blue-300 border-blue-700 hover:bg-blue-800/50'
                              : 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {suggestion}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input Area */}
                <div className={`p-4 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="flex items-center gap-2">
                    {enableFileUpload && (
                      <label className={`p-2 rounded cursor-pointer transition-colors ${
                        theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                      }`}>
                        <Paperclip className="w-4 h-4" />
                        <input
                          type="file"
                          className="hidden"
                          onChange={handleFileUpload}
                          accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                        />
                      </label>
                    )}
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder={placeholder}
                      className={`flex-1 p-2 border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        theme === 'dark'
                          ? 'border-gray-600 text-white placeholder-gray-400'
                          : 'border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                      disabled={isProcessing}
                    />
                    {enableVoice && (
                      <button
                        onClick={handleVoiceInput}
                        disabled={isListening || isProcessing}
                        className={`p-2 rounded transition-colors ${
                          isListening
                            ? 'bg-red-500 text-white'
                            : theme === 'dark'
                            ? 'hover:bg-gray-800'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                      </button>
                    )}
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isProcessing}
                      className={`p-2 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                        theme === 'dark'
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-blue-500 hover:bg-blue-600 text-white'
                      }`}
                    >
                      {isProcessing ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
