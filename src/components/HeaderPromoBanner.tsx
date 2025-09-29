import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Sparkles, X } from 'lucide-react';
import { useState } from 'react';

const HeaderPromoBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-3 px-4 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 animate-pulse"></div>
      
      <div className="container mx-auto flex items-center justify-center gap-4 relative z-10">
        {/* Animated icon */}
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 animate-spin" />
          <BookOpen className="w-5 h-5 animate-bounce" />
        </div>
        
        {/* Main message */}
        <div className="flex items-center gap-2 text-center">
          <span className="font-semibold">🔥 NEW:</span>
          <span>12+ Expert Articles Just Dropped!</span>
          <span className="hidden sm:inline">Generative AI, Cloud-Native Architecture, & Zero-Trust Security</span>
        </div>
        
        {/* CTA Button */}
        <Link 
          to="/blog"
          className="bg-white/20 hover:bg-white/30 text-white px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center gap-1 border border-white/30"
        >
          Read Now
          <ArrowRight className="w-3 h-3" />
        </Link>
        
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-1"
          aria-label="Close banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      
      {/* Animated border */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 animate-pulse"></div>
    </div>
  );
};

export default HeaderPromoBanner;