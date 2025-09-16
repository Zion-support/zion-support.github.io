import React, { useState } from 'react';

const InteractiveTechShowcase2029: React.FC = () => {
  const [activeTech, setActiveTech] = useState('ai');

  const technologies = {
    ai: {
      title: 'Consciousness AI',
      description: 'Artificial intelligence that achieves true consciousness and self-awareness',
      features: ['Self-aware systems', 'Emotional intelligence', 'Creative problem solving', 'Ethical decision making'],
      icon: '🧠',
      color: 'from-purple-600 to-pink-600'
    },
    quantum: {
      title: 'Quantum Supremacy',
      description: 'Quantum computers solving problems impossible for classical computers',
      features: ['1000+ qubit systems', 'Quantum machine learning', 'Drug discovery', 'Climate modeling'],
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600'
    },
    neural: {
      title: 'Neural Interfaces',
      description: 'Direct brain-computer interfaces enabling thought-controlled technology',
      features: ['Non-invasive BCI', 'Memory enhancement', 'Telepathic communication', 'Augmented cognition'],
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600'
    },
    space: {
      title: 'Space Colonization',
      description: 'Permanent human settlements on Mars and beyond',
      features: ['Mars base construction', 'Terraforming technology', 'Space manufacturing', 'Interplanetary travel'],
      icon: '🚀',
      color: 'from-orange-600 to-red-600'
    },
    metaverse: {
      title: 'Metaverse Reality',
      description: 'Fully immersive virtual worlds indistinguishable from reality',
      features: ['Photorealistic avatars', 'Haptic feedback', 'Virtual economies', 'Social interaction'],
      icon: '🌐',
      color: 'from-violet-600 to-purple-600'
    },
    biotech: {
      title: 'Biotech Revolution',
      description: 'Genetic engineering and biotechnology transforming human health',
      features: ['Gene therapy cures', 'Age reversal technology', 'Synthetic biology', 'Personalized medicine'],
      icon: '🔬',
      color: 'from-pink-600 to-rose-600'
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-8 text-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">🚀 Interactive Technology Showcase 2029</h2>
        <p className="text-xl opacity-90">Explore the future of technology with interactive demonstrations</p>
      </div>

      {/* Technology Selector */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {Object.entries(technologies).map(([key, tech]) => (
          <button
            key={key}
            onClick={() => setActiveTech(key)}
            className={`p-4 rounded-lg transition-all duration-300 ${
              activeTech === key
                ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                : 'bg-white/10 hover:bg-white/20 text-gray-300'
            }`}
          >
            <div className="text-3xl mb-2">{tech.icon}</div>
            <div className="text-sm font-semibold">{tech.title}</div>
          </button>
        ))}
      </div>

      {/* Active Technology Display */}
      <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-6xl">{technologies[activeTech as keyof typeof technologies].icon}</div>
              <div>
                <h3 className="text-3xl font-bold">{technologies[activeTech as keyof typeof technologies].title}</h3>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${technologies[activeTech as keyof typeof technologies].color} text-white`}>
                  Available 2029
                </div>
              </div>
            </div>
            <p className="text-lg opacity-90 mb-6">
              {technologies[activeTech as keyof typeof technologies].description}
            </p>
            <ul className="space-y-2">
              {technologies[activeTech as keyof typeof technologies].features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 border border-white/20">
            <h4 className="text-xl font-bold mb-4">Interactive Demo</h4>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4">
                <div className="text-sm font-semibold mb-2">Current Status</div>
                <div className="text-2xl font-bold text-green-400">Active Development</div>
              </div>
              <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-lg p-4">
                <div className="text-sm font-semibold mb-2">Progress</div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
                <div className="text-sm text-gray-300 mt-1">75% Complete</div>
              </div>
              <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-lg p-4">
                <div className="text-sm font-semibold mb-2">Expected Launch</div>
                <div className="text-lg font-bold">Q4 2029</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
            Request Demo
          </a>
          <a href="/pages/UltimateTechBreakthrough2029" className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400/10 transition-colors">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2029;