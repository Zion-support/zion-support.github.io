import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NewContentBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const newContent = [
    {
      title: "Advanced Biotech Revolution 2026",
      description: "Discover revolutionary breakthroughs in gene editing, synthetic biology, and regenerative medicine",
      icon: "🧬",
      color: "from-emerald-500 to-teal-500",
      link: "/pages/AdvancedBiotechRevolution2026",
      badge: "NEW"
    },
    {
      title: "Advanced Space Technology 2026",
      description: "Experience cutting-edge space exploration technologies and interplanetary missions",
      icon: "🚀",
      color: "from-blue-500 to-purple-500",
      link: "/pages/AdvancedSpaceTech2026",
      badge: "HOT"
    },
    {
      title: "Advanced Robotics 2026",
      description: "Explore intelligent robots that work alongside humans and revolutionize industries",
      icon: "🤖",
      color: "from-orange-500 to-red-500",
      link: "/pages/AdvancedRobotics2026",
      badge: "TRENDING"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [newContent.length]);

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-90"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white text-lg font-bold mb-4 animate-pulse">
            🎉 EXCLUSIVE NEW CONTENT • 2026 LAUNCH
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Revolutionary Technology Content
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto">
            Experience the most advanced technology content featuring cutting-edge innovations 
            in biotechnology, space exploration, and robotics that will reshape our future.
          </p>
        </div>

        {/* Content Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Content Info */}
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      newContent[currentSlide].badge === 'NEW' ? 'bg-emerald-500' :
                      newContent[currentSlide].badge === 'HOT' ? 'bg-red-500' :
                      'bg-orange-500'
                    } text-white`}>
                      {newContent[currentSlide].badge}
                    </span>
                    <div className={`text-4xl ${newContent[currentSlide].color.replace('from-', 'text-').replace(' to-', '-')}`}>
                      {newContent[currentSlide].icon}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {newContent[currentSlide].title}
                  </h3>
                  <p className="text-lg text-white/90 mb-6">
                    {newContent[currentSlide].description}
                  </p>
                  <a
                    href={newContent[currentSlide].link}
                    className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg"
                  >
                    Explore Now →
                  </a>
                </div>

                {/* Visual Element */}
                <div className="text-center">
                  <div className={`text-8xl mb-4 animate-bounce ${newContent[currentSlide].color.replace('from-', 'text-').replace(' to-', '-')}`}>
                    {newContent[currentSlide].icon}
                  </div>
                  <div className="text-white/70 text-sm">
                    Interactive Content Available
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {newContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-3 gap-4 mt-12">
          {newContent.map((content, index) => (
            <motion.a
              key={index}
              href={content.link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-gradient-to-r ${content.color} rounded-xl p-6 text-white text-center hover:shadow-lg transition-all duration-300`}
            >
              <div className="text-4xl mb-3">{content.icon}</div>
              <h4 className="text-lg font-bold mb-2">{content.title}</h4>
              <p className="text-sm opacity-90">{content.description}</p>
            </motion.a>
          ))}
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NewContentBanner2026;