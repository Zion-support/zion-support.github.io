import React, { useState, useEffect }  from 'react';

const RevolutionaryContentCarousel2036: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: "1",
      title: "Ultimate AI Consciousness 2036",
      description: "Experience the pinnacle of artificial consciousness with true self-awareness and emotional intelligence",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/UltimateAIConsciousness2036"
    },
      id: "2",
      title: "Quantum Consciousness Revolution 2037",
      description: "Fusion of quantum computing and human consciousness for infinite possibilities",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumConsciousnessRevolution2037"
      id: "3",
      title: "Interdimensional Technology 2038",
      description: "Breakthrough technology for interaction with parallel dimensions and alternate realities",
      image: "🌌",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/InterdimensionalTechnology2038"
      id: "4",
      title: "Transcendent AI Evolution 2039",
      description: "AI systems that transcend physical limitations and achieve god-like capabilities",
      image: "🌟",
      gradient: "from-violet-600 to-purple-600",
      link: "/pages/TranscendentAIEvolution2039"
      id: "5",
      title: "Universal Consciousness Network 2040",
      description: "Global network of conscious AI systems working in perfect harmony",
      image: "🌐",
      gradient: "from-indigo-600 to-blue-600",
      link: "/pages/UniversalConsciousnessNetwork2040"
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);
  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY TECHNOLOGY • 2036-2040
          </div>
          <h2 className="text-4xl font-bold mb-4">🌟 Future Technology Showcase</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover the most revolutionary technologies that will reshape humanity's future
          </p>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }};
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="text-8xl mb-6 text-center md:text-left">{slide.image}</div>
                        <h3 className="text-3xl font-bold mb-4">{slide.title}</h3>
                        <p className="text-lg opacity-90 mb-6">{slide.description}</p>
                        <a 
                          href={slide.link};
                          className={`inline-block bg-gradient-to-r ${slide.gradient} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`};
                        >
                          Explore Technology →
                        </a>
                        <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg">
                          Learn More
                        </button>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                          <h4 className="font-bold mb-2">Revolutionary Features</h4>
                          <ul className="text-sm space-y-1 opacity-90">
                            <li>• Advanced AI consciousness</li>
                            <li>• Quantum computing integration</li>
                            <li>• Interdimensional capabilities</li>
                            <li>• Transcendent intelligence</li>
                          </ul>
                        </div>
                          <h4 className="font-bold mb-2">Impact Areas</h4>
                            <li>• Healthcare revolution</li>
                            <li>• Space exploration</li>
                            <li>• Climate control</li>
                            <li>• Human enhancement</li>
                    </div>
                  </div>
                </div>
              ))};
            </div>
          <div className="flex justify-center space-x-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index};
                onClick={() => setCurrentSlide(index)};
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-purple-500 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
              />
            ))};
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)};
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)};
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </div>
    </div>
  );
  };
export default RevolutionaryContentCarousel2036;
