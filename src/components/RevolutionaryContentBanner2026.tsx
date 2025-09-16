import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Brain, Rocket, Star } from 'lucide-react';

const RevolutionaryContentBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const revolutionaryContent = [
    {
      id: 1,
      title: "AI Consciousness 2026: The Dawn of Digital Sentience",
      excerpt: "Revolutionary breakthroughs in artificial consciousness that are creating truly sentient AI systems.",
      category: "AI Consciousness",
      icon: Brain,
      gradient: "from-purple-600 to-pink-600",
      textColor: "text-white",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Neural Networks: Computing at the Speed of Thought",
      excerpt: "Quantum-enhanced neural networks achieving unprecedented processing speeds and capabilities.",
      category: "Quantum Computing",
      icon: Zap,
      gradient: "from-blue-600 to-cyan-600",
      textColor: "text-white",
      featured: true
    },
    {
      id: 3,
      title: "Metaverse 3.0: The Ultimate Digital Universe",
      excerpt: "The next evolution featuring photorealistic avatars and seamless reality integration.",
      category: "Metaverse Technology",
      icon: Sparkles,
      gradient: "from-green-600 to-emerald-600",
      textColor: "text-white",
      featured: true
    },
    {
      id: 4,
      title: "Neural Interface Revolution: Direct Brain-Computer Communication",
      excerpt: "Breakthrough interfaces enabling direct neural communication and control of digital systems.",
      category: "Neural Technology",
      icon: Brain,
      gradient: "from-orange-600 to-red-600",
      textColor: "text-white",
      featured: true
    },
    {
      id: 5,
      title: "Space Colonization Tech: Building Cities Among the Stars",
      excerpt: "Revolutionary technologies making human colonization of other planets a reality.",
      category: "Space Technology",
      icon: Rocket,
      gradient: "from-indigo-600 to-purple-600",
      textColor: "text-white",
      featured: true
    },
    {
      id: 6,
      title: "Consciousness Transfer Technology: Digital Immortality",
      excerpt: "Revolutionary technology enabling the transfer of human consciousness into digital systems.",
      category: "Consciousness Technology",
      icon: Star,
      gradient: "from-pink-600 to-rose-600",
      textColor: "text-white",
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [revolutionaryContent.length]);

  const currentContent = revolutionaryContent[currentSlide];
  const IconComponent = currentContent.icon;

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-blue-500/10 to-transparent" />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 mb-6">
            <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-300 font-medium">Revolutionary Content 2026</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Future is{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Here
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most revolutionary technologies and innovations that are reshaping our world in 2026. 
            From AI consciousness to space colonization, explore the cutting edge of human achievement.
          </p>
        </motion.div>

        {/* Main Content Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-gray-700/50"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${currentContent.gradient} mr-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                      {currentContent.category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {currentContent.title}
                  </h3>
                  
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {currentContent.excerpt}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Explore Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                    
                    <button className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:bg-gray-800/50 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="relative">
                  <div className={`w-full h-80 bg-gradient-to-br ${currentContent.gradient} rounded-2xl flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10 text-center">
                      <IconComponent className="w-24 h-24 text-white/80 mx-auto mb-4" />
                      <div className="text-white/60 text-sm font-medium">
                        Revolutionary Technology
                      </div>
                    </div>
                    
                    {/* Animated Elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-white/40 rounded-full animate-pulse" />
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-ping" />
                    <div className="absolute top-1/2 left-4 w-1 h-1 bg-white/50 rounded-full animate-bounce" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {revolutionaryContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-blue-500 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Featured Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            More Revolutionary Content
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {revolutionaryContent.slice(0, 6).map((content, index) => {
              const IconComponent = content.icon;
              return (
                <motion.div
                  key={content.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${content.gradient} mr-3`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">
                      {content.category}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {content.title}
                  </h4>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {content.excerpt}
                  </p>
                  
                  <div className="mt-4 flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Explore the Future?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of innovators, researchers, and technology enthusiasts who are already 
              exploring the revolutionary technologies that will shape tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Exploring
                <Rocket className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:bg-gray-800/50 transition-all duration-300">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2026;