import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Send, 
  Mic, 
  MicOff, 
  Paperclip, 
  Sparkles, 
  Clock,
  Settings,
  X
} from 'lucide-react';

interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type: 'text' | 'file';
  status: 'sending' | 'sent' | 'error';
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
  const [showSettingsPanel, setShowSettingsPanel] = useState(false);
  const [settings, setSettings] = useState({
    voiceEnabled: false,
    autoResponse: true,
    language: 'en',
    theme: 'dark',
    responseSpeed: 'normal'
  });
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sample welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: ChatMessage = {
        id: 'welcome',
        content: "Hello! I'm Zion AI, your intelligent assistant. How can I help you today?",
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
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const responses = [
      {
        content: "We offer comprehensive AI and technology solutions. What specific area are you interested in?",
        suggestions: ['AI Services', 'Cloud Solutions', 'Digital Transformation', 'Get a quote'],
        relatedServices: ['AI Consulting', 'Cloud Infrastructure', 'Digital Transformation']
      },
      {
        content: "I'd be happy to help you get a quote! Could you tell me more about your project requirements?",
        suggestions: ['Project details', 'Timeline', 'Budget', 'Contact sales'],
        relatedServices: ['Project Management', 'Consulting', 'Implementation']
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

  // Handle file upload
  const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileMessage: ChatMessage = {
      id: Date.now().toString(),
      content: `File uploaded: ${file.name}`,
      sender: 'user',
      timestamp: new Date(),
      type: 'file',
      status: 'sent'
    };

    setMessages(prev => [...prev, fileMessage]);
  }, []);

  // Toggle voice input
  const toggleVoiceInput = useCallback(() => {
    setIsListening(!isListening);
  }, [isListening]);

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-zion-cyan text-white rounded-full shadow-lg hover:bg-zion-cyan/80 transition-all duration-300 z-50 flex items-center justify-center"
        aria-label="Toggle chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
      </button>

      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 w-96 h-[600px] bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl z-40 flex flex-col"
          >
            {/* Header */}
            {showHeader && (
              <div className="p-4 border-b border-zinc-700 bg-zinc-800/50 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-zion-cyan rounded-full flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Zion AI Assistant</h3>
                      <p className="text-zinc-400 text-sm">24/7 Available</p>
                    </div>
                  </div>
                  {showSettings && (
                    <button
                      onClick={() => setShowSettingsPanel(!showSettingsPanel)}
                      className="p-2 text-zinc-400 hover:text-white transition-colors"
                    >
                      <Settings className="w-5 h-5" />
                    </button>
                  )}
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
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-zion-cyan text-white'
                        : 'bg-zinc-800 text-white'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    {message.sender === 'bot' && (
                      <div className="w-8 h-8 bg-zion-cyan rounded-full flex items-center justify-center mt-2">
                        <Bot className="w-4 h-4 text-white" />
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
                  className="flex justify-start">
                  <div className="flex items-center gap-2 p-3 bg-zinc-800/50 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-sm text-zinc-400">Zion AI is typing...</span>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-zinc-700/50">
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask me anything about Zion Tech Group..."
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-600/50 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent resize-none"
                    disabled={isTyping}
                  />

                  {/* File Upload */}
                  <label className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                    <input
                      type="file"
                      onChange={handleFileUpload}
                      className="hidden"
                      accept="image/*,.pdf,.doc,.docx,.txt"
                    />
                    <Paperclip className="w-4 h-4 text-zinc-400 hover:text-zinc-300 transition-colors" />
                  </label>
                </div>

                {/* Voice Input */}
                {settings.voiceEnabled && (
                  <button
                    type="button"
                    onClick={toggleVoiceInput}
                    className={`p-3 rounded-lg transition-colors ${
                      isListening
                        ? 'bg-red-500 text-white'
                        : 'bg-zinc-700 text-zinc-400 hover:bg-zinc-600'
                    }`}
                    aria-label="Voice input">
                    {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  </button>
                )}

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="p-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send message">
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {/* Quick Actions */}
              <div className="flex items-center justify-between mt-3 text-xs text-zinc-500">
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
