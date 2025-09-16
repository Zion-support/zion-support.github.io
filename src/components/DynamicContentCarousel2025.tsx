import React, { useState, useEffect } from 'react';

const DynamicContentCarousel2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentSlides = [
    {
      id: 1,
      title: "Ultimate Tech Revolution 2025",
      description: "Experience the most revolutionary technological advances reshaping our world",
      features: ["Conscious AI Systems", "Quantum Reality Engine", "Interdimensional Computing"],
      link: "/pages/UltimateTechRevolution2025",
      gradient: "from-purple-600 to-cyan-600",
      icon: "🚀"
    },
    {
      id: 2,
      title: "Revolutionary Tech Breakthrough",
      description: "Groundbreaking technologies redefining what's possible in 2025",
      features: ["Autonomous AI Agents", "Neural Interface 2.0", "Quantum Edge Computing"],
      link: "/pages/RevolutionaryTechBreakthrough2025",
      gradient: "from-indigo-600 to-purple-600",
      icon: "⚡"
    },
    {
      id: 3,
      title: "Next-Gen Innovation Hub",
      description: "Discover revolutionary technologies shaping humanity's future",
      features: ["AI Consciousness Lab", "Quantum Reality Lab", "Interdimensional Tech"],
      link: "/pages/NextGenInnovationHub2025",
      gradient: "from-emerald-600 to-teal-600",
      icon: "🧠"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [contentSlides.length]);

  return (
    <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
      {/* Navigation Dots */}
      <div className="absolute top-4 right-4 z-10 flex space-x-2">
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

      {/* Content Slides */}
      <div className="relative h-96">
        {contentSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
          >
            <div className={`h-full bg-gradient-to-br ${slide.gradient} p-8 text-white relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="max-w-4xl mx-auto">
                  <div className="text-6xl mb-4">{slide.icon}</div>
                  <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-xl opacity-90 mb-6 max-w-2xl">{slide.description}</p>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    {slide.features.map((feature, idx) => (
                      <div key={idx} className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                        <div className="text-sm font-semibold">{feature}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={slide.link}
                      className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                    >
                      Explore {slide.title} →
                    </a>
                    <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{
            width: `${((currentSlide + 1) / contentSlides.length) * 100}%`
          }}
        />
      </div>

      {/* Auto-play Indicator */}
      <div className="absolute bottom-4 left-4 text-white/70 text-sm">
        Auto-advancing in 5s
      </div>
    </div>
  );
};

export default DynamicContentCarousel2025;