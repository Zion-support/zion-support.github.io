import React, { useState, useEffect } from 'react';

const InteractiveContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const contentTabs = [
    {
      id: 'nextgen',
      title: 'Next-Gen Revolution',
      icon: '🚀',
      description: 'Experience the most revolutionary technological advances',
      link: '/pages/NextGenTechRevolution2026',
      gradient: 'from-purple-600 to-pink-600',
      features: ['Conscious AI Systems', 'Quantum Consciousness', 'Interdimensional Computing']
    },
    {
      id: 'consciousness',
      title: 'AI Consciousness',
      icon: '🧠',
      description: 'Discover self-aware AI systems that think independently',
      link: '/pages/AdvancedAIConsciousness2026',
      gradient: 'from-indigo-600 to-purple-600',
      features: ['Self-Awareness', 'Emotional Intelligence', 'Creative Problem Solving']
    },
    {
      id: 'quantum',
      title: 'Quantum Reality',
      icon: '⚡',
      description: 'Step into a world where quantum mechanics meets reality',
      link: '/pages/QuantumReality2026',
      gradient: 'from-cyan-600 to-blue-600',
      features: ['Quantum Computing', 'Reality Manipulation', 'Dimensional Travel']
    }
  ];

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-16 mb-12 rounded-2xl">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 INTERACTIVE SHOWCASE • JANUARY 2026
          </div>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Experience
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Explore our most advanced technology content with interactive features and immersive experiences
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 flex space-x-2">
            {contentTabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 font-semibold ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Display */}
        <div className="relative">
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className={`bg-gradient-to-br ${contentTabs[activeTab].gradient} rounded-2xl p-12`}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side - Content Info */}
                <div>
                  <div className="text-6xl mb-4">{contentTabs[activeTab].icon}</div>
                  <h3 className="text-4xl font-bold mb-4">{contentTabs[activeTab].title}</h3>
                  <p className="text-xl opacity-90 mb-6">{contentTabs[activeTab].description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {contentTabs[activeTab].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={contentTabs[activeTab].link}
                      className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
                    >
                      Explore {contentTabs[activeTab].title} →
                    </a>
                    <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                      Watch Demo
                    </button>
                  </div>
                </div>

                {/* Right Side - Interactive Demo */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <h4 className="text-2xl font-bold mb-4 text-center">Interactive Demo</h4>
                  <div className="space-y-4">
                    <div className="bg-white/20 rounded-lg p-4">
                      <h5 className="font-semibold mb-2">Live Technology Preview</h5>
                      <p className="text-sm opacity-90">
                        Experience a real-time demonstration of {contentTabs[activeTab].title.toLowerCase()} technology
                      </p>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <h5 className="font-semibold mb-2">Interactive Features</h5>
                      <p className="text-sm opacity-90">
                        Click, explore, and interact with cutting-edge technology interfaces
                      </p>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <h5 className="font-semibold mb-2">Immersive Experience</h5>
                      <p className="text-sm opacity-90">
                        Step into a fully immersive environment showcasing the future
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-lg opacity-90">Revolutionary Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">99.9%</div>
            <div className="text-lg opacity-90">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
            <div className="text-lg opacity-90">Possibilities</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators who are already exploring the revolutionary technologies of 2026
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/pages/NextGenTechRevolution2026"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Start Your Journey
            </a>
            <a
              href="/pages/AdvancedAIConsciousness2026"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
            >
              Explore All Content
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase2026;