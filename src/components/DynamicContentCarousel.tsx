import React, { useState, useEffect } from 'react';

const DynamicContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentSlides = [
    {
      id: 1,
      title: "Synthetic Intelligence Revolution",
      description: "Self-evolving AI systems that transcend traditional limitations and create unprecedented opportunities for human advancement.",
      image: "🧠",
      color: "from-purple-600 to-pink-600",
      link: "/pages/SyntheticIntelligence2026",
      features: ["Self-learning algorithms", "Autonomous decision making", "Adaptive problem solving"]
    },
    {
      id: 2,
      title: "Quantum-Neural Fusion",
      description: "The revolutionary convergence of quantum computing and neural networks creating exponential computational power.",
      image: "⚛️",
      color: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumNeuralFusion2026",
      features: ["Quantum processing", "Neural optimization", "Exponential speed"]
    },
    {
      id: 3,
      title: "Advanced Biotech Solutions",
      description: "Revolutionary biotechnology transforming healthcare, agriculture, and environmental sustainability.",
      image: "🧬",
      color: "from-green-600 to-emerald-600",
      link: "/pages/AdvancedBiotechRevolution2026",
      features: ["Gene therapy 2.0", "Synthetic biology", "Personalized medicine"]
    },
    {
      id: 4,
      title: "Space Technology Breakthrough",
      description: "Making interplanetary travel and space colonization a reality with advanced propulsion systems.",
      image: "🚀",
      color: "from-indigo-600 to-purple-600",
      link: "/pages/SpaceTechRevolution2026",
      features: ["Advanced propulsion", "Space habitats", "Interplanetary missions"]
    },
    {
      id: 5,
      title: "Advanced Robotics Revolution",
      description: "Intelligent machines that can think, learn, and adapt to any environment, revolutionizing industries.",
      image: "🤖",
      color: "from-orange-600 to-red-600",
      link: "/pages/AdvancedRoboticsRevolution2026",
      features: ["AI-powered robots", "Humanoid systems", "Industrial automation"]
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % contentSlides.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, contentSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % contentSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + contentSlides.length) % contentSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentContent = contentSlides[currentSlide];

  return (
    <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
      {/* Main Carousel */}
      <div className="relative h-96 md:h-[500px]">
        <div 
          className="absolute inset-0 bg-gradient-to-br transition-all duration-1000 ease-in-out"
          style={{ background: `linear-gradient(135deg, ${currentContent.color.split(' ')[0].replace('from-', '')}, ${currentContent.color.split(' ')[2].replace('to-', '')})` }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6">
                  ✨ FEATURED TECHNOLOGY
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  {currentContent.title}
                </h2>
                <p className="text-xl mb-8 opacity-90 leading-relaxed">
                  {currentContent.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {currentContent.features.map((feature, index) => (
                    <span key={index} className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
                <a 
                  href={currentContent.link}
                  className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  Explore Technology →
                </a>
              </div>
              
              <div className="text-center">
                <div className="text-9xl mb-6 animate-pulse">
                  {currentContent.image}
                </div>
                <div className="text-6xl font-bold text-white/80">
                  {String(currentSlide + 1).padStart(2, '0')}
                </div>
              </div>
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

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          title={isAutoPlaying ? "Pause auto-play" : "Resume auto-play"}
        >
          {isAutoPlaying ? "⏸️" : "▶️"}
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {contentSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Content Preview Strip */}
      <div className="bg-gray-50 p-6">
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {contentSlides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 w-48 p-4 rounded-lg text-left transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white shadow-lg scale-105' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{slide.image}</div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-900 truncate">
                    {slide.title}
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    {slide.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DynamicContentCarousel;