'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Bot,
  Send,
  User,
  Sparkles,
  Copy,
  RefreshCw,
  ThumbsUp,
  ThumbsDown,
} from 'lucide-react';

interface Conversation {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const personalityTraits = [
  { id: 'helpful', label: 'Helpful', active: true },
  { id: 'creative', label: 'Creative', active: true },
  { id: 'professional', label: 'Professional', active: true },
  { id: 'friendly', label: 'Friendly', active: true },
];

export default function AIChatCompanion() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatName, setChatName] = useState('New Chat');
  const [savedChats] = useState<{ id: string; name: string; preview: string; date: string }[]>([
    { id: '1', name: 'AI Services Inquiry', preview: 'What AI services do you offer?', date: '2024-03-23' },
    { id: '2', name: 'Pricing Discussion', preview: 'Tell me about pricing...', date: '2024-03-22' },
  ]);
  const [selectedTrait, setSelectedTrait] = useState('helpful');

  useEffect(() => {
    // Initialize with welcome message
    setConversations([
      {
        id: '1',
        role: 'assistant',
        content: "Hello! I'm your AI Chat Companion. I learn from our conversations to provide better assistance. What's on your mind?",
        timestamp: new Date()
      }
    ]);
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Conversation = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setConversations(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response with "learning"
    setTimeout(() => {
      const responses: Record<string, string> = {
        'helpful': "I'd be happy to help you with that! Based on our conversation, I understand you're looking for information about our AI services. Let me provide you with comprehensive details...",
        'creative': "That's a fascinating perspective! Let me offer a creative approach to your question. Imagine if we could leverage AI in a unique way...",
        'professional': "Thank you for your inquiry. From a professional standpoint, I'd recommend exploring our enterprise AI solutions which include...",
        'friendly': "Hey there! Great question! 😊 I'd love to help you out. Here's what I think would work best for you...",
      };

      const response = responses[selectedTrait] || responses.helpful;
      
      const assistantMsg: Conversation = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };

      setConversations(prev => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 1500);
  };

  const clearChat = () => {
    setConversations([
      {
        id: '1',
        role: 'assistant',
        content: "Chat cleared! Starting fresh. What would you like to discuss?",
        timestamp: new Date()
      }
    ]);
    setChatName('New Chat');
  };

  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex">
      {/* Sidebar */}
      <div className="w-72 bg-slate-800/50 border-r border-slate-700 p-4 hidden lg:block">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white font-semibold">Chats</h2>
          <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
            <Sparkles className="w-5 h-5 text-violet-400" />
          </button>
        </div>

        <button className="w-full py-2 bg-violet-600 text-white rounded-lg font-medium hover:bg-violet-700 transition-colors mb-4">
          + New Chat
        </button>

        <div className="space-y-2">
          {savedChats.map((chat) => (
            <button
              key={chat.id}
              className="w-full text-left p-3 rounded-lg hover:bg-slate-700/50 transition-colors"
            >
              <div className="text-white text-sm font-medium truncate">{chat.name}</div>
              <div className="text-slate-500 text-xs truncate">{chat.preview}</div>
              <div className="text-slate-600 text-xs mt-1">{chat.date}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Chat */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-slate-700 flex items-center justify-between">
          <div>
            <input
              type="text"
              value={chatName}
              onChange={(e) => setChatName(e.target.value)}
              className="bg-transparent text-white font-semibold text-lg focus:outline-none"
            />
            <p className="text-slate-500 text-sm">AI Chat Companion • Learns from you</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={clearChat}
              className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-slate-400 hover:text-white"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Personality Selector */}
        <div className="px-4 py-2 border-b border-slate-700 flex gap-2 overflow-x-auto">
          {personalityTraits.map((trait) => (
            <button
              key={trait.id}
              onClick={() => setSelectedTrait(trait.id)}
              className={`px-3 py-1 rounded-full text-sm whitespace-nowrap transition-colors ${
                selectedTrait === trait.id
                  ? 'bg-violet-600 text-white'
                  : 'bg-slate-700 text-slate-400 hover:text-white'
              }`}
            >
              {trait.label}
            </button>
          ))}
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {conversations.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-3 max-w-[70%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  msg.role === 'user' ? 'bg-violet-600' : 'bg-slate-700'
                }`}>
                  {msg.role === 'user' 
                    ? <User className="w-5 h-5 text-white" />
                    : <Bot className="w-5 h-5 text-violet-400" />
                  }
                </div>
                <div className={`rounded-2xl px-4 py-3 ${
                  msg.role === 'user'
                    ? 'bg-violet-600 text-white'
                    : 'bg-slate-700/50 text-slate-100'
                }`}>
                  <p className="text-sm whitespace-pre-line">{msg.content}</p>
                  <div className={`flex items-center gap-2 mt-2 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                    {msg.role === 'assistant' && (
                      <>
                        <button className="text-slate-500 hover:text-white">
                          <ThumbsUp className="w-4 h-4" />
                        </button>
                        <button className="text-slate-500 hover:text-white">
                          <ThumbsDown className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => copyMessage(msg.content)}
                          className="text-slate-500 hover:text-white"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </>
                    )}
                    <span className="text-xs text-slate-500">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-violet-400" />
                </div>
                <div className="bg-slate-700/50 rounded-2xl px-4 py-3 flex items-center gap-1">
                  <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}
                    className="w-2 h-2 bg-violet-400 rounded-full"
                  />
                  <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
                    className="w-2 h-2 bg-violet-400 rounded-full"
                  />
                  <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}
                    className="w-2 h-2 bg-violet-400 rounded-full"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-slate-700">
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1 bg-slate-800 border border-slate-700 text-white placeholder-slate-400 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="p-3 bg-violet-600 text-white rounded-xl hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
             data-cta-event="cta_send_message" data-cta-label="page">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}