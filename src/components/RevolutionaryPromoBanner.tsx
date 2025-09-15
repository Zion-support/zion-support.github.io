import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryPromoBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const promotionalContent = [
    {
      id: 1,
      title: "🚀 NEW: Advanced Robotics 2026",
      subtitle: "Experience the future of autonomous systems",
      description: "Revolutionary robots that learn, adapt, and perform complex tasks with human-like precision",
      link: "/pages/AdvancedRobotics2026",
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 2,
      title: "🌌 NEW: Space Tech Innovation 2026",
      subtitle: "Pioneering the future of space exploration",
      description: "Revolutionary technologies enabling sustainable space travel and interplanetary colonization",
      link: "/pages/SpaceTechInnovation2026",
      gradient: "from-purple-600 to-indigo-600",
      bgGradient: "from-purple-500/20 to-indigo-500/20"
    },
    {
      id: 3,
      title: "🧬 NEW: Biotech Revolution 2026",
      subtitle: "Transforming healthcare and agriculture",
      description: "Cutting-edge biotechnology, gene editing, and synthetic biology innovations",
      link: "/pages/BiotechRevolution2026",
      gradient: "from-green-600 to-emerald-600",
      bgGradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      id: 4,
      title: "🧠 NEW: Next-Gen AI Revolution 2026",
      subtitle: "The future of artificial intelligence",
      description: "Experience AI that transcends human capabilities with autonomous reasoning and quantum processing",
      link: "/pages/NextGenAIRevolution2026",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 5,
      title: "⚡ NEW: Quantum Computing Revolution 2026",
      subtitle: "Solving impossible problems in real-time",
      description: "Breakthrough quantum technologies that are enabling solutions to previously impossible challenges",
      link: "/pages/QuantumComputingRevolution2026",
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-500/20 to-blue-500/20"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotionalContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden mb-12">
      <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
              🌟 REVOLUTIONARY BREAKTHROUGH CONTENT 2026
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience the Future of Technology
            </h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Discover our groundbreaking new content showcasing the most advanced technologies 
              that are reshaping industries and transforming the world.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className={`text-3xl font-bold mb-4 bg-gradient-to-r ${promotionalContent[currentSlide].gradient} bg-clip-text text-transparent`}>
                      {promotionalContent[currentSlide].title}
                    </h3>
                    <h4 className="text-xl font-semibold mb-4 text-purple-200">
                      {promotionalContent[currentSlide].subtitle}
                    </h4>
                    <p className="text-lg opacity-90 mb-6">
                      {promotionalContent[currentSlide].description}
                    </p>
                    <a
                      href={promotionalContent[currentSlide].link}
                      className={`inline-block bg-gradient-to-r ${promotionalContent[currentSlide].gradient} px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                    >
                      Explore Now →
                    </a>
                  </div>
                  <div className="text-center">
                    <div className="text-8xl mb-4">
                      {currentSlide === 0 && "🤖"}
                      {currentSlide === 1 && "🚀"}
                      {currentSlide === 2 && "🧬"}
                      {currentSlide === 3 && "🧠"}
                      {currentSlide === 4 && "⚡"}
                    </div>
                    <div className="flex justify-center space-x-2">
                      {promotionalContent.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide ? 'bg-white' : 'bg-white/30'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quick Access Links */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
            {promotionalContent.map((item, index) => (
              <a
                key={item.id}
                href={item.link}
                className={`bg-gradient-to-r ${item.bgGradient} backdrop-blur-sm text-white px-4 py-3 rounded-lg hover:scale-105 transition-all duration-300 font-semibold text-center border border-white/20`}
              >
                {item.title.split(':')[1]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryPromoBanner;