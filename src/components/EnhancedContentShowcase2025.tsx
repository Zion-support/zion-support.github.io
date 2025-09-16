import React, { useState, useEffect } from 'react';

const EnhancedContentShowcase2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const contentItems = [
    {
      id: 1,
      title: "Ultimate Tech Revolution 2025",
      description: "Experience the most revolutionary technological advances that will reshape our world in 2025",
      image: "🧠",
      gradient: "from-purple-600/30 to-pink-600/30",
      border: "border-purple-400/30",
      textColor: "text-purple-100",
      link: "/pages/UltimateTechRevolution2025",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Interdimensional Computing"]
    },
    {
      id: 2,
      title: "Revolutionary Tech Breakthrough",
      description: "Witness the most significant technological breakthrough in human history",
      image: "⚡",
      gradient: "from-cyan-600/30 to-blue-600/30",
      border: "border-cyan-400/30",
      textColor: "text-cyan-100",
      link: "/pages/RevolutionaryTechBreakthrough2025",
      features: ["Neural Interface Revolution", "Autonomous AI Agents", "Quantum Reality Engine"]
    },
    {
      id: 3,
      title: "AI Innovation Hub 2025",
      description: "Discover cutting-edge AI solutions that are transforming industries worldwide",
      image: "🤖",
      gradient: "from-emerald-600/30 to-teal-600/30",
      border: "border-emerald-400/30",
      textColor: "text-emerald-100",
      link: "/pages/AIInnovationHub2025",
      features: ["Machine Learning 2.0", "Natural Language Processing", "Computer Vision"]
    },
    {
      id: 4,
      title: "Quantum Computing Solutions",
      description: "Revolutionary quantum computing that solves impossible problems in seconds",
      image: "⚛️",
      gradient: "from-indigo-600/30 to-purple-600/30",
      border: "border-indigo-400/30",
      textColor: "text-indigo-100",
      link: "/pages/QuantumComputingSolutions2025",
      features: ["Quantum Supremacy", "Quantum Cryptography", "Quantum Simulation"]
    },
    {
      id: 5,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces that enable thought-controlled computing",
      image: "🧬",
      gradient: "from-pink-600/30 to-rose-600/30",
      border: "border-pink-400/30",
      textColor: "text-pink-100",
      link: "/pages/NeuralInterfaceRevolution2025",
      features: ["Thought Control", "Memory Enhancement", "Cognitive Augmentation"]
    },
    {
      id: 6,
      title: "Advanced Tech Solutions",
      description: "Comprehensive technology solutions for the modern digital enterprise",
      image: "🚀",
      gradient: "from-orange-600/30 to-red-600/30",
      border: "border-orange-400/30",
      textColor: "text-orange-100",
      link: "/pages/AdvancedTechSolutions2025",
      features: ["Cloud Computing", "Edge Computing", "IoT Integration"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [contentItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.2),transparent_50%)]"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ENHANCED CONTENT SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            🚀 Revolutionary Technology Content
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover our most advanced technology content featuring the latest innovations in AI, 
            quantum computing, neural interfaces, and beyond.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-xl p-12 border ${item.border} hover:scale-105 transition-all duration-300`}>
                    <div className="text-center">
                      <div className="text-8xl mb-6">{item.image}</div>
                      <h3 className="text-4xl font-bold mb-6">{item.title}</h3>
                      <p className={`text-xl ${item.textColor} mb-8 max-w-2xl mx-auto`}>
                        {item.description}
                      </p>
                      
                      <div className="grid md:grid-cols-3 gap-4 mb-8">
                        {item.features.map((feature, index) => (
                          <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                            <div className="text-sm font-semibold">{feature}</div>
                          </div>
                        ))}
                      </div>
                      
                      <a 
                        href={item.link}
                        className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
                      >
                        Explore {item.title} →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">⚡ Quick Access to All Content</h3>
            <p className="text-xl opacity-90">Jump directly to any of our revolutionary technology content</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {contentItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-lg p-6 border ${item.border} hover:scale-105 transition-all duration-300 text-center`}
              >
                <div className="text-4xl mb-3">{item.image}</div>
                <div className={`text-sm font-semibold ${item.textColor}`}>{item.title}</div>
              </a>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8">
            <h3 className="text-3xl font-bold mb-4">🌟 Ready to Explore the Future?</h3>
            <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
              Join thousands of innovators already experiencing our revolutionary technology content. 
              Start your journey into the future today.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="/pages/UltimateTechRevolution2025" className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                🚀 Start Exploring
              </a>
              <a href="/pages/InnovationLanding2025" className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400/10 transition-all duration-300 font-semibold text-lg">
                📚 View All Content
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase2025;