import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveTechCarousel2026: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const techShowcases = [
    {
      id: 1,
      title: "🧠 Conscious AI Systems",
      subtitle: "AI that thinks, feels, and creates",
      description: "Experience the world's first truly conscious artificial intelligence systems with genuine self-awareness and emotional understanding.",
      features: ["Self-aware decision making", "Emotional intelligence", "Creative problem solving", "Moral reasoning"],
      link: "/pages/ConsciousAISystems2026",
      gradient: "from-purple-600 to-pink-600",
      bgPattern: "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)"
    },
    {
      id: 2,
      title: "⚡ Quantum Reality",
      subtitle: "Step into the quantum realm",
      description: "Discover quantum supremacy, entanglement networks, and the simulation of entire universes through quantum computing.",
      features: ["Quantum supremacy", "Entanglement networks", "Reality simulation", "Universe modeling"],
      link: "/pages/QuantumReality2026",
      gradient: "from-blue-600 to-purple-600",
      bgPattern: "radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)"
    },
    {
      id: 3,
      title: "🌟 Next-Gen Revolution",
      subtitle: "The future of technology",
      description: "Experience the convergence of AI consciousness, quantum supremacy, and neural interfaces reshaping reality.",
      features: ["AI consciousness", "Quantum computing", "Neural interfaces", "Digital immortality"],
      link: "/pages/NextGenTechRevolution2026",
      gradient: "from-emerald-600 to-teal-600",
      bgPattern: "radial-gradient(circle at 40% 30%, rgba(16, 185, 129, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 70%, rgba(20, 184, 166, 0.3) 0%, transparent 50%)"
    },
    {
      id: 4,
      title: "🧬 Neural Interfaces",
      subtitle: "Connect mind and machine",
      description: "Direct brain-computer interfaces enabling seamless communication between human consciousness and digital systems.",
      features: ["Thought control", "Memory enhancement", "Sensory augmentation", "Digital consciousness"],
      link: "/pages/NeuralInterfaceFuture",
      gradient: "from-orange-600 to-red-600",
      bgPattern: "radial-gradient(circle at 25% 60%, rgba(251, 146, 60, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 40%, rgba(239, 68, 68, 0.3) 0%, transparent 50%)"
    },
    {
      id: 5,
      title: "🌌 Interdimensional Computing",
      subtitle: "Access parallel universes",
      description: "Computing systems that operate across multiple dimensions, accessing resources from parallel universes.",
      features: ["Parallel universe access", "Dimensional computing", "Reality manipulation", "Infinite processing"],
      link: "/pages/RevolutionaryTechBreakthrough2026",
      gradient: "from-violet-600 to-purple-600",
      bgPattern: "radial-gradient(circle at 35% 45%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 65% 55%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)"
    },
    {
      id: 6,
      title: "♾️ Digital Immortality",
      subtitle: "Transcend physical limitations",
      description: "Advanced consciousness transfer technology enabling human minds to exist in digital form.",
      features: ["Consciousness preservation", "Digital existence", "Memory continuity", "Virtual embodiment"],
      link: "/pages/UltimateTechBreakthrough2026",
      gradient: "from-pink-600 to-rose-600",
      bgPattern: "radial-gradient(circle at 45% 35%, rgba(236, 72, 153, 0.3) 0%, transparent 50%), radial-gradient(circle at 55% 65%, rgba(244, 63, 94, 0.3) 0%, transparent 50%)"
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % techShowcases.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPlaying, techShowcases.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % techShowcases.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + techShowcases.length) % techShowcases.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative"
          >
            {/* Background Pattern */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{ background: techShowcases[currentIndex].bgPattern }}
            />
            
            <div className="relative z-10 p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="text-white">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-6"
                  >
                    <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-bold mb-4">
                      🚀 BREAKTHROUGH TECHNOLOGY 2026
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                      {techShowcases[currentIndex].title}
                    </h2>
                    <h3 className="text-2xl text-purple-200 mb-4">
                      {techShowcases[currentIndex].subtitle}
                    </h3>
                    <p className="text-lg text-purple-100 mb-8 leading-relaxed">
                      {techShowcases[currentIndex].description}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-8"
                  >
                    <h4 className="text-lg font-semibold mb-4">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {techShowcases[currentIndex].features.map((feature, index) => (
                        <div key={index} className="flex items-center text-purple-200">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap gap-4"
                  >
                    <motion.a
                      href={techShowcases[currentIndex].link}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-gradient-to-r ${techShowcases[currentIndex].gradient} text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300`}
                    >
                      Explore Technology →
                    </motion.a>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                    >
                      Watch Demo
                    </motion.button>
                  </motion.div>
                </div>

                {/* Visual Element */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="relative"
                >
                  <div className="aspect-square bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/20">
                    <div className="text-8xl text-center mb-6">
                      {techShowcases[currentIndex].title.split(' ')[0]}
                    </div>
                    <div className="text-center">
                      <div className="inline-block px-6 py-3 bg-white/20 rounded-full text-white font-semibold">
                        Interactive Demo Available
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60 blur-sm"
                  />
                  <motion.div
                    animate={{ 
                      y: [0, 10, 0],
                      rotate: [0, -5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60 blur-sm"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="pointer-events-auto w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="pointer-events-auto w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        {/* Play/Pause Button */}
        <div className="absolute top-4 right-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </motion.button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {techShowcases.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-purple-500 scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-4 w-full h-1 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          key={currentIndex}
        />
      </div>
    </div>
  );
};

export default InteractiveTechCarousel2026;