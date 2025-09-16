import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const technologies = [
    {
      id: 'ai-revolution',
      title: 'AI Revolution 2025',
      description: 'Experience the next generation of artificial intelligence that thinks, learns, and adapts in real-time.',
      features: [
        'Autonomous Decision Making',
        'Real-time Learning',
        'Natural Language Processing 2.0',
        'Predictive Analytics'
      ],
      stats: { accuracy: '99.7%', speed: '10x Faster', efficiency: '300%' },
      gradient: 'from-purple-600 to-pink-600',
      icon: '🧠'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      description: 'Unlock infinite computational power with quantum processors that solve impossible problems.',
      features: [
        'Exponential Speed Increase',
        'Quantum Cryptography',
        'Molecular Simulation',
        'Optimization Algorithms'
      ],
      stats: { qubits: '1000+', speed: '1Mx Faster', applications: '50+' },
      gradient: 'from-cyan-600 to-blue-600',
      icon: '⚛️'
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interfaces',
      description: 'Connect your mind directly to technology with advanced brain-computer interfaces.',
      features: [
        'Non-invasive BCI',
        'Thought Control',
        'Neural Feedback',
        'Memory Enhancement'
      ],
      stats: { latency: '<1ms', accuracy: '95%', users: '10K+' },
      gradient: 'from-emerald-600 to-teal-600',
      icon: '🧬'
    },
    {
      id: 'blockchain-3',
      title: 'Blockchain 3.0',
      description: 'Next-generation blockchain with quantum resistance and infinite scalability.',
      features: [
        'Quantum Resistance',
        'Infinite Scalability',
        'Zero Energy Consumption',
        'Smart Contracts 2.0'
      ],
      stats: { tps: '1M+', energy: '0%', security: '100%' },
      gradient: 'from-orange-600 to-red-600',
      icon: '🔗'
    }
  ];

  const handleTabChange = (index: number) => {
    if (index !== activeTab) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTab(index);
        setIsAnimating(false);
      }, 150);
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 text-white">
            🚀 INTERACTIVE TECHNOLOGY SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Experience the Future of Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interact with cutting-edge technologies that are reshaping our world. 
            Click through different technologies to explore their capabilities and potential.
          </p>
        </div>

        {/* Technology Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => handleTabChange(index)}
              className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${tech.gradient} text-white shadow-lg scale-105`
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              <span className="text-2xl mr-3">{tech.icon}</span>
              {tech.title}
            </button>
          ))}
        </div>

        {/* Technology Display */}
        <div className="relative">
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className={`h-96 bg-gradient-to-br ${technologies[activeTab].gradient} p-12 text-white`}>
                <div className="flex items-center justify-between h-full">
                  <div className="flex-1">
                    <div className="text-8xl mb-6">{technologies[activeTab].icon}</div>
                    <h3 className="text-4xl font-bold mb-4">{technologies[activeTab].title}</h3>
                    <p className="text-xl mb-8 opacity-90">{technologies[activeTab].description}</p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      {Object.entries(technologies[activeTab].stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-3xl font-bold">{value}</div>
                          <div className="text-sm opacity-75 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>

                    <a
                      href={`/pages/${technologies[activeTab].title.replace(/\s+/g, '')}2025`}
                      className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg hover:scale-105"
                    >
                      Explore Technology →
                    </a>
                  </div>
                  
                  <div className="flex-1 pl-12">
                    <h4 className="text-2xl font-bold mb-6">Key Features</h4>
                    <ul className="space-y-4">
                      {technologies[activeTab].features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-white rounded-full mr-4"></div>
                          <span className="text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Try Our Interactive Demo</h3>
            <p className="text-xl opacity-90">Experience the power of our technology firsthand</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/30 transition-all duration-300 cursor-pointer">
              <div className="text-4xl mb-4">🎮</div>
              <h4 className="text-xl font-bold mb-2">Interactive Demo</h4>
              <p className="opacity-80">Try our technology in a controlled environment</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/30 transition-all duration-300 cursor-pointer">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-xl font-bold mb-2">Live Analytics</h4>
              <p className="opacity-80">See real-time performance metrics</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/30 transition-all duration-300 cursor-pointer">
              <div className="text-4xl mb-4">🔧</div>
              <h4 className="text-xl font-bold mb-2">Customize</h4>
              <p className="opacity-80">Configure settings to your needs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;