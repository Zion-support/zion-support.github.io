import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 'ai-agents',
      title: 'Autonomous AI Agents',
      description: 'Experience self-learning AI agents that operate independently',
      icon: '🤖',
      features: [
        'Real-time decision making',
        'Self-learning capabilities',
        '24/7 autonomous operation',
        'Multi-task processing',
        'Predictive analytics'
      ],
      demo: 'Watch AI agents make autonomous decisions in real-time'
    },
    {
      id: 'quantum-ai',
      title: 'Quantum AI Processing',
      description: 'See quantum computing power in action with 1000x faster processing',
      icon: '⚡',
      features: [
        'Quantum speed processing',
        'Complex problem solving',
        'Advanced pattern recognition',
        'Real-time optimization',
        'Unlimited scalability'
      ],
      demo: 'Experience quantum-powered AI processing complex calculations instantly'
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface AI',
      description: 'Direct brain-computer interface technology for seamless interaction',
      icon: '🧠',
      features: [
        'Direct neural control',
        'Thought-to-action processing',
        'Enhanced cognitive abilities',
        'Seamless integration',
        'Advanced security'
      ],
      demo: 'Control AI systems with your thoughts in real-time'
    },
    {
      id: 'ai-analytics',
      title: 'AI-Powered Analytics',
      description: 'Advanced analytics that uncover insights and drive business growth',
      icon: '📊',
      features: [
        'Predictive analytics',
        'Real-time insights',
        'Automated reporting',
        'Trend analysis',
        'Custom dashboards'
      ],
      demo: 'Watch AI analyze data and generate insights in real-time'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [demos.length]);

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECH SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience our cutting-edge AI technologies in action with interactive demonstrations and real-time capabilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Selection */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-8">Choose Your Demo</h3>
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(index)}
                className={`w-full p-6 rounded-xl transition-all duration-300 text-left ${
                  activeDemo === index
                    ? 'bg-gradient-to-r from-purple-600/30 to-pink-600/30 border-2 border-purple-400/50'
                    : 'bg-white/10 hover:bg-white/20 border border-white/20'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{demo.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{demo.title}</h4>
                    <p className="text-sm opacity-90">{demo.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Interactive Demo Area */}
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{demos[activeDemo].icon}</div>
              <h3 className="text-3xl font-bold mb-4">{demos[activeDemo].title}</h3>
              <p className="text-lg opacity-90 mb-6">{demos[activeDemo].description}</p>
            </div>

            {/* Demo Visualization */}
            <div className="bg-black/30 rounded-xl p-8 mb-8 min-h-[300px] flex items-center justify-center">
              <div className={`text-center transition-all duration-500 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
                <div className="text-8xl mb-4 animate-bounce">{demos[activeDemo].icon}</div>
                <div className="text-2xl font-bold mb-4">{demos[activeDemo].demo}</div>
                <div className="w-full bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              <h4 className="text-xl font-bold mb-4">Key Features:</h4>
              {demos[activeDemo].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Demo Controls */}
            <div className="mt-8 flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Try Live Demo
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Real-time Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
            <div className="text-sm opacity-75">Active Demos</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-sm opacity-75">Uptime</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-4xl font-bold text-blue-400 mb-2">1M+</div>
            <div className="text-sm opacity-75">Demo Sessions</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-sm opacity-75">Available</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Start your free trial today and experience our revolutionary AI technologies firsthand.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;