import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2036: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Ultimate Tech Breakthrough 2036",
      description: "Experience the most revolutionary technological advances that will reshape our world",
      image: "🧠",
      color: "from-purple-600 to-pink-600",
      link: "/pages/UltimateTechBreakthrough2036"
    },
    {
      id: 2,
      title: "Revolutionary Tech Showcase 2036",
      description: "Interactive showcase of cutting-edge technologies that will define the future",
      image: "⚡",
      color: "from-cyan-600 to-blue-600",
      link: "/pages/RevolutionaryTechShowcase2036"
    },
    {
      id: 3,
      title: "Next-Gen Innovation Hub 2036",
      description: "Discover and explore the most revolutionary technologies shaping humanity's future",
      image: "🌟",
      color: "from-emerald-600 to-teal-600",
      link: "/pages/NextGenInnovationHub2036"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CONTENT • JANUARY 2036
          </div>
          <h2 className="text-4xl font-bold mb-4">🌟 Revolutionary Technology 2036</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience the most advanced technology content featuring conscious AI, quantum computing, and interdimensional technology
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="text-6xl mb-4">{slide.image}</div>
                        <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                        <p className="text-lg opacity-90 mb-6">{slide.description}</p>
                        <a 
                          href={slide.link}
                          className={`inline-block bg-gradient-to-r ${slide.color} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                        >
                          Explore Now →
                        </a>
                      </div>
                      <div className="text-center">
                        <div className="text-8xl mb-4">{slide.image}</div>
                        <div className="text-2xl font-bold mb-2">2036</div>
                        <div className="text-lg opacity-75">Revolutionary Technology</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2036;