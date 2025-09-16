import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NewContentPromotionBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const promotions = [
    {
      id: 0,
      title: "🚀 NEW: Revolutionary Tech Showcase 2025",
      description: "Experience the future with conscious AI, quantum computing, and neural interfaces",
      link: "/pages/RevolutionaryTechShowcase2025",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/20 to-pink-900/20"
    },
    {
      id: 1,
      title: "⚡ BREAKTHROUGH: Ultimate AI Consciousness 2030",
      description: "Discover the most advanced AI systems that exhibit true consciousness and self-awareness",
      link: "/pages/UltimateAIConsciousness2030",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/20 to-blue-900/20"
    },
    {
      id: 2,
      title: "🌌 REVOLUTIONARY: Interdimensional Computing 2035",
      description: "Computing systems that operate across multiple dimensions for infinite possibilities",
      link: "/pages/InterdimensionalTechRevolution2035",
      color: "from-indigo-600 to-purple-600",
      bgColor: "from-indigo-900/20 to-purple-900/20"
    },
    {
      id: 3,
      title: "🧠 INNOVATION: Neural Interface Revolution 2025",
      description: "Direct brain-computer interfaces that enable seamless human-machine integration",
      link: "/pages/NeuralInterfaceRevolution2025",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/20 to-teal-900/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div
      className="relative overflow-hidden mb-12"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-cyan-600/10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-pink-900/5 backdrop-blur-sm"></div>
      
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            whileHover={{ scale: 1.05 }}
          >
            🌟 NEW CONTENT AVAILABLE • JANUARY 2025
          </motion.div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Revolutionary Technology Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest groundbreaking content featuring the most advanced technologies of 2025-2035
          </p>
        </motion.div>

        {/* Promotional Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className={`bg-gradient-to-br ${promotions[currentSlide].bgColor} backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300`}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <motion.h3
                      className={`text-3xl font-bold mb-4 bg-gradient-to-r ${promotions[currentSlide].color} bg-clip-text text-transparent`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {promotions[currentSlide].title}
                    </motion.h3>
                    <motion.p
                      className="text-lg text-gray-700 mb-6 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {promotions[currentSlide].description}
                    </motion.p>
                    <motion.div
                      className="flex flex-wrap gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <motion.a
                        href={promotions[currentSlide].link}
                        className={`bg-gradient-to-r ${promotions[currentSlide].color} text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Explore Now →
                      </motion.a>
                      <motion.button
                        className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More
                      </motion.button>
                    </motion.div>
                  </div>
                  <div className="relative">
                    <motion.div
                      className={`w-full h-64 bg-gradient-to-br ${promotions[currentSlide].color} rounded-xl flex items-center justify-center text-6xl`}
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {promotions[currentSlide].title.split(' ')[1]}
                    </motion.div>
                    <motion.div
                      className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {promotions.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Quick Access Grid */}
        <motion.div
          className="mt-16"
          variants={containerVariants}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            Quick Access to All New Content
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {promotions.map((promo, index) => (
              <motion.a
                key={promo.id}
                href={promo.link}
                className={`bg-gradient-to-br ${promo.bgColor} backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:border-white/40 transition-all duration-300 text-center`}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`text-2xl mb-2 bg-gradient-to-r ${promo.color} bg-clip-text text-transparent font-bold`}>
                  {promo.title.split(' ')[1]}
                </div>
                <div className="text-sm text-gray-600">
                  {promo.description.substring(0, 60)}...
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NewContentPromotionBanner2025;