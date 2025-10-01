import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, TrendingUp, Zap, Shield } from 'lucide-react';

const AdvertisingBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-3 shadow-lg animate-gradient-x">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span className="text-sm font-bold uppercase tracking-wide">🚀 NEW - October 1, 2025</span>
          </div>
          <div className="hidden sm:block h-6 w-px bg-white/30"></div>
          <p className="text-sm font-medium">
            <span className="font-bold">BREAKING:</span> Enterprise AI Agent Orchestration + 
            <span className="font-bold text-yellow-300"> 85% Latency Reduction</span> + 
            Zero-Trust Security Framework
          </p>
          <Link 
            to="/blog/ai-agent-orchestration-enterprise-2025" 
            className="inline-flex items-center gap-1 bg-white text-purple-700 hover:bg-purple-50 px-4 py-1 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-md"
          >
            <Shield className="w-4 h-4" />
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingBanner;