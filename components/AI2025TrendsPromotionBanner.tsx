import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Brain, Zap, ArrowRight, X, Star, Users, Clock } from 'lucide-react';

const AI2025TrendsPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotionalContent = [
    {
      id: 'multimodal-ai',
      title: 'Multimodal AI Revolution',
      subtitle: 'Beyond Text and Images',
      description: 'Discover how 2025 is ushering in a new era of AI that seamlessly processes text, images, audio, and video simultaneously.',
      metrics: '2.3M views • 94% engagement',
      cta: 'Explore Trends',
      color: 'from-blue-500 to-cyan-500',
      icon: Brain
    },
    {
      id: 'quantum-ai',
      title: 'Quantum-AI Fusion',
      subtitle: '10,000x Faster Processing',
      description: 'Explore how quantum computing is revolutionizing AI algorithms and solving previously impossible optimization problems.',
      metrics: '1.8M views • 91% engagement',
      cta: 'Learn More',
      color: 'from-purple-500 to-pink-500',
      icon: Zap
    },
    {
      id: 'autonomous-ai',
      title: 'Autonomous AI Systems',
      subtitle: 'Self-Improving Intelligence',
      description: 'Learn about AI systems that can self-modify, learn from failures, and continuously improve without human intervention.',
      metrics: '1.5M views • 88% engagement',
      cta: 'Discover Now',
      color: 'from-green-500 to-emerald-500',
      icon: TrendingUp
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotionalContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const currentContent = promotionalContent[currentSlide];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 border-b border-blue-500/20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
            aria-label="Close banner"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Main Content */}
          <div className="flex-1 pr-8">
            <div className="flex items-start space-x-4">
              {/* Icon */}
              <div className={`p-3 rounded-xl bg-gradient-to-r ${currentContent.color} flex-shrink-0`}>
                <currentContent.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full">
                    NEW AI TRENDS 2025
                  </span>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">Trending</span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {currentContent.title}
                </h3>
                
                <p className="text-lg text-blue-300 mb-3">
                  {currentContent.subtitle}
                </p>

                <p className="text-gray-300 mb-4 max-w-2xl">
                  {currentContent.description}
                </p>

                <div className="flex items-center space-x-6 text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{currentContent.metrics}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>8 min read</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/insights/ai-2025-trends"
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${currentContent.color} text-white font-semibold rounded-lg transition-all hover:scale-105 hover:shadow-lg`}
                  >
                    {currentContent.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  
                  <Link
                    to="/insights"
                    className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/20 transition-all hover:bg-white/20"
                  >
                    View All Insights
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex flex-col space-y-2">
            {promotionalContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-blue-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-5000 ease-linear"
            style={{ 
              width: `${((currentSlide + 1) / promotionalContent.length) * 100}%` 
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AI2025TrendsPromotionBanner;