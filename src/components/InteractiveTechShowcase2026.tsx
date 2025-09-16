import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const technologies = [
    {
      id: 'ai-innovation',
      title: 'AI Innovation Hub 2026',
      description: 'Conscious AI systems that understand context, emotion, and intent',
      features: ['Self-aware decision making', 'Emotional intelligence processing', 'Contextual understanding', 'Autonomous learning'],
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      link: '/pages/AIInnovationHub2026'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Revolution',
      description: 'Quantum computing that solves impossible problems with exponential speed',
      features: ['Quantum supremacy', 'Quantum cryptography', 'Molecular simulation', 'Quantum machine learning'],
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      link: '/pages/QuantumComputingRevolution2026'
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Revolution',
      description: 'Direct brain-computer interfaces enabling thought-controlled computing',
      features: ['Non-invasive BCI', 'Thought control', 'Neural feedback', 'Cognitive enhancement'],
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      link: '/pages/NeuralInterfaceRevolution2026'
    }
  ];

  return (
    <div className={`py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • 2026
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Interactive Technology Showcase 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our revolutionary technologies with interactive demos and real-time demonstrations
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <span className="mr-2">{tech.icon}</span>
              {tech.title}
            </button>
          ))}
        </div>

        {/* Active Technology Display */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className={`bg-gradient-to-r ${technologies[activeTab].color} text-white p-8`}>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-6xl mb-4">{technologies[activeTab].icon}</div>
                <h3 className="text-3xl font-bold mb-4">{technologies[activeTab].title}</h3>
                <p className="text-xl opacity-90 max-w-2xl">
                  {technologies[activeTab].description}
                </p>
              </div>
              <div className="hidden md:block">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="text-6xl animate-spin">⚡</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Features List */}
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h4>
                <ul className="space-y-4">
                  {technologies[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${technologies[activeTab].color} rounded-full`}></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interactive Demo */}
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Interactive Demo</h4>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">🎮</div>
                    <p className="text-gray-600 mb-4">Experience this technology in action</p>
                  </div>
                  
                  {/* Demo Controls */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Processing Power</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className={`bg-gradient-to-r ${technologies[activeTab].color} h-2 rounded-full transition-all duration-1000`} 
                             style={{ width: `${85 + Math.random() * 15}%` }}></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Accuracy Rate</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className={`bg-gradient-to-r ${technologies[activeTab].color} h-2 rounded-full transition-all duration-1000`} 
                             style={{ width: `${95 + Math.random() * 5}%` }}></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Response Time</span>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className={`bg-gradient-to-r ${technologies[activeTab].color} h-2 rounded-full transition-all duration-1000`} 
                             style={{ width: `${90 + Math.random() * 10}%` }}></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <a
                      href={technologies[activeTab].link}
                      className={`inline-block bg-gradient-to-r ${technologies[activeTab].color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                    >
                      Explore Full Technology →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">1000+</div>
            <div className="text-lg text-gray-700">Active Technologies</div>
            <div className="text-sm text-gray-500">In Development</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-600 mb-2">99.9%</div>
            <div className="text-lg text-gray-700">Success Rate</div>
            <div className="text-sm text-gray-500">Implementation</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-600 mb-2">50+</div>
            <div className="text-lg text-gray-700">Industry Partners</div>
            <div className="text-sm text-gray-500">Worldwide</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-600 mb-2">24/7</div>
            <div className="text-lg text-gray-700">Support</div>
            <div className="text-sm text-gray-500">Available</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators already using our revolutionary technologies to transform their businesses
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg">
              Schedule Demo
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-lg">
              Download Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2026;