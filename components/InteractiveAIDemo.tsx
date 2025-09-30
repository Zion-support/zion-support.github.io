import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const InteractiveAIDemo = () => {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [demoProgress, setDemoProgress] = useState(0);

  const demos = [
    {
      title: "Neural Interface Demo",
      description: "Experience direct human-AI collaboration with breakthrough neural interface technology",
      icon: "🧠",
      color: "from-blue-500 to-purple-600",
      features: ["1000x Faster Communication", "Real-time Thought Processing", "Seamless Human-AI Fusion"],
      demoText: "Connecting to neural interface... ✓ Establishing thought bridge... ✓ Processing commands at light speed... ✓ AI response generated in 0.001 seconds"
    },
    {
      title: "Quantum AI Processing",
      description: "Witness quantum-enhanced AI solving impossible optimization problems in seconds",
      icon: "⚛️",
      color: "from-purple-500 to-pink-600",
      features: ["500x Faster Processing", "Impossible Problem Solving", "Quantum Optimization"],
      demoText: "Initializing quantum processor... ✓ Entangling AI neurons... ✓ Solving NP-hard problems... ✓ Solution found in 0.5 seconds (vs 250 seconds classical)"
    },
    {
      title: "Autonomous AI Agents",
      description: "Watch self-evolving AI agents learn, adapt, and optimize enterprise workflows",
      icon: "🤖",
      color: "from-green-500 to-teal-600",
      features: ["Self-Learning Systems", "Autonomous Workflows", "Continuous Optimization"],
      demoText: "Deploying autonomous agents... ✓ Learning from enterprise data... ✓ Optimizing workflows... ✓ 300% productivity improvement achieved"
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setDemoProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 2;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const startDemo = () => {
    setIsPlaying(true);
    setDemoProgress(0);
  };

  const currentDemoData = demos[currentDemo];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 rounded-full text-sm font-semibold text-white mb-4">
            🎮 Interactive AI Demo 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Experience the Future of
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Enterprise AI
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Try our revolutionary AI technologies in real-time. See how neural interfaces, quantum processing, 
            and autonomous agents are transforming enterprise operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Controls */}
          <div className="space-y-8">
            {/* Demo Selection */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6">Choose Your AI Demo</h3>
              {demos.map((demo, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentDemo(index)}
                  className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                    index === currentDemo
                      ? 'border-purple-500 bg-purple-500/20'
                      : 'border-gray-600 bg-gray-800/50 hover:border-purple-400'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{demo.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{demo.title}</h4>
                      <p className="text-gray-300 text-sm">{demo.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Demo Features */}
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-4">Key Features</h4>
              <div className="space-y-2">
                {currentDemoData.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Demo Button */}
            <button
              onClick={startDemo}
              disabled={isPlaying}
              className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 ${
                isPlaying
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : `bg-gradient-to-r ${currentDemoData.color} text-white hover:scale-105 shadow-lg hover:shadow-xl`
              }`}
            >
              {isPlaying ? 'Demo Running...' : `🚀 Try ${currentDemoData.title}`}
            </button>
          </div>

          {/* Demo Display */}
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{currentDemoData.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{currentDemoData.title}</h3>
              <p className="text-gray-300">{currentDemoData.description}</p>
            </div>

            {/* Demo Terminal */}
            <div className="bg-black rounded-lg p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 ml-4">AI Demo Terminal</span>
              </div>
              
              <div className="space-y-2 text-green-400">
                {isPlaying && demoProgress > 0 && (
                  <div className="animate-pulse">
                    {currentDemoData.demoText}
                  </div>
                )}
                {!isPlaying && (
                  <div className="text-gray-500">
                    Click "Try Demo" to experience {currentDemoData.title.toLowerCase()}
                  </div>
                )}
              </div>

              {/* Progress Bar */}
              {isPlaying && (
                <div className="mt-4">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-100"
                      style={{ width: `${demoProgress}%` }}
                    ></div>
                  </div>
                  <div className="text-gray-400 text-xs mt-2 text-center">
                    Demo Progress: {demoProgress}%
                  </div>
                </div>
              )}
            </div>

            {/* Results */}
            {demoProgress >= 100 && (
              <div className="mt-6 bg-green-900/30 border border-green-500 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-400">✓</span>
                  <span className="text-green-400 font-bold">Demo Complete!</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Experience the full power of {currentDemoData.title} with our enterprise solutions.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Enterprise?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the full power of our AI solutions with a personalized demo and ROI projection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services/ai-2026-revolutionary-solutions"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                🚀 Get Personalized Demo
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                📞 Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveAIDemo;