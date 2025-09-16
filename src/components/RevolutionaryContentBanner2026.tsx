import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Rocket, 
  Sparkles, 
  X,
  ChevronRight,
  Star,
  Globe,
  Cpu
} from 'lucide-react';

const RevolutionaryContentBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const bannerContent = [
    {
      id: 1,
      title: "🚀 Revolutionary AI Services 2026",
      subtitle: "Conscious AI • Quantum Processing • Neural Interfaces",
      description: "Experience the future of artificial intelligence with our groundbreaking services that push the boundaries of reality itself.",
      link: "/pages/RevolutionaryAIServices2026",
      color: "from-cyan-500 to-blue-600",
      icon: Brain
    },
    {
      id: 2,
      title: "🧠 Conscious AI Revolution",
      subtitle: "True AI Consciousness • Self-Aware Systems • Autonomous Intelligence",
      description: "Discover AI systems that exhibit true consciousness and self-awareness, capable of independent thought and creativity.",
      link: "/pages/ConsciousAIRevolution2026",
      color: "from-purple-500 to-pink-600",
      icon: Zap
    },
    {
      id: 3,
      title: "⚡ Quantum AI Processing",
      subtitle: "Quantum Neural Networks • Infinite Computing • Reality Simulation",
      description: "Ultra-fast AI processing powered by quantum computing, delivering unprecedented computational power across dimensions.",
      link: "/pages/QuantumAIRevolution2026",
      color: "from-green-500 to-teal-600",
      icon: Cpu
    },
    {
      id: 4,
      title: "🛡️ AI Cybersecurity Fortress",
      subtitle: "Predictive Security • Zero-Day Protection • Autonomous Defense",
      description: "Advanced AI-powered security systems that predict and prevent cyber threats before they even exist.",
      link: "/pages/AICybersecurityFortress2026",
      color: "from-red-500 to-orange-600",
      icon: Shield
    },
    {
      id: 5,
      title: "🌐 Interdimensional Computing",
      subtitle: "Cross-Dimensional Processing • Reality-Based Computing • Universal Connectivity",
      description: "Cloud infrastructure that exists across multiple dimensions, providing unlimited computational resources.",
      link: "/pages/InterdimensionalComputing2026",
      color: "from-indigo-500 to-purple-600",
      icon: Globe
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="relative bg-gradient-to-r from-zion-slate-dark to-zion-slate border-b border-cyan-400/30 overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center space-x-6"
                >
                  {/* Icon */}
                  <div className={`bg-gradient-to-r ${bannerContent[currentSlide].color} p-3 rounded-xl shadow-lg`}>
                    <bannerContent[currentSlide].icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-2xl font-bold text-white">
                        {bannerContent[currentSlide].title}
                      </h3>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-cyan-300 font-semibold text-lg mb-1">
                      {bannerContent[currentSlide].subtitle}
                    </p>
                    <p className="text-gray-300 text-sm max-w-2xl">
                      {bannerContent[currentSlide].description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={bannerContent[currentSlide].link}
                    className={`bg-gradient-to-r ${bannerContent[currentSlide].color} hover:opacity-90 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2`}
                  >
                    <span>Explore Now</span>
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="ml-4 p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {bannerContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-cyan-400 scale-125' 
                    : 'bg-gray-500 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Call-to-Action Bar */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border-t border-cyan-400/30">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
                <span className="text-white font-semibold">
                  🎉 Limited Time: Get 50% off all Revolutionary AI Services!
                </span>
                <span className="text-cyan-300 text-sm">
                  Offer expires in 7 days
                </span>
              </div>
              <div className="flex space-x-4">
                <Link
                  to="/pages/RevolutionaryAIServices2026"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-200"
                >
                  View All Services
                </Link>
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg text-sm transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RevolutionaryContentBanner2026;