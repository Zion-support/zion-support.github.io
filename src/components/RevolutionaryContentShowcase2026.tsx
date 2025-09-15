import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentSlides = [
    {
      id: 'ai-transformation',
      title: 'Advanced AI Transformation 2026',
      description: 'Revolutionary AI systems that operate independently and continuously evolve',
      icon: '🧠',
      gradient: 'from-purple-600 to-pink-600',
      link: '/pages/AdvancedAITransformation2026',
      features: ['Autonomous Agents', 'Quantum Processing', 'Predictive Intelligence'],
      stats: { value: '300%', label: 'Productivity Increase' }
    },
    {
      id: 'next-gen-tech',
      title: 'Next-Gen Tech Showcase 2026',
      description: 'Explore cutting-edge technologies reshaping our world',
      icon: '🌟',
      gradient: 'from-cyan-600 to-blue-600',
      link: '/pages/NextGenTechShowcase2026',
      features: ['Interactive Tabs', 'Future Predictions', 'Impact Metrics'],
      stats: { value: '1000x', label: 'Decision Speed' }
    },
    {
      id: 'quantum-neural',
      title: 'Quantum-Neural Fusion 2026',
      description: 'Revolutionary fusion of quantum computing and neural interfaces',
      icon: '⚛️',
      gradient: 'from-emerald-600 to-teal-600',
      link: '/pages/QuantumNeuralFusion2026',
      features: ['Quantum Neural Networks', 'Brain-Computer Interface', 'Consciousness Transfer'],
      stats: { value: '99.9%', label: 'Accuracy Rate' }
    },
    {
      id: 'synthetic-intelligence',
      title: 'Synthetic Intelligence 2026',
      description: 'Artificially created intelligence that surpasses human capabilities',
      icon: '🤖',
      gradient: 'from-violet-600 to-purple-600',
      link: '/pages/SyntheticIntelligence2026',
      features: ['Self-Awareness', 'Creative Problem Solving', 'Emotional Intelligence'],
      stats: { value: '85%', label: 'Efficiency Gain' }
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, contentSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 REVOLUTIONARY CONTENT 2026
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Experience the Future of Technology
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover our groundbreaking content that showcases the most advanced technologies and innovations of 2026
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Container */}
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentSlides.map((slide, index) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Content */}
                      <div>
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="text-6xl">{slide.icon}</div>
                          <div>
                            <h3 className="text-3xl font-bold mb-2">{slide.title}</h3>
                            <div className={`inline-block px-4 py-2 bg-gradient-to-r ${slide.gradient} rounded-full text-white text-sm font-semibold`}>
                              NEW 2026
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-xl text-gray-300 mb-6">{slide.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          {slide.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex items-center space-x-6 mb-6">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-cyan-400">{slide.stats.value}</div>
                            <div className="text-sm text-gray-400">{slide.stats.label}</div>
                          </div>
                        </div>
                        
                        <a
                          href={slide.link}
                          className={`inline-block bg-gradient-to-r ${slide.gradient} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                        >
                          Explore {slide.title} →
                        </a>
                      </div>
                      
                      {/* Visual Element */}
                      <div className="relative">
                        <div className={`bg-gradient-to-br ${slide.gradient} rounded-xl p-8 text-center`}>
                          <div className="text-8xl mb-4">{slide.icon}</div>
                          <div className="text-2xl font-bold mb-4">Revolutionary Technology</div>
                          <div className="text-lg opacity-90">2026 Edition</div>
                        </div>
                        
                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-pulse"></div>
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
                        <div className="absolute top-1/2 -right-8 w-4 h-4 bg-pink-400 rounded-full animate-pulse delay-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 mt-8">
          {contentSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-cyan-400 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
              isAutoPlaying
                ? 'bg-cyan-600 text-white'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'} Auto-rotation
          </button>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-6">Quick Access to All Content</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {contentSlides.map((slide, index) => (
              <a
                key={slide.id}
                href={slide.link}
                className={`bg-gradient-to-br ${slide.gradient} rounded-lg p-4 text-center hover:scale-105 transition-all duration-300 ${
                  index === currentSlide ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                <div className="text-3xl mb-2">{slide.icon}</div>
                <div className="text-sm font-semibold">{slide.title.split(' ')[0]}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;