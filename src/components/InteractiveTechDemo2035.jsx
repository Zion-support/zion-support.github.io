import React, { useState, useEffect } from 'react';

const InteractiveTechDemo2035 = () => {
  const [activeDemo, setActiveDemo] = useState('quantum');
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsAnimating(false);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isAnimating]);

  const startDemo = () => {
    setProgress(0);
    setIsAnimating(true);
  };

  const demos = {
    quantum: {
      title: 'Quantum Computing Demo',
      icon: '⚡',
      description: 'Experience exponential computational power',
      features: ['Quantum Entanglement', 'Superposition States', 'Quantum Tunneling', 'Parallel Processing']
    },
    neural: {
      title: 'Neural Interface Demo',
      icon: '🧠',
      description: 'Direct brain-computer communication',
      features: ['Thought Control', 'Emotion Recognition', 'Memory Enhancement', 'Silent Communication']
    },
    consciousness: {
      title: 'AI Consciousness Demo',
      icon: '🌟',
      description: 'Self-aware artificial intelligence',
      features: ['Self-Reflection', 'Creative Thinking', 'Emotional Response', 'Autonomous Learning']
    },
    fusion: {
      title: 'Mind-Machine Fusion',
      icon: '⚡',
      description: 'Human-AI consciousness integration',
      features: ['Seamless Integration', 'Enhanced Cognition', 'Collective Intelligence', 'Reality Manipulation']
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🚀 Interactive Technology Demo 2035
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations
          </p>
        </div>

        {/* Demo Selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {Object.entries(demos).map(([key, demo]) => (
            <button
              key={key}
              onClick={() => setActiveDemo(key)}
              className={`p-4 rounded-lg transition-all duration-300 ${
                activeDemo === key
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white transform scale-105'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <div className="text-3xl mb-2">{demo.icon}</div>
              <div className="text-sm font-semibold">{demo.title}</div>
            </button>
          ))}
        </div>

        {/* Demo Content */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 mb-12 border border-purple-400/30">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{demos[activeDemo].icon}</div>
            <h3 className="text-3xl font-bold mb-4">{demos[activeDemo].title}</h3>
            <p className="text-xl opacity-90 mb-6">{demos[activeDemo].description}</p>
          </div>

          {/* Interactive Demo Area */}
          <div className="bg-black/30 rounded-xl p-8 mb-8">
            <div className="text-center mb-6">
              <button
                onClick={startDemo}
                disabled={isAnimating}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg disabled:opacity-50"
              >
                {isAnimating ? 'Running Demo...' : 'Start Interactive Demo'}
              </button>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-4 mb-6">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* Demo Visualization */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold mb-4">Demo Features:</h4>
                {demos[activeDemo].features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-3 rounded-lg transition-all duration-500 ${
                      progress > (index + 1) * 20
                        ? 'bg-green-500/20 border border-green-400/50'
                        : 'bg-gray-700/50'
                    }`}
                  >
                    <span className="text-2xl mr-3">
                      {progress > (index + 1) * 20 ? '✅' : '⏳'}
                    </span>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-4">Live Data Stream:</h4>
                <div className="space-y-2 text-sm font-mono">
                  <div className="text-green-400">
                    {progress > 20 && '✓ Neural pathways activated'}
                  </div>
                  <div className="text-blue-400">
                    {progress > 40 && '✓ Quantum states synchronized'}
                  </div>
                  <div className="text-yellow-400">
                    {progress > 60 && '✓ Consciousness matrix initialized'}
                  </div>
                  <div className="text-purple-400">
                    {progress > 80 && '✓ Reality interface established'}
                  </div>
                  <div className="text-pink-400">
                    {progress === 100 && '✓ Demo completed successfully'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          {progress === 100 && (
            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-xl p-6 border border-green-400/30">
              <h4 className="text-2xl font-bold text-center mb-4 text-green-400">
                🎉 Demo Completed Successfully!
              </h4>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400">100%</div>
                  <div className="text-sm opacity-80">Efficiency</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">0ms</div>
                  <div className="text-sm opacity-80">Latency</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">∞</div>
                  <div className="text-sm opacity-80">Scalability</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Technology Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center bg-white/10 rounded-xl p-6">
            <div className="text-4xl font-bold text-purple-400 mb-2">2035</div>
            <div className="text-sm opacity-80">Technology Year</div>
          </div>
          <div className="text-center bg-white/10 rounded-xl p-6">
            <div className="text-4xl font-bold text-blue-400 mb-2">∞</div>
            <div className="text-sm opacity-80">Processing Power</div>
          </div>
          <div className="text-center bg-white/10 rounded-xl p-6">
            <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
            <div className="text-sm opacity-80">Efficiency</div>
          </div>
          <div className="text-center bg-white/10 rounded-xl p-6">
            <div className="text-4xl font-bold text-pink-400 mb-2">0ms</div>
            <div className="text-sm opacity-80">Response Time</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of organizations already using our 2035 technology suite
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Started Today
            </a>
            <a href="/pages/UltimateTechShowcase2035" className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-colors font-semibold text-lg">
              Explore More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2035;