import React, { useState, useRef, useEffect, useCallback } from 'react.ts';
<<<<<<< HEAD
import { motion, AnimatePresence  } from 'framer-motion.ts';
import { MessageCircle,
  X,
  Send,
  Bot,
  User,
  Sparkles,
  Mic,
  MicOff,
  Paperclip,
  Image,
  FileText,
  Video,
  Smile,
=======
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles,
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
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
<<<<<<< HEAD
  CheckCircle,
  AlertCircle,
  Loader2,
  ChevronDown,
  ChevronUp,
  Minimize2,
  Maximize2,
  Volume2,
  VolumeX
interface Message {

=======
  Star
 
} from 'lucide-react.ts';

interface ChatMessage {

>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  id: string;
  type: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
metadata?: {;
    confidence?: number;
    sources?: string[];
    suggestions?: string[];
    actionRequired?: boolean;
  
};

interface ChatAssistantProps extends React.PropsWithChildren<{}> {
  enabled?: boolean;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  theme?: 'light' | 'dark' | 'auto';
<<<<<<< HEAD
  language?: string;

export function ChatAssistant({
  enabled = true,
=======
  maxMessages?: number;
  enableVoice?: boolean;
  enableFileUpload?: boolean;
  enableSuggestions?: boolean;
}

export const ChatAssistant: React.FC<ChatAssistantProps> = ({ 
  enabled = true, 
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  position = 'bottom-right',
  theme = 'auto',
  maxMessages = 100,
  enableVoice = false,
  enableFileUpload = false,
  enableSuggestions = true
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
    messagesEndRef.current?.scrollIntoView({ behavior: any'smooth' });
  }, []);

  useEffect(()  => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Theme management
  useEffect(() => {
    if (theme === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setCurrentTheme(mediaQuery.matches ? 'dark' : 'light');
      
      const handleChange = (e: anyMediaQueryListEvent)  => {
        setCurrentTheme(e.matches ? 'dark' : 'light');
      };
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      setCurrentTheme(theme);
    }
  }, [theme]);

  // Voice recognition setup
  useEffect(() => {
    if (enableVoice && 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = (window as ).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any)  => {
        const transcript = event.results[0][0].transcript;
        setInputValue(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = (event: any)  => {
<<<<<<< HEAD
        // // // console.error('Speech recognition error:', event.error);
=======
        // // // // // // // console.error('Speech recognition error:', event.error);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
        setIsListening(false);
      };
<<<<<<< HEAD

  }, [language]);
=======
    }
  }, [enableVoice]);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

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

      };
      setMessages([welcomeMessage]);
<<<<<<< HEAD
      setSuggestions(welcomeMessage.metadata?.suggestions || []);

=======
    }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  }, [enabled, messages.length]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isProcessing) return;

    const userMessage: ChatMessage = {
      id: anyDate.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev  => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setIsProcessing(true);

    try {
      // Simulate AI response
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const aiMessage: ChatMessage = {
        id: any(Date.now() + 1).toString(),
        type: 'assistant',
        content: `I received your message: "${userMessage.content}". This is a simulated response. In a real implementation, this would connect to an AI service.`,
        timestamp: new Date()
      };

      setMessages(prev  => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error processing message:', error);
    } finally {
      setIsTyping(false);
      setIsProcessing(false);
<<<<<<< HEAD
    }, 1000 + Math.random() * 2000); // Random delay for realism
  }, [inputValue, isProcessing]);

  // Generate AI response
  const generateAIResponse = (userInput: anystring): { content: string; metadata: any }  => {
    const input = userInput.toLowerCase();

    // AI response logic based on user input
    if (input.includes('ai') || input.includes('artificial intelligence')) {
      return {
        content: `At Zion Tech Group, we offer cutting-edge AI solutions including:\n\n🤖 **AI Autonomous Research Assistant** - Automates research tasks\n📊 **AI Business Intelligence** - Data-driven insights\n🔄 **AI Process Automation** - Streamline operations\n🎯 **AI Predictive Analytics** - Future-proof decisions\n\nOur AI solutions are designed to transform your business operations and drive innovation. Would you like to learn more about any specific AI service?`,
        metadata: {
          confidence: 0.95,
          sources: ['AI Solutions Catalog', 'Case Studies'],
          suggestions: [
            'Tell me about your AI pricing',
            'Show me AI case studies',
            'How do I implement AI in my business?',
            'What industries do you serve?'
          ]

      };
    } else if (input.includes('quantum') || input.includes('computing')) {
      return {
        content: `Our quantum computing services are at the forefront of innovation:\n\n⚛️ **Quantum Machine Learning** - Next-gen AI algorithms\n🔐 **Quantum Cryptography** - Unbreakable security\n🧮 **Quantum Optimization** - Solve complex problems\n🌐 **Quantum Cloud Platform** - Access quantum power\n\nWe're working with leading quantum hardware providers to bring these capabilities to businesses like yours.`,
        metadata: {
          confidence: 0.92,
          sources: ['Quantum Computing Research', 'Partnerships'],
          suggestions: [
            'What quantum problems can you solve?',
            'How much does quantum computing cost?',
            'When will quantum be commercially available?',
            'Show me quantum use cases'
          ]

      };
    } else if (input.includes('saas') || input.includes('software')) {
      return {
        content: `Our micro SAAS solutions are designed for modern businesses:\n\n💼 **AI Sales Copilot** - Boost sales performance\n📈 **AI Marketing Automation** - Scale your marketing\n👥 **AI HR Platform** - Streamline HR processes\n📊 **AI Analytics Dashboard** - Real-time insights\n\nEach solution is modular, scalable, and designed to integrate seamlessly with your existing systems.`,
        metadata: {
          confidence: 0.88,
          sources: ['SAAS Portfolio', 'Integration Guide'],
          suggestions: [
            'What are your SAAS pricing tiers?',
            'Do you offer free trials?',
            'How do integrations work?',
            'Can I customize the solutions?'
          ]

      };
    } else if (input.includes('pricing') || input.includes('cost') || input.includes('price')) {
      return {
        content: `We offer flexible pricing to meet your business needs:\n\n🚀 **Starter Plan** - $99/month\n   • Basic AI features\n   • Email support\n   • 5 user licenses\n\n💎 **Professional Plan** - $299/month\n   • Advanced AI capabilities\n   • Priority support\n   • Unlimited users\n   • Custom integrations\n\n🏢 **Enterprise Plan** - Custom pricing\n   • Full AI suite\n   • Dedicated support\n   • Custom development\n   • SLA guarantees\n\nWould you like me to connect you with our sales team for a personalized quote?`,
        metadata: {
          confidence: 0.90,
          sources: ['Pricing Guide', 'Sales Team'],
          suggestions: [
            'Schedule a demo',
            'Get a custom quote',
            'Compare plans in detail',
            'Talk to sales team'
          ]

      };
    } else if (input.includes('demo') || input.includes('trial')) {
      return {
        content: `Great choice! Here's how to get started:\n\n📅 **Free Demo** - 30-minute personalized walkthrough\n🎯 **Free Trial** - 14 days with full features\n👨‍💼 **Consultation** - Free strategy session\n\nI can help you schedule any of these options. What would you prefer?`,
        metadata: {
          confidence: 0.85,
          suggestions: [
            'Schedule a demo',
            'Start free trial',
            'Book consultation',
            'Download demo guide'
          ]

      };
    } else {
      return {
        content: `I understand you're asking about "${userInput}". While I'm a specialized AI assistant for Zion Tech Group, I'd be happy to help you with:\n\n• Our AI and technology services\n• Business solutions and consulting\n• Product information and demos\n• Technical support and guidance\n\nCould you rephrase your question or ask about our specific services?`,
        metadata: {
          confidence: 0.75,
          suggestions: [
            'What services do you offer?',
            'Tell me about Zion Tech Group',
            'How can AI help my business?',
            'Show me your solutions'
          ]

      };

=======
    }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

<<<<<<< HEAD
  // Toggle speech recognition
  const toggleSpeechRecognition = () => {
    if (!recognitionRef.current) {
      alert('Speech recognition is not supported in your browser');
      return;
=======
  const minimizeChat = () => {
    setIsMinimized(!isMinimized);
  };
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

  const startVoiceInput = () => {
    if (recognitionRef.current) {
      setIsListening(true);
<<<<<<< HEAD

  };

  // Toggle mute
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // Handle key press
  const handleKeyPress = (e: anyReact.KeyboardEvent)  => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();

  };

  // Clear chat
  const clearChat = () => {
    setMessages([]);
    setChatHistory([]);
    setSuggestions([]);
  };

  // Export chat
  const exportChat = () => {
    const chatText = chatHistory.map(msg =>
      `${msg.type === 'user' ? 'You' : 'AI Assistant'}: ${msg.content}`
    ).join('\n\n');

    const blob = new Blob([chatText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `zion-tech-chat-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

=======
      recognitionRef.current.start();
    }
  };

  const stopVoiceInput = () => {
    if (recognitionRef.current) {
      setIsListening(false);
      recognitionRef.current.stop();
    }
  };

>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  if (!enabled) return null;

  const positionClasses = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4'
  };

<<<<<<< HEAD
  if (!isOpen) {
    return (
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed ${positionClasses[position]} z-50 p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Chat with AI Assistant"
        aria-label="Open AI chat assistant"

        <MessageCircle className="w-6 h-6" />
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>
    );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        className={`fixed ${positionClasses[position]} z-50 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col`}

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-xs text-blue-100">Zion Tech Group</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleMute}
                className="p-1.5 text-white/80 hover:text-white transition-colors"
                title={isMuted ? 'Unmute' : 'Mute'}

                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setShowSettings(!showSettings)}
                className="p-1.5 text-white/80 hover:text-white transition-colors"
                title="Settings"

                <Settings className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 text-white/80 hover:text-white transition-colors"
                title={isMinimized ? 'Maximize' : 'Minimize'}

                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-white/80 hover:text-white transition-colors"
                title="Close"

=======
  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-zion-cyan text-white p-3 rounded-full shadow-lg hover:bg-zion-cyan-light transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-2xl border border-zinc-200 dark:border-zinc-700 w-80 h-96 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-700">
            <div className="flex items-center space-x-2">
              <Bot className="w-5 h-5 text-zion-cyan" />
              <span className="font-semibold text-zinc-900 dark:text-white">AI Assistant</span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={minimizeChat}
                className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
              >
                <Settings className="w-4 h-4" />
              </button>
              <button
                onClick={toggleChat}
                className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
              >
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

<<<<<<< HEAD
        {/* Settings Panel */}
        <AnimatePresence>
          {showSettings && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-b border-gray-200 p-4 bg-gray-50"

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Clear chat history</span>
                  <button
                    onClick={clearChat}
                    className="px-3 py-1 bg-red-100 text-red-700 text-xs rounded-lg hover:bg-red-200 transition-colors"

                    Clear
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Export chat</span>
                  <button
                    onClick={exportChat}
                    className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-lg hover:bg-blue-200 transition-colors"

                    Export
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Messages */}
        {!isMinimized && (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}

                  <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                    <div className={`p-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <div className="flex items-start gap-2">
                        {message.type === 'assistant' && (
                          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Bot className="w-3 h-3 text-white" />
                          </div>
                        )}
                        <div className="flex-1">
                          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                          {message.metadata?.sources && (
                            <div className="mt-2 text-xs opacity-70">
                              Sources: {message.metadata.sources.join(', ')}
                            </div>
                          )}
                        </div>
                        {message.type === 'user' && (
                          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <User className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={`text-xs text-gray-500 mt-1 ${
                      message.type === 'user' ? 'text-right' : 'text-left'
                    }`}>
                      {message.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"

                  <div className="max-w-[80%]">
                    <div className="p-3 rounded-2xl bg-gray-100 text-gray-800">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <Bot className="w-3 h-3 text-white" />
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {suggestions.length > 0 && (
              <div className="p-4 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((suggestion, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs rounded-full hover:bg-blue-100 transition-colors border border-blue-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}

                      {suggestion}
                    </motion.button>
                  ))}
=======
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-zion-cyan text-white'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white'
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
                <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

<<<<<<< HEAD
            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={isProcessing}
                />

                <button
                  onClick={toggleSpeechRecognition}
                  className={`p-2 rounded-lg transition-colors ${
                    isListening
                      ? 'bg-red-100 text-red-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  title={isListening ? 'Stop listening' : 'Start voice input'}
                  disabled={isProcessing}

                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </button>

                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isProcessing}
                  className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  title="Send message"

                  {isProcessing ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </div>
=======
          {/* Input */}
          <div className="p-4 border-t border-zinc-200 dark:border-zinc-700">
            <div className="flex items-center space-x-2">
              {enableVoice && (
                <button
                  onClick={isListening ? stopVoiceInput : startVoiceInput}
                  className={`p-2 rounded-lg ${
                    isListening
                      ? 'bg-red-500 text-white'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                  }`}
                >
                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </button>
              )}
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-zinc-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                disabled={isProcessing}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isProcessing}
                className="p-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-light disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            </div>
          </div>
        </div>
      )}
    </div>
  );
<<<<<<< HEAD
</div></div></div></div>}}}}}}}}}}}}}}}}}</motion.div>}
=======
};
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
