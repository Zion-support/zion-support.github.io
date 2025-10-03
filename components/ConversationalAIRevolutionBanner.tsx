"use client";

import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { MessageCircle, Users, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

export default function ConversationalAIRevolutionBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div className={`relative bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white py-8 px-4 transition-all duration-300 ${
      isClosing ? 'opacity-0 transform -translate-y-full' : 'opacity-100 transform translate-y-0'
    }`}>
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Content */}
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-semibold">CUSTOMER EXPERIENCE AI</span>
              </div>
              <div className="bg-yellow-400/30 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-xs font-bold">BREAKTHROUGH 2025</span>
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold">
              Conversational AI: The Customer Experience Revolution 💬
            </h3>
            
            <p className="text-white/90 text-base md:text-lg max-w-2xl">
              <strong>$4.7B Value Creation</strong> | 95% CSAT Scores | 85% Automation Rate
              <br/>
              Transform customer experience with GPT-4 powered conversational AI that delights customers 24/7
            </p>
            
            <div className="flex flex-wrap gap-3 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg">
                <Users className="w-4 h-4 text-green-300" />
                <span>92% Customer Satisfaction</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg">
                <TrendingUp className="w-4 h-4 text-yellow-300" />
                <span>78% Cost Reduction</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg">
                <Sparkles className="w-4 h-4 text-pink-300" />
                <span>Sub-30s Response Time</span>
              </div>
            </div>
          </div>

          {/* Right: CTA */}
          <div className="flex flex-col gap-3 min-w-[200px]">
            <Link
              to="/blog/ai-2025-oct-01-conversational-ai-customer-experience-revolution"
              className="group bg-white text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-lg font-bold text-center transition-all duration-200 flex items-center justify-center gap-2"
            >
              Explore Solution
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/services/conversational-ai"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-lg font-semibold text-center transition-all duration-200 border border-white/30"
            >
              Start Free Trial
            </Link>
            
            <button
              onClick={handleClose}
              className="text-white/70 hover:text-white text-sm transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
