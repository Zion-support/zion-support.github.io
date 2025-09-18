"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NewContent2026Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const contentItems = [
    {
      type: "blog",
      title: "Neural Consensus Revolution",
      subtitle: "The Future of Collective AI Intelligence",
      description: "Discover how multiple AI systems collaborate, debate, and reach consensus for unprecedented problem-solving capabilities that surpass individual AI limitations.",
      image: "🧠",
      link: "/blog/ai-2026-neural-consensus-revolution",
      gradient: "from-purple-600 to-indigo-600",
      bgGradient: "from-purple-900/30 to-indigo-900/30",
      stats: { value: "99.2%", label: "Diagnostic Accuracy" }
    },
    {
      type: "blog",
      title: "Synthetic Intelligence Breakthrough",
      subtitle: "Creating AI That Thinks Beyond Human Limits",
      description: "Explore revolutionary AI that develops novel cognitive patterns and reasoning methods, solving problems humans cannot even conceptualize.",
      image: "🔬",
      link: "/blog/ai-2026-synthetic-intelligence-breakthrough",
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-900/30 to-blue-900/30",
      stats: { value: "10x", label: "Faster Problem Solving" }
    },
    {
      type: "case-study",
      title: "Healthcare Transformation",
      subtitle: "Neural Consensus in Medical Diagnosis",
      description: "See how MedTech Innovations achieved 99.2% diagnostic accuracy and $1.8B in cost savings through Neural Consensus technology.",
      image: "🏥",
      link: "/case-studies/neural-consensus-healthcare-transformation",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-900/30 to-teal-900/30",
      stats: { value: "$1.8B", label: "Annual Savings" }
    },
    {
      type: "guide",
      title: "Implementation Guide 2026",
      subtitle: "Complete Roadmap to Neural Consensus Success",
      description: "Get step-by-step guidance on implementing Neural Consensus technology in your organization with proven strategies and best practices.",
      image: "📚",
      link: "/guides/neural-consensus-implementation-guide-2026",
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-900/30 to-red-900/30",
      stats: { value: "40-60%", label: "Improvement Over Individual AI" }
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-500';
      case 'case-study': return 'bg-green-500';
      case 'guide': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog': return 'Article';
      case 'case-study': return 'Case Study';
      case 'guide': return 'Guide';
      default: return 'Content';
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-5 animate-pulse"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-blue-500 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-40 right-32 w-12 h-12 bg-indigo-500 rounded-full opacity-30 animate-bounce delay-1000"></div>
      <div className="absolute bottom-32 left-40 w-20 h-20 bg-purple-500 rounded-full opacity-25 animate-bounce delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🆕 NEW CONTENT 2026</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Content Collection
            </span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Explore our latest breakthrough content on Neural Consensus, Synthetic Intelligence, 
            and the future of collective AI intelligence
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className={`bg-gradient-to-r ${contentItems[currentSlide].bgGradient} rounded-2xl p-8 border border-white border-opacity-20`}
            >
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white mr-4 ${getTypeColor(contentItems[currentSlide].type)}`}>
                      {getTypeLabel(contentItems[currentSlide].type)}
                    </span>
                    <div className="text-sm opacity-70">New Release 2026</div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    {contentItems[currentSlide].title}
                  </h3>
                  <p className="text-xl opacity-90 mb-4">
                    {contentItems[currentSlide].subtitle}
                  </p>
                  <p className="text-lg opacity-80 mb-6 leading-relaxed">
                    {contentItems[currentSlide].description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center mb-6">
                    <div className="bg-white bg-opacity-20 rounded-full px-4 py-2 mr-4">
                      <span className="text-2xl font-bold text-cyan-400">
                        {contentItems[currentSlide].stats.value}
                      </span>
                    </div>
                    <span className="text-lg opacity-80">
                      {contentItems[currentSlide].stats.label}
                    </span>
                  </div>

                  <motion.a
                    href={contentItems[currentSlide].link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${contentItems[currentSlide].gradient} rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    Explore Content
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                </div>

                {/* Visual */}
                <div className="flex-1">
                  <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm">
                    <div className="text-center">
                      <div className="text-8xl mb-6">
                        {contentItems[currentSlide].image}
                      </div>
                      <div className="space-y-4">
                        <div className="h-3 bg-white bg-opacity-30 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-cyan-400 to-blue-400"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 3, delay: 0.5 }}
                          />
                        </div>
                        <div className="text-sm opacity-70">
                          {getTypeLabel(contentItems[currentSlide].type)} • 2026 Release
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white bg-opacity-30 hover:bg-opacity-50'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % contentItems.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Explore All New Content
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Dive deep into our comprehensive collection of Neural Consensus and Synthetic Intelligence content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/blog"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View All Articles
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
            <motion.a
              href="/case-studies"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Browse Case Studies
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewContent2026Carousel;