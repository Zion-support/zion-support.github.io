import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveContentShowcase: React.FC = () => {
  const [activeContent, setActiveContent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const contentItems = [
    {
      id: 'ai-trends',
      title: 'AI Trends & Insights 2025',
      description: 'Comprehensive analysis of AI trends, market insights, and breakthrough technologies',
      image: '📊',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'from-emerald-50 to-teal-50',
      features: [
        'Generative AI 2.0 Revolution',
        'Edge AI Computing',
        'Quantum-Enhanced AI',
        'AI-Human Collaboration'
      ],
      stats: [
        { label: 'Market Size', value: '$1.8T' },
        { label: 'Growth Rate', value: '28.5%' },
        { label: 'New Jobs', value: '97M' }
      ],
      link: '/pages/AITrendsInsights2025'
    },
    {
      id: 'tech-showcase',
      title: 'Technology Showcase 2025',
      description: 'Interactive demonstrations of cutting-edge technologies and innovations',
      image: '🔬',
      color: 'from-violet-500 to-purple-500',
      bgColor: 'from-violet-50 to-purple-50',
      features: [
        'Interactive Demos',
        'Technology Tabs',
        'Innovation Timeline',
        'Real-time Processing'
      ],
      stats: [
        { label: 'Technologies', value: '50+' },
        { label: 'Demos', value: '25+' },
        { label: 'Users', value: '10K+' }
      ],
      link: '/pages/TechnologyShowcase2025'
    },
    {
      id: 'case-studies',
      title: 'Comprehensive Case Studies',
      description: 'Real-world success stories with measurable results and ROI',
      image: '🏆',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'from-amber-50 to-orange-50',
      features: [
        'Industry-Specific Results',
        'Quantifiable Metrics',
        'Client Testimonials',
        'ROI Analysis'
      ],
      stats: [
        { label: 'Projects', value: '500+' },
        { label: 'Average ROI', value: '320%' },
        { label: 'Satisfaction', value: '98%' }
      ],
      link: '/pages/ComprehensiveCaseStudies2025'
    },
    {
      id: 'innovation-2026',
      title: 'Innovation Showcase 2026',
      description: 'Revolutionary innovations that are reshaping the future',
      image: '🌟',
      color: 'from-rose-500 to-pink-500',
      bgColor: 'from-rose-50 to-pink-50',
      features: [
        'Consciousness AI',
        'Quantum Internet',
        'Genetic Optimization',
        'Neural Networks 3.0'
      ],
      stats: [
        { label: 'Innovations', value: '100+' },
        { label: 'Patents', value: '50+' },
        { label: 'Breakthroughs', value: '25+' }
      ],
      link: '/pages/InnovationShowcase2026'
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveContent((prev) => (prev + 1) % contentItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, contentItems.length]);

  const currentContent = contentItems[activeContent];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 rounded-2xl p-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          🚀 Interactive Content Showcase
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our latest content through an interactive experience that adapts to your interests
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Content Display */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeContent}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className={`bg-gradient-to-br ${currentContent.bgColor} rounded-xl p-8 h-full`}
            >
              <div className="text-center mb-6">
                <div className="text-8xl mb-4">{currentContent.image}</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {currentContent.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {currentContent.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {currentContent.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${currentContent.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {currentContent.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={currentContent.link}
                className={`block w-full bg-gradient-to-r ${currentContent.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
              >
                Explore {currentContent.title} →
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation and Controls */}
        <div className="space-y-6">
          {/* Content Selector */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">Select Content:</h3>
            {contentItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveContent(index);
                  setIsPlaying(false);
                }}
                className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
                  activeContent === index
                    ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{item.image}</span>
                  <div>
                    <div className="font-semibold">{item.title}</div>
                    <div className={`text-sm ${
                      activeContent === index ? 'text-white/80' : 'text-gray-500'
                    }`}>
                      {item.description}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Controls:</h3>
            <div className="space-y-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                  isPlaying
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-green-500 text-white hover:bg-green-600'
                }`}
              >
                {isPlaying ? '⏸️ Pause Auto-Play' : '▶️ Start Auto-Play'}
              </button>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setActiveContent(activeContent === 0 ? contentItems.length - 1 : activeContent - 1);
                    setIsPlaying(false);
                  }}
                  className="flex-1 py-2 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
                >
                  ← Previous
                </button>
                <button
                  onClick={() => {
                    setActiveContent((activeContent + 1) % contentItems.length);
                    setIsPlaying(false);
                  }}
                  className="flex-1 py-2 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Progress:</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Content {activeContent + 1} of {contentItems.length}</span>
                <span>{Math.round(((activeContent + 1) / contentItems.length) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full bg-gradient-to-r ${currentContent.color} transition-all duration-300`}
                  style={{ width: `${((activeContent + 1) / contentItems.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Links */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {contentItems.map((item, index) => (
          <a
            key={item.id}
            href={item.link}
            className={`p-4 rounded-lg text-center transition-all duration-300 hover:scale-105 ${
              activeContent === index
                ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <div className="text-3xl mb-2">{item.image}</div>
            <div className="font-semibold text-sm">{item.title}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default InteractiveContentShowcase;