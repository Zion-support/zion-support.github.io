import React from 'react';

const UltimateTechShowcase2027: React.FC = () => {
  const techFeatures = [
    {
      icon: '🤖',
      title: 'Advanced AI Systems',
      description: 'Next-generation artificial intelligence with unprecedented capabilities',
      color: 'from-purple-600 to-blue-600'
    },
    {
      icon: '⚛️',
      title: 'Quantum Computing',
      description: 'Revolutionary quantum computing solutions for complex problems',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: '🧠',
      title: 'Neural Interfaces',
      description: 'Direct brain-computer interfaces for seamless interaction',
      color: 'from-cyan-600 to-green-600'
    },
    {
      icon: '🚀',
      title: 'Space Technology',
      description: 'Advanced space exploration and interplanetary travel',
      color: 'from-green-600 to-purple-600'
    },
    {
      icon: '🧬',
      title: 'Biotechnology',
      description: 'Revolutionary biotechnology for human enhancement',
      color: 'from-indigo-600 to-purple-600'
    },
    {
      icon: '🔮',
      title: 'Metaverse Tech',
      description: 'Advanced metaverse platforms with virtual worlds',
      color: 'from-purple-600 to-pink-600'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ULTIMATE TECH SHOWCASE • 2027
          </div>
          <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ultimate Tech Showcase 2027
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technology showcase of 2027 featuring cutting-edge innovations, 
            revolutionary breakthroughs, and next-generation solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techFeatures.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-6 text-center">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{feature.title}</h3>
              <p className="text-gray-300 mb-6 text-center">{feature.description}</p>
              <div className="text-center">
                <a href="#" className={`inline-block bg-gradient-to-r ${feature.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Explore Technology →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Technology Performance Metrics</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">AI Processing Speed</span>
                  <span className="text-green-400 font-bold">1000x Faster</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Quantum Qubits</span>
                  <span className="text-blue-400 font-bold">1024 Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Neural Connections</span>
                  <span className="text-cyan-400 font-bold">1M+</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Space Missions</span>
                  <span className="text-green-400 font-bold">50+ Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Biotech Breakthroughs</span>
                  <span className="text-indigo-400 font-bold">25 This Year</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Metaverse Users</span>
                  <span className="text-purple-400 font-bold">1B+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2027;