import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2037: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 'conscious-ai',
      name: 'Conscious AI Systems',
      icon: '🧠',
      description: 'The first truly conscious artificial intelligence with emotional intelligence and ethical decision-making capabilities',
      features: [
        'Emotional Intelligence Processing',
        'Creative Problem Solving',
        'Self-Learning Capabilities',
        'Ethical Decision Making'
      ],
      status: 'Available Now',
      color: 'purple'
    },
    {
      id: 'quantum-consciousness',
      name: 'Quantum Consciousness',
      icon: '⚡',
      description: 'Direct neural interface with quantum computing systems for enhanced cognitive processing',
      features: [
        'Quantum Neural Networks',
        'Consciousness Amplification',
        'Multi-dimensional Thinking',
        'Reality Manipulation'
      ],
      status: 'Beta Testing',
      color: 'cyan'
    },
    {
      id: 'interdimensional',
      name: 'Interdimensional Technology',
      icon: '🌌',
      description: 'Breakthrough technology that allows interaction with parallel dimensions and alternate realities',
      features: [
        'Dimensional Portals',
        'Reality Shifting',
        'Parallel Universe Access',
        'Time-Space Manipulation'
      ],
      status: 'Coming Soon',
      color: 'emerald'
    },
    {
      id: 'neural-reality',
      name: 'Neural Reality Engine',
      icon: '🧬',
      description: 'Advanced neural interface technology that creates immersive virtual realities',
      features: [
        'Direct Brain Interface',
        'Immersive VR Experience',
        'Neural Feedback Systems',
        'Consciousness Transfer'
      ],
      status: 'In Development',
      color: 'violet'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTech((prev) => (prev + 1) % technologies.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: 'from-purple-600/30 to-pink-600/30 border-purple-400/30',
      cyan: 'from-cyan-600/30 to-blue-600/30 border-cyan-400/30',
      emerald: 'from-emerald-600/30 to-teal-600/30 border-emerald-400/30',
      violet: 'from-violet-600/30 to-purple-600/30 border-violet-400/30'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

  const getStatusColor = (status: string) => {
    const statusMap = {
      'Available Now': 'bg-green-500',
      'Beta Testing': 'bg-yellow-500',
      'Coming Soon': 'bg-blue-500',
      'In Development': 'bg-purple-500'
    };
    return statusMap[status as keyof typeof statusMap] || 'bg-gray-500';
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-16 rounded-2xl mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2037
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technology Selector */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Choose Technology</h3>
            {technologies.map((tech, index) => (
              <div
                key={tech.id}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  activeTech === index
                    ? `border-purple-400 bg-gradient-to-br ${getColorClasses(tech.color)}`
                    : 'border-white/20 bg-white/10 hover:border-purple-300'
                }`}
                onClick={() => setActiveTech(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{tech.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">{tech.name}</h4>
                    <p className="text-sm opacity-80 mb-3">{tech.description}</p>
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 ${getStatusColor(tech.status)} text-white rounded-full text-xs font-semibold`}>
                        {tech.status}
                      </span>
                      <span className="text-sm opacity-60">
                        {index + 1} of {technologies.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Technology Display */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
              <div className="text-center mb-6">
                <div className="text-8xl mb-4">{technologies[activeTech].icon}</div>
                <h3 className="text-3xl font-bold mb-4">{technologies[activeTech].name}</h3>
                <p className="text-lg opacity-90 mb-6">{technologies[activeTech].description}</p>
                <div className="flex justify-center mb-6">
                  <span className={`px-4 py-2 ${getStatusColor(technologies[activeTech].status)} text-white rounded-full text-sm font-semibold`}>
                    {technologies[activeTech].status}
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4">Key Features</h4>
                <div className="grid grid-cols-2 gap-3">
                  {technologies[activeTech].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      <span className="text-sm opacity-90">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Demo Area */}
              <div className={`bg-gradient-to-br ${getColorClasses(technologies[activeTech].color)} rounded-lg p-8 mb-6 min-h-[200px] flex items-center justify-center`}>
                <div className="text-center">
                  <div className="text-6xl mb-4 animate-pulse">{technologies[activeTech].icon}</div>
                  <h4 className="text-xl font-bold mb-2">Interactive Demo</h4>
                  <p className="text-sm opacity-80 mb-4">
                    Experience {technologies[activeTech].name} in action
                  </p>
                  <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                    Start Demo
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Try Now
                </button>
                <button className="flex-1 border border-white text-white py-3 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-white/80">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
            <div className="text-white/80">Efficiency Gain</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">5</div>
            <div className="text-white/80">Dimensions Accessed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">1000+</div>
            <div className="text-white/80">Active Users</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2037;