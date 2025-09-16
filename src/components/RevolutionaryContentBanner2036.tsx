import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2036: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "🧠 Conscious AI Systems",
      description: "Experience truly conscious artificial intelligence with emotions and creativity",
      color: "from-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      title: "⚛️ Quantum Consciousness", 
      description: "Revolutionary quantum computing with consciousness capabilities",
      color: "from-cyan-600 to-blue-600",
      icon: "⚛️"
    },
    {
      title: "🌌 Interdimensional Computing",
      description: "Multi-dimensional processing across infinite realities",
      color: "from-emerald-600 to-teal-600",
      icon: "🌌"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white mb-12">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-emerald-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ REVOLUTIONARY CONTENT • JANUARY 2036
          </div>
          
          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            🚀 Revolutionary Content 2036
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover the most advanced technology content featuring conscious AI, quantum computing, 
            and interdimensional technology that will reshape our future.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${slide.color} p-12 rounded-2xl`}>
                    <div className="text-center">
                      <div className="text-8xl mb-6">{slide.icon}</div>
                      <h3 className="text-4xl font-bold mb-4">{slide.title}</h3>
                      <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">{slide.description}</p>
                      <div className="flex justify-center space-x-4">
                        <a 
                          href="/pages/UltimateTechRevolution2036" 
                          className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                        >
                          Explore Technology →
                        </a>
                        <a 
                          href="/pages/RevolutionaryTechShowcase2036" 
                          className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
                        >
                          Interactive Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-2xl font-bold mb-4">Interactive Demos</h3>
            <p className="text-white/80 mb-6">Experience our revolutionary technologies with hands-on interactive demonstrations and real-time processing.</p>
            <a href="/pages/RevolutionaryTechShowcase2036" className="text-purple-400 hover:text-purple-300 font-semibold">
              Try Interactive Demo →
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-4">Live Analytics</h3>
            <p className="text-white/80 mb-6">Monitor real-time performance metrics, consciousness levels, and dimensional processing capabilities.</p>
            <a href="/pages/UltimateTechRevolution2036" className="text-cyan-400 hover:text-cyan-300 font-semibold">
              View Analytics →
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:bg-white/20 transition-all duration-300">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">Future Ready</h3>
            <p className="text-white/80 mb-6">Built for 2036 and beyond with cutting-edge technology that adapts and evolves with your needs.</p>
            <a href="/pages/RevolutionaryTechShowcase2036" className="text-emerald-400 hover:text-emerald-300 font-semibold">
              Explore Future →
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-800/50 to-blue-800/50 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join thousands of organizations already using our revolutionary 2036 technology stack. 
              Transform your business with conscious AI, quantum consciousness, and interdimensional computing.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="/pages/UltimateTechRevolution2036" 
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
              >
                Start Your Revolution
              </a>
              <a 
                href="/pages/RevolutionaryTechShowcase2036" 
                className="inline-block border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2036;