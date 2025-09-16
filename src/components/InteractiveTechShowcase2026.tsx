import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % 4);
        setIsAnimating(false);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const demos = [
    {
      id: 0,
      title: "Quantum Computing Simulator",
      description: "Experience the power of quantum computing with our interactive simulator",
      icon: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      features: ["Quantum Gates", "Entanglement", "Superposition", "Measurement"],
      status: "Live Demo Available"
    },
    {
      id: 1,
      title: "Neural Interface Demo",
      description: "Control devices with your thoughts using our neural interface technology",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600",
      features: ["Thought Control", "Brain Patterns", "Real-time Processing", "Device Control"],
      status: "VR Experience Ready"
    },
    {
      id: 2,
      title: "AI Assistant Chat",
      description: "Chat with our advanced AI assistant powered by synthetic intelligence",
      icon: "🤖",
      gradient: "from-emerald-600 to-teal-600",
      features: ["Natural Language", "Context Understanding", "Creative Responses", "Learning"],
      status: "Online Now"
    },
    {
      id: 3,
      title: "Quantum Neural Fusion",
      description: "Experience the convergence of quantum computing and neural networks",
      icon: "🔮",
      gradient: "from-indigo-600 to-purple-600",
      features: ["Quantum ML", "Pattern Recognition", "Optimization", "Prediction"],
      status: "Beta Testing"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE TECHNOLOGY SHOWCASE 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Interact with cutting-edge technologies through our immersive demonstrations. 
            See, feel, and experience the revolutionary innovations that will shape tomorrow.
          </p>
        </div>

        {/* Main Demo Area */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Demo Display */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="text-center mb-6">
                <div className="text-8xl mb-4 animate-bounce">{demos[activeDemo].icon}</div>
                <h3 className="text-3xl font-bold mb-2">{demos[activeDemo].title}</h3>
                <p className="text-lg opacity-90 mb-4">{demos[activeDemo].description}</p>
                <div className="inline-flex items-center px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  {demos[activeDemo].status}
                </div>
              </div>
              
              {/* Interactive Demo Area */}
              <div className="bg-black/50 rounded-xl p-6 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  {demos[activeDemo].features.map((feature, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">⚡</div>
                      <div className="text-sm font-semibold">{feature}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Demo Controls */}
              <div className="flex justify-center space-x-4">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Try Demo
                </button>
                <button className="border-2 border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Demo Selector */}
          <div className="space-y-4">
            {demos.map((demo, index) => (
              <div
                key={demo.id}
                onClick={() => setActiveDemo(index)}
                className={`bg-gradient-to-r ${demo.gradient} p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeDemo === index ? 'scale-105 shadow-lg' : 'hover:scale-102'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{demo.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-1">{demo.title}</h4>
                    <p className="text-sm opacity-90 mb-2">{demo.description}</p>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-xs font-semibold">{demo.status}</span>
                    </div>
                  </div>
                  <div className="text-2xl">
                    {activeDemo === index ? '▶️' : '▶️'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 text-center">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-4">Real-time Interaction</h3>
            <p className="text-cyan-100 mb-6">
              Interact with technologies in real-time and see immediate results from your actions.
            </p>
            <button className="bg-white text-cyan-600 px-6 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              Start Interaction
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 text-center">
            <div className="text-6xl mb-4">🥽</div>
            <h3 className="text-2xl font-bold mb-4">VR Experience</h3>
            <p className="text-purple-100 mb-6">
              Immerse yourself in virtual reality to experience technologies in a fully immersive environment.
            </p>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Enter VR
            </button>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 text-center">
            <div className="text-6xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Live Simulation</h3>
            <p className="text-emerald-100 mb-6">
              Watch live simulations of quantum processes and AI algorithms working in real-time.
            </p>
            <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
              Watch Live
            </button>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Technology Performance Metrics</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">0.001s</div>
              <div className="text-lg opacity-90">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">1M+</div>
              <div className="text-lg opacity-90">Users Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-lg opacity-90">Availability</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators who are already experiencing these revolutionary technologies. 
            Start your interactive journey into the future today.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Interactive Demo
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
              Schedule VR Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;