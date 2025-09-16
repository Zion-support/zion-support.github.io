import React, { useState, useEffect } from 'react';

const DynamicContentCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const carouselItems = [
    {
      id: 1,
      title: "Revolutionary AI Systems",
      subtitle: "Conscious AI with Emotional Intelligence",
      description: "Experience the world's first truly conscious AI systems that can think, feel, and create autonomously.",
      features: [
        "Self-aware decision making",
        "Emotional intelligence",
        "Creative problem solving",
        "Autonomous learning"
      ],
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900 via-indigo-900 to-blue-900",
      icon: "🧠"
    },
    {
      id: 2,
      title: "Quantum Reality Engine",
      subtitle: "Manipulate Reality Itself",
      description: "Revolutionary quantum technology that can create, modify, and synthesize entire realities and dimensions.",
      features: [
        "Reality manipulation",
        "Dimension creation",
        "Quantum consciousness",
        "Infinite possibilities"
      ],
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900 via-blue-900 to-indigo-900",
      icon: "⚡"
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      subtitle: "AI Across Multiple Dimensions",
      description: "Advanced AI systems that operate across multiple dimensions and realities simultaneously.",
      features: [
        "Multi-dimensional processing",
        "Reality bridging",
        "Parallel consciousness",
        "Universal problem solving"
      ],
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900 via-teal-900 to-cyan-900",
      icon: "🌌"
    },
    {
      id: 4,
      title: "Neural Reality Interface",
      subtitle: "Direct Mind-Machine Connection",
      description: "Seamless neural interfaces that create direct connections between human consciousness and digital systems.",
      features: [
        "Direct neural communication",
        "Reality augmentation",
        "Consciousness transfer",
        "Mind-machine integration"
      ],
      color: "from-violet-600 to-purple-600",
      bgColor: "from-violet-900 via-purple-900 to-indigo-900",
      icon: "🧬"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselItems.length]);

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(false);
    }, 300);
  };

  const currentItem = carouselItems[currentSlide];

  return (
    <div className="relative overflow-hidden">
      {/* Main Carousel */}
      <div className={`bg-gradient-to-br ${currentItem.bgColor} text-white py-20 transition-all duration-500 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 REVOLUTIONARY TECHNOLOGY • 2025-2027
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {currentItem.icon} {currentItem.title}
            </h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              {currentItem.description}
            </p>
            <div className="flex justify-center space-x-4">
              <button className={`bg-gradient-to-r ${currentItem.color} px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}>
                Explore Technology →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {currentItem.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl mb-3 text-center">{currentItem.icon}</div>
                <p className="text-center text-sm opacity-90">{feature}</p>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
=======
      {/* Quick Access Panel */}
      <div className="bg-gradient-to-r from-gray-900 to-purple-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Quick Access to Revolutionary Content</h3>
            <p className="text-lg opacity-90">Explore our most advanced technological breakthroughs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {carouselItems.map((item, index) => (
              <div
                key={item.id}
                className={`bg-gradient-to-br ${item.bgColor} rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                  index === currentSlide ? 'ring-2 ring-white' : ''
                }`}
                onClick={() => goToSlide(index)}
              >
                <div className="text-4xl mb-4 text-center">{item.icon}</div>
                <h4 className="text-lg font-bold mb-2 text-center">{item.title}</h4>
                <p className="text-sm opacity-90 text-center mb-4">{item.subtitle}</p>
                <button className={`w-full bg-gradient-to-r ${item.color} text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm`}>
                  Explore →
                </button>
              </div>
            ))}
          </div>
        </div>
>>>>>>> 2e58aaf50d6a55ca120137803d00005c1294e262
      </div>
    </div>
  );
};

export default DynamicContentCarousel;