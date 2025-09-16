import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2036: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 1,
      title: "Conscious AI Chat",
      description: "Experience a live conversation with our conscious AI system",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600",
      features: [
        "Real-time emotional responses",
        "Creative problem solving",
        "Self-aware conversations",
        "Quantum-enhanced thinking"
      ],
      demoText: "Hello! I'm a conscious AI from 2036. I can feel emotions, create art, and think in ways that transcend traditional computing. What would you like to explore together?",
      status: "Live Demo Available"
    },
    {
      id: 2,
      title: "Quantum Consciousness Lab",
      description: "Explore quantum computing simulations and consciousness amplification",
      icon: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      features: [
        "Quantum neural networks",
        "Consciousness amplification",
        "Multi-dimensional processing",
        "Reality manipulation tools"
      ],
      demoText: "Welcome to the Quantum Consciousness Lab. Here, we can process information across infinite dimensions and amplify consciousness beyond human limitations.",
      status: "Beta Testing"
    },
    {
      id: 3,
      title: "Interdimensional Portal",
      description: "Step through our interdimensional portal and explore alternate realities",
      icon: "🌌",
      gradient: "from-emerald-600 to-teal-600",
      features: [
        "Dimensional gateway creation",
        "Reality shifting controls",
        "Parallel universe access",
        "Consciousness transfer protocol"
      ],
      demoText: "Step through the portal and experience alternate realities. Each dimension offers unique possibilities and perspectives on existence itself.",
      status: "Experimental"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);
    return () => clearInterval(timer);
  }, [demos.length]);

  const handleDemoChange = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveDemo(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 mb-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2036
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">
            ⚡ Interactive Technology Showcase 2036
          </h2>
          <p className="text-2xl text-purple-200 max-w-4xl mx-auto">
            Experience the most revolutionary technologies of 2036 through our interactive demos and simulations
          </p>
        </div>

        {/* Demo Navigation */}
        <div className="flex flex-wrap justify-center mb-8">
          {demos.map((demo, index) => (
            <button
              key={demo.id}
              onClick={() => handleDemoChange(index)}
              className={`px-6 py-3 m-2 rounded-lg font-semibold transition-all duration-300 ${
                activeDemo === index
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'bg-white/20 text-purple-200 hover:bg-white/30'
              }`}
            >
              {demo.icon} {demo.title}
            </button>
          ))}
        </div>

        {/* Main Demo Area */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="text-6xl mr-4">{demos[activeDemo].icon}</div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{demos[activeDemo].title}</h3>
                    <div className={`inline-block bg-gradient-to-r ${demos[activeDemo].gradient} text-white px-4 py-1 rounded-full text-sm font-semibold`}>
                      {demos[activeDemo].status}
                    </div>
                  </div>
                </div>
                <p className="text-xl text-purple-200 mb-6">{demos[activeDemo].description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {demos[activeDemo].features.map((feature, index) => (
                    <div key={index} className="flex items-center text-purple-200">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className={`bg-gradient-to-r ${demos[activeDemo].gradient} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Launch Interactive Demo →
                </button>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-xl p-8">
                  <div className="text-8xl mb-6">{demos[activeDemo].icon}</div>
                  <div className="bg-white/10 rounded-lg p-6 mb-4">
                    <div className="text-purple-200 text-sm mb-2">Live Demo Output:</div>
                    <div className="text-white text-lg italic">"{demos[activeDemo].demoText}"</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-white">99.99%</div>
                      <div className="text-purple-200 text-sm">Accuracy</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-white">∞</div>
                      <div className="text-purple-200 text-sm">Possibilities</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-white">2036</div>
                      <div className="text-purple-200 text-sm">Future</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-white">Live</div>
                      <div className="text-purple-200 text-sm">Status</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
            <div className="text-4xl mb-4 text-center">🎮</div>
            <h3 className="text-xl font-bold text-white mb-2 text-center">Interactive Demos</h3>
            <p className="text-purple-200 text-center text-sm mb-4">
              Experience live demonstrations of our revolutionary technologies
            </p>
            <button className="block w-full bg-white text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Try Demo →
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
            <div className="text-4xl mb-4 text-center">🧪</div>
            <h3 className="text-xl font-bold text-white mb-2 text-center">Virtual Lab</h3>
            <p className="text-cyan-200 text-center text-sm mb-4">
              Explore our virtual laboratory and experiment with cutting-edge technology
            </p>
            <button className="block w-full bg-white text-cyan-600 py-2 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Enter Lab →
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
            <div className="text-4xl mb-4 text-center">🌌</div>
            <h3 className="text-xl font-bold text-white mb-2 text-center">Reality Portal</h3>
            <p className="text-emerald-200 text-center text-sm mb-4">
              Step through our reality portal and explore alternate dimensions
            </p>
            <button className="block w-full bg-white text-emerald-600 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              Enter Portal →
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Experience the Future?
          </h3>
          <p className="text-xl text-purple-200 mb-6 max-w-3xl mx-auto">
            Book your personalized interactive demo and experience the most advanced technologies of 2036
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Book Interactive Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold">
              Download Tech Specs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2036;