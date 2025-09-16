import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2035: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  const demos = [
    {
      id: 0,
      title: "Dimensional Portal",
      description: "Experience instantaneous travel between dimensions",
      icon: "🌌",
      color: "from-fuchsia-500 to-pink-500",
      bgColor: "from-fuchsia-600/30 to-pink-600/30",
      borderColor: "border-fuchsia-400/30",
      data: {
        stability: 99.9,
        energy: 100,
        connections: 1337,
        speed: "Instantaneous"
      }
    },
    {
      id: 1,
      title: "Consciousness Merger",
      description: "Merge your mind with AI superintelligence",
      icon: "🧠",
      color: "from-violet-500 to-purple-500",
      bgColor: "from-violet-600/30 to-purple-600/30",
      borderColor: "border-violet-400/30",
      data: {
        neuralSync: 95,
        processing: "10^15 FLOPS",
        memory: "Unlimited",
        compatibility: 100
      }
    },
    {
      id: 2,
      title: "Reality Engine",
      description: "Control the fundamental forces of reality",
      icon: "⚡",
      color: "from-indigo-500 to-blue-500",
      bgColor: "from-indigo-600/30 to-blue-600/30",
      borderColor: "border-indigo-400/30",
      data: {
        gravity: "Active",
        timeDilation: "1.5x",
        matterCreation: "10^6 kg/s",
        efficiency: 99.9
      }
    },
    {
      id: 3,
      title: "Cosmic Intelligence",
      description: "Access universal knowledge and wisdom",
      icon: "🌟",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-600/30 to-teal-600/30",
      borderColor: "border-emerald-400/30",
      data: {
        knowledge: "10^24 bytes",
        connections: 1337,
        patterns: 99.9,
        updateRate: "Real-time"
      }
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setActiveDemo(prev => (prev + 1) % demos.length);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRunning, demos.length]);

  const startDemo = () => {
    setIsRunning(true);
    setProgress(0);
  };

  const stopDemo = () => {
    setIsRunning(false);
    setProgress(0);
  };

  const selectDemo = (id: number) => {
    setActiveDemo(id);
    setProgress(0);
    setIsRunning(false);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 INTERACTIVE SHOWCASE • JANUARY 2035
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Interactive Tech Showcase 2035</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technologies through interactive demonstrations and real-time data
          </p>
        </div>

        {/* Demo Selector */}
        <div className="flex justify-center space-x-4 mb-8">
          {demos.map((demo) => (
            <button
              key={demo.id}
              onClick={() => selectDemo(demo.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeDemo === demo.id
                  ? `bg-gradient-to-r ${demo.color} text-white shadow-lg`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {demo.icon} {demo.title}
            </button>
          ))}
        </div>

        {/* Active Demo Display */}
        <div className={`bg-gradient-to-br ${demos[activeDemo].bgColor} backdrop-blur-sm rounded-2xl p-12 border ${demos[activeDemo].borderColor} mb-8`}>
          <div className="text-center">
            <div className="text-8xl mb-6">{demos[activeDemo].icon}</div>
            <h3 className="text-4xl font-bold text-white mb-4">{demos[activeDemo].title}</h3>
            <p className="text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              {demos[activeDemo].description}
            </p>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold">Demo Progress</span>
                <span className="text-lg font-semibold">{progress}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-4">
                <div 
                  className={`bg-gradient-to-r ${demos[activeDemo].color} h-4 rounded-full transition-all duration-300`}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={startDemo}
                disabled={isRunning}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  isRunning
                    ? 'bg-gray-500 cursor-not-allowed'
                    : `bg-gradient-to-r ${demos[activeDemo].color} hover:shadow-lg`
                }`}
              >
                {isRunning ? 'Running...' : 'Start Demo'}
              </button>
              <button
                onClick={stopDemo}
                disabled={!isRunning}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  !isRunning
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-red-500 hover:bg-red-600 hover:shadow-lg'
                }`}
              >
                Stop Demo
              </button>
            </div>

            {/* Real-time Data */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(demos[activeDemo].data).map(([key, value], index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-sm text-gray-300 mb-2 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {typeof value === 'number' ? `${value}${key.includes('Sync') || key.includes('patterns') ? '%' : ''}` : value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Statistics */}
        <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-white text-center mb-8">📊 Live Statistics</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-fuchsia-400 mb-2">∞</div>
              <div className="text-lg font-semibold text-white mb-1">Possibilities</div>
              <div className="text-sm text-gray-300">Unlimited potential</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-violet-400 mb-2">100%</div>
              <div className="text-lg font-semibold text-white mb-1">Success Rate</div>
              <div className="text-sm text-gray-300">Perfect implementation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-400 mb-2">0</div>
              <div className="text-lg font-semibold text-white mb-1">Limitations</div>
              <div className="text-sm text-gray-300">No boundaries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
              <div className="text-lg font-semibold text-white mb-1">Cosmic Scale</div>
              <div className="text-sm text-gray-300">Universal impact</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <div className="flex justify-center space-x-4">
            <a 
              href="/pages/UltimateTechBreakthrough2035"
              className="bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
            >
              Explore Full Breakthrough →
            </a>
            <a 
              href="/pages/RevolutionaryTechShowcase2035"
              className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              View Complete Showcase
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2035;