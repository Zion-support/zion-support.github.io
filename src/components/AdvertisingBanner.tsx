import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, TrendingUp, Zap } from 'lucide-react';

const AdvertisingBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-3 shadow-lg animate-gradient-x">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span className="text-sm font-bold uppercase tracking-wide">🔥 Just Released - October 2025</span>
          </div>
          <div className="hidden sm:block h-6 w-px bg-white/30"></div>
          <p className="text-sm font-medium">
            <span className="font-bold">NEW:</span> Autonomous AI Orchestration Platform - 
            <span className="font-bold text-yellow-300"> $847M Value Created</span> + 
            Real-Time Business Intelligence Revolution
          </p>
          <Link 
            to="/blog/ai-2025-oct-autonomous-ai-orchestration-platform-revolution" 
            className="inline-flex items-center gap-1 bg-white text-teal-700 hover:bg-teal-50 px-4 py-1 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-md"
          >
            <Zap className="w-4 h-4" />
            Read Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingBanner;