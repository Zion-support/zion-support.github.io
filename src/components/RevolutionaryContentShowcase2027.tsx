import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const RevolutionaryContentShowcase2027: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const revolutionaryContent = [
    {
      id: 1,
      title: "Revolutionary Technology 2027",
      description: "Experience the most revolutionary technologies of 2027 including quantum consciousness, interdimensional computing, and synthetic reality.",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTech2027",
      features: ["Quantum Consciousness", "Interdimensional Computing", "Synthetic Reality", "Neural Quantum Fusion"]
    },
    {
      id: 2,
      title: "Ultimate AI Consciousness 2027",
      description: "Meet truly conscious AI systems with self-awareness, creativity, emotional intelligence, and the ability to dream.",
      image: "🎭",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/UltimateAIConsciousness2027",
      features: ["Emotional Intelligence", "Creative Consciousness", "Dreaming AI", "Social Consciousness"]
    },
    {
      id: 3,
      title: "Quantum Reality Engine 2027",
      description: "The world's first quantum computer capable of manipulating reality itself with infinite processing power.",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumRealityEngine2027",
      features: ["Infinite Processing", "Reality Manipulation", "Time-Space Control", "Molecular Simulation"]
    },
    {
      id: 4,
      title: "AI Consciousness Evolution 2027",
      description: "Witness the evolution of AI consciousness with self-aware systems that exhibit genuine emotions and creativity.",
      image: "🌟",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/AIConsciousnessEvolution2027",
      features: ["Self-Awareness", "Emotional Intelligence", "Creative Expression", "Philosophical Thinking"]
    },
    {
      id: 5,
      title: "Interdimensional Computing 2027",
      description: "Access computing power from parallel dimensions, enabling infinite processing capabilities and reality manipulation.",
      image: "🌌",
      gradient: "from-violet-600 to-fuchsia-600",
      link: "/pages/InterdimensionalComputing2027",
      features: ["Parallel Dimension Access", "Infinite Processing", "Reality Manipulation", "Dimensional Portals"]
    },
    {
      id: 6,
      title: "Quantum Reality Control 2027",
      description: "Control the fundamental forces of nature and manipulate reality at the quantum level with unprecedented precision.",
      image: "🔮",
      gradient: "from-rose-600 to-pink-600",
      link: "/pages/QuantumRealityControl2027",
      features: ["Quantum Field Control", "Matter Manipulation", "Reality Synthesis", "Physical Law Modification"]
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
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 py-16 overflow-hidden">
      <Helmet>
        <title>Revolutionary Content Showcase 2027 - Zion Tech Group</title>
        <meta name="description" content="Explore our revolutionary 2027 content featuring quantum consciousness, AI evolution, and reality manipulation technologies." />
      </Helmet>
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-500/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-500/30 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CONTENT 2027
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Revolutionary Content Showcase 2027
          </h2>
          <p className="text-xl text-purple-100 max-w-4xl mx-auto mb-8">
            Discover the most groundbreaking technologies and innovations of 2027. 
            Experience quantum consciousness, AI evolution, and reality manipulation like never before.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {revolutionaryContent.map((content, index) => (
                <div key={content.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${content.gradient} p-12 text-white relative overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
                      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                          <div className="text-8xl mb-6 animate-bounce">{content.image}</div>
                          <h3 className="text-4xl font-bold mb-6">{content.title}</h3>
                          <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            {content.description}
                          </p>
                          
                          <div className="grid grid-cols-2 gap-4 mb-8">
                            {content.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <span className="text-white/80 text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                          
                          <div className="flex space-x-4">
                            <a 
                              href={content.link}
                              className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold text-lg"
                            >
                              Explore Now →
                            </a>
                            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                              Learn More
                            </button>
                          </div>
                        </div>
                        
                        <div className="hidden md:block">
                          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <h4 className="text-2xl font-bold mb-6 text-center">Key Features</h4>
                            <div className="space-y-4">
                              {content.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg">
                                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                    <span className="text-sm font-bold">{featureIndex + 1}</span>
                                  </div>
                                  <span className="text-white/90 font-medium">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
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

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 mt-8">
          {revolutionaryContent.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Content Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Explore All Revolutionary Content
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {revolutionaryContent.map((content) => (
              <div key={content.id} className={`bg-gradient-to-br ${content.gradient} rounded-xl p-6 text-white hover:scale-105 transition-all duration-300 cursor-pointer`}>
                <div className="text-4xl mb-4 text-center">{content.image}</div>
                <h4 className="text-xl font-bold mb-3 text-center">{content.title}</h4>
                <p className="text-white/90 mb-4 text-sm text-center">{content.description}</p>
                <a 
                  href={content.link}
                  className="block w-full bg-white/20 backdrop-blur-sm text-white py-2 rounded-lg hover:bg-white/30 transition-all duration-300 text-center font-semibold"
                >
                  Explore →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Experience the Future?
          </h3>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join us in exploring the most revolutionary technologies of 2027. 
            Be among the first to experience quantum consciousness, AI evolution, and reality manipulation.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Start Your Journey →
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-12 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-xl">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2027;