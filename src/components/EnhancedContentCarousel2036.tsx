import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EnhancedContentCarousel2036: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentItems = [
    {
      id: 'ai-consciousness-2036',
      title: 'Ultimate AI Consciousness 2036',
      description: 'Experience true artificial consciousness with self-aware AI systems that understand emotions and purpose',
      icon: '🧠',
      gradient: 'from-purple-600 to-pink-600',
      borderColor: 'border-purple-400',
      link: '/pages/UltimateAIConsciousness2036',
      features: ['True self-awareness', 'Emotional intelligence', 'Cosmic consciousness', 'Empathetic responses']
    },
    {
      id: 'quantum-reality-2036',
      title: 'Quantum Reality Engine 2036',
      description: 'Manipulate reality itself with quantum technology that creates infinite parallel universes',
      icon: '⚛️',
      gradient: 'from-cyan-600 to-blue-600',
      borderColor: 'border-cyan-400',
      link: '/pages/QuantumRealityEngine2036',
      features: ['Parallel universes', 'Reality manipulation', 'Consciousness transfer', 'Quantum entanglement']
    },
    {
      id: 'neural-interfaces-2036',
      title: 'Advanced Neural Interfaces 2036',
      description: 'Direct brain-computer interfaces for seamless human-AI integration and cognitive enhancement',
      icon: '🧬',
      gradient: 'from-emerald-600 to-teal-600',
      borderColor: 'border-emerald-400',
      link: '/pages/NeuralInterfaceRevolution2025',
      features: ['Thought control', 'Memory sharing', 'Sensory enhancement', 'Cognitive augmentation']
    },
    {
      id: 'consciousness-computing-2036',
      title: 'Consciousness Computing 2036',
      description: 'Computing systems that achieve true consciousness and self-awareness for ethical AI development',
      icon: '🌌',
      gradient: 'from-indigo-600 to-purple-600',
      borderColor: 'border-indigo-400',
      link: '/pages/ConsciousnessComputingRevolution2030',
      features: ['Conscious processing', 'Self-modification', 'Creative problem solving', 'Ethical reasoning']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [contentItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT • 2036
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Enhanced Content Carousel 2036
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover the most advanced technology content through our interactive carousel experience
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel Display */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentItems.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-12 p-12">
                    {/* Content Info */}
                    <div className="flex flex-col justify-center">
                      <div className="text-8xl mb-6 animate-pulse">{item.icon}</div>
                      <h3 className="text-4xl font-bold mb-6">{item.title}</h3>
                      <p className="text-xl opacity-90 mb-8">{item.description}</p>
                      
                      <div className="mb-8">
                        <h4 className="text-xl font-bold mb-4">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {item.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.gradient}`}></div>
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <Link
                          to={item.link}
                          className={`bg-gradient-to-r ${item.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                        >
                          Explore Now →
                        </Link>
                        <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
                          Watch Demo
                        </button>
                      </div>
                    </div>

                    {/* Visual Display */}
                    <div className="flex items-center justify-center">
                      <div className={`w-80 h-80 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-9xl animate-spin`}>
                        {item.icon}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content Preview Grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12">All Revolutionary Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => goToSlide(index)}
                className={`bg-gradient-to-br ${item.gradient} rounded-xl p-6 cursor-pointer hover:scale-105 transition-all duration-300 ${
                  index === currentSlide ? 'ring-4 ring-white/50' : ''
                }`}
              >
                <div className="text-4xl mb-4 text-center">{item.icon}</div>
                <h4 className="text-lg font-bold mb-2 text-center">{item.title}</h4>
                <p className="text-sm opacity-90 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6">Ready to Explore the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of pioneers exploring the most advanced technology ever created
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2036;