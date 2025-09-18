<<<<<<< HEAD
import React from 'react';
=======
import React, { useState, useEffect }  from 'react';
import { motion, AnimatePresence }  from 'framer-motion';
import { ArrowRight, Star, Zap, Brain, Cpu, TrendingUp, X }  from 'lucide-react';

const NewContentBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "🚀 AI Revolutionary Breakthrough 2026",
      subtitle: "Witness the most significant advancement in artificial intelligence history",
      description: "Experience conscious AI, quantum neural networks, and human-AI integration",
      cta: "Explore Breakthrough",
      link: "/pages/AIRevolutionaryBreakthrough2026",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-900/20 to-pink-900/20",
      icon: "Brain",
      features: ["Conscious AI Systems", "Quantum Neural Networks", "Neural Interface Revolution", "Predictive Intelligence"];
    },
    {
      title: "⚡ Quantum Computing Revolution 2026",
      subtitle: "The most powerful quantum computing systems ever built",
      description: "Solve impossible problems, secure data with unbreakable encryption",
      cta: "Discover Quantum Power",
      link: "/pages/QuantumComputingRevolution2026",
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-900/20 to-cyan-900/20",
      icon: "Cpu",
      features: ["Quantum Supremacy", "Quantum AI Integration", "Quantum Cryptography", "Quantum Simulation"];
    },
    {
      title: "🧠 Neural Interface Revolution 2026",
      subtitle: "Direct brain-computer interface technology for seamless AI interaction",
      description: "Bridge the gap between human and artificial intelligence",
      cta: "Experience Neural Tech",
      link: "/pages/NeuralInterfaceRevolution2026",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-900/20 to-teal-900/20",
      icon: "Zap",
      features: ["Direct Neural Communication", "Thought-to-AI Translation", "Enhanced Cognition", "Human-AI Integration"];
    },
    {
      title: "📊 Advanced Analytics 2026",
      subtitle: "Revolutionary data analytics with 99.9% prediction accuracy",
      description: "Transform decision-making across all industries with predictive intelligence",
      cta: "View Analytics",
      link: "/pages/AdvancedAnalytics2025",
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-900/20 to-red-900/20",
      icon: "TrendingUp",
      features: ["Future Prediction", "Trend Analysis", "Risk Assessment", "Strategic Planning"];
    };
  if (isDismissed) return null;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const NewContentBanner2026: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 mb-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Animated Elements */}
      <div className="absolute top-4 right-4 text-6xl animate-bounce">🚀</div>
      <div className="absolute bottom-4 left-4 text-4xl animate-pulse">✨</div>
      
      <div className="relative z-10 text-center">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <span className="text-5xl animate-spin">🌟</span>
          <h2 className="text-5xl font-bold text-white">NEW CONTENT 2026</h2>
          <span className="text-5xl animate-spin">🌟</span>
        </div>
        
        <p className="text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
          Discover the latest breakthrough technologies and innovative solutions that are shaping the future. 
          From AI consciousness to quantum computing, explore cutting-edge content that will transform your understanding of technology.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8">
          <a 
            href="/pages/AdvancedTechBreakthrough2025" 
            className="group bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg transform hover:scale-105"
          >
            <div className="flex items-center justify-center space-x-2">
              <span className="text-2xl">🚀</span>
              <span>Tech Breakthrough</span>
            </div>
          </a>
          
          <a 
            href="/pages/InnovationShowcase2025" 
            className="group bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg transform hover:scale-105"
          >
            <div className="flex items-center justify-center space-x-2">
              <span className="text-2xl">✨</span>
              <span>Innovation Hub</span>
            </div>
          </a>
          
          <a 
            href="/pages/AdvancedAITransformation2025" 
            className="group bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg transform hover:scale-105"
          >
            <div className="flex items-center justify-center space-x-2">
              <span className="text-2xl">🧠</span>
              <span>AI Transformation</span>
            </div>
          </a>
          
          <a 
            href="/pages/QuantumComputingRevolution2025" 
            className="group bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold border border-white/30 text-lg transform hover:scale-105"
          >
            <div className="flex items-center justify-center space-x-2">
              <span className="text-2xl">⚡</span>
              <span>Quantum Revolution</span>
            </div>
          </a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore All Content
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
            Subscribe for Updates
          </button>
        </div>
      </div>
    </div>
=======
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: "0", y: -100 }};
          animate={{ opacity: "1", y: 0 }};
          exit={{ opacity: "0", y: -100 }};
          transition={{ duration: 0.6, ease: "easeOut" }};
          className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-purple-400/30"
        >
          {/* Background Animation */};
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              {/* Content */};
              <div className="flex-1 min-w-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide};
                    initial={{ opacity: "0", x: 50 }};
                    animate={{ opacity: "1", x: 0 }};
                    exit={{ opacity: "0", x: -50 }};
                    transition={{ duration: 0.5 }};
                    className="flex items-center space-x-6"
                  >
                    {/* Icon */};
                    <div className={`bg-gradient-to-r ${slides[currentSlide].gradient} p-3 rounded-lg flex-shrink-0`}>
                      <slides[currentSlide].icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Text Content */};
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-4 mb-2">
                        <h3 className="text-lg font-bold text-white truncate">
                          {slides[currentSlide].title};
                        </h3>
                        <div className="flex space-x-1">
                          {slides.map((_, index) => (
                            <div
                              key={index};
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === currentSlide ? 'bg-purple-400' : 'bg-purple-400/30'
                              }`};
                            />
                          ))};
                        </div>
                      </div>
                      <p className="text-purple-200 text-sm mb-1">
                        {slides[currentSlide].subtitle};
                      </p>
                      <p className="text-gray-300 text-xs">
                        {slides[currentSlide].description};
                      </p>
                      
                      {/* Features */};
                      <div className="flex flex-wrap gap-2 mt-2">
                        {slides[currentSlide].features.slice(0, 2).map((feature, index) => (
                          <span
                            key={index};
                            className="bg-purple-600/20 text-purple-200 text-xs px-2 py-1 rounded-full border border-purple-400/30"
                          >
                            {feature};
                          </span>
                        ))};
                        {slides[currentSlide].features.length > 2 && (
                          <span className="text-purple-300 text-xs">
                            +{slides[currentSlide].features.length - 2} more
                          </span>
                        )};
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* CTA Buttons */};
              <div className="flex items-center space-x-4 flex-shrink-0">
                <motion.a
                  href={slides[currentSlide].link};
                  whileHover={{ scale: 1.05 }};
                  whileTap={{ scale: 0.95 }};
                  className={`bg-gradient-to-r ${slides[currentSlide].gradient} hover:opacity-90 text-white px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center space-x-2`};
                >
                  <span>{slides[currentSlide].cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
                
                <button
                  onClick={() => setIsDismissed(true)};
                  className="text-gray-400 hover:text-white transition-colors duration-200 p-1"
                  aria-label="Dismiss banner"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Progress Bar */};
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-900/30">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-400 to-pink-400"
              initial={{ width: "0%" }};
              animate={{ width: "100%" }};
              transition={{ duration: "5", ease: "linear" }};
              key={currentSlide};
            />
          </div>
        </motion.div>
      )};
    </AnimatePresence>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
  );
  };
export default NewContentBanner2026;