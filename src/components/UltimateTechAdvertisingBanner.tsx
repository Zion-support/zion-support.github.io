import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const UltimateTechAdvertisingBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const advertisingSlides = [
    {
      title: "🧠 Neural Reality Engine 2026",
      subtitle: "Experience Reality Like Never Before",
      description: "Direct neural control of digital environments. The future of human-computer interaction is here.",
      cta: "Explore Neural Tech",
      link: "/pages/NeuralRealityEngine2026",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      bgPattern: "🧠⚡🔮"
    },
    {
      title: "⚛️ Quantum Consciousness Computing",
      subtitle: "The Next Evolution of AI",
      description: "Revolutionary quantum-powered artificial consciousness that understands and learns like humans.",
      cta: "Discover Quantum AI",
      link: "/pages/QuantumConsciousness2026",
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
      bgPattern: "⚛️🌀💫"
    },
    {
      title: "🌌 Interdimensional Technology",
      subtitle: "Beyond Our Reality",
      description: "Breakthrough technologies that operate across multiple dimensions and parallel universes.",
      cta: "Explore Dimensions",
      link: "/pages/InterdimensionalTech2026",
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      bgPattern: "🌌🔮✨"
    },
    {
      title: "🚀 Space Tech 2030",
      subtitle: "Colonizing the Stars",
      description: "Next-generation space technologies enabling human colonization of other worlds.",
      cta: "Journey to Stars",
      link: "/pages/SpaceTech2030",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      bgPattern: "🚀🌌⭐"
    },
    {
      title: "🌱 Green Tech Revolution",
      subtitle: "Saving Our Planet",
      description: "Revolutionary environmental technologies that will reverse climate change and create a sustainable future.",
      cta: "Save the Planet",
      link: "/pages/GreenTechRevolution2026",
      gradient: "from-green-600 via-emerald-600 to-teal-600",
      bgPattern: "🌱🌍💚"
    },
    {
      title: "👁️ Holographic Reality",
      subtitle: "The Future of Interaction",
      description: "Immersive holographic technology transforming communication, entertainment, and business.",
      cta: "Enter Holographic World",
      link: "/pages/HolographicReality2026",
      gradient: "from-teal-600 via-blue-600 to-indigo-600",
      bgPattern: "👁️🌈✨"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % advertisingSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [advertisingSlides.length]);

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`bg-gradient-to-r ${advertisingSlides[currentSlide].gradient} rounded-3xl p-12 relative overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 text-6xl animate-pulse">
                  {advertisingSlides[currentSlide].bgPattern.split('')[0]}
                </div>
                <div className="absolute top-8 right-8 text-4xl animate-pulse delay-1000">
                  {advertisingSlides[currentSlide].bgPattern.split('')[1]}
                </div>
                <div className="absolute bottom-8 left-8 text-5xl animate-pulse delay-2000">
                  {advertisingSlides[currentSlide].bgPattern.split('')[2]}
                </div>
                <div className="absolute bottom-4 right-4 text-3xl animate-pulse delay-3000">
                  {advertisingSlides[currentSlide].bgPattern.split('')[3]}
                </div>
              </div>

              <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <motion.h2 
                      className="text-5xl md:text-6xl font-bold text-white mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {advertisingSlides[currentSlide].title}
                    </motion.h2>
                    <motion.h3 
                      className="text-2xl md:text-3xl text-white/90 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {advertisingSlides[currentSlide].subtitle}
                    </motion.h3>
                    <motion.p 
                      className="text-xl text-white/80 mb-8 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      {advertisingSlides[currentSlide].description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <Link 
                        to={advertisingSlides[currentSlide].link}
                        className="inline-block bg-white text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        {advertisingSlides[currentSlide].cta} →
                      </Link>
                    </motion.div>
                  </div>
                  
                  <div className="relative">
                    <motion.div 
                      className="aspect-square bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-8xl"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      {advertisingSlides[currentSlide].bgPattern.split('')[0]}
                    </motion.div>
                    
                    {/* Floating Elements */}
                    <motion.div 
                      className="absolute -top-4 -right-4 w-16 h-16 bg-white/30 rounded-full flex items-center justify-center text-2xl"
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {advertisingSlides[currentSlide].bgPattern.split('')[1]}
                    </motion.div>
                    
                    <motion.div 
                      className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/30 rounded-full flex items-center justify-center text-xl"
                      animate={{ 
                        y: [0, 10, 0],
                        rotate: [0, -5, 0]
                      }}
                      transition={{ 
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    >
                      {advertisingSlides[currentSlide].bgPattern.split('')[2]}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {advertisingSlides.map((_, index) => (
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
      </div>
    </section>
  );
};

export default UltimateTechAdvertisingBanner;