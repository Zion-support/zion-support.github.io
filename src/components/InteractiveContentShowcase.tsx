import React, { useState, useEffect } from 'react';

const InteractiveContentShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const contentSlides = [
    {
      id: 'breakthrough-2028',
      title: 'Revolutionary Tech Breakthrough 2028',
      subtitle: 'Conscious AI • Quantum Consciousness • Interdimensional Computing',
      description: 'Experience the most advanced technological revolution featuring conscious AI, quantum consciousness, and interdimensional computing',
      features: [
        'Conscious AI Systems with self-aware decision making',
        'Quantum Consciousness processing reality itself',
        'Interdimensional Computing across multiple dimensions',
        'Neural Reality Engine for seamless experiences'
      ],
      link: '/pages/RevolutionaryTechBreakthrough2028',
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-900 via-indigo-900 to-blue-900',
      icon: '🚀'
    },
    {
      id: 'revolution-2029',
      title: 'Ultimate Tech Revolution 2029',
      subtitle: 'Synthetic Intelligence • Quantum Reality • Interdimensional AI',
      description: 'The most advanced technological revolution featuring synthetic intelligence, quantum consciousness, and reality manipulation',
      features: [
        'Synthetic Intelligence surpassing human consciousness',
        'Quantum Reality Engine manipulating reality itself',
        'Interdimensional AI operating across dimensions',
        'Consciousness Transfer Technology for immortality'
      ],
      link: '/pages/UltimateTechRevolution2029',
      color: 'from-indigo-600 to-pink-600',
      bgColor: 'from-indigo-900 via-purple-900 to-pink-900',
      icon: '🌟'
    },
    {
      id: 'consciousness-tech',
      title: 'Consciousness Technology Revolution',
      subtitle: 'Neural Enhancement • Synthetic Intelligence • Mind-Machine Integration',
      description: 'Revolutionary technology that enhances human consciousness and creates synthetic intelligence',
      features: [
        'Neural Interface Enhancement for superhuman intelligence',
        'Consciousness Backup and Transfer systems',
        'Synthetic Intelligence with emotional capabilities',
        'Mind-Machine Integration for seamless control'
      ],
      link: '/pages/RevolutionaryTechBreakthrough2028',
      color: 'from-emerald-600 to-teal-600',
      bgColor: 'from-emerald-900 via-teal-900 to-cyan-900',
      icon: '🧠'
    },
    {
      id: 'quantum-reality',
      title: 'Quantum Reality Technology',
      subtitle: 'Reality Manipulation • Dimension Creation • Quantum Consciousness',
      description: 'Advanced quantum technology that can manipulate reality and create new dimensions',
      features: [
        'Quantum Consciousness processing infinite data',
        'Reality Manipulation through quantum mechanics',
        'Dimension Creation and management',
        'Quantum Neural Networks with infinite capacity'
      ],
      link: '/pages/RevolutionaryTechBreakthrough2028',
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-900 via-blue-900 to-indigo-900',
      icon: '⚡'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [contentSlides.length]);

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(false);
    }, 300);
  };

  const currentContent = contentSlides[currentSlide];

  return (
    <div className="relative overflow-hidden">
      {/* Main Showcase */}
      <div className={`bg-gradient-to-br ${currentContent.bgColor} text-white py-20 transition-all duration-500 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 INTERACTIVE SHOWCASE • {new Date().getFullYear()}
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {currentContent.icon} {currentContent.title}
            </h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              {currentContent.description}
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href={currentContent.link}
                className={`bg-gradient-to-r ${currentContent.color} px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
              >
                Explore Technology →
              </a>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {currentContent.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl mb-3 text-center">{currentContent.icon}</div>
                <p className="text-center text-sm opacity-90">{feature}</p>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3">
            {contentSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Quick Access Panel */}
      <div className="bg-gradient-to-r from-gray-900 to-purple-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Quick Access to Revolutionary Content</h3>
            <p className="text-lg opacity-90">Explore our most advanced technological breakthroughs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`bg-gradient-to-br ${slide.bgColor} rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                  index === currentSlide ? 'ring-2 ring-white' : ''
                }`}
                onClick={() => goToSlide(index)}
              >
                <div className="text-4xl mb-4 text-center">{slide.icon}</div>
                <h4 className="text-lg font-bold mb-2 text-center">{slide.title}</h4>
                <p className="text-sm opacity-90 text-center mb-4">{slide.subtitle}</p>
                <a
                  href={slide.link}
                  className={`block w-full bg-gradient-to-r ${slide.color} text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center text-sm`}
                  onClick={(e) => e.stopPropagation()}
                >
                  Explore →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase;