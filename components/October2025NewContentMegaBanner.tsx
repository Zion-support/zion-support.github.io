"use client";

import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Rocket, Sparkles, TrendingUp, Award, Heart, Factory, MessageCircle, ArrowRight } from 'lucide-react';

export default function October2025NewContentMegaBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div className={`relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-12 px-4 transition-all duration-300 ${
      isClosing ? 'opacity-0 transform -translate-y-full' : 'opacity-100 transform translate-y-0'
    }`}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6TTAgMTRjMC02LjYyNyA1LjM3My0xMiAxMi0xMnMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMi0xMi01LjM3My0xMi0xMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center space-y-6 mb-10">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-lg px-6 py-2 rounded-full border border-yellow-400/30">
            <Rocket className="w-5 h-5 text-yellow-300 animate-bounce" />
            <span className="text-lg font-bold tracking-wide">NEW OCTOBER 2025 CONTENT RELEASE</span>
            <Sparkles className="w-5 h-5 text-yellow-300" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Enterprise AI Success Stories & Implementation Guides
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover how Fortune 50 & 100 companies achieved <strong>$28B+ in combined value creation</strong> through transformational AI implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Blog Post 1 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-3 rounded-xl">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-cyan-300 mb-2">COMPLETE GUIDE</div>
                <h3 className="text-xl font-bold mb-2">Enterprise AI Platform Modernization</h3>
                <p className="text-white/80 text-sm mb-3">
                  $2.8B value | 10x faster deployments | 99.8% reliability
                </p>
                <Link
                  to="/blog/ai-2025-oct-01-enterprise-ai-platform-modernization-guide"
                  className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 font-semibold text-sm transition-colors"
                >
                  Read Complete Guide <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-purple-400 to-pink-500 p-3 rounded-xl">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-purple-300 mb-2">CX REVOLUTION</div>
                <h3 className="text-xl font-bold mb-2">Conversational AI Customer Experience</h3>
                <p className="text-white/80 text-sm mb-3">
                  $4.7B value | 95% CSAT | 85% automation rate
                </p>
                <Link
                  to="/blog/ai-2025-oct-01-conversational-ai-customer-experience-revolution"
                  className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 font-semibold text-sm transition-colors"
                >
                  Explore Solution <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Case Study 1 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-3 rounded-xl">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-emerald-300 mb-2">FORTUNE 50 SUCCESS</div>
                <h3 className="text-xl font-bold mb-2">Healthcare: $8.4B AI Transformation</h3>
                <p className="text-white/80 text-sm mb-3">
                  60M patients | 92% fewer errors | 89% satisfaction
                </p>
                <Link
                  to="/case-studies/ai-2025-oct-01-fortune-50-healthcare-ai-transformation-8-4-billion-success"
                  className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 font-semibold text-sm transition-colors"
                >
                  Read Case Study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-orange-400 to-red-500 p-3 rounded-xl">
                <Factory className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-orange-300 mb-2">FORTUNE 100 SUCCESS</div>
                <h3 className="text-xl font-bold mb-2">Manufacturing: $12.7B Edge AI Success</h3>
                <p className="text-white/80 text-sm mb-3">
                  847 facilities | 99.2% uptime | 62% carbon reduction
                </p>
                <Link
                  to="/case-studies/ai-2025-oct-01-manufacturing-edge-ai-robotics-transformation-12-7-billion-success"
                  className="inline-flex items-center gap-2 text-orange-300 hover:text-orange-200 font-semibold text-sm transition-colors"
                >
                  View Success Story <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
            <div className="text-3xl font-bold text-yellow-300">$28B+</div>
            <div className="text-sm text-white/80">Combined Value</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
            <div className="text-3xl font-bold text-green-300">10:1</div>
            <div className="text-sm text-white/80">Average ROI</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
            <div className="text-3xl font-bold text-cyan-300">99%+</div>
            <div className="text-sm text-white/80">Reliability</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
            <div className="text-3xl font-bold text-purple-300">4</div>
            <div className="text-sm text-white/80">New Resources</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/content-hub"
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 flex items-center gap-2 shadow-xl"
            >
              Explore All Content
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/services"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-lg px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 border-2 border-white/30"
            >
              See Our Services
            </Link>
          </div>
          
          <button
            onClick={handleClose}
            className="text-white/60 hover:text-white text-sm transition-colors underline"
          >
            Dismiss this banner
          </button>
        </div>
      </div>
    </div>
  );
}
