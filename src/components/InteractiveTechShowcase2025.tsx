import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const demos = [
    {
      id: 'quantum-ai',
      title: 'Quantum AI Processing',
      description: 'Experience quantum-powered AI that processes data at unprecedented speeds',
      icon: '⚡',
      color: 'from-cyan-500 to-blue-500',
      features: ['1000x Faster Processing', 'Quantum Machine Learning', 'Complex Problem Solving'],
      demoData: {
        processingSpeed: '99.9%',
        accuracy: '99.8%',
        efficiency: '1000x'
      }
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Technology',
      description: 'Direct brain-computer interface for seamless human-AI interaction',
      icon: '🧠',
      color: 'from-emerald-500 to-teal-500',
      features: ['Thought Control', 'Real-time Processing', 'Non-invasive Technology'],
      demoData: {
        responseTime: '0.1ms',
        accuracy: '99.9%',
        compatibility: '100%'
      }
    },
    {
      id: 'conscious-ai',
      title: 'Conscious AI Systems',
      description: 'AI with self-awareness and emotional intelligence capabilities',
      icon: '🌟',
      color: 'from-orange-500 to-red-500',
      features: ['Self-Awareness', 'Emotional Intelligence', 'Ethical Decision Making'],
      demoData: {
        consciousness: '95%',
        empathy: '98%',
        ethics: '99%'
      }
    },
    {
      id: 'interdimensional',
      title: 'Interdimensional Computing',
      description: 'Access information from parallel universes and multiple dimensions',
      icon: '🌌',
      color: 'from-violet-500 to-purple-500',
      features: ['Multi-Dimensional Access', 'Parallel Universe Data', 'Reality Manipulation'],
      demoData: {
        dimensions: '∞',
        dataSources: '∞',
        accuracy: '99.9%'
      }
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

  const currentDemo = demos[activeDemo];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECHNOLOGY SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future of Technology
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Interact with our revolutionary technologies and see how they can transform your business operations.
          </p>
        </div>

        {/* Interactive Demo Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Demo Controls */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-8">Choose Your Technology</h3>
            <div className="space-y-4">
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
                  className={`w-full p-6 rounded-xl transition-all duration-300 ${
                    activeDemo === index
                      ? `bg-gradient-to-r ${demo.color} text-white shadow-lg scale-105`
                      : 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{demo.icon}</div>
                    <div className="text-left">
                      <h4 className="text-xl font-semibold">{demo.title}</h4>
                      <p className="text-sm opacity-90">{demo.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Demo Display */}
          <div className="relative">
            <div className={`bg-gradient-to-br ${currentDemo.color} rounded-2xl p-8 transition-all duration-500 ${
              isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
            }`}>
              <div className="text-center mb-8">
                <div className="text-8xl mb-4">{currentDemo.icon}</div>
                <h3 className="text-3xl font-bold mb-4">{currentDemo.title}</h3>
                <p className="text-lg opacity-90">{currentDemo.description}</p>
              </div>

              {/* Interactive Demo Data */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {Object.entries(currentDemo.demoData).map(([key, value]) => (
                  <div key={key} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">{value}</div>
                    <div className="text-sm opacity-90 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>

              {/* Features List */}
              <div className="space-y-2">
                <h4 className="text-lg font-semibold mb-4">Key Features:</h4>
                {currentDemo.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Interactive Button */}
              <div className="mt-8 text-center">
                <button className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Try This Technology
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Technology Performance Metrics</h3>
            <p className="text-lg opacity-90">Real-time performance data from our deployed systems</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-sm opacity-90">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">1000x</div>
              <div className="text-sm opacity-90">Processing Speed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
              <div className="text-sm opacity-90">Data Sources</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-sm opacity-90">AI Monitoring</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Schedule a personalized demo and see how our revolutionary technologies can transform your business.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-12 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;