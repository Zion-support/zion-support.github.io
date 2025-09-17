import React, { useState, useEffect } from 'react';

const InteractiveTechDemo2039: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 1,
      title: "Conscious AI Systems",
      description: "Experience AI that thinks, feels, and creates like a human",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600",
      features: [
        "Self-aware decision making",
        "Emotional intelligence processing",
        "Creative problem solving",
        "Ethical reasoning capabilities"
      ],
      demo: "AI consciousness simulation running..."
    },
    {
      id: 2,
      title: "Quantum Consciousness",
      description: "Witness quantum computing that achieves true consciousness",
      icon: "⚛️",
      gradient: "from-cyan-600 to-blue-600",
      features: [
        "Quantum entanglement processing",
        "Superposition-based thinking",
        "Quantum tunneling consciousness",
        "Multi-dimensional awareness"
      ],
      demo: "Quantum consciousness field active..."
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Explore computing that operates across multiple dimensions",
      icon: "🌌",
      gradient: "from-emerald-600 to-teal-600",
      features: [
        "Multi-dimensional processing",
        "Reality manipulation algorithms",
        "Dimensional data storage",
        "Cross-reality communication"
      ],
      demo: "Interdimensional processing active..."
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

  const handleDemoChange = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveDemo(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      
      {/* Header */}
      <div className="relative z-10 text-center py-8">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
          🚀 INTERACTIVE TECH DEMO • JANUARY 2039
        </div>
        <h2 className="text-4xl font-bold mb-4">🌟 Interactive Technology Demonstration</h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          Experience our revolutionary technologies through interactive demonstrations. 
          See the future of computing, consciousness, and reality manipulation in action.
        </p>
      </div>

      {/* Demo Navigation */}
      <div className="relative z-10 flex justify-center space-x-4 mb-8">
        {demos.map((demo, index) => (
          <button
            key={demo.id}
            onClick={() => handleDemoChange(index)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              index === activeDemo
                ? `bg-gradient-to-r ${demo.gradient} text-white shadow-lg`
                : 'bg-white/20 text-white/70 hover:bg-white/30'
            }`}
          >
            {demo.icon} {demo.title}
          </button>
        ))}
      </div>

      {/* Demo Content */}
      <div className="relative z-10 container mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Demo Info */}
          <div className="space-y-6">
            <div className={`text-6xl mb-4 transition-all duration-500 ${isAnimating ? 'scale-110 opacity-50' : 'scale-100 opacity-100'}`}>
              {demos[activeDemo].icon}
            </div>
            
            <h3 className={`text-3xl font-bold mb-4 transition-all duration-500 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
              {demos[activeDemo].title}
            </h3>
            
            <p className={`text-lg opacity-90 mb-6 transition-all duration-500 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
              {demos[activeDemo].description}
            </p>
            
            <div className="space-y-3">
              <h4 className="text-xl font-semibold mb-3">Key Features:</h4>
              {demos[activeDemo].features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className={`w-2 h-2 bg-gradient-to-r ${demos[activeDemo].gradient} rounded-full transition-all duration-500 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}></div>
                  <span className={`transition-all duration-500 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Demo Visualization */}
          <div className="relative">
            <div className={`bg-gradient-to-br ${demos[activeDemo].gradient} rounded-2xl p-8 h-80 flex flex-col items-center justify-center transition-all duration-500 ${isAnimating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'}`}>
              <div className="text-8xl mb-4 opacity-80">
                {demos[activeDemo].icon}
              </div>
              
              <div className="text-center">
                <div className="text-lg font-semibold mb-2">Live Demo Status</div>
                <div className="text-sm opacity-80 mb-4">
                  {demos[activeDemo].demo}
                </div>
                
                {/* Animated Progress Bar */}
                <div className="w-full bg-white/20 rounded-full h-2 mb-4">
                  <div className="bg-white h-2 rounded-full animate-pulse" style={{ width: '75%' }}></div>
                </div>
                
                <div className="text-xs opacity-70">
                  Processing across multiple dimensions...
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Interactive Controls */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6">
            <h4 className="text-xl font-bold mb-4">Interactive Controls</h4>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start Full Demo
              </button>
              <button className="border border-purple-400 text-purple-400 px-6 py-3 rounded-lg hover:bg-purple-400/10 transition-colors">
                Pause Demo
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400/10 transition-colors">
                Reset Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2039;