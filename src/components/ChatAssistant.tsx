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

<<<<<<< HEAD
export const ChatAssistant({ ;
  enabled = true, ;
  position = 'bottom-right',;
  theme = 'auto',;
  language = 'en';
}: ChatAssistantProps) {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
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
  const scrollToBottom = useCallback(() => {;
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })}, []);

  useEffect(()  => {
    scrollToBottom()}, [messages, scrollToBottom]);

  // Theme management
  useEffect(() => {
    if (theme = == 'auto') {;
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setCurrentTheme(mediaQuery.matches ? 'dark' : 'light');
      
      const handleChange = (e: MediaQueryListEvent)  => {;
        setCurrentTheme(e.matches ? 'dark' : 'light')};
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange)} else {
      setCurrentTheme(theme)}
  }, [theme]);

  // Voice recognition setup
  useEffect(() => {
    if (enableVoice && 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = (window as ).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

<<<<<<< HEAD
      recognitionRef.current.onresult = (event) => {
=======;
      recognitionRef.current.onresult = (event: any) => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
        const transcript = event.results[0][0].transcript;
        setInputValue(transcript);
        setIsListening(false);
      };

<<<<<<< HEAD
      recognitionRef.current.onerror = (event) => {;
        console.error('Speech recognition error: ', event.error);
=======
      recognitionRef.current.onerror = (event: any) => {;
        console.error('Speech recognition error:', event.error);
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
        setIsListening(false);
      };
    }
  }, [enableVoice]);

  // Initialize with welcome message
  useEffect(() => {
<<<<<<< HEAD
    if (enabled && messages.length = == 0) {
      const welcomeMessage: Message = {
  id: 'welcome',
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
        type: 'assistant',
        content: 'Hello! I\'m your AI assistant. How can I help you today?',
        timestamp: new Date(),
        metadata: {
          suggestions: [
<<<<<<< HEAD
            'Tell me about your services',
            'Help me with pricing',
            'Schedule a consultation',
  'Technical support'
          ]
        
}
=======
            'Tell me about your AI solutions',
            'What quantum computing services do you offer?',
            'How can I get started with your platform?',;
  'What are your pricing plans?';
          ];
        ;
;



};
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      };
      setMessages([welcomeMessage]);
    }
  }, [enabled, messages.length]);

<<<<<<< HEAD
  // Handle voice input
  const toggleVoiceInput = useCallback(() => {;
    if (!recognitionRef.current) return;
=======
  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {;
    setInputValue(e.target.value);
  };

  // Handle send message
  const handleSendMessage = useCallback(async () => {;
    if (!inputValue.trim() || isProcessing) return;

    const userMessage: Message = {;
      id: `user-${Date.now()}`,;
      type: 'user',;
      content: inputValue.trim(),;
      timestamp: new Date();
    };

    setMessages(prev => [...prev, userMessage]);
    setChatHistory(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setIsProcessing(true);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {;
        id: `assistant-${Date.now()}`,;
        type: 'assistant',;
        content: aiResponse.content,;
        timestamp: new Date(),;
        metadata: aiResponse.metadata;
      };

      setMessages(prev => [...prev, assistantMessage]);
      setChatHistory(prev => [...prev, assistantMessage]);
      setSuggestions(aiResponse.metadata?.suggestions || []);
      setIsTyping(false);
      setIsProcessing(false);
    }, 1000 + Math.random() * 2000); // Random delay for realism
  }, [inputValue, isProcessing]);

  // Generate AI response
  const generateAIResponse = (userInput: string): { content: string; metadata: any } => {
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
      };
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {;
    setInputValue(suggestion);
    inputRef.current?.focus();
  };

  // Toggle speech recognition
  const toggleSpeechRecognition = () => {;
    if (!recognitionRef.current) {;
      alert('Speech recognition is not supported in your browser');
      return;
    }
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  }, [isListening]);

<<<<<<< HEAD
  // Send message
  const sendMessage = useCallback(async (content: string) => {;
    if (!content.trim()) return;

    const userMessage: ChatMessage = {
  id: Date.now().toString(),
      type: 'user',
      content: content.trim(),
      timestamp: new Date(),
   ;
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
   
};
      };

      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      const errorMessage: ChatMessage = {
  id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
   ;
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
      'I can definitely assist you with that. Let me share some relevant information.',;
    ];
    
    return responses[Math.floor(Math.random() * responses.length)]};

  // Generate suggestions based on user input
  const generateSuggestions = (userInput: string): string[] => {
    const suggestions = [
      'Tell me more',
      'Can you explain that differently?',
      'What are the next steps?',
      'Show me examples',
      'How does this work?';
    ];
    
    return suggestions.slice(0, 3)};

  // Handle file upload
  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>)  => {;
    const file = event.target.files?.[0];
    if (file) {
      const fileMessage: ChatMessage = {
  id: Date.now().toString(),
        type: 'user',
  content: `Uploaded file: ${file.name
}`,
        timestamp: new Date(),
        metadata: {
          sources: [file.name],
        };
      };
      setMessages(prev = > [...prev, fileMessage])};
  }, []);

  // Handle suggestion click
  const handleSuggestionClick = useCallback((suggestion: string)  => {;
    sendMessage(suggestion)}, [sendMessage]);

  // Handle enter key
  const handleKeyPress = useCallback((e: React.KeyboardEvent)  => {
    if (e.key === 'Enter' && !e.shiftKey) {
=======
  // Toggle mute;
  const toggleMute = () => {;
    setIsMuted(!isMuted);
  };

  // Handle key press
  const handleKeyPress = (e: React.KeyboardEvent) => {;
    if (e.key === 'Enter' && !e.shiftKey) {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      e.preventDefault();
      sendMessage(inputValue)}
  }, [inputValue, sendMessage]);

  // Clear chat
<<<<<<< HEAD
  const clearChat = useCallback(() => {;
    setMessages([])}, []);

  // Export chat
  const exportChat = useCallback(() => {
    const chatData = messages.map(msg => ({
      type: msg.type,
      content: msg.content,
      timestamp: msg.timestamp.toISOString(),;
    }));
=======
  const clearChat = () => {;
    setMessages([]);
    setChatHistory([]);
    setSuggestions([]);
  };

  // Export chat
  const exportChat = () => {;
    const chatText = chatHistory.map(msg => ;
      `${msg.type === 'user' ? 'You' : 'AI Assistant'}: ${msg.content}`;
    ).join('\n\n');
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    
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
<<<<<<< HEAD
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
   ;
};

  const themeClasses = {
  light: 'bg-white text-gray-900 border-gray-200',
    dark: 'bg-gray-900 text-white border-gray-700',
   ;
};

  return (
    <div className = {`fixed ${positionClasses[position]} z-50`}>
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
=======;
    'top-right': 'top-4 right-4',;
  ;
  ;
  'top-left': 'top-4 left-4';
  ;




};

  if (!isOpen) {
    return (
      <motion.button
        onClick = {() => setIsOpen(true)}
        className={`fixed ${positionClasses[position]} z-50 p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Chat with AI Assistant"
        aria-label="Open AI chat assistant"
      >
        <MessageCircle className="w-6 h-6" />
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
          animate = {
  { scale: [1, 1.2,
  1] 





}}
          transition = {
  { duration: 2,
  repeat: Infinity 
;
;
;


}};
        />;
      </motion.button>;
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial = {
  { opacity: 0, scale: 0.8,
  y: 20 





}}
        animate = {
  { opacity: 1, scale: 1,
  y: 0 





}}
        exit = {
  { opacity: 0, scale: 0.8,
  y: 20 





}}
        className={`fixed ${positionClasses[position]} z-50 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col`}
      >
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
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
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

<<<<<<< HEAD
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
=======
        {/* Settings Panel */}
        <AnimatePresence>
          {showSettings && (
            <motion.div
              initial = {
  { height: 0,
  opacity: 0 





}}
              animate = {
  { height: 'auto',
  opacity: 1 





}}
              exit = {
  { height: 0,
  opacity: 0 





}}
              className="border-b border-gray-200 p-4 bg-gray-50"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Clear chat history</span>
                  <button
                    onClick={clearChat}
                    className="px-3 py-1 bg-red-100 text-red-700 text-xs rounded-lg hover:bg-red-200 transition-colors"
                  >
                    Clear
                  </button>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Export chat</span>
                  <button
                    onClick={exportChat}
                    className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-lg hover:bg-blue-200 transition-colors"
                  >
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
                  initial = {
  { opacity: 0,
  y: 10 





}}
                  animate = {
  { opacity: 1,
  y: 0 





}}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
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
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
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
<<<<<<< HEAD
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Bot className="w-4 h-4 text-blue-500" />
                        <div className="flex space-x-1">
=======
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial = {
  { opacity: 0,
  y: 10 





}}
                  animate = {
  { opacity: 1,
  y: 0 





}}
                  className="flex justify-start"
                >
                  <div className="max-w-[80%]">
                    <div className="p-3 rounded-2xl bg-gray-100 text-gray-800">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <Bot className="w-3 h-3 text-white" />
                        </div>
                        <div className="flex items-center gap-1">
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
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
<<<<<<< HEAD
            </>
          )}
        </div>
      )}
    </div>;
  )};
=======
            )}

            {/* Input */}
            <div className = "p-4 border-t border-gray-200">
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
                >
                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </button>
                
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isProcessing}
                  className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  title="Send message"
                >
                  {isProcessing ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </div>;
            </div>;
          </>;
        )};
      </motion.div>;
    </AnimatePresence>;
  );
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
