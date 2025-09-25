import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NewContentPromotionalBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const promotionalContent = [
    {
      title: "🌟 Revolutionary AI Content 2025",
      subtitle: "Experience the future of artificial intelligence",
      description: "Discover autonomous AI systems, quantum computing integration, and neural interface technologies",
      cta: "Explore Now",
      link: "/pages/RevolutionaryAIContent2025",
      gradient: "from-purple-600 to-pink-600",
      icon: "🤖"
    },
    {
      title: "🚀 Advanced Technology Showcase",
      subtitle: "Cutting-edge innovations for 2025",
      description: "Interactive demos of AI consciousness, quantum supremacy, and space exploration technologies",
      cta: "View Showcase",
      link: "/pages/AdvancedTechnologyShowcase2025",
      gradient: "from-cyan-600 to-blue-600",
      icon: "⚡"
    },
    {
      title: "🧬 Neural Interface Revolution",
      subtitle: "Direct brain-computer communication",
      description: "Experience thought-controlled devices and mind-machine integration technologies",
      cta: "Learn More",
      link: "/pages/NeuralInterfaceFuture",
      gradient: "from-emerald-600 to-teal-600",
      icon: "🧬"
    },
    {
      title: "🌌 Quantum Computing Breakthrough",
      subtitle: "1000+ qubit quantum processors",
      description: "Witness quantum supremacy and exponential processing power in action",
      cta: "Discover Quantum",
      link: "/pages/QuantumComputingBreakthrough",
      gradient: "from-violet-600 to-indigo-600",
      icon: "⚛️"
    }
  ];

  useEffect(() => {
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
          className={`bg-gradient-to-r ${promotionalContent[currentSlide].gradient} rounded-2xl p-8 mb-8 text-white relative overflow-hidden`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent backdrop-blur-sm"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-4xl animate-bounce">{promotionalContent[currentSlide].icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold">{promotionalContent[currentSlide].title}</h3>
                    <p className="text-lg opacity-90">{promotionalContent[currentSlide].subtitle}</p>
                  </div>
                </div>
                <p className="text-lg opacity-95 mb-6 max-w-2xl">
                  {promotionalContent[currentSlide].description}
                </p>
                <div className="flex items-center space-x-4">
                  <a
                    href={promotionalContent[currentSlide].link}
                    className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                  >
                    {promotionalContent[currentSlide].cta} →
                  </a>
                  <button className="text-white/80 hover:text-white transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-4">
                <button
                  onClick={handleClose}
                  className="text-white/60 hover:text-white transition-colors text-2xl"
                >
                  ×
                </button>
                <div className="flex space-x-2">
                  {promotionalContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default NewContentPromotionalBanner2025;