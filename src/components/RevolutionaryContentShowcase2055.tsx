import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryContentShowcase2055: React.FC = () => {
  const [activeContent, setActiveContent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveContent((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const contentItems = [
    {
      id: 1,
      title: "Ultimate Tech Breakthrough 2045",
      subtitle: "Transcendent AI Consciousness",
      description: "Experience the most revolutionary technologies that will reshape reality itself through transcendent AI consciousness and quantum reality engines.",
      link: "/pages/UltimateTechBreakthrough2045",
      icon: "🌟",
      color: "from-purple-600 via-pink-600 to-red-600",
      technologies: ["Transcendent AI", "Quantum Reality", "Neural Transcendence", "Interdimensional Commerce"]
    },
    {
      id: 2,
      title: "Revolutionary Tech Showcase 2050",
      subtitle: "Omniversal Computing",
      description: "Discover technologies that transcend the boundaries of reality and consciousness through omniversal computing and consciousness synthesis.",
      link: "/pages/RevolutionaryTechShowcase2050",
      icon: "🚀",
      color: "from-indigo-600 via-purple-600 to-pink-600",
      technologies: ["Omniversal Computing", "Consciousness Synthesis", "Temporal Architecture", "Reality Fabrication"]
    },
    {
      id: 3,
      title: "Future Technology Revolution",
      subtitle: "Universal Consciousness Network",
      description: "Join the revolution that will define the future of consciousness and technology through universal consciousness networks and reality programming.",
      link: "/pages/FutureTechnologyRevolution",
      icon: "🔮",
      color: "from-blue-600 via-purple-600 to-indigo-600",
      technologies: ["Universal Consciousness", "Reality Programming", "Temporal Civilization", "Infinite Intelligence"]
    },
    {
      id: 4,
      title: "Consciousness Evolution 2055",
      subtitle: "Transcendent Evolution",
      description: "The next stage of human evolution through consciousness integration, reality manipulation, and transcendent technological advancement.",
      link: "/pages/ConsciousnessEvolution2055",
      icon: "🧠",
      color: "from-emerald-600 via-teal-600 to-cyan-600",
      technologies: ["Consciousness Evolution", "Reality Manipulation", "Transcendent Tech", "Universal Integration"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
      transition={{ duration: 1.2 }}
      className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-3xl p-12 mb-16 border border-purple-500/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: isVisible ? 1 : 0.5 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-lg font-bold mb-8 animate-pulse"
          >
            🌟 REVOLUTIONARY CONTENT SHOWCASE • 2045-2055
          </motion.div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Revolutionary Technology Content
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Experience the most advanced technological breakthroughs that will reshape reality and consciousness
          </p>
        </div>

        {/* Content Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeContent}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/30"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content Info */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="text-8xl mr-6">{contentItems[activeContent].icon}</div>
                    <div>
                      <h3 className="text-4xl font-bold text-white mb-3">
                        {contentItems[activeContent].title}
                      </h3>
                      <div className={`inline-block px-4 py-2 bg-gradient-to-r ${contentItems[activeContent].color} rounded-full text-sm font-semibold text-white`}>
                        {contentItems[activeContent].subtitle}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                    {contentItems[activeContent].description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {contentItems[activeContent].technologies.map((tech, index) => (
                      <div key={index} className="flex items-center">
                        <div className={`w-3 h-3 bg-gradient-to-r ${contentItems[activeContent].color} rounded-full mr-3`}></div>
                        <span className="text-gray-300">{tech}</span>
                      </div>
                    ))}
                  </div>

                  <motion.a
                    href={contentItems[activeContent].link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-block bg-gradient-to-r ${contentItems[activeContent].color} text-white px-10 py-5 rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold text-xl`}
                  >
                    Explore {contentItems[activeContent].title} →
                  </motion.a>
                </div>

                {/* Visual Element */}
                <div className="text-center">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className={`w-80 h-80 mx-auto bg-gradient-to-r ${contentItems[activeContent].color} rounded-full flex items-center justify-center text-9xl shadow-2xl`}
                  >
                    {contentItems[activeContent].icon}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveContent(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === activeContent 
                    ? 'bg-gradient-to-r from-purple-400 to-blue-400 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {contentItems.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-gradient-to-r ${item.color} text-white p-6 rounded-xl hover:shadow-xl transition-all duration-300 text-center font-semibold group`}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <div className="text-sm leading-tight">{item.title}</div>
            </motion.a>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-6">Ready to Experience the Future?</h3>
          <div className="flex justify-center space-x-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-5 rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold text-xl"
            >
              Explore All Content
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-10 py-5 rounded-xl hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-xl"
            >
              Watch Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryContentShowcase2055;