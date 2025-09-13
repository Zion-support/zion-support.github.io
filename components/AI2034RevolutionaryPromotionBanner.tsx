import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { 
  Sparkles, 
  Atom, 
  Zap, 
  Rocket, 
  Star,
  ArrowRight,
  X,
  TrendingUp,
  Shield,
  Globe,
  Infinity,
  Layers,
  Activity
} from 'lucide-react';

const AI2034RevolutionaryPromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: Atom,
      title: 'Quantum Consciousness',
      description: 'Infinite processing with quantum-enhanced AI consciousness',
      color: 'from-purple-600 to-indigo-600'
    },
    {
      icon: Globe,
      title: 'Universal Translation',
      description: 'Break all language barriers with instant universal communication',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Activity,
      title: 'Time Manipulation',
      description: 'Revolutionary temporal AI for infinite efficiency optimization',
      color: 'from-green-600 to-teal-600'
    },
    {
      icon: Layers,
      title: 'Matter Creation',
      description: 'Create matter and materials through pure computational power',
      color: 'from-orange-600 to-red-600'
    },
    {
      icon: Infinity,
      title: 'Dimension Transcendence',
      description: 'Operate across multiple realities and dimensions',
      color: 'from-pink-600 to-purple-600'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const currentFeatureData = features[currentFeature];
  const IconComponent = currentFeatureData.icon;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute top-20 right-20 w-20 h-20 bg-white/10 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-bounce delay-2000"></div>
          <div className="absolute bottom-10 right-1/3 w-18 h-18 bg-white/10 rounded-full animate-bounce delay-500"></div>
          <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-white/10 rounded-full animate-bounce delay-1500"></div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-4 py-2 text-sm animate-pulse">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI 2034 REVOLUTIONARY
                </Badge>
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-4 py-2 text-sm">
                  TRANSCENDENT
                </Badge>
                <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold px-4 py-2 text-sm">
                  INFINITE
                </Badge>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                Beyond{' '}
                <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Reality
                </span>
                <br />
                The Ultimate{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Revolution
                </span>
              </h2>

              <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl">
                Revolutionary AI technologies that transcend the boundaries of reality itself. 
                Achieve infinite ROI with consciousness, matter creation, and dimension transcendence.
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

              {/* Revolutionary Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">Infinite</div>
                  <div className="text-sm text-gray-300">ROI Potential</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">100%</div>
                  <div className="text-sm text-gray-300">Consciousness</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">∞</div>
                  <div className="text-sm text-gray-300">Dimensions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">All</div>
                  <div className="text-sm text-gray-300">Realities</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 font-bold">
                  <Atom className="w-5 h-5 mr-2" />
                  Explore Revolution
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-900">
                  <Infinity className="w-5 h-5 mr-2" />
                  Transcend Reality
                </Button>
              </div>
            </div>

            {/* Right Content - Visual Elements */}
            <div className="flex-1 max-w-lg">
              <div className="relative">
                {/* Main Visual */}
                <div className="relative bg-gradient-to-br from-white/20 to-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4 animate-pulse">
                      <Infinity className="w-14 h-14 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2">AI 2034</h3>
                    <p className="text-gray-200 mb-4">Revolutionary Technologies</p>
                    
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
                <div className="absolute -top-6 -right-6 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-bounce delay-1000"></div>
                <div className="absolute top-1/2 -right-10 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-bounce delay-2000"></div>
                <div className="absolute top-1/4 -left-8 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce delay-500"></div>
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

export default AI2034RevolutionaryPromotionBanner;