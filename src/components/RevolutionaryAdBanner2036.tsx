import React, { useState, useEffect } from 'react';

const RevolutionaryAdBanner2036: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Revolutionary AI Services 2036",
      subtitle: "Experience the future of artificial intelligence",
      icon: "🤖",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Quantum Computing Breakthrough",
      subtitle: "Unlock the power of quantum technology",
      icon: "⚛️",
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      title: "Neural Interface Revolution",
      subtitle: "Connect your mind to the digital world",
      icon: "🧬",
      gradient: "from-emerald-600 to-teal-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🌟 REVOLUTIONARY AD BANNER • 2036
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Revolutionary Technology 2036
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Discover the most advanced technology solutions that will reshape the future
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${slide.gradient} text-white p-6 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer`}
            >
              <div className="text-4xl mb-4 text-center">{slide.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-center">{slide.title}</h3>
              <p className="text-center opacity-90">{slide.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-white text-purple-900 px-8 py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold text-lg">
            Explore All Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner2036;