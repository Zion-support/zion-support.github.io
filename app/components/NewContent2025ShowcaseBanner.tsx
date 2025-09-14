import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface ContentItem {
  id: string;
  title: string;
  type: string;
  excerpt: string;
  url: string;
  tags: string[];
  featured: boolean;
  is_new: boolean;
  reading_time?: string;
  metrics?: {
    roi?: string;
    savings?: string;
    efficiency?: string;
    satisfaction?: string;
  };
}

const NewContent2025ShowcaseBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const newContent: ContentItem[] = [
    {
      id: "cybersecurity-revolution",
      title: "AI 2025: The Cybersecurity Revolution - Next-Generation Threat Protection",
      type: "Blog Post",
      excerpt: "Discover how AI-powered cybersecurity solutions are revolutionizing threat detection, response, and prevention in 2025. Learn about the latest advances in autonomous security systems.",
      url: "/blog/ai-2025-cybersecurity-revolution-next-generation-threat-protection",
      tags: ["AI", "Cybersecurity", "Threat Protection", "Business Security"],
      featured: true,
      is_new: true,
      reading_time: "12 minutes",
      metrics: {
        roi: "94%",
        savings: "$2.3M",
        efficiency: "67%",
        satisfaction: "100%"
      }
    },
    {
      id: "fintech-transformation",
      title: "Fintech AI Transformation 2025: How a $100M Company Achieved 450% ROI",
      type: "Case Study",
      excerpt: "Discover how a leading fintech company transformed their operations with AI, achieving 450% ROI, 78% faster loan processing, and $15M in annual savings.",
      url: "/case-studies/fintech-ai-transformation-2025-ultimate-success-story",
      tags: ["Case Study", "Fintech", "AI Transformation", "ROI"],
      featured: true,
      is_new: true,
      reading_time: "15 minutes",
      metrics: {
        roi: "450%",
        savings: "$15M",
        efficiency: "78%",
        satisfaction: "89%"
      }
    },
    {
      id: "ai-implementation-roadmap",
      title: "AI Implementation Roadmap 2025: Complete Guide to Successful AI Deployment",
      type: "Implementation Guide",
      excerpt: "Master the art of AI implementation with our comprehensive roadmap. Learn proven strategies, avoid common pitfalls, and achieve 340% average ROI with structured AI deployment.",
      url: "/resources/ai-implementation-roadmap-2025-complete-guide",
      tags: ["Implementation Guide", "AI Strategy", "ROI", "Best Practices"],
      featured: true,
      is_new: true,
      reading_time: "20 minutes",
      metrics: {
        roi: "340%",
        savings: "$2.8B",
        efficiency: "67%",
        satisfaction: "98%"
      }
    }
  ];

  useEffect(() => {
    const bannerDismissed = localStorage.getItem('newContent2025BannerDismissed');
    if (bannerDismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, newContent.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('newContent2025BannerDismissed', 'true');
  };

  const handleMouseEnter = () => setIsAutoPlay(false);
  const handleMouseLeave = () => setIsAutoPlay(true);

  if (!isVisible) return null;

  const currentContent = newContent[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-white opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-96 h-96 bg-white opacity-5 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white opacity-5 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
              <span className="text-sm font-medium">🚀 NEW CONTENT 2025</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest AI Insights & Success Stories
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Discover cutting-edge AI solutions, real-world case studies, and proven implementation strategies
            </p>
          </div>

          {/* Content Showcase */}
          <div 
            className="bg-white bg-opacity-10 rounded-2xl p-8 mb-8 backdrop-blur-sm"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 mb-4">
                  <span className="text-sm font-medium">{currentContent.type}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                  {currentContent.title}
                </h3>
                
                <p className="text-lg opacity-90 mb-6 max-w-4xl mx-auto">
                  {currentContent.excerpt}
                </p>

                {/* Metrics Grid */}
                {currentContent.metrics && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white bg-opacity-20 rounded-lg p-4">
                      <div className="text-2xl font-bold text-yellow-300">{currentContent.metrics.roi}</div>
                      <div className="text-sm opacity-80">ROI</div>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-300">{currentContent.metrics.savings}</div>
                      <div className="text-sm opacity-80">Savings</div>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-300">{currentContent.metrics.efficiency}</div>
                      <div className="text-sm opacity-80">Efficiency</div>
                    </div>
                    <div className="bg-white bg-opacity-20 rounded-lg p-4">
                      <div className="text-2xl font-bold text-purple-300">{currentContent.metrics.satisfaction}</div>
                      <div className="text-sm opacity-80">Satisfaction</div>
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {currentContent.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Reading Time */}
                {currentContent.reading_time && (
                  <div className="text-sm opacity-80 mb-6">
                    📖 {currentContent.reading_time} read
                  </div>
                )}

                <Link
                  href={currentContent.url}
                  className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Read Full Article →
                </Link>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {newContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* All Content Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {newContent.map((content, index) => (
              <Link
                key={content.id}
                href={content.url}
                className="bg-white bg-opacity-10 rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-3 py-1 mb-3">
                    <span className="text-sm font-medium">{content.type}</span>
                  </div>
                  <h4 className="text-lg font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                    {content.title}
                  </h4>
                  <p className="text-sm opacity-80 mb-4 line-clamp-3">
                    {content.excerpt}
                  </p>
                  {content.reading_time && (
                    <div className="text-xs opacity-60">
                      📖 {content.reading_time}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Success Statistics */}
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-center mb-6">
              Proven Results Across 500+ AI Implementations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-300 mb-2">340%</div>
                <div className="text-sm opacity-80">Average ROI</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-300 mb-2">$2.8B</div>
                <div className="text-sm opacity-80">Total Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-300 mb-2">98%</div>
                <div className="text-sm opacity-80">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-300 mb-2">67%</div>
                <div className="text-sm opacity-80">Faster Implementation</div>
              </div>
            </div>
          </div>

          {/* Dismiss Button */}
          <div className="text-center mt-6">
            <button
              onClick={handleDismiss}
              className="text-white opacity-60 hover:opacity-100 transition-opacity text-sm"
            >
              Dismiss this banner
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NewContent2025ShowcaseBanner;