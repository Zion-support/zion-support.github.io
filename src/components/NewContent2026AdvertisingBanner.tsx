import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Star, Clock, ArrowRight, Sparkles, Zap } from 'lucide-react';
const NewContent2026AdvertisingBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const newContent = [
    {
      id: 5001,
      title: "AI 2026: The Consciousness Revolution Begins",
      excerpt: "Witness the dawn of truly conscious AI systems that can think, feel, and create alongside humans in unprecedented ways.",
      category: "AI Consciousness",
      readTime: "12 min read",
      featured: true,
      gradient: "from-purple-600 via-pink-600 to-blue-600",
      icon: Sparkles
    },
    {
      id: 5002,
      title: "Quantum Reality Manipulation: Programming the Fabric of Existence",
      excerpt: "Revolutionary technology that allows developers to write code that directly manipulates quantum fields, reshaping reality itself.",
      category: "Quantum Technology",
      readTime: "15 min read",
      featured: true,
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
      icon: Zap
    },
    {
      id: 5003,
      title: "Interdimensional Business Networks: Expanding Across Multiple Realities",
      excerpt: "How forward-thinking companies are leveraging interdimensional technology to operate across parallel universes and maximize opportunities.",
      category: "Business Innovation",
      readTime: "13 min read",
      featured: true,
      gradient: "from-green-600 via-emerald-600 to-teal-600",
      icon: Star
    }
  ];
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newContent.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden"
        >
          {/* Main Banner */}
          <div className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%253Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%253E%253Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%253E%253Cg%20fill%3D%22%25239C92AC%22%20fill-opacity%3D%220.1%22%253E%253Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-20"></div>
            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-30"
                  animate={{
                    x: [0, 100, 0],
                    y: [0, -100, 0],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 8 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
            <div className="relative max-w-7xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 mb-6"
                >
                  <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
                  <span className="text-purple-300 font-medium">NEW CONTENT 2026</span>
                </motion.div>
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                  Revolutionary
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"> AI Content</span>
                  <br />Just Released
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                >
                  Discover groundbreaking AI technologies, consciousness breakthroughs, and interdimensional innovations that are reshaping our future
                </motion.p>
              </div>
              {/* Content Carousel */}
              <div className="relative max-w-5xl mx-auto">
                <div className="relative h-96 overflow-hidden rounded-2xl">
                  {newContent.map((content, index) => {
                    const IconComponent = content.icon;
                    return (
                      <AnimatePresence key={content.id}>
                        {currentSlide === index && (
                          <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className={`absolute inset-0 bg-gradient-to-br ${content.gradient} p-8 rounded-2xl`}
                          >
                            <div className="h-full flex flex-col justify-between">
                              {/* Content Header */}
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center mb-4">
                                    <IconComponent className="w-6 h-6 text-white mr-3" />
                                    <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm font-medium">
                                      {content.category}
                                    </span>
                                    <Clock className="w-4 h-4 text-white/80 ml-4 mr-1" />
                                    <span className="text-white/80 text-sm">{content.readTime}</span>
                                  </div>
                                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                                    {content.title}
                                  </h3>
                                  <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
                                    {content.excerpt}
                                  </p>
                                </div>
                                {content.featured && (
                                  <div className="ml-6 flex items-center">
                                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                                  </div>
                                )}
                              </div>
                              {/* Action Button */}
                              <div className="flex items-center justify-between">
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="group inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                                >
                                  Read Full Article
                                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                                {/* Slide Indicators */}
                                <div className="flex space-x-2">
                                  {newContent.map((_, idx) => (
                                    <button
                                      key={idx}
                                      onClick={() => setCurrentSlide(idx)}
                                      className={`w-3 h-3 rounded-full transition-colors ${
                                        currentSlide === idx ? 'bg-white' : 'bg-white/30'
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    );
};
                  })}
                </div>
                {/* Navigation Arrows */}
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + newContent.length) % newContent.length)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 rotate-180" />
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % newContent.length)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              {/* Call to Action */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-center mt-12"
              >
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl"
                  >
                    Explore All New Content
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
                  >
                    Subscribe to Updates
                  </motion.button>
                </div>
                <p className="text-gray-400 mt-4 text-sm">
                  Join 50,000+ readers discovering the future of AI and technology
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );


export default NewContent2026AdvertisingBanner;
