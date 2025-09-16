import React, { useState, useEffect } from 'react';

const DynamicContentCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentItems = [
    {
      id: 1,
      title: 'Conscious AI Revolution',
      description: 'Experience the world\'s first truly conscious artificial intelligence systems',
      image: '🧠',
      gradient: 'from-purple-600 to-pink-600',
      link: '/pages/RevolutionaryTechBreakthrough2025',
      features: ['Self-aware decision making', 'Emotional intelligence', 'Autonomous problem solving']
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough',
      description: 'Revolutionary quantum processors solving impossible problems at light speed',
      image: '⚛️',
      gradient: 'from-cyan-600 to-blue-600',
      link: '/pages/NextGenInnovationHub2025',
      features: ['Parallel universe computing', 'Quantum entanglement', 'Instantaneous processing']
    },
    {
      id: 3,
      title: 'Neural Interface Technology',
      description: 'Direct brain-computer interfaces enabling thought-controlled technology',
      image: '🧬',
      gradient: 'from-emerald-600 to-teal-600',
      link: '/pages/RevolutionaryTechBreakthrough2025',
      features: ['Thought control', 'Neural feedback', 'Real-time processing']
    },
    {
      id: 4,
      title: 'Interdimensional Computing',
      description: 'Technology that transcends dimensional boundaries for infinite possibilities',
      image: '🌌',
      gradient: 'from-orange-600 to-red-600',
      link: '/pages/NextGenInnovationHub2025',
      features: ['Multi-dimensional processing', 'Reality manipulation', 'Universal connectivity']
    },
    {
      id: 5,
      title: 'Consciousness Transfer',
      description: 'Breakthrough technology for transferring human consciousness to digital systems',
      image: '🔮',
      gradient: 'from-violet-600 to-purple-600',
      link: '/pages/RevolutionaryTechBreakthrough2025',
      features: ['Digital immortality', 'Consciousness backup', 'Mind uploading']
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(timer);
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
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white rounded-2xl p-8 mb-12 overflow-hidden">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">🌟 Revolutionary Technology Showcase 2025</h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Discover the most advanced technologies that are reshaping our world
        </p>
      </div>

      <div className="relative">
        {/* Main Content Display */}
        <div className="relative h-96 rounded-xl overflow-hidden">
          {contentItems.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className={`h-full bg-gradient-to-br ${item.gradient} p-8 flex items-center`}>
                <div className="grid md:grid-cols-2 gap-8 w-full">
                  <div className="flex flex-col justify-center">
                    <div className="text-8xl mb-4">{item.image}</div>
                    <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                    <p className="text-xl opacity-90 mb-6">{item.description}</p>
                    <ul className="space-y-2 mb-6">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={item.link}
                      className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                    >
                      Explore Technology →
                    </a>
                  </div>
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-64 h-64 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="text-9xl">{item.image}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
        {contentItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => goToSlide(index)}
            className={`p-4 rounded-lg transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white/20 scale-105'
                : 'bg-white/10 hover:bg-white/15'
            }`}
          >
            <div className="text-3xl mb-2">{item.image}</div>
            <div className="text-sm font-semibold text-center">{item.title}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DynamicContentCarousel2025;