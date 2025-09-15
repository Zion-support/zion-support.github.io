import React, { useState, useEffect } from 'react';

const DynamicContentCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentItems = [
    {
      id: 1,
      title: "🧠 Synthetic Intelligence Revolution",
      description: "Experience the next generation of AI that transcends traditional limitations and evolves autonomously.",
      link: "/pages/SyntheticIntelligence2026",
      gradient: "from-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      id: 2,
      title: "⚛️ Quantum-Neural Fusion",
      description: "Discover the revolutionary convergence of quantum computing and neural networks for exponential processing power.",
      link: "/pages/QuantumNeuralFusion2026",
      gradient: "from-cyan-600 to-blue-600",
      icon: "⚛️"
    },
    {
      id: 3,
      title: "🧬 Neural Interface Technology",
      description: "Bridge the gap between mind and machine with direct neural interfaces and brain-computer communication.",
      link: "/pages/NeuralInterfaceRevolution2025",
      gradient: "from-emerald-600 to-teal-600",
      icon: "🧬"
    },
    {
      id: 4,
      title: "🚀 AI Revolution 2025",
      description: "Transform your business with cutting-edge AI solutions that reshape industries and create new opportunities.",
      link: "/pages/AIRevolution2025",
      gradient: "from-orange-600 to-red-600",
      icon: "🚀"
    },
    {
      id: 5,
      title: "⚡ Quantum Computing Breakthrough",
      description: "Experience quantum computing that solves impossible problems and unlocks unprecedented computational power.",
      link: "/pages/QuantumComputingBreakthrough2026",
      gradient: "from-indigo-600 to-purple-600",
      icon: "⚡"
    },
    {
      id: 6,
      title: "🌟 Next-Gen Technology Showcase",
      description: "Explore comprehensive showcase of next-generation technologies reshaping our world.",
      link: "/pages/NextGenTechShowcase2025",
      gradient: "from-pink-600 to-rose-600",
      icon: "🌟"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, contentItems.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + contentItems.length) % contentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentItem = contentItems[currentIndex];

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 overflow-hidden">
      {/* Carousel Container */}
      <div className="relative h-96 overflow-hidden rounded-xl">
        {/* Main Content */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {contentItems.map((item, index) => (
            <div
              key={item.id}
              className="w-full flex-shrink-0 h-full relative"
            >
              <div className={`bg-gradient-to-br ${item.gradient} h-full rounded-xl flex items-center justify-center text-white relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
                
                <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
                  <div className="text-8xl mb-6 animate-bounce">{item.icon}</div>
                  <h3 className="text-4xl font-bold mb-6">{item.title}</h3>
                  <p className="text-xl opacity-90 mb-8">{item.description}</p>
                  <a
                    href={item.link}
                    className="inline-block bg-white text-gray-800 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg"
                  >
                    Explore {item.title.split(' ')[0]} →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors z-20"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors z-20"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Auto-play Toggle */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors z-20"
        >
          {isAutoPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-6">
        {contentItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Content Preview Grid */}
      <div className="mt-8">
        <h4 className="text-lg font-semibold text-gray-700 mb-4 text-center">Explore All Revolutionary Technologies</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {contentItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => goToSlide(index)}
              className={`p-3 rounded-lg text-center transition-all duration-300 ${
                index === currentIndex 
                  ? `bg-gradient-to-r ${item.gradient} text-white shadow-lg scale-105` 
                  : 'bg-white hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <div className="text-2xl mb-1">{item.icon}</div>
              <div className="text-xs font-medium truncate">{item.title.split(' ')[0]}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicContentCarousel;