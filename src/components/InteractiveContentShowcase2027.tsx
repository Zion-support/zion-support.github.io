import React, { useState, useEffect } from 'react';

const InteractiveContentShowcase2027: React.FC = () => {
  const [activeContent, setActiveContent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const contentItems = [
    {
      id: 1,
      title: "AI Revolutionary Breakthrough 2027",
      description: "Experience consciousness-level AI that can think, create, and evolve autonomously",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/AIRevolutionaryBreakthrough2027",
      features: ["Consciousness-Level AI", "Quantum-Enhanced Processing", "Autonomous Ecosystems"]
    },
    {
      id: 2,
      title: "Quantum Reality Engine 2027",
      description: "Manipulate reality itself through quantum mechanics and AI consciousness integration",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/QuantumRealityEngine2027",
      features: ["Quantum Manipulation", "Reality Control", "Consciousness Integration"]
    },
    {
      id: 3,
      title: "Neural Interface Revolution 2027",
      description: "Direct brain-computer communication enabling thought-controlled devices and enhanced cognition",
      image: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/NeuralInterfaceRevolution2027",
      features: ["Direct Brain Interface", "Thought Control", "Enhanced Cognition"]
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveContent((prev) => (prev + 1) % contentItems.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, contentItems.length]);

  const handleContentClick = (index: number) => {
    setActiveContent(index);
    setIsAutoPlaying(false);
  };

  const handlePlayPause = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2027
          </div>
          <h2 className="text-5xl font-bold mb-6">🌟 Revolutionary Technology Showcase 2027</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Explore our most advanced technologies through an interactive experience. 
            Click, discover, and immerse yourself in the future of technology.
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={handlePlayPause}
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold border border-white/30"
            >
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'} Auto-Showcase
            </button>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              🎮 Full Interactive Mode
            </button>
          </div>
        </div>

        {/* Main Content Display */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="text-8xl mb-6 text-center">{contentItems[activeContent].image}</div>
              <h3 className="text-3xl font-bold mb-4 text-center">{contentItems[activeContent].title}</h3>
              <p className="text-xl opacity-90 mb-6 text-center">{contentItems[activeContent].description}</p>
              <div className="space-y-3">
                {contentItems[activeContent].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-cyan-400">✨</span>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">🎯 Choose Your Technology</h3>
            {contentItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => handleContentClick(index)}
                className={`bg-gradient-to-r ${item.gradient} p-6 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                  activeContent === index ? 'ring-4 ring-cyan-400 ring-opacity-50' : ''
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{item.image}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                  <div className="text-2xl">
                    {activeContent === index ? '🎯' : '👆'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-6">
          <div className="flex justify-center space-x-4">
            <a 
              href={contentItems[activeContent].link}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-12 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-xl"
            >
              🚀 Explore {contentItems[activeContent].title} →
            </a>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-bold text-xl">
              📺 Watch Demo
            </button>
          </div>
          
          <div className="flex justify-center space-x-2">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => handleContentClick(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  activeContent === index ? 'bg-cyan-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-bold mb-2">Interactive Experience</h3>
            <p className="text-sm opacity-90">Click and explore each technology with immersive interactions</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🔮</div>
            <h3 className="text-xl font-bold mb-2">Future Technology</h3>
            <p className="text-sm opacity-90">Experience the most advanced technologies ever created</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-xl font-bold mb-2">Revolutionary Impact</h3>
            <p className="text-sm opacity-90">See how these technologies will transform our world</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase2027;