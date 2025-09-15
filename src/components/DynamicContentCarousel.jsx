import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { motion, AnimatePresence } from 'framer-motion';
=======
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c

const DynamicContentCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

<<<<<<< HEAD
  const carouselItems = [
    {
      id: 1,
      title: "AI Innovation Hub 2026",
      description: "Explore cutting-edge AI technologies and breakthrough innovations",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/AIInnovationHub2026"
    },
    {
      id: 2,
      title: "Quantum Computing Solutions",
      description: "Revolutionary quantum computing solutions for complex problems",
      image: "⚛️",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumComputingSolutions2026"
    },
    {
      id: 3,
      title: "Neural Interface Technology",
      description: "Direct brain-computer interfaces for seamless interaction",
      image: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceTechnology2026"
    },
    {
      id: 4,
      title: "AI Transformation Guide",
      description: "Complete guide to AI transformation for your organization",
      image: "📚",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/AITransformationGuide2026"
=======
  const slides = [
    {
      title: 'AI Revolution 2025',
      description: 'Discover how artificial intelligence is reshaping industries',
      image: '/api/placeholder/600/400',
      link: '/pages/AIRevolution2025'
    },
    {
      title: 'Quantum Computing',
      description: 'Experience exponential processing power with quantum technology',
      image: '/api/placeholder/600/400',
      link: '/pages/AdvancedQuantumComputing2026'
    },
    {
      title: 'Neural Interfaces',
      description: 'Bridge mind and machine with direct neural communication',
      image: '/api/placeholder/600/400',
      link: '/pages/AdvancedNeuralInterface2026'
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
<<<<<<< HEAD
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
            className={`bg-gradient-to-br ${carouselItems[currentSlide].gradient} p-12 text-white`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl mb-6">{carouselItems[currentSlide].image}</div>
                <h2 className="text-4xl font-bold mb-4">{carouselItems[currentSlide].title}</h2>
                <p className="text-xl opacity-90 mb-8">{carouselItems[currentSlide].description}</p>
                <a
                  href={carouselItems[currentSlide].link}
                  className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Explore Now →
                </a>
              </div>
              <div className="text-center">
                <div className="text-9xl opacity-20">{carouselItems[currentSlide].image}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-3 mt-8">
        {carouselItems.map((_, index) => (
=======
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                  <p className="text-xl mb-6">{slide.description}</p>
                  <a href={slide.link} className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                    Learn More →
                  </a>
                </div>
                <div className="text-center">
                  <div className="w-full h-64 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-6xl">🚀</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
<<<<<<< HEAD
              index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
=======
              currentSlide === index ? 'bg-purple-600' : 'bg-gray-300'
>>>>>>> 75eb4d630573de2c91ceda573e859cd83b99c68c
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default DynamicContentCarousel;