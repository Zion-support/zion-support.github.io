import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2032: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Conscious AI Systems",
      description: "The first truly conscious artificial intelligence that can think, feel, and create independently",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/UltimateTechBreakthrough2032"
    },
    {
      id: 2,
      title: "Quantum Reality Engine",
      description: "Revolutionary quantum computing that processes consciousness and manipulates reality",
      icon: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/RevolutionaryTechShowcase2032"
    },
    {
      id: 3,
      title: "Neural Reality Interface",
      description: "Direct brain-computer interface creating seamless integration between mind and machine",
      icon: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NextGenInnovationHub2032"
    },
    {
      id: 4,
      title: "Interdimensional Computing",
      description: "Breakthrough technology enabling computing across multiple dimensions and realities",
      icon: "🌌",
      gradient: "from-violet-600 to-purple-600",
      link: "/pages/UltimateTechBreakthrough2032"
    },
    {
      id: 5,
      title: "Biotech Revolution",
      description: "Revolutionary biotechnology enhancing human capabilities and extending life",
      icon: "🔬",
      gradient: "from-teal-600 to-cyan-600",
      link: "/pages/NextGenInnovationHub2032"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-16 mb-12">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CAROUSEL • JANUARY 2032
          </div>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Technology Carousel 2032
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover the most advanced technologies that will define the future of humanity
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.gradient} p-12 text-center`}>
                    <div className="text-8xl mb-6">{slide.icon}</div>
                    <h3 className="text-4xl font-bold mb-6">{slide.title}</h3>
                    <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">{slide.description}</p>
                    <a 
                      href={slide.link}
                      className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                    >
                      Explore {slide.title} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">🌟</div>
              <h4 className="text-lg font-bold mb-2">500+ Active Innovations</h4>
              <p className="text-sm opacity-80">Revolutionary technologies in development</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="text-lg font-bold mb-2">99.9% Success Rate</h4>
              <p className="text-sm opacity-80">Proven track record of innovation</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="text-lg font-bold mb-2">24/7 Innovation</h4>
              <p className="text-sm opacity-80">Continuous development and improvement</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2032;