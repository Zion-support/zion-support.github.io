import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveContentShowcase2025: React.FC = () => {
  const [currentContent, setCurrentContent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const contentItems = [
    {
      id: 1,
      title: "AI Future Trends 2025",
      description: "Discover the revolutionary AI trends that will reshape industries and transform businesses in 2025 and beyond",
      icon: "🔮",
      color: "from-purple-500 to-pink-500",
      href: "/pages/AIFutureTrends2025",
      features: ["Synthetic Intelligence", "Edge AI Revolution", "Autonomous AI Agents", "Neural Interface AI"]
    },
    {
      id: 2,
      title: "Advanced Analytics Insights",
      description: "Transform your data into actionable insights with cutting-edge analytics solutions and AI-powered predictions",
      icon: "📊",
      color: "from-blue-500 to-cyan-500",
      href: "/pages/AdvancedAnalyticsInsights2025",
      features: ["Predictive Analytics", "Real-time Intelligence", "AI-Powered Insights", "Advanced Visualization"]
    },
    {
      id: 3,
      title: "Innovation Showcase 2025",
      description: "Explore breakthrough technologies and innovations that are defining the future of business and society",
      icon: "🚀",
      color: "from-indigo-500 to-purple-500",
      href: "/pages/InnovationShowcase2025",
      features: ["Consciousness AI", "Quantum Reality", "Neural Augmentation", "Synthetic Universes"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % contentItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [contentItems.length]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🌟 INTERACTIVE CONTENT SHOWCASE • 2025
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            🚀 Revolutionary Content Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl opacity-90 max-w-4xl mx-auto"
          >
            Experience our groundbreaking content with interactive showcases, dynamic animations, 
            and immersive technology demonstrations
          </motion.p>
        </div>

        {/* Interactive Content Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentContent}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.9, type: "spring" }}
                      className="text-8xl"
                    >
                      {contentItems[currentContent].icon}
                    </motion.div>
                    <div>
                      <motion.h3
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.1 }}
                        className="text-3xl font-bold"
                      >
                        {contentItems[currentContent].title}
                      </motion.h3>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3 }}
                        className="flex space-x-2 mt-2"
                      >
                        {contentItems.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentContent(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === currentContent ? 'bg-white' : 'bg-white/30'
                            }`}
                          />
                        ))}
                      </motion.div>
                    </div>
                  </div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="text-lg opacity-90 leading-relaxed"
                  >
                    {contentItems[currentContent].description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.7 }}
                    className="grid grid-cols-2 gap-3"
                  >
                    {contentItems[currentContent].features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.9 + index * 0.1 }}
                        className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-sm border border-white/20"
                      >
                        ✨ {feature}
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.1 }}
                  >
                    <a
                      href={contentItems[currentContent].href}
                      className={`inline-block bg-gradient-to-r ${contentItems[currentContent].color} text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-lg hover:scale-105 transform`}
                    >
                      🚀 Explore {contentItems[currentContent].title.split(' ')[0]} →
                    </a>
                  </motion.div>
                </div>

                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3, type: "spring", stiffness: 100 }}
                    className={`bg-gradient-to-br ${contentItems[currentContent].color} rounded-2xl p-8 text-white relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 text-center">
                      <div className="text-6xl mb-4">{contentItems[currentContent].icon}</div>
                      <h4 className="text-2xl font-bold mb-4">{contentItems[currentContent].title}</h4>
                      <p className="opacity-90 mb-6">
                        {contentItems[currentContent].description}
                      </p>
                      <div className="space-y-2">
                        {contentItems[currentContent].features.map((feature, index) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 2.3 + index * 0.1 }}
                            className="bg-white/20 rounded-lg p-2 text-sm"
                          >
                            ⭐ {feature}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          className="flex justify-center space-x-4 mt-12"
        >
          {contentItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentContent(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                index === currentContent
                  ? 'bg-white text-gray-900 shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {item.icon} {item.title.split(' ')[0]}
            </button>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform">
            🎯 Get Exclusive Access to All Revolutionary Content →
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InteractiveContentShowcase2025;