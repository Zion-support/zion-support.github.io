import React, { useState, useEffect } from 'react';

const EnhancedContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentItems = [
    {
      id: 'revolutionary-breakthrough',
      title: 'Revolutionary Tech Breakthrough 2026',
      description: 'Experience the most advanced technological innovations reshaping our world',
      image: '🚀',
      gradient: 'from-purple-600 to-pink-600',
      link: '/pages/RevolutionaryTechBreakthrough2026',
      features: ['AI Consciousness', 'Quantum Neural Networks', 'Neural Reality Interface'],
      badge: 'NEW'
    },
    {
      id: 'ai-consciousness',
      title: 'AI Consciousness Revolution',
      description: 'Witness the birth of artificial consciousness and self-aware AI systems',
      image: '🧠',
      gradient: 'from-indigo-600 to-purple-600',
      link: '/pages/AIConsciousnessRevolution2026',
      features: ['Self-Awareness', 'Emotional Intelligence', 'Creative Expression'],
      badge: 'BREAKTHROUGH'
    },
    {
      id: 'future-trends',
      title: 'Future Tech Trends 2026',
      description: 'Explore revolutionary technologies defining the future of civilization',
      image: '🔮',
      gradient: 'from-cyan-600 to-blue-600',
      link: '/pages/FutureTechTrends2026',
      features: ['Quantum Computing', 'AGI Emergence', 'Neural Interfaces'],
      badge: 'TRENDING'
    },
    {
      id: 'quantum-revolution',
      title: 'Quantum Computing Revolution',
      description: 'Breakthrough quantum technologies solving impossible problems',
      image: '⚡',
      gradient: 'from-emerald-600 to-teal-600',
      link: '/pages/QuantumComputingRevolution2026',
      features: ['Quantum Supremacy', 'Error Correction', 'Quantum Internet'],
      badge: 'HOT'
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Future',
      description: 'Direct brain-computer interfaces enabling mind-machine communication',
      image: '🧬',
      gradient: 'from-orange-600 to-red-600',
      link: '/pages/NeuralInterfaceRevolution2026',
      features: ['Non-Invasive BCI', 'Thought Control', 'Memory Enhancement'],
      badge: 'FUTURE'
    },
    {
      id: 'holographic-computing',
      title: 'Holographic Computing',
      description: 'Three-dimensional computing environments in physical space',
      image: '🌟',
      gradient: 'from-violet-600 to-purple-600',
      link: '/pages/HolographicComputing2026',
      features: ['3D Displays', 'Spatial Computing', 'Holographic Storage'],
      badge: 'INNOVATIVE'
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
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT SHOWCASE • 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Content Showcase
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover our most advanced and innovative content featuring breakthrough technologies and revolutionary concepts
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentItems.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${item.gradient} p-12 text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                    <div className="relative z-10">
                      <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                          <div className="flex items-center mb-4">
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mr-4">
                              {item.badge}
                            </span>
                            <div className="text-6xl">{item.image}</div>
                          </div>
                          <h3 className="text-4xl font-bold mb-6">{item.title}</h3>
                          <p className="text-xl opacity-90 mb-8">{item.description}</p>
                          
                          <div className="mb-8">
                            <h4 className="text-lg font-bold mb-4">Key Features:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                              {item.features.map((feature, idx) => (
                                <div key={idx} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                                  <span className="text-sm font-semibold">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex space-x-4">
                            <a
                              href={item.link}
                              className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg"
                            >
                              Explore Now →
                            </a>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                              Learn More
                            </button>
                          </div>
                        </div>
                        
                        <div className="hidden lg:block">
                          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                            <div className="text-center">
                              <div className="text-8xl mb-4">{item.image}</div>
                              <div className="text-2xl font-bold mb-4">{item.title}</div>
                              <div className="text-lg opacity-90">{item.description}</div>
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
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            {isAutoPlaying ? (
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

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-purple-500 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Content Grid */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">All Revolutionary Content</h3>
            <p className="text-lg opacity-90">Explore our complete collection of breakthrough content</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentItems.map((item) => (
              <div key={item.id} className={`bg-gradient-to-br ${item.gradient} rounded-xl p-6 text-white hover:scale-105 transition-all duration-300`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{item.image}</div>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold">
                    {item.badge}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="opacity-90 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.features.slice(0, 2).map((feature, idx) => (
                    <span key={idx} className="bg-white/20 backdrop-blur-sm rounded px-2 py-1 text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
                <a
                  href={item.link}
                  className="block w-full bg-white text-gray-900 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-center"
                >
                  Explore →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold mb-6">Ready to Explore the Future?</h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Dive deep into our revolutionary content and discover the technologies that are reshaping our world.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Exploring
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
              Subscribe for Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase2026;