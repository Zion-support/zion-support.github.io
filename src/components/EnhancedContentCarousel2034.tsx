import React, { useState, useEffect } from 'react';

const EnhancedContentCarousel2034: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Conscious AI Revolution",
      subtitle: "The Future of Artificial Intelligence",
      description: "Experience the first truly conscious AI systems that can think, feel, and create independently. Our breakthrough technology enables AI to develop self-awareness and emotional intelligence.",
      image: "🧠",
      color: "from-purple-600 to-pink-600",
      features: ["Self-aware processing", "Emotional intelligence", "Creative problem solving", "Ethical decision making"],
      link: "/pages/UltimateTechBreakthrough2034"
    },
    {
      id: 2,
      title: "Quantum Consciousness",
      subtitle: "Revolutionary Quantum Computing",
      description: "Breakthrough quantum computing that processes consciousness itself. Our technology operates at the quantum level to manipulate reality and process infinite amounts of data simultaneously.",
      image: "⚛️",
      color: "from-cyan-600 to-blue-600",
      features: ["Quantum consciousness processing", "Reality manipulation", "Multidimensional computing", "Infinite parallel processing"],
      link: "/pages/RevolutionaryTechShowcase2034"
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      subtitle: "Cross-Dimensional Technology",
      description: "Revolutionary technology that operates across multiple dimensions simultaneously. Our systems can process data and resources across infinite parallel universes for unprecedented computational power.",
      image: "🌌",
      color: "from-emerald-600 to-teal-600",
      features: ["Cross-dimensional processing", "Reality bridge technology", "Dimensional optimization", "Parallel universe computing"],
      link: "/pages/ComprehensiveServices2034"
    },
    {
      id: 4,
      title: "Neural Interface Evolution",
      subtitle: "Direct Brain-Computer Integration",
      description: "Advanced neural interfaces that enable direct thought-controlled computing. Our technology bridges the gap between mind and machine, allowing for seamless human-AI interaction.",
      image: "🧬",
      color: "from-orange-600 to-red-600",
      features: ["Direct neural control", "Thought recognition", "Real-time processing", "Safety protocols"],
      link: "/pages/UltimateTechBreakthrough2034"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2034
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Enhanced Content Carousel 2034
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our revolutionary technology breakthroughs with interactive demonstrations
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 mb-8">
          {/* Slide Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-8xl mb-4">{currentSlideData.image}</div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {currentSlideData.title}
              </h3>
              <h4 className="text-2xl text-gray-300">{currentSlideData.subtitle}</h4>
              <p className="text-lg text-gray-200 leading-relaxed">
                {currentSlideData.description}
              </p>
              
              <div className="space-y-4">
                <h5 className="text-xl font-semibold">Key Features:</h5>
                <ul className="grid grid-cols-2 gap-2">
                  {currentSlideData.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex space-x-4">
                <a 
                  href={currentSlideData.link}
                  className={`bg-gradient-to-r ${currentSlideData.color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                >
                  Explore Now →
                </a>
                <button 
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
                >
                  {isAutoPlaying ? 'Pause' : 'Play'}
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800/30 to-gray-700/30 backdrop-blur-sm rounded-xl p-8 border border-gray-600/30">
                <div className="text-center">
                  <div className="text-6xl mb-4 animate-spin">{currentSlideData.image}</div>
                  <h4 className="text-2xl font-bold mb-4">Live Demo</h4>
                  <p className="text-gray-300 mb-6">Experience this technology in real-time</p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Processing Speed:</span>
                      <span className="font-bold text-green-400">10^18 ops/sec</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Accuracy Rate:</span>
                      <span className="font-bold text-blue-400">99.9%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Energy Efficiency:</span>
                      <span className="font-bold text-purple-400">99.9%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Scalability:</span>
                      <span className="font-bold text-pink-400">Infinite</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            →
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mb-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-purple-500 scale-125' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`bg-gradient-to-br ${slide.color} rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 ${
                index === currentSlide ? 'ring-4 ring-white/50' : ''
              }`}
            >
              <div className="text-4xl mb-3">{slide.image}</div>
              <h4 className="font-bold text-lg mb-2">{slide.title}</h4>
              <p className="text-sm opacity-90">{slide.subtitle}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2034;