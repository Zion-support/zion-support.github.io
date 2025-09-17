import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NewContent2027PromotionalBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const contentItems = [
    {
      title: "AI 2027: Revolutionary Breakthroughs",
      description: "Discover the groundbreaking AI innovations transforming industries",
      link: "/ai-2027-revolutionary-breakthroughs",
      gradient: "from-purple-600 to-blue-600",
      icon: "🚀"
    },
    {
      title: "Quantum Computing Revolution 2027",
      description: "Explore fault-tolerant quantum systems and practical applications",
      link: "/quantum-computing-revolution-2027",
      gradient: "from-cyan-600 to-purple-600",
      icon: "⚛️"
    },
    {
      title: "Neural Interface Revolution 2027",
      description: "Experience direct brain-computer integration technologies",
      link: "/neural-interface-revolution-2027",
      gradient: "from-pink-600 to-indigo-600",
      icon: "🧠"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [contentItems.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 border-b border-purple-500/30">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      
      <div className="relative container mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
            <span className="text-2xl">✨</span>
            <h2 className="text-3xl font-bold">NEW CONTENT 2027</h2>
            <span className="text-2xl">✨</span>
          </div>
          <p className="text-lg text-gray-300 mt-2">
            Explore the latest breakthroughs in AI, Quantum Computing, and Neural Interfaces
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentItems.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-r ${item.gradient} p-8 rounded-2xl`}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="text-white">
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="text-4xl">{item.icon}</span>
                          <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
                            BREAKTHROUGH 2027
                          </span>
                        </div>
                        <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                        <p className="text-xl mb-6 text-white/90">{item.description}</p>
                        <Link
                          to={item.link}
                          className="inline-flex items-center space-x-2 bg-white text-gray-900 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105"
                        >
                          <span>Explore Now</span>
                          <span className="text-lg">→</span>
                        </Link>
                      </div>
                      <div className="hidden md:block">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-white">99.7%</div>
                              <div className="text-sm text-white/80">Accuracy</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-white">1000x</div>
                              <div className="text-sm text-white/80">Faster</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-white">24/7</div>
                              <div className="text-sm text-white/80">Available</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-white">∞</div>
                              <div className="text-sm text-white/80">Possibilities</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-400 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all"
          >
            <span className="text-xl">‹</span>
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % contentItems.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all"
          >
            <span className="text-xl">›</span>
          </button>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <p className="text-gray-300 mb-4">
            Don't miss out on the future of technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/ai-2027-revolutionary-breakthroughs"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105"
            >
              AI Breakthroughs
            </Link>
            <Link
              to="/quantum-computing-revolution-2027"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105"
            >
              Quantum Revolution
            </Link>
            <Link
              to="/neural-interface-revolution-2027"
              className="bg-gradient-to-r from-pink-600 to-indigo-600 hover:from-pink-700 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105"
            >
              Neural Interfaces
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContent2027PromotionalBanner;