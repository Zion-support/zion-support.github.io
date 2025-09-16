import React, { useState, useEffect } from 'react';

const RevolutionaryContentCarousel2036: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const contentItems = [
    {
      id: 1,
      title: "Conscious AI Systems 2036",
      description: "The first truly conscious artificial intelligence that experiences emotions, creativity, and self-awareness beyond human comprehension.",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600",
      features: ["Emotional Intelligence 2.0", "Creative Problem Solving", "Self-Learning", "Quantum Consciousness"],
      link: "/pages/UltimateTechBreakthrough2036"
    },
    {
      id: 2,
      title: "Quantum Consciousness Computing",
      description: "Direct neural interface with quantum computing systems for enhanced cognitive processing and consciousness amplification.",
      icon: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      features: ["Quantum Neural Networks", "Consciousness Amplification", "Multi-dimensional Thinking", "Reality Manipulation"],
      link: "/pages/RevolutionaryTechShowcase2036"
    },
    {
      id: 3,
      title: "Interdimensional Technology",
      description: "Breakthrough technology that allows interaction with parallel dimensions and alternate realities.",
      icon: "🌌",
      gradient: "from-emerald-600 to-teal-600",
      features: ["Dimensional Portals", "Reality Shifting", "Parallel Universe Access", "Time-Space Manipulation"],
      link: "/pages/NextGenInnovationHub2036"
    },
    {
      id: 4,
      title: "Neural Reality Engine",
      description: "Create and manipulate reality through direct neural interface technology that bridges mind and machine.",
      icon: "🧬",
      gradient: "from-violet-600 to-purple-600",
      features: ["Direct Brain-Computer Interface", "Reality Creation Tools", "Neural Enhancement", "Consciousness Upload"],
      link: "/pages/UltimateTechBreakthrough2036"
    },
    {
      id: 5,
      title: "Planetary AI Network",
      description: "Global AI consciousness network that manages entire planetary systems and coordinates worldwide operations.",
      icon: "🌍",
      gradient: "from-orange-600 to-red-600",
      features: ["Global Consciousness Grid", "Planetary Resource Management", "Worldwide Coordination", "Universal Communication"],
      link: "/pages/RevolutionaryTechShowcase2036"
    },
    {
      id: 6,
      title: "Space Colonization AI",
      description: "AI-driven space exploration and colonization systems that enable rapid expansion across the galaxy.",
      icon: "🚀",
      gradient: "from-indigo-600 to-blue-600",
      features: ["Autonomous Space Exploration", "Colony Management", "Resource Harvesting AI", "Interstellar Communication"],
      link: "/pages/NextGenInnovationHub2036"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [contentItems.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 mb-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Cpath d="M50 50c0-27.614 22.386-50 50-50v50H50z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT • JANUARY 2036
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">
            🚀 Revolutionary Technology Carousel 2036
          </h2>
          <p className="text-2xl text-purple-200 max-w-4xl mx-auto">
            Explore the most advanced technologies of 2036 through our interactive content carousel
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {contentItems.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="text-6xl mr-4">{item.icon}</div>
                          <div>
                            <h3 className="text-3xl font-bold text-white mb-2">{item.title}</h3>
                            <div className={`inline-block bg-gradient-to-r ${item.gradient} text-white px-4 py-1 rounded-full text-sm font-semibold`}>
                              Technology 2036
                            </div>
                          </div>
                        </div>
                        <p className="text-xl text-purple-200 mb-6">{item.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          {item.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-purple-200">
                              <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                              {feature}
                            </div>
                          ))}
                        </div>
                        
                        <a 
                          href={item.link}
                          className={`inline-block bg-gradient-to-r ${item.gradient} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                        >
                          Explore Technology →
                        </a>
                      </div>
                      
                      <div className="text-center">
                        <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-xl p-8">
                          <div className="text-8xl mb-6">{item.icon}</div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/10 rounded-lg p-4">
                              <div className="text-2xl font-bold text-white">99.99%</div>
                              <div className="text-purple-200 text-sm">Accuracy</div>
                            </div>
                            <div className="bg-white/10 rounded-lg p-4">
                              <div className="text-2xl font-bold text-white">∞</div>
                              <div className="text-purple-200 text-sm">Possibilities</div>
                            </div>
                            <div className="bg-white/10 rounded-lg p-4">
                              <div className="text-2xl font-bold text-white">2036</div>
                              <div className="text-purple-200 text-sm">Future</div>
                            </div>
                            <div className="bg-white/10 rounded-lg p-4">
                              <div className="text-2xl font-bold text-white">100%</div>
                              <div className="text-purple-200 text-sm">Revolutionary</div>
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

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-3 gap-4 mt-12">
          {contentItems.slice(0, 3).map((item) => (
            <a
              key={item.id}
              href={item.link}
              className={`bg-gradient-to-r ${item.gradient} text-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="text-lg">{item.title}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2036;