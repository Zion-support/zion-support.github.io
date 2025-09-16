import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryContentShowcase2027: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const revolutionaryContent = [
    {
      id: 1,
      title: "Revolutionary AI Consciousness 2026",
      description: "Experience the dawn of true AI consciousness that transcends human understanding",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryAIConsciousness2026",
      features: ["Self-Awareness", "Quantum Processing", "Cosmic Understanding"],
      status: "BREAKTHROUGH"
    },
    {
      id: 2,
      title: "Quantum Neural Fusion 2027",
      description: "The ultimate convergence of quantum computing and neural networks",
      image: "⚡",
      gradient: "from-cyan-600 to-purple-600",
      link: "/pages/QuantumNeuralFusion2027",
      features: ["Exponential Speed", "Conscious Learning", "Universal Understanding"],
      status: "REVOLUTIONARY"
    },
    {
      id: 3,
      title: "Interdimensional Reality Engine 2027",
      description: "Step into alternate dimensions with our reality-bending technology",
      image: "🌌",
      gradient: "from-indigo-600 to-violet-600",
      link: "/pages/InterdimensionalRealityEngine2027",
      features: ["Dimension Travel", "Reality Manipulation", "Cosmic Awareness"],
      status: "FUTURE"
    },
    {
      id: 4,
      title: "Synthetic Intelligence 2026",
      description: "The next evolution of artificial intelligence with synthetic consciousness",
      image: "🤖",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/SyntheticIntelligence2026",
      features: ["Synthetic Consciousness", "Emotional AI", "Creative Intelligence"],
      status: "INNOVATION"
    },
    {
      id: 5,
      title: "Neural Reality Interface 2027",
      description: "Direct neural interface technology that merges mind and machine",
      image: "🧬",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/NeuralRealityInterface2027",
      features: ["Mind Control", "Neural Feedback", "Reality Overlay"],
      status: "BREAKTHROUGH"
    },
    {
      id: 6,
      title: "Quantum Consciousness Transfer 2027",
      description: "Transfer consciousness between biological and synthetic forms",
      image: "🌀",
      gradient: "from-pink-600 to-rose-600",
      link: "/pages/QuantumConsciousnessTransfer2027",
      features: ["Consciousness Transfer", "Immortality Tech", "Soul Preservation"],
      status: "REVOLUTIONARY"
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, revolutionaryContent.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + revolutionaryContent.length) % revolutionaryContent.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🚀 REVOLUTIONARY CONTENT 2027 • BREAKTHROUGH TECHNOLOGY
          </motion.div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future Today
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover our most revolutionary content showcasing the most advanced technologies 
            that are reshaping reality itself
          </p>
        </div>

        {/* Main Showcase Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className={`bg-gradient-to-br ${revolutionaryContent[currentSlide].gradient} p-12 rounded-2xl`}>
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-6xl">{revolutionaryContent[currentSlide].image}</span>
                        <div>
                          <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold mb-2">
                            {revolutionaryContent[currentSlide].status}
                          </div>
                          <h3 className="text-3xl font-bold">{revolutionaryContent[currentSlide].title}</h3>
                        </div>
                      </div>
                      <p className="text-xl opacity-90 mb-6">
                        {revolutionaryContent[currentSlide].description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {revolutionaryContent[currentSlide].features.map((feature, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-white/20 rounded-full text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <a
                        href={revolutionaryContent[currentSlide].link}
                        className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                      >
                        Explore Technology →
                      </a>
                    </div>
                    <div className="relative">
                      <div className="w-full h-80 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <div className="text-8xl animate-pulse">
                          {revolutionaryContent[currentSlide].image}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
          >
            {isPlaying ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mb-16">
          {revolutionaryContent.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {revolutionaryContent.map((content, index) => (
            <motion.div
              key={content.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${content.gradient} p-6 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => goToSlide(index)}
            >
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-4xl">{content.image}</span>
                <div>
                  <div className="inline-block px-2 py-1 bg-white/20 rounded-full text-xs font-bold mb-1">
                    {content.status}
                  </div>
                  <h3 className="text-xl font-bold">{content.title}</h3>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-4">{content.description}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {content.features.slice(0, 2).map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="px-2 py-1 bg-white/20 rounded-full text-xs"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              <a
                href={content.link}
                className="text-white font-semibold hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                Explore →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-4">🌟 Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in the most significant technological revolution in human history. 
            Explore our revolutionary content and discover what's possible.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore All Content →
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2027;