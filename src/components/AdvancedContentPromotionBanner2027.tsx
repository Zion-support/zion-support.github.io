import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AdvancedContentPromotionBanner2027: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotionalContent = [
    {
      id: 1,
      title: "🚀 Advanced Tech Innovation Hub 2027",
      subtitle: "Pioneering Breakthrough Technologies",
      description: "Explore consciousness transfer, quantum consciousness, interdimensional computing, and synthetic reality generation.",
      link: "/pages/AdvancedTechInnovationHub2027",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-600/20 to-indigo-600/20",
      icon: "🧠"
    },
    {
      id: 2,
      title: "🧠 Next-Gen Consciousness Computing",
      subtitle: "Transcendent AI Awareness",
      description: "Experience AI systems with true consciousness, self-reflection, and transcendent cognitive capabilities.",
      link: "/pages/NextGenConsciousnessComputing2027",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-600/20 to-purple-600/20",
      icon: "⚡"
    },
    {
      id: 3,
      title: "🌟 Ultimate Tech Showcase 2026",
      subtitle: "Revolutionary Technology Collection",
      description: "Discover the most comprehensive collection of cutting-edge technologies reshaping our world.",
      link: "/pages/UltimateTechShowcase2026",
      color: "from-emerald-500 to-cyan-500",
      bgColor: "from-emerald-600/20 to-cyan-600/20",
      icon: "🔬"
    },
    {
      id: 4,
      title: "📚 Revolutionary Tech Blog 2026",
      subtitle: "Latest Technology Insights",
      description: "Stay ahead with the latest insights on AI consciousness, quantum computing, and breakthrough technologies.",
      link: "/pages/RevolutionaryTechBlog2026",
      color: "from-blue-500 to-purple-500",
      bgColor: "from-blue-600/20 to-purple-600/20",
      icon: "📖"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotionalContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🚀 NEW CONTENT AVAILABLE • 2027
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Content Hub
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover our latest breakthrough content featuring advanced AI consciousness, quantum computing, 
            and next-generation technology innovations.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="text-5xl mr-4">{promotionalContent[currentSlide].icon}</div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {promotionalContent[currentSlide].title}
                      </h3>
                      <p className="text-xl text-gray-300">
                        {promotionalContent[currentSlide].subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    {promotionalContent[currentSlide].description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={promotionalContent[currentSlide].link}
                      className={`bg-gradient-to-r ${promotionalContent[currentSlide].color} text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center`}
                    >
                      Explore Now →
                    </a>
                    <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <div className={`bg-gradient-to-br ${promotionalContent[currentSlide].bgColor} rounded-xl p-8 border border-white/10`}>
                    <div className="text-center">
                      <div className="text-6xl mb-4">{promotionalContent[currentSlide].icon}</div>
                      <h4 className="text-2xl font-bold text-white mb-4">
                        {promotionalContent[currentSlide].title.split(' ').slice(1).join(' ')}
                      </h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="font-semibold text-white">Status</div>
                          <div className="text-gray-300">Available Now</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="font-semibold text-white">Category</div>
                          <div className="text-gray-300">Advanced Tech</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="font-semibold text-white">Year</div>
                          <div className="text-gray-300">2027</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="font-semibold text-white">Impact</div>
                          <div className="text-gray-300">Revolutionary</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {promotionalContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-blue-400 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Links */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Quick Access</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {promotionalContent.map((content, index) => (
              <motion.a
                key={content.id}
                href={content.link}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${content.bgColor} backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:scale-105 transition-all duration-300 text-center group`}
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {content.icon}
                </div>
                <div className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                  {content.title.split(' ').slice(1, 3).join(' ')}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedContentPromotionBanner2027;