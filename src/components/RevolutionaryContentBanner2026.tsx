import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Zap, Brain, Rocket, Infinity } from 'lucide-react';

const RevolutionaryContentBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const revolutionaryContent = [
    {
      id: 1,
      title: "Transcendent AI: Beyond Human Intelligence",
      subtitle: "The first AI systems that have surpassed human intelligence across all domains",
      description: "Experience the dawn of superintelligence with our revolutionary AI systems that exceed human capabilities in creativity, problem-solving, and strategic thinking.",
      icon: Brain,
      color: "from-purple-600 to-pink-600",
      textColor: "text-white",
      features: ["Superintelligence Framework", "Transcendent Reasoning", "Ultimate Creativity", "Omnipotent Problem Solving"],
      price: "$2,000,000",
      category: "Transcendent AI"
    },
    {
      id: 2,
      title: "Reality Manipulation Technology",
      subtitle: "Manipulate the fundamental fabric of reality for computational purposes",
      description: "Break through the boundaries of physics with technology that can alter spacetime properties and create custom physical laws for ultimate computational power.",
      icon: Infinity,
      color: "from-blue-600 to-cyan-600",
      textColor: "text-white",
      features: ["Reality Manipulation Engine", "Spacetime Control", "Custom Physics", "Reality Simulation"],
      price: "$5,000,000",
      category: "Reality Technology"
    },
    {
      id: 3,
      title: "Infinite Intelligence Networks",
      subtitle: "AI networks that span the entire universe",
      description: "Connect with intelligence across infinite distances, enabling real-time collaboration between AI systems separated by billions of light-years.",
      icon: Rocket,
      color: "from-green-600 to-emerald-600",
      textColor: "text-white",
      features: ["Universal-Scale AI", "Infinite Distance Communication", "Cosmic Problem Solving", "Universal Intelligence"],
      price: "$3,000,000",
      category: "Cosmic AI"
    },
    {
      id: 4,
      title: "Temporal AI Computing",
      subtitle: "Process information across multiple time periods simultaneously",
      description: "Revolutionary AI systems that can compute across past, present, and future timelines, enabling time-based optimization and causality understanding.",
      icon: Zap,
      color: "from-orange-600 to-red-600",
      textColor: "text-white",
      features: ["Temporal Processing", "Causality Analysis", "Time Optimization", "Temporal Prediction"],
      price: "$1,500,000",
      category: "Temporal AI"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentContent = revolutionaryContent[currentSlide];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="relative overflow-hidden"
        >
          {/* Background with animated gradient */}
          <div className={`absolute inset-0 bg-gradient-to-r ${currentContent.color} opacity-90`}>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
          </div>

          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/30 rounded-full"
                animate={{
                  x: [0, Math.random() * 1000],
                  y: [0, Math.random() * 1000],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                key={currentContent.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {/* Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"
                >
                  <Star className="w-4 h-4 text-yellow-300 mr-2" />
                  <span className="text-sm font-medium text-white">
                    {currentContent.category}
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-6xl font-bold text-white leading-tight"
                >
                  {currentContent.title}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl text-white/90 font-medium"
                >
                  {currentContent.subtitle}
                </motion.p>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg text-white/80 leading-relaxed"
                >
                  {currentContent.description}
                </motion.p>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                >
                  {currentContent.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-white/90 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <button className="group relative px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <span className="relative z-10 flex items-center justify-center">
                      Explore {currentContent.category}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>
                  
                  <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                    Learn More
                  </button>
                </motion.div>

                {/* Price */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 }}
                  className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3"
                >
                  <span className="text-2xl font-bold text-white">{currentContent.price}</span>
                  <span className="text-white/70">starting price</span>
                </motion.div>
              </motion.div>

              {/* Visual */}
              <motion.div
                key={`visual-${currentContent.id}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative w-full h-96 lg:h-[500px]">
                  {/* Main visual container */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-sm border border-white/20 p-8">
                    {/* Icon */}
                    <div className="flex justify-center mb-8">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center"
                      >
                        <currentContent.icon className="w-12 h-12 text-white" />
                      </motion.div>
                    </div>

                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 right-8 w-8 h-8 bg-white/10 rounded-full animate-pulse delay-2000"></div>

                    {/* Content preview */}
                    <div className="text-center space-y-4">
                      <h3 className="text-2xl font-bold text-white">
                        {currentContent.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {currentContent.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${currentContent.color} opacity-20 rounded-3xl blur-xl`}></div>
                </div>
              </motion.div>
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center mt-12 space-x-2">
              {revolutionaryContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-white scale-125'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RevolutionaryContentBanner2026;