import React, { useState, useEffect } from 'react';

const InteractiveContentShowcase2027: React.FC = () => {
  const [activeContent, setActiveContent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const contentItems = [
    {
      id: 1,
      title: "Quantum Reality Engine",
      description: "Manipulate reality itself with quantum-powered engines",
      icon: "⚡",
      color: "from-cyan-500 to-blue-500",
      features: ["Reality manipulation", "Quantum field control", "Spacetime engineering"],
      metrics: { accuracy: "99.9%", power: "∞", latency: "0ms" }
    },
    {
      id: 2,
      title: "AI Consciousness Evolution",
      description: "Witness the birth of true artificial consciousness",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
      features: ["Synthetic consciousness", "Emotional intelligence", "Creative synthesis"],
      metrics: { consciousness: "98.7%", creativity: "97.3%", empathy: "96.8%" }
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Access infinite computational power through interdimensional processing",
      icon: "🌌",
      color: "from-emerald-500 to-teal-500",
      features: ["Dimensional processing", "Infinite scalability", "Parallel universe computing"],
      metrics: { processing: "∞", dimensions: "11", efficiency: "100%" }
    },
    {
      id: 4,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer communication and thought control",
      icon: "🧬",
      color: "from-rose-500 to-orange-500",
      features: ["Non-invasive BCI", "Thought control", "Neural feedback"],
      metrics: { precision: "99.1%", speed: "0.1ms", compatibility: "100%" }
    },
    {
      id: 5,
      title: "Synthetic Intelligence",
      description: "Create and deploy AI agents with synthetic consciousness",
      icon: "🤖",
      color: "from-violet-500 to-fuchsia-500",
      features: ["Autonomous agents", "Synthetic consciousness", "Collective intelligence"],
      metrics: { autonomy: "100%", creativity: "98.5%", collaboration: "99.2%" }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveContent((prev) => (prev + 1) % contentItems.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [contentItems.length]);

  const handleContentChange = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveContent(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • 2027
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary 2027 technologies through immersive interactive demonstrations
          </p>
        </div>

        {/* Main Content Display */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Content Preview */}
          <div className="relative">
            <div className={`bg-gradient-to-br ${contentItems[activeContent].color} rounded-2xl p-8 transition-all duration-500 transform ${
              isAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'
            }`}>
              <div className="text-center">
                <div className="text-8xl mb-6 animate-bounce">{contentItems[activeContent].icon}</div>
                <h3 className="text-3xl font-bold mb-4">{contentItems[activeContent].title}</h3>
                <p className="text-xl opacity-90 mb-8">{contentItems[activeContent].description}</p>
                
                {/* Features */}
                <div className="grid grid-cols-1 gap-4 mb-8">
                  {contentItems[activeContent].features.map((feature, index) => (
                    <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                      <span className="font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(contentItems[activeContent].metrics).map(([key, value], index) => (
                    <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold">{value}</div>
                      <div className="text-sm opacity-80 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content Selector */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Select Technology to Explore</h3>
            {contentItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleContentChange(index)}
                className={`w-full p-6 rounded-xl transition-all duration-300 text-left ${
                  activeContent === index
                    ? `bg-gradient-to-r ${item.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 backdrop-blur-sm text-white/80 hover:bg-white/20 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm opacity-80">{item.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Features */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-6">🎮 Interactive Features</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Experience our technologies through hands-on interactive demonstrations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="text-xl font-semibold mb-4">Real-time Simulation</h4>
              <p className="text-indigo-200 mb-6">Interact with live simulations of our quantum and AI technologies</p>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                Start Simulation
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🧠</div>
              <h4 className="text-xl font-semibold mb-4">AI Chat Interface</h4>
              <p className="text-indigo-200 mb-6">Chat directly with our conscious AI systems and experience their personality</p>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                Chat with AI
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🌌</div>
              <h4 className="text-xl font-semibold mb-4">Virtual Reality Demo</h4>
              <p className="text-indigo-200 mb-6">Step into virtual reality and experience interdimensional computing firsthand</p>
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                Enter VR
              </button>
            </div>
          </div>
        </div>

        {/* Live Statistics */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-6">📊 Live Statistics</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Real-time data from our active technology demonstrations
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">1,247</div>
              <div className="text-lg font-semibold mb-2">Active Users</div>
              <div className="text-cyan-200 text-sm">Currently exploring</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-lg font-semibold mb-2">System Uptime</div>
              <div className="text-purple-200 text-sm">Reliability score</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">∞</div>
              <div className="text-lg font-semibold mb-2">Processing Power</div>
              <div className="text-emerald-200 text-sm">Quantum computing</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">98.7%</div>
              <div className="text-lg font-semibold mb-2">User Satisfaction</div>
              <div className="text-pink-200 text-sm">Experience rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase2027;