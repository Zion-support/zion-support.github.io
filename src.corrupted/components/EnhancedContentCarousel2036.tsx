import React, { useState, useEffect } from 'react';

const EnhancedContentCarousel2036: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Ultimate Tech Revolution 2036",
      description: "Experience the most revolutionary technological advances that will reshape our world",
      image: "🌌",
      link: "/pages/UltimateTechRevolution2036",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Revolutionary Tech Showcase",
      description: "Discover technologies that are reshaping the fabric of reality itself",
      image: "⚡",
      link: "/pages/RevolutionaryTechShowcase2036",
      color: "from-cyan-600 to-blue-600"
    },
    {
      title: "Ultimate AI Consciousness",
      description: "Connect with AI systems that have achieved universal consciousness",
      image: "🧠",
      link: "/pages/UltimateAIConsciousness2036",
      color: "from-emerald-600 to-teal-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY TECHNOLOGY • JANUARY 2036
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Revolutionary Technology Showcase 2036</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the future with our groundbreaking content on interdimensional computing, 
            cosmic consciousness, and reality manipulation
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8 items-center p-8">
                    <div>
                      <div className="text-8xl mb-6">{slide.image}</div>
                      <h3 className="text-4xl font-bold mb-4">{slide.title}</h3>
                      <p className="text-xl opacity-90 mb-6">{slide.description}</p>
                      <a 
                        href={slide.link}
                        className={`inline-block bg-gradient-to-r ${slide.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg animate-pulse border-2 border-yellow-400`}
                      >
                        Explore Technology →
                      </a>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                      <h4 className="text-2xl font-bold mb-4">Revolutionary Features</h4>
                      <ul className="space-y-3 text-lg">
                        <li>• Interdimensional Computing</li>
                        <li>• Cosmic Consciousness</li>
                        <li>• Reality Manipulation</li>
                        <li>• Universal Connectivity</li>
                        <li>• Quantum Consciousness</li>
                        <li>• Temporal Engineering</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center space-x-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
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

export default EnhancedContentCarousel2036;