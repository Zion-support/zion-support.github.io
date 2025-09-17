import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Atom, 
  Zap, 
  ArrowRight, 
  Star, 
  X, 
  Play,
  Brain,
  Shield,
  Globe,
  CheckCircle
} from 'lucide-react';

const QuantumComputingRevolutionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    "Quantum Supremacy",
    "1000x Speed Boost", 
    "Unbreakable Security",
    "Quantum AI Integration"
  ];

  const benefits = [
    { icon: Atom, text: "Exponential Speed" },
    { icon: Shield, text: "Unbreakable Security" },
    { icon: Brain, text: "Quantum AI" },
    { icon: Globe, text: "Global Network" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 border-b border-blue-500/30"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center lg:justify-start gap-2 mb-3"
              >
                <div className="flex items-center gap-1">
                  <Atom className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-400 text-sm font-medium">Quantum Computing Revolution 2027</span>
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl md:text-3xl font-bold text-white mb-2"
              >
                Quantum Computing Revolution is Here!
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center justify-center lg:justify-start gap-2 mb-4"
              >
                <span className="text-gray-300">Featuring:</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentFeature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-blue-400 font-semibold"
                  >
                    {features[currentFeature]}
                  </motion.span>
                </AnimatePresence>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-300 text-sm md:text-base mb-4 max-w-2xl"
              >
                Harness the power of quantum mechanics to solve the world's most complex problems 
                with unprecedented speed and accuracy. Experience the future of computing today.
              </motion.p>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-4"
              >
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <benefit.icon className="w-4 h-4 text-blue-400" />
                    <span className="text-white text-sm">{benefit.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300"
                >
                  <Play className="w-4 h-4" />
                  Explore Quantum
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>

            {/* Right Content - Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 relative">
                {/* Animated Atom Icon */}
                <motion.div
                  animate={{ 
                  transition={{ 
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center"
                >
                  <Atom className="w-16 h-16 md:w-20 md:h-20 text-white" />
                </motion.div>
                
                {/* Orbiting Electrons */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ 
                    ease: "linear"
                  }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1"></div>
                  <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-purple-400 rounded-full transform -translate-x-1/2 translate-y-1"></div>
                  <div className="absolute left-0 top-1/2 w-3 h-3 bg-green-400 rounded-full transform -translate-x-1 -translate-y-1/2"></div>
                  <div className="absolute right-0 top-1/2 w-3 h-3 bg-yellow-400 rounded-full transform translate-x-1 -translate-y-1/2"></div>
                </motion.div>

                {/* Quantum Field Lines */}
                <motion.div
                  animate={{ 
                  transition={{ 
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 border border-blue-400/30 rounded-full"
                />
                <motion.div
                  animate={{ 
                  transition={{ 
                    ease: "easeInOut",
                    delay
                  className="absolute inset-0 border border-purple-400/20 rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Close Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
        >
          <X className="w-5 h-5" />
        </motion.button>

        {/* Progress Bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 origin-left"
          style={{ width: '100%' }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default QuantumComputingRevolutionBanner;