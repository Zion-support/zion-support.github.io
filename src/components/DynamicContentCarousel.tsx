import React, { useState, useEffect } from 'react';

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
  featured: boolean;
}

const DynamicContentCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const carouselItems: CarouselItem[] = [
    {
      id: '1',
      title: '🤖 AI Revolution 2025',
      description: 'Experience the transformative power of artificial intelligence as it reshapes industries and creates new opportunities.',
      image: '🧠',
      category: 'Artificial Intelligence',
      link: '/pages/AIRevolution2025',
      featured: true
    },
    {
      id: '2',
      title: '⚛️ Quantum Computing Breakthrough',
      description: 'Discover exponential computing power that solves impossible problems and accelerates scientific discovery.',
      image: '⚡',
      category: 'Quantum Technology',
      link: '/pages/QuantumComputingBreakthrough',
      featured: true
    },
    {
      id: '3',
      title: '🧬 Neural Interface Future',
      description: 'Bridge mind and machine with direct neural interfaces enabling thought-controlled computing.',
      image: '🧬',
      category: 'Neural Technology',
      link: '/pages/NeuralInterfaceFuture',
      featured: true
    },
    {
      id: '4',
      title: '🚀 Next-Gen Tech Showcase',
      description: 'Comprehensive showcase of next-generation technologies reshaping our world.',
      image: '🚀',
      category: 'Innovation',
      link: '/pages/NextGenTechShowcase2025',
      featured: false
    },
    {
      id: '5',
      title: '🧠 Synthetic Intelligence 2026',
      description: 'Self-evolving AI systems that transcend traditional limitations and create new possibilities.',
      image: '🌟',
      category: 'Future AI',
      link: '/pages/SyntheticIntelligence2026',
      featured: false
    },
    {
      id: '6',
      title: '⚛️ Quantum-Neural Fusion',
      description: 'The revolutionary convergence of quantum computing and neural networks.',
      image: '⚛️',
      category: 'Quantum AI',
      link: '/pages/QuantumNeuralFusion2026',
      featured: false
    }
  ];

  const featuredItems = carouselItems.filter(item => item.featured);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === featuredItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredItems.length, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredItems.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentItem = featuredItems[currentIndex];

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl overflow-hidden">
      {/* Main Carousel */}
      <div className="relative h-96 md:h-[500px]">
        {/* Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div className="text-white">
                <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
                  {currentItem.category}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  {currentItem.title}
                </h2>
                <p className="text-xl opacity-90 mb-6">
                  {currentItem.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={currentItem.link}
                    className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-center"
                  >
                    Explore Technology →
                  </a>
                  <button 
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold"
                  >
                    {isAutoPlaying ? 'Pause' : 'Play'}
                  </button>
                </div>
              </div>
              
              {/* Visual Element */}
              <div className="text-center">
                <div className="text-8xl md:text-9xl mb-4 animate-bounce">
                  {currentItem.image}
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="text-lg font-semibold mb-2">Interactive Demo</h3>
                  <p className="text-sm opacity-90">Experience this technology in action</p>
                </div>
              </div>
            </div>
          </div>
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

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {featuredItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Featured Items Grid */}
      <div className="p-6 bg-white/50 backdrop-blur-sm">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Featured Technologies</h3>
          <p className="text-gray-600">Explore our revolutionary technology showcase</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          {featuredItems.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl p-4 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                index === currentIndex ? 'ring-2 ring-purple-500 shadow-lg' : ''
              }`}
              onClick={() => goToSlide(index)}
            >
              <div className="text-3xl mb-2">{item.image}</div>
              <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* All Technologies Grid */}
      <div className="p-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">All Revolutionary Technologies</h3>
          <p className="opacity-90">Discover the complete range of breakthrough innovations</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          {carouselItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl mb-2">{item.image}</div>
              <h4 className="font-semibold mb-1">{item.title}</h4>
              <p className="text-sm opacity-90 mb-2">{item.description}</p>
              <div className="text-xs opacity-75 bg-white/20 px-2 py-1 rounded-full inline-block">
                {item.category}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicContentCarousel;