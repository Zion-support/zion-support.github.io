import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveTechShowcase: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const technologies = [
    {
      id: 0,
      name: "AI Innovation Hub 2026",
      description: "Revolutionary AI technologies with consciousness and emotional intelligence",
      icon: "🧠",
      ]
    }
  };

      color: "from-purple-600 to-pink-600",
      features: ["Consciousness AI", "Quantum Neural Networks", "Predictive Intelligence", "Autonomous Agents"],
      demo: "Try AI Consciousness Demo",
      link: "/pages/AIInnovationHub2026"
    },
    {
      id: 1,
      name: "Quantum Computing Revolution",
      description: "Exponential computing power solving impossible problems with quantum supremacy",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      features: ["Quantum Supremacy", "Molecular Simulation", "Unbreakable Encryption", "Climate Modeling"],
      demo: "Experience Quantum Power",
      link: "/pages/QuantumComputingRevolution2026"
    },
    {
      id: 2,
      name: "Neural Interface Technology",
      description: "Direct brain-computer communication enabling thought control and memory enhancement",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: ["Thought Control", "Memory Enhancement", "Neural Networking", "Medical Applications"],
      demo: "Test Neural Interface",
      link: "/pages/NeuralInterfaceRevolution2026"
    },
    {
      id: 3,
      name: "Synthetic Intelligence",
      description: "AI systems with synthetic consciousness and autonomous creative capabilities",
      icon: "🤖",
      color: "from-orange-600 to-red-600",
      features: ["Synthetic Consciousness", "Creative AI", "Autonomous Systems", "Human-AI Collaboration"],
      demo: "Meet Synthetic AI",
      link: "/pages/SyntheticIntelligence2026"
    }
  ];

  const handleTechClick = (techId: number) => {
    setActiveTech(techId);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Interactive Technology Showcase
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Experience the future of technology with our interactive demonstrations. 
            Click on any technology to explore its capabilities and see it in action.
          </p>
        </motion.div>

        {/* Main Showcase Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Technology Display */}
          <motion.div
            key={activeTech}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`bg-gradient-to-br ${technologies[activeTech].color} p-12 rounded-2xl relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
            <div className="relative z-10">
              <div className="text-8xl mb-6 text-center">{technologies[activeTech].icon}</div>
              <h3 className="text-4xl font-bold mb-6 text-center">{technologies[activeTech].name}</h3>
              <p className="text-xl opacity-90 mb-8 text-center">{technologies[activeTech].description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {technologies[activeTech].features.map((feature, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                    <span className="text-sm font-semibold">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <a
                  href={technologies[activeTech].link}
                  className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-block mr-4"
                >
                  {technologies[activeTech].demo} →
                </a>
                <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>

          {/* Technology Selector */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Choose a Technology to Explore</h3>
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeTech === tech.id
                    ? `bg-gradient-to-r ${tech.color} scale-105`
                    : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
                }`}
                onClick={() => handleTechClick(tech.id)}
                onMouseEnter={() => setHoveredCard(tech.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{tech.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{tech.name}</h4>
                    <p className="text-sm opacity-90">{tech.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Features */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-center mb-8">Interactive Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎮</div>
              <h4 className="text-xl font-bold mb-2">Live Demos</h4>
              <p className="text-sm opacity-80">Experience technologies in real-time with interactive demonstrations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔬</div>
              <h4 className="text-xl font-bold mb-2">Hands-on Testing</h4>
              <p className="text-sm opacity-80">Test and experiment with cutting-edge technologies yourself</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-xl font-bold mb-2">Real-time Data</h4>
              <p className="text-sm opacity-80">See live performance metrics and real-world applications</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  };
export default InteractiveTechShowcase;
};

export default InteractiveTechShowcase;
