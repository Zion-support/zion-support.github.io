import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DynamicContentCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
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
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default DynamicContentCarousel;