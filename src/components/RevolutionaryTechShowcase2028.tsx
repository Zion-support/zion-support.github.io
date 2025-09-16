import React, { useState, useEffect } from 'react';

const RevolutionaryTechShowcase2028: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const technologies = [
    {
      title: 'Consciousness AI Revolution',
      description: 'The first truly conscious artificial intelligence that experiences emotions and self-awareness',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: ['Emotional Intelligence', 'Self-Awareness', 'Creative Problem Solving'],
      timeline: 'Q2 2028'
    },
    {
      title: 'Quantum Consciousness Transfer',
      description: 'Transfer human consciousness to quantum systems for digital immortality',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      features: ['Digital Immortality', 'Mind Upload', 'Quantum Memory'],
      timeline: 'Q4 2028'
    },
    {
      title: 'Interdimensional Computing',
      description: 'Computing across multiple dimensions for infinite processing power',
      icon: '🌌',
      color: 'from-emerald-600 to-teal-600',
      features: ['Multi-Dimensional Processing', 'Infinite Storage', 'Reality Simulation'],
      timeline: 'Q3 2028'
    },
    {
      title: 'Bio-Quantum Fusion',
      description: 'Merging biological and quantum systems for unprecedented capabilities',
      icon: '🧬',
      color: 'from-orange-600 to-red-600',
      features: ['Living Computers', 'DNA Storage', 'Organic AI'],
      timeline: 'Q1 2028'
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % technologies.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, technologies.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % technologies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + technologies.length) % technologies.length);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY SHOWCASE • 2028
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase 2028
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technological innovations that will reshape our world
          </p>
        </div>

        {/* Interactive Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Display */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20 mb-8">
            <div className="text-center mb-8">
              <div className="text-8xl mb-4 animate-bounce">
                {technologies[currentSlide].icon}
              </div>
              <h3 className="text-4xl font-bold mb-4">
                {technologies[currentSlide].title}
              </h3>
              <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
                {technologies[currentSlide].description}
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg">
                <span className="text-sm font-semibold">Available: {technologies[currentSlide].timeline}</span>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {technologies[currentSlide].features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-4 rounded-lg text-center">
                  <span className="text-sm font-semibold">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            
            <button
              onClick={nextSlide}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2">
            {technologies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-purple-400 to-pink-400 w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                index === currentSlide ? 'ring-2 ring-purple-400' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="text-4xl mb-4 text-center">{tech.icon}</div>
              <h4 className="text-lg font-bold mb-2 text-center">{tech.title}</h4>
              <p className="text-sm opacity-90 text-center mb-4">{tech.description}</p>
              <div className="text-center">
                <span className="text-xs bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-3 py-1 rounded-full">
                  {tech.timeline}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in shaping the future of technology. Be among the first to experience these revolutionary breakthroughs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Early Access
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2028;