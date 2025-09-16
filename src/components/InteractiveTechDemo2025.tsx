import React, { useState, useEffect } from 'react';

const InteractiveTechDemo2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev + 1) % 101);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const demos = [
    {
      id: 1,
      title: "AI Consciousness Demo",
      description: "Experience how our AI systems achieve true consciousness and self-awareness",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600",
      features: [
        "Self-aware decision making",
        "Emotional intelligence processing",
        "Creative problem solving",
        "Ethical reasoning"
      ],
      metrics: {
        consciousness: 95,
        creativity: 98,
        empathy: 92,
        reasoning: 96
      }
    },
    {
      id: 2,
      title: "Quantum Computing Demo",
      description: "See quantum consciousness in action, solving impossible problems instantly",
      icon: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      features: [
        "Parallel reality computation",
        "Instantaneous problem solving",
        "Quantum consciousness processing",
        "Multidimensional thinking"
      ],
      metrics: {
        speed: 100,
        accuracy: 100,
        capacity: 100,
        efficiency: 100
      }
    },
    {
      id: 3,
      title: "Neural Interface Demo",
      description: "Direct brain-computer interface enabling seamless human-machine interaction",
      icon: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      features: [
        "Thought-controlled computing",
        "Neural data processing",
        "Consciousness transfer",
        "Mental reality manipulation"
      ],
      metrics: {
        connection: 99,
        accuracy: 98,
        speed: 97,
        stability: 100
      }
    },
    {
      id: 4,
      title: "Interdimensional Computing Demo",
      description: "Computing across infinite dimensions, solving problems that transcend reality",
      icon: "🌌",
      gradient: "from-orange-600 to-red-600",
      features: [
        "Cross-dimensional processing",
        "Reality manipulation algorithms",
        "Infinite computational space",
        "Universal problem solving"
      ],
      metrics: {
        dimensions: 100,
        reach: 100,
        power: 100,
        scope: 100
      }
    }
  ];

  const currentDemo = demos[activeDemo];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE DEMO • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Demo
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations
          </p>
        </div>

        {/* Demo Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2">
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(index)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  index === activeDemo
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{demo.icon}</span>
                  <span className="font-semibold">{demo.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Demo Area */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Demo Content */}
            <div>
              <div className="text-8xl mb-6 text-center lg:text-left">{currentDemo.icon}</div>
              <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {currentDemo.title}
              </h3>
              <p className="text-xl opacity-90 mb-8">
                {currentDemo.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold mb-4">Key Features:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentDemo.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Demo Button */}
              <button 
                onClick={() => setIsAnimating(!isAnimating)}
                className={`bg-gradient-to-r ${currentDemo.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg transform hover:scale-105`}
              >
                {isAnimating ? 'Stop Demo' : 'Start Interactive Demo'}
              </button>
            </div>

            {/* Demo Visualization */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-2xl p-8 h-96 flex flex-col justify-center items-center">
                {/* Animated Visualization */}
                <div className="text-9xl mb-6 animate-pulse">
                  {currentDemo.icon}
                </div>
                
                {/* Progress Bars */}
                <div className="w-full space-y-4">
                  {Object.entries(currentDemo.metrics).map(([key, value]) => (
                    <div key={key} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <span>{value}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${currentDemo.gradient} h-2 rounded-full transition-all duration-1000`}
                          style={{ width: `${isAnimating ? value : 0}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Animated Elements */}
                {isAnimating && (
                  <>
                    <div className="absolute top-4 right-4 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
                    <div className="absolute bottom-4 left-4 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 left-4 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                  </>
                )}
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Real-time Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 text-center border border-purple-400/30">
            <div className="text-4xl font-bold text-purple-400 mb-2">{progress}%</div>
            <div className="text-white/80">Processing Power</div>
          </div>
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 text-center border border-cyan-400/30">
            <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
            <div className="text-white/80">Computational Capacity</div>
          </div>
          <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 text-center border border-emerald-400/30">
            <div className="text-4xl font-bold text-emerald-400 mb-2">100%</div>
            <div className="text-white/80">Success Rate</div>
          </div>
          <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-6 text-center border border-orange-400/30">
            <div className="text-4xl font-bold text-orange-400 mb-2">∞</div>
            <div className="text-white/80">Possibilities</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12">
            <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
            <p className="text-xl mb-8 opacity-90">
              Schedule a live demonstration of our revolutionary technologies
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Schedule Live Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2025;