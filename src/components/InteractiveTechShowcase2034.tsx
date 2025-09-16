import React, { useState } from 'react';

const InteractiveTechShowcase2034: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');


  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-3xl p-12 text-white mb-12">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Interactive Tech Showcase 2034
        </h2>
        <p className="text-2xl opacity-90 max-w-4xl mx-auto">
          Explore our revolutionary 2034 technologies with interactive demonstrations and real-time capabilities
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-8">
        {Object.entries(technologies).map(([key, tech]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`p-4 rounded-xl transition-all duration-300 ${
              activeTab === key
                ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20'
            }`}
          >
            <div className="text-3xl mb-2">{tech.icon}</div>
            <div className="font-semibold text-sm">{tech.title}</div>
          </button>
        ))}
      </div>

      <div className="bg-gradient-to-r from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">{technologies[activeTab as keyof typeof technologies].icon}</span>
              <h3 className="text-3xl font-bold">{technologies[activeTab as keyof typeof technologies].title}</h3>
            </div>
            <p className="text-xl text-gray-300 mb-6">
              {technologies[activeTab as keyof typeof technologies].description}
            </p>
            <ul className="space-y-3">
              {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
              </div>
            </div>
            <a 
              href={`/pages/${activeTab === 'ai' ? 'RevolutionaryAIBreakthrough2034' : 
                        activeTab === 'space' ? 'NextGenSpaceTech2034' :
                        activeTab === 'quantum' ? 'QuantumConsciousness2034' :
                        'UltimateTechRevolution2034'}`}
              className={`inline-block bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
            >
              Experience {technologies[activeTab as keyof typeof technologies].title} →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2034;