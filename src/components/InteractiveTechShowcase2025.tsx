import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 'ai-agents',
      title: 'Autonomous AI Agents',
      description: 'Watch our AI agents work independently, making decisions and executing tasks in real-time.',
      icon: '🤖',
      color: 'from-purple-600 to-pink-600',
      features: ['Real-time Decision Making', 'Multi-task Execution', 'Self-Learning', '24/7 Operation'],
      stats: { efficiency: '300%', accuracy: '99.9%', uptime: '24/7' }
    },
    {
      id: 'quantum-processing',
      title: 'Quantum AI Processing',
      description: 'Experience the power of quantum computing with 1000x faster processing speeds.',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      features: ['Quantum Speed', 'Complex Problem Solving', 'Parallel Processing', 'Real-time Analytics'],
      stats: { speed: '1000x', problems: 'Unlimited', processing: 'Real-time' }
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface AI',
      description: 'See how direct brain-computer interface technology enables seamless human-AI interaction.',
      icon: '🧠',
      color: 'from-emerald-600 to-teal-600',
      features: ['Thought Control', 'Neural Feedback', 'Cognitive Enhancement', 'Medical Applications'],
      stats: { accuracy: '95%', response: 'Instant', interface: 'Non-invasive' }
    },
    {
      id: 'edge-computing',
      title: 'Edge AI Computing',
      description: 'Discover ultra-low latency AI processing deployed directly on edge devices.',
      icon: '🌐',
      color: 'from-orange-600 to-red-600',
      features: ['Ultra-Low Latency', 'Offline Processing', 'IoT Integration', 'Privacy-First'],
      stats: { latency: '<1ms', devices: '10K+', privacy: '100%' }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % demos.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [demos.length]);

  const currentDemo = demos[activeDemo];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECHNOLOGY SHOWCASE • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Experience the Future of Technology
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Interact with our cutting-edge AI technologies and see how they can transform your business in real-time.
          </p>
        </div>

        {/* Demo Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {demos.map((demo, index) => (
            <button
              key={demo.id}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setActiveDemo(index);
                  setIsAnimating(false);
                }, 300);
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeDemo === index
                  ? `bg-gradient-to-r ${demo.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{demo.icon}</span>
              {demo.title}
            </button>
          ))}
        </div>

        {/* Main Demo Area */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Demo Visualization */}
          <div className="relative">
            <div className={`bg-gradient-to-br ${currentDemo.color} rounded-2xl p-8 min-h-[500px] transition-all duration-500 ${
              isAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'
            }`}>
              <div className="text-center mb-8">
                <div className="text-8xl mb-4 animate-bounce">{currentDemo.icon}</div>
                <h3 className="text-3xl font-bold mb-4">{currentDemo.title}</h3>
                <p className="text-lg opacity-90">{currentDemo.description}</p>
              </div>

              {/* Interactive Demo Content */}
              <div className="space-y-6">
                {/* Stats Display */}
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(currentDemo.stats).map(([key, value], index) => (
                    <div key={key} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold">{value}</div>
                      <div className="text-sm opacity-80 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Feature List */}
                <div className="space-y-3">
                  {currentDemo.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Interactive Button */}
                <button className="w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Try Interactive Demo →
                </button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          {/* Demo Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">Live Technology Demonstration</h3>
              <p className="text-lg opacity-90 mb-6">
                This interactive showcase demonstrates our revolutionary AI technologies in action. 
                Watch as our systems process data, make decisions, and execute tasks autonomously.
              </p>
            </div>

            {/* Real-time Metrics */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">Real-time Performance Metrics</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Processing Speed</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full w-4/5 animate-pulse"></div>
                    </div>
                    <span className="text-sm font-semibold">95%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Accuracy Rate</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full w-full animate-pulse"></div>
                    </div>
                    <span className="text-sm font-semibold">99.9%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>System Uptime</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full w-5/6 animate-pulse"></div>
                    </div>
                    <span className="text-sm font-semibold">99.8%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Features */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">Key Technology Features</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="text-sm font-semibold">Lightning Fast</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl mb-2">🔒</div>
                  <div className="text-sm font-semibold">Secure</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl mb-2">🧠</div>
                  <div className="text-sm font-semibold">Intelligent</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl mb-2">🌐</div>
                  <div className="text-sm font-semibold">Scalable</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Request Live Demo →
              </button>
              <button className="w-full border-2 border-blue-400 text-blue-400 py-4 rounded-lg font-semibold hover:bg-blue-400/10 transition-colors">
                Download Technical Specs →
              </button>
            </div>
          </div>
        </div>

        {/* Technology Comparison */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Technology Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-6">Technology</th>
                  <th className="text-center py-4 px-6">Processing Speed</th>
                  <th className="text-center py-4 px-6">Accuracy</th>
                  <th className="text-center py-4 px-6">Scalability</th>
                  <th className="text-center py-4 px-6">Cost Efficiency</th>
                </tr>
              </thead>
              <tbody>
                {demos.map((demo, index) => (
                  <tr key={demo.id} className={`border-b border-white/10 ${activeDemo === index ? 'bg-white/5' : ''}`}>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{demo.icon}</span>
                        <span className="font-semibold">{demo.title}</span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-6">
                      <div className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                        {demo.stats.speed || '99.9%'}
                      </div>
                    </td>
                    <td className="text-center py-4 px-6">
                      <div className="inline-flex items-center px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {demo.stats.accuracy || '99.9%'}
                      </div>
                    </td>
                    <td className="text-center py-4 px-6">
                      <div className="inline-flex items-center px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                        High
                      </div>
                    </td>
                    <td className="text-center py-4 px-6">
                      <div className="inline-flex items-center px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">
                        Excellent
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Schedule a personalized demonstration of our revolutionary AI technologies and see how they can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Schedule Demo →
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-12 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
              Contact Sales →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;