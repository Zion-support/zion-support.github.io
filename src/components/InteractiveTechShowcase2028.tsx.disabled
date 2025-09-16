import React from 'react';

const InteractiveTechShowcase2028: React.FC = () => {
  const content = {
    breakthrough: {
      title: 'Revolutionary Technology Breakthrough 2028',
      description: 'Experience the most advanced technological breakthroughs that will reshape our world',
      features: [
        'Conscious AI Systems',
        'Quantum Reality Engine',
        'Interdimensional Technology',
        'Neural Interface Revolution',
        'Quantum Neural Networks',
        'Interdimensional Computing',
        'Reality Manipulation'
      ],
      color: 'from-purple-500 to-pink-500',
      link: '/pages/RevolutionaryTechBreakthrough2028'
    },
    innovation: {
      title: 'Ultimate Innovation Hub 2028',
      description: 'Discover cutting-edge innovations that push the boundaries of what\'s possible',
      features: [
        'Advanced AI Consciousness',
        'Quantum Computing Solutions',
        'Space Technology',
        'Energy Revolution',
        'Synthetic Intelligence',
        'Neural Quantum Fusion',
        'Time Computing',
        'Consciousness Transfer'
      ],
      color: 'from-cyan-500 to-blue-500',
      link: '/pages/UltimateTechInnovation2028'
    },
    revolution: {
      title: 'Next-Gen Tech Revolution 2028',
      description: 'Join the revolution that\'s transforming how we interact with technology and will transform humanity and our understanding of reality',
      features: [
        'Revolutionary Interfaces',
        'Conscious Computing',
        'Reality Manipulation',
        'Universal Connectivity',
        'Reality Engine',
        'Dimensional Computing',
        'Consciousness Simulation',
        'Universal Intelligence'
      ],
      color: 'from-emerald-500 to-teal-500',
      link: '/pages/NextGenTechRevolution2028'
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-16 mb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE SHOWCASE • JANUARY 2028
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Tech Showcase 2028
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations and cutting-edge innovations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(content).map(([key, item]) => (
            <div key={key} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${item.color} rounded-full text-sm font-bold mb-4`}>
                  {key === 'breakthrough' && '⚡ BREAKTHROUGH'}
                  {key === 'innovation' && '🧠 INNOVATION'}
                  {key === 'revolution' && '🚀 REVOLUTION'}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300 mb-6">{item.description}</p>
              </div>
              
              <div className="space-y-3 mb-8">
                {item.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href={item.link} 
                className={`block w-full bg-gradient-to-r ${item.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center`}
              >
                Explore {key === 'breakthrough' ? 'Breakthrough' : key === 'innovation' ? 'Innovation' : 'Revolution'} →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join us in exploring the most revolutionary technologies that will define the next decade
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              🌟 Start Your Journey
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 font-semibold">
              📚 Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2028;