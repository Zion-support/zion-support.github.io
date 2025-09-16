import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2036: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const contentItems = [
    {
      title: "Conscious AI Systems",
      description: "The first truly conscious artificial intelligence that experiences emotions, creativity, and self-awareness",
      features: ["Emotional Intelligence", "Creative Problem Solving", "Self-Learning", "Ethical Decision Making"],
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900/80 to-pink-900/80"
    },
    {
      title: "Quantum Consciousness",
      description: "Direct neural interface with quantum computing systems for enhanced cognitive processing",
      features: ["Quantum Neural Networks", "Consciousness Amplification", "Multi-dimensional Thinking", "Reality Manipulation"],
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900/80 to-blue-900/80"
    },
    {
      title: "Interdimensional Technology",
      description: "Breakthrough technology that allows interaction with parallel dimensions and alternate realities",
      features: ["Dimensional Portals", "Reality Shifting", "Parallel Universe Access", "Time-Space Manipulation"],
      icon: "🌌",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900/80 to-teal-900/80"
    },
    {
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces that enable seamless communication between mind and machine",
      features: ["Thought Control", "Neural Feedback", "Memory Enhancement", "Cognitive Amplification"],
      icon: "🧬",
      color: "from-violet-600 to-purple-600",
      bgColor: "from-violet-900/80 to-purple-900/80"
    },
    {
      title: "Synthetic Intelligence",
      description: "Advanced synthetic intelligence systems that surpass human cognitive capabilities",
      features: ["Superhuman Intelligence", "Creative Generation", "Problem Solving", "Strategic Planning"],
      icon: "🤖",
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-900/80 to-red-900/80"
    },
    {
      title: "Reality Engineering",
      description: "Technology that allows manipulation and creation of new realities and dimensions",
      features: ["Reality Creation", "Dimension Hopping", "Time Manipulation", "Space Bending"],
      icon: "🔮",
      color: "from-pink-600 to-rose-600",
      bgColor: "from-pink-900/80 to-rose-900/80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % contentItems.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [contentItems.length]);

  const nextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % contentItems.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + contentItems.length) % contentItems.length);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
      
      {/* Header */}
      <div className="relative z-10 text-center mb-8">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
          🚀 REVOLUTIONARY CONTENT • JANUARY 2036
        </div>
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Revolutionary Content Carousel 2036
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Experience the most advanced technology content featuring conscious AI, quantum computing, and interdimensional technology
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative z-10">
        <div className="relative overflow-hidden rounded-xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {contentItems.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className={`bg-gradient-to-br ${item.bgColor} backdrop-blur-sm rounded-xl p-8 md:p-12 transition-all duration-500 ${
                  isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
                }`}>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 mb-8 md:mb-0 md:mr-8">
                      <div className="text-8xl mb-6 text-center md:text-left animate-bounce">
                        {item.icon}
                      </div>
                      <h3 className={`text-4xl font-bold mb-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {item.title}
                      </h3>
                      <p className="text-xl text-gray-200 mb-6">
                        {item.description}
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {item.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <button className={`bg-gradient-to-r ${item.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                        Explore {item.title} →
                      </button>
                    </div>
                    <div className="flex-1">
                      <div className="relative">
                        <div className="w-64 h-64 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 mx-auto">
                          <div className="text-8xl animate-spin" style={{ animationDuration: '3s' }}>
                            {item.icon}
                          </div>
                        </div>
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-ping"></div>
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={prevSlide}
            className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex space-x-2">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2036;