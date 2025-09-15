import React, { useState, useEffect } from 'react';

const UltimateContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const contentItems = [
    {
      id: 1,
      title: "Advanced Biotech Revolution 2026",
      description: "Experience revolutionary gene editing, synthetic biology, and personalized medicine that's transforming healthcare",
      image: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/AdvancedBiotechRevolution2026",
      category: "Biotechnology",
      featured: true,
      new: true
    },
    {
      id: 2,
      title: "Space Technology Revolution 2026",
      description: "Explore interplanetary travel, space AI systems, and cosmic manufacturing that's making space accessible to everyone",
      image: "🚀",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/SpaceTechRevolution2026",
      category: "Space Technology",
      featured: true,
      new: true
    },
    {
      id: 3,
      title: "Advanced Robotics Revolution 2026",
      description: "Discover humanoid AI assistants, autonomous systems, and intelligent machines transforming every industry",
      image: "🤖",
      gradient: "from-orange-600 to-red-600",
      link: "/pages/AdvancedRoboticsRevolution2026",
      category: "Robotics",
      featured: true,
      new: true
    },
    {
      id: 4,
      title: "Next-Gen AI Revolution 2026",
      description: "Experience the future of artificial intelligence with revolutionary technologies reshaping industries",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/NextGenAIRevolution2026",
      category: "AI Technology",
      featured: true,
      new: false
    },
    {
      id: 5,
      title: "Quantum Computing Revolution 2026",
      description: "Unlock exponential computing power with quantum technology solving impossible problems",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumComputingRevolution2026",
      category: "Quantum Computing",
      featured: true,
      new: false
    },
    {
      id: 6,
      title: "Neural Interface Revolution 2026",
      description: "Bridge mind and machine with direct neural interfaces and brain-computer communication",
      image: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      category: "Neural Technology",
      featured: true,
      new: false
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [contentItems.length]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 rounded-2xl p-12 text-white relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-lg font-bold mb-8 animate-pulse shadow-lg">
            🌟 ULTIMATE TECHNOLOGY SHOWCASE • JANUARY 2026
          </div>
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
            Revolutionary Technology Universe
          </h2>
          <p className="text-2xl opacity-90 max-w-5xl mx-auto leading-relaxed">
            Experience the most comprehensive collection of cutting-edge technologies that are reshaping our world and defining the future of human civilization
          </p>
        </div>

        {/* Featured Content Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${item.gradient} rounded-3xl p-16 text-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-center space-x-4 mb-6">
                        {item.new && (
                          <span className="px-4 py-2 bg-yellow-400 text-yellow-900 rounded-full text-sm font-bold animate-bounce">
                            🆕 NEW
                          </span>
                        )}
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                          {item.category}
                        </span>
                      </div>
                      <div className="text-9xl mb-8 animate-pulse">{item.image}</div>
                      <h3 className="text-5xl font-bold mb-6">{item.title}</h3>
                      <p className="text-2xl opacity-90 mb-10 max-w-4xl mx-auto leading-relaxed">{item.description}</p>
                      <div className="flex justify-center space-x-6">
                        <a 
                          href={item.link}
                          className="bg-white text-gray-900 px-10 py-5 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold text-xl shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                          Explore {item.category} →
                        </a>
                        <button className="border-2 border-white/30 text-white px-10 py-5 rounded-xl hover:bg-white/10 transition-all duration-300 font-bold text-xl backdrop-blur-sm">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Carousel Controls */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length)}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % contentItems.length)}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 shadow-lg ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contentItems.map((item) => (
            <div key={item.id} className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group`}>
              <div className="flex items-center justify-between mb-4">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">{item.image}</div>
                {item.new && (
                  <span className="px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full text-xs font-bold animate-pulse">
                    NEW
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-white/90 transition-colors">{item.title}</h3>
              <p className="text-white/90 mb-6 text-sm leading-relaxed group-hover:text-white transition-colors">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-white/20 px-3 py-1 rounded-full font-semibold">{item.category}</span>
                <a 
                  href={item.link}
                  className="text-white hover:text-white/80 transition-colors font-semibold text-sm group-hover:underline"
                >
                  Explore →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
          <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
            Ready to Shape the Future?
          </h3>
          <p className="text-xl opacity-90 mb-10 max-w-4xl mx-auto leading-relaxed">
            Dive into our revolutionary technology universe and discover the innovations that will define the next decade of human progress
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-10 py-5 rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-xl transform hover:scale-105 shadow-lg">
              Explore All Technologies →
            </button>
            <button className="border-2 border-white/30 text-white px-10 py-5 rounded-xl hover:bg-white/10 transition-all duration-300 font-bold text-xl backdrop-blur-sm">
              Get Technology Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;