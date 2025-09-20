import React, { useState, useEffect } from 'react';

const AdvancedAISystems2027: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedSystem, setSelectedSystem] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const aiSystems = [
    {
      title: "Autonomous AI Agents",
      description: "Self-managing AI systems that can operate independently and make decisions without human intervention.",
      features: [
        "Self-learning algorithms",
        "Autonomous decision making",
        "Real-time adaptation",
        "Multi-domain expertise"
      ],
      applications: [
        "Customer service automation",
        "Supply chain optimization",
        "Financial trading",
        "Healthcare diagnostics"
      ],
      icon: "🤖",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Multimodal AI Systems",
      description: "AI systems that can process and understand multiple types of data including text, images, audio, and video.",
      features: [
        "Cross-modal understanding",
        "Unified data processing",
        "Contextual awareness",
        "Seamless integration"
      ],
      applications: [
        "Content creation",
        "Media analysis",
        "Interactive experiences",
        "Accessibility solutions"
      ],
      icon: "👁️",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Federated Learning Networks",
      description: "Distributed AI systems that can learn from data across multiple sources while maintaining privacy and security.",
      features: [
        "Privacy-preserving learning",
        "Distributed computation",
        "Secure aggregation",
        "Scalable architecture"
      ],
      applications: [
        "Healthcare research",
        "Financial modeling",
        "Smart city optimization",
        "Personalized recommendations"
      ],
      icon: "🌐",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Quantum-Enhanced AI",
      description: "AI systems that leverage quantum computing to solve complex problems exponentially faster than classical computers.",
      features: [
        "Quantum algorithms",
        "Exponential speedup",
        "Complex optimization",
        "Advanced cryptography"
      ],
      applications: [
        "Drug discovery",
        "Financial modeling",
        "Climate simulation",
        "Cryptographic security"
      ],
      icon: "⚛️",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className={`min-h-screen bg-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-bold mb-6">
            🧠 ADVANCED AI SYSTEMS 2027
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Next-Generation AI Systems
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover the most advanced AI systems that are revolutionizing industries and creating new possibilities for human-AI collaboration.
          </p>
        </div>

        {/* System Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {aiSystems.map((system, index) => (
            <button
              key={index}
              onClick={() => setSelectedSystem(index)}
              className={`p-6 rounded-2xl text-left transition-all duration-300 ${
                selectedSystem === index
                  ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-500 shadow-lg'
                  : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
              }`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${system.color} rounded-xl flex items-center justify-center mb-4`}>
                <span className="text-2xl">{system.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{system.title}</h3>
              <p className="text-sm text-gray-600">{system.description}</p>
            </button>
          ))}
        </div>

        {/* Selected System Details */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-8">
            <div className={`w-24 h-24 bg-gradient-to-r ${aiSystems[selectedSystem].color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
              <span className="text-4xl">{aiSystems[selectedSystem].icon}</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {aiSystems[selectedSystem].title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {aiSystems[selectedSystem].description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
              <div className="space-y-4">
                {aiSystems[selectedSystem].features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Applications</h3>
              <div className="space-y-4">
                {aiSystems[selectedSystem].applications.map((application, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">→</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{application}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white rounded-3xl shadow-lg p-12 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Performance Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">95%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">10x</div>
              <div className="text-gray-600">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
              <div className="text-gray-600">Availability</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Implement Advanced AI?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Transform your business with cutting-edge AI systems that deliver unprecedented performance and capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAISystems2027;