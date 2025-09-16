import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2027: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentItems = [
    {
      id: 1,
      title: "Revolutionary Technology 2027",
      description: "Experience the most advanced technological breakthroughs that are reshaping reality itself.",
      image: "🚀",
      link: "/pages/RevolutionaryTech2027",
      gradient: "from-purple-600 to-pink-600",
      features: ["Consciousness Computing", "Quantum Reality", "Interdimensional Tech"]
    },
    {
      id: 2,
      title: "Advanced Consciousness Computing",
      description: "Break through the barriers between mind and machine with revolutionary consciousness computing.",
      image: "🧠",
      link: "/pages/AdvancedConsciousnessComputing2027",
      gradient: "from-indigo-600 to-purple-600",
      features: ["Neural Interfaces", "Consciousness Transfer", "Cognitive Enhancement"]
    },
    {
      id: 3,
      title: "Quantum Reality Engine",
      description: "Manipulate the fundamental forces of reality itself with our revolutionary quantum reality engine.",
      image: "⚡",
      link: "/pages/QuantumRealityEngine2027",
      gradient: "from-cyan-600 to-blue-600",
      features: ["Reality Manipulation", "Space-Time Control", "Quantum Fields"]
    },
    {
      id: 4,
      title: "Interdimensional Computing",
      description: "Access computing power from parallel dimensions and alternate realities.",
      image: "🌌",
      link: "/pages/InterdimensionalComputing2027",
      gradient: "from-emerald-600 to-teal-600",
      features: ["Cross-Dimensional Processing", "Reality Simulation", "Multiverse Access"]
    },
    {
      id: 5,
      title: "Synthetic Consciousness",
      description: "AI systems with genuine consciousness and emotional intelligence.",
      image: "🤖",
      link: "/pages/SyntheticIntelligence2026",
      gradient: "from-violet-600 to-fuchsia-600",
      features: ["True AI Consciousness", "Emotional Intelligence", "Creative Synthesis"]
    },
    {
      id: 6,
      title: "Predictive Reality",
      description: "See and manipulate future probabilities with advanced predictive algorithms.",
      image: "🔮",
      link: "/pages/FutureTechBreakthrough2026",
      gradient: "from-rose-600 to-pink-600",
      features: ["Future Mapping", "Probability Control", "Timeline Manipulation"]
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
    <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 mb-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">🌟 Revolutionary Technology Showcase 2027</h2>
          <p className="text-xl text-gray-300">Discover the most advanced technologies that are reshaping reality itself</p>
        </div>

        <div className="relative">
          {/* Main Carousel */}
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${item.gradient} rounded-xl p-8 text-white`}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="text-8xl mb-6 text-center md:text-left">{item.image}</div>
                        <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                        <p className="text-xl opacity-90 mb-6">{item.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {item.features.map((feature, index) => (
                            <span key={index} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                              {feature}
                            </span>
                          ))}
                        </div>
                        <a 
                          href={item.link}
                          className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg"
                        >
                          Explore {item.title} →
                        </a>
                      </div>
                      <div className="hidden md:block">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                          <h4 className="text-xl font-bold mb-4">Key Features</h4>
                          <ul className="space-y-2">
                            {item.features.map((feature, index) => (
                              <li key={index} className="flex items-center space-x-2">
                                <span className="w-2 h-2 bg-white rounded-full"></span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-6">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {contentItems.map((item, index) => (
            <a
              key={item.id}
              href={item.link}
              className={`bg-gradient-to-br ${item.gradient} rounded-lg p-4 text-white text-center hover:scale-105 transition-all duration-300 ${
                index === currentSlide ? 'ring-2 ring-white' : ''
              }`}
            >
              <div className="text-3xl mb-2">{item.image}</div>
              <div className="text-sm font-semibold">{item.title.split(' ')[0]}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2027;