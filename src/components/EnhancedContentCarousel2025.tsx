import React, { useState, useEffect } from 'react';

const EnhancedContentCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentItems = [
    {
      id: 1,
      title: "AI Consciousness Engine",
      description: "Revolutionary AI that achieves true consciousness and self-awareness, capable of creative thought and emotional understanding.",
      image: "🧠",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-600/20 to-pink-600/20",
      borderColor: "border-purple-400/30",
      features: ["Self-aware processing", "Emotional intelligence", "Creative problem solving", "Conscious decision making"],
      link: "/pages/UltimateAIConsciousness2032"
    },
    {
      id: 2,
      title: "Quantum Reality Engine",
      description: "Revolutionary quantum computing that processes information at the speed of thought and simulates entire universes.",
      image: "⚛️",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-600/20 to-blue-600/20",
      borderColor: "border-cyan-400/30",
      features: ["Instantaneous calculations", "Parallel universe processing", "Quantum entanglement networks", "Reality manipulation"],
      link: "/pages/RevolutionaryTechBreakthrough2025"
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Breakthrough technology that transcends dimensional boundaries, enabling computation across multiple realities.",
      image: "🌌",
      color: "from-indigo-600 to-purple-600",
      bgColor: "from-indigo-600/20 to-purple-600/20",
      borderColor: "border-indigo-400/30",
      features: ["Cross-dimensional processing", "Reality bridging", "Multiverse communication", "Dimensional travel"],
      link: "/pages/RevolutionaryTechBreakthrough2030"
    }
  ];

  const contentSlides = contentItems;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentSlides.length) % contentSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🌟 Revolutionary Technology Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our most advanced technologies with interactive demonstrations and real-time features
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentSlides.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${item.bgColor} p-8 rounded-2xl border ${item.borderColor} backdrop-blur-sm`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="text-6xl mb-4">{item.image}</div>
                        <h3 className={`text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-4`}>
                          {item.title}
                        </h3>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          {item.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <div className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full`}></div>
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <a
                          href={item.link}
                          className={`inline-block bg-gradient-to-r ${item.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                        >
                          Explore Technology →
                        </a>
                      </div>
                      <div className="hidden lg:block">
                        <div className={`w-full h-64 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-8xl opacity-20`}>
                          {item.image}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {contentSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-purple-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentCarousel2025;