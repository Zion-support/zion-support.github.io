import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X, Star, Zap, TrendingUp } from 'lucide-react';

const PromotionalBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPromo, setCurrentPromo] = useState(0);

  const promotions = [
    {
      id: 1,
      title: "🚀 NEW: AI Agent Factory",
      description: "Build intelligent agents that learn and adapt to your business needs",
      cta: "Explore Now",
      link: "/services/ai-agent-factory",
      badge: "Revolutionary",
      color: "from-blue-600 to-purple-600"
    },
    {
      id: 2,
      title: "⚡ Quantum Computing Solutions",
      description: "Harness quantum power for complex problem-solving and optimization",
      cta: "Learn More",
      link: "/services/quantum-computing",
      badge: "Breakthrough",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 3,
      title: "🔗 Blockchain 3.0 Platform",
      description: "Next-gen blockchain with advanced consensus and interoperability",
      cta: "Discover",
      link: "/services/blockchain-3",
      badge: "Cutting-Edge",
      color: "from-green-600 to-blue-600"
    }
  ];

  useEffect(() => {
    // Show banner after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Rotate promotions every 8 seconds
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promotions.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Animated icon */}
            <div className="relative">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 animate-pulse" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
            </div>

            {/* Promotional content */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-medium">
                  {promotions[currentPromo].badge}
                </span>
                <span className="text-sm font-medium">
                  {promotions[currentPromo].title}
                </span>
              </div>
              <span className="text-white/80 text-sm hidden md:block">
                {promotions[currentPromo].description}
              </span>
            </div>
          </div>

          {/* CTA and close button */}
          <div className="flex items-center space-x-3">
            <Link
              to={promotions[currentPromo].link}
              className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-1"
            >
              <span>{promotions[currentPromo].cta}</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
            <button
              onClick={handleClose}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-0 left-0 h-1 bg-white/20 w-full">
          <div 
            className="h-full bg-white/60 transition-all duration-100 ease-linear"
            style={{ width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;