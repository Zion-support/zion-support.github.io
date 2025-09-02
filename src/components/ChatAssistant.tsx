import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles,
  Settings,
  Mic,
  MicOff,
  Paperclip,
  Download,
  RefreshCw,
  Zap,
  Brain,
  Lightbulb,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  AlertCircle,
  Loader2,
  ChevronDown,
  ChevronUp,
  Minimize2,
  Maximize2,
  Volume2,
  VolumeX,
  Star,
  Image,
  FileText,
  Video,
  Smile
} from 'lucide-react';

interface Message {
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
  attachments?: Array<{
    type: 'image' | 'file' | 'video';
    url: string;
    name: string;
    size?: string;
  }>;
}

interface ChatAssistantProps extends React.PropsWithChildren<{}> {
  enabled?: boolean;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  theme?: 'light' | 'dark' | 'auto';
  language?: string;
  maxMessages?: number;
  enableVoice?: boolean;
  enableFileUpload?: boolean;
  enableSuggestions?: boolean;
}

export function ChatAssistant({ 
  enabled = true, 
  position = 'bottom-right',
  theme = 'auto',
  language = 'en',
  maxMessages = 100,
  enableVoice = false,
  enableFileUpload = false,
  enableSuggestions = true
}: ChatAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(theme);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Theme management
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

  // Initialize chat with welcome message
  useEffect(() => {
    if (enabled && messages.length === 0) {
      const welcomeMessage: Message = {
        id: 'welcome',
        type: 'assistant',
        content: 'Hello! I\'m your AI assistant. How can I help you today?',
        timestamp: new Date(),
        metadata: {
          confidence: 1,
          suggestions: [
            'Tell me about your services',
            'How can I get started?',
            'What are your pricing options?'
          ]
        }
      };
      setMessages([welcomeMessage]);
      setSuggestions(welcomeMessage.metadata?.suggestions || []);
    }
  }, [enabled]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: content.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setIsProcessing(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: `Thank you for your message: "${content}". I'm here to help you with any questions about our services.`,
        timestamp: new Date(),
        metadata: {
          confidence: 0.9,
          suggestions: [
            'Learn more about our AI services',
            'Get pricing information',
            'Schedule a consultation'
          ]
        }
      };

      setMessages(prev => [...prev, aiResponse]);
      setSuggestions(aiResponse.metadata?.suggestions || []);
      setIsTyping(false);
      setIsProcessing(false);
    }, 2000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const clearChat = () => {
    setMessages([]);
    setChatHistory([]);
  };

  if (!enabled) return null;

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

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={toggleChat}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          currentTheme === 'dark' 
            ? 'bg-blue-600 hover:bg-blue-700 text-white' 
            : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className={`absolute bottom-16 right-0 w-96 h-[500px] rounded-lg shadow-xl border ${
              themeClasses[currentTheme as keyof typeof themeClasses]
            } flex flex-col`}
          >
            {/* Header */}
            <div className={`p-4 border-b ${
              currentTheme === 'dark' ? 'border-gray-700' : 'border-gray-200'
            } flex items-center justify-between`}>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">AI Assistant</h3>
                  <p className={`text-sm ${
                    currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {isTyping ? 'Typing...' : 'Online'}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleMinimize}
                  className={`p-1 rounded ${
                    currentTheme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={toggleChat}
                  className={`p-1 rounded ${
                    currentTheme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
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
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[80%] rounded-lg p-3 ${
                        message.type === 'user'
                          ? currentTheme === 'dark'
                            ? 'bg-blue-600 text-white'
                            : 'bg-blue-500 text-white'
                          : currentTheme === 'dark'
                            ? 'bg-gray-700'
                            : 'bg-gray-100'
                      }`}>
                        <p className="text-sm">{message.content}</p>
                        {message.metadata?.suggestions && message.type === 'assistant' && (
                          <div className="mt-2 space-y-1">
                            {message.metadata.suggestions.map((suggestion, index) => (
                              <button
                                key={index}
                                onClick={() => handleSuggestionClick(suggestion)}
                                className={`block w-full text-left text-xs p-2 rounded ${
                                  currentTheme === 'dark'
                                    ? 'hover:bg-gray-600'
                                    : 'hover:bg-gray-200'
                                }`}
                              >
                                {suggestion}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className={`max-w-[80%] rounded-lg p-3 ${
                        currentTheme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                      }`}>
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

                {/* Input Area */}
                <div className={`p-4 border-t ${
                  currentTheme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                }`}>
                  <div className="flex space-x-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                      placeholder="Type your message..."
                      className={`flex-1 px-3 py-2 rounded-lg border ${
                        currentTheme === 'dark'
                          ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      disabled={isProcessing}
                    />
                    <button
                      onClick={() => handleSendMessage(inputValue)}
                      disabled={!inputValue.trim() || isProcessing}
                      className={`px-4 py-2 rounded-lg ${
                        inputValue.trim() && !isProcessing
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : currentTheme === 'dark'
                            ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      } transition-colors`}
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
    </div>
  );
}
