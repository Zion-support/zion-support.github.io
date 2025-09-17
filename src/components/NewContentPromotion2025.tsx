import React, { useState, useEffect } from 'react';

const NewContentPromotion2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotions = [
    {
      title: "🌟 Ultimate Tech Breakthrough 2025",
      description: "Experience the most revolutionary technological advances that will reshape our world",
      link: "/pages/UltimateTechBreakthrough2025",
      color: "from-purple-600 to-pink-600",
      icon: "🚀"
    },
    {
      title: "⚡ Revolutionary Tech Showcase 2025",
      description: "Interactive showcase of cutting-edge technologies that will define the future",
      link: "/pages/RevolutionaryTechShowcase2025",
      color: "from-cyan-600 to-blue-600",
      icon: "🧠"
    },
    {
      title: "🌌 Next-Gen Innovation Hub 2025",
      description: "Discover, explore, and build with the most revolutionary technologies",
      link: "/pages/NextGenInnovationHub2025",
      color: "from-emerald-600 to-teal-600",
      icon: "⚡"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [promotions.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-8 mb-12 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 NEW CONTENT • JANUARY 2025
          </div>
          <h2 className="text-4xl font-bold mb-4">Revolutionary Technology Content</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover our latest breakthrough technologies and innovative solutions that are reshaping the future
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {promotions.map((promo, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="text-6xl mb-4">{promo.icon}</div>
                        <h3 className="text-3xl font-bold mb-4">{promo.title}</h3>
                        <p className="text-lg opacity-90 mb-6">{promo.description}</p>
                        <a 
                          href={promo.link}
                          className={`inline-block bg-gradient-to-r ${promo.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                        >
                          Explore Now →
                        </a>
                      </div>
                      <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6">
                        <h4 className="text-xl font-bold mb-4">Key Features</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span>Cutting-edge Technology</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                            <span>Interactive Demos</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                            <span>Real-time Processing</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                            <span>Future-Ready Solutions</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {promotions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Links */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {promotions.map((promo, index) => (
            <a
              key={index}
              href={promo.link}
              className={`bg-gradient-to-r ${promo.color} text-white p-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
            >
              {promo.icon} {promo.title.split(' ').slice(1).join(' ')}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotion2025;