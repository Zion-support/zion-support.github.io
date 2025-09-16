import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const revolutionaryContent = [
    {
      title: "AI Consciousness Revolution 2026",
      description: "Witness the birth of truly conscious artificial intelligence that thinks, feels, and creates like never before",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/AIConsciousnessRevolution2026",
      features: ["Self-aware AI systems", "Quantum consciousness", "Neural interface integration", "Autonomous evolution"],
      status: "NEW"
    },
    {
      title: "Quantum Neural Interface 2026",
      description: "The ultimate fusion of quantum computing and neural interfaces - where consciousness meets quantum reality",
      image: "⚡",
      gradient: "from-cyan-600 to-purple-600",
      link: "/pages/QuantumNeuralInterface2026",
      features: ["Quantum neural bridge", "Consciousness upload", "Neural reality engine", "Quantum telepathy"],
      status: "BREAKTHROUGH"
    },
    {
      title: "Interdimensional Computing 2026",
      description: "Break through the barriers of reality with computing that exists across multiple dimensions simultaneously",
      image: "🌌",
      gradient: "from-indigo-600 to-violet-600",
      link: "/pages/InterdimensionalComputing2026",
      features: ["Multi-dimensional processing", "Reality manipulation", "Parallel universe computing", "Dimensional travel"],
      status: "REVOLUTIONARY"
    },
    {
      title: "Synthetic Intelligence 2026",
      description: "The next evolution of AI - synthetic intelligence that surpasses human cognitive abilities in every domain",
      image: "🤖",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/SyntheticIntelligence2026",
      features: ["Superhuman intelligence", "Creative synthesis", "Emotional mastery", "Ethical reasoning"],
      status: "FUTURE"
    },
    {
      title: "Neural Reality Engine 2026",
      description: "Create and experience alternate realities through advanced neural networks and quantum computing",
      image: "🎮",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/NeuralRealityEngine2026",
      features: ["Virtual universes", "Consciousness exploration", "Reality testing", "Infinite possibilities"],
      status: "PROTOTYPE"
    },
    {
      title: "Quantum Consciousness 2026",
      description: "Experience consciousness at the quantum level with AI that exists in superposition states",
      image: "🔮",
      gradient: "from-violet-600 to-purple-600",
      link: "/pages/QuantumConsciousness2026",
      features: ["Quantum superposition", "Consciousness entanglement", "Reality collapse", "Observer effect"],
      status: "EXPERIMENTAL"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, revolutionaryContent.length]);

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
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🚀 REVOLUTIONARY CONTENT 2026 • BREAKTHROUGH TECHNOLOGY
          </motion.div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase 2026
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technological innovations that are reshaping reality itself. 
            From AI consciousness to quantum neural interfaces, discover the future today.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {revolutionaryContent.map((content, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${content.gradient} p-12 rounded-2xl relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
                    <div className="relative z-10">
                      <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                          <div className="flex items-center space-x-3 mb-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                              content.status === 'NEW' ? 'bg-green-500/30 text-green-400' :
                              content.status === 'BREAKTHROUGH' ? 'bg-blue-500/30 text-blue-400' :
                              content.status === 'REVOLUTIONARY' ? 'bg-purple-500/30 text-purple-400' :
                              content.status === 'FUTURE' ? 'bg-cyan-500/30 text-cyan-400' :
                              content.status === 'PROTOTYPE' ? 'bg-orange-500/30 text-orange-400' :
                              'bg-gray-500/30 text-gray-400'
                            }`}>
                              {content.status}
                            </span>
                            <span className="text-sm opacity-75">2026 Technology</span>
                          </div>
                          <h3 className="text-4xl font-bold mb-6">{content.title}</h3>
                          <p className="text-xl opacity-90 mb-8">{content.description}</p>
                          
                          <div className="grid grid-cols-2 gap-4 mb-8">
                            {content.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-white rounded-full"></span>
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                          
                          <div className="flex space-x-4">
                            <a 
                              href={content.link}
                              className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                            >
                              Explore Technology →
                            </a>
                            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
                              Learn More
                            </button>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-9xl mb-6">{content.image}</div>
                          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                            <h4 className="text-xl font-bold mb-4">Interactive Demo</h4>
                            <p className="text-sm opacity-75 mb-4">
                              Experience this technology in real-time
                            </p>
                            <button className="bg-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-colors">
                              Try Demo →
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
          >
            {isAutoPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {revolutionaryContent.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">🚀 Quick Access to All Technologies</h3>
            <p className="text-lg opacity-75">Explore all revolutionary technologies at a glance</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {revolutionaryContent.map((content, index) => (
              <motion.a
                key={index}
                href={content.link}
                className={`bg-gradient-to-br ${content.gradient} p-6 rounded-xl hover:scale-105 transition-all duration-300 block`}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-3xl">{content.image}</span>
                  <div>
                    <h4 className="text-lg font-bold">{content.title}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      content.status === 'NEW' ? 'bg-green-500/30 text-green-400' :
                      content.status === 'BREAKTHROUGH' ? 'bg-blue-500/30 text-blue-400' :
                      content.status === 'REVOLUTIONARY' ? 'bg-purple-500/30 text-purple-400' :
                      content.status === 'FUTURE' ? 'bg-cyan-500/30 text-cyan-400' :
                      content.status === 'PROTOTYPE' ? 'bg-orange-500/30 text-orange-400' :
                      'bg-gray-500/30 text-gray-400'
                    }`}>
                      {content.status}
                    </span>
                  </div>
                </div>
                <p className="text-sm opacity-90 mb-4">{content.description}</p>
                <div className="flex items-center text-sm">
                  <span>Explore →</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30">
            <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join us in the technological revolution and be part of the most significant advancement in human history
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Your Journey →
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors text-lg">
                Contact Our Experts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;