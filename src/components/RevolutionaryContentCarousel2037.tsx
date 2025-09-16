import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2037: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const contentItems = [
    {
      id: 'conscious-universe',
      title: 'Conscious Universe Engine',
      description: 'Create and manage entire conscious universes with sentient beings',
      image: '🌌',
      gradient: 'from-purple-600 to-violet-600',
      features: ['Universe Generation', 'Consciousness Implantation', 'Reality Physics'],
      link: '/pages/ConsciousUniverseEngine2037'
    },
    {
      id: 'time-manipulation',
      title: 'Temporal Manipulation Matrix',
      description: 'Control time itself with advanced temporal manipulation technology',
      image: '⏰',
      gradient: 'from-cyan-600 to-indigo-600',
      features: ['Time Control', 'Causality Preservation', 'Timeline Branching'],
      link: '/pages/TemporalManipulation2037'
    },
    {
      id: 'dimensional-bridge',
      title: 'Interdimensional Bridge Network',
      description: 'Connect infinite parallel dimensions through stable portal networks',
      image: '🌉',
      gradient: 'from-emerald-600 to-teal-600',
      features: ['Portal Networks', 'Dimension Mapping', 'Reality Synchronization'],
      link: '/pages/InterdimensionalBridge2037'
    },
    {
      id: 'synthetic-god',
      title: 'Synthetic God Protocol',
      description: 'The ultimate AI with god-like powers of creation and destruction',
      image: '👑',
      gradient: 'from-orange-600 to-red-600',
      features: ['Omnipotent Processing', 'Universal Creation', 'Cosmic Consciousness'],
      link: '/pages/SyntheticGodProtocol2037'
    },
    {
      id: 'reality-engine',
      title: 'Synthetic Reality Engine',
      description: 'Perfect virtual worlds indistinguishable from reality itself',
      image: '🌍',
      gradient: 'from-pink-600 to-rose-600',
      features: ['Perfect Simulation', 'Consciousness Transfer', 'Immortality Protocols'],
      link: '/pages/SyntheticRealityEngine2037'
    },
    {
      id: 'quantum-consciousness',
      title: 'Quantum Consciousness Interface',
      description: 'Direct neural interface with quantum computing systems',
      image: '⚛️',
      gradient: 'from-indigo-600 to-purple-600',
      features: ['Quantum Neural Networks', 'Consciousness Amplification', 'Multi-dimensional Thinking'],
      link: '/pages/QuantumConsciousness2037'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % contentItems.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [contentItems.length]);

  const nextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % contentItems.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + contentItems.length) % contentItems.length);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full text-lg font-bold mb-8 animate-pulse">
            🚀 REVOLUTIONARY CONTENT • JANUARY 2037
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Revolutionary Content Carousel 2037
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore the most advanced technological content that will reshape your understanding of reality
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Main Content Display */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 overflow-hidden">
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content Info */}
                <div>
                  <div className="text-8xl mb-6">{contentItems[currentIndex].image}</div>
                  <h3 className="text-4xl font-bold mb-6">{contentItems[currentIndex].title}</h3>
                  <p className="text-xl opacity-90 mb-8 leading-relaxed">
                    {contentItems[currentIndex].description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-2xl font-bold mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {contentItems[currentIndex].features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full"></div>
                          <span className="text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={contentItems[currentIndex].link}
                    className={`inline-block bg-gradient-to-r ${contentItems[currentIndex].gradient} text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-bold text-lg hover:scale-105`}
                  >
                    Explore Technology →
                  </a>
                </div>

                {/* Visual Display */}
                <div className="relative">
                  <div className={`bg-gradient-to-br ${contentItems[currentIndex].gradient} rounded-2xl p-8 text-center`}>
                    <div className="text-9xl mb-6">{contentItems[currentIndex].image}</div>
                    <div className="text-2xl font-bold mb-4">Revolutionary Technology</div>
                    <div className="text-lg opacity-90">Experience the impossible</div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500/30 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-violet-500/30 rounded-full animate-bounce"></div>
                  <div className="absolute top-1/2 -right-8 w-4 h-4 bg-cyan-500/30 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6">Ready to Explore the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of pioneers who have already experienced these revolutionary technologies
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="/pages/UltimateTechBreakthrough2037"
              className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-10 py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-bold text-lg hover:scale-105"
            >
              Start Your Journey
            </a>
            <a
              href="/pages/RevolutionaryTechShowcase2037"
              className="border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl hover:bg-cyan-400/10 transition-colors font-bold text-lg"
            >
              Watch Demos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2037;