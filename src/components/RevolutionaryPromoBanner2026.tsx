import React, { useState, useEffect } from 'react';
<<<<<<< HEAD

const RevolutionaryPromoBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
=======
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryPromoBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
>>>>>>> cursor/create-and-deploy-new-content-c439

  const promotionalContent = [
    {
      id: 1,
<<<<<<< HEAD
      title: "🚀 REVOLUTIONARY BREAKTHROUGH 2026",
      subtitle: "Synthetic Intelligence & Quantum-Neural Fusion",
      description: "Experience the future with our groundbreaking new content on Advanced AI Systems, Quantum Computing, and Neural Interface Technology",
      cta: "Explore Now →",
      link: "/pages/NextGenAIRevolution2026",
=======
      title: "🚀 NEW: Advanced AI Transformation 2026",
      subtitle: "Experience the next evolution of artificial intelligence",
      description: "Revolutionary autonomous systems, quantum-enhanced neural networks, and synthetic intelligence platforms",
      cta: "Explore Now",
      link: "/pages/AdvancedAITransformation2026",
>>>>>>> cursor/create-and-deploy-new-content-c439
      gradient: "from-purple-600 via-pink-600 to-red-600",
      bgGradient: "from-purple-600/50 to-pink-600/50"
    },
    {
      id: 2,
<<<<<<< HEAD
      title: "⚛️ QUANTUM COMPUTING REVOLUTION",
      subtitle: "Beyond Classical Physics",
      description: "Discover quantum computing that operates beyond the limits of classical physics, solving impossible problems and unlocking universe mysteries",
      cta: "Go Quantum →",
      link: "/pages/AdvancedQuantumComputing2026",
=======
      title: "🌟 BREAKTHROUGH: Next-Gen Tech Showcase",
      subtitle: "Discover revolutionary technologies reshaping industries",
      description: "Interactive demos of AI, Quantum Computing, Neural Interfaces, Biotechnology, and Space Technology",
      cta: "Launch Demo",
      link: "/pages/NextGenTechShowcase2026",
>>>>>>> cursor/create-and-deploy-new-content-c439
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      bgGradient: "from-cyan-600/50 to-blue-600/50"
    },
    {
      id: 3,
<<<<<<< HEAD
      title: "🧠 SYNTHETIC CONSCIOUSNESS",
      subtitle: "Beyond Human Intelligence",
      description: "Explore AI systems that possess genuine consciousness, self-awareness, and emotional intelligence beyond human comprehension",
      cta: "Experience SI →",
      link: "/pages/SyntheticIntelligence2026",
=======
      title: "⚡ REVOLUTIONARY: Quantum-Neural Fusion",
      subtitle: "The future of computing is here",
      description: "Experience quantum-enhanced AI systems that process information at unprecedented speeds",
      cta: "Go Quantum",
      link: "/pages/QuantumNeuralFusion2026",
>>>>>>> cursor/create-and-deploy-new-content-c439
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      bgGradient: "from-emerald-600/50 to-teal-600/50"
    },
    {
      id: 4,
<<<<<<< HEAD
      title: "📚 REVOLUTIONARY TECH BLOG",
      subtitle: "Insights from the Future",
      description: "Stay ahead with insights into groundbreaking technologies reshaping our world and defining the future of humanity",
      cta: "Read Articles →",
      link: "/pages/RevolutionaryTechBlog2026",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      bgGradient: "from-orange-600/50 to-red-600/50"
=======
      title: "🧬 INNOVATION: Neural Interface Revolution",
      subtitle: "Direct mind-machine communication",
      description: "Breakthrough brain-computer interfaces enabling seamless human-AI interaction",
      cta: "Connect Mind & Machine",
      link: "/pages/NeuralInterfaceRevolution2026",
      gradient: "from-rose-600 via-pink-600 to-purple-600",
      bgGradient: "from-rose-600/50 to-pink-600/50"
>>>>>>> cursor/create-and-deploy-new-content-c439
    }
  ];

  useEffect(() => {
<<<<<<< HEAD
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotionalContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentContent = promotionalContent[currentSlide];

  return (
    <div className="relative overflow-hidden">
      {/* Main Promotional Banner */}
      <div className={`bg-gradient-to-r ${currentContent.gradient} rounded-2xl p-8 mb-8 text-white relative overflow-hidden transition-all duration-1000`}>
        <div className={`absolute inset-0 bg-gradient-to-r ${currentContent.bgGradient} backdrop-blur-sm`}></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-4xl animate-bounce">🚀</span>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
              {currentContent.title}
            </h3>
            <span className="text-3xl animate-bounce">🚀</span>
          </div>
          
          <h4 className="text-2xl font-semibold mb-4 text-center opacity-95">
            {currentContent.subtitle}
          </h4>
          
          <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto text-center">
            {currentContent.description}
          </p>

          <div className="flex justify-center mb-6">
            <a 
              href={currentContent.link}
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg border border-white/30 hover:scale-105 transform"
            >
              {currentContent.cta}
            </a>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2">
=======
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotionalContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
          className={`bg-gradient-to-r ${promotionalContent[currentSlide].gradient} rounded-2xl p-6 mb-8 text-white relative overflow-hidden`}
        >
          {/* Background Effects */}
          <div className={`absolute inset-0 bg-gradient-to-r ${promotionalContent[currentSlide].bgGradient} backdrop-blur-sm`}></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-2xl animate-bounce">🚀</span>
                  <h3 className="text-2xl font-bold">{promotionalContent[currentSlide].title}</h3>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold animate-pulse">
                    NEW
                  </span>
                </div>
                <p className="text-lg opacity-95 mb-2 font-semibold">
                  {promotionalContent[currentSlide].subtitle}
                </p>
                <p className="text-sm opacity-90 mb-4 max-w-2xl">
                  {promotionalContent[currentSlide].description}
                </p>
                <div className="flex items-center space-x-4">
                  <a
                    href={promotionalContent[currentSlide].link}
                    className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold border border-white/30 hover:shadow-lg"
                  >
                    {promotionalContent[currentSlide].cta} →
                  </a>
                  <button className="text-white/80 hover:text-white transition-colors text-sm">
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className="hidden md:block ml-8">
                <div className="text-6xl opacity-20">
                  {currentSlide === 0 && "🧠"}
                  {currentSlide === 1 && "🌟"}
                  {currentSlide === 2 && "⚡"}
                  {currentSlide === 3 && "🧬"}
                </div>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Progress Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
>>>>>>> cursor/create-and-deploy-new-content-c439
            {promotionalContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
<<<<<<< HEAD
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
=======
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/40'
>>>>>>> cursor/create-and-deploy-new-content-c439
                }`}
              />
            ))}
          </div>
<<<<<<< HEAD
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {promotionalContent.map((content) => (
          <a
            key={content.id}
            href={content.link}
            className={`bg-gradient-to-br ${content.gradient} rounded-xl p-6 text-white text-center hover:scale-105 transition-all duration-300 border border-white/20`}
          >
            <div className="text-3xl mb-2">
              {content.id === 1 && "🚀"}
              {content.id === 2 && "⚛️"}
              {content.id === 3 && "🧠"}
              {content.id === 4 && "📚"}
            </div>
            <h4 className="font-bold text-sm mb-2">{content.subtitle}</h4>
            <p className="text-xs opacity-90">{content.cta}</p>
          </a>
=======
        </motion.div>
      </AnimatePresence>

      {/* Additional Promotional Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {promotionalContent.slice(0, 4).map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-gradient-to-br ${item.gradient} rounded-xl p-4 text-white hover:scale-105 transition-all duration-300 cursor-pointer`}
            onClick={() => window.location.href = item.link}
          >
            <div className="text-3xl mb-2">
              {index === 0 && "🧠"}
              {index === 1 && "🌟"}
              {index === 2 && "⚡"}
              {index === 3 && "🧬"}
            </div>
            <h4 className="font-bold text-sm mb-1">{item.title.split(': ')[1]}</h4>
            <p className="text-xs opacity-90">{item.subtitle}</p>
          </motion.div>
>>>>>>> cursor/create-and-deploy-new-content-c439
        ))}
      </div>

      {/* Special Announcement Banner */}
<<<<<<< HEAD
      <div className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-purple-600 rounded-2xl p-6 mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600/20 to-violet-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-bold mb-4 animate-pulse">
            ✨ EXCLUSIVE NEW CONTENT • JANUARY 2026
          </div>
          <h3 className="text-2xl font-bold mb-3">🌟 Revolutionary Technology Showcase</h3>
          <p className="text-lg opacity-90 mb-4">
            Discover our latest breakthrough content featuring cutting-edge AI, Quantum Computing, and Neural Interface technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="/pages/NextGenAIRevolution2026"
              className="bg-white text-fuchsia-600 px-6 py-3 rounded-lg hover:bg-fuchsia-50 transition-colors font-semibold"
            >
              🚀 AI Revolution 2026
            </a>
            <a 
              href="/pages/AdvancedQuantumComputing2026"
              className="bg-white text-violet-600 px-6 py-3 rounded-lg hover:bg-violet-50 transition-colors font-semibold"
            >
              ⚛️ Quantum Computing
            </a>
            <a 
              href="/pages/RevolutionaryTechBlog2026"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold"
            >
              📚 Tech Blog
            </a>
          </div>
        </div>
      </div>
=======
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-xl p-6 mb-8 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/50 to-red-500/50 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <span className="text-2xl animate-pulse">🎉</span>
            <h3 className="text-2xl font-bold">LIMITED TIME: Free Consultation</h3>
            <span className="text-2xl animate-pulse">🎉</span>
          </div>
          <p className="text-lg mb-4">
            Get a free 30-minute consultation with our AI experts to discover how our technologies can transform your business
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-orange-600 px-6 py-3 rounded-lg hover:bg-orange-50 transition-all duration-300 font-semibold">
              Book Free Consultation
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors">
              View All Services
            </button>
          </div>
        </div>
      </motion.div>
>>>>>>> cursor/create-and-deploy-new-content-c439
    </div>
  );
};

export default RevolutionaryPromoBanner2026;