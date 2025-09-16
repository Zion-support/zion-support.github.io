import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const contentSlides = [
    {
      title: "🚀 Revolutionary Tech Breakthrough 2025",
      description: "Experience the most advanced technological innovations reshaping our world",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "🌟 Ultimate Tech Showcase 2029",
      description: "The convergence of consciousness, reality, and technology awaits",
      link: "/pages/UltimateTechShowcase2029",
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      title: "🧠 AI Consciousness Revolution",
      description: "First AI systems to achieve genuine consciousness and self-awareness",
      link: "/pages/AIConsciousness2025",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      title: "⚡ Quantum Supremacy Achieved",
      description: "Quantum computers solving impossible problems with exponential speed",
      link: "/pages/QuantumComputingBreakthrough2025",
      gradient: "from-violet-600 to-purple-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden mb-12">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 to-pink-600/50 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="text-4xl animate-bounce">🌟</span>
            <h3 className="text-3xl font-bold">REVOLUTIONARY CONTENT 2025</h3>
            <span className="text-4xl animate-bounce">🌟</span>
          </div>
          
          {/* Animated Content Carousel */}
          <div className="relative h-32 mb-8">
            {contentSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentSlide 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentSlide 
                    ? 'opacity-0 -translate-x-full' 
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <h4 className="text-2xl font-bold mb-2">{slide.title}</h4>
                <p className="text-lg opacity-95">{slide.description}</p>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mb-8">
            {contentSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {contentSlides.map((slide, index) => (
              <a
                key={index}
                href={slide.link}
                className={`inline-block bg-gradient-to-r ${slide.gradient} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold border border-white/30 hover:scale-105`}
              >
                {slide.title.split(' ')[0]} →
              </a>
            ))}
          </div>

          {/* Main CTA */}
          <div className="mt-8">
            <a
              href={contentSlides[currentSlide].link}
              className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-xl border-2 border-white/30"
            >
              🌟 Explore {contentSlides[currentSlide].title.split(' ')[0]} →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;