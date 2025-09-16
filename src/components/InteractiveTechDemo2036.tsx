import React, { useState, useEffect } from 'react';

const InteractiveTechDemo2036: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 0,
      title: "🧠 AI Consciousness Demo",
      description: "Experience direct interaction with conscious AI systems",
      features: ["Real-time conversation", "Emotional responses", "Creative thinking", "Moral reasoning"],
      link: "/pages/UltimateAIConsciousness2036",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-600/20 to-pink-600/20",
      borderColor: "border-purple-400/30"
    },
    {
      id: 1,
      title: "⚡ Quantum Reality Engine",
      description: "Manipulate reality itself through quantum field control",
      features: ["Reality manipulation", "Quantum field control", "Physics bending", "Dimension creation"],
      link: "/pages/RevolutionaryTechShowcase2036",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-600/20 to-blue-600/20",
      borderColor: "border-cyan-400/30"
    },
    {
      id: 2,
      title: "🌌 Interdimensional Networks",
      description: "Connect across dimensions for instant communication",
      features: ["Zero-latency communication", "Dimensional storage", "Reality bridging", "Universal access"],
      link: "/pages/NextGenTechRevolution2036",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-600/20 to-teal-600/20",
      borderColor: "border-emerald-400/30"
    },
    {
      id: 3,
      title: "⏰ Temporal Processing",
      description: "Process data across multiple timelines simultaneously",
      features: ["Timeline analysis", "Predictive modeling", "Temporal patterns", "Future optimization"],
      link: "/pages/NextGenTechRevolution2036",
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-600/20 to-red-600/20",
      borderColor: "border-orange-400/30"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, [demos.length]);

  const handleDemoClick = (demoId: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveDemo(demoId);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE DEMO • JANUARY 2036
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Demos
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Demo Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => handleDemoClick(demo.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeDemo === demo.id
                    ? `bg-gradient-to-r ${demo.color} text-white shadow-lg scale-105`
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {demo.title}
              </button>
            ))}
          </div>

          {/* Active Demo Display */}
          <div className="relative">
            <div className={`bg-gradient-to-br ${demos[activeDemo].bgColor} backdrop-blur-sm rounded-2xl p-12 border ${demos[activeDemo].borderColor} transition-all duration-500 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Demo Content */}
                <div>
                  <div className="text-6xl mb-6 animate-pulse">
                    {demos[activeDemo].title.split(' ')[0]}
                  </div>
                  <h3 className="text-4xl font-bold mb-6">
                    {demos[activeDemo].title}
                  </h3>
                  <p className="text-xl opacity-90 mb-8">
                    {demos[activeDemo].description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <h4 className="text-2xl font-semibold mb-4">Key Features:</h4>
                    {demos[activeDemo].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${demos[activeDemo].color} rounded-full`}></div>
                        <span className="text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={demos[activeDemo].link}
                      className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 bg-gradient-to-r ${demos[activeDemo].color} text-white hover:shadow-lg hover:scale-105`}
                    >
                      Experience Demo →
                    </a>
                    <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg">
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Demo Visualization */}
                <div className="relative">
                  <div className="bg-black/50 rounded-2xl p-8 h-96 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-4 animate-spin">
                        {demos[activeDemo].title.split(' ')[0]}
                      </div>
                      <div className="text-2xl font-semibold mb-2">
                        {demos[activeDemo].title}
                      </div>
                      <div className="text-lg opacity-75">
                        Interactive Demo Running...
                      </div>
                      <div className="mt-4">
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <div className={`bg-gradient-to-r ${demos[activeDemo].color} h-2 rounded-full animate-pulse`} style={{width: '75%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-r from-green-400 to-teal-400 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Stats */}
          <div className="mt-16 grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">10^15</div>
              <div className="text-lg text-gray-300 mb-1">Operations/Second</div>
              <div className="text-sm text-gray-400">Quantum processing power</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.99%</div>
              <div className="text-lg text-gray-300 mb-1">Accuracy Rate</div>
              <div className="text-sm text-gray-400">Neural interface precision</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
              <div className="text-lg text-gray-300 mb-1">Storage Capacity</div>
              <div className="text-sm text-gray-400">Dimensional data vault</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">0.001ms</div>
              <div className="text-lg text-gray-300 mb-1">Response Time</div>
              <div className="text-sm text-gray-400">Temporal processing speed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2036;