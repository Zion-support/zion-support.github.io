import React, { useState } from 'react';

const InteractiveTechShowcase2028: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const techCategories = [
    {
      title: "Neural Interfaces",
      icon: "🧠",
      description: "Direct brain-computer interfaces for thought-controlled computing",
      features: ["Mind-controlled devices", "Memory enhancement", "Telepathic communication", "Consciousness transfer"]
    },
    {
      title: "Quantum Reality",
      icon: "⚛️",
      description: "Quantum-powered reality simulation with infinite possibilities",
      features: ["Virtual worlds", "Quantum computing", "Reality manipulation", "Parallel dimensions"]
    },
    {
      title: "Space Technology",
      icon: "🌌",
      description: "Advanced space travel and colonization technologies",
      features: ["Warp drive", "Space habitats", "Terraforming AI", "Intergalactic travel"]
    },
    {
      title: "Molecular Assembly",
      icon: "🔬",
      description: "Nanotechnology for molecular-level matter manipulation",
      features: ["Matter replication", "Molecular manufacturing", "Resource creation", "Object assembly"]
    },
    {
      title: "Energy Revolution",
      icon: "⚡",
      description: "Unlimited clean energy from zero-point and fusion sources",
      features: ["Fusion power", "Wireless energy", "Zero-point energy", "Clean power"]
    },
    {
      title: "Genetic Enhancement",
      icon: "🧬",
      description: "Advanced biotechnology for human capability enhancement",
      features: ["CRISPR 3.0", "Capability enhancement", "Lifespan extension", "Disease elimination"]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white mb-4">
          Interactive Tech Showcase 2028-2030
        </h2>
        <p className="text-xl text-gray-300">
          Explore the revolutionary technologies that will transform our world
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {techCategories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
              activeTab === index
                ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-black'
                : 'bg-gray-700 text-white hover:bg-gray-600'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.title}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="text-6xl mb-4">{techCategories[activeTab].icon}</div>
            <h3 className="text-3xl font-bold text-white mb-4">
              {techCategories[activeTab].title}
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              {techCategories[activeTab].description}
            </p>
            <div className="space-y-3">
              {techCategories[activeTab].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-8xl animate-pulse">
              {techCategories[activeTab].icon}
            </div>
          </div>
        </div>
      </div>

      {/* Technology Timeline */}
      <div className="mt-8 bg-black/30 backdrop-blur-sm rounded-2xl p-6">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          Technology Evolution Timeline
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-2xl font-bold text-black mx-auto mb-4">
              2028
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Neural Revolution</h4>
            <p className="text-gray-300 text-sm">Brain-computer interfaces become mainstream</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold text-black mx-auto mb-4">
              2029
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Singularity</h4>
            <p className="text-gray-300 text-sm">AI achieves superhuman intelligence</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-2xl font-bold text-black mx-auto mb-4">
              2030
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Transcendence</h4>
            <p className="text-gray-300 text-sm">Humanity transcends physical limitations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2028;