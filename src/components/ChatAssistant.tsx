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

interface ChatAssistantProps {
  enabled?: boolean;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  theme?: 'light' | 'dark' | 'auto';
  language?: 'en' | 'es' | 'fr' | 'de' | 'zh' | 'ja';
  initialMessage?: string;
  showWelcomeMessage?: boolean;
  enableVoiceInput?: boolean;
  enableFileUpload?: boolean;
  enableSuggestions?: boolean;
  maxMessages?: number;
}

export const ChatAssistant: React.FC<ChatAssistantProps> = ({
  enabled = true,
  position = 'bottom-right',
  theme = 'auto',
  language = 'en',
  initialMessage = "Hello! I'm Zion Tech Group's AI assistant. How can I help you today?",
  showWelcomeMessage = true,
  enableVoiceInput = true,
  enableFileUpload = true,
  enableSuggestions = true,
  maxMessages = 50,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('dark');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [assistantMode, setAssistantMode] = useState<'general' | 'technical' | 'sales' | 'support'>('general');

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);

  // Initialize theme
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

  // Initialize welcome message
  useEffect(() => {
    if (showWelcomeMessage && messages.length === 0) {
      const welcomeMessage: ChatMessage = {
        id: 'welcome',
        type: 'assistant',
        content: initialMessage,
        timestamp: new Date(),
        metadata: {
          suggestions: [
            "Tell me about your AI services",
            "How can I get a quote?",
            "What technologies do you specialize in?",
            "Show me your case studies"
          ]
        }
      };
      setMessages([welcomeMessage]);
    }
  }, [showWelcomeMessage, initialMessage, messages.length]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Initialize speech recognition
  useEffect(() => {
    if (enableVoiceInput && 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = language === 'en' ? 'en-US' : language;

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputValue(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };
    }
  }, [enableVoiceInput, language]);

  // Generate AI response
  const generateResponse = useCallback(async (userMessage: string) => {
    setIsTyping(true);
    setIsProcessing(true);

    try {
      // Simulate AI processing delay
      await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

      // Generate contextual response based on user input
      let response = '';
      let suggestions: string[] = [];

      const lowerMessage = userMessage.toLowerCase();

      if (lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence')) {
        response = "Zion Tech Group offers cutting-edge AI solutions including machine learning, natural language processing, computer vision, and predictive analytics. Our AI services help businesses automate processes, gain insights from data, and create intelligent applications.";
        suggestions = ["Tell me about your AI pricing", "Show me AI case studies", "What industries do you serve?"];
      } else if (lowerMessage.includes('quote') || lowerMessage.includes('pricing') || lowerMessage.includes('cost')) {
        response = "I'd be happy to help you get a quote! Our pricing varies based on project scope, complexity, and requirements. To provide you with an accurate estimate, I'll need to understand your specific needs. Would you like to schedule a consultation?";
        suggestions = ["Schedule a consultation", "Request a quote form", "View pricing packages"];
      } else if (lowerMessage.includes('technology') || lowerMessage.includes('tech') || lowerMessage.includes('stack')) {
        response = "We specialize in modern technologies including React, Node.js, Python, AWS, Azure, Google Cloud, Docker, Kubernetes, and more. Our team stays current with the latest trends to deliver cutting-edge solutions.";
        suggestions = ["Tell me about your cloud services", "What's your development process?", "Show me your tech stack"];
      } else if (lowerMessage.includes('case study') || lowerMessage.includes('portfolio') || lowerMessage.includes('work')) {
        response = "We have successfully delivered projects across various industries including healthcare, finance, e-commerce, and manufacturing. Our case studies demonstrate measurable results like 40% cost reduction, 60% performance improvement, and 80% user satisfaction increase.";
        suggestions = ["Healthcare case studies", "Finance solutions", "E-commerce projects"];
      } else if (lowerMessage.includes('contact') || lowerMessage.includes('support') || lowerMessage.includes('help')) {
        response = "You can reach our team through multiple channels: email at contact@ziontechgroup.com, phone at +1-XXX-XXX-XXXX, or through our contact form. We typically respond within 2-4 hours during business hours.";
        suggestions = ["Send us an email", "Fill contact form", "Schedule a call"];
      } else {
        response = "Thank you for your message! I'm here to help you learn more about Zion Tech Group's services. We offer AI solutions, cloud services, custom development, and digital transformation consulting. What would you like to know more about?";
        suggestions = ["AI services overview", "Cloud solutions", "Development process", "Get a quote"];
      }

      const assistantMessage: ChatMessage = {
        id: Date.now().toString(),
        type: 'assistant',
        content: response,
        timestamp: new Date(),
        metadata: {
          confidence: 0.95,
          suggestions,
          sources: ['Zion Tech Group Knowledge Base']
        }
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      
      const errorMessage: ChatMessage = {
        id: Date.now().toString(),
        type: 'assistant',
        content: "I apologize, but I'm experiencing some technical difficulties right now. Please try again in a moment or contact our support team directly.",
        timestamp: new Date(),
        metadata: {
          confidence: 0.8,
          actionRequired: true
        }
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
      setIsProcessing(false);
    }
  }, []);

  // Handle send message
  const handleSendMessage = useCallback(async () => {
    if (!inputValue.trim() || isProcessing) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => {
      const newMessages = [...prev, userMessage];
      if (newMessages.length > maxMessages) {
        return newMessages.slice(-maxMessages);
      }
      return newMessages;
    });

    setInputValue('');
    await generateResponse(userMessage.content);
  }, [inputValue, isProcessing, generateResponse, maxMessages]);

  // Handle voice input
  const handleVoiceInput = useCallback(() => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  }, [isListening]);

  // Handle file upload
  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const fileMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: `Uploaded file: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`,
      timestamp: new Date(),
      metadata: {
        sources: [file.name]
      }
    };

    setMessages(prev => [...prev, fileMessage]);
    
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, []);

  // Handle suggestion click
  const handleSuggestionClick = useCallback((suggestion: string) => {
    setInputValue(suggestion);
    inputRef.current?.focus();
  }, []);

  // Handle key press
  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  }, [handleSendMessage]);

  // Toggle chat
  const toggleChat = useCallback(() => {
    setIsOpen(prev => !prev);
    if (!isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Toggle minimize
  const toggleMinimize = useCallback(() => {
    setIsMinimized(prev => !prev);
  }, []);

  // Clear chat
  const clearChat = useCallback(() => {
    setMessages([]);
    if (showWelcomeMessage) {
      const welcomeMessage: ChatMessage = {
        id: 'welcome',
        type: 'assistant',
        content: initialMessage,
        timestamp: new Date(),
        metadata: {
          suggestions: [
            "Tell me about your AI services",
            "How can I get a quote?",
            "What technologies do you specialize in?",
            "Show me your case studies"
          ]
        }
      };
      setMessages([welcomeMessage]);
    }
  }, [showWelcomeMessage, initialMessage]);

  if (!enabled) return null;

  const positionClasses = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4'
  };

  const themeClasses = {
    light: 'bg-white text-gray-900 border-gray-200',
    dark: 'bg-zion-slate-dark text-white border-zion-slate'
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={toggleChat}
        className={`fixed ${positionClasses[position]} z-50 p-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open chat assistant"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
          >
            <span className="text-xs text-white font-bold">AI</span>
          </motion.div>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className={`fixed ${positionClasses[position]} z-50 w-96 h-[500px] ${themeClasses[currentTheme]} rounded-2xl shadow-2xl border overflow-hidden`}
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-zion-slate bg-gradient-to-r from-zion-slate to-zion-slate-dark">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Zion AI Assistant</h3>
                  <p className="text-xs text-zion-cyan">Powered by AI</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="p-2 text-zion-cyan hover:bg-zion-slate rounded-lg transition-colors"
                  aria-label="Settings"
                >
                  <Settings className="w-4 h-4" />
                </button>
                <button
                  onClick={toggleMinimize}
                  className="p-2 text-zion-cyan hover:bg-zion-slate rounded-lg transition-colors"
                  aria-label="Minimize"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Settings Panel */}
            <AnimatePresence>
              {showSettings && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="border-b border-zion-slate bg-zion-slate p-4"
                >
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm font-medium text-zion-cyan">Assistant Mode</label>
                      <select
                        value={assistantMode}
                        onChange={(e) => setAssistantMode(e.target.value as any)}
                        className="w-full mt-1 p-2 bg-zion-slate-dark border border-zion-slate rounded text-white text-sm"
                      >
                        <option value="general">General</option>
                        <option value="technical">Technical</option>
                        <option value="sales">Sales</option>
                        <option value="support">Support</option>
                      </select>
                    </div>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={clearChat}
                        className="flex items-center gap-2 px-3 py-2 bg-zion-slate-dark hover:bg-zion-slate rounded text-sm transition-colors"
                      >
                        <RefreshCw className="w-4 h-4" />
                        Clear Chat
                      </button>
                      <button
                        onClick={toggleChat}
                        className="flex items-center gap-2 px-3 py-2 bg-red-600 hover:bg-red-700 rounded text-sm transition-colors"
                      >
                        <X className="w-4 h-4" />
                        Close
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[300px]">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.type === 'assistant' && (
                    <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                  )}
                  
                  <div className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user' 
                      ? 'bg-zion-cyan text-white ml-auto' 
                      : 'bg-zion-slate text-white'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                    
                    {/* Message metadata */}
                    {message.metadata && (
                      <div className="mt-2 text-xs opacity-70">
                        {message.metadata.confidence && (
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            {Math.round(message.metadata.confidence * 100)}% confidence
                          </div>
                        )}
                        {message.metadata.sources && (
                          <div className="mt-1">
                            Sources: {message.metadata.sources.join(', ')}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {message.type === 'user' && (
                    <div className="w-8 h-8 bg-zion-cyan rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-white" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-zion-slate p-3 rounded-lg">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Suggestions */}
              {messages.length > 0 && enableSuggestions && messages[messages.length - 1].type === 'assistant' && 
               messages[messages.length - 1].metadata?.suggestions && (
                <div className="space-y-2">
                  <p className="text-xs text-zion-cyan font-medium">Quick suggestions:</p>
                  <div className="flex flex-wrap gap-2">
                    {messages[messages.length - 1].metadata!.suggestions!.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="px-3 py-1 bg-zion-slate hover:bg-zion-cyan hover:text-white rounded-full text-xs transition-colors cursor-pointer"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-zion-slate bg-zion-slate-dark">
              <div className="flex items-center gap-2">
                {enableFileUpload && (
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="p-2 text-zion-cyan hover:bg-zion-slate rounded-lg transition-colors"
                    aria-label="Attach file"
                  >
                    <Paperclip className="w-4 h-4" />
                  </button>
                )}
                
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  onChange={handleFileUpload}
                  accept=".pdf,.doc,.docx,.txt,.jpg,.png,.gif"
                />

                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 p-2 bg-zion-slate border border-zion-slate-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan"
                  disabled={isProcessing}
                />

                {enableVoiceInput && (
                  <button
                    onClick={handleVoiceInput}
                    className={`p-2 rounded-lg transition-colors ${
                      isListening 
                        ? 'bg-red-600 text-white' 
                        : 'text-zion-cyan hover:bg-zion-slate'
                    }`}
                    aria-label={isListening ? 'Stop listening' : 'Start voice input'}
                  >
                    {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  </button>
                )}

                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isProcessing}
                  className="p-2 bg-zion-cyan hover:bg-zion-cyan-light disabled:bg-zion-slate disabled:cursor-not-allowed rounded-lg transition-colors"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
