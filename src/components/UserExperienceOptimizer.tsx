import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  Star, 
  Users, 
  Award,
  CheckCircle,
  ArrowRight,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

// Interactive Chat Widget
export const InteractiveChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = [
    'Tell me about your services',
    'Get a quote',
    'Schedule a consultation',
    'Technical support'
  ];

  const handleQuickReply = (reply: string) => {
    setMessages(prev => [...prev, {
      id: prev.length + 1,
      type: 'user',
      content: reply,
      timestamp: new Date()
    }]);
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        type: 'bot',
        content: `Thanks for asking about "${reply}". Let me connect you with our team.`,
        timestamp: new Date()
      }]);
    }, 1000);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    setMessages(prev => [...prev, {
      id: prev.length + 1,
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    }]);
    setInputValue('');
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-zion-cyan text-white p-4 rounded-full shadow-lg hover:bg-zion-cyan/90 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-50 w-96 bg-white rounded-lg shadow-2xl border border-gray-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-zion-slate-dark to-zion-purple text-white p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Zion Tech Group Support</h3>
                  <p className="text-sm text-zion-cyan">We're here to help!</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="p-1 hover:bg-white/20 rounded"
                    aria-label={isMinimized ? 'Expand chat' : 'Minimize chat'}
                  >
                    {isMinimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-white/20 rounded"
                    aria-label="Close chat"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Chat Content */}
            {!isMinimized && (
              <div className="h-96 flex flex-col">
                {/* Messages */}
                <div className="flex-1 p-4 overflow-y-auto space-y-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs p-3 rounded-lg ${
                          message.type === 'user'
                            ? 'bg-zion-cyan text-white'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Replies */}
                {messages.length === 1 && (
                  <div className="px-4 pb-2">
                    <div className="flex flex-wrap gap-2">
                      {quickReplies.map((reply) => (
                        <button
                          key={reply}
                          onClick={() => handleQuickReply(reply)}
                          className="px-3 py-1 text-xs bg-zion-cyan/10 text-zion-cyan rounded-full hover:bg-zion-cyan/20 transition-colors"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div className="p-4 border-t border-gray-200">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Type your message..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                    />
                    <button
                      onClick={handleSendMessage}
                      className="px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/90 transition-colors"
                      aria-label="Send message"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Enhanced Call-to-Action Component
interface EnhancedCTAProps {
  title: string;
  description: string;
  primaryAction: {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline';
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
  features?: string[];
  className?: string;
}

export const EnhancedCTA: React.FC<EnhancedCTAProps> = ({
  title,
  description,
  primaryAction,
  secondaryAction,
  features,
  className = ''
}) => {
  const getButtonClasses = (variant: string = 'primary') => {
    const baseClasses = 'inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-2';
    
    switch (variant) {
      case 'primary':
        return `${baseClasses} bg-zion-cyan text-white hover:bg-zion-cyan/90 focus:ring-zion-cyan/50`;
      case 'secondary':
        return `${baseClasses} bg-zion-purple text-white hover:bg-zion-purple/90 focus:ring-zion-purple/50`;
      case 'outline':
        return `${baseClasses} border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white focus:ring-zion-cyan/50`;
      default:
        return baseClasses;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8 text-center ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      <p className="text-xl text-zion-cyan mb-8 max-w-2xl mx-auto">{description}</p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <a href={primaryAction.href} className={getButtonClasses(primaryAction.variant)}>
          {primaryAction.text}
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
        
        {secondaryAction && (
          <a href={secondaryAction.href} className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
            {secondaryAction.text}
          </a>
        )}
      </div>

      {features && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center space-x-3 text-zion-cyan"
            >
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-white">{feature}</span>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

// Trust Signals Component
export const TrustSignals: React.FC = () => {
  const signals = [
    { icon: Users, text: '500+ Clients Worldwide', color: 'text-blue-400' },
    { icon: Award, text: 'ISO 27001 Certified', color: 'text-yellow-400' },
    { icon: Star, text: '4.9/5 Customer Rating', color: 'text-green-400' },
    { icon: Clock, text: '24/7 Support Available', color: 'text-purple-400' }
  ];

  return (
    <div className="py-12 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {signals.map((signal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`${signal.color} mb-3 flex justify-center`}>
                <signal.icon className="w-12 h-12" />
              </div>
              <p className="text-white font-medium">{signal.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Accessibility Enhancement Component
export const AccessibilityEnhancer: React.FC = () => {
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [highContrast]);

  useEffect(() => {
    if (reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
  }, [reducedMotion]);

  return (
    <div className="fixed top-20 right-4 z-40 bg-white rounded-lg shadow-lg border border-gray-200 p-4">
      <h3 className="font-semibold text-gray-900 mb-3">Accessibility</h3>
      
      <div className="space-y-3">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Font Size</label>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setFontSize(Math.max(12, fontSize - 2))}
              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              aria-label="Decrease font size"
            >
              A-
            </button>
            <span className="text-sm w-8 text-center">{fontSize}px</span>
            <button
              onClick={() => setFontSize(Math.min(24, fontSize + 2))}
              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              aria-label="Increase font size"
            >
              A+
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="highContrast"
            checked={highContrast}
            onChange={(e) => setHighContrast(e.target.checked)}
            className="rounded"
          />
          <label htmlFor="highContrast" className="text-sm text-gray-600">
            High Contrast
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="reducedMotion"
            checked={reducedMotion}
            onChange={(e) => setReducedMotion(e.target.checked)}
            className="rounded"
          />
          <label htmlFor="reducedMotion" className="text-sm text-gray-600">
            Reduced Motion
          </label>
        </div>
      </div>
    </div>
  );
};