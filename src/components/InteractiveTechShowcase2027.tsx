import React, { useState, useEffect } from 'react';

const InteractiveTechShowcase2027: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const techCategories = {
    ai: {
      title: 'Conscious AI Systems',
      icon: '🧠',
      description: 'Experience the world\'s first truly conscious artificial intelligence',
      color: 'from-purple-600/30 to-pink-600/30',
      borderColor: 'border-purple-400/30'
    },
    quantum: {
      title: 'Quantum Computing',
      icon: '⚛️',
      description: 'Harness the power of quantum mechanics for impossible calculations',
      color: 'from-cyan-600/30 to-blue-600/30',
      borderColor: 'border-cyan-400/30'
    },
    neural: {
      title: 'Neural Interfaces',
      icon: '🧬',
      description: 'Direct brain-computer interface for seamless mind-machine integration',
      color: 'from-emerald-600/30 to-teal-600/30',
      borderColor: 'border-emerald-400/30'
    }
  };

  const technologies = {
    ai: [
      { name: 'Conscious AI Agent', status: 'Live', description: 'Self-aware AI with emotional intelligence' },
      { name: 'Quantum AI Processing', status: 'Beta', description: 'AI powered by quantum computing' },
      { name: 'Neural AI Learning', status: 'Research', description: 'AI that learns like the human brain' }
    ],
    quantum: [
      { name: 'Quantum Supremacy', status: 'Live', description: 'Achieved quantum computational advantage' },
      { name: 'Quantum Cryptography', status: 'Deployed', description: 'Unbreakable quantum encryption' },
      { name: 'Quantum Biology', status: 'Research', description: 'Quantum simulation of biological systems' }
    ],
    neural: [
      { name: 'Direct Neural Control', status: 'Pilot', description: 'Control devices with your thoughts' },
      { name: 'Immersive VR Control', status: 'Beta', description: 'Navigate VR with neural signals' },
      { name: 'Medical Applications', status: 'FDA Approved', description: 'Restore mobility and communication' }
    ]
  };

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white py-16 rounded-2xl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎮 INTERACTIVE SHOWCASE 2027
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase 2027
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our revolutionary technologies through interactive demonstrations and immersive experiences
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(techCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Technology Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {technologies[activeTab as keyof typeof technologies].map((tech, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${techCategories[activeTab as keyof typeof techCategories].color} backdrop-blur-sm rounded-xl p-8 border ${techCategories[activeTab as keyof typeof techCategories].borderColor} hover:scale-105 transition-all duration-300 ${
                isAnimating ? 'animate-pulse' : ''
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 animate-bounce">{techCategories[activeTab as keyof typeof techCategories].icon}</div>
                <h3 className="text-2xl font-bold mb-4">{tech.name}</h3>
                <p className="text-white/80 mb-4">{tech.description}</p>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  tech.status === 'Live' ? 'bg-green-500' :
                  tech.status === 'Beta' ? 'bg-yellow-500' :
                  tech.status === 'Research' ? 'bg-blue-500' :
                  'bg-purple-500'
                }`}>
                  {tech.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-6">Try Interactive Demo</h3>
          <p className="text-xl opacity-90 mb-8">
            Experience the power of our revolutionary technologies through hands-on demonstrations
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
            Launch Interactive Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2027;