'use client'

import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, TrendingUp, Target, Zap } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  recommendations?: Recommendation[];
}

interface Recommendation {
  id: string;
  name: string;
  reason: string;
  benefits: string[];
  roi: string;
  implementationTime: string;
  cost: string;
}

export default function AIBusinessAdvisorPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      type: 'assistant',
      content: "👋 Hello! I'm your AI Business Advisor. I help you discover the perfect AI solutions for your business.\n\nTell me about your business:\n• What industry are you in?\n• What challenges are you facing?\n• What are your goals?\n• What's your team size?",
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userInput: string): Message => {
    // Simulate AI processing - in production, this would call the backend
    const input = userInput.toLowerCase();
    
    const analysis = {
      industry: null as string | null,
      businessSize: null as string | null,
      challenges: [] as string[],
    };

    // Basic pattern matching for demo
    if (input.includes('finance') || input.includes('bank')) analysis.industry = 'finance';
    if (input.includes('healthcare') || input.includes('hospital')) analysis.industry = 'healthcare';
    if (input.includes('retail') || input.includes('ecommerce')) analysis.industry = 'retail';
    if (input.includes('manufacturing')) analysis.industry = 'manufacturing';
    
    if (input.includes('startup')) analysis.businessSize = 'startup';
    if (input.includes('small')) analysis.businessSize = 'small';
    if (input.includes('enterprise') || input.includes('large')) analysis.businessSize = 'enterprise';

    if (input.includes('cost') || input.includes('expensive')) analysis.challenges.push('cost-reduction');
    if (input.includes('slow') || input.includes('inefficient')) analysis.challenges.push('efficiency');
    if (input.includes('customer') || input.includes('support')) analysis.challenges.push('customer-service');
    if (input.includes('data') || input.includes('analytics')) analysis.challenges.push('data-insights');

    const recommendations: Recommendation[] = [];

    // Generate recommendations based on analysis
    if (analysis.challenges.includes('efficiency') || analysis.challenges.includes('cost-reduction')) {
      recommendations.push({
        id: 'ai-automation',
        name: 'AI Process Automation',
        reason: 'Perfect for reducing manual work and improving efficiency',
        benefits: ['70% time savings', 'Eliminate manual errors', 'Scale operations easily'],
        roi: '300-500%',
        implementationTime: '1-2 months',
        cost: 'Low to Medium'
      });
    }

    if (analysis.challenges.includes('data-insights') || analysis.industry === 'finance') {
      recommendations.push({
        id: 'ai-analytics',
        name: 'AI Analytics & Business Intelligence',
        reason: 'Transform your data into actionable insights',
        benefits: ['Real-time insights', 'Predictive analytics', 'Better decision-making'],
        roi: '200-300%',
        implementationTime: '2-3 months',
        cost: 'Medium'
      });
    }

    if (analysis.challenges.includes('customer-service') || analysis.industry === 'retail') {
      recommendations.push({
        id: 'conversational-ai',
        name: 'Conversational AI Solutions',
        reason: '24/7 customer support that scales',
        benefits: ['24/7 availability', '80% cost reduction', 'Instant responses'],
        roi: '250-400%',
        implementationTime: '1-2 months',
        cost: 'Medium'
      });
    }

    // Fallback recommendations
    if (recommendations.length === 0) {
      recommendations.push({
        id: 'ai-strategy',
        name: 'AI Strategy Consulting',
        reason: 'Let us help identify the best AI opportunities for your business',
        benefits: ['Custom roadmap', 'Expert guidance', 'ROI analysis'],
        roi: 'Varies',
        implementationTime: '2-4 weeks',
        cost: 'Consultation'
      });
    }

    let responseText = "Based on what you've shared, here are my recommendations:\n\n";
    
    if (analysis.industry) {
      responseText += `🏢 **Industry**: ${analysis.industry.charAt(0).toUpperCase() + analysis.industry.slice(1)}\n`;
    }
    if (analysis.businessSize) {
      responseText += `📊 **Business Size**: ${analysis.businessSize.charAt(0).toUpperCase() + analysis.businessSize.slice(1)}\n`;
    }
    if (analysis.challenges.length > 0) {
      responseText += `🎯 **Focus Areas**: ${analysis.challenges.map(c => c.replace('-', ' ')).join(', ')}\n\n`;
    }

    responseText += "### 🚀 Recommended Solutions:\n\n";

    return {
      id: Date.now().toString(),
      type: 'assistant',
      content: responseText,
      timestamp: new Date(),
      recommendations
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate processing delay
    setTimeout(() => {
      const assistantResponse = generateResponse(input);
      setMessages(prev => [...prev, assistantResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const quickPrompts = [
    "I run a small retail business with high customer service costs",
    "We're a healthcare startup looking to improve data analysis",
    "Manufacturing company struggling with equipment downtime",
    "Finance firm needing better fraud detection"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">AI-Powered Business Advisory</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI Business Advisor
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Get personalized AI solution recommendations in seconds
          </p>
        </div>
      </div>

      {/* Chat Interface */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden">
          {/* Messages Container */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.type === 'assistant' && (
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                  </div>
                )}
                
                <div className={`flex-1 max-w-[80%] ${message.type === 'user' ? 'text-right' : ''}`}>
                  <div
                    className={`rounded-2xl p-4 ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white ml-auto'
                        : 'bg-slate-700/50 text-gray-100'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{message.content}</div>
                  </div>
                  
                  {message.recommendations && message.recommendations.length > 0 && (
                    <div className="mt-4 space-y-3">
                      {message.recommendations.map((rec, idx) => (
                        <div
                          key={rec.id}
                          className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 border border-purple-500/30 hover:border-purple-500/50 transition-all"
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">
                              {idx + 1}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-white mb-1">
                                {rec.name}
                              </h4>
                              <p className="text-sm text-gray-400 mb-3">{rec.reason}</p>
                              
                              <div className="grid grid-cols-2 gap-2 mb-3">
                                <div className="flex items-center gap-2 text-sm">
                                  <TrendingUp className="w-4 h-4 text-green-400" />
                                  <span className="text-gray-300">ROI: {rec.roi}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <Target className="w-4 h-4 text-blue-400" />
                                  <span className="text-gray-300">{rec.implementationTime}</span>
                                </div>
                              </div>
                              
                              <div className="flex flex-wrap gap-2 mb-3">
                                {rec.benefits.map((benefit, i) => (
                                  <span
                                    key={i}
                                    className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full"
                                  >
                                    ✓ {benefit}
                                  </span>
                                ))}
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-400">
                                  Investment: <span className="text-purple-400 font-medium">{rec.cost}</span>
                                </span>
                                <a
                                  href={`/services/${rec.id}`}
                                  className="text-sm text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1"
                                >
                                  Learn More
                                  <Zap className="w-3 h-3" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="text-xs text-gray-500 mt-2">
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>

                {message.type === 'user' && (
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white animate-pulse" />
                  </div>
                </div>
                <div className="bg-slate-700/50 rounded-2xl p-4">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          {messages.length === 1 && (
            <div className="px-6 py-4 border-t border-slate-700/50">
              <p className="text-sm text-gray-400 mb-3">Quick prompts to get started:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {quickPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => setInput(prompt)}
                    className="text-left text-sm px-3 py-2 bg-slate-700/30 hover:bg-slate-700/50 text-gray-300 rounded-lg transition-colors border border-slate-600/30 hover:border-purple-500/30"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="p-6 border-t border-slate-700/50">
            <div className="flex gap-3">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe your business needs..."
                className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 shadow-lg hover:shadow-purple-500/25"
              >
                <Send className="w-5 h-5" />
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Info Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50">
            <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Instant Analysis</h3>
            <p className="text-gray-400 text-sm">
              Get personalized recommendations based on your specific business needs
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50">
            <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">ROI Focused</h3>
            <p className="text-gray-400 text-sm">
              Every recommendation includes expected ROI and implementation timeline
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50">
            <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Actionable Steps</h3>
            <p className="text-gray-400 text-sm">
              Clear next steps and direct links to learn more about each solution
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

