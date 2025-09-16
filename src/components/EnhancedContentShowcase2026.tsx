import React, { useState, useEffect } from 'react';

const EnhancedContentShowcase2026: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const showcaseItems = [
    {
      title: "Ultimate Tech Revolution 2026",
      description: "Experience the most revolutionary technological breakthroughs that will reshape our world",
      features: ["Quantum Consciousness AI", "Neural-Quantum Fusion", "Synthetic Universe Engine"],
      icon: "🚀",
      color: "from-purple-600 to-pink-600",
      link: "/pages/UltimateTechRevolution2026"
    },
    {
      title: "Next-Gen Innovation Hub 2026",
      description: "Discover the most advanced innovations that will reshape industries and transform societies",
      features: ["Conscious AI Systems", "Quantum Internet", "Neural Implants"],
      icon: "🌟",
      color: "from-cyan-600 to-blue-600",
      link: "/pages/NextGenInnovationHub2026"
    },
    {
      title: "Revolutionary Tech Showcase 2026",
      description: "Witness the most revolutionary technologies that represent the pinnacle of human achievement",
      features: ["Interactive Demos", "Virtual Laboratory", "Real-time Simulations"],
      icon: "⚡",
      color: "from-green-600 to-emerald-600",
      link: "/pages/RevolutionaryTechShowcase2026"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % showcaseItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [showcaseItems.length]);

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-cyan-600/10"></div>
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className={`inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full text-lg font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            🌟 REVOLUTIONARY CONTENT 2026
          </div>
          <h2 className={`text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Experience the Future
          </h2>
          <p className={`text-xl text-gray-600 max-w-4xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Discover groundbreaking technologies and innovations that will define the next decade. 
            These revolutionary breakthroughs represent the pinnacle of human achievement.
          </p>
        </div>

        {/* Main Showcase Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {showcaseItems.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${item.color} rounded-3xl p-12 min-h-[400px] flex items-center`}>
                    <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                      <div>
                        <div className="text-8xl mb-6">{item.icon}</div>
                        <h3 className="text-4xl font-bold mb-6 text-white">{item.title}</h3>
                        <p className="text-xl text-white/90 mb-8">{item.description}</p>
                        <div className="space-y-3 mb-8">
                          {item.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                              <span className="text-lg text-white/90">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <a 
                          href={item.link}
                          className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                        >
                          Explore Now →
                        </a>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                        <h4 className="text-2xl font-bold mb-6 text-white">Interactive Preview</h4>
                        <div className="space-y-4">
                          <div className="bg-white/20 rounded-lg p-4">
                            <div className="text-white/80 text-sm mb-2">Technology Status</div>
                            <div className="text-white font-semibold">Active & Operational</div>
                          </div>
                          <div className="bg-white/20 rounded-lg p-4">
                            <div className="text-white/80 text-sm mb-2">Innovation Level</div>
                            <div className="text-white font-semibold">Revolutionary</div>
                          </div>
                          <div className="bg-white/20 rounded-lg p-4">
                            <div className="text-white/80 text-sm mb-2">Impact Potential</div>
                            <div className="text-white font-semibold">Transformative</div>
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
          <div className="flex justify-center space-x-3 mt-8">
            {showcaseItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-purple-600 scale-125' : 'bg-gray-400 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {showcaseItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={`bg-gradient-to-br ${item.color} rounded-2xl p-8 hover:scale-105 transition-all duration-300 group`}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-white/90 mb-6">{item.description}</p>
              <div className="flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform duration-300">
                Explore Now →
              </div>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6 text-gray-900">Ready to Experience the Future?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of innovators, researchers, and technology enthusiasts who are already exploring these revolutionary breakthroughs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/pages/UltimateTechRevolution2026"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Start Your Journey
            </a>
            <a 
              href="/pages/NextGenInnovationHub2026"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Explore All Content
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase2026;