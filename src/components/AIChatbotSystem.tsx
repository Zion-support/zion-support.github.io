import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MessageCircle, X, Send, Mic, Settings, Download, Star, ThumbsUp, ThumbsDown } from 'lucide-react';

interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type: 'text' | 'file' | 'image';
  status: 'sending' | 'sent' | 'error';
  metadata?: {
    confidence?: number;
    suggestions?: string[];
    relatedServices?: string[];
    estimatedResponseTime?: number;
    userRating?: 'positive' | 'negative';
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
  const [chatHistory, setChatHistory] = useState < any> ([]) ;
  const messagesEndRef = useRef < HTMLDivElement> (null) ;

  // Sample welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: ChatMessage = {
        id: 'welcome',
        content: "Hello! I'm Zion AI, your intelligent assistant. I can help you with:\n\n• Information about our services\n• Technical support and guidance\n• Project inquiries and quotes\n• General questions about Zion Tech Group\n\nHow can I assist you today?",
        sender: 'bot',
        timestamp: new Date () ,
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
        content: "We offer comprehensive AI and technology solutions including machine learning, cybersecurity, cloud infrastructure, and digital transformation. What specific area interests you?",
        suggestions: ['AI Services', 'Cybersecurity', 'Cloud Solutions', 'Digital Transformation'],
        relatedServices: ['AI Consulting', 'Machine Learning', 'Data Analytics', 'Process Automation']
      },
      {
        content: "Digital transformation is our specialty! We help businesses modernize their technology stack, improve processes, and enhance customer experiences. Our approach includes strategy development, implementation, and change management.",
        suggestions: ['Strategy development', 'Implementation process', 'Change management', 'ROI examples'],
        relatedServices: ['Digital Transformation', 'Process Optimization', 'Change Management']
      }
    ];

    const randomResponse = responses[Math.floor(Math.random () * responses.length) ];

    const botMessage: ChatMessage = {
      id: Date.now().toString(),
      content: randomResponse.content,
      sender: 'bot',
      timestamp: new Date () ,
      type: 'text',
      status: 'sent',
      metadata: {
        confidence: 0.85 + Math.random () * 0.1,
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
  const handleFileUpload = (file: File) => {
    const fileMessage: ChatMessage = {
      id: Date.now().toString(),
      content: `File: ${file.name}`,
      sender: 'user',
      timestamp: new Date(),
      type: 'file',
      status: 'sent'
    };
    setMessages(prev => [...prev, fileMessage]);
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  // Rate response
  const rateResponse = (messageId: string, rating: 'positive' | 'negative') => {
    setMessages(prev => prev.map (msg =>
      msg.id === messageId
        ? { ...msg, metadata: { ...msg.metadata, userRating: rating } }
        : msg) ) ;
  };

  // Clear chat
  const clearChat = () => {
    setMessages([]);
    setChatHistory([]);
  };

  // Export chat
  const exportChat = () => {
    const chatData = {
      messages,
      timestamp: new Date().toISOString(),
      settings
    };
    
    const blob = new Blob([JSON.stringify(chatData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `chat-export-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl flex flex-col z-50">
      {/* Header */}
      {showHeader && (
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Zion AI Assistant</h3>
              <p className="text-gray-400 text-xs">Online • Ready to help</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {showSettings && (
              <button
                onClick={() => setShowSettingsPanel(!showSettingsPanel)}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <Settings className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Settings Panel */}
      {showSettingsPanel && (
        <div className="p-4 border-b border-gray-700 bg-gray-800">
          <h4 className="text-white font-semibold mb-3">Settings</h4>
          <div className="space-y-3">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={settings.voiceEnabled}
                onChange={(e) => setSettings(prev => ({ ...prev, voiceEnabled: e.target.checked }))}
                className="rounded"
              />
              <span className="text-gray-300 text-sm">Voice Input</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={settings.autoResponse}
                onChange={(e) => setSettings(prev => ({ ...prev, autoResponse: e.target.checked }))}
                className="rounded"
              />
              <span className="text-gray-300 text-sm">Auto Response</span>
            </label>
          </div>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-100'
              }`}
            >
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              
              {/* Suggestions */}
              {message.metadata?.suggestions && message.sender === 'bot' && (
                <div className="mt-3 space-y-2">
                  {message.metadata.suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="block w-full text-left px-3 py-2 bg-gray-600 hover:bg-gray-500 rounded text-xs transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}

              {/* Rating */}
              {message.sender === 'bot' && (
                <div className="mt-2 flex items-center space-x-2">
                  <button
                    onClick={() => rateResponse(message.id, 'positive')}
                    className={`p-1 rounded ${message.metadata?.userRating === 'positive' ? 'text-green-400' : 'text-gray-400 hover:text-green-400'}`}
                  >
                    <ThumbsUp className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => rateResponse(message.id, 'negative')}
                    className={`p-1 rounded ${message.metadata?.userRating === 'negative' ? 'text-red-400' : 'text-gray-400 hover:text-red-400'}`}
                  >
                    <ThumbsDown className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-700 text-gray-100 p-3 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-700">
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isTyping}
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isTyping}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
        
        {/* Actions */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex space-x-2">
            <button
              onClick={clearChat}
              className="text-gray-400 hover:text-white text-xs transition-colors"
            >
              Clear Chat
            </button>
            <button
              onClick={exportChat}
              className="text-gray-400 hover:text-white text-xs transition-colors flex items-center space-x-1"
            >
              <Download className="w-3 h-3" />
              <span>Export</span>
            </button>
          </div>
          <div className="text-gray-500 text-xs">
            {messages.length} messages
          </div>
        </div>
      </div>
    </div>
  );
};
