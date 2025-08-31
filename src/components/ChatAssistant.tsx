import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Minimize2, 
  Maximize2, 
  Mic, 
  MicOff, 
  Send, 
  Bot, 
  User, 
  Sparkles,
  Settings,
  Paperclip,
  Lightbulb,
  Moon,
  Sun,
  TrendingUp,
  Shield,
  Clock,
  Star
} from 'lucide-react';

interface ChatMessage {
  id: string;
  type: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
  metadata?: {
    confidence?: number;
    sources?: string[];
    suggestions?: string[];
    actionRequired?: boolean;
  };
}

interface ChatAssistantProps extends React.PropsWithChildren<{}> {
  enabled?: boolean;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  theme?: 'light' | 'dark' | 'auto';
  maxMessages?: number;
  enableVoice?: boolean;
  enableFileUpload?: boolean;
  enableSuggestions?: boolean;
}

export const ChatAssistant: React.FC<ChatAssistantProps> = ({ 
  enabled = true, 
  position = 'bottom-right',
  theme = 'auto',
  maxMessages = 50,
  enableVoice = true,
  enableFileUpload = true,
  enableSuggestions = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(theme);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle theme changes
  useEffect(() => {
    if (theme === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setCurrentTheme(mediaQuery.matches ? 'dark' : 'light');
      
      const handleChange = (e: MediaQueryListEvent) => {
        setCurrentTheme(e.matches ? 'dark' : 'light');
      };
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      setCurrentTheme(theme);
    }
  }, [theme]);

  // Initialize speech recognition
  useEffect(() => {
    if (enableVoice && 'webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';
      
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputValue(transcript);
        setIsListening(false);
      };
      
      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };
      
      recognitionRef.current = recognition;
    }
  }, [enableVoice]);

  const handleSendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: content.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev.slice(-maxMessages + 1), userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: `Thank you for your message: "${content.trim()}". This is a demo response. In a real implementation, this would connect to an AI service.`,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev.slice(-maxMessages + 1), aiMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  }, [maxMessages]);

  const handleVoiceInput = useCallback(() => {
    if (recognitionRef.current && !isListening) {
      setIsListening(true);
      recognitionRef.current.start();
    }
  }, [isListening]);

  const toggleChat = useCallback(() => {
    setIsOpen(prev => !prev);
    if (!isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const toggleMinimize = useCallback(() => {
    setIsMinimized(prev => !prev);
  }, []);

  const suggestions = [
    'How can I help you today?',
    'Tell me about your project',
    'What services do you need?',
    'Schedule a consultation'
  ];

  if (!enabled) return null;

  return (
    <div className={`fixed ${position === 'bottom-right' ? 'bottom-4 right-4' : position === 'bottom-left' ? 'bottom-4 left-4' : position === 'top-right' ? 'top-4 right-4' : 'top-4 left-4'} z-50`}>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleChat}
          className="bg-zion-500 hover:bg-zion-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-200"
          aria-label="Open chat assistant"
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
            className={`bg-white dark:bg-zion-slate-800 rounded-lg shadow-2xl border border-zion-slate-200 dark:border-zion-slate-700 w-80 max-h-96 flex flex-col ${isMinimized ? 'h-16' : ''}`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-zion-slate-200 dark:border-zion-slate-700 bg-zion-50 dark:bg-zion-slate-700 rounded-t-lg">
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5 text-zion-500" />
                <span className="font-semibold text-zion-slate-900 dark:text-white">AI Assistant</span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleMinimize}
                  className="p-1 hover:bg-zion-slate-200 dark:hover:bg-zion-slate-600 rounded transition-colors"
                  aria-label={isMinimized ? 'Maximize chat' : 'Minimize chat'}
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={toggleChat}
                  className="p-1 hover:bg-zion-slate-200 dark:hover:bg-zion-slate-600 rounded transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Content */}
            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-64">
                  {messages.length === 0 && (
                    <div className="text-center text-zion-slate-500 dark:text-zion-slate-400 py-8">
                      <Bot className="w-8 h-8 mx-auto mb-2 text-zion-400" />
                      <p className="text-sm">Hello! How can I help you today?</p>
                    </div>
                  )}
                  
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs px-3 py-2 rounded-lg ${
                          message.type === 'user'
                            ? 'bg-zion-500 text-white'
                            : 'bg-zion-slate-100 dark:bg-zion-slate-700 text-zion-slate-900 dark:text-white'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-zion-slate-100 dark:bg-zion-slate-700 px-3 py-2 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-zion-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-zion-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-zion-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Suggestions */}
                {enableSuggestions && showSuggestions && messages.length === 0 && (
                  <div className="px-4 pb-2">
                    <div className="grid grid-cols-2 gap-2">
                      {suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSendMessage(suggestion)}
                          className="text-xs bg-zion-100 dark:bg-zion-slate-700 hover:bg-zion-200 dark:hover:bg-zion-slate-600 text-zion-slate-700 dark:text-zion-slate-300 px-2 py-1 rounded transition-colors"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input Area */}
                <div className="p-4 border-t border-zion-slate-200 dark:border-zion-slate-700">
                  <div className="flex items-center space-x-2">
                    {enableFileUpload && (
                      <button
                        className="p-2 hover:bg-zion-slate-100 dark:hover:bg-zion-slate-700 rounded transition-colors"
                        aria-label="Attach file"
                      >
                        <Paperclip className="w-4 h-4 text-zion-slate-500" />
                      </button>
                    )}
                    
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                      placeholder="Type your message..."
                      className="flex-1 px-3 py-2 border border-zion-slate-300 dark:border-zion-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-500 focus:border-transparent bg-white dark:bg-zion-slate-700 text-zion-slate-900 dark:text-white"
                    />
                    
                    {enableVoice && (
                      <button
                        onClick={handleVoiceInput}
                        disabled={isListening}
                        className={`p-2 rounded transition-colors ${
                          isListening
                            ? 'bg-red-100 text-red-600'
                            : 'hover:bg-zion-slate-100 dark:hover:bg-zion-slate-700 text-zion-slate-500'
                        }`}
                        aria-label={isListening ? 'Stop listening' : 'Start voice input'}
                      >
                        {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                      </button>
                    )}
                    
                    <button
                      onClick={() => handleSendMessage(inputValue)}
                      disabled={!inputValue.trim() || isTyping}
                      className="p-2 bg-zion-500 hover:bg-zion-600 disabled:bg-zion-slate-300 text-white rounded transition-colors disabled:cursor-not-allowed"
                      aria-label="Send message"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* Toggle Suggestions */}
                  <button
                    onClick={() => setShowSuggestions(!showSuggestions)}
                    className="text-xs text-zion-slate-500 hover:text-zion-600 dark:hover:text-zion-400 mt-2 transition-colors"
                  >
                    {showSuggestions ? 'Hide' : 'Show'} suggestions
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
