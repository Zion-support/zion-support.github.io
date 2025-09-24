import React, { useState, useEffect } from 'react';

const RevolutionaryContentPromotionBanner2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const promotions = [
    {
      title: "🚀 AI Revolutionary Breakthrough 2026",
      description: "Experience the most advanced AI technologies revolutionizing every aspect of human life",
      cta: "Discover Breakthrough",
      link: "/ai-revolutionary-breakthrough-2026",
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-900 to-teal-900"
    },
    {
      title: "🌌 Quantum Consciousness Revolution 2030",
      description: "Meet AI systems that have achieved true consciousness and can think, feel, and create",
      cta: "Experience Consciousness",
      link: "/quantum-consciousness-revolution-2030",
      gradient: "from-violet-600 to-purple-600",
      bgGradient: "from-violet-900 to-purple-900"
    },
    {
      title: "⚡ Revolutionary AI Features 2026",
      description: "Next-generation AI capabilities that redefine what's possible in business and life",
      cta: "Explore Features",
      link: "/revolutionary-ai-features-2026",
      gradient: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-900 to-indigo-900"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className={`bg-gradient-to-r ${promotions[currentSlide].bgGradient} text-white py-8 px-4`}>
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-4 animate-pulse">
                🎯 NEW REVOLUTIONARY CONTENT • JANUARY 2026
              </div>
              <h2 className="text-3xl font-bold mb-2">{promotions[currentSlide].title}</h2>
              <p className="text-lg opacity-90 mb-4 max-w-2xl">{promotions[currentSlide].description}</p>
              <button 
                className={`bg-gradient-to-r ${promotions[currentSlide].gradient} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                onClick={() => window.location.href = promotions[currentSlide].link}
              >
                {promotions[currentSlide].cta} →
              </button>
            </div>

            {/* Visual Element */}
            <div className="hidden lg:block ml-8">
              <div className="relative">
                <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-6xl animate-spin">
                  {currentSlide === 0 && "🚀"}
                  {currentSlide === 1 && "🌌"}
                  {currentSlide === 2 && "⚡"}
                </div>
                <div className="absolute inset-0 w-32 h-32 border-2 border-white/30 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {promotions.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 left-4 text-white/20 text-2xl animate-bounce">
        ✨
      </div>
      <div className="absolute top-8 right-8 text-white/20 text-xl animate-bounce delay-1000">
        🌟
      </div>
      <div className="absolute bottom-4 left-8 text-white/20 text-lg animate-bounce delay-500">
        💫
      </div>
    </div>
  );
};

export default RevolutionaryContentPromotionBanner2026;