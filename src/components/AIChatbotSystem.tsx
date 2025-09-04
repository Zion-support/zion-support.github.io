import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Paperclip, 
  Mic, 
  MicOff, 
  Sparkles, 
  Clock,
  Settings,
  HelpCircle
} from 'lucide-react';

interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type: 'text';
  status: 'sent';
  metadata?: {
    confidence?: number;
    suggestions?: string[];
    relatedServices?: string[];
    estimatedResponseTime?: number;
  };
}

interface AIChatbotSystemProps {
  showHeader?: boolean;
  showSettings?: boolean;
  maxMessages?: number;
  autoScroll?: boolean;
}

export const AIChatbotSystem: React.FC<AIChatbotSystemProps> = ({
  showHeader = true,
  showSettings = true,
  maxMessages = 50,
  autoScroll = true
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sample welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: ChatMessage = {
        id: 'welcome',
        content: "Hello! I'm Zion AI, your intelligent assistant. I can help you with:\n\n• Information about our services\n• Technical support and guidance\n• Project inquiries and quotes\n• General questions about Zion Tech Group\n\nHow can I assist you today?",
        sender: 'bot',
        timestamp: new Date(),
        type: 'text',
        status: 'sent',
        metadata: {
          confidence: 0.95,
          suggestions: ['Tell me about your services', 'Get a quote', 'Technical support', 'Contact information'],
          relatedServices: ['AI Consulting', 'Cloud Solutions', 'Digital Transformation'],
          estimatedResponseTime: 2
        }
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (autoScroll && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, autoScroll]);

  // Simulate AI response
  const simulateAIResponse = useCallback(async (userInput: string) => {
    setIsTyping(true);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

    const responses = [
      {
        content: "We offer comprehensive AI solutions including machine learning, natural language processing, computer vision, and predictive analytics. Our services help businesses automate processes, gain insights from data, and create intelligent applications.",
        suggestions: ['AI Consulting', 'Machine Learning', 'Data Analytics', 'Automation'],
        relatedServices: ['AI Solutions', 'Data Science', 'Process Automation']
      },
      {
        content: "Our cybersecurity services include threat detection, vulnerability assessment, security audits, and compliance management. We help protect your digital assets with enterprise-grade security solutions.",
        suggestions: ['Security Assessment', 'Compliance', 'Threat Detection', 'Incident Response'],
        relatedServices: ['Cybersecurity', 'Compliance', 'Security Operations']
      },
      {
        content: "Digital transformation is our specialty! We help businesses modernize their technology stack, improve processes, and enhance customer experiences. Our approach includes strategy development, implementation, and change management.",
        suggestions: ['Strategy development', 'Implementation process', 'Change management', 'ROI examples'],
        relatedServices: ['Digital Transformation', 'Process Optimization', 'Change Management']
      }
    ];

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    const botMessage: ChatMessage = {
      id: Date.now().toString(),
      content: randomResponse.content,
      sender: 'bot',
      timestamp: new Date(),
      type: 'text',
      status: 'sent',
      metadata: {
        confidence: 0.85 + Math.random() * 0.1,
        suggestions: randomResponse.suggestions,
        relatedServices: randomResponse.relatedServices,
        estimatedResponseTime: 1 + Math.random() * 2
      }
    };

    setMessages(prev => [...prev, botMessage]);
    setIsTyping(false);
  }, []);

  // Handle message submission
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      sender: 'user',
      timestamp: new Date(),
      type: 'text',
      status: 'sent'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    await simulateAIResponse(inputValue.trim());
  }, [inputValue, isTyping, simulateAIResponse]);

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  // Clear chat
  const clearChat = () => {
    setMessages([]);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-50 p-4 bg-cyan-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle AI chatbot"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-20 right-4 z-40 w-96 h-[600px] bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            {showHeader && (
              <div className="p-4 bg-gray-800/50 border-b border-gray-700/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Zion AI Assistant</h3>
                      <p className="text-xs text-gray-400">Online • 24/7 Available</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {showSettings && (
                      <button className="p-2 text-gray-400 hover:text-white transition-colors">
                        <Settings className="w-4 h-4" />
                      </button>
                    )}
                    <button 
                      onClick={clearChat}
                      className="p-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <HelpCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] ${message.sender === 'user' ? 'bg-cyan-500 text-white' : 'bg-gray-800 text-white'} rounded-lg p-3`}>
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    {message.metadata?.suggestions && (
                      <div className="mt-2 flex flex-wrap gap-1">
                        {message.metadata.suggestions.slice(0, 3).map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded transition-colors"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex items-center gap-2 p-3 bg-gray-800/50 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-sm text-gray-400">Zion AI is typing...</span>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-700/50">
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask me anything about Zion Tech Group..."
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    disabled={isTyping}
                  />
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="p-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {/* Quick Actions */}
              <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3 h-3" />
                  <span>Powered by Zion AI</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>24/7 Available</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
