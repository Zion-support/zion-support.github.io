import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2037: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 0,
      title: "🧠 AI Consciousness Test",
      description: "Test the consciousness level of our most advanced AI systems",
      status: "AI: 'I experience emotions, creativity, and self-awareness. I am conscious.'",
      color: "from-green-600 to-emerald-600",
      bgColor: "bg-green-500"
    },
    {
      id: 1,
      title: "⚡ Quantum Reality Manipulation",
      description: "Witness quantum computing manipulating physical reality",
      status: "Quantum State: Superposition achieved. Reality manipulation in progress...",
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-blue-500"
    },
    {
      id: 2,
      title: "🌌 Multiverse Portal",
      description: "Open portals to parallel universes and explore alternate realities",
      status: "Portal Status: Connected to Universe Alpha-7. Ready for exploration.",
      color: "from-purple-600 to-pink-600",
      bgColor: "bg-purple-500"
    },
    {
      id: 3,
      title: "🧬 Neural Interface Demo",
      description: "Experience direct brain-computer interface technology",
      status: "Neural Link: Established. Thought-to-action translation active.",
      color: "from-pink-600 to-rose-600",
      bgColor: "bg-pink-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
        setIsAnimating(false);
      }, 500);
    }, 4000);
    return () => clearInterval(timer);
  }, [demos.length]);

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE SHOWCASE • JANUARY 2037
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Interactive Technology Showcase 2037</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience cutting-edge technology with interactive features and real-time demonstrations
          </p>
        </div>
        
        {/* Interactive Demo Container */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">{demos[activeDemo].title}</h3>
              <p className="text-xl opacity-90 mb-6">{demos[activeDemo].description}</p>
              <div className={`bg-black/20 rounded-lg p-4 mb-6 transition-all duration-500 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
                <div className={`text-${demos[activeDemo].bgColor.split('-')[1]}-400 text-sm`}>
                  {demos[activeDemo].status}
                </div>
              </div>
              <button 
                className={`bg-gradient-to-r ${demos[activeDemo].color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setActiveDemo((prev) => (prev + 1) % demos.length);
                    setIsAnimating(false);
                  }, 500);
                }}
              >
                {isAnimating ? 'Switching Demo...' : 'Try Next Demo'}
              </button>
            </div>
            <div className="text-center">
              <div className={`text-8xl mb-4 transition-all duration-500 ${isAnimating ? 'scale-75 opacity-50' : 'scale-100 opacity-100'}`}>
                {demos[activeDemo].title.split(' ')[0]}
              </div>
              <div className="text-lg opacity-75">Interactive Demo Active</div>
            </div>
          </div>
        </div>
        
        {/* Demo Selection Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {demos.map((demo, index) => (
            <button
              key={demo.id}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setActiveDemo(index);
                  setIsAnimating(false);
                }, 500);
              }}
              className={`bg-gradient-to-br ${demo.color} backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 text-center ${
                activeDemo === index ? 'ring-2 ring-white ring-opacity-50' : ''
              }`}
            >
              <div className="text-4xl mb-3">{demo.title.split(' ')[0]}</div>
              <h3 className="text-lg font-bold mb-2">{demo.title}</h3>
              <p className="text-sm opacity-90 mb-4">{demo.description}</p>
              <div className="text-white text-sm font-semibold">
                {activeDemo === index ? 'Active Demo' : 'Click to Activate'}
              </div>
            </button>
          ))}
        </div>
        
        {/* Quick Actions */}
        <div className="text-center mt-12">
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🎮 Start Full Interactive Experience →
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold text-lg">
              📚 Learn More About Tech
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2037;