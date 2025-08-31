import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, Send, Phone, Mail, Clock, 
  Users, Star, CheckCircle, AlertCircle, Info,
  FileText, Image, Paperclip, Smile, MoreHorizontal,
  Video, Mic, MicOff, Headphones, Settings, HelpCircle,
  ArrowLeft, Search, Filter, User, Bot, Shield
} from 'lucide-react';

export default function Chat() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isVideoCall, setIsVideoCall] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const chatCategories = [
    { id: 'all', name: 'All Chats', icon: MessageCircle, color: 'from-blue-500 to-purple-500' },
    { id: 'support', name: 'Support', icon: HelpCircle, color: 'from-green-500 to-emerald-500' },
    { id: 'sales', name: 'Sales', icon: Users, color: 'from-yellow-500 to-orange-500' },
    { id: 'technical', name: 'Technical', icon: Settings, color: 'from-purple-500 to-pink-500' },
    { id: 'general', name: 'General', icon: Info, color: 'from-cyan-500 to-blue-500' }
  ];

  const chatList = [
    {
      id: 'support-1',
      name: 'Sarah Chen',
      role: 'Customer Support',
      avatar: '/avatars/sarah-chen.jpg',
      category: 'support',
      lastMessage: 'Thank you for your patience. I\'m looking into this issue now.',
      timestamp: '2 min ago',
      unread: 0,
      status: 'online',
      priority: 'medium'
    },
    {
      id: 'sales-1',
      name: 'Michael Rodriguez',
      role: 'Sales Representative',
      avatar: '/avatars/michael-rodriguez.jpg',
      category: 'sales',
      lastMessage: 'I\'d be happy to discuss our enterprise pricing options with you.',
      timestamp: '15 min ago',
      unread: 2,
      status: 'online',
      priority: 'high'
    },
    {
      id: 'technical-1',
      name: 'David Kim',
      role: 'Technical Specialist',
      avatar: '/avatars/david-kim.jpg',
      category: 'technical',
      lastMessage: 'The API endpoint you\'re using has been deprecated. Let me show you the new one.',
      timestamp: '1 hour ago',
      unread: 0,
      status: 'away',
      priority: 'medium'
    },
    {
      id: 'general-1',
      name: 'Lisa Thompson',
      role: 'Account Manager',
      avatar: '/avatars/lisa-thompson.jpg',
      category: 'general',
      lastMessage: 'Your account has been successfully upgraded to the premium plan.',
      timestamp: '2 hours ago',
      unread: 0,
      status: 'offline',
      priority: 'low'
    },
    {
      id: 'support-2',
      name: 'Dr. Emily Watson',
      role: 'AI Solutions Expert',
      avatar: '/avatars/emily-watson.jpg',
      category: 'support',
      lastMessage: 'I can help you implement the AI model in your production environment.',
      timestamp: '3 hours ago',
      unread: 1,
      status: 'online',
      priority: 'high'
    }
  ];

  const chatMessages = {
    'support-1': [
      {
        id: 1,
        sender: 'user',
        message: 'Hi, I\'m having trouble with the API integration. Can you help?',
        timestamp: '10:30 AM',
        type: 'text'
      },
      {
        id: 2,
        sender: 'agent',
        message: 'Hello! I\'d be happy to help you with the API integration. Can you tell me more about the specific issue you\'re experiencing?',
        timestamp: '10:31 AM',
        type: 'text'
      },
      {
        id: 3,
        sender: 'user',
        message: 'I\'m getting a 401 unauthorized error when trying to authenticate.',
        timestamp: '10:32 AM',
        type: 'text'
      },
      {
        id: 4,
        sender: 'agent',
        message: 'I see the issue. Let me check your API key configuration. Can you confirm which endpoint you\'re trying to access?',
        timestamp: '10:33 AM',
        type: 'text'
      },
      {
        id: 5,
        sender: 'agent',
        message: 'Thank you for your patience. I\'m looking into this issue now.',
        timestamp: '10:35 AM',
        type: 'text'
      }
    ],
    'sales-1': [
      {
        id: 1,
        sender: 'user',
        message: 'I\'m interested in your enterprise AI solutions. Can you tell me more about pricing?',
        timestamp: '9:15 AM',
        type: 'text'
      },
      {
        id: 2,
        sender: 'agent',
        message: 'Absolutely! I\'d be happy to discuss our enterprise pricing options with you. We offer several tiers based on your needs.',
        timestamp: '9:16 AM',
        type: 'text'
      },
      {
        id: 3,
        sender: 'user',
        message: 'What\'s included in the premium tier?',
        timestamp: '9:20 AM',
        type: 'text'
      },
      {
        id: 4,
        sender: 'agent',
        message: 'The premium tier includes unlimited API calls, priority support, custom model training, and dedicated infrastructure.',
        timestamp: '9:22 AM',
        type: 'text'
      }
    ]
  };

  const quickReplies = [
    'Thank you for your help!',
    'I need more information',
    'Can you call me?',
    'Send me documentation',
    'I\'ll get back to you later'
  ];

  const handleSendMessage = () => {
    if (message.trim() && selectedChat) {
      // In a real app, this would send the message to the backend
      setMessage('');
      setIsTyping(true);
      
      // Simulate typing indicator
      setTimeout(() => {
        setIsTyping(false);
      }, 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [selectedChat]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'text-green-400';
      case 'away':
        return 'text-yellow-400';
      case 'offline':
        return 'text-gray-400';
      default:
        return 'text-gray-400';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500/20 text-red-400 border-red-400/20';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-400/20';
      case 'low':
        return 'bg-green-500/20 text-green-400 border-green-400/20';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-400/20';
    }
  };

  const selectedChatData = chatList.find(chat => chat.id === selectedChat);
  const currentMessages = selectedChat ? chatMessages[selectedChat as keyof typeof chatMessages] || [] : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <section className="relative pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Chat</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get instant support and connect with our team of experts
            </p>
            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <MessageCircle className="w-5 h-5" />
              <span>24/7 Support</span>
              <span>•</span>
              <Users className="w-5 h-5" />
              <span>Expert Team</span>
              <span>•</span>
              <Shield className="w-5 h-5" />
              <span>Secure Chat</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 h-[600px]">
              {/* Chat List Sidebar */}
              <div className="bg-white/5 border-r border-white/10">
                <div className="p-4 border-b border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-white">Conversations</h2>
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                      <MoreHorizontal className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                  
                  {/* Category Filter */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {chatCategories.map((category) => (
                      <button
                        key={category.id}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                          category.id === 'all'
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>

                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search conversations..."
                      className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Chat List */}
                <div className="overflow-y-auto h-[calc(100%-140px)]">
                  {chatList.map((chat) => (
                    <div
                      key={chat.id}
                      onClick={() => setSelectedChat(chat.id)}
                      className={`p-4 border-b border-white/10 cursor-pointer transition-all duration-300 hover:bg-white/5 ${
                        selectedChat === chat.id ? 'bg-white/10 border-l-4 border-l-blue-500' : ''
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="relative">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-white" />
                          </div>
                          <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-slate-900 ${getStatusColor(chat.status)}`}>
                            <div className={`w-full h-full rounded-full ${chat.status === 'online' ? 'bg-green-400' : chat.status === 'away' ? 'bg-yellow-400' : 'bg-gray-400'}`}></div>
                          </div>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="text-sm font-semibold text-white truncate">{chat.name}</h3>
                            <span className="text-xs text-gray-400">{chat.timestamp}</span>
                          </div>
                          
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-xs text-gray-400">{chat.role}</span>
                            <span className={`px-2 py-1 rounded-full text-xs border ${getPriorityColor(chat.priority)}`}>
                              {chat.priority}
                            </span>
                          </div>
                          
                          <p className="text-sm text-gray-300 truncate">{chat.lastMessage}</p>
                          
                          {chat.unread > 0 && (
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-xs text-blue-400">{chat.unread} new message{chat.unread > 1 ? 's' : ''}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat Area */}
              <div className="lg:col-span-2 flex flex-col">
                {selectedChat ? (
                  <>
                    {/* Chat Header */}
                    <div className="p-4 border-b border-white/10 bg-white/5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => setSelectedChat(null)}
                            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
                          >
                            <ArrowLeft className="w-4 h-4 text-gray-400" />
                          </button>
                          
                          <div className="relative">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                              <User className="w-5 h-5 text-white" />
                            </div>
                            <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-slate-900 ${getStatusColor(selectedChatData?.status || 'offline')}`}>
                              <div className={`w-full h-full rounded-full ${selectedChatData?.status === 'online' ? 'bg-green-400' : selectedChatData?.status === 'away' ? 'bg-yellow-400' : 'bg-gray-400'}`}></div>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-semibold text-white">{selectedChatData?.name}</h3>
                            <p className="text-sm text-gray-400">{selectedChatData?.role}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => setIsVideoCall(!isVideoCall)}
                            className={`p-2 rounded-lg transition-colors ${
                              isVideoCall ? 'bg-red-500/20 text-red-400' : 'hover:bg-white/10 text-gray-400'
                            }`}
                          >
                            <Video className="w-4 h-4" />
                          </button>
                          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400">
                            <Phone className="w-4 h-4" />
                          </button>
                          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400">
                            <MoreHorizontal className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      {currentMessages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            msg.sender === 'user'
                              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                              : 'bg-white/10 text-gray-300'
                          }`}>
                            <p className="text-sm">{msg.message}</p>
                            <p className={`text-xs mt-1 ${
                              msg.sender === 'user' ? 'text-blue-100' : 'text-gray-400'
                            }`}>
                              {msg.timestamp}
                            </p>
                          </div>
                        </div>
                      ))}
                      
                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="bg-white/10 text-gray-300 px-4 py-2 rounded-lg">
                            <div className="flex items-center space-x-1">
                              <span className="text-sm">Agent is typing</span>
                              <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Replies */}
                    <div className="p-4 border-t border-white/10">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {quickReplies.map((reply, index) => (
                          <button
                            key={index}
                            onClick={() => setMessage(reply)}
                            className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full hover:bg-white/20 transition-colors"
                          >
                            {reply}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message Input */}
                    <div className="p-4 border-t border-white/10">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={handleFileUpload}
                          className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400"
                        >
                          <Paperclip className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setIsRecording(!isRecording)}
                          className={`p-2 rounded-lg transition-colors ${
                            isRecording ? 'bg-red-500/20 text-red-400' : 'hover:bg-white/10 text-gray-400'
                          }`}
                        >
                          {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                        </button>
                        
                        <div className="flex-1 relative">
                          <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type your message..."
                            className="w-full pl-4 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-white/10 rounded transition-colors text-gray-400">
                            <Smile className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <button
                          onClick={handleSendMessage}
                          disabled={!message.trim()}
                          className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <input
                        ref={fileInputRef}
                        type="file"
                        className="hidden"
                        accept="image/*,.pdf,.doc,.docx"
                      />
                    </div>
                  </>
                ) : (
                  /* Welcome Screen */
                  <div className="flex-1 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <MessageCircle className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">Welcome to Live Chat</h3>
                      <p className="text-gray-400 mb-6">
                        Select a conversation from the sidebar to start chatting with our team
                      </p>
                      <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>24/7 Support</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Shield className="w-4 h-4 text-blue-400" />
                          <span>Secure Chat</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-purple-400" />
                          <span>Expert Team</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need More Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our support team is available through multiple channels to assist you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/support"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                <HelpCircle className="w-5 h-5 mr-2" />
                Support Center
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Support
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}