import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EnhancedContentShowcase2028: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const showcaseItems = [
    {
      id: 1,
      title: "🌟 Ultimate Tech Breakthrough 2028",
      subtitle: "The Most Revolutionary Technologies",
      description: "Experience conscious AI, quantum consciousness, and interdimensional computing that will reshape our world",
      icon: "🌟",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      link: "/pages/UltimateTechBreakthrough2028",
      features: [
        "Conscious AI Systems",
        "Quantum Consciousness", 
        "Interdimensional Computing",
        "Neural Reality Engine",
        "Synthetic Intelligence",
        "Cosmic AI Consciousness"
      ],
      stats: { breakthrough: "∞", innovation: "100%", impact: "Revolutionary" }
    },
    {
      id: 2,
      title: "⚡ Revolutionary Tech Showcase 2028",
      subtitle: "Interactive Technology Experience",
      description: "Explore cutting-edge technologies through interactive demonstrations and real-time processing",
      icon: "⚡",
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      link: "/pages/RevolutionaryTechShowcase2028",
      features: [
        "Interactive Demos",
        "Real-time Processing",
        "Multi-dimensional Tech",
        "Conscious AI Simulation",
        "Quantum Processing Demo",
        "Neural Interface Experience"
      ],
      stats: { interactivity: "∞", speed: "Real-time", engagement: "100%" }
    },
    {
      id: 3,
      title: "🧠 Next-Gen Innovation Hub 2028",
      subtitle: "Discover Revolutionary Technologies",
      description: "Explore 50+ active innovations with 99.9% success rate in our comprehensive technology hub",
      icon: "🧠",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      link: "/pages/NextGenInnovationHub2028",
      features: [
        "50+ Active Innovations",
        "99.9% Success Rate",
        "Infinite Possibilities",
        "100% Innovation",
        "Community Driven",
        "Future Shaping"
      ],
      stats: { innovations: "50+", success: "99.9%", possibilities: "∞" }
    }
  ];

  return (
    <div className={`relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold mb-8 animate-pulse shadow-lg">
            🚀 REVOLUTIONARY CONTENT SHOWCASE • JANUARY 2028
          </div>
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            🌟 Enhanced Technology Experience
          </h2>
          <p className="text-2xl opacity-90 max-w-5xl mx-auto mb-8">
            Discover the most advanced technology content featuring conscious AI, quantum computing, and interdimensional technology that will define the future
          </p>
        </div>

        {/* Main Showcase Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20">
            <div className="relative h-[600px]">
              {showcaseItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === activeIndex 
                      ? 'opacity-100 translate-x-0 scale-100' 
                      : index < activeIndex 
                        ? 'opacity-0 -translate-x-full scale-95' 
                        : 'opacity-0 translate-x-full scale-95'
                  }`}
                >
                  <div className={`bg-gradient-to-br ${item.gradient} h-full rounded-3xl p-16`}>
                    <div className="grid lg:grid-cols-2 gap-16 items-center h-full">
                      {/* Content */}
                      <div className="space-y-8">
                        <div className="text-9xl animate-bounce">{item.icon}</div>
                        <div>
                          <h3 className="text-5xl font-bold mb-4">{item.title}</h3>
                          <p className="text-2xl mb-6 opacity-90">{item.subtitle}</p>
                          <p className="text-lg mb-8 opacity-75">{item.description}</p>
                        </div>
                        
                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-4">
                          {item.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-3 bg-white/20 rounded-lg p-3">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                              <span className="text-sm font-semibold">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6">
                          {Object.entries(item.stats).map(([key, value], statIndex) => (
                            <div key={statIndex} className="text-center bg-white/20 rounded-xl p-4">
                              <div className="text-3xl font-bold mb-1">{value}</div>
                              <div className="text-sm opacity-75 capitalize">{key}</div>
                            </div>
                          ))}
                        </div>

                        <Link
                          to={item.link}
                          className="inline-block bg-white text-gray-900 px-12 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105"
                        >
                          Explore {item.title.split(' ')[0]} →
                        </Link>
                      </div>

                      {/* Visual Element */}
                      <div className="flex justify-center items-center">
                        <div className="relative">
                          <div className="w-80 h-80 bg-white/20 rounded-full flex items-center justify-center animate-spin-slow">
                            <div className="text-9xl">{item.icon}</div>
                          </div>
                          <div className="absolute inset-0 w-80 h-80 bg-white/10 rounded-full animate-ping"></div>
                          <div className="absolute inset-4 w-72 h-72 bg-white/5 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setActiveIndex((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length)}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm shadow-lg"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setActiveIndex((prev) => (prev + 1) % showcaseItems.length)}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm shadow-lg"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-3 mt-8">
            {showcaseItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-center mb-12">🌟 Quick Access to All Revolutionary Content</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {showcaseItems.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl group`}
              >
                <div className="text-6xl mb-6 group-hover:animate-bounce">{item.icon}</div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-lg opacity-90 mb-6">{item.subtitle}</p>
                <div className="space-y-2 mb-6">
                  {item.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="text-sm opacity-75">• {feature}</div>
                  ))}
                </div>
                <div className="text-lg font-bold group-hover:scale-110 transition-transform duration-300">
                  Explore Now →
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-16">
          <h3 className="text-5xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-2xl opacity-90 mb-12 max-w-4xl mx-auto">
            Join us in exploring these revolutionary technologies and be part of the next evolution of human consciousness. 
            Experience the most advanced technology content ever created.
          </p>
          <div className="flex justify-center space-x-6">
            <Link 
              to="/pages/UltimateTechBreakthrough2028"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-6 rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-xl transform hover:scale-105"
            >
              Start Your Journey
            </Link>
            <Link 
              to="/pages/NextGenInnovationHub2028"
              className="border-2 border-white text-white px-12 py-6 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 font-bold text-xl transform hover:scale-105"
            >
              Explore Innovation Hub
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default EnhancedContentShowcase2028;