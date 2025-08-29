import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Zap,
  Brain,
  Cloud,
  Rocket,
  Shield,
  Globe
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
  icon: React.ComponentType<any>;
  description: string;
  action: () => void;
}

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'Hello! I\'m Zion, your AI assistant. How can I help you today? I can help with:\n\n• AI Services & Solutions\n• IT Infrastructure\n• Cloud & DevOps\n• Digital Transformation\n• Pricing & Quotes\n\nWhat would you like to know?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const quickActions: QuickAction[] = [
    {
      id: 'ai-services',
      label: 'AI Services',
      icon: Brain,
      description: 'Learn about your AI services and how they can benefit my business.',
      action: () => handleQuickAction('Tell me about your AI services and how they can benefit my business.')
    },
    {
      id: 'cloud-devops',
      label: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Infrastructure solutions',
      action: () => handleQuickAction('What cloud and DevOps services do you offer?')
    },
    {
      id: 'pricing',
      label: 'Pricing',
      icon: Zap,
      description: 'Get pricing information',
      action: () => handleQuickAction('What are your pricing options for different services?')
    },
    {
      id: 'contact',
      label: 'Contact Sales',
      icon: MessageCircle,
      description: 'Talk to our team',
      action: () => handleQuickAction('I\'d like to speak with your sales team about a project.')
    }
  ];

  const handleQuickAction = async (message: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(message);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: aiResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence')) {
      return `Our AI services are designed to transform your business operations:

🤖 **AI Business Intelligence**
• Machine Learning models for predictive analytics
• Natural Language Processing for customer insights
• Computer Vision for automated quality control

🧠 **AI Sales Copilot**
• Automated lead qualification
• Personalized customer recommendations
• Sales performance optimization

📊 **AI Compliance Assistant**
• Automated regulatory compliance
• Real-time risk assessment
• Audit trail automation

Would you like me to elaborate on any specific AI service or discuss how we can implement these solutions for your business?`;
    }
    
    if (lowerMessage.includes('cloud') || lowerMessage.includes('devops')) {
      return `Our Cloud & DevOps services help you build scalable, reliable infrastructure:

☁️ **Cloud Infrastructure**
• Multi-cloud strategy and migration
• Container orchestration with Kubernetes
• Serverless architecture design

🔄 **DevOps & Automation**
• CI/CD pipeline implementation
• Infrastructure as Code (IaC)
• Monitoring and alerting systems

💰 **Cloud FinOps**
• Cost optimization and monitoring
• Resource utilization analysis
• Budget management and forecasting

What's your current infrastructure setup? I can help you plan the best approach for your needs.`;
    }
    
    if (lowerMessage.includes('pricing') || lowerMessage.includes('cost')) {
      return `We offer flexible pricing models to fit your business needs:

💳 **Subscription Plans**
• Starter: $99/month - Basic AI tools
• Professional: $299/month - Full AI suite
• Enterprise: Custom pricing - Dedicated support

🚀 **Project-Based Pricing**
• AI Implementation: $5,000 - $50,000+
• Cloud Migration: $10,000 - $100,000+
• Custom Development: Hourly rates available

📋 **Free Consultation**
• 30-minute strategy session
• Technology assessment
• Implementation roadmap

Would you like me to schedule a free consultation to discuss your specific requirements and get a detailed quote?`;
    }
    
    if (lowerMessage.includes('sales') || lowerMessage.includes('contact')) {
      return `Great! I\'d be happy to connect you with our sales team. Here are the best ways to reach us:

📞 **Direct Contact**
• Phone: +1 (800) ZION-TECH
• Email: sales@ziontechgroup.com
• Live Chat: Available on our website

📅 **Schedule a Meeting**
• 30-minute discovery call
• Technical deep-dive session
• On-site consultation (available in select areas)

🎯 **What to Prepare**
• Current technology stack
• Business challenges
• Project timeline and budget
• Team size and technical expertise

I can also help you prepare a brief project overview to make the most of your consultation. What type of project are you looking to discuss?`;
    }
    
    return `Thank you for your question! I\'m here to help you with any aspect of our services. 

Could you please provide more specific details about what you\'re looking for? For example:
• What industry are you in?
• What specific challenges are you facing?
• What's your timeline for implementation?
• What's your budget range?

This will help me give you more targeted and helpful information.`;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(userMessage.content);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: aiResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 z-50 flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Notification Badge */}
        {!isOpen && (
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2, type: "spring" }}
          >
            <span className="text-xs text-white font-bold">AI</span>
          </motion.div>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-96 h-[600px] bg-slate-800 rounded-2xl border border-cyan-500/20 shadow-2xl z-40 flex flex-col"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Zion AI Assistant</h3>
                  <p className="text-xs text-cyan-400">Powered by AI</p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                    <div className={`flex items-start space-x-2 ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.type === 'user' 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
                          : 'bg-gradient-to-r from-cyan-500 to-blue-600'
                      }`}>
                        {message.type === 'user' ? (
                          <User className="w-4 h-4 text-white" />
                        ) : (
                          <Bot className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <div className={`rounded-2xl px-4 py-2 ${
                        message.type === 'user'
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                          : 'bg-slate-700 text-gray-100'
                      }`}>
                        <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                        <div className={`text-xs mt-1 ${
                          message.type === 'user' ? 'text-blue-100' : 'text-gray-400'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-slate-700 rounded-2xl px-4 py-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100" />
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length === 1 && (
              <div className="p-4 border-t border-slate-700">
                <p className="text-xs text-gray-400 mb-3 text-center">Quick Actions</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action) => (
                    <button
                      key={action.id}
                      onClick={action.action}
                      className="flex flex-col items-center p-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors duration-200 group"
                    >
                      <action.icon className="w-5 h-5 text-cyan-400 mb-1 group-hover:text-cyan-300" />
                      <span className="text-xs text-gray-300 font-medium">{action.label}</span>
                      <span className="text-xs text-gray-500 text-center mt-1">{action.description}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 border-t border-slate-700">
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about our services..."
                  className="flex-1 bg-slate-700 text-white placeholder-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Powered by AI • Your conversations are private
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
