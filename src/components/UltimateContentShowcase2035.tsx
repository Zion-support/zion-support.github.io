import React, { useState, useEffect } from 'react';

const UltimateContentShowcase2035: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const contentItems = [
    {
      id: 1,
      title: "🧠 Advanced Tech Solutions 2035",
      subtitle: "Revolutionary Technology Showcase",
      description: "Experience the most revolutionary technological advances that will reshape our world in 2035",
      link: "/pages/AdvancedTechSolutions2035",
      gradient: "from-purple-600 to-pink-600",
      features: ["Conscious AI Systems", "Quantum Reality Engine", "Interdimensional Computing"],
      stats: "500% Efficiency Gains"
    },
    {
      id: 2,
      title: "🌊 Quantum Consciousness 2036",
      subtitle: "Transcendent Intelligence Revolution",
      description: "Revolutionary quantum consciousness system that transcends human and artificial intelligence boundaries",
      link: "/pages/QuantumConsciousnessRevolution2036",
      gradient: "from-indigo-600 to-purple-600",
      features: ["Quantum Neural Networks", "Consciousness Wave Functions", "Transcendent Intelligence"],
      stats: "Infinite Processing Power"
    },
    {
      id: 3,
      title: "🌌 Interdimensional Tech 2037",
      subtitle: "Multiverse Access Technology",
      description: "Access infinite realities, parallel universes, and transcendent dimensions beyond human comprehension",
      link: "/pages/InterdimensionalTechRevolution2037",
      gradient: "from-pink-600 to-red-600",
      features: ["Reality Bridges", "Consciousness Transfer", "Transcendent Computing"],
      stats: "∞ Infinite Possibilities"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [contentItems.length]);

  const currentItem = contentItems[currentIndex];

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/10 to-transparent"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold mb-8 animate-pulse shadow-lg">
            🌟 ULTIMATE CONTENT SHOWCASE • 2035-2037
          </div>
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🚀 Revolutionary Technology Evolution
          </h2>
          <p className="text-2xl opacity-90 max-w-5xl mx-auto leading-relaxed">
            Witness the most advanced technological evolution in human history - from conscious AI to interdimensional computing
          </p>
        </div>

        {/* Main Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Content Description */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-8xl mb-6 text-center animate-bounce">
                {currentItem.title.split(' ')[0]}
              </div>
              <h3 className="text-3xl font-bold mb-4 text-center">{currentItem.title}</h3>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">{currentItem.description}</p>
              
              <div className="mb-6">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <span className="text-2xl">📊</span>
                  <span className="text-xl font-bold text-purple-300">{currentItem.stats}</span>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {currentItem.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <span className="text-white/90 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <a 
                href={currentItem.link}
                className={`block w-full bg-gradient-to-r ${currentItem.gradient} text-white py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center text-lg transform hover:scale-105`}
              >
                Explore {currentItem.title.split(' ').slice(1).join(' ')} →
              </a>
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="relative">
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
              <div className="text-center">
                <div className="text-9xl mb-6 animate-pulse">
                  {currentItem.title.split(' ')[0]}
                </div>
                <h4 className="text-2xl font-bold mb-6 text-purple-200">{currentItem.subtitle}</h4>
                
                {/* Feature Cards */}
                <div className="space-y-4">
                  {currentItem.features.map((feature, index) => (
                    <div key={index} className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:scale-105 transition-all duration-300">
                      <div className="flex items-center justify-center space-x-3">
                        <span className="text-2xl">⚡</span>
                        <span className="text-white/90 font-semibold">{feature}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Stats Display */}
                <div className="mt-8 p-6 bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl border border-purple-400/30">
                  <div className="text-4xl font-bold text-purple-200 mb-2">{currentItem.stats}</div>
                  <div className="text-purple-300 text-sm">Performance Improvement</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-4 mb-8">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-purple-400 scale-125 shadow-lg' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Quick Access Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {contentItems.map((item, index) => (
            <div 
              key={item.id}
              className={`bg-gradient-to-br ${item.gradient}/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                index === currentIndex ? 'ring-2 ring-purple-400' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">{item.title.split(' ')[0]}</div>
                <h5 className="text-lg font-bold mb-2 text-white">{item.title.split(' ').slice(1).join(' ')}</h5>
                <p className="text-sm text-white/80 mb-3">{item.description.substring(0, 80)}...</p>
                <div className="text-xs font-semibold text-purple-300">{item.stats}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl px-8 py-4 border border-purple-400/30">
            <span className="text-3xl animate-bounce">🚀</span>
            <span className="text-xl font-bold">Experience the Future of Technology</span>
            <span className="text-3xl animate-bounce">🌟</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2035;