'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Zap, 
  Code, 
  BarChart3,
  Shield,
  Search,
  MessageSquare,
  Play,
  Pause,
  RotateCcw,
  Copy,
  Check
} from 'lucide-react';

interface DemoMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

interface DemoFeature {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  demoPrompt: string;
  category: string;
}

const demoFeatures: DemoFeature[] = [
  {
    id: '1',
    name: 'Code Generation',
    description: 'Generate code in any programming language with AI assistance',
    icon: <Code className="w-6 h-6" />,
    demoPrompt: 'Create a React component for a user profile card with TypeScript',
    category: 'Development'
  },
  {
    id: '2',
    name: 'Data Analysis',
    description: 'Analyze data and generate insights with advanced AI algorithms',
    icon: <BarChart3 className="w-6 h-6" />,
    demoPrompt: 'Analyze this sales data and provide insights for Q4 optimization',
    category: 'Analytics'
  },
  {
    id: '3',
    name: 'Security Scan',
    description: 'Scan code for vulnerabilities and security issues',
    icon: <Shield className="w-6 h-6" />,
    demoPrompt: 'Scan this authentication code for security vulnerabilities',
    category: 'Security'
  },
  {
    id: '4',
    name: 'Content Search',
    description: 'Intelligent search across documents and databases',
    icon: <Search className="w-6 h-6" />,
    demoPrompt: 'Find all documents related to machine learning best practices',
    category: 'Search'
  },
  {
    id: '5',
    name: 'Chat Assistant',
    description: 'Natural language conversation with contextual understanding',
    icon: <MessageSquare className="w-6 h-6" />,
    demoPrompt: 'Help me plan a marketing strategy for a new AI product launch',
    category: 'Communication'
  }
];

const categories = ['All', 'Development', 'Analytics', 'Security', 'Search', 'Communication'];

export default function InteractiveAIDemo2025() {
  const [selectedFeature, setSelectedFeature] = useState<DemoFeature | null>(null);
  const [messages, setMessages] = useState<DemoMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredFeatures = selectedCategory === 'All' 
    ? demoFeatures 
    : demoFeatures.filter(feature => feature.category === selectedCategory);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: DemoMessage = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: DemoMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: generateAIResponse(content),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userInput: string): string => {
    const responses = [
      "I've analyzed your request and here's what I found: This is a comprehensive solution that addresses all the key requirements you mentioned. The implementation follows best practices and includes proper error handling, type safety, and performance optimizations.",
      "Based on the data provided, I can see several optimization opportunities. The main areas for improvement include performance bottlenecks in the data processing pipeline and potential security enhancements in the authentication flow.",
      "Here's a detailed breakdown of the analysis: The current implementation shows strong performance metrics with 99.9% uptime and sub-100ms response times. However, there are opportunities to reduce memory usage by approximately 15% through code optimization.",
      "I've identified the key patterns in your data that suggest the following recommendations: 1) Implement caching for frequently accessed data, 2) Add monitoring for performance metrics, 3) Consider implementing a microservices architecture for better scalability.",
      "The security scan revealed 3 minor issues that can be easily resolved: 1) Update dependency versions, 2) Add input validation, 3) Implement rate limiting. All issues are low severity and can be addressed in the next deployment cycle."
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleFeatureSelect = (feature: DemoFeature) => {
    setSelectedFeature(feature);
    setInputValue(feature.demoPrompt);
  };

  const handleCopyMessage = (messageId: string) => {
    const message = messages.find(m => m.id === messageId);
    if (message) {
      navigator.clipboard.writeText(message.content);
      setCopiedMessage(messageId);
      setTimeout(() => setCopiedMessage(null), 2000);
    }
  };

  const resetDemo = () => {
    setMessages([]);
    setSelectedFeature(null);
    setInputValue('');
    setIsTyping(false);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Brain className="w-4 h-4" />
            Interactive AI Demo
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Experience AI
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              In Real-Time
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Try our AI capabilities firsthand. Ask questions, generate code, analyze data, 
            and see how artificial intelligence can transform your workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Features Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">AI Capabilities</h3>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Features List */}
              <div className="space-y-3">
                {filteredFeatures.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => handleFeatureSelect(feature)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      selectedFeature?.id === feature.id
                        ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/50'
                        : 'bg-white/5 hover:bg-white/10 border border-transparent'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-purple-400 mt-1">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-1">{feature.name}</h4>
                        <p className="text-sm text-gray-300">{feature.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Chat Interface */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden h-[600px] flex flex-col">
              {/* Chat Header */}
              <div className="bg-white/10 p-4 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">AI Assistant</h3>
                      <p className="text-sm text-gray-300">Ready to help</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={resetDemo}
                      className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex gap-3 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.type === 'user' 
                            ? 'bg-blue-500' 
                            : 'bg-gradient-to-r from-purple-500 to-pink-500'
                        }`}>
                          {message.type === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
                        </div>
                        <div className={`rounded-2xl p-4 ${
                          message.type === 'user'
                            ? 'bg-blue-500 text-white'
                            : 'bg-white/10 text-gray-100'
                        }`}>
                          <p className="text-sm leading-relaxed">{message.content}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs opacity-70">
                              {message.timestamp.toLocaleTimeString()}
                            </span>
                            <button
                              onClick={() => handleCopyMessage(message.id)}
                              className="text-xs opacity-70 hover:opacity-100 transition-opacity duration-300"
                            >
                              {copiedMessage === message.id ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-3 justify-start"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-white/10 rounded-2xl p-4">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-white/10">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                    placeholder="Ask me anything about AI, coding, data analysis..."
                    className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <button
                    onClick={() => handleSendMessage(inputValue)}
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Integrate AI Into Your Workflow?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              This demo showcases just a fraction of our AI capabilities. 
              Get started with a free trial and experience the full power of our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}