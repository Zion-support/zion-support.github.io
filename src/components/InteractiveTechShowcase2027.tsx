import React, { useState } from 'react';

const InteractiveTechShowcase2027: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const techCategories = [
    {
      id: 0,
      title: 'AI Revolution 2027',
      description: 'Conscious AI systems with quantum-enhanced processing',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 1,
      title: 'Quantum Computing 2027',
      description: '1000+ qubit quantum computers achieving true supremacy',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600'
    },
    {
      id: 2,
      title: 'Neural Interface 2027',
      description: 'Direct brain-computer communication and thought control',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Interactive Tech Showcase 2027
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the revolutionary technologies that will define the future
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
            {techCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-white/20 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Tab Content */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30">
            <h2 className="text-3xl font-bold mb-4">{techCategories[activeTab].title}</h2>
            <p className="text-xl text-gray-300 mb-6">{techCategories[activeTab].description}</p>
            <div className={`inline-block text-6xl mb-4 bg-gradient-to-r ${techCategories[activeTab].color} bg-clip-text text-transparent`}>
              {techCategories[activeTab].icon}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2027;