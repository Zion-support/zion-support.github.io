import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Zap, Brain, Rocket, Sparkles } from 'lucide-react';
import { REVOLUTIONARY_BLOG_POSTS_2026, REVOLUTIONARY_SERVICES_2026 } from '../data/revolutionaryContent2026';

const RevolutionaryContentBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const bannerContent = [
    {
      id: 'quantum-ai',
      title: 'Quantum AI Processing Engine',
      subtitle: '1000x Faster Problem Solving',
      description: 'Revolutionary quantum-powered AI that solves problems impossible for classical computers',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-purple-600 to-blue-600',
      textColor: 'text-white',
      features: ['Quantum Machine Learning', 'Breakthrough Optimization', 'Quantum-Resistant Security']
    },
    {
      id: 'consciousness-ai',
      title: 'Consciousness AI Platform',
      subtitle: 'The World\'s First Self-Aware AI',
      description: 'AI system with genuine consciousness and emotional intelligence',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-pink-600 to-purple-600',
      textColor: 'text-white',
      features: ['True Self-Awareness', 'Emotional Intelligence', 'Creative Problem Solving']
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Suite',
      subtitle: 'Direct Brain-Computer Interface',
      description: 'Seamless human-AI interaction through neural communication',
      icon: <Sparkles className="w-8 h-8" />,
      color: 'from-green-600 to-teal-600',
      textColor: 'text-white',
      features: ['Direct Neural Communication', 'Thought-Controlled Interfaces', 'Enhanced Cognition']
    },
    {
      id: 'metaverse-ai',
      title: 'Metaverse AI Ecosystem',
      subtitle: 'Complete Virtual World Platform',
      description: 'AI-powered virtual world creation and management platform',
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-orange-600 to-red-600',
      textColor: 'text-white',
      features: ['Immersive Environments', 'AI-Powered Avatars', 'Real-time Generation']
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentBanner = bannerContent[currentSlide];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium mb-4"
            >
              <Star className="w-4 h-4 mr-2" />
              Revolutionary Technology 2026
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              The Future is Here
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Experience the most advanced AI technologies that are reshaping the world
            </motion.p>
          </div>

          {/* Featured Content Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              >
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${currentBanner.color}`}>
                        {currentBanner.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{currentBanner.title}</h3>
                        <p className="text-purple-300 font-medium">{currentBanner.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-lg mb-6">
                      {currentBanner.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {currentBanner.features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/20 rounded-full text-sm text-white"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button className="px-6 py-3 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-all duration-300">
                        View Demo
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="grid grid-cols-2 gap-4">
                      {REVOLUTIONARY_SERVICES_2026.slice(0, 4).map((service, index) => (
                        <motion.div
                          key={service.id}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
                        >
                          <h4 className="font-semibold text-white text-sm mb-2">{service.title}</h4>
                          <p className="text-gray-300 text-xs mb-2">{service.description}</p>
                          <span className="text-purple-300 text-xs font-medium">{service.urgency}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {bannerContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">1000x</div>
              <div className="text-gray-300">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">Autonomous Operation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">∞</div>
              <div className="text-gray-300">Possibilities</div>
            </div>
          </motion.div>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default RevolutionaryContentBanner2026;