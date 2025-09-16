import React, { useState, useEffect } from 'react';

const DynamicContentCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentItems = [
    {
      id: 'ai-revolution',
      title: 'AI Revolution 2025',
      description: 'Experience the next generation of artificial intelligence that thinks, learns, and creates independently',
      image: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: ['Conscious AI Systems', 'Autonomous Learning', 'Creative Problem Solving', 'Emotional Intelligence'],
      link: '/pages/AIRevolution2025',
      badge: 'BREAKTHROUGH'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Revolution',
      description: 'Unlock infinite processing power with quantum technology that operates at the speed of thought',
      image: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      features: ['Quantum Entanglement', 'Parallel Processing', 'Instant Calculations', 'Reality Manipulation'],
      link: '/pages/QuantumComputingRevolution2025',
      badge: 'REVOLUTIONARY'
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interface Technology',
      description: 'Bridge the gap between mind and machine with direct neural communication systems',
      image: '🧬',
      color: 'from-emerald-600 to-teal-600',
      features: ['Thought Control', 'Neural Feedback', 'Memory Enhancement', 'Cognitive Amplification'],
      link: '/pages/NeuralInterfaceRevolution2025',
      badge: 'FUTURE'
    },
    {
      id: 'dimensional-gateway',
      title: 'Dimensional Gateway',
      description: 'Access computing power from parallel dimensions and unlock infinite possibilities',
      image: '🌌',
      color: 'from-indigo-600 to-purple-600',
      features: ['Multi-Reality Processing', 'Infinite Storage', 'Cross-Dimensional Sync', 'Reality Bridging'],
      link: '/pages/DimensionalGateway2025',
      badge: 'INFINITE'
    },
    {
      id: 'consciousness-computing',
      title: 'Consciousness Computing',
      description: 'The fusion of human consciousness with artificial intelligence for unprecedented capabilities',
      image: '✨',
      color: 'from-pink-600 to-rose-600',
      features: ['Conscious AI', 'Human-AI Fusion', 'Enhanced Cognition', 'Transcendent Intelligence'],
      link: '/pages/ConsciousnessComputing2025',
      badge: 'TRANSCENDENT'
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % contentItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, contentItems.length]);

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
    <div className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 DYNAMIC CONTENT SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the most advanced technologies that will define the future. 
            Each innovation represents a breakthrough that will reshape our world.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentItems.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-8 p-8">
                    {/* Content */}
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
                          {item.badge}
                        </span>
                        <span className="text-4xl">{item.image}</span>
                      </div>
                      
                      <h3 className="text-4xl font-bold mb-4">{item.title}</h3>
                      <p className="text-lg opacity-90 mb-6">{item.description}</p>
                      
                      <div className="space-y-3 mb-8">
                        {item.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                            <span className="text-white/90">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex space-x-4">
                        <a
                          href={item.link}
                          className={`bg-gradient-to-r ${item.color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                        >
                          Explore Technology →
                        </a>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold">
                          Watch Demo
                        </button>
                      </div>
                    </div>

                    {/* Visual */}
                    <div className="flex items-center justify-center">
                      <div className={`w-80 h-80 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-8xl shadow-2xl`}>
                        {item.image}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Technology Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
            <div className="text-sm text-white/70">Processing Power</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-sm text-white/70">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">0.001ms</div>
            <div className="text-sm text-white/70">Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">47</div>
            <div className="text-sm text-white/70">Dimensions</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of organizations already using our revolutionary technology
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentCarousel2025;