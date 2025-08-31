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
    id: string;
    name: string;
    type: 'image' | 'file' | 'video';
    url: string;
    size?: number;
  }>;
}

interface ChatAssistantProps {
  enabled?: boolean;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  theme?: 'light' | 'dark' | 'auto';
  welcomeMessage?: string;
  placeholder?: string;
  maxMessages?: number;
  autoExpand?: boolean;
  showTypingIndicator?: boolean;
  enableVoice?: boolean;
  enableAttachments?: boolean;
  enableSuggestions?: boolean;
  enableAnalytics?: boolean;
  customStyles?: React.CSSProperties;
  onMessageSend?: (message: Message) => void;
  onMessageReceive?: (message: Message) => void;
  onChatOpen?: () => void;
  onChatClose?: () => void;
}

const ChatAssistant: React.FC<ChatAssistantProps> = ({
  enabled = true,
  position = 'bottom-right',
  theme = 'auto',
  welcomeMessage = "Hello! I'm your AI assistant. How can I help you today?",
  placeholder = "Type your message...",
  maxMessages = 50,
  autoExpand = false,
  showTypingIndicator = true,
  enableVoice = true,
  enableAttachments = true,
  enableSuggestions = true,
  enableAnalytics = true,
  customStyles = {},
  onMessageSend,
  onMessageReceive,
  onChatOpen,
  onChatClose
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      type: 'assistant',
      content: welcomeMessage,
      timestamp: new Date(),
      metadata: {
        confidence: 1,
        suggestions: ['Tell me about your services', 'How can I get started?', 'What are your pricing options?']
      }
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(autoExpand);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = useCallback(async (content: string, attachments: File[] = []) => {
    if (!content.trim() && attachments.length === 0) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: content.trim(),
      timestamp: new Date(),
      attachments: attachments.map((file, index) => ({
        id: `attachment-${Date.now()}-${index}`,
        name: file.name,
        type: file.type.startsWith('image/') ? 'image' : 
              file.type.startsWith('video/') ? 'video' : 'file',
        url: URL.createObjectURL(file),
        size: file.size
      }))
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    onMessageSend?.(userMessage);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: `Thank you for your message: "${content}". I'm here to help you with any questions about our services, pricing, or how to get started. You can ask me about our AI solutions, request a demo, or get pricing information.`,
        timestamp: new Date(),
        metadata: {
          confidence: 0.95,
          suggestions: ['Tell me more about your needs', 'Would you like a demo?', 'Check our pricing']
        }
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
      onMessageReceive?.(aiResponse);
    }, 1500);
  }, [onMessageSend, onMessageReceive]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      handleSendMessage(inputValue, files);
    }
  };

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    // Voice recognition logic would go here
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  const toggleChat = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    if (newIsOpen) {
      onChatOpen?.();
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      onChatClose?.();
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const clearChat = () => {
    setMessages([{
      id: 'welcome',
      type: 'assistant',
      content: welcomeMessage,
      timestamp: new Date(),
      metadata: {
        confidence: 1,
        suggestions: ['Tell me about your services', 'How can I get started?', 'What are your pricing options?']
      }
    }]);
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
    dark: 'bg-gray-900 text-white border-gray-700',
    auto: 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-200 dark:border-gray-700'
  };

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={toggleChat}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'bg-blue-600 text-white' 
            : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
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
            transition={{ duration: 0.3 }}
            className={`absolute ${position.includes('right') ? 'right-0' : 'left-0'} bottom-16 w-80 h-96 ${themeClasses[theme]} rounded-lg shadow-xl border flex flex-col`}
            style={customStyles}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">AI Assistant</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Online</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <button
                  onClick={toggleMinimize}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={toggleExpand}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                >
                  {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
                </button>
                <button
                  onClick={toggleChat}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className={`flex-1 overflow-y-auto p-4 space-y-4 ${isMinimized ? 'hidden' : ''}`}>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                    {message.attachments && message.attachments.length > 0 && (
                      <div className="mt-2 space-y-1">
                        {message.attachments.map((attachment) => (
                          <div key={attachment.id} className="flex items-center space-x-2 text-xs">
                            <Paperclip className="w-3 h-3" />
                            <span>{attachment.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && showTypingIndicator && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {enableSuggestions && messages.length > 1 && !isTyping && (
              <div className={`px-4 pb-2 ${isMinimized ? 'hidden' : ''}`}>
                <div className="flex flex-wrap gap-2">
                  {['Tell me about your services', 'Request a demo', 'Get pricing'].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="text-xs bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-2 py-1 rounded-full transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className={`p-4 border-t border-gray-200 dark:border-gray-700 ${isMinimized ? 'hidden' : ''}`}>
              <div className="flex items-center space-x-2">
                {enableAttachments && (
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                  >
                    <Paperclip className="w-4 h-4" />
                  </button>
                )}
                
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={placeholder}
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
                />
                
                {enableVoice && (
                  <button
                    onClick={handleVoiceToggle}
                    className={`p-2 rounded-full transition-colors ${
                      isListening 
                        ? 'bg-red-500 text-white' 
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  </button>
                )}
                
                <button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim()}
                  className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              
              <input
                ref={fileInputRef}
                type="file"
                multiple
                onChange={handleFileUpload}
                className="hidden"
                accept="image/*,video/*,.pdf,.doc,.docx,.txt"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatAssistant;
