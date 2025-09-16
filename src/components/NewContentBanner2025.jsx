import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Brain, Globe, Rocket } from 'lucide-react';

const NewContentBanner2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const bannerContent = [
    {
      id: 1,
      title: "🚀 Revolutionary Tech Content Just Dropped!",
      subtitle: "7 New Cutting-Edge Articles & 8 Advanced AI Services",
      description: "Explore the future with our latest metaverse, quantum AI, and autonomous systems content",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-purple-600 to-pink-600",
      textColor: "text-white"
    },
    {
      id: 2,
      title: "🧠 Autonomous AI Agents Are Here",
      subtitle: "Self-Managing Teams That Drive Innovation",
      description: "Discover how AI agents can lead departments and make strategic decisions autonomously",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-600 to-cyan-600",
      textColor: "text-white"
    },
    {
      id: 3,
      title: "🌐 Metaverse Business Revolution",
      subtitle: "Virtual Commerce & Immersive Experiences",
      description: "Transform your business with virtual storefronts and immersive customer experiences",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-600 to-emerald-600",
      textColor: "text-white"
    },
    {
      id: 4,
      title: "⚡ Edge Computing at Light Speed",
      subtitle: "Real-Time AI Processing & Ultra-Low Latency",
      description: "Experience computing at the speed of thought with our edge computing solutions",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-600 to-red-600",
      textColor: "text-white"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerContent.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentBanner = bannerContent[currentSlide];

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className={`relative bg-gradient-to-r ${currentBanner.color} p-6 rounded-2xl shadow-2xl`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%253Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%253E%253Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%253E%253Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.1%22%253E%253Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')]"></div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="text-white"
                  >
                    {currentBanner.icon}
                  </motion.div>
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-yellow-300" />
                    <span className="text-yellow-300 font-semibold text-sm">NEW CONTENT</span>
                  </div>
                </div>

                <h2 className={`text-2xl font-bold ${currentBanner.textColor} mb-2`}>
                  {currentBanner.title}
                </h2>
                <p className={`text-lg font-semibold ${currentBanner.textColor} mb-2`}>
                  {currentBanner.subtitle}
                </p>
                <p className={`text-sm ${currentBanner.textColor} opacity-90 mb-4`}>
                  {currentBanner.description}
                </p>

                <div className="flex items-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-gray-100 transition-colors"
                  >
                    <span>Explore Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                  <button className="text-white hover:text-gray-200 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="hidden md:block">
                <motion.div
                  animate={{ 
                  transition={{ 
                    ease: "easeInOut"
                  }}
                  className="text-white opacity-20"
                >
                  <div className="w-32 h-32 rounded-full border-4 border-white flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center">
                        <Sparkles className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {bannerContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white opacity-50 hover:opacity-75'
                }`}
              />
            ))}
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default NewContentBanner2025;