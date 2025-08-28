import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Loader2, 
  Mic, 
  MicOff,
  Settings,
  HelpCircle,
  Zap,
  Brain,
  Shield
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isLoading?: boolean;
}

interface ChatAssistantProps {
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  theme?: 'zion' | 'dark' | 'light';
  showWelcomeMessage?: boolean;
  autoOpen?: boolean;
}

export function ChatAssistant({
  position = 'bottom-right',
  theme = 'zion',
  showWelcomeMessage = true,
  autoOpen = false
}: ChatAssistantProps) {
  const [isOpen, setIsOpen] = useState(autoOpen);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [isMinimized, setIsMinimized] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Initialize with welcome message
  useEffect(() => {
    if (showWelcomeMessage && messages.length === 0) {
      const welcomeMessage: Message = {
        id: 'welcome',
        type: 'assistant',
        content: `Hello! I'm Zion AI, your intelligent assistant. I can help you with:
        
• Information about our AI solutions and IT services
• Technical support and guidance
• Business consultation and strategy
• Product recommendations
• General inquiries

How can I assist you today?`,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [showWelcomeMessage, messages.length]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Save chat history to localStorage
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('zion-chat-history', JSON.stringify(messages));
    }
  }, [messages]);

  // Load chat history from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem('zion-chat-history');
    if (savedHistory) {
      try {
        const parsed = JSON.parse(savedHistory);
        setChatHistory(parsed);
      } catch (error) {
        console.warn('Failed to load chat history:', error);
      }
    }
  }, []);

  const generateResponse = useCallback(async (userMessage: string): Promise<string> => {
    // Simulate AI response generation
    setIsTyping(true);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    // Generate contextual responses based on user input
    const lowerMessage = userMessage.toLowerCase();
    let response = '';
    
    if (lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence')) {
      response = `Our AI solutions are designed to transform your business operations. We offer:

🤖 **Machine Learning Solutions**
• Predictive analytics and forecasting
• Natural language processing
• Computer vision and image recognition
• Recommendation engines

🧠 **AI-Powered Business Intelligence**
• Automated data analysis
• Intelligent reporting and dashboards
• Process automation
• Customer behavior insights

Would you like me to elaborate on any specific AI service?`;
    } else if (lowerMessage.includes('service') || lowerMessage.includes('help')) {
      response = `I'd be happy to help! Here are the main areas I can assist with:

🔧 **IT Services**
• Cloud infrastructure and DevOps
• Cybersecurity and compliance
• Digital transformation
• IT consulting and strategy

💼 **Business Solutions**
• Process optimization
• Data analytics and insights
• Customer experience enhancement
• Performance monitoring

What specific area would you like to explore?`;
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('support')) {
      response = `Here's how you can reach our team:

📞 **Phone**: +1 (555) 123-4567
📧 **Email**: info@ziontechgroup.com
🌐 **Website**: ziontechgroup.com
💬 **Live Chat**: Available on our website

Our support team is available Monday-Friday, 9 AM - 6 PM EST. For urgent technical issues, we offer 24/7 emergency support.

Would you like me to help you with something specific, or would you prefer to speak with a human representative?`;
    } else if (lowerMessage.includes('pricing') || lowerMessage.includes('cost')) {
      response = `Our pricing structure is designed to be flexible and scalable:

💰 **Flexible Plans**
• **Starter**: $99/month - Basic AI tools and support
• **Professional**: $299/month - Advanced features + priority support
• **Enterprise**: Custom pricing - Full suite + dedicated team

🎯 **Pay-as-you-grow options available**
• No long-term contracts
• Scale up or down as needed
• Custom enterprise solutions

Would you like me to connect you with our sales team for a personalized quote?`;
    } else {
      response = `Thank you for your message! I'm here to help you with any questions about Zion Tech Group's services.

Some popular topics I can help with:
• AI and machine learning solutions
• IT infrastructure and cloud services
• Cybersecurity and compliance
• Digital transformation strategies
• Pricing and packages

What would you like to know more about?`;
    }
    
    setIsTyping(false);
    return response;
  }, []);

  const handleSendMessage = useCallback(async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Generate AI response
    const response = await generateResponse(userMessage);
    
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: 'assistant',
      content: response,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, assistantMessage]);
  }, [inputValue, isTyping, generateResponse]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  }, [handleSendMessage]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsMinimized(false);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const clearChat = () => {
    setMessages([]);
    setChatHistory([]);
    localStorage.removeItem('zion-chat-history');
  };

  const startVoiceInput = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      setIsListening(true);
      // Implement speech recognition logic here
      setTimeout(() => setIsListening(false), 3000);
    } else {
      alert('Speech recognition is not supported in your browser.');
    }
  };

  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6'
  };

  const themeClasses = {
    zion: 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-zion-cyan',
    dark: 'bg-slate-900 border-slate-700',
    light: 'bg-white border-gray-300'
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={toggleChat}
        className={`fixed ${positionClasses[position]} z-50 p-4 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/80 hover:to-zion-purple/80 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Chat with Zion AI"
        aria-label="Open chat assistant"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`fixed ${positionClasses[position]} z-40 w-96 max-h-[600px] ${themeClasses[theme]} border rounded-xl shadow-2xl backdrop-blur-sm`}
            style={{ transform: `translateY(${isMinimized ? 'calc(100% - 60px)' : '0'})` }}
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Zion AI Assistant</h3>
                  <p className="text-xs text-zion-cyan">Powered by AI</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleMinimize}
                  className="p-1 text-slate-400 hover:text-white transition-colors"
                  title={isMinimized ? 'Expand' : 'Minimize'}
                >
                  <X className={`w-4 h-4 transition-transform ${isMinimized ? 'rotate-45' : ''}`} />
                </button>
                <button
                  onClick={toggleChat}
                  className="p-1 text-slate-400 hover:text-white transition-colors"
                  title="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            {!isMinimized && (
              <>
                <div 
                  ref={chatContainerRef}
                  className="flex-1 overflow-y-auto max-h-96 p-4 space-y-4"
                >
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                        <div className={`p-3 rounded-lg ${
                          message.type === 'user' 
                            ? 'bg-zion-cyan text-white' 
                            : 'bg-slate-700/50 text-slate-200'
                        }`}>
                          <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                          <div className="text-xs opacity-70 mt-2">
                            {message.timestamp.toLocaleTimeString()}
                          </div>
                        </div>
                      </div>
                      
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-2 ${
                        message.type === 'user' 
                          ? 'bg-zion-cyan order-1' 
                          : 'bg-zion-purple order-2'
                      }`}>
                        {message.type === 'user' ? (
                          <User className="w-4 h-4 text-white" />
                        ) : (
                          <Bot className="w-4 h-4 text-white" />
                        )}
                      </div>
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="w-8 h-8 bg-zion-purple rounded-full flex items-center justify-center mx-2">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-slate-700/50 text-slate-200 p-3 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span className="text-sm">AI is thinking...</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Chat Input */}
                <div className="p-4 border-t border-slate-700/50">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={startVoiceInput}
                      className={`p-2 rounded-lg transition-colors ${
                        isListening 
                          ? 'bg-red-500 text-white' 
                          : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                      }`}
                      title="Voice input"
                    >
                      {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    </button>
                    
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 bg-slate-700 text-white placeholder-slate-400 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                      disabled={isTyping}
                    />
                    
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isTyping}
                      className="p-2 bg-zion-cyan hover:bg-zion-cyan/80 disabled:bg-slate-600 text-white rounded-lg transition-colors disabled:cursor-not-allowed"
                      title="Send message"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setShowSettings(!showSettings)}
                        className="p-1 text-slate-400 hover:text-white transition-colors"
                        title="Settings"
                      >
                        <Settings className="w-4 h-4" />
                      </button>
                      <button
                        onClick={clearChat}
                        className="p-1 text-slate-400 hover:text-white transition-colors"
                        title="Clear chat"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex items-center space-x-1 text-xs text-slate-400">
                      <Sparkles className="w-3 h-3" />
                      <span>Powered by AI</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={`fixed ${positionClasses[position]} z-30 w-80 bg-slate-800 border border-slate-700 rounded-lg shadow-xl p-4`}
            style={{ transform: `translateY(${isMinimized ? 'calc(100% - 60px)' : '0'}) translateY(-120px)` }}
          >
            <h4 className="text-white font-semibold mb-3">Chat Settings</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Auto-open on page load</span>
                <input
                  type="checkbox"
                  checked={autoOpen}
                  className="w-4 h-4 text-zion-cyan bg-slate-700 border-slate-600 rounded focus:ring-zion-cyan"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Show welcome message</span>
                <input
                  type="checkbox"
                  checked={showWelcomeMessage}
                  className="w-4 h-4 text-zion-cyan bg-slate-700 border-slate-600 rounded focus:ring-zion-cyan"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Voice input</span>
                <input
                  type="checkbox"
                  checked={true}
                  className="w-4 h-4 text-zion-cyan bg-slate-700 border-slate-600 rounded focus:ring-zion-cyan"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
