import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2037: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 1,
      title: "Conscious AI Demo",
      description: "Experience AI that thinks, feels, and creates like a human",
      icon: "🧠",
      color: "purple",
      features: [
        "Real-time emotional analysis",
        "Creative problem solving",
        "Ethical decision making",
        "Self-aware conversations"
      ],
      stats: {
        consciousness: "100%",
        creativity: "∞",
        empathy: "99.9%",
        learning: "Instant"
      }
    },
    {
      id: 2,
      title: "Quantum Computing Lab",
      description: "Explore quantum processors that exist in multiple states simultaneously",
      icon: "⚛️",
      color: "cyan",
      features: [
        "Quantum superposition",
        "Entanglement networks",
        "Parallel processing",
        "Reality simulation"
      ],
      stats: {
        qubits: "1M+",
        speed: "∞",
        accuracy: "99.9%",
        dimensions: "Multi"
      }
    },
    {
      id: 3,
      title: "Interdimensional Portal",
      description: "Access computing power from parallel universes",
      icon: "🌌",
      color: "emerald",
      features: [
        "Multi-dimensional access",
        "Infinite resources",
        "Reality manipulation",
        "Portal creation"
      ],
      stats: {
        dimensions: "∞",
        power: "Infinite",
        reach: "Universal",
        stability: "100%"
      }
    },
    {
      id: 4,
      title: "Predictive Reality Engine",
      description: "See the future with 99.9% accuracy",
      icon: "🔮",
      color: "orange",
      features: [
        "Future prediction",
        "Scenario simulation",
        "Risk assessment",
        "Outcome optimization"
      ],
      stats: {
        accuracy: "99.9%",
        scenarios: "∞",
        timeframe: "Unlimited",
        confidence: "100%"
      }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);
    return () => clearInterval(timer);
  }, [demos.length]);

  const currentDemo = demos[activeDemo];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-20 mb-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE • 2037
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2037
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the future of technology through interactive demonstrations. 
            Click, explore, and discover what's possible with revolutionary AI and quantum computing.
          </p>
        </div>

        {/* Interactive Demo Area */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Demo Display */}
          <div className="relative">
            <div className={`bg-gradient-to-br from-${currentDemo.color}-600/30 to-${currentDemo.color}-800/30 backdrop-blur-sm rounded-2xl p-8 border border-${currentDemo.color}-400/30 transition-all duration-500 ${isAnimating ? 'scale-95 opacity-80' : 'scale-100 opacity-100'}`}>
              <div className="text-center mb-8">
                <div className="text-8xl mb-6 animate-bounce">{currentDemo.icon}</div>
                <h3 className="text-3xl font-bold mb-4">{currentDemo.title}</h3>
                <p className="text-xl opacity-90">{currentDemo.description}</p>
              </div>

              {/* Interactive Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {Object.entries(currentDemo.stats).map(([key, value], index) => (
                  <div key={key} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">{value}</div>
                    <div className="text-sm opacity-80 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                  </div>
                ))}
              </div>

              {/* Interactive Features */}
              <div className="space-y-3">
                {currentDemo.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white/5 rounded-lg p-3">
                    <div className={`w-3 h-3 bg-${currentDemo.color}-400 rounded-full animate-pulse`}></div>
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Demo Controls */}
            <div className="flex justify-center space-x-4 mt-6">
              <button 
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setActiveDemo((prev) => (prev - 1 + demos.length) % demos.length);
                    setIsAnimating(false);
                  }, 300);
                }}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors rounded-full p-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setActiveDemo((prev) => (prev + 1) % demos.length);
                    setIsAnimating(false);
                  }, 300);
                }}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors rounded-full p-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Demo Selection */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Choose Your Demo</h3>
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setActiveDemo(index);
                    setIsAnimating(false);
                  }, 300);
                }}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                  activeDemo === index 
                    ? `bg-gradient-to-r from-${demo.color}-600/30 to-${demo.color}-800/30 border-2 border-${demo.color}-400/50` 
                    : 'bg-white/5 hover:bg-white/10 border border-white/10'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{demo.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{demo.title}</h4>
                    <p className="text-white/70 text-sm">{demo.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Live Statistics */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Live Technology Statistics</h3>
            <p className="text-xl opacity-90">Real-time data from our revolutionary systems</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">2.5B+</div>
              <div className="text-lg font-semibold mb-2">Active Users</div>
              <div className="text-purple-200 text-sm">People using our technology worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-lg font-semibold mb-2">Accuracy Rate</div>
              <div className="text-cyan-200 text-sm">Prediction and processing accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
              <div className="text-lg font-semibold mb-2">Computational Power</div>
              <div className="text-emerald-200 text-sm">Infinite processing capabilities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-lg font-semibold mb-2">Availability</div>
              <div className="text-orange-200 text-sm">Continuous operation and support</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join millions of users who are already experiencing the revolutionary power of our technology. 
            Start your journey into the future today.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Start Interactive Demo →
            </button>
            <button className="border-2 border-purple-400 px-12 py-4 rounded-lg hover:bg-purple-400/20 transition-all duration-300 font-semibold text-xl">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2037;