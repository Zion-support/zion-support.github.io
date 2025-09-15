import React, { useState, useEffect } from 'react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  link: string;
  category: string;
  featured: boolean;
  image: string;
}

const DynamicContentCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'Ultimate Tech Guide 2025',
      description: 'Master the future of technology with our comprehensive guide covering AI, Quantum Computing, and Neural Interfaces.',
      link: '/pages/UltimateTechGuide2025',
      category: 'Guide',
      featured: true,
      image: '🤖'
    },
    {
      id: '2',
      title: 'Enterprise Innovation 2025',
      description: 'Transform your enterprise with cutting-edge AI, automation, and digital solutions that drive unprecedented growth.',
      link: '/pages/EnterpriseInnovation2025',
      category: 'Enterprise',
      featured: true,
      image: '🏢'
    },
    {
      id: '3',
      title: 'Future Tech Trends 2025',
      description: 'Explore emerging technologies that will shape our world - from quantum computing to synthetic intelligence.',
      link: '/pages/FutureTechTrends2025',
      category: 'Trends',
      featured: true,
      image: '🔮'
    },
    {
      id: '4',
      title: 'AI Revolution 2025',
      description: 'Discover how artificial intelligence is reshaping industries and creating new opportunities in 2025.',
      link: '/pages/AIRevolution2025',
      category: 'AI',
      featured: false,
      image: '🚀'
    },
    {
      id: '5',
      title: 'Quantum Computing Revolution',
      description: 'Experience the future of computing with quantum technology that solves impossible problems.',
      link: '/pages/QuantumComputingRevolution2025',
      category: 'Quantum',
      featured: false,
      image: '⚡'
    },
    {
      id: '6',
      title: 'Neural Interface Revolution',
      description: 'Bridge the gap between mind and machine with direct neural interfaces and brain-computer communication.',
      link: '/pages/NeuralInterfaceRevolution2025',
      category: 'Neural',
      featured: false,
      image: '🧬'
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
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

  const featuredItems = contentItems.filter(item => item.featured);

  return (
    <div className="relative">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {contentItems.map((item, index) => (
            <div key={item.id} className="w-full flex-shrink-0">
              <div className="grid md:grid-cols-2 gap-8 p-12">
                <div className="flex flex-col justify-center text-white">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
                      {item.category}
                    </span>
                  </div>
                  <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
                  <p className="text-xl opacity-90 mb-6">{item.description}</p>
                  <a 
                    href={item.link}
                    className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                  >
                    Explore Content →
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-9xl opacity-20">{item.image}</div>
                </div>
              </div>
            </div>
          ))}
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
      <div className="flex justify-center space-x-2 mt-6">
        {contentItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-purple-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Featured Content Grid */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">🌟 Featured Content</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4 text-center">{item.image}</div>
              <h4 className="text-xl font-semibold mb-2 text-center">{item.title}</h4>
              <p className="text-gray-600 mb-4 text-center text-sm">{item.description}</p>
              <a 
                href={item.link}
                className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicContentCarousel;