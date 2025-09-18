import React, { useState } from 'react';

const InteractiveTechShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const technologies = [
    {
      title: "Artificial Intelligence",
      description: "Advanced AI solutions for business automation",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision"],
      icon: "🤖"
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum computing technology",
      features: ["Quantum Algorithms", "Quantum Cryptography", "Quantum Simulation"],
      icon: "⚛️"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions",
      features: ["Threat Detection", "Data Protection", "Network Security"],
      icon: "🔒"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Interactive Tech Showcase
      </h2>
      
      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 rounded-lg p-1">
          {technologies.map((tech, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-md transition-colors ${
                activeTab === index
                  ? 'bg-white text-purple-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tech.icon} {tech.title}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="text-center">
        <div className="text-6xl mb-4">{technologies[activeTab].icon}</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {technologies[activeTab].title}
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          {technologies[activeTab].description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {technologies[activeTab].features.map((feature, index) => (
            <div key={index} className="bg-purple-50 rounded-lg p-4">
              <div className="text-purple-600 font-semibold">{feature}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase;