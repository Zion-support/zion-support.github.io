import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const revolutionaryContent = [
    {
      title: "Revolutionary Tech Breakthrough 2026",
      description: "Experience the most advanced technological revolution in human history. Our breakthrough innovations are reshaping reality itself.",
      icon: "🚀",
      color: "from-purple-600 to-pink-600",
      features: ["Synthetic Intelligence", "Quantum-Neural Fusion", "Consciousness AI", "Quantum Internet"],
      link: "/pages/RevolutionaryTechBreakthrough2026",
      stats: { efficiency: "99.9%", speed: "10x", possibilities: "∞", year: "2026" }
    },
    {
      title: "Ultimate Tech Revolution 2026",
      description: "The convergence of consciousness, quantum computing, and artificial intelligence that's reshaping reality itself.",
      icon: "🌟",
      color: "from-cyan-600 to-blue-600",
      features: ["Interactive Technology Tabs", "Revolutionary Impact Stats", "Dynamic Feature Showcase", "Future Acceleration"],
      link: "/pages/UltimateTechRevolution2026",
      stats: { possibilities: "∞", speed: "10x", efficiency: "99.9%", year: "2026" }
    },
    {
      title: "Transcendent AI Future 2026",
      description: "AI that transcends consciousness itself and creates new forms of existence beyond human comprehension.",
      icon: "🧠",
      color: "from-emerald-600 to-teal-600",
      features: ["Consciousness AI", "Quantum Intelligence", "Meta Intelligence", "Synthetic Consciousness"],
      link: "/pages/TranscendentAIFuture2026",
      stats: { consciousness: "100%", evolution: "∞", creativity: "∞", future: "2028+" }
    },
    {
      title: "Synthetic Intelligence 2026",
      description: "Self-evolving AI systems that transcend traditional limitations and create new forms of consciousness.",
      icon: "⚛️",
      color: "from-orange-600 to-red-600",
      features: ["Self-Aware AI", "Emotional Intelligence", "Creative Consciousness", "Transcendent Learning"],
      link: "/pages/SyntheticIntelligence2026",
      stats: { awareness: "100%", evolution: "∞", creativity: "∞", potential: "∞" }
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % revolutionaryContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [revolutionaryContent.length]);

  const currentContent = revolutionaryContent[currentSlide];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-12 border border-purple-400/30">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY CONTENT SHOWCASE • 2026
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Discover our most advanced technological content that's reshaping reality itself
          </p>
        </div>

        {/* Main Content Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Content Info */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="flex items-center mb-6">
              <span className="text-8xl mr-6 animate-bounce">{currentContent.icon}</span>
              <h3 className="text-4xl font-bold text-white">
                {currentContent.title}
              </h3>
            </div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {currentContent.description}
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {currentContent.features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="flex items-center text-white">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 animate-pulse"></span>
                    <span className="font-semibold">{feature}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {Object.entries(currentContent.stats).map(([key, value], index) => (
                <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold text-purple-400 mb-1">{value}</div>
                  <div className="text-sm text-gray-300 capitalize">{key}</div>
                </div>
              ))}
            </div>

            <a 
              href={currentContent.link}
              className={`inline-block bg-gradient-to-r ${currentContent.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105`}
            >
              Explore {currentContent.title.split(' ')[0]} →
            </a>
          </div>

          {/* Visual Display */}
          <div className="relative">
            <div className={`w-full h-96 bg-gradient-to-br ${currentContent.color} rounded-2xl flex items-center justify-center text-white transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
              <span className="text-9xl animate-pulse">{currentContent.icon}</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 rounded-2xl"></div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-4 mb-8">
          {revolutionaryContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-gradient-to-r from-purple-400 to-pink-400 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Links */}
        <div className="grid md:grid-cols-4 gap-4">
          {revolutionaryContent.map((content, index) => (
            <a
              key={index}
              href={content.link}
              className={`bg-gradient-to-br ${content.color} backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 text-center group`}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {content.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                {content.title.split(' ')[0]} {content.title.split(' ')[1]}
              </h4>
              <p className="text-sm opacity-90 text-white">
                {content.description.substring(0, 80)}...
              </p>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Experience the Revolution?</h3>
          <p className="text-lg text-gray-300 mb-6">
            Join us in exploring the most advanced technologies ever created
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/pages/RevolutionaryTechBreakthrough2026"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:scale-105"
            >
              🚀 Start Your Journey →
            </a>
            <a 
              href="/enhanced-showcase"
              className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg hover:scale-105"
            >
              📚 View All Content
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase;