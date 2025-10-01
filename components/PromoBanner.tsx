import React from 'react';
import Link from 'next/link';

const PromoBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 relative overflow-hidden">
      <div className="container mx-auto flex items-center justify-center relative z-10">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
              🚀 NEW
            </span>
            <span className="font-semibold">
              AI-Powered Solutions Now Available!
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm opacity-90">
              Transform your business with cutting-edge AI technology
            </span>
            <Link 
              href="/services/ai-development"
              className="bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-2 right-8 w-4 h-4 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-2 left-1/4 w-6 h-6 bg-white/10 rounded-full animate-pulse delay-500"></div>
      </div>
    </div>
  );
};

export default PromoBanner;