import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MessageCircle, 
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
    actionRequired?: boolean}}

interface ChatAssistantProps extends React.PropsWithChildren<{}> {

  enabled?: boolean;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  theme?: 'light' | 'dark' | 'auto';
  maxMessages?: number;
  enableVoice?: boolean;
  enableFileUpload?: boolean;
  enableSuggestions?: boolean}

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
  const [messages, setMessages] = useState<any>([]);
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
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })}, []);

  useEffect(()  => {
    scrollToBottom()}, [messages, scrollToBottom]);

  // Theme management
  useEffect(() => {
    if (theme === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setCurrentTheme(mediaQuery.matches ? 'dark' : 'light');
      
      const handleChange = (e: MediaQueryListEvent)  => {
        setCurrentTheme(e.matches ? 'dark' : 'light')};
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange)} else {
      setCurrentTheme(theme)}
  }, [theme]);

  // Voice recognition setup
  useEffect(() => {
    if (enableVoice && 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputValue(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = (event) => {
        // // console.error('Speech recognition error: ', event.error);
        setIsListening(false);
      };
    }
  }, [enableVoice]);

  // Initialize with welcome message
  useEffect(() => {
    if (enabled && messages.length === 0) {
      const welcomeMessage: ChatMessage = {
        id: 'welcome',
        type: 'assistant',
        content: 'Hello! I\'m your AI assistant. How can I help you today?',
        timestamp: new Date(),
        metadata: {
          suggestions: [
            'Tell me about your services',
            'Help me with pricing',
            'Schedule a consultation',
            'Technical support'
          ]
        }
      };
      setMessages([welcomeMessage]);
    }
  }, [enabled, messages.length]);

  // Handle voice input
  const toggleVoiceInput = useCallback(() => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  }, [isListening]);

  // Send message
  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: content.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setIsProcessing(true);

    try {
      // Simulate AI response (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
      
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: generateAIResponse(content),
        timestamp: new Date(),
        metadata: {
          confidence: 0.95,
          suggestions: generateSuggestions(content),
        }
      };

      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      // // console.error('Error sending message:', error);
      
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
      setIsProcessing(false);
    }
  }, []);

  // Generate AI response (replace with actual AI integration)
  const generateAIResponse = (userInput: string): string => {
    const responses = [
      'I understand you\'re asking about that. Let me help you with some information.',
      'That\'s a great question! Here\'s what I can tell you about that topic.',
      'I\'d be happy to help you with that. Let me provide some details.',
      'That\'s an interesting point. Here\'s what I know about that subject.',
      'I can definitely assist you with that. Let me share some relevant information.',
    ];
    
    return responses[Math.floor(Math.random() * responses.length)]};

  // Generate suggestions based on user input
  const generateSuggestions = (userInput: string): string[] => {
    const suggestions = [
      'Tell me more',
      'Can you explain that differently?',
      'What are the next steps?',
      'Show me examples',
      'How does this work?'
    ];
    
    return suggestions.slice(0, 3)};

  // Handle file upload
  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>)  => {
    const file = event.target.files?.[0];
    if (file) {
      const fileMessage: ChatMessage = {
        id: Date.now().toString(),
        type: 'user',
        content: `Uploaded file: ${file.name}`,
        timestamp: new Date(),
        metadata: {
          sources: [file.name],
        }
      };
      setMessages(prev  => [...prev, fileMessage])}
  }, []);

  // Handle suggestion click
  const handleSuggestionClick = useCallback((suggestion: string)  => {
    sendMessage(suggestion)}, [sendMessage]);

  // Handle enter key
  const handleKeyPress = useCallback((e: React.KeyboardEvent)  => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue)}
  }, [inputValue, sendMessage]);

  // Clear chat
  const clearChat = useCallback(() => {
    setMessages([])}, []);

  // Export chat
  const exportChat = useCallback(() => {
    const chatData = messages.map(msg => ({
      type: msg.type,
      content: msg.content,
      timestamp: msg.timestamp.toISOString(),
    }));
    
    const blob = new Blob([JSON.stringify(chatData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chat-export-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url)}, [messages]);

  if (!enabled) return null;

  const positionClasses = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
  };

  const themeClasses = {
    light: 'bg-white text-gray-900 border-gray-200',
    dark: 'bg-gray-900 text-white border-gray-700',
  };

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={`${themeClasses[currentTheme]} p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-500 hover:border-blue-600 group`}
          aria-label="Open chat assistant"
        >
          <MessageCircle className="w-6 h-6 text-blue-500 group-hover:text-blue-600" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`${themeClasses[currentTheme]} w-96 h-[500px] rounded-lg shadow-2xl border-2 border-blue-500 flex flex-col transition-all duration-300 ${isMinimized ? 'h-16' : ''}`}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <Bot className="w-5 h-5 text-blue-500" />
              <span className="font-semibold">AI Assistant</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
                aria-label={isMinimized ? 'Expand chat' : 'Minimize chat'}
              >
                <X className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
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
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                      }`}
                    >
                      <div className="flex items-center space-x-2 mb-1">
                        {message.type === 'user' ? (
                          <User className="w-4 h-4" />
                        ) : (
                          <Bot className="w-4 h-4 text-blue-500" />
                        )}
                        <span className="text-xs opacity-75">
                          {message.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                      <p className="text-sm">{message.content}</p>
                      
                      {/* Message metadata */}
                      {message.metadata && (
                        <div className="mt-2 text-xs opacity-75">
                          {message.metadata.confidence && (
                            <div className="flex items-center space-x-1">
                              <Star className="w-3 h-3" />
                              <span>Confidence: {Math.round(message.metadata.confidence * 100)}%</span>
                            </div>
                          )}
                          {message.metadata.sources && message.metadata.sources.length > 0 && (
                            <div className="mt-1">
                              <span>Sources: {message.metadata.sources.join(', ')}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Bot className="w-4 h-4 text-blue-500" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Suggestions */}
              {enableSuggestions && showSuggestions && messages.length > 0 && (
                <div className="px-4 pb-2">
                  <div className="flex flex-wrap gap-2">
                    {messages[messages.length - 1]?.metadata?.suggestions?.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Area */}
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="flex-1 relative">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      disabled={isProcessing}
                    />
                    
                    {/* File upload input */}
                    {enableFileUpload && (
                      <input
                        type="file"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                        accept=".txt,.pdf,.doc,.docx,.jpg,.jpeg,.png"
                      />
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center space-x-1">
                    {enableFileUpload && (
                      <label
                        htmlFor="file-upload"
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors cursor-pointer"
                        title="Attach file"
                      >
                        <Paperclip className="w-4 h-4" />
                      </label>
                    )}
                    
                    {enableVoice && (
                      <button
                        onClick={toggleVoiceInput}
                        className={`p-2 rounded transition-colors ${
                          isListening
                            ? 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400'
                            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                        title={isListening ? 'Stop listening' : 'Start voice input'}
                      >
                        {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                      </button>
                    )}

                    <button
                      onClick={() => sendMessage(inputValue)}
                      disabled={!inputValue.trim() || isProcessing}
                      className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      title="Send message"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Quick actions */}
                <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={clearChat}
                      className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                    >
                      Clear chat
                    </button>
                    <button
                      onClick={exportChat}
                      className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                    >
                      Export
                    </button>
                  </div>
                  
                  <button
                    onClick={() => setShowSuggestions(!showSuggestions)}
                    className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                  >
                    {showSuggestions ? 'Hide' : 'Show'} suggestions
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )};
