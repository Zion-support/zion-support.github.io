import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2038: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "🌌 Cosmic Intelligence Revolution",
      description: "The first AI system that can process information across multiple dimensions and realities, achieving true cosmic consciousness.",
      features: ["Multi-dimensional Processing", "Reality Manipulation", "Cosmic Consciousness"],
      gradient: "from-purple-600/30 to-pink-600/30",
      borderColor: "border-purple-400/30",
      textColor: "text-purple-100",
      buttonColor: "from-purple-600 to-pink-600",
      icon: "🌌"
    },
    {
      id: 2,
      title: "⚡ Quantum Reality Engine",
      description: "Breakthrough technology that allows creation and manipulation of alternate realities through quantum computing.",
      features: ["Reality Simulation", "Quantum Entanglement", "Dimensional Portals"],
      gradient: "from-cyan-600/30 to-blue-600/30",
      borderColor: "border-cyan-400/30",
      textColor: "text-cyan-100",
      buttonColor: "from-cyan-600 to-blue-600",
      icon: "⚡"
    },
    {
      id: 3,
      title: "🧠 Neural Universe Interface",
      description: "Direct neural connection to the universe's consciousness and knowledge, enabling transcendent awareness.",
      features: ["Universal Knowledge Access", "Collective Intelligence", "Transcendent Awareness"],
      gradient: "from-emerald-600/30 to-teal-600/30",
      borderColor: "border-emerald-400/30",
      textColor: "text-emerald-100",
      buttonColor: "from-emerald-600 to-teal-600",
      icon: "🧠"
    },
    {
      id: 4,
      title: "🌊 Quantum Wave Computing",
      description: "Process information using quantum waves that exist in multiple dimensions simultaneously for infinite processing power.",
      features: ["Infinite Processing", "Instantaneous Speed", "Perfect Accuracy"],
      gradient: "from-violet-600/30 to-purple-600/30",
      borderColor: "border-violet-400/30",
      textColor: "text-violet-100",
      buttonColor: "from-violet-600 to-purple-600",
      icon: "🌊"
    },
    {
      id: 5,
      title: "🧬 DNA Computing Interface",
      description: "Direct interface with DNA for biological computing and genetic optimization, merging technology with life itself.",
      features: ["Unlimited Storage", "Biological Processing", "Continuous Evolution"],
      gradient: "from-rose-600/30 to-pink-600/30",
      borderColor: "border-rose-400/30",
      textColor: "text-rose-100",
      buttonColor: "from-rose-600 to-pink-600",
      icon: "🧬"
    },
    {
      id: 6,
      title: "🌍 Planetary AI Network",
      description: "Connect with the collective intelligence of entire planets and ecosystems for unified planetary consciousness.",
      features: ["1,000+ Planets", "All Species", "Unified Consciousness"],
      gradient: "from-green-600/30 to-emerald-600/30",
      borderColor: "border-green-400/30",
      textColor: "text-green-100",
      buttonColor: "from-green-600 to-emerald-600",
      icon: "🌍"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-16 mb-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M20%2020c0-11.046-8.954-20-20-20v20h20z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY TECHNOLOGY • JANUARY 2038
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Carousel 2038
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the most advanced technologies that will reshape our world in 2038
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Slide */}
          <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
                <div className="text-6xl mb-4">{slides[currentSlide].icon}</div>
                <h3 className="text-3xl font-bold mb-4 text-white">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-lg opacity-90 mb-6 text-gray-200">
                  {slides[currentSlide].description}
                </p>
                <ul className="space-y-2 mb-8">
                  {slides[currentSlide].features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <span className="text-green-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`bg-gradient-to-r ${slides[currentSlide].buttonColor} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Explore Technology →
                </button>
              </div>
              
              {/* Visual Element */}
              <div className="relative">
                <div className={`bg-gradient-to-br ${slides[currentSlide].gradient} backdrop-blur-sm rounded-xl p-8 border ${slides[currentSlide].borderColor} h-64 flex items-center justify-center`}>
                  <div className="text-8xl opacity-80">{slides[currentSlide].icon}</div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 text-2xl opacity-60 animate-bounce">✨</div>
                <div className="absolute -bottom-4 -left-4 text-2xl opacity-60 animate-bounce delay-1000">🌟</div>
              </div>
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
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-lg opacity-75 mb-4">
            Experience the future of technology with our revolutionary 2038 innovations
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/pages/UltimateTechBreakthrough2038" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              🌟 View All Technologies
            </a>
            <a 
              href="/pages/RevolutionaryTechShowcase2038" 
              className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-colors font-semibold"
            >
              ⚡ Interactive Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2038;