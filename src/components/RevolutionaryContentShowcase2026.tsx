import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 6);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const contentSlides = [
    {
      id: 1,
      title: "🧬 Advanced Biotech AI 2026",
      description: "Revolutionary biotechnology powered by artificial intelligence",
      link: "/pages/AdvancedBiotechAI2026",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-600/20 to-teal-600/20",
      icon: "🧬"
    },
    {
      id: 2,
      title: "⚛️ Quantum Consciousness 2026",
      description: "Explore the intersection of quantum mechanics and consciousness",
      link: "/pages/QuantumConsciousness2026",
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-600/20 to-indigo-600/20",
      icon: "⚛️"
    },
    {
      id: 3,
      title: "✨ Transcendent AI 2026",
      description: "AI systems that transcend traditional computational boundaries",
      link: "/pages/TranscendentAI2026",
      gradient: "from-rose-500 to-purple-500",
      bgGradient: "from-rose-600/20 to-purple-600/20",
      icon: "✨"
    },
    {
      id: 4,
      title: "🤖 Advanced AI Systems 2026",
      description: "Next-generation AI systems with unprecedented capabilities",
      link: "/pages/AdvancedAISystems2026",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-600/20 to-blue-600/20",
      icon: "🤖"
    },
    {
      id: 5,
      title: "🧠 Synthetic Intelligence 2026",
      description: "Beyond artificial intelligence - synthetic consciousness",
      link: "/pages/SyntheticIntelligence2026",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-600/20 to-red-600/20",
      icon: "🧠"
    },
    {
      id: 6,
      title: "⚡ Quantum-Neural Fusion 2026",
      description: "The ultimate convergence of consciousness and quantum mechanics",
      link: "/pages/QuantumNeuralFusion2026",
      gradient: "from-violet-500 to-fuchsia-500",
      bgGradient: "from-violet-600/20 to-fuchsia-600/20",
      icon: "⚡"
    }
  ];

  return (
    <div className={`relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Background with animated particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10"></div>
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CONTENT 2026
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Experience the Future of Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our groundbreaking new content featuring cutting-edge AI, 
            quantum computing, biotechnology, and consciousness research that's 
            reshaping the future of humanity.
          </p>
        </div>

        {/* Main Showcase Carousel */}
        <div className="relative">
          {/* Current Slide Display */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 mb-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-8xl mb-6 text-center md:text-left">
                  {contentSlides[currentSlide].icon}
                </div>
                <h3 className="text-4xl font-bold text-white mb-4">
                  {contentSlides[currentSlide].title}
                </h3>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {contentSlides[currentSlide].description}
                </p>
                <a
                  href={contentSlides[currentSlide].link}
                  className={`inline-block bg-gradient-to-r ${contentSlides[currentSlide].gradient} text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform`}
                >
                  Explore Now →
                </a>
              </div>
              <div className="relative">
                <div className={`bg-gradient-to-br ${contentSlides[currentSlide].bgGradient} rounded-2xl p-8 h-80 flex items-center justify-center`}>
                  <div className="text-center">
                    <div className="text-9xl mb-4 animate-bounce">
                      {contentSlides[currentSlide].icon}
                    </div>
                    <div className="text-white text-lg font-semibold">
                      Revolutionary Technology
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mb-8">
            {contentSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer ${
                  index === currentSlide ? 'ring-2 ring-white/50' : ''
                }`}
                onClick={() => setCurrentSlide(index)}
              >
                <div className="text-4xl mb-3 text-center">{slide.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2 text-center">
                  {slide.title}
                </h4>
                <p className="text-gray-300 text-sm text-center mb-4">
                  {slide.description}
                </p>
                <a
                  href={slide.link}
                  className={`block w-full bg-gradient-to-r ${slide.gradient} text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center text-sm`}
                >
                  Explore →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Explore the Future?
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              Join thousands of innovators exploring our revolutionary technology content
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/pages/AdvancedBiotechAI2026"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform"
              >
                Start with Biotech AI →
              </a>
              <a
                href="/pages/QuantumConsciousness2026"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Explore Quantum Consciousness
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2026;