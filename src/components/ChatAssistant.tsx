import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Lightbulb, 
  Zap,
  ChevronDown,
  ChevronUp,
  Settings,
  RefreshCw
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isLoading?: boolean;
}

interface QuickAction {
  id: string;
  label: string;
  description: string;
  icon: React.ComponentType<any>;
  action: () => void;
}

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Hello! I\'m your AI assistant. How can I help you today? I can assist with:\n\n• Service information\n• Technical support\n• Pricing details\n• Project inquiries\n• General questions',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickActions: QuickAction[] = [
    {
      id: 'services',
      label: 'Our Services',
      description: 'Learn about our AI and IT solutions',
      icon: Sparkles,
      action: () => handleQuickAction('Tell me about your services')
    },
    {
      id: 'pricing',
      label: 'Pricing',
      description: 'Get information about our pricing',
      icon: Lightbulb,
      action: () => handleQuickAction('What are your pricing options?')
    },
    {
      id: 'contact',
      label: 'Contact Us',
      description: 'Get in touch with our team',
      icon: Zap,
      action: () => handleQuickAction('How can I contact your team?')
    },
    {
      id: 'support',
      label: 'Support',
      description: 'Get technical support help',
      icon: Bot,
      action: () => handleQuickAction('I need technical support')
    }
  ];

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleQuickAction = (action: string) => {
    setInputValue(action);
    handleSendMessage(action);
  };

  const handleSendMessage = async (content?: string) => {
    const messageContent = content || inputValue.trim();
    if (!messageContent) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: messageContent,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setIsProcessing(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(messageContent);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: aiResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
      setIsProcessing(false);
    }, 1500 + Math.random() * 1000); // Random delay for realism
  };

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('service') || lowerMessage.includes('solution')) {
      return `We offer comprehensive AI and IT services including:\n\n🤖 **AI Solutions**\n• Machine Learning & Predictive Analytics\n• AI Business Intelligence\n• AI Sales Copilot\n• AI Compliance Assistant\n\n☁️ **Cloud & DevOps**\n• Cloud Infrastructure Management\n• CI/CD Automation\n• Container Orchestration\n\n🔒 **Cybersecurity**\n• AI-Powered Threat Detection\n• Zero Trust Architecture\n• Compliance Monitoring\n\n💡 **Digital Transformation**\n• Business Process Optimization\n• Legacy System Modernization\n• Strategic IT Consulting\n\nWould you like me to elaborate on any specific service?`;
    }
    
    if (lowerMessage.includes('pricing') || lowerMessage.includes('cost')) {
      return `Our pricing is flexible and tailored to your needs:\n\n📊 **Project-Based Pricing**\n• Custom quotes based on scope and complexity\n• Transparent cost breakdown\n• No hidden fees\n\n💳 **Subscription Plans**\n• Monthly/Annual contracts for ongoing services\n• Volume discounts available\n• Enterprise pricing for large organizations\n\n🆓 **Free Consultation**\n• Initial assessment at no cost\n• Detailed proposal with pricing\n• Risk-free evaluation\n\nWould you like me to connect you with our sales team for a personalized quote?`;
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('team')) {
      return `You can reach our team through multiple channels:\n\n📧 **Email**\n• General inquiries: info@ziontechgroup.com\n• Sales: sales@ziontechgroup.com\n• Support: support@ziontechgroup.com\n\n📞 **Phone**\n• Main: +1 (555) 123-4567\n• Support: +1 (555) 123-4568\n\n🌐 **Online**\n• Contact form on our website\n• Live chat during business hours\n• Schedule a consultation call\n\n⏰ **Business Hours**\n• Monday-Friday: 9 AM - 6 PM EST\n• 24/7 emergency support for existing clients\n\nWhat's the best way to reach you?`;
    }
    
    if (lowerMessage.includes('support') || lowerMessage.includes('help')) {
      return `I'm here to help! Here are some ways I can assist you:\n\n🔧 **Technical Issues**\n• Troubleshooting guidance\n• Configuration help\n• Performance optimization\n\n📚 **Documentation**\n• User guides and tutorials\n• API documentation\n• Best practices\n\n🚨 **Emergency Support**\n• Critical issue escalation\n• 24/7 support for premium clients\n• On-site assistance if needed\n\n💬 **General Questions**\n• Service information\n• Account management\n• Billing inquiries\n\nWhat specific issue are you experiencing?`;
    }
    
    if (lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence')) {
      return `AI is at the core of our solutions! Here's what we offer:\n\n🧠 **AI Capabilities**\n• Machine Learning Models\n• Natural Language Processing\n• Computer Vision\n• Predictive Analytics\n• Automated Decision Making\n\n🚀 **AI Applications**\n• Business Intelligence & Analytics\n• Customer Service Automation\n• Process Optimization\n• Risk Assessment\n• Content Generation\n\n💡 **Why Our AI?**\n• Custom-trained models for your industry\n• Continuous learning and improvement\n• Ethical AI practices\n• Transparent decision-making\n• Human-AI collaboration\n\nWould you like to explore how AI can transform your business?`;
    }
    
    // Default response
    return `Thank you for your message! I'm here to help you with any questions about Zion Tech Group's services, pricing, or support. Feel free to ask me anything specific, or use the quick action buttons above to get started. How can I assist you today?`;
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

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
    setMessages([
      {
        id: '1',
        type: 'assistant',
        content: 'Hello! I\'m your AI assistant. How can I help you today? I can assist with:\n\n• Service information\n• Technical support\n• Pricing details\n• Project inquiries\n• General questions',
        timestamp: new Date()
      }
    ]);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 z-50 p-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat assistant"
        title="AI Chat Assistant"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-4 z-50 w-96 max-h-[600px] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700 overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 text-white">
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
                    onClick={toggleMinimize}
                    className="p-1 hover:bg-white/20 rounded transition-colors"
                    aria-label={isMinimized ? 'Expand chat' : 'Minimize chat'}
                  >
                    {isMinimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={toggleChat}
                    className="p-1 hover:bg-white/20 rounded transition-colors"
                    aria-label="Close chat"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Quick Actions */}
                <div className="p-4 border-b border-gray-200 dark:border-slate-700">
                  <div className="grid grid-cols-2 gap-2">
                    {quickActions.map((action) => (
                      <motion.button
                        key={action.id}
                        onClick={action.action}
                        className="p-3 text-left bg-gray-50 dark:bg-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isProcessing}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <action.icon className="w-4 h-4 text-blue-500" />
                          <span className="text-sm font-medium text-gray-900 dark:text-white">
                            {action.label}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-slate-400">
                          {action.description}
                        </p>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto max-h-80 p-4 space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.type === 'user'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          {message.type === 'user' ? (
                            <User className="w-4 h-4" />
                          ) : (
                            <Bot className="w-4 h-4 text-blue-500" />
                          )}
                          <span className="text-xs opacity-70">
                            {message.timestamp.toLocaleTimeString()}
                          </span>
                        </div>
                        <div className="whitespace-pre-wrap text-sm">
                          {message.content}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-gray-100 dark:bg-slate-700 p-3 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Bot className="w-4 h-4 text-blue-500" />
                          <span className="text-xs opacity-70">AI is typing...</span>
                        </div>
                        <div className="flex space-x-1">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              className="w-2 h-2 bg-blue-500 rounded-full"
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5]
                              }}
                              transition={{
                                duration: 1.4,
                                repeat: Infinity,
                                delay: i * 0.2
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-gray-200 dark:border-slate-700">
                  <div className="flex items-center gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                      disabled={isProcessing}
                    />
                    <button
                      onClick={() => handleSendMessage()}
                      disabled={!inputValue.trim() || isProcessing}
                      className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      aria-label="Send message"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* Chat Actions */}
                  <div className="flex items-center justify-between mt-2">
                    <button
                      onClick={clearChat}
                      className="text-xs text-gray-500 hover:text-gray-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
                    >
                      Clear chat
                    </button>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-slate-400">
                      <span>Powered by AI</span>
                      <Sparkles className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
