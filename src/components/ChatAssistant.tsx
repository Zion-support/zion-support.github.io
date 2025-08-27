import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isLoading?: boolean;
}

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Zion Tech Group's AI assistant. How can I help you today? I can assist with:\n\n• Service inquiries\n• Technical support\n• Pricing information\n• Project consultations\n• General questions",
      sender: 'bot',
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

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue.trim());
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('service') || input.includes('help')) {
      return "I'd be happy to help you with our services! We offer:\n\n🤖 **AI & Analytics**: Machine learning, data science, and business intelligence\n☁️ **Cloud & DevOps**: Infrastructure automation and cloud solutions\n🛡️ **Cybersecurity**: AI-powered security and compliance\n📱 **Micro SaaS**: Specialized software solutions for niche markets\n\nWhich area interests you most?";
    }
    
    if (input.includes('price') || input.includes('cost') || input.includes('pricing')) {
      return "Our pricing varies based on the service and scope. We offer:\n\n• **Consultation**: Starting at $150/hour\n• **Project-based**: Custom quotes based on requirements\n• **Retainer**: Monthly packages starting at $2,500\n• **Micro SaaS**: Subscription models from $29/month\n\nWould you like me to connect you with our sales team for a detailed quote?";
    }
    
    if (input.includes('contact') || input.includes('speak') || input.includes('call')) {
      return "Absolutely! Here are the best ways to reach us:\n\n📧 **Email**: kleber@ziontechgroup.com\n📱 **Phone**: +1 (302) 464-0950\n📍 **Address**: 364 E Main St STE 1008, Middletown DE 19709\n\nI can also schedule a consultation call for you. When would be a good time?";
    }
    
    if (input.includes('ai') || input.includes('artificial intelligence')) {
      return "Our AI services are cutting-edge! We specialize in:\n\n🧠 **Machine Learning Models**: Custom algorithms for your data\n📊 **Predictive Analytics**: Future insights from historical data\n🤖 **Process Automation**: Streamline operations with AI\n📈 **Business Intelligence**: Data-driven decision making\n\nWhat specific AI challenge are you looking to solve?";
    }
    
    if (input.includes('project') || input.includes('timeline') || input.includes('delivery')) {
      return "Project timelines depend on complexity and scope:\n\n⚡ **Simple integrations**: 2-4 weeks\n🔄 **Custom development**: 8-16 weeks\n🚀 **Enterprise solutions**: 12-24 weeks\n\nWe always provide detailed project plans and regular updates. Would you like to discuss your specific project requirements?";
    }
    
    if (input.includes('support') || input.includes('help desk') || input.includes('technical')) {
      return "We provide comprehensive technical support:\n\n🆘 **24/7 Emergency Support**: Critical issues\n📞 **Business Hours**: 9 AM - 6 PM EST\n💬 **Live Chat**: Available on our website\n📧 **Email Support**: Response within 4 hours\n\nWhat technical issue are you experiencing?";
    }
    
    return "That's an interesting question! While I can help with general information, for specific technical details or complex inquiries, I'd recommend speaking with one of our experts. Would you like me to:\n\n• Schedule a consultation call?\n• Connect you with our technical team?\n• Provide more information about a specific service?\n\nWhat would be most helpful for you?";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="fixed bottom-6 left-6 z-50"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="w-6 h-6 text-white" />
          
          {/* Notification Badge */}
          {messages.length > 1 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
            >
              <span className="text-white text-xs font-bold">!</span>
            </motion.div>
          )}
        </button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 left-6 w-96 h-[500px] bg-slate-900/95 backdrop-blur-xl border border-cyan-400/20 rounded-2xl shadow-2xl shadow-cyan-400/10 z-40 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-cyan-400/20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">AI Assistant</h3>
                  <p className="text-cyan-400 text-sm">Powered by Zion Tech Group</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
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
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                        : 'bg-white/10 text-white border border-white/20'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.sender === 'bot' && (
                        <Bot className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                      )}
                      <div className="whitespace-pre-wrap text-sm">{message.text}</div>
                    </div>
                    <div className={`text-xs mt-2 ${
                      message.sender === 'user' ? 'text-cyan-100' : 'text-gray-400'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
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
                  <div className="max-w-[80%] p-3 rounded-2xl bg-white/10 text-white border border-white/20">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4 text-cyan-400" />
                      <div className="flex items-center gap-1">
                        <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
                        <span className="text-sm">AI is typing...</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-cyan-400/20">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              
              {/* Quick Actions */}
              <div className="mt-3 flex flex-wrap gap-2">
                {['Services', 'Pricing', 'Contact', 'Support'].map((action) => (
                  <button
                    key={action}
                    onClick={() => setInputValue(action)}
                    className="px-3 py-1 text-xs bg-white/5 hover:bg-white/10 text-cyan-400 rounded-full border border-cyan-400/20 transition-all duration-200 hover:border-cyan-400/40"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
