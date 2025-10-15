'use client';
import React, { useState, useEffect, useRef } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CogIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  HeartIcon,
  StarIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

const AICustomerSupportChatbotPage: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Hello! I\'m your AI customer support assistant. How can I help you today?',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: inputMessage,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages([...messages, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        'I understand your concern. Let me help you with that.',
        'That\'s a great question! Here\'s what I can tell you...',
        'I\'d be happy to assist you with that issue.',
        'Let me look into that for you right away.',
        'I can definitely help you resolve this problem.',
        'Thank you for reaching out. I\'m here to help!'
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        text: randomResponse,
        timestamp: new Date().toLocaleTimeString()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const features = [
    {
      icon: SparklesIcon,
      title: 'Natural Language Processing',
      description: 'Understands customer intent and context with advanced NLP technology.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: UserGroupIcon,
      title: 'Multi-Channel Support',
      description: 'Deploy across website, mobile app, social media, and messaging platforms.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ClockIcon,
      title: '24/7 Availability',
      description: 'Never miss a customer inquiry with round-the-clock automated support.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: CogIcon,
      title: 'Easy Integration',
      description: 'Quick setup with existing CRM, helpdesk, and business tools.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with GDPR and SOC 2 compliance.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: GlobeAltIcon,
      title: 'Multi-Language Support',
      description: 'Communicate with customers in 50+ languages automatically.',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const stats = [
    { number: '95%', label: 'Customer Satisfaction' },
    { number: '60%', label: 'Reduced Response Time' },
    { number: '40%', label: 'Cost Reduction' },
    { number: '24/7', label: 'Availability' }
  ];

  return (
    <>
      <SEOHead 
        title="AI Customer Support Chatbot - Zion Tech Group"
        description="Revolutionary AI-powered customer support chatbot with natural language processing, multi-channel deployment, and 24/7 availability. Transform your customer service experience."
        keywords="AI chatbot, customer support, natural language processing, automated support, customer service, AI assistant"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900/30 via-slate-900 to-purple-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-6">
                  <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  AI Customer Support
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Chatbot
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Transform your customer service with intelligent AI chatbots that understand, 
                  learn, and provide instant, accurate responses 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    Try Live Demo
                  </button>
                  <button className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                    View Pricing
                  </button>
                </div>
              </div>
              
              {/* Interactive Chat Demo */}
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">AI Assistant Online</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="h-80 overflow-y-auto space-y-4 mb-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.type === 'user' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-slate-700 text-gray-300'
                      }`}>
                        <p className="text-sm">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">{message.timestamp}</p>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-slate-700 text-gray-300 px-4 py-2 rounded-lg">
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
                
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 bg-slate-600 text-white px-4 py-2 rounded-lg border border-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    <ArrowRightIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Powerful Features
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Everything you need to provide exceptional customer support with AI
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 group">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Perfect For
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Industries and use cases where our AI chatbot excels
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <HeartIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Healthcare</h3>
                <p className="text-gray-400 mb-4">
                  Provide 24/7 patient support, appointment scheduling, and basic medical information.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    Appointment booking
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    Symptom checker
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    Insurance queries
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <BoltIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">E-commerce</h3>
                <p className="text-gray-400 mb-4">
                  Handle product inquiries, order tracking, returns, and personalized recommendations.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    Product recommendations
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    Order tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    Return processing
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <StarIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">SaaS Companies</h3>
                <p className="text-gray-400 mb-4">
                  Provide technical support, feature explanations, and onboarding assistance.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    Technical support
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    Feature tutorials
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                    Account management
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Simple Pricing
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Plan */}
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Starter</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-2">$49<span className="text-lg text-gray-400">/mo</span></div>
                  <p className="text-gray-400">Perfect for small businesses</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Up to 1,000 conversations/month
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Basic AI training
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Email support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Website integration
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Start Free Trial
                </button>
              </div>

              {/* Professional Plan */}
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Professional</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-2">$149<span className="text-lg text-gray-400">/mo</span></div>
                  <p className="text-gray-400">For growing businesses</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Up to 10,000 conversations/month
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Advanced AI training
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Multi-channel support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Analytics dashboard
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Priority support
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Start Free Trial
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">$499<span className="text-lg text-gray-400">/mo</span></div>
                  <p className="text-gray-400">For large organizations</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited conversations
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Custom AI training
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    White-label solution
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    API access
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    Dedicated support
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900/40 via-slate-900 to-purple-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of businesses already using AI chatbots to provide exceptional customer service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICustomerSupportChatbotPage;