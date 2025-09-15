import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
  category: string;
  badge: string;
}

const DynamicContentCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'AI Innovation Hub 2025',
      description: 'Revolutionary AI solutions transforming industries with autonomous agents, predictive analytics, and intelligent automation.',
      link: '/pages/AIInnovationHub2025',
      image: '🤖',
      category: 'Artificial Intelligence',
      badge: 'NEW'
    },
    {
      id: '2',
      title: 'Digital Transformation Services',
      description: 'Complete digital transformation solutions including cloud migration, process automation, and organizational change management.',
      link: '/pages/DigitalTransformation2025',
      image: '🔄',
      category: 'Digital Services',
      badge: 'FEATURED'
    },
    {
      id: '3',
      title: 'Advanced Analytics Platform',
      description: 'Next-generation analytics with real-time insights, predictive modeling, and business intelligence dashboards.',
      link: '/pages/AdvancedAnalytics2025',
      image: '📊',
      category: 'Analytics',
      badge: 'BREAKTHROUGH'
    },
    {
      id: '4',
      title: 'Cybersecurity Fortress',
      description: 'Enterprise-grade security solutions with AI-powered threat detection, zero-trust architecture, and compliance automation.',
      link: '/pages/CybersecurityFortress2025',
      image: '🛡️',
      category: 'Security',
      badge: 'SECURE'
    },
    {
      id: '5',
      title: 'Quantum Computing Solutions',
      description: 'Cutting-edge quantum computing applications for optimization, cryptography, and advanced simulations.',
      link: '/pages/QuantumComputingSolutions2025',
      image: '⚡',
      category: 'Quantum Tech',
      badge: 'FUTURE'
    },
    {
      id: '6',
      title: 'Edge AI & IoT Ecosystem',
      description: 'Distributed intelligence with edge computing, IoT integration, and real-time processing capabilities.',
      link: '/pages/EdgeAIandIoT2025',
      image: '🌐',
      category: 'Edge Computing',
      badge: 'INNOVATIVE'
    }
    ,
    {
      id: '7',
      title: 'Live Evals in Production',
      description: 'Eval-driven release engineering: runtime gates, rollback-on-fail, trusted delivery.',
      link: '/blog/ai-2026-operationalizing-live-evals-in-production-deep-dive',
      image: '🧪',
      category: 'Reliability',
      badge: 'NEW'
    },
    {
      id: '8',
      title: 'Agent Reliability Guide',
      description: 'SLOs, guardrails, and telemetry to reach 99.9% reliability.',
      link: '/blog/ai-2026-agent-reliability-field-guide',
      image: '✅',
      category: 'Operations',
      badge: 'FEATURED'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === contentItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, contentItems.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === contentItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? contentItems.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div 
        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
            className="relative h-80 flex items-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
            
            {/* Content */}
            <div className="relative z-20 flex items-center w-full px-8 lg:px-16">
              <div className="flex-1 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full">
                    {contentItems[currentIndex].badge}
                  </span>
                  <span className="text-sm text-purple-200">
                    {contentItems[currentIndex].category}
                  </span>
                </div>
                
                <h3 className="text-4xl lg:text-5xl font-bold mb-4">
                  {contentItems[currentIndex].title}
                </h3>
                
                <p className="text-xl text-gray-200 mb-8 max-w-2xl">
                  {contentItems[currentIndex].description}
                </p>
                
                <a
                  href={contentItems[currentIndex].link}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Now
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              
              <div className="hidden lg:block ml-8">
                <div className="text-8xl opacity-20">
                  {contentItems[currentIndex].image}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-6">
        {contentItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Content Grid Preview */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
        {contentItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => goToSlide(index)}
            className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
              index === currentIndex
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white transform scale-105'
                : 'bg-white border border-gray-200 hover:border-purple-300 hover:shadow-lg'
            }`}
          >
            <div className="text-2xl mb-2">{item.image}</div>
            <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
            <span className={`text-xs px-2 py-1 rounded-full ${
              index === currentIndex 
                ? 'bg-white/20 text-white' 
                : 'bg-purple-100 text-purple-700'
            }`}>
              {item.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicContentCarousel;