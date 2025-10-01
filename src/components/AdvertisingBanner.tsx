import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

const AdvertisingBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white py-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-center gap-3 flex-wrap text-center">
          <Sparkles className="w-5 h-5 animate-pulse" />
          <p className="text-sm md:text-base font-bold">
            🔥 NEW IN OCTOBER 2025: Multimodal AI Intelligence, Adaptive Learning Platforms & Document Automation!
          </p>
          <Link 
            to="/blog/ai-2025-oct-multimodal-enterprise-intelligence" 
            className="inline-flex items-center gap-1 bg-white text-purple-600 px-4 py-1 rounded-full text-sm font-semibold hover:bg-purple-100 transition-all hover:scale-105"
          >
            Read Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingBanner;