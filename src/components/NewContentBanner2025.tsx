import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NewContentBanner2025: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    {
      title: "🚀 NEW: Revolutionary AI Services 2025",
      description: "Experience next-generation AI with autonomous agents, quantum-enhanced computing, and conscious AI systems",
      link: "/pages/RevolutionaryAIServices2025",
      gradient: "from-purple-600 to-pink-600",
      icon: "🤖"
    },
    {
      title: "⚛️ BREAKTHROUGH: Quantum Computing 2025",
      description: "Witness quantum supremacy with interactive demos and real-world applications that solve impossible problems",
      link: "/pages/QuantumComputingBreakthrough2025",
      gradient: "from-cyan-600 to-blue-600",
      icon: "⚡"
    },
    {
      title: "🧠 ULTIMATE: Neural Interface Revolution",
      description: "Direct brain-computer interfaces enabling seamless mind-AI communication and thought control",
      link: "/pages/NeuralInterfaceRevolution2025",
      gradient: "from-emerald-600 to-teal-600",
      icon: "🧬"
    },
    {
      title: "🌟 REVOLUTIONARY: Tech Showcase 2025",
      description: "Explore our comprehensive showcase of cutting-edge technologies reshaping the future",
      link: "/pages/RevolutionaryTechShowcase2025",
      gradient: "from-orange-600 to-red-600",
      icon: "🚀"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-purple-900 to-violet-900 rounded-2xl mb-12">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10 p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🌟 NEW CONTENT ALERT • JANUARY 2025
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Revolutionary Technology Content
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Discover our latest breakthrough content featuring cutting-edge AI, quantum computing, and neural interfaces
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentBanner}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-5xl">{banners[currentBanner].icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {banners[currentBanner].title}
                      </h3>
                      <p className="text-purple-200 text-lg">
                        {banners[currentBanner].description}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={banners[currentBanner].link}
                      className={`bg-gradient-to-r ${banners[currentBanner].gradient} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                    >
                      Explore Now →
                    </a>
                    <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                    <div className="text-6xl">{banners[currentBanner].icon}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBanner(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentBanner
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {banners.map((banner, index) => (
            <motion.a
              key={index}
              href={banner.link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-gradient-to-r ${banner.gradient} text-white p-4 rounded-lg hover:shadow-lg transition-all duration-300 text-center`}
            >
              <div className="text-2xl mb-2">{banner.icon}</div>
              <div className="text-sm font-semibold">{banner.title.split(':')[1]?.trim()}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewContentBanner2025;