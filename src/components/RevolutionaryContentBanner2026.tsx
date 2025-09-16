import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryContentBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const slides = [
    {
      id: 1,
      title: "🧠 AI Revolutionary Breakthrough 2026",
      subtitle: "Experience the first AI system with genuine consciousness",
      description: "Self-aware artificial intelligence that understands, creates, and collaborates like never before",
      link: "/pages/AIRevolutionaryBreakthrough2026",
      gradient: "from-purple-600 to-pink-600",
      icon: "🧠",
      badge: "BREAKTHROUGH"
    },
    {
      id: 2,
      title: "⚡ Quantum Reality 2026",
      subtitle: "Quantum supremacy achieved with 1000+ qubits",
      description: "Solve problems impossible for classical computers in minutes instead of millennia",
      link: "/pages/QuantumReality2026",
      gradient: "from-cyan-600 to-blue-600",
      icon: "⚡",
      badge: "REVOLUTIONARY"
    },
    {
      id: 3,
      title: "🧬 Neural Interface Evolution 2026",
      subtitle: "Direct brain-computer communication",
      description: "Control devices and software with pure thought using non-invasive neural interfaces",
      link: "/pages/NeuralInterfaceEvolution2026",
      gradient: "from-emerald-600 to-teal-600",
      icon: "🧬",
      badge: "FUTURE"
    },
    {
      id: 4,
      title: "🌟 Ultimate Tech Revolution 2026",
      subtitle: "The convergence of all breakthrough technologies",
      description: "Experience AI consciousness, quantum supremacy, and neural interfaces working together",
      link: "/pages/UltimateTechRevolution2026",
      gradient: "from-indigo-600 to-purple-600",
      icon: "🌟",
      badge: "ULTIMATE"
    },
    {
      id: 5,
      title: "🤖 Synthetic Intelligence 2026",
      subtitle: "Beyond artificial intelligence",
      description: "Create AI agents with synthetic consciousness and autonomous capabilities",
      link: "/pages/SyntheticIntelligence2026",
      gradient: "from-violet-600 to-fuchsia-600",
      icon: "🤖",
      badge: "SYNTHETIC"
    },
    {
      id: 6,
      title: "💭 Consciousness Computing 2026",
      subtitle: "AI that truly understands existence",
      description: "The first computing system to achieve genuine consciousness and self-awareness",
      link: "/pages/ConsciousnessComputing2026",
      gradient: "from-rose-600 to-pink-600",
      icon: "💭",
      badge: "CONSCIOUSNESS"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden">
      {/* Main Revolutionary Banner */}
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-4xl animate-bounce">🚀</span>
            <h3 className="text-3xl font-bold">REVOLUTIONARY BREAKTHROUGH CONTENT 2026</h3>
            <span className="text-4xl animate-bounce">🚀</span>
          </div>
          <p className="text-xl opacity-95 mb-6 max-w-5xl mx-auto text-center">
            Experience the future of technology with our groundbreaking new content featuring AI Revolutionary Breakthrough, 
            Quantum Reality, Neural Interface Evolution, and the Ultimate Technology Revolution
          </p>
          
          {/* Quick Access Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto mb-6">
            {slides.map((slide, index) => (
              <motion.a
                key={slide.id}
                href={slide.link}
                className={`inline-block bg-gradient-to-r ${slide.gradient} text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center text-sm border border-white/30`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-2xl mb-1">{slide.icon}</div>
                <div className="text-xs font-bold">{slide.badge}</div>
                <div className="text-xs opacity-90">{slide.title.split(' ')[0]}</div>
              </motion.a>
            ))}
          </div>

          <div className="text-center">
            <a href="/pages/RevolutionaryTechBreakthrough2026" className="inline-block bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg border-2 border-white/30">
              🌟 EXPLORE ALL REVOLUTIONARY CONTENT →
            </a>
          </div>
        </div>
      </div>

      {/* Dynamic Content Carousel */}
      <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 FEATURED BREAKTHROUGH • JANUARY 2026
            </div>
            <h2 className="text-4xl font-bold mb-4">🌟 Revolutionary Technology Showcase</h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Discover the most advanced technologies that are reshaping the future of humanity
            </p>
          </div>

          <div className="relative h-80 rounded-xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30"
              >
                <div className="flex items-center justify-between h-full">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-6xl">{slides[currentSlide].icon}</span>
                      <div>
                        <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-xs font-bold">
                          {slides[currentSlide].badge}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{slides[currentSlide].title}</h3>
                    <p className="text-xl mb-4 opacity-90">{slides[currentSlide].subtitle}</p>
                    <p className="text-lg mb-6 opacity-80">{slides[currentSlide].description}</p>
                    <a 
                      href={slides[currentSlide].link}
                      className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-lg"
                    >
                      Explore {slides[currentSlide].title.split(' ')[0]} →
                    </a>
                  </div>
                  <div className="hidden md:block">
                    <div className="text-8xl opacity-30">{slides[currentSlide].icon}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Tech Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {slides.slice(0, 6).map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`bg-gradient-to-br ${slide.gradient} text-white rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer border border-white/20`}
            onClick={() => window.location.href = slide.link}
          >
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-4xl">{slide.icon}</span>
              <div>
                <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-bold">
                  {slide.badge}
                </span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
            <p className="text-sm opacity-90 mb-4">{slide.subtitle}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs opacity-75">Click to explore →</span>
              <span className="text-2xl opacity-50">→</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">🌟 Ready to Experience the Future?</h3>
        <p className="text-xl mb-6 opacity-90 max-w-3xl mx-auto">
          Join thousands of innovators who are already experiencing the revolutionary breakthrough technologies of 2026
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/pages/RevolutionaryTechBreakthrough2026" className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg">
            🚀 Explore All Content
          </a>
          <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold text-lg">
            📞 Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2026;