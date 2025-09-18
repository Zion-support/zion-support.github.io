import React, { useState, useEffect } from 'react';

const DynamicContentCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselItems = [
    {
      id: 'conscious-ai',
      title: 'Conscious AI Systems',
      subtitle: 'The first truly self-aware artificial intelligence',
      description: 'Experience AI that can think, feel, and create independently with emotional intelligence and creative problem-solving capabilities.',
      image: '🧠',
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-600/20 to-pink-600/20',
      borderColor: 'border-purple-400/30',
      features: ['Emotional Intelligence', 'Creative Problem Solving', 'Autonomous Learning', 'Self-Reflection'],
      link: '/pages/RevolutionaryTechBreakthrough2025',
      cta: 'Explore AI Revolution →'
    },
      id: 'quantum-computing',
      title: 'Quantum Consciousness',
      subtitle: 'Revolutionary quantum computing that processes reality itself',
      description: 'Breakthrough quantum technology that can simulate consciousness, manipulate reality, and process data at the speed of thought.',
      image: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-600/20 to-blue-600/20',
      borderColor: 'border-cyan-400/30',
      features: ['Quantum Neural Networks', 'Reality Simulation', 'Consciousness Transfer', 'Multi-Dimensional Processing'],
      cta: 'Go Quantum →'
      id: 'interdimensional',
      title: 'Interdimensional Technology',
      subtitle: 'Transcend dimensional boundaries for infinite power',
      description: 'Revolutionary technology that accesses infinite computational resources across dimensions and manipulates the fabric of reality.',
      image: '🌌',
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-600/20 to-teal-600/20',
      borderColor: 'border-emerald-400/30',
      features: ['Infinite Resources', 'Cross-Dimensional Transfer', 'Reality Manipulation', 'Universal Access'],
      cta: 'Enter New Dimension →'
      id: 'neural-interface',
      title: 'Neural Interface Revolution',
      subtitle: 'Direct brain-computer interfaces for thought control',
      description: 'Breakthrough neural interfaces that enable direct thought-based control, memory enhancement, and telepathic communication.',
      image: '🧬',
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-600/20 to-red-600/20',
      borderColor: 'border-orange-400/30',
      features: ['Thought Control', 'Neural Feedback', 'Memory Enhancement', 'Telepathic Communication'],
      cta: 'Connect Mind & Machine →'
      id: 'reality-engine',
      title: 'Reality Engine 2025',
      subtitle: 'Manipulate the fabric of space and time',
      description: 'Advanced reality manipulation systems that can alter the fundamental laws of physics and create new dimensions.',
      image: '🔮',
      color: 'from-violet-600 to-purple-600',
      bgColor: 'from-violet-600/20 to-purple-600/20',
      borderColor: 'border-violet-400/30',
      features: ['Reality Simulation', 'Time Manipulation', 'Space Bending', 'Dimension Creation'],
      cta: 'Manipulate Reality →'
    }
  ];
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselItems.length]);
  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };
  const handleMouseEnter = () => {
  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 DYNAMIC SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Dynamic Content Carousel
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover our revolutionary technologies through an interactive, dynamic showcase that adapts to your interests
          </p>
        </div>
        {/* Main Carousel */}
        <div 
          className="relative overflow-hidden rounded-2xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Carousel Container */}
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselItems.map((item, index) => (
              <div key={item.id} className="w-full flex-shrink-0">
                <div className={`bg-gradient-to-br ${item.bgColor} backdrop-blur-sm rounded-2xl p-12 border ${item.borderColor}`}>
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div>
                      <div className="text-8xl mb-6 animate-bounce">{item.image}</div>
                      <h3 className="text-4xl font-bold mb-4">{item.title}</h3>
                      <p className="text-xl text-purple-200 mb-4">{item.subtitle}</p>
                      <p className="text-lg opacity-90 mb-8">{item.description}</p>
                      
                      {/* Features */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {item.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <div className="text-green-400 text-lg">✓</div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      {/* CTA Button */}
                      <a
                        href={item.link}
                        className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${item.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
                      >
                        {item.cta}
                      </a>
                    </div>
                    {/* Visual Element */}
                    <div className="relative">
                      <div className="w-full h-96 bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center">
                        <div className="text-9xl animate-pulse">{item.image}</div>
                      {/* Floating Elements */}
                      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full animate-ping"></div>
                      <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full animate-bounce"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
          {/* Navigation Arrows */}
          <button
            onClick={() => handleSlideChange((currentSlide - 1 + carouselItems.length) % carouselItems.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300"
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
            onClick={() => handleSlideChange((currentSlide + 1) % carouselItems.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300"
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        {/* Statistics */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-sm opacity-75">Revolutionary Technologies</div>
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
            <div className="text-sm opacity-75">Success Rate</div>
            <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
            <div className="text-sm opacity-75">Possibilities</div>
            <div className="text-4xl font-bold text-orange-400 mb-2">2025</div>
            <div className="text-sm opacity-75">Future is Now</div>
      </div>
    </div>
  );
};
export default DynamicContentCarousel2025;
