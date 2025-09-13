import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Brain, Rocket, TrendingUp, Star } from 'lucide-react';

const AIInnovationShowcase2026PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentInnovation, setCurrentInnovation] = useState(0);

  const innovations = [
    {
      title: 'Quantum-Neural Fusion',
      description: '10,000x processing speed',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Autonomous Operations',
      description: '85% cost reduction',
      icon: Zap,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Neural Interfaces',
      description: 'Direct brain-computer connection',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Predictive Analytics',
      description: '98.7% accuracy',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentInnovation((prev) => (prev + 1) % innovations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentInnovationData = innovations[currentInnovation];
  const IconComponent = currentInnovationData.icon;

  return (
    <div className={`relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border border-purple-500/30 rounded-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 animate-pulse"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute top-8 right-8 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-4 left-8 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></div>
      <div className="absolute bottom-8 right-4 w-2 h-2 bg-pink-400 rounded-full animate-ping"></div>

      <div className="relative px-6 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="text-sm font-semibold text-yellow-400 uppercase tracking-wide">
                Revolutionary AI Innovations 2026
              </span>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
              Discover the Future of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Artificial Intelligence
              </span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-6 max-w-2xl">
              Explore groundbreaking AI technologies, quantum computing breakthroughs, and autonomous operations 
              delivering unprecedented ROI and transforming industries worldwide.
            </p>

            {/* Innovation Carousel */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-white/20">
                <IconComponent className={`h-6 w-6 text-white`} />
              </div>
              <div>
                <div className="font-semibold text-white">{currentInnovationData.title}</div>
                <div className="text-sm text-gray-400">{currentInnovationData.description}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                href="/ai-innovation-showcase-2026"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Explore Innovations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/20 p-6">
                {/* Animated Grid */}
                <div className="absolute inset-4 border border-white/10 rounded-xl">
                  <div className="grid grid-cols-4 gap-2 h-full">
                    {[...Array(16)].map((_, i) => (
                      <div 
                        key={i}
                        className="bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* Central Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin-slow">
                    <Brain className="h-12 w-12 text-white" />
                  </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                  5,000% ROI
                </div>
                <div className="absolute -bottom-2 -left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                  99.9% Accuracy
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-white">10,000x</div>
              <div className="text-sm text-gray-400">Faster Processing</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">98.7%</div>
              <div className="text-sm text-gray-400">Prediction Accuracy</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">85%</div>
              <div className="text-sm text-gray-400">Cost Reduction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm text-gray-400">Autonomous Operations</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AIInnovationShowcase2026PromotionBanner;