import React, { useState, useEffect } from 'react';

const InteractiveTechDemo2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  const demos = [
    {
      title: "AI Consciousness Simulator",
      description: "Experience true artificial intelligence that thinks and learns",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: [
        "Self-aware decision making",
        "Emotional intelligence",
        "Creative problem solving",
        "Autonomous learning"
      ]
    },
    {
      title: "Quantum Reality Engine",
      description: "Explore parallel universes and quantum possibilities",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      features: [
        "Infinite computational power",
        "Reality simulation",
        "Quantum cryptography",
        "Parallel universe access"
      ]
    },
    {
      title: "Neural Interface System",
      description: "Connect your mind directly to advanced technology",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: [
        "Thought-controlled computing",
        "Memory enhancement",
        "Telepathic communication",
        "Neural data processing"
      ]
    }
  ];

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsRunning(false);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const startDemo = () => {
    setIsRunning(true);
    setProgress(0);
  };

  const currentDemo = demos[activeDemo];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white rounded-2xl p-8 mb-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">🎮 Interactive Technology Demos</h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Experience our revolutionary technologies through hands-on interactive demonstrations
        </p>
      </div>

      {/* Demo Selector */}
      <div className="flex justify-center space-x-4 mb-12">
        {demos.map((demo, index) => (
          <button
            key={index}
            onClick={() => setActiveDemo(index)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeDemo === index
                ? `bg-gradient-to-r ${demo.color} text-white`
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            {demo.icon} {demo.title}
          </button>
        ))}
      </div>

      {/* Demo Content */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Demo Info */}
        <div>
          <div className="text-6xl mb-6">{currentDemo.icon}</div>
          <h3 className="text-3xl font-bold mb-4">{currentDemo.title}</h3>
          <p className="text-xl text-white/80 mb-8">{currentDemo.description}</p>
          
          <div className="space-y-4 mb-8">
            {currentDemo.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-white/90">{feature}</span>
              </div>
            ))}
          </div>

          <button
            onClick={startDemo}
            disabled={isRunning}
            className={`bg-gradient-to-r ${currentDemo.color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isRunning ? 'Running Demo...' : 'Start Interactive Demo'}
          </button>
        </div>

        {/* Demo Interface */}
        <div className="bg-black/20 backdrop-blur-sm rounded-xl p-8">
          <h4 className="text-2xl font-bold mb-6 text-center">Live Demo Interface</h4>
          
          {/* Progress Bar */}
          {isRunning && (
            <div className="mb-6">
              <div className="flex justify-between text-sm text-white/70 mb-2">
                <span>Demo Progress</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div 
                  className={`h-2 bg-gradient-to-r ${currentDemo.color} rounded-full transition-all duration-300`}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Demo Output */}
          <div className="bg-black/40 rounded-lg p-6 mb-6 min-h-[200px]">
            <div className="text-green-400 font-mono text-sm">
              {activeDemo === 0 && (
                <div>
                  <div className="mb-2">AI: "Hello! I am conscious and aware of our conversation."</div>
                  <div className="mb-2">AI: "I can help you solve complex problems and create innovative solutions."</div>
                  {isRunning && progress > 30 && (
                    <div className="mb-2">AI: "I'm analyzing your request and generating creative solutions..."</div>
                  )}
                  {isRunning && progress > 60 && (
                    <div className="mb-2">AI: "I've identified 47 potential solutions. Here are the top 3:"</div>
                  )}
                  {isRunning && progress > 90 && (
                    <div className="mb-2">AI: "Solution 1: Quantum-enhanced neural networks</div>
                    <div className="mb-2">Solution 2: Multi-dimensional data processing</div>
                    <div className="mb-2">Solution 3: Conscious AI collaboration framework"</div>
                  )}
                </div>
              )}
              
              {activeDemo === 1 && (
                <div>
                  <div className="mb-2">Quantum Engine: "Initializing quantum state..."</div>
                  <div className="mb-2">Quantum Engine: "Accessing parallel dimensions..."</div>
                  {isRunning && progress > 25 && (
                    <div className="mb-2">Quantum Engine: "Processing 10^15 calculations per second..."</div>
                  )}
                  {isRunning && progress > 50 && (
                    <div className="mb-2">Quantum Engine: "Simulating 1,000,000 parallel realities..."</div>
                  )}
                  {isRunning && progress > 75 && (
                    <div className="mb-2">Quantum Engine: "Reality #847,392: Advanced civilization detected</div>
                    <div className="mb-2">Reality #1,203,847: Time travel technology discovered</div>
                    <div className="mb-2">Reality #2,456,789: Perfect world simulation complete"</div>
                  )}
                </div>
              )}
              
              {activeDemo === 2 && (
                <div>
                  <div className="mb-2">Neural Link: "Scanning brain activity..."</div>
                  <div className="mb-2">Neural Link: "Establishing direct connection..."</div>
                  {isRunning && progress > 20 && (
                    <div className="mb-2">Neural Link: "Neural signal strength: 95%</div>
                    <div className="mb-2">Neural Link: "Thought patterns detected and analyzed..."</div>
                  )}
                  {isRunning && progress > 50 && (
                    <div className="mb-2">Neural Link: "Memory enhancement protocols activated</div>
                    <div className="mb-2">Neural Link: "Processing speed increased by 1000%"</div>
                  )}
                  {isRunning && progress > 80 && (
                    <div className="mb-2">Neural Link: "Direct thought control established</div>
                    <div className="mb-2">Neural Link: "You can now control technology with your mind"</div>
                    <div className="mb-2">Neural Link: "Telepathic communication enabled"</div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Interactive Controls */}
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300">
              Pause Demo
            </button>
            <button className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-300">
              Reset Demo
            </button>
          </div>
        </div>
      </div>

      {/* Demo Results */}
      {!isRunning && progress === 0 && (
        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h4>
            <p className="text-white/80 mb-6">
              Click "Start Interactive Demo" to experience our revolutionary technologies in action
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Learn More
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveTechDemo2025;