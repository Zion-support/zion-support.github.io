import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { 
  Sparkles, 
  Brain, 
  Zap, 
  Rocket, 
  Star,
  ArrowRight,
  X,
  TrendingUp,
  Shield,
  Globe
} from 'lucide-react';

const AI2033BreakthroughPromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: Brain,
      title: 'AI Singularity Achieved',
      description: 'True artificial general intelligence with consciousness',
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: Zap,
      title: 'Quantum-AI Fusion',
      description: 'Unprecedented computational power breakthrough',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Rocket,
      title: 'Neural Interface Revolution',
      description: 'Direct brain-computer integration technology',
      color: 'from-green-600 to-emerald-600'
    },
    {
      icon: Shield,
      title: '100% Disease Cure Rate',
      description: 'Revolutionary healthcare AI achievements',
      color: 'from-red-600 to-pink-600'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const currentFeatureData = features[currentFeature];
  const IconComponent = currentFeatureData.icon;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-bounce delay-2000"></div>
          <div className="absolute bottom-10 right-1/3 w-14 h-14 bg-white/10 rounded-full animate-bounce delay-500"></div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-4 py-2 text-sm animate-pulse">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI 2033 BREAKTHROUGH
                </Badge>
                <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold px-4 py-2 text-sm">
                  REVOLUTIONARY
                </Badge>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                The Future of AI is{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                  Here Now
                </span>
              </h2>

              <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl">
                Revolutionary AI breakthroughs achieving singularity, quantum fusion, and neural interfaces. 
                Transform your organization with 50,000% ROI potential.
              </p>

              {/* Rotating Feature Display */}
              <div className="mb-6">
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${currentFeatureData.color}`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{currentFeatureData.title}</h4>
                    <p className="text-gray-200 text-sm">{currentFeatureData.description}</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">50,000%</div>
                  <div className="text-sm text-gray-300">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">99.9%</div>
                  <div className="text-sm text-gray-300">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">500+</div>
                  <div className="text-sm text-gray-300">Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">100%</div>
                  <div className="text-sm text-gray-300">Industries</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 font-bold">
                  <Brain className="w-5 h-5 mr-2" />
                  Explore Breakthroughs
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  View Case Studies
                </Button>
              </div>
            </div>

            {/* Right Content - Visual Elements */}
            <div className="flex-1 max-w-lg">
              <div className="relative">
                {/* Main Visual */}
                <div className="relative bg-gradient-to-br from-white/20 to-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4 animate-pulse">
                      <Brain className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">AI 2033</h3>
                    <p className="text-gray-200 mb-4">Breakthrough Technologies</p>
                    
                    {/* Feature Indicators */}
                    <div className="flex justify-center space-x-2 mb-4">
                      {features.map((_, index) => (
                        <div
                          key={index}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentFeature ? 'bg-yellow-400' : 'bg-white/30'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce delay-1000"></div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-bounce delay-2000"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 transition-colors"
          aria-label="Close banner"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default AI2033BreakthroughPromotionBanner;