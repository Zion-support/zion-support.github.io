import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RevolutionaryAdBanner2034: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    "Conscious AI Systems",
    "Quantum Consciousness",
    "Interdimensional Computing",
    "Neural Interface Technology",
    "Reality Engineering",
    "Infinite Possibilities"
  ];

  const stats = [
    { label: "Success Rate", value: "100%", color: "text-green-400" },
    { label: "Performance", value: "∞", color: "text-blue-400" },
    { label: "Innovation", value: "Revolutionary", color: "text-purple-400" },
    { label: "Future", value: "Now", color: "text-pink-400" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className={`relative overflow-hidden rounded-2xl mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute top-10 left-10 w-16 h-16 border-2 border-purple-400/30 rotate-45 animate-spin"></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 bg-cyan-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-8 h-8 bg-pink-400/30 transform rotate-45 animate-bounce"></div>
      </div>

      <div className="relative z-10 p-8 md:p-12">
        <div className="max-w-7xl mx-auto">
          {/* Main content */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 REVOLUTIONARY ADVERTISEMENT • JANUARY 2034
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Revolutionary Technology
              </span>
              <br />
              <span className="text-4xl md:text-5xl text-white/90">
                Advertisement 2034
              </span>
            </h2>
            
            <p className="text-2xl md:text-3xl text-white/90 mb-8 max-w-5xl mx-auto">
              Experience the most advanced technology content featuring
            </p>
            
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8 min-h-[3rem] flex items-center justify-center">
              {features[currentFeature]}
            </div>
          </div>

          {/* Content showcase grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Ultimate Tech Breakthrough</h3>
              <p className="text-white/90 mb-6 text-center">
                Discover the most revolutionary technological advances that will reshape our world
              </p>
              <Link
                to="/pages/UltimateTechBreakthrough2034"
                className="block w-full bg-white text-purple-600 py-3 rounded-xl font-bold text-center hover:shadow-xl transition-all duration-300"
              >
                Explore Breakthrough →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Revolutionary Showcase</h3>
              <p className="text-white/90 mb-6 text-center">
                Interactive demonstrations of cutting-edge technology with immersive experiences
              </p>
              <Link
                to="/pages/RevolutionaryTechShowcase2034"
                className="block w-full bg-white text-cyan-600 py-3 rounded-xl font-bold text-center hover:shadow-xl transition-all duration-300"
              >
                View Showcase →
              </Link>
            </div>

            <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-4 text-center">🔬</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Comprehensive Services</h3>
              <p className="text-white/90 mb-6 text-center">
                Complete suite of revolutionary technology services to transform your business
              </p>
              <Link
                to="/pages/ComprehensiveServices2034"
                className="block w-full bg-white text-emerald-600 py-3 rounded-xl font-bold text-center hover:shadow-xl transition-all duration-300"
              >
                View Services →
              </Link>
            </div>
          </div>

          {/* Stats section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-3xl font-bold text-white text-center mb-8">Revolutionary Performance Metrics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-white/80 text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join thousands of satisfied clients who have revolutionized their businesses with our cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pages/UltimateTechBreakthrough2034"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Start Your Journey →
              </Link>
              <Link
                to="/pages/ComprehensiveServices2034"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-indigo-900 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAdBanner2034;