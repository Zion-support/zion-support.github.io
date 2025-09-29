import { ArrowRight, Calendar, Clock, Sparkles, TrendingUp, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewContentAnnouncement: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Encode SVG for safe use in CSS background-image without conflicting quotes
  const backgroundPatternSvg = `
    <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fill-rule="evenodd">
        <g fill="#ffffff" fill-opacity="0.1">
          <circle cx="30" cy="30" r="4"/>
        </g>
      </g>
    </svg>
  `;
  const backgroundImageStyle = {
    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(backgroundPatternSvg)}")`,
  } as const;

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={backgroundImageStyle}></div>
      </div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span className="text-sm font-medium">FRESH CONTENT ALERT</span>
              </div>
              <div className="flex items-center gap-1 bg-green-500/20 px-2 py-1 rounded-full">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-xs text-green-200">LIVE</span>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              🚀 Just Published: 8 Revolutionary Articles + 6 New AI Services
            </h2>
            
            <p className="text-blue-100 mb-4 max-w-3xl">
              Discover cutting-edge insights on AI Platform Engineering, Enterprise RAG v2, Quantum Computing, 
              Edge AI, Zero Trust Security, and our new AI Autonomous Operations platform.
            </p>

            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4" />
                <span>Published Jan 17, 2025</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                <span>15 min total read time</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>Trending in AI & Tech</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">AI Platform Engineering</span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">Quantum Computing</span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">Edge AI</span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">Zero Trust</span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">AI Automation</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/blog"
                className="bg-white text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Read Latest Articles
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="border border-white text-white hover:bg-white hover:text-purple-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Explore New Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="ml-4 p-2 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close announcement"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewContentAnnouncement;