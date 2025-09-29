import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Mic, MicOff, Bot, User, Settings, History, BarChart3 } from 'lucide-react';
import { advancedAIAssistant, ChatMessage, AIResponse } from '../utils/advancedAIAssistant';

interface AdvancedAIAssistantProps {
  isVisible: boolean;
  onClose: () => void;
}

const AdvancedAIAssistant: React.FC<AdvancedAIAssistantProps> = ({ isVisible, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [activeTab, setActiveTab] = useState('chat');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) {
      // Initialize AI assistant
      advancedAIAssistant.initialize();
      
      // Load chat history
      setMessages(advancedAIAssistant.getChatHistory());
      
      // Add welcome message
      if (messages.length === 0) {
        const welcomeMessage: ChatMessage = {
          id: 'welcome',
          type: 'assistant',
          content: 'Hello! I\'m your AI assistant. How can I help you today?',
          timestamp: new Date(),
          metadata: {
            intent: 'greeting',
            confidence: 1.0
          }
        };
        setMessages([welcomeMessage]);
      }
    }
  }, [isVisible]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await advancedAIAssistant.sendMessage(inputValue);
      
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: response.message,
        timestamp: new Date(),
        metadata: {
          intent: response.metadata?.intent,
          confidence: response.confidence
        }
      };

      setMessages(prev => [...prev, assistantMessage]);
      setSuggestions(response.suggestions || []);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    // Implement voice recognition
  };

  const clearChat = () => {
    advancedAIAssistant.clearChatHistory();
    setMessages([]);
    setSuggestions([]);
  };

  const renderMessage = (message: ChatMessage) => {
    const isUser = message.type === 'user';
    
    return (
      <motion.div
        key={message.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
      >
        <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            isUser ? 'bg-blue-500' : 'bg-gray-500'
          }`}>
            {isUser ? <User size={16} /> : <Bot size={16} />}
          </div>
          <div className={`px-4 py-2 rounded-lg ${
            isUser 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-800'
          }`}>
            <p className="text-sm whitespace-pre-wrap">{message.content}</p>
            <p className={`text-xs mt-1 ${
              isUser ? 'text-blue-100' : 'text-gray-500'
            }`}>
              {message.timestamp.toLocaleTimeString()}
            </p>
          </div>
        </div>
      </motion.div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'chat':
        return (
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map(renderMessage)}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center">
                      <Bot size={16} />
                    </div>
                    <div className="bg-gray-200 px-4 py-2 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            {suggestions.length > 0 && (
              <div className="p-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">Suggestions:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleVoiceToggle}
                  className={`p-2 rounded-lg transition-colors ${
                    isListening ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  {isListening ? <MicOff size={20} /> : <Mic size={20} />}
                </button>
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        );
      case 'history':
        return (
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Chat History</h3>
              <button
                onClick={clearChat}
                className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Clear History
              </button>
            </div>
            <div className="space-y-2">
              {messages.map((message, index) => (
                <div key={index} className="p-3 bg-gray-100 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className={`w-2 h-2 rounded-full ${
                      message.type === 'user' ? 'bg-blue-500' : 'bg-gray-500'
                    }`}></span>
                    <span className="text-sm font-medium">
                      {message.type === 'user' ? 'You' : 'AI Assistant'}
                    </span>
                    <span className="text-xs text-gray-500">
                      {message.timestamp.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">{message.content}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'analytics':
        return (
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-4">Analytics</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-100 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800">Total Interactions</h4>
                  <p className="text-2xl font-bold text-blue-600">
                    {advancedAIAssistant.getAnalytics().totalInteractions}
                  </p>
                </div>
                <div className="bg-green-100 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800">Success Rate</h4>
                  <p className="text-2xl font-bold text-green-600">
                    {((advancedAIAssistant.getAnalytics().successfulInteractions / 
                      advancedAIAssistant.getAnalytics().totalInteractions) * 100).toFixed(1)}%
                  </p>
                </div>
                <div className="bg-yellow-100 p-4 rounded-lg">
                  <h4 className="font-medium text-yellow-800">Avg Response Time</h4>
                  <p className="text-2xl font-bold text-yellow-600">
                    {advancedAIAssistant.getAnalytics().averageResponseTime.toFixed(0)}ms
                  </p>
                </div>
                <div className="bg-purple-100 p-4 rounded-lg">
                  <h4 className="font-medium text-purple-800">Error Rate</h4>
                  <p className="text-2xl font-bold text-purple-600">
                    {advancedAIAssistant.getAnalytics().errorRate.toFixed(1)}%
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Popular Intents</h4>
                <div className="space-y-1">
                  {Object.entries(advancedAIAssistant.getAnalytics().popularIntents)
                    .sort(([,a], [,b]) => b - a)
                    .slice(0, 5)
                    .map(([intent, count]) => (
                      <div key={intent} className="flex justify-between">
                        <span className="text-sm">{intent}</span>
                        <span className="text-sm font-medium">{count}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex justify-center items-center p-4"
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl h-full max-h-[90vh] flex flex-col"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800">AI Assistant</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                aria-label="Close assistant"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex border-b border-gray-200">
              <button
                className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium ${
                  activeTab === 'chat' 
                    ? 'bg-blue-100 text-blue-700 border-b-2 border-blue-500' 
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                } transition-colors duration-200`}
                onClick={() => setActiveTab('chat')}
              >
                <Bot size={18} />
                <span>Chat</span>
              </button>
              <button
                className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium ${
                  activeTab === 'history' 
                    ? 'bg-blue-100 text-blue-700 border-b-2 border-blue-500' 
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                } transition-colors duration-200`}
                onClick={() => setActiveTab('history')}
              >
                <History size={18} />
                <span>History</span>
              </button>
              <button
                className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium ${
                  activeTab === 'analytics' 
                    ? 'bg-blue-100 text-blue-700 border-b-2 border-blue-500' 
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                } transition-colors duration-200`}
                onClick={() => setActiveTab('analytics')}
              >
                <BarChart3 size={18} />
                <span>Analytics</span>
              </button>
            </div>
            
            <div className="flex-1 overflow-hidden">
              {renderContent()}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AdvancedAIAssistant;