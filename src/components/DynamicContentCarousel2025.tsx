import React, { useState, useEffect } from 'react';

const DynamicContentCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentItems = [
    {
      id: 'ai-revolution',
      title: 'AI Revolution 2025',
      description: 'Discover how artificial intelligence is reshaping industries and creating new opportunities',
      image: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: ['Autonomous AI Agents', 'Edge AI Computing', 'Generative AI 2.0'],
      link: '/pages/AIRevolution2025'
    },
    {
      id: 'quantum-breakthrough',
      title: 'Quantum Computing Breakthrough',
      description: 'Experience the future of computing with quantum technology solving impossible problems',
      image: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      features: ['Exponential Speed', 'Quantum Cryptography', 'Molecular Simulation'],
      link: '/pages/QuantumComputingBreakthrough'
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interface Technology',
      description: 'Bridge the gap between mind and machine with direct neural interfaces',
      image: '🧬',
      color: 'from-emerald-600 to-teal-600',
      features: ['Non-Invasive BCI', 'Thought Control', 'Neural Feedback'],
      link: '/pages/NeuralInterfaceFuture'
    },
    {
      id: 'holographic-displays',
      title: 'Holographic Display Systems',
      description: 'Interact with 3D holograms in real-time using advanced projection technology',
      image: '🌟',
      color: 'from-orange-600 to-red-600',
      features: ['True 3D Projection', 'Real-time Interaction', 'Haptic Feedback'],
      link: '/pages/HolographicDisplay2025'
    },
    {
      id: 'blockchain-innovation',
      title: 'Blockchain Innovation',
      description: 'Secure, decentralized solutions powered by next-generation blockchain technology',
      image: '🔗',
      color: 'from-indigo-600 to-purple-600',
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Marketplaces'],
      link: '/pages/BlockchainInnovation2025'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
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

  const currentItem = contentItems[currentSlide];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 DYNAMIC CONTENT • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Content
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Explore our comprehensive collection of cutting-edge technology solutions and innovations
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/30">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentItems.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-12 p-12">
                    {/* Content */}
                    <div className="flex flex-col justify-center">
                      <div className="text-8xl mb-6 animate-pulse">{item.image}</div>
                      <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {item.title}
                      </h3>
                      <p className="text-xl opacity-90 mb-8">
                        {item.description}
                      </p>
                      
                      <div className="space-y-4 mb-8">
                        {item.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                            <span className="text-purple-100 text-lg">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex space-x-4">
                        <a
                          href={item.link}
                          className={`bg-gradient-to-r ${item.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                        >
                          Explore Now →
                        </a>
                        <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
                          Learn More
                        </button>
                      </div>
                    </div>

                    {/* Visual Element */}
                    <div className="flex items-center justify-center">
                      <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 w-full max-w-md">
                        <div className="text-center">
                          <div className="text-9xl mb-6 animate-bounce">{item.image}</div>
                          <div className="text-purple-300 text-lg mb-4">Interactive Demo</div>
                          <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-lg p-4">
                            <div className="text-purple-200 text-sm space-y-2">
                              <div>Status: Active</div>
                              <div>Performance: 99.9%</div>
                              <div>Users: 50M+</div>
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

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/70 transition-colors"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/70 transition-colors"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/70 transition-colors"
            aria-label={isAutoPlaying ? 'Pause auto-play' : 'Resume auto-play'}
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

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-gradient-to-r from-purple-400 to-pink-400 w-8'
                  : 'bg-purple-600/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => goToSlide(index)}
              className={`bg-gradient-to-br ${item.color}/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300 cursor-pointer ${
                index === currentSlide ? 'ring-2 ring-purple-400' : ''
              }`}
            >
              <div className="text-4xl mb-4">{item.image}</div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-purple-200 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
            <div className="text-purple-300">Technology Solutions</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">50M+</div>
            <div className="text-cyan-300">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">99.9%</div>
            <div className="text-emerald-300">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-orange-300">Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentCarousel2025;