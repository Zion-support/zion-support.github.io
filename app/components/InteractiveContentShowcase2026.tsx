import React from 'react';

const InteractiveContentShowcase2026: React.FC = () => {
  const technologies = [
    {
      name: 'Quantum Computing',
      description: 'Next-generation quantum algorithms for complex problem solving',
      status: 'In Development',
      progress: 75,
    },
    {
      name: 'Autonomous Systems',
      description: 'Self-managing AI systems for enterprise operations',
      status: 'Available',
      progress: 100,
    },
    {
      name: 'Neural Networks',
      description: 'Advanced deep learning models for pattern recognition',
      status: 'Available',
      progress: 100,
    },
    {
      name: 'Blockchain AI',
      description: 'Decentralized AI solutions with enhanced security',
      status: 'Beta',
      progress: 60,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            2026 Technology Roadmap
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our upcoming technologies and current development progress
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {tech.name}
                </h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  tech.status === 'Available' 
                    ? 'bg-green-100 text-green-800'
                    : tech.status === 'Beta'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {tech.status}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">
                {tech.description}
              </p>
              
              <div className="mb-2">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>{tech.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${tech.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentShowcase2026;