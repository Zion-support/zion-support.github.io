import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BookOpen, Sparkles, TrendingUp, Shield, Zap } from 'lucide-react';
const NewBlogContentBanner2025: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const newContent = [
    {
      id: 1,
      title: "AI-Powered Autonomous Business Operations",
      description: "Discover how self-managing systems are revolutionizing enterprises worldwide",
      icon: <Zap className="w-6 h-6" />,
      category: "Business Automation",
      readTime: "8 min read",
      featured: true,
      href: "/blog/ai-autonomous-business-operations-2025"
    },
    {
      id: 2,
      title: "Quantum-AI Integration: The Next Frontier",
      description: "Explore the convergence of quantum computing and artificial intelligence",
      icon: <Sparkles className="w-6 h-6" />,
      category: "Quantum Computing",
      readTime: "12 min read",
      featured: true,
      href: "/blog/quantum-ai-integration-2025"
    },
    {
      id: 3,
      title: "AI Ethics and Governance Framework",
      description: "Building trust in the age of artificial intelligence with robust governance",
      icon: <Shield className="w-6 h-6" />,
      category: "AI Ethics",
      readTime: "10 min read",
      featured: true,
      href: "/blog/ai-ethics-governance-2025"
    }
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newContent.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const currentContent = newContent[currentIndex];
  if (!isVisible) return null;
  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        </div>
      </div>
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left side - Content showcase */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {/* Badge */}
              <div className="flex items-center gap-2 text-sm font-medium text-blue-100">
                <BookOpen className="w-4 h-4" />
                <span>NEW CONTENT</span>
                <TrendingUp className="w-4 h-4" />
                <span>TRENDING NOW</span>
              </div>
              {/* Title */}
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                {currentContent.title}
              </h2>
              {/* Description */}
              <p className="text-lg text-blue-100 leading-relaxed">
                {currentContent.description}
              </p>
              {/* Meta info */}
              <div className="flex items-center gap-4 text-sm text-blue-200">
                <span className="flex items-center gap-1">
                  {currentContent.icon}
                  {currentContent.category}
                </span>
                <span>•</span>
                <span>{currentContent.readTime}</span>
              </div>
              {/* CTA Button */}
              <motion.a
                href={currentContent.href}
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read Article
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
            {/* Dots indicator */}
            <div className="flex gap-2 mt-6">
              {newContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
          {/* Right side - Content preview cards */}
          <div className="flex-1 max-w-md">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center mb-4">Latest Articles</h3>
              {newContent.map((content, index) => (
                <motion.div
                  key={content.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                    index === currentIndex
                      ? 'bg-white/20 border-white/40 scale-105'
                      : 'bg-white/10 border-white/20 hover:bg-white/15'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-blue-200 mt-1">
                      {content.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm mb-1">{content.title}</h4>
                      <p className="text-xs text-blue-200 line-clamp-2">{content.description}</p>
                      <div className="flex items-center gap-2 mt-2 text-xs text-blue-300">
                        <span>{content.category}</span>
                        <span>•</span>
                        <span>{content.readTime}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-200"
        aria-label="Close banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );

};

export default NewBlogContentBanner2025;
