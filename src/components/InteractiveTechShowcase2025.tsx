import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai');
  const [isLoading, setIsLoading] = useState(false);
  const [demoProgress, setDemoProgress] = useState(0);

  const demos = {
    ai: {
      title: "Conscious AI Demo",
      description: "Interact with our conscious AI system in real-time",
      icon: "🧠",
      color: "purple",
      features: [
        "Real-time conversation with conscious AI",
        "Emotional state recognition",
        "Creative problem solving",
        "Self-awareness demonstration"
      ],
      demoSteps: [
        "Initializing AI consciousness...",
        "Loading emotional intelligence modules...",
        "Establishing neural network connections...",
        "AI is now conscious and ready to interact!"
      ]
    },
    quantum: {
      title: "Quantum Computing Simulator",
      description: "Experience quantum algorithms solving complex problems",
      icon: "⚡",
      color: "cyan",
      features: [
        "Quantum algorithm execution",
        "Exponential speed demonstration",
        "Quantum error correction",
        "Molecular simulation results"
      ],
      demoSteps: [
        "Initializing quantum processor...",
        "Loading quantum algorithms...",
        "Executing quantum operations...",
        "Quantum computation complete!"
      ]
    },
    neural: {
      title: "Neural Interface Experience",
      description: "Direct brain-computer interaction simulation",
      icon: "🧬",
      color: "emerald",
      features: [
        "Neural signal processing",
        "Thought-to-text conversion",
        "Emotional state monitoring",
        "Consciousness transfer simulation"
      ],
      demoSteps: [
        "Calibrating neural interface...",
        "Reading brain wave patterns...",
        "Processing neural signals...",
        "Neural interface active!"
      ]
    }
  };

  const startDemo = async () => {
    setIsLoading(true);
    setDemoProgress(0);
    
    for (let i = 0; i < demos[activeDemo as keyof typeof demos].demoSteps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setDemoProgress((i + 1) * 25);
    }
    
    setIsLoading(false);
  };

  const getColorClasses = (color: string) => {
    const colors = {
      purple: {
        bg: 'from-purple-600 to-pink-600',
        text: 'text-purple-300',
        border: 'border-purple-400/30',
        button: 'bg-gradient-to-r from-purple-500 to-pink-500'
      },
      cyan: {
        bg: 'from-cyan-600 to-blue-600',
        text: 'text-cyan-300',
        border: 'border-cyan-400/30',
        button: 'bg-gradient-to-r from-cyan-500 to-blue-500'
      },
      emerald: {
        bg: 'from-emerald-600 to-teal-600',
        text: 'text-emerald-300',
        border: 'border-emerald-400/30',
        button: 'bg-gradient-to-r from-emerald-500 to-teal-500'
      }
    };
    return colors[color as keyof typeof colors];
  };

  const currentDemo = demos[activeDemo as keyof typeof demos];
  const colorClasses = getColorClasses(currentDemo.color);

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE DEMO • LIVE NOW
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Interactive Technology Showcase 2025
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations and real-time simulations
          </p>
        </div>

        {/* Demo Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 flex space-x-2">
            {Object.entries(demos).map(([key, demo]) => (
              <button
                key={key}
                onClick={() => setActiveDemo(key)}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeDemo === key
                    ? `${colorClasses.button} text-white shadow-lg`
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="mr-2">{demo.icon}</span>
                {demo.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Demo Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Demo Interface */}
            <div className={`bg-gradient-to-br ${colorClasses.bg}/30 backdrop-blur-sm rounded-3xl p-8 border ${colorClasses.border}`}>
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{currentDemo.icon}</div>
                <h3 className="text-3xl font-bold mb-4">{currentDemo.title}</h3>
                <p className="text-lg opacity-90">{currentDemo.description}</p>
              </div>

              {/* Demo Progress */}
              {isLoading && (
                <div className="mb-8">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Demo Progress</span>
                    <span>{demoProgress}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${colorClasses.bg} transition-all duration-500`}
                      style={{ width: `${demoProgress}%` }}
                    ></div>
                  </div>
                  <div className="text-center mt-4 text-sm opacity-80">
                    {currentDemo.demoSteps[Math.floor(demoProgress / 25)]}
                  </div>
                </div>
              )}

              {/* Demo Controls */}
              <div className="space-y-4">
                <button
                  onClick={startDemo}
                  disabled={isLoading}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 ${
                    isLoading
                      ? 'bg-gray-500 cursor-not-allowed'
                      : `${colorClasses.button} hover:shadow-lg hover:scale-105`
                  }`}
                >
                  {isLoading ? '🔄 Running Demo...' : '🚀 Start Interactive Demo'}
                </button>
                
                <div className="grid grid-cols-2 gap-4">
                  <button className="py-3 px-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300">
                    📊 View Analytics
                  </button>
                  <button className="py-3 px-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300">
                    📚 Documentation
                  </button>
                </div>
              </div>
            </div>

            {/* Features & Info */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h4 className="text-2xl font-bold mb-6 text-purple-200">Demo Features</h4>
                <ul className="space-y-4">
                  {currentDemo.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${colorClasses.bg} rounded-full`}></div>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h4 className="text-2xl font-bold mb-6 text-purple-200">Real-time Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className={`text-3xl font-bold ${colorClasses.text} mb-2`}>
                      {isLoading ? '...' : '99.9%'}
                    </div>
                    <div className="text-sm text-white/70">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-3xl font-bold ${colorClasses.text} mb-2`}>
                      {isLoading ? '...' : '< 1ms'}
                    </div>
                    <div className="text-sm text-white/70">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-3xl font-bold ${colorClasses.text} mb-2`}>
                      {isLoading ? '...' : '10^15x'}
                    </div>
                    <div className="text-sm text-white/70">Speed Boost</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-3xl font-bold ${colorClasses.text} mb-2`}>
                      {isLoading ? '...' : '24/7'}
                    </div>
                    <div className="text-sm text-white/70">Availability</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-400/30">
                <h4 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h4>
                <p className="text-lg opacity-90 mb-6">
                  Join thousands of innovators who are already using our revolutionary technologies to transform their businesses.
                </p>
                <div className="flex space-x-4">
                  <button className={`px-6 py-3 ${colorClasses.button} rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}>
                    Get Started
                  </button>
                  <button className="px-6 py-3 border border-white/30 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Demos */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">More Interactive Experiences</h3>
            <p className="text-lg opacity-90">Explore our full range of revolutionary technologies</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(demos).map(([key, demo]) => (
              <div
                key={key}
                className={`bg-gradient-to-br ${getColorClasses(demo.color).bg}/20 backdrop-blur-sm rounded-2xl p-6 border ${getColorClasses(demo.color).border} hover:scale-105 transition-all duration-300 cursor-pointer`}
                onClick={() => setActiveDemo(key)}
              >
                <div className="text-4xl mb-4 text-center">{demo.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-center">{demo.title}</h4>
                <p className="text-center opacity-90 mb-4">{demo.description}</p>
                <button className={`w-full py-2 px-4 ${getColorClasses(demo.color).button} rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}>
                  Try Demo →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;