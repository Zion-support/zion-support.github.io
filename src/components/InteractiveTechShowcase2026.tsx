import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [demoData, setDemoData] = useState({
    aiProcessing: 0,
    quantumQubits: 0,
    neuralSignals: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setDemoData({
        aiProcessing: Math.floor(Math.random() * 100) + 80,
        quantumQubits: Math.floor(Math.random() * 1000) + 500,
        neuralSignals: Math.floor(Math.random() * 100) + 90
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const demos = [
    {
      id: 'ai-demo',
      title: 'AI Innovation Demo',
      description: 'Experience conscious AI systems in real-time',
      features: ['Real-time processing', 'Emotional recognition', 'Autonomous decisions'],
      data: demoData.aiProcessing,
      unit: '%',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-900/20 to-pink-900/20'
    },
    {
      id: 'quantum-demo',
      title: 'Quantum Computing Demo',
      description: 'Witness exponential computational power',
      features: ['Quantum optimization', 'Exponential speedup', 'Complex simulation'],
      data: demoData.quantumQubits,
      unit: ' qubits',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-900/20 to-blue-900/20'
    },
    {
      id: 'neural-demo',
      title: 'Neural Interface Demo',
      description: 'Direct brain-computer communication',
      features: ['Thought control', 'Real-time feedback', 'Neural enhancement'],
      data: demoData.neuralSignals,
      unit: '%',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'from-emerald-900/20 to-teal-900/20'
    }
  ];

  const technologies = [
    {
      name: 'Conscious AI',
      icon: '🧠',
      description: 'Self-aware artificial intelligence with emotional intelligence',
      status: 'Production Ready',
      performance: '95% accuracy'
    },
    {
      name: 'Quantum Optimization',
      icon: '⚡',
      description: 'Exponential speedup for complex optimization problems',
      status: 'Beta Testing',
      performance: '1000x faster'
    },
    {
      name: 'Neural Interface',
      icon: '🧬',
      description: 'Direct brain-computer interface technology',
      status: 'Clinical Trials',
      performance: '99% precision'
    },
    {
      name: 'Edge AI',
      icon: '📱',
      description: 'On-device AI processing for real-time applications',
      status: 'Production Ready',
      performance: 'Sub-millisecond latency'
    },
    {
      name: 'Quantum ML',
      icon: '🔬',
      description: 'Machine learning enhanced by quantum computing',
      status: 'Research Phase',
      performance: 'Exponential improvement'
    },
    {
      name: 'Neural Enhancement',
      icon: '🚀',
      description: 'Cognitive enhancement through neural stimulation',
      status: 'FDA Approved',
      performance: '30% improvement'
    }
  ];

  const handleDemoChange = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveDemo(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE TECHNOLOGY SHOWCASE 2026
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Experience the Future of Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interact with our most advanced technologies through live demonstrations and real-time data visualization
          </p>
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-12">
          <div className="p-8">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Live Technology Demonstrations
            </h3>
            
            {/* Demo Navigation */}
            <div className="flex justify-center space-x-4 mb-8">
              {demos.map((demo, index) => (
                <button
                  key={demo.id}
                  onClick={() => handleDemoChange(index)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeDemo === index
                      ? `bg-gradient-to-r ${demo.color} text-white shadow-lg`
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {demo.title}
                </button>
              ))}
            </div>

            {/* Demo Content */}
            <div className="relative">
              <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                <div className={`bg-gradient-to-br ${demos[activeDemo].bgColor} backdrop-blur-sm rounded-xl p-12 border border-white/20`}>
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-white mb-4">
                      {demos[activeDemo].title}
                    </h4>
                    <p className="text-xl text-white/90 mb-8">
                      {demos[activeDemo].description}
                    </p>
                    
                    {/* Live Data Display */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
                      <div className="text-6xl font-bold text-white mb-2">
                        {demos[activeDemo].data}{demos[activeDemo].unit}
                      </div>
                      <div className="text-white/80 text-lg">
                        Live Performance Data
                      </div>
                    </div>

                    {/* Features */}
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                      {demos[activeDemo].features.map((feature, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                          <div className="text-white/90 font-semibold">{feature}</div>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-center space-x-4">
                      <button className={`bg-gradient-to-r ${demos[activeDemo].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                        Try Interactive Demo
                      </button>
                      <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Available Technologies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <div className="text-4xl mb-4">{tech.icon}</div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900">{tech.name}</h4>
                  <p className="text-gray-600 mb-4">{tech.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Status:</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        tech.status === 'Production Ready' ? 'bg-green-100 text-green-700' :
                        tech.status === 'Beta Testing' ? 'bg-yellow-100 text-yellow-700' :
                        tech.status === 'Clinical Trials' ? 'bg-blue-100 text-blue-700' :
                        tech.status === 'FDA Approved' ? 'bg-purple-100 text-purple-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {tech.status}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Performance:</span>
                      <span className="text-sm font-semibold text-gray-900">{tech.performance}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Schedule a personalized demonstration of our revolutionary technologies and discover how they can transform your business.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/pages/AIInnovationHub2026"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore AI Innovation
            </Link>
            <Link
              to="/pages/QuantumComputingSolutions2026"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Discover Quantum Power
            </Link>
            <Link
              to="/pages/NeuralInterfaceRevolution2026"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Experience Neural Interface
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;