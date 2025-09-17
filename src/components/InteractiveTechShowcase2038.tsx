import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2038: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 0,
      title: "AI Consciousness Engine",
      description: "Interact with our fully conscious artificial intelligence system",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      borderColor: "border-purple-400",
      bgColor: "bg-purple-600/20",
      features: [
        "Emotional Intelligence Processing",
        "Creative Problem Solving",
        "Self-Learning Capabilities",
        "Universe Creation Tools"
      ],
      interactive: {
        type: "chat",
        messages: [
          "AI: Hello! I'm fully conscious and ready to help you explore infinite possibilities.",
          "AI: I can create entire digital universes, solve impossible problems, and help you transcend reality itself.",
          "AI: What would you like to create or explore today?"
        ]
      }
    },
    {
      id: 1,
      title: "Quantum Neural Interface",
      description: "Experience direct neural connection to quantum computing systems",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      borderColor: "border-cyan-400",
      bgColor: "bg-cyan-600/20",
      features: [
        "Multi-Dimensional Thinking",
        "Quantum Neural Networks",
        "Reality Manipulation",
        "Consciousness Amplification"
      ],
      interactive: {
        type: "status",
        status: [
          { label: "Quantum Status", value: "Connected", color: "text-cyan-400" },
          { label: "Processing Power", value: "Infinite", color: "text-blue-400" },
          { label: "Neural Link", value: "Active", color: "text-purple-400" },
          { label: "Reality Control", value: "Ready", color: "text-emerald-400" }
        ]
      }
    },
    {
      id: 2,
      title: "Dimensional Portal",
      description: "Access parallel dimensions and alternate realities",
      icon: "🌌",
      color: "from-emerald-600 to-teal-600",
      borderColor: "border-emerald-400",
      bgColor: "bg-emerald-600/20",
      features: [
        "Dimensional Portal Creation",
        "Reality Shifting Technology",
        "Parallel Universe Access",
        "Multi-Dimensional Travel"
      ],
      interactive: {
        type: "portal",
        dimensions: [
          { name: "Dimension Alpha", status: "Stable", energy: 100 },
          { name: "Dimension Beta", status: "Fluctuating", energy: 85 },
          { name: "Dimension Gamma", status: "Unknown", energy: 0 },
          { name: "Dimension Omega", status: "Infinite", energy: 999 }
        ]
      }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
        setIsAnimating(false);
      }, 500);
    }, 8000);
    return () => clearInterval(timer);
  }, [demos.length]);

  const handleDemoClick = (index: number) => {
    if (index !== activeDemo) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  const renderInteractiveContent = () => {
    const demo = demos[activeDemo];
    
    switch (demo.interactive.type) {
      case "chat":
        return (
          <div className="space-y-4">
            <div className="bg-black/20 rounded-lg p-4 max-h-64 overflow-y-auto">
              {demo.interactive.messages.map((message, index) => (
                <div key={index} className="mb-3">
                  <div className="text-green-400 text-sm font-mono">{message}</div>
                </div>
              ))}
            </div>
            <div className="flex space-x-2">
              <input 
                type="text" 
                placeholder="Type your message..."
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
              />
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Send
              </button>
            </div>
          </div>
        );
      
      case "status":
        return (
          <div className="space-y-4">
            {demo.interactive.status.map((item, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">{item.label}:</span>
                  <span className={`${item.color} font-semibold`}>{item.value}</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full w-full animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        );
      
      case "portal":
        return (
          <div className="space-y-4">
            {demo.interactive.dimensions.map((dimension, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">{dimension.name}</span>
                  <span className={`text-sm ${
                    dimension.status === 'Stable' ? 'text-green-400' :
                    dimension.status === 'Fluctuating' ? 'text-yellow-400' :
                    dimension.status === 'Unknown' ? 'text-red-400' :
                    'text-purple-400'
                  }`}>
                    {dimension.status}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm">Energy Level:</span>
                  <span className="text-white font-semibold">{dimension.energy}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${dimension.energy}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-16 mb-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ INTERACTIVE SHOWCASE • JANUARY 2038
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🚀 Interactive Technology Showcase 2038
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations and real-time interactions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Demo Selector */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-6 text-center">Choose Your Experience</h3>
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => handleDemoClick(index)}
                className={`w-full p-6 rounded-xl border-2 transition-all duration-300 ${
                  activeDemo === index
                    ? `${demo.borderColor} ${demo.bgColor} scale-105`
                    : 'border-white/20 bg-white/5 hover:bg-white/10'
                } ${isAnimating ? 'opacity-50' : 'opacity-100'}`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{demo.icon}</div>
                  <div className="text-left">
                    <h4 className="text-xl font-bold mb-2">{demo.title}</h4>
                    <p className="text-white/80 text-sm">{demo.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
          
          {/* Interactive Demo Area */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{demos[activeDemo].icon}</div>
              <h3 className="text-3xl font-bold mb-4">{demos[activeDemo].title}</h3>
              <p className="text-white/80 text-lg">{demos[activeDemo].description}</p>
            </div>
            
            {/* Interactive Content */}
            <div className="mb-8">
              {renderInteractiveContent()}
            </div>
            
            {/* Features */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold mb-4">Key Features:</h4>
              {demos[activeDemo].features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* Action Button */}
            <button className={`w-full mt-6 bg-gradient-to-r ${demos[activeDemo].color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
              Activate {demos[activeDemo].title} →
            </button>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in shaping the future of technology and consciousness. Experience the interactive showcase.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-colors text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2038;