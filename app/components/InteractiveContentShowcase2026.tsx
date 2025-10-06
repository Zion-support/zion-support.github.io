import React, { useState } from 'react';

const InteractiveContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, name: 'AI Innovations', icon: '🤖' },
    { id: 1, name: 'Enterprise Solutions', icon: '🏢' },
    { id: 2, name: 'Future Trends', icon: '🚀' },
  ];

  const content = [
    {
      title: 'Autonomous AI Systems',
      description: 'Self-managing AI that adapts and evolves without human intervention.',
      image: '/api/placeholder/400/300',
      category: 'AI Innovation',
    },
    {
      title: 'Quantum-Enhanced Computing',
      description: 'Next-generation computing power for complex problem solving.',
      image: '/api/placeholder/400/300',
      category: 'Technology',
    },
    {
      title: 'Neural Network Optimization',
      description: 'Advanced algorithms that learn and improve continuously.',
      image: '/api/placeholder/400/300',
      category: 'Machine Learning',
    },
  ];

  return (
    <div className="interactive-content-showcase-2026 py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">2026 Content Showcase</h2>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-white text-4xl">📊</span>
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-semibold">{item.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Explore →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Ready to Explore the Future?</h3>
          <p className="text-gray-600 mb-6">
            Discover how our cutting-edge solutions can transform your business.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentShowcase2026;